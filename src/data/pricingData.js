import React from "react";
import {
  FiBox,
  FiUserCheck,
  FiUserPlus,
  FiUsers,
  FiMapPin,
  FiActivity,
  FiTruck,
  FiGrid,
  FiLock,
  FiSliders,
  FiAward,
  FiBarChart2,
  FiClipboard,
  FiTool,
  FiShield,
  FiCalendar,
  FiPieChart,
  FiZap,
  FiBell,
  FiSmartphone,
  FiMessageSquare,
  FiPhoneCall,
  FiServer,
  FiSettings,
  FiHome,
  FiVolume2,
  FiFileText,
  FiArchive,
  FiShoppingCart,
  FiDollarSign,
  FiCheckSquare,
  FiDatabase,
  FiBriefcase,
} from "react-icons/fi";

// ─── Existing Exports (unchanged) ────────────────────────────────────────────

export const platformPricing = {
  fee: "₹550",
  period: "Month",
  features: [
    "Business Suite",
    "Business Locations",
    "Dashboard",
    "Reports",
    "Notifications",
    "Mobile App",
    "Roles & Permissions"
  ],
  includedUsers: {
    web: "3 Web Users",
    mobile: "2 Mobile Users"
  },
  additionalPricing: {
    web: "Web User ₹120",
    mobile: "Mobile User ₹90"
  }
};

export const propertyPackagesTable = {
  columns: [
    { id: "starter", name: "Starter", subtitle: "For small properties" },
    { id: "professional", name: "Professional", subtitle: "For growing hubs", highlighted: true },
    { id: "enterprise", name: "Enterprise", subtitle: "For large complexes" }
  ],
  rows: [
    { label: "Platform Fee", starter: "₹650 / mo", professional: "₹550 / mo", enterprise: "₹550 / mo" },
    { label: "Package Price", starter: "₹1,200 / mo", professional: "₹2,500 / mo", enterprise: "Custom" },
    { label: "Total Price", starter: "₹1,750 / mo", professional: "₹3,050 / mo", enterprise: "Custom Pricing" },
    { label: "Assets Limit", starter: "Up to 500", professional: "Up to 1,500", enterprise: "Unlimited" },
    { label: "Occupants Limit", starter: "Up to 200", professional: "Up to 800", enterprise: "Unlimited" },
    { label: "Web Users", starter: "3 Included (+ ₹120/ea)", professional: "5 Included (+ ₹120/ea)", enterprise: "Custom Allocation" },
    { label: "Mobile Users", starter: "2 Included (+ ₹90/ea)", professional: "10 Included (+ ₹90/ea)", enterprise: "Custom Allocation" },
    { label: "Asset & Maintenance Module", starter: true, professional: true, enterprise: true },
    { label: "Visitor Management Module", starter: true, professional: true, enterprise: true },
    { label: "Parking & Vehicle Module", starter: false, professional: true, enterprise: true },
    { label: "Vendor Management Module", starter: false, professional: false, enterprise: true },
    { label: "Compliance & Safety Logs", starter: false, professional: false, enterprise: true }
  ]
};

export const additionalCharges = [
  {
    title: "Additional Web User",
    price: "₹120",
    period: "month",
    description: "Full access to dashboard, settings, audits, and configuration reports."
  },
  {
    title: "Additional Mobile User",
    price: "₹90",
    period: "month",
    description: "On-the-go logging, check-ins, tasks execution, and barcode scans."
  },
  {
    title: "100 Assets Pack",
    price: "₹120",
    period: "month",
    description: "Add 100 extra trackable equipment, machines, or property assets."
  }
];

export const individualModules = [
  {
    id: "assetMaintenance",
    icon: React.createElement(FiBox),
    name: "Asset & Maintenance",
    inr: { price: 499, platformFee: 650, total: 1149 },
    usd: { price: 5.23, platformFee: 6.81, total: 12.04 },
    price: "₹499",
    platformFee: "₹650",
    total: "₹1,149"
  },
  {
    id: "occupants",
    icon: React.createElement(FiUsers),
    name: "Occupant Management",
    inr: { price: 399, platformFee: 650, total: 1049 },
    usd: { price: 4.18, platformFee: 6.81, total: 10.99 },
    price: "₹399",
    platformFee: "₹650",
    total: "₹1,049"
  },
  {
    id: "visitor",
    icon: React.createElement(FiUserPlus),
    name: "Visitor Management",
    inr: { price: 299, platformFee: 650, total: 949 },
    usd: { price: 3.13, platformFee: 6.81, total: 9.94 },
    price: "₹299",
    platformFee: "₹650",
    total: "₹949"
  },
  {
    id: "parking",
    icon: React.createElement(FiTruck),
    name: "Parking & Vehicle",
    inr: { price: 349, platformFee: 650, total: 999 },
    usd: { price: 3.66, platformFee: 6.81, total: 10.47 },
    price: "₹349",
    platformFee: "₹650",
    total: "₹999"
  },
  {
    id: "vendorManagement",
    icon: React.createElement(FiGrid),
    name: "Vendor Management",
    inr: { price: 249, platformFee: 650, total: 899 },
    usd: { price: 2.61, platformFee: 6.81, total: 9.42 },
    price: "₹249",
    platformFee: "₹650",
    total: "₹899"
  },
  {
    id: "compliance",
    icon: React.createElement(FiActivity),
    name: "Compliance Logs",
    inr: { price: 199, platformFee: 650, total: 849 },
    usd: { price: 2.09, platformFee: 6.81, total: 8.90 },
    price: "₹199",
    platformFee: "₹650",
    total: "₹849"
  }
];

export const businessPackagesTable = {
  columns: [
    { id: "starter", name: "CRM Starter", subtitle: "Basic CRM operations" },
    { id: "professional", name: "Business Pro", subtitle: "Advanced workflows", highlighted: true },
    { id: "enterprise", name: "Business Plus", subtitle: "Custom enterprise CRM" }
  ],
  rows: [
    { label: "Platform Fee", starter: "₹550 / mo", professional: "₹550 / mo", enterprise: "₹550 / mo" },
    { label: "Package Price", starter: "₹1,500 / mo", professional: "₹3,000 / mo", enterprise: "Custom" },
    { label: "Total Price", starter: "₹2,050 / mo", professional: "₹3,550 / mo", enterprise: "Custom Pricing" },
    { label: "Contacts & Leads", starter: "Up to 1,000", professional: "Up to 5,000", enterprise: "Unlimited" },
    { label: "Quotations & Invoices", starter: "Up to 50 / mo", professional: "Unlimited", enterprise: "Unlimited" },
    { label: "Task Workflows", starter: "Standard Tasks", professional: "Advanced Automations", enterprise: "Custom Triggers" },
    { label: "Web Users", starter: "3", professional: "5", enterprise: "Custom" },
    { label: "Mobile Users", starter: "2", professional: "10", enterprise: "Custom" },
    { label: "CRM Module", starter: true, professional: true, enterprise: true },
    { label: "Task Management Module", starter: true, professional: true, enterprise: true },
    { label: "Integrations & API", starter: false, professional: true, enterprise: true },
    { label: "SLA Custom Support", starter: false, enterprise: true }
  ]
};

export const fmCompanyPackages = [
  {
    name: "Essential FM",
    price: "₹4,999",
    period: "/ month",
    description: "Perfect for growing facility management firms handling small properties.",
    features: [
      "Up to 5 Properties",
      "2,000 Assets",
      "10 Web Users",
      "20 Mobile Users",
      "Standard Email Support"
    ],
    cta: "Book Demo"
  },
  {
    name: "Professional FM",
    price: "₹9,999",
    period: "/ month",
    description: "Ideal for mid-sized FM companies managing multiple commercial buildings.",
    features: [
      "Up to 15 Properties",
      "10,000 Assets",
      "25 Web Users",
      "50 Mobile Users",
      "Priority 24/7 Support",
      "Advanced Analytics Dashboard"
    ],
    cta: "Book Demo",
    highlighted: true
  },
  {
    name: "Enterprise FM",
    price: "Custom",
    period: " Pricing",
    description: "Designed for large-scale global FM corporations requiring custom scale.",
    features: [
      "Unlimited Properties",
      "Unlimited Assets",
      "Custom Users Allocation",
      "Dedicated Account Manager",
      "Custom API Integrations",
      "99.9% Uptime SLA"
    ],
    cta: "Talk to Sales",
    contactButton: true
  }
];

// ─── NEW: FM SaaS Company Pricing Plans (4-card section) ─────────────────────

export const fmSaasPlans = [
  {
    id: "customize",
    name: "Customize",
    originalPrice: "Custom",
    discountPercent: null,
    discountedPrice: "Contact Us",
    period: "",
    users: "Unlimited Users",
    storage: "Unlimited Storage",
    platform: "Web + Mobile + API",
    features: [
      "Unlimited Properties",
      "Unlimited Assets",
      "Custom User Allocation",
      "Dedicated Account Manager",
      "White-label Options",
      "Custom Integrations",
      "SLA Guarantee",
      "On-premise Available"
    ],
    buttonText: "Contact Us",
    buttonType: "contact",
    buttonLink: "/contact",
    moduleIds: [
      "dashboard", "businessSuite", "assetManagement", "preventiveMaintenance",
      "reactiveMaintenance", "helpdesk", "vendorManagement", "compliance",
      "attendance", "visitor", "parking", "crm", "reports", "workflow",
      "mobileApp", "notifications"
    ]
  }
];

// ─── Module definitions for "Products Included" icon grid ────────────────────

export const fmModules = [
  {
    id: "dashboard",
    name: "Dashboard",
    icon: FiBarChart2
  },
  {
    id: "helpdesk",
    name: "Helpdesk",
    icon: FiMessageSquare
  },
  {
    id: "service",
    name: "Helpdesk",
    icon: FiMessageSquare
  },
  {
    id: "businessSuite",
    name: "Business Suite",
    icon: FiServer
  },
  {
    id: "compliance",
    name: "Compliance",
    icon: FiShield
  },
  {
    id: "properties",
    name: "Properties",
    icon: FiHome
  },
  {
    id: "announcement",
    name: "Announcement",
    icon: FiVolume2
  },
  {
    id: "humanResources",
    name: "Human Resources",
    icon: FiUsers
  },
  {
    id: "assetManagement",
    name: "Asset Management",
    icon: FiBox
  },
  {
    id: "assetMaintenance",
    name: "Asset Management",
    icon: FiBox
  },
  {
    id: "preventiveMaintenance",
    name: "Preventive Maintenance",
    icon: FiTool
  },
  {
    id: "reactiveMaintenance",
    name: "Reactive Maintenance",
    icon: FiZap
  },
  {
    id: "workplaceServices",
    name: "Workplace Services",
    icon: FiBriefcase
  },
  {
    id: "occupants",
    name: "Occupants",
    icon: FiUserCheck
  },
  {
    id: "mobileApp",
    name: "Mobile App",
    icon: FiSmartphone
  },
  {
    id: "tenantMobileApp",
    name: "Mobile App",
    icon: FiSmartphone
  },
  {
    id: "contracts",
    name: "Contracts & AMC",
    icon: FiFileText
  },
  {
    id: "vendorManagement",
    name: "Vendor Management",
    icon: FiClipboard
  },
  {
    id: "vendors",
    name: "Vendor Management",
    icon: FiClipboard
  },
  {
    id: "inventory",
    name: "Inventory",
    icon: FiArchive
  },
  {
    id: "procurement",
    name: "Procurement",
    icon: FiShoppingCart
  },
  {
    id: "budgetFinance",
    name: "Budget & Finance",
    icon: FiDollarSign
  },
  {
    id: "crm",
    name: "CRM",
    icon: FiUsers
  },
  {
    id: "tasks",
    name: "Task Management",
    icon: FiCheckSquare
  },
  {
    id: "attendance",
    name: "Attendance",
    icon: FiCalendar
  },
  {
    id: "workflow",
    name: "Workflow",
    icon: FiSettings
  },
  {
    id: "workflowApprovals",
    name: "Workflow",
    icon: FiSettings
  },
  {
    id: "storage",
    name: "Storage",
    icon: FiDatabase
  },
  {
    id: "visitor",
    name: "Visitor",
    icon: FiUserCheck
  },
  {
    id: "parking",
    name: "Parking",
    icon: FiMapPin
  },
  {
    id: "reports",
    name: "Reports",
    icon: FiPieChart
  },
  {
    id: "notifications",
    name: "Notifications",
    icon: FiBell
  }
];
