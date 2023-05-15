const express = require('express');

const app = express();

const {connectToDb} = require('./connection');

const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');

const router = require('./routes/staticRouter');

const url = "mongodb://127.0.0.1:27017/";

const staticRouter = require('./routes/staticRouter');

const userRouter = require('./routes/url');

app.set('view engine', 'ejs');

app.use(cookieParser());

connectToDb(url).then(()=> console.log("connect to db")).catch((err)=>{
    console.log("There is an error to connect to db", err);
});

app.use(express.urlencoded({ extended: false }));

app.use('/', staticRouter);

app.use('/',userRouter);

app.listen(8002, ()=>{
    console.log("app is listening on Port 1000");
});