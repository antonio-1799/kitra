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
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
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
