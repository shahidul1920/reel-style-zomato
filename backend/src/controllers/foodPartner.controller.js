const foodModel = require('../models/food.model');
const foodPartnerModel = require('../models/foodpartner.model');

const getFoodPartnerById = async (req, res)=>{
    const foodPartnerId = req.params.id;

    const foodPartner = await foodPartnerModel.findById(foodPartnerId)
    //const foodPartner = await foodModel.findById(foodPartnerId)
    //const foodPartner = await foodPartnerModel.find({})

    if(!foodPartner){
        return res.status(404).json({
            messages: "Food Store not found"
        })
    }

    res.status(200).json({
        messages: "Food Partner Found",
        foodPartner
    })
}

module.exports = {
    getFoodPartnerById
}