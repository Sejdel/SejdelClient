import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import SelectUser from './selectUser';
import PourFeed from './pourFeed';
import MoodIcon from '@material-ui/icons/Mood';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  size: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  sizebtn: {
    width: '33.33%',
  }
}));

export default function SignIn() {
  const classes = useStyles();

  const [user, setUser] = useState(null);
  const [size, setSize] = useState('m');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [shouldReload, setShouldReload] = useState(false);


    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setSuccess(false);
      setError(false);
    };

  function handleSubmit(event) {
    event.preventDefault();

    if(user === null) {
      setError(true);
      setSuccess(false);
      return;
    }
    
    let vol = 500.0;
    let cost = 20.0;

    if(size === 's'){
      vol = 330.0;
      cost = 13.2;
    }

    if(size === 'l'){
      vol = 1000.0;
      cost = 40.0;
    }


    fetch('http://localhost:9000/pours' , {
      method: "POST",
      withCredentials: true,
      credentials: 'include',
      headers: {
      'Content-type': 'application/json'
      },
      body: JSON.stringify({volume: vol, cost, user_id: user.id})})
      .then((result) => {
        console.log(result.status)
        if (result.status == 201) {
          setError(false);
          setSuccess(true);
          setUser(null);
          setShouldReload(true);
          setShouldReload(false);
        } else {
          setSuccess(false);
          setError(true);
        }
      });
  }


  const handleChange = (event, newSize) => {
    setSize(newSize);
  };

  const handleUserChange = (event, newUser) => {
    setUser(newUser);
  }; 


  const cookies = new Cookies();
  if(!cookies.get('userid')) {
    return <Redirect to='/'  />;
  }
  
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />

      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Unable to pour a beer.
        </Alert>
      </Snackbar>

      <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Poured a beer!
        </Alert>
      </Snackbar>

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MoodIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Pour a Beer!
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} id="form">
                
          <SelectUser 
            required
            value={user}
            onChange={handleUserChange.bind(this)}
          />
          <ToggleButtonGroup className={classes.size} required size="large" value={size} exclusive onChange={handleChange} >
            <ToggleButton key={1} value='s' className={classes.sizebtn}>
              S (330 ml)
            </ToggleButton>

            <ToggleButton  key={1} value='m' className={classes.sizebtn}>
              M (500 ml)
            </ToggleButton>

            <ToggleButton key={1} value='l' className={classes.sizebtn}>
              L (1000 ml)
            </ToggleButton>

          </ToggleButtonGroup>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Pour!
          </Button>

        </form>
      </div>
      <Divider />
      <PourFeed key={shouldReload} />
      
    </Container>
  );
}

