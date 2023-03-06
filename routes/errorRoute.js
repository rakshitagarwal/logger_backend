const express = require("express");
const router = express.Router();
const errorLogController = require("../controllers/errorHandlerController");
const { ROUTE_PATH } = require("../utils/constants");

router.post(ROUTE_PATH.BASE, errorLogController.addLogError);
router.get(ROUTE_PATH.BASE, errorLogController.findAllError);

module.exports = router;
