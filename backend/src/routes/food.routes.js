const express = require('express');
const foodController = require('../controllers/food.controller')
const authfoodMiddleware = require("../middlewares/auth.middleware")
const router = express.Router();
const multer = require('multer')

const upload = multer({
    storage: multer.memoryStorage()
})


router.post("/", authfoodMiddleware.authfoodPartnerMiddleware, upload.single('video'),foodController.createFood)


module.exports = router