const Project = require("../models/projectModel");
const projectSchema = require("../models/project");
const LogError = require("../models/errorModel");
const { response } = require("../utils/common");

const findProjectService = async (payload) => {
  const project = await Project.findAll({
    where: payload,
    include: [LogError],
  });
  if (!project) {
    return response("Project not exists", 404);
  } else {
    return response("Project found successfully", 200, project);
  }
};

const addProjectService = async (payload) => {
  const existProject = await findProjectService({
    projectName: payload.projectName,
  });
  if (existProject?.data.length > 0) {
    return response("Project already exists", 400);
  } else {
    const project = await Project.create(payload);
    return response("Project created successfully", 201, project);
  }
};

const updateProjectService = async (projectId, payload) => {
  const project = await Project.update(payload, { where: projectId });
  if(!project){
    return response("Project not exists", 404);
  }else{
    return response("Project updated successfully", 200, project);
  }
};

const deleteProjectService = async (payload) => {
  const project = await Project.destroy({ where: payload });
  if (!project) {
    return response("Project not exists", 404);
  } else {
    return response("Project deleted successfully", 200);
  }
};

const findProject = async (payload) => {
  const project = await projectSchema.findOne({
    where: payload,
    include: [LogError],
  });
  if (!project) {
    return response("Project not exists", 404);
  } else {
    return response("Project found successfully", 200, project);
  }
};

const addProject = async (payload) => {
  console.log(payload);
  const projectName = payload.projectName;
  const description = payload.description;
  const product = new projectSchema({
    projectName: projectName,
    description: description,
    userId: req.user,
  });
  product
    .save()
    .then((result) => {
      console.log(result);
      console.log("Added Product");
      return response("Project created successfully", 201, project);
    })
    .catch((err) => {
      console.log(err);
      return response("Project not created", 400);
    });
};

const updateProject = async (projectId, payload) => {
  const project = await projectSchema.findByIdAndUpdate(payload, { where: projectId });
  if(!project){
    return response("Project not exists", 404);
  }else{
    return response("Project updated successfully", 200, project);
  }
}

const deleteProject = async (payload) => {
  const projectId = payload.projectId;

  const project = await projectSchema.findByIdAndRemove(projectId);
  if (!project) {
    return response("Project not exists", 404);
  } else {
    return response("Project deleted successfully", 200);
  }
};

module.exports = {
  addProjectService,
  deleteProjectService,
  findProjectService,
  updateProjectService,
};
