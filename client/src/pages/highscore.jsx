import React, { useState, useEffect} from "react";

import sejdel from "../images/sejdel.jpg"

import HighscoreTable from "../components/tables/highscoreTable"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh', 
    display: 'flex',
    flexWrap: 'wrap',

    backgroundImage: `url(${sejdel})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    justifyContent: 'center',
  },
  table: {
    minWidth: 650,
  },

}));


export default function Highscore() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <HighscoreTable />
    </div>
  );
}


