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
  FiSun,
  FiMapPin
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
  RiGovernmentLine,
  RiMapPinLine
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
  metaTitle: "Smart City Operations & Infrastructure Management Software | FacilityCore",
  metaDescription:
    "Manage smart city infrastructure, public assets, utilities, roads, parks, lighting, buildings, inspections, maintenance, citizen services, vendors, and workforce using FacilityCore's integrated Smart City Operations Platform.",
  metaKeywords:
    "Smart City Operations Platform, Smart City CMMS Software, Municipal Infrastructure Software, Smart City Asset Management, Smart Street Lighting Management, Smart Water & Waste Management, Civic Infrastructure Operations, IoT Smart City Maintenance, Smart City ICCC Integration, Citizen Grievance & Facility Portal, Smart City Public Utilities, Municipal Asset Tracking Software, Smart Park & Recreation Maintenance, City Transport Infrastructure CMMS, Smart City EHS & Safety Compliance, Municipal Vendor AMC Management, Smart City GIS Mapping, Urban Facility Operations Software, Smart City SCADA Sensor Monitoring, Public Asset Maintenance ERP",
  canonical: "https://facilitycore.in/industries/smart-cities",
  robots: "index, follow",
  ogTitle: "Smart City Operations & Infrastructure Management Software | FacilityCore",
  ogDescription:
    "Manage smart city infrastructure, public assets, utilities, roads, parks, lighting, buildings, inspections, maintenance, citizen services, vendors, and workforce using FacilityCore's integrated Smart City Operations Platform.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/industries/smart-cities",
  ogImage: "https://facilitycore.in/SmartCityimg.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Smart City Operations & Infrastructure Management Software | FacilityCore",
  twitterDescription:
    "Manage smart city infrastructure, public assets, utilities, roads, parks, lighting, buildings, inspections, maintenance, citizen services, vendors, and workforce using FacilityCore's integrated Smart City Operations Platform.",
  twitterImage: "https://facilitycore.in/SmartCityimg.png",
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Smart City Operations & Infrastructure Management Software | FacilityCore",
      "description":
        "Manage smart city infrastructure, public assets, utilities, roads, parks, lighting, buildings, inspections, maintenance, citizen services, vendors, and workforce using FacilityCore's integrated Smart City Operations Platform.",
      "url": "https://facilitycore.in/industries/smart-cities"
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
          "name": "Smart Cities",
          "item": "https://facilitycore.in/industries/smart-cities"
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
      "name": "FacilityCore Smart City Operations & Infrastructure Management Software",
      "operatingSystem": "Web, iOS, Android",
      "applicationCategory": "BusinessApplication",
      "description":
        "Enterprise smart city operations and civic CMMS software for municipal corporations, smart city ICCCs, public infrastructure, and urban utilities.",
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
          "name": "What is smart city operations and infrastructure management software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Smart city operations and infrastructure management software is a specialized digital platform designed for municipal commissioners, smart city CEOs, and ICCC leads to automate maintenance for smart street lighting, water distribution, solid waste management, civic buildings, public parks, GIS asset mapping, and citizen grievance workflows."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore integrate with Integrated Command and Control Centers (ICCC)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore integrates with ICCC IoT sensors, SCADA feeds, and video analytics to trigger automated SLA work orders for field engineers whenever municipal asset anomalies occur."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore manage smart street lighting and feeder panels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore monitors smart LED streetlight controllers, feeder panels, energy consumption, and dispatches automated tickets to maintenance electricians."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software track municipal water distribution and SCADA leak alerts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore logs SCADA water flow meters, pressure sensors, and pumping station run-hours, creating real-time alert tickets for pipeline leaks."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore support solid waste management and IoT dustbin monitoring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore tracks IoT smart dustbin fill levels, sanitation truck routes, and waste clearance SLA compliance."
          }
        },
        {
          "@type": "Question",
          "name": "Can citizens and municipal staff log issues using a mobile app or web portal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, citizens and municipal staff use the Mobile Service Portal to submit civic maintenance issues with geo-location tags and photo proof."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore support GIS mapping and QR code tagging for civic assets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all municipal assets, streetlights, transformers, water meters, and parks are mapped on GIS layers and tagged with durable QR code labels."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software track maintenance for public parks and sports grounds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore schedules routine PM checkups for park irrigation systems, fountains, playground equipment, and public lighting."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore track energy, water, and solar generation across a city?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore logs municipal energy meters, water sub-meters, and solar rooftop yields to identify citywide utility wastage."
          }
        },
        {
          "@type": "Question",
          "name": "Is FacilityCore suitable for smart municipal corporations, SEZs, and smart industrial cities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. FacilityCore is engineered to scale across smart municipal corporations, Special Economic Zones (SEZ), and smart industrial townships."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore handle environmental and urban EHS safety compliance audits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore maintains digital, tamper-proof audit trails for fire safety walkthroughs, environmental air quality audits, and municipal compliance reviews."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore digitize 24/7 ICCC control room shift duty handovers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Digital ICCC Control Room Logbook records shift handovers, pending emergency tickets, and plant utility anomalies for continuous 24/7 city operations."
          }
        }
      ]
    }
  ]
};

// Page Main Data Object
export const smartCitiesData = {
  hero: {
    badge: "SMART CITY OPERATIONS & CIVIC CMMS PLATFORM",
    title: "Smart City Operations & Infrastructure Management Software",
    headline: "Empower Municipalities, Smart City ICCC & Urban Infrastructure Operations",
    description:
      "Unify smart city assets, IoT street lighting, water distribution, solid waste management, civic buildings, public parks, GIS mapping, vendor AMCs, and citizen grievance workflows into one integrated urban operations platform.",
    backgroundImage: "/Smartcitybannerimg.png"
  },

  stats: [
    { value: "60%", label: "Faster Citizen Grievance Resolution", icon: React.createElement(FiClock) },
    { value: "40%", label: "Reduction in Municipal Streetlight Power Bills", icon: React.createElement(FiTrendingUp) },
    { value: "99.9%", label: "Uptime for Smart City Public Assets & IoT Devices", icon: React.createElement(FiShield) },
    { value: "100%", label: "Civic Asset Transparency for Municipal Audits", icon: React.createElement(FiCheckCircle) }
  ],

  overview: {
    badge: "INTEGRATED URBAN OPERATIONS ERP",
    badgeIcon: React.createElement(HiOutlineSparkles),
    title: "Positioning FacilityCore as a Complete Smart City Operations Platform",
    subtitle: "Built for Smart City CEOs, Municipal Commissioners & ICCC Engineering Heads",
    content:
      "Smart cities require 24/7 real-time operational control across thousands of civic assets, IoT sensors, and public utilities. Unmonitored streetlight blackouts, water pipeline leaks, or overflowing waste bins damage citizen trust and municipal efficiency. FacilityCore provides a cloud-based urban operations platform that connects ICCC sensor feeds, GIS asset mapping, citizen grievance portals, field engineer dispatch, and vendor scorecards into a single unified solution.",
    image: "/Smartcitybannerimg.png",
    imageAlt: "Modern Smart City Control Center Managed by FacilityCore",
    highlights: [
      {
        icon: React.createElement(RiMapPinLine),
        title: "GIS-Integrated Smart City CMMS",
        desc: "Automate maintenance ticket dispatch and asset tracking across citywide GIS map layers."
      },
      {
        icon: React.createElement(RiSmartphoneLine),
        title: "Field Engineer Geofenced Mobile App",
        desc: "Empower municipal technicians to receive SLA push alerts and update repairs in under 30 seconds."
      },
      {
        icon: React.createElement(RiShieldCheckLine),
        title: "100% Municipal Audit Compliance",
        desc: "Maintain digital, tamper-proof audit trails for public assets, EHS, and municipal compliance."
      },
      {
        icon: React.createElement(TbReportAnalytics),
        title: "Live ICCC Executive BI Dashboard",
        desc: "Real-time BI analytics tracking citizen grievance SLAs, streetlight power, and water flow status."
      }
    ]
  },

  suitableFor: [
    "Smart City CEOs",
    "Municipal Commissioners",
    "Integrated Command & Control Center (ICCC) Heads",
    "Urban Development Authorities",
    "Public Works Directors",
    "Smart Infrastructure Engineers",
    "Smart Municipal Corporations",
    "Urban Transit Hubs",
    "Smart Industrial Cities",
    "Special Economic Zones (SEZ)",
    "Public Park Boards",
    "Civic Utility Boards"
  ],

  challengesBadgeIcon: React.createElement(HiOutlineShieldCheck),
  challengesBadge: "SMART CITY OPERATIONAL CHALLENGES",
  challenges: [
    {
      icon: React.createElement(FiZap),
      title: "Unmonitored Smart Streetlight Failures",
      description: "Dark streetlights cause public safety hazards and remain unreported for days without IoT automation."
    },
    {
      icon: React.createElement(FiDroplet),
      title: "Civic Water Pipeline Leaks & Pressure Loss",
      description: "Unidentified water pipe bursts and SCADA pressure drops waste millions of liters of clean water."
    },
    {
      icon: React.createElement(FiSmile),
      title: "Overflowing Smart Dustbins & Sanitation Delays",
      description: "Delayed garbage collection routes lead to overflowing bins and public health complaints."
    },
    {
      icon: React.createElement(FiMapPin),
      title: "Scattered Citywide Assets Across GIS Maps",
      description: "Managing thousands of streetlights, transformers, and public facilities without GIS mapping."
    },
    {
      icon: React.createElement(FiMessageSquare),
      title: "Slow Resolution of Citizen Grievances",
      description: "Citizen complaints submitted via paper registers or phone calls are delayed and untracked."
    },
    {
      icon: React.createElement(FiTruck),
      title: "Unorganized Municipal Contractor & AMC Management",
      description: "Tracking third-party AMCs for streetlights, traffic signals, and STP plants manually is difficult."
    },
    {
      icon: React.createElement(TbBolt),
      title: "High Citywide Energy & Utility Consumption",
      description: "Continuous public lighting and municipal building HVAC inflate annual city utility budgets."
    },
    {
      icon: React.createElement(FiCalendar),
      title: "Unmonitored Public Parks & Sports Infrastructure",
      description: "Lack of preventive PM for park fountains, walking tracks, and playground equipment."
    },
    {
      icon: React.createElement(FiCompass),
      title: "Paper-Based Municipal Inspection Registers",
      description: "Field inspections logged on paper forms lack photo proof and GPS geofence verification."
    },
    {
      icon: React.createElement(FiRefreshCw),
      title: "Lack of Unified City Operations Dashboard",
      description: "Siloed municipal departments hinder real-time decision-making in the ICCC control room."
    }
  ],

  solutionsMapping: [
    { challenge: "Unmonitored Streetlight Failures", solution: "Automated IoT Streetlight Alarm & Maintenance Dispatch", icon: React.createElement(FiZap) },
    { challenge: "Civic Water Pipeline Leaks", solution: "SCADA Water Metering & Automated Leak Alert Trigger", icon: React.createElement(FiDroplet) },
    { challenge: "Overflowing Smart Dustbins", solution: "IoT Waste Sensor Routing & Sanitation SLA Dispatch", icon: React.createElement(FiSmile) },
    { challenge: "Scattered Citywide Assets", solution: "GIS-Integrated Asset Mapping & QR Code Tagging", icon: React.createElement(FiMapPin) },
    { challenge: "Slow Resolution of Grievances", solution: "Citizen Portal / App Integration & Auto SLA Routing", icon: React.createElement(FiMessageSquare) },
    { challenge: "Unorganized Contractor Oversight", solution: "Third-Party Vendor AMC & Scorecard Portal", icon: React.createElement(FiTruck) },
    { challenge: "High Citywide Energy Usage", solution: "Urban Energy Sub-Metering & Solar Yield Analytics", icon: React.createElement(TbBolt) },
    { challenge: "Unmonitored Public Parks", solution: "Scheduled PM Checklists for Parks & Playgrounds", icon: React.createElement(FiCalendar) },
    { challenge: "Paper-Based Inspection Registers", solution: "Geofenced Mobile Inspection App for Field Engineers", icon: React.createElement(FiCompass) },
    { challenge: "Lack of Unified Operations Dashboard", solution: "ICCC Executive BI Dashboard with Real-Time City KPIs", icon: React.createElement(FiRefreshCw) }
  ],

  capabilitiesBadgeIcon: React.createElement(FiLayers),
  capabilitiesBadge: "PURPOSE-BUILT MODULES",
  keyModules: [
    {
      badge: "MODULE 1",
      icon: React.createElement(RiMapPinLine),
      title: "ICCC & GIS Smart City Operations",
      description: "Integrate ICCC control rooms with GIS map layers to visualize citywide public assets and maintenance alerts.",
      features: [
        "GIS Asset Mapping Layer",
        "ICCC Real-Time Feed Integration",
        "IoT Sensor Alarm Dispatch",
        "Priority SLA Routing",
        "Technician Mobile App",
        "Photo & Video Proof",
        "Supervisor Approval",
        "Work Order History"
      ],
      benefits: [
        "Single citywide operations view",
        "Instant IoT alarm response",
        "Transparent SLA tracking"
      ]
    },
    {
      badge: "MODULE 2",
      icon: React.createElement(FiZap),
      title: "Smart Street Lighting & Electrical PM",
      description: "Monitor smart LED streetlight controllers, feeder panels, energy consumption, and maintenance tickets.",
      features: [
        "Smart Streetlight Controller PM",
        "Feeder Panel Monitoring",
        "Burnout Alarm Dispatch",
        "Energy Metering Logs",
        "Solar High-Mast PM",
        "Technician Mobile App",
        "Uptime Performance Score",
        "Work Order History"
      ],
      benefits: [
        "99.9% streetlight uptime",
        "Lower municipal power bills",
        "Enhance public safety"
      ]
    },
    {
      badge: "MODULE 3",
      icon: React.createElement(FiDroplet),
      title: "Smart Water Distribution & SCADA",
      description: "Monitor SCADA water flow meters, pipeline pressure sensors, pumping stations, and leak detection alerts.",
      features: [
        "Water Flow Meter Logging",
        "Pressure Anomaly Alerts",
        "Pumping Station PM",
        "Chlorination Dosing Checklists",
        "Pipeline Leak Dispatch",
        "Reservoir Level Monitoring",
        "Water Quality Reports",
        "Mobile App for Operators"
      ],
      benefits: [
        "Prevent water wastage",
        "Ensure clean drinking water",
        "Quick leak resolution"
      ]
    },
    {
      badge: "MODULE 4",
      icon: React.createElement(FiSmile),
      title: "Solid Waste Management & Sanitation",
      description: "Track IoT smart dustbin fill levels, sanitation truck routes, and waste clearance SLA compliance.",
      features: [
        "Smart Bin Sensor Logs",
        "Waste Truck Route PM",
        "Garbage Clearance SLAs",
        "Public Washroom Checklists",
        "Pest Control Audits",
        "Mandated Photo Captures",
        "Janitorial Mobile App",
        "Sanitation Scorecards"
      ],
      benefits: [
        "Immaculate city hygiene",
        "Prevent dustbin overflow",
        "High public satisfaction"
      ]
    },
    {
      badge: "MODULE 5",
      icon: React.createElement(FiMessageSquare),
      title: "Citizen Grievance & Service Portal",
      description: "Mobile app and web portal for citizens to log civic issues with location tags and track repair progress.",
      features: [
        "Citizen Mobile App Portal",
        "Auto-Geolocated Tickets",
        "SLA Progress Notifications",
        "Photo Upload Feature",
        "Citizen Feedback & Star Rating",
        "Automated Ticket Routing",
        "Escalation Matrix Alerts",
        "Public Transparency Logs"
      ],
      benefits: [
        "Faster grievance resolution",
        "Empower citizen involvement",
        "High municipal trust"
      ]
    },
    {
      badge: "MODULE 6",
      icon: React.createElement(FiCalendar),
      title: "Public Parks & Recreation Maintenance",
      description: "Scheduled PM checklists for park irrigation systems, fountains, playground equipment, and public lighting.",
      features: [
        "Park Irrigation System PM",
        "Fountain Maintenance Check",
        "Playground Safety Audits",
        "Walking Track Inspection",
        "Greenery & Lawn Mowing PM",
        "Pest Control Audits",
        "Photo Verification Logs",
        "Public Park Scorecard"
      ],
      benefits: [
        "Maintain beautiful parks",
        "Ensure playground safety",
        "Extend civic asset life"
      ]
    },
    {
      badge: "MODULE 7",
      icon: React.createElement(RiQrCodeLine),
      title: "Municipal Asset Tracking & QR Code",
      description: "Centralized asset registry with durable QR code labels for transformers, pumps, streetlights, and parks.",
      features: [
        "QR Code Asset Tagging",
        "Asset Service History",
        "Warranty & AMC Expiry",
        "Depreciation Accounting",
        "GIS Map Layer Tagging",
        "Mobile QR Scanning",
        "Sub-Assembly Hierarchy",
        "CapEx Replacement Log"
      ],
      benefits: [
        "100% asset transparency",
        "Instant mobile lookup",
        "Optimized CapEx budgets"
      ]
    },
    {
      badge: "MODULE 8",
      icon: React.createElement(TbBolt),
      title: "Municipal Utility & Solar Management",
      description: "Track electricity sub-meters, water meters, solar rooftop yields, and DG fuel usage across municipal assets.",
      features: [
        "Sub-Meter Reading Logs",
        "Daily Consumption Reports",
        "Peak Load Monitoring",
        "Energy Anomaly Alerts",
        "Solar Panel Yield Logs",
        "DG Fuel Tracking",
        "Water Meter Audits",
        "Green City Reports"
      ],
      benefits: [
        "Identify utility wastage",
        "Lower municipal energy bills",
        "Promote green city initiatives"
      ]
    },
    {
      badge: "MODULE 9",
      icon: React.createElement(FiTruck),
      title: "Smart City Contractor & Vendor AMC",
      description: "Manage third-party AMCs for streetlights, traffic signals, STP plants, and security agencies.",
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
        "Enforce safety compliance",
        "Simplified vendor billing"
      ]
    },
    {
      badge: "MODULE 10",
      icon: React.createElement(FiClipboard),
      title: "EHS, Urban Safety & Disaster Inspections",
      description: "Digital inspection checklists for fire safety walkthroughs, flood sensors, and urban disaster readiness.",
      features: [
        "Digital Inspection Templates",
        "Mandated Photo Captures",
        "Pass/Fail Rating Logic",
        "Auto-Ticket for Failures",
        "Fire Safety Checklists",
        "Flood Sensor Audits",
        "EHS Safety Audits",
        "Exportable PDF Reports"
      ],
      benefits: [
        "100% audit readiness",
        "Enhance urban safety",
        "Standardized safety checks"
      ]
    },
    {
      badge: "MODULE 11",
      icon: React.createElement(RiSmartphoneLine),
      title: "Field Engineer Geofenced App",
      description: "Mobile app with offline capability and GPS geofencing for field technicians inspecting civic assets.",
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
      badge: "MODULE 12",
      icon: React.createElement(FiBarChart2),
      title: "Urban Analytics & Executive ICCC BI",
      description: "Executive dashboards tracking citizen SLA resolution rates, streetlight power bills, and PM compliance.",
      features: [
        "Real-Time Operations BI",
        "Citizen Grievance Scorecard",
        "Streetlight Uptime Metrics",
        "PM Compliance Reports",
        "Maintenance Cost Analysis",
        "Technician Productivity",
        "Custom PDF Exports",
        "ICCC Executive Dashboards"
      ],
      benefits: [
        "Data-driven leadership decisions",
        "Identify high-cost assets",
        "Optimize municipal OpEx"
      ]
    }
  ],

  modulesList: [
    "Smart City CMMS",
    "ICCC Integration",
    "IoT Street Lighting",
    "Smart Water SCADA",
    "Waste Management SLA",
    "GIS Asset Mapping",
    "Citizen Portal",
    "Public Parks PM",
    "Utility Metering",
    "Vendor AMC Portal",
    "EHS Urban Safety",
    "Field Mobile App",
    "Shift Duty Logbook",
    "Compliance Checklists",
    "Energy Analytics",
    "BI Dashboards"
  ],

  managedAssetsTable: [
    { category: "Smart Lighting & Power", assets: "Smart LED Streetlights, Feeder Panels, Transformer Substations, Solar Rooftops, High-Masts" },
    { category: "Water & Sanitation", assets: "Water Pipelines, SCADA Flow Meters, Pumping Stations, Sewage Treatment Plants (STP), Smart Dustbins" },
    { category: "Urban Transportation", assets: "Traffic Signal Controllers, Variable Message Signs (VMS), Bus Shelters, EV Charging Stations" },
    { category: "Civic & Municipal Buildings", assets: "City Halls, Municipal Offices, Public Health Centers, Libraries, Community Halls" },
    { category: "Parks & Recreation", assets: "Public Parks, Fountains, Playground Equipment, Walking Tracks, Sports Complexes" },
    { category: "Safety & Security", assets: "ICCC Surveillance Cameras, Emergency Panic Call Boxes, Environmental Sensors, Flood Sensors" }
  ],

  dailyWorkflowSteps: [
    { step: 1, title: "IoT Sensor / Citizen Ticket Triggered", desc: "SCADA alert or citizen app logs ticket with location tag." },
    { step: 2, title: "Ticket Generated & SLA Triggered", desc: "Ticket automatically routed with priority SLA tag in ICCC." },
    { step: 3, title: "ICCC Command Lead Reviews", desc: "ICCC operator validates request & assigns geofenced field engineer." },
    { step: 4, title: "Field Engineer Dispatched via App", desc: "Engineer receives push alert & arrives on site with required spares." },
    { step: 5, title: "On-Site Diagnostic & Repair", desc: "Engineer repairs streetlight, water valve, or smart bin sensor." },
    { step: 6, title: "Quality & Safety Verification", desc: "Supervisor inspects repair quality & verifies photo proof." },
    { step: 7, title: "Citizen / Staff E-Sign-Off", desc: "Citizen or municipal supervisor approves work completion on app." },
    { step: 8, title: "Ticket Closed", desc: "Ticket automatically closed and logged into asset service register." },
    { step: 9, title: "ICCC Executive BI Dashboard Updated", desc: "Citizen SLA response time & streetlight uptime updated live." }
  ],

  businessBenefits: [
    {
      title: "Deliver 99.9% Uptime for Smart City Assets",
      desc: "Ensure streetlights, water pumps, traffic signals, and public facilities operate continuously."
    },
    {
      title: "Reduce Municipal Energy Bills by 40%",
      desc: "Optimize smart LED streetlights, municipal building HVAC, and solar rooftop yields."
    },
    {
      title: "100% Transparency for Civic Asset Audits",
      desc: "Maintain complete digital records for all municipal transformers, pumps, and facilities."
    },
    {
      title: "Faster Resolution of Citizen Grievance Tickets",
      desc: "Empower citizens with a mobile service portal and automated SLA ticket routing."
    },
    {
      title: "Streamline Municipal Contractor AMCs",
      desc: "Manage third-party vendor AMCs, worker gate passes, and performance scorecards."
    },
    {
      title: "Unify Urban Operations into One ICCC Dashboard",
      desc: "Break down departmental silos with a single executive BI view for smart city leads."
    },
    {
      title: "Prevent Citywide Water Wastage",
      desc: "Detect pipeline leaks and SCADA pressure drops automatically before major bursts."
    },
    {
      title: "Enhance Urban Safety & Disaster Readiness",
      desc: "Monitor flood sensors, panic call boxes, and fire safety systems in real time."
    }
  ],

  dashboardWidgets: [
    "Smart Streetlight Uptime %",
    "Open Citizen Grievance Tickets",
    "Municipal Water Flow & Leak Status",
    "Waste Bin Clearance SLA",
    "ICCC System Health",
    "Field Engineer Productivity",
    "Contractor AMC Performance",
    "Citywide Energy Usage (kWh)",
    "Environmental Air Quality Score",
    "24/7 ICCC Control Room Status"
  ],

  comparisonTable: [
    { feature: "Ticket Dispatch", facilityCore: "SCADA / IoT Sensors & Citizen App", traditional: "Paper Register Complaints at Municipal Office" },
    { feature: "Streetlight Maintenance", facilityCore: "Automated IoT Alarm & PM Dispatch", traditional: "Manual Night Inspection Drives" },
    { feature: "Asset Visibility", facilityCore: "Live GIS Map & QR Code Asset Register", traditional: "Scattered Paper Files Across Departments" },
    { feature: "Contractor AMC Management", facilityCore: "Digital Vendor Scorecards & PTW", traditional: "Unmonitored Contractor Bills" },
    { feature: "Energy Analytics", facilityCore: "Automated Real-time SCADA & Solar BI", traditional: "Manual Monthly Utility Calculation" },
    { feature: "City Operations View", facilityCore: "Single Integrated ICCC Executive Dashboard", traditional: "Siloed Departmental Reports" }
  ],

  metrics: [
    "Up to 60% faster resolution of citizen grievance complaints",
    "Up to 40% reduction in municipal streetlight energy bills",
    "Up to 99.9% uptime for smart city public assets and IoT devices",
    "Up to 100% audit transparency for municipal asset tracking",
    "Up to 45% reduction in contractor AMC management overhead",
    "Up to 80% reduction in paper logs and manual registers"
  ],

  internalLinks: [
    { label: "Smart City Operations Platform", link: "/industries/smart-cities" },
    { label: "Smart City CMMS", link: "/features" },
    { label: "Municipal Infrastructure Management", link: "/solutions" },
    { label: "Smart Street Lighting", link: "/features" },
    { label: "Smart Water SCADA", link: "/solutions" },
    { label: "Citizen Grievance Portal", link: "/features" },
    { label: "GIS Asset Mapping", link: "/solutions" },
    { label: "Work Order Dispatch", link: "/features" },
    { label: "Contractor Management", link: "/solutions" },
    { label: "Asset Management", link: "/features" },
    { label: "Pricing", link: "/pricing" },
    { label: "Contact Us", link: "/contact" },
    { label: "Free Trial", link: "https://admin.facilitycore.in/register" }
  ],

  cta: {
    icon: React.createElement(HiOutlineRocketLaunch),
    title: "Elevate Smart City Operations & Urban Infrastructure Today",
    description:
      "Empower your smart city CEOs, municipal commissioners, and ICCC engineering heads with a single platform for smart streetlights, water SCADA, GIS asset mapping, and citizen services. Partner with FacilityCore."
  }
};
