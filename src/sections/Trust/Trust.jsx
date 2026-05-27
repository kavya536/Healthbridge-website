import { useState } from 'react';
import './Trust.css';

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

export default function Trust() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <>
      <section className="ecosystem-section">
        <div className="container eco-layout">
          <div className="eco-content">
            <h2 className="section-title" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '34px', fontWeight: 800, color: '#2d3748', marginBottom: '24px', lineHeight: 1.3, marginTop: 0 }}>
              <span className="section-tag" style={{ color: '#34C759', marginBottom: '10px', display: 'block', fontWeight: 800, textTransform: 'none', fontSize: '14px', letterSpacing: '1px' }}>Ecosystem Control Portals</span>
              Every Service We Provide,<br/>
              <span className="text-teal" style={{ color: '#20C7B6', textTransform: 'none', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit', fontFamily: 'inherit' }}>Connected</span>
            </h2>
            <p className="eco-desc">
              <span className="eco-nowrap">Interact With The Operational Dashboard Keys Below To</span><br />
              <span className="eco-nowrap">Explore Real-Time Integration Nodes Across The Healthcare</span><br />
              <span className="eco-nowrap">Ecosystem.</span>
            </p>
            <p className="eco-desc">
              <span className="eco-nowrap">Monitor Connected Services, Professional Compliance Desks,</span><br />
              <span className="eco-nowrap">And Digital Healthcare Operations Through One Unified</span><br />
              <span className="eco-nowrap">Platform.</span>
            </p>
          </div>
          <div className="eco-image-wrapper">
            <img src="/doctor_patient.jpg" alt="Doctor and Patient" className="eco-image" />
          </div>
        </div>
      </section>

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
    </>
  );
}
