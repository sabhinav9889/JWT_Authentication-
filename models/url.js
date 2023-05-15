const mongoose = require('mongoose');

const User = new mongoose.Schema({
    userName:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    password:{   
        type: String,
        require: true,
    },
});

const model = new mongoose.model("jwt-auth", User);

module.exports = model;