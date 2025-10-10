const foodModel = require('../models/food.model');
const storageService = require('../services/storage.services')
const {v4:uuid} = require('uuid')

async function createFood(req, res) {
    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid())
    const foodItems = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id
    })
    res.status(201).json({
        message: 'video uploaded',
        food: foodItems
    })
}

module.exports = {
    createFood
}