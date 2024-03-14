const express = require('express');
const geolocationRouter = require('./geolocation.router');

const baseRouter = express.Router();

// Add routers here
baseRouter.use('/geolocation', geolocationRouter);

// export default baseRouter;
module.exports = baseRouter;
