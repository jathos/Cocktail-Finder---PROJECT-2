const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const cocktailsCtrl = require('../controllers/cocktails');

router.get('/', cocktailsCtrl.showAll);

module.exports = router;