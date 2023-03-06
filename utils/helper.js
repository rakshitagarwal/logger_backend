const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { response } = require("./common");
require("dotenv").config();

exports.tokenGenerator = (payload, expiresIn) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expiresIn || "1d",
  });
  return token;
};

exports.passwordHash = async (payload) => {
  const passoword = await bcrypt.hashSync(payload, 10);
  return passoword;
};

exports.invalidPathHandler = (req, res) => {
  return res.status(400).json({ message: "Invalid path", code: 400 });
};
