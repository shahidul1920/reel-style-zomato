const foodPartnerModel = require('../models/food.model');

const getFoodPartnerById = async (req, res)=>{
    const foodPartnerId = req.params.id;

    const foodPartner = await foodPartnerModel.findById(foodPartnerId)

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