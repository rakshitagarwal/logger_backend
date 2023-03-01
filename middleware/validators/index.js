const bodyValidators = require("./bodyValidator");
const queryValidators = require("./queryValiddator");
const paramsValidators = require("./paramsValidator");
const {
  HttpBadRequest,
  HttpInternalError,
} = require("../../utils/errorHandler");

const bodyValidator = (validator) => {
  if (!bodyValidators.hasOwnProperty(validator))
    throw new Error(`'${validator}' validator is not exist`);
  return async function (req, res, next) {
    try {
      const validated = await bodyValidators[validator].validateAsync(req.body);
      req.body = validated;
      next();
    } catch (err) {
      if (err.isJoi)return res.status(400).json(HttpBadRequest(err.message||"Bad Request"));
      return res.status(500).json(HttpInternalError("Internal Server Error"));
    }
  };
};

const paramsValidator = (validator) => {
  if (!paramsValidators.hasOwnProperty(validator))
    throw new Error(`'${validator}' validator is not exist`);
  return async function (req, res, next) {
    try {
      const validated = await paramsValidators[validator].validateAsync(
        req.params
      );
      req.params = validated;
      next();
    } catch (err) {
      if (err.isJoi) return  res.status(400).json(HttpBadRequest(err.message||"Bad Request"));
      return res.status(500).json(HttpInternalError("Internal Server Error"));
    }
  };
};

const queryValidator = (validator) => {
  if (!queryValidators.hasOwnProperty(validator))
    throw new Error(`'${validator}' validator is not exist`);
  return async function (req, res, next) {
    try {
      const validated = await queryValidators[validator].validateAsync(
        req.query
      );
      req.query = validated;
      next();
    } catch (err) {
      if (err.isJoi) return res.status(400).json(HttpBadRequest(err.message||"Bad Request"));
      return res.status(500).json(HttpInternalError("Internal Server Error"));
    }
  };
};

module.exports = { bodyValidator, paramsValidator, queryValidator };
