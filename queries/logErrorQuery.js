const LoggerError = require('../models/errorModel')
const Project = require('../models/projectModel')
const bson = require('bson')
exports.findLogById = async (payload) => {
  const result = await LoggerError.findById(payload)
  return result
}

exports.findOneLog = async (payload) => {
  const result = await LoggerError.findOne(payload)
  return result
}

exports.countLog = async (payload) => {
  const result = await LoggerError.count(payload)
  return result
}

exports.createLog = async (payload) => {
  const result = await LoggerError.create(payload)
  return result
}

exports.deleteLogById = async (payload) => {
  const result = await LoggerError.deleteMany(payload)
  return result
}

exports.findAllLogs = async (payload, option) => {
  const response = await Project.aggregate([
    { $match: { _id: new bson.ObjectId(payload.projectId) } },
    {
      $lookup: {
        from: 'log_errors',
        localField: '_id',
        foreignField: 'projectId',
        as: 'log_errors'
      }
    },
    {
      $unwind: '$log_errors'
    },
    {
      $match: {
        $or: [
          { 'log_errors.level': { $regex: payload?.message || '', $options: 'i' } },
          { 'log_errors.message': { $regex: payload?.message || '', $options: 'i' } },
          { 'log_errors.service': { $regex: payload?.message || '', $options: 'i' } }

        ]
      }
    },
    {
      $sort: { 'log_errors.createdAt': -1 }
    },
    {
      $skip: option?.skip || 0
    },
    {
      $limit: option?.limit || 10
    },
    {
      $group: {
        _id: '$_id',
        projectName: { $first: '$projectName' },
        log_errors: { $push: '$log_errors' }
      }
    },
    {
      $project: {
        'log_errors.__v': 0,
        'log_errors.projectId': 0
      }
    }
  ])
  return response
}
