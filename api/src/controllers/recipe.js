const axios = require("axios");
const { UUIDV4 } = require("sequelize");
const {Recipe} = require ("../db");


const getRecipe = async() => {
    const apiInfoUrl = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=7c5b9197e600403cbc1b9a1b85d7a928&addRecipeInformation=true&number=10") 
    const apiInfo = await apiInfoUrl.data.results.map((e)=>{
        return{
            name: e.title,
            imagen: e.image,
            tipo: e.dishTypes,
            dieta: e.diets,
            resumen: e.summary,
            puntuacion: e.aggregateLikes,
            salud: e.healthScore,
            pasos: e.analyzedInstructions.map((e)=>{
                return{
                    paso: e.steps.map((e)=>{
                        return{
                            paso: e.step
                        }
                    })
                }
            })
        }     
    })
  return apiInfo
}

const recipe = async(req, res)=>{
    const {recipe} = req.query;
    const allRecipes = await getRecipe();
    res.status(200).send(allRecipes)       
}

const createRecipe = async(req, res)=>{
    let { name, imagen, tipo, resumen, puntuacion, salud, pasos } = req.body
    let idv4 = UUIDV4();
    // const dbId = idv4.slice(0, 4);
    let recipeCreated = await Recipe.create({
        id: idv4,
        name: name,
        imagen: imagen,
        tipo: tipo,
        resumen: resumen,
        puntuacion: puntuacion,
        salud: salud,
        pasos: pasos
    })
    // let TypeDiet = await TypeDiet.findAll({
    //     where: {
    //         name: dieta
    //     }
    // })
    // recipeCreated.addTypeDiet(TypeDiet)
    res.status(200).send(recipeCreated)

}



module.exports = {
    recipe, createRecipe
}