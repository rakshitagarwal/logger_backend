const User = require("../models/userModel");
require("dotenv").config()
const ejs = require("ejs")
const { passwordHash, tokenGenerator, generateKey } = require("../utils/helper");
const { forgetPasswordTemplate, params: forgetPasswordParams } = require("../utils/template/resetPassword")
const { sendEmail } = require("../utils/sendMail");
const {HttpNotFound,success,HttpConflictRequest,created, HttpBadRequest}=require("../utils/errorHandler")
const bcrypt = require("bcrypt");

const findUserService = async (payload) => {
  const user = await User.findOne(payload);
  if (!user) {
    return HttpNotFound("User not exists");
  } else {
    return success("users found successfully", user);
  }
};

const addUserService = async (payload) => {
  const existUser = await findUserService({ email: payload.email });
  if (existUser?.data) {
    return HttpConflictRequest("User already exists");
  } else {
    payload.password = await passwordHash(payload.password);
    const user = await User.create(payload);
    return created("user created successfully", user);
  }
};

const updateUserService = async (payload, condition) => {
  if (payload?.password) {
    payload.password = await passwordHash(payload.password);
  }
  const user = await User.findByIdAndUpdate(condition, payload)
  if (!user) {
    return HttpNotFound("user not found",)
  } else {
    return success("user updated successfully")
  }
}

const userLoginService = async (payload) => {
  const existUser = await findUserService({ email: payload.email });
  if (!existUser.data) {
    return HttpNotFound("User not found");
  } else {
    const isValidPassword = await bcrypt.compareSync(
      payload.password,
      existUser?.data?.password
    );
    if (!isValidPassword) {
      return HttpNotFound("Invalid password");
    } else {
      const {publicKey, privateKey } = generateKey
      // console.log(publicKey,"++++++++++++++++++++++++++++++++++++++\n")
      // console.log(privateKey)

      const tokenPayload = {
        id: existUser.data.id,
      };
      const token = await tokenGenerator(tokenPayload);
      return success("user logged in successfully", { token, data: existUser?.data });
    }
  }
};

const sendResetPasswordEmailService = async (payload) => {
  const user = await findUserService({ email: payload.email });
  if (!user.data) {
    return user
  } else {
    const token = await tokenGenerator({ id: user.data.id }, '10m')
    const resetPasswordLink = `${process.env.RESERT_WEBSITE_LINK}?token=${token}`;
    const compiledTemplate = ejs.compile(forgetPasswordTemplate)
    forgetPasswordParams.resetPasswordUrl = resetPasswordLink;
    const template = compiledTemplate(forgetPasswordParams);
    const params = {
      to: [payload?.email],
      Subject: 'Reset password',
      Body: {
        Html: template,
        Text: template,
      },
    };
    const result_reponse = await sendEmail(params);
    return result_reponse;
  }

}

module.exports = { addUserService, findUserService, userLoginService, sendResetPasswordEmailService, updateUserService };
