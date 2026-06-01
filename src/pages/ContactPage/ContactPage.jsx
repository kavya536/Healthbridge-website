import { useState, useEffect } from 'react';
import './ContactPage.css';
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

export default function ContactPage() {
  const [openIdx, setOpenIdx] = useState(null);

  // Always scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <main className="contact-page">
      {/* 1. Contact Form Section */}
      <section className="contact-section">
        <div className="container contact-layout">
          
          <div className="contact-info">
            <span className="contact-tag">CONTACT US</span>
            <h1 className="contact-title" style={{ marginTop: 0 }}>
              Let's Connect And&nbsp;Transform<br/>
              <span className="text-teal" style={{ color: '#20C7B6', textTransform: 'none', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit', fontFamily: 'inherit' }}>Healthcare Together</span>
            </h1>
            <p className="contact-desc">
              HealthBridge helps hospitals, doctors, pharmacies,<br />
              and patients deliver better, connected healthcare<br />
              experiences.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#20C7B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div className="detail-text">
                  <span className="detail-label">Email Inquiry</span>
                  <strong className="detail-value">hello@healthbridge.com</strong>
                  <span className="detail-sub">We respond within 24 hours</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#20C7B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="detail-text">
                  <span className="detail-label">Direct Line</span>
                  <strong className="detail-value">+91 9618344086</strong>
                  <span className="detail-sub">Available Mon-Sat, 10am - 7pm</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#20C7B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="detail-text">
                  <span className="detail-label">Our Studio</span>
                  <strong className="detail-value">Hyderbad TG</strong>
                  <span className="detail-sub">Central Excise Colony, India</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
              <a href="#" className="social-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" className="social-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="#" className="social-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
            </div>
          </div>

          <div className="contact-form-card">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 9876543210" />
                </div>
                <div className="form-group">
                  <label>Organization Type</label>
                  <input type="text" placeholder="e.g. Hospital, Clinic, Pharmacy" />
                </div>
              </div>
              <div className="form-group">
                <label>User Type</label>
                <input type="text" placeholder="e.g. Doctor, Patient, Admin" />
              </div>
              <div className="form-group">
                <label>Project Details</label>
                <textarea placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="button" className="submit-inquiry-btn">
                Send Inquiry <span className="arrow">→</span>
              </button>
            </form>
          </div>
          
        </div>
      </section>

      {/* 2. FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title text-center" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '42px', fontWeight: 800, color: '#2d3748', marginBottom: '24px', textAlign: 'center' }}>
            Frequently Asked <span className="text-teal" style={{ color: '#20C7B6', textTransform: 'none' }}>Questions</span>
          </h2>
          
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div 
                className="faq-item" 
                key={idx}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question-row">
                  <span className="faq-question">{faq.q}</span>
                  <span className="faq-icon" style={{ transform: openIdx === idx ? 'rotate(45deg)' : 'rotate(0)' }}>
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

      {/* 3. CTA Banner Section */}
      <section className="cta-banner-section">
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
