import { Link } from 'react-router-dom';
import './Solutions.css';

const solutionsData = [
  {
    id: 1,
    title: 'Patients',
    desc: 'Online consultations, prescription delivery, and secure health records in one place.',
    path: '/solutions/patients',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#20C7B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Doctors',
    desc: 'Smart consultations, e-prescriptions, earnings tracking, and analytics.',
    path: '/solutions/doctors',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#20C7B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
        <circle cx="20" cy="10" r="2"></circle>
      </svg>
    )
  },
  {
    id: 3,
    title: 'PG Students',
    desc: 'Learn, connect, gain mentorship, and grow with the medical community.',
    path: '/solutions/pg-students',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#20C7B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Pharmacies',
    desc: 'Manage digital orders, e-prescriptions, inventory, and business growth.',
    path: '/solutions/pharmacies',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#20C7B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.5 3a5 5 0 0 1 7.1 7.1l-6.4 6.4a5 5 0 0 1-7.1-7.1zM8.5 11l6 6" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Hospitals',
    desc: 'Simplify patient management, digital records, and healthcare insights.',
    path: '/solutions/hospitals',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#20C7B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14" />
        <path d="M9 21v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4" />
        <path d="M12 9v4" />
        <path d="M10 11h4" />
      </svg>
    )
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
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to={item.path} className="learn-more" style={{ textDecoration: 'none' }}>
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
