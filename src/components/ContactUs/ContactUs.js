import React from 'react';
import styles from './ContactUs.module.css'
import Logo from '../navbar/Logo';
import Contact from '../Contact/Contact';

const ContactUs = () => {
    return (
        <React.Fragment>
            <h3 className={styles.Title}>Contact</h3>
            <div className={styles.Container}>
                <div className={styles.Contact}>
                <div className={styles.LogoContainer}>
                    <Logo  height={'125px'} width={'125px'}/>
                    <h2 style={{marginTop: '40px'}} >Verti'Kal Elagage</h2>
                </div>
                    <p>17 rue machin chose, 97436 Saint-Leu, La Réunion</p>
                    <p>06 48 71 62 74</p>
                    <p>velluetl@gmail.com</p>
                    <p>Possibilité de rendez-vous en visio-conférence, et au devis en ligne et conseils grâce au format vidéo !</p>
                    
                </div>
                <Contact/>
            </div>
        </React.Fragment>
    )
}

export default ContactUs;