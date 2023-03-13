const { addUserService, findUserService, userLoginService, userLogoutService, sendResetPasswordEmailService, updateUserService } = require('../services/userService')
const { MESSAGE } = require('../utils/constants')

const addUser = async (req, res) => {
  const response = await addUserService(req.body)
  return res.status(response.code).json(response)
}

const findUser = async (req, res) => {
  const response = await findUserService({ _id: req.params.id })
  return res.status(response.code).json(response)
}

const login = async (req, res) => {
  const response = await userLoginService(req.body)
  return res.status(response.code).json(response)
}

const logout = async (req, res) => {
  const response = await userLogoutService(req.tokenData.id, { token: '' })
  return res.status(response.code).json(response)
}

const resetPasswordMail = async (req, res) => {
  const response = await sendResetPasswordEmailService(req.body)
  if (response) {
    return res.status(response.code).json(response)
  } else {
    return res.status(200).json({ message: MESSAGE.MAIL_SENT, code: 200 })
  }
}

const resetPassword = async (req, res) => {
  const response = await updateUserService(req.body, { _id: req.tokenData.id })
  return res.status(response.code).json(response)
}

module.exports = { addUser, findUser, login, logout, resetPasswordMail, resetPassword }
