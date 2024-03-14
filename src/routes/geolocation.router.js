const express = require('express');
const GeolocationController = require('../controllers/geolocation.controller');
const schemaValidator = require('../middlewares/schema-validator.middleware');
const {
  geolocationSchema,
} = require('../utils/validations/geolocation.validation');

const geolocationController = new GeolocationController();

const geolocationRouter = express.Router();

geolocationRouter.post('/', schemaValidator(geolocationSchema), (req, res) =>
  geolocationController.findAllTreasures(req, res),
);

module.exports = geolocationRouter;
