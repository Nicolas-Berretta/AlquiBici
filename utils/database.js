const config = require("./config");
const {MongoClient} = require("mongodb");

const mongoUri = 'mongodb://' + config.mongodb.hostname + ':' + config.mongodb.port + '/' + config.mongodb.database;

const client = new MongoClient(mongoUri);

module.exports = client.db(config.mongodb.database);
