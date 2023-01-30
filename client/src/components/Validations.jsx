import React from 'react'

export default function Validations(input) {
  let error={};
  let validateName = /^[a-z]+$/i;
  if(!input.name || validateName.test(input.name)){
    error.name= "Name is mandatory";
  }
  if(!input.hp){
    error.hp= ' Hp is mandatory';
  }
  if(!input.attack){
    error.attack= 'Attack is mandatory';
  }

  if(!input.defense){
    error.defense= 'Defense is mandatory';
  }

  if(!input.speed){
    error.speed= 'Speed is mandatory';
  }

  if(!input.height){
    error.height= "Height is mandatory";
  }

  if(!input.weight){
    error.weight= "Weight is mandatory";
  }

    return error;
}

