import React from 'react';
import BlogCard from './BlogCard';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Footer from './Footer';
import HiringSection from './HiringSection';
import HeroSection from './HeroSection';

const App = () => {
  return (
    <div>
      <HeroSection /> {/* Add HeroSection here */}

      <div className="container">
        <div className="row">
          <BlogCard
            imageUrl="https://miro.medium.com/max/720/1*BWmE5bD0YD1LXdy_Eh5uxA.jpeg"
            categories={['Social', 'Android']}
            title="Telegram releases new feature; transforms usernames to digital assets"
          />
          <BlogCard
            imageUrl="https://miro.medium.com/max/700/1*yNHnSIy0j2YOaIyovShVEg.jpeg"
            categories={['Technologies', 'Updates']}
            title="A decentralized application (DApp, dApp, Dapp, or dapp)"
          />
        </div>
      </div>

      <div className="contact-area mt-100 mt-sm-4">
        <div className="container">
          <div className="row align-items-center">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>

      <HiringSection />

      <Footer />
    </div>
  );
};

export default App;
