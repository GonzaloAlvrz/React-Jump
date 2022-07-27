import React from 'react'
import FotoDirecto from '../../img/Aside/barbijo.jpg'
import '../../css/Aside/NoticiaFoto.css'

export default function NoticiaFoto({Texto}) {
  return (
    <div>
      <div className='contenido-directo-asidec'>
        <div className='texto-directo-asidec'>
            <h4>{Texto}</h4>
        </div>
        <div className='caja-foto-directo-asidec'>
            <img className='foto-directo-asidec' src={FotoDirecto} alt="" />
        </div>
      </div>
    </div>
  )
}
