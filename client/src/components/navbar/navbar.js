import React, { Component } from "react";
import './navbar.css';
import AppBar from '@material/core/AppBar'
import Toolbar from '@material/core/ToolBar'
import IconButton from '@material/core/IconButton'
import MenuIcon from '@material/core/MenuIcon'
import classes from '@material/core/classes'
import Typography from '@material/core/Typography'
import Button from '@material/core/Button'



 
class NavBar extends Component {
  render() {
    return (
        <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            News
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
    );
  }
}
 
export default NavBar;