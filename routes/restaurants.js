const express = require('express')
const router = new express.Router()
const restaurantsController=require('../Controller/restaurantsController')


router.get('/home',restaurantsController.home)
router.get('/restaurants',restaurantsController.restaurants)
router.get('/form',restaurantsController.form)
router.post('/enterRestaurants',restaurantsController.enterRestaurants)
module.exports = router;