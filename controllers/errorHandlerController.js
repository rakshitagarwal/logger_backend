const {findAllErrorService,addLogErrorService} = require("../services/errorService");

const addLogError = async (req, res, next) => {
  try {
    const errorLog = await addLogErrorService(req.body);
    return res.status(errorLog.code).json(errorLog);
  } catch (err) {
    next(err);
  }
};

const findAllError = async (req, res,next) => {
  try {
    const errorLog = await findAllErrorService(req.query);
    return res.status(errorLog.code).json(errorLog);
  } catch (err) {
    next(err);
  }
};

module.exports = { addLogError, findAllError };
