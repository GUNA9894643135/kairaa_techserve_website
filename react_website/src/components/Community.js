import React, { useState, useEffect } from 'react';
import './Community.css';
import LoadingSpinner from './LoadingSpinner';
import Loader from './Loader';


export default function Community() {
  
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
    <div>
      {/* Blog Section */}
      <div className="blog-post-area pt-50">
        <div className="hrdd-section-title text-center text-capitalize">
          <h1>Most Viewed <span>Blogs</span></h1>
        </div>
        <div className="container pt-100">
          <div className="row">
            {/* Main Blog Section */}
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="row align-items-center g-4 g-lg-4 g-md-4 g-sm-4 g-xl-5">
                <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="blog-post-wrap">
                    <h1>
                      <a href="#">Creating A Future Of Possibilities: Kairaa Tech Serve,..</a>
                    </h1>
                    <ul>
                      <li>
                        <i className="bi bi-person-fill"></i>
                        <a href="#">Outlookindia</a>
                      </li>
                      <li>
                        <i className="bi bi-calendar3"></i>
                        <a href="#">19 Dec, 2022</a>
                      </li>
                    </ul>
                    <p>
                      At Kairaa Tech Serve, Agilan and his team believes in pushing boundaries and providing solutions in
                      this ever-changing business world.
                    </p>
                    <a className="blog-post-btn" target="_blank"
                      href="https://www.outlookindia.com/business-spotlight/-creating-a-future-of-possibilities-kairaa-tech-serve-the-brainchild-of-a-20-years-veteran-in-share-market-brings-revolutionary-cryptocurrency-exchange-nft-marketplace--news-246201">Read
                      More <i className="bx bx-chevron-right"></i></a>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="blog-post-img">
                    <a href="#"><img src="assets/images/blog/outlook.jpg" alt="" loading="lazy" /></a>
                  </div>
                </div>

                {/* Additional Blog Posts 1 */}
                <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="blog-post-wrap">
                    <h1>
                      <a href="#">Telegram; transforms usernames to digital assets</a>
                    </h1>
                    <ul>
                      <li>
                        <i className="bi bi-person-fill"></i>
                        <a href="#">Kairaa techserve</a>
                      </li>
                      <li>
                        <i className="bi bi-calendar3"></i>
                        <a href="#">12 Nov, 2022</a>
                      </li>
                    </ul>
                    <p>
                      Telegram has announced a new feature that will transform usernames into digital assets. With this
                      update, users will be able to store their usernames securely and access them from any device.
                    </p>
                    <a className="blog-post-btn" target="_blank"
                      href="https://medium.com/@Kairaatechserve/telegram-releases-new-feature-transforms-usernames-to-digital-assets-805c889c716c">Read
                      More <i className="bx bx-chevron-right"></i></a>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="blog-thumb">
                    <a href="blog-details">
                      <img src="https://miro.medium.com/max/720/1*BWmE5bD0YD1LXdy_Eh5uxA.jpeg" alt="" loading="lazy" />
                    </a>
                  </div>
                </div>
              </div>


              {/* Additional blog post 2 */}

              <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="blog-post-wrap">
                  <h1>
                    <a href="#">Mastercard has added seven blockchain startups to its crypto expansion
                      plan.</a>
                  </h1>
                  <ul>
                    <li>
                      <i class="bi bi-person-fill"></i>
                      <a href="#">Kairaa techserve</a>
                    </li>
                    <li>
                      <i class="bi bi-calendar3"></i>
                      <a href="#">02 Nov, 2022</a>
                    </li>
                  </ul>
                  <p>
                    Among the startups joining the most recent Mastercard Start Path initiative are Singapore’s Digital
                    Treasures Center and cryptocurrency gateway service Fasset.
                  </p>
                  <a class="blog-post-btn" target="_blank"
                    href="https://medium.com/@Kairaatechserve/mastercard-has-added-seven-blockchain-startups-to-its-crypto-expansion-plan-44b957694076">Read
                    More <i class="bx bx-chevron-right"></i></a>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="blog-post-img">
                  <a href="#"><img src="assets/images/blog/blog-2.png" alt="" loading="lazy" /></a>
                </div>
              </div>

              <div class="blog-post-wrap">
                  <h1>
                    <a href="#">US customers will be able to trade and store bitcoin and ether through
                      MoneyGram.</a>
                  </h1>
                  <ul>
                    <li>
                      <i class="bi bi-person-fill"></i>
                      <a href="#">Kairaa techserve</a>
                    </li>
                    <li>
                      <i class="bi bi-calendar3"></i>
                      <a href="#">03 Nov, 2022</a>
                    </li>
                  </ul>
                  <p>
                    Users of MoneyGram in the US will soon be able to keep and trade major cryptocurrencies including
                    Bitcoin, Ether, and Litecoin.
                  </p>
                  <a class="blog-post-btn" target="_blank" href="https://medium.com/@Kairaatechserve/us-customers-will-be-able-to-trade-and-store-bitcoin-and-ether-through-moneygram-b89b6c1eb074">Read
                    More <i class="bx bx-chevron-right"></i></a>
                </div>


              {/* Pagination */}
              <div className="row mt-75">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  {/* <div className="pagination-wrap">
                    <ul>
                      <li>
                        <a href="#"><i className="bi bi-chevron-left"></i></a>
                      </li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li>
                        <a href="#"><i className="bi bi-chevron-right"></i></a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>



            {/* Sidebar with Recent Posts and Comments */}
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mobt-50">
            <div class="cart-wrap">
              <div class="single-cart">
                <div class="cart-title">
                  <h2>Recent Posts</h2>
                </div>
                <div class="cart-post">
                  <div class="cart-post-img">
                    <a href="#"><img src="assets/images/blog/cart-post-1.png" alt="" loading="lazy"/></a>
                  </div>
                  <div class="cart-post-content">
                    <h4>
                      <a href="#">Top project management software.</a>
                    </h4>
                    <p>February 22, 2021</p>
                  </div>
                </div>
                <div class="cart-post">
                  <div class="cart-post-img">
                    <a href="#"><img src="assets/images/blog/cart-post-2.png" alt="" loading="lazy"/></a>
                  </div>
                  <div class="cart-post-content">
                    <h4>
                      <a href="#">What graphic designers should do?</a>
                    </h4>
                    <p>February 22, 2021</p>
                  </div>
                </div>
                <div class="cart-post">
                  <div class="cart-post-img">
                    <a href="#"><img src="assets/images/blog/cart-post-3.png" alt="" loading="lazy"/></a>
                  </div>
                  <div class="cart-post-content">
                    <h4>
                      <a href="#">13 basic mobile UI patterns to know about.</a>
                    </h4>
                    <p>February 22, 2021</p>
                  </div>
                </div>
                <div class="cart-post">
                  <div class="cart-post-img">
                    <a href="#"><img src="assets/images/blog/cart-post-4.png" alt="" loading="lazy"/></a>
                  </div>
                  <div class="cart-post-content">
                    <h4>
                      <a href="#">What graphic designers should do?</a>
                    </h4>
                    <p>February 22, 2021</p>
                  </div>
                </div>
                <div class="cart-post">
                  <div class="cart-post-img">
                    <a href="#"><img src="assets/images/blog/cart-post-5.png" alt="" loading="lazy"/></a>
                  </div>
                  <div class="cart-post-content">
                    <h4>
                      <a href="#">Top project management software.</a>
                    </h4>
                    <p>February 22, 2021</p>
                  </div>
                </div>
              </div>
              <div class="single-cart">
                <div class="cart-title">
                  <h2>Recent Comments</h2>
                </div>
                <div class="comment-box">
                  <h4>
                    <a href="#">Shahriar_Rafi <span>on</span> Branding involves
                      developing strategy to create a point.</a>
                  </h4>
                </div>
                <div class="comment-box">
                  <h4>
                    <a href="#">Nafis_Iqbal <span>on</span> Conversion rate the sales
                      funnel optimization.</a>
                  </h4>
                </div>
                <div class="comment-box">
                  <h4>
                    <a href="#">Jennifer_Luisesei <span>on</span> Young Guns Reflections:
                      Paul Felon.</a>
                  </h4>
                </div>
                <div class="comment-box">
                  <h4>
                    <a href="#">Shaon_Khan <span>on</span> Bring to the table win win
                      survival strategies.</a>
                  </h4>
                </div>
                <div class="comment-box">
                  <h4>
                    <a href="#">Israfil_Islam <span>on</span> Most designs powerful
                      features, to build anything.</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>



          </div>
        </div>
      </div>







      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div
              className="hrdd-section-title text-center wow animate fadeInDown container"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
              style={{
                visibility: "visible",
                animationDuration: "1500ms",
                animationDelay: "100ms",
              }}
            >
              <h1>
                Our <span>Social</span> Media
              </h1>
              <p className="latest-text">
                Kairaa is a tech service that connects people with the latest
                developments in technology. It provides end-to-end solutions in
                areas such as software development, AI, and IoT (Internet of
                Things) to help businesses and users achieve their goals.
              </p>
            </div>
            {/* Filters */}
            <div className="work-link text-center">
              <ul>
                <li className="filter active" data-filter="all">
                  All
                </li>
                <li className="filter" data-filter=".ins">
                  Instagram
                </li>
                <li className="filter" data-filter=".you">
                  YouTube
                </li>
                <li className="filter" data-filter=".twit">
                  Twitter
                </li>
                <li className="filter" data-filter=".med">
                  Medium
                </li>
                <li className="filter" data-filter=".fac">
                  Facebook
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Media Content */}
        <div className="row work-mixi mt-50" id="MixItUp66503A">
          {/* Instagram Section */}
          <div
            className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mix ins"
            style={{ display: "inline-block" }}
          >
            <div className="latest-work-img-wrap">
              <iframe
                className="instagram-media instagram-media-rendered"
                src="https://www.instagram.com/p/ClX7HSig6aT/embed/"
                allowTransparency="true"
                allowFullScreen={true}
                frameBorder="0"
                height="541"
                scrolling="no"
                style={{
                  background: "white",
                  maxWidth: "540px",
                  width: "calc(100% - 2px)",
                  borderRadius: "3px",
                  border: "1px solid rgb(219, 219, 219)",
                  boxShadow: "none",
                  display: "block",
                  margin: "0 0 12px",
                  minWidth: "326px",
                  padding: "0",
                }}
              ></iframe>
            </div>
          </div>

          {/* YouTube Section */}
          <div
            className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mix you"
            style={{ display: "inline-block" }}
          >
            <div className="latest-work-img-wrap">
              <iframe
                width="100%"
                height="550px"
                src="https://www.youtube.com/embed/UTSglJPEUHk"
                title="Launch of on-chain technology by Opensea to enforce NFT royalties!!!"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Twitter Section */}
          <div
            className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mix twit"
            style={{ display: "inline-block" }}
          >
            <div className="latest-work-img-wrap">
              <div
                className="twitter-tweet twitter-tweet-rendered"
                style={{
                  display: "flex",
                  maxWidth: "550px",
                  width: "100%",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <iframe
                  src="https://platform.twitter.com/embed/Tweet.html?dnt=false&id=1596030259316805633"
                  allowTransparency="true"
                  allowFullScreen={true}
                  frameBorder="0"
                  style={{
                    position: "static",
                    visibility: "visible",
                    width: "336px",
                    height: "524px",
                    display: "block",
                    flexGrow: "1",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      );


      {/* Newsletter Section */}
      <div class="ag-newsletter-style bg-blue-transparent">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="ag-newsletter-wrap">
                <div class="row justify-content-center">
                  <div class="col-xl-5 col-lg-7 col-md-10 text-center">
                    <h2 class="ag-section-title text-blue my-0 py-2">
                      Connect With Our Community!
                    </h2>
                    <p class="lead mb-4">
                      Connect with our community to learn about the latest
                      developments, receive support, and meet other Kairaa Tech
                      serve fans. Join us right now!
                    </p>
                    <div class="ag-hero-btn">
                      <a href="https://www.facebook.com/Kairaa.tech" target="_blank">
                        <span class="bi bi-facebook fs-2 text-blue mx-2"></span></a>
                      <a href="https://www.instagram.com/kairaatechserve/" target="_blank">
                        <span class="bi bi-instagram fs-2 text-red-light mx-2"></span></a>
                      <a href="https://twitter.com/kairaa_tech" target="_blank">
                        <span class="bi bi-twitter fs-2 text-primary mx-2"></span></a>
                      <a href="https://www.youtube.com/@kairaatech1712" target="_blank"><span class="bi bi-youtube fs-2 text-red mx-2"></span></a>

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
}
