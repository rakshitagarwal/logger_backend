const { HTTP_CODE } = require("../utils/constants");
const { errorLogger } = require("./logger");
const { MESSAGE } = require("../utils/constants");


const errorHandler = (err, req, res, next) => {
  if (!err) {
    return next();
  }
  errorLogger.error({ message: err });
  return res
    .status(HTTP_CODE.INTERNAL_SERVER_ERROR)
    .json(HttpInternalError(MESSAGE.ERROR_INTERNAL));
};

const invalidPathHandler = (req, res) => {
  return res
    .status(HTTP_CODE.BAD_REQUEST)
    .json(HttpBadRequest(MESSAGE.ERROR_PATH));
};

const success = (message, data) => {
  return { message, code: HTTP_CODE.OK, data };
};
const created = (message, data) => {
  return { message, code: HTTP_CODE.CREATED, data };
};
const HttpNotFound = (payload) => {
  return { message: payload, code: HTTP_CODE.NOT_FOUND };
};
const HttpConflictRequest = (payload)=>{
    return { message: payload, code: HTTP_CODE.CONFLICT };
}
const HttpBadRequest = (payload) => {
  return { message: payload, code: HTTP_CODE.BAD_REQUEST };
};
const HttpUnauthorized = (payload) => {
  return { message: payload, code: HTTP_CODE.UNAUTHORIZED };
};
const HttpInternalError = (payload) => {
  return { message: payload, code: HTTP_CODE.INTERNAL_SERVER_ERROR };
};
module.exports = {
  success,
  created,
  HttpNotFound,
  HttpBadRequest,
  HttpUnauthorized,
  HttpInternalError,
  errorHandler,
  invalidPathHandler,
  HttpConflictRequest
};
