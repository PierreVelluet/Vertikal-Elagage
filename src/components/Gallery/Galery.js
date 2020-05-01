import React from 'react';
import ImageCard from './ImageCard';
import Carousel from '../Carousel/Carousel'
import './Galery.css'
import Contact from '../Contact/Contact';


const Galery = () => {

    return (
        <div>
            <h3 className={'Title'}>Nos réalisations</h3>
            <Carousel />
            <ImageCard />
            <Contact/>
        </div>
    )
};

export default Galery;