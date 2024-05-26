const database = require('../utils/database');

const Rent = database.collection("rent");

exports.getRentByBikeId = async (bikeId) => {
    return await Rent.findOne({bikeId: bikeId, active: true});
}

exports.createRent = async (email, bikeId) => {
    let rentCount = await Rent.countDocuments();
    let rentId = email + rentCount;
    let rent = {
        rentId: rentId,
        userEmail: email,
        bikeId: bikeId,
        distance: 0.0,
        active: true
    }

    await Rent.insertOne(rent);
}

exports.returnRent = async (bikeId) => {
    console.log(bikeId);
    let rent = Rent.find({$and: [{bikeId: {bikeId}}, {active: true}]}).toArray();
    console.log(JSON.stringify(rent));
    await Rent.findOneAndUpdate({$and: [{bikeId: {bikeId}}, {active: true}]}, {$set:{active: false}}).catch(e => console.log(e))
}