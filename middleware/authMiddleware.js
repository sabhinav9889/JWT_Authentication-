const {setUser, getUser} = require('../service/auth');
require('dotenv').config();
const secret = "Abh@Muma@123456$";
const cookie = require('cookie');

async function Middleware (req, res, next){
    try{
        const secretKey = req.cookies.token;
        const verify = getUser(secretKey);
        if(verify) next();
        else return res.render('login');
   }
   catch(err){
        console.log(err);
        return res.status(401).send(err);
   }
}

module.exports = {
    Middleware,
}