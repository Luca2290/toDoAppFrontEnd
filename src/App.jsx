import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "./catalog/catalog.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Catalog />
    </>
  );
}

export default App;
