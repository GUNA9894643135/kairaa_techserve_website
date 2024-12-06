import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row justify-content-between">
          {/* Services Section */}
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links list-unstyled">
              <li><Link to="/services" className="text-light">Blockchain</Link></li>
              <li><Link to="/services" className="text-light">App Development</Link></li>
              <li><Link to="/services" className="text-light">Web Development</Link></li>
              <li><Link to="/services" className="text-light">Crypto Exchange</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links list-unstyled">
              <li><Link to="/about" className="text-light">About</Link></li>
              <li><Link to="/terms" className="text-light">Terms</Link></li>
              <li><Link to="/privacy-policy" className="text-light">Privacy Policy</Link></li>
              <li><Link to="/careers" className="text-light">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-contact-links list-unstyled">
              <li><i className="bi bi-telephone"></i> +91 7092774077</li>
              <li><i className="bi bi-envelope"></i> support@kairaatechserve.com</li>
              <li><i className="bi bi-geo-alt"></i> Kairaa Techserve Pvt Ltd, Chennai - 600073</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row">
          <div className="col-12 text-center mt-3">
            <p className="footer-bottom-text">
              &copy; 2024 <Link to="/" className="text-light">Kairaa Techserve</Link>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
