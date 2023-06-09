const { Router } = require('express');
const recipe = require('../controllers/recipe')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipe", recipe.recipe)


module.exports = router;
