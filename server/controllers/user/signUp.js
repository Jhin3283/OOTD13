const createUser = require("./../../modules/createUser");

module.exports = async (req, res) => {
  const { email, password, username } = req.body;
  try {  
    await createUser.createUser({
      email: email,
      password: password,
      username: username,
      loginMethod:"0"
    });
    return res.status(201).send({ response: "ok" });
  } catch{
    return res.status(400).send({response:'bad request'})
  }
};
