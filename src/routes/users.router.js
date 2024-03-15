const express = require('express');
const UsersController = require('../controllers/users.controller');

const usersController = new UsersController();

const usersRouter = express.Router();

usersRouter.post('/login', (req, res) => usersController.login(req, res));

module.exports = usersRouter;
