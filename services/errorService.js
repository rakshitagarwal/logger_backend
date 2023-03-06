const LogError = require("../models/errorModel");
const { response } = require("../utils/common");
const Op = require("sequelize").Op;

const addLogErrorService = async (payload) => {
  const result = await LogError.create(payload);
  return response("logs added successfully", 201, result);
};

const findAllErrorService = async (payload) => {
  let filter = {};
  let offset;
  if (payload?.offset) {
    offset = payload.offset * payload.limit;
  }
  if (payload?.projectId) {
    filter = {
      projectId: payload.projectId,
    };
  }
  if (payload?.search) {
    filter = {
      ...filter,
      [Op.or]: [{ message: { [Op.like]: `%${payload.search}%` } }],
    };
  }
  const errorLog = await LogError.findAll({
    where: filter,
    offset,
    limit: payload.limit,
  });
  return response("found successfully", 200, errorLog);
};

module.exports = {
  findAllErrorService,
  addLogErrorService,
};
