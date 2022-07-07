import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import React from 'react';
import Calc from './pages/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import NotMatch from './pages/NoMatch';
import Navbar from './pages/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calc />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  );
}
export default App;

