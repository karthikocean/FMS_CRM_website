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
  RiHotelLine,
  RiCupLine
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
  metaTitle: "Hotel Facility Management Software | Hospitality Operations Platform | FacilityCore",
  metaDescription:
    "Manage hotels, resorts, serviced apartments, housekeeping, engineering, maintenance, guest requests, inspections, compliance, assets, vendors, and workforce with FacilityCore's Hospitality Operations Platform.",
  metaKeywords:
    "Hotel Facility Management Software, Hospitality Operations Platform, Hotel Maintenance Software, Hotel Housekeeping Management, Hotel Engineering CMMS, Resort Facility Management, Guest Room Service Request Software, Hotel Energy Management System, Hotel Vendor AMC Management, Hotel Safety & Fire Compliance, Hotel HVAC Chiller Maintenance, Hotel Kitchen Equipment PM, Serviced Apartment Maintenance, Hotel Guest Room Inspection App, Hotel QR Code Maintenance, Hospitality Preventive Maintenance, Hotel Laundry Equipment CMMS, Hotel Duty Manager Shift Logbook, Hotel Pool & Spa Maintenance, Hospitality Asset Tracking Software",
  canonical: "https://facilitycore.in/industries/hospitality-hotels",
  robots: "index, follow",
  ogTitle: "Hotel Facility Management Software | Hospitality Operations Platform | FacilityCore",
  ogDescription:
    "Manage hotels, resorts, serviced apartments, housekeeping, engineering, maintenance, guest requests, inspections, compliance, assets, vendors, and workforce with FacilityCore's Hospitality Operations Platform.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/industries/hospitality-hotels",
  ogImage: "https://facilitycore.in/SmartCityimg.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Hotel Facility Management Software | Hospitality Operations Platform | FacilityCore",
  twitterDescription:
    "Manage hotels, resorts, serviced apartments, housekeeping, engineering, maintenance, guest requests, inspections, compliance, assets, vendors, and workforce with FacilityCore's Hospitality Operations Platform.",
  twitterImage: "https://facilitycore.in/SmartCityimg.png",
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Hotel Facility Management Software | Hospitality Operations Platform | FacilityCore",
      "description":
        "Manage hotels, resorts, serviced apartments, housekeeping, engineering, maintenance, guest requests, inspections, compliance, assets, vendors, and workforce with FacilityCore's Hospitality Operations Platform.",
      "url": "https://facilitycore.in/industries/hospitality-hotels"
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
          "name": "Hospitality & Hotels",
          "item": "https://facilitycore.in/industries/hospitality-hotels"
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
      "name": "FacilityCore Hotel Facility Management & Hospitality Software",
      "operatingSystem": "Web, iOS, Android",
      "applicationCategory": "BusinessApplication",
      "description":
        "Enterprise hotel facility management and CMMS software for luxury resorts, hotel chains, serviced apartments, housekeeping, and engineering operations.",
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
          "name": "What is hotel facility management software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hotel facility management software is a specialized digital platform designed for general managers, chief engineers, and executive housekeepers to automate guest room repairs, housekeeping SLAs, central HVAC chillers, kitchen/laundry PMs, contractor AMCs, and fire/FSSAI safety compliance."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore speed up guest room repair resolutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Front desk and room service staff use the mobile app to log guest requests instantly, automatically dispatching priority SLA work orders to engineering technicians."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore streamline hotel housekeeping and room inspections?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, housekeeping leads use the app for digital room status updates, concourse sanitation audits, and mandatory photo verification."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software manage central HVAC chillers and hotel energy consumption?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore tracks central chiller KW/Ton, AHU filter PMs, room FCU health, and logs sub-meters to lower annual hotel utility bills."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore track preventive maintenance for commercial kitchen and laundry equipment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore schedules routine PM checkups for commercial ovens, walk-in freezers, dishwashers, industrial washers, and boilers."
          }
        },
        {
          "@type": "Question",
          "name": "Can hotel engineers and technicians use a mobile app for work orders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, technicians use the FacilityCore Mobile App to scan room QR tags, record meter readings, attach repair photo proof, and close tickets in under 30 seconds."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore support QR code tagging for hotel assets and rooms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all guest rooms, chillers, boilers, kitchen equipment, generators, and fire panels are tagged with durable QR code labels for instant mobile lookup."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software track swimming pool, spa, and water treatment systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore logs pool pH and chlorine levels, heat pump run-hours, water softener salt levels, and STP plant parameters daily."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore manage third-party hotel contractors and vendor AMCs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Contractor Portal manages third-party AMC contracts for elevators, DG sets, pest control, and security guard agencies."
          }
        },
        {
          "@type": "Question",
          "name": "Is FacilityCore suitable for luxury resorts, hotel chains, boutique hotels, and serviced apartments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. FacilityCore scales from boutique hotels and serviced apartments to sprawling luxury resorts and multi-property hotel chains."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore handle hotel fire safety, FSSAI, and hygiene compliance audits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore maintains digital, tamper-proof audit trails for fire safety walkthroughs, kitchen FSSAI hygiene audits, and regulatory inspections."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore digitize 24/7 hotel duty manager and engineering shift logbooks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Digital Duty Manager Logbook records shift handovers, pending guest tickets, and plant utility anomalies for continuous 24/7 hotel operations."
          }
        }
      ]
    }
  ]
};

// Page Main Data Object
export const hospitalityHotelsData = {
  hero: {
    badge: "HOSPITALITY & HOTEL CMMS PLATFORM",
    title: "Hotel Facility Management Software | Hospitality Operations Platform",
    headline: "Deliver 5-Star Guest Experiences, Rapid Room Repairs & Energy Efficiency",
    description:
      "Unify hotel engineering maintenance, housekeeping SLAs, guest service requests, room inspection apps, central HVAC chillers, kitchen & laundry equipment, vendor AMCs, and hotel safety compliance into one platform.",
    backgroundImage: "/Hotelimg.png"
  },

  stats: [
    { value: "60%", label: "Faster Guest Room Repair SLA Resolution", icon: React.createElement(FiClock) },
    { value: "99%+", label: "Guest Satisfaction Score for Functioning Amenities", icon: React.createElement(FiSmile) },
    { value: "30%", label: "Lower Hotel Chiller & HVAC Energy Bills", icon: React.createElement(FiTrendingUp) },
    { value: "100%", label: "Hotel Fire Safety & FSSAI Audit Compliance", icon: React.createElement(FiCheckCircle) }
  ],

  overview: {
    badge: "5-STAR HOSPITALITY OPERATING ERP",
    badgeIcon: React.createElement(HiOutlineSparkles),
    title: "Positioning FacilityCore as a Complete Hotel & Hospitality Solution",
    subtitle: "Built for General Managers, Chief Engineers & Executive Housekeepers",
    content:
      "Hospitality facilities operate 24/7 where guest satisfaction is directly tied to flawless building operations. A malfunctioning AC in a guest suite, delayed housekeeping room release, or kitchen freezer breakdown damages hotel reputation and revenue. FacilityCore provides a cloud-based hospitality CMMS that connects guest room requests, engineering work orders, central chiller PMs, commercial kitchen equipment, housekeeping SLAs, and fire safety compliance into a single digital platform.",
    image: "/Hotelimg.png",
    imageAlt: "Modern 5-Star Luxury Hotel Complex Managed by FacilityCore",
    highlights: [
      {
        icon: React.createElement(RiHotelLine),
        title: "Hotel Engineering & Guest Request CMMS",
        desc: "Automate maintenance ticket dispatch, guest room repairs, and asset tracking across hotel properties."
      },
      {
        icon: React.createElement(RiSmartphoneLine),
        title: "Mobile App for Engineers & Housekeeping",
        desc: "Empower staff and technicians to receive SLA push alerts and update room repairs in under 30 seconds."
      },
      {
        icon: React.createElement(RiShieldCheckLine),
        title: "100% Fire Safety & FSSAI Compliance",
        desc: "Maintain digital, tamper-proof audit trails for fire safety, kitchen hygiene, and regulatory audits."
      },
      {
        icon: React.createElement(TbReportAnalytics),
        title: "Live Operations BI Dashboard",
        desc: "Real-time BI analytics tracking guest SLA response, room turnaround time, and chiller energy usage."
      }
    ]
  },

  suitableFor: [
    "General Managers (GM)",
    "Chief Engineers",
    "Directors of Engineering",
    "Executive Housekeepers",
    "Hotel Operations Managers",
    "Resort Asset Leads",
    "Luxury Hotels & Resorts",
    "Boutique Hotels",
    "Serviced Apartments & Suites",
    "Hotel Chains & Franchises",
    "Conference & Banquet Centers",
    "Casino Resorts & Spas"
  ],

  challengesBadgeIcon: React.createElement(HiOutlineShieldCheck),
  challengesBadge: "HOSPITALITY OPERATIONAL CHALLENGES",
  challenges: [
    {
      icon: React.createElement(FiSmile),
      title: "Slow Guest Room Repair Resolution",
      description: "Delayed repairs for guest room ACs, plumbing, or TV displays lead to negative reviews and refunds."
    },
    {
      icon: React.createElement(FiClock),
      title: "Housekeeping Room Turnaround Delays",
      description: "Paper-based room inspection communication slows down room release for arriving guests."
    },
    {
      icon: React.createElement(TbBolt),
      title: "High Hotel Chiller & HVAC Energy Bills",
      description: "Unmonitored central chillers, AHUs, and continuous guest room FCUs inflate utility OpEx."
    },
    {
      icon: React.createElement(RiCupLine),
      title: "Commercial Kitchen & Laundry Equipment Breakdown",
      description: "Unplanned oven, freezer, or industrial washer failures disrupt banquet catering and linen supply."
    },
    {
      icon: React.createElement(FiCalendar),
      title: "Lack of Preventive PM for Guest Room Assets",
      description: "Reactive maintenance leads to frequent plumbing leaks, lock failures, and guest complaints."
    },
    {
      icon: React.createElement(FiTruck),
      title: "Unmonitored Vendor AMCs (Elevators & Generators)",
      description: "Tracking third-party contractors for elevator AMCs, DG sets, and pest control manually is difficult."
    },
    {
      icon: React.createElement(FiClipboard),
      title: "Strict Hotel Fire Safety & Food Hygiene Audits",
      description: "Scattered paper registers make passing local fire department and FSSAI audits stressful."
    },
    {
      icon: React.createElement(RiQrCodeLine),
      title: "Lack of Equipment Asset Calibration History",
      description: "Missing electrical thermal audit logs and kitchen freezer calibration records cause audit delays."
    },
    {
      icon: React.createElement(FiCompass),
      title: "Paper-Based Duty Manager Shift Logbooks",
      description: "Shift handovers recorded in paper logbooks lead to unaddressed guest complaints across shifts."
    },
    {
      icon: React.createElement(FiDroplet),
      title: "Unmonitored Swimming Pool & Spa Water Quality",
      description: "Manual chlorine logging without digital alerts leads to pool downtime and guest complaints."
    }
  ],

  solutionsMapping: [
    { challenge: "Slow Guest Room Repair Resolution", solution: "Mobile Guest Request App & Rapid SLA Maintenance Routing", icon: React.createElement(FiSmile) },
    { challenge: "Housekeeping Turnaround Delays", solution: "Real-Time Housekeeping Room Status & Inspection SLA App", icon: React.createElement(FiClock) },
    { challenge: "High Hotel Chiller Energy Bills", solution: "Hotel Energy Sub-Metering & Chiller Optimization Analytics", icon: React.createElement(TbBolt) },
    { challenge: "Kitchen & Laundry Breakdown Failures", solution: "Scheduled PM Checklists for Ovens, Freezers & Washers", icon: React.createElement(RiCupLine) },
    { challenge: "Lack of Preventive PM for Guest Rooms", solution: "Preventative Maintenance (PPM) Scheduler for Guest Rooms", icon: React.createElement(FiCalendar) },
    { challenge: "Unmonitored Vendor AMCs", solution: "Third-Party Contractor Portal & Performance Scorecards", icon: React.createElement(FiTruck) },
    { challenge: "Strict Fire & Hygiene Audits", solution: "Audit-Ready Digital Fire, FSSAI & Hygiene Checklists", icon: React.createElement(FiClipboard) },
    { challenge: "Lack of Asset Calibration History", solution: "QR Code Tagging & Maintenance History Register", icon: React.createElement(RiQrCodeLine) },
    { challenge: "Paper-Based Duty Manager Logbooks", solution: "Digital 24/7 Hotel Duty Manager & Control Room Logbook", icon: React.createElement(FiCompass) },
    { challenge: "Unmonitored Pool & Spa Quality", solution: "Digital Swimming Pool & Spa Maintenance Logbook", icon: React.createElement(FiDroplet) }
  ],

  capabilitiesBadgeIcon: React.createElement(FiLayers),
  capabilitiesBadge: "PURPOSE-BUILT MODULES",
  keyModules: [
    {
      badge: "MODULE 1",
      icon: React.createElement(RiHotelLine),
      title: "Guest Room Maintenance & Request Engine",
      description: "Instant SLA work order dispatch for AC, plumbing, TV, and electrical faults logged by front desk or guests.",
      features: [
        "Guest Request Priority Tagging",
        "Auto-Routing to Technicians",
        "Mobile SLA Push Alerts",
        "Mandated Photo Proof",
        "Parts Used Allocation",
        "Front Desk Confirmation",
        "Escalation Matrix Alerts",
        "Work Order History"
      ],
      benefits: [
        "99%+ guest satisfaction",
        "Eliminate phone call delays",
        "Transparent SLA tracking"
      ]
    },
    {
      badge: "MODULE 2",
      icon: React.createElement(FiSmile),
      title: "Housekeeping & Concourse Sanitation SLA",
      description: "Digital room status updates, concourse cleaning SLA checklists, and public washroom hygiene audits.",
      features: [
        "Room Release Status App",
        "Public Washroom Checklists",
        "Lobby & Concourse Cleaning Logs",
        "Mandated Photo Captures",
        "Janitorial Mobile App",
        "Supervisor Rating Log",
        "Pest Control Audits",
        "Hygiene Scorecards"
      ],
      benefits: [
        "Faster room turnaround",
        "Immaculate concourse cleanliness",
        "High guest impression"
      ]
    },
    {
      badge: "MODULE 3",
      icon: React.createElement(TbBolt),
      title: "Hotel Engineering & HVAC Chiller CMMS",
      description: "Preventive maintenance, chilled water valve checks, AHU filter logs, and FCU health tracking.",
      features: [
        "Central Chiller PM Scheduler",
        "AHU Filter Replacement Alerts",
        "FCU Fan Coil Checklists",
        "Chilled Water KW/Ton Log",
        "Emergency Ticket Dispatch",
        "Substation Switchgear PM",
        "Uptime Performance Score",
        "Mobile Engineer App"
      ],
      benefits: [
        "Lower hotel energy bills",
        "Prevent AC blackouts in suites",
        "Extend chiller equipment life"
      ]
    },
    {
      badge: "MODULE 4",
      icon: React.createElement(RiCupLine),
      title: "Commercial Kitchen & Laundry PM",
      description: "Routine PM checklists for commercial ovens, walk-in freezers, dishwashers, industrial washers, and steam boilers.",
      features: [
        "Kitchen Equipment PM Scheduler",
        "Freezer Temp Monitoring",
        "Dishwasher Sanitization Checks",
        "Laundry Steam Boiler PM",
        "Industrial Dryer Checklists",
        "FSSAI Hygiene Audits",
        "OEM Vendor AMC Logs",
        "Equipment Health Scorecard"
      ],
      benefits: [
        "Prevent food spoilage",
        "Ensure banquet catering uptime",
        "Extend laundry machine life"
      ]
    },
    {
      badge: "MODULE 5",
      icon: React.createElement(RiQrCodeLine),
      title: "Hotel Asset Tracking & QR Code",
      description: "Centralized asset registry with durable QR code labels for chillers, boilers, room FCUs, TV displays, and generators.",
      features: [
        "QR Code Asset Tagging",
        "Asset Service History",
        "Warranty & AMC Expiry",
        "Depreciation Accounting",
        "Guest Room & Floor Mapping",
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
      badge: "MODULE 6",
      icon: React.createElement(TbBolt),
      title: "Hotel Energy Sub-Metering & Utility",
      description: "Log electricity sub-meters, water meters, solar rooftop yields, and DG fuel usage across hotel properties.",
      features: [
        "Sub-Meter Reading Logs",
        "Daily Consumption Reports",
        "Peak Load Monitoring",
        "Power Factor Optimization",
        "Solar Panel Yield Logs",
        "DG Fuel Tracking",
        "Water Tank Level Audits",
        "Green Hotel Reports"
      ],
      benefits: [
        "Identify utility wastage",
        "Lower hotel energy bills",
        "Promote eco-friendly hotel rating"
      ]
    },
    {
      badge: "MODULE 7",
      icon: React.createElement(FiDroplet),
      title: "Pool, Spa & Landscape Maintenance",
      description: "Log daily swimming pool pH/chlorine levels, spa heat pump run-hours, water softeners, and landscape irrigation.",
      features: [
        "Pool Water Quality Log",
        "Spa Heat Pump PM",
        "Water Softener Salt Log",
        "STP Plant Water Audits",
        "Landscape Irrigation PM",
        "Fountain Pump Inspection",
        "Photo Verification Logs",
        "Pool Maintenance Scorecard"
      ],
      benefits: [
        "Pristine pool water quality",
        "Zero pool downtime",
        "Beautiful hotel grounds"
      ]
    },
    {
      badge: "MODULE 8",
      icon: React.createElement(FiTruck),
      title: "Hotel Contractor & Vendor AMC",
      description: "Manage third-party AMCs for elevators, DG sets, pest control, security, and specialized kitchen machinery.",
      features: [
        "Vendor Directory",
        "AMC Contract Logs",
        "Vendor Worker Gate Passes",
        "Safety Induction Records",
        "Insurance Verification",
        "Contractor Performance SLA",
        "Service Entry Sheets",
        "Payment Approvals"
      ],
      benefits: [
        "Complete vendor control",
        "Enforce hotel safety",
        "Simplified vendor billing"
      ]
    },
    {
      badge: "MODULE 9",
      icon: React.createElement(FiClipboard),
      title: "Hotel EHS, Fire Safety & FSSAI",
      description: "Digital inspection checklists for fire alarm walkthroughs, kitchen FSSAI hygiene audits, and EHS compliance.",
      features: [
        "Digital Inspection Templates",
        "Mandated Photo Captures",
        "Pass/Fail Rating Logic",
        "Auto-Ticket for Failures",
        "Fire Safety Checklists",
        "Kitchen FSSAI Hygiene Audits",
        "Elevator Safety Audits",
        "Exportable PDF Reports"
      ],
      benefits: [
        "100% audit readiness",
        "Avoid regulatory fines",
        "Standardized safety checks"
      ]
    },
    {
      badge: "MODULE 10",
      icon: React.createElement(RiSmartphoneLine),
      title: "Hotel Staff & Technician Mobile App",
      description: "Mobile app for engineering technicians and housekeeping leads to receive SLA alerts and log repairs.",
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
        "Real-time staff visibility",
        "Higher technician productivity"
      ]
    },
    {
      badge: "MODULE 11",
      icon: React.createElement(FiRefreshCw),
      title: "24/7 Duty Manager & Engineering Logbook",
      description: "Digital duty logbook for hotel duty managers and engineering leads to log shift handovers and pending issues.",
      features: [
        "Digital Duty Manager Logbook",
        "Pending Guest SLA Tickets",
        "Plant Utility Anomaly Notes",
        "Shift Lead E-Sign-Off",
        "Chiller & DG Run-Hour Logs",
        "Audit Trail History",
        "Broadcast Announcements",
        "Mobile Handover App"
      ],
      benefits: [
        "Flawless 24/7 shift transitions",
        "Prevent missed guest requests",
        "Complete duty accountability"
      ]
    },
    {
      badge: "MODULE 12",
      icon: React.createElement(FiBarChart2),
      title: "Executive BI & Hospitality Analytics",
      description: "Executive dashboards tracking guest SLA response, room turnaround, maintenance cost per room, and P&L.",
      features: [
        "Real-Time Operations BI",
        "Guest Request SLA Scorecard",
        "Housekeeping Turnaround Reports",
        "Maintenance Cost per Room",
        "Technician Productivity",
        "Custom PDF Exports",
        "Executive Summary Reports",
        "Hotel OpEx Dashboards"
      ],
      benefits: [
        "Data-driven GM decisions",
        "Identify high-cost assets",
        "Optimize hotel OpEx"
      ]
    }
  ],

  modulesList: [
    "Hotel CMMS",
    "Guest Request SLA",
    "Housekeeping SLA",
    "Hotel Engineering",
    "Kitchen & Laundry PM",
    "HVAC Chiller CMMS",
    "Asset QR Tagging",
    "Hotel Energy Management",
    "Pool & Spa PM",
    "Contractor AMC Portal",
    "Fire Safety Compliance",
    "Mobile Staff App",
    "Shift Duty Logbook",
    "FSSAI Checklists",
    "Energy Analytics",
    "BI Dashboards"
  ],

  managedAssetsTable: [
    { category: "Guest Room Assets", assets: "FCUs, Precision ACs, Smart Lock Systems, TV Displays, Plumbing Fixtures, Mini-Bars" },
    { category: "Central HVAC & Power", assets: "Central Chillers, Air Handling Units (AHU), DG Backup Sets, Transformers, Substations" },
    { category: "Kitchen & Catering Equipment", assets: "Commercial Ovens, Walk-In Freezers, Exhaust Hoods, Dishwashers, Gas Skids" },
    { category: "Laundry & Housekeeping", assets: "Industrial Washers, Dryers, Flatwork Ironers, Steam Boilers, Vacuum Cleaners" },
    { category: "Recreation & Water", assets: "Swimming Pool Filtration, Spa Heat Pumps, Fountains, Water Softeners, STP Plants" },
    { category: "Safety & Security", assets: "Fire Alarm Panels, Sprinklers, Keycard Access Readers, CCTV Systems, Baggage Scanners" }
  ],

  dailyWorkflowSteps: [
    { step: 1, title: "Guest Request / AC Fault Reported", desc: "Front desk or guest logs issue via mobile app or web portal." },
    { step: 2, title: "Ticket Generated & SLA Tagged", desc: "Ticket automatically created with priority SLA tag." },
    { step: 3, title: "Engineering Lead Assigns", desc: "Duty engineer validates request & dispatches on-duty technician." },
    { step: 4, title: "Technician Dispatched via App", desc: "Technician receives push alert & arrives at guest room with spares." },
    { step: 5, title: "On-Site Repair Execution", desc: "Technician repairs AC, plumbing, or lock fault in under 15 minutes." },
    { step: 6, title: "Quality & Cleanliness Check", desc: "Supervisor inspects repair quality & confirms room tidiness." },
    { step: 7, title: "Front Desk / Guest E-Sign-Off", desc: "Front desk approves completion on mobile app." },
    { step: 8, title: "Ticket Closed", desc: "Ticket automatically closed and logged into asset service register." },
    { step: 9, title: "Executive BI Dashboard Updated", desc: "Guest SLA response time & maintenance cost per room updated live." }
  ],

  businessBenefits: [
    {
      title: "Achieve 99%+ Guest Satisfaction Scores",
      desc: "Resolve guest room AC, plumbing, and lock issues in under 15 minutes with rapid SLA routing."
    },
    {
      title: "Reduce Hotel Chiller & HVAC Energy Bills by 30%",
      desc: "Optimize central chillers, AHUs, and room FCUs to eliminate energy wastage."
    },
    {
      title: "Faster Housekeeping Room Turnaround",
      desc: "Streamline room release communication between housekeeping and front desk staff."
    },
    {
      title: "100% Fire Safety & FSSAI Audit Compliance",
      desc: "Enforce digital inspection checklists for fire safety, food hygiene, and electrical systems."
    },
    {
      title: "Prevent Kitchen & Laundry Equipment Downtime",
      desc: "Schedule routine PM checkups for commercial ovens, walk-in freezers, and industrial washers."
    },
    {
      title: "Streamline Hotel Vendor AMCs",
      desc: "Manage third-party contractor AMCs for elevators, DG sets, pest control, and security."
    },
    {
      title: "Pristine Swimming Pool & Spa Quality",
      desc: "Log daily pool pH, chlorine, and heat pump parameters to ensure continuous availability."
    },
    {
      title: "Eliminate Duty Manager Shift Gaps",
      desc: "Maintain continuous operational clarity between 24/7 hotel duty managers and engineers."
    }
  ],

  dashboardWidgets: [
    "Open Guest Request SLA Tickets",
    "Housekeeping Room Turnaround Time",
    "Hotel Energy & Chiller KW/Ton",
    "Kitchen Equipment PM Compliance %",
    "Swimming Pool Water Quality Index",
    "Maintenance Cost per Occupied Room",
    "Vendor AMC Performance",
    "Fire & Safety Audit Score",
    "24/7 Duty Manager Status"
  ],

  comparisonTable: [
    { feature: "Guest Request Dispatch", facilityCore: "Mobile App & Automated SLA Dispatch", traditional: "Verbal Phone Calls & Desk Memos" },
    { feature: "Room Housekeeping", facilityCore: "Real-Time Mobile SLA App & Photo Audits", traditional: "Paper Housekeeping Sheets" },
    { feature: "HVAC & Chiller Maintenance", facilityCore: "Automated Temperature & Filter PM Scheduler", traditional: "Reactive Chiller Repairs" },
    { feature: "Kitchen Equipment PM", facilityCore: "Scheduled Ovens & Freezer Inspections", traditional: "Emergency Breakdown Repairs" },
    { feature: "Safety & Compliance", facilityCore: "One-Click Audit-Ready Digital Reports", traditional: "Missing Paper Records & Audit Stress" },
    { feature: "Duty Manager Logbook", facilityCore: "Digital 24/7 Hotel Duty Manager Logbook", traditional: "Hand-Written Shift Log Books" }
  ],

  metrics: [
    "Up to 60% faster resolution of guest room maintenance requests",
    "Up to 30% reduction in hotel HVAC and utility energy bills",
    "Up to 99% guest satisfaction score for room comfort and functioning amenities",
    "Up to 100% compliance with hotel fire, safety, and FSSAI hygiene standards",
    "Up to 40% reduction in housekeeping room inspection turnaround time",
    "Up to 80% reduction in paper logbooks and manual registers"
  ],

  internalLinks: [
    { label: "Hotel Facility Management Software", link: "/industries/hospitality-hotels" },
    { label: "Hospitality Operations Platform", link: "/features" },
    { label: "Hotel Maintenance Software", link: "/solutions" },
    { label: "Housekeeping Management", link: "/features" },
    { label: "Hotel Engineering CMMS", link: "/solutions" },
    { label: "HVAC Chiller Maintenance", link: "/features" },
    { label: "Work Order Dispatch", link: "/solutions" },
    { label: "Contractor Management", link: "/features" },
    { label: "Asset Management", link: "/solutions" },
    { label: "Pricing", link: "/pricing" },
    { label: "Contact Us", link: "/contact" },
    { label: "Free Trial", link: "https://admin.facilitycore.in/register" }
  ],

  cta: {
    icon: React.createElement(HiOutlineRocketLaunch),
    title: "Elevate Hotel & Hospitality Operations Today",
    description:
      "Empower your general managers, chief engineers, and executive housekeepers with a single platform for guest room repairs, housekeeping SLAs, central chillers, and fire safety compliance. Partner with FacilityCore."
  }
};
