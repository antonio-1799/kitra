const { MoneyValues } = require('../models/index');
const { Op } = require('sequelize');

class MoneyValuesRepository {
  constructor() {
    this.moneyValuesModel = MoneyValues;
  }

  async findTreasuresByTreasureIds({ treasureIds }) {
    return this.moneyValuesModel.findAll({
      attributes: ['treasureId', 'amt'],
      where: {
        treasureId: {
          [Op.in]: treasureIds,
        },
      },
    });
  }
}

module.exports = MoneyValuesRepository;
