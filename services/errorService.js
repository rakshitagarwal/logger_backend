const { MESSAGE } = require('../utils/constants')
const { HttpNotFound, success } = require('../utils/errorHandler')
const { createLog, deleteLogById, countLog, findAllLogs } = require('../queries/logErrorQuery')

const addLogErrorService = async (payload) => {
  const result = await createLog(payload)
  if (result) return success(MESSAGE.LOG_ADDED, result)
  return HttpNotFound(MESSAGE.LOG_NOT_FOUND)
}

const findAllErrorService = async (payload) => {
  let filter = {}
  let skip
  if (payload?.skip) {
    skip = payload.skip * payload.limit
  }
  if (payload?.projectId) {
    filter = {
      projectId: payload.projectId
    }
  }
  if (payload?.search) {
    filter = {
      ...filter,
      message: { $regex: payload.search }
    }
  }
  const result = await countLog({ projectId: payload?.projectId })
  const errorLog = await findAllLogs(filter, { skip, limit: payload.limit })
  return success(MESSAGE.FOUND, { data: errorLog, totalErrData: result, pageNumber: payload.skip + 1 })
}

const deleteErrorService = async (payload) => {
  const result = await deleteLogById(payload)
  if (!result) {
    return HttpNotFound(MESSAGE.LOG_NOT_FOUND)
  } else {
    return success(MESSAGE.DELETE)
  }
}

module.exports = {
  findAllErrorService,
  addLogErrorService,
  deleteErrorService
}
