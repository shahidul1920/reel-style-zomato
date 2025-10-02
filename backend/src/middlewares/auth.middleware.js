const foodPartnerModel = require('../models/foodpartner.model')
const jwt = require('jsonwebtoken');

async  function authfoodPartnerMiddleware(req, res, next){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: 'Authentication Failed'
        })
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded.id);
        
        const foodPartner = await foodPartnerModel.findById(decoded.id);
        console.log(foodPartner);
        
        req.foodPartner = foodPartner

        next()
    }catch(err){
        return res.status(401).json({
            message: "invalid token"
        })
    }





}

module.exports = {
    authfoodPartnerMiddleware
}