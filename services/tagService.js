const { MESSAGE } = require("../utils/constants");
const {success,created, HttpBadRequest}=require("../utils/errorHandler");
const { createTag,countTag,findAllTags} =require('../queries/tagQuery');

const addTextTagService = async (payload) => {
  const result = await createTag(payload);
  if(result) return created(MESSAGE.TAG_ADDED, result);
  return HttpBadRequest(MESSAGE.BAD_REQUEST);
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
  const result = await countTag();
  const errorLog = await findAllTags(filter,{skip,limit:payload.limit});
  return success(MESSAGE.FOUND, {data:errorLog,totalErrData:result,pageNumber:payload.skip+1});
};

module.exports = {
  findTestTagService,
  addTextTagService,
};