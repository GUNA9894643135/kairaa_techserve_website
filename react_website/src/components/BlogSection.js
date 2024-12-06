import React from 'react';
import './BlogSection.css'; // Assuming you add the CSS styles here

const BlogSection = () => {
  return (
    <div className="kts-blog mt-50">
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-lg-6">
            <span className="kts-title-tag fs-5 fw-bold blog-title px-3 py-1">Recent Post</span>
            <h1 className="my-3">
              Our Latest <br />
              News & Blog
            </h1>
          </div>
          <div className="col-lg-6">
            <div className="section-text">
              <p className="px-3">
                Keep looking at our blog to get the latest updates on our services and projects. You will find everything from blog posts about our products and services to customer case studies.
              </p>
            </div>
          </div>
        </div>

        <div className="row gy-4 mt-3">
          {/* Blog Post 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="ag-blog-card">
              <div className="blog-thumb">
                <a href="blog-details.html">
                  <img
                    src="https://bernardmarr.com/img/What%20is%20the%20Difference%20Between%20Blockchain%20And%20Bitcoin.png"
                    alt="Bitcoin Post" loading="lazy" className="img-fluid"/>
                </a>
              </div>
              <div className="blog-disc p-4">
                <ul className="blog-meta d-flex flex-wrap gap-2">
                  <li><span className="badge bg-primary">Bitcoin</span></li>
                  <li><span className="badge bg-secondary">Crypto</span></li>
                </ul>
                <h3 className="blog-title">
                  <a href="blog-details.html">Bitcoin Will Be The Winner: Michael Saylor on the FTX Collapse</a>
                </h3>
                <div className="blog-btn">
                  <a href="blog-details.html">Read More <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="ag-blog-card">
              <div className="blog-thumb">
              <a href="blog-details">
                  <img src="https://miro.medium.com/max/720/1*BWmE5bD0YD1LXdy_Eh5uxA.jpeg" alt="" loading="lazy" />
                </a>
              </div>
              <div className="blog-disc p-4">
                <ul className="blog-meta d-flex flex-wrap gap-2">
                  <li><span className="badge bg-primary">Social</span></li>
                  <li><span className="badge bg-secondary">Android</span></li>
                </ul>
                <h3 className="blog-title">
                  <a href="blog-details.html">Telegram releases new feature; transforms usernames to digital </a>
                </h3>
                <div className="blog-btn">
                  <a href="blog-details.html">Read More <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="ag-blog-card">
              <div className="blog-thumb">
              <a href="blog-details">
                  <img src="https://miro.medium.com/max/700/1*yNHnSIy0j2YOaIyovShVEg.jpeg" alt="" loading="lazy" />
                </a>
              </div>
              <div className="blog-disc p-4">
                <ul className="blog-meta d-flex flex-wrap gap-2">
                  <li><span className="badge bg-primary">Technologies</span></li>
                  <li><span className="badge bg-secondary">Updates</span></li>
                </ul>
                <h3 className="blog-title">
                  <a href="blog-details.html">A decentralized application (DApp, dApp, Dapp, or dapp)</a>
                </h3>
                <div className="blog-btn">
                  <a href="blog-details.html">Read More <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
