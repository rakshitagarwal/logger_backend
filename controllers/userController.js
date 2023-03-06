const { addUserService, findUserService, userLoginService,sendResetPasswordEmailService,updateUserService } = require("../services/userService");
const { MESSAGE } = require("../utils/constants");

const addUser = async (req, res, next) => {
  try {
    const response = await addUserService(req.body);
    return res.status(response.code).json(response);
  } catch (err) {
    next(err);
  }
};

const findUser = async (req, res, next) => {
  try {
    const response = await findUserService({ _id: req.params.id });
    return res.status(response.code).json(response);
  }
  catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const response = await userLoginService(req.body);
    return res.status(response.code).json(response);
  } catch (err) {
    next(err);
  }
}

const resetPasswordMail = async (req, res, next) => {
  try {
    const response = await sendResetPasswordEmailService(req.body);
    if(user){
      return res.status(response.code).json(response);
    }else{
      return res.status(200).json({message:MESSAGE.MAIL_SENT,code:200});
    }
  } catch (err) {
    next(err);
  }
}

const resetPassword = async (req, res, next) => {
  try {
    const response = await updateUserService(req.body,{_id:req.tokenData.id});
    return res.status(response.code).json(response);
  } catch (err) {
    next(err);
  }
}


module.exports = { addUser, findUser, login, resetPasswordMail, resetPassword };
