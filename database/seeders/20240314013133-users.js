'use strict';

const { userFixtures } = require('./fixtures/users-fixtures');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('users', userFixtures);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
