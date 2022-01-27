var express = require('express');
var router = express.Router();
var controllers=require('../controllers/user/index.js')


/* GET users listing. */
router.get('/logout',controllers.logout);
router.post('/login',controllers.logIn);
router.post('/login/github',controllers.githubLogin);
router.post("/signup",controllers.signUp);
router.post('/emailcheck',controllers.emailCheck);
router.post('/namecheck',controllers.nameCheck);
router.delete('/withdrawal',controllers.withDrawal);

module.exports = router;
