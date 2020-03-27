import React from 'react';
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        phone: '',
        email: '',
        message: ''
      }
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
      onNumberChange(event) {
        this.setState({phone: event.target.value})
      }
    
    handleSubmit(event) {
    }
  
  render() {
   return(
    <div>
        <h4>N'hésitez pas à nous contacter pour un devis gratuit ou tout autres questions !</h4>
        <h4>Nous vous recontacterons dans les meilleurs délais !</h4>
        <div className='Form'>
            <hr/>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="Téléphone">Téléphone</label>
                    <input type="number" className="form-control" value={this.state.phone} onChange={this.onNumberChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            <hr/>
        </div>
    </div>
   );
  }
  
    
  }
  
  export default Contact;