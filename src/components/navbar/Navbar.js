import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from './Logo';
import { HashLink as Link } from 'react-router-hash-link';
import { bubble as Menu } from 'react-burger-menu'

const Navbar = () => {

    const [sideMenuOpen, setSideMenuOpen] = useState(false)
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

    const closeMenu = () => {
        setSideMenuOpen(!sideMenuOpen)
    }

        return (
            <nav className='Navbar' style={style}>
                <Logo height={'75px'} width={'75px'}/>
                <Menu isOpen={sideMenuOpen} width={ '250px' } right className='BurgerMenu'>
                    <div className='navItemsBurger'><Link onClick={closeMenu} smooth to='/home'>Accueil</Link></div>
                    <div className='navItemsBurger'><Link onClick={closeMenu} smooth to='/aboutUs'>Qui sommes-nous?</Link></div>
                    <div className='navItemsBurger'><Link onClick={closeMenu} smooth to='/elagage'>Elagage</Link></div>
                    <div className='navItemsBurger'><Link onClick={closeMenu} smooth to='/abattage'>Abattage</Link></div>
                    <div className='navItemsBurger'><Link onClick={closeMenu} smooth to='/paysagisme'>Paysagisme</Link></div>
                    <div className='navItemsBurger'><Link onClick={closeMenu} smooth to='/gallery'>Galerie</Link></div>
                    <div className='navItemsBurger'><Link onClick={closeMenu} smooth to='/contact'>Contact</Link></div>
                </Menu>
                <div className='AllItems'>
                    <div className='navItems'><Link smooth to='/home'>Accueil</Link></div>
                    <div className='navItems'><Link smooth to='/aboutUs'>Qui sommes-nous?</Link></div>
                    <div className='navItems'><Link smooth to='/elagage'>Elagage</Link></div>
                    <div className='navItems'><Link smooth to='/abattage'>Abattage</Link></div>
                    <div className='navItems'><Link smooth to='/paysagisme'>Paysagisme</Link></div>
                    <div className='navItems'><Link smooth to='/gallery'>Galerie</Link></div>
                    <div className={['navItems', 'ContactItem'].join(' ')}><Link smooth to='/contact'>Contact</Link></div>
                </div>
            </nav>
        )
    
    
}

export default Navbar;