const express = require('express');
const { body} = require('express-validator');
const router = express.Router();
const errorhandling = require('../middlewares/errorhandling');

const RecipeController = require('../controllers/RecipeController');

router.get('',RecipeController.index);
router.post('',
[
 body('title').notEmpty(),
 body('description').notEmpty(),
 body('ingredients').notEmpty().isArray()
]
, errorhandling,RecipeController.store);
router.get('/:id',RecipeController.show);
router.patch('/:id',RecipeController.update);
router.delete('/:id',RecipeController.destroy);

module.exports = router;