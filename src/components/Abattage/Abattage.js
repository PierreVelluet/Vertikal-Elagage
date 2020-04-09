import React from 'react';
import './Abattage.css'

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
            </div>
            <div className='ImageWrapper2'>
                    <div className='ImageAbattage1'>
                        <img className='Image1' src='https://services.meteored.com/img/article/les-arbres-un-role-crucial-pour-le-climat-192881-2.jpg' />
                        <p>étape1</p>
                    </div>
                    <div className='ImageAbattage2'>
                        <img className='Image2' src='https://geo.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgeo.2F2019.2F07.2F01.2F54d37ecb-ad2b-4686-9ed1-a8b4357a98f9.2Ejpeg/1120x630/background-color/ffffff/quality/90/expo-nous-les-arbres-a-la-fondation-cartier-un-autre-regard-sur-une-richesse-menacee.jpg' />
                        <p>étape2</p>
                    </div>
                    <div className='ImageAbattage3'>
                        <img className='Image2' src='https://geo.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgeo.2F2019.2F07.2F01.2F54d37ecb-ad2b-4686-9ed1-a8b4357a98f9.2Ejpeg/1120x630/background-color/ffffff/quality/90/expo-nous-les-arbres-a-la-fondation-cartier-un-autre-regard-sur-une-richesse-menacee.jpg' />
                        <p>étape3</p>
                    </div>
                    <div className='ImageAbattage4'>
                        <img className='Image2' src='https://geo.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgeo.2F2019.2F07.2F01.2F54d37ecb-ad2b-4686-9ed1-a8b4357a98f9.2Ejpeg/1120x630/background-color/ffffff/quality/90/expo-nous-les-arbres-a-la-fondation-cartier-un-autre-regard-sur-une-richesse-menacee.jpg' />
                        <p>étape4</p>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Abattage;