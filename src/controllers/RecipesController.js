import db from "../models/index.js"

const { Recipes } = db

class RecipesController {

    static async getAllRecipes (req, res, next) {

        try {
            
            const recipes = await Recipes.findAll({
                order: [['name', 'ASC']]
            })

            return res.status(200).json(recipes)

        } catch (error) {
            next(error)
        }

    }

    static async getRecipeById(req, res, next){
        try {

            const { id } = req.params
            const recipe = await Recipes.findByPk(id)

            if(!recipe){
                return res.status(404).json({ message: "Id not found" })
            }
            
            return res.status(200).json(recipe)

        } catch (error) {
            next (error)
        }

    }

}

export default RecipesController