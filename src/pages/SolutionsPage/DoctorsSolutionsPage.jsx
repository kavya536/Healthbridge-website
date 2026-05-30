import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DoctorsSolutionsPage.css';

const mockDoctors = [
  {
    id: 1,
    name: 'Dr. James Wilson',
    specialty: 'General Physician',
    experience: 10,
    rating: 4.8,
    languages: ['English'],
    tags: ['Fever', 'Fatigue', 'Cold', 'Flu', 'Headache'],
    fee: 500,
    nextSlot: 'Today, 10:00 AM',
    type: 'Online',
    image: '/d1',
    fallbackImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
    clinicName: 'HealthBridge General Clinic'
  },
  {
    id: 2,
    name: 'Dr. David Kim',
    specialty: 'General Physician',
    experience: 5,
    rating: 4.5,
    languages: ['English'],
    tags: ['Fever', 'Fatigue', 'Cough', 'Body Ache'],
    fee: 300,
    nextSlot: 'Tomorrow, 10:00 AM',
    type: 'Clinic',
    image: '/d2',
    fallbackImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
    clinicName: 'City Center Medical Plaza'
  },
  {
    id: 3,
    name: 'Dr. Priya Sharma',
    specialty: 'Dentist',
    experience: 8,
    rating: 4.7,
    languages: ['English', 'Hindi'],
    tags: ['Cavity', 'Root Canal', 'Toothache', 'Bleeding Gums'],
    fee: 400,
    nextSlot: 'Today, 02:30 PM',
    type: 'Online',
    image: '/d3',
    fallbackImage: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=300',
    clinicName: 'HealthBridge Dental Care'
  },
  {
    id: 4,
    name: 'Dr. Sarah Jenkins',
    specialty: 'Cardiologist',
    experience: 15,
    rating: 4.9,
    languages: ['English'],
    tags: ['Chest Pain', 'Hypertension', 'BP', 'Palpitations', 'Heart Attack'],
    fee: 850,
    nextSlot: 'Today, 11:30 AM',
    type: 'Online',
    image: '/d4',
    fallbackImage: 'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&q=80&w=300',
    clinicName: 'Heartcare Specialist Center'
  },
  {
    id: 5,
    name: 'Dr. Robert Chen',
    specialty: 'Pediatrician',
    experience: 12,
    rating: 4.6,
    languages: ['English', 'Mandarin'],
    tags: ['Fever', 'Cough', 'Vaccination', 'Childhood Infection'],
    fee: 450,
    nextSlot: 'Tomorrow, 09:00 AM',
    type: 'Clinic',
    image: '/d5',
    fallbackImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300',
    clinicName: 'Kids & Family Health Clinic'
  },
  {
    id: 6,
    name: 'Dr. Amit Patel',
    specialty: 'Dermatologist',
    experience: 7,
    rating: 4.6,
    languages: ['English', 'Gujarati'],
    tags: ['Acne', 'Skin Rash', 'Hair Fall', 'Eczema', 'Allergy'],
    fee: 400,
    nextSlot: 'Today, 04:00 PM',
    type: 'Online',
    image: '/d6',
    fallbackImage: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300',
    clinicName: 'HealthBridge Skin & Laser Center'
  },
  {
    id: 7,
    name: 'Dr. Elena Rostova',
    specialty: 'Gynecologist',
    experience: 14,
    rating: 4.9,
    languages: ['English', 'Russian'],
    tags: ['Pregnancy', 'PCOS', 'Irregular Periods', 'Women Health'],
    fee: 700,
    nextSlot: 'Friday, 10:30 AM',
    type: 'Online',
    image: '/d7',
    fallbackImage: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=300',
    clinicName: 'HealthBridge Maternity Hub'
  },
  {
    id: 8,
    name: 'Dr. Marcus Vance',
    specialty: 'Neurologist',
    experience: 18,
    rating: 4.8,
    languages: ['English'],
    tags: ['Migraine', 'Seizure', 'Dizziness', 'Nerve Pain', 'Stroke'],
    fee: 900,
    nextSlot: 'Monday, 11:00 AM',
    type: 'Clinic',
    image: '/d8',
    fallbackImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
    clinicName: 'Brain & Spine Institute'
  }
];

export default function DoctorsSolutionsPage() {
  const [symptomSearch, setSymptomSearch] = useState('');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#doctors-search-section') {
      // Snap instantly to the search section without scrolling through others
      const element = document.getElementById('doctors-search-section');
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      } else {
        // Fallback delay if DOM is still rendering
        setTimeout(() => {
          const el = document.getElementById('doctors-search-section');
          if (el) el.scrollIntoView({ behavior: 'auto' });
        }, 50);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // Filter based on symptom / tag
  const filteredDoctors = mockDoctors.filter(doc => {
    if (!symptomSearch) return true;
    return doc.tags.some(tag => 
      tag.toLowerCase().includes(symptomSearch.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(symptomSearch.toLowerCase())
    );
  });

  // Limit display to 5 by default, show all if clicked
  const doctorsToDisplay = showAll ? filteredDoctors : filteredDoctors.slice(0, 5);

  return (
    <div className="doctors-solutions-page">
      {/* Hero Header */}
      <section className="doctors-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="badge">For Medical Professionals</span>
              <h1>Empower Your Practice With <span className="text-teal">HealthBridge</span></h1>
              <p>
                Join India's premium integrated healthcare network. Bring your practice online, handle bookings effortlessly, write safe digital e-prescriptions, and securely manage patients at the click of a button.
              </p>
              <div className="hero-actions">
                <a href="#join-section" className="btn-primary">Register Now</a>
                <Link to="/about" className="btn-secondary">Learn About Us</Link>
              </div>
            </div>
            <div className="hero-image-box">
              <img src="/doctors image.png" alt="Doctors Network" className="hero-promo-img" />
              <div className="glass-floating-card">
                <div className="g-icon">🩺</div>
                <div>
                  <h4>15k+ Doctors</h4>
                  <p>Already Registered & Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Doctors Get Section */}
      <section className="doctors-perks">
        <div className="container">
          <div className="section-title-wrap">
            <h2>What Doctors Get After <span className="text-teal">Joining</span></h2>
            <p>We provide a fully integrated digital suite designed to elevate your clinical practice and patient engagement.</p>
          </div>

          <div className="perks-grid">
            <div className="perk-card">
              <div className="perk-icon">🖥️</div>
              <h3>Dashboard Capabilities</h3>
              <p>A unified doctor dashboard displaying active consultations, revenue analytics, clinical queues, and profile optimization in real-time.</p>
              <span className="check-badge">✅ Integrated</span>
            </div>

            <div className="perk-card">
              <div className="perk-icon">📅</div>
              <h3>Appointment Handling</h3>
              <p>Seamlessly organize walk-ins, digital consultations, and emergency slots. Smart reminders reduce patient no-shows by 85%.</p>
              <span className="check-badge">✅ Smart Queue</span>
            </div>

            <div className="perk-card">
              <div className="perk-icon">👥</div>
              <h3>Patient Management</h3>
              <p>Access complete medical histories, past lab results, vitals tracking, and chronological EMR reports instantly inside a secure cloud vault.</p>
              <span className="check-badge">✅ PCI Compliant EMR</span>
            </div>

            <div className="perk-card">
              <div className="perk-icon">💬</div>
              <h3>Consultations</h3>
              <p>Switch flawlessly between high-fidelity video consults, instant chats, and scheduled digital follow-ups on our specialized doctor client.</p>
              <span className="check-badge">✅ HD Telehealth</span>
            </div>

            <div className="perk-card">
              <div className="perk-icon">📝</div>
              <h3>Prescriptions</h3>
              <p>Draft digitally signed e-prescriptions using an AI-guided drug database, auto-calculating drug interactions and dosages instantly.</p>
              <span className="check-badge">✅ Auto-Signature</span>
            </div>

            <div className="perk-card">
              <div className="perk-icon">💰</div>
              <h3>Earnings & Scheduling</h3>
              <p>Full control over your clinic timings, fee scales, and instant payout wallets with detailed monthly earnings breakdown graphs.</p>
              <span className="check-badge">✅ Wallet Payouts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Search Section */}
      <section className="doctors-search-section" id="doctors-search-section">
        <div className="container">
          <div className="section-title-wrap">
            <h2>Verify Active <span className="text-teal">Doctor Profiles</span></h2>
            <p>Search doctors instantly by symptom, specialty, or condition to experience how patients view and book your custom profile.</p>
          </div>

          <div className="search-bar-wrap">
            <div className="search-input-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input 
                type="text" 
                placeholder="Search by symptoms (e.g., Fever, Chest Pain, Cough, Skin, Pregnancy, Cavity)..." 
                value={symptomSearch}
                onChange={(e) => setSymptomSearch(e.target.value)}
              />
              {symptomSearch && (
                <button className="clear-btn" onClick={() => setSymptomSearch('')}>×</button>
              )}
            </div>
            {symptomSearch && (
              <div className="search-tag-indicator">
                Showing results for symptom match: <strong>"{symptomSearch}"</strong>
              </div>
            )}
          </div>

          {/* Expanded List showing 5 by default, then Show All option */}
          <div className="doctors-display-grid">
            {doctorsToDisplay.length > 0 ? (
              doctorsToDisplay.map((doc) => (
                <div key={doc.id} className="doctor-profile-card">
                  <div className="doc-main-info">
                    <img 
                      src={doc.image || doc.fallbackImage} 
                      alt={doc.name} 
                      className="doc-avatar" 
                    />
                    <div className="doc-detail">
                      <div className="doc-badge-row">
                        <span className="specialty-tag">{doc.specialty}</span>
                        <span className="experience-tag">{doc.experience} Years Exp</span>
                      </div>
                      <h3>{doc.name}</h3>
                      <p className="clinic-text">📍 {doc.clinicName}</p>
                      
                      <div className="symptoms-tags">
                        {doc.tags.map((tag, idx) => (
                          <span key={idx} className="sym-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="doc-action-panel">
                    <div className="rating-wrap">
                      <span className="star-icon">⭐</span>
                      <strong>{doc.rating}</strong>
                      <span className="rev-count">({doc.id * 128 + 43} reviews)</span>
                    </div>

                    <div className="fee-wrap">
                      <span className="fee-label">Consultation Fee</span>
                      <h3>₹{doc.fee}</h3>
                    </div>

                    <div className="next-slot-wrap">
                      <span className="slot-dot"></span>
                      <span>Next Slot: <strong>{doc.nextSlot}</strong></span>
                    </div>

                    <Link to="/contact" className="btn-visit">Book Visit</Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-docs-card">
                <h4>No Doctor Matches Found</h4>
                <p>Try searching for other symptoms like "Fever", "Cough", "Chest Pain", "Acne", or "Pregnancy".</p>
                <button className="btn-secondary" onClick={() => setSymptomSearch('')}>Reset Search</button>
              </div>
            )}
          </div>

          {/* Toggle buttons to show all */}
          {filteredDoctors.length > 5 && (
            <div className="show-more-wrapper">
              <button className="btn-show-all" onClick={() => setShowAll(!showAll)}>
                {showAll ? (
                  <>
                    Show Less Profiles
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 7 7 1 1 7"></path>
                    </svg>
                  </>
                ) : (
                  <>
                    Show All {filteredDoctors.length} Doctors
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 1 7 7 13 1"></path>
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="cta-bottom" id="join-section">
        <div className="container">
          <div className="cta-inner-card">
            <h2>Ready to Digitize Your Practice?</h2>
            <p>Join HealthBridge today and experience premium practices designed to simplify digital care.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary-white">Get in Touch</Link>
              <Link to="/solutions/patients" className="btn-secondary-border">Patients Solutions</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
