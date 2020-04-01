import React, {useState} from 'react';
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Contact (){
  const [inputName, setInputName] = useState('');
  const [inputPhoneNumber, setInputPhoneNumber] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');


  const handleSubmit = (event)=>{
    console.log('button clicked')
  }
 
  console.log(inputName)

   return(
    <div>
        <h4>N'hésitez pas à nous contacter pour un devis gratuit ou tout autres questions !</h4>
        <h4>Nous vous recontacterons dans les meilleurs délais !</h4>
    <form className='Form' noValidate autoComplete="off">
      <TextField
        className='Input mb-3'
        onChange={event => {
                const newName = event.target.value;
                setInputName(newName);
              }}
        id="outlined-basic"
        label="Nom"
        required variant="outlined"
        value={inputName}
      />

      <TextField
        className='Input mb-3'
        onChange={event => {
                const newPhoneNumber = event.target.value;
                setInputPhoneNumber(newPhoneNumber);
              }}
        id="outlined-basic"
        label="Téléphone"
        required variant="outlined"
        value={inputPhoneNumber}
          
      />
      <TextField
        className='Input mb-3'
        onChange={event => {
                const newEmail = event.target.value;
                setInputEmail(newEmail);
              }}
        id="outlined-basic"
        label="Email"
        required variant="outlined"
        value={inputEmail}
          
      />
      <TextField
          className='Input mb-3'
          onChange={event => {
                const newMessage = event.target.value;
                setInputMessage(newMessage);
              }}
          id="filled-multiline-static"
          label="Votre message"
          multiline
          rows="6"
          variant="outlined"
          value={inputMessage}
        />
        <Button onClick={() => {}} variant="contained" color="primary">Envoyer</Button>
    </form>

        </div>
   );
  }
  
    
  
  
  export default Contact;