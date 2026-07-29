'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ingredients.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    unit: DataTypes.TEXT,
    calories_per_100g: DataTypes.FLOAT,
    protein_per_100g: DataTypes.FLOAT,
    carbs_per_100g: DataTypes.FLOAT,
    fat_per_100g: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Ingredients',
    tableName: 'ingredients',
  });
  return Ingredients;
};