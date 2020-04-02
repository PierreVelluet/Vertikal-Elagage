import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
 
const DemoCarousel = () => {
        return (
            <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            useKeyboardArrows={true}
            className='Carousel'>
                <div className='Image1'>
                    <p className="legend">Taille d'un arbre</p>
                </div>
                <div className='Image2'>
                    <p className="legend">Elagage des branches basses</p>
                </div>
                <div className='Image3'>
                    <p className="legend">Elagage d'ornement</p>
                </div>
            </Carousel>
        );
};

export default DemoCarousel;