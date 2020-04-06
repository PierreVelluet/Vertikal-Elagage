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
            <h3 id='section1'>Découvrez nos activités sur l'île</h3>
                <CardDeck>
                    <Card className='CardTemplate'>
                        <Card.Img variant="top" src="https://www.actuailes.fr/kcfinder/upload/images/Itw95-2.JPG" />
                        <Card.Body>
                        <Card.Title>Elagage</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className='CardTemplate'>
                        <Card.Img variant="top" src="https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2019/02/22/node_541721/40109000/public/2019/02/22/B9718671070Z.1_20190222202804_000%2BGH2D1KCFJ.1-0.jpg?itok=SCg46XxO1550917832" />
                        <Card.Body>
                        <Card.Title>Taille</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className='CardTemplate'>
                        <Card.Img variant="top" src="https://archambaultpaysage.com/images/galerie/big/dscn0037.jpg" />
                        <Card.Body>
                        <Card.Title>Amménagement paysager</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        </div>
    )
};

export default Cards;