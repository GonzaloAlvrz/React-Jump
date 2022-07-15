import React from 'react'
import Arbi from '../img/arbi.png'
import '../css/Foto.css'

  class  Foto extends React.Component{
    render(){
        return <div><img src={Arbi} alt='Foto de usuario' className='foto-usuario'/></div>
    }
}
export default   Foto;