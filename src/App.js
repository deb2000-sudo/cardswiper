import React from 'react';
import './App.css'
import ImageCarousel from './components/ImageCarousel';



const App=()=> {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
    }}>
      <h1>My Swiper component</h1>
      <ImageCarousel/>
    </div>
    
  );
}

export default App;
