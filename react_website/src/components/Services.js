import React, { useState, useEffect } from 'react';
import "./Services.css";
import Loader from './Loader';

const services = [
  
  
  {
    title: "Blockchain Development",
    link: "Blockchain Development",
    description:
      "Utilize blockchain technology to innovate and automate. We can assist you in developing scalable, secure, and individualized blockchain solutions.",
    normalImage: "assets/images/Blackchain_images.jpg",
    hoverImage: "assets/images/Blackchain_images.jpg",
    iconImage: "assets/icons/Blackchain.png",
  },
  {
    title: "Fullstack Web Development",
    link: "fullstack web developer",
    description:
      "In order to meet the demands of small businesses, Kairaa Techserve provides excellent and reasonably priced web development services and the developer.",
    normalImage: "assets/images/12.jpeg",
    hoverImage: "assets/images/12.jpeg",
    iconImage: "assets/icons/web-development.png",
  },
  {
    title: "Android & IOS Applications",
    link: "Android & IOS Applications",
    description:
      "To fully comprehend our client's demands and create an app that satisfies them, we work directly with them.",
    normalImage: "assets/images/Android_and_ios_developer.jpg",
    hoverImage: "assets/images/Android_and_ios_developer.jpg",
    iconImage: "assets/icons/ios.png",
  },
  {
    title: "Crypto Payment Gateway",
    link: "Crypto Payment Gateway",
    description:
      "Individuals can send money to one another securely and transparently using the crypto payment gateway offered by Kairaa.",
    normalImage: "assets/images/15.jpg",
    hoverImage: "assets/images/15.jpg",
    iconImage: "assets/icons/crypto.png",
  },
  {
    title: "Crypto Creation & Exchange",
    link: "Crypto Creation & Exchange",
    description:
      "With the help of a crypto exchange, you may instantly convert one digital currency into any other digital currencies.",
    normalImage: "assets/images/14.jpg",
    hoverImage: "assets/images/14.jpg",
    iconImage: "assets/icons/2.png",
  },
  {
    title: "NFT Projects",
    link: "NFT Projects",
    description:
      "A project must provide something unique and imaginative in order to differentiate itself from the rest of the competitors.",
    normalImage: "assets/images/NFT_Projects.jpg",
    hoverImage: "assets/images/NFT_Projects.jpg",
    iconImage: "assets/icons/nft.png",
  },
];

const ServiceCard = ({ service }) => {
  
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
  const { title, link, description, normalImage, hoverImage, iconImage } = service;
  

  return (
    <div className="col-lg-4 col-md-6">
      
      <div className="service-two__item text-center wow fadeInUp animated space">
        {/* Normal State */}
        <div className="service-two__item__normal">
          <div className="service-two__item__normal__content">
            <div className="service-two__item__normal__icon">
              <img
                src={iconImage}
                alt={`${title} Icon`}
                style={{ width: "80px", height: "80px" }}
              />
            </div>
            <h3 className="service-two__item__normal__title">
              <a href={link}>{title}</a>
            </h3>
            <p className="service-two__item__normal__text">{description}</p>
          </div>
          <div className="service-two__item__normal__image">
            <img src={normalImage} alt={title} />
          </div>
        </div>

        {/* Hover State */}
        <div className="service-two__item__hover">
          <div className="service-two__item__hover__content">
            <h3 className="service-two__item__hover__title">
              <a href={link}>{title}</a>
            </h3>
            <p className="service-two__item__hover__text">{description}</p>
            <div className="service-two__item__hover__icon">
              <img
                src={iconImage}
                alt={`${title} Icon`}
                style={{ width: "70px", height: "70px" }}
              />
            </div>
          </div>
          <div className="service-two__item__hover__image">
            <img src={hoverImage} alt={title} />
            <a className="service-two__item__hover__rm" href={link}>
              <i className="icofont-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section
      className="service-two service-two--page"
      style={{ padding: "0px 0px 150px 0px" }}
    >
      <div className="container">
      <div className="service-breadcrumb text-center">
  <h1>Service</h1>
  <p><a href="/">Home</a> / Service</p>
</div>

        {/* Section Title */}
        <div className="sec-title-two text-center"></div>
        <div className="row gutter-y-30">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
