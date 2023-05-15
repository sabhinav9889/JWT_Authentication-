const express = require('express');

const router = express.Router();

const {getLoginHandlerPost, getSingupHandlerPost} = require('../controllers/url');

router.post('/login', getLoginHandlerPost);

router.post('/signup', getSingupHandlerPost);

module.exports = router;