import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Booking from './pages/Booking/Booking';
import ThankYou from './pages/ThankYou/ThankYou';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/reservas" element={<Booking />} />
        <Route path="/gracias" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;

