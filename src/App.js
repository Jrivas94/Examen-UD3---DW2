import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes, route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="background"></div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
