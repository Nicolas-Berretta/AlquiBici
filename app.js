const express = require('express');
const ejs = require('ejs');
const path = require('path');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const {connectDB} = require("./utils/database");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

connectDB().then(() => {console.log("tuki")});

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;