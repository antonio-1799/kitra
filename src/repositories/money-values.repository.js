const { MoneyValues } = require('../models/index');
const { Op } = require('sequelize');

class MoneyValuesRepository {
  constructor() {
    this.moneyValuesModel = MoneyValues;
  }

  async findTreasuresByTreasureIds({ treasureIds, minimumTreasureAmount }) {
    const query = {
      treasureId: {
        [Op.in]: treasureIds,
      },
      amt: {
        [Op.gt]: minimumTreasureAmount,
      },
    };

    if (!minimumTreasureAmount) delete query.amt;

    return this.moneyValuesModel.findAll({
      attributes: ['treasureId', 'amt'],
      where: query,
    });
  }
}

module.exports = MoneyValuesRepository;
