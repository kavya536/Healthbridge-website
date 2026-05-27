import './CTA.css';

export default function CTA() {
  return (
    <>
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

      <section className="app-download-section">
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
    </>
  );
}
