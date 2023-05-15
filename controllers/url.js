const User = require('../models/url');
const jwt = require('jsonwebtoken');
const {setUser, getUser} = require('../service/auth');
const cookie = require('cookie');
const jwtToken = "Abh@Muma@123456$";
const jwtExpirySeconds = 30;

async function getLoginHandlerPost(req, res){
    try{
        var body = req.body;
        var user = {
            userName: body.username,
            password: body.password,
        }
        const result = await User.findOne(user);
        if(result==null) return res.redirect('/login');
        const rslt = setUser(user);
        res.cookie("token", rslt, { maxAge: jwtExpirySeconds * 1000 });
        return res.redirect('/');
    }
    catch(err){
        console.log(err);
        return res.send(null);
    }
}

async function getSingupHandlerPost(req, res){
    var body = req.body;
    var user = {
        userName: body.username,
        email: body.email,
        password: body.password,
    }
    const result = await User.create(user);
    return res.render('login');
}

async function getLoginHandler(req, res){
    return res.render('login');
}

async function getSingupHandler(req, res){
    return res.render('signup');
}

async function getHome(req, res){
    return res.render('home');
}

module.exports = {
    getLoginHandler,
    getLoginHandlerPost,
    getSingupHandlerPost,
    getSingupHandler,
    getHome,
}