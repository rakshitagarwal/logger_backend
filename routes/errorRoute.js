const express = require("express");
const router = express.Router();
const errorLogController = require("../controllers/errorHandlerController");
const { ROUTE_PATH } = require("../utils/constants");
const {bodyValidate, queryValidate}=require("../middleware/validators")
const bodyValidation=require("../middleware/validators/bodyValidator")
const queryValidation=require("../middleware/validators/queryValiddator")

router.post(ROUTE_PATH.BASE,bodyValidate(bodyValidation.logger), errorLogController.addLogError);
router.get(ROUTE_PATH.BASE,queryValidate(queryValidation.errLogPagination), errorLogController.findAllError);

module.exports = router;
