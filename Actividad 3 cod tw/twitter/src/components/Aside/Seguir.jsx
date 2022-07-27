import React from 'react'
import '../../css/Aside/Seguir.css'
import OpcionesSeguir from './OpcionesSeguir'

export default function Seguir() {
  return (
    <div>
      <div className='caja-pincipal'>
        <div className='titulo-seguir'>
            <h3 >A quién seguir</h3>
        </div>
        <OpcionesSeguir
        FotoPerfil="cr7"
        Nombre="Cris"
        Usuario="Ronaldo"
        />
        <OpcionesSeguir
        FotoPerfil="messi"
        Nombre="Lionel Messi"
        Usuario="Liomessi"
        />
        <OpcionesSeguir
        FotoPerfil="qac"
        Nombre="Q.A.C"
        Usuario="Quilmes"
        />
        <div className='mm'>
          <h3 className='mostrar-mas'>Mostrar más</h3>
        </div>
      </div>
    </div>
  )
}
