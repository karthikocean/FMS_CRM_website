import React from "react";
import SEO from "../components/SEO";
import { industriesSeo } from "../data/mainPagesSeoData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import IndustriesGrid from "../components/IndustriesGrid";
import IndustryScroller from "../components/IndustryScroller";
import IndustriesMarquee from "../components/IndustriesMarquee";
import IndustryBenefits from "../components/IndustryBenefits";
import IndustryTestimonials from "../components/IndustryTestimonials";
import "../styles/IndustriesPage.css";

/**
 * IndustriesPage - Redesigned to show FacilityCore's industry solutions.
 * Incorporates three updated modules: IndustryScroller, IndustriesMarquee, and IndustryTestimonials.
 */
const IndustriesPage = () => {
  return (
    <div className="industries-page">
      <SEO
        title="Industry Facility Management Software | FacilityCore"
        description="FacilityCore provides industry-specific facility management software for commercial offices, healthcare, manufacturing, education, and public infrastructure."
        keywords="industry facility solutions, specialized maintenance software, multi-sector cafm software"
      />
      <Navbar />

      <HeroSection
        backgroundImage="/solutionpageherosection.png"
        badge="INDUSTRY SOLUTIONS"
        title="Industry-Specific Facility Management Solutions"
        description="FacilityCore adapts to the unique operational requirements of every industry, helping organizations improve efficiency, reduce costs, and deliver exceptional experiences."
        breadcrumbItems={[
          { label: "Home", link: "/" },
          { label: "Industries" }
        ]}
      />

      <IndustriesGrid />

      <IndustryScroller />

      <IndustriesMarquee />

      <IndustryTestimonials />

      <Footer />
    </div>
  );
};

export default IndustriesPage;
