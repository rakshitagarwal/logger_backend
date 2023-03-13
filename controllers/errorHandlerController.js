const { findAllErrorService, addLogErrorService } = require('../services/errorService')

const addLogError = async (req, res) => {
  const response = await addLogErrorService(req.body)
  return res.status(response.code).json(response)
}

const findAllError = async (req, res) => {
  const response = await findAllErrorService(req.query)
  return res.status(response.code).json(response)
}

module.exports = { addLogError, findAllError }
