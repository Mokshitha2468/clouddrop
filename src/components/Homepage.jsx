import React, { useState, useEffect } from 'react';
import './Homepage.css';

const Homepage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">☁️</span>
            <span className="logo-text">CloudDrop</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#plans">Plans</a>
            <a href="#about">About</a>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Protect Your
            <span className="gradient-text"> Delivery Income</span>
          </h1>
          <p>
            Automated payouts when rain, AQI spikes, or curfews disrupt your earnings.
            Zero paperwork. 60-second UPI transfer.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary btn-large">Protect Your Income Now</button>
            <button className="btn-secondary btn-large">Watch Demo Video</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-value">60s</div>
            <div className="stat-label">Payout Time</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">20-40%</div>
            <div className="stat-label">Income Protected</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">1000+</div>
            <div className="stat-label">Active Workers</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">3%</div>
            <div className="stat-label">Premium Cap</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Why Choose CloudDrop?</h2>
          <p className="section-subtitle">Built specifically for India's gig workers</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">☁️</div>
              <h3>Parametric Triggers</h3>
              <p>Auto-detection of rain, AQI, curfews, and platform outages. No paperwork needed.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>60-Second Payout</h3>
              <p>Instant UPI transfer when disruption is verified. Your money when you need it.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Trust Score System</h3>
              <p>Fair payouts with verification. Higher trust = faster payouts.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Brigade System</h3>
              <p>Group insurance with social accountability. Build shared pool for cashbacks.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Fraud Protection</h3>
              <p>6-layer defense against GPS spoofing and coordinated attacks.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Dynamic Premiums</h3>
              <p>Personalized rates based on your zone's risk. Pay only what's fair.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Plans */}
      <section id="plans" className="plans">
        <div className="container">
          <h2>Choose Your Protection Plan</h2>
          <p className="section-subtitle">Flexible plans tailored to your income</p>
          
          <div className="plans-grid">
            <div className="plan-card">
              <h3>Pack A — Shield</h3>
              <div className="plan-price">₹99-149<span>/week</span></div>
              <p className="plan-coverage">50% Income Protection</p>
              <ul className="plan-features">
                <li>✓ Heavy rain (≥15mm/hr)</li>
                <li>✓ Severe AQI (≥300)</li>
                <li>✓ ₹150-250 max payout</li>
              </ul>
              <button className="btn-outline">Get Shield</button>
            </div>
            
            <div className="plan-card popular">
              <div className="popular-badge">Most Popular</div>
              <h3>Pack B — Armor</h3>
              <div className="plan-price">₹139-280<span>/week</span></div>
              <p className="plan-coverage">80% Income Protection</p>
              <ul className="plan-features">
                <li>✓ All rain intensities (≥2mm)</li>
                <li>✓ AQI, curfews, outages</li>
                <li>✓ Fuel shortages covered</li>
                <li>✓ ₹250-750 max payout</li>
              </ul>
              <button className="btn-primary">Get Armor</button>
            </div>
            
            <div className="plan-card">
              <h3>Squad Pack</h3>
              <div className="plan-price">₹119-249<span>/week</span></div>
              <p className="plan-coverage">Group Insurance</p>
              <ul className="plan-features">
                <li>✓ 5-10 riders in same zone</li>
                <li>✓ 5% premium to Brigade pool</li>
                <li>✓ 8 clean weeks = cashback</li>
                <li>✓ Social accountability</li>
              </ul>
              <button className="btn-outline">Form Squad</button>
            </div>
          </div>
        </div>
      </section>

      {/* Brigade Section */}
      <section id="about" className="brigade">
        <div className="container">
          <div className="brigade-content">
            <div className="brigade-text">
              <div className="brigade-badge">👥 Social Accountability</div>
              <h2>Brigade System: Stronger Together</h2>
              <p>Join with 5-10 riders from your zone. Build a shared pool, earn cashbacks, and protect each other. When one member frauds, everyone loses cashback — social accountability that no algorithm can match.</p>
              
              <div className="brigade-example">
                <div className="example-header">
                  <span>Example: 5 Riders, Marathahalli</span>
                  <strong>₹179/week</strong>
                </div>
                <p>✓ Each pays ₹179/week → Brigade pool = ₹45/week</p>
                <p>✓ After 8 clean weeks → ₹72 cashback each!</p>
                <p className="highlight">✓ Zero claims bonus + shared protection</p>
              </div>
              
              <button className="btn-primary">Form Your Brigade →</button>
            </div>
            
            <div className="brigade-visual">
              <div className="riders-grid">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="rider-circle">
                    <div className="rider-icon">❤️</div>
                    <span>Rider {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>Trusted by Real Workers</h2>
          <p className="section-subtitle">Hear from delivery partners protected by CloudDrop</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-quote">"CloudDrop saved my daughter's school fees when heavy rain hit. ₹300 in my account in 60 seconds!"</p>
              <div className="testimonial-author">
                <strong>Rajan K.</strong>
                <span>Swiggy Delivery Partner, Bengaluru</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-quote">"The AQI protection is a lifesaver. I don't have to risk my health on hazardous days anymore."</p>
              <div className="testimonial-author">
                <strong>Priya M.</strong>
                <span>Zomato Delivery Partner, Mumbai</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-quote">"After 5 years of delivering, finally someone understands our struggle. Instant payout during curfew!"</p>
              <div className="testimonial-author">
                <strong>Arjun S.</strong>
                <span>Swiggy Delivery Partner, Chennai</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Protect Your Income?</h2>
          <p>Join thousands of delivery partners who never worry about losing earnings to disruptions again.</p>
          <button className="btn-primary btn-large">Get Started Now - It's Free →</button>
          <small>No credit card required • Cancel anytime</small>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span>☁️</span>
              <span>CloudDrop</span>
            </div>
            <p>AI-powered parametric income insurance for India's gig economy.</p>
          </div>
          
          <div className="footer-section">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#plans">Pricing</a>
            <a href="#">How it Works</a>
            <a href="#">Brigade System</a>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Compliance</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 CloudDrop. Protecting India's Gig Workers from Invisible Risks.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;