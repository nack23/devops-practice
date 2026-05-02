import React from "react";
import HeaderBanner from "./components/HeaderBanner";
import Navbar from "./components/Navbar";

import Home from "./components/Home";

import "./App.css"; 
import Research from "./components/Research";
import Footer from "./components/Footer";
import Count from "./components/Count"

import ResearchGroup from "./components/ResearchGroup";

function App() {
  return (
    <div>
      <HeaderBanner />
      <Navbar />
      <Home />
      
      
      
      <Count />
      <ResearchGroup/>
      <Research />
      <Footer />
     
      
    </div>
  );
}

export default App;