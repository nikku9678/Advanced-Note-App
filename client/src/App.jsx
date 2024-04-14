import React, { useContext, useEffect } from "react";
import Home from "./components/Home";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Base_url } from "./config";
import axios from 'axios';
import { useNavigate ,Navigate } from 'react-router-dom'
import UserNotes from "./components/UserNotes";
import Profile from "./components/Profile";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/user-notes" element={<UserNotes />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
