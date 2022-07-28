
import './App.css';
 import Formulario from './components/Formulario'; 
function App() {
  return (
    <div className="App">
      <div><h1>Formulario</h1></div>
           <Formulario 
         Tipo="text"
         Placeholder="Nombre"
         />
         <Formulario
         Tipo="text"
         Placeholder="Apellido"
         />
         <Formulario
         Tipo="email"
         Placeholder="Email"
         />
         <Formulario
         Tipo="text"
         Placeholder="Usuario"
         />
         <Formulario
         Tipo="password"
         Placeholder="Contraseña"
         />
         <Formulario
         Tipo="password"
         Placeholder="Repetir contraseña"
         />         
         <Formulario
         Tipo="number"
         Placeholder="Teléfono"
         />
         <Formulario
         Tipo="date"
         Placeholder="Fecha de cumpleaños"
         />
         <Formulario
         Tipo="checkbox"
         Placeholder=""

         />
         <Formulario
         Tipo="submit"
         Valor= "Registrate"
         />
         <Formulario
         Tipo="reset"
         Valor= "Reset"
         /> 
         
    </div>
  );
}

export default App;
