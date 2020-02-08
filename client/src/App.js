import React, { Component , useState} from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import amber from '@material-ui/core/colors/amber';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

// Pages
import Home from "./pages/home";
import About from "./pages/about";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Highscore from "./pages/highscore";
import Pour from "./pages/pour";
import NotFound from "./pages/404";
import NavBar from './components/navbar/navbar';
import { dark } from "@material-ui/core/styles/createPalette";


class App extends Component {

 
  render() {
    const theme = createMuiTheme({
      palette: {
        type: 'dark',
        primary: {
          main: '#ffa726',
        },
        secondary: {
          main: '#e65100',
        },
      },
      status: {
        danger: 'orange',
      },
      typography: {
        fontFamily: [
          'Roboto'
        ]
      }
    });
    return (
      <div>
      <ThemeProvider theme={theme}>
      <NavBar />
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/highscore" component={Highscore} />
        <Route exact path="/pour" component={Pour} />
        <Route exact component={NotFound} />
       </Switch>
      </Router>
      </ThemeProvider>
      </div>
    );
  }
}


export default App;
