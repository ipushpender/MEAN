var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json("Hello MEAN STACK From Server");//always send data in json form
});

module.exports = router;
