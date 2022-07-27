import React from 'react'
import '../../css/Aside/Secciones.css'

export default function Secciones({Titulo, Tendencia, Tweet}) {
  return (
    <dviv className='pricipal-secciones'>
        <div className='caja-ttt--izquierda-secciones'>
         <div className='caja-ttt-secciones'>
            <div className='titulo-secciones'>{Titulo}</div>
            <div className='tendencia'>{Tendencia}</div>
            <div className='tweet'>{Tweet}</div>
         </div>
         <div className='configuracion-secciones'>
            <h3 className='config-tres-secciones'>...</h3>
         </div>
         </div>
    </dviv>
  )
}
