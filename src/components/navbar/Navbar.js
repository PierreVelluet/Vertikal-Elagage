import React, { Component } from 'react';
import './Navbar.css';
import Logo from './Logo';

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
            <nav style={this.state.style}>
                <Logo/>  
                <div className='AllItems'>
                    <div className='navItems'>Accueil</div>
                    <div className='navItems'>Certification & diplômes</div>
                    <div className='navItems'>Qui sommes nous?</div>
                    <div className='navItems'>Gallerie</div>
                    <div className='navItems'>Contact</div>
                </div>
            </nav>
        )
    }
    
}

export default Navbar;