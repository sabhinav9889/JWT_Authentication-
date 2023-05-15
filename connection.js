const mongoose = require('mongoose');

const url =  "mongodb://127.0.0.1:27017/jwt-auth";

async function connectToDb(url){
    return mongoose.connect(url);
}

module.exports = {
    connectToDb,
}