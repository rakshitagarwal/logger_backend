const mongoose = require('mongoose')
const { DTO_OBJECT } = require('../utils/common')
const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  description: {
    type: String
  },
  slug: {
    type: String
  },
  textTag: {
    type: String
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'INACTIVE', 'DELETED'],
    default: 'ACTIVE'
  },
  secretKey: {
    type: String
  }
}, {
  timestamps: true,
  ...DTO_OBJECT
})
module.exports = mongoose.model('Project', projectSchema)
