'use strict';

const { moneyValuesFixtures } = require('./fixtures/money-values-fixtures');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('money_values', moneyValuesFixtures);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('money_values', null, {});
  },
};
