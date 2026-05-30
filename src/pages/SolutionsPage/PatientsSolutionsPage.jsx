import { useState, useEffect } from 'react';
import './PatientsSolutionsPage.css';

const ALL_SPECIALTIES = [
  'All Specialists',
  'General Physician',
  'Dentist',
  'Cardiologist',
  'Orthopedic',
  'Pediatrician',
  'Dermatologist',
  'Gynecologist',
  'Neurologist',
  'Psychiatrist',
  'Endocrinologist',
  'Ophthalmologist',
  'ENT Specialist'
];

const mockDoctors = [
  {
    id: 1,
    name: 'Dr. James Wilson',
    specialty: 'General Physician',
    experience: 10,
    rating: 4.8,
    languages: ['English'],
    tags: ['Fever', 'Fatigue'],
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
    tags: ['Fever', 'Fatigue'],
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
    tags: ['Cavity', 'Root Canal'],
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
    tags: ['Chest Pain', 'Hypertension'],
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
    tags: ['Fever', 'Cough', 'Vaccination'],
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
    rating: 4.4,
    languages: ['English', 'Gujarati'],
    tags: ['Acne', 'Rashes'],
    fee: 500,
    nextSlot: 'Today, 04:00 PM',
    type: 'Online',
    image: '/d6',
    fallbackImage: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=300',
    clinicName: 'HealthBridge Skin Clinic'
  },
  {
    id: 7,
    name: 'Dr. Elena Rostova',
    specialty: 'Gynecologist',
    experience: 11,
    rating: 4.8,
    languages: ['English', 'Russian'],
    tags: ['Pregnancy', 'PCOS'],
    fee: 600,
    nextSlot: 'Today, 12:00 PM',
    type: 'Clinic',
    image: '/d7',
    fallbackImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    clinicName: 'Women & Maternity Specialist Clinic'
  },
  {
    id: 8,
    name: 'Dr. Michael Chang',
    specialty: 'Neurologist',
    experience: 16,
    rating: 4.9,
    languages: ['English'],
    tags: ['Migraine', 'Seizure'],
    fee: 1000,
    nextSlot: 'Tomorrow, 02:00 PM',
    type: 'Clinic',
    image: '/d8',
    fallbackImage: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=300',
    clinicName: 'Advanced Neurological Center'
  }
];

const BOOKING_DATES = [
  { day: 'Wed', num: '27' },
  { day: 'Thu', num: '28' },
  { day: 'Fri', num: '29' },
  { day: 'Sat', num: '30' },
  { day: 'Sun', num: '31' },
  { day: 'Mon', num: '1' },
  { day: 'Tue', num: '2' },
  { day: 'Wed', num: '3' }
];

const TIME_SLOTS = {
  Morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
  Afternoon: ['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM'],
  Evening: ['04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM']
};

function DoctorAvatar({ src, fallbackSrc, alt, className }) {
  const [imgUrl, setImgUrl] = useState(src);

  useEffect(() => {
    if (src && src.startsWith('/d') && src.length === 3) {
      let active = true;
      fetch(src)
        .then(res => {
          if (!res.ok) throw new Error('Fetch failed');
          return res.blob();
        })
        .then(blob => {
          if (!active) return;
          const imageBlob = new Blob([blob], { type: 'image/jpeg' });
          const objectUrl = URL.createObjectURL(imageBlob);
          setImgUrl(objectUrl);
        })
        .catch(() => {
          if (active) setImgUrl(fallbackSrc);
        });
      return () => {
        active = false;
      };
    } else {
      setImgUrl(src);
    }
  }, [src, fallbackSrc]);

  return (
    <img 
      src={imgUrl} 
      alt={alt} 
      className={className} 
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallbackSrc;
      }}
    />
  );
}

const getDoctorProfileDetails = (doc) => {
  const defaults = {
    about: `${doc.name} is a highly dedicated ${doc.specialty} with over ${doc.experience} years of clinical experience. Specializing in advanced diagnostics and patient-centric treatments, ${doc.name} is known for a thorough, compassionate clinical approach and friendly demeanor.`,
    education: [
      { degree: 'Doctor Of Medicine (MD)', school: 'Harvard Medical School', year: '2008' },
      { degree: `Residency in ${doc.specialty}`, school: 'Johns Hopkins Hospital', year: '2012' },
      { degree: `Fellowship in Advanced Patient Care`, school: 'Mayo Clinic', year: '2015' }
    ],
    services: [
      'Comprehensive Diagnosis',
      'Preventive Healthcare Consultation',
      'Advanced Therapy Planning',
      'Chronic Care Management',
      'Routine Health Screenings'
    ],
    address: 'Ashok Pride, Kukatpally, Hyderabad, India',
    reviews: [
      { author: 'John Doe', rating: 5, text: 'Incredibly thorough, gentle, and explained everything clearly.' },
      { author: 'Sarah Smith', rating: 5, text: 'Highly professional, caring staff, and short wait times.' },
      { author: 'Michael Brown', rating: 5, text: 'Excellent doctor. Took time to listen to all my concerns.' }
    ]
  };
  return defaults;
};

export default function PatientsSolutionsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialists');
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [symptomQuery, setSymptomQuery] = useState('');
  const [consultType, setConsultType] = useState('All');
  const [sortBy, setSortBy] = useState('Relevance');
  const [sidebarSpecialties, setSidebarSpecialties] = useState({});

  // Booking Flow State
  const [bookingDoctor, setBookingDoctor] = useState(null);
  const [bookingStep, setBookingStep] = useState(1); // 1 = Slot, 2 = Details, 3 = Review, 4 = Payment
  const [selectedDate, setSelectedDate] = useState('Wed 27');
  const [selectedTimeTab, setSelectedTimeTab] = useState('Morning');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('09:30 AM');
  const [bookingConsultType, setBookingConsultType] = useState('Online');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Google Pay');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [profileDoctor, setProfileDoctor] = useState(null);

  // Patient Info State
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientGender, setPatientGender] = useState('Male');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientReason, setPatientReason] = useState('');
  const [bookForElse, setBookForElse] = useState(false);

  // Form Validation Errors State
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [reasonError, setReasonError] = useState('');
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to top instantly when booking step or doctor changes to keep the active form visible and prevent viewport dropping below the footer
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [bookingStep, bookingDoctor]);

  // Set initial booking consult type when doctor changes
  useEffect(() => {
    if (bookingDoctor) {
      setBookingConsultType(bookingDoctor.type);
    }
  }, [bookingDoctor]);

  // Update sidebar checks when category pill changes
  useEffect(() => {
    if (selectedSpecialty === 'All Specialists') {
      setSidebarSpecialties({});
    } else {
      setSidebarSpecialties({ [selectedSpecialty]: true });
    }
  }, [selectedSpecialty]);

  const handleSidebarCheck = (specialty) => {
    const updated = { ...sidebarSpecialties, [specialty]: !sidebarSpecialties[specialty] };
    setSidebarSpecialties(updated);
    
    // Adjust top selected pill
    const activeSpecialties = Object.keys(updated).filter(k => updated[k]);
    if (activeSpecialties.length === 1) {
      setSelectedSpecialty(activeSpecialties[0]);
    } else if (activeSpecialties.length === 0) {
      setSelectedSpecialty('All Specialists');
    } else {
      setSelectedSpecialty('Multiple');
    }
  };

  const handleClearAll = () => {
    setSelectedSpecialty('All Specialists');
    setSidebarSpecialties({});
    setSearchQuery('');
    setLocationQuery('');
    setSymptomQuery('');
    setConsultType('All');
    setSortBy('Relevance');
  };

  // Live Inline Form Validation
  const validateForm = () => {
    let isValid = true;

    // Full Name
    if (!patientName.trim()) {
      setNameError('Full name is required.');
      isValid = false;
    } else {
      setNameError('');
    }

    // Age
    const ageNum = parseInt(patientAge);
    if (!patientAge || isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
      setAgeError('Please enter a valid age (1-120).');
      isValid = false;
    } else {
      setAgeError('');
    }

    // Phone (10 digits only)
    const numericPhone = patientPhone.replace(/\D/g, '');
    if (numericPhone.length !== 10) {
      setPhoneError('Please enter a valid phone number (10 numbers only).');
      isValid = false;
    } else {
      setPhoneError('');
    }

    // Reason (4+ chars)
    if (patientReason.trim().length < 4) {
      setReasonError('Please describe your reason for visit (minimum 4 characters).');
      isValid = false;
    } else {
      setReasonError('');
    }

    return isValid;
  };

  // Run validation on typing after user first attempts submit
  useEffect(() => {
    if (hasTriedSubmit) {
      validateForm();
    }
  }, [patientName, patientAge, patientPhone, patientReason, hasTriedSubmit]);

  const handleDetailsSubmit = () => {
    setHasTriedSubmit(true);
    if (validateForm()) {
      setBookingStep(3);
    }
  };

  // Filter Logic
  const filteredDoctors = mockDoctors.filter((doc) => {
    // 1. Specialty filtering (Either via category pills or sidebar checks)
    const activeSpecialtyFilters = Object.keys(sidebarSpecialties).filter(s => sidebarSpecialties[s]);
    if (activeSpecialtyFilters.length > 0) {
      if (!activeSpecialtyFilters.includes(doc.specialty)) return false;
    } else if (selectedSpecialty !== 'All Specialists' && selectedSpecialty !== 'Multiple') {
      if (doc.specialty !== selectedSpecialty) return false;
    }

    // 2. Global search query (name, specialty)
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchesName = doc.name.toLowerCase().includes(q);
      const matchesSpecialty = doc.specialty.toLowerCase().includes(q);
      if (!matchesName && !matchesSpecialty) return false;
    }

    // 3. Location filtering
    if (locationQuery) {
      const loc = locationQuery.toLowerCase();
      if (loc !== 'online' && loc !== 'india' && !doc.type.toLowerCase().includes(loc)) {
        // mock location matching
      }
    }

    // 4. Consultation type radio buttons
    if (consultType !== 'All') {
      if (doc.type !== consultType) return false;
    }

    // 5. Symptom search
    if (symptomQuery) {
      const s = symptomQuery.toLowerCase();
      const matchesTag = doc.tags.some(tag => tag.toLowerCase().includes(s));
      if (!matchesTag) return false;
    }

    return true;
  });

  // Sorting Logic
  const sortedDoctors = [...filteredDoctors].sort((a, b) => {
    if (sortBy === 'Experience') {
      return b.experience - a.experience;
    }
    if (sortBy === 'Fees') {
      return a.fee - b.fee;
    }
    if (sortBy === 'Rating') {
      return b.rating - a.rating;
    }
    return 0; // Relevance / default
  });

  // Render Doctor Profile View
  if (profileDoctor && !bookingDoctor) {
    const profile = getDoctorProfileDetails(profileDoctor);
    return (
      <main className="patients-sol-page bg-light-tint">
        {/* Header toolbar */}
        <section className="profile-header-section">
          <div className="container profile-header-layout">
            <button className="profile-back-search-btn" onClick={() => setProfileDoctor(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="icon-sm">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <span>Back to Search</span>
            </button>
            <h2 className="profile-centered-title">Doctor Profile</h2>
            <div style={{ width: '120px' }}></div>
          </div>
        </section>

        <section className="profile-content-section">
          <div className="container">
            <div className="profile-grid-layout">
              {/* Left Column: Profile details */}
              <div className="profile-details-col">
                {/* Doctor main card */}
                <div className="profile-card main-info-card">
                  <div className="profile-main-doc-info">
                    <div className="profile-avatar-wrapper">
                      <DoctorAvatar 
                        src={profileDoctor.image} 
                        fallbackSrc={profileDoctor.fallbackImage} 
                        alt={profileDoctor.name} 
                        className="profile-doc-avatar" 
                      />
                      <span className="status-indicator online"></span>
                    </div>
                    <div className="profile-doc-details">
                      <h3>{profileDoctor.name}</h3>
                      <span className="profile-doc-specialty">{profileDoctor.specialty}</span>
                      <div className="profile-stars-row">
                        <div className="stars-wrapper">
                          {[1, 2, 3, 4, 5].map(n => (
                            <svg key={n} viewBox="0 0 24 24" fill="currentColor" className="star-icon">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          ))}
                        </div>
                        <span className="rating-score">{profileDoctor.rating}</span>
                        <span className="rating-count">(120+ Patient Reviews)</span>
                      </div>
                      <div className="profile-badge-row">
                        <span className="profile-badge badge-teal">Available Today</span>
                        <span className="profile-badge badge-blue">{profileDoctor.experience}+ Years Experience</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Attributes pills grid */}
                <div className="profile-attrs-grid">
                  <div className="attr-pill-box">
                    <div className="pill-icon-bg">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-teal">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div className="pill-text-col">
                      <span className="lbl">Experience</span>
                      <strong className="val">{profileDoctor.experience} Yrs</strong>
                    </div>
                  </div>

                  <div className="attr-pill-box">
                    <div className="pill-icon-bg">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-teal">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </div>
                    <div className="pill-text-col">
                      <span className="lbl">Languages</span>
                      <strong className="val">{profileDoctor.languages.join(', ')}</strong>
                    </div>
                  </div>

                  <div className="attr-pill-box">
                    <div className="pill-icon-bg">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-teal">
                        <polygon points="23 7 16 12 23 17 23 7"></polygon>
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                      </svg>
                    </div>
                    <div className="pill-text-col">
                      <span className="lbl">Consultation</span>
                      <strong className="val">Both</strong>
                    </div>
                  </div>

                  <div className="attr-pill-box">
                    <div className="pill-icon-bg">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-teal">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                    <div className="pill-text-col">
                      <span className="lbl">Rating</span>
                      <strong className="val">{profileDoctor.rating} / 5.0</strong>
                    </div>
                  </div>
                </div>

                {/* About card */}
                <div className="profile-card">
                  <h4>About Doctor</h4>
                  <p className="profile-about-text">{profile.about}</p>
                </div>

                {/* Education card */}
                <div className="profile-card education-timeline-card">
                  <h4>Education & Experience</h4>
                  <div className="timeline-container">
                    {profile.education.map((item, idx) => (
                      <div className="timeline-item" key={idx}>
                        <div className="timeline-dot-wrapper">
                          <span className="timeline-dot"></span>
                        </div>
                        <div className="timeline-content">
                          <h5>{item.degree}</h5>
                          <span className="school-text">{item.school} - {item.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services card */}
                <div className="profile-card">
                  <h4>Services & Specialization</h4>
                  <div className="services-badges-grid">
                    {profile.services.map((service, idx) => (
                      <span className="service-badge-item" key={idx}>{service}</span>
                    ))}
                  </div>
                </div>

                {/* Clinic & Location card */}
                <div className="profile-card clinic-location-card">
                  <h4>Clinic & Location</h4>
                  <div className="clinic-location-grid">
                    <div className="clinic-info-details">
                      <h5>{profileDoctor.clinicName}</h5>
                      <p className="clinic-address-text">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm pin-icon">
                          <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{profile.address}</span>
                      </p>
                      <div className="clinic-hours-box">
                        <span className="hours-lbl">Consultation Hours</span>
                        <strong className="hours-val">Mon - Fri, 09:00 AM - 06:00 PM</strong>
                      </div>
                    </div>
                    {/* Mock map wrapper */}
                    <div className="mock-map-box" style={{ padding: 0 }}>
                      <iframe 
                        title="Clinic Location"
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        style={{ border: 0, borderRadius: '12px' }} 
                        src="https://maps.google.com/maps?q=Ashok%20Pride,%20Kukatpally,%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Booking widget, need help, and reviews */}
              <div className="profile-booking-col">
                {/* Booking panel */}
                <div className="profile-card booking-widget-card">
                  <div className="booking-fee-header">
                    <span className="fee-lbl">Consultation Fee</span>
                    <strong className="fee-val">₹{profileDoctor.fee}</strong>
                  </div>

                  <div className="booking-widget-date-row">
                    <div className="date-header">
                      <span className="date-lbl">Select Date</span>
                      <button className="view-calendar-btn">View Calendar</button>
                    </div>
                    <div className="widget-date-scroller">
                      {BOOKING_DATES.slice(0, 4).map((d) => {
                        const dateString = `${d.day} ${d.num}`;
                        const isSelected = selectedDate === dateString;
                        return (
                          <button
                            key={d.num}
                            className={`widget-date-btn ${isSelected ? 'active' : ''}`}
                            onClick={() => setSelectedDate(dateString)}
                          >
                            <span className="d-day">{d.day}</span>
                            <span className="d-num">{d.num}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="booking-widget-slots-row">
                    <span className="slots-lbl">Available Slots</span>
                    <div className="widget-slots-grid">
                      {['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM'].map((s) => {
                        const isSelected = selectedTimeSlot === s;
                        return (
                          <button
                            key={s}
                            className={`widget-slot-btn ${isSelected ? 'active' : ''}`}
                            onClick={() => setSelectedTimeSlot(s)}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button 
                    className="widget-book-btn"
                    onClick={() => {
                      setBookingDoctor(profileDoctor);
                      setBookingStep(1);
                      setHasTriedSubmit(false);
                    }}
                  >
                    Book Appointment
                  </button>

                  <button className="widget-cancel-btn" onClick={() => setProfileDoctor(null)}>
                    Cancel
                  </button>

                  <div className="booking-secure-notice">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm lock-icon">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <span>Encrypted & Secure Booking</span>
                  </div>
                </div>

                {/* Need help card */}
                <div className="profile-card need-help-card">
                  <h5>Need Help?</h5>
                  <p>Our health advisors are here to assist you with your booking.</p>
                  <a href="#" className="chat-link">CHAT WITH US</a>
                </div>

                {/* Patient reviews card */}
                <div className="profile-card patient-reviews-card">
                  <div className="reviews-header-row">
                    <h5>Patient Reviews</h5>
                    <button className="view-all-reviews-btn">View All</button>
                  </div>
                  <div className="reviews-stack">
                    {profile.reviews.map((rev, idx) => (
                      <div className="review-comment-box" key={idx}>
                        <div className="rev-author-line">
                          <div className="author-avatar-initial">
                            {rev.author.charAt(0)}
                          </div>
                          <div className="author-details">
                            <strong>{rev.author}</strong>
                            <span>Visit for Online Consultation</span>
                          </div>
                          <div className="rev-stars">
                            {[1,2,3,4,5].map(n => (
                              <svg key={n} viewBox="0 0 24 24" fill="currentColor" className="star-icon-sm">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="rev-comment-text">"{rev.text}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer Features Row */}
            <div className="profile-footer-features">
              <div className="feature-item-col">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="icon-lg">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <div className="feature-text">
                  <h6>Verified Doctors Only</h6>
                  <p>Stringent background checks for your peace of mind.</p>
                </div>
              </div>
              <div className="feature-item-col">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="icon-lg">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <div className="feature-text">
                  <h6>Instant Booking</h6>
                  <p>Book slots in real-time with zero waiting time.</p>
                </div>
              </div>
              <div className="feature-item-col">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="icon-lg">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <div className="feature-text">
                  <h6>Secure Medical Data</h6>
                  <p>Your privacy is our priority with HIPAA compliance.</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    );
  }

  // Render Booking View
  if (bookingDoctor) {
    const serviceTax = Math.round(bookingDoctor.fee * 0.18);
    const totalAmount = bookingDoctor.fee + serviceTax;

    return (
      <main className="patients-sol-page">
        {/* Booking Header Stepper */}
        <section className="booking-stepper-section">
          <div className="container booking-header-layout">
            <div className="booking-back-title" onClick={() => {
              if (bookingStep > 1 && bookingStep <= 4) {
                setBookingStep(bookingStep - 1);
              } else {
                setBookingDoctor(null);
                setBookingStep(1);
                setHasTriedSubmit(false);
              }
            }}>
              <button className="back-circle-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <h2>Book Appointment</h2>
            </div>

            {/* Stepper Progress (Image Stepper logic) */}
            <div className="booking-stepper">
              <div className={`step-item ${bookingStep >= 1 ? 'active' : ''}`}>
                <span className="step-num">1</span>
                <span className="step-label">Slot</span>
              </div>
              <div className="step-divider"></div>
              <div className={`step-item ${bookingStep >= 2 ? 'active' : ''}`}>
                <span className="step-num">2</span>
                <span className="step-label">Details</span>
              </div>
              <div className="step-divider"></div>
              <div className={`step-item ${bookingStep >= 3 ? 'active' : ''}`}>
                <span className="step-num">3</span>
                <span className="step-label">Review</span>
              </div>
              <div className="step-divider"></div>
              <div className={`step-item ${bookingStep >= 4 ? 'active' : ''}`}>
                <span className="step-num">4</span>
                <span className="step-label">Payment</span>
              </div>
            </div>
          </div>
        </section>

        {/* Step Content */}
        <section className="booking-content-section">
          <div className="container">
            
            {/* Step 1: Select Slot */}
            {bookingStep === 1 && (
              <div className="booking-grid-layout">
                {/* Left Column: Date and Time Selectors */}
                <div className="booking-selectors-col">
                  <div className="booking-card select-date-card">
                    <div className="card-header-row">
                      <h3>Select Date</h3>
                      <span className="date-month-badge">May 2026</span>
                    </div>
                    <p className="section-subtitle-sm">AVAILABLE FROM SELECTED DATE</p>
                    
                    <div className="date-scroll-row">
                      {BOOKING_DATES.map((d) => {
                        const dateString = `${d.day} ${d.num}`;
                        const isSelected = selectedDate === dateString;
                        return (
                          <button
                            key={d.num}
                            className={`date-pill-btn ${isSelected ? 'active' : ''}`}
                            onClick={() => setSelectedDate(dateString)}
                          >
                            <span className="date-day">{d.day}</span>
                            <span className="date-num">{d.num}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="booking-card select-time-card">
                    <div className="time-tabs-row">
                      <h3>Select Time</h3>
                      <div className="time-period-tabs">
                        {['Morning', 'Afternoon', 'Evening'].map((tab) => (
                          <button
                            key={tab}
                            className={`time-tab-btn ${selectedTimeTab === tab ? 'active' : ''}`}
                            onClick={() => {
                              setSelectedTimeTab(tab);
                              setSelectedTimeSlot(TIME_SLOTS[tab][0]);
                            }}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="time-slots-grid">
                      {TIME_SLOTS[selectedTimeTab].map((slot) => {
                        const isSelected = selectedTimeSlot === slot;
                        return (
                          <button
                            key={slot}
                            className={`time-slot-btn ${isSelected ? 'active' : ''}`}
                            onClick={() => setSelectedTimeSlot(slot)}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="booking-card select-consult-card">
                    <h3>Consultation Type</h3>
                    <p className="section-subtitle-sm">CHOOSE YOUR PREFERRED CONSULTATION MODE</p>
                    
                    <div className="consult-dropdown-wrapper">
                      <div className="consult-dropdown-icon">
                        {bookingConsultType === 'Online' ? (
                          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                          </svg>
                        ) : (
                          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        )}
                      </div>
                      <select
                        value={bookingConsultType}
                        onChange={(e) => setBookingConsultType(e.target.value)}
                        className="consult-selector"
                      >
                        <option value="Online">Online Teleconsultation</option>
                        <option value="Clinic">Clinic Visit</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Right Column: Checkout Summary Card */}
                <div className="booking-summary-col">
                  <div className="booking-card summary-card">
                    <div className="summary-doc-profile">
                      <DoctorAvatar 
                        src={bookingDoctor.image} 
                        fallbackSrc={bookingDoctor.fallbackImage} 
                        alt={bookingDoctor.name} 
                        className="summary-doc-avatar" 
                      />
                      <div className="summary-doc-details">
                        <h4>{bookingDoctor.name}</h4>
                        <span className="summary-doc-specialty">{bookingDoctor.specialty}</span>
                        <div className="rating-row-sm">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="star-icon">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                          <span>{bookingDoctor.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="summary-divider"></div>

                    <div className="summary-attributes">
                      <div className="summary-attr-item">
                        <div className="attr-label-with-icon">
                          <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span>{bookingConsultType === 'Online' ? 'Online Visit' : 'Clinic Visit'} :</span>
                        </div>
                        <strong className="attr-value">{bookingConsultType === 'Online' ? 'HealthBridge Virtual Room' : `Ashok Pride, Kukatpally, Hyderabad, India (${bookingDoctor.clinicName})`}</strong>
                      </div>

                      <div className="summary-attr-item">
                        <div className="attr-label-with-icon">
                          <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                            <line x1="12" y1="4" x2="12" y2="20"></line>
                          </svg>
                          <span>Consultation Fee :</span>
                        </div>
                        <strong className="attr-value text-teal">₹{bookingDoctor.fee}</strong>
                      </div>
                    </div>

                    <div className="selected-slot-box">
                      <div className="slot-info">
                        <span className="slot-title">Selected Slot</span>
                        <strong className="slot-time">May {selectedDate.split(' ')[1]}, {selectedTimeSlot}</strong>
                      </div>
                      <div className="slot-check-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="10" fill="#34C759"></circle>
                          <path d="M9 12l2 2 4-4" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                    </div>

                    <button 
                      className="continue-booking-btn"
                      onClick={() => setBookingStep(2)}
                    >
                      Continue Booking
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Patient Details with Inline Red Validations */}
            {bookingStep === 2 && (
              <div className="booking-details-form-container">
                <div className="booking-card details-form-card">
                  <div className="form-header">
                    <h3>Patient Details</h3>
                    <p>Please provide accurate info for the medical records.</p>
                  </div>

                  <div className="form-grid">
                    <div className="form-field full-width-sm">
                      <label>Full Name <span className="req">*</span></label>
                      <input 
                        type="text" 
                        placeholder="Enter your full name" 
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className={nameError ? 'input-error-border' : ''}
                      />
                      {nameError && <span className="error-message-inline">{nameError}</span>}
                    </div>

                    <div className="form-field full-width-sm">
                      <label>Age <span className="req">*</span></label>
                      <input 
                        type="number" 
                        placeholder="Enter age (e.g. 25)" 
                        value={patientAge}
                        onChange={(e) => setPatientAge(e.target.value)}
                        className={ageError ? 'input-error-border' : ''}
                      />
                      {ageError && <span className="error-message-inline">{ageError}</span>}
                    </div>

                    <div className="form-field gender-field-full">
                      <label>Gender</label>
                      <div className="gender-selector-pills">
                        {['Male', 'Female', 'Other'].map((gender) => (
                          <button
                            key={gender}
                            type="button"
                            className={`gender-pill-btn ${patientGender === gender ? 'active' : ''}`}
                            onClick={() => setPatientGender(gender)}
                          >
                            {gender}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="form-field phone-field-full">
                      <label>Phone Number <span className="req">*</span></label>
                      <input 
                        type="text" 
                        placeholder="+91 XXXXX XXXXX" 
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className={phoneError ? 'input-error-border' : ''}
                      />
                      {phoneError && <span className="error-message-inline">{phoneError}</span>}
                    </div>

                    <div className="form-field reason-field-full">
                      <label>Reason For Visit <span className="req">*</span></label>
                      <textarea 
                        placeholder="Describe your reason for visit (e.g. Fever, chest pain...)" 
                        value={patientReason}
                        onChange={(e) => setPatientReason(e.target.value)}
                        rows="4"
                        className={reasonError ? 'input-error-border' : ''}
                      ></textarea>
                      {reasonError && <span className="error-message-inline">{reasonError}</span>}
                    </div>

                    <div className="form-field checkbox-field-full">
                      <label className="checkbox-item-row">
                        <input 
                          type="checkbox" 
                          checked={bookForElse}
                          onChange={(e) => setBookForElse(e.target.checked)}
                        />
                        <span className="checkbox-custom"></span>
                        <span className="checkbox-label-text">Booking for someone else?</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-actions-row">
                    <button 
                      className="form-back-btn"
                      onClick={() => {
                        setBookingStep(1);
                        setHasTriedSubmit(false);
                      }}
                    >
                      Back
                    </button>
                    <button 
                      className="form-proceed-btn"
                      onClick={handleDetailsSubmit}
                    >
                      Proceed To Payment
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Review Appointment (Image 2 summary card style) */}
            {bookingStep === 3 && (
              <div className="booking-details-form-container">
                <div className="booking-card review-appointment-card">
                  <div className="form-header">
                    <h3>Review Appointment</h3>
                    <p>Check everything is correct before proceeding.</p>
                    <span className="review-title-sub">APPOINTMENT SUMMARY</span>
                  </div>

                  {/* Doctor Box */}
                  <div className="review-doc-summary-box">
                    <DoctorAvatar 
                      src={bookingDoctor.image} 
                      fallbackSrc={bookingDoctor.fallbackImage} 
                      alt={bookingDoctor.name} 
                      className="review-doc-avatar" 
                    />
                    <div className="review-doc-grid">
                      <div className="review-grid-item">
                        <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>May {selectedDate.split(' ')[1]}, 2026</span>
                      </div>
                      <div className="review-grid-item">
                        <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>{selectedTimeSlot}</span>
                      </div>
                      <div className="review-grid-item">
                        {bookingConsultType === 'Online' ? (
                          <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                          </svg>
                        ) : (
                          <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        )}
                        <span>{bookingConsultType === 'Online' ? 'Online Visit' : 'Clinic Visit'}</span>
                      </div>
                      <div className="review-grid-item text-teal">
                        <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="1" x2="12" y2="23"></line>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        <strong>₹{bookingDoctor.fee}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Patient Info */}
                  <div className="review-patient-info-container">
                    <h4 className="patient-info-title-sub">PATIENT INFO</h4>
                    <div className="review-patient-info-card">
                      <div className="info-row-item">
                        <span className="lbl">Patient Name</span>
                        <strong className="val">{patientName}</strong>
                      </div>
                      <div className="info-row-item">
                        <span className="lbl">Phone Number</span>
                        <strong className="val">{patientPhone}</strong>
                      </div>
                      <div className="info-row-item">
                        <span className="lbl">Age / Gender</span>
                        <strong className="val">{patientAge} Yrs, {patientGender}</strong>
                      </div>
                      <div className="info-row-item-reason">
                        <span className="lbl">Reason</span>
                        <p className="val-text">{patientReason}</p>
                      </div>
                    </div>
                  </div>

                  {/* Modify & Confirm actions */}
                  <div className="form-actions-row">
                    <button 
                      className="form-back-btn"
                      onClick={() => setBookingStep(2)}
                    >
                      Back to Details
                    </button>
                    <button 
                      className="form-proceed-btn"
                      onClick={() => setBookingStep(4)}
                    >
                      Confirm & Pay
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Payment Methods with GST calculations (Image 3 style) */}
            {bookingStep === 4 && (
              <div className="booking-grid-layout">
                {/* Left Column: Choose Payment Options */}
                <div className="booking-selectors-col">
                  <div className="booking-card select-payment-card">
                    <h3>Payment Method</h3>
                    <p className="section-subtitle-sm">CHOOSE YOUR PREFERRED GATEWAY</p>

                    <div className="payment-options-list">
                      {/* PhonePe Option */}
                      <label className={`payment-method-item ${selectedPaymentMethod === 'PhonePe' ? 'method-selected' : ''}`}>
                        <input 
                          type="radio" 
                          name="paymentGateway" 
                          value="PhonePe"
                          checked={selectedPaymentMethod === 'PhonePe'}
                          onChange={() => setSelectedPaymentMethod('PhonePe')}
                        />
                        <span className="payment-radio-custom"></span>
                        <div className="payment-method-content">
                          <div className="pay-svg-icon phonepe-purple">
                            {/* Authentic PhonePe stylized double-P logo */}
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="24" height="24" rx="6" fill="#5F259F"/>
                              <path d="M7 6H14.5C16.43 6 18 7.57 18 9.5C18 11.43 16.43 13 14.5 13H10V18H7V6ZM10 10.5H14.5C15.05 10.5 15.5 10.05 15.5 9.5C15.5 8.95 15.05 8.5 14.5 8.5H10V10.5Z" fill="white"/>
                            </svg>
                          </div>
                          <span>PhonePe</span>
                        </div>
                      </label>

                      {/* Paytm Option */}
                      <label className={`payment-method-item ${selectedPaymentMethod === 'Paytm Wallet' ? 'method-selected' : ''}`}>
                        <input 
                          type="radio" 
                          name="paymentGateway" 
                          value="Paytm Wallet"
                          checked={selectedPaymentMethod === 'Paytm Wallet'}
                          onChange={() => setSelectedPaymentMethod('Paytm Wallet')}
                        />
                        <span className="payment-radio-custom"></span>
                        <div className="payment-method-content">
                          <img src="/paytm.jpg" alt="Paytm Wallet" className="payment-logo-img" />
                          <span>Paytm Wallet</span>
                        </div>
                      </label>

                      {/* Google Pay Option */}
                      <label className={`payment-method-item ${selectedPaymentMethod === 'Google Pay' ? 'method-selected' : ''}`}>
                        <input 
                          type="radio" 
                          name="paymentGateway" 
                          value="Google Pay"
                          checked={selectedPaymentMethod === 'Google Pay'}
                          onChange={() => setSelectedPaymentMethod('Google Pay')}
                        />
                        <span className="payment-radio-custom"></span>
                        <div className="payment-method-content">
                          <svg viewBox="0 0 64 24" width="64" height="24" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '24px', width: 'auto', flexShrink: 0, mixBlendMode: 'normal' }}>
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.08H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.92l2.85-2.22-.03-.6z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.08l3.66 2.84c.87-2.6 3.3-4.54 6.16-4.54z" fill="#EA4335"/>
                            <text x="28" y="17" fill="#5F6368" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="15" letterSpacing="0.2">Pay</text>
                          </svg>
                          <span>Google Pay</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Right Column: Price Breakdown and Final Pay button */}
                <div className="booking-summary-col">
                  <div className="booking-card summary-card">
                    <h3>Price Breakdown</h3>
                    
                    <div className="price-breakdown-details" style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div className="fee-box">
                        <span className="fee-label" style={{ fontWeight: 600 }}>Consultation Fee</span>
                        <span className="fee-value-sm" style={{ fontWeight: 700, color: '#4A5568' }}>₹{bookingDoctor.fee}</span>
                      </div>
                      <div className="fee-box">
                        <span className="fee-label" style={{ fontWeight: 600 }}>Service Tax (18% GST)</span>
                        <span className="fee-value-sm" style={{ fontWeight: 700, color: '#4A5568' }}>₹{serviceTax}</span>
                      </div>
                      
                      <div className="summary-divider" style={{ margin: '12px 0' }}></div>
                      
                      <div className="fee-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="fee-label" style={{ fontSize: '16px', fontWeight: 800, color: '#2D3748' }}>Total Amount</span>
                        <span className="fee-value" style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary)' }}>₹{totalAmount}</span>
                      </div>
                    </div>

                    <button 
                      className="continue-booking-btn"
                      style={{ marginTop: '24px' }}
                      onClick={() => setShowSuccessModal(true)}
                    >
                      Pay ₹{totalAmount}
                    </button>

                    <div style={{ textAlign: 'center', marginTop: '16px' }}>
                      <button 
                        className="view-profile-link" 
                        style={{ background: 'none', border: 'none', fontStyle: 'normal' }}
                        onClick={() => setBookingStep(3)}
                      >
                        Back to review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* Payment Success Modal Backdrop overlay (Image 4) */}
        {showSuccessModal && (
          <div className="booking-modal-overlay">
            <div className="booking-success-modal-card">
              <div className="success-icon-wrapper-large">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#EEFAF8"></circle>
                  <path d="M8.5 12.5l2 2 5-5" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                </svg>
              </div>

              <h2>Payment Successful!</h2>
              <p>Your appointment has been confirmed for</p>

              <div className="modal-receipt-box">
                <div className="m-receipt-row">
                  <span className="lbl">Date:</span>
                  <strong className="val">May {selectedDate.split(' ')[1]}, 2026</strong>
                </div>
                <div className="m-receipt-row">
                  <span className="lbl">Time:</span>
                  <strong className="val">{selectedTimeSlot}</strong>
                </div>
                <div className="m-receipt-row">
                  <span className="lbl">Doctor:</span>
                  <strong className="val">{bookingDoctor.name}</strong>
                </div>
              </div>

              <button 
                className="modal-done-btn"
                onClick={() => {
                  setShowSuccessModal(false);
                  setBookingDoctor(null);
                  setBookingStep(1);
                  setPatientName('');
                  setPatientAge('');
                  setPatientPhone('');
                  setPatientReason('');
                  setHasTriedSubmit(false);
                }}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </main>
    );
  }

  // Else, render the standard filter list view:
  return (
    <main className="patients-sol-page">
      {/* Hero Section */}
      <section className="patients-sol-hero">
        <div className="container">
          <div className="patients-sol-hero-header">
            <h1 className="patients-sol-title">
              Find Your <span className="text-teal">Specialist</span>
            </h1>
            <p className="patients-sol-subtitle">
              Discover top-rated doctors verified for quality care. Search doctors by speciality, symptoms, or location with ease.
            </p>
          </div>

          {/* Premium Search Panel */}
          <div className="search-panel-wrapper">
            <div className="search-panel-grid">
              <div className="search-field">
                <label>Search</label>
                <div className="input-with-icon">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search by specialty, doctor name..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="search-field">
                <label>Location</label>
                <div className="input-with-icon">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Nearby clinic, hospital..." 
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="search-field">
                <label>Consultation Type</label>
                <div className="input-with-icon">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  </svg>
                  <select 
                    value={consultType} 
                    onChange={(e) => setConsultType(e.target.value)}
                  >
                    <option value="All">Online & Clinic</option>
                    <option value="Online">Online</option>
                    <option value="Clinic">Clinic</option>
                  </select>
                </div>
              </div>

              <button className="search-btn-primary">
                Search
              </button>
            </div>

            {/* Specialty Pills directly as requested in 2nd image */}
            <div className="specialist-pills-container">
              {ALL_SPECIALTIES.map((spec) => {
                const isActive = selectedSpecialty === spec || (spec === 'All Specialists' && Object.values(sidebarSpecialties).every(v => !v));
                return (
                  <button
                    key={spec}
                    className={`specialist-pill ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedSpecialty(spec);
                      if (spec === 'All Specialists') {
                        setSidebarSpecialties({});
                      } else {
                        setSidebarSpecialties({ [spec]: true });
                      }
                    }}
                  >
                    {spec}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Results Section - Clear Background Differentiation */}
      <section className="patients-sol-results-section">
        <div className="container">
          <div className="results-layout">
            
            {/* Sidebar Filters */}
            <aside className="filters-sidebar">
              <div className="filters-card">
                <div className="filters-header">
                  <h3>Filters</h3>
                  <button className="clear-all-btn" onClick={handleClearAll}>Clear All</button>
                </div>

                {/* Specialty Checkboxes */}
                <div className="filter-group">
                  <h4>Specialties</h4>
                  <div className="checkbox-list">
                    {ALL_SPECIALTIES.slice(1).map((spec) => (
                      <label key={spec} className="checkbox-item">
                        <input 
                          type="checkbox"
                          checked={!!sidebarSpecialties[spec]}
                          onChange={() => handleSidebarCheck(spec)}
                        />
                        <span className="checkbox-custom"></span>
                        <span className="checkbox-label">{spec}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Symptoms search */}
                <div className="filter-group">
                  <h4>Symptoms</h4>
                  <div className="search-symptom-input">
                    <svg className="icon-search-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input 
                      type="text" 
                      placeholder="Symptoms..."
                      value={symptomQuery}
                      onChange={(e) => setSymptomQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Consultation Type */}
                <div className="filter-group">
                  <h4>Consultation Type</h4>
                  <div className="radio-list">
                    <label className="radio-item">
                      <input 
                        type="radio" 
                        name="consultationType" 
                        value="All"
                        checked={consultType === 'All'}
                        onChange={() => setConsultType('All')}
                      />
                      <span className="radio-custom"></span>
                      <span className="radio-label">All</span>
                    </label>
                    <label className="radio-item">
                      <input 
                        type="radio" 
                        name="consultationType" 
                        value="Online"
                        checked={consultType === 'Online'}
                        onChange={() => setConsultType('Online')}
                      />
                      <span className="radio-custom"></span>
                      <span className="radio-label">Online</span>
                    </label>
                    <label className="radio-item">
                      <input 
                        type="radio" 
                        name="consultationType" 
                        value="Clinic"
                        checked={consultType === 'Clinic'}
                        onChange={() => setConsultType('Clinic')}
                      />
                      <span className="radio-custom"></span>
                      <span className="radio-label">Clinic</span>
                    </label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Doctor Results Column */}
            <div className="results-column">
              
              {/* Toolbar */}
              <div className="results-toolbar">
                <span className="doctors-found-count">
                  {sortedDoctors.length} {sortedDoctors.length === 1 ? 'Doctor' : 'Doctors'} Found
                </span>
                
                <div className="sort-pills">
                  {['Relevance', 'Experience', 'Fees', 'Rating'].map((pill) => (
                    <button
                      key={pill}
                      className={`sort-pill ${sortBy === pill ? 'active' : ''}`}
                      onClick={() => setSortBy(pill)}
                    >
                      {pill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Doctors List */}
              <div className="doctors-grid">
                {sortedDoctors.length > 0 ? (
                  sortedDoctors.map((doc) => (
                    <div key={doc.id} className="doctor-card">
                      
                      {/* Doctor Profile Info */}
                      <div className="doc-main-info">
                        <div className="avatar-wrapper">
                          <DoctorAvatar 
                            src={doc.image} 
                            fallbackSrc={doc.fallbackImage} 
                            alt={doc.name} 
                            className="doctor-avatar" 
                          />
                          <span className="status-indicator online"></span>
                        </div>
                        
                        <div className="doc-details">
                          <div className="name-row">
                            <h3>{doc.name}</h3>
                            <span className="availability-pill">Next Available</span>
                          </div>
                          
                          <span className="doc-specialty-badge">{doc.specialty}</span>
                          
                          <div className="doc-card-meta-line">
                            <span className="doc-card-experience-pill">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                              </svg>
                              {doc.experience} yrs experience
                            </span>
                            <span className="doc-card-rating-pill">
                              <svg viewBox="0 0 24 24" fill="currentColor" className="star-icon">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                              </svg>
                              {doc.rating}
                            </span>
                          </div>

                          <div className="languages-row">
                            <strong>Languages:</strong> {doc.languages.join(', ')}
                          </div>

                          <div className="symptoms-tags">
                            {doc.tags.map((tag) => (
                              <span key={tag} className="tag-pill">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Booking Section */}
                      <div className="doc-booking-info">
                        <div className="fee-box">
                          <span className="fee-label">Consultation Fee</span>
                          <span className="fee-value">₹{doc.fee}</span>
                        </div>

                        <div className="slot-box">
                          <span className="slot-label">Next Slot</span>
                          <span className="slot-value">{doc.nextSlot}</span>
                        </div>

                        <button 
                          className="book-appointment-btn"
                          onClick={() => {
                            setBookingDoctor(doc);
                            setBookingStep(1);
                            setHasTriedSubmit(false);
                          }}
                        >
                          Book Appointment
                        </button>
                        
                        <button 
                          className="view-profile-link" 
                          style={{ background: 'none', border: 'none', fontStyle: 'normal', cursor: 'pointer' }}
                          onClick={() => setProfileDoctor(doc)}
                        >
                          View Profile
                        </button>
                      </div>

                    </div>
                  ))
                ) : (
                  <div className="no-doctors-card">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="no-doc-icon">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    <h4>No Doctors Found</h4>
                    <p>Try resetting some filters or adjusting your search queries.</p>
                    <button className="btn-solid" onClick={handleClearAll} style={{ background: 'var(--primary)', color: '#fff', borderRadius: '50px', padding: '10px 24px', marginTop: '16px', fontWeight: 'bold' }}>
                      Reset All Filters
                    </button>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
