const httpStatus = require('http-status');

class ApiResponse {
  async success({ res, message, data = null, statusCode = httpStatus.OK }) {
    return res.status(statusCode).json({
      message,
      data,
    });
  }

  async error({
    res,
    err,
    errorMessage = 'General Exception',
    statusCode = httpStatus.INTERNAL_SERVER_ERROR,
  }) {
    return res.status(statusCode).json({
      message: errorMessage,
      error: err,
    });
  }
}

module.exports = ApiResponse;
