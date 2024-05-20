const mongoose = require("mongoose");
const config = require("./config");

connectDB = async () => {
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
    console.log("connected yahoo");
    return dbConnection;
}

const dbConnection = connectDB().then(dbConnection =>{return dbConnection});

module.exports = dbConnection;
