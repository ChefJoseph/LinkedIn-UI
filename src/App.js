import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from './components/LandingPage'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/home" element={<Home/>}/>
      </Routes> 
     </Router>
    </div>
  );
}

export default App;
