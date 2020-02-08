import React from "react";
import sejdel from "../images/sejdel.jpg"

import { makeStyles } from '@material-ui/core/styles';

// Components
import StaticPage from '../components/static_pages/StaticPage'
import Button from '@material-ui/core/Button';
import Cookies from 'universal-cookie';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh', 
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    backgroundImage: `url(${sejdel})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    justifyContent: 'center',
  },
  button: {
    margin: '10px',
  }

}));



export default function Home(){
  const classes = useStyles();

  const cookies = new Cookies();

  if(cookies.get('userid')){
    return (
      <div className={classes.root}>
        <h1>Hi there {cookies.get('name')}!</h1>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Button variant="contained"  color="primary" className={classes.button} size="large" href="/sign-in">
        Sign In
      </Button>

      <Button variant="contained" color="primary" className={classes.button} size="large" href="/sign-up">
        Register
      </Button>
    </div>
  );
}
