import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header>
      <Link to="/" className="brand" onClick={closeMenu}>
        Roomio
      </Link>
      
      <button 
        className={`menu-btn ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger"></span>
      </button>

      <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
        <div className="navigation-items">
          <Link 
            to="/" 
            className={isActive('/') ? 'active' : ''}
            onClick={closeMenu}
          >
            Inicio
          </Link>
          <Link 
            to="/galeria" 
            className={isActive('/galeria') ? 'active' : ''}
            onClick={closeMenu}
          >
            Galería
          </Link>
          <Link 
            to="/reservas" 
            className={isActive('/reservas') ? 'active' : ''}
            onClick={closeMenu}
          >
            Reservas
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

