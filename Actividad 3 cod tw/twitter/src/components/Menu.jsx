import React from 'react'
import IconosMenu from '../components/Menu/IconosMenu'
import '../css/Menu/Menu.css'
import Twitter from '../img/Menu/twitter.png'
import BotonUsuario from './Menu/BotonUsuario'
/* import '../css/Menu.css' */
export default function Menu() {
  return (
    
    <div className='menu'>
      <img className='logo' src={Twitter} alt="" />
      <li className='list'>
       
        <ul className='ul'>
      <IconosMenu 
      icono="house-chimney"
      Nombre="Inicio"
      
      />
        </ul>
        <ul className='ul'>
      <IconosMenu
      icono="hashtag"
      Nombre="Explorar"
      />
        </ul>
        <ul className='ul'>
      <IconosMenu
      icono="bell"
      Nombre="Notificaciones"
      />
        </ul>
        <ul className='ul'>
      <IconosMenu
      icono="envelope"
      Nombre="Mensajes"
      />
        </ul>
        <ul className='ul'>
      <IconosMenu
      icono="bookmark"
      Nombre="Guardados"
      />
        </ul>
        <ul className='ul'>
      <IconosMenu
      icono="rectangle-list"
      Nombre="Listas"
      />
        </ul>
        <ul className='ul'>
      <IconosMenu
      icono="user"
      Nombre="Perfil"
      />
        </ul>
        <ul className='ul'>
      <IconosMenu
      icono="ellipsis"
      Nombre="Más opciones"
      />
        </ul>
        
      </li>

      <BotonUsuario
              FotoPerfil="arbi"
              Nombre="Arbi Busta"
              Usuario= "Arbi2022"

      />

      
    </div>
  )
}

