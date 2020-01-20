import React from "react";

// Components
import NavBar from '../components/navbar/navbar'
import StaticPage from '../components/static_pages/StaticPage'
import ApiTest from '../components/apitest/apitest'

const Home = () => {
  return (
    <div>
      <StaticPage />
      <ApiTest />
    </div>
  );
};

export default Home;