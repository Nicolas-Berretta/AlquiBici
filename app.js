const express = require('express');
const ejs = require('ejs');
const path = require('path');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const {connectDB} = require("./utils/database");
const config = require("./utils/config");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

let mongoUri = 'mongodb://' + config.mongodb.hostname + ':' + config.mongodb.port + '/' + config.mongodb.database;

try {
    await mongoose.connect(mongoUri);
} catch (err) {
    console.log(err.message);
    process.exit(1);
}

const dbConnection = mongoose.connection;

dbConnection.once("open", () => {
    console.log(`Database connected: ${mongoUri}`);
});

dbConnection.on("error", (err) => {
    console.error(`Connection error: ${err}`);
});

await dbConnection.createCollection("works");

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;