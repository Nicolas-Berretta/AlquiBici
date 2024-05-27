const database = require('../utils/database');

const User= database.collection("user")

exports.getUserByEmail = async (email) => {
    console.log(email);
    console.log(JSON.stringify(await User.findOne({email: email}).catch(e => console.log(e))))
    return await User.findOne({email: email}).catch(e => console.log(e));
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