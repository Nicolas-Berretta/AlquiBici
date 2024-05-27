const userController = require('../controllers/users');
const {getUserByEmail} = require("../controllers/users");

exports.registerService = async (req, res) => {
    let name = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    if (await userController.getUserByEmail(email)) {
        return res.status(403).send({
            success: false,
            message: "email already associated with an account"
        });
    }

    await userController.createUser(name, email, password).catch(e => {return res.status(500).send(e)});
    return res.status(200).send({
        success: true,
        message: "user successfully created"
    });
}

exports.loginService = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (await userController.login(email, password)) {
        return res.status(200).send({
            success: true,
            email: email
        });
    }
    return res.status(401).send({success: false});
}

exports.getUserService = async (req, res) => {
    let email = req.params.email;
    let user = await getUserByEmail(email).catch(e => {return res.status(500).send(e)});
    return res.status(200).send(user);
}
