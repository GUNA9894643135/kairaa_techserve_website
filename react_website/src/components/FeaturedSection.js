import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS for scroll animations
import 'aos/dist/aos.css'; // Import AOS styles
import './FeaturedSection.css'; // Make sure this file is in your project to handle additional custom styles

const FeaturedSection = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="featured-area positioning py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="col-12">
            <div
              className="hrdd-section-title text-center wow animate fadeInDown pb-xl-5"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
              style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '100ms' }}
            >
              <h1>
                <span>Features</span> We <br />
                Offer You
              </h1>
            </div>
          </div>
        </div>

        {/* Featured Boxes */}
        <div className="row justify-content-center mt-50 mt-sm-2">
          {/* Blockchain Development Feature */}
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow zoomIn animated"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '200ms' }}
          >
            <div className="featured-box">
              <div className="featured-icon">
                <span className="bx bx-link-alt" style={{ backgroundColor: '#6a99ff' }}></span>
              </div>

              <div className="featured-content">
                <h2>Blockchain Development</h2>
                <p>We create, deploy, and manage decentralized applications for your company's requirements.</p>
              </div>
            </div>
          </div>

          {/* Fullstack Web Development Feature */}
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow zoomIn animated"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
            data-aos="fade-up"
            data-aos-delay="400"
            style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '400ms' }}
          >
            <div className="featured-box">
              <div className="featured-icon">
                <span className="bx bx-code-alt" style={{ backgroundColor: '#ff7342' }}></span>
              </div>
              <div className="featured-content">
                <h2>Fullstack Web Development</h2>
                <p>Our extensive portfolio of website development services can be tailored to your company's needs.</p>
              </div>
            </div>
          </div>

          {/* Android & IOS Applications Feature */}
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow zoomIn animated"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
            data-aos="fade-up"
            data-aos-delay="600"
            style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '600ms' }}
          >
            <div className="featured-box">
              <div className="featured-icon">
                <span className="bx bxl-android" style={{ backgroundColor: '#40d3e5' }}></span>
              </div>
              <div className="featured-content">
                <h2>Android &amp; IOS Applications</h2>
                <p>We guarantee that your app will work on all devices, giving your customers access to the same fantastic experience.</p>
              </div>
            </div>
          </div>

          {/* Crypto Payment Gateway Feature */}
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow zoomIn animated"
            data-wow-delay="800ms"
            data-wow-duration="1500ms"
            data-aos="fade-up"
            data-aos-delay="800"
            style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '800ms' }}
          >
            <div className="featured-box">
              <div className="featured-icon">
                <span className="bx bxs-credit-card" style={{ backgroundColor: '#fed067' }}></span>
              </div>
              <div className="featured-content">
                <h2>Crypto Payment Gateway</h2>
                <p>With the help of our quick and secure payment processing service, you can quickly incorporate cryptocurrency.</p>
              </div>
            </div>
          </div>

          {/* Crypto Creation & Exchange Feature */}
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow zoomIn animated"
            data-wow-delay="1000ms"
            data-wow-duration="1500ms"
            data-aos="fade-up"
            data-aos-delay="1000"
            style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '1000ms' }}
          >
            <div className="featured-box">
              <div className="featured-icon">
                <span className="bx bxs-coin-stack" style={{ backgroundColor: '#1ecaab' }}></span>
              </div>
              <div className="featured-content">
                <h2>Crypto Creation &amp; Exchange</h2>
                <p>We are here to create crypto for your company, and we have an exchange where you may trade in your crypto.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Optional Image at the Bottom */}
      {/* <img className="shape featured-shape" src="assets/images/shape/feasured-hrrd.png" alt="shape" loading="lazy" /> */}
    </div>
  );
};

export default FeaturedSection;
