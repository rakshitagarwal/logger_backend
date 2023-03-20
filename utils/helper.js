const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { generateKeyPairSync } = require('crypto')
require('dotenv').config()

exports.tokenGenerator = async (payload, privateKey, options) => {
  const token = await jwt.sign(payload, privateKey, options)
  return token
}

exports.generateKey = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
})

exports.passwordHash = async (payload) => {
  const passoword = await bcrypt.hashSync(payload, 10)
  return passoword
}
