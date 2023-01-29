const axios = require('axios');
const { Pokemon, Type }= require("../db.js");

let url= `https://pokeapi.co/api/v2/pokemon/`;

const getPokeApi= async()=>{
try {
    const pokemonsRequest = await axios.get(url, {
            headers: {"Accept-encoding": "gzip,deflate,compress"},
    });
    const pokemonSubRequest= pokemonsRequest.data.results.map(obj=> axios.get(obj.url));
    const infoFromUrl= await axios.all(pokemonSubRequest);
    let pokemons = infoFromUrl.map(obj => obj.data);
    let pokemonsInfo= pokemons.map(pokemon=>objPokeApi(pokemon))
    return pokemonsInfo
} catch (error) {
    console.log(error);
    return error;
}
};
const objPokeApi= (e)=>{
    const objPokeApi= {
        id: e.id,
        name: e.name,
        health: e.stats[0].base_stat,
        attack: e.stats[1].base_stat,
        defense: e.stats[2].base_stat,
        speed: e.stats[5].base_stat,
        height: e.height,
        weight:e.weight,
        image: e.sprites.other.home.front_default,
        types: e.types.length< 2? [e.types[0].type.name]: [e.types[0].type.name, e.types[1].type.name],
    };
    return objPokeApi
};

const getPokeFromDb= async()=>{
    const pokemonDb= await Pokemon.findAll({
        include:Type
    });
    const objPokeDb= pokemonDb.map(pokemonDb=>{
        return {
            id: pokemonDb.dataValues.ID,
            name: pokemonDb.dataValues.name,
            health: pokemonDb.dataValues.hp,
            attack: pokemonDb.dataValues.attack,
            defense: pokemonDb.dataValues.defense,
            speed: pokemonDb.dataValues.speed,
            height: pokemonDb.dataValues.height,
            weight: pokemonDb.dataValues.weight,
            image: pokemonDb.dataValues.image,
            types: pokemonDb.dataValues.types?.map(e=>e.name),
            createdInDb: pokemonDb.dataValues.createdInDb
        };
    })
    try {
        return objPokeDb
    } catch (error) {
        console.log(error);
    }
}

const getAllPoke= async()=>{
    try {
        const apiPokeData= await getPokeApi();
        const dbPokeData= await getPokeFromDb();
        return [...apiPokeData, ...dbPokeData];
    } catch (error) {
        console.log(error);
        return error;
    }
};


module.exports= { getAllPoke,  }


