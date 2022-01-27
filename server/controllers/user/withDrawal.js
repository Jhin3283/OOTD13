const deleteUser = require("./../../modules/deleteUser");
const validateToken = require("./../../modules/validateToken");
const models = require("./../../models");

module.exports = async (req, res) => {
  try{
  const userInfo = await validateToken.validateToken(
    req.query.loginmethod,
    req.headers.authorization
  );
  if (!userInfo) return res.status(401).send({ response: "not authorized" });
  deleteUser
    .deleteUserPost(userInfo.email, req.query.loginmethod)
    .then(() => {
      res.status(204).send({ response: "deleted" });
    })
    .catch(async () => {
        return res.status(401).send({ response: "not authorized" });
    });
  } catch{
    return res.status(401).send({ response: "not authorized" });
  }
};
