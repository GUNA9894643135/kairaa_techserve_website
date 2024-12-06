import React, { useEffect } from 'react';
import './Testimonials.css';
import 'animate.css';
import WOW from 'wowjs';

const Testimonials = () => {
  useEffect(() => {
    // Initialize WOW.js
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <div className="ag-testimonial-style bg-blue-transparent py-5 position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="owl-carousel ag-testimonial-slider">
              <div className="ag-testimonial-card wow animate__animated animate__zoomIn" data-wow-delay="100ms" data-wow-duration="1500ms">
                <div className="testimonial-quote-icon">
                  <i className="bi bi-quote"></i>
                </div>
                <h4 className="testimonial-text">
                  “I can't put into words how much Kairaa Techserve's work has helped our business grow. The team's professionalism, dedication, and support have been exceptional. Highly recommend!”
                </h4>
                <div className="test-author">
                  <h6>- Navaneethan</h6>
                  <span></span>
                </div>
              </div>

              <div className="ag-testimonial-card wow animate__animated animate__zoomIn" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="testimonial-quote-icon">
                  <i className="bi bi-quote"></i>
                </div>
                <h4 className="testimonial-text">
                  “Kairaa brought extensive experience to the project. They checked in on a regular basis and were communicative, accessible, and responsive.”
                </h4>
                <div className="test-author">
                  <h6>- Arun Kumar</h6>
                  <span>Marketing Head, CoinCore</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="ag-testimonial-background d-none d-lg-block">
        <img src="/assets/images/agency/backgrounds/testi-bg.png" alt="Testimonial Background" loading="lazy" />
      </div>
    </div>
  );
};

export default Testimonials;
