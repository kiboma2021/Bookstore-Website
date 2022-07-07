import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import React from 'react';
import AddBook from './components/AddBook';
import Books from './components/Books';
import Header from './components/Header';
import Categories from './components/Categories';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/category" element={<Categories />} />
      </Routes>
    </Router>
  );
}
export default App;

