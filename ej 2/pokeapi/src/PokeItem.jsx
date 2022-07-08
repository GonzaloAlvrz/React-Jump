import React from 'react'



export  function PokeItem({todo,index}) {
  return (
<div className='prin'>
<li>
  <div className='card'>
     <div className='img'>
         <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} alt="" />
     </div>
     <div className=''>
          {todo.name}
      </div>
      
  </div>
</li>
</div>
  )
}
export default  PokeItem
