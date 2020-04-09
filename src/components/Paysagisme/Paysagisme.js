import React from 'react';
import styles from './Paysagisme.module.css'

const Paysagisme = () => {
    return (
        <React.Fragment>
            <h3 className={styles.Title}>Architecture du paysage</h3>
            <div className={styles.Paysagisme}>
            <p>
                L’architecture du paysage ou paysage — et non « paysagisme » constituant un abus de langage — consiste en l’art de la compréhension et du design de paysages dans leur immense diversité. L'architecture du paysage inclut notamment la conception d'espaces paysagers tels que l'aménagement de l'espace public, de parcs et d'espaces de récréation et le design urbain. Elle inclut également des interventions en faveur de la restauration environnementale, la planification de territoires aux différentes échelles et la préservation de paysages historiques et identitaires.
                Le praticien de l’architecture de paysage est appelé architecte paysagiste, paysagiste concepteur ou simplement paysagiste selon les pays.
            </p>
            <p>Les différentes <strong>missions du paysagiste:</strong></p>
                <ul>
                    <li><strong>Trouver l'idée</strong> et montrer comment elle va se concrétiser</li>
                        <ul>
                            <li>Concept et esquisses</li>
                            <li>Montrer une forme matérielle de l'idée</li>
                        </ul>
                    <li><strong>Faire les plans</strong></li>
                        <ul>
                            <li>Plans techniques pour la construction</li>
                            <li>Estimation détaillée</li>
                            <li>Devis</li>
                        </ul>
                    <li><strong>Suivre ou effectuer</strong> les travaux</li>
                        <ul>
                            <li>Suivi de chantier</li>
                            <li>Conformité, avis de changement, décomptes, acceptation</li>
                        </ul>
                    <li><strong>Suivi</strong> du jardin</li>
                        <ul>
                            <li>Au delà de l'inauguration le suivi de l'entretien est essentiel. En trois ans on peut complètement changer l'aspect d'un jardin en modifiant son entretien.</li>
                        </ul>
                </ul>
            </div>
            <div className={styles.ImageWrapper}>
                <div className={styles.DivImage1}>
                    <img className={styles.Image1} src='https://www.andryves.com/wp-content/uploads/2019/04/avantages-amenagement-paysager.jpg' />
                    <p>exemples de projet</p>
                </div>
                <div className={styles.DivImage2}>
                    <img className={styles.Image2} src='https://i.pinimg.com/originals/62/36/ff/6236ff8c6b37f57ea4f71bcd7dadbf93.jpg' />
                    <p>exemples de projet</p>
                </div>
                <div className={styles.DivImage3}>
                    <img className={styles.Image3} src='https://lh3.googleusercontent.com/proxy/qUR00N_ZIUmqpGmfU3uycwivPjED1O8lvkTu8eaog1xPa2df5Ly_k3CSYe57Rr30Lhce2cNwgZ2KeMxCPZYLlNBBpR2k683GrzkA897GTKfFkU5oZfsAt4V9uX9tGTaKwgVG4qs' />
                    <p>exemples de projet</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Paysagisme;