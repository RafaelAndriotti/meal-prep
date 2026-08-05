import ingredientRoutes from "./ingredientsRoutes.js";
import recipesRoutes from "./recipesRoutes.js"

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Ingredients"));
    app.use(ingredientRoutes);
    app.use(recipesRoutes);
};

export default routes 