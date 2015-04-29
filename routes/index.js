var express = require('express');
var router = express.Router();
var Post = require('../models/post')

/* GET home page. */
router.get('/', function(req, res, next) {
  Post.find(function(err, records){
    res.render('index', {records: records});
  });
});

module.exports = router;
