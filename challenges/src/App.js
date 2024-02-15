import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        {/* <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five />} />
        <Route path="/six" element={<Six />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
