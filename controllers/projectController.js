const {
  addProjectService,
  findProjectService,
  deleteProjectService,
  FindAllProjectService,
  updateProjectService,
  getProjectSecretKey
} = require('../services/projectService')

const addProject = async (req, res, next) => {
  const response = await addProjectService({
    ...req.body,
    userId: req.tokenData.id
  })
  return res.status(response.code).json(response)
}

const updateProject = async (req, res) => {
  const response = await updateProjectService(
    { _id: req.params.id },
    req.body
  )
  return res.status(response.code).json(response)
}

const findProject = async (req, res) => {
  const response = await findProjectService({ _id: req.params.id })
  return res.status(response.code).json(response)
}

const deleteProject = async (req, res) => {
  const response = await deleteProjectService({ _id: req.params.id })
  return res.status(response.code).json(response)
}

const getAllProjectByUserId = async (req, res) => {
  const response = await FindAllProjectService({ ...req.query, userId: req?.tokenData?.id })
  return res.status(response.code).json(response)
}

const projectAccessSecretKey = async (req, res) => {
  const response = await getProjectSecretKey({ _id: req.params.id })
  return res.status(response.code).json(response)
}

module.exports = {
  addProject,
  findProject,
  deleteProject,
  getAllProjectByUserId,
  updateProject,
  projectAccessSecretKey
}
