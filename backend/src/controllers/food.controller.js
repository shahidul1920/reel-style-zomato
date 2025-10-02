const foodModel = require('../models/food.model');

async function createFood(req, res) {
    console.log(req.foodPartner);
    res.send("open ur fuckin eyes")
}

module.exports = {
    createFood
}