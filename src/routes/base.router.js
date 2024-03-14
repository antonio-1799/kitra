const express = require('express');
const treasuresRouter = require('./geolocation.router');
// import { Router } from 'express';
// import treasuresRouter from './geolocation.router.js';

const baseRouter = express.Router();

// Add routers here
baseRouter.use('/geolocation', treasuresRouter);

// export default baseRouter;
module.exports = baseRouter;
