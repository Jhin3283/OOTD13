const createToken = require("./../../modules/createToken");
const findUser = require("./../../modules/findUser");

module.exports = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userInfo = await findUser({
      email: email,
      loginMethod: 0,
      password: password,
    });
    if (!userInfo) return res.status(404).send({ response: "login err" });
    res.cookie('jwt',await createToken.createToken(userInfo)).status(200).json({
      data: {
        accessToken: await createToken.createToken(userInfo),
        userInfo: {
          email: userInfo.email,
          password: userInfo.password,
          username: userInfo.username,
          createdAt: userInfo.createdAt,
          loginMethod: userInfo.login_method,
        },
      },
    });
  } catch {
    return res.status(404).send({ response: "login err" });
  }
};