import React from 'react';
import './ImageCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import ModalImage from "react-modal-image";
import photo1 from '../../photos/photo1.jpg'
import photo2 from '../../photos/photo2.jpg'
import photo3 from '../../photos/photo3.png'
import photo4 from '../../photos/photo4.jpeg'
import photo5 from '../../photos/photo5.jpeg'
import photo6 from '../../photos/photo6.jpeg'
import photo7 from '../../photos/photo7.png'
import photo8 from '../../photos/photo8.JPG'
import photo10 from '../../photos/photo10.jpg'
import photo12 from '../../photos/photo12.png'
import photo13 from '../../photos/photo13.png'
import photo14 from '../../photos/photo14.png'
import photo15 from '../../photos/photo15.png'


const realisations = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo10, photo12, photo13, photo14, photo15 ]
  
const Cards = () => {

    return(
        <div className={'Gallery'} >
        {realisations.map((element, index) => {
           return       <div key={index} >
                            <Card className='Card'>
                                {/* <Card.Title>{element.title}</Card.Title> */}
                                <ModalImage
                                    className='Image'
                                    small={element}
                                    large={element}
                                />
                                
                                {/* <Card.Body>
                                <p className={'PlusImages'} >Cliquez pour zoomer</p>
                                </Card.Body> */}
                            </Card>
                        </div>
                    
        })}
        
            
        </div>
    )
};

export default Cards;