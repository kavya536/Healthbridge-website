import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PGStudentsSolutionsPage.css';

export default function PGStudentsSolutionsPage() {
  const [activeModule, setActiveModule] = useState(1);
  
  // Module 1 doubt states
  const [doubtSpecialty, setDoubtSpecialty] = useState('Cardiology');
  const [doubtText, setDoubtText] = useState('');
  const [expertResponse, setExpertResponse] = useState(null);
  
  // Module 2 observer-ship slot states
  const [selectedHospital, setSelectedHospital] = useState('Apollo Cardiology Center');
  const [selectedDept, setSelectedDept] = useState('Cardiology Ward Observer-ship');
  const [isBooked, setIsBooked] = useState(false);

  // Module 3 consultation states
  const [chatInput, setChatInput] = useState('');
  const [chatList, setChatList] = useState([
    { sender: 'Dr. James', message: 'Remember, for STEMI patient checkups, always note down V1-V4 chest leads before PCI.' },
    { sender: 'Kavya536', message: 'Got it Dr. James! Do we also review patient echocardiogram beforehand?' },
    { sender: 'Dr. James', message: 'Yes, absolutely, if the patient is stable.' }
  ]);

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setChatList([...chatList, { sender: 'You', message: chatInput }]);
    setTimeout(() => {
      setChatList(prev => [...prev, {
        sender: 'Dr. James (Specialist)',
        message: `Great question regarding that. In clinical consultations, we always combine ECG and echo for a full cardiovascular assessment. Let's discuss this in tomorrow's round!`
      }]);
    }, 1200);
    setChatInput('');
  };

  const handleAskExpert = (e) => {
    e.preventDefault();
    if (!doubtText.trim()) return;
    
    let doctor = '';
    let responseText = '';
    
    if (doubtSpecialty === 'Cardiology') {
      doctor = 'Dr. James Wilson (Senior Cardiologist, Apollo Center)';
      responseText = `Hello Dr. Kavya. Regarding your doubt: " ${doubtText} ". In acute cardiology setups, immediate cardiac monitoring and aspirin pre-loading are standard. Bedside echo is recommended. We will clarify this further during your next clinical rotation!`;
    } else if (doubtSpecialty === 'Pediatrics') {
      doctor = 'Dr. Priya Sharma (Senior Pediatrician, City General)';
      responseText = `Hi Kavya. On your query: " ${doubtText} ". Pediatric dose calculations should strictly rely on body surface area rather than arbitrary age thresholds. Let's review the calculation sheet in our ward round!`;
    } else {
      doctor = 'Dr. David Miller (Head of Surgery, Metro Hospital)';
      responseText = `Dr. Kavya, about your surgical query: " ${doubtText} ". Minimally invasive laparoscopy is preferred here. Ensure pre-op coagulation profiles are completely verified. We can discuss this in my next clinic session.`;
    }
    
    setExpertResponse({ doctor, responseText });
  };

  const modulesData = [
    {
      id: 1,
      tag: 'MODULE 01',
      title: 'Expert Mentorship & Clinical Doubt Box',
      description: 'Connect 1-on-1 with senior medical specialists online to clarify complex diagnostic, therapeutic, and clinical doubts.',
      features: [
        { title: 'Direct Specialty Consultation', desc: 'Submit questions and get clinical justifications from experienced doctors in Cardiology, Pediatrics, and Surgery.' },
        { title: 'Doubt-Clearing Forums', desc: 'Access archived clinical cases and discussions moderated directly by medical board directors.' }
      ]
    },
    {
      id: 2,
      tag: 'MODULE 02',
      title: 'Hospital Rotations & Observer-ships',
      description: 'Schedule hands-on clinical visits, observer-ships, and physical clinic sessions in partner research hospitals.',
      features: [
        { title: 'Department Rotation Bookings', desc: 'Secure short-term slots in active ICU wards, emergency blocks, and surgical theaters.' },
        { title: 'Pre-vetted Clinical Guides', desc: 'Follow senior consultants on physical ward rounds to learn diagnosis and bedside protocols.' }
      ]
    },
    {
      id: 3,
      tag: 'MODULE 03',
      title: 'Online Specialty Consultations',
      description: 'Observe real patient consultations and debriefing streams hosted live by medical directors.',
      features: [
        { title: 'Live Consultation Auditing', desc: 'Observe telehealth visits in real time to understand patient diagnosis and treatment formulation.' },
        { title: 'Interactive Case Q&As', desc: 'Interact with senior consultants immediately after consultations to clarify case-specific doubts.' }
      ]
    },
    {
      id: 4,
      tag: 'MODULE 04',
      title: 'Joint Hospital Credentials & Verification',
      description: 'Earn gold-foil credentials co-signed by clinical directors, verifying your hospital simulation mastery.',
      features: [
        { title: 'Co-signed Certificates', desc: 'Obtain clinical certificates co-endorsed by Apex partner hospitals and research institutes.' },
        { title: 'Verified Badge Portfolio', desc: 'Showcase verified credentials directly on your professional doctor profile to stand out.' }
      ]
    }
  ];

  return (
    <div className="pg-students-page">
      {/* 1. Sleek Hero Section */}
      <section className="pg-hero">
        <div className="container">
          <div className="pg-hero-grid">
            <div className="pg-hero-content">
              <h1>Supercharge Your Medical <span className="text-teal">PG Journey</span></h1>
              <p>
                Get access to India's most comprehensive medical postgraduate learning network. Designed by top-rated specialists and verification boards to help you crack PG exams and enhance clinical knowledge.
              </p>
              <div className="pg-hero-actions">
                <a href="#curriculum" className="btn-primary">Explore Curriculum</a>
                <Link to="/solutions/doctors" className="btn-secondary">Doctor Profiles</Link>
              </div>
            </div>
            <div className="pg-hero-visual">
              <div className="glass-learning-card">
                <img src="/pg student.jpg" alt="PG Learning Dashboard" className="pg-main-img" />
                <div className="live-classes-overlay">
                  <span className="live-dot"></span>
                  <span>LIVE: Physiology Revision Call</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Quick Links bar */}
      <section className="academy-nav-strip">
        <div className="container">
          <div className="nav-strip-inner">
            <span>Looking for regular consultation or support?</span>
            <div className="strip-buttons">
              <Link to="/about" className="strip-btn">About Academy</Link>
              <Link to="/contact" className="strip-btn active-btn">Join Live Batch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Features Sections with Unique section-to-section UI layouts */}
      <section className="curriculum-showcase" id="curriculum">
        <div className="container">
          <div className="pg-section-title">
            <span className="section-label">CLINICAL INTERACTION PROTOCOL</span>
            <h2>Our Highly Curated <span className="text-teal">PG Modules</span></h2>
            <p>Master medical workflows by clarifying doubts with senior doctors, booking real-world clinic visits, and observing live consultations.</p>
          </div>

          <div className="pg-interactive-lab">
            {/* Left Controller Tabs */}
            <div className="lab-controls">
              {modulesData.map((mod) => (
                <div
                  key={mod.id}
                  className={`lab-control-card ${activeModule === mod.id ? 'active' : ''}`}
                  onClick={() => setActiveModule(mod.id)}
                >
                  <div className="control-header">
                    <span className={`control-tag tag-mod-${mod.id}`}>{mod.tag}</span>
                    <span className="control-arrow">→</span>
                  </div>
                  <h3>{mod.title}</h3>
                  <p>{mod.description}</p>
                  
                  {activeModule === mod.id && (
                    <div className="control-expanded-details">
                      <ul className="expanded-feature-list">
                        {mod.features.map((feat, index) => (
                          <li key={index}>
                            <span className="feat-check">✓</span>
                            <div>
                              <strong>{feat.title}</strong>
                              <p>{feat.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Simulator Pane */}
            <div className="lab-simulator-pane">
              <div className="simulator-glass-card">
                <div className="simulator-header">
                  <div className="window-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="simulator-title-tag">
                    {activeModule === 1 && '🩺 Direct Doubt Box & Specialist Mentorship'}
                    {activeModule === 2 && '🏥 Hospital Rotation & Clinic Rotations Scheduler'}
                    {activeModule === 3 && '📺 Live Online Telehealth Consult Stream'}
                    {activeModule === 4 && '📜 Joint Hospital Validation Certificate'}
                  </span>
                </div>

                <div className="simulator-content-viewport">
                  {/* Module 1 Widget: Direct Doubt Box */}
                  {activeModule === 1 && (
                    <div className="sim-widget-doubt">
                      <div className="sim-widget-banner">
                        <img src="/doctor_patient.jpg" alt="Clinical Doubt Resolution" className="widget-banner-img" />
                      </div>
                      <div className="doubt-box-card">
                        <h4>Ask Experienced Medical Specialists</h4>
                        <p className="doubt-intro-text">Clarify your complex diagnostic or treatment doubts directly with active, top-rated clinical consultants.</p>
                        
                        <form className="doubt-form-rebuilt" onSubmit={handleAskExpert}>
                          <div className="form-group-rebuilt">
                            <label>Select Target Medical Department</label>
                            <select
                              value={doubtSpecialty}
                              onChange={(e) => {
                                setDoubtSpecialty(e.target.value);
                                setExpertResponse(null);
                              }}
                            >
                              <option value="Cardiology">Cardiology Department (Heart & Vessels)</option>
                              <option value="Pediatrics">Pediatrics Department (Child Healthcare)</option>
                              <option value="Surgery">General Surgery Department (Operative Procedures)</option>
                            </select>
                          </div>

                          <div className="form-group-rebuilt">
                            <label>Define Your Clinical / Exam Doubt</label>
                            <textarea
                              placeholder="e.g. What is the precise diagnostic protocol if a STEMI patient presents with cardiogenic shock?"
                              value={doubtText}
                              onChange={(e) => setDoubtText(e.target.value)}
                              rows={3}
                            />
                          </div>

                          <button type="submit" className="btn-doubt-submit" disabled={!doubtText.trim()}>
                            Submit to Senior Doctor →
                          </button>
                        </form>

                        {expertResponse && (
                          <div className="expert-response-card animate-fadeIn">
                            <div className="response-doctor-header">
                              <span className="doc-avatar-dot"></span>
                              <strong>{expertResponse.doctor}</strong>
                              <span className="badge-expert">VERIFIED STAFF</span>
                            </div>
                            <p className="response-body">{expertResponse.responseText}</p>
                            <span className="response-footer">Verified via HealthBridge Specialty Consultation Protocol</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Module 2 Widget: Hospital Rotations Observer-ships Bookings */}
                  {activeModule === 2 && (
                    <div className="sim-widget-rotations">
                      <div className="sim-widget-banner">
                        <img src="/pg_studnets_bg_img.jpg" alt="Clinical Rotations Observer-ship" className="widget-banner-img" />
                      </div>
                      <div className="rotations-booking-card">
                        <h4>Clinical Visits & Department Observer-ships</h4>
                        <p className="rotations-intro-text">Bridge the medical gap. Schedule physical sessions, clinic observer-ships, and hands-on ward rotations at apex hospitals.</p>
                        
                        <div className="booking-form-rebuilt">
                          <div className="form-group-rebuilt">
                            <label>Choose Hospital & Clinic Group</label>
                            <select value={selectedHospital} onChange={(e) => { setSelectedHospital(e.target.value); setIsBooked(false); }}>
                              <option value="Apollo Cardiology Center">Apollo Cardiology & Apex Medical Center</option>
                              <option value="HealthBridge Metro General">HealthBridge Metro General Hospital</option>
                              <option value="Fortis Multi-Specialty Clinic">Fortis Multi-Specialty Clinical Block</option>
                            </select>
                          </div>

                          <div className="form-group-rebuilt">
                            <label>Select Observer-ship Department</label>
                            <select value={selectedDept} onChange={(e) => { setSelectedDept(e.target.value); setIsBooked(false); }}>
                              <option value="Cardiology Ward Observer-ship">Cardiology Ward Rounds & ECG Analysis</option>
                              <option value="Emergency Care & ICU Observer-ship">ICU Bedside Management & Triage Protocols</option>
                              <option value="Operating Room Rotation">Operative Observership & Pre-op Scrub Procedures</option>
                            </select>
                          </div>

                          {!isBooked ? (
                            <button className="btn-booking-submit" onClick={() => setIsBooked(true)}>
                              Request Rotations Observer-ship Slot →
                            </button>
                          ) : (
                            <button className="btn-booking-reset" onClick={() => setIsBooked(false)}>
                              Cancel observer-ship Slot ✕
                            </button>
                          )}
                        </div>

                        {isBooked && (
                          <div className="booking-approved-slip animate-fadeIn">
                            <div className="slip-header">
                              <span className="badge-approved">✓ DEPARTMENT APPROVAL GRANTED</span>
                              <span>ID: HB-ROT-9482</span>
                            </div>
                            <div className="slip-details">
                              <div className="detail-item">
                                <span className="label">Apex Hospital:</span>
                                <strong className="val">{selectedHospital}</strong>
                              </div>
                              <div className="detail-item">
                                <span className="label">Department:</span>
                                <strong className="val">{selectedDept}</strong>
                              </div>
                              <div className="detail-item">
                                <span className="label">Ward Supervisor:</span>
                                <strong className="val">Dr. James Wilson (Chief Consultant)</strong>
                              </div>
                              <div className="detail-item">
                                <span className="label">Scheduled Time:</span>
                                <strong className="val text-teal">Upcoming Monday (10:00 AM - 4:00 PM)</strong>
                              </div>
                            </div>
                            <p className="slip-notice">
                              * Please bring your clinical scrub suite, medical university identity badge, and case file notebook. Reporting is at Room 402, Block B.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Module 3 Widget: Telehealth Consultation Auditing */}
                  {activeModule === 3 && (
                    <div className="sim-widget-live">
                      <div className="mock-live-classroom-rebuilt">
                        <div className="live-stream-box-rebuilt">
                          <div className="stream-badge-rebuilt">TELEHEALTH CONSULT</div>
                          <span className="stream-members-count">👥 Auditing: 142 PG Candidates</span>
                          
                          <div className="stream-info-overlay">
                            <h5>Cardiovascular Patient Consult</h5>
                            <p>Supervisor: Dr. James Wilson • Apollo Heart Wing</p>
                          </div>
                        </div>

                        <div className="live-mentors-row-rebuilt">
                          <div className="mentor-bubble-rebuilt">
                            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100" alt="Mentor" />
                            <div>
                              <span>Dr. James</span>
                              <small>Cardiologist</small>
                            </div>
                          </div>
                          <div className="mentor-bubble-rebuilt">
                            <img src="https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=100" alt="Mentor" />
                            <div>
                              <span>Dr. Priya</span>
                              <small>Pediatrician</small>
                            </div>
                          </div>
                          <div className="mentor-bubble-rebuilt">
                            <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100" alt="Mentor" />
                            <div>
                              <span>Dr. David</span>
                              <small>Surgeon</small>
                            </div>
                          </div>
                        </div>

                        <div className="live-chat-panel">
                          <div className="chat-messages-container">
                            <span className="consult-session-notice">💡 Ask senior doctors clinical or treatment questions about this consult:</span>
                            {chatList.map((msg, index) => (
                              <div
                                key={index}
                                className={`chat-bubble-row ${msg.sender === 'You' ? 'user-sent' : ''}`}
                              >
                                <span className="chat-sender">{msg.sender}</span>
                                <p className="chat-text">{msg.message}</p>
                              </div>
                            ))}
                          </div>

                          <form className="chat-input-bar" onSubmit={handleSendChat}>
                            <input
                              type="text"
                              placeholder="Ask Dr. James regarding this patient consult..."
                              value={chatInput}
                              onChange={(e) => setChatInput(e.target.value)}
                            />
                            <button type="submit">Submit Doubt</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Module 4 Widget: Certified Diploma co-signed by Hospitals */}
                  {activeModule === 4 && (
                    <div className="sim-widget-cert">
                      <div className="sim-widget-banner">
                        <img src="/ecosystem.jpg" alt="Verified PG Intern Credentials" className="widget-banner-img" />
                      </div>
                      <div className="mock-cert-card-rebuilt">
                        <div className="cert-border-accent"></div>
                        <div className="cert-badge-ribbon">🏆</div>
                        <h3>HealthBridge Academy</h3>
                        <span className="cert-subtitle-rebuilt">CERTIFICATE OF POSTGRADUATE INTERN EXCELLENCE</span>
                        
                        <div className="cert-divider-line"></div>
                        
                        <p className="cert-main-text">
                          This verified hospital-grade rotation credential is co-signed and awarded to
                        </p>
                        
                        <h4 className="cert-recipient-name">Dr. Kavya Vignesh</h4>
                        
                        <p className="cert-description-rebuilt">
                          for successfully mastering advanced department observer-ships, clinical consult methodologies, and expert mentor doubt clearances.
                        </p>

                        <div className="cert-signatures">
                          <div className="sig-block">
                            <span className="sig-draw">Apollo Hospital Board</span>
                            <span className="sig-line-rebuilt"></span>
                            <small>Hospital Director</small>
                          </div>
                          <div className="sig-block">
                            <span className="sig-draw">Clinical Supervisor</span>
                            <span className="sig-line-rebuilt"></span>
                            <small>Director of PG Studies</small>
                          </div>
                        </div>

                        <div className="cert-footer-verification">
                          <span className="badge-verified">✓ AP-8942-JOINT-VERIFIED</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Call to Action Page Footer */}
      <section className="pg-cta">
        <div className="container">
          <div className="pg-cta-box">
            <h2>Accelerate Your Medical PG Learning</h2>
            <p>Join the next live batch and prepare alongside 5,000+ active medical students and specialists on HealthBridge.</p>
            <div className="pg-cta-buttons">
              <Link to="/contact" className="btn-primary">Register For Next Batch</Link>
              <Link to="/about" className="btn-secondary">Explore Academy About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
