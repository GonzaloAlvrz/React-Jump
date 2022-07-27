import React from 'react'
import '../css/Contenido.css'
import Opciones from '../img/Contenido/tweet.png'
import FotoPerfil from '../img/Contenido/Tweet/arbi.png'
import Estrellas from '../img/Contenido/ictw.png'
import Tweet from '../components/Tweet'


export default function Contenido() {
  return (
    <div className='principal-contenido'>
      <div className='titulo-ft-contenido'>
           <h1 className='h1-inicio-contenido'>Inicio</h1>
           <img src={Estrellas} alt="" className='est-contenido'/>
      </div>
      <div className='tweet-foto-contenido'>
            <img src={FotoPerfil} alt="Foto Perfil" className='foto-perfil-contenido'/>
            <h2 className='area-texto-contenido'>¿Qué está pasando?</h2>
      </div>
      <div className='ft-boton'>
            <img src={Opciones} alt="" className='opciones-tweet-contenido'/>
            <button className='botn-twitear'>Twittear</button>
      </div>
      <div>
      <Tweet
        FotoPerfil="messi"
        Nombre="Lionel Messi...⚽"
        Usuario= "Liomessi"
        Tiempo="10 min"
        Tweet= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium impedit optio velit molestias Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum optio veniam mollitia ex temporibus velit sit enim dicta voluptatibus, autem officia commodi ipsum maiores eligendi minima expedita possimus architecto porro?"
        />
      </div>
      <div>
        <Tweet
        FotoPerfil="cr7"
        Nombre="Cristiano Ronaldo"
        Usuario= "cristiano"
        Tiempo="7 min"
        Tweet= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium impedit optio velit molestias Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum optio veniam mollitia ex temporibus velit sit enim dicta voluptatibus, autem officia commodi ipsum maiores eligendi minima expedita possimus architecto porro?"
        />
      </div>
      <div>
        <Tweet
        FotoPerfil="qac"
        Nombre="Quilmes Atletico Club"
        Usuario= "Qac"
        Tiempo="14 min"
        Tweet= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium impedit optio velit molestias Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum optio veniam mollitia ex temporibus velit sit enim dicta voluptatibus, autem officia commodi ipsum maiores eligendi minima expedita possimus architecto porro?"
        />
      </div>
      <div>
        <Tweet
        FotoPerfil="cr7"
        Nombre="Cristiano Ronaldo"
        Usuario= "cristiano"
        Tiempo="7 min"
        Tweet= "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
      <div>
        <Tweet
        FotoPerfil="messi"
        Nombre="Lionel Messi...⚽"
        Usuario= "Liomessi"
        Tiempo="10 min"
        Tweet= "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
    </div>
  )
}
