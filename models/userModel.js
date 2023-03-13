const mongoose = require('mongoose')
const { DTO_OBJECT } = require('../utils/common')
const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'INACTIVE', 'DELETED'],
    default: 'ACTIVE'
  }
},
{
  timestamps: true,
  ...DTO_OBJECT
}
)

module.exports = mongoose.model('User', userSchema)
