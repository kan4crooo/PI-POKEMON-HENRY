import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getPokemons, orderName, filterCreated, orderByAttack, getAllTypes, filterType } from "../actions";
import Card from "./card";
import Paginado from "./paginado";
import SearchBar from "./searchBar";
import styles from "./home.module.css"


//rfce

export default function Home() {
  const dispatch= useDispatch()
  const tpokemons= useSelector( (state)=>state.allPoke)
  const types= useSelector((state)=>state.types)
  
  const [currentPage, setCurrentPage]= useState(1);
  const [pokemonPerPage, setPokemonPerPage]= useState(12);
  const indexOfLastPokemon= currentPage* pokemonPerPage;
  const indexOfFirstPokemon= indexOfLastPokemon-pokemonPerPage;
  console.log(tpokemons)
  const currentPokemons= tpokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
  const page= (pageNumber)=> {setCurrentPage(pageNumber)};
 

  const [orden, setOrden]= useState("")
  
    useEffect(()=>{
      dispatch(getPokemons())
      dispatch(getAllTypes())
    }, [dispatch])

    const handleClick= (e)=>{
        e.preventDefault();
        dispatch(getPokemons());
    }
   
    function handleSort(e){
      e.preventDefault();
      dispatch(orderName(e.target.value))
      setCurrentPage(1);
      setOrden(` ${e.target.value}`)
    }
    function handleFilterCreated(e){
      dispatch(filterCreated(e.target.value))
    }
    function handleSortAttack(e){
      e.preventDefault();
      dispatch(orderByAttack(e.target.value))
      setCurrentPage(1);
      setOrden(` ${e.target.value}`)
    }
    function handleFilterType(e){
      e.preventDefault();
      dispatch(filterType(e.target.value))
      setCurrentPage(1)
      setOrden(` ${e.target.value}`);
    }

    
  return (
  <div>
      
      <div className={styles.navegation}>

      <button  className={styles.create}>
        <Link className={styles.rutaCreate} to='/create'>Create Pokemon</Link>
      </button>
      <button className={styles.create} onClick={e => { handleClick(e); } }>Reload Pokemons</button>
      </div>
      

    <div className={styles.backcolor}>

        <select  className={styles.filter} onChange={e => { handleSort(e)} }>
          <option>ORDER BY NAME</option>
          <option value="asc">Ascending order</option>
          <option value="desc">Descending order</option>
        </select>
        
        <select  className={styles.filter} onChange={e => { handleSortAttack(e); } }>
          <option>STRENGTH</option>
          <option value="strong">Strong attack</option>
          <option value="weak">Weaker attack</option>
        </select>

        <select  className={styles.filter} onChange={(e) => { handleFilterType(e); } }>
          <option>By Type</option>
          {types?.map((e) => (
            <option value={e.name}>{e.name}</option>))}
        </select>

        <select  className={styles.filter} onChange={e => handleFilterCreated(e)}>
          <option>Creator</option>
          <option value="all">Show all...</option>
          <option value="api">Reals</option>
          <option value="created">Created</option>
        </select>
      </div>
      <SearchBar className={styles.searchBar}/>
      <div>
                {currentPokemons.map((obj) => {
                  return(
                    <div>

                            <Link to ={`/pokemons/${obj.id}`} >
                                    <Card 
                                        name={obj.name}
                                        image={obj.image}
                                        types={obj.types}
                                        id={obj.id}
                                        key={obj.id}
                                        />
                            </Link>
                        </div>
          )
        })
      }
        </div>
        <div>
      </div>
        <Paginado className={styles.pagination}
          pokemonPerPage={pokemonPerPage}
          tpokemons={tpokemons.length}
          key={tpokemons.length}
          page={page}
          />
        </div>
  )
}


