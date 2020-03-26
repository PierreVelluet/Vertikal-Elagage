import React from 'react';
import Navbar from './components/navbar/Navbar';
import DemoCarousel from './components/Caroussel/Caroussel';
import PresentationImage from './components/PresentationImage'
import AboutUs from './components/AboutUs/AboutUs';



function App() {
  return (
    <div className="App">
      <Navbar />
      <PresentationImage />
      {/* <DemoCarousel /> */}
      <AboutUs />
    </div>
  );
}

export default App;
