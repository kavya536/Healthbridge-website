import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
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
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>

          <div className="footer-links-container">
            <div className="footer-column">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-list">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/solutions" className="footer-link">Solutions</Link></li>
                <li><Link to="/about" className="footer-link">About</Link></li>
                <li><Link to="/blog" className="footer-link">Blog</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-col-title">Our Services</h4>
              <ul className="footer-list">
                <li><Link to="/patients" className="footer-link">For Patients</Link></li>
                <li><Link to="/doctors" className="footer-link">For Doctors</Link></li>
                <li><Link to="/pharmacies" className="footer-link">For Pharmacies</Link></li>
                <li><Link to="/pg-students" className="footer-link">For PG Students</Link></li>
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
                  <span>+91 9267892398</span>
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
