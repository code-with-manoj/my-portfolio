import React from "react";
import Navbar from "./Cmp/Layout/Navbar";
import Home from "./Cmp/Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./Cmp/Layout/Footer";
import About from "./Cmp/Pages/Home/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Footer />
    </>
  );
};

export default App;
