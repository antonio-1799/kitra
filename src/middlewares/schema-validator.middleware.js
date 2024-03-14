const httpStatus = require('http-status');
const ApiResponse = require('../utils/ApiResponse');

const response = new ApiResponse();

const schemaValidator = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: true,
    });

    if (error) {
      // Get the first error message
      const { details } = error;
      const message = details[0].message;

      return response.error({
        res,
        err: 'Validation Error',
        errorMessage: message,
        statusCode: httpStatus.UNPROCESSABLE_ENTITY,
      });
    }

    // Validation successful
    return next();
  };
};

module.exports = schemaValidator;
