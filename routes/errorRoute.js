const asyncRouter = require('express-async-router').AsyncRouter
const router = asyncRouter()
const errorLogController = require('../controllers/errorHandlerController')
const { ROUTE_PATH } = require('../utils/constants')
const { bodyValidate, queryValidate } = require('../middleware/validators')
const bodyValidation = require('../middleware/validators/bodyValidator')
const queryValidation = require('../middleware/validators/queryValiddator')
const authenticate = require('../middleware/authentication')
const secretKeyMiddleware = require('../middleware/secretKeyValidation')

router.post(ROUTE_PATH.BASE, bodyValidate(bodyValidation.logger), secretKeyMiddleware, errorLogController.addLogError)
router.get(ROUTE_PATH.BASE, queryValidate(queryValidation.errLogPagination), authenticate, errorLogController.findAllError)

module.exports = router
