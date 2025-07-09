import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Membership from './pages/Membership';

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Planet Fitness Manager</h1>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/classes">Classes</Link> | 
          <Link to="/membership">Membership</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
