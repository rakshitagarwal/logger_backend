const { MESSAGE } = require('../utils/constants')
const { HttpNotFound, success, HttpConflictRequest, created } = require('../utils/errorHandler')
const { deleteLogById } = require('../queries/logErrorQuery')
require('dotenv').config()
const crypto = require('crypto')
const {
  findOneProject,
  countProject,
  createProject,
  updateProject,
  deleteProject,
  findAllProjects
} = require('../queries/projectQuery')

const findProjectService = async (payload) => {
  const project = await findOneProject(payload)
  if (!project) {
    return HttpNotFound(MESSAGE.PROJECT_NOT_FOUND)
  } else {
    return success(MESSAGE.PROJECT_FOUND, project)
  }
}

const addProjectService = async (payload) => {
  const existProject = await findOneProject({
    projectName: payload.projectName,
    userId: payload.userId
  })
  if (existProject) {
    return HttpConflictRequest(MESSAGE.PROJECT_EXIST)
  } else {
    payload.slug = payload.projectName.replace(/\s+/g, '-').toLowerCase()
    const project = await createProject(payload)
    return created(MESSAGE.PROJECT_ADDED, project)
  }
}

const updateProjectService = async (projectId, payload) => {
  if (payload?.projectName) {
    payload.slug = payload.projectName.replace(/\s+/g, '-').toLowerCase()
  }
  const project = await updateProject(projectId, payload)
  if (!project) {
    return HttpNotFound(MESSAGE.PROJECT_NOT_FOUND)
  } else {
    return success(MESSAGE.PROJECT_UPDATED)
  }
}

const deleteProjectService = async (payload) => {
  const project = await findOneProject(payload)
  if (!project) {
    return HttpNotFound(MESSAGE.PROJECT_NOT_FOUND)
  } else {
    await deleteLogById({ projectId: payload._id })
    await deleteProject(payload)
    return success(MESSAGE.PROJECT_DELETED)
  }
}

const FindAllProjectService = async (payload) => {
  let filter = {}
  let skip
  if (payload?.skip) {
    skip = payload.skip * payload.limit
  }
  if (payload?.userId) {
    filter = {
      userId: payload.userId
    }
  }
  if (payload?.search) {
    filter = {
      ...filter,
      projectName: { $regex: payload.search }
    }
  }
  const result = await countProject({ userId: payload?.userId })
  const project = await findAllProjects(filter, { skip, limit: payload.limit })
  return success(MESSAGE.FOUND, {
    data: project,
    totalData: result,
    pageNumber: payload.skip + 1
  })
}

const getProjectSecretKey = async (payload) => {
  const project = await findOneProject(payload)
  if (!project) {
    return HttpNotFound('Project not exists')
  } else {
    const secretKey = crypto.createHash('sha1').update(project?.projectName).digest('hex').toLocaleUpperCase()
    await updateProject(payload, { secretKey })
    return success('found successfully', {
      projectId: project.id,
      secretKey,
      url: process.env.ERROR_LOGGER_URL
    })
  }
}

module.exports = {
  addProjectService,
  deleteProjectService,
  findProjectService,
  FindAllProjectService,
  updateProjectService,
  getProjectSecretKey
}
