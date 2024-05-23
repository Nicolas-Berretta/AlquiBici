const express = require('express');
const database = require('../utils/database');

const User= database.collection("user")

exports.getUserById = async (id) => {
    return await User.findOne({_id: id});
}

exports.getUserByEmail = async (email) => {
    return await User.findOne({email});
}

exports.createUser = async (name, email, password) => {
    let user = {
        name: name,
        email: email,
        password: password,
        balance: 0
    }
    await User.insertOne(user);
}

exports.login = async (email, password) => {
    let user = await User.findOne({email});
    return user.password === password;
}