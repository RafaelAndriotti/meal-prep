import e from 'express';
import IngredientController from '../controllers/IngredientController.js';

const routes = e.Router();

routes.get("/ingredients", IngredientController.getAllIngredients);
routes.post("/ingredients", IngredientController.createIngredient);
routes.get("/ingredients/:id", IngredientController.getIngredientById);
routes.put("/ingredients/:id", IngredientController.updateIngredient);
routes.delete("/ingredients/:id", IngredientController.deleteIngredient);

export default routes