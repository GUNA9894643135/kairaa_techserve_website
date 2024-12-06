import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Contact.css';
import toast from 'react-hot-toast';
import LoadingSpinner from './LoadingSpinner';
import Loader from './Loader';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay (e.g., fetching data or loading assets)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay for demo
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  if (isLoading) {
    return <Loader />; // Show the spinner while loading
  }

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 12.9716,
    lng: 77.5946,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const contactData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus('Message sent successfully!');
        toast.success("Message sent successfully!");
        // Optionally reset form fields
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Error sending message');
      }
    } catch (error) {
      setStatus('Error sending message');
      console.error(error);
    }
  };

  // Apply different styles for error and success messages
  const statusStyle = status?.includes('Error') ? { color: 'red' } : { color: 'green' };

  return (
    <>
      <div className="contact-area mt-100 mt-sm-4">
      <div className="contact-breadcrumb text-center">
  <h1>Contact Us</h1>
  <p><a href="/">Home</a> / Contact Us</p>
</div>

        <div className="container">
          <div className="row">
            {/* Google Map Section (Left side) */}
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 map-container animate-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.819263592393!2d78.1572177741959!3d9.948990890153867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c57026ac87a7%3A0xb0568da427fa468a!2sKairaa%20Tech%20serve%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1732534972626!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kairaa Tech Serve Pvt Ltd"
              ></iframe>
            </div>

            {/* Contact Form Section (Right side) */}
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <form id="contact-form" onSubmit={handleSubmit} className="contact-input">
                <div className="contact-title mb-4">
                  <h1>Send Us A Message</h1>
                </div>
                {/* Status Message with Dynamic Style */}
                {status && <p style={statusStyle} className="mt-3">{status}</p>}
                <div className="row g-3">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="form-input"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="form-input"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message..."
                      className="form-textarea"
                    ></textarea>
                  </div>
                  <div className="contact-btn-wrap mt-3">
                    <button type="submit" className="common-btn btn-hrrd-1">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="row mt-4">
            <div className="col-12">
              <div className="contact-info-wrap">
                <div className="single-contact-info">
                  <div className="contact-title">
                    <h2>Contact Information</h2>
                  </div>
                  <div className="contact-details">
                    <div className="contact-details-title">
                      <h3>Contact Info</h3>
                    </div>
                    <div className="contact-details-info">
                      <ul>
                        <li>
                          <i className="bi bi-envelope"></i>
                          <a href="mailto:support@kairaatechserve.com">
                            support@kairaatechserve.com
                          </a>
                        </li>
                        <li>
                          <i className="bi bi-telephone"></i>
                          <a href="tel:+917092771133">+91 7092 771133</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="contact-details">
                    <div className="contact-details-title">
                      <h3>Office Address</h3>
                    </div>
                    <div className="contact-details-info">
                      <ul>
                        <li>
                          <i className="bi bi-geo-alt-fill"></i>
                          <ul>
                            <li>Kairaa Techserve Pvt. Ltd.</li>
                            <li>Eswari Nagar, Gowrivakkam,</li>
                            <li>Chennai - 600073</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
