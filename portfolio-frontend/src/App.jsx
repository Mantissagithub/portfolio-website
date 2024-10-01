import { useState } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </Router>
  )
}

export default App
