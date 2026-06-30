import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiHome, FiPackage, FiTool,
  FiZap, FiMessageSquare,
  FiUsers, FiClipboard, FiGrid, FiGitBranch, FiEdit3,
  FiSettings,
  FiSend, FiX
} from "react-icons/fi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/SolutionsPage.css";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const SolutionsPage = () => {
  // No JS scroll listeners or Intersection Observer needed for pure CSS sticky layout
  const [selectedModule, setSelectedModule] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedModule(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedModule) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedModule]);

  const modules = [
    {
      title: "Asset Management",
      description:
        "Comprehensive tracking and lifecycle management for all facility assets.",
      bullets: [
        "Real-time Asset Location",
        "Predictive Maintenance Alerts",
        "Custom Lifecycle Stages",
        "Integrated Cost Tracking",
        "Barcode & RFID Support",
        "Analytics Dashboard",
      ],
      img: "/sectionpagedashboard.png",
    },
    {
      title: "Preventive Maintenance",
      description:
        "Schedule and automate routine maintenance to reduce downtime and improve operational efficiency.",
      bullets: [
        "Dynamic Work Order Generation",
        "AI-driven Frequency Optimization",
        "Mobile Technician App",
        "Resource Allocation Tools",
        "Compliance Reporting",
        "Performance KPIs",
      ],
      img: "/preventivemaintenance.png",
    },
    {
      title: "Vendor Management",
      description:
        "Centralize vendor contracts, performance, and communication in a single platform.",
      bullets: [
        "Contract Repository",
        "SLA & KPI Tracking",
        "Automated Vendor Rating",
        "Integrated Purchase Orders",
        "Secure Document Exchange",
        "Vendor Performance Analytics",
      ],
      img: "/vendormanagement.png",
    },
  ];

  return (
    <div className="solutions-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <motion.div
          className="hero-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <nav className="breadcrumb">
            <Link to="/">Home</Link> / <span>Solutions</span>
          </nav>
          <span className="badge"><FiHome /> FACILITYCORE SOLUTIONS</span>
          <h1 className="hero-title">Smart Solutions For Every Facility</h1>
          <p className="hero-desc">
            Stay audit-ready with automated compliance tracking.
          </p>
        </motion.div>
      </section>

      {/* Platform Modules Section */}
      <section className="platform-modules">
        <span className="section-badge">
          <FiGrid /> PLATFORM MODULES
        </span>

        <motion.h2
          className="section-title"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
        >
          Complete Facility Suite
        </motion.h2>
        <p className="section-description">
          Eliminate operational silos with integrated facility management modules.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "Asset Management",
              icon: <FiPackage />,
              desc: "Track and manage assets across their complete lifecycle."
            },
            {
              title: "Preventive Maintenance",
              icon: <FiTool />,
              desc: "Automate maintenance schedules and inspections."
            },
            {
              title: "Reactive Maintenance",
              icon: <FiZap />,
              desc: "Respond quickly to breakdowns and service requests."
            },
            {
              title: "Helpdesk Portal",
              icon: <FiMessageSquare />,
              desc: "Centralized support requests and issue tracking."
            },
            {
              title: "Vendor Management",
              icon: <FiUsers />,
              desc: "Manage vendors, contracts, and service providers."
            },
            {
              title: "Compliance Logs",
              icon: <FiClipboard />,
              desc: "Maintain audit-ready compliance records and reports."
            }

          ].map((item, idx) => (
            <div key={idx} className="module-card">
              <div className="module-icon">{item.icon}</div>
              <h3 className="module-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Solution Modules */}

      <section className="detailed-modules">
        {modules.map((module, index) => (
          <div className="sticky-wrapper" key={index}>
            <div
              className={`detail-card ${index % 2 === 0 ? "layout-left" : "layout-right"
                }`}
            >
              <div className="detail-left">
                <h3 className="detail-title">{module.title}</h3>
                <p className="detail-desc">{module.description}</p>
                <ul className="detail-bullets">
                  {module.bullets.map((b, i) => (
                    <li key={i}>
                      <span className="check-icon">✔</span> {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedModule(module);
                  }}
                  className="btn btn-primary detail-cta"
                >
                  Explore Solution
                </Link>
              </div>
              <div className="detail-right">
                <img
                  src={module.img}
                  alt={module.title}
                  className="detail-img"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Workflow Section */}
      <section className="workflow-section">

        <div className="workflow-header">

          <span className="section-badge">
            <FiGitBranch />
            WORKFLOW PROCESS
          </span>

          <motion.h2
            className="section-title"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
          >
            End-to-End Workflow Overview
          </motion.h2>

          <p className="section-subtitle">
            Streamline every facility process from request creation to closure.
          </p>

        </div>

        <div className="workflow-steps">

          {[
            {
              icon: <FiEdit3 />,
              title: "Input / Request",
              desc: "The process begins with a request, data, or trigger."
            },
            {
              icon: <FiSettings />,
              title: "Initial Assessment",
              desc: "Review the request to confirm scope and feasibility."
            },
            {
              icon: <FiUsers />,
              title: "Planning & Setup",
              desc: "Resources, roles and timelines are prepared."
            },
            {
              icon: <FiTool />,
              title: "Execution",
              desc: "Planned activities are carried out according to procedures."
            },
            {
              icon: <FiClipboard />,
              title: "Review & Control",
              desc: "Results are checked to ensure quality and compliance."
            },
            {
              icon: <FiSend />,
              title: "Final Output",
              desc: "Completed output is delivered to stakeholders."
            }
          ].map((step, i, arr) => (
            <div key={i} className="workflow-step">
              <div className="workflow-top">
                <div className="workflow-circle">
                  {step.icon}
                </div>
                {i !== arr.length - 1 && (
                  <div className="workflow-arrow">
                    <HiOutlineArrowLongRight />
                  </div>
                )}
              </div>
              <h4 className="step-title">
                {step.title}
              </h4>
              <p className="step-desc">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

      <AnimatePresence>
        {selectedModule && (
          <div className="modal-overlay-wrapper">
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModule(null)}
            />
            <motion.div
              className="modal-card-container"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="modal-header">
                <h3 className="modal-module-title">{selectedModule.title}</h3>
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedModule(null)}
                  aria-label="Close modal"
                >
                  <FiX />
                </button>
              </div>
              
              <div className="modal-body-grid">
                <div className="modal-left-side">
                  <div className="modal-image-box">
                    <img
                      src={selectedModule.img}
                      alt={selectedModule.title}
                      className="modal-module-img"
                    />
                  </div>
                </div>
                
                <div className="modal-right-side">
                  <p className="modal-module-desc">{selectedModule.description}</p>
                  
                  <ul className="modal-module-bullets">
                    {selectedModule.bullets.map((b, i) => (
                      <li key={i}>
                        <span className="modal-check-icon">✔</span> {b}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="modal-additional-features">
                    <span className="modal-badge-tag">Enterprise Ready</span>
                    <span className="modal-badge-tag">SLA Tracking</span>
                    <span className="modal-badge-tag">API Support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
