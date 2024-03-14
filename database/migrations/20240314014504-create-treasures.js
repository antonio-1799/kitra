'use strict';

const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('treasures', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
      },
      latitude: {
        type: DataTypes.FLOAT(11, 8),
        allowNull: false,
      },
      longitude: {
        type: DataTypes.FLOAT(11, 8),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('treasures');
  },
};