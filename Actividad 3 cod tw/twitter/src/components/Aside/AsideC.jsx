import React from 'react'
import '../../css/Aside/AsideC.css'
/* import FotoDirecto from '../../img/Aside/barbijo.jpg' */
import NoticiaFoto from './NoticiaFoto'
import Secciones from './Secciones'

export default function AsideC() {
  return (
    <div className='principal-asideC'>
      <div className='caja-trend'>
        <div className='titulo-caja-trend'>
            <h3 className='qep-asidec'>¿Qué está pasando?</h3>
             <div className='directo-asidec'>
               <div className='caja-titulo-directo-asidec'>
                  <h4 className='titulo-directo-asidec'>En directo</h4>
                   <NoticiaFoto
                   Texto="Lo último de la covid-19 en Argentina"
                   />
               </div>
               <div className='secciones-asidec'>
                  <Secciones
                  Titulo="Tendencia"
                  Tendencia="Messi"
                  Tweet="77.7 mil tweets"
                  />
                  <Secciones
                  Titulo="Deportes"
                  Tendencia="Lewis Hamilton"
                  Tweet="11.1 mil tweets"
                  />
                  <Secciones
                  Titulo="Deportes"
                  Tendencia="Lewis Hamilton"
                  Tweet="11.1 mil tweets"
                  />
               </div>
              <div>
                <h3 className='mostrar-mas'>Mostrar más</h3>
              </div>
             </div>
        </div>
      </div>
    </div>
  )
}
