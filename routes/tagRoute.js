const express = require("express");
const router = express.Router();
const tegController = require("../controllers/tagController");
const { ROUTE_PATH } = require("../utils/constants");
const {bodyValidate, queryValidate}=require("../middleware/validators")
const bodyValidation=require("../middleware/validators/bodyValidator")
const queryValidation=require("../middleware/validators/queryValiddator")

router.post(ROUTE_PATH.BASE,bodyValidate(bodyValidation.tags), tegController.addTag);
router.get(ROUTE_PATH.BASE,queryValidate(queryValidation.projectPagination), tegController.findAllTag);

module.exports = router;
