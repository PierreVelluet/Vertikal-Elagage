import React from 'react';
import './Elagage.css'
import beforeAfter from '../../photos/BeforeAfter.png'

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
                <br/>
                <div className='ImageWrapper'>
                        <img className='Image1' alt='' src={beforeAfter} />
                </div>
                <br/>
                <p>
                    Mon arbre a-t-il besoin d’être élagué ? C’est là que réside toute l’ambiguité…
                </p>
                <p>
                    Un arbre ou un palmier n’a absolument pas besoin de nous pour vivre ou s’entretenir, ils se sont adaptés au fil du temps afin de pouvoir répondre seuls aux agressions naturelles de leurs milieux.
                    Néanmoins nous avons un peu plus de mal à nous adapter à eux, nos besoins en espaces primants sur les leurs il nous faut <strong>trouver des moyens de cohabitation</strong>.
                </p>
                <p>
                    C’est justement sur ce moyen de cohabitation que l’arboriste grimpeur / élagueur peut vous <strong>conseiller</strong>.
                </p>
                <p>
                    Si nous devions résumer, l’élagage est l’action de tailler qui permet à l’homme de <strong>cohabiter</strong>, d’entretenir et de <strong>valoriser</strong> son patrimoine arboré de façon intelligente et raisonnée.
                </p>
                <p>
                    L’étape préliminaire de tout chantier est la <strong>prise d’un rendez-vous</strong> pour être conseillé, à la fois sur les travaux à réaliser et pour établir un devis clair et chiffré. Nos devis prennent en compte l’essence, l’âge de l’arbre, son mode de gestion ainsi que son environnement (accès, voirie, habitations, réseaux aériens etc...).
                </p>
                <p>
                    Notre spectre d’intervention va des jeunes plantations jusqu’aux arbres adultes de toutes hauteurs.
                    Confier vos arbres à notre entreprise est la promesse du <strong>respect de votre patrimoine arboré</strong>, de sa longévité et de son esthétisme. C’est également la garantie d’une économie financière tout au long de la vie du végétal.
                </p>
                <p>
                    L’arbre met  <strong>un siècle à s’épanouir</strong>, une heure suffit à le détruire. Pourquoi ne pas prendre <strong>cinq minutes</strong> pour y réfléchir ?
                </p>
            </div>
            
            <hr/>
        </React.Fragment>
    )
}

export default Elagage;