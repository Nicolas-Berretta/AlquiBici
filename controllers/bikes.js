const express = require('express');
const database = require('../utils/database');
const {getUserById} = require("./users");
const mongoose = require("mongoose");

const Bike = database.collection("bike");

exports.getAllBikes = async () => {
    return await Bike.find().toArray();
}

exports.getBikeById = async (id) => {
    let bike = await Bike.findOne({_id: mongoose.Types.ObjectId(id)});
    let owner = await getUserById(bike.ownerId);

    return {
        _id: id,
        ownerId: owner._id,
        ownerName: owner.name,
        price: bike.price,
        distance: bike.distance,
    };
}

exports.createBike = async (ownerId, price) => {
    let bike = {
        ownerId: ownerId,
        price: price,
        distance: 0
    }
    await Bike.insertOne(bike);
}
