import './App.css';
import Contenido from './components/Contenido';
import Menu from './components/Menu'
import Aside from './components/Aside';

function App() {
  return (
    <div className='principal-app'>
    <Menu/>
    <Contenido />
    <Aside/>
    </div>
  );
}

export default App;
