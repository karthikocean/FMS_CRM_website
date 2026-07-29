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
  FiRefreshCw
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
  RiPlaneLine,
  RiSubwayLine
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
  metaTitle: "Airport & Transportation Facility Management Software | FacilityCore",
  metaDescription:
    "Manage airports, railway stations, metro systems, bus terminals and transportation hubs with FacilityCore. Automate maintenance, assets, inspections, safety, utilities, vendors, compliance, and workforce operations.",
  metaKeywords:
    "Airport Facility Management Software, Transportation Hub CMMS, Metro Station Maintenance Software, Baggage Handling Maintenance Software, Passenger Terminal Operations, Airport HVAC & Chiller Maintenance, Airport Asset Management Software, Airport Safety & EHS Compliance, Runway & Apron Maintenance, Railway Station Facility Software, Passenger Boarding Bridge Maintenance, Airport Janitorial & Housekeeping SLA, Transport Hub Utility Sub-Metering, Airport Fire & EHS Safety Inspections, Airport Vendor AMC Management, Airport Work Order Dispatch, Airport Security Guard Patrols, Terminal Escalator & Lift CMMS, Transit Hub CAFM, Aero-Bridge Maintenance Tracking",
  canonical: "https://facilitycore.in/industries/airports-transportation",
  robots: "index, follow",
  ogTitle: "Airport & Transportation Facility Management Software | FacilityCore",
  ogDescription:
    "Manage airports, railway stations, metro systems, bus terminals and transportation hubs with FacilityCore. Automate maintenance, assets, inspections, safety, utilities, vendors, compliance, and workforce operations.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/industries/airports-transportation",
  ogImage: "https://facilitycore.in/SmartCityimg.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Airport & Transportation Facility Management Software | FacilityCore",
  twitterDescription:
    "Manage airports, railway stations, metro systems, bus terminals and transportation hubs with FacilityCore. Automate maintenance, assets, inspections, safety, utilities, vendors, compliance, and workforce operations.",
  twitterImage: "https://facilitycore.in/SmartCityimg.png",
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Airport & Transportation Facility Management Software | FacilityCore",
      "description":
        "Manage airports, railway stations, metro systems, bus terminals and transportation hubs with FacilityCore. Automate maintenance, assets, inspections, safety, utilities, vendors, compliance, and workforce operations.",
      "url": "https://facilitycore.in/industries/airports-transportation"
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
          "name": "Airports & Transportation",
          "item": "https://facilitycore.in/industries/airports-transportation"
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
      "name": "FacilityCore Airport & Transportation Facility Management Software",
      "operatingSystem": "Web, iOS, Android",
      "applicationCategory": "BusinessApplication",
      "description":
        "Enterprise transit facility management and CMMS software for airports, metro rail systems, railway stations, bus terminals, and logistics hubs.",
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
          "name": "What is airport and transportation facility management software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Airport and transportation facility management software is a specialized digital platform designed for airport engineering teams, transit operators, and terminal managers to automate maintenance for baggage handling systems (BHS), passenger boarding bridges (PBB), concourse HVAC, escalators, housekeeping, and safety compliance."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore streamline airport terminal operations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore provides real-time SLA work order dispatch, mobile technician apps, preventive maintenance schedules, and live BI dashboards to ensure 24/7 continuous terminal readiness."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore track maintenance for Baggage Handling Systems (BHS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore schedules run-hour based PMs, monitors conveyor belt motor health, and dispatches high-priority breakdown tickets to BME/engineering teams."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software manage Passenger Boarding Bridges (PBB / Aero-Bridges)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore tracks preventive maintenance, hydraulic inspections, 400Hz GPU power units, and pre-conditioned air (PCA) units for aero-bridges."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore monitor terminal escalators, elevators, and travelators?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, vertical transportation systems are tracked with scheduled safety checklists, OEM AMC contract monitoring, and breakdown SLA alerts."
          }
        },
        {
          "@type": "Question",
          "name": "Can transit terminal staff and engineers log maintenance issues using a mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, terminal staff and technicians use the FacilityCore Mobile App to scan QR asset tags, attach photo proof, and update ticket statuses in real time."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore support QR code tagging for transit assets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all escalators, chillers, BHS motors, DG sets, fire pumps, and security scanners are tagged with QR codes for instant mobile lookup."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software track airport concourse housekeeping and washroom hygiene?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore digitizes concourse cleaning SLA checklists, washroom sensor audits, and waste disposal logs to maintain 5-star passenger hygiene."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore manage airside electrical, runway lighting, and apron assets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore schedules routine PM checkups for runway edge lights, apron high-masts, airfield signs, and electrical substations."
          }
        },
        {
          "@type": "Question",
          "name": "Is FacilityCore suitable for airports, metro rail networks, and railway stations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. FacilityCore is built to scale across international airports, multi-station metro rail networks, and regional bus/rail terminals."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore handle aviation safety (ICAO/DGCA) and EHS compliance audits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore maintains digital, tamper-proof audit trails for fire safety walkthroughs, electrical thermal audits, and aviation regulatory inspections."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore digitize 24/7 terminal engineering shift handovers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Digital Duty Logbook records engineering shift handovers, pending emergency tickets, and plant utility anomalies for seamless 24/7 transit operations."
          }
        }
      ]
    }
  ]
};

// Page Main Data Object
export const airportsTransportationData = {
  hero: {
    badge: "AIRPORTS & TRANSPORTATION CMMS PLATFORM",
    title: "Airport & Transportation Facility Management Software",
    headline: "Ensure 24/7 Terminal Uptime, Passenger Safety & Transit Operations",
    description:
      "Unify airport engineering, baggage handling systems (BHS), passenger boarding bridges (PBB), terminal HVAC, escalators, cleanliness SLAs, security, and regulatory compliance into one enterprise transit platform.",
    backgroundImage: "/Airportimg.png"
  },

  stats: [
    { value: "55%", label: "Faster Terminal Breakdown SLA Resolution", icon: React.createElement(FiClock) },
    { value: "99.99%", label: "Uptime for Baggage (BHS) & Escalator Systems", icon: React.createElement(FiTrendingUp) },
    { value: "30%", label: "Lower Terminal Chiller & Utility Energy Costs", icon: React.createElement(FiShield) },
    { value: "100%", label: "Aviation Safety (ICAO/DGCA) Audit Compliance", icon: React.createElement(FiCheckCircle) }
  ],

  overview: {
    badge: "ENTERPRISE TRANSIT ERP",
    badgeIcon: React.createElement(HiOutlineSparkles),
    title: "Positioning FacilityCore as a Complete Airport & Transit Operations Solution",
    subtitle: "Built for Airport Operations Directors, Metro Transit Heads & Terminal Engineering Leads",
    content:
      "Airports, metro rail systems, and transportation terminals operate 24/7 under high passenger volumes and strict aviation safety standards. Any unexpected failure in baggage handling systems (BHS), passenger boarding bridges (PBB), terminal air conditioning, or escalators causes massive flight delays and passenger chaos. FacilityCore provides a medical-grade transit facility platform that unifies engineering work orders, BHS/PBB preventive maintenance, concourse cleanliness SLAs, utility metering, and regulatory compliance.",
    image: "/Airportimg.png",
    imageAlt: "Modern International Airport Terminal Managed by FacilityCore",
    highlights: [
      {
        icon: React.createElement(RiPlaneLine),
        title: "Airport CMMS & BHS Operations",
        desc: "Automate maintenance ticket dispatch, preventive schedules, and asset tracking across passenger terminals."
      },
      {
        icon: React.createElement(RiSmartphoneLine),
        title: "Mobile App for Engineers & Staff",
        desc: "Empower terminal engineers and technicians to receive SLA push alerts and update repairs in under 30 seconds."
      },
      {
        icon: React.createElement(RiShieldCheckLine),
        title: "ICAO / DGCA Safety Compliance",
        desc: "Maintain 100% tamper-proof digital logs for fire safety, airfield electricals, and aviation audits."
      },
      {
        icon: React.createElement(TbReportAnalytics),
        title: "Live Terminal Operations Dashboard",
        desc: "Real-time BI analytics tracking BHS uptime, escalator status, concourse hygiene, and energy usage."
      }
    ]
  },

  suitableFor: [
    "Airport Operations Directors",
    "Transit Engineering Heads",
    "Metro Railway Maintenance Leads",
    "Terminal Estate Managers",
    "Baggage System (BHS) Leads",
    "EHS & Aviation Safety Officers",
    "International & Domestic Airports",
    "Metro Rail Systems",
    "Railway Terminals",
    "Bus Rapid Transit (BRT) Hubs",
    "Seaports & Ferry Terminals",
    "Logistics Transit Hubs"
  ],

  challengesBadgeIcon: React.createElement(HiOutlineShieldCheck),
  challengesBadge: "TRANSIT OPERATIONAL CHALLENGES",
  challenges: [
    {
      icon: React.createElement(FiTool),
      title: "Critical Baggage Handling (BHS) Failure",
      description: "Conveyor belt or sorter jams disrupt luggage dispatch and cause flight departures to be delayed."
    },
    {
      icon: React.createElement(RiPlaneLine),
      title: "Passenger Boarding Bridge (PBB) Downtime",
      description: "Faulty aero-bridges or 400Hz GPU units prevent aircraft docking and passenger boarding."
    },
    {
      icon: React.createElement(TbBolt),
      title: "High Terminal HVAC & Chiller Energy Bills",
      description: "Massive terminal glass concourses require continuous cooling, inflating monthly utility expenses."
    },
    {
      icon: React.createElement(FiTrendingUp),
      title: "Terminal Escalator & Elevator Stoppages",
      description: "Out-of-service escalators and travelators frustrate passengers rushing to departure gates."
    },
    {
      icon: React.createElement(FiSmile),
      title: "Passenger Concourse & Washroom Hygiene",
      description: "Unmonitored washroom cleaning logs lead to poor hygiene ratings in passenger feedback surveys."
    },
    {
      icon: React.createElement(FiShield),
      title: "High-Volume Passenger Security Risks",
      description: "Managing security guard patrols, incident reporting, and access control across massive terminals manually."
    },
    {
      icon: React.createElement(FiTruck),
      title: "Unorganized Contractor & OEM Oversight",
      description: "Tracking third-party AMCs for X-Ray baggage scanners, elevators, and chillers is difficult."
    },
    {
      icon: React.createElement(FiZap),
      title: "Runway Light & Airside Electrical Faults",
      description: "Delayed maintenance of runway edge lighting or apron high-masts risks aviation safety."
    },
    {
      icon: React.createElement(FiClipboard),
      title: "Strict Aviation Safety (ICAO/DGCA) Audits",
      description: "Scattered paper inspection logs make passing regulatory aviation safety audits stressful."
    },
    {
      icon: React.createElement(FiRefreshCw),
      title: "Shift Duty Handover Miscommunication",
      description: "Verbal handovers between 24/7 engineering shifts cause missed breakdown tickets and delays."
    }
  ],

  solutionsMapping: [
    { challenge: "Critical Baggage Handling Failure", solution: "Automated BHS Run-Hour PM & Instant Breakdown Alert", icon: React.createElement(FiTool) },
    { challenge: "Passenger Boarding Bridge Downtime", solution: "Aero-Bridge Preventive Maintenance & Sensor Alerts", icon: React.createElement(RiPlaneLine) },
    { challenge: "High Terminal HVAC Power Bills", solution: "Real-Time Terminal HVAC & Chiller Optimization", icon: React.createElement(TbBolt) },
    { challenge: "Terminal Escalator Stoppages", solution: "24/7 Vertical Transportation SLA Dispatch & PM", icon: React.createElement(FiTrendingUp) },
    { challenge: "Concourse & Washroom Hygiene", solution: "Digital Housekeeping Audits & Sanitation Checklists", icon: React.createElement(FiSmile) },
    { challenge: "Passenger Security Risks", solution: "Guard Patrol Tracking & Incident Response App", icon: React.createElement(FiShield) },
    { challenge: "Unorganized Contractor Oversight", solution: "Third-Party Aviation Vendor & AMC Management Portal", icon: React.createElement(FiTruck) },
    { challenge: "Runway & Apron Electrical Faults", solution: "Airside Electrical & Apron Maintenance Scheduler", icon: React.createElement(FiZap) },
    { challenge: "Strict Aviation Safety Audits", solution: "Audit-Ready Digital Aviation Safety & EHS Logs", icon: React.createElement(FiClipboard) },
    { challenge: "Shift Duty Handover Miscommunication", solution: "Digital 24/7 Terminal Duty Logbook & Audit Trail", icon: React.createElement(FiRefreshCw) }
  ],

  capabilitiesBadgeIcon: React.createElement(FiLayers),
  capabilitiesBadge: "PURPOSE-BUILT MODULES",
  keyModules: [
    {
      badge: "MODULE 1",
      icon: React.createElement(RiPlaneLine),
      title: "Terminal Engineering & Concourse CMMS",
      description: "Instant SLA work order dispatch for HVAC, lighting, plumbing, and power in passenger terminals.",
      features: [
        "Terminal SLA Ticket Routing",
        "Priority Level Allocation",
        "Technician Mobile App",
        "Photo & Video Proof",
        "Parts Used Allocation",
        "Supervisor Approval",
        "Escalation Matrix Alerts",
        "Work Order History"
      ],
      benefits: [
        "Instant emergency response",
        "Eliminate communication delays",
        "Transparent SLA tracking"
      ]
    },
    {
      badge: "MODULE 2",
      icon: React.createElement(FiTool),
      title: "Baggage Handling System (BHS) PM",
      description: "Preventive maintenance, motor health monitoring, and breakdown dispatch for baggage conveyor belts.",
      features: [
        "BHS Run-Hour PM Scheduler",
        "Conveyor Belt Inspection",
        "Sorter Motor Checklists",
        "Breakdown Emergency Alerts",
        "Spare Parts Inventory Log",
        "OEM Vendor Tracking",
        "Uptime Performance Score",
        "Mobile BME/BHS App"
      ],
      benefits: [
        "99.99% BHS system uptime",
        "Prevent luggage dispatch delays",
        "Extend conveyor motor life"
      ]
    },
    {
      badge: "MODULE 3",
      icon: React.createElement(RiPlaneLine),
      title: "Passenger Boarding Bridge (PBB)",
      description: "Routine PM inspections for aero-bridges, hydraulic systems, 400Hz GPU power, and PCA cooling units.",
      features: [
        "Aero-Bridge PM Checklists",
        "Hydraulic Pressure Logging",
        "400Hz GPU Power Unit PM",
        "PCA Air Conditioning Check",
        "Docking Sensor Inspection",
        "Breakdown Alert Dispatch",
        "Safety Interlock Checks",
        "Service History Log"
      ],
      benefits: [
        "Uninterrupted aircraft docking",
        "Protect aircraft GPUs",
        "Ensure passenger safety"
      ]
    },
    {
      badge: "MODULE 4",
      icon: React.createElement(FiTrendingUp),
      title: "Terminal Escalators & Elevators",
      description: "Preventive maintenance and breakdown tracking for concourse escalators, travelators, and lifts.",
      features: [
        "Escalator PM Scheduler",
        "Travelator Safety Checks",
        "Lift Safety Brake Audits",
        "Emergency Ticket Dispatch",
        "OEM AMC Expiry Alerts",
        "Technician Mobile App",
        "Uptime Performance Score",
        "Work Order History"
      ],
      benefits: [
        "Seamless passenger movement",
        "99.9% vertical transport uptime",
        "Lower elevator AMC costs"
      ]
    },
    {
      badge: "MODULE 5",
      icon: React.createElement(TbBolt),
      title: "Terminal HVAC & Air Quality",
      description: "Monitor central chillers, AHUs, cooling towers, and indoor air quality across departure halls.",
      features: [
        "Chiller Efficiency Logging",
        "AHU Filter Maintenance",
        "Cooling Tower Water Audits",
        "Indoor Air Quality (IAQ) Logs",
        "Peak Load Management",
        "Energy Anomaly Alerts",
        "Automated PM Scheduler",
        "Temperature Reports"
      ],
      benefits: [
        "Comfortable terminal climate",
        "Lower HVAC power bills",
        "Extend chiller lifespan"
      ]
    },
    {
      badge: "MODULE 6",
      icon: React.createElement(FiSmile),
      title: "Concourse Housekeeping & Washrooms",
      description: "Digital washroom cleaning SLA checklists, concourse floor sanitation, and waste disposal audits.",
      features: [
        "Washroom SLA Tracking",
        "Concourse Cleaning Logs",
        "Janitorial Mobile App",
        "Waste Disposal Certificates",
        "Pest Control Audits",
        "Mandated Photo Captures",
        "Supervisor Rating Log",
        "Hygiene Scorecards"
      ],
      benefits: [
        "5-star passenger hygiene",
        "Prevent washroom complaints",
        "High passenger satisfaction"
      ]
    },
    {
      badge: "MODULE 7",
      icon: React.createElement(FiZap),
      title: "Airside & Apron Electrical PM",
      description: "Schedule PM checkups for runway edge lighting, apron high-masts, airfield signs, and substations.",
      features: [
        "Runway Lighting PM",
        "Apron High-Mast Inspection",
        "Substation Parameter Logs",
        "Airfield Sign Checklists",
        "Dual DG Auto-Start Logs",
        "UPS Battery Health Index",
        "Thermal Electrical Audits",
        "Emergency Power Logs"
      ],
      benefits: [
        "Uninterrupted airside power",
        "Protect flight safety",
        "100% DG backup readiness"
      ]
    },
    {
      badge: "MODULE 8",
      icon: React.createElement(RiQrCodeLine),
      title: "Transport Asset Management & QR",
      description: "Digital asset register with durable QR code labels for BHS motors, chillers, DG sets, and scanners.",
      features: [
        "QR Code Asset Tagging",
        "Asset Service History",
        "Warranty & AMC Expiry",
        "Depreciation Accounting",
        "Location & Terminal Mapping",
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
      badge: "MODULE 9",
      icon: React.createElement(FiDollarSign),
      title: "Utility Sub-Metering & Energy",
      description: "Log retail store sub-meters, terminal electricity meters, water usage, and DG fuel consumption.",
      features: [
        "Sub-Meter Reading Logs",
        "Automated Tenant Invoices",
        "Utility Usage Analytics",
        "Peak Load Monitoring",
        "Energy Anomaly Alerts",
        "Water & STP Metering",
        "DG Fuel Tracking",
        "Green Airport Reports"
      ],
      benefits: [
        "Accurate retail tenant billing",
        "Lower utility energy bills",
        "Promote green airport initiatives"
      ]
    },
    {
      badge: "MODULE 10",
      icon: React.createElement(FiShield),
      title: "Transit Security & Incident Response",
      description: "Digital guard patrol tracking, emergency panic alerts, CCTV audits, and visitor gate passes.",
      features: [
        "Guard Patrol Tracking",
        "Incident Reporting App",
        "CCTV Audit Logs",
        "Emergency Panic Alerts",
        "Lost & Found Register",
        "Blacklisted Visitor Alerts",
        "Daily Occurrence Log",
        "Contractor Gate Passes"
      ],
      benefits: [
        "Strong terminal security",
        "Faster incident response",
        "Complete digital audit trail"
      ]
    },
    {
      badge: "MODULE 11",
      icon: React.createElement(FiTruck),
      title: "Aviation Vendor & OEM AMC Portal",
      description: "Manage third-party AMCs for X-Ray scanners, elevators, chillers, and security contractors.",
      features: [
        "Vendor Directory",
        "AMC Contract Logs",
        "Permit-To-Work (PTW)",
        "Contractor Gate Passes",
        "Worker Safety Induction",
        "Vendor Performance SLA",
        "Service Entry Sheets",
        "Payment Approvals"
      ],
      benefits: [
        "Complete vendor control",
        "Enforce aviation safety",
        "Simplified vendor billing"
      ]
    },
    {
      badge: "MODULE 12",
      icon: React.createElement(FiRefreshCw),
      title: "24/7 Terminal Duty Logbook",
      description: "Digitize engineering duty handovers between morning, evening, and night shifts across 24/7 terminals.",
      features: [
        "Digital Duty Logbook",
        "Pending Emergency Tickets",
        "Utility Anomaly Notes",
        "Shift Lead E-Sign-Off",
        "BHS & Chiller Status",
        "Audit Log History",
        "Broadcast Announcements",
        "Mobile Handover App"
      ],
      benefits: [
        "Flawless 24/7 shift transitions",
        "Prevent missed repair tasks",
        "Complete shift accountability"
      ]
    }
  ],

  modulesList: [
    "Airport CMMS",
    "Baggage System BHS",
    "Aero-Bridge PBB",
    "Terminal Escalator PM",
    "Terminal HVAC Chiller",
    "Concourse Housekeeping SLA",
    "Airside Electrical",
    "Asset QR Tagging",
    "Work Order Dispatch",
    "Utility Monitoring",
    "Aviation Vendor Portal",
    "Transit Security",
    "Aviation Safety EHS",
    "Maintenance Mobile App",
    "Compliance Audit Logs",
    "Energy Management"
  ],

  managedAssetsTable: [
    { category: "Baggage & Passenger Movement", assets: "Baggage Handling Conveyors (BHS), Passenger Boarding Bridges (PBB), Escalators, Travelators, Lifts" },
    { category: "Terminal HVAC & Environment", assets: "Central Chillers, Air Handling Units (AHU), Jet Fans, Pre-Conditioned Air (PCA) Units" },
    { category: "Power & Ground Support", assets: "400Hz Ground Power Units (GPU), Substation, Dual DG Sets, UPS Systems, Solar Plants" },
    { category: "Airside & Apron Infrastructure", assets: "Runway Edge Lights, Apron High-Mast Lighting, Airfield Signs, Fuel Hydrant Valves" },
    { category: "Security & Surveillance", assets: "X-Ray Baggage Scanners, Metal Detectors, CCTV Cameras, Access Control Gates" },
    { category: "Sanitation & Facilities", assets: "Terminal Washrooms, ETP/STP Water Plants, Solid Waste Incinerators, Fire Pumps" }
  ],

  dailyWorkflowSteps: [
    { step: 1, title: "Fault Detected on BHS / Escalator", desc: "Automated sensor alert or staff reports ticket via mobile app." },
    { step: 2, title: "Ticket Generated & SLA Triggered", desc: "Ticket automatically routed with high-priority SLA flag to engineering." },
    { step: 3, title: "Terminal Lead Reviews", desc: "Terminal engineering manager validates ticket & dispatches technician." },
    { step: 4, title: "Technician Dispatched via App", desc: "Technician receives mobile push alert & retrieves spare components." },
    { step: 5, title: "On-Site Diagnostics & Repair", desc: "Technician executes repair on BHS motor, escalator, or HVAC." },
    { step: 6, title: "Quality & Safety Verification", desc: "Supervisor inspects repair quality & verifies safety interlocks." },
    { step: 7, title: "Shift Supervisor Digital Sign-Off", desc: "Supervisor approves work completion on mobile app." },
    { step: 8, title: "Ticket Closed", desc: "Ticket automatically closed and logged into asset service register." },
    { step: 9, title: "Executive BI Dashboard Updated", desc: "BHS uptime, escalator status, and SLA performance updated live." }
  ],

  businessBenefits: [
    {
      title: "Deliver 5-Star Passenger Experience",
      desc: "Ensure terminal air conditioning, escalators, baggage belts, and washrooms operate flawlessly."
    },
    {
      title: "Ensure 99.99% Uptime for Critical Assets",
      desc: "Prevent baggage handling (BHS) and passenger boarding bridge (PBB) breakdowns."
    },
    {
      title: "Lower Terminal HVAC & Energy Costs",
      desc: "Optimize central chillers, high-bay terminal lighting, and DG fuel consumption."
    },
    {
      title: "100% Aviation Safety Audit Compliance",
      desc: "Maintain digital inspection logs for fire safety, airfield electricals, and ICAO/DGCA audits."
    },
    {
      title: "Streamline Aviation Vendor AMCs",
      desc: "Manage third-party contracts for X-Ray scanners, elevators, chillers, and security."
    },
    {
      title: "Eliminate 24/7 Shift Handover Gaps",
      desc: "Maintain continuous operational clarity between engineering shift leads."
    },
    {
      title: "Accurate Terminal Sub-Metering",
      desc: "Automate retail store electricity sub-metering to eliminate billing disputes."
    },
    {
      title: "Enhance Terminal Security & Safety",
      desc: "Monitor guard patrols, visitor gate passes, and emergency panic alerts in real time."
    }
  ],

  dashboardWidgets: [
    "Baggage System (BHS) Uptime %",
    "Escalator & Lift Availability",
    "Open Terminal SLA Tickets",
    "Terminal HVAC Chiller Efficiency",
    "Concourse Hygiene Score",
    "Airside PM Compliance %",
    "Aviation Safety Audit Score",
    "Vendor AMC Performance",
    "Terminal Power & DG Status",
    "24/7 Duty Shift Operations"
  ],

  comparisonTable: [
    { feature: "Ticket Dispatch", facilityCore: "Mobile SLA App & Sensor Alerts", traditional: "Radio Calls & Paper Logs in Control Rooms" },
    { feature: "Baggage System PM", facilityCore: "Automated Run-Hour PM & Sensor Alerts", traditional: "Reactive Fixes after Terminal Jam" },
    { feature: "Terminal Hygiene", facilityCore: "Digital Washroom Checklists & QR Audits", traditional: "Paper Schedules on Concourse Walls" },
    { feature: "Aviation Safety Audits", facilityCore: "One-Click Audit-Ready Digital ICAO Logs", traditional: "Missing Paper Records & Audit Stress" },
    { feature: "Vendor AMC Management", facilityCore: "Vendor Scorecards & Digital PTW", traditional: "Unmonitored Contractor Work" },
    { feature: "Shift Duty Handover", facilityCore: "Digital Duty Logbook & Audit Trail", traditional: "Verbal Handovers across 24/7 Shifts" }
  ],

  metrics: [
    "Up to 55% faster terminal issue resolution",
    "Up to 99.99% uptime for baggage handling systems & escalators",
    "Up to 30% reduction in airport terminal energy & chiller costs",
    "Up to 100% compliance with aviation safety & EHS regulations",
    "Up to 40% reduction in vendor contract management overhead",
    "Up to 70% reduction in paper forms and logbooks"
  ],

  internalLinks: [
    { label: "Airport Facility Management", link: "/industries/airports-transportation" },
    { label: "Transportation Hub CMMS", link: "/features" },
    { label: "Metro Station Maintenance", link: "/solutions" },
    { label: "Baggage System Maintenance", link: "/features" },
    { label: "Terminal HVAC Management", link: "/solutions" },
    { label: "Concourse Housekeeping", link: "/features" },
    { label: "Aero-Bridge Maintenance", link: "/solutions" },
    { label: "Work Order Dispatch", link: "/features" },
    { label: "Contractor Management", link: "/solutions" },
    { label: "Asset Management", link: "/features" },
    { label: "Pricing", link: "/pricing" },
    { label: "Contact Us", link: "/contact" },
    { label: "Free Trial", link: "https://admin.facilitycore.in/register" }
  ],

  cta: {
    icon: React.createElement(HiOutlineRocketLaunch),
    title: "Elevate Airport & Transit Terminal Operations Today",
    description:
      "Empower your airport operations directors, transit engineering heads, and terminal leads with a single platform for baggage maintenance, aero-bridges, concourse hygiene, and facility operations. Partner with FacilityCore."
  }
};
