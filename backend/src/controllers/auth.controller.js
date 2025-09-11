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
        message: 'User registered',
        user:{
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })
}

async function loginUser(req, res){
    const {email, password} = req.body;

    const user = await userModel.findOne({
        email
    })
    if(!user){
        return res.status(400).json({
            message: "invalid user or password"
        })
    }

    const ispassValid = await bcrypt.compare(password, user.password)
    if(!ispassValid){
        return res.status(400).json({
            message: "invalid user or password"
        })
    }
    const token = jwt.sign({
        id: user._id,
    }, "1900ss123")

    res.cookie("token", token)
    res.status(200).json({
        message: "user login successfully",
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })
}



module.exports = {
    registerUser,
    loginUser
}