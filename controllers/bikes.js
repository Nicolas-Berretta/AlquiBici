const express = require('express');
const database = require('../utils/database');

const Bike = database.collection("bike");

exports.getAllBikes = async () => {
    return await Bike.find().toArray();
}

exports.getBikeById = async (id) => {
    return await Bike.findOne({_id: id});
}

exports.createBike = async (ownerId, price) => {
    let bike = {
        ownerId: ownerId,
        price: price
    }
    await Bike.insertOne(bike);
}
