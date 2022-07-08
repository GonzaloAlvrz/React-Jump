

 import React, {useState} from 'react';

export function Appp(){
    const [state, setState] =useState({nombre: '',
    apellidos: [
       '',   // Materno
       ''    // Paterno
    ]});
  
  
    return (
<div className='marg'>
       
   <div className='caj1'>
        <input className='a' value={state.nombre} onChange={(a) => setState({...state,nombre: a.target.value})} />

        <input className='b' value={state.apellidos.length[0]} onChange={(a) => setState({...state,apellidos:[ a.target.value, state.apellidos[1]]})}/>

        <input className='c' value={state.apellidos.length[1]} onChange={(a) => setState({...state,apellidos:[state.apellidos[0], a.target.value]})}/>
   </div>

  <div className='caj2'>
      <h2>Mi nombre es:</h2>
      <h1>{state.nombre} {state.apellidos[0]} {state.apellidos[1]}  </h1>
  </div>

</div>
    );
  } 




