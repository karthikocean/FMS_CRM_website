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
  FiBookOpen
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
  RiGraduationCapLine,
  RiGovernmentLine
} from "react-icons/ri";
import {
  TbSettingsAutomation,
  TbDoorEnter,
  TbChecklist,
  TbBuildingWarehouse,
  TbReportAnalytics,
  TbBolt,
  TbSchool
} from "react-icons/tb";
import {
  HiOutlineSparkles,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck
} from "react-icons/hi2";

// Declarative SEO Metadata & Schema JSON-LD
export const seoData = {
  metaTitle: "Education & Campus Facility Management Software | FacilityCore",
  metaDescription:
    "Manage schools, colleges, universities, and educational campuses with FacilityCore. Automate maintenance, assets, classrooms, hostels, transport, safety, housekeeping, compliance, and campus operations.",
  metaKeywords:
    "Education Facility Management Software, Campus Facility Management Software, School Maintenance Software, College Campus CMMS, University Asset Management, Educational Campus Operations, School Safety & EHS Software, Hostel Management System, School Transport Maintenance, Classroom Infrastructure Management, Campus Maintenance Software, School Housekeeping Management, Lab Equipment Maintenance, Auditorium Booking Software, School Utility Monitoring, Campus Security Management, School Facilities ERP, Higher Education Maintenance, Sports Facility Management, Campus Work Order Dispatch",
  canonical: "https://facilitycore.in/industries/education",
  robots: "index, follow",
  ogTitle: "Education & Campus Facility Management Software | FacilityCore",
  ogDescription:
    "Manage schools, colleges, universities, and educational campuses with FacilityCore. Automate maintenance, assets, classrooms, hostels, transport, safety, housekeeping, compliance, and campus operations.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/industries/education",
  ogImage: "https://facilitycore.in/school.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Education & Campus Facility Management Software | FacilityCore",
  twitterDescription:
    "Manage schools, colleges, universities, and educational campuses with FacilityCore. Automate maintenance, assets, classrooms, hostels, transport, safety, housekeeping, compliance, and campus operations.",
  twitterImage: "https://facilitycore.in/school.png",
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Education & Campus Facility Management Software | FacilityCore",
      "description":
        "Manage schools, colleges, universities, and educational campuses with FacilityCore. Automate maintenance, assets, classrooms, hostels, transport, safety, housekeeping, compliance, and campus operations.",
      "url": "https://facilitycore.in/industries/education"
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
          "name": "Education",
          "item": "https://facilitycore.in/industries/education"
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
      "name": "FacilityCore Education & Campus Facility Management Software",
      "operatingSystem": "Web, iOS, Android",
      "applicationCategory": "BusinessApplication",
      "description":
        "Comprehensive campus facility management and CMMS software for K-12 schools, colleges, universities, and educational institutions.",
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
          "name": "What is education facility management software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Education facility management software is a specialized digital platform designed for school administrators, campus facility heads, and estate managers to automate maintenance for classrooms, hostels, science labs, fleet buses, sports grounds, and campus utilities."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore streamline school and college maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore provides a mobile service portal for teachers, wardens, and staff to raise maintenance tickets, automatically assigning work orders to campus electricians, plumbers, and technicians with real-time SLA tracking."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore track maintenance for hostels and residential halls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, hostel wardens and students can report plumbing, electrical, mess equipment, or furniture repairs, ensuring rapid resolution and transparent status tracking."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software handle school bus and transport fleet maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore tracks preventive maintenance schedules, mileage, battery health, and safety checklists for school buses and transport vans to ensure student transport safety."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore support lab equipment and computer asset tracking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all science lab equipment, projectors, smart boards, and computer lab systems can be tagged with QR codes to track warranty, calibration, and service logs."
          }
        },
        {
          "@type": "Question",
          "name": "Can teachers and campus staff log facility issues via mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, staff use the FacilityCore Mobile App to scan QR codes on classroom doors or equipment, attach photo proof, and submit tickets in under 30 seconds."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore support QR code tagging for campus assets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all campus generators, AC units, projectors, lab devices, and sports equipment can be tagged with QR codes for instant mobile lookup."
          }
        },
        {
          "@type": "Question",
          "name": "How does the software manage auditorium, sports field, and hall bookings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore provides an online facility reservation system to check real-time availability and reserve auditoriums, conference halls, and sports grounds without scheduling conflicts."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore track campus energy, water, and utility consumption?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore logs electricity meters, sub-meters, water consumption, solar panel yields, and DG fuel usage across large educational campuses."
          }
        },
        {
          "@type": "Question",
          "name": "Is FacilityCore suitable for K-12 schools, colleges, and large university campuses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. FacilityCore scales from single-location K-12 schools to multi-building university campuses with thousands of students."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore manage campus housekeeping and sanitation audits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore digitizes washroom cleaning SLA checklists, classroom sanitation audits, and waste disposal logs for campus hygiene compliance."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore generate audit-ready safety and compliance reports?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore maintains digital records for fire safety walkthroughs, elevator safety inspections, and regulatory compliance audits."
          }
        }
      ]
    }
  ]
};

// Page Main Data Object
export const educationData = {
  hero: {
    badge: "CAMPUS & EDUCATION FACILITY MANAGEMENT",
    title: "Education & Campus Facility Management Software",
    headline: "Create Safe, Efficient & Smart Educational Campuses",
    description:
      "Simplify campus operations with an all-in-one platform for maintenance, asset tracking, classrooms, hostels, sports facilities, transport fleets, safety inspections, housekeeping, and campus utilities.",
    backgroundImage: "/school.png"
  },

  stats: [
    { value: "45%", label: "Faster Campus Ticket Resolution", icon: React.createElement(FiClock) },
    { value: "35%", label: "Lower Campus Energy & Utility Bills", icon: React.createElement(FiTrendingUp) },
    { value: "99%", label: "PM Compliance for Bus Fleets & DG Sets", icon: React.createElement(FiShield) },
    { value: "100%", label: "Safety & Fire Audit Compliance", icon: React.createElement(FiCheckCircle) }
  ],

  overview: {
    badge: "SMART CAMPUS ERP",
    badgeIcon: React.createElement(HiOutlineSparkles),
    title: "Positioning FacilityCore as a Complete Campus Facility Solution",
    subtitle: "Built for School Principals, University Deans, Campus Facility Directors & Estate Leads",
    content:
      "Educational institutions must maintain safe, clean, and functioning environments across classrooms, laboratories, hostels, auditoriums, and sports grounds. Unresolved maintenance issues affect student learning and institutional reputation. FacilityCore provides a cloud-based campus facility platform that unifies work orders, asset lifecycle tracking, hostel service tickets, transport maintenance, utility monitoring, and safety audits into a single digital solution.",
    image: "/school.png",
    imageAlt: "Modern Educational Campus Managed by FacilityCore",
    highlights: [
      {
        icon: React.createElement(TbSchool),
        title: "Smart Campus CMMS",
        desc: "Automate maintenance ticket dispatch, preventive schedules, and asset tracking across all campus buildings."
      },
      {
        icon: React.createElement(RiSmartphoneLine),
        title: "Mobile App for Teachers & Staff",
        desc: "Empower faculty and hostel wardens to raise maintenance issues in under 30 seconds with photo attachments."
      },
      {
        icon: React.createElement(RiShieldCheckLine),
        title: "Campus Safety & Fire Audit",
        desc: "Ensure student safety with mandatory digital checklists for fire extinguishers, elevators, and sports grounds."
      },
      {
        icon: React.createElement(TbReportAnalytics),
        title: "Live Operations & Utility Dashboard",
        desc: "Real-time BI analytics tracking ticket resolution SLAs, hostel complaints, and campus energy consumption."
      }
    ]
  },

  suitableFor: [
    "School Principals",
    "University Deans",
    "Campus Facility Directors",
    "Estate & Operations Managers",
    "Hostel Wardens",
    "Lab & Tech Coordinators",
    "K-12 Schools",
    "International Schools",
    "Colleges & Polyclinics",
    "University Campuses",
    "Technical Institutes",
    "Boarding Schools"
  ],

  challengesBadgeIcon: React.createElement(HiOutlineShieldCheck),
  challengesBadge: "CAMPUS OPERATIONAL CHALLENGES",
  challenges: [
    {
      icon: React.createElement(FiTool),
      title: "Campus Maintenance Delays",
      description: "Classroom AC, lighting, or plumbing faults disrupt lectures when repairs are delayed."
    },
    {
      icon: React.createElement(FiUsers),
      title: "Unmonitored Hostel & Living Facilities",
      description: "Hostel resident complaints submitted via paper registers are easily missed or delayed."
    },
    {
      icon: React.createElement(FiTruck),
      title: "School Bus & Transport Failures",
      description: "Unmaintained buses and vans compromise student safety and morning pickup schedules."
    },
    {
      icon: React.createElement(FiBookOpen),
      title: "Classroom & Lab Equipment Downtime",
      description: "Faulty projectors, smart boards, and lab instruments disrupt teaching and practical exams."
    },
    {
      icon: React.createElement(TbBolt),
      title: "High Energy & Water Wastage",
      description: "Unmonitored campus electricity and water usage lead to inflated institutional utility bills."
    },
    {
      icon: React.createElement(FiCalendar),
      title: "Sports & Auditorium Booking Conflicts",
      description: "Double bookings of conference halls, auditoriums, and sports fields cause scheduling clashes."
    },
    {
      icon: React.createElement(FiTruck),
      title: "Unorganized Contractor & AMC Oversight",
      description: "Managing third-party elevator AMCs, security agencies, and housekeeping vendors manually is difficult."
    },
    {
      icon: React.createElement(FiShield),
      title: "Student & Staff Safety Risks",
      description: "Missed inspections for fire alarms, playground equipment, and electrical panels create safety hazards."
    },
    {
      icon: React.createElement(FiSmile),
      title: "Paper-Based Housekeeping & Hygiene",
      description: "Unmonitored washroom cleaning logs lead to poor campus hygiene and health concerns."
    },
    {
      icon: React.createElement(FiClipboard),
      title: "Audit Non-Compliance & Safety Inspections",
      description: "Scattered paper records make passing government and educational safety audits stressful."
    }
  ],

  solutionsMapping: [
    { challenge: "Campus Maintenance Delays", solution: "Automated Work Order & Campus SLA Dispatch", icon: React.createElement(FiTool) },
    { challenge: "Unmonitored Hostel Facilities", solution: "Digital Hostel Maintenance & Service Tickets", icon: React.createElement(FiUsers) },
    { challenge: "School Bus & Transport Failures", solution: "Fleet & Bus Preventive Maintenance Scheduler", icon: React.createElement(FiTruck) },
    { challenge: "Classroom & Lab Downtime", solution: "QR Asset Tagging & Lab Calibration Register", icon: React.createElement(FiBookOpen) },
    { challenge: "High Energy & Water Wastage", solution: "Campus Energy & Utility Consumption Tracking", icon: React.createElement(TbBolt) },
    { challenge: "Sports & Auditorium Conflicts", solution: "Online Facility & Hall Reservation Portal", icon: React.createElement(FiCalendar) },
    { challenge: "Unorganized Contractor Oversight", solution: "Third-Party Campus Contractor Portal", icon: React.createElement(FiTruck) },
    { challenge: "Student & Staff Safety Risks", solution: "Digital Campus EHS & Fire Safety Inspections", icon: React.createElement(FiShield) },
    { challenge: "Paper-Based Housekeeping", solution: "Digital Housekeeping Audits & Sanitation Logs", icon: React.createElement(FiSmile) },
    { challenge: "Audit Non-Compliance", solution: "Audit-Ready Campus Safety & ISO Reports", icon: React.createElement(FiClipboard) }
  ],

  capabilitiesBadgeIcon: React.createElement(FiLayers),
  capabilitiesBadge: "PURPOSE-BUILT MODULES",
  keyModules: [
    {
      badge: "MODULE 1",
      icon: React.createElement(TbSchool),
      title: "Classroom & Infrastructure Maintenance",
      description: "Instant work order dispatch for ACs, desks, whiteboards, lighting, and plumbing in academic buildings.",
      features: [
        "Classroom Ticket Dispatch",
        "Priority Level Allocation",
        "Photo & Video Proof",
        "Technician Mobile App",
        "SLA Response Monitoring",
        "Parts Used Allocation",
        "Teacher Feedback Log",
        "Work Order History"
      ],
      benefits: [
        "Zero lecture disruptions",
        "Faster technician response",
        "Transparent repair tracking"
      ]
    },
    {
      badge: "MODULE 2",
      icon: React.createElement(FiUsers),
      title: "Hostel & Residential Facilities",
      description: "Service ticket management for student hostels, mess hall equipment, water heaters, and laundries.",
      features: [
        "Hostel Complaint Portal",
        "Room Maintenance Tickets",
        "Warden Approval Workflow",
        "Mess Equipment Checklists",
        "Water Heater PM",
        "Pest Control Audits",
        "Student Rating Log",
        "Mobile App for Wardens"
      ],
      benefits: [
        "Improve student living experience",
        "Quick resolution for hostel issues",
        "Clear warden accountability"
      ]
    },
    {
      badge: "MODULE 3",
      icon: React.createElement(FiTruck),
      title: "School Transport & Fleet PM",
      description: "Preventive maintenance, mileage tracking, battery checks, and safety checklists for school buses.",
      features: [
        "Bus Service PM Scheduler",
        "Mileage & Fuel Tracking",
        "Driver Daily Safety Checklist",
        "Breakdown Alert Dispatch",
        "Tire & Battery History",
        "Fitness Certificate Logs",
        "Vendor Repair Invoices",
        "Fleet Health Scorecard"
      ],
      benefits: [
        "Ensure student transport safety",
        "Prevent unexpected bus breakdowns",
        "Lower fleet operating costs"
      ]
    },
    {
      badge: "MODULE 4",
      icon: React.createElement(FiBookOpen),
      title: "Laboratory & Tech Asset Tracking",
      description: "Digital inventory and calibration tracking for science lab equipment, computers, and smart boards.",
      features: [
        "Lab Asset Registry",
        "QR Code Equipment Tags",
        "Calibration Expiry Alerts",
        "Smart Board Maintenance",
        "Computer Lab PM",
        "Fume Hood Safety Checks",
        "Warranty Expiry Alerts",
        "CapEx Replacement Log"
      ],
      benefits: [
        "Keep lab instruments ready",
        "Prevent exam disruptions",
        "Complete asset history"
      ]
    },
    {
      badge: "MODULE 5",
      icon: React.createElement(FiCalendar),
      title: "Auditorium & Sports Ground Booking",
      description: "Automated online reservation system for conference halls, auditoriums, and sports facilities.",
      features: [
        "Auditorium Slot Booking",
        "Sports Field Reservation",
        "Approval Workflow",
        "AV Equipment Requests",
        "Event Setup Checklists",
        "Real-Time Calendar Sync",
        "Usage Analytics Reports",
        "Prevent Double Bookings"
      ],
      benefits: [
        "Eliminate booking clashes",
        "Seamless event coordination",
        "Optimal facility utilization"
      ]
    },
    {
      badge: "MODULE 6",
      icon: React.createElement(RiQrCodeLine),
      title: "Campus Asset Management & QR Tagging",
      description: "Centralized asset registry with durable QR codes for all campus generators, ACs, and furniture.",
      features: [
        "QR Code Asset Tagging",
        "Asset Service History",
        "Warranty & AMC Tracking",
        "Depreciation Accounting",
        "Location & Building Tagging",
        "Mobile QR Scanning",
        "Sub-Assembly Hierarchy",
        "CapEx Budget Planning"
      ],
      benefits: [
        "Complete asset visibility",
        "Instant mobile lookup",
        "Optimized CapEx budgets"
      ]
    },
    {
      badge: "MODULE 7",
      icon: React.createElement(TbBolt),
      title: "Utility & Energy Management",
      description: "Track electricity meters, water consumption, solar panel yields, and DG fuel usage across campus.",
      features: [
        "Utility Meter Logging",
        "Daily Consumption Reports",
        "Peak Load Monitoring",
        "Energy Anomaly Alerts",
        "Solar Panel Yield Logs",
        "DG Fuel Tracking",
        "Water Tank Level Audits",
        "Green Campus Reports"
      ],
      benefits: [
        "Identify utility wastage",
        "Lower institutional energy bills",
        "Promote green campus initiatives"
      ]
    },
    {
      badge: "MODULE 8",
      icon: React.createElement(FiTruck),
      title: "Contractor & Vendor AMC Portal",
      description: "Manage third-party elevator AMCs, security guard agencies, and housekeeping contractors.",
      features: [
        "Contractor Directory",
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
        "Enforce campus safety",
        "Simplified vendor billing"
      ]
    },
    {
      badge: "MODULE 9",
      icon: React.createElement(FiSmile),
      title: "Housekeeping & Hygiene Audits",
      description: "Digital washroom cleaning SLA checklists, classroom sanitation, and campus waste management.",
      features: [
        "Washroom SLA Tracking",
        "Classroom Cleaning Checklists",
        "Janitorial Mobile App",
        "Waste Disposal Logs",
        "Pest Control Audits",
        "Mandated Photo Captures",
        "Supervisor Rating Log",
        "Hygiene Scorecards"
      ],
      benefits: [
        "Immaculate campus hygiene",
        "Prevent disease spread",
        "High student & parent satisfaction"
      ]
    },
    {
      badge: "MODULE 10",
      icon: React.createElement(FiShield),
      title: "Campus Security & Gate Management",
      description: "Digital visitor gate passes, student movement tracking, and campus security guard patrols.",
      features: [
        "Visitor Pre-Approval",
        "QR Gate Pass Verification",
        "Student Out-Pass Logs",
        "Guard Patrol Tracking",
        "Emergency Panic Alerts",
        "Vehicle Entry Passes",
        "Daily Occurrence Log",
        "Blacklisted Visitor Alerts"
      ],
      benefits: [
        "Strong campus security",
        "Track student out-passes",
        "Complete digital gate records"
      ]
    },
    {
      badge: "MODULE 11",
      icon: React.createElement(FiRefreshCw),
      title: "Campus Engineering Shift Handover",
      description: "Digital duty logbook for campus electricians, plumbers, and technicians across 24/7 shifts.",
      features: [
        "Digital Duty Logbook",
        "Pending Work Orders Log",
        "Utility Anomaly Notes",
        "Shift Lead Sign-Off",
        "DG & Substation Status",
        "Audit Trail Log",
        "Broadcast Announcements",
        "Mobile Handover App"
      ],
      benefits: [
        "Flawless shift transitions",
        "Prevent missed repair tasks",
        "Complete shift accountability"
      ]
    },
    {
      badge: "MODULE 12",
      icon: React.createElement(FiBarChart2),
      title: "Campus Analytics & Executive BI",
      description: "Executive dashboards tracking SLA resolution rates, campus energy bills, and PM compliance.",
      features: [
        "Real-Time Operations BI",
        "Building Uptime Scorecard",
        "SLA Resolution Metrics",
        "PM Compliance Reports",
        "Maintenance Cost Analysis",
        "Technician Productivity",
        "Custom PDF Exports",
        "Executive Summary Reports"
      ],
      benefits: [
        "Data-driven leadership decisions",
        "Identify high-cost assets",
        "Optimize campus Opex"
      ]
    }
  ],

  modulesList: [
    "Campus CMMS",
    "Classroom Maintenance",
    "Hostel Facilities",
    "Fleet PM",
    "Lab Equipment",
    "Sports Reservation",
    "Asset QR Tagging",
    "Work Order Dispatch",
    "Utility Monitoring",
    "Contractor Portal",
    "Campus Security",
    "Housekeeping SLA",
    "EHS Safety",
    "Maintenance Mobile App",
    "Audit Reports",
    "Energy Management"
  ],

  managedAssetsTable: [
    { category: "Campus Buildings", assets: "Classrooms, Lecture Halls, Laboratories, Libraries, Auditoriums, Staff Rooms" },
    { category: "Hostel & Living", assets: "Student Rooms, Mess & Kitchen Equipment, Water Heaters, Laundry Systems" },
    { category: "Science & Tech Labs", assets: "Computers, Projectors, Smart Boards, Fume Hoods, Lab Microscopes" },
    { category: "Fleet & Transport", assets: "School Buses, Vans, Maintenance Vehicles, Electric Carts" },
    { category: "Electrical & Power", assets: "Substations, Transformers, DG Sets, UPS Units, Campus Solar Panels" },
    { category: "Sports & Recreation", assets: "Swimming Pool, Indoor Stadium, Turf Grounds, Gymnasium Equipment" }
  ],

  dailyWorkflowSteps: [
    { step: 1, title: "Classroom / Lab Issue Reported", desc: "Teacher or warden scans QR code on door or logs ticket via app." },
    { step: 2, title: "Ticket Generated & SLA Triggered", desc: "Ticket automatically routed with priority tag to estate team." },
    { step: 3, title: "Estate Manager Reviews", desc: "Estate manager validates request & assigns on-duty technician." },
    { step: 4, title: "Technician Dispatched with Spares", desc: "Technician receives mobile push notification & collects spare parts." },
    { step: 5, title: "Repair Executed On-Site", desc: "Technician repairs AC, projector, or plumbing fault." },
    { step: 6, title: "Photo Proof Uploaded", desc: "Before & after work completion proof attached to work order." },
    { step: 7, title: "Staff Verification & Rating", desc: "Teacher receives completion notification & submits star rating." },
    { step: 8, title: "Ticket Closed", desc: "Ticket automatically closed and logged into asset service log." },
    { step: 9, title: "Campus Analytics Updated", desc: "SLA response time & technician score updated on Executive BI Dashboard." }
  ],

  businessBenefits: [
    {
      title: "Deliver Safe & Clean Learning Environment",
      desc: "Ensure classrooms, laboratories, and hostels remain well-maintained and hygienic."
    },
    {
      title: "Maximize Campus Asset Lifespan",
      desc: "Proactively service ACs, DG sets, lab instruments, and sports equipment."
    },
    {
      title: "Reduce Energy & Water Utility Bills",
      desc: "Monitor electricity consumption, solar yields, and water tanks across campus buildings."
    },
    {
      title: "100% Student Transport Safety Compliance",
      desc: "Enforce scheduled PM checkups and safety inspections for school buses and vans."
    },
    {
      title: "Eliminate Auditorium Booking Conflicts",
      desc: "Streamline hall reservations and AV equipment requests through an online portal."
    },
    {
      title: "Streamline Hostel & Campus Maintenance",
      desc: "Resolve student hostel service tickets rapidly with transparent warden approvals."
    },
    {
      title: "Simplify Contractor Oversight",
      desc: "Manage third-party elevator AMCs, security guard agencies, and housekeeping."
    },
    {
      title: "100% Audit Readiness for Safety",
      desc: "Maintain digital inspection records for fire safety, electrical systems, and ISO audits."
    }
  ],

  dashboardWidgets: [
    "Open Campus Tickets",
    "MHE & Bus Fleet Status",
    "PM Compliance %",
    "Utility & Energy Usage",
    "Hostel Complaint SLA",
    "Auditorium Bookings",
    "EHS Safety Audit Score",
    "Contractor Gate Passes",
    "Maintenance Cost vs Budget",
    "Campus Occupancy & Facilities Status"
  ],

  comparisonTable: [
    { feature: "Maintenance Requests", facilityCore: "Mobile SLA Ticketing & Auto-Dispatch", traditional: "Paper Notes & Verbal Requests to Janitors" },
    { feature: "Bus Fleet Service", facilityCore: "Automated Mileage PM Scheduler", traditional: "Reactive Repairs after Breakdowns" },
    { feature: "Hostel Complaints", facilityCore: "Student Mobile Service Portal", traditional: "Unorganized Complaints at Warden Office" },
    { feature: "Facility Reservation", facilityCore: "Online Slot Reservation System", traditional: "Manual Paper Register at Admin Desk" },
    { feature: "Analytics & Reports", facilityCore: "Live Executive Campus BI Dashboard", traditional: "End-of-Month Excel Spreadsheets" },
    { feature: "Safety & Audits", facilityCore: "Digital EHS & Fire Inspection Checklists", traditional: "Missing Paper Forms" }
  ],

  metrics: [
    "Up to 45% faster campus issue resolution",
    "Up to 35% reduction in campus utility & energy costs",
    "Up to 99% PM compliance rate for school buses and DG sets",
    "Up to 50% reduction in hostel complaint turnaround time",
    "Up to 100% safety & fire audit compliance",
    "Up to 60% reduction in paper forms and logbooks"
  ],

  internalLinks: [
    { label: "Education Facility Management", link: "/industries/education" },
    { label: "Campus CMMS", link: "/features" },
    { label: "School Maintenance Software", link: "/solutions" },
    { label: "University Asset Management", link: "/features" },
    { label: "Hostel Management Software", link: "/solutions" },
    { label: "School Bus Fleet Maintenance", link: "/features" },
    { label: "Campus Utility Management", link: "/solutions" },
    { label: "Work Order Dispatch", link: "/features" },
    { label: "Contractor Management", link: "/solutions" },
    { label: "Asset Management", link: "/features" },
    { label: "Pricing", link: "/pricing" },
    { label: "Contact Us", link: "/contact" },
    { label: "Free Trial", link: "https://admin.facilitycore.in/register" }
  ],

  cta: {
    icon: React.createElement(HiOutlineRocketLaunch),
    title: "Build a Smarter, Safer & Better Connected Educational Campus",
    description:
      "Empower your school principals, university deans, and estate managers with a single platform for campus maintenance, hostels, fleet safety, and facility operations. Partner with FacilityCore."
  }
};
