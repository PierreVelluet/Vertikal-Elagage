import React from 'react';
import Navbar from './components/navbar/Navbar';
import PresentationImage from './components/navbar/PresentationImage'
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Contact from './components/Contact/Contact';
import Cards from './components/Home/Cards/Cards';
import Video from './components/Home/Video /Video';
import Galery from './components/Gallery/Galery';
import InShort from './components/Home/InShort/InShort';
import GoldenBook from './components/GoldenBook/GoldenBook';
import Modal from './components/Modal/Modal';



const App = () => {

  

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <PresentationImage/>
        <Route path='/home' exact component={Cards}/>
        <Route path='/home' exact component={InShort}/>
        <Route path='/home' exact component={Video}/>
        <Route path='/home' exact component={GoldenBook}/>
        <Route path='/home' exact component={Modal}/>
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
