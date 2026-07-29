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
  FiHelpCircle
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
  RiHome8Line,
  RiCommunityLine,
  RiDoorLockLine,
  RiUserSharedLine,
  RiExchangeDollarLine
} from "react-icons/ri";
import {
  TbBuildingEstate,
  TbSettingsAutomation,
  TbDoorEnter,
  TbChecklist,
  TbBuildingCommunity,
  TbReceiptTax,
  TbSteeringWheel
} from "react-icons/tb";
import {
  HiOutlineSparkles,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck
} from "react-icons/hi2";

// Declarative SEO Metadata & Schema JSON-LD
export const seoData = {
  metaTitle: "Apartment & Residential Community Management Software | FacilityCore",
  metaDescription:
    "Manage apartments, villas, gated communities and residential societies with FacilityCore. Automate maintenance, billing, visitors, security, assets, complaints, amenities, accounting and community operations.",
  metaKeywords:
    "Apartment Management Software, Residential Community Management Software, Apartment Society Management Software, Gated Community Management Software, Villa Community Management Software, HOA Management Software, Apartment Maintenance Software, Resident Management System, Apartment Visitor Management, Apartment Billing Software, Apartment Association Software, Society Management App, Maintenance Billing Software, Resident Mobile App, Apartment Accounting Software, Visitor Gate Pass, Community ERP, Apartment Security Management, Facility Management Software, Apartment Complaint Management",
  canonical: "https://facilitycore.in/industries/residential-communities",
  robots: "index, follow",
  ogTitle: "Apartment & Residential Community Management Software | FacilityCore",
  ogDescription:
    "Manage apartments, villas, gated communities and residential societies with FacilityCore. Automate maintenance, billing, visitors, security, assets, complaints, amenities, accounting and community operations.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/industries/residential-communities",
  ogImage: "https://facilitycore.in/Apartmentimg.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Apartment & Residential Community Management Software | FacilityCore",
  twitterDescription:
    "Manage apartments, villas, gated communities and residential societies with FacilityCore. Automate maintenance, billing, visitors, security, assets, complaints, amenities, accounting and community operations.",
  twitterImage: "https://facilitycore.in/Apartmentimg.png",
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Apartment & Residential Community Management Software | FacilityCore",
      "description":
        "Manage apartments, villas, gated communities and residential societies with FacilityCore. Automate maintenance, billing, visitors, security, assets, complaints, amenities, accounting and community operations.",
      "url": "https://facilitycore.in/industries/residential-communities"
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
          "name": "Residential Communities",
          "item": "https://facilitycore.in/industries/residential-communities"
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
      "name": "FacilityCore Residential Community Management Software",
      "operatingSystem": "Web, iOS, Android",
      "applicationCategory": "BusinessApplication",
      "description":
        "Complete residential community management platform for apartment associations, RWAs, gated communities, and villa townships.",
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
          "name": "What is apartment management software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Apartment management software is a digital platform designed for Apartment Owners Associations (AOA), RWAs, and facility managers to automate maintenance billing, visitor tracking, complaints, amenity bookings, security, and community accounting."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore help apartment owners associations (AOA)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore streamlines committee management by digitizing fee collections, tracking vendor contracts, maintaining transparent financial records, broadcasting emergency notices, and automating resident ticket resolution."
          }
        },
        {
          "@type": "Question",
          "name": "Can residents pay maintenance charges online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, residents can view itemized maintenance bills and pay instantly via UPI, credit/debit cards, and net banking using the FacilityCore Resident Mobile App with automated receipt generation."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore include accounting and billing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore features a complete residential financial system including automated monthly maintenance invoice generation, late fee calculation, expense tracking, outstanding reports, and financial dashboards."
          }
        },
        {
          "@type": "Question",
          "name": "Can visitors be pre-approved using the mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, residents can generate pre-approved QR entry passes or OTPs for guests, delivery executives, and service providers to ensure seamless, contactless gate entry."
          }
        },
        {
          "@type": "Question",
          "name": "Does the software support clubhouse and amenity booking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, residents can check real-time availability and reserve clubhouses, party halls, swimming pools, tennis courts, and BBQ areas with automated slot management and approval workflows."
          }
        },
        {
          "@type": "Question",
          "name": "Can security guards use the mobile application?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore provides a dedicated Security Guard Mobile App for digital gate entries/exits, QR pass verification, blacklisted visitor alerts, emergency broadcasts, and guard patrol tracking."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore support apartment complaint management?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, residents can log complaints with photo attachments, track real-time technician assignments, receive status updates, and provide satisfaction ratings upon resolution."
          }
        },
        {
          "@type": "Question",
          "name": "Can multiple apartment communities be managed from one account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Property Management Companies and FM service providers can monitor multiple residential townships, towers, and gated layouts from a unified multi-property executive dashboard."
          }
        },
        {
          "@type": "Question",
          "name": "Is FacilityCore suitable for villa communities and gated townships?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. FacilityCore is engineered for high-rise apartment towers, villa layouts, and large gated townships requiring multi-gate security, asset maintenance, and community governance."
          }
        },
        {
          "@type": "Question",
          "name": "Does FacilityCore support QR code asset management?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, critical infrastructure assets like DG sets, elevators, STPs, fire pumps, and water pumps can be tagged with QR codes for instant preventive maintenance logging and history lookup."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore manage outsourced housekeeping and security vendors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the platform includes a Vendor Management Portal to track AMC contracts, staff attendance, compliance documents, service ratings, and automated invoice payments."
          }
        }
      ]
    }
  ]
};

// Page Main Data Object
export const residentialCommunitiesData = {
  hero: {
    badge: "RESIDENTIAL COMMUNITY MANAGEMENT",
    title: "Residential Community Management Software for Apartments, Villas & Gated Communities",
    headline: "Everything Your Residential Community Needs in One Smart Platform",
    description:
      "Simplify apartment and community operations with an all-in-one solution for resident management, maintenance billing, visitor management, facility services, security, accounting, amenities, assets, and workforce management.",
    backgroundImage: "/Apartmentimg.png"
  },

  stats: [
    { value: "40%", label: "Faster Complaint Resolution", icon: React.createElement(FiClock) },
    { value: "35%", label: "Higher Maintenance Fee Collections", icon: React.createElement(FiTrendingUp) },
    { value: "50%", label: "Reduction in Gate Check-in Time", icon: React.createElement(FiShield) },
    { value: "98%", label: "Preventive Compliance Rate", icon: React.createElement(FiSmile) }
  ],

  overview: {
    badge: "END-TO-END COMMUNITY ERP",
    badgeIcon: React.createElement(HiOutlineSparkles),
    title: "Positioning FacilityCore as a Complete Residential Management Platform",
    subtitle: "Built for AOAs, RWAs, Property Management Companies & Township Operators",
    content:
      "Managing residential communities involves much more than collecting maintenance fees. Community associations and facility managers must oversee maintenance operations, security, visitor access, accounting, assets, complaints, vendors, amenities, and resident communication. FacilityCore provides a complete digital platform that connects residents, management committees, facility teams, vendors, and security staff through one intelligent cloud-based solution.",
    image: "/Apartmentimg.png",
    imageAlt: "Modern Residential Community Managed by FacilityCore",
    highlights: [
      {
        icon: React.createElement(RiHome8Line),
        title: "All-in-One Association ERP",
        desc: "Unify billing, security, maintenance, and accounting into one digital system."
      },
      {
        icon: React.createElement(RiSmartphoneLine),
        title: "Resident Mobile App",
        desc: "Empower residents with instant maintenance bill payments, pass approvals, and complaint logs."
      },
      {
        icon: React.createElement(RiShieldCheckLine),
        title: "Gate & Visitor Security",
        desc: "QR code pre-approved entry passes, guard app, and real-time OTP guest verification."
      },
      {
        icon: React.createElement(TbSettingsAutomation),
        title: "Automated Maintenance & PM",
        desc: "Prevent critical asset downtime (DG sets, pumps, lifts, STPs) with scheduled checkups."
      }
    ]
  },

  suitableFor: [
    "Apartment Complexes",
    "Gated Communities",
    "Villa Communities",
    "Residential Towers",
    "High-rise Apartments",
    "Township Projects",
    "Residential Layouts",
    "Housing Societies",
    "Owners Associations (AOA)",
    "Resident Welfare Associations (RWA)",
    "Property Management Companies"
  ],

  challengesBadgeIcon: React.createElement(HiOutlineShieldCheck),
  challengesBadge: "COMMUNITY PAIN POINTS",
  challenges: [
    {
      icon: React.createElement(FiDollarSign),
      title: "Maintenance Fee Collection",
      description: "Manual billing and payment follow-ups consume significant administrative time."
    },
    {
      icon: React.createElement(FiMessageSquare),
      title: "Resident Complaints",
      description: "Complaints received through phone calls and WhatsApp are difficult to track."
    },
    {
      icon: React.createElement(RiDoorLockLine),
      title: "Visitor Management",
      description: "Manual visitor registers increase waiting time and compromise security."
    },
    {
      icon: React.createElement(FiShield),
      title: "Security Monitoring",
      description: "Limited visibility into gate operations, guards, and incidents."
    },
    {
      icon: React.createElement(FiCalendar),
      title: "Amenity Booking",
      description: "Manual booking of clubhouse, party hall, swimming pool, and sports facilities often leads to conflicts."
    },
    {
      icon: React.createElement(FiTool),
      title: "Maintenance Operations",
      description: "Delayed work order assignment results in unresolved resident issues."
    },
    {
      icon: React.createElement(FiHardDrive),
      title: "Asset Maintenance",
      description: "Critical assets such as elevators, pumps, DG sets, and STPs require preventive maintenance."
    },
    {
      icon: React.createElement(FiTruck),
      title: "Vendor Management",
      description: "Tracking multiple housekeeping, security, gardening, and maintenance contractors manually is inefficient."
    },
    {
      icon: React.createElement(FiBell),
      title: "Resident Communication",
      description: "Important notices are scattered across multiple communication channels."
    },
    {
      icon: React.createElement(RiExchangeDollarLine),
      title: "Financial Management",
      description: "Managing maintenance dues, expenses, budgets, and vendor payments manually increases the risk of errors."
    }
  ],

  solutionsMapping: [
    { challenge: "Maintenance Fee Collection", solution: "Automated Billing & Online Payments", icon: React.createElement(FiDollarSign) },
    { challenge: "Resident Complaints", solution: "Digital Complaint Management", icon: React.createElement(FiMessageSquare) },
    { challenge: "Visitor Registration", solution: "QR Visitor Pass System", icon: React.createElement(RiQrCodeLine) },
    { challenge: "Security Operations", solution: "Digital Gate Management", icon: React.createElement(FiShield) },
    { challenge: "Maintenance Requests", solution: "Mobile Work Orders", icon: React.createElement(FiTool) },
    { challenge: "Asset Maintenance", solution: "Preventive Maintenance Scheduler", icon: React.createElement(FiHardDrive) },
    { challenge: "Amenity Booking", solution: "Online Facility Reservation", icon: React.createElement(FiCalendar) },
    { challenge: "Vendor Coordination", solution: "Vendor Management Portal", icon: React.createElement(FiTruck) },
    { challenge: "Community Communication", solution: "Notices & Broadcast Messages", icon: React.createElement(FiBell) },
    { challenge: "Financial Management", solution: "Accounting & Expense Tracking", icon: React.createElement(RiExchangeDollarLine) }
  ],

  capabilitiesBadgeIcon: React.createElement(FiLayers),
  capabilitiesBadge: "PURPOSE-BUILT MODULES",
  keyModules: [
    {
      badge: "MODULE 1",
      icon: React.createElement(FiUsers),
      title: "Resident Management",
      description: "Centralized resident directory and household profile database for association administrators.",
      features: [
        "Resident Registration",
        "Owner & Tenant Management",
        "Family Member Records",
        "Vehicle Registration",
        "Emergency Contacts",
        "Resident Directory",
        "Digital Documents",
        "Resident Mobile App"
      ],
      benefits: [
        "Complete resident database",
        "Easy communication",
        "Improved community engagement"
      ]
    },
    {
      badge: "MODULE 2",
      icon: React.createElement(FiDollarSign),
      title: "Maintenance Billing & Accounting",
      description: "Automated monthly billing, ledger updates, late fee calculation, and digital payment gateway.",
      features: [
        "Maintenance Fee Generation",
        "Monthly Billing",
        "Online Payments",
        "Late Fee Calculation",
        "Invoice Generation",
        "Receipt Management",
        "Outstanding Reports",
        "Financial Dashboard"
      ],
      benefits: [
        "Faster collections",
        "Reduced outstanding dues",
        "Transparent accounting"
      ]
    },
    {
      badge: "MODULE 3",
      icon: React.createElement(FiMessageSquare),
      title: "Complaint Management",
      description: "End-to-end ticketing system for plumbing, electrical, carpentry, and common area issues.",
      features: [
        "Mobile Complaint Registration",
        "Photo Upload",
        "Priority Levels",
        "Technician Assignment",
        "Status Tracking",
        "Resident Feedback",
        "SLA Monitoring",
        "Escalation Matrix"
      ],
      benefits: [
        "Faster issue resolution",
        "Higher resident satisfaction",
        "Improved transparency"
      ]
    },
    {
      badge: "MODULE 4",
      icon: React.createElement(RiQrCodeLine),
      title: "Visitor Management",
      description: "Digital gatepass system for pre-approved guests, delivery staff, and domestic help.",
      features: [
        "Visitor Pre-Approval",
        "QR Code Entry Pass",
        "OTP Verification",
        "Delivery Management",
        "Guest Notifications",
        "Domestic Staff Entry",
        "Vehicle Entry",
        "Visitor History"
      ],
      benefits: [
        "Enhanced security",
        "Faster gate operations",
        "Better visitor experience"
      ]
    },
    {
      badge: "MODULE 5",
      icon: React.createElement(FiShield),
      title: "Security Management",
      description: "Empower gate guards with mobile guard app, patrol tracking, and instant panic alerts.",
      features: [
        "Security Guard Mobile App",
        "Gate Entry & Exit",
        "Incident Reporting",
        "Patrol Management",
        "Emergency Alerts",
        "Blacklisted Visitors",
        "Lost & Found",
        "Daily Occurrence Register (DOR)"
      ],
      benefits: [
        "Stronger community security",
        "Faster emergency response",
        "Complete digital records"
      ]
    },
    {
      badge: "MODULE 6",
      icon: React.createElement(FiCalendar),
      title: "Amenity Booking",
      description: "Automated online slot reservation for clubhouses, party halls, pools, and sports courts.",
      features: [
        "Clubhouse Booking",
        "Party Hall Reservation",
        "Swimming Pool Booking",
        "Gym Booking",
        "Tennis Court Reservation",
        "Community Hall Booking",
        "BBQ Area Reservation",
        "Approval Workflow"
      ],
      benefits: [
        "Easy online booking",
        "Prevent double reservations",
        "Better facility utilisation"
      ]
    },
    {
      badge: "MODULE 7",
      icon: React.createElement(FiTool),
      title: "Facility Maintenance",
      description: "Comprehensive work order dispatch and scheduled PPM checklists for facility managers.",
      features: [
        "Preventive Maintenance",
        "Corrective Maintenance",
        "Work Orders",
        "Mobile App",
        "QR Code Assets",
        "Technician Assignment",
        "AMC Tracking",
        "Inspection Checklists"
      ],
      benefits: [
        "Reduce equipment failures",
        "Improve service quality",
        "Extend asset life"
      ]
    },
    {
      badge: "MODULE 8",
      icon: React.createElement(FiHardDrive),
      title: "Asset Management",
      description: "Digital asset registry for community generators, elevators, STPs, and electrical panels.",
      features: [
        "Digital Asset Register",
        "QR Code Asset Labels",
        "Warranty Tracking",
        "Asset History",
        "Depreciation",
        "Replacement Planning",
        "Asset Inspections",
        "Lifecycle Management"
      ],
      benefits: [
        "Better asset visibility",
        "Lower maintenance costs",
        "Improved CAPEX planning"
      ]
    },
    {
      badge: "MODULE 9",
      icon: React.createElement(FiTruck),
      title: "Vendor Management",
      description: "Manage outsourced housekeeping, security guards, landscaping, and maintenance contractors.",
      features: [
        "Vendor Registration",
        "Contract Management",
        "AMC Tracking",
        "Insurance Documents",
        "Performance Rating",
        "Attendance",
        "Service History",
        "Payment Tracking"
      ],
      benefits: [
        "Better vendor control",
        "Simplified contract management",
        "Improved service quality"
      ]
    },
    {
      badge: "MODULE 10",
      icon: React.createElement(FiBell),
      title: "Community Communication",
      description: "Digital notice board, instant push notifications, SMS alerts, and community polls.",
      features: [
        "Notice Board",
        "Push Notifications",
        "SMS Integration",
        "Email Alerts",
        "Event Announcements",
        "Polls & Surveys",
        "Complaint Updates",
        "Emergency Broadcasts"
      ],
      benefits: [
        "Better resident communication",
        "Increased engagement",
        "Faster information sharing"
      ]
    },
    {
      badge: "MODULE 11",
      icon: React.createElement(TbSteeringWheel),
      title: "Parking Management",
      description: "Structured parking slot allocation, resident vehicle RFID tracking, and visitor parking passes.",
      features: [
        "Parking Allocation",
        "Visitor Parking",
        "Parking Slot Mapping",
        "Vehicle Passes",
        "Vehicle History",
        "Parking Violations",
        "RFID / QR Integration",
        "Reports"
      ],
      benefits: [
        "Organised parking",
        "Improved security",
        "Better utilisation"
      ]
    },
    {
      badge: "MODULE 12",
      icon: React.createElement(FiUserCheck),
      title: "Staff & Workforce Management",
      description: "Geo-fenced mobile attendance, shift planning, task allocation, and payroll support for staff.",
      features: [
        "Attendance",
        "Shift Scheduling",
        "Geo Punch",
        "Leave Management",
        "Payroll Support",
        "Task Allocation",
        "Performance Tracking",
        "Mobile App"
      ],
      benefits: [
        "Better workforce productivity",
        "Improved accountability",
        "Reduced manual administration"
      ]
    }
  ],

  modulesList: [
    "Resident Management",
    "Apartment Management",
    "Maintenance Billing",
    "Accounting",
    "Complaint Management",
    "Visitor Management",
    "Security Management",
    "Asset Management",
    "Preventive Maintenance",
    "Work Orders",
    "Inventory",
    "Vendor Management",
    "Amenity Booking",
    "Vehicle Management",
    "Parking Management",
    "Staff Attendance",
    "Documents",
    "Contracts",
    "Compliance",
    "Mobile App",
    "Reports & Analytics"
  ],

  managedAssetsTable: [
    { category: "Electrical", assets: "Transformer, DG Set, UPS, LT Panel" },
    { category: "Water Systems", assets: "Pumps, Borewell, Overhead Tank" },
    { category: "Fire Safety", assets: "Fire Pumps, Hydrants, Fire Alarm" },
    { category: "Vertical Transportation", assets: "Passenger Lifts, Goods Lift" },
    { category: "HVAC", assets: "Clubhouse AC, AHU, FCU" },
    { category: "STP/WTP", assets: "Sewage Treatment Plant, Water Treatment Plant" },
    { category: "Common Areas", assets: "Lighting, Landscape, Gates" },
    { category: "Security", assets: "CCTV, Boom Barrier, Access Control" },
    { category: "Recreation", assets: "Swimming Pool, Gym Equipment, Children's Play Area" },
    { category: "Parking", assets: "Boom Barrier, EV Chargers, Parking Sensors" }
  ],

  dailyWorkflowSteps: [
    { step: 1, title: "Resident Raises Complaint", desc: "Logs issue via Resident App with photo & audio description." },
    { step: 2, title: "Ticket Generated", desc: "Unique ticket ID assigned with priority & auto SLA trigger." },
    { step: 3, title: "Facility Manager Reviews", desc: "FM validates request & selects internal team or AMC vendor." },
    { step: 4, title: "Technician Assigned", desc: "Work order pushed to Technician Mobile App with location." },
    { step: 5, title: "Work Completed", desc: "Technician fixes issue and updates status." },
    { step: 6, title: "Photo Uploaded", desc: "Before & after work completion proof uploaded to system." },
    { step: 7, title: "Resident Verification", desc: "Resident receives completion notification & verifies work." },
    { step: 8, title: "Resident Rating", desc: "Resident submits 5-star rating & feedback." },
    { step: 9, title: "Complaint Closed", desc: "Ticket automatically closed & logged into history register." }
  ],

  businessBenefits: [
    {
      title: "Increase Resident Satisfaction",
      desc: "Deliver faster responses and better community services with automated mobile dispatch."
    },
    {
      title: "Improve Collection Efficiency",
      desc: "Automate maintenance billing, payment reminders, and instant digital receipts."
    },
    {
      title: "Enhance Community Security",
      desc: "Digitise visitor, vehicle, and gate management with QR codes and OTP verification."
    },
    {
      title: "Optimise Maintenance Operations",
      desc: "Automate preventive maintenance and work orders to extend infrastructure lifespan."
    },
    {
      title: "Simplify Community Administration",
      desc: "Replace spreadsheets and paper registers with one integrated cloud ERP platform."
    },
    {
      title: "Improve Financial Transparency",
      desc: "Track collections, expenses, budgets, and vendor payments in real time."
    },
    {
      title: "Better Asset Performance",
      desc: "Maintain community infrastructure proactively to avoid high replacement costs."
    },
    {
      title: "Build Stronger Resident Engagement",
      desc: "Connect residents through notices, events, surveys, polls, and mobile notifications."
    }
  ],

  dashboardWidgets: [
    "Maintenance Collection",
    "Outstanding Dues",
    "Complaint Status",
    "Work Orders",
    "Visitor Entries",
    "Amenity Bookings",
    "Security Incidents",
    "Asset Health",
    "Preventive Maintenance Compliance",
    "Vendor Performance",
    "Resident Satisfaction",
    "Community Occupancy"
  ],

  comparisonTable: [
    { feature: "Resident Mobile App", facilityCore: "Dedicated iOS & Android App", traditional: "WhatsApp Groups" },
    { feature: "Maintenance Billing", facilityCore: "Automated Digital Billing & Ledger", traditional: "Manual Paper Registers" },
    { feature: "Visitor Management", facilityCore: "QR Code Entry & OTP Pass", traditional: "Paper Visitor Book" },
    { feature: "Amenity Booking", facilityCore: "Online Slot Reservation", traditional: "Manual Call / Paper Reservation" },
    { feature: "Complaint Tracking", facilityCore: "Mobile SLA Ticketing", traditional: "Phone Calls & Unorganized Messages" },
    { feature: "Live Dashboard", facilityCore: "Real-time Analytics Dashboard", traditional: "Excel Spreadsheets" },
    { feature: "Work Orders", facilityCore: "Automated Tech Dispatch", traditional: "Manual Follow-ups" },
    { feature: "Accounting", facilityCore: "Integrated ERP Accounting", traditional: "Separate Manual Software" }
  ],

  metrics: [
    "Up to 40% faster complaint resolution",
    "Up to 35% improvement in maintenance fee collections",
    "Up to 50% reduction in visitor check-in time",
    "Up to 30% lower administrative workload",
    "Up to 98% preventive maintenance compliance",
    "Up to 60% reduction in paperwork"
  ],

  internalLinks: [
    { label: "Apartment Management Software", link: "/industries/residential-communities" },
    { label: "Resident Mobile App", link: "/features" },
    { label: "Maintenance Billing", link: "/solutions" },
    { label: "Visitor Management", link: "/features" },
    { label: "Complaint Management", link: "/solutions" },
    { label: "Asset Management", link: "/features" },
    { label: "Work Order Management", link: "/solutions" },
    { label: "Preventive Maintenance", link: "/features" },
    { label: "Security Management", link: "/solutions" },
    { label: "Parking Management", link: "/features" },
    { label: "Vendor Management", link: "/solutions" },
    { label: "Pricing", link: "/pricing" },
    { label: "Contact Us", link: "/contact" },
    { label: "Free Trial", link: "https://admin.facilitycore.in/register" }
  ],

  cta: {
    icon: React.createElement(HiOutlineRocketLaunch),
    title: "Build a Smarter, Safer and Better Connected Residential Community",
    description:
      "Empower your association, residents, and facility teams with a single platform for maintenance, billing, security, communication, and community operations. FacilityCore simplifies everyday management while delivering a better living experience."
  }
};
