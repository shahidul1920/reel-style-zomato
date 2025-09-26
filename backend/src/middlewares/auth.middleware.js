const foodPartnerModel = require('../models/foodpartner.model')
const jwt = require('jsonwebtoken');

async  function authfoodPartnerMiddleware(req, res, next){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: 'Authentication Failed'
        })
    }
}