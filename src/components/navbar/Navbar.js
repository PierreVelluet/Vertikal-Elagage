import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';

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
                    <div className='navItems'><Link to='/home'>Accueil</Link></div>
                    <div className='navItems'><Link to='/aboutUs'>Qui sommes-nous?</Link></div>
                    <div className='navItems'><Link to='/'>Certifications</Link></div>
                    <div className='navItems'><Link to='/galery'>Galerie</Link></div>
                    <div className='navItems'><Link to='/'>Contact</Link></div>
                </div>
            </nav>
        )
    
    
}

export default Navbar;