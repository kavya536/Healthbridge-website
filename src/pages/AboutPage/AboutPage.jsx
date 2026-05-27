import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../sections/CTA/CTA.css';
import './AboutPage.css';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container about-hero-layout">
          <div className="about-hero-content">
            <h1 className="about-hero-title">
              Building The Digital Infrastructure <span className="text-teal">For Connected Healthcare</span>
            </h1>
            <p className="about-hero-desc">
              HealthBridge Is Creating A Unified Healthcare Ecosystem That Seamlessly Connects Patients, Doctors, Hospitals, Pharmacies, And PG Students Through Secure, Technology-Driven Healthcare Solutions.
            </p>
            <div className="about-hero-actions">
              <Link to="/platform" className="btn-solid">
                Explore Platform
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="about-hero-image-wrapper">
            <img src="/about.jpg" alt="HealthBridge Digital Infrastructure" className="about-hero-image" />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container mv-layout">
          
          <div className="mv-card">
            <div className="mv-icon-wrapper blue-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
            </div>
            <h2 className="mv-title">Our Mission</h2>
            <p className="mv-desc">
              Our mission is simple — no one should struggle to access<br />
              the right doctor, the right treatment, or the right<br />
              medicines. We aim to make healthcare more accessible,<br />
              connected, transparent, and efficient for everyone.
            </p>
          </div>

          <div className="mv-card">
            <div className="mv-icon-wrapper green-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
            </div>
            <h2 className="mv-title">Our Vision</h2>
            <p className="mv-desc">
              We envision a future where every healthcare interaction<br />
              — from consultations to medicine delivery — happens<br />
              through one intelligent and trusted digital healthcare<br />
              ecosystem.
            </p>
          </div>

        </div>
      </section>
      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <div className="container who-layout">
          <div className="who-image-wrapper">
            <img src="/handshaking.jpg" alt="Healthcare professionals shaking hands" className="who-image" />
          </div>
          <div className="who-content">
            <h2 className="who-title">Who We Are</h2>
            <p className="who-desc">
              HealthBridge is a modern healthcare technology platform designed to<br />
              bridge the gap between patients and healthcare providers. By<br />
              combining teleconsultation, e-prescriptions, pharmacy integration,<br />
              healthcare analytics, and medical communities, we simplify the entire<br />
              healthcare journey.
            </p>
          </div>
        </div>
      </section>
      {/* What We Do Section */}
      <section className="what-we-do-section">
        <h2 className="wwd-section-title">What We Do</h2>
        <div className="container wwd-layout">
          
          <div className="wwd-card">
            <div className="wwd-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
            </div>
            <h3 className="wwd-title">Connected Patient Care</h3>
            <p className="wwd-desc">
              Online consultations, digital prescriptions, medicine delivery, and health records in one place.
            </p>
          </div>

          <div className="wwd-card">
            <div className="wwd-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
            </div>
            <h3 className="wwd-title">Doctor Empowerment</h3>
            <p className="wwd-desc">
              Smart consultations, earnings dashboards, e-prescriptions, and professional growth tools.
            </p>
          </div>

          <div className="wwd-card">
            <div className="wwd-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
            </div>
            <h3 className="wwd-title">Healthcare Ecosystem</h3>
            <p className="wwd-desc">
              Connecting hospitals, pharmacies, labs, suppliers, and healthcare professionals seamlessly.
            </p>
          </div>

          <div className="wwd-card">
            <div className="wwd-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
            </div>
            <h3 className="wwd-title">Medical Learning Network</h3>
            <p className="wwd-desc">
              Helping PG students learn through mentorship, clinical discussions, and real-world case studies.
            </p>
          </div>

        </div>
      </section>

      {/* Why HealthBridge Section */}
      <section className="why-hb-section">
        <h2 className="why-hb-section-title">
          Why <span className="text-teal">HealthBridge</span>
        </h2>
        <div className="container why-hb-layout">
          
          <div className="why-hb-card accent-orange">
            <h3 className="why-hb-title">Trusted Healthcare Network</h3>
            <p className="why-hb-desc">Verified doctors, pharmacies, and healthcare providers.</p>
          </div>

          <div className="why-hb-card accent-pink">
            <h3 className="why-hb-title">Secure & Compliant</h3>
            <p className="why-hb-desc">Built with healthcare-grade privacy, security.</p>
          </div>

          <div className="why-hb-card accent-purple">
            <h3 className="why-hb-title">Real-Time Connectivity</h3>
            <p className="why-hb-desc">Seamless integration between patients, doctors, hospitals.</p>
          </div>

          <div className="why-hb-card accent-teal">
            <h3 className="why-hb-title">Patient-Centric Experience</h3>
            <p className="why-hb-desc">Designed to simplify and improve healthcare access.</p>
          </div>

        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="app-download-section about-app-download">
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

      {/* Ready to Experience Connected Healthcare Section */}
      <section className="cta-banner-section about-cta-banner">
        <div className="container">
          <div className="cta-banner-card">
            <h2 className="cta-title">Ready To Experience Connected<br/>Healthcare?</h2>
            <p className="cta-desc">Join thousands of doctors and patients on HealthBridge.</p>
            <button className="cta-join-btn">
              Join As Doctor <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
