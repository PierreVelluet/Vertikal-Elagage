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
                <Logo/>
                    <h2>Verti'Kal Elagage</h2>
                    <p>17 rue machin chose, 97436 Saint-Leu, La Réunion</p>
                    <p>06 48 71 62 74</p>
                    <p>Possibilité de rendez-vous en visio-conférence, et au devis en ligne et conseils grâce au format vidéo</p>
                    
                </div>
                <Contact/>
            </div>
        </React.Fragment>
    )
}

export default ContactUs;