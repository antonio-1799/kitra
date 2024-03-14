const express = require('express');
const GeolocationController = require('../controllers/geolocation.controller');

const geolocationController = new GeolocationController();

const geolocationRouter = express.Router();

geolocationRouter.post('/', (req, res) =>
  geolocationController.findAllTreasures(req, res),
);

module.exports = geolocationRouter;
