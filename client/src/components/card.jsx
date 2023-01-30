import React from 'react'
import styles from "./card.module.css";
import noImage from '../img/noImage.png';

export default function Card({name, image, id, types }) {


  // console.log(name, types, image)
  return (
<div className={styles.container}>

    <div  className={styles.card}>
      <img src={image?image: noImage} alt="Img not found"/>
      <h2 className={styles.h2}>{name}</h2>
           <div className={styles.types}>
            {types?.map((e)=>{
              return  (
                <div>
                  <span className={styles.span}>{e}</span>
                </div>
              )
            })}
           </div>
       </div>
    </div>
  )
}

