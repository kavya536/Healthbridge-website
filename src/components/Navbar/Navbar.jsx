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
                  <li><Link to="/solutions/patients" onClick={closeMenu}>For Patients</Link></li>
                  <li><Link to="/solutions/doctors" onClick={closeMenu}>For Doctors</Link></li>
                  <li><Link to="/solutions/pg-students" onClick={closeMenu}>For PG Students</Link></li>
                  <li><Link to="/solutions/pharmacies" onClick={closeMenu}>For Pharmacies</Link></li>
                  <li><Link to="/solutions/hospitals" onClick={closeMenu}>For Hospitals/Clinics</Link></li>
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
