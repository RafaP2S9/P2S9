var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ITGAM',author :"Rafal elizalde" });
});

module.exports = router;
