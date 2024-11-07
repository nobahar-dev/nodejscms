const express = require('express')
const { route } = require('../api')
const router = express.Router()

// admin controller
const adminController = require('app/http/controllers/admin/AdminController')

// admin home route
router.get('/', adminController.dashboard)

router.get('/courses', adminController.courses)

module.exports = router