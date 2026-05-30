import { useState, useEffect } from 'react';
import './PharmaciesSolutionsPage.css';

// Rich Mock Pharmacy Database
const HYDERABAD_AREAS = [
  'All Areas',
  'Kukatpally',
  'Hitech City',
  'Madhapur',
  'Gachibowli',
  'Banjara Hills',
  'Secunderabad'
];

const mockPharmacies = [
  {
    id: 1,
    name: 'Apollo Pharmacy 24/7',
    area: 'Kukatpally',
    distance: '0.8 km',
    rating: 4.8,
    status: 'Open 24/7',
    delivery: 'Free delivery',
    image: '/phar_1',
    address: 'Plot 45, Ashok Pride, Kukatpally, Hyderabad, 500072',
    phone: '+91 98480 22338',
    hours: 'Open 24 Hours',
    services: ['Home Delivery', '24/7 Service', 'Prescription Refills', 'Vaccinations']
  },
  {
    id: 2,
    name: 'Maan Pharmacy Ltd.',
    area: 'Madhapur',
    distance: '1.2 km',
    rating: 4.5,
    status: 'Open Now',
    delivery: 'Free delivery',
    image: '/phar_3',
    address: 'Metro Station Pillar 24, Madhapur, Hyderabad, 500081',
    phone: '+91 99080 11223',
    hours: '10:00 AM - 10:00 PM',
    services: ['Home Delivery', 'Generic Medicines', 'Diagnostic Dropoff']
  },
  {
    id: 3,
    name: 'Cleveland Pharmacy & Wellness',
    area: 'Hitech City',
    distance: '2.5 km',
    rating: 4.7,
    status: 'Open Now',
    delivery: 'Free delivery',
    image: '/phar_3',
    address: 'Mindspace IT Park Road, Hitech City, Hyderabad, 500081',
    phone: '+91 91234 56789',
    hours: '08:00 AM - 11:00 PM',
    services: ['Home Delivery', 'Organic Wellness', 'Online Consultation']
  },
  {
    id: 4,
    name: 'MedPlus 24/7 Pharmacy',
    area: 'Gachibowli',
    distance: '3.1 km',
    rating: 4.6,
    status: 'Open 24/7',
    delivery: 'Free delivery',
    image: '/phar_5',
    address: 'Financial District Junction, Gachibowli, Hyderabad, 500032',
    phone: '+91 98850 44556',
    hours: 'Open 24 Hours',
    services: ['Home Delivery', '24/7 Service', 'Veterinary Drugs']
  },
  {
    id: 5,
    name: 'Banjara Hills Wellness Pharmacy',
    area: 'Banjara Hills',
    distance: '1.7 km',
    rating: 4.9,
    status: 'Open Now',
    delivery: 'Delivery Available',
    image: '/phar_6',
    address: 'Road No. 12, Banjara Hills, Hyderabad, 500034',
    phone: '+91 90001 88990',
    hours: '09:00 AM - 10:00 PM',
    services: ['Home Delivery', 'Premium Aesthetics', 'Compounding Lab']
  },
  {
    id: 6,
    name: 'Secunderabad City Druggists',
    area: 'Secunderabad',
    distance: '4.2 km',
    rating: 4.4,
    status: 'Open Now',
    delivery: 'Delivery Available',
    image: '/phar_1',
    address: 'MG Road Near Clock Tower, Secunderabad, 500003',
    phone: '+91 97030 77665',
    hours: '10:00 AM - 09:30 PM',
    services: ['Home Delivery', 'Surgical Equipment', 'Baby Care Depot']
  }
];

const MEDICINE_CATALOG = [
  {
    id: 101,
    name: 'Napa Extend Tablet',
    generic: 'Paracetamol',
    price: 90,
    oldPrice: 100,
    image: '/b43102d33fa401fd9568f3dd85e848da52c9305e.png',
    fallbackImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200',
    pack: '10 Tablets',
    instock: true
  },
  {
    id: 102,
    name: 'Xpa Pediatric Drop',
    generic: 'Paracetamol Drop',
    price: 60,
    oldPrice: null,
    image: '/a79f36a6dcf867db049c833662bc00724f5131c8.png',
    fallbackImage: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&q=80&w=200',
    pack: '01 Bottle',
    instock: true
  },
  {
    id: 103,
    name: 'Avolac Oral Solution',
    generic: 'Lactulose Solution',
    price: 150,
    oldPrice: 180,
    image: '/54f2ea53547bef8f38062114987b7d3eb2308661.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1607619056574-7b8f30413b86?auto=format&fit=crop&q=80&w=200',
    pack: '100ml Syrup',
    instock: true
  },
  {
    id: 104,
    name: 'Napa Tablet 500mg',
    generic: 'Paracetamol Standard',
    price: 30,
    oldPrice: 35,
    image: '/49a2e2b913f2aa657bac0133306d8a087f354866.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200',
    pack: '10 Tablets',
    instock: true
  },
  {
    id: 105,
    name: 'ZincoVit Immune Plus',
    generic: 'Multivitamin & Zinc',
    price: 110,
    oldPrice: 120,
    image: '/e7363611f40fffb1f27ed4e92418331f4f7c299a.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=200',
    pack: '15 Tablets',
    instock: true
  },
  {
    id: 106,
    name: 'Axim-CV 200mg',
    generic: 'Cefixime Antibiotic',
    price: 240,
    oldPrice: 280,
    image: '/e8134963af54ca0c53f7378feb8cf75400abe293.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=200',
    pack: '6 Tablets',
    instock: false, // For Availability page test case
    alternative: 'Taxim-O 200mg (Price: ₹190 - In Stock)'
  }
];

function SafePharmacyImage({ src, fallbackSrc, alt, className }) {
  const [imgUrl, setImgUrl] = useState(src);

  useEffect(() => {
    const hasExtension = src && /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(src);
    if (src && hasExtension) {
      setImgUrl(src);
    } else if (src && src.startsWith('/')) {
      // Decode standard octet stream images (both d1-d8 and phar_1-phar_6)
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

export default function PharmaciesSolutionsPage() {
  const [selectedArea, setSelectedArea] = useState('All Areas');
  const [searchLocation, setSearchLocation] = useState('Kukatpally, Hyderabad, India');
  const [searchMedicine, setSearchMedicine] = useState('');
  const [searchName, setSearchName] = useState('');
  
  // Sidebar/Header Filters state
  const [deliveryFilter, setDeliveryFilter] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [ratingFilter, setRatingFilter] = useState('All');

  // Checkout State Machine
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [flowStep, setFlowStep] = useState(1); // 1: Search, 2: Profile, 3: Upload, 4: Cart/Availability, 5: Order Summary, 6: Payment, 7: Success
  const [activeProfileTab, setActiveProfileTab] = useState('Medicine'); // Medicine, About Us, Open and Closed, Rating
  const [cart, setCart] = useState([]);
  
  // Prescription upload state
  const [prescriptionImage, setPrescriptionImage] = useState(null);
  const [prescriptionNotes, setPrescriptionNotes] = useState('');
  const [prescripError, setPrescripError] = useState('');

  // Shipping details state
  const [shippingName, setShippingName] = useState('Shaidul Islam');
  const [shippingAddress, setShippingAddress] = useState('Plot 45, Ashok Pride, Kukatpally, Hyderabad, 500072');
  const [shippingPhone, setShippingPhone] = useState('+91 98765 43210');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const scrollTimer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    return () => clearTimeout(scrollTimer);
  }, [flowStep]);

  // Cart operations
  const handleAddToCart = (med) => {
    const existing = cart.find(item => item.id === med.id);
    if (existing) {
      setCart(cart.map(item => item.id === med.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...med, qty: 1 }]);
    }
  };

  const handleQtyChange = (id, amount) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = item.qty + amount;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }).filter(item => item.qty > 0));
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handlePrescriptionUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPrescriptionImage(URL.createObjectURL(file));
      setPrescripError('');
    }
  };

  const handlePrescriptionSubmit = () => {
    if (!prescriptionImage) {
      setPrescripError('Please select or upload a valid prescription image.');
      return;
    }
    setFlowStep(4);
  };

  const handlePlaceOrder = () => {
    const generatedId = 'HB-PH-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setFlowStep(7);
  };

  const handleResetFlow = () => {
    setCart([]);
    setSelectedPharmacy(null);
    setPrescriptionImage(null);
    setPrescriptionNotes('');
    setFlowStep(1);
  };

  // Filter calculation logic
  const filteredPharmacies = mockPharmacies.filter(ph => {
    // Area filtering
    if (selectedArea !== 'All Areas' && ph.area !== selectedArea) return false;

    // Search queries
    if (searchLocation) {
      const loc = searchLocation.toLowerCase();
      if (!ph.address.toLowerCase().includes(loc) && !ph.area.toLowerCase().includes(loc)) {
        // Soft match filter
      }
    }
    if (searchName) {
      const n = searchName.toLowerCase();
      if (!ph.name.toLowerCase().includes(n)) return false;
    }

    // Direct toggle checks
    if (deliveryFilter && ph.delivery !== 'Free delivery') return false;
    if (openFilter && !ph.status.toLowerCase().includes('open')) return false;

    // Ratings
    if (ratingFilter !== 'All') {
      const minRate = parseFloat(ratingFilter);
      if (ph.rating < minRate) return false;
    }

    return true;
  });

  // Render Step Content
  return (
    <main className="pharmacy-sol-page">
      
      {/* Banner & Categories (Step 1 Search View) */}
      {flowStep === 1 && (
        <>
          {/* Top services promo banner */}
          <section className="pharmacy-promo-banner-section">
            <div className="container">
              <div className="promo-banner-card">
                <div className="promo-banner-text-col">
                  <h2>Services Up To 30% OFF</h2>
                  <p>Order fresh medicines online with verified pharmacists.</p>
                  <button className="promo-view-more-btn">View More</button>
                </div>
                <div className="promo-banner-graphic-col">
                  <img src="/doctor_clinic_treat.png" alt="Pharmacist Service Banner" className="promo-banner-image" />
                </div>
              </div>
            </div>
          </section>

          {/* Heading and Location Search Bar */}
          <section className="pharmacy-search-hero-section">
            <div className="container">
              <div className="pharmacy-hero-headers">
                <h1 className="pharmacy-hero-title">
                  Find Your <span className="text-teal">Pharmacies</span>
                </h1>
                <p className="pharmacy-hero-subtitle">
                  Order from Kukatpally's 24/7 top-rated pharmacies with home delivery.
                </p>
              </div>

              {/* Advanced multi-search bar grid */}
              <div className="pharmacy-search-bar-card">
                <div className="p-search-grid">
                  <div className="p-search-field">
                    <label>Enter Location</label>
                    <div className="input-with-icon-p">
                      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <input 
                        type="text" 
                        value={searchLocation} 
                        onChange={(e) => setSearchLocation(e.target.value)} 
                        placeholder="E.g. Kukatpally, Ashok Pride, Hyderabad" 
                      />
                    </div>
                  </div>

                  <div className="p-search-field">
                    <label>Search Medicines</label>
                    <div className="input-with-icon-p">
                      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                      <input 
                        type="text" 
                        value={searchMedicine} 
                        onChange={(e) => setSearchMedicine(e.target.value)} 
                        placeholder="Paracetamol, Lactulose..." 
                      />
                    </div>
                  </div>

                  <div className="p-search-field">
                    <label>Pharmacy Name</label>
                    <div className="input-with-icon-p">
                      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <input 
                        type="text" 
                        value={searchName} 
                        onChange={(e) => setSearchName(e.target.value)} 
                        placeholder="Apollo, Maan Pharmacy..." 
                      />
                    </div>
                  </div>

                  <button className="p-search-primary-btn">
                    Search
                  </button>
                </div>

                {/* Filter Row inside Search Panel */}
                <div className="pharmacy-inline-filters-row">
                  <div className="inline-checkbox-item">
                    <label className="checkbox-item-row">
                      <input 
                        type="checkbox" 
                        checked={deliveryFilter} 
                        onChange={(e) => setDeliveryFilter(e.target.checked)} 
                      />
                      <span className="checkbox-custom"></span>
                      <span className="checkbox-label-text">Delivery Available</span>
                    </label>
                  </div>

                  <div className="inline-checkbox-item">
                    <label className="checkbox-item-row">
                      <input 
                        type="checkbox" 
                        checked={openFilter} 
                        onChange={(e) => setOpenFilter(e.target.checked)} 
                      />
                      <span className="checkbox-custom"></span>
                      <span className="checkbox-label-text">Open Now / 24-7</span>
                    </label>
                  </div>

                  <div className="rating-select-wrapper">
                    <span>Min Rating: </span>
                    <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
                      <option value="All">All Ratings</option>
                      <option value="4.8">4.8+ Stars</option>
                      <option value="4.6">4.6+ Stars</option>
                      <option value="4.4">4.4+ Stars</option>
                    </select>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Categories Section */}
          <section className="pharmacy-categories-section">
            <div className="container">
              <div className="sec-header-row">
                <h3>Categories</h3>
                <button className="view-all-text-btn">View All</button>
              </div>

              <div className="categories-pills-row">
                <div className="cat-pill-item item-blue">
                  <div className="cat-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 2h4v12h-4zM2 14h16v8H2zM6 14v-4a6 6 0 0 1 12 0v4"></path>
                    </svg>
                  </div>
                  <span>Injection</span>
                </div>

                <div className="cat-pill-item item-orange">
                  <div className="cat-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="9" y1="3" x2="9" y2="21"></line>
                      <line x1="15" y1="3" x2="15" y2="21"></line>
                    </svg>
                  </div>
                  <span>Bandages</span>
                </div>

                <div className="cat-pill-item item-blue">
                  <div className="cat-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                    </svg>
                  </div>
                  <span>Syrup</span>
                </div>

                <div className="cat-pill-item item-green">
                  <div className="cat-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </div>
                  <span>Pills Tablet</span>
                </div>
              </div>
            </div>
          </section>

          {/* Near By Pharmacies section */}
          <section className="nearby-pharmacies-section">
            <div className="container">
              <div className="sec-header-row">
                <h3>Nearby Pharmacy</h3>
                <div className="sec-area-tabs">
                  {HYDERABAD_AREAS.map(area => (
                    <button 
                      key={area} 
                      className={`area-tab-btn ${selectedArea === area ? 'active' : ''}`}
                      onClick={() => setSelectedArea(area)}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pharmacies-cards-grid">
                {filteredPharmacies.length > 0 ? (
                  filteredPharmacies.map(ph => (
                    <div className="pharmacy-card-item" key={ph.id}>
                      <div className="ph-card-banner">
                        <SafePharmacyImage 
                          src={ph.image} 
                          fallbackSrc="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=400" 
                          alt={ph.name} 
                          className="ph-banner-img" 
                        />
                        <span className={`ph-status-badge ${ph.status.includes('24/7') ? 'badge-red' : 'badge-green'}`}>
                          {ph.status}
                        </span>
                      </div>

                      <div className="ph-card-content">
                        <h4>{ph.name}</h4>
                        <p className="ph-card-address">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm pin-icon">
                            <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span>{ph.address}</span>
                        </p>

                        <div className="ph-card-footer-metrics">
                          <span className="metric-delivery">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="icon-sm delivery-icon">
                              <polyline points="21 8 21 21 3 21 3 8"></polyline>
                              <rect x="1" y="3" width="22" height="5" rx="1"></rect>
                              <line x1="10" y1="12" x2="14" y2="12"></line>
                            </svg>
                            {ph.delivery}
                          </span>
                          <span className="metric-rating">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="star-icon">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <strong>{ph.rating}</strong> (70+)
                          </span>
                        </div>

                        <button 
                          className="ph-view-profile-btn"
                          onClick={() => {
                            setSelectedPharmacy(ph);
                            setFlowStep(2);
                          }}
                        >
                          View Pharmacy
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-ph-found">
                    <h4>No Pharmacies Found</h4>
                    <p>Adjust your search location or select "All Areas" to see top 24/7 stores in Hyderabad.</p>
                  </div>
                )}
              </div>
            </div>
          </section>

        </>
      )}

      {/* Step 2: Pharmacy Profile */}
      {flowStep === 2 && selectedPharmacy && (
        <section className="pharmacy-profile-section bg-light-tint">
          <div className="container">
            <div className="profile-header-actions">
              <button className="profile-back-search-btn" onClick={() => setFlowStep(1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="icon-sm">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span>Back to Pharmacies</span>
              </button>
            </div>

            <div className="profile-doc-main-header-card">
              <div className="profile-main-doc-info">
                <div className="profile-avatar-wrapper">
                  <SafePharmacyImage 
                    src={selectedPharmacy.image} 
                    fallbackSrc="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=400" 
                    alt={selectedPharmacy.name} 
                    className="profile-doc-avatar" 
                  />
                  <span className="status-indicator online"></span>
                </div>
                <div className="profile-doc-details">
                  <h3>{selectedPharmacy.name}</h3>
                  <span className="profile-doc-specialty">{selectedPharmacy.area} Area Pharmacy</span>
                  <div className="profile-stars-row">
                    <span className="rating-score">{selectedPharmacy.rating}</span>
                    <span className="rating-count">(70+ Verified Ratings)</span>
                  </div>
                  <p className="ph-full-address-label">
                    <strong>Address: </strong> {selectedPharmacy.address}
                  </p>
                  <p className="ph-delivery-timing">
                    <strong>Delivery: </strong> 25 - 30 mins | <strong>Map Direction: </strong> Ashok Pride Main Rd
                  </p>
                </div>
              </div>

              {/* Upload Prescription FAB inside Header */}
              <div className="upload-prescription-fab-box">
                <button 
                  className="upload-prescription-fab-btn"
                  onClick={() => setFlowStep(3)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <span>Upload Prescription</span>
                </button>
              </div>
            </div>

            {/* Profile Content Tabs */}
            <div className="pharmacy-profile-tabs-wrapper">
              <div className="profile-tabs-row-ph">
                {['Medicine', 'About Us', 'Open and Closed', 'Rating'].map(tab => (
                  <button 
                    key={tab} 
                    className={`profile-tab-btn-ph ${activeProfileTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveProfileTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="tab-contents-box-ph">
                
                {/* Medicine List Tab */}
                {activeProfileTab === 'Medicine' && (
                  <div className="medicine-catalog-grid-view">
                    
                    {/* Search Medicines inside Tab */}
                    <div className="medicines-filter-search-box">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-search-sm">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                      <input 
                        type="text" 
                        value={searchMedicine} 
                        onChange={(e) => setSearchMedicine(e.target.value)} 
                        placeholder="Search medicines in stock..." 
                      />
                    </div>

                    <div className="medicines-cards-grid">
                      {MEDICINE_CATALOG.filter(med => med.name.toLowerCase().includes(searchMedicine.toLowerCase())).map(med => (
                        <div className="medicine-card-item-box" key={med.id}>
                          <div className="med-image-wrapper">
                            <SafePharmacyImage 
                              src={med.image} 
                              fallbackSrc={med.fallbackImage} 
                              alt={med.name} 
                              className="medicine-img" 
                            />
                            {med.oldPrice && (
                              <span className="med-discount-badge">Get 10% OFF</span>
                            )}
                          </div>

                          <div className="med-details-wrapper">
                            <h4>{med.name}</h4>
                            <span className="med-generic-label">({med.generic})</span>
                            <span className="med-pack-label">Per Pack: {med.pack}</span>
                            
                            <div className="med-price-line">
                              <span className="med-price">₹{med.price}</span>
                              {med.oldPrice && <span className="med-old-price">₹{med.oldPrice}</span>}
                            </div>

                            {med.instock ? (
                              <button 
                                className="med-add-to-cart-btn"
                                onClick={() => handleAddToCart(med)}
                              >
                                Add to Cart
                              </button>
                            ) : (
                              <div className="out-of-stock-label-box">
                                <span className="out-of-stock-tag">Out Of Stock</span>
                                <span className="alt-suggest">Alt: {med.alternative}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                )}

                {/* About Us Tab */}
                {activeProfileTab === 'About Us' && (
                  <div className="about-us-tab-content">
                    <h4>About {selectedPharmacy.name}</h4>
                    <p>
                      We are a premier pharmaceutical wellness center serving Hyderabad. We stock 100% verified authentic medicines, surgical tools, beauty care products, and wellness essentials. Our professional staff is dedicated to ensuring you get swift deliveries and safe pharmaceutical advice.
                    </p>
                    <h5 style={{ marginTop: '20px', fontWeight: '800' }}>Available Services</h5>
                    <ul className="ph-services-list">
                      {selectedPharmacy.services.map((serv, idx) => (
                        <li key={idx}>✓ {serv}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Open and Closed Tab */}
                {activeProfileTab === 'Open and Closed' && (
                  <div className="open-closed-tab-content">
                    <h4>Operating Hours</h4>
                    <div className="hours-schedule-table">
                      <div className="schedule-row">
                        <span>Monday - Saturday</span>
                        <strong>{selectedPharmacy.hours}</strong>
                      </div>
                      <div className="schedule-row">
                        <span>Sunday</span>
                        <strong className="text-red">Closed</strong>
                      </div>
                    </div>
                  </div>
                )}

                {/* Rating Tab */}
                {activeProfileTab === 'Rating' && (
                  <div className="rating-tab-content">
                    <div className="ratings-header">
                      <h4>Patient Reviews</h4>
                      <span className="overall-score-pill">★ {selectedPharmacy.rating} (70+ Reviews)</span>
                    </div>

                    <div className="reviews-stack-ph">
                      <div className="review-comment-box-ph">
                        <strong>Jerome Bell</strong>
                        <p>"Super fast delivery, genuine Paracetamol tablets received in neat packaging. Stethoscope checked perfectly."</p>
                      </div>
                      <div className="review-comment-box-ph">
                        <strong>Theresa Webb</strong>
                        <p>"Always has generic alternatives in stock. Highly professional service near Ashok Pride pillar!"</p>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Cart Widget floating footer bar when items in cart */}
            {cart.length > 0 && (
              <div className="cart-floating-footer-panel">
                <div className="cart-summary-line">
                  <span>Selected items: <strong>{cart.reduce((acc, curr) => acc + curr.qty, 0)}</strong></span>
                  <span>Total Subtotal: <strong>₹{cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)}</strong></span>
                </div>
                <button 
                  className="cart-checkout-proceed-btn"
                  onClick={() => setFlowStep(4)}
                >
                  Proceed to Cart / Check Availability
                </button>
              </div>
            )}

          </div>
        </section>
      )}

      {/* Step 3: Upload Prescription Page */}
      {flowStep === 3 && selectedPharmacy && (
        <section className="prescription-upload-section">
          <div className="container max-width-sm">
            <div className="profile-header-actions">
              <button className="profile-back-search-btn" onClick={() => setFlowStep(2)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="icon-sm">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span>Back to Store</span>
              </button>
            </div>

            <div className="profile-card upload-prescrip-card">
              <h3>Upload Prescription</h3>
              <p className="card-subtitle-text">Please upload your doctor prescription format (JPG or PNG format only).</p>

              <div className="file-uploader-box">
                <input 
                  type="file" 
                  id="prescription-file-input" 
                  accept="image/*" 
                  onChange={handlePrescriptionUpload} 
                  style={{ display: 'none' }}
                />
                
                {prescriptionImage ? (
                  <div className="prescription-preview-box">
                    <img src={prescriptionImage} alt="Prescription Doctor Note Preview" className="prescrip-img-preview" />
                    <button className="remove-prescrip-btn" onClick={() => setPrescriptionImage(null)}>✕ Remove Note</button>
                  </div>
                ) : (
                  <label htmlFor="prescription-file-input" className="file-upload-trigger-label">
                    <div className="upload-icon-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                    </div>
                    <strong>Attach Photo of Prescription</strong>
                    <span>Support files: JPG, PNG</span>
                  </label>
                )}
              </div>

              {prescripError && <span className="error-message-inline">{prescripError}</span>}

              <div className="form-field notes-field-full" style={{ marginTop: '24px' }}>
                <label>Add Notes (Optional)</label>
                <textarea 
                  placeholder="E.g. Send Napa Extend 10 tablets pack and ZincoVit 1 pack..."
                  value={prescriptionNotes}
                  onChange={(e) => setPrescriptionNotes(e.target.value)}
                  rows="3"
                ></textarea>
              </div>

              <div className="upload-actions-row">
                <button 
                  className="upload-continue-btn"
                  onClick={handlePrescriptionSubmit}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 4: Medicine Availability Check Page (Generic alternative suggestion) */}
      {flowStep === 4 && (
        <section className="cart-availability-section bg-light-tint">
          <div className="container cart-layout-wider-container">
            <div className="profile-header-actions">
              <button className="profile-back-search-btn" onClick={() => setFlowStep(2)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="icon-sm">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span>Back to Catalog</span>
              </button>
            </div>

            <div className="profile-card availability-check-card">
              <h3>My Cart & Availability</h3>
              <p className="subtitle-sm">CHECK MEDICINE AVAILABILITY IN STORE</p>

              {cart.length === 0 ? (
                <div className="cart-medicines-list-ph">
                  {prescriptionImage && (
                    <div className="uploaded-prescrip-indicator-box">
                      <div className="prescrip-mini-icon">✓</div>
                      <div className="prescrip-details">
                        <strong>Prescription Attached Successfully</strong>
                        <span>Doctor Prescription Note included in order.</span>
                      </div>
                    </div>
                  )}
                  <div className="empty-cart-suggest-prescrip">
                    <p className="no-items-warning">No items manually selected in cart yet.</p>
                    <p style={{ fontSize: '13.5px', color: '#718096', marginBottom: '16px' }}>We have pre-filled the standard general checkup medicines pack for you based on the prescription upload:</p>
                    <button 
                      className="prefill-pack-btn"
                      onClick={() => setCart([
                        { id: 101, name: 'Napa Extend Tablet', generic: 'Paracetamol', price: 90, pack: '10 Tablets', qty: 1, instock: true, image: '/b43102d33fa401fd9568f3dd85e848da52c9305e.png' },
                        { id: 102, name: 'Xpa Pediatric Drop', generic: 'Paracetamol Drop', price: 60, pack: '01 Bottle', qty: 1, instock: true, image: '/a79f36a6dcf867db049c833662bc00724f5131c8.png' }
                      ])}
                    >
                      Pre-Fill Cart from Prescription Note
                    </button>
                  </div>
                </div>
              ) : (
                <div className="cart-two-column-layout">
                  {/* Left Column: Cart List */}
                  <div className="cart-left-column">
                    {prescriptionImage && (
                      <div className="uploaded-prescrip-indicator-box">
                        <div className="prescrip-mini-icon">✓</div>
                        <div className="prescrip-details">
                          <strong>Prescription Attached</strong>
                          <span>Doctor Prescription Note included in order.</span>
                        </div>
                      </div>
                    )}

                    <div className="cart-medicines-list-ph">
                      {cart.map(item => {
                        const subtotal = item.price * item.qty;
                        return (
                          <div className="cart-med-item-row" key={item.id}>
                            <div className="cart-item-left-block">
                              <div className="cart-item-thumb-box">
                                <SafePharmacyImage 
                                  src={item.image} 
                                  fallbackSrc={item.fallbackImage} 
                                  alt={item.name} 
                                  className="cart-item-thumb-img" 
                                />
                              </div>
                              <div className="med-info-col">
                                <strong>{item.name}</strong>
                                <span>{item.pack} | {item.generic}</span>
                              </div>
                            </div>

                            <div className="med-actions-qty-col">
                              <div className="qty-selectors-wrapper">
                                <button className="qty-btn" onClick={() => handleQtyChange(item.id, -1)}>-</button>
                                <span className="qty-num">{item.qty}</span>
                                <button className="qty-btn" onClick={() => handleQtyChange(item.id, 1)}>+</button>
                              </div>
                              <span className="item-subtotal">₹{subtotal}</span>
                              <button className="item-remove-btn" onClick={() => handleRemoveFromCart(item.id)}>✕</button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column: Checkout Summary Sidebar */}
                  <div className="cart-right-sidebar">
                    <div className="summary-sidebar-box">
                      <h4>Summary Details</h4>
                      <div className="summary-details-lines">
                        <div className="summary-row-line">
                          <span>Items Subtotal</span>
                          <strong>₹{cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)}</strong>
                        </div>
                        <div className="summary-row-line">
                          <span>Estimated Delivery Cost</span>
                          <strong className="text-teal">₹20</strong>
                        </div>
                        <div className="summary-row-line">
                          <span>Taxes & Service fee</span>
                          <strong>₹15</strong>
                        </div>
                        <div className="summary-divider-line"></div>
                        <div className="summary-row-line total-highlight">
                          <span>Estimated Total</span>
                          <strong className="text-teal">₹{cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0) + 20 + 15}</strong>
                        </div>
                      </div>

                      <button 
                        className="cart-checkout-proceed-btn-full"
                        onClick={() => setFlowStep(5)}
                      >
                        Proceed to Order Summary
                      </button>

                      <div className="cart-trust-badges">
                        <div className="badge-item-tr">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="badge-icon">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                          <span>Secure & Safe Checkout</span>
                        </div>
                        <div className="badge-item-tr">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="badge-icon">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                          <span>100% Genuine Medicines</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* Step 5: Order Summary */}
      {flowStep === 5 && selectedPharmacy && (
        <section className="order-summary-section bg-light-tint">
          <div className="container max-width-sm">
            <div className="profile-card order-summary-card">
              <h3>Review Your Order</h3>
              <p className="card-subtitle-text">Check everything is correct before proceeding to payment.</p>
              
              <div className="review-appointment-summary-box">
                <div className="store-appointment-header">
                  <div className="store-avatar-thumb">
                    <SafePharmacyImage 
                      src={selectedPharmacy.image} 
                      fallbackSrc="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=200" 
                      alt={selectedPharmacy.name} 
                      className="store-thumb-avatar-img" 
                    />
                  </div>
                  <div className="store-appointment-details">
                    <h4>{selectedPharmacy.name}</h4>
                    <span className="store-location-info">{selectedPharmacy.area} | Kukatpally</span>
                    <span className="store-timing-info">✓ Free delivery available</span>
                  </div>
                </div>
              </div>

              <div className="summary-section-box">
                <span className="section-title-lbl">Delivery Shipping Address</span>
                <div className="shipping-fields-card">
                  <div className="shipping-field-row">
                    <span>Deliver to:</span>
                    <strong>{shippingName}</strong>
                  </div>
                  <div className="shipping-field-row">
                    <span>Address:</span>
                    <strong className="shipping-address-val">{shippingAddress}</strong>
                  </div>
                  <div className="shipping-field-row">
                    <span>Phone:</span>
                    <strong>{shippingPhone}</strong>
                  </div>
                </div>
              </div>

              <div className="summary-section-box">
                <span className="section-title-lbl">Bill Items</span>
                <div className="bill-items-list">
                  {cart.map(item => (
                    <div className="bill-row" key={item.id}>
                      <span>{item.name} (x{item.qty})</span>
                      <strong>₹{item.price * item.qty}</strong>
                    </div>
                  ))}
                  <div className="bill-divider"></div>
                  <div className="bill-row">
                    <span>Subtotal</span>
                    <strong>₹{cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)}</strong>
                  </div>
                  <div className="bill-row">
                    <span>Home Delivery Fee</span>
                    <strong className="text-teal-small">₹20 (Kukatpally Area Special)</strong>
                  </div>
                  <div className="bill-row">
                    <span>VAT & Service Tax</span>
                    <strong>₹15</strong>
                  </div>
                  <div className="bill-divider"></div>
                  <div className="bill-row total-bill-line">
                    <span>Total Amount</span>
                    <strong className="text-teal-total">
                      ₹{cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0) + 20 + 15}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Back button on left, Proceed to Payment button on right */}
              <div className="summary-footer-actions-row">
                <button 
                  className="summary-back-btn"
                  onClick={() => setFlowStep(4)}
                >
                  Back to Cart
                </button>
                <button 
                  className="summary-proceed-btn"
                  onClick={() => setFlowStep(6)}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 6: Payment gateway options */}
      {flowStep === 6 && (
        <section className="payment-options-section bg-light-tint">
          <div className="container max-width-sm">
            <div className="profile-header-actions">
              <button className="profile-back-search-btn" onClick={() => setFlowStep(5)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="icon-sm">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span>Back to Summary</span>
              </button>
            </div>

            <div className="profile-card payment-gateway-card">
              <h3>Choose Payment Method</h3>
              <p className="p-subtitle">SECURE GATEWAY ENCRYPTION POWERED BY HEALTHBRIDGE</p>

              <div className="payment-options-list">
                {/* PhonePe Option */}
                <label className={`payment-method-item ${selectedPayment === 'PhonePe' ? 'method-selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="pharmacyGateway" 
                    value="PhonePe"
                    checked={selectedPayment === 'PhonePe'}
                    onChange={() => setSelectedPayment('PhonePe')}
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
                    <span>PhonePe UPI</span>
                  </div>
                </label>

                {/* Paytm Option */}
                <label className={`payment-method-item ${selectedPayment === 'Paytm Wallet' ? 'method-selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="pharmacyGateway" 
                    value="Paytm Wallet"
                    checked={selectedPayment === 'Paytm Wallet'}
                    onChange={() => setSelectedPayment('Paytm Wallet')}
                  />
                  <span className="payment-radio-custom"></span>
                  <div className="payment-method-content">
                    <img src="/paytm.jpg" alt="Paytm Wallet" className="payment-logo-img" />
                    <span>Paytm Wallet</span>
                  </div>
                </label>

                {/* Google Pay Option */}
                <label className={`payment-method-item ${selectedPayment === 'Google Pay' ? 'method-selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="pharmacyGateway" 
                    value="Google Pay"
                    checked={selectedPayment === 'Google Pay'}
                    onChange={() => setSelectedPayment('Google Pay')}
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
                    <span>Google Pay / UPI</span>
                  </div>
                </label>

                {/* Card Option */}
                <label className={`payment-method-item ${selectedPayment === 'Card Payment' ? 'method-selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="pharmacyGateway" 
                    value="Card Payment"
                    checked={selectedPayment === 'Card Payment'}
                    onChange={() => setSelectedPayment('Card Payment')}
                  />
                  <span className="payment-radio-custom"></span>
                  <div className="payment-method-content">
                    <div className="pay-svg-icon card-slate">
                      {/* Authentic credit card outline logo */}
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="6" fill="#2d3748"/>
                        <rect x="4" y="6" width="16" height="12" rx="2" fill="white"/>
                        <line x1="4" y1="10" x2="20" y2="10" stroke="#2d3748" strokeWidth="2"/>
                        <rect x="6" y="13" width="3" height="2" rx="0.5" fill="#FFE066"/>
                      </svg>
                    </div>
                    <span>Credit / Debit Card (Visa/Mastercard)</span>
                  </div>
                </label>
              </div>

              <div className="booking-secure-notice" style={{ marginTop: '24px' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm lock-icon">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>HIPAA & PCI Compliant Secured Payments</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginTop: '32px' }}>
                <button 
                  className="cart-checkout-proceed-btn"
                  style={{ 
                    marginTop: '0px',
                    background: 'linear-gradient(135deg, #1b8a75, #125e50)',
                    color: '#FFFFFF',
                    fontWeight: '800',
                    fontSize: '15px',
                    padding: '12px 32px',
                    borderRadius: '50px',
                    border: 'none',
                    boxShadow: '0 4px 15px rgba(27, 138, 117, 0.25)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onClick={handlePlaceOrder}
                  disabled={!selectedPayment}
                  onMouseEnter={(e) => {
                    if (!e.currentTarget.disabled) {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #29c3a6, #1b8a75)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(27, 138, 117, 0.35)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.currentTarget.disabled) {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #1b8a75, #125e50)';
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(27, 138, 117, 0.25)';
                    }
                  }}
                >
                  {selectedPayment 
                    ? `Place Order (Pay ₹${cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0) + 20 + 15})`
                    : 'Please Select a Payment Method'
                  }
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 7: Order Success Backdrop Screen */}
      {flowStep === 7 && selectedPharmacy && (
        <div className="order-success-modal-overlay">
          <div className="success-modal-card">
            <div className="success-icon-badge-large">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#EEFAF8"></circle>
                <path d="M8.5 12.5l2 2 5-5" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
              </svg>
            </div>

            <h2>Payment Successful!</h2>
            <p className="order-number-tag">Your order has been confirmed successfully.</p>

            <div className="modal-receipt-box">
              <div className="m-receipt-row">
                <span className="lbl">Order ID:</span>
                <strong className="val order-id-highlight">{orderId}</strong>
              </div>
              <div className="m-receipt-row">
                <span className="lbl">Store:</span>
                <strong className="val">{selectedPharmacy.name}</strong>
              </div>
              <div className="m-receipt-row">
                <span className="lbl">Estimated Delivery Time:</span>
                <strong className="val text-teal">25 - 30 minutes</strong>
              </div>
              <div className="m-receipt-row">
                <span className="lbl">Shipping Address:</span>
                <strong className="val">{shippingAddress}</strong>
              </div>
            </div>

            <button 
              className="modal-done-btn-ph"
              onClick={handleResetFlow}
            >
              Done
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
