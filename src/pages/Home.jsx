import React from 'react';
import SEO from '../components/SEO';
import { homeSeo } from '../data/mainPagesSeoData';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyFacilityCore from '../components/WhyFacilityCore';
import Solutions from '../components/Solutions';
import Industries from '../components/Industries';
import Features from '../components/Features';
import MobileApp from '../components/MobileApp';
import DemoCTA from '../components/DemoCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark flex flex-col font-sans overflow-x-hidden">
      {/* Declarative Dynamic SEO */}
      <SEO
        title="Facility Management Software in India | FacilityCore"
        description="FacilityCore is facility management software for managing preventive maintenance, assets, work orders, complaints, AMC, vendors and facility operations. Book a free demo."
        keywords="facility management software, facility management software India, facility management system, facility maintenance software, preventive maintenance software, asset management software, CMMS software, AMC management software"
      />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Section 1: Hero Banner */}
        <Hero />

        {/* Section 2: Why FacilityCore (About) */}
        <WhyFacilityCore />

        {/* Section 3: Solutions Suite */}
        <Solutions />

        {/* Section 4: Industries Verticals */}
        <Industries />

        {/* Section 5: Features Alternating Layout */}
        <Features />

        {/* Section 6: Mobile App Showcase */}
        <MobileApp />

      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default Home;
