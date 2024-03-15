const UsersService = require('../services/users.service');

class UsersController {
  constructor() {
    this.usersService = new UsersService();
  }

  async login(req, res) {
    try {
      return this.usersService.login({ req, res });
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = UsersController;
