import React from "react";
import SEO from "../components/SEO";
import { solutionsSeo } from "../data/mainPagesSeoData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import PlatformModules from "../components/PlatformModules";
import DetailedModules from "../components/DetailedModules";
import WorkflowSection from "../components/WorkflowSection";
import "../styles/SolutionsPage.css";

const SolutionsPage = () => {
  return (
    <div className="solutions-page">
      <SEO {...solutionsSeo} />
      <Navbar />
      <HeroSection
        backgroundImage="/solutionpageherosection.png"
        badge="SMART SOLUTIONS"
        title="Smart Solutions For Every Facility"
        description="Streamline facility operations with intelligent automation, compliance, and real-time visibility."
        breadcrumbItems={[
          { label: "Home", link: "/" },
          { label: "Solutions" }
        ]}
      />
      <DetailedModules />
      <WorkflowSection />
      <Footer />
    </div>
  );
};

export default SolutionsPage;
