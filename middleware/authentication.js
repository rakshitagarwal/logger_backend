const jwt = require('jsonwebtoken')
const { HttpUnauthorized } = require('../utils/errorHandler')
const jwtDecode = require('jwt-decode')
const { MESSAGE } = require('../utils/constants')
const { getUserTokenService } = require('../services/userService')
module.exports = async (req, res, next) => {
  try {
    let publicKey = ''
    let token = ''
    if (!req.headers.authorization) {
      return res.status(401).json(HttpUnauthorized(MESSAGE.UNAUTHORIZED))
    }
    if (req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1]
      const decodedToken = jwtDecode(token)
      publicKey = await getUserTokenService({ _id: decodedToken?.id })
    }
    const decoded = jwt.verify(token, publicKey?.token)
    req.tokenData = decoded
    next()
  } catch (error) {
    return res.status(401).json(HttpUnauthorized(MESSAGE.UNAUTHORIZED))
  }
}
