import React from 'react';
import './ImageCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import ModalImage from "react-modal-image";

const realisations = [
    {
        image: 'https://www.ille-et-vilaine.fr/sites/default/files/styles/actualites/public/foret-de-la-corbiere-cg35.jpg?itok=Xj5G_SJx',
        title: 'Elagage à Saint-Leu',
        text: "Un elagage dans les règles de l'art à Piton-Saint-leu",
    },
    {
        image: 'https://media.lesechos.com/api/v1/images/view/5d14738d3e4546287c17d2b6/1280x720/2216682-defiscalisation-lappel-de-la-foret-web-tete-06016836317.jpg',
        title: 'Elagage à Saint-Leu',
        text: "Un elagage dans les règles de l'art à Piton-Saint-leu",
    },
    {
        image: 'https://media.lesechos.com/api/v1/images/view/5d14720b8fe56f5f1265a937/1280x720/2121772-la-foret-un-placement-securisant-dans-le-temps-web-tete-030682267356.jpg',
        title: 'Elagage à Saint-Leu',
        text: "Un elagage dans les règles de l'art à Piton-Saint-leu",
    },
    {
        image: 'https://www.ille-et-vilaine.fr/sites/default/files/styles/actualites/public/foret-de-la-corbiere-cg35.jpg?itok=Xj5G_SJx',
        title: 'Elagage à Saint-Leu',
        text: "Un elagage dans les règles de l'art à Piton-Saint-leu",
    },
    {
        image: 'https://media.lesechos.com/api/v1/images/view/5d14738d3e4546287c17d2b6/1280x720/2216682-defiscalisation-lappel-de-la-foret-web-tete-06016836317.jpg',
        title: 'Elagage à Saint-Leu',
        text: "Un elagage dans les règles de l'art à Piton-Saint-leu",
    },
    {
        image: 'https://media.lesechos.com/api/v1/images/view/5d14720b8fe56f5f1265a937/1280x720/2121772-la-foret-un-placement-securisant-dans-le-temps-web-tete-030682267356.jpg',
        title: 'Elagage à Saint-Leu',
        text: "Un elagage dans les règles de l'art à Piton-Saint-leu",
    },
    {
        image: 'https://www.ille-et-vilaine.fr/sites/default/files/styles/actualites/public/foret-de-la-corbiere-cg35.jpg?itok=Xj5G_SJx',
        title: 'Elagage à Saint-Leu',
        text: "Un elagage dans les règles de l'art à Piton-Saint-leu",
    },
    {
        image: 'https://media.lesechos.com/api/v1/images/view/5d14738d3e4546287c17d2b6/1280x720/2216682-defiscalisation-lappel-de-la-foret-web-tete-06016836317.jpg',
        title: 'Elagage à Saint-Leu',
        text: "Un elagage dans les règles de l'art à Piton-Saint-leu",
    },
    {
        image: 'https://media.lesechos.com/api/v1/images/view/5d14720b8fe56f5f1265a937/1280x720/2121772-la-foret-un-placement-securisant-dans-le-temps-web-tete-030682267356.jpg',
        title: 'Elagage à Saint-Leu',
        text: "Un elagage dans les règles de l'art à Piton-Saint-leu",
    },
    {
        image: 'https://www.ille-et-vilaine.fr/sites/default/files/styles/actualites/public/foret-de-la-corbiere-cg35.jpg?itok=Xj5G_SJx',
        title: 'Elagage à Saint-Leu',
        text: "Un elagage dans les règles de l'art à Piton-Saint-leu",
    },
    {
        image: 'https://media.lesechos.com/api/v1/images/view/5d14738d3e4546287c17d2b6/1280x720/2216682-defiscalisation-lappel-de-la-foret-web-tete-06016836317.jpg',
        title: 'Elagage à Saint-Leu',
        text: "Un elagage dans les règles de l'art à Piton-Saint-leu",
    },
    {
        image: 'https://media.lesechos.com/api/v1/images/view/5d14720b8fe56f5f1265a937/1280x720/2121772-la-foret-un-placement-securisant-dans-le-temps-web-tete-030682267356.jpg',
        title: 'Elagage à Saint-Leu',
        text: "Un elagage dans les règles de l'art à Piton-Saint-leu",
    },
    
]
  
const Cards = () => {

    return(
        <div className={'Gallery'} >
        {realisations.map((element, index) => {
           return       <div key={index} >
                            <Card className='Card'>
                                <Card.Title>{element.title}</Card.Title>
                                <ModalImage
                                    className='Image'
                                    small={element.image}
                                    large={element.image}
                                />
                                
                                <Card.Body>
                                <p className={'PlusImages'} >Cliquez pour zoomer</p>
                                </Card.Body>
                            </Card>
                        </div>
                    
        })}
        
            
        </div>
    )
};

export default Cards;