import React from "react";
import {
  FiClock,
  FiSmile,
  FiTrendingUp,
  FiCheckCircle,
  FiUserCheck,
  FiCalendar,
  FiLayers,
  FiShield,
  FiUsers,
  FiDollarSign,
  FiMessageSquare,
  FiTool,
  FiBox,
  FiTruck,
  FiBell,
  FiHardDrive,
  FiBarChart2,
  FiZap,
  FiLock,
  FiCompass,
  FiHelpCircle,
  FiAlertTriangle,
  FiClipboard,
  FiCpu,
  FiRefreshCw,
  FiDroplet,
  FiSun
} from "react-icons/fi";
import {
  RiBuilding4Line,
  RiSettings4Line,
  RiShieldCheckLine,
  RiQrCodeLine,
  RiSmartphoneLine,
  RiFileList3Line,
  RiBarChartGroupedLine,
  RiTruckLine,
  RiFlashlightLine,
  RiWaterFlashLine
} from "react-icons/ri";
import {
  TbSettingsAutomation,
  TbDoorEnter,
  TbChecklist,
  TbBuildingWarehouse,
  TbReportAnalytics,
  TbBolt
} from "react-icons/tb";
import {
  HiOutlineSparkles,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck
} from "react-icons/hi2";

// Declarative SEO Metadata & Schema JSON-LD
export const seoData = {
  metaTitle: "Utilities & Infrastructure Facility Management Software | FacilityCore",
  metaDescription:
    "Manage utility plants, power stations, water treatment facilities, infrastructure assets, maintenance, inspections, compliance, utilities, contractors, and workforce using FacilityCore's integrated platform.",
  metaKeywords:
    "Utility Facility Management Software, Infrastructure CMMS Software, Power Plant Maintenance Software, Water Treatment Facility Management, Solar Farm Maintenance Software, Substation Asset Management, Utility Asset Tracking, Infrastructure Maintenance Software, Utility EHS & Safety Compliance, Smart Grid Asset Management, Electrical Substation Inspections, STP ETP Maintenance Software, Renewable Energy Maintenance, Utility Work Order Dispatch, Utility Contractor Management, Infrastructure Inspection Checklists, Utility SCADA Integration, Transformer PM Scheduler, Utility Outage Prevention, Public Infrastructure CAFM",
  canonical: "https://facilitycore.in/industries/utilities-infrastructure",
  robots: "index, follow",
  ogTitle: "Utilities & Infrastructure Facility Management Software | FacilityCore",
  ogDescription:
    "Manage utility plants, power stations, water treatment facilities, infrastructure assets, maintenance, inspections, compliance, utilities, contractors, and workforce using FacilityCore's integrated platform.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/industries/utilities-infrastructure",
  ogImage: "https://facilitycore.in/SmartCityimg.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Utilities & Infrastructure Facility Management Software | FacilityCore",
  twitterDescription:
    "Manage utility plants, power stations, water treatment facilities, infrastructure assets, maintenance, inspections, compliance, utilities, contractors, and workforce using FacilityCore's integrated platform.",
  twitterImage: "https://facilitycore.in/SmartCityimg.png",
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Utilities & Infrastructure Facility Management Software | FacilityCore",
      "description":
        "Manage utility plants, power stations, water treatment facilities, infrastructure assets, maintenance, inspections, compliance, utilities, contractors, and workforce using FacilityCore's integrated platform.",
      "url": "https://facilitycore.in/industries/utilities-infrastructure"
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
          "name": "Utilities & Infrastructure",
          "item": "https://facilitycore.in/industries/utilities-infrastructure"
        }
      ]
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
      "@type": "SoftwareApplication",
      "name": "FacilityCore Utilities & Infrastructure CMMS Software",
      "operatingSystem": "Web, iOS, Android",
      "applicationCategory": "BusinessApplication",
      "description":
        "Enterprise infrastructure CMMS software for power stations, water treatment plants, solar farms, substations, and public utility networks.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is utilities and infrastructure facility management software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Utilities and infrastructure facility management software is a specialized digital platform designed for power plant leads, water utility managers, solar farm operators, and infrastructure engineers to automate maintenance for substations, STP/ETP plants, solar PV arrays, utility meters, EHS compliance, and contractor operations."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore streamline power substation and transformer maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore schedules run-hour and thermal PM inspections, tracks oil dielectric strength, monitors circuit breaker operations, and dispatches high-priority breakdown tickets to field electricians."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore manage Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore schedules dosing pump PMs, tracks water quality parameters (pH, BOD, COD, TDS), logs blower run-hours, and ensures 100% environmental compliance."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software support solar farm and renewable energy asset maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore schedules solar panel washing cycles, tracks string inverter efficiency, logs transformer thermography audits, and monitors solar PV performance ratios."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore support Permit-To-Work (PTW) and Lockout-Tagout (LOTO) safety?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the EHS module enforces digital Permit-To-Work (PTW) approvals and high-voltage Lockout-Tagout (LOTO) safety checklists before maintenance begins."
          }
        },
        {
          "@type": "Question",
          "name": "Can field engineers log utility maintenance work using a mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, field technicians use the FacilityCore Mobile App with offline mode and geofencing to scan QR tags on substations, record meter readings, and upload repair photos."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore support QR code tagging for utility assets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, transformers, switchgear, pumps, blowers, solar inverters, and meters are tagged with QR codes for instant mobile scanning and service lookup."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software integrate with SCADA systems and utility meters?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore logs energy, water, and gas meter readings, creating automated anomaly alerts when parameters cross safety thresholds."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore track contractor AMCs and third-party vendor performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Contractor Portal manages third-party AMC contracts, vendor gate passes, safety induction records, compliance documents, and service scorecards."
          }
        },
        {
          "@type": "Question",
          "name": "Is FacilityCore suitable for power plants, water utilities, solar farms, and smart cities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. FacilityCore is engineered to scale across power distribution grids, water utilities, solar farms, gas stations, and municipal infrastructure."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore handle environmental and EHS safety compliance audits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore maintains digital, tamper-proof audit trails for EHS safety walkthroughs, pollution control board (PCB) reports, and ISO 14001 audits."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore digitize 24/7 utility control room shift duty handovers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Digital Control Room Logbook records shift handovers, pending emergency tickets, and plant utility anomalies for continuous 24/7 utility operations."
          }
        }
      ]
    }
  ]
};

// Page Main Data Object
export const utilitiesInfrastructureData = {
  hero: {
    badge: "UTILITIES & INFRASTRUCTURE CMMS PLATFORM",
    title: "Utility Facility Management Software",
    headline: "Ensure 100% Utility Reliability, Asset Uptime & Regulatory Compliance",
    description:
      "Unify power substations, water treatment plants (STP/ETP), solar farms, utility distribution, EHS safety compliance, contractor AMCs, and field workforce operations into one intelligent platform.",
    backgroundImage: "/Utilitiesimg.png"
  },

  stats: [
    { value: "60%", label: "Reduction in Unplanned Utility Outages", icon: React.createElement(FiClock) },
    { value: "99.99%", label: "Reliability for Power & Water Infrastructure", icon: React.createElement(FiTrendingUp) },
    { value: "25%", label: "Increase in Solar PV Energy Performance Ratio", icon: React.createElement(FiSun) },
    { value: "100%", label: "Environmental & EHS Audit Compliance", icon: React.createElement(FiCheckCircle) }
  ],

  overview: {
    badge: "ENTERPRISE UTILITY ERP",
    badgeIcon: React.createElement(HiOutlineSparkles),
    title: "Positioning FacilityCore as a Complete Utility & Infrastructure Operations Solution",
    subtitle: "Built for Utility Operations Directors, Chief Engineers & Power Plant Managers",
    content:
      "Utility networks and public infrastructure demand 24/7 uninterrupted uptime. Any failure in electrical substations, water treatment plants (STP/ETP), solar inverters, or gas distribution grids jeopardizes public health, industrial productivity, and environmental safety. FacilityCore provides a cloud-based infrastructure CMMS that connects electrical grid maintenance, water quality logs, solar farm washing cycles, EHS Lockout-Tagout (LOTO) safety, utility metering, and vendor management into a single digital solution.",
    image: "/Utilitiesimg.png",
    imageAlt: "Modern Electrical Substation & Utility Plant Managed by FacilityCore",
    highlights: [
      {
        icon: React.createElement(RiFlashlightLine),
        title: "Substation & Electrical Grid CMMS",
        desc: "Automate preventive maintenance for transformers, high-voltage switchgear, and circuit breakers."
      },
      {
        icon: React.createElement(FiDroplet),
        title: "Water Treatment (STP / ETP) Logs",
        desc: "Monitor dosing pumps, water quality parameters (pH, BOD, COD), blowers, and effluent compliance."
      },
      {
        icon: React.createElement(FiSun),
        title: "Solar Farm & Renewable PM",
        desc: "Schedule solar panel cleaning cycles, track string inverter performance, and log thermography audits."
      },
      {
        icon: React.createElement(RiShieldCheckLine),
        title: "High-Voltage PTW & LOTO Safety",
        desc: "Enforce digital Permit-To-Work (PTW) approvals and Lockout-Tagout (LOTO) safety for field engineers."
      }
    ]
  },

  suitableFor: [
    "Utility Operations Directors",
    "Chief Engineers",
    "Power Plant Managers",
    "Water Treatment (STP/ETP) Leads",
    "Solar & Renewable Energy Heads",
    "EHS & Infrastructure Safety Officers",
    "Electrical Substations",
    "Sewage & Water Treatment Plants",
    "Solar & Wind Farms",
    "Gas Distribution Grids",
    "Smart City Infrastructure",
    "Industrial Utility Plants"
  ],

  challengesBadgeIcon: React.createElement(HiOutlineShieldCheck),
  challengesBadge: "UTILITY OPERATIONAL CHALLENGES",
  challenges: [
    {
      icon: React.createElement(TbBolt),
      title: "Unplanned Substation & Transformer Outages",
      description: "Transformer insulation failures or breaker trips cause catastrophic power grid blackouts."
    },
    {
      icon: React.createElement(FiDroplet),
      title: "Water Treatment (STP/ETP) Non-Compliance",
      description: "Dosing pump failures or unmonitored effluent quality risk heavy environmental fines."
    },
    {
      icon: React.createElement(FiSun),
      title: "Solar Panel & Inverter Performance Loss",
      description: "Dirty solar PV panels and faulty string inverters reduce solar energy yields significantly."
    },
    {
      icon: React.createElement(FiCompass),
      title: "Scattered Infrastructure Assets Across Geography",
      description: "Managing remote substations, pumping stations, and solar farms without real-time visibility."
    },
    {
      icon: React.createElement(FiLock),
      title: "High Field Worker & High-Voltage EHS Risks",
      description: "Working on high-voltage electricals or chemical dosing tanks without strict digital safety permits."
    },
    {
      icon: React.createElement(FiTruck),
      title: "Unorganized Contractor & AMC Management",
      description: "Tracking third-party AMCs for turbine overhauls, transformer oil filtration, and SCADA servicing."
    },
    {
      icon: React.createElement(FiBarChart2),
      title: "SCADA & Metering Discrepancies",
      description: "Manual utility meter readings lead to billing errors, data lag, and unrecorded energy losses."
    },
    {
      icon: React.createElement(RiQrCodeLine),
      title: "Lack of Equipment Calibration History",
      description: "Missing relay calibration test reports and transformer oil test certificates delay audits."
    },
    {
      icon: React.createElement(FiRefreshCw),
      title: "Shift Handover Anomaly Loss",
      description: "Verbal handovers between 24/7 control room shifts lead to unaddressed utility alerts."
    },
    {
      icon: React.createElement(FiClipboard),
      title: "Regulatory Audit Non-Compliance",
      description: "Scattered paper records make passing Pollution Control Board (PCB) and safety audits stressful."
    }
  ],

  solutionsMapping: [
    { challenge: "Unplanned Substation Outages", solution: "Automated Run-Hour & Thermal PM Scheduler", icon: React.createElement(TbBolt) },
    { challenge: "Water Treatment Non-Compliance", solution: "Digital Water Quality & Effluent Chemical Checklists", icon: React.createElement(FiDroplet) },
    { challenge: "Solar Panel Performance Loss", solution: "Automated Solar Panel Washing & Inverter Inspection PM", icon: React.createElement(FiSun) },
    { challenge: "Scattered Infrastructure Assets", solution: "GPS & Geofenced Mobile Asset Inspection App", icon: React.createElement(FiCompass) },
    { challenge: "High-Voltage EHS Risks", solution: "Digital Permit-To-Work (PTW) & High-Voltage LOTO Safety", icon: React.createElement(FiLock) },
    { challenge: "Unorganized Contractor Oversight", solution: "Third-Party Utility Contractor & AMC Portal", icon: React.createElement(FiTruck) },
    { challenge: "SCADA & Metering Discrepancies", solution: "Automated Utility Metering & SCADA Data Integration", icon: React.createElement(FiBarChart2) },
    { challenge: "Lack of Calibration History", solution: "QR Asset Tagging & Relay Calibration Register", icon: React.createElement(RiQrCodeLine) },
    { challenge: "Shift Handover Anomaly Loss", solution: "Digital 24/7 Utility Control Room Duty Logbook", icon: React.createElement(FiRefreshCw) },
    { challenge: "Regulatory Audit Non-Compliance", solution: "Audit-Ready EHS, Environmental & Safety Reports", icon: React.createElement(FiClipboard) }
  ],

  capabilitiesBadgeIcon: React.createElement(FiLayers),
  capabilitiesBadge: "PURPOSE-BUILT MODULES",
  keyModules: [
    {
      badge: "MODULE 1",
      icon: React.createElement(RiFlashlightLine),
      title: "Substation & Electrical Grid CMMS",
      description: "Preventive maintenance and breakdown tracking for transformers, switchgear, relays, and circuit breakers.",
      features: [
        "Transformer PM Checklists",
        "Oil Dielectric Testing Log",
        "SF6 Breaker Pressure Checks",
        "Relay Calibration Register",
        "Thermography Audit History",
        "High-Priority Breakdown SLA",
        "Technician Mobile App",
        "Substation Health Score"
      ],
      benefits: [
        "99.99% electrical grid uptime",
        "Prevent catastrophic explosions",
        "Extend transformer lifespan"
      ]
    },
    {
      badge: "MODULE 2",
      icon: React.createElement(FiDroplet),
      title: "Water & Sewage Treatment (STP/ETP)",
      description: "CMMS for dosing pumps, blowers, clarifiers, membranes, and water quality parameters (pH, BOD, COD).",
      features: [
        "STP/ETP Pump PM Scheduler",
        "Blower Run-Hour Tracking",
        "Effluent Quality Logs",
        "Chemical Dosing Checklists",
        "Membrane Cleaning PM",
        "Sludge Removal Logs",
        "Pollution Control Reports",
        "Mobile Plant App"
      ],
      benefits: [
        "100% environmental compliance",
        "Prevent effluent water penalties",
        "Optimize chemical dosing costs"
      ]
    },
    {
      badge: "MODULE 3",
      icon: React.createElement(FiSun),
      title: "Solar Farm & Renewable Energy PM",
      description: "Automate solar PV panel cleaning schedules, string inverter checks, and weather sensor calibration.",
      features: [
        "Solar Panel Cleaning PM",
        "String Inverter Checks",
        "Tracker Motor Inspections",
        "SCADA Weather Sensor PM",
        "Performance Ratio (PR) Log",
        "Thermography Defect Log",
        "OEM Warranty Tracking",
        "Solar Asset Scorecard"
      ],
      benefits: [
        "Maximize solar energy yield",
        "Detect hot spots early",
        "Lower solar OpEx costs"
      ]
    },
    {
      badge: "MODULE 4",
      icon: React.createElement(RiSmartphoneLine),
      title: "Field Workforce & Geofenced Mobile App",
      description: "Mobile app with offline capability for field technicians inspecting remote substations and utilities.",
      features: [
        "Geofenced Work Submissions",
        "Offline Mode Functionality",
        "QR Code Asset Scanning",
        "GPS Route Tracking",
        "Mandated Photo Proof",
        "Digital E-Signatures",
        "Safety Check Alerts",
        "Real-Time Sync Engine"
      ],
      benefits: [
        "Eliminate paper logbooks",
        "Real-time field visibility",
        "Higher technician productivity"
      ]
    },
    {
      badge: "MODULE 5",
      icon: React.createElement(FiLock),
      title: "High-Voltage PTW & LOTO Safety",
      description: "Digital Permit-To-Work (PTW) approvals and Lockout-Tagout (LOTO) safety verification for high-risk jobs.",
      features: [
        "Digital PTW Approvals",
        "High-Voltage LOTO Checklist",
        "Gas Detection Sign-Off",
        "Confined Space Permits",
        "Hot Work Safety Checks",
        "E-Signature Verification",
        "Audit Trail Log",
        "Mobile Safety Portal"
      ],
      benefits: [
        "Zero electrical accidents",
        "Enforce strict safety protocol",
        "100% OSHA/EHS compliance"
      ]
    },
    {
      badge: "MODULE 6",
      icon: React.createElement(FiBarChart2),
      title: "SCADA & Utility Metering Integration",
      description: "Automated energy, water, and gas meter logging with real-time anomaly alerts for peak loads.",
      features: [
        "Utility Meter Reading Logs",
        "Peak Demand Tracking",
        "Power Factor Log",
        "Energy Anomaly Alerts",
        "SCADA Data Integration",
        "Water & Gas Flow Metering",
        "Consumption Analytics",
        "Green Utility Reports"
      ],
      benefits: [
        "Identify utility wastage",
        "Lower power factor penalties",
        "Data-driven energy decisions"
      ]
    },
    {
      badge: "MODULE 7",
      icon: React.createElement(RiQrCodeLine),
      title: "Utility Asset Management & QR",
      description: "Centralized asset registry with durable QR code labels for transformers, pumps, blowers, and meters.",
      features: [
        "QR Code Asset Tagging",
        "Asset Service History",
        "Warranty & AMC Expiry",
        "Depreciation Accounting",
        "Geographic Mapping",
        "Mobile QR Scanning",
        "Sub-Assembly Hierarchy",
        "CapEx Replacement Log"
      ],
      benefits: [
        "Complete asset visibility",
        "Instant mobile lookup",
        "Optimized CapEx budgets"
      ]
    },
    {
      badge: "MODULE 8",
      icon: React.createElement(FiTool),
      title: "Work Order & SLA Dispatch Engine",
      description: "Automated work order creation from SCADA alarms or manual inspection tickets with priority SLA routing.",
      features: [
        "SCADA Alarm Ticket Trigger",
        "Priority SLA Routing",
        "Skill-Based Engineer Match",
        "Technician Push Alerts",
        "Parts Used Allocation",
        "Supervisor Approval",
        "Escalation Matrix Alerts",
        "Work Order History"
      ],
      benefits: [
        "Instant breakdown response",
        "Eliminate communication lag",
        "Transparent SLA tracking"
      ]
    },
    {
      badge: "MODULE 9",
      icon: React.createElement(FiTruck),
      title: "Contractor & Vendor AMC Portal",
      description: "Manage third-party AMCs for turbine overhauls, transformer oil filtration, and SCADA servicing.",
      features: [
        "Contractor Directory",
        "AMC Contract Logs",
        "Vendor Worker Gate Passes",
        "Safety Induction Records",
        "Insurance Verification",
        "Contractor Performance SLA",
        "Service Entry Sheets",
        "Payment Approvals"
      ],
      benefits: [
        "Complete contractor control",
        "Enforce plant safety",
        "Simplified vendor billing"
      ]
    },
    {
      badge: "MODULE 10",
      icon: React.createElement(FiClipboard),
      title: "EHS & Environmental Checklists",
      description: "Digital inspection checklists for Pollution Control Board (PCB), fire safety, and environmental compliance.",
      features: [
        "PCB Compliance Checklists",
        "Fire Safety Walkthroughs",
        "Waste Management Logs",
        "Chemical Storage Audits",
        "Auto-Ticket for Failures",
        "Digital E-Signatures",
        "Audit Trail Log",
        "Exportable PDF Reports"
      ],
      benefits: [
        "100% audit readiness",
        "Avoid environmental fines",
        "Standardized safety checks"
      ]
    },
    {
      badge: "MODULE 11",
      icon: React.createElement(FiRefreshCw),
      title: "24/7 Control Room Duty Logbook",
      description: "Digital duty logbook for control room engineers logging plant parameters and shift handovers.",
      features: [
        "Digital Duty Logbook",
        "Pending Work Orders Log",
        "Utility Anomaly Notes",
        "Shift Lead E-Sign-Off",
        "Plant Parameter Logs",
        "Audit Trail History",
        "Broadcast Announcements",
        "Mobile Handover App"
      ],
      benefits: [
        "Flawless 24/7 shift transitions",
        "Prevent missed utility alerts",
        "Complete duty accountability"
      ]
    },
    {
      badge: "MODULE 12",
      icon: React.createElement(FiBarChart2),
      title: "Infrastructure Analytics & Executive BI",
      description: "Executive dashboards tracking grid reliability, solar yield, STP water quality, and maintenance costs.",
      features: [
        "Real-Time Operations BI",
        "Grid Reliability Scorecard",
        "Solar Energy Performance Ratio",
        "PM Compliance Reports",
        "Maintenance Cost Analysis",
        "Technician Productivity",
        "Custom PDF Exports",
        "Executive Summary Reports"
      ],
      benefits: [
        "Data-driven leadership decisions",
        "Identify high-cost assets",
        "Optimize utility OpEx"
      ]
    }
  ],

  modulesList: [
    "Utility CMMS",
    "Substation PM",
    "STP/ETP Water CMMS",
    "Solar Farm PM",
    "Field Mobile App",
    "PTW & LOTO Safety",
    "SCADA Integration",
    "Asset QR Tagging",
    "Work Order Dispatch",
    "Utility Metering",
    "Contractor AMC Portal",
    "EHS Safety",
    "Control Room Logbook",
    "Maintenance Mobile App",
    "Compliance Audit Logs",
    "Energy Management"
  ],

  managedAssetsTable: [
    { category: "Electrical Power Grid", assets: "Transformers, High-Voltage Switchgear, Circuit Breakers, Substations, Dual DG Sets" },
    { category: "Water & Wastewater", assets: "Sewage Treatment Plants (STP), Effluent Plants (ETP), WTP Pumps, Dosing Motors, Blowers" },
    { category: "Renewable Energy", assets: "Solar PV Panels, String Inverters, Central Inverters, SCADA Weather Stations, Transformers" },
    { category: "Gas & Piping Infrastructure", assets: "Gas Distribution Skids, Pressure Regulating Stations, Flow Meters, Gas Detectors" },
    { category: "Civil & Heavy Infrastructure", assets: "Tunnels, Bridges, Cable Trenches, High-Mast Towers, Perimeter Security Fences" },
    { category: "Safety & EHS Systems", assets: "Transformer Deluge Systems, Gas Suppression, Fire Pumps, High-Voltage Protective Gear" }
  ],

  dailyWorkflowSteps: [
    { step: 1, title: "Substation / STP Sensor Alarm Triggered", desc: "SCADA anomaly or field engineer detects fault via mobile app." },
    { step: 2, title: "Ticket Generated & SLA Triggered", desc: "Ticket automatically created with high-priority SLA flag." },
    { step: 3, title: "Control Room Lead Reviews", desc: "Control room engineer validates request & checks safety clearance." },
    { step: 4, title: "High-Voltage PTW / LOTO Approved", desc: "Digital Permit-To-Work & Lockout-Tagout approved on mobile app." },
    { step: 5, title: "Technician Dispatched via App", desc: "Field technician receives push alert & arrives with required spares." },
    { step: 6, title: "Repair & Inspection Executed", desc: "Technician repairs transformer, dosing pump, or inverter fault." },
    { step: 7, title: "Safety & Quality Verification", desc: "Supervisor inspects repair quality & clears LOTO safety tags." },
    { step: 8, title: "Ticket Closed", desc: "Ticket automatically closed and logged into asset service register." },
    { step: 9, title: "Executive BI Dashboard Updated", desc: "Grid reliability score, STP water quality, and SLA metrics updated live." }
  ],

  businessBenefits: [
    {
      title: "Deliver 99.99% Utility Grid Reliability",
      desc: "Prevent transformer burnouts, switchgear failures, and power blackouts."
    },
    {
      title: "Zero Environmental & Effluent Violations",
      desc: "Ensure STP/ETP water treatment plants maintain 100% Pollution Control Board compliance."
    },
    {
      title: "Maximize Solar PV Energy Yields",
      desc: "Schedule automated solar panel washing and inverter thermal audits."
    },
    {
      title: "100% High-Voltage EHS & LOTO Compliance",
      desc: "Protect field technicians with digital Permit-To-Work (PTW) and Lockout-Tagout protocols."
    },
    {
      title: "Streamline Third-Party Vendor AMCs",
      desc: "Manage contractor permits, worker gate passes, and AMC performance scorecards."
    },
    {
      title: "Lower Utility Equipment Lifecycle Costs",
      desc: "Proactively maintain heavy transformers, pumps, blowers, and chillers."
    },
    {
      title: "Accurate Utility Metering & SCADA Integration",
      desc: "Automate energy, water, and gas meter readings to identify utility losses."
    },
    {
      title: "Eliminate Control Room Shift Gaps",
      desc: "Maintain continuous operational clarity between 24/7 control room shift leads."
    }
  ],

  dashboardWidgets: [
    "Substation Transformer Health %",
    "STP/ETP Effluent Compliance Score",
    "Solar Farm Energy Yield (kWh)",
    "Open Utility Breakdown Tickets",
    "SCADA Metering Status",
    "High-Voltage PTW Approvals",
    "EHS Safety Audit Score",
    "Contractor Gate Passes",
    "Maintenance Cost vs Budget",
    "24/7 Control Room Duty Shift Status"
  ],

  comparisonTable: [
    { feature: "Ticket Dispatch", facilityCore: "SCADA Sensor Triggers & Mobile App", traditional: "Radio Calls & Paper Logbooks in Control Rooms" },
    { feature: "Substation PM", facilityCore: "Automated Thermal & Run-Hour PM Checklists", traditional: "Reactive Repairs after Explosions/Outages" },
    { feature: "Water Quality Compliance", facilityCore: "Digital STP/ETP Effluent Logs & Threshold Alerts", traditional: "Manual Paper Registers" },
    { feature: "Worker Safety (PTW)", facilityCore: "Digital Lockout-Tagout (LOTO) & Permit Approval", traditional: "Verbal Safety Instructions" },
    { feature: "SCADA & Metering", facilityCore: "Real-time Automated Data Integration", traditional: "Manual End-of-Month Meter Readings" },
    { feature: "Contractor AMC Management", facilityCore: "Digital Contractor Gate Passes & Scorecards", traditional: "Unmonitored Vendor Visits" }
  ],

  metrics: [
    "Up to 60% reduction in unplanned utility outages",
    "Up to 99.99% reliability for critical power & water infrastructure",
    "Up to 100% compliance with environmental & EHS regulations",
    "Up to 25% increase in solar farm energy performance ratio",
    "Up to 40% reduction in contractor AMC management overhead",
    "Up to 75% reduction in paper logs and manual registers"
  ],

  internalLinks: [
    { label: "Utility Facility Management", link: "/industries/utilities-infrastructure" },
    { label: "Infrastructure CMMS", link: "/features" },
    { label: "Substation Maintenance", link: "/solutions" },
    { label: "Water Treatment Facility Management", link: "/features" },
    { label: "Solar Farm PM", link: "/solutions" },
    { label: "SCADA Metering Integration", link: "/features" },
    { label: "High Voltage PTW LOTO", link: "/solutions" },
    { label: "Work Order Dispatch", link: "/features" },
    { label: "Contractor Management", link: "/solutions" },
    { label: "Asset Management", link: "/features" },
    { label: "Pricing", link: "/pricing" },
    { label: "Contact Us", link: "/contact" },
    { label: "Free Trial", link: "https://admin.facilitycore.in/register" }
  ],

  cta: {
    icon: React.createElement(HiOutlineRocketLaunch),
    title: "Elevate Utilities & Infrastructure Operations Today",
    description:
      "Empower your utility operations directors, chief engineers, and plant leads with a single platform for substation maintenance, STP water quality, solar PV yield, and EHS safety compliance. Partner with FacilityCore."
  }
};
