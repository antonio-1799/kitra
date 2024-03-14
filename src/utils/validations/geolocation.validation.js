const Joi = require('joi');

const geolocationSchema = Joi.object().keys({
  latitude: Joi.number().min(-90).max(90).required(),
  longitude: Joi.number().min(-180).max(180).required(),
  distance: Joi.number().valid(1, 10).required(),
});

module.exports = { geolocationSchema };
