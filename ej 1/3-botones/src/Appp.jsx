import React, { useState } from 'react';
import App from './App.css';

export function  Appp() {
    const [counter, setCounter ] = useState("0-cero");
  
  return (
    <div className='prin'>
      
      <div className='a'>{counter}</div>
      <button className='b' onClick={ ()=> setCounter ("1 - Uno")}>1</button>
      <button className='c' onClick={ ()=> setCounter ("2 - Dos")}>2</button>
      <button className='d' onClick={ ()=> setCounter ("3 - Tres")}>3</button>
    </div>
  )
};
export default Appp;

