import React from 'react'
import '../../css/Menu/BotonUsuario.css'

export default function BotonUsuario({FotoPerfil, Nombre, Usuario}) {
  return (
    <div className='caja-pricipal-btnusuario'>
      <div className='caja-botn-twitear-btnusuario'>
        <button className='botn-twitear-btnusuario'>Twittear</button>
      </div>

      <div className='caja-usuario-btnusuario'>
       <div className='caja-btnusuario'>
          <div className='caja-foto-btnusuario'>
            <img src={require(`../../img/Contenido/Tweet/${FotoPerfil}.png`)} alt="Foto de perfil"  className='foto-perfil-btnusuario'/>
          </div>
       </div>
      <div className='caja-usuario-btnusuarioo'>
          <div className='usuario-tiempo-btnusuario'>
              <h3 className='nombre-btnusuario'>{Nombre}</h3>
              <h3 className='usuario-btnusuario'>@{Usuario}</h3>
          </div>
          <div className='tres-puntos-btnusuario'>
             <h3 className='configuracion-btnusuario'>...</h3>
          </div>
      </div>
      </div>
    </div>
  )
}
