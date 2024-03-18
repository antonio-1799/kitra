const { Users } = require('../models/index');

class UsersRepository {
  constructor() {
    this.usersModel = Users;
  }

  async findUser({ email, password }) {
    return this.usersModel.findOne({
      where: {
        email,
        password,
      },
    });
  }

  async findOne({ id }) {
    return this.usersModel.findOne({
      where: {
        id,
      },
    });
  }
}

module.exports = UsersRepository;
