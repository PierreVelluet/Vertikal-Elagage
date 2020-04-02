import React from 'react';
import Navbar from './components/navbar/Navbar';
import PresentationImage from './components/PresentationImage'
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Contact from './components/Contact/Contact';
import Cards from './components/Cards/Cards';
import Video from './components/Video /Video';
import Galery from './components/Galery/Galery';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <PresentationImage/>
        <Route path='/home' exact component={Cards}/>
        <Route path='/home' exact component={Video}/>
        <Route path='/aboutUs' exact component={AboutUs}/>
        <Route path='/galery' exact component={Galery}/>
        <Contact />
        <Footer/>
        <ScrollUpButton/>
      </div>
    </BrowserRouter>
  );
}

export default App;
