const geolib = require('geolib');
const TreasuresRepository = require('../repositories/treasures.repository');
const MoneyValuesRepository = require('../repositories/money-values.repository');
const removeDuplicatesRandomly = require('../utils/removeDuplicatesRandomly');

class GeolocationService {
  constructor() {
    this.treasureRepository = new TreasuresRepository();
    this.moneyValuesRepository = new MoneyValuesRepository();
  }

  #sumOfAllMoney({ arr }) {
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  }

  async findAllTreasures({ latitude, longitude, distance, prizeValue }) {
    const treasureCoordinates = await this.treasureRepository.findAll();
    const minimumDistance = distance * 1000; // Distance given converted to meters
    const closestTreasures = [];

    // Loop all coordinates and calculate distance from the given longitude and latitude
    treasureCoordinates.forEach((treasures) => {
      const coordinateDistance = geolib.getDistance(
        {
          latitude,
          longitude,
        },
        { latitude: treasures.latitude, longitude: treasures.longitude },
      );

      // Push into the new array all closest coordinates
      if (coordinateDistance <= minimumDistance) {
        closestTreasures.push(treasures);
      }
    });

    // Early return when no treasures are found
    if (closestTreasures.length === 0) {
      return {
        treasuresFound: 0,
        totalTreasureAmount: 0,
      };
    }

    const treasureIds = closestTreasures.map(
      (closestTreasure) => closestTreasure.id,
    );

    // Get the number of treasures based on its id and optional prize value
    // Optional filter if prize value is given
    const minimumTreasureAmount = prizeValue ?? null;
    const treasures =
      await this.moneyValuesRepository.findTreasuresByTreasureIds({
        treasureIds,
        minimumTreasureAmount,
      });

    /**
     * If there are multiple treasures inside the array
     * e.g. [{treasureId: 100, amt: 10}, {treasureId: 100, amt: 15}]
     * Remove the duplicate randomly,
     * otherwise retain the minimum amount if prizeValue !== null
     */
    const updatedTreasures = removeDuplicatesRandomly({
      array: treasures,
      isPrizeValue: prizeValue !== null,
    });

    const totalTreasures = updatedTreasures.map(
      (treasuresWithAmount) => treasuresWithAmount.amt,
    );

    return {
      treasuresFound: updatedTreasures,
      totalTreasureAmount: this.#sumOfAllMoney({ arr: totalTreasures }),
    };
  }
}

module.exports = GeolocationService;
