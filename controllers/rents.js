const database = require('../utils/database');

const Rent = database.collection("rent");

exports.getRentById = async (id) => {
    return await Rent.findOne({_id: id});
}

exports.createRent = async (user, bike) => {
    let rent = {
        userEmail: user.email,
        bikeId: bike._id,
        distance: 0.0,
        active: true
    }

    await Rent.insertOne(rent);
}

exports.returnRent = async (id) => {
    await Rent.findOneAndUpdate({_id: id}, {active: false})
}