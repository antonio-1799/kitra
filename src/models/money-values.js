const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class MoneyValues extends Model {
    static associate() {
      // This is intentional
    }
  }
  MoneyValues.init(
    {
      treasureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        field: 'treasure_id',
      },
      amt: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'MoneyValues',
      tableName: 'money_values',
    },
  );
  return MoneyValues;
};
