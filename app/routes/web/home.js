const express = require('express')
const router = express.Router()

// home controller
const homeController = require('app/http/controllers/home/HomeController')

// Home route
router.get('/', homeController.index.bind(homeController))

module.exports = router