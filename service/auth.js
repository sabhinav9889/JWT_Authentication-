const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtToken = "Abh@Muma@123456$";
const cookie = require('cookie');
const jwtExpirySeconds = 10;
function setUser(user){
    const cookieOptions = {
        username: user.username,
        email: user.email,
      };
    // const cookieValue = cookie.serialize('jwt', jwtToken, cookieOptions);
    // res.setHeader('content-type', 'application/json');
    // res.setHeader('Set-Cookie', cookieValue);
    return jwt.sign(cookieOptions, jwtToken,{
		algorithm: "HS256",
		expiresIn: jwtExpirySeconds,
	});
}

function getUser(token){
    if(token==null) return null;
    try{
        return jwt.verify(token, jwtToken);
    }
    catch(err){
        return null;
    }
}

module.exports = {setUser, getUser};