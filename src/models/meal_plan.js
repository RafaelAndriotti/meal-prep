import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class MealPlans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MealPlans.init({
    name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'MealPlans',
    tableName: 'mealPlans'
  });
  return MealPlans;
};