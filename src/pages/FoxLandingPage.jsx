import React from 'react';
import FoxHeader from '../components/FoxHeader';
import FoxHero from '../components/FoxHero';
import ServicesGrid from '../components/ServicesGrid';
import Analytics from '../components/Analytics';
import Features from '../components/Features';
import Footer from '../components/Footer';

const FoxLandingPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="fox-landing-page">
      <FoxHeader onSearch={setSearchTerm} />
      <main>
        <FoxHero />
        <div style={{ marginTop: '100px' }}>
          <ServicesGrid searchTerm={searchTerm} />
          <Analytics />
          <Features />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FoxLandingPage;
