const { getAllBikes, getBikeById, createBike} = require("../controllers/bikes");
const { getUserByEmail } = require("../controllers/users");
const { createRent, returnRent} = require("../controllers/rents");

exports.createBikeService = async (req, res) => {
    let ownerEmail = req.body.ownerEmail;
    let price = req.body.price;

    await createBike(ownerEmail, price).catch(e => res.status(500).send(e));

    res.status(200).send("bike created successfully");
}

exports.getBikeService = async (req, res) => {
    let bikeId = req.params.bikeId;

    let bike = await getBikeById(bikeId);

    let owner = await getUserByEmail(bike.ownerEmail);

    let bikeData = {
        id: bike.id,
        ownerEmail: bike.ownerEmail,
        ownerName: owner.name,
        distance: bike.distance,
        price: bike.price
    }

    res.status(200).send(bikeData);
}

exports.getBikesService = async (req, res) => {
    let bikes = await getAllBikes().catch(e => res.status(500).send("error getting bikes"));
    res.status(200).send(bikes);
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