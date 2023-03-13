const { MESSAGE } = require('../utils/constants')
require('dotenv').config()
const ejs = require('ejs')
const { passwordHash, tokenGenerator, generateKey } = require('../utils/helper')
const { forgetPasswordTemplate, params: forgetPasswordParams } = require('../utils/template/resetPassword')
const { sendEmail } = require('../utils/sendMail')
const {
  findOneUser,
  createUser,
  updateUser,
  findUserById
} = require('../queries/usersQuery')
const {
  HttpNotFound,
  success,
  HttpConflictRequest,
  created
} = require('../utils/errorHandler')
const bcrypt = require('bcrypt')

const findUserService = async (payload) => {
  const user = await findOneUser(payload)
  if (!user) {
    return HttpNotFound(MESSAGE.USER_NOT_FOUND)
  } else {
    return success(MESSAGE.USER_FOUND, user)
  }
}

const addUserService = async (payload) => {
  const existUser = await findOneUser({ email: payload.email })
  if (existUser) {
    return HttpConflictRequest(MESSAGE.USER_EXIST)
  } else {
    payload.password = await passwordHash(payload.password)
    const user = await createUser(payload)
    return created(MESSAGE.USER_ADDED, user)
  }
}

const updateUserService = async (payload, condition) => {
  if (payload?.password) {
    payload.password = await passwordHash(payload.password)
  }
  const user = await updateUser(condition, payload)
  if (!user) {
    return HttpNotFound(MESSAGE.USER_NOT_FOUND)
  } else {
    return success(MESSAGE.USER_UPDATE)
  }
}

const userLoginService = async (payload) => {
  const existUser = await findOneUser({ email: payload.email })
  if (!existUser) {
    return HttpNotFound(MESSAGE.USER_NOT_FOUND)
  } else {
    const isValidPassword = await bcrypt.compareSync(
      payload.password,
      existUser?.password
    )
    if (!isValidPassword) {
      return HttpNotFound(MESSAGE.USER_PASSWORD)
    } else {
      const { publicKey, privateKey } = generateKey
      const options = {
        expiresIn: '2d',
        algorithm: 'RS256'
      }
      const tokenPayload = {
        id: existUser.id
      }
      const token = await tokenGenerator(tokenPayload, privateKey, options)
      await updateUser(existUser.id, {
        token: publicKey
      })
      return success(MESSAGE.USER_LOGIN, { token, data: existUser })
    }
  }
}

const userLogoutService = async (condition, payload) => {
  const existUser = await updateUser(condition, payload)
  if (!existUser) {
    return HttpNotFound(MESSAGE.USER_NOT_FOUND)
  } else {
    return success(MESSAGE.USER_LOGOUT)
  }
}

const sendResetPasswordEmailService = async (payload) => {
  const user = await findOneUser({ email: payload.email })
  if (!user.data) {
    return user
  } else {
    const token = await tokenGenerator({ id: user.data.id }, '10m')
    const resetPasswordLink = `${process.env.RESERT_WEBSITE_LINK}?token=${token}`
    const compiledTemplate = ejs.compile(forgetPasswordTemplate)
    forgetPasswordParams.resetPasswordUrl = resetPasswordLink
    const template = compiledTemplate(forgetPasswordParams)
    const params = {
      to: [payload?.email],
      Subject: MESSAGE.RESET,
      Body: {
        Html: template,
        Text: template
      }
    }
    const resultReponse = await sendEmail(params)
    return resultReponse
  }
}

const getUserTokenService = async (payload) => {
  const token = await findUserById(payload, ['token'])
  return token
}

module.exports = {
  addUserService,
  findUserService,
  userLoginService,
  sendResetPasswordEmailService,
  updateUserService,
  getUserTokenService,
  userLogoutService
}
