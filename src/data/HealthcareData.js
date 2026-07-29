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
  FiActivity,
  FiHeart
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
  RiHospitalLine,
  RiHeartPulseLine
} from "react-icons/ri";
import {
  TbSettingsAutomation,
  TbDoorEnter,
  TbChecklist,
  TbBuildingWarehouse,
  TbReportAnalytics,
  TbBolt,
  TbStethoscope
} from "react-icons/tb";
import {
  HiOutlineSparkles,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck
} from "react-icons/hi2";

// Declarative SEO Metadata & Schema JSON-LD
export const seoData = {
  metaTitle: "Healthcare & Hospital Facility Management Software | FacilityCore",
  metaDescription:
    "Manage hospitals, clinics, diagnostic centres, and healthcare facilities with FacilityCore. Automate maintenance, biomedical assets, compliance, housekeeping, infection control, utilities, and work orders.",
  metaKeywords:
    "Healthcare Facility Management Software, Hospital Maintenance Software, Biomedical Equipment Management Software, Hospital CMMS Software, Medical Facility Management, NABH Compliance Software, JCI Compliance Software, Hospital Housekeeping Management, Infection Control Compliance, Medical Gas Pipeline System Maintenance, Hospital Utility Management, Cleanroom HVAC Maintenance, Biomedical Calibration Tracking, Hospital Asset Tagging Software, EHS Safety for Hospitals, Hospital Work Order Software, Bio-Medical Waste Management, Nurse Station Service Desk, Hospital Maintenance Checklist, Diagnostic Center Facility Software",
  canonical: "https://facilitycore.in/industries/healthcare",
  robots: "index, follow",
  ogTitle: "Healthcare & Hospital Facility Management Software | FacilityCore",
  ogDescription:
    "Manage hospitals, clinics, diagnostic centres, and healthcare facilities with FacilityCore. Automate maintenance, biomedical assets, compliance, housekeeping, infection control, utilities, and work orders.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/industries/healthcare",
  ogImage: "https://facilitycore.in/Hospitalllimg.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Healthcare & Hospital Facility Management Software | FacilityCore",
  twitterDescription:
    "Manage hospitals, clinics, diagnostic centres, and healthcare facilities with FacilityCore. Automate maintenance, biomedical assets, compliance, housekeeping, infection control, utilities, and work orders.",
  twitterImage: "https://facilitycore.in/Hospitalllimg.png",
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Healthcare & Hospital Facility Management Software | FacilityCore",
      "description":
        "Manage hospitals, clinics, diagnostic centres, and healthcare facilities with FacilityCore. Automate maintenance, biomedical assets, compliance, housekeeping, infection control, utilities, and work orders.",
      "url": "https://facilitycore.in/industries/healthcare"
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
          "name": "Healthcare",
          "item": "https://facilitycore.in/industries/healthcare"
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
      "name": "FacilityCore Healthcare & Hospital CMMS Software",
      "operatingSystem": "Web, iOS, Android",
      "applicationCategory": "BusinessApplication",
      "description":
        "Medical-grade CMMS and hospital facility management software for hospitals, polyclinics, diagnostic centers, and bio-medical engineering teams.",
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
          "name": "What is healthcare facility management software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Healthcare facility management software is a specialized digital platform designed for hospital engineering teams, bio-medical engineers, and infection control officers to automate biomedical equipment calibration, OT/ICU breakdown dispatch, NABH/JCI compliance audits, medical gas monitoring, and hospital housekeeping."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore support NABH and JCI accreditation audits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore maintains digital, tamper-proof audit trails for biomedical device calibration history, preventive maintenance logs, infection control checklists, and EHS safety compliance, allowing hospitals to generate audit-ready reports in one click."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore manage biomedical equipment calibration schedules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore tracks calibration due dates for ventilators, defibrillators, patient monitors, and radiology equipment, sending automated alerts to Bio-Medical Engineers (BME) and OEM vendors before calibration expires."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software track Operation Theatre (OT) and ICU breakdown requests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nurses and doctors can log critical emergency tickets with high-priority SLA flags directly from mobile apps or nurse station web portals, instantly alerting on-duty bio-medical engineers."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore monitor Medical Gas Pipeline Systems (MGPS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore schedules routine inspections for liquid oxygen plants, vacuum pumps, manifold pressure levels, and pipeline alarm panels to ensure uninterrupted medical gas supply."
          }
        },
        {
          "@type": "Question",
          "name": "Can doctors and nurses log facility tickets using a mobile app or web portal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, clinical staff can scan QR code asset tags on equipment or use a simplified 30-second mobile interface to log plumbing, electrical, bio-medical, or housekeeping requests."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore support QR code tagging for hospital assets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all biomedical devices, OT lights, chillers, DG sets, and fire systems are tagged with QR codes for instant mobile scanning, service logging, and calibration lookup."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software manage hospital housekeeping and bio-medical waste (BMW)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore digitizes room cleaning SLA checklists, tracks Bio-Medical Waste (BMW) segregation and disposal logs, and logs daily sanitation audits for infection control compliance."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore track cleanroom HVAC, HEPA filters, and room pressure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore logs differential pressure, air change rates (ACPH), and HEPA filter replacement schedules across Operation Theatres, ICUs, and isolation rooms."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore manage OEM vendor contracts and AMC warranties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The OEM Vendor Portal tracks third-party bio-medical equipment AMCs, warranty expiration dates, vendor engineer visit logs, and performance scorecards."
          }
        },
        {
          "@type": "Question",
          "name": "Is FacilityCore suitable for multi-specialty hospitals, clinics, and diagnostic centers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. FacilityCore scales from single polyclinics and diagnostic imaging labs to 1000+ bed multi-specialty hospital chains."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore digitize 24/7 hospital engineering shift handovers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Digital Duty Logbook records engineering shift handovers, pending emergency tickets, and plant utility anomalies for seamless 24/7 hospital operations."
          }
        }
      ]
    }
  ]
};

// Page Main Data Object
export const healthcareData = {
  hero: {
    badge: "HEALTHCARE FACILITY MANAGEMENT & BIOMEDICAL CMMS",
    title: "Healthcare & Hospital Facility Management Software",
    headline: "Maintain Medical-Grade Standards, Zero Equipment Breakdown & 100% NABH/JCI Compliance",
    description:
      "Unify hospital engineering maintenance, biomedical equipment calibration, housekeeping, infection control, medical gas pipelines (MGPS), utilities, and regulatory compliance into one intelligent healthcare platform.",
    backgroundImage: "/Hospitalllimg.png"
  },

  stats: [
    { value: "50%", label: "Faster Biomedical Breakdown Response", icon: React.createElement(FiClock) },
    { value: "99.8%", label: "Uptime for ICU & Operation Theatre Assets", icon: React.createElement(FiActivity) },
    { value: "100%", label: "Calibration Compliance for Medical Devices", icon: React.createElement(FiShield) },
    { value: "100%", label: "NABH & JCI Audit Readiness", icon: React.createElement(FiCheckCircle) }
  ],

  overview: {
    badge: "MEDICAL-GRADE FACILITY ERP",
    badgeIcon: React.createElement(HiOutlineSparkles),
    title: "Positioning FacilityCore as a Complete Healthcare Operations Platform",
    subtitle: "Built for Hospital Administrators, Bio-Medical Engineers, EHS Teams & Clinical Leaders",
    content:
      "Hospital operations directly impact patient safety and clinical outcomes. Any failure in an ICU ventilator, Operation Theatre HVAC, liquid oxygen line, or standby DG set can jeopardize lives. FacilityCore provides a medical-grade cloud CMMS that connects biomedical asset tracking, SLA breakdown dispatch, NABH/JCI compliance checklists, cleanroom air quality monitoring, and 24/7 hospital engineering into a single unified platform.",
    image: "/Hospitalllimg.png",
    imageAlt: "Modern Multi-Specialty Hospital Managed by FacilityCore",
    highlights: [
      {
        icon: React.createElement(RiHospitalLine),
        title: "Biomedical CMMS & Calibration",
        desc: "Automate medical device calibration schedules, preventive maintenance, and OEM warranty tracking."
      },
      {
        icon: React.createElement(RiSmartphoneLine),
        title: "Nurse Station SLA Mobile Portal",
        desc: "Empower clinical staff to raise instant high-priority tickets from OT, ICU, and inpatient wards."
      },
      {
        icon: React.createElement(RiShieldCheckLine),
        title: "NABH & JCI Audit Compliance",
        desc: "Generate 100% tamper-proof digital compliance logs for infection control, EHS, and safety audits."
      },
      {
        icon: React.createElement(TbReportAnalytics),
        title: "Cleanroom & MGPS Monitoring",
        desc: "Real-time tracking of OT pressure levels, HEPA filter life, liquid oxygen tanks, and utility meters."
      }
    ]
  },

  suitableFor: [
    "Hospital Administrators",
    "Bio-Medical Engineers (BME)",
    "Hospital Facility Managers",
    "Infection Control Officers",
    "Quality & Compliance Heads",
    "EHS & Safety Officers",
    "Multi-Specialty Hospitals",
    "Clinics & Polyclinics",
    "Diagnostic & Radiology Centers",
    "Day Care Surgery Centers",
    "Medical Research Labs",
    "Bio-Pharmaceutical Centers"
  ],

  challengesBadgeIcon: React.createElement(HiOutlineShieldCheck),
  challengesBadge: "HEALTHCARE OPERATIONAL CHALLENGES",
  challenges: [
    {
      icon: React.createElement(FiActivity),
      title: "Critical Biomedical Breakdown",
      description: "ICU ventilator or OT anesthesia workstation failures directly endanger patient lives."
    },
    {
      icon: React.createElement(FiClipboard),
      title: "NABH / JCI Audit Non-Compliance",
      description: "Scattered paper calibration tags lead to failed regulatory audits and accreditation loss."
    },
    {
      icon: React.createElement(FiShield),
      title: "Infection Control & Cleanroom Risks",
      description: "Unmonitored OT air change rates and HEPA filter clogging increase hospital-acquired infections (HAI)."
    },
    {
      icon: React.createElement(FiAlertTriangle),
      title: "Medical Gas Pipeline (MGPS) Risks",
      description: "Pressure drops in liquid oxygen plants or suction pumps cause life-threatening emergencies."
    },
    {
      icon: React.createElement(FiSmile),
      title: "Housekeeping & Bio-Medical Waste",
      description: "Manual room cleaning logs and unmonitored bio-medical waste (BMW) risk cross-contamination."
    },
    {
      icon: React.createElement(TbBolt),
      title: "Utility & DG Power Outages",
      description: "Delayed switchover to standby DG sets during main grid power failure risks critical care units."
    },
    {
      icon: React.createElement(FiTruck),
      title: "OEM Vendor & AMC Delays",
      description: "Tracking high-cost OEM maintenance contracts (GE, Siemens, Philips) manually is difficult."
    },
    {
      icon: React.createElement(RiQrCodeLine),
      title: "Lack of Equipment Calibration History",
      description: "Missing calibration certificates and service records delay equipment safety sign-offs."
    },
    {
      icon: React.createElement(FiMessageSquare),
      title: "Nurse Station Request Delays",
      description: "Clinical staff waste precious time making phone calls to engineering for minor repair requests."
    },
    {
      icon: React.createElement(FiRefreshCw),
      title: "Shift Handover Miscommunication",
      description: "Verbal handovers between 24/7 hospital engineering shifts cause missed maintenance tickets."
    }
  ],

  solutionsMapping: [
    { challenge: "Critical Biomedical Breakdown", solution: "Automated Priority Work Order & Bio-Medical Dispatch", icon: React.createElement(FiActivity) },
    { challenge: "NABH / JCI Audit Non-Compliance", solution: "Audit-Ready Digital Compliance & Calibration Log", icon: React.createElement(FiClipboard) },
    { challenge: "Infection Control & Cleanroom Risks", solution: "Air Quality, HEPA Filter & Pressure Monitoring Alerts", icon: React.createElement(FiShield) },
    { challenge: "Medical Gas Pipeline Risks", solution: "Automated Oxygen & MGPS Inspection Scheduler", icon: React.createElement(FiAlertTriangle) },
    { challenge: "Housekeeping & Bio-Medical Waste", solution: "Digital Housekeeping Audits & BMW Tracking", icon: React.createElement(FiSmile) },
    { challenge: "Utility & DG Power Outages", solution: "24/7 Hospital Utility & DG Backup Monitoring", icon: React.createElement(TbBolt) },
    { challenge: "OEM Vendor & AMC Delays", solution: "Bio-Medical Vendor & OEM AMC Management Portal", icon: React.createElement(FiTruck) },
    { challenge: "Lack of Calibration History", solution: "QR Code Medical Asset Tagging & Calibration Register", icon: React.createElement(RiQrCodeLine) },
    { challenge: "Nurse Station Request Delays", solution: "Instant Mobile SLA Request Portal for Nurses & Doctors", icon: React.createElement(FiMessageSquare) },
    { challenge: "Shift Handover Miscommunication", solution: "Digital Hospital Engineering Shift Logbook", icon: React.createElement(FiRefreshCw) }
  ],

  capabilitiesBadgeIcon: React.createElement(FiLayers),
  capabilitiesBadge: "MEDICAL-GRADE MODULES",
  keyModules: [
    {
      badge: "MODULE 1",
      icon: React.createElement(FiActivity),
      title: "Biomedical Equipment & Calibration",
      description: "Track medical device calibration cycles, preventive maintenance, and OEM warranty lifecycles.",
      features: [
        "Biomedical Asset Register",
        "Automated Calibration Alerts",
        "NABL Lab Certificate Upload",
        "Run-Hour & Cycle Logging",
        "OEM AMC/CMC Tracking",
        "Device Breakdown Priority",
        "QR Code Equipment Tagging",
        "Mobile BME App"
      ],
      benefits: [
        "Zero clinical equipment downtime",
        "100% calibration compliance",
        "Lower medical repair costs"
      ]
    },
    {
      badge: "MODULE 2",
      icon: React.createElement(FiTool),
      title: "Hospital Engineering & SLA Dispatch",
      description: "Urgent SLA work order dispatch for OT, ICU, inpatient wards, and emergency departments.",
      features: [
        "Nurse Station Portal",
        "Priority 1 Emergency SLA",
        "Technician Mobile App",
        "Photo & Video Proof",
        "Parts Used Allocation",
        "Supervisor Approval",
        "Escalation Matrix Alerts",
        "Work Order History"
      ],
      benefits: [
        "Instant emergency response",
        "Eliminate phone call delays",
        "Transparent SLA tracking"
      ]
    },
    {
      badge: "MODULE 3",
      icon: React.createElement(FiAlertTriangle),
      title: "Medical Gas Pipeline System (MGPS)",
      description: "Routine PPM inspections and pressure monitoring for liquid oxygen tanks, vacuum pumps, and manifolds.",
      features: [
        "Oxygen Tank Level Checks",
        "Vacuum Pump PM Checklists",
        "Manifold Pressure Logs",
        "Alarm Panel Inspections",
        "Pipeline Leak Audits",
        "Emergency Valve Audits",
        "Automated PM Scheduler",
        "Compliance Reporting"
      ],
      benefits: [
        "Uninterrupted oxygen supply",
        "Prevent MGPS pressure drops",
        "Ensure patient respiratory safety"
      ]
    },
    {
      badge: "MODULE 4",
      icon: React.createElement(FiClipboard),
      title: "NABH, JCI & Compliance Management",
      description: "One-click digital compliance audit readiness for NABH, JCI, Fire Safety, and EHS inspections.",
      features: [
        "NABH Standard Checklists",
        "JCI Compliance Audits",
        "Fire Safety Walkthroughs",
        "Electrical Safety Audits",
        "Mandatory Photo Capture",
        "Auto-Ticket for Failures",
        "Digital E-Signatures",
        "Exportable PDF Reports"
      ],
      benefits: [
        "100% audit readiness",
        "Eliminate audit stress",
        "Maintain hospital accreditation"
      ]
    },
    {
      badge: "MODULE 5",
      icon: React.createElement(FiShield),
      title: "Infection Control & Cleanroom HVAC",
      description: "Monitor Operation Theatre differential pressure, air change rates (ACPH), and HEPA filter life.",
      features: [
        "OT Differential Pressure Logs",
        "HEPA Filter Life Tracking",
        "Air Change Rate (ACPH)",
        "Temperature & Humidity Logs",
        "Laminar Flow Inspections",
        "HVAC Chiller PPM",
        "Infection Control Audits",
        "Environmental Alerts"
      ],
      benefits: [
        "Maintain sterile OT environment",
        "Prevent surgical site infections",
        "Extend HEPA filter lifespan"
      ]
    },
    {
      badge: "MODULE 6",
      icon: React.createElement(FiSmile),
      title: "Housekeeping & Bio-Medical Waste (BMW)",
      description: "Digital room sanitation logs, ward cleaning checklists, and Bio-Medical Waste (BMW) segregation audits.",
      features: [
        "Ward Cleaning SLA Tracking",
        "OT Deep Cleaning Audit",
        "Bio-Medical Waste Logs",
        "Color Coded Bag Tracking",
        "BMW Disposal Certificates",
        "Janitorial Mobile App",
        "Supervisor Rating Log",
        "Sanitation Checklists"
      ],
      benefits: [
        "Immaculate hospital hygiene",
        "100% Bio-Medical Waste compliance",
        "High patient satisfaction"
      ]
    },
    {
      badge: "MODULE 7",
      icon: React.createElement(FiCalendar),
      title: "Hospital Preventive Maintenance (PPM)",
      description: "Automate PPM schedules for hospital electricals, plumbing, elevators, chillers, and fire systems.",
      features: [
        "Automated PM Scheduler",
        "Equipment Checklists",
        "Technician Allocation",
        "Overdue PM Alerts",
        "Elevator Safety Audits",
        "Plumbing Inspection",
        "Electrical Thermal Audits",
        "Recurrent Work Orders"
      ],
      benefits: [
        "Prevent utility breakdowns",
        "Extend facility infrastructure life",
        "High PM compliance rate"
      ]
    },
    {
      badge: "MODULE 8",
      icon: React.createElement(RiQrCodeLine),
      title: "Medical Asset Management & QR Tagging",
      description: "Digital asset register with durable QR code labels for MRI, CT scanners, beds, and pumps.",
      features: [
        "QR Code Asset Tagging",
        "Medical Device History",
        "Warranty & AMC Expiry Alerts",
        "Depreciation Accounting",
        "Asset Location Mapping",
        "Department-Wise Registry",
        "Mobile QR Scanning",
        "Replacement Planning"
      ],
      benefits: [
        "Complete asset visibility",
        "Instant mobile lookup",
        "Optimized CapEx planning"
      ]
    },
    {
      badge: "MODULE 9",
      icon: React.createElement(TbBolt),
      title: "Utility, DG & Uninterrupted Power (UPS)",
      description: "Monitor hospital substations, dual DG backup sets, and hospital-grade UPS systems in real time.",
      features: [
        "Dual DG Auto-Start Logs",
        "UPS Battery Health Index",
        "Substation Parameter Logs",
        "Utility Consumption Metering",
        "Peak Load Tracking",
        "Power Outage Anomaly Alerts",
        "Water & STP Metering",
        "Energy Efficiency Reports"
      ],
      benefits: [
        "100% continuous power backup",
        "Protect sensitive medical devices",
        "Lower utility bills"
      ]
    },
    {
      badge: "MODULE 10",
      icon: React.createElement(FiTruck),
      title: "OEM Vendor & AMC Management",
      description: "Manage high-cost OEM maintenance contracts (GE, Siemens, Philips), warranties, and vendor engineers.",
      features: [
        "OEM Vendor Directory",
        "AMC / CMC Contract Logs",
        "Vendor Engineer Gate Passes",
        "Service Visit Sign-Off",
        "Contractor Rating SLA",
        "Warranty Expiry Alerts",
        "Service Entry Sheets",
        "Payment Approvals"
      ],
      benefits: [
        "Complete OEM vendor control",
        "Enforce vendor SLAs",
        "Simplified vendor billing"
      ]
    },
    {
      badge: "MODULE 11",
      icon: React.createElement(FiRefreshCw),
      title: "Shift Handover & Digital Duty Logbook",
      description: "Digitize 24/7 hospital engineering duty handovers between morning, evening, and night shifts.",
      features: [
        "Digital Duty Logbook",
        "Pending Emergency Tickets",
        "Utility Anomaly Notes",
        "Shift Lead E-Sign-Off",
        "ICU/OT Equipment Status",
        "Audit Log History",
        "Security Gate Occurrence",
        "Mobile Handover App"
      ],
      benefits: [
        "Flawless 24/7 shift transitions",
        "Prevent missed repair tasks",
        "Complete duty accountability"
      ]
    },
    {
      badge: "MODULE 12",
      icon: React.createElement(FiBarChart2),
      title: "Healthcare Analytics & BI Dashboards",
      description: "Executive BI dashboards calculating biomedical uptime, SLA resolution rates, and NABH compliance.",
      features: [
        "Real-Time Operations BI",
        "Biomedical Uptime Scorecard",
        "SLA Resolution Metrics",
        "PM & Calibration Compliance",
        "Maintenance Cost Analysis",
        "Technician Productivity",
        "Custom PDF Exports",
        "Executive Summary Reports"
      ],
      benefits: [
        "Data-driven hospital leadership",
        "Identify high-maintenance assets",
        "Optimize hospital Opex"
      ]
    }
  ],

  modulesList: [
    "Biomedical CMMS",
    "Calibration Tracking",
    "MGPS Monitoring",
    "NABH / JCI Audit",
    "Cleanroom HVAC",
    "Bio-Medical Waste",
    "Housekeeping SLA",
    "Asset QR Tagging",
    "Work Order Dispatch",
    "Utility Monitoring",
    "OEM Vendor Portal",
    "Digital Duty Logbook",
    "EHS Safety",
    "Maintenance Mobile App",
    "Calibration Reports",
    "Infection Control"
  ],

  managedAssetsTable: [
    { category: "Biomedical Equipment", assets: "Ventilators, Defibrillators, Patient Monitors, Anesthesia Machines, Dialysis Units" },
    { category: "Diagnostic & Radiology", assets: "MRI Scanners, CT Scanners, Digital X-Ray, Ultrasound Units, Cath Lab Systems" },
    { category: "Medical Gas (MGPS)", assets: "Liquid Oxygen Plant, Vacuum Pumps, Air Compressors, Manifold Systems" },
    { category: "HVAC & Cleanroom", assets: "OT Air Handling Units (AHU), HEPA Filters, Positive/Negative Pressure Rooms, Chillers" },
    { category: "Electrical & Power", assets: "Substations, Transformers, Dual DG Sets, Hospital-Grade UPS Units" },
    { category: "Sanitation & Safety", assets: "Bio-Medical Waste Incinerators, Autoclaves, ETP/STP Plants, Fire Suppression" }
  ],

  dailyWorkflowSteps: [
    { step: 1, title: "OT / ICU Equipment Alarm", desc: "Machine signals anomaly or nurse notices equipment fault." },
    { step: 2, title: "Urgent SLA Ticket Raised", desc: "Nurse scans QR code on device or logs ticket via Nurse Portal." },
    { step: 3, title: "Bio-Medical Lead Notified", desc: "Instant high-priority push alert sent to Bio-Medical Engineer (BME)." },
    { step: 4, title: "Immediate On-Site Inspection", desc: "BME arrives at OT/ICU with mobile diagnostic app." },
    { step: 5, title: "Spare / Calibration Verified", desc: "Replacement component or calibration tool verified from store." },
    { step: 6, title: "Repair / Replacement Executed", desc: "Device repaired & essential safety parameters calibrated." },
    { step: 7, title: "Infection Control Sign-Off", desc: "Clinical lead inspects device & verifies sterile safety." },
    { step: 8, title: "Compliance Audit Logged", desc: "Service & calibration record automatically attached to asset QR tag." },
    { step: 9, title: "Ticket Closed & RCA Generated", desc: "Ticket closed and Root Cause Analysis (RCA) saved for NABH audit." }
  ],

  businessBenefits: [
    {
      title: "100% NABH & JCI Audit Readiness",
      desc: "Maintain digital, tamper-proof calibration and maintenance records for zero-stress accreditation."
    },
    {
      title: "Zero Patient-Care Equipment Downtime",
      desc: "Ensure 99.8%+ availability for critical ICU ventilators, OT lights, and dialysis units."
    },
    {
      title: "Extend Biomedical Asset Lifespan",
      desc: "Proactively calibrate and maintain high-value MRI, CT, and radiology equipment."
    },
    {
      title: "Maintain Strict Infection Control",
      desc: "Monitor cleanroom HEPA filters, ACPH air changes, and Bio-Medical Waste (BMW) disposal."
    },
    {
      title: "Lower Hospital Energy & Utility Bills",
      desc: "Optimize 24/7 HVAC chillers, medical gas compressors, and DG fuel consumption."
    },
    {
      title: "Streamline 24/7 Clinical & Engineering Shifts",
      desc: "Maintain continuous operational clarity between nursing staff and engineering leads."
    },
    {
      title: "Simplify OEM & AMC Management",
      desc: "Never miss vendor warranty expirations or AMC service schedules."
    },
    {
      title: "Enhance Patient & Staff Safety",
      desc: "Ensure medical gas pipelines, fire safety systems, and standby power never fail."
    }
  ],

  dashboardWidgets: [
    "Biomedical Equipment Uptime %",
    "ICU & OT Asset Status",
    "Pending Calibrations",
    "Open SLA Work Orders",
    "NABH Compliance Score",
    "Cleanroom HVAC Pressure Alerts",
    "MGPS Oxygen Pressure",
    "Bio-Medical Waste Volume",
    "Vendor AMC Performance",
    "Hospital Power & DG Status"
  ],

  comparisonTable: [
    { feature: "Biomedical Maintenance", facilityCore: "Automated Calibration Alerts & QR History", traditional: "Manual Paper Tags on Ventilators" },
    { feature: "Ticket Dispatch", facilityCore: "Instant SLA Mobile Alert from Nurse Station", traditional: "Phone Calls & Shouting in Corridors" },
    { feature: "Compliance Audits", facilityCore: "One-Click Audit-Ready NABH / JCI Reports", traditional: "Missing Paper Registers & Audit Stress" },
    { feature: "Cleanroom Monitoring", facilityCore: "Real-time Pressure & Air Quality Alerts", traditional: "Manual Logbooks in OTs" },
    { feature: "Bio-Medical Waste", facilityCore: "Digital BMW Disposal Tracking", traditional: "Manual Weight Registers" },
    { feature: "Shift Handover", facilityCore: "Digital Duty Logbook & Audit Trail", traditional: "Verbal Handovers across 24/7 Shifts" }
  ],

  metrics: [
    "Up to 50% faster biomedical equipment repair response",
    "Up to 99.8% uptime for critical ICU and Operation Theatre assets",
    "Up to 100% calibration compliance for medical devices",
    "Up to 100% NABH and JCI audit readiness",
    "Up to 35% lower hospital utility & energy costs",
    "Up to 60% reduction in paper forms and logbooks"
  ],

  internalLinks: [
    { label: "Healthcare Facility Management", link: "/industries/healthcare" },
    { label: "Hospital CMMS", link: "/features" },
    { label: "Biomedical Equipment Management", link: "/solutions" },
    { label: "NABH Compliance Software", link: "/features" },
    { label: "Medical Gas Maintenance", link: "/solutions" },
    { label: "Hospital Housekeeping", link: "/features" },
    { label: "Cleanroom HVAC Monitoring", link: "/solutions" },
    { label: "Infection Control Software", link: "/features" },
    { label: "Work Order Dispatch", link: "/solutions" },
    { label: "Asset Management", link: "/features" },
    { label: "Pricing", link: "/pricing" },
    { label: "Contact Us", link: "/contact" },
    { label: "Free Trial", link: "https://admin.facilitycore.in/register" }
  ],

  cta: {
    icon: React.createElement(HiOutlineRocketLaunch),
    title: "Elevate Hospital Operations & Patient Care Standards Today",
    description:
      "Empower your hospital administrators, bio-medical engineers, and nursing teams with a single platform for biomedical maintenance, NABH compliance, infection control, and facility operations. Partner with FacilityCore."
  }
};
