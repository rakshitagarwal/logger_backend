const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { ROUTE_PATH } = require("../utils/constants");

router.get(ROUTE_PATH.ID_ROUTE, userController.findUser);
router.post(ROUTE_PATH.BASE, userController.addUser);
router.post(ROUTE_PATH.LOGIN, userController.login);
module.exports = router;
