import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background">
        <img src="/hero section.png" alt="Hero Background" />
        <div className="hero__overlay"></div>
      </div>
      
      <div className="hero__content">
        <div className="hero__heading-container">
          <h1 className="hero__title">
            ONE PLATFORM FOR <span className="text-teal">MODERN</span><br />
            <span className="text-teal">HEALTHCARE</span>
          </h1>
        </div>
        <p className="hero__subtitle">
          Consultations, Digital Prescriptions, Medicine Delivery, And Medical<br />
          Learning – Unified In One Intelligent Platform.
        </p>
        <div className="hero__actions">
          <button className="btn-hero-primary">
            Book Appointment &rarr;
          </button>
          <button className="btn-hero-secondary">
            <span className="play-icon-wrapper">
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 7.13397C14.1667 7.51887 14.1667 8.48113 13.5 8.86603L1.5 15.7942C0.833334 16.1791 0 15.698 0 14.9282L0 1.0718C0 0.301997 0.833333 -0.179129 1.5 0.205771L13.5 7.13397Z" fill="#333333"/>
              </svg>
            </span>
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
