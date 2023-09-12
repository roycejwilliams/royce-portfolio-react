import React from 'react'
import Home from "./components/pages/Home"
import Portfolio from './components/pages/Portfolio';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./index.css"


function App() {
  return (
    <>
    <Router>
      <Route index path="/" element= {<Home />} />
      <Route path="/portfolio" component={Portfolio} />
    </Router>
    </>
  )
}

export default App

