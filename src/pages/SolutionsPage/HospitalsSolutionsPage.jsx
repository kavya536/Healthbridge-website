import { useState, useEffect } from 'react';
import './HospitalsSolutionsPage.css';

const mockHospitals = [
  {
    id: 1,
    name: 'Care Hospitals',
    location: 'Kukatpally, Hyderabad',
    rating: 4.5,
    ratingCount: '120+ Ratings',
    image: '/h1',
    fallbackImage: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=400',
    type: 'Multi-Specialty',
    beds: '150 Beds Available'
  },
  {
    id: 2,
    name: 'Continental Hospitals',
    location: 'Gachibowli, Hyderabad',
    rating: 4.8,
    ratingCount: '150+ Ratings',
    image: '/h2',
    fallbackImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400',
    type: 'Super-Specialty',
    beds: '200 Beds Available'
  },
  {
    id: 3,
    name: 'Apollo Hospitals',
    location: 'Jubilee Hills, Hyderabad',
    rating: 4.9,
    ratingCount: '300+ Ratings',
    image: '/h3',
    fallbackImage: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=400',
    type: 'Multi-Specialty',
    beds: '350 Beds Available'
  },
  {
    id: 4,
    name: 'Yashoda Hospitals',
    location: 'Hitech City, Hyderabad',
    rating: 4.7,
    ratingCount: '220+ Ratings',
    image: '/h4',
    fallbackImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400',
    type: 'Super-Specialty',
    beds: '280 Beds Available'
  },
  {
    id: 5,
    name: 'Medicover Hospitals',
    location: 'Madhapur, Hyderabad',
    rating: 4.6,
    ratingCount: '180+ Ratings',
    image: '/h5.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400',
    type: 'Multi-Specialty',
    beds: '120 Beds Available'
  },
  {
    id: 6,
    name: 'KIMS Hospitals',
    location: 'Secunderabad, Hyderabad',
    rating: 4.4,
    ratingCount: '95+ Ratings',
    image: '/h6.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=400',
    type: 'Super-Specialty',
    beds: '180 Beds Available'
  }
];

function SafeHospitalImage({ src, fallbackSrc, alt, className }) {
  const [imgUrl, setImgUrl] = useState(src);

  useEffect(() => {
    const hasExtension = src && /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(src);
    if (src && hasExtension) {
      setImgUrl(src);
    } else if (src && src.startsWith('/')) {
      let active = true;
      fetch(src)
        .then(res => {
          if (!res.ok) throw new Error('Fetch failed');
          return res.blob();
        })
        .then(blob => {
          if (!active) return;
          const objectUrl = URL.createObjectURL(blob);
          setImgUrl(objectUrl);
        })
        .catch(() => {
          if (active) setImgUrl(fallbackSrc);
        });
      return () => {
        active = false;
      };
    } else {
      setImgUrl(src || fallbackSrc);
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

export default function HospitalsSolutionsPage() {
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const scrollTimer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    return () => clearTimeout(scrollTimer);
  }, []);

  const filteredHospitals = mockHospitals.filter(hosp => 
    hosp.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
    hosp.name.toLowerCase().includes(searchLocation.toLowerCase())
  );

  return (
    <main className="hospitals-sol-page bg-light-tint">
      {/* Hero Section */}
      <section className="hospitals-hero-section">
        <div className="container">
          <div className="hospitals-hero-headers">
            <span className="section-tag" style={{ textTransform: 'none' }}>Hospitals & Clinics</span>
            <h1 className="hospitals-hero-title">
              Find Premium <span className="text-teal">Hospitals & Clinics</span>
            </h1>
            <p className="hospitals-hero-subtitle">
              Locate nearby clinical centers and premium multi-specialty hospitals connected to the HealthBridge network in real-time.
            </p>
          </div>

          {/* Premium Search Panel */}
          <div className="hospitals-search-bar-card">
            <div className="h-search-grid">
              <div className="h-search-field">
                <label>Search by Location / Name</label>
                <div className="input-with-icon-h">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <input 
                    type="text" 
                    value={searchLocation} 
                    onChange={(e) => setSearchLocation(e.target.value)} 
                    placeholder="Enter area (e.g. Kukatpally, Madhapur, Gachibowli...)" 
                  />
                  {searchLocation && (
                    <button className="clear-search-btn" onClick={() => setSearchLocation('')}>×</button>
                  )}
                </div>
              </div>
              <button className="h-search-primary-btn">
                Search Network
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Hospitals & Clinics Section */}
      <section className="nearby-hospitals-section">
        <div className="container">
          <div className="sec-header-row">
            <h3 className="section-title-sm">Nearby Clinical Centers</h3>
            <span className="results-count">
              Showing {filteredHospitals.length} {filteredHospitals.length === 1 ? 'Hospital' : 'Hospitals'} in Hyderabad
            </span>
          </div>

          <div className="hospitals-cards-grid">
            {filteredHospitals.length > 0 ? (
              filteredHospitals.map(hosp => (
                <div className="hospital-card-item" key={hosp.id}>
                  <div className="h-card-banner">
                    <SafeHospitalImage 
                      src={hosp.image} 
                      fallbackSrc={hosp.fallbackImage} 
                      alt={hosp.name} 
                      className="h-banner-img" 
                    />
                    <span className="h-status-badge badge-green">
                      {hosp.beds}
                    </span>
                  </div>

                  <div className="h-card-content">
                    <h4>{hosp.name}</h4>
                    <p className="h-card-address">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm pin-icon">
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{hosp.location}</span>
                    </p>

                    <div className="h-card-footer-metrics">
                      <span className="metric-type">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="icon-sm type-icon">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="9" y1="3" x2="9" y2="21"></line>
                        </svg>
                        {hosp.type}
                      </span>
                      <span className="metric-rating">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="star-icon">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <strong>{hosp.rating}</strong> ({hosp.ratingCount})
                      </span>
                    </div>

                    <button 
                      className="h-book-now-btn"
                      onClick={() => {
                        setSelectedHospital(hosp);
                        setBookingConfirmed(true);
                      }}
                    >
                      Visit
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-hosp-found">
                <h4>No Registered Centers Found</h4>
                <p>Try searching for areas like "Kukatpally", "Gachibowli", "Madhapur", or "Secunderabad".</p>
                <button className="reset-btn" onClick={() => setSearchLocation('')}>
                  Show All Hospitals
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Booking Confirmation Dialog Popup */}
      {bookingConfirmed && selectedHospital && (
        <div className="booking-modal-overlay">
          <div className="booking-success-modal-card">
            <div className="success-icon-wrapper-large">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#EEFAF8"></circle>
                <path d="M8.5 12.5l2 2 5-5" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
              </svg>
            </div>

            <h2>OPD Booking Successful!</h2>
            <p>Your appointment queue has been reserved at</p>

            <div className="modal-receipt-box">
              <div className="m-receipt-row">
                <span className="lbl">Hospital:</span>
                <strong className="val">{selectedHospital.name}</strong>
              </div>
              <div className="m-receipt-row">
                <span className="lbl">Location:</span>
                <strong className="val">{selectedHospital.location}</strong>
              </div>
              <div className="m-receipt-row">
                <span className="lbl">Priority Status:</span>
                <strong className="val text-teal">Fast-Track OPD</strong>
              </div>
            </div>

            <button 
              className="modal-done-btn"
              onClick={() => {
                setBookingConfirmed(false);
                setSelectedHospital(null);
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
