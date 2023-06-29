const { Router } = require('express');
const recipe = require('../controllers/recipe')
const typeDiet = require("../controllers/typeDiet")
const {Recipe} = require ("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipe", recipe.recipe)
router.get("/typeDiet", typeDiet.typeDiet)
router.post("/recipe", recipe.createRecipe)


module.exports = router;
