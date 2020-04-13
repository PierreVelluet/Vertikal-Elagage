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
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Elagage from './components/Elagage/Elagage';
import Abattage from './components/Abattage/Abattage';
import Paysagisme from './components/Paysagisme/Paysagisme';
import ContactUs from './components/ContactUs/ContactUs';
import { Redirect} from 'react-router-dom';



const App = () => {

  

  return (
    <BrowserRouter>
      <div className="App">
        <Redirect exact from="/" to="/home" />
        <ScrollToTop />
        <Navbar/>
        <PresentationImage/>
        <Route path='/home' exact component={Cards}/>
        <Route path='/home' exact component={InShort}/>
        <Route path='/home' exact component={Video}/>
        <Route path='/home' exact component={GoldenBook}/>
        <Route path='/home' exact component={Modal}/>
        <Route path='/home' exact component={Contact}/>
        <Route path='/aboutUs' exact component={AboutUs}/>
        <Route path='/aboutUs' exact component={Contact}/>
        <Route path='/abattage' exact component={Abattage}/>
        <Route path='/abattage' exact component={Contact}/>
        <Route path='/elagage' exact component={Elagage}/>
        <Route path='/elagage' exact component={Contact}/>
        <Route path='/paysagisme' exact component={Paysagisme}/>
        <Route path='/paysagisme' exact component={Contact}/>
        <Route path='/gallery' exact component={Galery}/>
        <Route path='/gallery' exact component={Contact}/>
        <Route path='/contact' exact component={ContactUs}/>
        <Footer/>
        <ScrollUpButton/>
      </div>
    </BrowserRouter>
  );
}

export default App;
