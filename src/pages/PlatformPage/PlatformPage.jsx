import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

  const [activeTab, setActiveTab] = useState('Patients');

  const entityDashboards = {
    Patients: {
      title: "Patient Experience Dashboard",
      stats: [
        { value: "50,234", label: "Active Patients" },
        { value: "1,847", label: "Consultations Today" },
        { value: "3,421", label: "Prescriptions Issued" }
      ],
      cards: [
        { title: "Book Appointments", subtitle: "24/7 Access" },
        { title: "Medical Records", subtitle: "Secure Storage" },
        { title: "Teleconsultations", subtitle: "Live Sessions" },
        { title: "E-Prescriptions", subtitle: "Digital Delivery" }
      ]
    },
    Doctors: {
      title: "Doctor Operations Console",
      stats: [
        { value: "8,940", label: "Verified Doctors" },
        { value: "1,240", label: "Active Consultations" },
        { value: "12,490", label: "Digital Rx Written" }
      ],
      cards: [
        { title: "E-Prescription Desk", subtitle: "Instant Generation" },
        { title: "EHR Direct Integrator", subtitle: "Patient History" },
        { title: "Income & Settlements", subtitle: "Automated Payouts" },
        { title: "Schedule Manager", subtitle: "Availability Slots" }
      ]
    },
    Hospitals: {
      title: "Hospital Operational System",
      stats: [
        { value: "420", label: "Connected Beds" },
        { value: "156", label: "Emergency Admissions" },
        { value: "1,850", label: "OPD Visitors Today" }
      ],
      cards: [
        { title: "Beds & Ward Management", subtitle: "Real-time Tracking" },
        { title: "Live OPD Coordinator", subtitle: "Patient Flow Control" },
        { title: "Emergency Direct Node", subtitle: "Instant Response" },
        { title: "Discharge Analytics", subtitle: "Optimized Billing" }
      ]
    },
    Pharmacies: {
      title: "Pharmacy Dispensing Portal",
      stats: [
        { value: "12,450", label: "Partner Pharmacies" },
        { value: "9,820", label: "Orders Dispatched" },
        { value: "22 mins", label: "Avg Delivery Time" }
      ],
      cards: [
        { title: "Rx Verification Engine", subtitle: "Authenticity Check" },
        { title: "Digital Order Pool", subtitle: "Fulfillment Queue" },
        { title: "Inventory Coordinator", subtitle: "Stock Alerts" },
        { title: "Smart Delivery Integration", subtitle: "Route Optimization" }
      ]
    },
    'PG Students': {
      title: "Post-Graduate Medical Suite",
      stats: [
        { value: "15,800", label: "Medical Students" },
        { value: "4,900", label: "Clinical Q&As Clarified" },
        { value: "320 slots", label: "Observer-ships Booked" }
      ],
      cards: [
        { title: "Clinical Cases Library", subtitle: "Interactive Cases" },
        { title: "Expert Mentor Connect", subtitle: "Doubt Clarification" },
        { title: "Live Audit Simulator", subtitle: "Auditing Audits" },
        { title: "Joint Accreditation", subtitle: "Accredited Certs" }
      ]
    }
  };

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
              <Link to="/contact" className="btn-solid" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Explore Ecosystem
              </Link>
              <Link to="/solutions/doctors" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Open Live Console
              </Link>
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
              <div 
                className={`entity-item ${activeTab === 'Patients' ? 'active' : ''}`}
                onClick={() => setActiveTab('Patients')}
              >
                <svg className="entity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Patients</span>
              </div>
              <div 
                className={`entity-item ${activeTab === 'Doctors' ? 'active' : ''}`}
                onClick={() => setActiveTab('Doctors')}
              >
                <svg className="entity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                  <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                  <circle cx="20" cy="10" r="2"/>
                </svg>
                <span>Doctors</span>
              </div>
              <div 
                className={`entity-item ${activeTab === 'Hospitals' ? 'active' : ''}`}
                onClick={() => setActiveTab('Hospitals')}
              >
                <svg className="entity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18" />
                  <path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14" />
                  <path d="M9 21v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4" />
                  <path d="M12 9v4" />
                  <path d="M10 11h4" />
                </svg>
                <span>Hospitals</span>
              </div>
              <div 
                className={`entity-item ${activeTab === 'Pharmacies' ? 'active' : ''}`}
                onClick={() => setActiveTab('Pharmacies')}
              >
                <svg className="entity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.5 3a5 5 0 0 1 7.1 7.1l-6.4 6.4a5 5 0 0 1-7.1-7.1zM8.5 11l6 6" />
                </svg>
                <span>Pharmacies</span>
              </div>
              <div 
                className={`entity-item ${activeTab === 'PG Students' ? 'active' : ''}`}
                onClick={() => setActiveTab('PG Students')}
              >
                <svg className="entity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
                <span>PG Students</span>
              </div>
            </div>
            
            {/* Dashboard Container */}
            <div className="entity-dashboard">
              <h3 className="dashboard-title">{entityDashboards[activeTab].title}</h3>
              
              <div className="dashboard-grid">
                {entityDashboards[activeTab].cards.map((card, idx) => (
                  <div className="dashboard-card" key={idx}>
                    <div className="card-icon-wrapper">
                      <img src="/icon.png" alt={`${card.title} Icon`} className="card-custom-icon" />
                    </div>
                    <div className="card-info">
                      <h4>{card.title}</h4>
                      <p>{card.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Footer */}
              <div className="dashboard-stats">
                {entityDashboards[activeTab].stats.map((stat, idx) => (
                  <div className="stat-item" key={idx}>
                    <span className="stat-number">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
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
                    <svg className="op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
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
                    <svg className="op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18" />
                      <path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14" />
                      <path d="M9 21v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4" />
                      <path d="M12 9v4" />
                      <path d="M10 11h4" />
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
                  <svg className="op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                  <svg className="op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.5 3a5 5 0 0 1 7.1 7.1l-6.4 6.4a5 5 0 0 1-7.1-7.1zM8.5 11l6 6" />
                  </svg>
                </div>
                <div className="op-mini-info">
                  <h4 className="op-mini-title">Pharmacy Network</h4>
                  <p className="op-mini-desc">Inventory, order matching, logistics</p>
                </div>
              </div>

              <div className="op-mini-card op-card-student">
                <div className="op-icon-square">
                  <svg className="op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <div className="op-mini-info">
                  <h4 className="op-mini-title">PG Student Community</h4>
                  <p className="op-mini-desc">Mentorship, case discussions, mock drills</p>
                </div>
              </div>

              <div className="op-mini-card op-card-analytics">
                <div className="op-icon-square">
                  <svg className="op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
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
