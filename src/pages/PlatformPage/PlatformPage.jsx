import { useEffect, useState } from 'react';
import './PlatformPage.css';
import '../../sections/Trust/Trust.css';
import '../../sections/CTA/CTA.css';

const faqs = [
  {
    q: "Is HealthBridge Available Across India?",
    a: "Yes, HealthBridge is fully accessible across India. We partner with local pharmacies and verified clinics nationwide to ensure seamless healthcare delivery."
  },
  {
    q: "Is My Data Safe And Private?",
    a: "Absolutely. We employ bank-level encryption and strict HIPAA-compliant protocols to ensure your medical records and personal data remain completely secure."
  },
  {
    q: "How Are Prescriptions Secured?",
    a: "Prescriptions are digitally signed by verified doctors and stored securely in your patient portal, accessible only by you and your authorized pharmacy."
  },
  {
    q: "Who Verifies The Medical Practitioners On HealthBridge?",
    a: "Every practitioner undergoes a rigorous multi-step background check, including verification of medical licenses and professional credentials by our compliance team."
  }
];

export default function PlatformPage() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="platform-page">
      {/* Ecosystem Hero Section */}
      <section className="platform-hero-section">
        <div className="container platform-hero-layout">
          <div className="platform-hero-content">
            <h1 className="platform-hero-title">
              One Unified Ecosystem Connecting <span className="text-teal">Every Point Of Care</span>
            </h1>
            <p className="platform-hero-desc">
              HealthBridge Seamlessly Connects Patients, Doctors, Hospitals, Pharmacies, And PG Students, And Clinical Systems Through One Intelligent Healthcare Platform.
            </p>
            <div className="platform-hero-actions">
              <button className="btn-solid">
                Explore Ecosystem
              </button>
              <button className="btn-outline">
                Open Live Console
              </button>
            </div>
          </div>
          
          <div className="platform-hero-image-wrapper">
            <img src="/ecosystem.jpg" alt="HealthBridge Unified Ecosystem" className="platform-hero-image" />
          </div>
        </div>
      </section>

      {/* How Healthcare Entities Work Together Section */}
      <section className="entities-work-section">
        <div className="container">
          <h2 className="entities-section-title">
            How Healthcare Entities <span className="text-teal">Work Together</span>
          </h2>
          
          <div className="entities-layout">
            {/* Sidebar list of entities */}
            <div className="entities-sidebar">
              <div className="entity-item active">
                <svg className="entity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                  <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                  <circle cx="20" cy="10" r="2"/>
                </svg>
                <span>Patients</span>
              </div>
              <div className="entity-item">
                <svg className="entity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                  <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                  <circle cx="20" cy="10" r="2"/>
                </svg>
                <span>Doctors</span>
              </div>
              <div className="entity-item">
                <svg className="entity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                  <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                  <circle cx="20" cy="10" r="2"/>
                </svg>
                <span>Hospitals</span>
              </div>
              <div className="entity-item">
                <svg className="entity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                  <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                  <circle cx="20" cy="10" r="2"/>
                </svg>
                <span>Pharmacies</span>
              </div>
              <div className="entity-item">
                <svg className="entity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                  <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                  <circle cx="20" cy="10" r="2"/>
                </svg>
                <span>PG Students</span>
              </div>
            </div>
            
            {/* Dashboard Container */}
            <div className="entity-dashboard">
              <h3 className="dashboard-title">Patient Experience Dashboard</h3>
              
              <div className="dashboard-grid">
                <div className="dashboard-card">
                  <div className="card-icon-wrapper">
                    <img src="/icon.png" alt="Book Appointments Icon" className="card-custom-icon" />
                  </div>
                  <div className="card-info">
                    <h4>Book Appointments</h4>
                    <p>24/7 Access</p>
                  </div>
                </div>

                <div className="dashboard-card">
                  <div className="card-icon-wrapper">
                    <img src="/icon.png" alt="Medical Records Icon" className="card-custom-icon" />
                  </div>
                  <div className="card-info">
                    <h4>Medical Records</h4>
                    <p>Secure Storage</p>
                  </div>
                </div>

                <div className="dashboard-card">
                  <div className="card-icon-wrapper">
                    <img src="/icon.png" alt="Teleconsultations Icon" className="card-custom-icon" />
                  </div>
                  <div className="card-info">
                    <h4>Teleconsultations</h4>
                    <p>Live Sessions</p>
                  </div>
                </div>

                <div className="dashboard-card">
                  <div className="card-icon-wrapper">
                    <img src="/icon.png" alt="E-Prescriptions Icon" className="card-custom-icon" />
                  </div>
                  <div className="card-info">
                    <h4>E-Prescriptions</h4>
                    <p>Digital Delivery</p>
                  </div>
                </div>
              </div>

              {/* Stats Footer */}
              <div className="dashboard-stats">
                <div className="stat-item">
                  <span className="stat-number">50,234</span>
                  <span className="stat-label">Active Patients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1,847</span>
                  <span className="stat-label">Consultations Today</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3,421</span>
                  <span className="stat-label">Prescriptions Issued</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Healthcare Data Exchange Section */}
      <section className="data-exchange-section">
        <div className="container">
          <h2 className="exchange-section-title">
            Real-Time Healthcare Data Exchange
          </h2>
          
          <div className="exchange-grid">
            <div className="exchange-node">
              <div className="node-icon-wrapper">
                <svg className="node-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="node-info">
                <h3>Patient</h3>
                <p>Active</p>
              </div>
            </div>

            <div className="exchange-node">
              <div className="node-icon-wrapper">
                <svg className="node-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="node-info">
                <h3>Doctor Consultation</h3>
                <p>Active</p>
              </div>
            </div>

            <div className="exchange-node">
              <div className="node-icon-wrapper">
                <svg className="node-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="node-info">
                <h3>Digital Prescription</h3>
                <p>Active</p>
              </div>
            </div>

            <div className="exchange-node">
              <div className="node-icon-wrapper">
                <svg className="node-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="node-info">
                <h3>Pharmacy Validation</h3>
                <p>Active</p>
              </div>
            </div>

            <div className="exchange-node">
              <div className="node-icon-wrapper">
                <svg className="node-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="node-info">
                <h3>Medicine Dispatch</h3>
                <p>Active</p>
              </div>
            </div>

            <div className="exchange-node">
              <div className="node-icon-wrapper">
                <svg className="node-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="node-info">
                <h3>Delivery Tracking</h3>
                <p>Active</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* City Skyline Decorative Background Silhouette */}
        <div className="skyline-decor"></div>
      </section>

      {/* Powering Every Healthcare Operation Section */}
      <section className="operations-section">
        <div className="container">
          <h2 className="operations-section-title">
            Powering Every <span className="text-teal">Healthcare Operation</span>
          </h2>
          
          <div className="operations-layout">
            {/* Left Column: Big Cards with graphs */}
            <div className="operations-main-cards">
              <div className="op-large-card op-card-patient">
                <div className="op-card-header">
                  <div className="op-icon-square">
                    <svg className="op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                      <circle cx="20" cy="10" r="2"/>
                    </svg>
                  </div>
                </div>
                <div className="op-card-body">
                  <h3 className="op-card-title">Patient Management</h3>
                  <p className="op-card-desc">Appointments, records, prescriptions, reports</p>
                </div>
                <div className="op-graph-container op-patient-graph">
                  <div className="op-bar" style={{ height: '45px' }}></div>
                  <div className="op-bar" style={{ height: '70px' }}></div>
                  <div className="op-bar" style={{ height: '40px' }}></div>
                  <div className="op-bar" style={{ height: '70px' }}></div>
                  <div className="op-bar" style={{ height: '48px' }}></div>
                  <div className="op-bar" style={{ height: '70px' }}></div>
                  <div className="op-bar" style={{ height: '42px' }}></div>
                  <div className="op-bar" style={{ height: '70px' }}></div>
                </div>
              </div>

              <div className="op-large-card op-card-hospital">
                <div className="op-card-header">
                  <div className="op-icon-square">
                    <svg className="op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                      <circle cx="20" cy="10" r="2"/>
                    </svg>
                  </div>
                </div>
                <div className="op-card-body">
                  <h3 className="op-card-title">Hospital Systems</h3>
                  <p className="op-card-desc">OPD management, workflows, staff access</p>
                </div>
                <div className="op-graph-container op-hospital-graph">
                  <div className="op-bar" style={{ height: '45px' }}></div>
                  <div className="op-bar" style={{ height: '70px' }}></div>
                  <div className="op-bar" style={{ height: '40px' }}></div>
                  <div className="op-bar" style={{ height: '70px' }}></div>
                  <div className="op-bar" style={{ height: '48px' }}></div>
                  <div className="op-bar" style={{ height: '70px' }}></div>
                  <div className="op-bar" style={{ height: '42px' }}></div>
                  <div className="op-bar" style={{ height: '70px' }}></div>
                </div>
              </div>
            </div>

            {/* Right Column: Mini Cards */}
            <div className="operations-side-cards">
              <div className="op-mini-card op-card-doctor">
                <div className="op-icon-square">
                  <svg className="op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                    <circle cx="20" cy="10" r="2"/>
                  </svg>
                </div>
                <div className="op-mini-info">
                  <h4 className="op-mini-title">Doctor Console</h4>
                  <p className="op-mini-desc">Consultations, analytics, e-prescriptions</p>
                </div>
              </div>

              <div className="op-mini-card op-card-pharmacy">
                <div className="op-icon-square">
                  <svg className="op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                    <circle cx="20" cy="10" r="2"/>
                  </svg>
                </div>
                <div className="op-mini-info">
                  <h4 className="op-mini-title">Pharmacy Network</h4>
                  <p className="op-mini-desc">Inventory, order matching, logistics</p>
                </div>
              </div>

              <div className="op-mini-card op-card-student">
                <div className="op-icon-square">
                  <svg className="op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                    <circle cx="20" cy="10" r="2"/>
                  </svg>
                </div>
                <div className="op-mini-info">
                  <h4 className="op-mini-title">PG Student Community</h4>
                  <p className="op-mini-desc">Mentorship, case discussions, mock drills</p>
                </div>
              </div>

              <div className="op-mini-card op-card-analytics">
                <div className="op-icon-square">
                  <svg className="op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                    <circle cx="20" cy="10" r="2"/>
                  </svg>
                </div>
                <div className="op-mini-info">
                  <h4 className="op-mini-title">Analytics & AI</h4>
                  <p className="op-mini-desc">Insights, predictive healthcare analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title text-center" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '42px', fontWeight: 800, color: '#2d3748', marginBottom: '42px', textAlign: 'center' }}>
            Frequently Asked <span className="text-teal" style={{ color: '#20C7B6', textTransform: 'none' }}>Questions</span>
          </h2>
          
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div 
                className="faq-item" 
                key={idx}
                onClick={() => toggleFaq(idx)}
                style={{ cursor: 'pointer' }}
              >
                <div className="faq-question-row">
                  <span className="faq-question">{faq.q}</span>
                  <span className="faq-icon" style={{ transform: openIdx === idx ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}>
                    +
                  </span>
                </div>
                {openIdx === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected With Health Bridge Section */}
      <section className="app-download-section">
        <div className="container app-layout">
          <div className="app-content">
            <h2 className="section-title" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '42px', fontWeight: 800, color: '#2d3748', marginBottom: '24px', lineHeight: 1.3, marginTop: 0 }}>
              Stay Connected<br/>
              With <span className="text-teal" style={{ color: '#20C7B6', textTransform: 'none' }}>Health Bridge</span>
            </h2>
            <p className="app-desc">
              Download The Health Bridge App On Android Or IOS And Access All Out Services At Your Fingertips. Explore A Seamless Management Experience And Discover A Place Of Health Supporting Through Digital Life. Live A Happy Life
            </p>
            <div className="store-buttons">
              <a href="#" className="store-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
              </a>
              <a href="#" className="store-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" />
              </a>
            </div>
          </div>
          <div className="app-image-wrapper">
            <img src="/mobiles_img.png" alt="HealthBridge Mobile App" className="app-image" />
          </div>
        </div>
      </section>
    </main>
  );
}
