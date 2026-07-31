import ingredientRoutes from "./ingredientsRoutes.js";

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Ingredients"));
    app.use(ingredientRoutes);
};

export default routes