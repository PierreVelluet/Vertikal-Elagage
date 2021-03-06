import React, {useState} from 'react';
import './Modal.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import StarRatings from 'react-star-ratings';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'relative',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  Body1: {
    width: '500px',
    height: '465px',
    display: 'block',
    margin: '250px auto',
    [theme.breakpoints.down('sm')]: {
      width: '350px',
      height: '430px',
      padding: '5px',
      margin: '185px auto'
  },
  
  },
  StarRating: {
    width: '71%',
    margin: '25px auto',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      margin: '20px auto'
    },
  },
  Button: {
    backgroundColor: '#559857',
    '&:hover': {
      background: "#006400",
    }
  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({comment: '', name: '', stars: 1})
  const [messageSent, setMessageSent] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMessageSent(false)
    setMessage({comment: '', name: '', stars: 1})
  };

  const chosenStars = (nextValue) => {
    setMessage(prevInputState => ({
      name: prevInputState.name,
      comment: prevInputState.comment,
      stars: nextValue,
    }));

  }

  const sendComment = () => {

    if (message.comment !== '' && message.name !== '') {
      axios.post('http://localhost:3002/api/comments/add', message)
      .then(response => {})
      setMessageSent(true)
    }
    
  }
  

  const body1 = (
    <div  className={[classes.paper, classes.Body1].join(' ')}>
      <h2 className='CommentTitle' id="simple-modal-title">Laissez nous votre avis</h2>
      <div className={classes.StarRating}>
      <StarRatings
          rating={message.stars}
          starRatedColor="#FFD700"
          changeRating={chosenStars}
          numberOfStars={5}
          name='rating'
      />
      </div>
      <TextField
        className='Input mb-3'
        onChange={event => {
                const newName = event.target.value;
                setMessage(prevInputState => ({
                  name: newName,
                  comment: prevInputState.comment,
                  stars: prevInputState.stars,
                }));
              }}
        id="outlined-basic"
        label="Nom"
        variant="outlined"
        value={message.name}
      />
      <TextField
          className='Input mb-3'
          onChange={event => {
                const newComment = event.target.value;
                setMessage(prevInputState => ({
                  comment: newComment,
                  name: prevInputState.name,
                  stars: prevInputState.stars,
                }));
              }}
          id="filled-multiline-static"
          label="Votre commentaire"
          multiline
          rows="6"
          variant="outlined"
          value={message.comment}
        />
        <Button className={classes.Button} onClick={sendComment} variant="contained" color="default">Envoyer</Button>
    </div>
  );

  const body2 = (
    <div style={{width: '500px', height: '150px', display: 'block', margin: '350px auto 0 auto', textAlign: 'center'}} className={classes.paper}>
      <p>Votre message à bien était pris en compte !</p>
      <div className='BtnClose'>
        <Button  onClick={handleClose} variant="contained" color="primary">Fermer</Button>
      </div>
    </div>
  )

  return (
    <div>
        <div style={{margin: '0 auto', width: '200px'}}>
            <Button onClick={handleOpen} className={classes.Button} variant="contained" color="default">Poster un commentaire</Button>
        </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {messageSent ? body2: body1}
      </Modal>
      <hr/>
    </div>
  );
}