// const axios = require('axios');
// const { Pokemon, Type }= require("../db.js");

// const getTypeApi= async()=>{
//         const typesRequest= await axios.get(`https://pokeapi.co/api/v2/type`)
//         const typesFromApi= typesRequest.data.results.map(e=>{
//             return {
//                 name:e.name,
//                 id: e.id,
//             }
//         })
//         return typesFromApi;

        
//     }
//     const getTypeDb= async()=>{
//         const dbTypes= Type.findAll()
// }


// module.exports= { getTypeApi }

//-----------------------------------------------------------------------------------------//

// const axios = require('axios');
// const {Type} = require('../db');


// // 1 - ADHIERE LOS TYPES A LA BASE DE DATOS CUANDO EL SERVIDOR ESTA ANDANDO
// const addTypeDb = async () => {
//     try {
//         const allTypes = await Type.findAll()
//         console.log(allTypes, "Todos los tipos")
//         if (allTypes.length > 0) {
//             console.log("entro al if")
//             return null
//         }
//         const reqType = await axios.get(`https://pokeapi.co/api/v2/type`)
//         console.log("Request de tipos") //llamado a la api
//         const resType = reqType.data.results
//         console.log(resType, "Tipos")
//         resType.map(e => {
//             Type.create({
//                 nombre: e.name
//             })
//             /* console.log({name: e.name}) */
//         })

//     } catch (err) {
//         console.log(err)
//     }
// }
// addTypeDb()


// // 2 - LOS TYPES SON TRAIDOS DE LA BASE DE DATOS Y ENVIADOS AL ROUTER
// const getTypeApi = async () => {
//     const result = await Type.findAll();
//     return result;
// }

// module.exports = {
//     getTypeApi
// };