import db from '../models/index.js';

const { Ingredients } = db;
class IngredientController {

    static async getAllIngredients(req, res, next){
        try {
            //Chama o modelo Ingredient para buscar todos os ingredientes no banco de dados, ordenados pelo nome em ordem alfabética.
            const ingredients = await Ingredients.findAll({
                order: [['name', 'ASC']]
            });
            
            return res.status(200).json(ingredients);

        } catch (error) {
            next(error);
        }
    }

    static async getIngredientById(req, res, next){
        try {
            const { id } = req.params;                  // Pega o id do ingrediente a partir dos parâmetros da requisição.
            const ingredient = await Ingredients.findByPk(id) // Busca o ingrediente no banco de dados pelo id usando o método findByPk do modelo Ingredient.

            if (!ingredient) {
                return res.status(404).json({ message: 'Ingredient not found' }); // Se o ingrediente não for encontrado, retorna um status 404 com uma mensagem de erro.
            }

            return res.status(200).json(ingredient); // Se o ingrediente for encontrado, retorna um status 200 com os dados do ingrediente em formato JSON.

        } catch (error) {
            next(error);
        }

    }

    static async createIngredient(req, res, next) {
        try {

            const { name, unit, calories_per_100g, protein_per_100g, carbs_per_100g, fat_per_100g } = req.body; // Pega os dados do ingrediente a partir do corpo da requisição.
            
            const ingredient = await Ingredients.create(req.body, {
                name, unit, calories_per_100g, protein_per_100g, carbs_per_100g, fat_per_100g // Cria um novo ingrediente no banco de dados usando o método Create do modelo Ingredient, passando os dados do corpo da requisição e especificando os campos que podem ser preenchidos.
            })

            return res.status(201).json(ingredient); // Retorna um status 201 com os dados do ingrediente criado em formato JSON.

            } catch (error) {
                next(error);
        } 
    }

    static async updateIngredient(req, res, next) {
        try {
            
            const { id } = req.params; // Pega o id do ingrediente a partir dos parâmetros da requisição.
            const ingredient = await Ingredients.findByPk(id);

            if (!ingredient){
                return res.status(404).json({ erro: 'Ingredient not found' });
            }

            await ingredient.update(req.body);
            return res.status(200).json(ingredient);

        } catch (error) {
            next(error);
        }
    }

    static async deleteIngredient(req, res, next){
        try {
            
            const { id } = req.params
            const ingredient = await Ingredients.findByPk(id);

            if(!ingredient){
                return res.status(404).json({ erro: 'Ingredient not found' });
            }

            await ingredient.destroy()
            return res.status(204).end();

        } catch (error) {
            next(error);
        }
    }

}

export default IngredientController;