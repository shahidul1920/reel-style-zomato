const foodModel = require('../models/food.model');
const storageService = require('../services/storage.services')
const {v4:uuid} = require('uuid')

async function createFood(req, res) {
    //console.log(req.foodPartner);
    //console.log(req.body);
    //console.log(req.file);
    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid())
    console.log(fileUploadResult);
    res.send("open ur fuckin eyes")
}

module.exports = {
    createFood
}