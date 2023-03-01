const TextTag = require("../models/testTagModel");
const {success,created}=require("../utils/errorHandler");

const addTextTagService = async (payload) => {
  const result = await TextTag.create(payload);
  return created("Test tag added successfully", result);
};

const findTestTagService = async (payload) => {
  let filter = {};
  let skip;
  if (payload?.skip) {
    skip = payload.skip * payload.limit;
  }
  if (payload?.userId) {
    filter = {
      projectId: payload.projectId,
    };
  }
  if (payload?.search) {
    filter = {
      ...filter,
      tagName: {$regex:payload.search}
    };
  }
  const result = await TextTag.count();
  const errorLog = await TextTag.find(filter)
    .limit(payload.limit)
    .skip(skip);
  return success("found successfully", {data:errorLog,totalErrData:result,pageNumber:payload.skip+1});
};

module.exports = {
  findTestTagService,
  addTextTagService,
};
