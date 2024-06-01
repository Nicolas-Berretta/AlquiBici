const express = require('express');
const database = require('../utils/database');
const {getUserByEmail} = require("./users");

const Bike = database.collection("bike");

exports.getAllBikes = async () => {
    return await Bike.find().toArray();
}

exports.getBikeById = async (id) => {
    let bike = await Bike.findOne({id: id});
    if (!bike) {
        return "error";
    }
    let owner = await getUserByEmail(bike.ownerEmail);
    if (!owner) {
        return "error";
    }

    return {
        id: id,
        ownerEmail: owner.email,
        ownerName: owner.name,
        price: bike.price,
        distance: bike.distance,
    };
}

exports.createBike = async (ownerEmail, price, bikeId) => {
    let bike = {
        id: bikeId,
        ownerEmail: ownerEmail,
        price: price,
        distance: 0
    }
    await Bike.insertOne(bike);
}
