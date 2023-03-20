const express = require('express')
const router = express.Router()
const { ROUTE_PATH } = require('../utils/constants')
const errorRoute = require('./errorRoute')
const projectRoute = require('./projectRoute')
const tagRoute = require('./tagRoute')
const userRoute = require('./userRoute')
const authenticate = require('../middleware/authentication')

router.use(ROUTE_PATH.USER_BASE, userRoute)
router.use(ROUTE_PATH.PROJECTS, authenticate, projectRoute)
router.use(ROUTE_PATH.lOG_ERR, errorRoute)
router.use(ROUTE_PATH.TAG_BASE, authenticate, tagRoute)

module.exports = router
