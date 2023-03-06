const User = require("../models/userModel");
const userSchema = require("../models/user");
const { response } = require("../utils/common");
const { passwordHash, tokenGenerator } = require("../utils/helper");
const bcrypt = require("bcrypt");

const findUserService = async (payload) => {
  const user = await User.findOne({ where: payload });
  if (!user) {
    return response("User not exists", 404);
  } else {
    return response("users found successfully", 200, user);
  }
};

const addUserService = async (payload) => {
  const existUser = await findUserService({ email: payload.email });
  if (existUser?.data) {
    return response("User already exists", 400);
  } else {
    payload.password = await passwordHash(payload.password);
    const user = await User.create(payload);
    return response("user created successfully", 201, user);
  }
};

const userLoginService = async (payload) => {
  const existUser = await findUserService({ email: payload.email });
  if (!existUser.data) {
    return response("User not found", 404);
  } else {
    const isValidPassword = await bcrypt.compareSync(
      payload.password,
      existUser?.data?.password
    );
    if (!isValidPassword) {
      return response("Invalid password", 401);
    } else {
      const tokenPayload = {
        userId: existUser.data.userId,
      };
      const token = await tokenGenerator(tokenPayload);
      console.log(token);
      return response("user logged in successfully", 200, { token, existUser });
    }
  }
};


const findUser =  async(payload)=>{
  const user = await User.findOne({ where: payload });
  if (!user) {
    return response("User not exists", 404);
  } else {
    return response("users found successfully", 200, user);
  }
}

const addUser = async(payload) => {
  const existUser = await findUser({ email: payload.email });
  if (existUser?.data) {
    return response("User already exists", 400);
  } else {
    payload.password = await passwordHash(payload.password);
    const user = await userSchema.save(payload);
    return response("user created successfully", 201, user);
  }
}
module.exports = { addUserService, findUserService, userLoginService };
