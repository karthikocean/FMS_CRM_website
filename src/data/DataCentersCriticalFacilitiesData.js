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
  FiServer
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
  RiServerLine,
  RiCpuLine
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
  metaTitle: "Data Center & Critical Facility Management Software | FacilityCore",
  metaDescription:
    "Manage data centres and mission-critical facilities with FacilityCore. Automate maintenance, critical assets, work orders, utilities, compliance, vendors, inspections, and workforce operations.",
  metaKeywords:
    "Data Center Facility Management Software, Mission Critical CMMS Software, Data Center Infrastructure Management, UPS & Generator Maintenance Software, Precision Cooling CRAC Maintenance, Tier III Tier IV Data Center Operations, Data Center PUE Monitoring Software, Mission Critical Asset Management, Data Center EHS & Safety Compliance, NOC Facility Management, Server Room HVAC Maintenance, Data Center Power Redundancy PM, Data Center Vendor AMC Management, Critical Facility SLA Work Orders, Data Center Battery Bank Health, Data Center Thermal Imaging Audits, Data Center Fire Suppression Maintenance, Mission Critical Facility CAFM, Data Center Shift Duty Logbook, Colocation Facility Management",
  canonical: "https://facilitycore.in/industries/data-centers-critical-facilities",
  robots: "index, follow",
  ogTitle: "Data Center & Critical Facility Management Software | FacilityCore",
  ogDescription:
    "Manage data centres and mission-critical facilities with FacilityCore. Automate maintenance, critical assets, work orders, utilities, compliance, vendors, inspections, and workforce operations.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/industries/data-centers-critical-facilities",
  ogImage: "https://facilitycore.in/SmartCityimg.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Data Center & Critical Facility Management Software | FacilityCore",
  twitterDescription:
    "Manage data centres and mission-critical facilities with FacilityCore. Automate maintenance, critical assets, work orders, utilities, compliance, vendors, inspections, and workforce operations.",
  twitterImage: "https://facilitycore.in/SmartCityimg.png",
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Data Center & Critical Facility Management Software | FacilityCore",
      "description":
        "Manage data centres and mission-critical facilities with FacilityCore. Automate maintenance, critical assets, work orders, utilities, compliance, vendors, inspections, and workforce operations.",
      "url": "https://facilitycore.in/industries/data-centers-critical-facilities"
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
          "name": "Data Centers & Critical Facilities",
          "item": "https://facilitycore.in/industries/data-centers-critical-facilities"
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
      "name": "FacilityCore Data Center & Critical Facility Management Software",
      "operatingSystem": "Web, iOS, Android",
      "applicationCategory": "BusinessApplication",
      "description":
        "Enterprise mission-critical facility management and CMMS software for data centers, colocation hubs, hyperscale facilities, and server halls.",
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
          "name": "What is data center and critical facility management software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Data center and critical facility management software is a specialized digital platform designed for data center operations directors, NOC engineers, and critical facility leads to automate maintenance for UPS systems, battery banks, CRAC precision cooling, backup generators, PUE energy monitoring, MOP/SOP execution, and Tier III/IV compliance."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore ensure 99.999% uptime for mission-critical facilities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore enforces automated preventive maintenance schedules for dual power paths, CRAC units, and generators, dispatching instant Priority 1 SLA alerts to NOC engineers before equipment failures occur."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore track preventive maintenance for UPS systems and battery banks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore logs battery impedance, cell voltage, thermal imaging audits, and capacitor replacement cycles across all UPS systems."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software monitor CRAC and CRAH precision cooling units?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore tracks CRAC fan run-hours, filter replacement cycles, chilled water valve PMs, and integrates with water leak detection sensors."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore track PUE (Power Usage Effectiveness) and energy consumption?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore logs utility meters, PDU sub-meters, and IT load meters to calculate real-time PUE and identify energy wastage in server halls."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore enforce MOP (Method of Procedure) and SOP execution?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Technicians follow digital MOP checklists on their mobile app, requiring step-by-step verification, photo uploads, and supervisor sign-off before executing critical maintenance."
          }
        },
        {
          "@type": "Question",
          "name": "Can NOC engineers and critical facility technicians log work using a mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, engineers use the FacilityCore Mobile App to scan QR asset tags, execute MOPs, record meter readings, and upload maintenance proof."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore support QR code tagging for data center assets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all UPS units, PDUs, CRAC units, DG sets, fire suppression cylinders, and racks are tagged with QR codes for instant mobile lookup."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software manage OEM vendor contracts (Schneider, Vertiv, Cummins)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Contractor Portal manages third-party AMC contracts, vendor engineer gate passes, worker safety induction records, and service scorecards."
          }
        },
        {
          "@type": "Question",
          "name": "Is FacilityCore suitable for colocation data centers, enterprise server halls, and edge hubs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. FacilityCore is engineered to scale from single enterprise server rooms to multi-megawatt colocation and hyperscale data centers."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore handle Tier III / Tier IV and ISO 27001 compliance audits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore maintains digital, tamper-proof audit trails for maintenance logs, thermal scans, LOTO safety permits, and environmental audits."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore digitize 24/7 NOC and control room shift duty handovers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Digital NOC Duty Logbook records shift handovers, pending emergency tickets, and plant utility anomalies for continuous 24/7 facility operations."
          }
        }
      ]
    }
  ]
};

// Page Main Data Object
export const dataCentersCriticalFacilitiesData = {
  hero: {
    badge: "MISSION-CRITICAL DATA CENTER CMMS",
    title: "Data Center & Critical Facility Management Software",
    headline: "Ensure 99.999% Uptime, Zero Outages & Tier-Grade Compliance",
    description:
      "Unify server hall infrastructure, precision cooling (CRAC/CRAH), dual UPS systems, backup generators, PUE energy monitoring, NOC alerts, vendor AMCs, and mission-critical compliance into one secure platform.",
    backgroundImage: "/Datacenterimg.png"
  },

  stats: [
    { value: "70%", label: "Reduction in Critical Outage Risks", icon: React.createElement(FiClock) },
    { value: "99.999%", label: "Five-Nines Uptime for Power & Cooling", icon: React.createElement(FiTrendingUp) },
    { value: "20%", label: "Reduction in Facility PUE Energy Costs", icon: React.createElement(FiShield) },
    { value: "100%", label: "Tier III/IV & ISO 27001 Audit Compliance", icon: React.createElement(FiCheckCircle) }
  ],

  overview: {
    badge: "MISSION-CRITICAL INFRASTRUCTURE ERP",
    badgeIcon: React.createElement(HiOutlineSparkles),
    title: "Positioning FacilityCore as a Complete Data Center Facility Solution",
    subtitle: "Built for Data Center Operations Directors, Mission-Critical Leads & NOC Engineers",
    content:
      "Data centers and mission-critical facilities demand 99.999% five-nines availability. A single thermal spike in a server hall, battery failure in a UPS bank, or delayed generator switchover can result in millions of dollars in downtime penalties and lost customer trust. FacilityCore provides a cloud-based mission-critical CMMS that connects UPS/CRAC maintenance, digital MOP/SOP execution, NOC SLA dispatch, PUE energy sub-metering, and Tier III/IV compliance into a single unified platform.",
    image: "/Datacenterimg.png",
    imageAlt: "Modern Hyperscale Data Center Managed by FacilityCore",
    highlights: [
      {
        icon: React.createElement(RiServerLine),
        title: "Mission-Critical CMMS",
        desc: "Automate preventive maintenance for UPS systems, battery banks, CRAC units, and generators."
      },
      {
        icon: React.createElement(RiSmartphoneLine),
        title: "Digital MOP / SOP Execution App",
        desc: "Enforce step-by-step Method of Procedure (MOP) workflows with mandatory photo proof and digital sign-off."
      },
      {
        icon: React.createElement(RiShieldCheckLine),
        title: "Tier III / IV & ISO 27001 Readiness",
        desc: "Maintain 100% tamper-proof digital compliance logs for power redundancy, EHS, and safety audits."
      },
      {
        icon: React.createElement(TbReportAnalytics),
        title: "Real-Time PUE & NOC BI Dashboard",
        desc: "Real-time BI analytics tracking facility PUE, CRAC temperatures, UPS loads, and NOC SLA tickets."
      }
    ]
  },

  suitableFor: [
    "Data Center Operations Directors",
    "Mission-Critical Facilities Managers",
    "NOC Engineers",
    "Infrastructure Chiefs",
    "Colocation Operators",
    "Enterprise IT Infrastructure Heads",
    "Hyperscale Data Centers",
    "Colocation Data Centers",
    "Edge Data Center Hubs",
    "Financial & Banking Server Rooms",
    "Healthcare IT Data Facilities",
    "Telecom Switching Hubs"
  ],

  challengesBadgeIcon: React.createElement(HiOutlineShieldCheck),
  challengesBadge: "CRITICAL FACILITY CHALLENGES",
  challenges: [
    {
      icon: React.createElement(FiZap),
      title: "Catastrophic UPS & Battery Bank Failure",
      description: "Degraded UPS batteries or capacitor failure during grid outage cause immediate server hall blackouts."
    },
    {
      icon: React.createElement(FiServer),
      title: "CRAC / CRAH Precision Cooling Spikes",
      description: "CRAH fan failures or chilled water valve jams lead to rapid thermal runaway and server overheating."
    },
    {
      icon: React.createElement(TbBolt),
      title: "High Power Usage Effectiveness (PUE)",
      description: "Inaccessible PUE metrics and unmonitored PDU loads inflate data center utility bills."
    },
    {
      icon: React.createElement(FiTool),
      title: "DG Auto-Switchover Failures",
      description: "Stale fuel or weak DG starter batteries prevent emergency generators from picking up critical loads."
    },
    {
      icon: React.createElement(FiClipboard),
      title: "Strict Tier III / IV & ISO Audit Stress",
      description: "Scattered paper maintenance logs make passing Uptime Institute Tier audits stressful."
    },
    {
      icon: React.createElement(FiAlertTriangle),
      title: "Human Error in Maintenance Execution",
      description: "Unstructured maintenance procedures without digital MOP enforcement lead to accidental outages."
    },
    {
      icon: React.createElement(FiLock),
      title: "High-Security Server Room Access Violations",
      description: "Unmonitored visitor access to white space server halls creates severe security risks."
    },
    {
      icon: React.createElement(FiTruck),
      title: "Unorganized OEM Vendor (Schneider/Vertiv) AMCs",
      description: "Tracking third-party contracts for chillers, UPS units, and VESDA fire systems manually is difficult."
    },
    {
      icon: React.createElement(RiQrCodeLine),
      title: "Lack of Asset Calibration & Thermal History",
      description: "Missing thermal imaging reports and breaker test certificates delay compliance sign-offs."
    },
    {
      icon: React.createElement(FiRefreshCw),
      title: "Shift Handover Anomaly Loss in NOC",
      description: "Verbal handovers between 24/7 NOC shifts lead to unaddressed critical alerts."
    }
  ],

  solutionsMapping: [
    { challenge: "Catastrophic UPS & Battery Failure", solution: "Automated Battery Impedance & Thermal PM Scheduler", icon: React.createElement(FiZap) },
    { challenge: "CRAC / CRAH Precision Cooling Spikes", solution: "Real-Time CRAC Airflow, Temp & Leak Detection Alerts", icon: React.createElement(FiServer) },
    { challenge: "High Power Usage Effectiveness (PUE)", solution: "Real-Time PUE & Power Sub-Metering Analytics", icon: React.createElement(TbBolt) },
    { challenge: "DG Auto-Switchover Failures", solution: "Scheduled DG Load Bank Testing & Fuel Level PM", icon: React.createElement(FiTool) },
    { challenge: "Strict Tier III / IV & ISO Audit Stress", solution: "Audit-Ready Digital Tier Compliance & Maintenance Logs", icon: React.createElement(FiClipboard) },
    { challenge: "Human Error in Maintenance Execution", solution: "Standardized MOP / SOP Digital Execution Checklists", icon: React.createElement(FiAlertTriangle) },
    { challenge: "High-Security Server Access Violations", solution: "Digital Security Access, Biometric & Visitor Logs", icon: React.createElement(FiLock) },
    { challenge: "Unorganized OEM Vendor AMCs", solution: "Mission-Critical Vendor AMC & Scorecard Portal", icon: React.createElement(FiTruck) },
    { challenge: "Lack of Calibration & Thermal History", solution: "QR Code Asset Tagging & Maintenance History Register", icon: React.createElement(RiQrCodeLine) },
    { challenge: "Shift Handover Anomaly Loss in NOC", solution: "Digital 24/7 Control Room & NOC Shift Duty Logbook", icon: React.createElement(FiRefreshCw) }
  ],

  capabilitiesBadgeIcon: React.createElement(FiLayers),
  capabilitiesBadge: "PURPOSE-BUILT MODULES",
  keyModules: [
    {
      badge: "MODULE 1",
      icon: React.createElement(RiServerLine),
      title: "Mission-Critical Asset Management",
      description: "Centralized asset registry with durable QR code labels for UPS units, PDUs, CRACs, and DG sets.",
      features: [
        "QR Code Asset Tagging",
        "Asset Service History",
        "Warranty & AMC Expiry",
        "Depreciation Accounting",
        "White Space Hall Mapping",
        "Mobile QR Scanning",
        "Sub-Assembly Hierarchy",
        "CapEx Replacement Log"
      ],
      benefits: [
        "100% asset visibility",
        "Instant mobile lookup",
        "Optimized CapEx budgets"
      ]
    },
    {
      badge: "MODULE 2",
      icon: React.createElement(FiServer),
      title: "Precision Cooling (CRAC / CRAH) CMMS",
      description: "Preventive maintenance, chilled water valve checks, fan run-hours, and leak detection for CRAC units.",
      features: [
        "CRAC Fan PM Scheduler",
        "Filter Replacement Alerts",
        "Chilled Water Valve Checks",
        "Leak Cable Integration",
        "Humidity & Temp Logging",
        "Emergency Ticket Dispatch",
        "Uptime Performance Score",
        "Mobile BME/NOC App"
      ],
      benefits: [
        "Prevent server overheating",
        "Extend CRAC unit life",
        "Maintain optimal hall climate"
      ]
    },
    {
      badge: "MODULE 3",
      icon: React.createElement(FiZap),
      title: "UPS, Battery Bank & Power PM",
      description: "Track battery cell impedance, voltage, thermal imaging audits, and static transfer switches (STS).",
      features: [
        "UPS PM Checklists",
        "Battery Cell Impedance Log",
        "Capacitor Replacement PM",
        "STS Switchover Testing",
        "Thermal Imaging History",
        "Breakdown SLA Alerts",
        "PDU Load Balancing",
        "Battery Health Scorecard"
      ],
      benefits: [
        "Zero power path downtime",
        "Prevent battery cell explosions",
        "100% power redundancy"
      ]
    },
    {
      badge: "MODULE 4",
      icon: React.createElement(FiTool),
      title: "Emergency Generator (DG) & Load Bank",
      description: "Routine load bank testing, fuel quality checks, starter battery PM, and ATS panel switchover logs.",
      features: [
        "Load Bank Test Scheduler",
        "DG Fuel Level & Quality Log",
        "Starter Battery Health PM",
        "ATS Switchover Audits",
        "Lube Oil Analysis Log",
        "Exhaust Emissions Check",
        "OEM AMC Expiry Alerts",
        "Generator Health Score"
      ],
      benefits: [
        "100% DG auto-start reliability",
        "Prevent stale fuel outages",
        "Extend generator engine life"
      ]
    },
    {
      badge: "MODULE 5",
      icon: React.createElement(TbBolt),
      title: "Real-Time PUE & Energy Metering",
      description: "Log utility meters, PDU sub-meters, and IT load meters to calculate real-time PUE and identify energy loss.",
      features: [
        "Real-Time PUE Calculation",
        "PDU Sub-Metering Logs",
        "Peak Load Management",
        "Power Factor Optimization",
        "Energy Anomaly Alerts",
        "Chiller Plant KW/Ton Log",
        "Consumption Analytics",
        "Green Data Center Reports"
      ],
      benefits: [
        "Lower PUE energy costs",
        "Optimize PDU load balancing",
        "Data-driven energy decisions"
      ]
    },
    {
      badge: "MODULE 6",
      icon: React.createElement(FiBell),
      title: "NOC Incident & Critical SLA Engine",
      description: "Automated Priority 1 ticket routing from SCADA alarms to on-duty NOC engineers with real-time tracking.",
      features: [
        "SCADA Alarm Ticket Trigger",
        "Priority 1 SLA Routing",
        "NOC Push Notifications",
        "Technician Mobile App",
        "Photo & Video Proof",
        "Supervisor Approval",
        "Escalation Matrix Alerts",
        "Work Order History"
      ],
      benefits: [
        "Instant emergency response",
        "Eliminate communication lag",
        "Transparent SLA tracking"
      ]
    },
    {
      badge: "MODULE 7",
      icon: React.createElement(FiClipboard),
      title: "Digital MOP & SOP Execution",
      description: "Enforce digital Method of Procedure (MOP) step-by-step execution for high-risk maintenance in server halls.",
      features: [
        "Digital MOP Checklists",
        "Mandated Step Sign-Offs",
        "Photo Verification Uploads",
        "Supervisor Live Approval",
        "Risk Rating Matrix",
        "Rollback Procedure Logs",
        "Audit Trail Log",
        "Mobile MOP App"
      ],
      benefits: [
        "Eliminate human error",
        "Standardize maintenance",
        "100% procedural compliance"
      ]
    },
    {
      badge: "MODULE 8",
      icon: React.createElement(FiShield),
      title: "Fire Suppression & VESDA Systems",
      description: "Routine PM for VESDA early smoke detection, FM200/Novec gas cylinders, and pre-action sprinklers.",
      features: [
        "VESDA Filter PM",
        "Gas Cylinder Weight Checks",
        "Pre-Action Valve Audits",
        "Fire Panel Checklists",
        "Gas Release Tests",
        "Emergency Exit Audits",
        "OEM Service Logs",
        "Fire Safety Scorecards"
      ],
      benefits: [
        "Ensure server hall safety",
        "Prevent accidental gas discharge",
        "100% NFPA compliance"
      ]
    },
    {
      badge: "MODULE 9",
      icon: React.createElement(FiTruck),
      title: "OEM Vendor & Critical AMC Management",
      description: "Manage third-party AMCs for Vertiv, Schneider, Cummins, and Caterpillar equipment and engineers.",
      features: [
        "Vendor Directory",
        "AMC Contract Logs",
        "Vendor Worker Gate Passes",
        "Safety Induction Records",
        "Insurance Verification",
        "Vendor Performance SLA",
        "Service Entry Sheets",
        "Payment Approvals"
      ],
      benefits: [
        "Complete vendor control",
        "Enforce data center safety",
        "Simplified vendor billing"
      ]
    },
    {
      badge: "MODULE 10",
      icon: React.createElement(FiLock),
      title: "Server Room Access & Visitor Management",
      description: "Digital gate passes, white space server hall access approvals, contractor logs, and security patrols.",
      features: [
        "Visitor Pre-Approval",
        "QR Gate Pass Verification",
        "Server Hall Access Logs",
        "Guard Patrol Tracking",
        "Emergency Panic Alerts",
        "Blacklisted Visitor Alerts",
        "Daily Occurrence Log",
        "CCTV Audit Logs"
      ],
      benefits: [
        "High server hall security",
        "Track visitor movement",
        "Complete digital access records"
      ]
    },
    {
      badge: "MODULE 11",
      icon: React.createElement(FiRefreshCw),
      title: "24/7 NOC & Control Duty Logbook",
      description: "Digital duty logbook for NOC engineers logging plant parameters, environmental shifts, and handovers.",
      features: [
        "Digital NOC Duty Logbook",
        "Pending Priority 1 Tickets",
        "Plant Anomaly Notes",
        "Shift Lead E-Sign-Off",
        "UPS & CRAC Parameter Logs",
        "Audit Log History",
        "Broadcast Announcements",
        "Mobile Handover App"
      ],
      benefits: [
        "Flawless 24/7 shift transitions",
        "Prevent missed NOC alerts",
        "Complete duty accountability"
      ]
    },
    {
      badge: "MODULE 12",
      icon: React.createElement(FiBarChart2),
      title: "Executive BI & Tier Compliance",
      description: "Executive dashboards tracking facility PUE, five-nines uptime, SLA resolution, and Tier III/IV compliance.",
      features: [
        "Real-Time Operations BI",
        "Five-Nines Uptime Scorecard",
        "Tier III/IV Audit Reports",
        "PM Compliance Metrics",
        "Maintenance Cost Analysis",
        "Technician Productivity",
        "Custom PDF Exports",
        "Executive Summary Reports"
      ],
      benefits: [
        "Data-driven leadership decisions",
        "Identify high-cost assets",
        "Optimize data center OpEx"
      ]
    }
  ],

  modulesList: [
    "Data Center CMMS",
    "CRAC Precision Cooling",
    "UPS & Battery PM",
    "Generator Load Bank",
    "PUE Monitoring",
    "NOC Incident Dispatch",
    "Digital MOP SOP",
    "Fire Suppression",
    "OEM Vendor Portal",
    "Server Hall Access",
    "Control Room Logbook",
    "Asset QR Tagging",
    "Work Order SLA",
    "EHS Compliance",
    "Energy Analytics",
    "BI Dashboards"
  ],

  managedAssetsTable: [
    { category: "Power Infrastructure", assets: "Dual UPS Systems, Battery Banks, Static Transfer Switches (STS), Power Distribution Units (PDU), Dual DG Sets" },
    { category: "Precision Cooling & HVAC", assets: "CRAC / CRAH Units, Chillers, Cooling Towers, In-Row Coolers, Water Leak Detection Cables" },
    { category: "Server Hall Infrastructure", assets: "Racks, Enclosures, Smart PDUs, Cable Trays, Environmental Sensors" },
    { category: "Fire & Safety Systems", assets: "VESDA Smoke Detection, FM200 / Novec Gas Suppression, Pre-Action Sprinklers, Fire Pumps" },
    { category: "Security & Surveillance", assets: "Biometric Access Control, Mantrap Doors, CCTV Systems, NOC Video Walls" },
    { category: "Utility & Backup Power", assets: "High-Voltage Substations, Transformers, ATS Panels, Fuel Storage Tanks" }
  ],

  dailyWorkflowSteps: [
    { step: 1, title: "CRAC / UPS Sensor Alarm Triggered", desc: "SCADA anomaly or NOC engineer detects fault via mobile app." },
    { step: 2, title: "Priority 1 SLA Ticket Generated", desc: "Ticket automatically created with high-priority SLA flag." },
    { step: 3, title: "NOC Lead Reviews & Dispatches", desc: "NOC manager validates ticket & dispatches critical facilities engineer." },
    { step: 4, title: "Digital MOP & Safety Clearance", desc: "Technician reviews digital Method of Procedure (MOP) & LOTO checklist." },
    { step: 5, title: "Technician Dispatched via App", desc: "Engineer arrives at server hall with required spare components." },
    { step: 6, title: "Repair & Diagnostic Execution", desc: "Engineer repairs CRAC, UPS, or generator fault following MOP steps." },
    { step: 7, title: "Quality & Safety Verification", desc: "Supervisor inspects repair quality & clears LOTO safety tags." },
    { step: 8, title: "Ticket Closed", desc: "Ticket automatically closed and logged into asset service register." },
    { step: 9, title: "Executive BI Dashboard Updated", desc: "Facility PUE, five-nines uptime, and SLA metrics updated live." }
  ],

  businessBenefits: [
    {
      title: "Deliver 99.999% Five-Nines Facility Uptime",
      desc: "Prevent server hall power blackouts, thermal runaways, and cooling failures."
    },
    {
      title: "Zero Unplanned Outages in Mission-Critical Halls",
      desc: "Ensure 100% power redundancy across dual UPS paths and generator sets."
    },
    {
      title: "Lower PUE (Power Usage Effectiveness)",
      desc: "Monitor central chillers, CRAC units, and PDU sub-meters to eliminate energy loss."
    },
    {
      title: "100% Audit Readiness for Tier III/IV & ISO 27001",
      desc: "Maintain digital, tamper-proof logs for maintenance, thermal scans, and safety permits."
    },
    {
      title: "Eliminate Human Error with Digital MOPs",
      desc: "Enforce step-by-step Method of Procedure workflows with photo verification."
    },
    {
      title: "Streamline OEM Vendor AMCs",
      desc: "Manage third-party contracts for Vertiv, Schneider, Cummins, and Caterpillar."
    },
    {
      title: "Enhance Server Room Access Security",
      desc: "Monitor white space visitor access, biometric logs, and guard patrols digitally."
    },
    {
      title: "Eliminate NOC Control Room Shift Gaps",
      desc: "Maintain continuous operational clarity between 24/7 NOC shift leads."
    }
  ],

  dashboardWidgets: [
    "Real-Time Facility PUE",
    "UPS System Load %",
    "CRAC Cooling Temp & Humidity",
    "Open Priority 1 Critical Tickets",
    "Generator Fuel & Battery Health",
    "MOP / SOP Compliance %",
    "Fire & VESDA System Status",
    "Vendor AMC Scorecard",
    "Maintenance Cost vs Budget",
    "24/7 NOC Shift Duty Status"
  ],

  comparisonTable: [
    { feature: "Ticket Dispatch", facilityCore: "SCADA / Sensor Triggers & NOC SLA App", traditional: "Phone Calls & Manual Logbooks in NOC" },
    { feature: "UPS & Battery PM", facilityCore: "Automated Impedance & Thermal PM Scheduler", traditional: "Reactive Battery Replacements after Failure" },
    { feature: "Cooling Management", facilityCore: "Real-Time CRAC Temp, Leak & Airflow Alerts", traditional: "Manual Hourly Walkthrough Logs" },
    { feature: "Procedure Execution", facilityCore: "Digital MOP / SOP Checklists with Photo Proof", traditional: "Paper Binder Procedure Manuals" },
    { feature: "PUE & Energy Analytics", facilityCore: "Live Automated Metering & PUE BI Scorecard", traditional: "Manual Monthly PUE Calculations" },
    { feature: "Shift Handover", facilityCore: "Digital NOC Control Room Duty Logbook", traditional: "Verbal Shift Handovers" }
  ],

  metrics: [
    "Up to 70% reduction in mission-critical facility downtime risk",
    "Up to 99.999% five-nines uptime for server hall power and cooling",
    "Up to 20% reduction in PUE energy costs",
    "Up to 100% compliance with Tier III/IV and ISO 27001 audits",
    "Up to 50% faster response time for Priority 1 critical alerts",
    "Up to 85% reduction in paper MOPs and manual logbooks"
  ],

  internalLinks: [
    { label: "Data Center Facility Management", link: "/industries/data-centers-critical-facilities" },
    { label: "Mission Critical CMMS", link: "/features" },
    { label: "CRAC Precision Cooling", link: "/solutions" },
    { label: "UPS Maintenance Software", link: "/features" },
    { label: "PUE Energy Monitoring", link: "/solutions" },
    { label: "NOC Incident Management", link: "/features" },
    { label: "Work Order Dispatch", link: "/solutions" },
    { label: "Contractor Management", link: "/features" },
    { label: "Asset Management", link: "/solutions" },
    { label: "Pricing", link: "/pricing" },
    { label: "Contact Us", link: "/contact" },
    { label: "Free Trial", link: "https://admin.facilitycore.in/register" }
  ],

  cta: {
    icon: React.createElement(HiOutlineRocketLaunch),
    title: "Elevate Data Center & Critical Facility Operations Today",
    description:
      "Empower your data center operations directors, NOC engineers, and critical facility leads with a single platform for UPS maintenance, CRAC cooling, digital MOPs, and Tier compliance. Partner with FacilityCore."
  }
};
