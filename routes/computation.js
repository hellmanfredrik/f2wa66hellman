var express = require('express');
var router = express.Router();
let x = Math.random();
let str = 'ffff'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Math.log2 applied to " + x + " is " + Math.log2(x));
});

module.exports = router;
