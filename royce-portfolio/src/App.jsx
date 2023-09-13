import React from "react";
import Home from "./components/pages/Home";
import Portfolio from './components/pages/Portfolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
