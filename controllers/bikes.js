const express = require('express');
const database = require('../utils/database');
const {getUserById} = require("./users");
const {getBikeById} = require('./bikes');

const Bike = database.collection("bike");

exports.getAllBikes = async () => {
    let bikes = await Bike.find().toArray();
    let bikesData = [];
    bikes.forEach(bike => {
        bikesData.push(getBikeById(bike._id));
    })
    return bikesData;
}

exports.getBikeById = async (id) => {
    let bike = await Bike.findOne({_id: id});
    let owner = await getUserById(bike.ownerId);

    let bikeData = {
        _id: id,
        ownerId: owner._id,
        ownerName: owner.name,
        price: bike.price,
        distance: bike.distance,
    }
    return await Bike.findOne({_id: id});
}

exports.createBike = async (ownerId, price) => {
    let bike = {
        ownerId: ownerId,
        price: price,
        distance: 0
    }
    await Bike.insertOne(bike);
}
