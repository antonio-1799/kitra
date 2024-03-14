'use strict';

const { treasuresFixtures } = require('./fixtures/treasures-fixtures');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('treasures', treasuresFixtures);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('treasures', null, {});
  },
};
