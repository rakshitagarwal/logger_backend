const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const { ROUTE_PATH } = require("../utils/constants");

router.post(ROUTE_PATH.BASE, projectController.addProject);
router.get(ROUTE_PATH.ID_ROUTE, projectController.findProject);
router.post(ROUTE_PATH.ID_ROUTE, projectController.updateProject);
router.delete(ROUTE_PATH.ID_ROUTE, projectController.deleteProject);

module.exports = router;
