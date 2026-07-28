import React from "react";
import {
  FiClock,
  FiSmile,
  FiTrendingUp,
  FiAlertCircle
} from "react-icons/fi";
import {
  RiPieChart2Line,
  RiCustomerService2Line,
  RiLeafLine,
  RiShieldCheckLine,
  RiErrorWarningLine,
  RiBuilding2Line,
  RiBuilding4Line,
  RiBarChartBoxLine,
  RiSettings4Line,
  RiRocket2Line
} from "react-icons/ri";
import {
  PiChartLineUp,
  PiBuildings
} from "react-icons/pi";
import {
  TbBuildingWarehouse,
  TbSettingsAutomation,
  TbBuildingSkyscraper
} from "react-icons/tb";
import {
  HiOutlineExclamationTriangle,
  HiOutlineSparkles
} from "react-icons/hi2";
import {
  MdOutlineReportProblem
} from "react-icons/md";

// SEO Data Object
export const seoData = {
  metaTitle: "Commercial Real Estate Facility Management Software | FacilityCore",
  metaDescription: "Manage commercial buildings, office towers, retail spaces, and mixed-use properties with FacilityCore's smart facility management software. Automate maintenance, asset management, inspections, visitors, vendors, and compliance.",
  metaKeywords: "Commercial Real Estate Facility Management Software, Commercial Property Management Software, Building Maintenance Software, Commercial Building Management System, Facility Management Software India, Commercial Asset Management Software, Property Maintenance Software, CMMS for Commercial Buildings, CAFM Software, Commercial Property Operations, Tenant Management Software, Visitor Management System, Vendor Management, Preventive Maintenance, Work Order Management, Asset Tracking Software, Compliance Management, Building Operations Platform",
  canonical: "/industries/commercial-real-estate",
  robots: "index, follow",
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Commercial Real Estate Facility Management Software | FacilityCore",
      "description": "Manage commercial buildings, office towers, retail spaces, and mixed-use properties with FacilityCore's smart facility management software.",
      "url": "https://facilitycore.in/industries/commercial-real-estate"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://facilitycore.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Industries",
          "item": "https://facilitycore.in/industries"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Commercial Real Estate",
          "item": "https://facilitycore.in/industries/commercial-real-estate"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "FacilityCore Commercial Real Estate FM",
      "operatingSystem": "Web, iOS, Android",
      "applicationCategory": "BusinessApplication",
      "description": "Smart facility management software for commercial real estate, office towers, and mixed-use complexes.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FacilityCore",
      "url": "https://facilitycore.in",
      "logo": "https://facilitycore.in/Facility_Core_logo.svg",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61592424172256",
        "https://www.instagram.com/facilitycore_software/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does FacilityCore help commercial real estate property managers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore automates tenant service requests, preventive asset maintenance, contractor SLAs, and energy monitoring across commercial office towers and retail complexes."
          }
        },
        {
          "@type": "Question",
          "name": "Can tenants submit maintenance tickets digitally?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore includes a dedicated tenant portal and mobile app for seamless ticket logging, status tracking, and SLA feedback."
          }
        }
      ]
    }
  ]
};

export const commercialRealEstateData = {
  hero: {
    badge: "COMMERCIAL REAL ESTATE",
    badgeIcon: React.createElement(RiBuilding2Line),
    title: "Facility Management Solutions for Commercial Real Estate",
    description: "Maximize tenant satisfaction, streamline asset maintenance, reduce utility overhead, and preserve property asset value with FacilityCore's intelligent operations platform.",
    backgroundImage: "/solutionpageherosection.png"
  },
  stats: [
    { value: "40%", label: "Faster Ticket Resolution", icon: React.createElement(PiChartLineUp) },
    { value: "25%", label: "Energy & Utility Savings", icon: React.createElement(RiPieChart2Line) },
    { value: "98.5%", label: "Tenant Satisfaction Rate", icon: React.createElement(FiSmile) },
    { value: "35%", label: "Extended Asset Lifecycle", icon: React.createElement(FiTrendingUp) }
  ],
  overview: {
    badge: "ENTERPRISE PROPERTY OPERATIONS",
    badgeIcon: React.createElement(TbBuildingSkyscraper),
    title: "Tailored Operations for Modern Commercial Properties",
    subtitle: "High-grade office towers, retail complexes, and business parks require flawless operational execution.",
    content: "Commercial real estate assets depend heavily on tenant retention, operational transparency, and peak facility performance. FacilityCore bridges the gap between tenant maintenance requests, property managers, and field technicians through real-time tracking, automated preventive schedules, and centralized analytics.",
    image: "/CommercialBuildingimg.png",
    imageAlt: "Commercial Real Estate Facility Operations",
    highlights: [
      {
        title: "Tenant Experience Portal",
        desc: "Frictionless digital ticketing, amenity access, and real-time status notifications.",
        icon: React.createElement(RiCustomerService2Line)
      },
      {
        title: "Asset Longevity & PM",
        desc: "Automated preventive maintenance routines with QR-code asset tracking.",
        icon: React.createElement(TbBuildingWarehouse)
      },
      {
        title: "Energy & Sustainability",
        desc: "Sub-metering, HVAC schedule optimization, and real-time anomaly alerts.",
        icon: React.createElement(RiLeafLine)
      },
      {
        title: "Vendor SLA & Compliance",
        desc: "Digital permit-to-work, scorecards, and audit-ready maintenance logs.",
        icon: React.createElement(RiShieldCheckLine)
      }
    ]
  },
  challengesBadge: "CHALLENGES SOLVED",
  challengesBadgeIcon: React.createElement(HiOutlineExclamationTriangle),
  challenges: [
    {
      title: "Delayed Tenant Requests",
      description: "Manual request routing leads to tenant frustration and missed service level agreements (SLAs).",
      icon: React.createElement(FiAlertCircle)
    },
    {
      title: "High Energy & Operational Costs",
      description: "Unoptimized HVAC, lighting schedules, and unmonitored equipment increase utility expenses.",
      icon: React.createElement(HiOutlineExclamationTriangle)
    },
    {
      title: "Preventive Maintenance Backlogs",
      description: "Reactive maintenance causes premature equipment failures and expensive emergency repairs.",
      icon: React.createElement(MdOutlineReportProblem)
    },
    {
      title: "Lack of Vendor & Audit Visibility",
      description: "Managing third-party contractors without audit-ready logs creates compliance and safety risks.",
      icon: React.createElement(RiErrorWarningLine)
    }
  ],
  capabilitiesBadge: "CORE CAPABILITIES",
  capabilitiesBadgeIcon: React.createElement(RiSettings4Line),
  solutions: [
    {
      badge: "TENANT EXPERIENCE",
      title: "Digital Tenant Portal & Self-Service Helpdesk",
      description: "Give commercial tenants a frictionless way to log maintenance issues, request amenity access, track ticket status in real-time, and rate service quality.",
      highlights: [
        "Instant ticket routing to qualified technicians based on issue type",
        "Automated status updates via email and mobile push notifications",
        "SLA monitoring with escalation alerts for overdue tasks",
        "Tenant feedback and rating collection after every resolution"
      ],
      icon: React.createElement(RiBuilding2Line)
    },
    {
      badge: "ASSET MANAGEMENT",
      title: "Automated Preventive Maintenance & Asset Tracking",
      description: "Keep chillers, elevators, fire safety systems, and electrical panels operating at peak performance with scheduled checkups and QR-code tracking.",
      highlights: [
        "QR code scanning for quick asset lookup and service logging",
        "Custom preventive maintenance routines linked to manufacturer guidelines",
        "Spare parts inventory tracking with low-stock warnings",
        "Historical repair logs to evaluate repair vs. replacement decisions"
      ],
      icon: React.createElement(PiBuildings)
    },
    {
      badge: "SUSTAINABILITY & ENERGY",
      title: "Energy & Environmental Monitoring",
      description: "Monitor energy consumption across HVAC units, common areas, and tenant spaces to spot anomalies, reduce carbon footprint, and lower operational bills.",
      highlights: [
        "Real-time utility consumption tracking and sub-metering data",
        "Automated anomaly alerts for sudden spikes in electricity or water usage",
        "HVAC schedule optimization based on occupancy patterns",
        "ESG and green building compliance reporting readiness"
      ],
      icon: React.createElement(TbBuildingWarehouse)
    },
    {
      badge: "CONTRACTOR & COMPLIANCE",
      title: "Vendor SLA & Compliance Management",
      description: "Maintain full control over third-party contractors with digital check-ins, SLA performance scorecards, and automated compliance verification.",
      highlights: [
        "Vendor check-in / check-out verification via mobile app",
        "Contractor performance scorecards based on SLA adherence",
        "Digital permit-to-work and safety check confirmation",
        "Centralized repository for insurance and compliance certificates"
      ],
      icon: React.createElement(HiOutlineSparkles)
    }
  ],
  featuresBadge: "FEATURE HIGHLIGHTS",
  featuresBadgeIcon: React.createElement(HiOutlineSparkles),
  keyFeatures: [
    { name: "Multi-Tenant Billing & Sub-Metering", desc: "Automate utility cost allocation per tenant based on actual usage records.", icon: React.createElement(TbSettingsAutomation) },
    { name: "Space & Amenity Reservations", desc: "Enable tenants to reserve shared conference rooms, parking spots, and event spaces.", icon: React.createElement(RiBuilding4Line) },
    { name: "Visitor & Access Control Logs", desc: "Enhance property security with digital visitor check-ins and badge tracking.", icon: React.createElement(RiShieldCheckLine) },
    { name: "Executive BI Dashboards", desc: "Gain instant visibility into property portfolio health, total cost of maintenance, and vendor performance.", icon: React.createElement(RiBarChartBoxLine) }
  ],
  cta: {
    icon: React.createElement(RiRocket2Line),
    title: "Elevate Commercial Property Operations Today",
    description: "Empower your property managers, technicians, and tenants with a unified enterprise platform built for modern real estate excellence."
  }
};
