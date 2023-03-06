const {findAllErrorService,addLogErrorService} = require("../services/errorService");

const addLogError = async (req, res, next) => {
  try {
    const response = await addLogErrorService(req.body);
    return res.status(response.code).json(response);
  } catch (err) {
    next(err);
  }
};

const findAllError = async (req, res,next) => {
  try {
    const response = await findAllErrorService(req.query);
    return res.status(response.code).json(response);
  } catch (err) {
    next(err);
  }
};

module.exports = { addLogError, findAllError };
