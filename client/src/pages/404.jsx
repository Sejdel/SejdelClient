import React from "react";

// Components
import NavBar from '../components/navbar/navbar'
import StaticPage from '../components/static_pages/StaticPage'
import ApiTest from '../components/apitest/apitest'

const NotFound = () => {
  return (
    <div>
        <NavBar />
        <p>404</p>
    </div>
  );
};

export default NotFound;