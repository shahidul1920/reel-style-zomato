const userModel = require('../models/user.model')

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
}