import React from 'react';
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      console.log(this.state.name)
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
      console.log('button clicked')
    }
  
  render() {
   return(
    <div>
        <h4>N'hésitez pas à nous contacter pour un devis gratuit ou tout autres questions !</h4>
        <h4>Nous vous recontacterons dans les meilleurs délais !</h4>
    <form className='Form' noValidate autoComplete="off">
      <TextField className='Input mb-3' onChange={this.onNameChange.bind(this)} id="outlined-basic" label="Nom" required variant="outlined" />
      <TextField className='Input mb-3' onChange={this.onNumberChange.bind(this)} id="outlined-basic" label="Téléphone" required variant="outlined" />
      <TextField className='Input mb-3' onChange={this.onEmailChange.bind(this)} id="outlined-basic" label="Email" required variant="outlined" />
      <TextField
          onChange={this.onMessageChange.bind(this)}
          className='Input mb-3'
          id="filled-multiline-static"
          label="Votre message"
          multiline
          rows="6"
          variant="outlined"
        />
        <Button onClick={this.handleSubmit} variant="contained" color="primary">Envoyer</Button>
    </form>

        </div>
   );
  }
  
    
  }
  
  export default Contact;