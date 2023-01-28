const { default: axios } = require('axios');
const { Router }= require('express');
// const getTypeApi= require('../controllers/getTypes
const { Pokemon, Type }= require('../db');

const typeRoutes= Router();

typeRoutes.get("/", async(req, res)=>{
    try {
        let apiType= await axios.get(`https://pokeapi.co/api/v2/type`);
        let apiTypeInfo= apiType.data;
        let types= apiTypeInfo.results.map(e=>e.name);
        types.forEach(type => {
            Type.findOrCreate({
                where: {
                    name: type,
                }
            });
        });
        const allTypes= await Type.findAll();
        return res.status(200).send(allTypes);
    } catch (error) {
        console.log(error);
    }
})

// typeRoutes.get("/:id", async(req, res)=>{
//     const {id}= req.params;
//     try {
//         if(id){
//             const allTypes= await getTypeApi();
//             const typesId= await allTypes.filter((e)=>e.id== id);
//         typesId.length?
//         res.status(200).send(typesId):
//         res.status(404).send("the type is not found")
//         }
//     } catch (error) {
//         console.log(error)
//     }
// })


module.exports= typeRoutes;