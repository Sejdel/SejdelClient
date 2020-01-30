import React from "react";

import sejdel from "../images/sejdel.jpg"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// Components
import StaticPage from '../components/static_pages/StaticPage'

// Components
import NavBar from '../components/navbar/navbar'
import ApiTest from '../components/apitest/apitest'


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

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <StaticPage />
    </div>
  );
};

export default About;