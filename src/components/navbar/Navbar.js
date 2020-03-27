import React, { Component } from 'react';
import './Navbar.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          style: {
              backgroundColor: null,
              borderBottom: null,
          },
        };
        this.handleScroll = this.handleScroll.bind(this);
      }
      
    


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    handleScroll(){
        this.setState(prevState => ({
            style: {                   // object that we want to update
                ...prevState.style,    // keep all other key-value pairs
                backgroundColor: '#559857',      // update the value of specific key
                borderBottom: '1px solid white'
            }
        }))
        if(window.pageYOffset === 0) {
            this.setState(prevState => ({
                style: {                   // object that we want to update
                    ...prevState.style,    // keep all other key-value pairs
                    backgroundColor: null,     // update the value of specific key
                    borderBottom: null,
                }
            }))
        };
    };
    
    

    render() {

        


        return (
            <nav className='Navbar' style={this.state.style}>
                <Logo/>  
                <div className='AllItems'>
                    <div className='navItems'><Link to='/'>Accueil</Link></div>
                    <div className='navItems'><Link to='/aboutUs'>Qui sommes-nous?</Link></div>
                    <div className='navItems'><Link to='/'>Certification & diplômes</Link></div>
                    <div className='navItems'><Link to='/gallery'>Galerie</Link></div>
                    <div className='navItems'><Link to='/'>Contact</Link></div>
                </div>
            </nav>
        )
    }
    
}

export default Navbar;