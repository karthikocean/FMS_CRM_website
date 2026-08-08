import React from "react";
import SEO from "../components/SEO";
import { pricingSeo } from "../data/mainPagesSeoData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AdditionalCharges from "../components/AdditionalCharges";
import IndividualModules from "../components/IndividualModules";
import FMCompanyPackages from "../components/FMCompanyPackages";
import "../styles/PricingPage.css";

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <SEO
        title="Facility Management Software Pricing | FacilityCore"
        description="Explore transparent pricing plans for FacilityCore software. Compare scalable facility management packages designed for teams and enterprises of all sizes."
        keywords="facility software pricing, cmms subscription plans, cafm software cost"
      />
      <Navbar />

      <HeroSection
        backgroundImage="/solutionpageherosection.png"
        badge="PRICING PLANS"
        title="Simple, Transparent Pricing"
        description="Choose the right FacilityCore plan for your business, property or facility management operations."
        breadcrumbItems={[
          { label: "Home", link: "/" },
          { label: "Pricing" }
        ]}
      />

      <FMCompanyPackages />

      <IndividualModules />

      <Footer />
    </div>
  );
};

export default PricingPage;
