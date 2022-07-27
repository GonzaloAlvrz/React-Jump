import React from 'react'
/* import FotoPerfil from '../img/Contenido/Tweet/cr7.png' */
import '../css/Tweet.css'
import LikeCompartir from '../img/Contenido/Tweet/crlc.png'

export default function Tweet({FotoPerfil,Nombre, Usuario, Tiempo, Tweet}) {
  return (
    <div className='border'>
    <div className='principal-tweet'>
       <div className='caja-tweet'>
          <div className='caja-foto-tweet'>
            <img src={require(`../img/Contenido/Tweet/${FotoPerfil}.png`)} alt="Foto de perfil"  className='foto-perfil'/>
          </div>
       </div>
      <div className='caja-usuario-tweet'>
          <div className='usuario-tiempo-tweet'>
              <h3 className='nombre-tweet'>{Nombre}</h3>
              <h3 className='usuario-tweet'>@{Usuario}</h3>
              <h3 className='tiempo-publicacion-tweet'>. {Tiempo}</h3>
              <h3 className='configuracion-tweet'>...</h3>
          </div>
          <div className='text-tweet'>
            <p>{Tweet}</p>
          </div>

      </div>
    </div>
    <div className='btn-tweet'>
            <img src={LikeCompartir} alt="" className='btn-like-tweet'/>
    </div>
    </div>
    
  )
}




/* Este funciona

    <>
    <div className='principal-tweet'>
       <div className='caja-tweet'>
          <div className='caja-foto-tweet'>
            <img src={FotoPerfil} alt=""  className='foto-perfil'/>
          </div>
       </div>
      <div className='caja-usuario-tweet'>
          <div className='usuario-tiempo-tweet'>
              <h3 className='nombre-tweet'>Cristiano Ronaldo</h3>
              <h3 className='usuario-tweet'>@cristiano</h3>
              <h3 className='tiempo-publicacion-tweet'>. 7m</h3>
              <h3 className='configuracion-tweet'>...</h3>
          </div>
          <div className='text-tweet'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium impedit optio velit molestias Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum optio veniam mollitia ex temporibus velit sit enim dicta voluptatibus, autem officia commodi ipsum maiores eligendi minima expedita possimus architecto porro?</p>
          </div>

      </div>
    </div>
    <div className='btn-tweet'>
            <img src={LikeCompartir} alt="" className='btn-like-tweet'/>
    </div>
    </>


*/


/* ---------------------------------------------------- */
/*          <div className='principal-tweet'>
      <div className='tweet'>
        <div className='f-u-t-tweet'>
          <img src={FotoPerfil} alt="" className='foto-perfil-tweet'/>
          <div className='foto-usuario-tweet'>
              <h3 className='nombre-tweet'>Cristiano Ronaldo</h3>
              <h3 className='usuario-tweet'>@cristiano</h3>
              <h3 className='tiempo-publicacion-tweet'>. 7m</h3>
              </div>
              <div className='text-tweet'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium impedit optio velit molestias </p>
              </div>
          
          </div>

      </div>
    </div>      */

