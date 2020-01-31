import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Cookies from 'universal-cookie';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import CakeIcon from '@material-ui/icons/Cake';
import { Link } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  }
}));



export default function ButtonAppBar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>        
        <Link href="/"> 
          <ListItem button key='home'>
            <ListItemIcon> <HomeIcon /> </ListItemIcon>
            <ListItemText> Home </ListItemText>
          </ListItem>
        </Link>
                
        <Link href="/about-us"> 
          <ListItem button key='about-us'>
            <ListItemIcon> <HomeIcon /> </ListItemIcon>
            <ListItemText> About Us </ListItemText>
          </ListItem>
        </Link>
                
        <Link href="/"> 
          <ListItem button key='rules'>
            <ListItemIcon> <HomeIcon /> </ListItemIcon>
            <ListItemText> Rules </ListItemText>
          </ListItem>
        </Link>

      </List>
      <Divider />
      <List>
        <Link href="/"> 
          <ListItem button key='my-beers'>
            <ListItemIcon> <HomeIcon /> </ListItemIcon>
            <ListItemText> My Beers </ListItemText>
          </ListItem>
        </Link>

        <Link href="/"> 
          <ListItem button key='beer-feed'>
            <ListItemIcon> <HomeIcon /> </ListItemIcon>
            <ListItemText> Beer Feed </ListItemText>
          </ListItem>
        </Link>

        <Link href="/highscore"> 
          <ListItem button key='highscore'>
            <ListItemIcon> <HomeIcon /> </ListItemIcon>
            <ListItemText> Highscore </ListItemText>
          </ListItem>
        </Link>

        <Link href="/"> 
          <ListItem button key='memes'>
            <ListItemIcon> <HomeIcon /> </ListItemIcon>
            <ListItemText> Memes </ListItemText>
          </ListItem>
        </Link>
      </List>

      <Divider />

      <List>
      <Link href="/pour"> 
            <ListItem button key='pour'>
              <ListItemIcon> <HomeIcon /> </ListItemIcon>
              <ListItemText> Pour a beer! </ListItemText>
            </ListItem>
          </Link> 
        <Link href="/"> 
            <ListItem button key='admin'>
              <ListItemIcon> <HomeIcon /> </ListItemIcon>
              <ListItemText> Admin </ListItemText>
            </ListItem>
          </Link>
      </List>
    </div>
  );
  
  const signOut = () => {
    fetch('http://localhost:9000/auth/signout' , {
      method: "POST",
      withCredentials: true,
      credentials: 'include'
      })
      .then(result => {
        console.log('Hejdu', result);
        if (result.status == 200) {
          window.location.reload();
        } else {
          alert('Failed to sign out.');
        }
      })
  }

  const cookies = new Cookies();
  if(cookies.get('userid')){
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              SejdelSöndag
            </Typography>
   
            <Button color="inherit" onClick={signOut}>Sign Out</Button> 
          </Toolbar>
        </AppBar>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {sideList('left')}
        </Drawer>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              SejdelSöndag
            </Typography>
            <Button color="inherit" href="/sign-in">Sign In</Button> 
          </Toolbar>
        </AppBar>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {sideList('left')}
      </Drawer>
      </div>
    );
  }


}