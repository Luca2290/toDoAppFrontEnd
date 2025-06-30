import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Register} />
        <Route path="/Login" Component={Login} />
        <Route path="/Home" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
