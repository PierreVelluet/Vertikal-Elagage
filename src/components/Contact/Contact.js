import React, {useState} from 'react';
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Contact = () => {

  const [formContact, setFormContact] = useState({name: '', number: '', email: '', message: ''})


  const handleSubmit = (event) => {
    console.log(formContact.email, formContact.message, formContact.name, formContact.number)
  }

   return(
    <div>
        <h4>N'hésitez pas à nous contacter pour un devis gratuit ou tout autres questions !</h4>
        <h4>Nous vous recontacterons dans les meilleurs délais !</h4>
    <form className='Form' noValidate autoComplete="off">
      <TextField
        className='Input mb-3'
        onChange={event => {
                const newName = event.target.value;
                setFormContact(prevInputState => ({
                  name: newName,
                  number: prevInputState.number,
                  email: prevInputState.email,
                  message: prevInputState.message,
                }));
              }}
        id="outlined-basic"
        label="Nom"
        required variant="outlined"
        value={formContact.name}
      />

      <TextField
        className='Input mb-3'
        onChange={event => {
                const newNumber = event.target.value;
                setFormContact(prevInputState => ({
                  name: prevInputState.name,
                  number: newNumber,
                  email: prevInputState.email,
                  message: prevInputState.message,
                }));
              }}
        id="outlined-basic"
        label="Téléphone"
        inputmode="numeric"
        pattern="[0-9]*"
        required variant="outlined"
        value={formContact.number}
          
      />
      <TextField
        className='Input mb-3'
        onChange={event => {
                const newEmail = event.target.value;
                setFormContact(prevInputState => ({
                  name: prevInputState.name,
                  number: prevInputState.number,
                  email: newEmail,
                  message: prevInputState.message,
                }));
              }}
        id="outlined-basic"
        label="Email"
        required variant="outlined"
        value={formContact.mail}
          
      />
      <TextField
          className='Input mb-3'
          onChange={event => {
                const newMessage = event.target.value;
                setFormContact(prevInputState => ({
                  name: prevInputState.name,
                  number: prevInputState.number,
                  email: prevInputState.email,
                  message: newMessage,
                }));
              }}
          id="filled-multiline-static"
          label="Votre message"
          multiline
          rows="6"
          variant="outlined"
          value={formContact.message}
        />
        <Button onClick={handleSubmit} variant="contained" color="primary">Envoyer</Button>
    </form>

        </div>
   );
  }
  
    
  
  
  export default Contact;