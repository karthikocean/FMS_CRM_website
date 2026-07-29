import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiArrowRight,
  FiArrowLeft,
  FiCheck,
  FiHelpCircle,
  FiGrid,
  FiShield,
  FiBarChart2,
  FiLink
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import {
  industrialFacilitiesData,
  seoData
} from "../data/IndustrialFacilitiesData";
import "../styles/ResidentialCommunitiesPage.css";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const IndustrialFacilitiesPage = () => {
  const data = industrialFacilitiesData;

  return (
    <div className="ind-details-page">
      {/* Declarative SEO Metadata via React Helmet Async */}
      <Helmet>
        <title>{seoData.metaTitle}</title>
        <meta name="description" content={seoData.metaDescription} />
        <meta name="keywords" content={seoData.metaKeywords} />
        <meta name="robots" content={seoData.robots} />
        <link rel="canonical" href={seoData.canonical} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:type" content={seoData.ogType} />
        <meta property="og:url" content={seoData.ogUrl} />
        <meta property="og:image" content={seoData.ogImage} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content={seoData.twitterCard} />
        <meta name="twitter:title" content={seoData.twitterTitle} />
        <meta name="twitter:description" content={seoData.twitterDescription} />
        <meta name="twitter:image" content={seoData.twitterImage} />

        {/* JSON-LD Schemas (WebPage, BreadcrumbList, Organization, SoftwareApplication, FAQPage) */}
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
          { label: "Industrial Facilities" }
        ]}
      />

      {/* Key Metrics / Statistics Section */}
      <section className="ind-stats-section" aria-label="Key Industrial Statistics">
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
                <div className="ind-stat-icon" aria-hidden="true">
                  {stat.icon}
                </div>
                <div>
                  <div className="ind-stat-number">{stat.value}</div>
                  <div className="ind-stat-label">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW & INTRODUCTION SECTION */}
      <section className="ind-overview-section" aria-label="Industrial Plant Operations Overview">
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

              <h2 className="ind-overview-title">{data.overview.title}</h2>
              <p className="ind-overview-subtitle">{data.overview.subtitle}</p>
              <p className="ind-overview-body">{data.overview.content}</p>

              {/* 4 Feature Highlight Cards */}
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

      {/* SUITABLE FOR SECTION (CARDS) */}
      <section className="ind-challenges-section" style={{ background: "#FFFFFF" }} aria-label="Target Industrial Plants">
        <div className="ind-challenges-container">
          <div className="ind-challenges-header">
            <span className="ind-section-badge">
              <FiGrid /> VERSATILE DEPLOYMENT
            </span>
            <h2 className="ind-overview-title">Suitable For Diverse Industrial Facilities & Manufacturing Plants</h2>
            <p className="ind-overview-subtitle">
              Engineered for plant operations directors, maintenance managers, chief engineers, and plant EHS leads.
            </p>
          </div>

          <motion.div
            className="ind-suitable-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.suitableFor.map((item, i) => (
              <motion.div key={i} className="ind-suitable-card" variants={fadeUp}>
                <FiCheckCircle />
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BUSINESS CHALLENGES WE SOLVE SECTION */}
      <section className="ind-challenges-section" aria-label="Industrial Plant Challenges Solved">
        <div className="ind-challenges-container">
          <div className="ind-challenges-header">
            <span className="ind-section-badge">
              {data.challengesBadgeIcon} {data.challengesBadge}
            </span>
            <h2 className="ind-overview-title">Industrial Challenges & How FacilityCore Solves Them</h2>
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
                <div className="ind-challenge-icon" aria-hidden="true">
                  {ch.icon}
                </div>
                <div>
                  <h3 className="ind-challenge-title">{ch.title}</h3>
                  <p className="ind-challenge-desc">{ch.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Solution Mapping Grid */}
          <div className="ind-mapping-grid">
            {data.solutionsMapping.map((item, i) => (
              <div key={i} className="ind-mapping-card">
                <div>
                  <div className="ind-mapping-challenge">Challenge: {item.challenge}</div>
                  <div className="ind-mapping-solution">
                    <FiCheckCircle style={{ color: "#69BC45" }} /> {item.solution}
                  </div>
                </div>
                <div className="ind-mapping-icon">{item.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 PURPOSE-BUILT KEY MODULES SECTION */}
      <section className="ind-solutions-section" aria-label="Key Industrial Modules">
        <div className="ind-solutions-container">
          <div className="ind-solutions-header">
            <span className="ind-section-badge">
              {data.capabilitiesBadgeIcon} {data.capabilitiesBadge}
            </span>
            <h2 className="ind-overview-title">12 Purpose-Built Modules for Industrial Plant Operations</h2>
            <p className="ind-overview-subtitle">
              Comprehensive operational tools tailored for heavy machinery, PTW/LOTO safety, spare parts MRO, and EHS compliance.
            </p>
          </div>

          <div className="ind-modules-12-grid">
            {data.keyModules.map((mod, i) => (
              <motion.div
                key={i}
                className="ind-module-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="ind-module-header">
                  <div className="ind-module-icon-wrapper">{mod.icon}</div>
                  <span className="ind-solution-badge-text">{mod.badge}</span>
                </div>

                <h3 className="ind-module-title">{mod.title}</h3>
                <p className="ind-module-desc">{mod.description}</p>

                <div className="ind-module-section-title">Key Features:</div>
                <div className="ind-module-features-list">
                  {mod.features.map((feat, idx) => (
                    <div key={idx} className="ind-module-feature-item">
                      <FiCheckCircle />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="ind-module-benefits-box">
                  <div className="ind-module-section-title" style={{ color: "#166534", marginBottom: 6 }}>
                    Key Benefits:
                  </div>
                  {mod.benefits.map((ben, idx) => (
                    <div key={idx} className="ind-module-benefit-item">
                      <FiCheck />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITYCORE MODULES USED (TAGS) */}
      <section className="ind-features-section" style={{ background: "#FFFFFF" }} aria-label="FacilityCore Industrial Modules">
        <div className="ind-features-container">
          <div className="ind-solutions-header">
            <span className="ind-section-badge">
              <FiGrid /> FULL INDUSTRIAL PLANT SUITE
            </span>
            <h2 className="ind-overview-title">All Industrial Modules Included</h2>
          </div>

          <div className="ind-modules-tags-grid">
            {data.modulesList.map((name, idx) => (
              <div key={idx} className="ind-module-tag">
                <FiCheckCircle />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPICAL ASSETS MANAGED (TABLE) */}
      <section className="ind-challenges-section" aria-label="Typical Industrial Machinery Managed">
        <div className="ind-challenges-container">
          <div className="ind-challenges-header">
            <span className="ind-section-badge">
              <FiShield /> INDUSTRIAL ASSET COVERAGE
            </span>
            <h2 className="ind-overview-title">Typical Industrial Machinery & Plant Systems Managed</h2>
            <p className="ind-overview-subtitle">
              Maximize availability for heavy machinery, boilers, air compressors, cranes, substations, and ETP plants.
            </p>
          </div>

          <div className="ind-table-wrapper">
            <table className="ind-custom-table">
              <thead>
                <tr>
                  <th style={{ width: "30%" }}>Asset Category</th>
                  <th>Managed Industrial Equipment & Machinery</th>
                </tr>
              </thead>
              <tbody>
                {data.managedAssetsTable.map((row, i) => (
                  <tr key={i}>
                    <td>
                      <span className="ind-cat-badge">{row.category}</span>
                    </td>
                    <td>{row.assets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DAILY INDUSTRIAL PLANT WORKFLOW */}
      <section className="ind-solutions-section" style={{ background: "#FFFFFF" }} aria-label="Daily Maintenance SLA Workflow">
        <div className="ind-solutions-container">
          <div className="ind-solutions-header">
            <span className="ind-section-badge">
              <FiBarChart2 /> WORKFLOW SLA
            </span>
            <h2 className="ind-overview-title">Daily Industrial Plant Maintenance SLA Workflow</h2>
            <p className="ind-overview-subtitle">
              SLA-driven 9-step resolution process from equipment anomaly trigger to live executive BI update.
            </p>
          </div>

          <div className="ind-workflow-grid">
            {data.dailyWorkflowSteps.map((wf, i) => (
              <div key={i} className="ind-workflow-card">
                <div className="ind-workflow-step-num">0{wf.step}</div>
                <h3 className="ind-workflow-title">{wf.title}</h3>
                <p className="ind-workflow-desc">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS BENEFITS & EXECUTIVE DASHBOARD WIDGETS */}
      <section className="ind-features-section" aria-label="Strategic Benefits & Dashboard">
        <div className="ind-features-container">
          <div className="ind-solutions-header">
            <span className="ind-section-badge">
              <FiCheckCircle /> STRATEGIC ADVANTAGES
            </span>
            <h2 className="ind-overview-title">Key Business Benefits for Industrial Facilities</h2>
          </div>

          <motion.div
            className="ind-features-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.businessBenefits.map((ben, i) => (
              <motion.div key={i} className="ind-feature-card" variants={fadeUp}>
                <div className="ind-feature-icon" aria-hidden="true">
                  <FiCheckCircle />
                </div>
                <h3 className="ind-feature-name">{ben.title}</h3>
                <p className="ind-feature-desc">{ben.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="ind-solutions-header" style={{ marginTop: 64 }}>
            <span className="ind-section-badge">
              <FiBarChart2 /> EXECUTIVE DASHBOARD
            </span>
            <h2 className="ind-overview-title">Real-Time Plant Operations Dashboard Widgets</h2>
          </div>

          <div className="ind-widgets-grid">
            {data.dashboardWidgets.map((w, idx) => (
              <div key={idx} className="ind-widget-card">
                <FiBarChart2 />
                <span>{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE FACILITYCORE (COMPARISON TABLE) */}
      <section className="ind-challenges-section" style={{ background: "#FFFFFF" }} aria-label="Why Choose FacilityCore">
        <div className="ind-challenges-container">
          <div className="ind-challenges-header">
            <span className="ind-section-badge">
              <FiShield /> WHY FACILITYCORE
            </span>
            <h2 className="ind-overview-title">FacilityCore vs Traditional Plant Management</h2>
          </div>

          <div className="ind-table-wrapper">
            <table className="ind-custom-table ind-comparison-table">
              <thead>
                <tr>
                  <th style={{ width: "30%" }}>Capability / Process</th>
                  <th className="fac-header">FacilityCore Industrial Platform</th>
                  <th>Traditional / Manual Management</th>
                </tr>
              </thead>
              <tbody>
                {data.comparisonTable.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600 }}>{row.feature}</td>
                    <td className="fac-cell">✓ {row.facilityCore}</td>
                    <td style={{ color: "#94A3B8" }}>✗ {row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (SEO ACCORDION / GRID) */}
      <section className="ind-features-section" aria-label="Frequently Asked Questions">
        <div className="ind-features-container">
          <div className="ind-solutions-header">
            <span className="ind-section-badge">
              <FiHelpCircle /> FAQs
            </span>
            <h2 className="ind-overview-title">Frequently Asked Questions</h2>
            <p className="ind-overview-subtitle">
              Everything you need to know about FacilityCore Industrial Facility Management Software.
            </p>
          </div>

          <div className="ind-faq-grid">
            {seoData.schemas[4].mainEntity.map((faq, i) => (
              <div key={i} className="ind-faq-card">
                <h3 className="ind-faq-question">
                  <FiHelpCircle />
                  <span>{faq.name}</span>
                </h3>
                <p className="ind-faq-answer">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS (SEO ON-SITE LINKS) */}
      <section className="ind-challenges-section" style={{ background: "#FFFFFF" }} aria-label="Internal Links">
        <div className="ind-challenges-container">
          <div className="ind-challenges-header">
            <span className="ind-section-badge">
              <FiLink /> RELATED SOLUTIONS & RESOURCES
            </span>
            <h2 className="ind-overview-title">Explore Related Products</h2>
          </div>

          <div className="ind-links-cloud">
            {data.internalLinks.map((item, idx) => (
              <Link key={idx} to={item.link.startsWith("http") ? "#" : item.link} className="ind-link-chip">
                <span>{item.label}</span>
                <FiArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMPACT CONVERSION-FOCUSED CTA SECTION */}
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
                Start Free Trial <FiArrowRight aria-hidden="true" />
              </a>
              <Link to="/contact" className="ind-btn-secondary">
                Book a Live Demo
              </Link>
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

export default IndustrialFacilitiesPage;
