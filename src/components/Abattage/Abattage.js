import React from 'react';
import './Abattage.css'
import royal1 from '../../photos/royal1.png'
import royal2 from '../../photos/royal2.png'
import royal3 from '../../photos/royal3.png'
import Contact from '../Contact/Contact';

const Abattage = () => {
    return (
        <React.Fragment>
            <h3 className='Title'>Abattage</h3>
            <div className='Abattage'>
                <p>En plus de la taille des arbres, il faut parfois procéder à l’<strong>enlèvement</strong> de ceux-ci. Lorsqu’un arbre atteint une certaine hauteur, n’a plus sa place ou devient dangereux (attaque de champignons ou autres agents pathogènes), il faut procéder à sa <strong>coupe</strong>. Cette opération nécessite <strong>précision</strong> et <strong>rigueur</strong> dans le respect des règles de sécurité. Le choix de l’abattage est multiple, il dépend principalement de la place dont dispose l’arboriste grimpeur. Ensuite le bois coupé peut par exemple valorisé comme bois de chauffage.</p>
                <br/><br/>

                <p>Les différents abattages:</p>
                <ul>
                    <li><strong>Abattage</strong> en direct (coupe de l’arbre directement du pied)</li>
                    <li><strong>Démontage avec ou sans retention</strong> (en premier on coupe les branches puis ensuite débitage du tronc morceaux par morceaux )</li>
                </ul>
                <br/><br/>
                <p>
                    L’abattage d’un arbre peut se justifier par son état sanitaire, par un changement d’environnement (habitations, réseaux souterrains, contraintes), ou une erreur de plantation.
                </p>
                <p>
                    L’abattage est réalisé par nos professionnels qui maîtrisent toutes les différentes méthodes d’abattage, ce qui permet une intervention sécurisée pour les biens et les personnes.
                </p>
                <p>
                    La méthode d’abattage (directionnel, par démontage ou en rétention) et le matériel utilisé dépendent de l’arbre et de son environnement (accès, voirie, réseaux aériens ou souterrains, habitations proches).
                </p>
            </div>
            <div className='ImageWrapper2'>
                    <div className='ImageAbattage1'>
                        <img className='Image1' alt='' src={royal1} />
                        <p>étape1</p>
                    </div>
                    <div className='ImageAbattage2'>
                        <img className='Image2' alt='' src={royal2} />
                        <p>étape2</p>
                    </div>
                    <div className='ImageAbattage3'>
                        <img className='Image2' alt='' src={royal3} />
                        <p>étape3</p>
                    </div>
                </div>
                <div className='Sécurité'>
                    <h3><strong>*Sécurité*</strong></h3>
                    <p>
                        Tous nos travaux sont réalisés avec du matériel en adéquation avec les dernières <strong>normes en vigueur</strong>.
                        Nous nous déplaçons donc dans les arbres à l’aide d’un matériel spécifique (cordes, baudriers, etc…) répondant à des exigences strictes.
                    </p>
                    <p>
                        Comme toute entreprise d’élagage nous disposons d’une assurance responsabilité civile professionnelle « Élagage et abattage d’arbres de toutes hauteurs et tous diamètre ». C’est cette assurance qui garantit la solvabilité de l’entreprise en cas de dommages à vos biens ou aux personnes.
                    </p>
                    <p>
                        L’élagage et l’abattage sont des <strong>operations dangereuses</strong>, il ne faut en aucun cas les prendre à la légère et donc agir en conséquence.
                    </p>
                </div>
                
                <hr/>
                <Contact />
        </React.Fragment>
    )
}

export default Abattage;