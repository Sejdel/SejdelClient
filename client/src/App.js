import React, { Component , useState} from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

// Pages
import Home from "./pages/home"
import About from "./pages/about"
import SignIn from "./pages/signin"
import SignUp from "./pages/signup"
import NotFound from "./pages/404"
import NavBar from './components/navbar/navbar'


class App extends Component {

  render() {
    return (
      <div>
      <NavBar />
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact component={NotFound} />
       </Switch>
      </Router>
      </div>
    );
  }
}


export default App;
