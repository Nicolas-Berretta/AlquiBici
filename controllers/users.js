const database = require('../utils/database');

const User= database.collection("user")

exports.getUserByEmail = async (email) => {
    return await User.findOne({email: email}).catch(e => console.log(e));
}

exports.createUser = async (name, email, password) => {
    let user = {
        name: name,
        email: email,
        password: password,
        isAdmin: false,
        balance: 0
    }
    await User.insertOne(user);
}

exports.login = async (email, password) => {
    let user = await User.findOne({email});
    return user.password === password;
}

exports.addFunds = async (email, funds) => {
    let user = await User.findOne({email});
    await User.findOneAndUpdate({email}, {$set: {balance: +user.balance + +funds}});
}