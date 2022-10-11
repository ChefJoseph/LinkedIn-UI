import './App.css';
import styled from 'styled-components';
import LandingPage from './components/LandingPage'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
      </Routes>    
     </Router>
    </div>
  );
}

export default App;
