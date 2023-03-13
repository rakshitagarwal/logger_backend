const AsyncRouter = require('express-async-router').AsyncRouter
const router = AsyncRouter()
const userController = require('../controllers/userController')
const { ROUTE_PATH } = require('../utils/constants')
const { bodyValidate, paramsValidate } = require('../middleware/validators')
const authenticate = require('../middleware/authentication')
const bodyValidation = require('../middleware/validators/bodyValidator')
const paramsValidation = require('../middleware/validators/paramsValidator')

router.get(ROUTE_PATH.ID_ROUTE, paramsValidate(paramsValidation.id), userController.findUser)
router.post(ROUTE_PATH.BASE, bodyValidate(bodyValidation.user), userController.addUser)
router.post(ROUTE_PATH.LOGIN, bodyValidate(bodyValidation.login), userController.login)
router.post(ROUTE_PATH.RESET_MAIL, bodyValidate(bodyValidation.email), userController.resetPasswordMail)
router.put(ROUTE_PATH.RESET_PASSWORD, bodyValidate(bodyValidation.password), authenticate, userController.resetPassword)
router.post(ROUTE_PATH.LOGOUT, authenticate, userController.logout)

module.exports = router
