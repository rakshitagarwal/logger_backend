exports.ROUTE_PATH = {
  BASE: '/',
  LOGIN: '/login',
  LOGOUT: '/logout',
  REGISTER: '/register',
  USER_BASE: '/user',
  ID_ROUTE: '/:id',
  lOG_ERR: '/logs',
  PROJECTS: '/projects',
  RESET_PASSWORD: '/reset-password',
  RESET_MAIL: '/reset-mail',
  TAG_BASE: '/tag'
}

exports.HTTP_CODE = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500
}

exports.MESSAGE = {
  USER_ADDED: 'User added successfully',
  USER_EXIST: 'User already exists',
  USER_LOGIN: 'User logged in successfully',
  USER_LOGOUT: 'User logged out successfully',
  USER_UPDATE: 'User updated successfully',
  USER_FOUND: 'User found',
  USER_NOT_FOUND: 'User not found',
  USER_PASSWORD: 'Invalid password',
  PASSWORD_RESET: 'Pasword is reset successfully',
  RESET: 'Reset password',

  PROJECT_ADDED: 'Project added successfully',
  PROJECT_EXIST: 'Project already exists',
  PROJECT_FOUND: 'Project found',
  PROJECT_NOT_FOUND: 'Project not found',
  PROJECT_UPDATED: 'Project updated successfully',
  PROJECT_DELETED: 'Project deleted successfully',

  TAG_ADDED: 'Tag added successfully',
  TAG_FOUND: 'Tag found successfully',
  TAG_EXIST: 'Tag already exists',
  LOG_ADDED: 'Logs added successfully',
  LOG_FOUND: 'Logs found successfully',
  LOG_NOT_FOUND: 'Logs not found',
  LOG_DELETED: 'Logs deleted successfully',

  FOUND: 'Found successfully',
  NOT_FOUND: 'Not found',
  DELETE: 'Deleted successfully',
  UNAUTHORIZED: 'Unauthorized',
  BAD_REQUEST: 'Bad request',
  MAIL_SENT: 'Mail sent successfully',

  ERROR_OCCURED: 'Error occurred',
  ERROR_INPUT: 'Input not valid',
  ERROR_EMAIL: 'e-mail not valid',
  ERROR_PASSWORD: 'Password incorrect',
  ERROR_INTERNAL: 'Internal server error',
  ERROR_PATH: 'invalid path',
  ERROR_UPDATE: 'Error updating',
  ERROR_DELETE: 'Error deleting',
  ERROR_AUTH: 'Not authorized',
  ERROR_FOUND: 'Not found',
  ERROR_TOKEN: 'Token not found',
  INTERNAL_SERVER_ERROR: 'Internal Server Error'

}
