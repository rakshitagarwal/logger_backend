const jwt = require("jsonwebtoken");
require("dotenv").config();
const { response } = require("../utils/common");
module.exports = async (req, res, next) => {
  try {
    let token = "";
    if (!req.headers.authorization) {
      return res.status(401).json(response("token not found", 401));
    }
    if (req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    } else {
      token = req.headers.authorization;
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.tokenData = decoded;
    next();
  } catch (error) {
    return res.status(401).json(response("Unauthorized", 401));
  }
};
