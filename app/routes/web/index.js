const express = require('express')
const router = express.Router()

// admin panel routes
const adminRouter = require('./admin')
router.use('/admin', adminRouter)

// home page routes
const homeRouter = require('./home')
router.use('/', homeRouter)

module.exports = router