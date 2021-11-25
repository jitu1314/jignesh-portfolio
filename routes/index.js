var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page' });
});

router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project Page' });
});

module.exports = router;
