const AsyncRouter = require('express-async-router').AsyncRouter
const router = AsyncRouter()
const projectController = require('../controllers/projectController')
const { ROUTE_PATH } = require('../utils/constants')
const { bodyValidate, paramsValidate, queryValidate } = require('../middleware/validators')
const bodyValidation = require('../middleware/validators/bodyValidator')
const queryValidation = require('../middleware/validators/queryValiddator')
const paramsValidation = require('../middleware/validators/paramsValidator')

router.post(ROUTE_PATH.BASE, bodyValidate(bodyValidation.project), projectController.addProject)
router.get(ROUTE_PATH.ID_ROUTE, paramsValidate(paramsValidation.id), projectController.findProject)
router.get(ROUTE_PATH.BASE, queryValidate(queryValidation.projectPagination), projectController.getAllProjectByUserId)
router.delete(ROUTE_PATH.ID_ROUTE, paramsValidate(paramsValidation.id), projectController.deleteProject)
router.put(ROUTE_PATH.ID_ROUTE, bodyValidate(bodyValidation.updatedProject), projectController.updateProject)

module.exports = router
