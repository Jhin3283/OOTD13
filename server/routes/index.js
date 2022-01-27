var express = require('express');
var router = express.Router();
var mainRouter=require('./main');

/* GET home page. */
router.use('/',mainRouter);

module.exports = router;