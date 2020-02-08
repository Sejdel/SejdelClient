import React, { useState , useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import SelectUser from './selectUser'
import MoodIcon from '@material-ui/icons/Mood';
import PourCard from './pourcard'



const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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

  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchPours() {
    const response = await fetch('http://localhost:9000/pours' , {
        method: "GET",
        withCredentials: true,
        credentials: 'include'});
    const json = await response.json();
    setApiResponse(json);
    setLoading(false);
  }

    useEffect(() => {
        fetchPours();
    }, []);

    if(loading){
        return (
            <div>Loading...</div>
        )
    }


    console.log(apiResponse[0].id)

    return (
    <Container component="main" maxWidth="false">
        <CssBaseline />
        <div className={classes.paper}>

                {apiResponse.map(row => (
                    <PourCard name={row.id} volume={row.volume}/>
                ))}
        </div>
    </Container>
    );
}

