import React from 'react';
import './Elagage.css'

const Elagage = () => {
    return (
        
        <React.Fragment>
        <h3 className='Title'>Elagage</h3>
            <div className='Elagage'>
                
                <p>
                    L’<strong>élagage</strong> consiste en la coupe de certaines branches (ébranchage) d'un arbre pour en orienter ou limiter le développement. On appelle généralement élagage l'arboriculture ornementale. On distingue l'élagage sylvicole, l'élagage fruitier et l'élagage ornemental.
                    L'<strong>élagage</strong> est aussi un processus biologique naturel d'abandon des branches, ou parfois d'une partie du houppier (descente de cime), afin d'optimiser les ressources et dépenses d'énergie de l'arbre, processus appelé élagage naturel. On peut le comprendre comme un processus de sélection des branches d'un arbre sans intervention humaine, en raison d'événements climatiques, par manque de lumière ou d'eau, et/ou par l'action de champignons lignivores spécialisés.
                </p>
                <br/><br/>
                <p>Les différentes <strong>tailles:</strong></p>
                <ul>
                    <li><strong>De formation</strong> (taille d’un jeune arbre pour anticiper sa taille architecturée) </li>
                    <li><strong>Architecturée</strong> (elle a pour objectif de créer une forme géométrique)</li>
                    <li><strong>D’entretien</strong> (destinée à supprimer tous les bois morts)</li>
                    <li><strong>De cohabitation</strong> (permet de s’adapter aux contraintes de son environnement)</li>
                    <li><strong>De réduction</strong> (réduction du volume et de la hauteur de l’arbre)</li>
                </ul>
            </div>
            <div className='ImageWrapper'>
                <div className='ImageBefore1'>
                    <img className='Image1' src='https://services.meteored.com/img/article/les-arbres-un-role-crucial-pour-le-climat-192881-2.jpg' />
                    <p>avant</p>
                </div>
                <div className='ImageAfter1'>
                    <img className='Image2' src='https://geo.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgeo.2F2019.2F07.2F01.2F54d37ecb-ad2b-4686-9ed1-a8b4357a98f9.2Ejpeg/1120x630/background-color/ffffff/quality/90/expo-nous-les-arbres-a-la-fondation-cartier-un-autre-regard-sur-une-richesse-menacee.jpg' />
                    <p>après</p>
                </div>
            </div>
            <hr/>
        </React.Fragment>
    )
}

export default Elagage;