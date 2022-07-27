import React from 'react'
import '../css/Aside/Aside.css'
 import AsideC from '../components/Aside/AsideC' 
 import Seguir from './Aside/Seguir'


export default function Aside() {
  return (
    <div className='principal'>
      <div className='buscador'>
      <p> Buscar en Twitter</p>
      </div>
      <AsideC/>
      <Seguir/>
      
    </div>

  )
}
