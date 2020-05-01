import React, {useState} from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  Button: {
    backgroundColor: '#559857',
    '&:hover': {
      background: "#006400",
    }
  }
}));

const Contact = () => {

  const [formContact, setFormContact] = useState({name: '', phone: '', email: '', message: ''})
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  formContact
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message envoyé."); 
        setFormContact({name: '', phone: '', email: '', message: ''})
      }else if(response.data.status === 'fail'){
        alert("Erreur lors de l'envoi du message.")
      }
    })
  }

 

   return(
    <div>
        <h4>N'hésitez pas à nous contacter pour un devis gratuit ou tout autres questions !</h4>
    <ValidatorForm onSubmit={handleSubmit} className='Form' noValidate autoComplete="off">
      <TextValidator
        className='Input mb-3'
        onChange={event => {
                const newName = event.target.value;
                setFormContact(prevInputState => ({
                  name: newName,
                  phone: prevInputState.phone,
                  email: prevInputState.email,
                  message: prevInputState.message,
                }));
              }}
        id="outlined-basic"
        label="Nom"
        validators={['required']}
        errorMessages={['ce champ est requis']}
        required variant="outlined"
        value={formContact.name}
      />

      <TextValidator
        className='Input mb-3'
        onChange={event => {
                const newphone = event.target.value;
                setFormContact(prevInputState => ({
                  name: prevInputState.name,
                  phone: newphone,
                  email: prevInputState.email,
                  message: prevInputState.message,
                }));
              }}
        id="outlined-basic"
        label="Téléphone"
        validators={['required', 'isNumber']}
        errorMessages={['ce champ est requis', 'ne doit contenir que des chiffres']}
        inputMode="numeric"
        pattern="[0-9]*"
        required variant="outlined"
        value={formContact.phone}
          
      />
      <TextValidator
        className='Input mb-3'
        onChange={event => {
                const newEmail = event.target.value;
                setFormContact(prevInputState => ({
                  name: prevInputState.name,
                  phone: prevInputState.phone,
                  email: newEmail,
                  message: prevInputState.message,
                }));
              }}
        id="outlined-basic"
        label="Email"
        validators={['required', 'isEmail']}
        errorMessages={['ce champ est requis', 'email non valide']}
        required variant="outlined"
        value={formContact.email}
          
      />
      <TextValidator
          className='Input mb-3'
          onChange={event => {
                const newMessage = event.target.value;
                setFormContact(prevInputState => ({
                  name: prevInputState.name,
                  phone: prevInputState.phone,
                  email: prevInputState.email,
                  message: newMessage,
                }));
              }}
          id="filled-multiline-static"
          label="Votre message"
          validators={['required']}
          errorMessages={['ce champ est requis']}
          multiline
          rows="6"
          variant="outlined"
          value={formContact.message}
        />
        <Button type='submit' className={classes.Button} variant="contained" color='default'>Envoyer</Button>
    </ValidatorForm>

        </div>
   );
  }
  
    
  
  
  export default Contact;