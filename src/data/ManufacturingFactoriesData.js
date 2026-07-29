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
  FiSettings,
  FiActivity,
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
  RiExchangeDollarLine
} from "react-icons/ri";
import {
  TbSettingsAutomation,
  TbDoorEnter,
  TbChecklist,
  TbBuildingFactory2,
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
  metaTitle: "Manufacturing & Factory Facility Management Software | FacilityCore",
  metaDescription:
    "Streamline factory maintenance, equipment breakdown tracking, EHS compliance, inventory, preventive maintenance, and plant facility operations with FacilityCore's industrial CMMS & CAFM platform.",
  metaKeywords:
    "Manufacturing Facility Management Software, Factory Maintenance Software, Industrial CMMS Software, Plant Maintenance Management Software, Factory Facility Management, EHS Compliance Software, Industrial Maintenance Software, Equipment Breakdown Tracking Software, Factory Asset Management Software, Production Line Maintenance Software, Predictive Maintenance Software, Industrial Facility Management, Work Order Management for Factories, Spare Parts Inventory Management, Factory Safety Software, Contractor Management for Plants, Utility Monitoring Software, Factory Inspection Checklists, Industrial CAFM, OEE Tracking Software",
  canonical: "https://facilitycore.in/industries/manufacturing-factories",
  robots: "index, follow",
  ogTitle: "Manufacturing & Factory Facility Management Software | FacilityCore",
  ogDescription:
    "Streamline factory maintenance, equipment breakdown tracking, EHS compliance, inventory, preventive maintenance, and plant facility operations with FacilityCore's industrial CMMS & CAFM platform.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/industries/manufacturing-factories",
  ogImage: "https://facilitycore.in/Industryyyyyimg.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Manufacturing & Factory Facility Management Software | FacilityCore",
  twitterDescription:
    "Streamline factory maintenance, equipment breakdown tracking, EHS compliance, inventory, preventive maintenance, and plant facility operations with FacilityCore's industrial CMMS & CAFM platform.",
  twitterImage: "https://facilitycore.in/Industryyyyyimg.png",
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Manufacturing & Factory Facility Management Software | FacilityCore",
      "description":
        "Streamline factory maintenance, equipment breakdown tracking, EHS compliance, inventory, preventive maintenance, and plant facility operations with FacilityCore's industrial CMMS & CAFM platform.",
      "url": "https://facilitycore.in/industries/manufacturing-factories"
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
          "name": "Manufacturing & Factories",
          "item": "https://facilitycore.in/industries/manufacturing-factories"
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
      "name": "FacilityCore Industrial CMMS & Factory Management Software",
      "operatingSystem": "Web, iOS, Android",
      "applicationCategory": "BusinessApplication",
      "description":
        "Comprehensive industrial CMMS and plant facility management software for manufacturing facilities, automotive plants, food & beverage processing, and heavy industries.",
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
          "name": "What is manufacturing facility management software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Manufacturing facility management software (Industrial CMMS) is a centralized digital solution designed for factory managers, plant maintenance heads, and EHS teams to automate machinery breakdown tracking, preventive maintenance schedules, spare parts inventory, safety audits, and utility operations."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore reduce unplanned machine breakdowns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore automates preventive maintenance (PPM) schedules, tracks machine run-hours, sends instant mobile breakdown alerts to engineers, and provides historical failure analytics to transition factories from reactive to proactive maintenance."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore track MTTR and MTBF for plant machinery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore automatically calculates Mean Time to Repair (MTTR), Mean Time Between Failures (MTBF), and overall Overall Equipment Effectiveness (OEE) metrics across all production lines."
          }
        },
        {
          "@type": "Question",
          "name": "Does the software include Spare Parts and MRO inventory management?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore provides full MRO (Maintenance, Repair, and Operations) spare parts inventory tracking, low-stock reorder alerts, parts usage logging per work order, and vendor purchase requisitions."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Permit-To-Work (PTW) system improve plant safety?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The digital Permit-To-Work (PTW) system mandates electronic safety approvals for hot work, height work, electrical isolation, and confined space entry before maintenance technicians begin work."
          }
        },
        {
          "@type": "Question",
          "name": "Can technicians log work orders using a mobile phone on the factory floor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, technicians use the FacilityCore Mobile App to scan QR codes on machines, view PM checklists, log spare parts consumed, attach breakdown photos, and complete work orders on the plant floor."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore support QR code tagging for industrial equipment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all plant machinery, pumps, motors, CNC equipment, boilers, and electrical panels can be tagged with durable QR codes for instant mobile scanning and maintenance history lookup."
          }
        },
        {
          "@type": "Question",
          "name": "How does the system handle EHS and ISO compliance audits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore digitizes safety inspection checklists, tracks EHS compliance actions, logs calibration history, and generates audit-ready reports for ISO 9001, ISO 14001, and ISO 45001 standards."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore manage outsourced maintenance contractors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Contractor Management Portal tracks third-party vendor AMCs, worker gate passes, safety orientation status, insurance compliance, and invoice approvals."
          }
        },
        {
          "@type": "Question",
          "name": "Is FacilityCore suitable for food, pharmaceutical, and automotive plants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. FacilityCore is engineered for strict regulated manufacturing environments requiring cleanroom compliance, batch calibration, digital signatures, and rigorous audit trails."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore track energy and utility consumption?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore records meter readings for electricity, steam, compressed air, water, and gas to optimize utility efficiency and detect abnormal energy spikes."
          }
        },
        {
          "@type": "Question",
          "name": "Can shift handover logbooks be digitized with FacilityCore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Digital Shift Logbook allows maintenance leads and plant operators to record shift handovers, pending work orders, and critical equipment anomalies digitally."
          }
        }
      ]
    }
  ]
};

// Page Main Data Object
export const manufacturingFactoriesData = {
  hero: {
    badge: "INDUSTRIAL FACILITY MANAGEMENT & CMMS",
    title: "Manufacturing & Factory Facility Management Software",
    headline: "Optimize Factory Operations, Reduce Downtime & Ensure Compliance",
    description:
      "Unify plant maintenance, machine breakdowns, EHS safety compliance, spare parts inventory, utilities, and contractor management into one intelligent industrial platform.",
    backgroundImage: "/Industryyyyyimg.png"
  },

  stats: [
    { value: "45%", label: "Reduction in Machine Downtime", icon: React.createElement(FiClock) },
    { value: "35%", label: "Lower Overall Maintenance Repair Costs", icon: React.createElement(FiTrendingUp) },
    { value: "99%", label: "PPM Compliance Rate for Plant Machinery", icon: React.createElement(FiShield) },
    { value: "50%", label: "Faster Mean Time to Repair (MTTR)", icon: React.createElement(FiSmile) }
  ],

  overview: {
    badge: "ENTERPRISE INDUSTRIAL CMMS",
    badgeIcon: React.createElement(HiOutlineSparkles),
    title: "Positioning FacilityCore as a Complete Plant & Factory Solution",
    subtitle: "Built for Plant Managers, Maintenance Heads, EHS Teams & Engineering Directors",
    content:
      "Factory operations require seamless coordination between maintenance engineers, safety officers, inventory managers, and plant leadership. Unplanned assembly shutdowns lead to severe financial losses and missed shipment deadlines. FacilityCore provides an industrial-grade cloud CMMS that connects equipment monitoring, work orders, spare parts, safety permits, utility meters, and workforce tracking into a unified digital ecosystem.",
    image: "/Industryyyyyimg.png",
    imageAlt: "Modern Manufacturing Plant Managed by FacilityCore",
    highlights: [
      {
        icon: React.createElement(TbBuildingFactory2),
        title: "Industrial CMMS & Plant ERP",
        desc: "Automate breakdown dispatch, preventive schedules, and MRO spare parts inventory."
      },
      {
        icon: React.createElement(RiSmartphoneLine),
        title: "Technician Mobile App",
        desc: "Empower engineers to scan machinery QR codes, view checklists, and log work orders on the plant floor."
      },
      {
        icon: React.createElement(RiShieldCheckLine),
        title: "EHS Safety & Permit-To-Work",
        desc: "Ensure zero safety incidents with mandatory digital PTW approvals for hot work, height work, and electrical jobs."
      },
      {
        icon: React.createElement(TbReportAnalytics),
        title: "OEE, MTTR & MTBF Analytics",
        desc: "Real-time executive dashboards calculating machine reliability metrics and maintenance cost breakdowns."
      }
    ]
  },

  suitableFor: [
    "Factory Managers",
    "Plant Managers",
    "Maintenance Managers",
    "Engineering Heads",
    "Operations Directors",
    "EHS & Safety Managers",
    "Industrial Facility Managers",
    "Assembly & Production Plants",
    "Automotive Manufacturing",
    "Pharmaceutical Plants",
    "Food & Beverage Facilities",
    "Electronics Manufacturing",
    "Heavy Machinery Plants",
    "Chemical Processing Facilities"
  ],

  challengesBadgeIcon: React.createElement(HiOutlineShieldCheck),
  challengesBadge: "FACTORY OPERATIONAL CHALLENGES",
  challenges: [
    {
      icon: React.createElement(FiAlertTriangle),
      title: "Unplanned Machine Breakdowns",
      description: "Critical assembly line shutdowns cause severe production delays and revenue loss."
    },
    {
      icon: React.createElement(FiCalendar),
      title: "Manual Maintenance Scheduling",
      description: "Over-reliance on paper checklists leads to missed preventive checkups and premature machine failure."
    },
    {
      icon: React.createElement(FiBox),
      title: "Spare Parts Stockouts",
      description: "Lack of real-time inventory visibility delays repairs due to missing critical spare parts."
    },
    {
      icon: React.createElement(FiShield),
      title: "EHS & Safety Non-Compliance",
      description: "Paper permits and manual safety inspections increase risks during high-hazard maintenance jobs."
    },
    {
      icon: React.createElement(TbBolt),
      title: "Utility & Energy Inefficiency",
      description: "Unmonitored electricity, compressed air, and steam consumption leads to inflated utility bills."
    },
    {
      icon: React.createElement(FiTruck),
      title: "Contractor & Vendor Control",
      description: "Managing third-party maintenance contractors, safety gate passes, and AMCs manually is complex."
    },
    {
      icon: React.createElement(FiTrendingUp),
      title: "High Repair Costs (MTTR/MTBF)",
      description: "Without analytics, identifying repeat machine failures and high maintenance costs is difficult."
    },
    {
      icon: React.createElement(FiHardDrive),
      title: "Lack of Asset Visibility",
      description: "Plant managers lack centralized digital logs for machinery age, warranty, and repair history."
    },
    {
      icon: React.createElement(FiRefreshCw),
      title: "Shift Handover Miscommunication",
      description: "Verbal shift handovers result in missed maintenance tickets and recurring equipment anomalies."
    },
    {
      icon: React.createElement(FiClipboard),
      title: "Audit Non-Compliance",
      description: "Scattered paper records lead to stressful ISO, EHS, and regulatory compliance audits."
    }
  ],

  solutionsMapping: [
    { challenge: "Unplanned Machine Breakdowns", solution: "Automated Work Order & Emergency Dispatch", icon: React.createElement(FiAlertTriangle) },
    { challenge: "Manual Maintenance Scheduling", solution: "Preventive & Predictive Maintenance Scheduler", icon: React.createElement(FiCalendar) },
    { challenge: "Spare Parts Stockouts", solution: "Digital Spare Parts Inventory Management", icon: React.createElement(FiBox) },
    { challenge: "EHS & Safety Non-Compliance", solution: "Digital EHS Audit & Safety Inspection Checklists", icon: React.createElement(FiShield) },
    { challenge: "Utility & Energy Inefficiency", solution: "Energy & Utility Consumption Tracking", icon: React.createElement(TbBolt) },
    { challenge: "Contractor & Vendor Control", solution: "Third-Party Contractor Management Portal", icon: React.createElement(FiTruck) },
    { challenge: "High Repair Costs", solution: "Real-Time Machine Downtime & MTTR/MTBF Analytics", icon: React.createElement(FiTrendingUp) },
    { challenge: "Lack of Asset Visibility", solution: "QR Code Industrial Asset Tagging & Lifecycle Register", icon: React.createElement(RiQrCodeLine) },
    { challenge: "Shift Handover Miscommunication", solution: "Digital Shift Logbook & Occurrence Register", icon: React.createElement(FiRefreshCw) },
    { challenge: "Audit Non-Compliance", solution: "Audit-Ready Maintenance & EHS Compliance Reports", icon: React.createElement(FiClipboard) }
  ],

  capabilitiesBadgeIcon: React.createElement(FiLayers),
  capabilitiesBadge: "INDUSTRIAL MODULES",
  keyModules: [
    {
      badge: "MODULE 1",
      icon: React.createElement(FiAlertTriangle),
      title: "Machine & Breakdown Management",
      description: "Instant emergency breakdown alerts, SLA tracking, and mobile work order dispatch to technicians.",
      features: [
        "Breakdown Ticket Logging",
        "Priority Levels",
        "Auto-Technician Dispatch",
        "Photo & Video Proof",
        "Root Cause Analysis (RCA)",
        "Downtime Timer",
        "Machine Status Updates",
        "Mobile App Notifications"
      ],
      benefits: [
        "Minimise production downtime",
        "Faster technician response",
        "Eliminate verbal miscommunication"
      ]
    },
    {
      badge: "MODULE 2",
      icon: React.createElement(FiCalendar),
      title: "Preventive & Predictive Maintenance (PPM)",
      description: "Automate calendar-based and run-hour based PM schedules for all machinery and plant utilities.",
      features: [
        "Automated PM Scheduler",
        "Run-Hour Meter Tracking",
        "Step-by-Step Checklists",
        "Calibration Management",
        "Overdue PM Alerts",
        "Technician Allocation",
        "Digital Checklists",
        "Recurrent Work Orders"
      ],
      benefits: [
        "Prevent major machine failures",
        "Extend machinery lifespan",
        "Ensure 99%+ PM compliance"
      ]
    },
    {
      badge: "MODULE 3",
      icon: React.createElement(FiBox),
      title: "Spare Parts & MRO Inventory",
      description: "Full spare parts store management with low-stock alerts, auto-requisition, and job card tagging.",
      features: [
        "MRO Spare Parts Register",
        "Barcode & QR Scanning",
        "Minimum Reorder Alerts",
        "Job Card Component Logging",
        "Store Transfer Records",
        "Vendor Purchase Requests",
        "Stock Valuation Reports",
        "Serial Number Tracking"
      ],
      benefits: [
        "Prevent spare parts stockouts",
        "Reduce excess inventory costs",
        "Accurate maintenance cost tracking"
      ]
    },
    {
      badge: "MODULE 4",
      icon: React.createElement(FiShield),
      title: "EHS & Safety Compliance Management",
      description: "Ensure zero workplace accidents with digital Permit-To-Work (PTW), EHS audits, and hazard tracking.",
      features: [
        "Permit-To-Work (PTW) System",
        "Hot Work & Height Work Permits",
        "Lockout / Tagout (LOTO)",
        "EHS Safety Inspections",
        "Near-Miss Reporting",
        "Safety Audit Checklists",
        "Personal Protective Equipment (PPE)",
        "Compliance Dashboards"
      ],
      benefits: [
        "Enhance plant safety standards",
        "Prevent workplace incidents",
        "Audit-ready EHS compliance"
      ]
    },
    {
      badge: "MODULE 5",
      icon: React.createElement(RiQrCodeLine),
      title: "Industrial Asset & QR Code Tagging",
      description: "Digital lifecycle tracking for CNC machines, boilers, chillers, pumps, DG sets, and transformers.",
      features: [
        "QR Code Asset Tagging",
        "Asset History Logbook",
        "Warranty & AMC Tracking",
        "Depreciation Calculation",
        "Equipment Health Index",
        "Sub-Component Hierarchy",
        "Asset Location Mapping",
        "CapEx Replacement Planning"
      ],
      benefits: [
        "Complete asset visibility",
        "Instant mobile QR scanning",
        "Optimized CapEx planning"
      ]
    },
    {
      badge: "MODULE 6",
      icon: React.createElement(FiTool),
      title: "Work Order & Maintenance Dispatch",
      description: "End-to-end work order lifecycle tracking from generation to closure and supervisor sign-off.",
      features: [
        "Mobile Work Orders",
        "Technician Task List",
        "Labor Hours Logged",
        "Parts Used Allocation",
        "Supervisor Approval",
        "SLA Violation Alerts",
        "Work Order History",
        "Batch Closure"
      ],
      benefits: [
        "Streamline field operations",
        "Accurate labor & cost tracking",
        "Improved technician accountability"
      ]
    },
    {
      badge: "MODULE 7",
      icon: React.createElement(TbBolt),
      title: "Utility & Energy Management",
      description: "Track factory consumption of electricity, steam, compressed air, gas, and water in real time.",
      features: [
        "Utility Meter Logging",
        "Daily Consumption Reports",
        "Peak Load Monitoring",
        "Energy Anomaly Alerts",
        "Utility Cost Allocation",
        "Carbon Footprint Tracking",
        "Transformer & DG Efficiency",
        "Water & STP Metering"
      ],
      benefits: [
        "Identify utility wastage",
        "Lower factory power bills",
        "Promote sustainable operations"
      ]
    },
    {
      badge: "MODULE 8",
      icon: React.createElement(FiTruck),
      title: "Contractor & Permit Management",
      description: "Manage specialized OEM engineers, AMC contractors, safety passes, and work completion certificates.",
      features: [
        "Contractor Directory",
        "AMC Contract Management",
        "Vendor Worker Gate Passes",
        "Safety Induction Tracking",
        "Insurance Verification",
        "Contractor Rating & SLA",
        "Service Entry Sheets",
        "Payment Approvals"
      ],
      benefits: [
        "Complete contractor control",
        "Enforce contractor safety",
        "Simplified vendor billing"
      ]
    },
    {
      badge: "MODULE 9",
      icon: React.createElement(FiRefreshCw),
      title: "Shift Handover & Digital Logbook",
      description: "Eliminate verbal miscommunication with structured digital shift handovers between plant teams.",
      features: [
        "Digital Shift Logbook",
        "Pending Work Orders Log",
        "Equipment Anomaly Notes",
        "Shift Lead Sign-Off",
        "Parameter Logs",
        "Shift Audit Trail",
        "Broadcast Announcements",
        "Mobile Handover App"
      ],
      benefits: [
        "Flawless shift transitions",
        "Prevent missed maintenance jobs",
        "Complete shift accountability"
      ]
    },
    {
      badge: "MODULE 10",
      icon: React.createElement(FiBarChart2),
      title: "OEE, MTTR & MTBF Analytics",
      description: "Advanced analytics calculating Overall Equipment Effectiveness (OEE) and Mean Time repair metrics.",
      features: [
        "Real-Time OEE Dashboard",
        "MTTR & MTBF Reports",
        "Top 10 Breakdown Analysis",
        "Downtime Cost Metrics",
        "PPM vs Breakdown Ratio",
        "Technician Efficiency",
        "Custom PDF Exports",
        "Executive Summary Reports"
      ],
      benefits: [
        "Data-driven decision making",
        "Identify bad-actor machines",
        "Maximize plant throughput"
      ]
    },
    {
      badge: "MODULE 11",
      icon: React.createElement(FiClipboard),
      title: "Inspection & Audit Checklists",
      description: "Digital inspection forms for ISO audits, 5S checks, safety walks, and machine condition monitoring.",
      features: [
        "Digital Inspection Templates",
        "Mandated Photo Captures",
        "Pass/Fail Rating Logic",
        "Auto-Ticket for Failures",
        "ISO 9001 / 14001 Audits",
        "Cleanroom Checklists",
        "Fire Safety Walks",
        "Geofenced Submissions"
      ],
      benefits: [
        "100% audit readiness",
        "Standardized quality checks",
        "Instant issue escalation"
      ]
    },
    {
      badge: "MODULE 12",
      icon: React.createElement(FiUserCheck),
      title: "Workforce & Technician Mobile App",
      description: "Intuitive mobile application for factory technicians, supervisors, and plant EHS inspectors.",
      features: [
        "Offline Sync Support",
        "QR Machine Scanner",
        "Task Voice Notes",
        "Push Notifications",
        "Geo-Location Tracking",
        "Parts Request via Mobile",
        "E-Signature Capture",
        "Multi-Language Support"
      ],
      benefits: [
        "Easy adoption on factory floor",
        "Work without internet deadzones",
        "Faster job completions"
      ]
    }
  ],

  modulesList: [
    "Breakdown Management",
    "PM Scheduler",
    "Spare Parts Inventory",
    "EHS & Safety",
    "Permit-To-Work (PTW)",
    "Asset QR Tagging",
    "Work Orders",
    "Utility Monitoring",
    "Contractor Portal",
    "Digital Logbook",
    "OEE Tracking",
    "MTTR/MTBF Analytics",
    "Inspection Checklists",
    "Maintenance Mobile App",
    "Calibration Management",
    "Audit Reports"
  ],

  managedAssetsTable: [
    { category: "Production Machinery", assets: "CNC Machines, Assembly Lines, Industrial Robotics, Stamping Presses" },
    { category: "Electrical Infrastructure", assets: "Substations, Transformers, HT/LT Panels, DG Sets, UPS Units" },
    { category: "HVAC & Plant Utilities", assets: "Chillers, Industrial Boilers, Air Compressors, Cooling Towers" },
    { category: "Water & Waste Systems", assets: "STP, WTP, ETP (Effluent Treatment Plant), RO Plants" },
    { category: "Material Handling", assets: "Overhead Cranes, Forklifts, Automated Conveyors, AGVs" },
    { category: "Safety & EHS", assets: "Fire Suppression Systems, Gas Leak Detectors, Emergency Showers" }
  ],

  dailyWorkflowSteps: [
    { step: 1, title: "Machine Breakdown Occurs", desc: "Machine stops or operator detects abnormal vibration/noise." },
    { step: 2, title: "Alarm Raised via Mobile App", desc: "Operator scans QR code on machine & logs breakdown ticket." },
    { step: 3, title: "Maintenance Lead Notified", desc: "Instant push notification sent to maintenance supervisor." },
    { step: 4, title: "Technician Assigned with Parts", desc: "Technician assigned & required spare parts reserved from MRO store." },
    { step: 5, title: "Permit-To-Work Approved", desc: "EHS safety officer approves digital PTW for hot work / LOTO." },
    { step: 6, title: "Repair Executed", desc: "Technician repairs machine and logs work hours & replaced components." },
    { step: 7, title: "Safety & Quality Check", desc: "Supervisor inspects repair quality & performs safety walk." },
    { step: 8, title: "Downtime & Cost Logged", desc: "System auto-calculates downtime hours & repair cost." },
    { step: 9, title: "Ticket Closed & Analytics Updated", desc: "Ticket closed and MTTR/MTBF metrics updated on OEE dashboard." }
  ],

  businessBenefits: [
    {
      title: "Reduce Unplanned Machine Downtime",
      desc: "Shift from reactive breakdown fighting to scheduled preventive maintenance."
    },
    {
      title: "Extend Machine Lifespan",
      desc: "Proactively maintain CNCs, boilers, chillers, and motors to avoid premature replacement."
    },
    {
      title: "Lower Repair Costs (MTTR)",
      desc: "Diagnose repeat machine failures and optimize technician response times."
    },
    {
      title: "100% Audit Readiness",
      desc: "Maintain digital, tamper-proof records for ISO 9001, ISO 14001, and EHS compliance audits."
    },
    {
      title: "Eliminate Spare Parts Stockouts",
      desc: "Never delay machine repairs due to missing critical spare parts or MRO components."
    },
    {
      title: "Enhance Worker Safety & EHS Compliance",
      desc: "Enforce mandatory digital Permits-To-Work (PTW) and Lockout/Tagout (LOTO) protocols."
    },
    {
      title: "Maximize Overall Equipment Effectiveness (OEE)",
      desc: "Unlock plant throughput potential by reducing operational bottlenecks."
    },
    {
      title: "Streamline Shift Handovers",
      desc: "Maintain continuous operational clarity between morning, evening, and night shifts."
    }
  ],

  dashboardWidgets: [
    "Machine Uptime & OEE",
    "Open Breakdown Tickets",
    "MTTR & MTBF Metrics",
    "PM Compliance %",
    "Spare Parts Stock Levels",
    "Energy & Power Consumption",
    "Pending Permit-to-Work (PTW)",
    "EHS Safety Audit Status",
    "Contractor Attendance",
    "Maintenance Cost vs Budget"
  ],

  comparisonTable: [
    { feature: "Breakdown Dispatch", facilityCore: "Automated Instant Mobile Alert to Engineer", traditional: "Manual Phone Calls / Shouting across plant floor" },
    { feature: "Maintenance Scheduling", facilityCore: "Automated Calendar & Run-Hour PM", traditional: "Paper Checklists on Machine Wall" },
    { feature: "Spare Parts Tracking", facilityCore: "Real-Time Auto-Stock Alert & Job Tagging", traditional: "Missing Parts in Storeroom" },
    { feature: "Safety Permits", facilityCore: "Digital Permit-To-Work (PTW) & LOTO", traditional: "Paper Work Permits & High Risk" },
    { feature: "Analytics & Reports", facilityCore: "Automated OEE, MTTR & MTBF Dashboard", traditional: "Manual Excel Calculations" },
    { feature: "Shift Handover", facilityCore: "Digital Shift Logbook & Audit Trail", traditional: "Verbal Handovers / Missing Info" }
  ],

  metrics: [
    "Up to 45% reduction in unplanned machine downtime",
    "Up to 35% lower overall maintenance repair costs",
    "Up to 99% PM compliance rate across critical machinery",
    "Up to 50% faster Mean Time to Repair (MTTR)",
    "Up to 100% audit readiness for ISO / EHS inspections",
    "Up to 60% reduction in paper permits and logbooks"
  ],

  internalLinks: [
    { label: "Factory Maintenance Software", link: "/industries/manufacturing-factories" },
    { label: "Industrial CMMS", link: "/features" },
    { label: "Equipment Breakdown Tracking", link: "/solutions" },
    { label: "Plant Maintenance Management", link: "/features" },
    { label: "EHS Compliance Software", link: "/solutions" },
    { label: "Spare Parts Inventory", link: "/features" },
    { label: "Permit-To-Work System", link: "/solutions" },
    { label: "Predictive Maintenance", link: "/features" },
    { label: "Work Order Management", link: "/solutions" },
    { label: "Utility Monitoring", link: "/features" },
    { label: "Pricing", link: "/pricing" },
    { label: "Contact Us", link: "/contact" },
    { label: "Free Trial", link: "https://admin.facilitycore.in/register" }
  ],

  cta: {
    icon: React.createElement(HiOutlineRocketLaunch),
    title: "Transform Your Factory Operations with Intelligent Industrial CMMS",
    description:
      "Empower your plant managers, engineers, and EHS teams with a single platform for machinery maintenance, spare parts, safety permits, and plant analytics. Eliminate downtime and drive manufacturing excellence with FacilityCore."
  }
};
