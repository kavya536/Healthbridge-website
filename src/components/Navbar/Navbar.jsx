import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <div className="container">
        <nav className="navbar">
          <div className="navbar__logo-container">
            <Link to="/">
              <img 
                src="/logo.png" 
                alt="HealthBridge Logo" 
                className="navbar__logo" 
              />
            </Link>
          </div>
          
          <div className="navbar__links-wrapper">
            <ul className="navbar__links">
              <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
              <li className="dropdown">
                <NavLink to="/solutions" className={({ isActive }) => (isActive ? "active" : "")}>
                  Solutions 
                  <span className="chevron">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </NavLink>
                <ul className="dropdown-menu">
                  <li><Link to="/solutions/patients">For Patients</Link></li>
                  <li><Link to="/solutions/doctors">For Doctors</Link></li>
                  <li><Link to="/solutions/pg-students">For PG Students</Link></li>
                  <li><Link to="/solutions/pharmacies">For Pharmacies</Link></li>
                  <li><Link to="/solutions/hospitals">For Hospitals/Clinics</Link></li>
                </ul>
              </li>
              <li><NavLink to="/platform" className={({ isActive }) => (isActive ? "active" : "")}>Platform Ecosystem</NavLink></li>
              <li><NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>Blog</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About Us</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
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
        </nav>
      </div>
    </header>
  );
}
