import React from 'react';
import './NewsletterSection.css'; // Assuming you add the CSS styles here

const NewsletterSection = () => {
  return (
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
  );
};

export default NewsletterSection;
