import './Stats.css';

const ClockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 15 15"></polyline>
  </svg>
);

const HeartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const UserIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const SupportIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
    <path d="M21 12v4a5 5 0 0 1-5 5H10"></path>
    <path d="M12 13v.01"></path>
    <path d="M12 10c0-1 1-1.5 1-2a1 1 0 0 0-2 0"></path>
  </svg>
);

const statsData = [
  {
    value: '50K+',
    label: 'Consultations',
    icon: <ClockIcon />,
    colorClass: 'icon-pink'
  },
  {
    value: '10K+',
    label: 'Doctors',
    icon: <HeartIcon />,
    colorClass: 'icon-orange'
  },
  {
    value: '1M+',
    label: 'Prescriptions',
    icon: <UserIcon />,
    colorClass: 'icon-purple'
  },
  {
    value: '500+',
    label: 'Pharmacies',
    icon: <SupportIcon />,
    colorClass: 'icon-yellow'
  }
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className={`stat-icon ${stat.colorClass}`}>
                {stat.icon}
              </div>
              <div className="stat-text">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
