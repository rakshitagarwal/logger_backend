const { findTestTagService, addTextTagService } = require('../services/tagService')

const addTag = async (req, res) => {
  const response = await addTextTagService(req.body)
  return res.status(response.code).json(response)
}

const findAllTag = async (req, res) => {
  const response = await findTestTagService(req.query)
  return res.status(response.code).json(response)
}

module.exports = { addTag, findAllTag }
