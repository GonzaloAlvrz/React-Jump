import React from 'react';
import './App.css';
import Foto from './components/Foto';
import Titulo from './components/Titulo';
import Tweet from './components/Tweet'

function App() {
  return (
   <div className='prin-app'>
      <div className='titutlo-app'><Titulo /></div> 
      <div className='foto-y-tweet-app'>
      <div className='foto-app'><Foto/></div> 
      <div className='tweet-app'><Tweet/></div>
      </div>
   </div>
  );
}

export default App;
