const validateToken = require("./../../modules/validateToken");

module.exports = async (req, res) => {
  try {
    const validate = await validateToken.validateToken(
      req.query.loginmethod,
      req.headers.authorization
    );
    if (!validate) return res.status(401).send({ response: "not login" });
    return res.status(200).send({ response: "ok" });
  } catch {
    return res.status(401).send({ response: "not login" });
  }
};
