const express = require('express');

const router = express.Router();

const RecipeController = require('../controllers/RecipeController');

router.get('',RecipeController.index);
router.post('',RecipeController.store);
router.get('/:id',RecipeController.show);
router.patch('/:id',RecipeController.update);
router.delete('/:id',RecipeController.destroy);

module.exports = router;