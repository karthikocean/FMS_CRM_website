import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCheckCircle, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { corporateOfficesData, seoData } from "../data/CorporateOfficesITCampusesPageData";
import "../styles/CorporateOfficesITCampusesPage.css";

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

const CorporateOfficesITCampusesPage = () => {
  const data = corporateOfficesData;

  const leftColumnModules = data.solutions.slice(0, 5);
  const rightColumnModules = data.solutions.slice(5, 10);

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
          { label: "Corporate Offices & IT Campuses" }
        ]}
      />

      {/* Key Metrics / Statistics Section */}
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

      {/* ENTERPRISE WORKPLACE OPERATIONS SECTION */}
      <section className="ind-overview-section" aria-label="Workplace Operations Overview">
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

      {/* Challenges Solved Section */}
      <section className="ind-challenges-section" aria-label="Key Industry Pain Points">
        <div className="ind-challenges-container">
          <div className="ind-challenges-header">
            <span className="ind-section-badge">
              {data.challengesBadgeIcon} {data.challengesBadge}
            </span>
            <h2 className="ind-overview-title">
              Workplace Challenges We Solve
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

      {/* SECTION 1 — PURPOSE-BUILT MODULES (Two-Column Flex/Grid Desktop Layout: 5 Cards Left, 5 Cards Right) */}
      <section className="ind-solutions-section" aria-label="Purpose-Built Modules">
        <div className="ind-solutions-container">
          <div className="ind-solutions-header">
            <span className="ind-section-badge">
              {data.capabilitiesBadgeIcon} {data.capabilitiesBadge}
            </span>
            <h2 className="ind-overview-title">
              Purpose-Built Modules for Corporate FM
            </h2>
          </div>

          <div className="ind-solutions-grid-wrapper">
            {/* Left Column (5 Modules) */}
            <div className="ind-solutions-column">
              {leftColumnModules.map((sol, i) => (
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

            {/* Right Column (5 Modules) */}
            <div className="ind-solutions-column">
              {rightColumnModules.map((sol, i) => (
                <motion.div
                  key={i + 5}
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
        </div>
      </section>

      {/* SECTION 2 — FEATURE HIGHLIGHTS (Centered Final Row Layout) */}
      <section className="ind-features-section" aria-label="Feature Highlights">
        <div className="ind-features-container">
          <div className="ind-solutions-header">
            <span className="ind-section-badge">
              {data.featuresBadgeIcon} {data.featuresBadge}
            </span>
            <h2 className="ind-overview-title">
              Built to Empower Workplace & FM Teams
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

      {/* WHY CHOOSE FACILITYCORE (COMPARISON TABLE) */}
      {data.comparisonTable && (
        <section className="ind-challenges-section" style={{ background: "#FFFFFF" }} aria-label="Why Choose FacilityCore">
          <div className="ind-challenges-container">
            <div className="ind-challenges-header">
              <span className="ind-section-badge">
                <FiCheckCircle /> WHY FACILITYCORE
              </span>
              <h2 className="ind-overview-title">FacilityCore vs Traditional Workplace Management</h2>
            </div>

            <div className="ind-table-wrapper">
              <table className="ind-custom-table ind-comparison-table">
                <thead>
                  <tr>
                    <th style={{ width: "30%" }}>Capability / Process</th>
                    <th className="fac-header">FacilityCore Intelligent Platform</th>
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
      )}

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
                Book Free Demo <FiArrowRight aria-hidden="true" />
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

export default CorporateOfficesITCampusesPage;
