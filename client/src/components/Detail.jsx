import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getDetailPromise, cleanDetail, cleanPokemons } from "../actions";
import { useEffect } from 'react';
import pokeBolaLoading from "../img/pokeBolaLoading.gif"
import styles from "./detail.module.css"
export default function Detail() {

  const dispatch = useDispatch();
  const {id}= useParams();
  const myPokemon=useSelector((state) => state.pokeDetails) // el pokeDetails viene del reducer 
console.log(myPokemon)
  useEffect(() => {
        
    dispatch(getDetailPromise(id));
}, [dispatch, id])

// useEffect(()=>{
//     dispatch(cleanDetail(dispatch))
// }, [dispatch])
// useEffect(()=>{
//     dispatch(cleanPokemons (dispatch))
// }, [dispatch])

console.log(myPokemon)
  return (
    <div>
       
        {
            myPokemon.length>0?
            <div className={styles.form}>
                <h1>{myPokemon[0].name}</h1>
                <img src= {myPokemon[0].image} alt='' width= '200px' height= '250px'/>
                <h3>Types: {myPokemon[0].types.map(e => e + " ")}</h3>                    
                <h4>Hp: {myPokemon[0].hp}</h4>
                <h4>Attack: {myPokemon[0].attack}</h4>
                <h4>Defense: {myPokemon[0].defense}</h4>
                <h4>Speed: {myPokemon[0].speed}</h4>
                <h4>Height: {myPokemon[0].height}</h4>
                <h4>Weight: {myPokemon[0].weight}</h4>

            </div> 
            : 
            <div>
            <p> Loading your pokemon... </p>  
            <img src={pokeBolaLoading} alt="pokeBolaLoading" height={130} width={130} />
            </div>  
        }   
        <p>
            <Link to='/home' ><button className={styles.buttondetail}>Return</button></Link>
        </p>
    </div>
)

}
