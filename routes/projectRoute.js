const express = require("express");
const router = express.Router();
const projectController = require('../controllers/projectController');
const {ROUTE_PATH} = require('../utils/constants');
const {bodyValidator,paramsValidator, queryValidator}=require("../middleware/validators")

router.post(ROUTE_PATH.BASE,bodyValidator('project'),projectController.addProject);
router.get(ROUTE_PATH.ID_ROUTE,paramsValidator('id'),projectController.findProject)
router.get(ROUTE_PATH.BASE,queryValidator('projectPagination'),projectController.getAllProjectByUserId)
router.delete(ROUTE_PATH.ID_ROUTE,paramsValidator('id'),projectController.deleteProject)
router.put(ROUTE_PATH.ID_ROUTE,bodyValidator("updatedProject"), projectController.updateProject);

module.exports = router;
