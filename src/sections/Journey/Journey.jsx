import './Journey.css';

export default function Journey() {
  return (
    <section className="journey-section">
      <div className="container journey-layout">
        
        <div className="journey-image-wrapper">
          <img src="/doctor_patient.jpg" alt="Doctor consulting patient" className="journey-image" />
        </div>

        <div className="journey-content">
          <span className="section-tag">For Patients</span>
          <h2 className="section-title">
            Designed To Support Every Step <br/>
            <span className="text-primary">Of Your Healthcare Journey</span>
          </h2>
          
          <p className="journey-desc">
            Access quality healthcare, anytime, anywhere. Everything you need, in one simple app. Connect with verified specialists, consult instantly, and keep all your reports in one secure place.
          </p>

          <ul className="journey-features">
            <li>
              <span className="check-icon">✓</span> Search & Connect With Trusted Doctors
            </li>
            <li>
              <span className="check-icon">✓</span> Instant Video Consultations
            </li>
            <li>
              <span className="check-icon">✓</span> Digital Prescriptions & Reports
            </li>
          </ul>

          <button className="btn-primary" style={{marginTop: '20px'}}>
            Download App <span className="mobile-icon">📱</span>
          </button>
        </div>

      </div>
    </section>
  );
}
