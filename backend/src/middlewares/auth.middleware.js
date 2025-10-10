const foodPartnerModel = require('../models/foodpartner.model')
const userModel = require('../models/user.model')
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
        console.log(decodedId);      
        const foodPartner = await foodPartnerModel.findById(decodedId);
        console.log(foodPartner);
        
        req.foodPartner = foodPartner

        next()
    }catch(err){
        return res.status(401).json({
            message: "invalid token"
        })
    }
}


const authUserMiddleware = async (req, res, next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message: "Something went wrong, please try login"
        })
    }
    try{
        const decoded = jwt.varify(token, process.env.JWT_SECRET);
        const currentUser = await userModel.findById(decoded);

        const user = currentUser
        next()
    }catch(err){
        return res.status(401).json({
            message: 'token not valid jingalala'
        })
    }
}
module.exports = {
    authfoodPartnerMiddleware
}