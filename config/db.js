const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const { infoLogger } = require('../utils/logger')
require('dotenv').config()
const db = mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true
  },
  (err) => {
    if (err) throw err
    infoLogger.info({ message: 'Database connected!' })
  }
)

module.exports = db
