import React from 'react'
import '../../css/Aside/OpcionesSeguir.css'

export default function OpcionesSeguir({FotoPerfil, Nombre, Usuario}) {
  return (
    <div>
     <div className='caja-usuario-OpcionesSeguir'>
        <div className='caja-usuarios-OpcionesSeguir'>
       <div className='caja-OpcionesSeguir'>
          <div className='caja-foto-OpcionesSeguir'>
            <img src={require(`../../img/Aside/seguir/${FotoPerfil}.jpg`)} alt="Foto de perfil"  className='foto-perfil-OpcionesSeguir'/>
          </div>
       </div>
      <div className='caja-usuario-OpcionesSeguir'>
          <div className='usuario-tiempo-OpcionesSeguir'>
              <h3 className='nombre-OpcionesSeguir'>{Nombre}</h3>
              <h3 className='usuario-OpcionesSeguir'>@{Usuario}</h3>
          </div>
          <div className='btn-OpcionesSeguir'>
             <h3 className='configuracion-OpcionesSeguir'>Seguir</h3>
          </div>
      </div>
      </div>
      </div>
    </div>
  )
}
