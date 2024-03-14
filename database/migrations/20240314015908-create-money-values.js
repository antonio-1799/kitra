'use strict';

const { DataTypes, Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
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
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: DataTypes.DATE,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('money_values');
  },
};
