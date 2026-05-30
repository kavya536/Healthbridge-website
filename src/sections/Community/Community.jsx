import './Community.css';

export default function Community() {
  return (
    <section className="community-section">
      <div className="community-bg">
        <img src="/pg_studnets_bg_img.jpg" alt="Students Background" />
        <div className="community-overlay"></div>
      </div>

      <div className="container community-content">
        <div className="community-header">
          <span className="community-tag">For PG Students</span>
          <h2 className="community-title">Real Conversations & Real Learning.</h2>
          <p className="community-subtitle">
            Join India's Most Active Clinical Learning Network For Future Doctors. Elevate Your Medical Expertise<br />
            By Analyzing Real Cases, Participating In Expert-Led Doubt Resolutions, And Gaining Deep Insights<br />
            That Go Beyond Standard Medical Textbooks.
          </p>
        </div>

        <div className="community-cards">
          <div className="com-card">
            <div className="com-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
            </div>
            <h3 className="com-card-title">Clinical Cases</h3>
            <p className="com-card-desc">Access verified clinical case discussions and real-world medical insights.</p>
          </div>
          
          <div className="com-card">
            <div className="com-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
                <line x1="12" y1="2" x2="12" y2="4" />
              </svg>
            </div>
            <h3 className="com-card-title">Mock Drills</h3>
            <p className="com-card-desc">Participate in daily mock drills and improve your clinical preparation.</p>
          </div>
          
          <div className="com-card">
            <div className="com-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="com-card-title">Expert Mentorship</h3>
            <p className="com-card-desc">Connect with verified senior mentors for guidance and professional growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
