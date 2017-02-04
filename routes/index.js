let express = require('express');
let router = express.Router();
let currentDate = new Date();
currentDate = currentDate.toLocaleString();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    
    title: 'Dominic Portfolio Site',
    date: currentDate
  });
});

/* GET about page */
router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About Me' });
});

/* GET contact page */
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
});
module.exports = router;
