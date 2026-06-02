import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Tesseract from 'tesseract.js';
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
    deliveryTime: 15,
    priceLevel: 2,
    image: '/phar_1',
    address: 'Plot 45, Ashok Pride, Kukatpally, Hyderabad, 500072',
    phone: '+91 98480 22338',
    hours: 'Open 24 Hours',
    services: ['Home Delivery', '24/7 Service', 'Prescription Refills', 'Vaccinations'],
    stockedMedicines: ['Napa Extend Tablet', 'Xpa Pediatric Drop', 'Avolac Oral Solution', 'Napa Tablet 500mg', 'ZincoVit Immune Plus', 'Axim-CV 200mg', 'Paracetamol', 'Lactulose'],
    categories: ['Pills', 'Syrup', 'Tablets']
  },
  {
    id: 2,
    name: 'Maan Pharmacy Ltd.',
    area: 'Madhapur',
    distance: '1.2 km',
    rating: 4.5,
    status: 'Open Now',
    delivery: 'Free delivery',
    deliveryTime: 25,
    priceLevel: 1,
    image: '/phar_3',
    address: 'Metro Station Pillar 24, Madhapur, Hyderabad, 500081',
    phone: '+91 99080 11223',
    hours: '10:00 AM - 10:00 PM',
    services: ['Home Delivery', 'Generic Medicines', 'Diagnostic Dropoff'],
    stockedMedicines: ['Napa Extend Tablet', 'Xpa Pediatric Drop', 'Napa Tablet 500mg', 'Paracetamol', 'Synthroid 50mg'],
    categories: ['Tablets', 'Injection', 'Syrup']
  },
  {
    id: 3,
    name: 'Cleveland Pharmacy & Wellness',
    area: 'Hitech City',
    distance: '2.5 km',
    rating: 4.7,
    status: 'Open Now',
    delivery: 'Free delivery',
    deliveryTime: 35,
    priceLevel: 3,
    image: '/ph_img2.jpg',
    address: 'Mindspace IT Park Road, Hitech City, Hyderabad, 500081',
    phone: '+91 91234 56789',
    hours: '08:00 AM - 11:00 PM',
    services: ['Home Delivery', 'Organic Wellness', 'Online Consultation'],
    stockedMedicines: ['Avolac Oral Solution', 'ZincoVit Immune Plus', 'Lactulose', 'Multivitamin & Zinc', 'Synthroid 50mg'],
    categories: ['Ointments', 'Vitamins', 'Syrup']
  },
  {
    id: 4,
    name: 'MedPlus 24/7 Pharmacy',
    area: 'Gachibowli',
    distance: '3.1 km',
    rating: 4.6,
    status: 'Open 24/7',
    delivery: 'Free delivery',
    deliveryTime: 40,
    priceLevel: 2,
    image: '/phar_5',
    address: 'Financial District Junction, Gachibowli, Hyderabad, 500032',
    phone: '+91 98850 44556',
    hours: 'Open 24 Hours',
    services: ['Home Delivery', '24/7 Service', 'Veterinary Drugs'],
    stockedMedicines: ['Napa Extend Tablet', 'Napa Tablet 500mg', 'Axim-CV 200mg', 'Paracetamol'],
    categories: ['Pills', 'Tablets', 'Vaccines']
  },
  {
    id: 5,
    name: 'Banjara Hills Wellness Pharmacy',
    area: 'Banjara Hills',
    distance: '1.7 km',
    rating: 4.9,
    status: 'Open Now',
    delivery: 'Delivery Available',
    deliveryTime: 20,
    priceLevel: 4,
    image: '/phar_6',
    address: 'Road No. 12, Banjara Hills, Hyderabad, 500034',
    phone: '+91 90001 88990',
    hours: '09:00 AM - 10:00 PM',
    services: ['Home Delivery', 'Premium Aesthetics', 'Compounding Lab'],
    stockedMedicines: ['ZincoVit Immune Plus', 'Avolac Oral Solution', 'Lactulose', 'Multivitamin & Zinc'],
    categories: ['Vitamins', 'Syrup', 'First Aid', 'Bandages']
  },
  {
    id: 6,
    name: 'Secunderabad City Druggists',
    area: 'Secunderabad',
    distance: '4.2 km',
    rating: 4.4,
    status: 'Open Now',
    delivery: 'Store Pickup Only',
    deliveryTime: 60,
    priceLevel: 1,
    image: '/ph_img.jpg',
    address: 'MG Road Near Clock Tower, Secunderabad, 500003',
    phone: '+91 97030 77665',
    hours: '10:00 AM - 09:30 PM',
    services: ['Home Delivery', 'Surgical Equipment', 'Baby Care Depot'],
    stockedMedicines: ['Napa Extend Tablet', 'Xpa Pediatric Drop', 'Paracetamol'],
    categories: ['First Aid', 'Bandages', 'Ointments']
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
  },
  {
    id: 107,
    name: 'Synthroid 50mg',
    generic: 'Levothyroxine',
    price: 350,
    oldPrice: 400,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200',
    fallbackImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200',
    pack: '30 Tablets',
    instock: true
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
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState('All Areas');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchMedicine, setSearchMedicine] = useState('');
  const [searchName, setSearchName] = useState('');
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Sidebar/Header Filters state
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [prescriptionUploaded, setPrescriptionUploaded] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [prescriptionItems, setPrescriptionItems] = useState([]);
  const [orderStatus, setOrderStatus] = useState('none'); // 'none', 'confirmed', 'packed', 'delivered'

  // Advanced Prescription Flow States
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadError, setUploadError] = useState('');
  const [sortFilter, setSortFilter] = useState('bestMatch'); // bestMatch, fastest, lowestPrice, nearest, rating
  const [showSecondaryPharmacies, setShowSecondaryPharmacies] = useState(false);
  const [missingItemsForSearch, setMissingItemsForSearch] = useState([]);
  const [secondaryOptions, setSecondaryOptions] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadFile(e.target.files[0]);
      setUploadError('');
    }
  };

  const validateAndScanPrescription = async () => {
    setUploadError("");
    setIsScanning(true);
    
    try {
      // Mock generation of random names after a short delay
      setTimeout(() => {
        const shuffled = [...MEDICINE_CATALOG].sort(() => 0.5 - Math.random());
        const matchedItems = shuffled.slice(0, 3).map(med => ({
          name: med.name,
          generic: med.generic,
          qty: 1
        }));
        
        setIsScanning(false);
        setShowUploadModal(false);
        setPrescriptionUploaded(true);
        setPrescriptionItems(matchedItems);
      }, 1000);
      
    } catch (error) {
      console.error("OCR Error:", error);
      setIsScanning(false);
      setUploadError("Failed to process the request. Please try again.");
    }
  };

  const handleUploadClick = () => {
    setShowUploadModal(true);
    setUploadError('');
    setUploadFile(null);
  };

  const [deliveryFilter, setDeliveryFilter] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [twentyFourSevenFilter, setTwentyFourSevenFilter] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(false);

  // Checkout State Machine
  const [selectedPharmacies, setSelectedPharmacies] = useState([]); // Support multi-pharmacy
  const [flowStep, setFlowStep] = useState(1); // 1: Search, 2: Profile, 3: Upload, 4: Cart/Availability, 5: Order Summary, 6: Payment, 7: Success, 8: Final Prescription Summary
  const [activeProfileTab, setActiveProfileTab] = useState('Medicine'); // Medicine, About Us, Open and Closed, Rating
  const [cart, setCart] = useState([]); // Cart items will now include pharmacyId and pharmacyName
  
  // Backwards compatibility for single selected pharmacy view
  const selectedPharmacy = selectedPharmacies.length > 0 ? selectedPharmacies[0] : null;
  const setSelectedPharmacy = (ph) => {
    if (ph) {
      setSelectedPharmacies([ph]);
    } else {
      setSelectedPharmacies([]);
    }
  };
  
  // Prescription upload state
  const [prescriptionImage, setPrescriptionImage] = useState(null);
  const [prescriptionNotes, setPrescriptionNotes] = useState('');
  const [prescripError, setPrescripError] = useState('');

  // Shipping details state
  const [shippingName, setShippingName] = useState('Shaidul Islam');
  const [shippingAddress, setShippingAddress] = useState('Plot 45, Ashok Pride, Kukatpally, Hyderabad, 500072');
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [tempAddress, setTempAddress] = useState('Plot 45, Ashok Pride, Kukatpally, Hyderabad, 500072');
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
        return { ...item, qty: newQty };
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
    setOrderStatus('confirmed');
    
    // Simulate order tracking progression
    setTimeout(() => {
      setOrderStatus('packed');
    }, 3000);
    
    setTimeout(() => {
      setOrderStatus('delivered');
    }, 7000);
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

    // 1. Search Location Filter: Match location name with address or area (case-insensitive)
    if (searchLocation && searchLocation.trim() !== '') {
      const loc = searchLocation.toLowerCase().split(',')[0].trim();
      if (!ph.address.toLowerCase().includes(loc) && !ph.area.toLowerCase().includes(loc)) {
        return false;
      }
    }

    // 2. Search Medicine Filter: Check if pharmacy stocks this medicine
    if (searchMedicine && searchMedicine.trim() !== '') {
      const medQuery = searchMedicine.toLowerCase();
      const stocksMed = ph.stockedMedicines.some(m => m.toLowerCase().includes(medQuery));
      if (!stocksMed) return false;
    }

    // 3. Universal Search Filter (from single search bar)
    if (searchName && searchName.trim() !== '') {
      const query = searchName.toLowerCase();
      const matchesName = ph.name.toLowerCase().includes(query);
      const matchesLocation = ph.address.toLowerCase().includes(query) || ph.area.toLowerCase().includes(query);
      const matchesMed = ph.stockedMedicines.some(m => m.toLowerCase().includes(query));
      
      if (!matchesName && !matchesLocation && !matchesMed) return false;
    }

    // 4. Delivery Filter: Show pharmacies that support delivery (i.e. not Store Pickup Only)
    if (deliveryFilter && ph.delivery === 'Store Pickup Only') return false;

    // 5. Open Now Filter
    if (openFilter && !ph.status.toLowerCase().includes('open')) return false;

    // 6. 24/7 Filter
    if (twentyFourSevenFilter && !ph.status.toLowerCase().includes('24/7') && !ph.hours.toLowerCase().includes('24 hours')) return false;

    // 7. Ratings Filter (UI selection)
    if (ratingFilter && ph.rating < 4.5) {
      return false;
    }

    // 8. Prescription Upload Filter
    if (prescriptionUploaded && prescriptionItems.length > 0) {
      const hasAnyPrescriptionMed = prescriptionItems.some(item => 
        ph.stockedMedicines.some(m => m.toLowerCase().includes(item.name.toLowerCase().split(' ')[0]))
      );
      if (!hasAnyPrescriptionMed) return false;
    }

    // 9. Category Selection Filter
    if (selectedCategory) {
      if (!ph.categories || !ph.categories.includes(selectedCategory)) return false;
    }

    return true;
  });

  // Calculate prescription matching and sort if prescription is uploaded
  const rankedPharmacies = filteredPharmacies.map(ph => {
    if (!prescriptionUploaded || prescriptionItems.length === 0) {
      return { ...ph, matchCount: 0, matchStatus: null };
    }

    let matchCount = 0;
    prescriptionItems.forEach(item => {
      // Find generic or exact match
      const isMatch = ph.stockedMedicines.some(m => 
        m.toLowerCase().includes(item.name.toLowerCase().split(' ')[0]) || 
        (item.generic && m.toLowerCase().includes(item.generic.toLowerCase().split(' ')[0]))
      );
      if (isMatch) matchCount++;
    });

    const totalItems = prescriptionItems.length;
    const matchRatio = matchCount / totalItems;
    
    let matchStatus = 'Low Availability';
    if (matchCount === totalItems) {
      matchStatus = 'Complete Match';
    } else if (matchRatio >= 0.5) {
      matchStatus = 'Partial Match';
    }

    return { ...ph, matchCount, matchStatus, totalPrescriptionItems: totalItems };
  });

  // Sort rankedPharmacies based on sortFilter
  // Always apply sortFilter, then prescription match as tiebreaker
  if (sortFilter === 'rating') {
    rankedPharmacies.sort((a, b) => b.rating - a.rating);
  } else if (sortFilter === 'nearest') {
    rankedPharmacies.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
  } else if (sortFilter === 'fastest') {
    rankedPharmacies.sort((a, b) => (a.deliveryTime || 999) - (b.deliveryTime || 999));
  } else if (sortFilter === 'lowestPrice') {
    rankedPharmacies.sort((a, b) => (a.priceLevel || 5) - (b.priceLevel || 5));
  } else if (sortFilter === 'bestMatch') {
    if (prescriptionUploaded) {
      rankedPharmacies.sort((a, b) => b.matchCount - a.matchCount);
    } else {
      rankedPharmacies.sort((a, b) => b.rating - a.rating || parseFloat(a.distance) - parseFloat(b.distance));
    }
  }

  // Render Step Content
  return (
    <main className="pharmacy-sol-page">
      
      {/* Banner & Categories (Step 1 Search View) */}
      {flowStep === 1 && (
        <>
          {/* Heading and Location Search Bar */}
          <section className="pharmacy-search-hero-section">
            <div className="container">
              <div className="pharmacy-hero-headers">
                <h1 className="pharmacy-hero-title">
                  Find Your <span className="text-teal">Pharmacies</span>
                </h1>
                <p className="pharmacy-hero-subtitle">
                  Order medicines from verified pharmacies with fast delivery and real-time availability.
                </p>
              </div>

              {/* Advanced multi-search bar card */}
              <div className="pharmacy-search-bar-card">
                {/* Upload Prescription Banner/Button */}
                <div className="upload-prescription-banner">
                  <div className="upload-prescription-info">
                    <h4>Have a <br/>Prescription?</h4>
                    <p>Upload it and we'll automatically find pharmacies with your medicines in stock.</p>
                  </div>
                  <button 
                    className="btn-upload-prescription-main"
                    onClick={handleUploadClick}
                  >
                    {prescriptionUploaded ? (
                      <span className="success-text">✓ Change</span>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm" style={{ marginBottom: '4px' }}>
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                        <span>Upload Prescription</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-search-single-wrapper">
                  <div className="input-with-icon-p">
                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input 
                      type="text" 
                      value={searchName} 
                      onChange={(e) => setSearchName(e.target.value)} 
                      placeholder="Search medicines or pharmacies..." 
                    />
                    <button className="search-btn" type="button">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{width: '14px', height: '14px'}}>
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                      <span className="btn-text-hide-mobile">Search</span>
                    </button>
                  </div>
                </div>


                {/* Filter & Sorting chips inside Search Panel */}
                <div className="pharmacy-inline-chips-row">
                  <div className="pharmacy-filter-chips-wrapper">
                    <button 
                    type="button"
                    className={`filter-chip ${deliveryFilter ? 'active' : ''}`}
                    onClick={() => setDeliveryFilter(!deliveryFilter)}
                  >
                    <span>🚚 Delivery</span>
                  </button>
                  <button 
                    type="button"
                    className={`filter-chip ${openFilter ? 'active' : ''}`}
                    onClick={() => setOpenFilter(!openFilter)}
                  >
                    <span>🕒 Open Now</span>
                  </button>
                  <button 
                    type="button"
                    className={`filter-chip ${twentyFourSevenFilter ? 'active' : ''}`}
                    onClick={() => setTwentyFourSevenFilter(!twentyFourSevenFilter)}
                  >
                    <span>🏥 24/7</span>
                  </button>
                  <button 
                    type="button"
                    className={`filter-chip ${ratingFilter ? 'active' : ''}`}
                    onClick={() => setRatingFilter(!ratingFilter)}
                  >
                    <span>⭐ 4.5+</span>
                  </button>
                  </div>
                  
                  {/* Sort Dropdown */}
                  <div className="pharmacy-sort-wrapper">
                    <span style={{ fontSize: '14px', color: '#718096', fontWeight: 600 }}>Sort by:</span>
                    <select 
                      value={sortFilter}
                      onChange={(e) => setSortFilter(e.target.value)}
                      style={{ padding: '8px 36px 8px 12px', minWidth: '185px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none', background: `white url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%232D3748' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E") no-repeat right 14px center`, color: '#2D3748', fontSize: '14px', fontWeight: 600, cursor: 'pointer', WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }}
                    >
                      <option value="bestMatch">Best Match</option>
                      <option value="fastest">Fastest Delivery</option>
                      <option value="lowestPrice">Lowest Price</option>
                      <option value="nearest">Nearest Pharmacy</option>
                      <option value="rating">Highest Rating</option>
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
                <button 
                  className="view-all-text-btn"
                  onClick={() => setShowAllCategories(!showAllCategories)}
                >
                  {showAllCategories ? 'Show Less' : 'View All'}
                </button>
              </div>

              <div className="categories-pills-row">
                <div 
                  className={`cat-pill-item ${selectedCategory === 'Injection' ? 'active-cat' : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === 'Injection' ? null : 'Injection')}
                >
                  <div className="cat-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '32px', height: '32px' }}>
                      <path d="m18 2 4 4"></path>
                      <path d="m17 7 3-3"></path>
                      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"></path>
                      <path d="m9 11 4 4"></path>
                      <path d="m5 19-3 3"></path>
                      <path d="m14 4 6 6"></path>
                    </svg>
                  </div>
                  <span>Injection</span>
                </div>

                <div 
                  className={`cat-pill-item ${selectedCategory === 'Bandages' ? 'active-cat' : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === 'Bandages' ? null : 'Bandages')}
                >
                  <div className="cat-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '32px', height: '32px' }}>
                      <rect x="2" y="6" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2"></path>
                      <path d="M12 10v6"></path>
                      <path d="M9 13h6"></path>
                    </svg>
                  </div>
                  <span>Bandages</span>
                </div>

                <div 
                  className={`cat-pill-item ${selectedCategory === 'Syrup' ? 'active-cat' : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === 'Syrup' ? null : 'Syrup')}
                >
                  <div className="cat-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '32px', height: '32px' }}>
                      <path d="M15 9V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v5l-3 4v7h12v-7l-3-4z"></path>
                      <path d="M9 9h6"></path>
                      <path d="M9 14h6"></path>
                      <path d="M6 5h2"></path>
                      <path d="M16 5h2"></path>
                    </svg>
                  </div>
                  <span>Syrup</span>
                </div>

                <div 
                  className={`cat-pill-item ${selectedCategory === 'Pills' ? 'active-cat' : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === 'Pills' ? null : 'Pills')}
                >
                  <div className="cat-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '32px', height: '32px' }}>
                      <rect x="7" y="7" width="10" height="14" rx="2" ry="2"></rect>
                      <path d="M5 3h14v4H5z"></path>
                      <path d="M12 11v6"></path>
                      <path d="M9 14h6"></path>
                    </svg>
                  </div>
                  <span>Pills</span>
                </div>

                <div 
                  className={`cat-pill-item ${selectedCategory === 'Vaccines' ? 'active-cat' : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === 'Vaccines' ? null : 'Vaccines')}
                >
                  <div className="cat-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '32px', height: '32px' }}>
                      <path d="M18 2v8"></path>
                      <path d="M15 10h6"></path>
                      <path d="M15 14h6"></path>
                      <rect x="14" y="10" width="8" height="12" rx="1"></rect>
                      <path d="M7 2v20"></path>
                      <path d="M4 8h6"></path>
                      <path d="M4 14h6"></path>
                      <rect x="3" y="2" width="8" height="6" rx="1"></rect>
                    </svg>
                  </div>
                  <span>Vaccines</span>
                </div>
                {showAllCategories && (
                  <>
                    <div 
                      className={`cat-pill-item ${selectedCategory === 'Ointments' ? 'active-cat' : ''}`}
                      onClick={() => setSelectedCategory(selectedCategory === 'Ointments' ? null : 'Ointments')}
                    >
                      <div className="cat-icon-wrapper">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '32px', height: '32px' }}>
                          <path d="M18 6v14"></path>
                          <path d="M6 6v14"></path>
                          <path d="M6 22h12"></path>
                          <path d="M6 6h12"></path>
                          <path d="M9 2h6"></path>
                          <path d="M10 6V2"></path>
                          <path d="M14 6V2"></path>
                        </svg>
                      </div>
                      <span>Ointments</span>
                    </div>

                    <div 
                      className={`cat-pill-item ${selectedCategory === 'Tablets' ? 'active-cat' : ''}`}
                      onClick={() => setSelectedCategory(selectedCategory === 'Tablets' ? null : 'Tablets')}
                    >
                      <div className="cat-icon-wrapper">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '32px', height: '32px' }}>
                          <circle cx="7" cy="12" r="3"></circle>
                          <circle cx="17" cy="12" r="3"></circle>
                          <path d="M7 15h10"></path>
                          <path d="M7 9h10"></path>
                        </svg>
                      </div>
                      <span>Tablets</span>
                    </div>
                  </>
                )}
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
                {rankedPharmacies.length > 0 ? (
                  rankedPharmacies.map(ph => (
                    <div className="pharmacy-card-item" key={ph.id}>
                      <div className="ph-card-banner">
                        <SafePharmacyImage 
                          src={ph.image} 
                          fallbackSrc="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=400" 
                          alt={ph.name} 
                          className="ph-banner-img" 
                        />
                        <span className="ph-rating-badge-new">
                          <svg viewBox="0 0 24 24" fill="#F6AD55" stroke="#F6AD55" strokeWidth="2" className="icon-xs">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                          {ph.rating || '4.5'}
                        </span>
                      </div>

                      <div className="ph-card-content">
                                   <div className="ph-card-header-new">
                          <h4>{ph.name}</h4>
                          <span className="badge-open-new">OPEN</span>
                        </div>
                        <p className="ph-card-address-new">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-xs pin-icon">
                            <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          {ph.distance} • {ph.address.includes('Kukatpally') || ph.address.includes('Ameerpet') ? 'Hyderabad' : 'New Delhi'}
                        </p>

                        <div className="ph-card-divider"></div>

                        <div className="ph-card-footer-new">
                          <div className="ph-delivery-time-new">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-xs">
                              <rect x="1" y="3" width="15" height="13"></rect>
                              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                              <circle cx="5.5" cy="18.5" r="2.5"></circle>
                              <circle cx="18.5" cy="18.5" r="2.5"></circle>
                            </svg>
                            <span>15-20 mins delivery</span>
                          </div>
                          
                          {/* We still need the original button to trigger handleViewPharmacy but we style it as Visit Store */}
                          <button 
                            className="btn-visit-store-new"
                            onClick={() => {
                              setSelectedPharmacy(ph);
                              if (prescriptionUploaded && prescriptionItems.length > 0) {
                                // Identify missing items right away for state
                                const missing = [];
                                prescriptionItems.forEach(pItem => {
                                  const isMatch = ph.stockedMedicines.some(m => 
                                    m.toLowerCase().includes(pItem.name.toLowerCase().split(' ')[0]) || 
                                    (pItem.generic && m.toLowerCase().includes(pItem.generic.toLowerCase().split(' ')[0]))
                                  );
                                  if (!isMatch) missing.push(pItem);
                                });
                                setMissingItemsForSearch(missing);
                                setSecondaryOptions([]);
                                setShowSecondaryPharmacies(false);
                                setFlowStep(4); // New Match Review Step
                              } else {
                                setFlowStep(2); // Normal profile view
                              }
                            }}
                          >
                            Visit Store
                          </button>
                        </div>

                        {/* Kept match status box for prescription matching flow */}

                        {prescriptionUploaded && ph.matchStatus && (
                          <div className={`ph-match-status-box ${ph.matchStatus === 'Complete Match' ? 'match-complete' : ph.matchStatus === 'Partial Match' ? 'match-partial' : 'match-low'}`}>
                            <span className="match-status-label">{ph.matchStatus}</span>
                            <span className="match-status-subtext">
                              {ph.matchStatus === 'Complete Match' 
                                ? 'All medicines available' 
                                : `${ph.matchCount} of ${ph.totalPrescriptionItems} medicines available`
                              }
                            </span>
                          </div>
                        )}


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
        <section className="pharmacy-profile-section bg-light-tint" style={{ paddingBottom: '80px' }}>
          <div className="page-container">
            <div className="profile-header-actions" style={{ paddingTop: '20px' }}>
              <button className="profile-back-search-btn" onClick={() => setFlowStep(1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="icon-sm">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span>Back to Pharmacies</span>
              </button>
            </div>

            {/* New Full-Width Premium Hero Banner */}
            <div className="ph-premium-hero">
              <div className="ph-hero-bg-image" style={{ backgroundImage: `url('/pharmacy_hero_clear.png')` }}></div>
              <div className="ph-premium-overlay">
                <div className="ph-hero-content">
                  <h3 className="ph-hero-title">{selectedPharmacy.name}</h3>
                  
                  <div className="ph-hero-address">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span>{selectedPharmacy.address || 'Metro Station Pillar 24, Madhapur, Hyderabad, 500081'}</span>
                  </div>

                  <div className="ph-hero-badges" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '12px', marginBottom: '24px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', color: '#E2E8F0', fontSize: '15px', fontWeight: '500' }}>Open 24/7</span>
                    <span style={{ display: 'flex', alignItems: 'center', color: '#E2E8F0', fontSize: '15px', fontWeight: '500' }}>⭐ {selectedPharmacy.rating} (1.2k Reviews)</span>
                    <span style={{ display: 'flex', alignItems: 'center', color: '#E2E8F0', fontSize: '15px', fontWeight: '500' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{width: 16, height: 16, marginRight: 6}}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      Verified Partner
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', color: '#E2E8F0', fontSize: '15px', fontWeight: '500' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{width: 16, height: 16, marginRight: 6}}><rect x="3" y="8" width="18" height="12" rx="2" ry="2"></rect><line x1="8" y1="6" x2="8" y2="8"></line><line x1="16" y1="6" x2="16" y2="8"></line></svg>
                      Home Delivery
                    </span>
                  </div>

                  <div className="ph-hero-actions">
                    <button className="btn-premium-primary" onClick={() => navigate('/contact')}>
                      Contact Pharmacy
                    </button>
                    <button className="btn-premium-secondary">
                      Get Directions
                    </button>
                  </div>
                </div>
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
                    
                    <div className="medicines-filter-search-container-desktop">
                      {/* Medicines Filter Tabs */}
                      <div className="medicines-category-filter-row">
                        <span className="filter-label">Filter by:</span>
                        <button className="pill-filter-btn">Tablet</button>
                        <button className="pill-filter-btn">Syrup</button>
                        <button className="pill-filter-btn">Inhaler</button>
                        <button className="pill-filter-btn">Capsule</button>
                        <button className="pill-filter-btn">Injection</button>
                      </div>

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
                    </div>

                    <div className="medicines-cards-grid">
                      {MEDICINE_CATALOG.filter(med => med.name.toLowerCase().includes(searchMedicine.toLowerCase())).map(med => (
                        <div className="medicine-card-item-box" key={med.id}>
                          <div className="med-image-wrapper">
                            {med.name.toLowerCase().includes('paracetamol') && (
                              <span className="med-prescription-badge">Prescription Required</span>
                            )}
                            <div className="med-img-inner-bg">
                              <SafePharmacyImage 
                                src={med.image} 
                                fallbackSrc={med.fallbackImage} 
                                alt={med.name} 
                                className="medicine-img" 
                              />
                            </div>
                          </div>

                          <div className="med-details-wrapper">
                            <h4>{med.name}</h4>
                            <span className="med-generic-label">{med.generic || med.pack}</span>
                            
                            <div className="med-price-line">
                              <span className="med-price">₹{med.price}</span>
                            </div>

                            <button className="med-add-to-cart-btn" onClick={() => handleAddToCart(med)}>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                              </svg>
                              Add to Cart
                            </button>
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
                  onClick={() => setFlowStep(prescriptionUploaded ? 4 : 5)}
                >
                  {prescriptionUploaded ? "Proceed to Cart / Check Availability" : "Proceed to Checkout"}
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

      {/* Step 4: Prescription Match Review & Availability Check */}
      {flowStep === 4 && selectedPharmacy && (
        <section className="cart-availability-section bg-light-tint">
          <div className="container cart-layout-wider-container">
            <div className="profile-header-actions" style={{ marginBottom: '24px' }}>
              <button className="profile-back-search-btn" onClick={() => setFlowStep(1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="icon-sm">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span>Back to Pharmacies</span>
              </button>
            </div>

            <div className="profile-card availability-check-card" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>Prescription Match Review</h3>
              <p style={{ color: '#718096', marginBottom: '24px' }}>Review available items from <strong>{selectedPharmacy.name}</strong></p>

              <div className="match-review-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                
                {/* Available Items */}
                <div className="match-available-col" style={{ background: '#F0FFF4', border: '1px solid #C6F6D5', borderRadius: '12px', padding: '24px' }}>
                  <h4 style={{ color: '#276749', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <span>✓</span> Available Medicines
                  </h4>
                  {cart.filter(c => c.pharmacyId === selectedPharmacy.id || !c.pharmacyId).map(item => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'white', borderRadius: '8px', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <strong style={{ color: '#2D3748', fontSize: '14.5px' }}>{item.name}</strong>
                        <span style={{ color: '#718096', fontSize: '12px' }}>{item.pack}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <span style={{ fontWeight: 700 }}>Qty: {item.qty}</span>
                        <strong style={{ color: '#20C7B6' }}>₹{item.price * item.qty}</strong>
                      </div>
                    </div>
                  ))}
                  {cart.length === 0 && <p>No items matched exactly.</p>}
                </div>

                {/* Missing Items */}
                <div className="match-missing-col" style={{ background: '#FFF5F5', border: '1px solid #FED7D7', borderRadius: '12px', padding: '24px' }}>
                  <h4 style={{ color: '#C53030', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <span>⚠️</span> Missing Medicines
                  </h4>
                  
                  {missingItemsForSearch.length > 0 ? (
                    <>
                      {missingItemsForSearch.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'white', borderRadius: '8px', marginBottom: '8px', borderLeft: '3px solid #F56565' }}>
                          <strong style={{ color: '#4A5568', fontSize: '14.5px' }}>{item.name}</strong>
                          <span style={{ color: '#718096', fontSize: '13px' }}>Need: {item.qty}</span>
                        </div>
                      ))}
                      
                      {!showSecondaryPharmacies ? (
                        <button 
                          style={{ width: '100%', marginTop: '16px', background: '#2B6CB0', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}
                          onClick={() => {
                            // Find alternative pharmacies that have these items
                            const options = mockPharmacies.filter(ph => 
                              ph.id !== selectedPharmacy.id && 
                              missingItemsForSearch.some(mItem => ph.stockedMedicines.some(m => m.toLowerCase().includes(mItem.name.toLowerCase().split(' ')[0])))
                            );
                            setSecondaryOptions(options);
                            setShowSecondaryPharmacies(true);
                          }}
                        >
                          Auto Search Remaining Medicines
                        </button>
                      ) : (
                        <div style={{ marginTop: '20px' }}>
                          <h5 style={{ color: '#2D3748', marginBottom: '12px' }}>Choose Secondary Pharmacy:</h5>
                          {secondaryOptions.map(opt => (
                            <div key={opt.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: 'white', borderRadius: '8px', marginBottom: '12px', border: '1px solid #E2E8F0', cursor: 'pointer' }}
                              onClick={() => {
                                // Add to selectedPharmacies
                                setSelectedPharmacies(prev => [...prev, opt]);
                                
                                // Add missing items to cart from this pharmacy
                                const newCartAdditions = [];
                                missingItemsForSearch.forEach(mItem => {
                                  const med = MEDICINE_CATALOG.find(m => m.name.toLowerCase().includes(mItem.name.toLowerCase().split(' ')[0]));
                                  if (med && opt.stockedMedicines.some(m => m.toLowerCase().includes(med.name.toLowerCase()))) {
                                    newCartAdditions.push({ ...med, qty: mItem.qty, pharmacyId: opt.id, pharmacyName: opt.name });
                                  }
                                });
                                setCart(prev => [...prev, ...newCartAdditions]);
                                
                                // Remove found items from missing
                                setMissingItemsForSearch(prev => prev.filter(p => !newCartAdditions.some(n => n.name.toLowerCase().includes(p.name.toLowerCase().split(' ')[0]))));
                                setShowSecondaryPharmacies(false);
                              }}
                            >
                              <div>
                                <strong style={{ display: 'block', color: '#2D3748' }}>{opt.name}</strong>
                                <span style={{ fontSize: '12px', color: '#718096' }}>{opt.delivery} • {opt.distance}</span>
                              </div>
                              <button style={{ background: '#EDF2F7', border: 'none', padding: '6px 12px', borderRadius: '50px', fontWeight: 600, fontSize: '12px', color: '#2B6CB0', cursor: 'pointer' }}>Select</button>
                            </div>
                          ))}
                          {secondaryOptions.length === 0 && <p style={{ fontSize: '13px', color: '#E53E3E' }}>No other pharmacies carry these items.</p>}
                        </div>
                      )}
                    </>
                  ) : (
                    <div style={{ textAlign: 'center', padding: '24px', background: 'white', borderRadius: '8px' }}>
                      <span style={{ fontSize: '24px' }}>🎉</span>
                      <p style={{ margin: '8px 0 0 0', color: '#38A169', fontWeight: 600 }}>All items sourced successfully!</p>
                    </div>
                  )}
                </div>

              </div>

              <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #E2E8F0', paddingTop: '24px' }}>
                <button 
                  className="cart-checkout-proceed-btn"
                  style={{ width: 'auto', padding: '14px 40px', background: missingItemsForSearch.length > 0 ? '#CBD5E0' : '#20C7B6', cursor: missingItemsForSearch.length > 0 ? 'not-allowed' : 'pointer' }}
                  disabled={missingItemsForSearch.length > 0}
                  onClick={() => setFlowStep(8)}
                >
                  Proceed to Final Order Summary
                </button>
              </div>

            </div>
          </div>
        </section>
      )}
      {/* Step 8: Final Prescription Summary (Multi-Pharmacy) */}
      {flowStep === 8 && selectedPharmacies.length > 0 && (
        <section className="order-summary-section bg-light-tint">
          <div className="container max-width-md">
            <div className="profile-card order-summary-card">
              <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '8px' }}>Prescription Summary</h3>
              <p className="card-subtitle-text" style={{ marginBottom: '24px' }}>Review your merged order from multiple pharmacies.</p>

              <div style={{ background: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
                <h4 style={{ marginBottom: '16px', color: '#2D3748', borderBottom: '2px solid #E2E8F0', paddingBottom: '12px' }}>
                  Prescription Medicines: {cart.reduce((sum, item) => sum + item.qty, 0)} Items
                </h4>

                {selectedPharmacies.map(ph => {
                  const phItems = cart.filter(c => c.pharmacyId === ph.id || (!c.pharmacyId && ph.id === selectedPharmacy.id));
                  if (phItems.length === 0) return null;
                  
                  return (
                    <div key={ph.id} style={{ marginBottom: '20px' }}>
                      <h5 style={{ color: '#2B6CB0', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>🏪</span> {ph.name} ({phItems.length} medicines)
                      </h5>
                      {phItems.map(item => (
                        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'white', borderRadius: '6px', marginBottom: '6px' }}>
                          <span>{item.name} x {item.qty}</span>
                          <strong>₹{item.price * item.qty}</strong>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>

              <div className="summary-section-box">
                <div className="summary-details-lines">
                  <div className="summary-row-line">
                    <span>Subtotal</span>
                    <strong>₹{cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)}</strong>
                  </div>
                  <div className="summary-row-line">
                    <span>Delivery Charges ({selectedPharmacies.length} Pharmacies)</span>
                    <strong className="text-teal">₹{selectedPharmacies.length * 20}</strong>
                  </div>
                  <div className="summary-row-line">
                    <span>Taxes & Service fee</span>
                    <strong>₹15</strong>
                  </div>
                  <div className="summary-divider-line"></div>
                  <div className="summary-row-line total-highlight">
                    <span>Grand Total</span>
                    <strong className="text-teal">₹{cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0) + (selectedPharmacies.length * 20) + 15}</strong>
                  </div>
                </div>
              </div>

              <div className="action-buttons-row" style={{ marginTop: '32px' }}>
                <button className="btn-secondary" onClick={() => setFlowStep(4)}>Back to Review</button>
                <button className="btn-primary" onClick={() => setFlowStep(5)}>Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 5: Order Summary */}
      {flowStep === 5 && selectedPharmacy && (
        <section className="ro-review-section">
          <div className="profile-header-actions" style={{ marginBottom: '16px' }}>
            <button className="profile-back-search-btn" onClick={() => setFlowStep(1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="icon-sm">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <span>Back</span>
            </button>
          </div>
          <div className="ro-stepper-container">
            <div className="ro-step completed">1</div>
            <div className="ro-step-line completed"></div>
            <div className="ro-step completed">2</div>
            <div className="ro-step-line completed"></div>
            <div className="ro-step active">3</div>
            <span className="ro-step-label">Review</span>
          </div>

          <h2 className="ro-page-title">Review Your Order</h2>

          <div className="ro-desktop-2col">
            <div className="ro-left-col">
              {/* Card 1: Pharmacy Info */}
              <div className="ro-card">
            <div className="ro-pharmacy-header">
              <SafePharmacyImage src={selectedPharmacy.image} fallbackSrc="/pharmacy_store.jpg" alt={selectedPharmacy.name} className="ro-pharmacy-img" />
              <div className="ro-pharmacy-details">
                <div className="ro-pharmacy-name-row">
                  <h4>{selectedPharmacy.name}</h4>
                </div>
                <div className="ro-pharmacy-address">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-xs">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p>{selectedPharmacy.address}</p>
                </div>
                <div className="ro-pharmacy-verified">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-xs">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Verified Healthcare Partner
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Delivery Address */}
          <div className="ro-card">
            <div className="ro-card-header">
              <span className="ro-card-subtitle">DELIVERY TO</span>
              {isEditingAddress ? (
                 <button onClick={() => { setShippingAddress(tempAddress); setIsEditingAddress(false); }} style={{background: 'none', border: 'none', color: '#1A73E8', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px'}}>Save</button>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm ro-edit-icon" onClick={() => { setTempAddress(shippingAddress); setIsEditingAddress(true); }}>
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              )}
            </div>
            <h4 className="ro-delivery-name">{shippingName || 'Shaidul Islam'}</h4>
            {isEditingAddress ? (
               <textarea value={tempAddress} onChange={(e) => setTempAddress(e.target.value)} style={{width: '100%', padding: '8px', border: '1px solid #CBD5E0', borderRadius: '4px', marginTop: '8px', fontSize: '13px', fontFamily: 'inherit'}} rows={3} />
            ) : (
               <p className="ro-delivery-address" style={{ whiteSpace: 'pre-wrap' }}>{shippingAddress}</p>
            )}
            {!isEditingAddress && <p className="ro-delivery-phone">{shippingPhone || '+880 1712-345678'}</p>}
          </div>

          {/* Card 3: Items in Order */}
          <div className="ro-card">
            <div className="ro-card-header">
              <span className="ro-card-subtitle">ITEMS IN ORDER</span>
              <span className="ro-items-badge">{cart.reduce((acc, c) => acc + c.qty, 0)} Items</span>
            </div>
            <div className="ro-items-list">
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '24px 0', color: '#718096' }}>
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '40px', height: '40px', margin: '0 auto 12px', opacity: 0.5}}>
                     <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                     <line x1="3" y1="6" x2="21" y2="6"></line>
                     <path d="M16 10a4 4 0 0 1-8 0"></path>
                   </svg>
                   <p style={{ fontWeight: 600, color: '#4A5568', margin: '0 0 4px 0' }}>Your cart is empty</p>
                   <p style={{ fontSize: '13px', margin: 0 }}>Try to select medicines to proceed.</p>
                </div>
              ) : (
                cart.map(item => (
                  <div className="ro-item-row" key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <span className="ro-item-name" style={{ fontWeight: '600', color: '#2D3748', fontSize: '14px' }}>{item.name}</span>
                      <span style={{ fontSize: '12px', color: '#718096', marginTop: '2px' }}>{item.pack || 'Strips'}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ fontWeight: '600', color: '#2D3748', fontSize: '15px' }}>₹ {(item.price * item.qty).toFixed(2)}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#F8FAFC', padding: '4px 8px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                        <button 
                          onClick={() => handleQtyChange(item.id, -1)}
                          style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'white', borderRadius: '6px', cursor: 'pointer', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', color: '#4A5568', fontSize: '16px', fontWeight: 'bold' }}
                        >
                          -
                        </button>
                        <span style={{ fontSize: '15px', fontWeight: '700', minWidth: '24px', textAlign: 'center', color: '#1A202C' }}>{item.qty}</span>
                        <button 
                          onClick={() => handleQtyChange(item.id, 1)}
                          style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'white', borderRadius: '6px', cursor: 'pointer', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', color: '#4A5568', fontSize: '16px', fontWeight: 'bold' }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Card 4: Attached Prescription */}
          {prescriptionUploaded && (
            <div className="ro-card ro-prescription-card" style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="ro-doc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontWeight: '700', color: '#1A202C', fontSize: '14px', marginBottom: '4px' }}>Prescription Uploaded</span>
                  <span style={{ color: '#1A73E8', fontSize: '13px', cursor: 'pointer', fontWeight: '600', textDecoration: 'underline' }} onClick={() => setFlowStep(4)}>View Matches & Availability</span>
                </div>
              </div>
            </div>
          )}

            </div>{/* End ro-left-col */}

            <div className="ro-right-col">
              {/* Card 5: Payment Summary */}
              <div className="ro-card ro-sticky-payment">
            <h4 className="ro-card-title-dark">Payment Summary</h4>
            
            <div className="ro-summary-row">
              <span>Subtotal</span>
              <span>₹ {cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0).toFixed(2)}</span>
            </div>
            <div className="ro-summary-row">
              <span>Delivery Fee</span>
              <span>₹ {cart.length > 0 ? '45.00' : '0.00'}</span>
            </div>
            <div className="ro-summary-row">
              <span>VAT (5%)</span>
              <span>₹ {((cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)) * 0.05).toFixed(2)}</span>
            </div>
            
            <div className="ro-summary-divider"></div>
            
            <div className="ro-summary-row ro-total-row">
              <span>Total Amount</span>
              <span className="ro-total-price">₹ {(cart.length > 0 ? (cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0) + 45 + ((cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)) * 0.05)) : 0).toFixed(2)}</span>
            </div>

            <div className="ro-info-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <p>Final price may vary slightly after the pharmacist reviews the physical prescription if substitutes are required.</p>
            </div>

            {cart.length > 0 && (
              <button className="ro-proceed-btn" onClick={() => setFlowStep(6)}>
                Proceed to Payment <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            )}
            <button className="ro-cancel-btn" onClick={() => setFlowStep(1)} style={{ marginTop: cart.length > 0 ? 0 : '12px' }}>Cancel Order</button>
            
            {/* Trust & Security Section */}
            <div className="ro-trust-section">
              <div className="ro-trust-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                <span>Secure Payment</span>
              </div>
              <div className="ro-trust-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <span>Data Protection</span>
              </div>
              <div className="ro-trust-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                <span>Verified Healthcare Partner</span>
              </div>
            </div>
          </div>
            </div>{/* End ro-right-col */}
          </div>{/* End ro-desktop-2col */}
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

      {/* Step 7: Order Success Full Screen */}
      {flowStep === 7 && selectedPharmacy && (
        <section className="ro-review-section bg-light-tint page-container" style={{ paddingTop: '20px' }}>
          {/* Order Confirmed Header */}
          <div className="order-confirmed-header-desktop" style={{ position: 'relative', marginTop: 0 }}>
             <button className="ro-back-btn" onClick={() => setFlowStep(6)} style={{ position: 'absolute', top: 0, left: 0 }}>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
             </button>
             <div className="ro-success-icon-large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
             </div>
             <h2 className="ro-success-title">Order Confirmed!</h2>
             <p className="ro-success-subtitle">We've received your request and the pharmacy has started preparing your medication.</p>
          </div>

          <div className="order-confirmed-dashboard-grid">
            <div className="oc-left-col">
              <div className="ro-card">
                 <div className="ro-card-header" style={{ marginBottom: '8px' }}>
                    <span className="ro-card-subtitle ro-flex-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm" style={{marginRight: '6px'}}><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg> 
                      Order Tracking
                    </span>
                 </div>
                 <div className="ro-delivery-name" style={{fontSize: '11px', color: '#718096', textTransform: 'uppercase', marginBottom: '2px'}}>ORDER ID</div>
                 <p className="ro-delivery-name" style={{marginBottom: '12px'}}>HB-PH-{orderId}</p>

                 <div className="ro-delivery-name" style={{fontSize: '11px', color: '#718096', textTransform: 'uppercase', marginBottom: '2px'}}>ESTIMATED DELIVERY</div>
                 <p className="ro-delivery-name" style={{color: 'var(--primary)'}}>25-30 minutes</p>
              </div>

              <div className="ro-card">
                 <h4 className="ro-card-title-dark">Order Summary</h4>
                 
                 <div className="ro-summary-row">
                    <span>{cart.reduce((acc, c) => acc + c.qty, 0)} Prescription Meds</span>
                    <span className="ro-total-row">₹{(cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)).toFixed(2)}</span>
                 </div>
                 <div className="ro-summary-row">
                    <span>Delivery Fee</span>
                    <span style={{color: 'var(--primary)', fontWeight: '600'}}>FREE</span>
                 </div>
                 
                 <div className="ro-summary-divider"></div>
                 
                 <div className="ro-summary-row ro-total-row" style={{marginBottom: '20px'}}>
                    <span>Total</span>
                    <span className="ro-total-price">₹{(cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)).toFixed(2)}</span>
                 </div>

                 <button className="ro-proceed-btn" style={{background: '#0F6555'}} onClick={() => setFlowStep(9)}>
                    Track Order <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginLeft: '8px', width: '20px', height: '20px'}}><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                 </button>
                 <button className="ro-cancel-btn" style={{border: '1px solid #CBD5E0', borderRadius: '8px', padding: '12px', marginTop: '12px', width: '100%', background: '#fff'}} onClick={() => setFlowStep(1)}>Back to Home</button>
              </div>
            </div>

            <div className="oc-right-col">
              <div className="ro-card">
                 <div className="ro-pharmacy-header" style={{marginBottom: '16px'}}>
                    <SafePharmacyImage src={selectedPharmacy.image} fallbackSrc="/pharmacy_store.jpg" alt={selectedPharmacy.name} className="ro-pharmacy-img" style={{width: '40px', height: '40px'}} />
                    <div className="ro-pharmacy-details">
                       <h4 className="ro-delivery-name" style={{marginBottom: '4px'}}>{selectedPharmacy.name}</h4>
                       <p className="ro-delivery-address">{selectedPharmacy.address}</p>
                       <div className="ro-pharmacy-verified" style={{display: 'inline-flex', padding: '4px 8px', background: '#E6FFFA', borderRadius: '4px', marginTop: '4px'}}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-xs">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                          Verified Provider
                       </div>
                    </div>
                 </div>
                 <div className="ro-map-placeholder desktop-map" style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src="/map1.png" alt="Delivery Map" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
                    
                     {/* SVG Line Connecting Pins */}
                     <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5 }}>
                       <line x1="12%" y1="40%" x2="55%" y2="30%" stroke="#4A5568" strokeWidth="3" strokeDasharray="6, 8" strokeLinecap="round" />
                     </svg>
                     
                     {/* Blue Hospital Pin & Card */}
                     <div style={{ position: 'absolute', top: '35%', left: '8%', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 10 }}>
                       <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <div style={{ width: '36px', height: '36px', background: '#1A73E8', borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 6px rgba(0,0,0,0.3)' }}>
                             <div style={{ transform: 'rotate(45deg)', color: 'white', fontWeight: 'bold', fontSize: '20px', marginTop: '-2px' }}>+</div>
                          </div>
                          <div style={{ width: '12px', height: '12px', background: 'white', border: '3px solid #1A73E8', borderRadius: '50%', marginTop: '-4px', zIndex: 2 }}></div>
                       </div>
                       <div style={{ background: 'white', padding: '10px 14px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', minWidth: '160px' }}>
                          <div style={{ color: '#1A73E8', fontSize: '13px', fontWeight: '700', marginBottom: '2px' }}>Landmark</div>
                          <div style={{ color: '#1A202C', fontSize: '15px', fontWeight: '700', marginBottom: '2px', lineHeight: '1.2' }}>{selectedPharmacy.name}</div>
                          <div style={{ color: '#718096', fontSize: '12px', lineHeight: '1.3' }}>{selectedPharmacy.area || 'Hyderabad'}</div>
                       </div>
                     </div>

                     {/* Red Delivery Pin & Card */}
                     <div style={{ position: 'absolute', top: '25%', left: '55%', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 10 }}>
                       <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <div style={{ width: '36px', height: '36px', background: '#E53E3E', borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 6px rgba(0,0,0,0.3)' }}>
                             <div style={{ width: '12px', height: '12px', background: 'white', borderRadius: '50%', transform: 'rotate(45deg)' }}></div>
                          </div>
                          <div style={{ width: '12px', height: '12px', background: 'white', border: '3px solid #E53E3E', borderRadius: '50%', marginTop: '-4px', zIndex: 2 }}></div>
                       </div>
                       <div style={{ background: 'white', padding: '10px 14px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', minWidth: '160px' }}>
                          <div style={{ color: '#E53E3E', fontSize: '13px', fontWeight: '700', marginBottom: '2px' }}>Delivery Point</div>
                          <div style={{ color: '#1A202C', fontSize: '15px', fontWeight: '700', marginBottom: '4px', lineHeight: '1.2' }}>Your Location</div>
                          <div style={{ color: '#718096', fontSize: '11px', lineHeight: '1.4', maxWidth: '160px', wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>{shippingAddress}</div>
                       </div>
                     </div>
                  </div>
              </div>
            </div>
          </div>


        </section>
      )}

      {/* Step 9: Order Tracking Full Screen */}
      {flowStep === 9 && selectedPharmacy && (
        <section className="ro-tracking-section" style={{ padding: 0, margin: 0, minHeight: '100vh', background: '#F8FAFC' }}>
          {/* Header */}
          <div className="ro-success-header" style={{position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, background: 'rgba(255,255,255,0.9)', padding: '16px 24px'}}>
             <button className="ro-back-btn" onClick={() => setFlowStep(7)}>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
             </button>
             <div className="ro-tracking-header-title">
                <h3 className="ro-brand-title" style={{margin: 0}}>Track Your Order</h3>
                <span className="ro-tracking-badge">#HB-PH-{orderId}</span>
             </div>
             <button className="ro-help-btn">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
             </button>
          </div>

          <div className="ro-tracking-map-hero" style={{ position: 'relative', overflow: 'hidden', height: '400px' }}>
             <img src="/map1.png" alt="Delivery Map" className="ro-tracking-bg-img" style={{ filter: 'none', objectFit: 'cover' }} />
             
             {/* SVG Line Connecting Pins */}
             <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5 }}>
               <line x1="12%" y1="50%" x2="52%" y2="25%" stroke="#4A5568" strokeWidth="3" strokeDasharray="6, 8" strokeLinecap="round" />
             </svg>

             {/* Small Black Rider Badge */}
             <div className="ro-rider-floating-badge" style={{ zIndex: 20, padding: '8px 16px', borderRadius: '20px', fontSize: '12px', top: '25%', left: '35%' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm" style={{width: '16px', height: '16px'}}><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                <span>Rider is 1.2km away</span>
             </div>
             
             {/* Blue Hospital Pin & Card */}
             <div style={{ position: 'absolute', top: '45%', left: '8%', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 10 }}>
               <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '36px', height: '36px', background: '#1A73E8', borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 6px rgba(0,0,0,0.3)' }}>
                     <div style={{ transform: 'rotate(45deg)', color: 'white', fontWeight: 'bold', fontSize: '20px', marginTop: '-2px' }}>+</div>
                  </div>
                  <div style={{ width: '12px', height: '12px', background: 'white', border: '3px solid #1A73E8', borderRadius: '50%', marginTop: '-4px', zIndex: 2 }}></div>
               </div>
               <div style={{ background: 'white', padding: '10px 14px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', minWidth: '160px' }}>
                  <div style={{ color: '#1A73E8', fontSize: '13px', fontWeight: '700', marginBottom: '2px' }}>Landmark</div>
                  <div style={{ color: '#1A202C', fontSize: '15px', fontWeight: '700', marginBottom: '2px', lineHeight: '1.2' }}>{selectedPharmacy.name}</div>
                  <div style={{ color: '#718096', fontSize: '12px', lineHeight: '1.3' }}>{selectedPharmacy.area || 'Hyderabad'}</div>
               </div>
             </div>

             {/* Red Delivery Pin & Card */}
             <div style={{ position: 'absolute', top: '15%', left: '55%', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 10 }}>
               <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '36px', height: '36px', background: '#E53E3E', borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 6px rgba(0,0,0,0.3)' }}>
                     <div style={{ width: '12px', height: '12px', background: 'white', borderRadius: '50%', transform: 'rotate(45deg)' }}></div>
                  </div>
                  <div style={{ width: '12px', height: '12px', background: 'white', border: '3px solid #E53E3E', borderRadius: '50%', marginTop: '-4px', zIndex: 2 }}></div>
               </div>
                       <div style={{ background: 'white', padding: '10px 14px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', minWidth: '160px' }}>
                          <div style={{ color: '#E53E3E', fontSize: '13px', fontWeight: '700', marginBottom: '2px' }}>Delivery Point</div>
                          <div style={{ color: '#1A202C', fontSize: '15px', fontWeight: '700', marginBottom: '4px', lineHeight: '1.2' }}>Your Location</div>
                          <div style={{ color: '#718096', fontSize: '11px', lineHeight: '1.4', maxWidth: '160px', wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>{shippingAddress}</div>
               </div>
             </div>
          </div>

          <div className="ro-tracking-content-wrapper">
             <div className="ro-card ro-tracking-status-card">
                <span className="ro-card-subtitle">ESTIMATED DELIVERY</span>
                <h2 className="ro-success-title" style={{color: '#1A5351', marginTop: '4px', marginBottom: '4px', fontSize: '24px'}}>15-20 mins</h2>
                <p className="ro-delivery-name" style={{margin: 0}}>Arriving by <strong>4:45 PM</strong></p>
                <div className="ro-tracking-progress-bars">
                   <div className="ro-t-bar active"></div>
                   <div className="ro-t-bar active-light"></div>
                   <div className="ro-t-bar inactive"></div>
                </div>
             </div>

             <div className="ro-card">
                <h4 className="ro-card-title-dark" style={{marginBottom: '20px'}}>Delivery Progress</h4>
                
                <div className="ro-timeline">
                   <div className="ro-t-item completed">
                      <div className="ro-t-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                      <div className="ro-t-content">
                         <h5>Order Confirmed</h5>
                         <p>4:10 PM</p>
                      </div>
                   </div>
                   <div className="ro-t-line completed"></div>
                   
                   <div className="ro-t-item completed">
                      <div className="ro-t-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                      <div className="ro-t-content">
                         <h5>Packed</h5>
                         <p>4:25 PM</p>
                      </div>
                   </div>
                   <div className="ro-t-line completed"></div>
                   
                   <div className="ro-t-item current">
                      <div className="ro-t-icon-pulse"><div className="pulse-dot"></div></div>
                      <div className="ro-t-content">
                         <h5 style={{color: '#1A5351'}}>Out for Delivery</h5>
                         <p>4:32 PM - Current</p>
                      </div>
                   </div>
                   <div className="ro-t-line"></div>
                   
                   <div className="ro-t-item pending">
                      <div className="ro-t-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                      <div className="ro-t-content">
                         <h5>Delivered</h5>
                         <p>Expected 4:45 PM</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="ro-card">
                <div className="ro-rider-card-inner">
                   <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100" alt="Rider" className="ro-rider-img" />
                   <div className="ro-rider-info">
                      <h4>John Anderson</h4>
                      <p>⭐ 4.9 Rider</p>
                   </div>
                   <button className="ro-call-btn" style={{background: '#0F6555', color: 'white'}}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      Call Rider
                   </button>
                </div>
             </div>

             <div className="ro-card">
                <div className="ro-rider-card-inner">
                   <div className="ro-pharmacy-icon-box">
                      <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" className="icon-md" style={{width: '24px', height: '24px'}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                   </div>
                   <div className="ro-rider-info">
                      <h4 style={{fontSize: '14px'}}>{selectedPharmacy.name}</h4>
                      <p style={{fontSize: '12px'}}>{selectedPharmacy.area} • Verified</p>
                   </div>
                </div>
                <button className="ro-call-btn" onClick={() => navigate('/contact')} style={{border: '1px solid #CBD5E0', color: '#1A5351', width: '100%', marginTop: '16px'}}>
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                   Call Pharmacy
                </button>
             </div>

             <div className="ro-info-box" style={{background: '#E6FFFA', borderRadius: '12px', padding: '16px', marginBottom: '80px', display: 'flex', gap: '12px', alignItems: 'center'}}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#1A5351" strokeWidth="2" style={{width: '24px', height: '24px', flexShrink: 0}}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                <p style={{margin: 0, fontSize: '13px', color: '#2D3748', lineHeight: 1.4}}>Need help with your order? Our support team is available 24/7.</p>
             </div>
          </div>
        </section>
      )}

      {/* Upload Prescription Modal */}
      {showUploadModal && (
        <div className="order-success-modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div className="success-modal-card" style={{ background: '#ffffff', borderRadius: '16px', maxWidth: '450px', width: '90%', textAlign: 'left', padding: '32px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '20px', color: '#1A365D', fontWeight: 800 }}>Upload Prescription</h3>
              <button 
                onClick={() => setShowUploadModal(false)}
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#A0AEC0', padding: '0 8px' }}
              >
                &times;
              </button>
            </div>
            
            <p style={{ color: '#4A5568', marginBottom: '24px', fontSize: '14px', lineHeight: '1.5' }}>
              Upload your prescription and we'll automatically identify the medicines and find pharmacies that have them in stock.
            </p>

            {uploadError && (
              <div className="error-message" style={{ color: '#E53E3E', marginBottom: '16px', padding: '12px', backgroundColor: '#FFF5F5', borderRadius: '8px', fontSize: '13px', fontWeight: 500 }}>
                {uploadError}
              </div>
            )}

            <div 
              className={`upload-dropzone ${isScanning ? 'scanning' : ''}`}
              style={{ border: '2px dashed #CBD5E0', borderRadius: '12px', padding: '40px 20px', textAlign: 'center', cursor: 'pointer', marginBottom: '24px', position: 'relative', backgroundColor: '#F8FAFC' }}
            >
              <input 
                type="file" 
                id="modal-prescrip-upload" 
                accept="image/*" 
                className="hidden-file-input" 
                onChange={handleFileChange}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              />
              
              {isScanning ? (
                <div className="scanning-animation" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                  <div className="scan-line" style={{ width: '100%', height: '3px', background: 'var(--primary)', marginBottom: '16px', animation: 'scan 1.5s infinite linear' }}></div>
                  <p>Analyzing prescription...</p>
                </div>
              ) : uploadFile ? (
                <div className="file-selected">
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#E6F6F5', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '20px' }}>✓</div>
                  <p style={{ fontWeight: 600, color: '#2D3748', margin: '0 0 4px 0' }}>{uploadFile.name}</p>
                  <span style={{ fontSize: '13px', color: '#718096', textDecoration: 'underline' }}>Click to change file</span>
                </div>
              ) : (
                <div className="upload-prompt">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" style={{ width: '40px', height: '40px', margin: '0 auto 16px' }}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <p style={{ color: '#2D3748', fontWeight: 700, margin: '0 0 8px 0' }}>Click or drag to upload</p>
                  <p style={{ color: '#A0AEC0', fontSize: '13px', margin: 0 }}>Supports JPG, PNG, PDF</p>
                </div>
              )}
            </div>
            
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              <button 
                onClick={() => setShowUploadModal(false)}
                style={{ flex: 1, padding: '14px', borderRadius: '8px', background: '#E2E8F0', color: '#4A5568', border: 'none', fontWeight: '700', fontSize: '15px', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button 
                className="btn-upload-prescription-main"
                onClick={validateAndScanPrescription}
                disabled={isScanning}
                style={{ flex: 1, padding: '14px', borderRadius: '8px', background: 'var(--primary)', color: 'white', border: 'none', fontWeight: '700', fontSize: '15px', cursor: 'pointer', opacity: isScanning ? 0.6 : 1, transition: 'all 0.2s' }}
              >
                {isScanning ? 'Processing...' : 'Submit Options'}
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
