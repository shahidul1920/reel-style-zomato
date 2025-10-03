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
        const decodedId = decoded.id.toString()        
        const foodPartner = await foodPartnerModel.findById(decodedId);
        //console.log(foodPartner);
        
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