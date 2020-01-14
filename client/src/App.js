import React, { Component } from "react";

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
import NotFound from "./pages/404"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact component={NotFound} />
       </Switch>
      </Router>
    );
  }
}


export default App;
