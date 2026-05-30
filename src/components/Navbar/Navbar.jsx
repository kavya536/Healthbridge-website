import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <div className="container" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <nav className="navbar">
          <div className="navbar__logo-container">
            <Link to="/" onClick={closeMenu}>
              <img 
                src="/logo.png" 
                alt="HealthBridge Logo" 
                className="navbar__logo" 
              />
            </Link>
          </div>
          
          <div className={`navbar__links-wrapper ${menuOpen ? 'active' : ''}`}>
            <ul className="navbar__links">
              <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
              <li className="dropdown">
                <NavLink to="/solutions" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
                  Solutions 
                  <span className="chevron">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/solutions/patients" onClick={closeMenu} className="dropdown-item-link">
                      <svg className="menu-dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span>For Patients</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/doctors" onClick={closeMenu} className="dropdown-item-link">
                      <svg className="menu-dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                        <circle cx="20" cy="10" r="2"/>
                      </svg>
                      <span>For Doctors</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/pg-students" onClick={closeMenu} className="dropdown-item-link">
                      <svg className="menu-dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                      </svg>
                      <span>For PG Students</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/pharmacies" onClick={closeMenu} className="dropdown-item-link">
                      <svg className="menu-dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.5 3a5 5 0 0 1 7.1 7.1l-6.4 6.4a5 5 0 0 1-7.1-7.1zM8.5 11l6 6" />
                      </svg>
                      <span>For Pharmacies</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/hospitals" onClick={closeMenu} className="dropdown-item-link">
                      <svg className="menu-dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21h18" />
                        <path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14" />
                        <path d="M9 21v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4" />
                        <path d="M12 9v4" />
                        <path d="M10 11h4" />
                      </svg>
                      <span>For Hospitals/Clinics</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li><NavLink to="/platform" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Platform Ecosystem</NavLink></li>
              <li><NavLink to="/blog" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Blog</NavLink></li>
              <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>About Us</NavLink></li>
              <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
            </ul>
          </div>

          <div className="navbar__actions">
            <button className="navbar-btn-primary">
              Download App
              <svg className="button-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
