'use strict';

  const recipes = [
  {
    name: 'Panqueca de Aveia',
    description: 'Panqueca fit feita com aveia, banana e ovos.',
    servings: 2,
    prep_time_minutes: 15,
  },
  {
    name: 'Frango Grelhado com Legumes',
    description: 'Peito de frango grelhado acompanhado de brócolis e cenoura.',
    servings: 1,
    prep_time_minutes: 30,
  },
  {
    name: 'Salada Caesar',
    description: 'Alface romana, croutons, parmesão e molho caesar.',
    servings: 2,
    prep_time_minutes: 20,
  },
  {
    name: 'Omelete de Espinafre',
    description: 'Omelete com três ovos, espinafre e queijo branco.',
    servings: 1,
    prep_time_minutes: 10,
  },
  {
    name: 'Macarrão Integral ao Sugo',
    description: 'Massa integral com molho de tomate caseiro e manjericão.',
    servings: 3,
    prep_time_minutes: 25,
  },
]

module.exports = {
  async up (queryInterface) {     
      const now = new Date();
      await queryInterface.bulkInsert('Recipes', 
        recipes.map((item) => ({...item, createdAt:now,updatedAt:now})),
        {}
      );
  },

  down: async (queryInterface) => {

    await queryInterface.bulkDelete('Recipes', null, {});
  
  }
};
