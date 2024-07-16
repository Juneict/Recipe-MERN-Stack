const RecipeController = {
    index : (req, res) => {
        return res.json({ msg : "Get All Recipes"})
    },
    show : (req, res) => {
        return res.json({ msg : "single recipes"})
    },
    store : (req, res) => {
        return res.json({ msg : "Create a Recipes"})
    },
    update : (req, res) => {
        return res.json({ msg : "Recipes Updated"})
    },
    destroy : (req, res) => {
        return res.json({ msg : "Recipe Delete"})
    }
}

module.exports = RecipeController;