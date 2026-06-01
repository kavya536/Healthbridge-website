import { useEffect, useState, useRef } from 'react';
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
  
  const graphRef = useRef(null);
  const [graphsInView, setGraphsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setGraphsInView(true);
          } else {
            setGraphsInView(false);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (graphRef.current) {
      observer.observe(graphRef.current);
    }
    
    return () => {
      if (graphRef.current) observer.unobserve(graphRef.current);
    };
  }, []);

  const entityDashboards = {
    Patients: {
      title: "Patient Experience Dashboard",
      stats: [
        { value: "50,234", label: "Active Patients" },
        { value: "1,847", label: "Consultations Today" },
        { value: "3,421", label: "Prescriptions Issued" }
      ],
      cards: [
        { title: "Book Appointments", subtitle: "24/7 Access", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> },
        { title: "Medical Records", subtitle: "Secure Storage", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> },
        { title: "Teleconsultations", subtitle: "Live Sessions", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg> },
        { title: "E-Prescriptions", subtitle: "Digital Delivery", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg> }
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
        { title: "E-Prescription Desk", subtitle: "Instant Generation", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg> },
        { title: "EHR Direct Integrator", subtitle: "Patient History", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg> },
        { title: "Income & Settlements", subtitle: "Automated Payouts", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><path d="M6 3h12"></path><path d="M6 8h12"></path><path d="M6 13h8.5l-1 0c-2.5 0-5 2.5-5 5s2.5 5 5 5"></path><path d="M13 13l-7 8"></path></svg> },
        { title: "Schedule Manager", subtitle: "Availability Slots", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> }
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
        { title: "Beds & Ward Management", subtitle: "Real-time Tracking", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> },
        { title: "Live OPD Coordinator", subtitle: "Patient Flow Control", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
        { title: "Emergency Direct Node", subtitle: "Instant Response", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> },
        { title: "Discharge Analytics", subtitle: "Optimized Billing", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg> }
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
        { title: "Rx Verification Engine", subtitle: "Authenticity Check", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg> },
        { title: "Digital Order Pool", subtitle: "Fulfillment Queue", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg> },
        { title: "Inventory Coordinator", subtitle: "Stock Alerts", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> },
        { title: "Smart Delivery Integration", subtitle: "Route Optimization", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg> }
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
        { title: "Clinical Cases Library", subtitle: "Interactive Cases", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg> },
        { title: "Expert Mentor Connect", subtitle: "Doubt Clarification", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> },
        { title: "Live Audit Simulator", subtitle: "Auditing Audits", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> },
        { title: "Joint Accreditation", subtitle: "Accredited Certs", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-custom-icon"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg> }
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
                <span>For Patients</span>
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
                <span>For Doctors</span>
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
                <span>For Hospitals/Clinics</span>
              </div>
              <div 
                className={`entity-item ${activeTab === 'Pharmacies' ? 'active' : ''}`}
                onClick={() => setActiveTab('Pharmacies')}
              >
                <svg className="entity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.5 3a5 5 0 0 1 7.1 7.1l-6.4 6.4a5 5 0 0 1-7.1-7.1zM8.5 11l6 6" />
                </svg>
                <span>For Pharmacies</span>
              </div>
              <div 
                className={`entity-item ${activeTab === 'PG Students' ? 'active' : ''}`}
                onClick={() => setActiveTab('PG Students')}
              >
                <svg className="entity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
                <span>For PG Students</span>
              </div>
            </div>
            
            {/* Dashboard Container */}
            <div className="entity-dashboard">
              <h3 className="dashboard-title">{entityDashboards[activeTab].title}</h3>
              
              <div className="dashboard-grid">
                {entityDashboards[activeTab].cards.map((card, idx) => (
                  <div className="dashboard-card" key={idx}>
                    <div className="card-icon-wrapper">
                      {card.icon}
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
        
      </section>

      {/* Powering Every Healthcare Operation Section */}
      <section className="operations-section">
        <div className="container">
          <h2 className="operations-section-title">
            Powering Every <span className="text-teal">Healthcare Operation</span>
          </h2>
          
          <div className="operations-layout">
            {/* Left Column: Big Cards with graphs */}
            <div className="operations-main-cards" ref={graphRef}>
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
                <div className={`op-graph-container op-patient-graph ${graphsInView ? 'in-view' : ''}`}>
                  {[
                    { day: 'Sun', height: '40px' },
                    { day: 'Mon', height: '65px' },
                    { day: 'Tue', height: '45px' },
                    { day: 'Wed', height: '70px' },
                    { day: 'Thu', height: '50px' },
                    { day: 'Fri', height: '80px', active: true },
                    { day: 'Sat', height: '55px' }
                  ].map((item, i) => (
                    <div className="op-bar-wrapper" key={i}>
                      <div className={`op-bar ${item.active ? 'active' : ''}`} style={{ height: item.height }}></div>
                      <span className="op-bar-label">{item.day}</span>
                    </div>
                  ))}
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
                <div className={`op-graph-container op-hospital-graph ${graphsInView ? 'in-view' : ''}`}>
                  {[
                    { day: 'Sun', height: '45px' },
                    { day: 'Mon', height: '75px' },
                    { day: 'Tue', height: '55px' },
                    { day: 'Wed', height: '85px' },
                    { day: 'Thu', height: '60px' },
                    { day: 'Fri', height: '95px', active: true },
                    { day: 'Sat', height: '50px' }
                  ].map((item, i) => (
                    <div className="op-bar-wrapper" key={i}>
                      <div className={`op-bar ${item.active ? 'active' : ''}`} style={{ height: item.height }}></div>
                      <span className="op-bar-label">{item.day}</span>
                    </div>
                  ))}
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
