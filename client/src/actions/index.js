import axios from 'axios';
export const GET_POKEMONS= 'GET_POKEMONS';
export const GET_ALL_TYPES= 'GET_ALL_TYPES';
export const FILTER_CREATED= "FILTER_CREATED";
export const ORDER_NAME= "ORDER_NAME";
export const FILTER_TYPE= "FILTER_TYPE";
export const ORDER_STR= "ORDER_STR";
export const GET_POKEMON_NAME= "GET_POKEMONS_NAME";
export const POST_POKEMON= "POST_POKEMON";
export const GET_DETAILS= "GET_DETAILS";
export const CLEAN_DETAIL= "CLEAN_ DETAIL";
export const CLEAN_POKEMONS= "CLEAN_POKEMONS";
export const ORDER_BY_ATTACK= "ORDER_BY_ATTACK";


export const getPokemons= ()=>{
    return async(dispatch) =>{
        try {
            // const url= "http://localhost:3001/pokemons";
            let json= await axios.get("http://localhost:3001/pokemons");
            return dispatch({
                type: GET_POKEMONS,
                payload: json.data
            })
        } catch (error) {
           console.log(error);
        };
    };
};

export const cleanPokemons=(dispatch)=>{
    return (dispatch)({
        type: CLEAN_POKEMONS,
        payload:[]
    })
};

export const getAllTypes=()=>{
    return async (dispatch)=>{
        try {
            const url= "http://localhost:3001/types";
            let json= await axios.get(url);
            return dispatch({
                type: GET_ALL_TYPES,
                payload: json.data
            })                  
        } catch (error) {
            console.log(error)
        };
    };
};
///////////////////////////////////////////
export const filterCreated= (payload)=>{
    return {
        type: FILTER_CREATED,
        payload
    };
};


export const orderName= (payload)=>{
    return {
        type: ORDER_NAME,
        payload
    };
};

export const filterType= (payload)=>{
    return {
        type: "FILTER_TYPE",
        payload
    };
};

export const getPokemonByName= (name)=>{
    return async (dispatch)=>{
        try {
            let json= await axios.get(`http://localhost:3001/pokemons?name=${name}`)
            return dispatch({
                type: GET_POKEMON_NAME,
                payload: json.data
            })
        } catch (error) {
            alert('Pokemon not found')
            console.log(error)
        };
    };
};

export function getDetailPromise(id){
    return async function(dispatch){
        try {
            const json=await axios.get(`http://localhost:3001/pokemons/${id}`)
             return dispatch({
                 type: GET_DETAILS,
                 payload: json.data
             })
        } catch (error) {
            console.log(error)
        }
        
    };
};

export const cleanDetail= (dispatch)=>{
    return dispatch({
        type: CLEAN_DETAIL,
        payload:[]
    });
};

export const postPokemon= (payload)=>{
    return async function(){
        try {
            var createPokemon= await axios.post(`http://localhost:3001/pokemons`, payload);
            console.log("New Pokemon!!!");
            return createPokemon;
        } catch (error) {
            console.log(error);
        }
    };
};

export function orderByAttack(payload){
    return {
        type: ORDER_BY_ATTACK,
        payload
    }
}




//import {getDetailPromise} from "../actions";
// import {useEffect} from "react";
// import pokeBolaLoading from "../img/pokeBolaLoading.gif"