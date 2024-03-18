const express = require('express');
const GeolocationController = require('../controllers/geolocation.controller');
const schemaValidator = require('../middlewares/schema-validator.middleware');
const {
  geolocationSchema,
} = require('../utils/validations/geolocation.validation');
const { withJWTAuthMiddleware } = require('express-kun');
const { SECRET_KEY } = require('../common/constants');
const authMiddleware = require('../middlewares/auth.middleware');

const geolocationController = new GeolocationController();

const geolocationRouter = express.Router();
const protectedGeolocationRouter = withJWTAuthMiddleware(
  geolocationRouter,
  SECRET_KEY,
);

protectedGeolocationRouter.post(
  '/',
  schemaValidator(geolocationSchema),
  authMiddleware(),
  (req, res) => geolocationController.findAllTreasures(req, res),
);

module.exports = geolocationRouter;
