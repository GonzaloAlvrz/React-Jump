import React, { useState } from 'react';
import App from './App.css';

export function  Appp() {
    const [counter, setCounter ] = useState(0);
  
  return (
    <div className='prin'>
      <button className='a' onClick={ ()=> setCounter (counter + 1)}>Sumar</button>
      <div className='b'>{counter}</div>
      <button className='c' onClick={ ()=> setCounter (counter - 1)}>Restar</button>
    </div>
  )
};
export default Appp;

