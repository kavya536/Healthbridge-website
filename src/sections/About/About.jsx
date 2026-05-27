import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="container about-layout">
        
        <div className="about-content">
          <span className="section-tag">ABOUT US</span>
          <h2 className="section-title">
            Building The Future Of<br/>
            <span className="text-teal heading-small">Healthcare In India</span>
          </h2>
          
          <p className="about-desc">
            At HealthBridge, We Design Advanced Digital Solutions To Help Patients<br />
            And Clinical Hospitals Connect Seamlessly In Real-Time. Whether You<br />
            Are Consulting A Specialist Or Managing Daily Pharmacy Runs, We Make<br />
            Your Journey Effortless.
          </p>
          
          <p className="about-desc">
            Our Approach Is Deeply Clinical And Patient-Centric, Going Far Beyond<br />
            Basic Calls—We Deliver An Integrated, Secure, And Fully Compliant<br />
            Digital Ecosystem That Secures Your Health Records Under The Highest<br />
            Standards.
          </p>
          
          <p className="about-highlight">
            <span className="about-highlight-line1">
              We Don't Just Bridge Technology Gaps; <span className="text-teal">We Build Lasting Clinical Trust</span>
            </span>
            <br />
            <span className="text-teal about-highlight-line2">
              To Elevate Care For Every Single Indian.
            </span>
          </p>
        </div>

        <div className="about-image-wrapper">
          <img src="/doctors image.png" alt="Doctors Team" className="about-image" />
          <img src="/circle.png" alt="20+ Years Experience" className="experience-badge" />
        </div>

      </div>
    </section>
  );
}
