const axios = require("axios");

const getTypeDiet = async() => {
    const apiInfoUrlDiet = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=7c5b9197e600403cbc1b9a1b85d7a928&addRecipeInformation=true&number=10")
    const apiInfoDiet = await apiInfoUrlDiet.data.results.map((e)=>{
        return{
            dieta: e.diets
        }
    })
    return apiInfoDiet
} 

const typeDiet = async(req, res)=>{
    const {typeDiet} = req.query;
    const alltypeDiets = await getTypeDiet();
    res.status(200).send(alltypeDiets)
}

module.exports = {
    typeDiet
}