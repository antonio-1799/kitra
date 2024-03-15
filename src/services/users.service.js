const UsersRepository = require('../repositories/users.repository');
const ApiResponse = require('../utils/ApiResponse');
const httpStatus = require('http-status');

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

    return this.response.success({
      res,
      message: 'Login successfully',
      data: user,
    });
  }
}

module.exports = UsersService;
