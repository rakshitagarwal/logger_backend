const User = require("../models/userModel");

exports.findUserById = async (payload, attribute) => {
  const result = await User.findById(payload, attribute);
  return result;
};

exports.findOneUser = async (payload) => {
  const result = await User.findOne(payload);
  return result;
};

exports.createUser = async (payload) => {
  const result = await User.create(payload);
  return result;
};

exports.updateUser = async (payload) => {
  const result = await User.findByIdAndUpdate(payload);
  return result;
};

exports.deleteUser = async (payload) => {
  const result = await User.findByIdAndDelete(payload);
  return result;
};

exports.findAllUsers = async (payload, option) => {
  const result = await User.find(payload).skip(option.skip).limit(option.limit).sort({updatedAt:-1});
  return result;
};
