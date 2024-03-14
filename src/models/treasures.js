const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Treasures extends Model {
    static associate() {
      // This is intentional
    }
  }
  Treasures.init(
    {
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
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Treasures',
      tableName: 'treasures',
    },
  );
  return Treasures;
};
