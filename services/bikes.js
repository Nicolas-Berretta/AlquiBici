const { getAllBikes, getBikeById, createBike} = require("../controllers/bikes");
const { getUserByEmail } = require("../controllers/users");
const { createRent, getRentById, returnRent} = require("../controllers/rents");

exports.createBikeService = async (req, res) => {
    let ownerId = req.body.ownerId;
    let price = req.body.price;

    await createBike(ownerId, price).catch(e => res.status(500).send(e));

    res.status(200).send("bike created successfully");
}

exports.getBikeService = async (req, res) => {
    let bikeId = req.params.bikeId;

    let bike = await getBikeById(bikeId);

    res.status(200).send(bike);
}

exports.getBikesService = async (req, res) => {
    return await getAllBikes();
}

exports.rentBikeService = async (req, res) => {
    const email = req.body.email;
    const bikeId = req.body.bikeId;

    let user = await getUserByEmail(email);
    let bike = await getBikeById(bikeId);

    await createRent(user, bike).catch(e => res.status(500).send(e));
    res.status(200).send({
        success: true,
        message: "rent successfully created"
    });
}

exports.returnBikeService = async (req, res) => {
    const rentId = req.body.rentId;
    await returnRent(rentId).catch(e => {res.status(500).send(e)});
    res.status(200).send({success:true});
}