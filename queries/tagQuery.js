const TextTag = require('../models/textTagModel')

exports.findTagById = async (payload) => {
  const result = await TextTag.findById(payload)
  return result
}

exports.findOneTag = async (payload) => {
  const result = await TextTag.findOne(payload)
  return result
}

exports.countTag = async (payload) => {
  const result = await TextTag.count(payload)
  return result
}

exports.createTag = async (payload) => {
  const result = await TextTag.create(payload)
  return result
}

exports.findAllTags = async (payload, option) => {
  const result = await TextTag.find(payload).skip(option.skip).limit(option.limit).sort({ updatedAt: -1 })
  return result
}
