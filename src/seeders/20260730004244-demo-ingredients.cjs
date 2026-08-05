'use strict';

const ingredients = [
  // ---------- Carnes, ovos e peixes ----------
  { name: 'Peito de frango grelhado', unit: 'g', calories_per_100g: 165, protein_per_100g: 31.0, carbs_per_100g: 0.0, fat_per_100g: 3.6 },
  { name: 'Coxa de frango assada sem pele', unit: 'g', calories_per_100g: 185, protein_per_100g: 24.0, carbs_per_100g: 0.0, fat_per_100g: 9.5 },
  { name: 'Ovo de galinha cozido', unit: 'g', calories_per_100g: 155, protein_per_100g: 13.0, carbs_per_100g: 1.1, fat_per_100g: 11.0 },
  { name: 'Clara de ovo cozida', unit: 'g', calories_per_100g: 52, protein_per_100g: 11.0, carbs_per_100g: 0.7, fat_per_100g: 0.2 },
  { name: 'Filé de tilápia grelhado', unit: 'g', calories_per_100g: 128, protein_per_100g: 26.0, carbs_per_100g: 0.0, fat_per_100g: 2.7 },
  { name: 'Salmão grelhado', unit: 'g', calories_per_100g: 208, protein_per_100g: 22.0, carbs_per_100g: 0.0, fat_per_100g: 13.0 },
  { name: 'Atum em conserva em água', unit: 'g', calories_per_100g: 116, protein_per_100g: 26.0, carbs_per_100g: 0.0, fat_per_100g: 1.0 },
  { name: 'Sardinha em conserva em óleo', unit: 'g', calories_per_100g: 208, protein_per_100g: 25.0, carbs_per_100g: 0.0, fat_per_100g: 11.0 },
  { name: 'Carne moída de patinho cozida', unit: 'g', calories_per_100g: 190, protein_per_100g: 27.0, carbs_per_100g: 0.0, fat_per_100g: 8.5 },
  { name: 'Alcatra grelhada', unit: 'g', calories_per_100g: 220, protein_per_100g: 28.0, carbs_per_100g: 0.0, fat_per_100g: 11.0 },
  { name: 'Lombo de porco assado', unit: 'g', calories_per_100g: 210, protein_per_100g: 29.0, carbs_per_100g: 0.0, fat_per_100g: 9.5 },
  { name: 'Camarão cozido', unit: 'g', calories_per_100g: 99, protein_per_100g: 24.0, carbs_per_100g: 0.2, fat_per_100g: 0.3 },
  { name: 'Peito de peru defumado fatiado', unit: 'g', calories_per_100g: 110, protein_per_100g: 18.0, carbs_per_100g: 3.5, fat_per_100g: 2.5 },
 
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
      const now = new Date();
      await queryInterface.bulkInsert('Ingredients', 
        
      ingredients.map((item) => ({...item, createdAt: now, updatedAt: now})),
      {}
    );
  },

  async down (queryInterface) {
    
     await queryInterface.bulkDelete('Ingredients', null, {});
     
  }
};
