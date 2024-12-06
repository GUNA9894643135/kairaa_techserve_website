import React, { useState, useEffect } from 'react';
import './About.css';
import Loader from './Loader';

const AboutPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay (e.g., fetching data or loading assets)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2 seconds delay for demo
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  if (isLoading) {
    return <Loader />; // Show the spinner while loading
  }
  return (
    <div>
      {/* Working Process Section */}
      <div class="breadcrumb-text text-center">
                <h1>About Us</h1>
                <p><a href="index.html">Home</a> / About Us</p>
              </div>
      <div className="ag-working-process pt-4 bg-light mt-0 bg-white">
        <div className="container">
          <div className="row align-items-center process-row-gap mt-5 pt-3">
            <div className="col-xxl-5 col-lg-6 order-1 order-lg-0 pt-5 pt-lg-0">
              <div className="ag-process-disc">

                <h2 className="ag-section-title text-start">
                  Who is Kairaa Tech Serve?
                </h2>
                <p>
                  Kairaa is the best company for serving tech solutions. We'll
                  develop enterprise solutions using web 3.0 technologies. Our
                  solutions will aid in our clients' management and business
                  optimization. To assist our clients in achieving their business
                  objectives, we can offer the best technological solutions.
                </p>
                <div className="ag-hero-btn">
                <a href="contact.html" className="common-btn text-white">Learn more</a>
              </div>
              </div>
            </div>
            <div className="col-xxl-7 col-lg-6 order-0 order-lg-1">
              <div className="position-relative text-lg-end">
                <div className="ag-process-features-image d-inline-block position-relative">
                  <img
                    src="assets/images/agency/featured-img2.png"
                    alt="Kairaa Tech"
                    className="position-relative"
                    loading="lazy"
                  />
                  <div className="process-animi-shape position-absolute d-lg-block d-none">
                    <img
                      src="assets/images/agency/shapes/process-shape2.png"
                      alt="Shape"
                      loading="lazy"
                    />
                  </div>
                  {/* <div className="client-group d-sm-none d-lg-block client-group2">
                    <img
                      src="assets/images/agency/shapes/increment-lavel.png"
                      alt="Shape"
                      loading="lazy"
                    />
                  </div> */}
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Working Process Section End */}

      {/* Why You Should Need Kairaa Section */}
      <div className="trip-service-area positioning mt-1 pb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="hrdd-section-title text-capitalize">
                <h1>
                  Why You Should Need <span>Kairaa</span>
                </h1>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 mobt-24">
              <div className="section-text wow animate flipInX" data-wow-delay="300ms" data-wow-duration="1500ms">
                <p>
                  For companies and individuals who need to be on the cutting edge and have access to the most
                  recent technology, Kairaa tech services are the ideal solution.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="trip-service-box text-center">
                <div className="trip-service-icon">
                  <span className="bx bxs-bulb"></span>
                </div>
                <div className="trip-service-content">
                  <h2><a href="services.html">New Tech's</a></h2>
                  <p>Utilize latest technologies</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="trip-service-box text-center">
                <div className="trip-service-icon">
                  <span className="bx bxs-message-rounded-dots"></span>
                </div>
                <div className="trip-service-content">
                  <h2><a href="contact.html">Support</a></h2>
                  <p>Best in tech support</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="trip-service-box text-center">
                <div className="trip-service-icon">
                  <span className="bx bxs-cog"></span>
                </div>
                <div className="trip-service-content">
                  <h2><a href="services.html">Service</a></h2>
                  <p>Quality is our top concern</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="trip-service-box text-center">
                <div className="trip-service-icon">
                  <span className="bx bxs-group"></span>
                </div>
                <div className="trip-service-content">
                  <h2><a href="index-2.html">Team</a></h2>
                  <p>Having qualified experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why You Should Need Kairaa Section End */}

      {/* Collaborate Section */}
      <div className="collaborate-area positioning pt-4 pb-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xxl-4 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="hrdd-section-title wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
                <h1>Kairaa is Ready to Find a <span>Solution</span></h1>
              </div>
              <div className="collaborate-info">
                <p>
                  Kairaa is ready to find a solution for your innovative idea's.
                  Our team of engineers is experienced in a wide range of technologies
                  and can help you turn your vision into a reality.
                </p>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 wow animate fadeInUp">
                    <div className="collaborate-info-list">
                      <p><i className="bi bi-check"></i> Latest technologies</p>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 wow animate fadeInUp">
                    <div className="collaborate-info-list">
                      <p><i className="bi bi-check"></i> Quality tech services</p>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 wow animate fadeInUp">
                    <div className="collaborate-info-list">
                      <p><i className="bi bi-check"></i> Wide range of services</p>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 wow animate fadeInUp">
                    <div className="collaborate-info-list">
                      <p><i className="bi bi-check"></i> Customer experience</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hrrd-collaborate-btn-wrap wow animate fadeInUp">
                <a className="common-btn btn-hrrd-1" href="contact.html">Get a Quote</a>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 mobt-50">
              <div className="collaborate-img-wrap">
                <img src="assets/images/shape/collaborate-hrrd.png" alt="Collaboration" loading="lazy" />
                <div className="testimonial-cart">
                  <div className="testimonial-cart-people">
                    <h3>Jenifar Goz</h3>
                    <h6>CEO, Xavale</h6>
                  </div>
                  <p>Everyone please read these condition ...</p>
                  <i className="bx bxs-quote-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Collaborate Section End */}
      <div className="ag-newsletter-style bg-gradient-blue">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="ag-newsletter-wrap">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-7 col-md-10 text-center">
                  <h2 className="ag-section-title  my-0 py-2">
                    We Are Hiring!
                  </h2>
                  <p className="lead  mb-4">
                    Kairaa is looking for talented and passionate people to join us
                    in our mission to empower everyone through technology!
                  </p>
                  <div className="ag-hero-btn">
                  <a href="contact.html" className="common-btn text-white">join with Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
