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

    static async createRecipe(req, res, next){
        try {
            
            const {name, description, servings, prep_time_minutes} = req.body

            const recipe = await Recipes.create(req.body, {
                name, description, servings, prep_time_minutes
            })

            if(!name || !description || !servings || !prep_time_minutes){
                return res.status(404).json({ message: "An argument of recipe not found" })
            }

            return res.status(201).json(recipe)

        } catch (error) {
            next(error)
        }
    }

    static async updateRecipe(req, res, next){

        try {
            const {id} = req.params
            const recipe = await Recipes.findByPk(id)

            if(!recipe){
                return res.status(404).json({message:"Recipe not found"})
            }

            await recipe.update(req.body)
            return res.status(200).json(recipe)
            
        } catch (error) {
            return next(error)
        }

    }

    static async deleteRecipe(req, res, next){

        try {
            
            const {id} = req.params
            const recipe = await Recipes.findByPk(id) 

            if(!recipe){
                return res.status(404).json({message:"Recipe not found"})
            }
            
            await recipe.destroy()
            
            return res.status(204).end()

        } catch (error) {
            return next(error)
        }
    }

}

export default RecipesController