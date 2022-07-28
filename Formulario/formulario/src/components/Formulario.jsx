import React from 'react'


export default function Formulario( {Tipo, Placeholder, Valor}) {
  return (
    <>
     
    <div className='caja-form'>
         
      <form className='form' action="">
        <input type={Tipo}  placeholder={Placeholder} value={Valor} className="inp"/>
      </form>

    </div>
    </>
  )
}

/* <form className='form' action="">
<input type={Tipo}  placeholder={Placeholder}/>
<input type="text"  placeholder='Apellido'/>
<input type="email" name="" id="" placeholder='Email' />
<input type="text" placeholder='Usuario' />
<input type="password" name="" id=""  placeholder='Contraseña'/>
<input type="password" name="" id=""  placeholder='Repetir contraseña'/>
<input type="checkbox" name="" id="" />
<input type="submit" value="Registrate" />
<input type="reset" value="Reset" />
</form> */
