import React from 'react';
import './Cards.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import {CardDeck} from 'react-bootstrap';
import Elagage from '../../../photos/Elagage.png'
import Taille from '../../../photos/Taille.jpg'
  
const Cards = () => {
    return(
        <div>
            <div className='Deck'>
            <h3>Découvrez nos activités sur l'île</h3>
                <CardDeck className='CardDeck'>
                    <Card className='CardTemplate'>
                        <Card.Img variant="top" src={Elagage} />
                        <Card.Body>
                        <Card.Title>Elagage</Card.Title>
                        <Card.Text>
                            Dîplomé d'état en élagage, je propose des services d'élagage sur mesure dans votre jardin, pour satisafaire aussi bien le côté pratique qu'esthétique. Vous pouvez voir mes réalisations dans la partie galerie.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='CardTemplate'>
                        <Card.Img variant="top" src={Taille} />
                        <Card.Body>
                        <Card.Title>Taille</Card.Title>
                        <Card.Text>
                            De la même manière, je propose des services de taille d'arbres ou de haies dans votre jardin.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='CardTemplate'>
                        <Card.Img variant="top" src="https://archambaultpaysage.com/images/galerie/big/dscn0037.jpg" />
                        <Card.Body>
                        <Card.Title>Amménagement paysager</Card.Title>
                        <Card.Text>
                            Dîplomé d'une licence en amménagement paysagé, je propose aussi des services de paysagisme sur mesure dans votre jardin. N'hésitez pas à regarder mes réalisations dans la partie galerie.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        </div>
    )
};

export default Cards;