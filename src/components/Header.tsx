import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <h1>🍔 Food Cart</h1>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/menu" 
                className={`nav-link ${isActive('/menu') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/hours" 
                className={`nav-link ${isActive('/hours') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Hours
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/catering" 
                className={`nav-link ${isActive('/catering') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Catering
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>

        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 