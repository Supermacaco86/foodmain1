const axios = require("axios");


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



module.exports = {
    recipe
}