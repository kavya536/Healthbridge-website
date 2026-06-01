import './Patients.css';

export default function Patients() {
  return (
    <section className="patients-section">
      <div className="patients-container">
        
        {/* Left Side: Image */}
        <div className="patients-image-wrapper">
          <img src="/doctor_clinic_treat.png" alt="Doctor treating patient in clinic" className="patients-image" />
        </div>

        {/* Right Side: Content */}
        <div className="patients-content">
          <span className="section-tag">For Patients</span>
          <h2 className="section-title">
            <span className="mobile-nowrap">Designed To Support Every Step</span><br />
            <span className="text-teal mobile-nowrap" style={{ color: '#20C7B6', textTransform: 'none', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit', fontFamily: 'inherit' }}>Of Your Healthcare <br className="mobile-break" />Journey</span>
          </h2>
          <p className="patients-desc">
            Access quality healthcare, anytime, anywhere. Everything you need, in one simple app. Connect with verified specialists, consult instantly, and keep all your reports in one secure place.
          </p>

          <ul className="patients-features">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#34C759"/>
                <path d="M7 12l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Search & Connect With Trusted Doctors
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#34C759"/>
                <path d="M7 12l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Instant Video Consultations
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#34C759"/>
                <path d="M7 12l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Digital Prescriptions & Reports
            </li>
          </ul>

          <button className="download-btn" onClick={() => window.dispatchEvent(new Event('openDownloadModal'))}>
            Download App
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
