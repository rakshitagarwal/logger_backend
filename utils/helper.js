const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {generateKeyPairSync}=require("crypto");
require("dotenv").config()

exports.tokenGenerator = (payload, expiresIn) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expiresIn || '1d',
  });
  return token;
};

// exports.tokenGenerator = (payload, privateKey, options) => {
//   const token = jwt.sign(payload, privateKey, options);
//   return token;
// };

exports.generateKey= generateKeyPairSync('rsa', {
  modulusLength: 1000,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'},
    privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret 2'
  }
});



exports.passwordHash = async (payload) => {
  const passoword = await bcrypt.hashSync(payload, 10);
  return passoword;
};

