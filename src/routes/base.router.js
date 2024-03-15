const express = require('express');
const geolocationRouter = require('./geolocation.router');
const usersRouter = require('./users.router');

const baseRouter = express.Router();

// Add routers here
baseRouter.use('/geolocation', geolocationRouter);
baseRouter.use('/users', usersRouter);

// export default baseRouter;
module.exports = baseRouter;
