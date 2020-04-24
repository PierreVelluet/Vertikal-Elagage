import React from 'react';
import './Footer.css'
import twitter from '../../logos/logo-footer-twitter.png'
import facebook from '../../logos/logo-footer-facebook.png'
import instagram from '../../logos/logo-footer-instagram.png'

const Footer = () => {
    return(
        <div className='Footer'>
            <div className='Social'>
                <h4>Social</h4>
                <p>Suivez nous sur les réseaux sociaux pour prendre connaissance de nos projets et chantiers sur l'île !</p>
                <p>Vous pourrez y voir nos dernières réalisations, avec des photos comparatives !</p>
                <div className='Media'>
                
                    <div className="ContainerContentSocialLinksImg">
                        <a href="https://facebook.com/">
                            <img className="ImgTwitter" src={facebook} alt="Social network Twitter icon" />
                        </a>
                    </div>
                    <div className="ContainerContentSocialLinksImg">
                        <a href="https://twitter.com/">
                            <img className="ImgTwitter" src={twitter} alt="Social network Twitter icon" />
                        </a>
                    </div>
                    <div className="ContainerContentSocialLinksImg">
                        <a href="https://instagram.com/">
                            <img className="ImgTwitter" src={instagram} alt="Social network Twitter icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='OpenedHour'>
                <h4>Horaires</h4>
                <table>
                    <tbody>
                        <tr>
                            <td><strong>Lundi-jeudi</strong></td>
                            <td>07.00-17.00</td>
                        </tr>
                        <tr>
                            <td><strong>Vendredi</strong></td>
                            <td>07.00-16.00</td>
                        </tr>
                        <tr>
                            <td><strong>Samedi</strong></td>
                            <td>08.00-12.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='Contact'>
                <h4>Contact</h4>
                <p><strong>Adresse</strong> : 7 rue jesaispasquoi, 75222 Piton Saint-Leu</p>
                <p><strong>Téléphone</strong> : 06-48-71-62-74</p>
                <p><strong>Email</strong> : velluetl@gmail.com</p>
            </div>

        </div>
    )
};

export default Footer;

