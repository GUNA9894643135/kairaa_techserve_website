
import React, { useState, useEffect } from 'react';
import './Careers.css'; // Ensure the CSS file is in the correct location
import LoadingSpinner from './LoadingSpinner';
import Loader from './Loader';


export default function Careers() {
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



  return (
    
    
    <div className="careers-container">
      
      {/* Section Title */}
      <div className="row align-items-center text-center">
         <div class="breadcrumb-text text-center">
                <h1>Career</h1>
                <p><a href="index.html">Home</a> / Career</p>
              </div>
        <div className="col-xl-12 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="ch-section-title wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
            <div className="hrdd-section-title text-capitalize">
              
              <h1>Kairaa Has <span>Opportunities</span></h1>
            </div>
          </div>
        </div>
      </div>
     

      {/* Popular Jobs Slider */}
      <div className="container">
        <div className="row slide-wrapper-single mt-50">
          <div className="popular-job-slide owl-carousel">
            {[
              { title: 'Digital Marketing', description: 'SEO & SMM, Email, Content and Affiliate Marketing Handling' },
              { title: 'Back-end Developer', description: 'API, Database Handling,   Backend data Server Handling' },
              { title: 'Blochainck Developer', description: 'Development, Testing & Integration and server Handling' },
              { title: 'UI-UX Designer', description: 'Wireframe & Prototyping, Usability Testing and design' },
              { title: 'React Developer', description: 'Develop dynamic and responsive user interfaces using React.js' },
              { title: 'Front-end Developer', description: 'Build interactive and visually appealing front-end applications' },
               
            ].map((job, index) => (
              <div className="single-popular-job-item" key={index}>
                {/* Job Title */}
                <div className="program-time">
                  <span>{job.title}</span>
                </div>
                {/* Job Description */}
                <div className="popular-job-content">
                  <p>{job.description}</p>
                  <ul>
                    <li>
                      <i className="bi bi-clock"></i> Fulltime
                    </li>
                    <li>
                      <i className="bi bi-briefcase"></i> 1 Year
                    </li>
                  </ul>
                </div>
                {/* Apply Button */}
                <div className="popular-job-apply my-3 py-3">
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      document.getElementById('join').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Apply Now
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Platform Area */}
      <div className="platform-area pt-100 pb-100 mt-0">
        <div className="container">
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="platform-img">
                <img src="assets/images/platform-img.png" alt="Platform" loading="lazy" className="img-fluid" />
              </div>
            </div>

            {/* Content Section */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mobt-50">
              <div className="ch-section-title wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
                <h1>Watch How Our <br /> Platform <span className="title-mark title-mark-section">Works!</span></h1>
              </div>
              <div className="platform-work-wrap mt-50">
                {['Choose Job', 'Upload CV/Resume', 'Complete Apply'].map((step, index) => (
                  <div className="platform-work-box wow animate fadeInUp" data-wow-delay={`${(index + 1) * 100}ms`} data-wow-duration="1500ms" key={index}>
                    <div className="platform-icon">
                      <i className={`bi bi-${index === 0 ? 'search' : index === 1 ? 'file-earmark-arrow-up-fill' : 'file-check-fill'}`}></i>
                    </div>
                    <div className="platform-content">
                      <h3>{step}</h3>
                      <p>Competently foster backward-compatible alignments and multimedia-based resources.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Area */}
      <div className="-featuredarea positioning" id="join">
        <div className="container">
          {/* Section Title */}
          <div className="row">
            <div className="col-12">
              <div
                className="hrdd-section-title text-center wow animate fadeInDown"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <h1>
                  <span>Join</span> With Our Team
                </h1>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="row justify-content-center mt-50">
  <div
    className="col-lg-8 wow zoomIn animated"
    data-wow-delay="200ms"
    data-wow-duration="1500ms"
  >
  <div className="featured-box">
  <div className="featured-content py-4">
    <form id="contact-form" method="POST" className="contact-input">
      <div className="row g-4">
        {/* Name Input */}
        <div className="col-12 col-md-6">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>
        {/* Email Input */}
        <div className="col-12 col-md-6">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        {/* Mobile Input */}
        <div className="col-12 col-md-6">
          <input
            type="text"
            name="mobile"
            className="form-control"
            placeholder="Enter your mobile"
            required
          />
        </div>
        {/* Job Selection */}
        <div className="col-12 col-md-6">
          <select
            name="job"
            className="form-select"
            aria-label="Select Job"
            required
          >
            <option value="" disabled selected>
              Select Job
            </option>
            <option value="1">Digital Marketing</option>
            <option value="2">Back-end Developer</option>
            <option value="3">UI & UX Designer</option>
            <option value="4">Blockchain Developer</option>
            <option value="5">React Developer</option>
            <option value="6">Front-end Developer</option>
          </select>
        </div>
        {/* Experience Selection */}
        <div className="col-12 col-md-6">
          <select
            name="experience"
            className="form-select"
            aria-label="Select Experience"
            required
          >
            <option value="" disabled selected>
              Select Experience
            </option>
            <option value="1">Below 1 Year</option>
            <option value="2">1 to 3 Years</option>
            <option value="3">Above 3 Years</option>
          </select>
        </div>
        {/* Expected Salary Input */}
        <div className="col-12 col-md-6">
          <input
            type="text"
            name="salary"
            className="form-control"
            placeholder="Expected Salary"
            required
          />
        </div>
        {/* Resume Upload */}
        <div className="col-12">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupFile01">
              Upload Resume
            </label>
            <input
              type="file"
              name="resume"
              className="form-control"
              id="inputGroupFile01"
              required
            />
          </div>
        </div>
        {/* Submit Button */}
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">
            Apply Job
          </button>
        </div>
        {/* Form Message */}
        <p className="form-message"></p>
      </div>
    </form>
  </div>
</div>

  </div>
</div>

        </div>
      </div>
    </div>
  );
}
