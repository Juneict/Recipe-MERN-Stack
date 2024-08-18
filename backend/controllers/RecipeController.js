const Recipe = require("../models/Recipe");

const RecipeController = {
    index : async(req, res) => {
        let recipes  = await Recipe.find();

        return res.json(recipes);
    },
    show : async(req, res) => {
        try{
            let id = req.params.id;
            let recipe = await Recipe.findById(id);
            return res.json(recipe)
        }catch(e) {
            return res.json({msg : "Recipe not Found"})
        }
    },
    store : async(req, res) => {
        try{
            const {title, description, ingredients} = req.body;
        const recipe = await Recipe.create({
            title,
            description,
            ingredients
        });

        return res.json(recipe);
        }catch(e) {
            return res.status(400).json({msg : "invalid params"});
        }
    },
    update : (req, res) => {
        return res.json({ msg : "Recipes Updated"})
    },
    destroy : (req, res) => {
        return res.json({ msg : "Recipe Delete"})
    }
}

module.exports = RecipeController;