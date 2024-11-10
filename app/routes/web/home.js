const express = require('express')
const router = express.Router()

// home controller
const homeController = require('app/http/controllers/home/HomeController')
const loginController = require('app/http/controllers/auth/LoginController')
const registerController = require('app/http/controllers/auth/RegisterController')

// Home route
router.get('/', homeController.renderHomePage)

// Login route
router.get('/login', loginController.showLoginPage)

// Register route
router.get('/register', registerController.showRegisterPage)

// Register Process
router.post('/register', registerController.registerProcess)

module.exports = router