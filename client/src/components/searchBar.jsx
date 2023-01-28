import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import {cleanPokemons, getPokemonByName} from "../actions";
import styles from "./searchBar.module.css"

export default function SearchBar() {
  const dispatch= useDispatch();
  const[name, setName]= useState("");


  function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(cleanPokemons(dispatch));
    dispatch(getPokemonByName(name));
    setName("");
  }
  return (
    <form>
      <input className={styles.searchInput} type= "text" placeholder= 'Search...'
      onChange={e=>{handleInputChange(e)}} value={name}></input>
      <button className={styles.searchButton} type="submit" onClick={e=>handleSubmit(e)}>Search</button>
    </form>
  )
}

