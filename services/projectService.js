const Project = require("../models/projectModel");
const {HttpNotFound,success,HttpConflictRequest,created, HttpBadRequest}=require("../utils/errorHandler");
const { response } = require("../utils/common");
const { deleteErrorService } = require("./errorService");

const findProjectService = async (payload) => {
  const project = await Project.findOne(payload);
  if (!project) {
    return HttpNotFound('Project not exists')
  } else {
    return success("Project found successfully", project);
  }
};

const addProjectService = async (payload) => {
  const existProject = await findProjectService({
    projectName: payload.projectName,
    userId: payload.userId,
  });
  if (existProject?.data) {
    return HttpConflictRequest("Project already exists");
  } else {
    payload.slug=payload.projectName.replace(/\s+/g, '-').toLowerCase();
    const project = await Project.create(payload);
    return created("Project created successfully", project);
  }
};

const updateProjectService = async (projectId, payload) => {
  const project = await Project.findByIdAndUpdate(projectId, payload);
  if (!project) {
    return HttpBadRequest("Project not exists");
  } else {
    return success("Project updated successfully");
  }
};

const deleteProjectService = async (payload) => {
  const project = await findProjectService(payload);
  if (!project?.data) {
    return HttpBadRequest("Project not exists");
  } else {
    const errorLogs = await deleteErrorService(payload);
    const result = await Project.findByIdAndDelete(payload);
    return success("Project deleted successfully");
  }
};
const FindAllProjectService = async (payload) => {
  let filter = {};
  let skip;
  if (payload?.skip) {
    skip = payload.skip * payload.limit;
  }
  if (payload?.userId) {
    filter = {
      userId: payload.userId,
    };
  }
  if (payload?.search) {
    filter = {
      ...filter,
      projectName: {$regex:payload.search}
    };
  }
  const result = await Project.count({userId: payload?.userId });
  const project = await Project.find(filter)
    .limit(payload.limit)
    .skip(skip);
  return success("found successfully", {
    data: project,
    totalData: result,
    pageNumber: payload.skip + 1,
  });
};


module.exports = {
  addProjectService,
  deleteProjectService,
  findProjectService,
  FindAllProjectService,
  updateProjectService,
};
