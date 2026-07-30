'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MealPlanItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MealPlanItems.init({
    meal_plan_id: DataTypes.INTEGER,
    recipe_id: DataTypes.INTEGER,
    day_of_week: DataTypes.INTEGER,
    meal_type: DataTypes.STRING,
    servings: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MealPlanItems',
  });
  return MealPlanItems;
};