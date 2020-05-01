import React from 'react';
import './AboutUs.css'
import Contact from '../Contact/Contact';

const AboutUs = () => {

    return (
        <React.Fragment>
        <h3 className='Title'>Qui sommes nous ?</h3>
        <div className='Container_entreprise'>
            <div className='Entreprise'>
                <h4>L'entreprise</h4>
                <p> 
                    Verti’Kal Élagage est une entreprise spécialisée dans la taille, l’élagage et les soins aux arbres en milieu urbain et forestier.
                    Créée en 2017, Verti’Kal Élagage est une entreprise spécialisée dans la taille et le soin aux arbres d’ornement. Basée à Piton Saint Leu, elle intervient auprès de particuliers, d’entreprises et de collectivités sur la côte Ouest de l’Île de la Réunion. Nous pratiquons la « taille raisonnée » qui s’opère dans le respect de l’arbre, de sa nature et de son développement afin d’en préserver la beauté et d’assurer sa pérennité.
                    Nous intervenons de La Possession jusqu’au Tampon / Saint Joseph, toute demande hors secteur est néanmoins réalisable.
                </p>
                
                <p>
                    L’ arbre est un être vivant qui doit faire l’ objet d’ une attention particulière. De mauvaises pratiques ou une taille mal effectuée peut avoir des incidences irréversibles, sur la santé de
                    l’ arbre, sa tenue mécanique et aussi sur les éléments présents autour de celui ci.
                    L’ arbre fait part de notre environnement, aussi bien esthétiquement  qu’ écologiquement, nous devons veiller sur lui.
                    En plus des opérations effectuées sur les arbres et palmiers, nous sommes en mesure de nous occuper de la remise en état des jardins laissés en friches et de la mise en place de solutions d’arrosage intégrés.
                </p>
            </div>
            <div className='Photo1'></div>
        </div>
        <div className='Container_lucas'>
            <div className='Photo2'></div>
            <div className='Lucas'>
                <h4>Qui suis-je?</h4>
                <p> 
                    Verti’Kal Élagage a été créé en 2017 par Lucas Velluet salarié depuis 2008 de différentes entreprises de paysage, principalement dans le Nord et le Sud-Ouest de la France.
                    C’est à la fin d’un cursus « cadre paysage classique » (BTS Aménagements Paysagers, Licence Conduite de Travaux, Certificat de Spécialisation en Tailles et Soins aux Arbres) que le projet de créer une entreprise de paysage a fini de mûrir et est devenu réalité.
                    Une petite entreprise a néanoins du mal a pouvoir répondre à tous les marchés qui lui sont proposés, c’est pourquoi nous nous inscrivons dans un réseau de professionnels, ce qui nous permet de gagner à la fois en qualité et e réactivité sur nos prestations.
                    Afin de participer à l’activité de veille sur les nouvelles techniques et nouveaux matériaux ainsi que la transmission des connaissances, j’interviens sur les formations de BTS Aménagements Paysagers (tous modules techniques), Capa Jardinier Paysagiste (module arrosage), CS Arboriste élagueur (tous modules) et permis tronçonneuse (modules 1,2 et 3).
                </p>
            </div> 
        </div>
        <div className='Container_vision'>
            <div className='Vision'>
                <h4>Ma vision du métier</h4>
                <p>
                    Le métier d’ arboriste grimpeur consiste à entretenir le patrimoine arboré, de permettre la cohabition de l’ arbre et de l’ homme. Par le biais de connaissances biologiques et physiologiques notre profession contribue de pérenniser l ‘arbre dans notre cadre de vie.
                    Nous nous occupons à la fois de l’entretien des arbres d’ornements, des arbres fruitiers ainsi que des palmiers.
                </p>
                <p>
                    Nous nous occupons à la fois de l’entretien des arbres d’ornements, des arbres fruitiers ainsi que des palmiers.
                    L’ arbre est un être vivant qui doit faire l’ objet d’ une attention particulière. De mauvaises pratiques ou une taille mal effectuée peut avoir des incidences irréversibles, sur la santé de
                    l’ arbre, sa tenue mécanique et aussi sur les éléments présents autour de celui ci.
                    L’ arbre fait part de notre environnement, aussi bien esthétiquement  qu’ écologiquement, nous devons veiller sur lui.
                </p>
                <p>
                    En plus des opérations effectuées sur les arbres et palmiers, nous sommes en mesure de nous occuper de la remise en état des jardins laissés en friches et de la mise en place de solutions d’arrosage intégrés.
                </p>
            </div>
            <div className='Photo3'></div>
        </div>
        <hr/>
        <Contact/>
        </React.Fragment>
    )
};

export default AboutUs;