const express = require('express');
const router = express.Router();
const arrays = require('../data/arrays.js');

/* GET home page. */
router.get('/arrays', (req, res, next) => {
  res.send(arrays);
});

module.exports = router;
