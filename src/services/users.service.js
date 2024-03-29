const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');

const UsersRepository = require('../repositories/users.repository');
const ApiResponse = require('../utils/ApiResponse');
const { SECRET_KEY, TOKEN_EXPIRY } = require('../common/constants');

class UsersService {
  constructor() {
    this.usersRepository = new UsersRepository();
    this.response = new ApiResponse();
  }

  async login({ req, res }) {
    const { email, password } = req.body;

    const user = await this.usersRepository.findUser({ email, password });

    if (!user)
      return this.response.error({
        res,
        err: 'Not Found',
        errorMessage: 'User not found!',
        statusCode: httpStatus.NOT_FOUND,
      });

    // Generate token
    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
      },
      SECRET_KEY,
      {
        expiresIn: TOKEN_EXPIRY,
      },
    );

    return this.response.success({
      res,
      message: 'Login successfully',
      data: {
        access_token: token,
      },
    });
  }
}

module.exports = UsersService;
