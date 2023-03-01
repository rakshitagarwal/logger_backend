const express = require("express");
const router = express.Router();
const tegController = require("../controllers/tagController");
const { ROUTE_PATH } = require("../utils/constants");
const {bodyValidator, queryValidator}=require("../middleware/validators")

router.post(ROUTE_PATH.BASE,bodyValidator('tags'), tegController.addTag);
router.get(ROUTE_PATH.BASE,queryValidator("projectPagination"), tegController.findAllTag);

module.exports = router;
