const express = require("express");
const router = express.Router();
const errorLogController = require("../controllers/errorHandlerController");
const { ROUTE_PATH } = require("../utils/constants");
const {bodyValidator, queryValidator}=require("../middleware/validators")

router.post(ROUTE_PATH.BASE,bodyValidator('logger'), errorLogController.addLogError);
router.get(ROUTE_PATH.BASE,queryValidator("errLogPagination"), errorLogController.findAllError);

module.exports = router;
