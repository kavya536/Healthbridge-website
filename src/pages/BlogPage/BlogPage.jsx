import { useEffect } from 'react';
import '../../sections/CTA/CTA.css';
import './BlogPage.css';

const BLOG_POSTS = [
  {
    id: 1,
    image: '/blog.jpg',
    date: 'March 10, 2026',
    author: 'James Wilson',
    title: 'Why Teleconsultation Is Becoming Essential In Modern Healthcare',
    desc: 'Understand how digital consultations are improving accessibility and reducing healthcare barriers for patients.',
  },
  {
    id: 2,
    image: '/blog.jpg',
    date: 'March 10, 2026',
    author: 'James Wilson',
    title: 'The Role Of Digital Pharmacies In Faster Medicine Delivery',
    desc: 'Explore how connected pharmacy systems are streamlining prescription fulfillment and delivery operations.',
  },
  {
    id: 3,
    image: '/blog.jpg',
    date: 'March 10, 2026',
    author: 'James Wilson',
    title: 'How Hospitals Can Improve Operations Through Digital Infrastructure',
    desc: 'Learn how hospitals use connected systems to manage workflows, procurement, patient records, and analytics.',
  },
  {
    id: 4,
    image: '/blog.jpg',
    date: 'March 10, 2026',
    author: 'James Wilson',
    title: 'Why Teleconsultation Is Becoming Essential In Modern Healthcare',
    desc: 'Understand how digital consultations are improving accessibility and reducing healthcare barriers for patients.',
  },
  {
    id: 5,
    image: '/blog.jpg',
    date: 'March 10, 2026',
    author: 'James Wilson',
    title: 'The Role Of Digital Pharmacies In Faster Medicine Delivery',
    desc: 'Explore how connected pharmacy systems are streamlining prescription fulfillment and delivery operations.',
  },
  {
    id: 6,
    image: '/blog.jpg',
    date: 'March 10, 2026',
    author: 'James Wilson',
    title: 'How Hospitals Can Improve Operations Through Digital Infrastructure',
    desc: 'Learn how hospitals use connected systems to manage workflows, procurement, patient records, and analytics.',
  },
];

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="blog-page">
      <div className="blog-hero">
        <div className="container">
          <h1 className="blog-hero-title">
            Insights, Innovation & The Future Of Connected Healthcare
          </h1>
          <p className="blog-hero-desc">
            Explore Expert Articles, Healthcare Trends, Digital Transformation Insights, Clinical Updates, And Platform Innovations Shaping The Future Of Healthcare.
          </p>
        </div>
      </div>

      <div className="blog-content-section">
        <div className="container">
          <div className="blog-grid">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-card-image" />
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-meta-item">
                      <svg className="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {post.date}
                    </span>
                    <span className="blog-meta-item">
                      <svg className="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      {post.author}
                    </span>
                  </div>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-desc">{post.desc}</p>
                  <a href="#" className="blog-card-link">
                    Read More <span className="link-arrow">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Ready to Experience Connected Healthcare Section */}
      <section className="cta-banner-section blog-cta-banner">
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
