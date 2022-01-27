var express = require('express');
var router = express.Router();
var controllers=require('../controllers/post/index')


/* GET users listing. */
router.get('/', controllers.getPost);
router.post('/', controllers.postPost);
router.put('/', controllers.putPost);
router.delete('/', controllers.deletePost);

module.exports = router;
