import e from 'express';
import RecipesController from '../controllers/RecipesController.js';

const routes = e.Router();

routes.get("/recipes", RecipesController.getAllRecipes);
routes.get("/recipes/:id", RecipesController.getRecipeById);
routes.post("/recipes", RecipesController.createRecipe);
routes.put("/recipes/:id", RecipesController.updateRecipe);
routes.delete("/recipes/:id", RecipesController.deleteRecipe);

export default routes