import React, { useState , useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import PourCard from './pourcard'




const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
  paper: {
    marginTop: theme.spacing(2),
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
    const response = await fetch('http://localhost:9000/views/pourfeed' , {
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
            <div className={classes.root}>
              <LinearProgress color="secondary" />
            </div>
        )
    }
    
    return (
        <div className={classes.paper}>
          <Typography variant="h5" >Pour Feed</Typography>
                {apiResponse.map(row => (
                    <PourCard 
                    name={row.first_name + ' ' + row.last_name} 
                    beer={row.beer}
                    volume={row.volume}
                    date={row.created_on}
                    cost={row.cost}
                    desc={row.description}
                    />
                ))}
        </div>
    );
}

