import React from "react";
import "../styles/Home.css";
import SideBar from "../components/SideBar";
import Dashboard from "../components/Dashboard";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-itemss-container">
        <SideBar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
