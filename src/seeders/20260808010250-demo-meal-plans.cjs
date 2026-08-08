'use strict';

const meal_plan= [
      {
        name: 'Dieta Hipertrofia - Fevereiro',
        start_date: '2026-02-01',
        end_date: '2026-02-28',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cutting Pré-Verão',
        start_date: '2026-03-02',
        end_date: '2026-04-26',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manutenção Semanal',
        start_date: '2026-08-03',
        end_date: '2026-08-09',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bulking Limpo - Q3',
        start_date: '2026-07-01',
        end_date: '2026-09-30',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Semana de Meal Prep - Teste',
        start_date: '2026-08-10',
        end_date: '2026-08-16',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

module.exports = {
  async up(queryInterface){
    const now = new Date()
    await queryInterface.bulkInsert('MealPlans',
      meal_plan.map((item) => ({...item, createdAt:now, updatedAt:now})),
      {}
    );
  },

  async down (queryInterface) {
    
     await queryInterface.bulkDelete('MealPlans', null, {});
     
  }
};
