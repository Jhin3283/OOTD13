const createUser = require("./../../modules/createUser");
const requestTokenGit = require("./../../modules/requestTokenGit");
const requestUserInfoGit = require("./../../modules/requestUserInfoGit");
const findUser = require("./../../modules/findUser");

module.exports = async (req, res) => {
  try {
    const token = await requestTokenGit(req.body.authorizationCode);
    const gitUserInfo = await requestUserInfoGit(token);
    try {
      const userInfo = await findUser({ email: gitUserInfo.email, loginMethod: '1' });
      return res.status(200).send({
        response: "ok",
        data: {
          userInfo: {
            email: userInfo.email,
            username: userInfo.username,
            createdAt: userInfo.createdAt,
            loginMethod: userInfo.login_method,
          },
          accessToken: token
        },
      });
    } catch {
      await createUser.createUser({
        loginMethod: '1',
        email: gitUserInfo.email,
        username: gitUserInfo.username,
      });
      const newUserInfo = await findUser({ email: gitUserInfo.email, loginMethod: '1' });
      return res.status(201).send({
        response: "created",
        data: {
          userInfo: {
            email: newUserInfo.email,
            username: newUserInfo.username,
            createdAt: newUserInfo.createdAt,
            loginMethod: newUserInfo.login_method,
          },
          accessToken: token
        },
      });
    }
  } catch {
    return res.status(401).send({ response: "invalid code" });
  }
};