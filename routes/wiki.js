const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage.js');
const { Page } = require('../models');

router.get('/', (req, res, next) => {
  next();
});

router.post('/', async (req, res, next) => {
  const { name, email, title, content, status } = req.body;
  // console.log(name, email, title, content, status);
  try {
    // const slug = generateSlug(title);
    const page = await Page.create({
      title,
      content,
      status,
    });
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

// function generateSlug(title) {
//   return title.replace(/\s+/g, '_').replace(/\W/g, '');
// }

// function makeSlugFromTitle(title) {
//   return title.split(' ').join('_')
// }

router.get('/add', (req, res, next) => {
  res.send(addPage());
  next();
});

module.exports = router;
