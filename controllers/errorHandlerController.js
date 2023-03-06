const {
  findAllErrorService,
  addLogErrorService,
} = require("../services/errorService");

const addLogError = async (req, res) => {
  const errorLog = await addLogErrorService(req.body);
  return res.status(errorLog.code).json(errorLog);
};

const findAllError = async (req, res) => {
  const errorLog = await findAllErrorService(req.query);
  return res.status(errorLog.code).json(errorLog);
};

module.exports = { addLogError, findAllError };
