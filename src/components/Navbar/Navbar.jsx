import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsDownloadModalOpen(true);
    window.addEventListener('openDownloadModal', handleOpenModal);
    return () => window.removeEventListener('openDownloadModal', handleOpenModal);
  }, []);

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
              <li className={`dropdown ${dropdownOpen ? 'mobile-open' : ''}`}>
                <NavLink 
                  to="/solutions" 
                  onClick={(e) => {
                    if (window.innerWidth <= 768) {
                      e.preventDefault();
                      setDropdownOpen(!dropdownOpen);
                    } else {
                      closeMenu();
                    }
                  }} 
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Solutions 
                  <span className="chevron" style={{ transform: dropdownOpen && window.innerWidth <= 768 ? 'rotate(180deg)' : '' }}>
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
            <button className="navbar-btn-primary" onClick={() => setIsDownloadModalOpen(true)}>
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

      {isDownloadModalOpen && createPortal(
        <div className="download-modal-overlay" onClick={() => setIsDownloadModalOpen(false)}>
          <div className="download-modal-card" onClick={e => e.stopPropagation()}>
            <button className="download-modal-close" onClick={() => setIsDownloadModalOpen(false)}>×</button>
            <div className="download-modal-content">
              <div className="download-modal-left">
                <h2><span className="mobile-nowrap">Stay Connected</span><br/><span className="mobile-nowrap">With <span>Health&nbsp;Bridge</span></span></h2>
                <p>Download The Health Bridge App On Android Or IOS And Access All Out Services At Your Fingertips. Explore A Seamless Management Experience And Discover A Place Of Health Supporting Through Digital Life. Live A Happy Life</p>
                
                <div className="download-app-buttons">
                  <div className="store-btn google-play-btn">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.6 2.3c-.2.2-.4.6-.4 1.1v17.2c0 .5.2.9.4 1.1l.1.1 9.7-9.7v-.2L3.7 2.2l-.1.1z" fill="#3bccff"/>
                      <path d="M13.4 12.1l3.1 3.1 3.7-2.1c1-.6 1-1.5 0-2.1l-3.7-2.1-3.1 3.2z" fill="#ffc22c"/>
                      <path d="M13.4 12.1l-9.8 9.8c-.3.3-.8.2-1.3-.1L16.5 15l-3.1-2.9z" fill="#f8323f"/>
                      <path d="M13.4 12.1L3.7 2.3c-.5-.3-1-.3-1.3 0L16.5 9l-3.1 3.1z" fill="#1bce7c"/>
                    </svg>
                    <div className="store-btn-text">
                      <small>GET IT ON</small>
                      <strong>Google Play</strong>
                    </div>
                  </div>
                  
                  <div className="store-btn app-store-btn">
                    <svg viewBox="0 0 384 512" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                    </svg>
                    <div className="store-btn-text">
                      <small>Download on the</small>
                      <strong>App Store</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="download-modal-right">
                <img src="/mobiles_img.png" alt="HealthBridge App on Mobiles" />
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
