const {HttpBadRequest} = require("../../utils/errorHandler");
const { MESSAGE } = require("../../utils/constants");

const bodyValidate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json(HttpBadRequest(error.message || MESSAGE.BAD_REQUEST));
  } else {
    next();
  }
};

const paramsValidate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.params);
  if (error) {
    return res.status(400).json(HttpBadRequest(error.message || MESSAGE.BAD_REQUEST));
  } else {
    next();
  }
}

const queryValidate = (schema) => (req, res, next) => {
  const valid = schema.validate(req.query);
  if (valid.error) {
    return res.status(400).json(HttpBadRequest(valid.error.message || MESSAGE.BAD_REQUEST));
  } else {
    req.query=valid.value;
    next();
  }
};

module.exports = { bodyValidate, paramsValidate, queryValidate };
