const express = require('express');
const foodController = require('../controllers/food.controller')
const authfoodMiddleware = require("../middlewares/auth.middleware")
const router = express.Router();


router.post("/", authfoodMiddleware.authfoodPartnerMiddleware, foodController.createFood)


module.exports = router