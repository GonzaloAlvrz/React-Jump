import React from 'react'
import Arbi from '../img/arbi.png'
import '../css/Foto.css'
export default function Foto() {
    return (
      <div>
        <img src={Arbi} alt='Foto de usuario' className='foto-usuario'/>
      </div>
    )
  }