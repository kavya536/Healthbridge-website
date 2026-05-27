import './Community.css';

export default function Community() {
  const StethoscopeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );

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
              <StethoscopeIcon />
            </div>
            <h3 className="com-card-title">Clinical Cases</h3>
            <p className="com-card-desc">Access verified clinical case discussions and real-world medical insights.</p>
          </div>
          
          <div className="com-card">
            <div className="com-card-icon">
              <StethoscopeIcon />
            </div>
            <h3 className="com-card-title">Mock Drills</h3>
            <p className="com-card-desc">Participate in daily mock drills and improve your clinical preparation.</p>
          </div>
          
          <div className="com-card">
            <div className="com-card-icon">
              <StethoscopeIcon />
            </div>
            <h3 className="com-card-title">Expert Mentorship</h3>
            <p className="com-card-desc">Connect with verified senior mentors for guidance and professional growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
