const { addProjectService,findProjectService,deleteProjectService,updateProjectService} = require("../services/projectService");

const addProject = async (req, res) => {
  const user = await addProjectService({...req.body, userId: req.tokenData.userId});
  return res.status(user.code).json(user);
};

const findProject = async (req, res) => {
  const user = await findProjectService({ projectId: req.params.id });
  return res.status(user.code).json(user);
};

const deleteProject = async (req, res) => {
  const project = await deleteProjectService({ projectId: req.params.id });
  return res.status(project.code).json(user);
};

const updateProject = async (req, res) => {
  const project = await updateProjectService({projectId: req.params.id},(req.body))
  return res.status(project?.code).json(project);
}


const addProjectController = async (req, res) => {

}
const findProjectController = async (req, res) => {

}
const deleteProjectController = async (req, res) => {

}
const updateProjectController = async (req, res) => {

}


module.exports = {
  addProject,
  findProject,
  deleteProject,
  updateProject
};
