const ApiResponse = require('../utils/ApiResponse');
const GeolocationService = require('../services/geolocation.service');

class GeolocationController {
  constructor() {
    this.geolocationService = new GeolocationService();
    this.response = new ApiResponse();
  }

  async findAllTreasures(req, res) {
    try {
      const { latitude, longitude, distance } = req.body;

      const treasures = await this.geolocationService.findAllTreasures({
        latitude,
        longitude,
        distance,
      });

      const message =
        treasures.treasuresFound === 0
          ? 'No treasures are found, try again.'
          : `Treasures found: ${treasures.treasuresFound.length}`;

      return this.response.success({
        res,
        message,
        data: treasures,
      });
    } catch (e) {
      return this.response.error({ res, err: e.message });
    }
  }
}

module.exports = GeolocationController;
