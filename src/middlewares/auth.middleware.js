const httpStatus = require('http-status');
const { getTokenFromBearer } = require('express-kun');
const jwt = require('jsonwebtoken');
const ApiResponse = require('../utils/ApiResponse');
const UsersRepository = require('../repositories/users.repository');

const response = new ApiResponse();
const usersRepository = new UsersRepository();

const authMiddleware = () => {
  return async (req, res, next) => {
    const token = getTokenFromBearer(req);

    const { id } = jwt.decode(token, { json: true });

    const user = await usersRepository.findOne({ id });
    if (!user) {
      return response.error({
        res,
        err: 'Unauthorized',
        errorMessage: 'Unauthorized',
        statusCode: httpStatus.UNAUTHORIZED,
      });
    }

    // Add user details inside the request body
    req.body.userId = user.id;
    req.body.userName = user.name;

    // Authorized successfully
    return next();
  };
};

module.exports = authMiddleware;
