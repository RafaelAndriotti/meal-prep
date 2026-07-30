'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meal_Plans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meal_Plans.init({
    name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Meal_Plans',
  });
  return Meal_Plans;
};