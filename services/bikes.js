const { getAllBikes, getBikeById } = require("../controllers/bikes");
const { getUserByEmail } = require("../controllers/users");
const { createRent, getRentById, returnRent} = require("../controllers/rents");

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