var express = require('express');
var router = express.Router();
var controllers=require('../controllers/main/main');

/* GET users listing. */
router.get('/',controllers.main);

module.exports = router;
