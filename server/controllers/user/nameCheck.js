const findUser = require("./../../modules/findUser");

module.exports = async (req, res) => {
  try {
    const userInfo = await findUser({
      username: req.body.username,
      loginMethod: 0,
    });
    if (!userInfo) {
      return res.status(200).send({ response: "available" });
    }
    return res.status(409).send({ response: "used username" });
  } catch {
    return res.status(409).send({ response: "used username" });
  }
};
