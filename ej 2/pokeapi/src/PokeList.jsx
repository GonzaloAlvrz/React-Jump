import React from 'react'
import PokeItem from './PokeItem'



export function PokeList({todos}) {
  return (
    <div>
       <ul>  

    { !todos ? 'Cargando...' :  todos.map((todo, index)=> {return  <PokeItem key= {`id-${index}`} todo = {todo} index= {index} /> })

      } 
    </ul>
    </div>
  )
}export default  PokeList;
