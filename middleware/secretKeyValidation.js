const { findOneProject } = require('../queries/projectQuery')
const { MESSAGE } = require('../utils/constants')
const { HttpUnauthorized } = require('../utils/errorHandler')
module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json(HttpUnauthorized(MESSAGE.INVALID_SECRET_KEY))
  } if (req.headers.authorization.startsWith('secretKey')) {
    const secret = req.headers.authorization.split(' ')[1]
    const response = await findOneProject({ _id: req.body?.projectId, secretKey: secret })
    if (response) {
      return next()
    }
    return res.status(401).json(HttpUnauthorized(MESSAGE.INVALID_SECRET_KEY))
  }
}
