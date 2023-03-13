const nodemailer = require('nodemailer')
const { MESSAGE } = require('../utils/constants')
const { HttpInternalError, success } = require('./errorHandler')
const sendEmail = async ({ to = [], Subject = '', Body = { Html: '', Text: '' } }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD
    },
    port: 465,
    host: 'smtp.gmail.com'
  })

  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to,
    subject: Subject,
    text: Body?.Text,
    html: Body?.Html
  }

  return await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return HttpInternalError(MESSAGE.INTERNAL_SERVER_ERROR)
    } else {
      return success(MESSAGE.MAIL_SENT)
    }
  })
}

module.exports = { sendEmail }
