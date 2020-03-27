import React from 'react';
import Navbar from './components/navbar/Navbar';
// import DemoCarousel from './components/Caroussel/Caroussel';
import PresentationImage from './components/PresentationImage'
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Contact from './components/Contact/Contact';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <PresentationImage/>
        <Route path='/aboutUs' exact component={AboutUs}/>
        {/* <Route path='/gallery' exact component={DemoCarousel}/> */}
        <Contact />
        <Footer/>
        <ScrollUpButton/>
      </div>
    </BrowserRouter>
  );
}

export default App;
