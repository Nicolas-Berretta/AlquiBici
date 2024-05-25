const database = require('../utils/database');

const Rent = database.collection("rent");

exports.getRentByBikeId = async (bikeId) => {
    return await Rent.findOne({bikeId: bikeId});
}

exports.createRent = async (user, bike) => {
    let rentCount = await Rent.countDocuments().catch(e => console.log("esto no funciona"));
    let rent = {
        rentId: user.email + rentCount,
        userEmail: user.email,
        bikeId: bike.id,
        distance: 0.0,
        active: true
    }

    await Rent.insertOne(rent);
}

exports.returnRent = async (rentId) => {
    await Rent.findOneAndUpdate({id: rentId, active: true}, {active: false})
}