const findUser = require("./../../modules/findUser");

module.exports = async (req, res) => {
  try {
    const userInfo = await findUser({ email: req.body.email, loginMethod: 0 });
    if (!userInfo) {
      return res.status(200).send({ response: "available" });
    }
    return res.status(409).send({ response: "used email" });
  } catch {
    return res.status(409).send({ response: "used email" });
  }
};
