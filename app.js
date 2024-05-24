const express = require('express');
const ejs = require('ejs');
const path = require('path');

const viewsRouter = require('./routes/views');
const usersRouter = require('./routes/users');
const bikesRouter = require('./routes/bikes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/views', viewsRouter);
app.use('/users', usersRouter);
app.use('/bikes', bikesRouter);

module.exports = app;