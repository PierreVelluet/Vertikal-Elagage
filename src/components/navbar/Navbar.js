import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from './Logo';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

    const [style, setStyle] = useState({backgroundColor: null, borderBottom: null});

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {

            setStyle({backgroundColor: '#559857', borderBottom: '1px solid white'})


        if(window.pageYOffset === 0) {
            setStyle({backgroundColor: null, borderBottom: null})
        };
    };

        return (
            <nav className='Navbar' style={style}>
                <Logo/>  
                <div className='AllItems'>
                    <div className='navItems'><Link smooth to='/home'>Accueil</Link></div>
                    <div className='navItems'><Link smooth to='/aboutUs'>Qui sommes-nous?</Link></div>
                    <div className='navItems'><Link smooth to='/elagage'>Elagage</Link></div>
                    <div className='navItems'><Link smooth to='/abattage'>Abattage</Link></div>
                    <div className='navItems'><Link smooth to='/paysagisme'>Paysagisme</Link></div>
                    <div className='navItems'><Link smooth to='/gallery'>Galerie</Link></div>
                    <div className='navItems'><Link smooth to='/'>Contact</Link></div>
                </div>
            </nav>
        )
    
    
}

export default Navbar;