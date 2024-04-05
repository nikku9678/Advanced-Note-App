import React from "react";
import Home from "./components/Home";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
    
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;
