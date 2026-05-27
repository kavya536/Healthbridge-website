import './Solutions.css';

const solutionsData = [
  {
    id: 1,
    title: 'Patients',
    desc: 'Online consultations, prescription delivery, and secure health records in one place.',
  },
  {
    id: 2,
    title: 'Doctors',
    desc: 'Smart consultations, e-prescriptions, earnings tracking, and analytics.',
  },
  {
    id: 3,
    title: 'PG Students',
    desc: 'Learn, connect, gain mentorship, and grow with the medical community.',
  },
  {
    id: 4,
    title: 'Pharmacies',
    desc: 'Manage digital orders, e-prescriptions, inventory, and business growth.',
  },
  {
    id: 5,
    title: 'Hospitals',
    desc: 'Simplify patient management, digital records, and healthcare insights.',
  }
];

export default function Solutions() {
  return (
    <section className="solutions-section">
      <div className="container">
        
        {/* Only heading is centered */}
        <div className="solutions-header">
          <h2 className="solutions-title">
            <span className="solutions-tag">Connected Care</span>
            Solutions For Everyone In <span className="text-teal" style={{ textTransform: 'none' }}>Healthcare</span>
          </h2>
        </div>

        {/* Grid starts from the left, not centered rows */}
        <div className="solutions-grid">
          {solutionsData.map((item) => (
            <div key={item.id} className="solution-card">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#20C7B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
                  <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
                  <circle cx="20" cy="10" r="2"></circle>
                </svg>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="learn-more">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
