const { Treasures } = require('../models/index');

class TreasuresRepository {
  constructor() {
    this.treasureModel = Treasures;
  }

  async findAll() {
    return this.treasureModel.findAll();
  }
}

module.exports = TreasuresRepository;
