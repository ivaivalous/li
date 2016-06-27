var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'li', doctype: 'html' });
  res.render('public/index.html');
});

module.exports = router;
