import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo Section */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/assets/images/logo.png"
              className="logo-img"
              width="15%"
              alt="Logo"
              loading="lazy"
            />
            <span className="ms-2 text-blue position-relative">Kairaa Techserve</span>
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={menuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" exact onClick={closeMenu}>
                  Home
                </NavLink>
              </li>

              {/* Dropdown - About */}
              <li className="nav-item dropdown hover-dropdown">
                <NavLink
                  to="/about"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  onClick={closeMenu}
                >
                  About
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/careers" onClick={closeMenu}>
                      Careers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/technologies" onClick={closeMenu}>
                      Technologies
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/working-methods" onClick={closeMenu}>
                      Working Methods
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/process-flow" onClick={closeMenu}>
                      Process Flow
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/services" onClick={closeMenu}>
                  Services
                </NavLink>
              </li>

              {/* Dropdown - Portfolio */}
              <li className="nav-item dropdown hover-dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/portfolio"
                  id="portfolioDropdown"
                  onClick={closeMenu}
                >
                  Portfolio
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="portfolioDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/portfolio/gallery" onClick={closeMenu}>
                      Gallery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/portfolio/events" onClick={closeMenu}>
                      Events
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/portfolio/projects" onClick={closeMenu}>
                      Projects
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/community" onClick={closeMenu}>
                  Community
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" onClick={closeMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <Link to="/careers" className="btn btn-outline-primary ms-3 d-none d-lg-block">
              Careers
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
