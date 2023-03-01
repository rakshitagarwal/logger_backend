const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { ROUTE_PATH } = require("../utils/constants");
const { bodyValidator, paramsValidator  } = require("../middleware/validators")
const authenticate = require("../middleware/authentication")

router.get(ROUTE_PATH.ID_ROUTE,paramsValidator("id"), userController.findUser);
router.post(ROUTE_PATH.BASE, bodyValidator('user'), userController.addUser);
router.post(ROUTE_PATH.LOGIN, bodyValidator('login'), userController.login);
router.post(ROUTE_PATH.RESET_MAIL, bodyValidator('email'), userController.resetPasswordMail);
router.put(ROUTE_PATH.RESET_PASSWORD, bodyValidator('password'), authenticate,userController.resetPassword);


module.exports = router;
