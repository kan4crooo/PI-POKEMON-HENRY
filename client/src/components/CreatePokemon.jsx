import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { postPokemon, getAllTypes } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import Validaciones from "../components/Validations";
import styles from "./createPokemon.module.css";



export default function CreatePokemon() {
  const dispatch= useDispatch();
  const types= useSelector((state)=>state.types)
  const [error, setError]= useState({});

  useEffect(()=>{
    dispatch(getAllTypes())
  }, [dispatch]);

  const [input, setInput]= useState({
    name:"",
    image: "",
    hp: "",
    attack:"",
    defense:"",
    speed:"",
    height:"",
    weight:"",
    type:[],
  })

  function handleChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setError(Validaciones({...input, [e.target.name]:e.target.value}))
  }
  function handleSelect(e){
    setInput({
      ...input,
      type:[...input.type, e.target.value],
    });
  }

  function handleSubmit(submit){
    submit.preventDefault();
    dispatch(postPokemon(input));
    setInput({
      name:"",
      image: "",
      hp: "",
      attack:"",
      defense:"",
      speed:"",
      height:"",
      weight:"",
      type:[],
    })
  }
  return (
    <div className={styles.pageCreate}>
      
      <h1>Create your pokemon</h1>
      <form className={styles.forms} onSubmit={(e)=>handleSubmit(e)}>
                     
                     <div className={styles.labelInput}>
                      <label>NAME:</label>
                      <input className={styles.input}
                      type="text"
                      value={input.name}
                      name= "name"
                      onChange={e=>{handleChange(e)}}/>
                     </div>
                     {error.name && (<p className={styles.errorInput}>{error.name}</p>)}

                     <div className={styles.labelInput}>
                      <label>HP:</label>
                      <input className={styles.input}
                      type="number"
                      value={input.hp}
                      name="hp"
                      onChange={handleChange}/>
                     </div>
                     {error.hp && (<p className={styles.errorInput}>{error.hp}</p>)}

                     <div className={styles.labelInput}>
                      <label>ATTACK</label>
                      <input className={styles.input}
                      type="number"
                      value={input.attack}
                      name="attack"
                      onChange={handleChange}/>
                     </div>
                     {error.attack && (<p className={styles.errorInput}>{error.attack}</p>)}

                     <div className={styles.labelInput}>
                      <label>WEIGHT</label>
                      <input className={styles.input}
                      type="number"
                      value={input.weight}
                      name="weight"
                      onChange={handleChange}/>
                     </div>
                     {error.weight && (<p className={styles.errorInput}>{error.weight}</p>)}

                     <div className={styles.labelInput}>
                      <label>SPEED:</label>
                      <input className={styles.input}
                      type="number"
                      value= {input.speed}
                      name="speed"
                      onChange={handleChange}/>
                     </div>
                     {error.speed && (<p className={styles.errorInput}>{error.speed}</p>)}

                     <div className={styles.labelInput}>
                      <label>HEIGHT:</label>
                      <input className={styles.input}
                      type="number"
                      value={input.height}
                      name="height"
                      onChange={handleChange}/>
                     </div>
                     {error.height && (<p className={styles.errorInput}>{error.height}</p>)}

                     <div className={styles.labelInput}>
                      <label>DEFENSE:</label>
                      <input className={styles.input}
                      type="number"
                      value={input.defense}
                      name="defense"
                      onChange={handleChange}/>
                     </div>
                     {error.defense && (<p className={styles.errorInput}>{error.defense}</p>)}

                     <div className={styles.labelInput}>
                      <label>IMAGE:</label>
                      <input className={styles.input}
                      type="text"
                      value={input.image}
                      name="image"
                      pattern='https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$'
                      title='FORMATO URL'
                      onChange={e=>{handleChange(e)}}
                      placeholder="URL Image..."
                      />
                     </div>

                     <div>
                     <select   className={styles.types} onChange={(selection)=> handleSelect(selection)}>
                      {types.map((ty)=>(
                        <option value={ty.name} key={ty.id}>
                          {ty.name}
                        </option>
                      ))}
                     </select>
                      </div>
                      <div>
                        <ul><li>{input.type.map(select=>(select+" "))}</li></ul>
                      </div>
                      <button className={styles.formSubmit} type="submit">Create Pokemon</button>
                      <Link to="/home"><button  className={styles.back}>Back</button></Link>
                     
      </form>
    </div>
  )
}

