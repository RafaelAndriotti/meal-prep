'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MealPlanItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      meal_plan_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MealPlans',
          key: 'id'
        }
      },
      recipe_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Recipes',
          key: 'id'
        }
      },
      day_of_week: {
        type: Sequelize.INTEGER
      },
      meal_type: {
        type: Sequelize.STRING
      },
      servings: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MealPlanItems');
  }
};