import React from 'react';
import Myswiper from './components/Myswiper';
import './App.css'



const App=()=> {
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column"
    }}>
      <h1>Swiper component</h1>
      <Myswiper/>
    </div>
    
  );
}

export default App;
