import React from 'react';
import ImageCard from './ImageCard';
import Carousel from '../Carousel/Carousel'
import './Galery.css'


const Galery = () => {

    return (
        <div>
            <h3 className={'Title'}>Nos réalisations</h3>
            <Carousel />
            <ImageCard />
        </div>
    )
};

export default Galery;