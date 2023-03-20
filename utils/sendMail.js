const nodemailer = require('nodemailer')
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
      return HttpInternalError('Internal server error')
    } else {
      return success('mail send')
    }
  })
}

module.exports = { sendEmail }
