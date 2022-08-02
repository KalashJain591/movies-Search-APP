import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singlemovie from "./Singlemovie";
import Home from "./Home";
import Error from "./Error";
import "./App.css";
import Copyright from "./Copyright";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="movie/:id" element={<Singlemovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    <Copyright />
  </>
);
export default App;
