'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Suit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Suit.belongsTo(models.User, { foreignKey: "userId" });
      // define association here`
    }
  };
  Suit.init({
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    year: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Suit',
  });
  return Suit;
};