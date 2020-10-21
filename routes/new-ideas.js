var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new-ideas', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  const arr = JSON.parse(fs.readFileSync ('file.json'));
  arr.push(req.body);
  fs.writeFileSync('file.json', JSON.stringify(arr), 'utf-8');
  res.render('list-of-ideas', { arr: arr});
});

module.exports = router;