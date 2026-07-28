import React from "react";
import {
  FiClock,
  FiSmile,
  FiTrendingUp,
  FiCheckCircle,
  FiUserCheck,
  FiCalendar,
  FiLayers,
  FiShield
} from "react-icons/fi";
import {
  RiBuilding4Line,
  RiSettings4Line,
  RiShieldCheckLine,
  RiQrCodeLine,
  RiSmartphoneLine,
  RiFileList3Line,
  RiBarChartGroupedLine,
  RiTruckLine
} from "react-icons/ri";
import {
  TbBuildingEstate,
  TbSettingsAutomation,
  TbDoorEnter,
  TbChecklist
} from "react-icons/tb";
import {
  HiOutlineExclamationTriangle,
  HiOutlineSparkles,
  HiOutlineRocketLaunch
} from "react-icons/hi2";

// SEO Metadata Object
export const seoData = {
  metaTitle: "Corporate Office Facility Management Software | Workplace Management | FacilityCore",
  metaDescription: "FacilityCore helps corporate offices and IT campuses automate facility management, employee requests, meeting rooms, visitors, maintenance, assets, housekeeping, and workplace operations from one platform.",
  metaKeywords: "Workplace Management Software, Office Maintenance Software, Office Facility Management System, IT Campus Management Software, Smart Office Management, Corporate Building Maintenance, Employee Facility Management, Office Asset Management, Office Visitor Management, Meeting Room Booking Software, Corporate Office Maintenance, Integrated Workplace Management System, Facility Management Software, Office Operations Software, Corporate Asset Tracking, Smart Workplace Solutions, Employee Experience Platform",
  canonical: "https://facilitycore.in/industries/corporate-offices-it-campuses",
  robots: "index, follow",
  ogTitle: "Corporate Office Facility Management Software | Workplace Management | FacilityCore",
  ogDescription: "FacilityCore helps corporate offices and IT campuses automate facility management, employee requests, meeting rooms, visitors, maintenance, assets, housekeeping, and workplace operations from one platform.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/industries/corporate-offices-it-campuses",
  ogImage: "https://facilitycore.in/ITCampusimggg.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Corporate Office Facility Management Software | Workplace Management | FacilityCore",
  twitterDescription: "FacilityCore helps corporate offices and IT campuses automate facility management, employee requests, meeting rooms, visitors, maintenance, assets, housekeeping, and workplace operations from one platform.",
  twitterImage: "https://facilitycore.in/ITCampusimggg.png",
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Corporate Office Facility Management Software | Workplace Management | FacilityCore",
      "description": "FacilityCore helps corporate offices and IT campuses automate facility management, employee requests, meeting rooms, visitors, maintenance, assets, housekeeping, and workplace operations from one platform.",
      "url": "https://facilitycore.in/industries/corporate-offices-it-campuses"
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
          "name": "Corporate Offices & IT Campuses",
          "item": "https://facilitycore.in/industries/corporate-offices-it-campuses"
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
      "name": "FacilityCore Corporate Office FM",
      "operatingSystem": "Web, iOS, Android",
      "applicationCategory": "BusinessApplication",
      "description": "Smart workplace and facility management software for corporate offices, IT parks, and tech campuses.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does FacilityCore help corporate office facility managers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore streamlines employee helpdesk tickets, meeting room bookings, visitor check-ins, HVAC/UPS preventive maintenance, and vendor SLAs in a single cloud platform."
          }
        },
        {
          "@type": "Question",
          "name": "Can employees log facility requests via a mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore provides dedicated self-service web portals and mobile apps for employees to log tickets, track resolution status, and reserve meeting rooms."
          }
        }
      ]
    }
  ]
};

// Main Corporate Offices & IT Campuses Content Data
export const corporateOfficesData = {
  hero: {
    badge: "Corporate Offices & IT Campuses",
    badgeIcon: React.createElement(RiBuilding4Line),
    title: "Smarter Workplace Management for Modern Corporate Offices",
    description: "Create a productive, secure, and efficient workplace by managing maintenance, employee requests, meeting rooms, visitors, assets, compliance, and workplace services through one intelligent platform.",
    backgroundImage: "/ITCampusimggg.png"
  },
  stats: [
    {
      value: "40%",
      label: "Faster Employee Request Resolution",
      icon: React.createElement(FiClock)
    },
    {
      value: "98%",
      label: "Facility Compliance",
      icon: React.createElement(FiCheckCircle)
    },
    {
      value: "35%",
      label: "Reduction in Maintenance Costs",
      icon: React.createElement(FiTrendingUp)
    },
    {
      value: "24/7",
      label: "Workplace Visibility",
      icon: React.createElement(FiSmile)
    }
  ],
  overview: {
    badge: "Enterprise Workplace Operations",
    badgeIcon: React.createElement(TbBuildingEstate),
    title: "Streamline Corporate FM & Employee Workplace Services",
    subtitle: "End-to-end automation for corporate IT parks, tech hubs, and multi-tenant headquarters.",
    content: "FacilityCore unifies corporate real estate management, employee desk & meeting room allocations, HVAC/electrical maintenance, housekeeping schedules, vendor SLAs, and security visitor logs into a single enterprise dashboard.",
    image: "/ITCampusimggg.png",
    imageAlt: "Corporate Office & IT Campus Facility Operations",
    highlights: [
      {
        title: "Employee Experience",
        desc: "Self-service ticketing for climate control, desk adjustments, and facility assistance.",
        icon: React.createElement(FiSmile)
      },
      {
        title: "Meeting Room Booking",
        desc: "Real-time calendar integration to eliminate room double-booking and ghost meetings.",
        icon: React.createElement(RiBuilding4Line)
      },
      {
        title: "Visitor Management",
        desc: "Digital host notifications and contactless QR check-ins for corporate guests.",
        icon: React.createElement(RiShieldCheckLine)
      },
      {
        title: "Asset Tracking & PM",
        desc: "Preventive maintenance for chillers, UPS systems, DG sets, and IT infrastructure.",
        icon: React.createElement(TbSettingsAutomation)
      }
    ]
  },
  challengesBadge: "Challenges Solved",
  challengesBadgeIcon: React.createElement(HiOutlineExclamationTriangle),
  challenges: [
    {
      title: "Meeting Room Conflicts",
      description: "Overlapping reservations and unreleased ghost bookings disrupting productive team meetings.",
      icon: React.createElement(HiOutlineExclamationTriangle)
    },
    {
      title: "Manual Facility Requests",
      description: "Email and phone calls leading to lost maintenance requests and slow resolution times.",
      icon: React.createElement(HiOutlineExclamationTriangle)
    },
    {
      title: "Visitor Congestion",
      description: "Long check-in queues at reception causing security bottlenecks during morning rush hours.",
      icon: React.createElement(HiOutlineExclamationTriangle)
    },
    {
      title: "Asset Misplacement",
      description: "Lack of real-time visibility into high-value IT equipment, AV systems, and office assets.",
      icon: React.createElement(HiOutlineExclamationTriangle)
    },
    {
      title: "High Maintenance Cost",
      description: "Unplanned equipment breakdowns resulting in expensive emergency repairs and downtime.",
      icon: React.createElement(HiOutlineExclamationTriangle)
    },
    {
      title: "Workspace Utilization",
      description: "Inability to accurately measure desk usage, floor occupancy, and space efficiency.",
      icon: React.createElement(HiOutlineExclamationTriangle)
    },
    {
      title: "Compliance Audits",
      description: "Scattered paper records failing safety inspections and corporate governance standards.",
      icon: React.createElement(HiOutlineExclamationTriangle)
    },
    {
      title: "Poor Employee Experience",
      description: "Unresolved temperature complaints and delayed office services hurting employee satisfaction.",
      icon: React.createElement(HiOutlineExclamationTriangle)
    }
  ],
  capabilitiesBadge: "Purpose-Built Modules",
  capabilitiesBadgeIcon: React.createElement(RiSettings4Line),
  solutions: [
    {
      badge: "Workplace Operations",
      title: "Work Order Management",
      description: "Automate ticket dispatch, technician assignments, and resolution tracking for all office maintenance needs.",
      icon: React.createElement(RiSettings4Line),
      highlights: ["Instant auto-dispatch", "SLA tracking & alerts", "Mobile technician updates", "Priority escalation"]
    },
    {
      badge: "Space Management",
      title: "Meeting Room Booking",
      description: "Centralized room reservation system synced with Outlook and Google Workspace to eliminate double-booking.",
      icon: React.createElement(FiCalendar),
      highlights: ["Outlook/Google sync", "QR check-in panels", "Auto-release unused rooms", "Catering & AV requests"]
    },
    {
      badge: "Security & Access",
      title: "Visitor Management System",
      description: "Streamline guest registrations with pre-approved QR passes, host arrival alerts, and security logs.",
      icon: React.createElement(FiUserCheck),
      highlights: ["Pre-registration QR", "Instant host SMS/Slack alert", "NDA & badge printing", "VIP guest notifications"]
    },
    {
      badge: "Lifecycle & Maintenance",
      title: "Asset & Equipment Management",
      description: "Track IT hardware, HVAC units, generators, and AV equipment from procurement through disposal.",
      icon: React.createElement(FiLayers),
      highlights: ["QR barcoding", "Warranty tracking", "Lifecycle cost analytics", "Depreciation reports"]
    },
    {
      badge: "Helpdesk & Service",
      title: "Employee Request Portal",
      description: "Empower staff to submit work requests, report issues, and request workplace services easily.",
      icon: React.createElement(FiSmile),
      highlights: ["Self-service web/app", "Category auto-routing", "Live ticket status", "Feedback & ratings"]
    },
    {
      badge: "Sanitation & Hygiene",
      title: "Housekeeping & Janitorial",
      description: "Manage cleaning shifts, washroom inspection schedules, and hygiene checklists digitally.",
      icon: React.createElement(TbChecklist),
      highlights: ["Digital cleaning logs", "Frequency schedules", "Restroom QR feedback", "Janitorial stock alerts"]
    },
    {
      badge: "Uptime Assurance",
      title: "Preventive Maintenance (PPM)",
      description: "Schedule automated recurring maintenance for critical building machinery to prevent downtime.",
      icon: React.createElement(TbSettingsAutomation),
      highlights: ["Automated PPM schedules", "Checklist compliance", "Spare parts linking", "Downtime prevention"]
    },
    {
      badge: "Vendor Governance",
      title: "Vendor & SLA Management",
      description: "Track third-party facility vendors, AMC contracts, performance metrics, and invoice approvals.",
      icon: React.createElement(RiTruckLine),
      highlights: ["Contract renewal alerts", "SLA scorecards", "Insurance compliance", "Work completion audit"]
    },
    {
      badge: "Stock Control",
      title: "Inventory & Spare Parts",
      description: "Maintain optimal stock levels for electrical fittings, plumbing spares, and office supplies.",
      icon: React.createElement(RiFileList3Line),
      highlights: ["Min stock thresholds", "Purchase requisition", "Consumption analytics", "Multi-store support"]
    },
    {
      badge: "Governance & Safety",
      title: "Compliance & Safety Audits",
      description: "Ensure 100% adherence to fire safety, environmental standards, and statutory facility regulations.",
      icon: React.createElement(FiShield),
      highlights: ["Audit checklists", "Non-conformance logging", "Regulatory reporting", "Document repository"]
    }
  ],
  featuresBadge: "Feature Highlights",
  featuresBadgeIcon: React.createElement(HiOutlineSparkles),
  keyFeatures: [
    {
      name: "QR Asset Tracking",
      desc: "Instantly scan QR codes on office assets to view maintenance history and log tickets.",
      icon: React.createElement(RiQrCodeLine)
    },
    {
      name: "Mobile Facility App",
      desc: "Comprehensive mobile app for technicians, managers, and employees on the go.",
      icon: React.createElement(RiSmartphoneLine)
    },
    {
      name: "Visitor Passes",
      desc: "Digital visitor badges sent via email/WhatsApp for instant kiosk check-ins.",
      icon: React.createElement(TbDoorEnter)
    },
    {
      name: "Meeting Room Calendar",
      desc: "Live visual room availability displays outside conference rooms and on web/mobile.",
      icon: React.createElement(FiCalendar)
    },
    {
      name: "Digital Checklists",
      desc: "Replace paper logs with mandatory mobile checklists for audit readiness.",
      icon: React.createElement(TbChecklist)
    },
    {
      name: "Analytics Dashboard",
      desc: "Real-time insights on ticket resolution times, space usage, and maintenance costs.",
      icon: React.createElement(RiBarChartGroupedLine)
    },
    {
      name: "Employee Self Service",
      desc: "Simple, intuitive interface for staff to raise facility issues in under 30 seconds.",
      icon: React.createElement(FiSmile)
    },
    {
      name: "Automated Work Orders",
      desc: "Smart rules assign tickets to available technicians based on skill and location.",
      icon: React.createElement(RiSettings4Line)
    },
    {
      name: "Vendor Portal",
      desc: "External portal for contract technicians to receive tasks and update job status.",
      icon: React.createElement(RiTruckLine)
    },
    {
      name: "Compliance Reports",
      desc: "One-click exportable PDF/Excel compliance audits for executive reviews.",
      icon: React.createElement(FiShield)
    }
  ],
  ctaBadge: "Transform Your Workplace",
  ctaBadgeIcon: React.createElement(HiOutlineRocketLaunch),
  cta: {
    title: "Transform Your Workplace Operations Today",
    description: "Improve employee experience, streamline facility operations, and create a smarter corporate workplace with FacilityCore.",
    primaryBtn: "Book Free Demo",
    secondaryBtn: "Back to Industries",
    icon: React.createElement(HiOutlineRocketLaunch)
  }
};
