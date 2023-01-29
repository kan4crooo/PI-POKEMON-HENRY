import React from 'react'

export default function Validations(input) {
  let error={};
  let validateName = /^[a-z]+$/i;
  if(!input.name || validateName.test(input.name)){
    error.name= "Name is mandatory";
  }
  if(input.hp>255 || !input.hp){
    error.hp= ' Hp is mandatory and less than 255';
  }
  if(input.attack>255 || !input.attack){
    error.attack= 'Attack is mandatory and less than 255';
  }

  if(input.defense>255 || !input.defense){
    error.defense= 'Defense is mandatory and less than 255';
  }

  if(input.speed>255 || !input.speed){
    error.speed= 'Speed is mandatory and less than 255';
  }

  if(!input.height){
    error.height= "Height is mandatory";
  }

  if(!input.weight){
    error.weight= "Weight is mandatory";
  }

    return error;
}

