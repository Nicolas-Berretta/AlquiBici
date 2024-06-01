const { getAllBikes, getBikeById, createBike} = require("../controllers/bikes");
const { getUserByEmail } = require("../controllers/users");
const { createRent, returnRent, getRentByBikeId } = require("../controllers/rents");

exports.createBikeService = async (req, res) => {
    let ownerEmail = req.body.ownerEmail;
    let price = req.body.price;
    let bikeId = req.body.bikeId;
    await createBike(ownerEmail, price, bikeId).catch(e => res.status(500).send(e));

    return res.status(200).send("bike created successfully");
}

exports.getBikeService = async (req, res) => {
    let bikeId = req.params.bikeId;

    let bike = await getBikeById(bikeId);

    let owner = await getUserByEmail(bike.ownerEmail);

    let rent = await getRentByBikeId(bikeId);

    let bikeData = {
        id: bike.id,
        ownerEmail: bike.ownerEmail,
        ownerName: owner.name,
        distance: bike.distance,
        price: bike.price,
        rented: !!rent,
        renterEmail: rent ? rent.userEmail : "",
        rentDistance: rent ? rent.distance : 0,
    }

    return res.status(200).send(bikeData);
}

exports.getBikesService = async (req, res) => {
    let bikes = await getAllBikes().catch(e => res.status(500).send("error getting bikes"));
    return res.status(200).send(bikes);
}

exports.rentBikeService = async (req, res) => {
    const email = req.body.email;
    const bikeId = req.body.bikeId;

    let bike = await getBikeById(bikeId);

    if (await getRentByBikeId(bikeId) != null) {
        return res.status(400).send({
            success: false,
            message: "bike already rented"
        });
    }

    await createRent(email, bike.id).catch(e => {
        return res.status(500).send(e);
    });
    return res.status(200).send({
        success: true,
        message: "rent successfully created"
    });
}

exports.returnBikeService = async (req, res) => {
    const bikeId = req.body.bikeId;
    await returnRent(bikeId).catch(e => res.status(500).send(e));
    return res.status(200).send({success:true});
}