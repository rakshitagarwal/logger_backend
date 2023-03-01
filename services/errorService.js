const LogError = require("../models/errorModel");
const {HttpNotFound,success,HttpConflictRequest}=require("../utils/errorHandler");

const addLogErrorService = async (payload) => {
  const result = await LogError.create(payload);
  return success("logs added successfully", result);
};

const findAllErrorService = async (payload) => {
  let filter = {};
  let skip;
  if (payload?.skip) {
    skip = payload.skip * payload.limit;
  }
  if (payload?.projectId) {
    filter = {
      projectId: payload.projectId,
    };
  }
  if (payload?.search) {
    filter = {
      ...filter,
      message: {$regex:payload.search}
    };
  }
  const result = await LogError.count({projectId: payload?.projectId });
  const errorLog = await LogError.find(filter)
    .limit(payload.limit)
    .skip(skip);
  return success("found successfully", {data:errorLog,totalErrData:result,pageNumber:payload.skip+1});
};

const deleteErrorService = async (payload) => {
  const result = await LogError.deleteMany(payload)
  if (!result) {
    return HttpNotFound(`Error log doesn't exist`);
  } else {
    return success('Error log deleted successfully');
  }
}

module.exports = {
  findAllErrorService,
  addLogErrorService,
  deleteErrorService
};
