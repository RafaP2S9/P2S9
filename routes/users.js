var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET users listing. */
router.get('/author', function(_, res) {
  res.send('author',{author:"Rafael"});
});
module.exports = router;
