import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import NavBar from '../navbar/navbar'
import StaticPage from '../static_pages/StaticPage'

function App() {
  return (
    <div className="App">

      <NavBar />

      <StaticPage />
    </div>
  );
}

export default App;
