import React, { useState, useEffect} from "react";

import sejdel from "../images/sejdel.jpg"

import HighscoreTable from "../components/tables/highscoreTable"
import ApiTest from "../components/apitest/apitest"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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


