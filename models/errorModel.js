const mongoose = require('mongoose')
const { DTO_OBJECT } = require('../utils/common')
const logErrorSchema = new mongoose.Schema({
  level: {
    type: String,
    required: true
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Project'
  },
  timestamp: {
    type: Date
  },
  message: {
    type: String,
    required: true
  },
  label: {
    type: String
  },
  service: {
    type: String
  },
  code: {
    type: String
  },
  method: {
    type: String
  },
  stack: {
    type: String
  },
  path: {
    type: String
  }
},
{
  timestamps: true,
  ...DTO_OBJECT
}
)

module.exports = mongoose.model('log_error', logErrorSchema)
