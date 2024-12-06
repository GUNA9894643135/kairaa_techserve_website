import React, { useEffect } from 'react';
import './EverythingSection.css'; // Assuming you have this CSS file for styling
import WOW from 'wow.js'; // Import WOW.js for scroll animations

const EverythingSection = () => {
  useEffect(() => {
    // Initialize WOW.js for animation on scroll
    new WOW().init();
  }, []);

  return (
    <div className="everything-area positioning mb-sm--50">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* Left Section - Image & Stats */}
          <div className="col-xxl-6 col-xl-8 col-lg-12">
            <div className="everything-img-wrap position-relative wow animate fadeInLeft" data-wow-delay="100ms">
              <img 
                src="assets/images/shape/everything-hrrd.png" 
                alt="Everything" 
                className="img-fluid rounded-lg" 
                loading="lazy" 
              />

              {/* Income Cart */}
              <div className="income-cart wow animate fadeInUp" data-wow-delay="200ms">
                <p>New Users of This Month</p>
                <div className="income-price-wrap">
                  <div className="income-main-price">
                    <h2>126</h2>
                  </div>
                  <div className="income-percent">
                    <span><i className="bi bi-arrow-up-right"></i> 12%</span>
                  </div>
                </div>
                <img 
                  src="assets/images/shape/income-cart-graf.png" 
                  alt="Income graph" 
                  className="img-fluid" 
                  loading="lazy" 
                />
              </div>

              {/* Like Cart */}
              <div className="like-cart wow animate fadeInUp" data-wow-delay="300ms">
                <div className="like-cart-box">
                  <div className="like-cart-icon">
                    <i className="bx bx-user"></i>
                  </div>
                  <div className="like-cart-content">
                    <h4>120K</h4>
                    <h6>Our users</h6>
                  </div>
                </div>
              </div>

              {/* Time Cart */}
              <div className="time-cart wow animate fadeInUp" data-wow-delay="400ms">
                <div className="time-cart-img-list">
                  {['1', '2', '3', '4', '5'].map(num => (
                    <img 
                      key={num} 
                      src={`assets/images/cart/hrrd-cart-${num}.png`} 
                      alt={`Cart ${num}`} 
                      loading="lazy" 
                    />
                  ))}
                </div>
                <div className="time-cart-content text-left">
                  <h2>See what?</h2>
                  <p>Our clients say about Kairaa.</p>
                </div>
                <div className="time-cart-btn-wrap">
                  <a className="time-cart-btn time-cart-btn-1" href="contact.html">Clients review</a>
                  <a className="time-cart-btn time-cart-btn-2" href="services.html">Write review</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Product Info */}
          <div className="col-xxl-5 col-xl-4 col-lg-12 mobt-50">
            <div className="hrdd-section-title wow animate fadeInRight" data-wow-delay="200ms">
              <h1>
                We're Happy to <br />
                Show You Our <span>Products</span>
              </h1>
            </div>
            <div className="everything-info wow animate fadeInUp" data-wow-delay="300ms">
              <ul>
                {[
                  { name: 'Kairaa Exchange', url: 'https://kairaaexchange.com/' },
                  { name: 'NFT Kairaa', url: 'https://nftkairaa.com/' },
                  { name: 'Coincore', url: 'https://coincore.in/' },
                  { name: 'Buymor', url: '#' },
                  { name: 'Kairaa Utilities', url: '#' }
                ].map((item, index) => (
                  <li key={index} className="wow animate fadeInUp" data-wow-delay={`${(index + 1) * 100}ms`}>
                    {item.name}
                    <a href={item.url} className="arrow-link">
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hrrd-everything-btn-wrap wow animate fadeInUp" data-wow-delay="450ms">
              <a className="common-btn btn-hrrd-1" href="services.html">View details</a>
            </div>
          </div>
        </div>
      </div>

      {/* Left Shape Image */}
  
    </div>
  );
};

export default EverythingSection;
