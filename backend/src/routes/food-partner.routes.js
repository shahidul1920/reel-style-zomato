const express = require('express');
const { authUserMiddleware } = require('../middlewares/auth.middleware');
const foodPartnerModel = require('../models/foodpartner.model');

const router = express.Router()

router.get('/:id',
    authUserMiddleware.authUserMiddleware,
    foodPartnerController.getFoodPartnerById
)


module.exports = router;