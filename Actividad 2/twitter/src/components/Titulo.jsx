import React from 'react'
import LogoTwitter from '../img/twitter.png'
import '../css/Titulo.css'
  class  Titulo extends React.Component{
    render(){
        return  <div><h1 className='titulo-titulo'><img src={LogoTwitter} alt='Logo twitter' className='logo-titulo'/>Twitter</h1></div>
    }
}
export default   Titulo;