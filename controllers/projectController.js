const {
  addProjectService,
  findProjectService,
  deleteProjectService,
  FindAllProjectService,
  updateProjectService,
} = require("../services/projectService");

const addProject = async (req, res, next) => {
  try {
    const response = await addProjectService({
      ...req.body,
      userId: req.tokenData.id,
    });
    return res.status(response.code).json(response);
  } catch (err) {
    next(err);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const response = await updateProjectService(
      { _id: req.params.id },
      req.body
    );
    return res.status(response.code).json(response);
  } catch (err) {
    next(err);
  }
};

const findProject = async (req, res, next) => {
  try {
    const response = await findProjectService({ _id: req.params.id });
    return res.status(response.code).json(response);
  } catch (err) {
    next(err);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const response = await deleteProjectService({ _id: req.params.id });
    return res.status(response.code).json(response);
  } catch (err) {
    next(err);
  }
};

const getAllProjectByUserId = async (req, res, next) => {
  try {
    const response = await FindAllProjectService({...req.query,userId:req.tokenData.id});
    return res.status(response.code).json(response);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addProject,
  findProject,
  deleteProject,
  getAllProjectByUserId,
  updateProject
};
