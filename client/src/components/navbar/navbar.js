import React, { Component } from "react";
import './navbar.css';
 
class NavBar extends Component {
  render() {
    return (
<ul>
  <li><a href="">Home</a></li>
  <li><a href="">Memes</a></li>
  <li><a href="">High Score</a></li>
  <li><a href="">About</a></li>
</ul> 
    );
  }
}
 
export default NavBar;