import React,{useState,  useEffect } from 'react';
import PokeList from './PokeList'
import PokeList2 from './PokeList2'



export function App (){
  const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';
  const [todos, setTodos ] = useState();
  const fetchApi = async ()=> {
  const response =  await fetch(url)
/*   console.log(response.status) */
  const responseJSON = await response.json()
  setTodos (responseJSON.results)
/*   console.log(responseJSON); */
  }
  useEffect (()=>{
    fetchApi()
  },[])



  return (<div className='prin'>
  <header className= "title">
    <img src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'></img>

  </header>
  <main>
  
   < PokeList  todos = {todos}/>
 

{/* <ul>  
    Muestra solo la lista de nombres
    { !state ? 'a' :  
        state.map((a)=> {return <li>  {a.name}</li> })

      } 
    </ul> */}
  </main>
  </div>
  )
  };
  export default App; 

