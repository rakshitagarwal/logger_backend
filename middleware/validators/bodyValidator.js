const Joi2 = require('./inputValidate')
const Joi = require('joi')

const user = Joi.object({
  name: Joi2.name,
  email: Joi2.email.required(),
  password: Joi2.password.required()
})

const login = Joi.object({
  email: Joi2.email.required(),
  password: Joi2.password.required()
})
const project = Joi.object({
  projectName: Joi2.projectName.required(),
  description: Joi2.description,
  textTag: Joi2.textTag.required()
})

const updatedProject = Joi.object({
  projectName: Joi2.projectName,
  description: Joi2.description,
  textTag: Joi2.textTag
})

const logger = Joi.object({
  projectId: Joi2.projectId.required(),
  message: Joi2.messages,
  label: Joi2.label,
  level: Joi2.level,
  timestamp: Joi2.timestamp,
  service: Joi2.service,
  code: Joi2.code,
  method: Joi2.method,
  stack: Joi2.stack,
  path: Joi2.path
})
const email = Joi.object({
  email: Joi2.email.required()
})
const password = Joi.object({
  password: Joi2.password.required()
})

const tags = Joi.object({
  tagName: Joi2.tagName.required()
})

module.exports = { user, login, project, logger, email, password, tags, updatedProject }
