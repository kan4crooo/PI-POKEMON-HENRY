import React from 'react'
import {Link} from "react-router-dom";
import style from "./LandingPage.module.css"


export default function LandingPage() {
  return (
    <div>
      <h1 className={style.title}>Welcome to the Pokepage</h1>
      
      <p>
        <Link to= "/home">
          <button className={style.button}>INGRESAR</button>
        </Link>
      </p>
    </div>
  )
}
