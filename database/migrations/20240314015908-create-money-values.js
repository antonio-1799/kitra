'use strict';

const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('money_values', {
      treasure_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
      },
      amt: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('money_values');
  },
};
