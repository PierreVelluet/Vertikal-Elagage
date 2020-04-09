import React from 'react';
import './Cards.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {CardDeck} from 'react-bootstrap';
  
const Cards = () => {
    return(
        <div>
            <div className='Deck'>
            <h3>Découvrez nos activités sur l'île</h3>
                <CardDeck>
                    <Card className='CardTemplate'>
                        <Card.Img variant="top" src="https://www.actuailes.fr/kcfinder/upload/images/Itw95-2.JPG" />
                        <Card.Body>
                        <Card.Title>Elagage</Card.Title>
                        <Card.Text>
                            Dîplomé d'état en élagage, je propose des services d'élagage sur mesure dans votre jardin, pour satisafaire aussi bien le côté pratique qu'esthétique. Vous pouvez voir mes réalisations dans la partie galerie.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='CardTemplate'>
                        <Card.Img variant="top" src="https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2019/02/22/node_541721/40109000/public/2019/02/22/B9718671070Z.1_20190222202804_000%2BGH2D1KCFJ.1-0.jpg?itok=SCg46XxO1550917832" />
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