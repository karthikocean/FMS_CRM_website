import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCheckCircle, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { commercialRealEstateData, seoData } from "../data/industriesdetailspage";
import "../styles/industriesdetailspage.css";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const IndustriesDetailsPage = () => {
  const data = commercialRealEstateData;

  return (
    <div className="ind-details-page">
      {/* Declarative SEO Metadata via React Helmet Async */}
      <Helmet>
        {/* Title */}
        <title>Commercial Real Estate Facility Management Software | FacilityCore</title>

        {/* Standard Metadata */}
        <meta
          name="description"
          content="Manage commercial buildings, office towers, retail spaces, and mixed-use properties with FacilityCore's smart facility management software. Automate maintenance, asset management, inspections, visitors, vendors, and compliance."
        />
        <meta
          name="keywords"
          content="Commercial Real Estate Facility Management Software, Commercial Property Management Software, Building Maintenance Software, Commercial Building Management System, Facility Management Software India, Commercial Asset Management Software, Property Maintenance Software, CMMS for Commercial Buildings, CAFM Software, Commercial Property Operations, Tenant Management Software, Visitor Management System, Vendor Management, Preventive Maintenance, Work Order Management, Asset Tracking Software, Compliance Management, Building Operations Platform"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://facilitycore.in/industries/commercial-real-estate" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Commercial Real Estate Facility Management Software | FacilityCore" />
        <meta
          property="og:description"
          content="Manage commercial buildings, office towers, retail spaces, and mixed-use properties with FacilityCore's smart facility management software. Automate maintenance, asset management, inspections, visitors, vendors, and compliance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://facilitycore.in/industries/commercial-real-estate" />
        <meta property="og:image" content="https://facilitycore.in/CommercialBuildingimg.png" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Commercial Real Estate Facility Management Software | FacilityCore" />
        <meta
          name="twitter:description"
          content="Manage commercial buildings, office towers, retail spaces, and mixed-use properties with FacilityCore's smart facility management software. Automate maintenance, asset management, inspections, visitors, vendors, and compliance."
        />
        <meta name="twitter:image" content="https://facilitycore.in/CommercialBuildingimg.png" />

        {/* JSON-LD Schemas (WebPage, BreadcrumbList, SoftwareApplication, FAQPage, Organization) */}
        {seoData.schemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <HeroSection
        badge={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        backgroundImage={data.hero.backgroundImage}
        breadcrumbItems={[
          { label: "Home", link: "/" },
          { label: "Industries", link: "/industries" },
          { label: "Commercial Real Estate" }
        ]}
      />

      {/* Key Metrics / Stats Section */}
      <section className="ind-stats-section" aria-label="Key Operational Statistics">
        <div className="ind-stats-container">
          <motion.div
            className="ind-stats-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {data.stats.map((stat, i) => (
              <motion.div key={i} className="ind-stat-card" variants={fadeUp}>
                <div className="ind-stat-icon" aria-hidden="true">{stat.icon}</div>
                <div>
                  <div className="ind-stat-number">{stat.value}</div>
                  <div className="ind-stat-label">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ENTERPRISE PROPERTY OPERATIONS SECTION */}
      <section className="ind-overview-section" aria-label="Property Operations Overview">
        <div className="ind-overview-container">
          <div className="ind-overview-grid">

            {/* Left Column on Desktop (50%) */}
            <motion.div
              className="ind-overview-img-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <img
                src={data.overview.image}
                alt={data.overview.imageAlt}
                loading="lazy"
                className="ind-overview-img"
              />
            </motion.div>

            {/* Right Column on Desktop (50%) */}
            <motion.div
              className="ind-overview-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="ind-overview-badge-wrapper">
                <span className="ind-section-badge">
                  {data.overview.badgeIcon} {data.overview.badge}
                </span>
              </div>

              <h2 className="ind-overview-title">
                {data.overview.title}
              </h2>

              <p className="ind-overview-subtitle">{data.overview.subtitle}</p>

              <p className="ind-overview-body">{data.overview.content}</p>

              {/* 4 Feature Highlight Cards (2x2 Grid) */}
              <div className="ind-overview-cards-grid">
                {data.overview.highlights.map((hl, i) => (
                  <div key={i} className="ind-overview-card">
                    <div className="ind-overview-card-header">
                      <div className="ind-overview-card-icon" aria-hidden="true">
                        {hl.icon}
                      </div>
                      <h3 className="ind-overview-card-title">{hl.title}</h3>
                    </div>
                    <p className="ind-overview-card-desc">{hl.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Challenges Addressed Section */}
      <section className="ind-challenges-section" aria-label="Key Industry Pain Points">
        <div className="ind-challenges-container">
          <div className="ind-challenges-header">
            <span className="ind-section-badge">
              {data.challengesBadgeIcon} {data.challengesBadge}
            </span>
            <h2 className="ind-overview-title">
              Key Industry Pain Points We Overcome
            </h2>
          </div>
          <motion.div
            className="ind-challenges-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.challenges.map((ch, i) => (
              <motion.div key={i} className="ind-challenge-card" variants={fadeUp}>
                <div className="ind-challenge-icon" aria-hidden="true">{ch.icon}</div>
                <div>
                  <h3 className="ind-challenge-title">{ch.title}</h3>
                  <p className="ind-challenge-desc">{ch.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities & Modules */}
      <section className="ind-solutions-section" aria-label="Purpose-Built Modules">
        <div className="ind-solutions-container">
          <div className="ind-solutions-header">
            <span className="ind-section-badge">
              {data.capabilitiesBadgeIcon} {data.capabilitiesBadge}
            </span>
            <h2 className="ind-overview-title">
              Purpose-Built Modules for Real Estate FM
            </h2>
          </div>
          <div className="ind-solutions-list">
            {data.solutions.map((sol, i) => (
              <motion.div
                key={i}
                className="ind-solution-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="ind-solution-icon-box" aria-hidden="true">{sol.icon}</div>
                <div>
                  <span className="ind-solution-badge-text">{sol.badge}</span>
                  <h3 className="ind-solution-title">{sol.title}</h3>
                  <p className="ind-solution-desc">{sol.description}</p>
                  <div className="ind-solution-highlights">
                    {sol.highlights.map((pt, idx) => (
                      <div key={idx} className="ind-highlight-point">
                        <FiCheckCircle aria-hidden="true" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="ind-features-section" aria-label="Feature Highlights">
        <div className="ind-features-container">
          <div className="ind-solutions-header">
            <span className="ind-section-badge">
              {data.featuresBadgeIcon} {data.featuresBadge}
            </span>
            <h2 className="ind-overview-title">
              Built to Empower Property & FM Teams
            </h2>
          </div>
          <motion.div
            className="ind-features-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.keyFeatures.map((feat, i) => (
              <motion.div key={i} className="ind-feature-card" variants={fadeUp}>
                <div className="ind-feature-icon" aria-hidden="true">{feat.icon}</div>
                <h3 className="ind-feature-name">{feat.name}</h3>
                <p className="ind-feature-desc">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COMPACT CONVERSION-FOCUSED ENTERPRISE CTA SECTION */}
      <section className="ind-cta-section" aria-label="Get Started Call to Action">
        <div className="ind-cta-glow-1" aria-hidden="true"></div>
        <div className="ind-cta-glow-2" aria-hidden="true"></div>

        <div className="ind-cta-container">
          <motion.div
            className="ind-cta-glass-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="ind-cta-rocket-badge" aria-hidden="true">
              {data.cta.icon}
            </div>

            <h2 className="ind-cta-title">{data.cta.title}</h2>
            <p className="ind-cta-desc">{data.cta.description}</p>

            <div className="ind-cta-buttons">
              <a
                href="https://admin.facilitycore.in/register"
                target="_blank"
                rel="noopener noreferrer"
                className="ind-btn-primary"
              >
                Get Started Free <FiArrowRight aria-hidden="true" />
              </a>
              <Link to="/industries" className="ind-btn-secondary">
                <FiArrowLeft aria-hidden="true" /> Back to All Industries
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustriesDetailsPage;
