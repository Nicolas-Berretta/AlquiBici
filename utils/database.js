const mongoose = require("mongoose");
const config = require("./config");

exports.connectDB = async () => {
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
}
