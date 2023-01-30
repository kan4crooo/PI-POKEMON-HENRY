import React from 'react'
import styles from './paginado.module.css'
export default function Paginado({pokemonPerPage, tpokemons, page}) {
  let pageNumber= [];
  console.log(pokemonPerPage)
  console.log(tpokemons)
  console.log(page)
  for(let i=1; i<=Math.ceil(tpokemons / pokemonPerPage); i++){
    // if(indexOfLastPokemon<tpokemons.length){
    //    currentPage=currentPage+1
    // }
    // console.log(pageNumber.push(i))
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className={styles.page}>
        {pageNumber&&pageNumber.map((number)=>(
          <li className={styles.number}>
            {/* <button prevHandler={prevHandler}>prev</button> */}
            <button onClick={()=>page(number)} className={styles.pageButton}>{number}</button>
            {/* <button nextHandler={nextHandler}>next</button> */}
          </li>
        ))}
      </ul>
    </nav>
  )
}

