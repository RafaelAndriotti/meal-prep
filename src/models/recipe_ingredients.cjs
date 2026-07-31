'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeIngredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RecipeIngredients.init({
    recipe_id: DataTypes.INTEGER,
    ingredient_id: DataTypes.INTEGER,
    quantity: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'RecipeIngredients',
    tableName: 'recipeIngredients'
  });
  return RecipeIngredients;
};