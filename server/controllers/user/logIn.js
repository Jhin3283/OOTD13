const createToken = require("./../../modules/createToken");
const findUser = require("./../../modules/findUser");

module.exports = async (req, res) => {
  const { email, password  } = req.body;
  
  try{
    const userInfo = await findUser({ email: email ,loginMethod:0, password: password});
    if(!userInfo) return res.status(404).send({ response: "login err" });
    console.log(createToken.createToken(userInfo,'@@@@@@@@@@@@@'))
    res.status(200).json({
      data: {
        accessToken: await createToken.createToken(userInfo),
        userInfo: {
          email: userInfo.email,
          username: userInfo.username,
          createdAt: userInfo.createdAt,
          loginMethod: userInfo.login_method,
        },
      },
    });
  }catch{
    return res.status(404).send({ response: "login err" });
  }
};