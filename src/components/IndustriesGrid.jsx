import React from "react";
import { motion } from "framer-motion";
import { FiGrid } from "react-icons/fi";
import { Link } from "react-router-dom";
import { industriesGrid } from "../data/industriesData";
import "../styles/IndustriesGrid.css";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const IndustriesGrid = () => {
  return (
    <section className="ind-grid-section" id="explore-grid">
      <div className="ind-grid-container">
        <div className="ind-section-header">
          <span className="ind-section-badge">
            <FiGrid /> COMPREHENSIVE SUITE
          </span>
          <h2 className="section-title">Built For Every Industry</h2>
          <p className="section-subtitle">
            Purpose-built facility solutions for diverse operational environments.
          </p>
        </div>

        <div className="ind-grid">
          {industriesGrid.map((ind, i) => {
            const isCommercial = ind.name === "Commercial Real Estate";
            const isCorporate = ind.name === "Corporate Offices & IT Campuses";
            const isResidential = ind.name === "Residential Communities";
            const isManufacturing = ind.name === "Manufacturing & Factories";
            const isWarehouse = ind.name === "Warehouses & Logistics";
            const isHealthcare = ind.name === "Healthcare";
            const isEducation = ind.name === "Education";
            const isRetail = ind.name === "Retail & Shopping Malls";
            const isAirport = ind.name === "Airports & Transportation";
            const isUtilities = ind.name === "Utilities & Infrastructure";
            const isGovernment = ind.name === "Government & Public Sector";
            const isDataCenter = ind.name === "Data Centers & Critical Facilities";
            const isSmartCity = ind.name === "Smart Cities";
            const isIndustrial = ind.name === "Industrial Facilities";
            const isHospitality = ind.name === "Hospitality & Hotels";

            const cardInner = (
              <>
                <div className="ind-grid-circle">
                  {ind.icon}
                </div>
                <h3 className="ind-grid-name">{ind.name}</h3>
                <p className="ind-grid-desc">{ind.desc}</p>
              </>
            );

            if (isCommercial || isCorporate || isResidential || isManufacturing || isWarehouse || isHealthcare || isEducation || isRetail || isAirport || isUtilities || isGovernment || isDataCenter || isSmartCity || isIndustrial || isHospitality) {
              const targetRoute = isCommercial
                ? "/industries/commercial-real-estate"
                : isCorporate
                ? "/industries/corporate-offices-it-campuses"
                : isResidential
                ? "/industries/residential-communities"
                : isManufacturing
                ? "/industries/manufacturing-factories"
                : isWarehouse
                ? "/industries/warehouses-logistics"
                : isHealthcare
                ? "/industries/healthcare"
                : isEducation
                ? "/industries/education"
                : isRetail
                ? "/industries/retail-shopping-malls"
                : isAirport
                ? "/industries/airports-transportation"
                : isUtilities
                ? "/industries/utilities-infrastructure"
                : isGovernment
                ? "/industries/government-public-sector"
                : isDataCenter
                ? "/industries/data-centers-critical-facilities"
                : isSmartCity
                ? "/industries/smart-cities"
                : isIndustrial
                ? "/industries/industrial-facilities"
                : "/industries/hospitality-hotels";

              return (
                <motion.div
                  key={i}
                  className="ind-grid-card ind-grid-card-clickable"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  style={{ cursor: "pointer" }}
                >
                  <Link
                    to={targetRoute}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%"
                    }}
                  >
                    {cardInner}
                  </Link>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={i}
                className="ind-grid-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {cardInner}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default React.memo(IndustriesGrid);
