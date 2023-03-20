const Project = require('../models/projectModel')

exports.findProjectById = async (payload) => {
  const result = await Project.findById(payload)
  return result
}

exports.findOneProject = async (payload) => {
  const result = await Project.findOne(payload)
  return result
}

exports.countProject = async (payload) => {
  const result = await Project.count(payload)
  return result
}

exports.createProject = async (payload) => {
  const result = await Project.create(payload)
  return result
}

exports.updateProject = async (projectId, payload) => {
  const result = await Project.findByIdAndUpdate(projectId, payload)
  return result
}

exports.deleteProject = async (payload) => {
  const result = await Project.findByIdAndDelete(payload)
  return result
}

exports.findAllProjects = async (payload, option) => {
  const result = await Project.find(payload).skip(option?.skip).limit(option?.limit).sort({ updatedAt: -1 })
  return result
}
