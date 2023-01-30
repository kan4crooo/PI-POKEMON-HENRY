const { Router }= require('express');
const {getAllPoke}= require('../controllers/getPokemon');
const { Pokemon, Type }= require('../db');

const pokemonRoutes= Router();

// pokemonRoutes.get("/", async(req, res)=>{
//     try {
        
//         return res.status(200).send(await getAllPoke());
//     } catch (error) {
//         console.log(error)
//         return res.status(404).send("pokemons not found");
//     }
// });


pokemonRoutes.get("/:id", async(req, res)=>{
    const {id}= req.params;
    try {
        const allPoke= await getAllPoke();
        if(id){
            const pokeId= await allPoke.filter((e)=>e.id== id)
            pokeId.length?
            res.status(200).send(pokeId):
            res.status(404).send("pokemon not found")
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
});
pokemonRoutes.get("/", async(req, res)=>{
    const {name}= req.query;

    try {
        const allPoke2= await getAllPoke();
        // console.log(allPoke)
        if(name){
            let pokeByName= await allPoke2.filter((e)=>e.name.toLowerCase()== name.toLowerCase());
            pokeByName.length?
            res.status(200).send(pokeByName):
            res.status(404).send("pokemon not found")
        }else{
            const allPoke3= await getAllPoke();
            return res.status(200).send(allPoke3)
        }
    } catch (error) {
        // res.status(404).send(error.message)
        console.log(error)
    }
});

pokemonRoutes.post("/", async(req, res)=>{
    const {name, hp, attack, defense, speed, height, weight, image, createdInDb, type}= req.body;
    try {
        if(name){
            const allPoke4= await getAllPoke();
            const pokeFind= allPoke4.find((e)=> e.name == name.toLowerCase());
            if(!pokeFind){
                const pokemon= await Pokemon.create({
                    name,
                    hp,
                    attack,
                    defense,
                    speed,
                    height,
                    weight,
                    image,
                    createdInDb,
                    type,
                });
                const typeByDb= await Type.findAll({
                    where:{
                        name: type,
                    }
                });
                pokemon.addType(typeByDb);
                return res.send("the pokemon has created");
            }
            return res.status(404).send(`pokemon ${name} is already exist`)
        }
        if(!name) 
        return res.status(404).send(" name is mandatory")
    } catch (error) {
        res.status(404).send(error.message)
    }
})
module.exports= pokemonRoutes;