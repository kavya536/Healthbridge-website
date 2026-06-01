import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const { pathname } = useLocation();

  const handleLinkClick = (path) => {
    if (pathname === path) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="footer-section">
      <div className="container footer-content-card">
        
        <div className="footer-layout">
          
          <div className="footer-brand">
            <img src="/logo.png" alt="HealthBridge Logo" className="footer-logo" />
            <p className="footer-desc">
              Building reliable digital solutions for modern healthcare. Your health, our expertise, timeless results.
            </p>
            <div className="footer-socials">
              <Link to="/" onClick={() => handleLinkClick('/')} className="social-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></Link>
              <Link to="/" onClick={() => handleLinkClick('/')} className="social-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></Link>
              <Link to="/" onClick={() => handleLinkClick('/')} className="social-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></Link>
              <Link to="/" onClick={() => handleLinkClick('/')} className="social-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></Link>
            </div>
          </div>

          <div className="footer-links-container">
            <div className="footer-column">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-list">
                <li><Link to="/" onClick={() => handleLinkClick('/')} className="footer-link">Home</Link></li>
                <li><Link to="/solutions" onClick={() => handleLinkClick('/solutions')} className="footer-link">Solutions</Link></li>
                <li><Link to="/platform" onClick={() => handleLinkClick('/platform')} className="footer-link">Platform Ecosystem</Link></li>
                <li><Link to="/blog" onClick={() => handleLinkClick('/blog')} className="footer-link">Blog</Link></li>
                <li><Link to="/about" onClick={() => handleLinkClick('/about')} className="footer-link">About Us</Link></li>
                <li><Link to="/contact" onClick={() => handleLinkClick('/contact')} className="footer-link">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-col-title">Our Services</h4>
              <ul className="footer-list">
                <li><Link to="/solutions/patients" onClick={() => handleLinkClick('/solutions/patients')} className="footer-link">For Patients</Link></li>
                <li><Link to="/solutions/doctors" onClick={() => handleLinkClick('/solutions/doctors')} className="footer-link">For Doctors</Link></li>
                <li><Link to="/solutions/pharmacies" onClick={() => handleLinkClick('/solutions/pharmacies')} className="footer-link">For Pharmacies</Link></li>
                <li><Link to="/solutions/pg-students" onClick={() => handleLinkClick('/solutions/pg-students')} className="footer-link">For PG Students</Link></li>
                <li><Link to="/solutions/hospitals" onClick={() => handleLinkClick('/solutions/hospitals')} className="footer-link">For Hospitals/Clinics</Link></li>
              </ul>
            </div>

            <div className="footer-column contact-column">
              <h4 className="footer-col-title">Contact Us</h4>
              <ul className="footer-contact-list">
                <li>
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>Ashok Pride, Kukatpally,<br/>Hyderabad, 500072</span>
                </li>
                <li>
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>+91 9618344086</span>
                </li>
                <li>
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>contact@healthbridge.com</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-copy">
              © 2026 HealthBridge. All rights reserved.
            </p>
          </div>
          <div className="footer-bottom-right">
            <div className="footer-policy-links">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Service</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
