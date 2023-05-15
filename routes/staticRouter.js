const express = require('express');

const router = express.Router();

const {getLoginHandler, getSingupHandler, getHome} = require('../controllers/url');

const  {Middleware}= require('../middleware/authMiddleware');

router.get('/login', getLoginHandler);

router.get('/signup', getSingupHandler);

router.get('/' , Middleware,  getHome);

module.exports = router;