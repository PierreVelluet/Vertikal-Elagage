import React from 'react';
import Navbar from './components/navbar/Navbar';
import PresentationImage from './components/navbar/PresentationImage'
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Galery from './components/Gallery/Galery';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Elagage from './components/Elagage/Elagage';
import Abattage from './components/Abattage/Abattage';
import Paysagisme from './components/Paysagisme/Paysagisme';
import ContactUs from './components/ContactUs/ContactUs';
import { Redirect} from 'react-router-dom';
import Home from './components/Home/Home';



const App = () => {

  

  return (
    <BrowserRouter>
        <Redirect exact from="/" to="/home" />
        <ScrollToTop />
        <Navbar/>
        <PresentationImage/>
        <Route path='/home' exact component={Home}/> 
        <Route path='/aboutUs' exact component={AboutUs}/>
        <Route path='/abattage' exact component={Abattage}/>
        <Route path='/elagage' exact component={Elagage}/>
        <Route path='/paysagisme' exact component={Paysagisme}/>
        <Route path='/gallery' exact component={Galery}/>
        <Route path='/contact' exact component={ContactUs}/>
        <Footer/>
        <ScrollUpButton/>
    </BrowserRouter>
  );
}

export default App;
