const { addUserService, findUserService, userLoginService,sendResetPasswordEmailService,updateUserService } = require("../services/userService");

const addUser = async (req, res, next) => {
  try {
    const user = await addUserService(req.body);
    return res.status(user.code).json(user);
  } catch (err) {
    next(err);
  }
};

const findUser = async (req, res, next) => {
  try {
    const user = await findUserService({ _id: req.params.id });
    return res.status(user.code).json(user);
  }
  catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await userLoginService(req.body);
    return res.status(user.code).json(user);
  } catch (err) {
    next(err);
  }
}

const resetPasswordMail = async (req, res, next) => {
  try {
    const user = await sendResetPasswordEmailService(req.body);
    if(user){
      return res.status(user.code).json(user);
    }else{
      return res.status(200).json({message:"mail sent successfully",code:200});
    }
  } catch (err) {
    next(err);
  }
}

const resetPassword = async (req, res, next) => {
  try {
    const user = await updateUserService(req.body,{_id:req.tokenData.id});
    return res.status(user.code).json(user);
  } catch (err) {
    next(err);
  }
}


module.exports = { addUser, findUser, login, resetPasswordMail, resetPassword };
