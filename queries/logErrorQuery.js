const LoggerError = require("../models/errorModel");

exports.findLogById = async (payload) => {
  const result = await LoggerError.findById(payload);
  return result;
};

exports.findOneLog = async (payload) => {
  const result = await LoggerError.findOne(payload);
  return result;
};

exports.countLog = async (payload) => {
  const result = await LoggerError.count(payload);
  return result;
};

exports.createLog = async (payload) => {
  const result = await LoggerError.create(payload);
  return result;
};

exports.deleteLogById = async (payload) => {
  const result = await LoggerError.deleteMany(payload);
  return result;
};

exports.findAllLogs = async (payload,option) => {
  const result = await LoggerError.find(payload).skip(option.skip).limit(option.limit).sort({updatedAt:-1})
  return result;
};
