const modifyPassword = require("./../../modules/modifyPassword");
const validateToken = require("./../../modules/validateToken");

module.exports = async (req, res) => {
  try {
    const userInfo = await validateToken.validateToken(
      "0",
      req.headers.authorization
    );
    await modifyPassword.modifyPassword(userInfo.email, req.body.newPassword);
    return res.status(200).send({ response: "ok" });
  } catch{
    return res.status(401).send({ response: "not authorized" });
  }
};
