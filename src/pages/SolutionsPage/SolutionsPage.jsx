import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SolutionsPage.css';

const solutionsData = [
  {
    title: "Patients",
    description: "Enjoy 24/7 access to medical records, secure teleconsultations with verified specialists, instant online appointment booking, and automated digital delivery of e-prescriptions.",
    path: "/solutions/patients",
    image: "/patient.jpg",
    tags: ["24/7 ACCESS", "SECURE PORTAL", "TELEHEALTH SUPPORT", "E-PRESCRIPTIONS"],
    btnText: "Patient Portal"
  },
  {
    title: "Doctors",
    description: "Streamline your clinical workflows with a robust console for digitally signed e-prescriptions, integrated schedule managers, quick access to patient medical histories, and advanced health analytics.",
    path: "/solutions/doctors#doctors-search-section",
    image: "/dcts.jpg",
    tags: ["DOCTOR CONSOLE", "SMART E-RX", "SCHEDULE MANAGER", "PATIENT ANALYTICS"],
    btnText: "Doctor Console"
  },
  {
    title: "PG Students",
    description: "Accelerate your medical learning through professional mentorship, peer discussions of complex clinical cases, digitized mock drills, and active engagement with real-world scenarios.",
    path: "/solutions/pg-students",
    image: "/pg student.jpg",
    tags: ["MENTORSHIP", "CLINICAL DISCUSSIONS", "MOCK DRILLS", "DIGITAL LEARNING"],
    btnText: "PG Community"
  },
  {
    title: "Hospitals",
    description: "Optimize your healthcare operations with unified OPD patient queue management, secure multi-staff access controls, comprehensive billing, and seamless data exchange integrations.",
    path: "/solutions/hospitals",
    image: "/h5.jpg",
    tags: ["OPD QUEUES", "WORKFLOW AUTOMATION", "STAFF ROLES", "ENTERPRISE EHR"],
    btnText: "Hospital Systems"
  },
  {
    title: "Pharmacies",
    description: "Empower your pharmacy business with real-time inventory synchronization, instant digital prescription validation, automated order dispatch matchers, and secure logistics trackers.",
    path: "/solutions/pharmacies",
    image: "/pharmacy_interior.png",
    tags: ["INVENTORY SYNC", "E-RX VALIDATION", "LOGISTICS MATCHING", "EASY BILLING"],
    btnText: "Pharmacy Network"
  }
];

export default function SolutionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="solutions-page">
      {/* Hero Header Section */}
      <section className="solutions-hero">
        <div className="container text-center">
          <span className="solutions-subtitle">Our Suite Of Solutions</span>
          <h1 className="solutions-title">
            Tailored Systems Connecting <span className="text-teal">Every Healthcare Entity</span>
          </h1>
          <p className="solutions-desc">
            Explore dedicated portals, automated workflows, and digital tools built to optimize patient care, medical practices, academic learning, and operations.
          </p>
        </div>
      </section>

      {/* 5-Cards Grid Section */}
      <section className="solutions-section">
        <div className="container">
          <div className="sol-page-grid">
            {solutionsData.map((sol, index) => (
              <div key={index} className="sol-page-card">
                {/* 2/5 Height Image Wrapper */}
                <div className="sol-page-image-wrapper">
                  <img src={sol.image} alt={sol.title} className="sol-page-image" />
                </div>

                {/* 3/5 Height Content Wrapper */}
                <div className="sol-page-content">
                  <h3 className="sol-page-title">{sol.title}</h3>
                  <p className="sol-page-description">{sol.description}</p>
                  
                  <div className="sol-page-tags">
                    {sol.tags.map((tag, i) => (
                      <span key={i} className="sol-page-tag">{tag}</span>
                    ))}
                  </div>

                  <Link to={sol.path} className="sol-page-btn">
                    {sol.btnText}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
