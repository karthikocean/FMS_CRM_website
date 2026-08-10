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
        title="Smart Facility Management Software CMMS | FacilityCore"

        description="FacilityCore is a smart facility management software and CMMS platform with a facility management system to automate maintenance and track assets."

        keywords="facility management software, facility management system, CMMS software"
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
