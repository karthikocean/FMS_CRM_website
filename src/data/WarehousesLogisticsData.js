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
  FiThermometer
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
  RiExchangeDollarLine
} from "react-icons/ri";
import {
  TbSettingsAutomation,
  TbDoorEnter,
  TbChecklist,
  TbBuildingWarehouse,
  TbReportAnalytics,
  TbBolt,
  TbTruckDelivery
} from "react-icons/tb";
import {
  HiOutlineSparkles,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck
} from "react-icons/hi2";

// Declarative SEO Metadata & Schema JSON-LD
export const seoData = {
  metaTitle: "Warehouse & Logistics Facility Management Software | FacilityCore",
  metaDescription:
    "Digitize warehouse and logistics facility operations with FacilityCore. Manage maintenance, assets, inspections, utilities, safety, loading docks, inventory, workforce, and compliance from one integrated platform.",
  metaKeywords:
    "Warehouse Facility Management Software, Logistics Facility Management, Warehouse Maintenance Software, Distribution Center CMMS, Dock Door Maintenance Software, Warehouse Asset Management, Cold Storage Facility Management, Fulfillment Center Operations Software, Warehouse Safety & EHS Software, Material Handling Equipment Maintenance, Forklift Maintenance Tracking, Conveyor System Maintenance, Warehouse Utility Monitoring, Contractor Management for Warehouses, Warehouse Inspection Checklists, Logistics Infrastructure ERP, Pallet Racking Inspection Software, HVAC for Cold Storage, Warehouse SLA Management, Industrial Yard Operations Software",
  canonical: "https://facilitycore.in/industries/warehouses-logistics",
  robots: "index, follow",
  ogTitle: "Warehouse & Logistics Facility Management Software | FacilityCore",
  ogDescription:
    "Digitize warehouse and logistics facility operations with FacilityCore. Manage maintenance, assets, inspections, utilities, safety, loading docks, inventory, workforce, and compliance from one integrated platform.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/industries/warehouses-logistics",
  ogImage: "https://facilitycore.in/Warehouseimg.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Warehouse & Logistics Facility Management Software | FacilityCore",
  twitterDescription:
    "Digitize warehouse and logistics facility operations with FacilityCore. Manage maintenance, assets, inspections, utilities, safety, loading docks, inventory, workforce, and compliance from one integrated platform.",
  twitterImage: "https://facilitycore.in/Warehouseimg.png",
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Warehouse & Logistics Facility Management Software | FacilityCore",
      "description":
        "Digitize warehouse and logistics facility operations with FacilityCore. Manage maintenance, assets, inspections, utilities, safety, loading docks, inventory, workforce, and compliance from one integrated platform.",
      "url": "https://facilitycore.in/industries/warehouses-logistics"
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
          "name": "Warehouses & Logistics",
          "item": "https://facilitycore.in/industries/warehouses-logistics"
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
      "name": "FacilityCore Warehouse & Logistics Facility Management Software",
      "operatingSystem": "Web, iOS, Android",
      "applicationCategory": "BusinessApplication",
      "description":
        "Enterprise facility management and CMMS software for warehouses, distribution centers, cold storage, and logistics hubs.",
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
          "name": "What is warehouse facility management software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Warehouse facility management software is a specialized digital platform that automates maintenance for material handling equipment (MHE), loading dock doors, cold storage rooms, pallet racking safety, utilities, and contractor operations across distribution centers and logistics hubs."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore reduce Material Handling Equipment (MHE) downtime?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore schedules run-hour based preventive maintenance for forklifts, reach trucks, and AGVs, dispatches instant work orders to technicians via mobile app, and tracks spare parts consumption to minimize equipment breakdowns."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore track loading dock door maintenance and repairs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore monitors hydraulic dock levellers, rapid roll doors, and dock shelters with SLA-based work order tracking and preventive maintenance checklists."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software help maintain cold storage temperature compliance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore records IoT sensor data for cold room temperatures, humidity, and HVAC performance, sending automated alerts to engineers if temperatures breach threshold limits."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore support pallet racking safety inspection checklists?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, EHS officers use mobile digital inspection forms for EN 15635 pallet racking checks, tagging damaged uprights, beam deflections, and safety locks for immediate maintenance action."
          }
        },
        {
          "@type": "Question",
          "name": "Can warehouse technicians log work orders using a mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, field technicians use the FacilityCore Mobile App to scan QR code asset tags, view PM steps, log spare parts, attach photos, and complete tasks directly from the warehouse floor."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore support QR code tagging for warehouse assets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all MHE, dock doors, chillers, high-bay LED fixtures, DG sets, and fire systems are tagged with QR codes for instant mobile scanning and maintenance history lookup."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore handle third-party logistics contractor management?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Contractor Management Portal manages third-party AMC contracts, vendor gate passes, worker safety induction, compliance documents, and service sign-offs."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore track warehouse energy and utility consumption?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore logs electricity meters, sub-meters, water usage, and DG fuel consumption, identifying energy wastage across large logistics facilities."
          }
        },
        {
          "@type": "Question",
          "name": "Is FacilityCore suitable for 3PL, e-commerce, and fulfillment centers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. FacilityCore is engineered for high-throughput 3PL, 4PL, e-commerce fulfillment centers, and cold chain distribution networks operating 24/7."
          }
        },
        {
          "@type": "Question",
          "name": "How does the digital shift logbook help 24/7 warehouse operations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Digital Shift Logbook records shift handovers, pending work orders, and yard anomalies digitally, ensuring seamless continuity between morning, evening, and night shifts."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore generate audit-ready EHS compliance reports?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore maintains tamper-proof digital records for fire safety walks, racking inspections, OSHA/EHS compliance, and ISO audits."
          }
        }
      ]
    }
  ]
};

// Page Main Data Object
export const warehousesLogisticsData = {
  hero: {
    badge: "WAREHOUSE & LOGISTICS FACILITY MANAGEMENT",
    title: "Warehouse & Logistics Facility Management Software",
    headline: "Optimize Warehouse Operations, Prevent Equipment Downtime & Ensure Safety",
    description:
      "Unify distribution center maintenance, loading dock operations, material handling equipment (MHE), cold storage monitoring, EHS compliance, and contractor management into one intelligent platform.",
    backgroundImage: "/Warehouseimg.png"
  },

  stats: [
    { value: "45%", label: "Reduction in MHE Breakdown Downtime", icon: React.createElement(FiClock) },
    { value: "40%", label: "Faster Loading Dock Repair Response", icon: React.createElement(FiTrendingUp) },
    { value: "99%", label: "PM Compliance for Warehouse Infrastructure", icon: React.createElement(FiShield) },
    { value: "100%", label: "Cold Chain Temperature Audit Compliance", icon: React.createElement(FiThermometer) }
  ],

  overview: {
    badge: "LOGISTICS INFRASTRUCTURE ERP",
    badgeIcon: React.createElement(HiOutlineSparkles),
    title: "Positioning FacilityCore as a Complete Logistics Facility Solution",
    subtitle: "Built for Warehouse Managers, Logistics Directors, EHS Officers & Supply Chain Leads",
    content:
      "Modern warehouses and fulfillment centers operate under tight dispatch deadlines. Any failure in loading dock doors, conveyor belts, forklifts, or cold storage chillers disrupts supply chain throughput and causes costly order delays. FacilityCore provides a cloud-based facility ERP that connects equipment maintenance, yard operations, safety inspections, utility meters, and vendor management into a single digital platform.",
    image: "/Warehouseimg.png",
    imageAlt: "Modern Logistics Distribution Center Managed by FacilityCore",
    highlights: [
      {
        icon: React.createElement(TbBuildingWarehouse),
        title: "Distribution Center CMMS",
        desc: "Automate breakdown dispatch, preventive maintenance, and spare parts inventory for MHE assets."
      },
      {
        icon: React.createElement(RiSmartphoneLine),
        title: "Field Technician Mobile App",
        desc: "Empower technicians to scan asset QR codes, complete checklists, and log work orders on the warehouse floor."
      },
      {
        icon: React.createElement(RiShieldCheckLine),
        title: "Pallet Racking & EHS Safety",
        desc: "Ensure zero warehouse accidents with digital racking inspections, PTW permits, and OSHA/EHS checklists."
      },
      {
        icon: React.createElement(TbReportAnalytics),
        title: "Live Operations & Utility Dashboard",
        desc: "Real-time analytics tracking equipment uptime, cold storage temperatures, MTTR, and utility bills."
      }
    ]
  },

  suitableFor: [
    "Warehouse Managers",
    "Logistics Directors",
    "Distribution Center Heads",
    "Supply Chain Operations Leads",
    "EHS & Safety Officers",
    "Cold Storage Operators",
    "Fulfillment Centers",
    "3PL & 4PL Logistics Providers",
    "Freight Terminals",
    "Parcel Sorting Hubs",
    "Industrial Warehouses",
    "E-Commerce Logistics Hubs"
  ],

  challengesBadgeIcon: React.createElement(HiOutlineShieldCheck),
  challengesBadge: "LOGISTICS OPERATIONAL CHALLENGES",
  challenges: [
    {
      icon: React.createElement(TbTruckDelivery),
      title: "Material Handling Equipment (MHE) Downtime",
      description: "Forklift and conveyor breakdowns halt loading lines and delay delivery dispatches."
    },
    {
      icon: React.createElement(TbDoorEnter),
      title: "Loading Dock & Door Failures",
      description: "Stuck dock levellers and rapid roll doors choke dock availability during peak hours."
    },
    {
      icon: React.createElement(FiThermometer),
      title: "Cold Storage Temperature Spikes",
      description: "Unmonitored refrigeration failures risk perishable stock spoilage and compliance fines."
    },
    {
      icon: React.createElement(FiAlertTriangle),
      title: "Pallet Racking Safety Hazards",
      description: "Unnoticed rack damage and overloaded beams create severe warehouse safety risks."
    },
    {
      icon: React.createElement(TbBolt),
      title: "High Energy & Lighting Costs",
      description: "Continuous high-bay lighting and HVAC operation inflate facility utility expenses."
    },
    {
      icon: React.createElement(FiTruck),
      title: "Unorganized Contractor Management",
      description: "Managing third-party MHE vendors, security passes, and AMCs manually is inefficient."
    },
    {
      icon: React.createElement(FiTrendingUp),
      title: "High Repair Costs & Slow Response",
      description: "Without real-time breakdown analytics, repair costs escalate and response times suffer."
    },
    {
      icon: React.createElement(FiHardDrive),
      title: "Lack of Asset History & Warranty",
      description: "Scattered paper files make tracking equipment warranty and service history difficult."
    },
    {
      icon: React.createElement(FiRefreshCw),
      title: "24/7 Shift Handover Miscommunication",
      description: "Verbal shift handovers result in missed maintenance tasks across round-the-clock shifts."
    },
    {
      icon: React.createElement(FiClipboard),
      title: "Regulatory & ISO Non-Compliance",
      description: "Paper inspection logs fail audit verification during EHS, ISO, and safety inspections."
    }
  ],

  solutionsMapping: [
    { challenge: "Material Handling Equipment Downtime", solution: "Automated MHE Breakdown & Work Order Dispatch", icon: React.createElement(TbTruckDelivery) },
    { challenge: "Loading Dock & Door Failures", solution: "Preventive Loading Dock PM Scheduler", icon: React.createElement(TbDoorEnter) },
    { challenge: "Cold Storage Temperature Spikes", solution: "Real-time Cold Room & HVAC Monitoring Alerts", icon: React.createElement(FiThermometer) },
    { challenge: "Pallet Racking Safety Hazards", solution: "Digital Racking Inspection & EHS Safety Checklists", icon: React.createElement(FiAlertTriangle) },
    { challenge: "High Energy & Lighting Costs", solution: "Warehouse Energy & Utility Consumption Tracking", icon: React.createElement(TbBolt) },
    { challenge: "Unorganized Contractor Management", solution: "Third-Party Logistics Contractor Portal", icon: React.createElement(FiTruck) },
    { challenge: "High Repair Costs & Slow Response", solution: "Real-Time MTTR & Breakdown Analytics", icon: React.createElement(FiTrendingUp) },
    { challenge: "Lack of Asset History & Warranty", solution: "QR Code Asset Tagging & Lifecycle Register", icon: React.createElement(RiQrCodeLine) },
    { challenge: "24/7 Shift Handover Miscommunication", solution: "Digital Shift Logbook & Occurrence Register", icon: React.createElement(FiRefreshCw) },
    { challenge: "Regulatory & ISO Non-Compliance", solution: "Audit-Ready EHS & Warehouse Compliance Reports", icon: React.createElement(FiClipboard) }
  ],

  capabilitiesBadgeIcon: React.createElement(FiLayers),
  capabilitiesBadge: "PURPOSE-BUILT MODULES",
  keyModules: [
    {
      badge: "MODULE 1",
      icon: React.createElement(TbTruckDelivery),
      title: "MHE & Fleet Maintenance",
      description: "Schedule run-hour PM checkups and breakdown dispatch for forklifts, reach trucks, and AGVs.",
      features: [
        "MHE Run-Hour Tracking",
        "Forklift PM Checklists",
        "Battery & Charger Maintenance",
        "Breakdown Ticket Dispatch",
        "Parts Replacement Log",
        "Operator Daily Inspection",
        "Fleet Availability Status",
        "Technician Mobile App"
      ],
      benefits: [
        "Maximize MHE uptime",
        "Extend battery and vehicle life",
        "Faster repair response"
      ]
    },
    {
      badge: "MODULE 2",
      icon: React.createElement(TbDoorEnter),
      title: "Loading Dock & Door Management",
      description: "Preventive maintenance and breakdown management for dock levellers, rapid roll doors, and shelters.",
      features: [
        "Dock Leveller PM Scheduler",
        "Rapid Roll Door Checks",
        "Dock Seal & Shelter Audits",
        "Emergency Repair Tickets",
        "Safety Lock Inspections",
        "SLA Response Monitoring",
        "Vendor Service Sign-Off",
        "Dock Availability Dashboard"
      ],
      benefits: [
        "Prevent loading bay congestion",
        "Smooth inbound/outbound flow",
        "Reduce dock repair costs"
      ]
    },
    {
      badge: "MODULE 3",
      icon: React.createElement(FiThermometer),
      title: "Cold Storage & HVAC Monitoring",
      description: "Monitor cold room temperatures, condensing units, and HVAC performance with automated alerts.",
      features: [
        "Cold Room Temp Logging",
        "HVAC Chiller Checklists",
        "Defrost Cycle Tracking",
        "Temp Spikes Alarm Alerts",
        "Humidity Sensor Logs",
        "Refrigerant Leak Audits",
        "Cold Chain Audit Reports",
        "Energy Efficiency Tracking"
      ],
      benefits: [
        "Prevent stock spoilage",
        "Ensure cold chain compliance",
        "Lower refrigeration energy bills"
      ]
    },
    {
      badge: "MODULE 4",
      icon: React.createElement(FiAlertTriangle),
      title: "Pallet Racking & EHS Safety",
      description: "Digital pallet racking inspection checklists, hazard tagging, and mandatory safety permits.",
      features: [
        "EN 15635 Racking Audits",
        "Damaged Upright Tagging",
        "Beam Deflection Logging",
        "Permit-To-Work (PTW)",
        "Lockout / Tagout (LOTO)",
        "EHS Safety Walkthroughs",
        "Fire Sprinkler Audits",
        "Audit Trail Generation"
      ],
      benefits: [
        "Prevent rack collapse incidents",
        "100% OSHA & EHS compliance",
        "Faster hazard rectification"
      ]
    },
    {
      badge: "MODULE 5",
      icon: React.createElement(RiQrCodeLine),
      title: "Asset Management & QR Tagging",
      description: "Digital asset register with durable QR code tagging for all warehouse infrastructure and equipment.",
      features: [
        "QR Code Asset Tagging",
        "Asset Service History",
        "Warranty & AMC Tracking",
        "Depreciation Accounting",
        "Component Sub-Assembly",
        "Asset Location Mapping",
        "Mobile QR Scanning",
        "Replacement Planning"
      ],
      benefits: [
        "Complete asset visibility",
        "Instant mobile lookup",
        "Optimized CapEx budgets"
      ]
    },
    {
      badge: "MODULE 6",
      icon: React.createElement(FiTool),
      title: "Work Order & SLA Dispatch",
      description: "Automated work order creation, technician assignment, labor hours tracking, and supervisor sign-off.",
      features: [
        "Mobile Work Orders",
        "Technician Task Lists",
        "Labor Hours Logging",
        "Spares Used Allocation",
        "Supervisor Sign-Off",
        "SLA Violation Alerts",
        "Work Order History",
        "Batch Closure"
      ],
      benefits: [
        "Eliminate paper work orders",
        "Improve technician SLA",
        "Accurate maintenance costs"
      ]
    },
    {
      badge: "MODULE 7",
      icon: React.createElement(TbBolt),
      title: "Utility & Energy Management",
      description: "Track electricity, sub-meters, high-bay lighting, water, and DG fuel usage across logistics hubs.",
      features: [
        "Utility Meter Logging",
        "Daily Consumption Reports",
        "Peak Load Monitoring",
        "Energy Anomaly Alerts",
        "High-Bay Lighting Logs",
        "DG Fuel Consumption",
        "Water & STP Metering",
        "Carbon Footprint Reports"
      ],
      benefits: [
        "Identify utility wastage",
        "Lower warehouse energy bills",
        "Promote sustainable operations"
      ]
    },
    {
      badge: "MODULE 8",
      icon: React.createElement(FiTruck),
      title: "Contractor & AMC Management",
      description: "Manage outsourced MHE vendors, dock door specialists, security passes, and AMC contracts.",
      features: [
        "Contractor Directory",
        "AMC Contract Management",
        "Vendor Worker Gate Passes",
        "Safety Induction Records",
        "Insurance Compliance",
        "Contractor Performance SLA",
        "Service Entry Sheets",
        "Invoice Verification"
      ],
      benefits: [
        "Complete contractor control",
        "Enforce contractor safety",
        "Simplified vendor payments"
      ]
    },
    {
      badge: "MODULE 9",
      icon: React.createElement(FiRefreshCw),
      title: "Shift Handover & Digital Logbook",
      description: "Seamless digital shift handovers between 24/7 warehouse teams to prevent missed tasks.",
      features: [
        "Digital Shift Logbook",
        "Pending Work Orders Log",
        "Dock & Yard Anomaly Notes",
        "Shift Lead Sign-Off",
        "Equipment Status Summary",
        "Audit Log History",
        "Yard Gate Occurrence Log",
        "Mobile Handover App"
      ],
      benefits: [
        "Flawless 24/7 shift transitions",
        "Prevent missed repair tasks",
        "Complete shift accountability"
      ]
    },
    {
      badge: "MODULE 10",
      icon: React.createElement(FiBarChart2),
      title: "Warehouse Analytics & SLA Reporting",
      description: "Executive dashboards tracking breakdown MTTR, MHE uptime, PM compliance, and repair budgets.",
      features: [
        "Real-Time Operations BI",
        "MTTR & MTBF Metrics",
        "MHE Availability Scorecard",
        "PM Compliance Reports",
        "Maintenance Cost Analysis",
        "Technician Productivity",
        "Custom PDF Exports",
        "Executive Summary Reports"
      ],
      benefits: [
        "Data-driven decision making",
        "Identify bad-actor equipment",
        "Maximize warehouse throughput"
      ]
    },
    {
      badge: "MODULE 11",
      icon: React.createElement(FiClipboard),
      title: "Inspection & Audit Checklists",
      description: "Digital inspection checklists for 5S audits, fire safety walks, dock safety, and ISO compliance.",
      features: [
        "Digital Inspection Templates",
        "Mandated Photo Proof",
        "Pass/Fail Rating Logic",
        "Auto-Ticket for Failures",
        "ISO 9001 / EHS Audits",
        "Fire Safety Checks",
        "Yard Safety Audits",
        "Geofenced Submissions"
      ],
      benefits: [
        "100% audit readiness",
        "Standardized safety checks",
        "Instant issue escalation"
      ]
    },
    {
      badge: "MODULE 12",
      icon: React.createElement(FiUserCheck),
      title: "Workforce & Yard Mobile App",
      description: "Intuitive mobile application for warehouse engineers, yard supervisors, and EHS inspectors.",
      features: [
        "Offline Sync Support",
        "QR Asset Scanner",
        "Task Voice Notes",
        "Push Notifications",
        "Geo-Location Punching",
        "Parts Request via Mobile",
        "Digital Signature Sign-Off",
        "Multi-Language Support"
      ],
      benefits: [
        "Easy adoption on warehouse floor",
        "Work in signal deadzones",
        "Faster job completions"
      ]
    }
  ],

  modulesList: [
    "MHE Maintenance",
    "Dock Door PM",
    "Cold Storage Monitoring",
    "Racking Inspection",
    "Asset QR Tagging",
    "Work Order Dispatch",
    "Utility Monitoring",
    "Contractor Portal",
    "Shift Logbook",
    "EHS Safety",
    "SLA Analytics",
    "Mobile App",
    "Spares Store",
    "Audit Reports",
    "Yard Operations",
    "Preventive Maintenance"
  ],

  managedAssetsTable: [
    { category: "Material Handling", assets: "Forklifts, Reach Trucks, AGVs, Automated Conveyors, Sorting Systems" },
    { category: "Loading Bay Systems", assets: "Hydraulic Dock Levellers, Rapid Roll Doors, Dock Shelters, Vehicle Restraints" },
    { category: "Cold Storage & HVAC", assets: "Industrial Chillers, Condensing Units, Evaporators, Dehumidifiers" },
    { category: "Electrical & Power", assets: "Substations, Transformers, DG Sets, UPS Units, High-Bay LED Lighting" },
    { category: "Fire & Safety", assets: "ESFR Sprinklers, Fire Pumps, Smoke Detectors, Emergency Exit Signage" },
    { category: "Structure & Storage", assets: "Pallet Racks, Mezzanine Floors, Dock Bumpers, Security Fencing" }
  ],

  dailyWorkflowSteps: [
    { step: 1, title: "MHE / Dock Door Breakdown Occurs", desc: "Operator or yard supervisor identifies equipment failure." },
    { step: 2, title: "Alarm Raised via Mobile App", desc: "Operator scans QR code on asset & logs breakdown ticket." },
    { step: 3, title: "Maintenance Lead Notified", desc: "Instant push notification sent to warehouse lead." },
    { step: 4, title: "Technician Dispatched with Spares", desc: "Technician assigned & required spare parts issued from store." },
    { step: 5, title: "Safety Permit Verified", desc: "Digital PTW / LOTO safety approval verified on mobile." },
    { step: 6, title: "Repair Executed", desc: "Technician repairs asset and records work hours & parts used." },
    { step: 7, title: "Quality & Safety Walk Completed", desc: "Supervisor inspects repair quality & completes safety walk." },
    { step: 8, title: "Downtime & Cost Logged", desc: "System auto-calculates downtime hours & repair cost." },
    { step: 9, title: "Ticket Closed & Analytics Updated", desc: "Ticket closed and MTTR/MHE availability dashboard updated." }
  ],

  businessBenefits: [
    {
      title: "Maximize Warehouse Throughput",
      desc: "Prevent loading dock and conveyor bottlenecks to hit order dispatch targets."
    },
    {
      title: "Reduce MHE Breakdown Hours",
      desc: "Shift from reactive breakdown fighting to scheduled run-hour preventive maintenance."
    },
    {
      title: "Maintain Unbroken Cold Chain",
      desc: "Protect perishable inventory with real-time refrigeration & temperature monitoring."
    },
    {
      title: "100% Racking & EHS Audit Compliance",
      desc: "Maintain digital, tamper-proof inspection records for OSHA, ISO, and EHS audits."
    },
    {
      title: "Lower Utility & Energy Costs",
      desc: "Optimize high-bay lighting, HVAC, and DG fuel usage across distribution hubs."
    },
    {
      title: "Streamline 24/7 Logistics Shifts",
      desc: "Maintain continuous operational clarity between round-the-clock shift handovers."
    },
    {
      title: "Extend Infrastructure Lifespan",
      desc: "Proactively maintain dock levellers, doors, chillers, and forklifts."
    },
    {
      title: "Simplify Contractor Oversight",
      desc: "Manage third-party MHE vendors, AMCs, and worker gate passes effortlessly."
    }
  ],

  dashboardWidgets: [
    "MHE Availability %",
    "Dock Door Status",
    "Cold Room Temperature Alerts",
    "Open Work Orders",
    "PM Compliance %",
    "Energy & Utility Usage",
    "EHS Safety Audit Score",
    "Contractor Gate Passes",
    "Maintenance Cost vs Budget",
    "Warehouse Occupancy & Yard Status"
  ],

  comparisonTable: [
    { feature: "MHE Maintenance", facilityCore: "Automated Run-Hour PM & QR History", traditional: "Manual Paper Checklists on Forklifts" },
    { feature: "Dock Door Repairs", facilityCore: "Instant SLA Mobile Dispatch", traditional: "Phone Calls & Delayed Loading Docks" },
    { feature: "Cold Storage Monitoring", facilityCore: "Real-time Digital Temperature Alerts", traditional: "Manual Thermometer Logs" },
    { feature: "Safety Audits", facilityCore: "Digital Pallet Racking & EHS Forms", traditional: "Missing Paper Forms" },
    { feature: "Analytics & Reports", facilityCore: "Automated Downtime & Maintenance BI Dashboard", traditional: "End-of-Month Manual Spreadsheets" },
    { feature: "Shift Handover", facilityCore: "Digital Shift Logbook & Audit Trail", traditional: "Verbal Handovers across 24/7 Shifts" }
  ],

  metrics: [
    "Up to 45% reduction in MHE breakdown downtime",
    "Up to 40% faster loading dock repair response",
    "Up to 99% PM compliance rate for critical warehouse assets",
    "Up to 100% cold chain temperature audit compliance",
    "Up to 35% lower administrative workload",
    "Up to 60% reduction in paper forms and logbooks"
  ],

  internalLinks: [
    { label: "Warehouse Facility Management", link: "/industries/warehouses-logistics" },
    { label: "Logistics CMMS", link: "/features" },
    { label: "MHE Maintenance", link: "/solutions" },
    { label: "Cold Storage Monitoring", link: "/features" },
    { label: "Dock Door Maintenance", link: "/solutions" },
    { label: "Pallet Racking Safety", link: "/features" },
    { label: "Warehouse Energy Management", link: "/solutions" },
    { label: "Contractor Management", link: "/features" },
    { label: "Work Order Management", link: "/solutions" },
    { label: "Asset Management", link: "/features" },
    { label: "Pricing", link: "/pricing" },
    { label: "Contact Us", link: "/contact" },
    { label: "Free Trial", link: "https://admin.facilitycore.in/register" }
  ],

  cta: {
    icon: React.createElement(HiOutlineRocketLaunch),
    title: "Transform Your Warehouse & Logistics Operations Today",
    description:
      "Empower your distribution center managers, engineers, and EHS officers with a single platform for MHE maintenance, loading docks, cold storage, and safety compliance. Maximize throughput with FacilityCore."
  }
};
