import React from 'react';
import './HeroSection.css'; 
import WorkingProcess from './WorkingProcess';
import FeaturedSection from './FeaturedSection';
import EverythingSection from './EverythingSection';
import Testimonials from './Testimonials';
import BlogSection from './BlogSection';
import NewsletterSection from './NewsletterSection';
import 'bootstrap-icons/font/bootstrap-icons.css';

const HeroSection = () => {
  return (
    <div className="ag-hero-style">
      
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center">
          {/* Left Side Content */}
          <div className="col-lg-5 order-lg-0">
            <div className="ag-hero-content px-3">
              <h1 className="ag-hero-title">
                We will help you to expand your business
              </h1>
              <p>
                We are the leading Web 3.0 development company actively
                engaged in the creation of mobile and web applications as well
                as upcoming technologies.
              </p>
              <div className="ag-hero-btn">
                <a href="contact.html" className="common-btn text-white">Get a Quote</a>
              </div>
            </div>
          </div>

          {/* Right Side Image and Labels */}
          <div className="col-lg-7 col-md-10 order-lg-1 d-flex align-items-end justify-content-lg-end justify-content-center">
            <div className="ag-hero-figure position-relative">
              <img 
                src="/assets/images/agency/ag-hero-figure.png" 
                alt="Hero" 
                loading="lazy" 
                className="img-fluid"
              />

              {/* Project Done Label */}
              <div className="project-label">
                <span>Project Done</span>
                <h5>100+</h5>
                <div className="label-shape d-none d-md-block">
                  <img 
                    src="/assets/images/agency/shapes/project-done-vactor.svg" 
                    alt="Shape" 
                    loading="lazy" 
                  />
                </div>
              </div>

              {/* Client Review Label */}
              <div className="review-label">
                <div className="d-flex align-items-center label-header">
                  <div className="client-avatar">
                  <img
              src="/assets/images/logo.png"
              className="logo-img"
              width="90%"
              alt="Logo"
              loading="lazy"
            />
                  </div>
                  <ul className="ag-rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <li key={i}><i className="bi bi-star-fill"></i></li>
                    ))}
                  </ul>
                </div>
                <h5>20k+ Clients Review</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Random Shapes for Large Screens */}
      <div className="ag-hero-random-shapes d-none d-xl-block">
        <img 
          src="/assets/images/agency/shapes/shape-1.svg" 
          className="shape-one" 
          alt="Shape 1" 
          loading="lazy" 
        />
        <img 
          src="/assets/images/agency/shapes/shape-2.svg" 
          className="shape-two" 
          alt="Shape 2" 
          loading="lazy" 
        />
      </div>

      {/* Sections */}
      <WorkingProcess />
      <FeaturedSection />
      <EverythingSection />
      <Testimonials />
      <BlogSection />
      <NewsletterSection />
    </div>
  );
};

export default HeroSection;
