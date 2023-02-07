import React from 'react'
import { useState} from 'react'
import {useDispatch} from "react-redux"
import {cleanPokemons, getPokemonByName} from "../actions";
import styles from "./searchBar.module.css"

export default function SearchBar({setCurrentPage}) {
  const dispatch= useDispatch();
  const[name, setName]= useState("");


  function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    setCurrentPage(1);
    dispatch(cleanPokemons(dispatch));
    dispatch(getPokemonByName(name));
    setName("");
  }
  return (
    <form className={styles.backcolor}>
      <input className={styles.searchInput} type= "text" placeholder= 'Search...'
      onChange={e=>{handleInputChange(e)}} value={name}></input>
      <button className={styles.searchButton} type="submit" onClick={e=>handleSubmit(e)}>Search</button>
    </form>
  )
}

