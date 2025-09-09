const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
    const {fullName, email, password} = req.body;

    const isUserExist = await userModel.findOne({
        email
    })

    if(isUserExist){
        return res.status(400).json({
            message: "User Already Exist"
        })
    }
    const hashedPass = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        fullName,
        email,
        password: hashedPass
    })
    const token = jwt.sign({
        id: user._id,
    }, '1900ss123')

    res.cookie("token", token)
    
    res.status(201).json({
        message: 'User registered'
    })
}