import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import NavBar from '../navbar/navbar'
import StaticPage from '../static_pages/StaticPage'
import ApiTest from '../apitest/apitest'





function App() {
  return (
    <div className="App">

      <NavBar />

      <StaticPage />
      <ApiTest />
    </div>
  );
}

export default App;
