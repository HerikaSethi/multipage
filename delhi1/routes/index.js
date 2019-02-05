var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/typography', function(req, res, next) {
  res.render('typography', { title: 'Express' });
});


router.get('/components', function(req, res, next) {
  res.render('components', { title: 'Express' });
});


router.get('/icons', function(req, res, next) {
  res.render('icons', { title: 'Express' });
});


router.get('/icon-variations', function(req, res, next) {
  res.render('icon-variations', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});


router.get('/pricingbox', function(req, res, next) {
  res.render('pricingbox', { title: 'Express' });
});


router.get('/porrtfolio-2cols', function(req, res, next) {
  res.render('portfolio-2cols', { title: 'Express' });
});


router.get('/portfoliio-3cols', function(req, res, next) {
  res.render('portfoliio-3cols', { title: 'Express' });
});


router.get('/portfolio-4cols', function(req, res, next) {
  res.render('portfolio-4cols', { title: 'Express' });
});


router.get('/portfolio-detail', function(req, res, next) {
  res.render('portfolio-detail', { title: 'Express' });
});


router.get('/blog-left-sidebar', function(req, res, next) {
  res.render('blog-left-sidebar', { title: 'Express' });
});


router.get('/blog-right-sidebar', function(req, res, next) {
  res.render('blog-right-sidebar', { title: 'Express' });
});


router.get('/post-left-sidebar', function(req, res, next) {
  res.render('post-right-sidebar', { title: 'Express' });
});
















module.exports = router;