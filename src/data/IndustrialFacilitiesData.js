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
  RiGovernmentLine,
  RiCpuLine,
  RiToolsLine
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
  metaTitle: "Industrial Facility Management Software | Plant & Asset Management | FacilityCore",
  metaDescription:
    "Manage industrial facilities, manufacturing plants, production equipment, utilities, maintenance, inspections, safety, compliance, inventory, contractors, and workforce with FacilityCore's Industrial Operations Platform.",
  metaKeywords:
    "Industrial Facility Management Software, Plant & Asset Management Software, Industrial CMMS Software, Plant Maintenance Software, Industrial Equipment Lifecycle Management, Industrial EHS & Safety Compliance, Industrial Utility Sub-Metering, Industrial Spare Parts Inventory, Plant Operator Mobile App, Industrial Contractor AMC Management, Heavy Machinery Preventive Maintenance, Industrial Predictive Maintenance, Industrial Permit-To-Work PTW, Industrial Lockout-Tagout LOTO, Factory Utility SCADA Integration, Industrial OEE Monitoring, Industrial Shift Duty Logbook, Industrial Work Order Dispatch, Factory Environmental Inspection, Industrial CAFM ERP",
  canonical: "https://facilitycore.in/industries/industrial-facilities",
  robots: "index, follow",
  ogTitle: "Industrial Facility Management Software | Plant & Asset Management | FacilityCore",
  ogDescription:
    "Manage industrial facilities, manufacturing plants, production equipment, utilities, maintenance, inspections, safety, compliance, inventory, contractors, and workforce with FacilityCore's Industrial Operations Platform.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/industries/industrial-facilities",
  ogImage: "https://facilitycore.in/SmartCityimg.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Industrial Facility Management Software | Plant & Asset Management | FacilityCore",
  twitterDescription:
    "Manage industrial facilities, manufacturing plants, production equipment, utilities, maintenance, inspections, safety, compliance, inventory, contractors, and workforce with FacilityCore's Industrial Operations Platform.",
  twitterImage: "https://facilitycore.in/SmartCityimg.png",
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Industrial Facility Management Software | Plant & Asset Management | FacilityCore",
      "description":
        "Manage industrial facilities, manufacturing plants, production equipment, utilities, maintenance, inspections, safety, compliance, inventory, contractors, and workforce with FacilityCore's Industrial Operations Platform.",
      "url": "https://facilitycore.in/industries/industrial-facilities"
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
          "name": "Industrial Facilities",
          "item": "https://facilitycore.in/industries/industrial-facilities"
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
      "name": "FacilityCore Industrial Facility & Plant Management Software",
      "operatingSystem": "Web, iOS, Android",
      "applicationCategory": "BusinessApplication",
      "description":
        "Enterprise industrial facility management and CMMS software for manufacturing plants, heavy machinery, production utilities, and EHS compliance.",
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
          "name": "What is industrial facility management software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Industrial facility management software is a specialized digital platform designed for plant operations directors, maintenance managers, and chief engineers to automate maintenance for heavy machinery, production utilities, EHS safety permits (PTW/LOTO), spare parts inventory, contractor AMCs, and regulatory compliance."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore improve heavy equipment reliability and OEE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore enforces run-hour and calendar-based preventive maintenance (PPM) for production machinery, reducing emergency breakdowns and maximizing Overall Equipment Effectiveness (OEE)."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore enforce Permit-To-Work (PTW) and Lockout-Tagout (LOTO) safety?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore provides digital PTW approvals and mandatory high-risk LOTO checklists on mobile devices to protect workers during high-voltage and maintenance jobs."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software track plant preventive maintenance (PPM)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore generates automated PM schedules based on equipment run-hours, meter readings, or calendar intervals, dispatching push alerts to maintenance engineers."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore manage industrial utilities like compressors, boilers, and substations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore tracks maintenance schedules, efficiency parameters, and SCADA sub-metering for steam boilers, air compressors, chillers, and substations."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore track spare parts inventory and MRO reorder levels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore tracks spare parts usage per work order, monitors stock levels, and generates low-stock alerts to prevent maintenance delays."
          }
        },
        {
          "@type": "Question",
          "name": "Can plant operators and field technicians log maintenance work using a mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, technicians use the FacilityCore Mobile App to scan machine QR tags, attach photo proof, record meter readings, and update ticket statuses in real time."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore support QR code tagging for industrial machinery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all CNC machines, presses, compressors, boilers, pumps, and electrical panels are tagged with durable QR code labels for instant mobile lookup."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software manage third-party industrial contractors and vendor AMCs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Contractor Portal manages third-party AMC contracts, vendor worker gate passes, safety induction records, insurance compliance, and service scorecards."
          }
        },
        {
          "@type": "Question",
          "name": "Is FacilityCore suitable for manufacturing plants, chemical units, automobile, and heavy engineering?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. FacilityCore scales from single manufacturing plants to complex chemical processing units, automobile factories, and heavy engineering complexes."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore handle EHS, OSHA, and ISO 14001 compliance audits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore maintains digital, tamper-proof audit trails for fire safety walkthroughs, EHS inspections, LOTO permits, and environmental compliance."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore digitize 24/7 plant control room shift duty handovers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Digital Plant Control Room Logbook records shift handovers, pending emergency tickets, and utility anomalies for continuous 24/7 plant operations."
          }
        }
      ]
    }
  ]
};

// Page Main Data Object
export const industrialFacilitiesData = {
  hero: {
    badge: "INDUSTRIAL FACILITY & PLANT CMMS PLATFORM",
    title: "Industrial Facility Management Software | Plant & Asset Management",
    headline: "Maximize Plant Uptime, Heavy Asset Life & Industrial Safety Compliance",
    description:
      "Unify manufacturing plants, heavy machinery, production utilities, preventive maintenance (PPM), industrial safety (LOTO/PTW), spare parts inventory, contractor AMCs, and EHS compliance into one integrated plant operations platform.",
    backgroundImage: "/Industrialplantimg.png"
  },

  stats: [
    { value: "45%", label: "Reduction in Machine Breakdown Downtime", icon: React.createElement(FiClock) },
    { value: "100%", label: "EHS, OSHA & ISO Safety Compliance", icon: React.createElement(FiCheckCircle) },
    { value: "25%", label: "Lower Plant Utility & Compressor Power Bills", icon: React.createElement(FiTrendingUp) },
    { value: "35%", label: "Improvement in Spare Parts Inventory Turnover", icon: React.createElement(FiShield) }
  ],

  overview: {
    badge: "INTEGRATED PLANT OPERATIONS ERP",
    badgeIcon: React.createElement(HiOutlineSparkles),
    title: "Positioning FacilityCore as a Complete Industrial Facility Solution",
    subtitle: "Built for Plant Operations Directors, Maintenance Managers & Chief Engineers",
    content:
      "Industrial manufacturing plants and processing facilities rely on continuous machinery availability and rigid safety protocols. Unplanned compressor failures, boiler breakdowns, or safety non-compliance jeopardize production targets and worker safety. FacilityCore provides a cloud-based industrial CMMS that connects heavy equipment maintenance, digital PTW/LOTO safety, MRO spare parts inventory, SCADA utility metering, contractor AMCs, and EHS compliance into a single unified platform.",
    image: "/Industrialplantimg.png",
    imageAlt: "Modern Industrial Manufacturing Plant Managed by FacilityCore",
    highlights: [
      {
        icon: React.createElement(RiToolsLine),
        title: "Industrial Heavy Equipment CMMS",
        desc: "Automate preventive maintenance, run-hour tracking, and repair dispatch for heavy plant machinery."
      },
      {
        icon: React.createElement(RiSmartphoneLine),
        title: "Field Engineer Mobile App",
        desc: "Empower plant technicians to receive SLA push alerts, scan QR asset tags, and log repairs in under 30 seconds."
      },
      {
        icon: React.createElement(RiShieldCheckLine),
        title: "100% OSHA & ISO Audit Readiness",
        desc: "Maintain digital, tamper-proof audit trails for safety permits, LOTO logs, and EHS inspections."
      },
      {
        icon: React.createElement(TbReportAnalytics),
        title: "Real-Time Plant Operations BI",
        desc: "Real-time BI analytics tracking machine OEE, breakdown SLAs, spare parts stock, and utility usage."
      }
    ]
  },

  suitableFor: [
    "Plant Operations Directors",
    "Industrial Maintenance Managers",
    "Chief Engineers",
    "Plant EHS Officers",
    "Reliability Engineers",
    "Operations VPs",
    "Heavy Manufacturing Plants",
    "Chemical Processing Facilities",
    "Automobile & Engineering Units",
    "Metal & Mining Facilities",
    "Textile & Process Mills",
    "Industrial Parks & SEZs"
  ],

  challengesBadgeIcon: React.createElement(HiOutlineShieldCheck),
  challengesBadge: "INDUSTRIAL PLANT CHALLENGES",
  challenges: [
    {
      icon: React.createElement(FiTool),
      title: "Unplanned Heavy Equipment Breakdowns",
      description: "Unplanned CNC or press failures cause line stoppages and expensive emergency repair costs."
    },
    {
      icon: React.createElement(FiLock),
      title: "Severe Industrial Workplace & EHS Risks",
      description: "Paper safety permits and loose LOTO procedures endanger technician safety during high-risk repairs."
    },
    {
      icon: React.createElement(TbBolt),
      title: "High Factory Utility & Compressor Power Costs",
      description: "Unmonitored compressed air leaks and inefficient boiler operations inflate factory utility bills."
    },
    {
      icon: React.createElement(FiBox),
      title: "Missing Critical Spare Parts for Machine Repairs",
      description: "Inaccurate spare parts inventory delays machine repairs and extends downtime."
    },
    {
      icon: React.createElement(FiClock),
      title: "Slow Maintenance Ticket Dispatch to Technicians",
      description: "Paper job cards and verbal calls delay maintenance engineer response times."
    },
    {
      icon: React.createElement(FiTruck),
      title: "Unmonitored Industrial Vendor AMCs & Contractors",
      description: "Tracking external contractors for boiler AMCs, cranes, and specialized machinery manually is difficult."
    },
    {
      icon: React.createElement(FiClipboard),
      title: "Strict Industrial Safety & Environmental Audits",
      description: "Scattered paper registers make passing OSHA, ISO 14001, and PCB safety audits stressful."
    },
    {
      icon: React.createElement(RiQrCodeLine),
      title: "Lack of Equipment Calibration & Vibration History",
      description: "Missing calibration test reports and vibration analysis logs cause audit delays."
    },
    {
      icon: React.createElement(FiCompass),
      title: "Paper-Based Plant Maintenance Registers",
      description: "Field inspections logged on paper forms are prone to errors and lack mandatory photo proof."
    },
    {
      icon: React.createElement(FiRefreshCw),
      title: "Shift Handover Miscommunication in Control Rooms",
      description: "Verbal handovers between 24/7 control room shifts lead to unaddressed plant utility alerts."
    }
  ],

  solutionsMapping: [
    { challenge: "Unplanned Equipment Breakdowns", solution: "Automated Run-Hour & Calendar Preventive Maintenance (PPM)", icon: React.createElement(FiTool) },
    { challenge: "Severe Workplace & EHS Risks", solution: "Digital Permit-To-Work (PTW) & High-Risk Lockout-Tagout (LOTO)", icon: React.createElement(FiLock) },
    { challenge: "High Factory Utility Costs", solution: "Real-Time SCADA Utility Sub-Metering & Air Leak Audits", icon: React.createElement(TbBolt) },
    { challenge: "Missing Critical Spare Parts", solution: "Spare Parts Inventory Portal & Reorder Level Alerts", icon: React.createElement(FiBox) },
    { challenge: "Slow Maintenance Ticket Dispatch", solution: "Mobile Engineer App & Automated SLA Work Orders", icon: React.createElement(FiClock) },
    { challenge: "Unmonitored Industrial Vendors", solution: "Third-Party Contractor Portal & Safety Induction Logs", icon: React.createElement(FiTruck) },
    { challenge: "Strict Industrial Safety Audits", solution: "Audit-Ready EHS, ISO 14001 & OSHA Digital Reports", icon: React.createElement(FiClipboard) },
    { challenge: "Lack of Calibration & Vibration History", solution: "QR Code Asset Tagging & Equipment Calibration History", icon: React.createElement(RiQrCodeLine) },
    { challenge: "Paper-Based Inspection Registers", solution: "Geofenced Mobile Inspection App for Plant Engineers", icon: React.createElement(FiCompass) },
    { challenge: "Shift Handover Miscommunication", solution: "Digital 24/7 Plant Control Room Duty Logbook", icon: React.createElement(FiRefreshCw) }
  ],

  capabilitiesBadgeIcon: React.createElement(FiLayers),
  capabilitiesBadge: "PURPOSE-BUILT MODULES",
  keyModules: [
    {
      badge: "MODULE 1",
      icon: React.createElement(RiToolsLine),
      title: "Industrial Heavy Asset Management",
      description: "Centralized asset register with durable QR code tags for CNCs, presses, compressors, boilers, and transformers.",
      features: [
        "QR Code Asset Tagging",
        "Asset Service History",
        "Warranty & AMC Expiry",
        "Depreciation Accounting",
        "Plant Bay & Line Mapping",
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
      icon: React.createElement(FiCalendar),
      title: "Plant Preventive & Autonomous PM",
      description: "Automate run-hour, meter reading, and calendar-based PM schedules for production machinery.",
      features: [
        "Run-Hour PM Scheduler",
        "Equipment Checklists",
        "Technician Allocation",
        "Overdue PM Alerts",
        "Autonomous Operator Checks",
        "Vibration Analysis Logs",
        "Thermal Inspection PM",
        "Recurrent Work Orders"
      ],
      benefits: [
        "Prevent machine breakdowns",
        "Extend heavy machinery life",
        "Maximize machine OEE"
      ]
    },
    {
      badge: "MODULE 3",
      icon: React.createElement(FiClock),
      title: "Industrial Work Order SLA Engine",
      description: "Instant SLA work order dispatch for breakdown repairs with priority routing and escalation matrix.",
      features: [
        "Priority Level Allocation",
        "Auto-Routing to Technicians",
        "Mobile SLA Push Alerts",
        "Mandated Photo Proof",
        "Parts Used Allocation",
        "Supervisor Approval",
        "Escalation Matrix Alerts",
        "Work Order History"
      ],
      benefits: [
        "Faster repair response",
        "Eliminate paper job cards",
        "Transparent SLA tracking"
      ]
    },
    {
      badge: "MODULE 4",
      icon: React.createElement(FiLock),
      title: "Industrial Safety, PTW & LOTO",
      description: "Digital Permit-To-Work (PTW) approvals and Lockout-Tagout (LOTO) safety checklists on mobile devices.",
      features: [
        "Digital PTW Approvals",
        "High-Voltage LOTO Checklist",
        "Hot Work Safety Checks",
        "Confined Space Permits",
        "E-Signature Verification",
        "Audit Trail Log",
        "Mobile Safety Portal",
        "Safety Officer Approval"
      ],
      benefits: [
        "Zero workplace accidents",
        "Enforce strict safety protocol",
        "100% EHS compliance"
      ]
    },
    {
      badge: "MODULE 5",
      icon: React.createElement(TbBolt),
      title: "Factory Utility (Compressor & Boiler) CMMS",
      description: "Preventive maintenance and parameter monitoring for steam boilers, air compressors, chillers, and substations.",
      features: [
        "Air Compressor PM Scheduler",
        "Boiler Pressure & Temp Logs",
        "Chiller Plant Inspection",
        "Substation Switchgear PM",
        "Air Leak Audit Checklists",
        "Emergency Ticket Dispatch",
        "Uptime Performance Score",
        "Mobile Operator App"
      ],
      benefits: [
        "Prevent utility blackouts",
        "Lower factory power bills",
        "Extend utility equipment life"
      ]
    },
    {
      badge: "MODULE 6",
      icon: React.createElement(FiBox),
      title: "Spare Parts & MRO Inventory Portal",
      description: "Track spare parts usage per work order, monitor minimum reorder levels, and manage MRO stores.",
      features: [
        "Spare Parts Stock Register",
        "Automatic Reorder Alerts",
        "Work Order Stock Issue",
        "Bin Location Mapping",
        "Barcode / QR Scanning",
        "Supplier Purchase Requisition",
        "Stock Audit Reconciliation",
        "MRO Cost Analytics"
      ],
      benefits: [
        "Never run out of spares",
        "Eliminate inventory shrinkage",
        "Optimize MRO holding cost"
      ]
    },
    {
      badge: "MODULE 7",
      icon: React.createElement(FiTruck),
      title: "Industrial Contractor & Vendor AMC",
      description: "Manage third-party AMC contracts for boilers, cranes, chillers, specialized machinery, and security.",
      features: [
        "Vendor Directory",
        "AMC Contract Logs",
        "Vendor Worker Gate Passes",
        "Safety Induction Records",
        "Insurance Compliance",
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
      badge: "MODULE 8",
      icon: React.createElement(FiClipboard),
      title: "EHS, OSHA & ISO Compliance",
      description: "Digital inspection checklists for fire safety, OSHA safety audits, environmental PCB logs, and ISO 14001.",
      features: [
        "Digital Inspection Templates",
        "Mandated Photo Captures",
        "Pass/Fail Rating Logic",
        "Auto-Ticket for Failures",
        "OSHA Safety Checklists",
        "ISO 14001 Environmental Audit",
        "PCB Pollution Checklists",
        "Exportable PDF Reports"
      ],
      benefits: [
        "100% audit readiness",
        "Avoid regulatory fines",
        "Standardized safety checks"
      ]
    },
    {
      badge: "MODULE 9",
      icon: React.createElement(TbBolt),
      title: "Plant Energy Sub-Metering & SCADA",
      description: "Log electricity sub-meters, steam usage, water meters, and solar yields to identify factory energy loss.",
      features: [
        "Sub-Meter Reading Logs",
        "Daily Consumption Reports",
        "Peak Load Monitoring",
        "Power Factor Optimization",
        "Compressor CFM Yield Logs",
        "DG Fuel Tracking",
        "SCADA Alarm Integration",
        "Green Factory Reports"
      ],
      benefits: [
        "Identify utility wastage",
        "Lower factory energy bills",
        "Promote green factory goals"
      ]
    },
    {
      badge: "MODULE 10",
      icon: React.createElement(RiSmartphoneLine),
      title: "Field Engineer Geofenced App",
      description: "Mobile app with geofencing for maintenance technicians inspecting plant machinery and utility bays.",
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
        "Eliminate paper forms",
        "Real-time field visibility",
        "Higher technician productivity"
      ]
    },
    {
      badge: "MODULE 11",
      icon: React.createElement(FiRefreshCw),
      title: "24/7 Plant Control Room Duty Logbook",
      description: "Digital duty logbook for control room engineers logging plant parameters, shift handovers, and alerts.",
      features: [
        "Digital Duty Logbook",
        "Pending Work Orders Log",
        "Plant Utility Anomaly Notes",
        "Shift Lead E-Sign-Off",
        "Boiler & Compressor Logs",
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
      title: "Executive BI & Plant Analytics",
      description: "Executive dashboards tracking machine OEE, breakdown SLAs, spare parts cost, and utility consumption.",
      features: [
        "Real-Time Operations BI",
        "Machine OEE Scorecard",
        "PM Compliance Reports",
        "Maintenance Cost Analysis",
        "Technician Productivity",
        "Custom PDF Exports",
        "Executive Summary Reports",
        "Plant KPI Dashboards"
      ],
      benefits: [
        "Data-driven leadership decisions",
        "Identify high-cost machinery",
        "Optimize plant OpEx"
      ]
    }
  ],

  modulesList: [
    "Industrial CMMS",
    "Plant Asset Tracking",
    "Heavy Equipment PM",
    "Industrial Safety LOTO",
    "Utility SCADA CMMS",
    "Spare Parts Inventory",
    "Contractor AMC Portal",
    "EHS Compliance",
    "Work Order SLA",
    "Field Mobile App",
    "Shift Duty Logbook",
    "Calibration History",
    "Maintenance Mobile App",
    "Energy Analytics",
    "Environmental Audits",
    "BI Dashboards"
  ],

  managedAssetsTable: [
    { category: "Heavy Machinery & Production", assets: "CNC Machines, Hydraulic Presses, Conveyor Systems, Injection Molding Units, Robotic Arms" },
    { category: "Heavy Industrial Utilities", assets: "Steam Boilers, Air Compressors, Chiller Plants, Transformers, Substation Switchgear" },
    { category: "Fluid & Chemical Handling", assets: "Pumping Systems, Storage Tanks, ETP / STP Treatment Plants, Gas Distribution Skids" },
    { category: "Material Handling", assets: "Overhead Cranes, Forklifts, Hoists, Automated Guided Vehicles (AGV), Loading Docks" },
    { category: "EHS & Fire Safety", assets: "Deluge Fire Systems, Smoke Extraction, Emergency Showers, LOTO Locks, Gas Detectors" },
    { category: "Plant Infrastructure", assets: "Factory Buildings, Roof Solar Arrays, Exhaust Ventilation, Industrial Lighting" }
  ],

  dailyWorkflowSteps: [
    { step: 1, title: "Equipment Anomaly / Vibration Triggered", desc: "SCADA alert or operator logs breakdown via mobile app." },
    { step: 2, title: "Work Order Generated & SLA Triggered", desc: "Ticket automatically created with priority SLA tag." },
    { step: 3, title: "Plant Manager Reviews & Assigns", desc: "Maintenance manager validates request & dispatches technician." },
    { step: 4, title: "Digital PTW & LOTO Clearance", desc: "Technician executes Permit-To-Work & high-voltage LOTO safety check." },
    { step: 5, title: "Technician Dispatched via App", desc: "Technician arrives at machine bay with required spare parts." },
    { step: 6, title: "Repair & Diagnostic Execution", desc: "Technician executes machine repair or component replacement." },
    { step: 7, title: "Quality & Safety Verification", desc: "Supervisor inspects repair quality & clears LOTO safety tags." },
    { step: 8, title: "Ticket Closed & Spares Deducted", desc: "Ticket closed and spare parts deducted from inventory store." },
    { step: 9, title: "Executive BI Dashboard Updated", desc: "Machine OEE, repair SLA, and maintenance costs updated live." }
  ],

  businessBenefits: [
    {
      title: "Increase Heavy Equipment OEE",
      desc: "Prevent unplanned machine breakdowns with automated run-hour preventive maintenance."
    },
    {
      title: "Zero Workplace Accidents with Digital LOTO",
      desc: "Enforce digital Permit-To-Work (PTW) approvals and high-risk Lockout-Tagout safety checklists."
    },
    {
      title: "Reduce Factory Utility Expenses by 25%",
      desc: "Monitor steam boilers, air compressors, and sub-meters to eliminate energy wastage."
    },
    {
      title: "100% Audit Readiness for OSHA & ISO 14001",
      desc: "Maintain digital, tamper-proof audit trails for safety walkthroughs and EHS inspections."
    },
    {
      title: "Eliminate Maintenance Delays with Spare Parts Portal",
      desc: "Track MRO stock levels in real time with automatic low-stock reorder alerts."
    },
    {
      title: "Streamline Industrial Contractor AMCs",
      desc: "Manage third-party vendor AMCs, worker gate passes, and performance scorecards."
    },
    {
      title: "Eliminate Paper Job Cards & Manual Forms",
      desc: "Empower plant technicians with a geofenced mobile app for 30-second ticket updates."
    },
    {
      title: "Eliminate Control Room Shift Gaps",
      desc: "Maintain continuous operational clarity between 24/7 plant control room shift leads."
    }
  ],

  dashboardWidgets: [
    "Overall Equipment Effectiveness (OEE) %",
    "Open Priority 1 Plant Tickets",
    "Plant Energy & Compressor KW/CFM",
    "Spare Parts Stock Alert Status",
    "LOTO & Safety Permit Count",
    "Technician SLA Performance",
    "Contractor AMC Scorecard",
    "Environmental Air & Water Score",
    "24/7 Plant Control Room Status"
  ],

  comparisonTable: [
    { feature: "Work Order Dispatch", facilityCore: "Mobile SLA App & Automated Dispatch", traditional: "Slow Paper Job Cards & Verbal Calls" },
    { feature: "Safety & Permits", facilityCore: "Digital PTW & High-Voltage LOTO Checklists", traditional: "Risky Paper Permit Books" },
    { feature: "Spare Parts Tracking", facilityCore: "Real-Time MRO Inventory & Auto Reorder", traditional: "Missing Spares & Machine Delays" },
    { feature: "Audit & Compliance", facilityCore: "One-Click Audit-Ready Digital Reports", traditional: "Missing Paper Binders & Audit Stress" },
    { feature: "Utility Sub-Metering", facilityCore: "Real-Time SCADA & Compressor Energy BI", traditional: "Manual End-of-Month Paper Logs" },
    { feature: "Shift Handover", facilityCore: "Digital Plant Control Room Duty Logbook", traditional: "Verbal Shift Handovers" }
  ],

  metrics: [
    "Up to 45% reduction in plant equipment breakdown downtime",
    "Up to 100% compliance with EHS, OSHA, and ISO safety standards",
    "Up to 25% reduction in factory utility and compressor energy bills",
    "Up to 35% improvement in spare parts inventory turnover",
    "Up to 50% faster maintenance work order resolution",
    "Up to 80% reduction in paper forms and manual job cards"
  ],

  internalLinks: [
    { label: "Industrial Facility Management Software", link: "/industries/industrial-facilities" },
    { label: "Plant & Asset Management", link: "/features" },
    { label: "Industrial CMMS", link: "/solutions" },
    { label: "Plant Maintenance Software", link: "/features" },
    { label: "Equipment Lifecycle Management", link: "/solutions" },
    { label: "Industrial Safety LOTO", link: "/features" },
    { label: "Utility SCADA CMMS", link: "/solutions" },
    { label: "Spare Parts Inventory", link: "/features" },
    { label: "Contractor Management", link: "/solutions" },
    { label: "Asset Management", link: "/features" },
    { label: "Pricing", link: "/pricing" },
    { label: "Contact Us", link: "/contact" },
    { label: "Free Trial", link: "https://admin.facilitycore.in/register" }
  ],

  cta: {
    icon: React.createElement(HiOutlineRocketLaunch),
    title: "Elevate Industrial Facility & Plant Operations Today",
    description:
      "Empower your plant operations directors, maintenance managers, and chief engineers with a single platform for heavy equipment CMMS, digital LOTO safety, spare parts inventory, and EHS compliance. Partner with FacilityCore."
  }
};
