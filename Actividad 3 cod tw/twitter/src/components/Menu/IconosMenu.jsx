import React from 'react'
import '../../css/Menu/IconosMenu.css'
export default function IconosMenu({icono, Nombre}) {
  return (
    <div className='icono-titulo'>
    
      <i  className={`fa-regular fa-${icono}`} ></i>

      <h1 className='nombre-menu'>{Nombre}</h1>
      
    </div>
  )
}