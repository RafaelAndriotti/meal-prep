import e from 'express';
import RecipesController from '../controllers/RecipesController.js';

const routes = e.Router();

routes.get("/recipes", RecipesController.getAllRecipes);
routes.get("/recipes/:id", RecipesController.getRecipeById);

export default routes