import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import NavBar from '../navbar/navbar'
import StaticPage from '../static_pages/StaticPage'

function App() {
  return (
    <div className="App">

      <NavBar />

      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
      </header>
      SejdelSöndag

      <Button variant="contained" color="primary">
        f
      </Button>

      <StaticPage />
    </div>
  );
}

export default App;
