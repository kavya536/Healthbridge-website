import './Footer.css';

export default function Footer() {
  const platformLinks = [
    "Patient Portal",
    "Doctor Console",
    "Hospital System",
    "Pharmacy Network",
    "PG Community"
  ];

  return (
    <footer className="footer-section">
      <div className="container footer-content-card">
        
        <div className="footer-layout">
          
          <div className="footer-brand">
            <img src="/logo.png" alt="HealthBridge Logo" className="footer-logo" />
            <p className="footer-desc">
              Building reliable digital solutions for<br/>modern businesses.
            </p>
          </div>

          <div className="footer-links-container">
            {/* Repeating the column 4 times as per the design image */}
            {[1, 2, 3, 4].map((colIndex) => (
              <div className="footer-column" key={colIndex}>
                <h4 className="footer-col-title">Platform</h4>
                <ul className="footer-list">
                  {platformLinks.map((link, idx) => (
                    <li key={idx}>
                      <span className="footer-item">
                        <span className="bullet">•</span> {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-copy">
              © 2024 health. All rights reserved.
            </p>
          </div>
          <div className="footer-bottom-right">
            <div className="footer-line"></div>
          </div>
        </div>

      </div>
    </footer>
  );
}
