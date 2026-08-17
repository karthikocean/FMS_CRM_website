/**
 * Production SEO Data and Structured JSON-LD Schemas for Main Website Pages.
 * Includes Organization, WebSite, SoftwareApplication, Service, Product, ContactPage, AboutPage, BreadcrumbList, and FAQPage schemas.
 */

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FacilityCore",
  "url": "https://facilitycore.in",
  "logo": "https://facilitycore.in/Facility_Core_logo.svg",
  "description": "Enterprise-grade smart facility management software, CAFM, CMMS, and IoT building automation platform.",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61592424172256",
    "https://www.instagram.com/facilitycore_software/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English"]
  }
};

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "FacilityCore",
  "image": "https://facilitycore.in/Facility_Core_logo.svg",
  "@id": "https://facilitycore.in/#localbusiness",
  "url": "https://facilitycore.in",
  "telephone": "+917904070360",
  "email": "support@facilitycore.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "FacilityCore Tech Park, Mount Road",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600002",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.0827,
    "longitude": 80.2707
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "19:00"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61592424172256",
    "https://www.instagram.com/facilitycore_software/",
    "https://wa.me/917904070360"
  ]
};

export const HERO_IMAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://facilitycore.in/homepageherosection2img.png",
  "url": "https://facilitycore.in/homepageherosection2img.png",
  "name": "FacilityCore Smart Facility Management Platform Dashboard",
  "caption": "All-in-One CAFM & CMMS dashboard for building maintenance, asset tracking, and SLA automation",
  "author": {
    "@type": "Organization",
    "name": "FacilityCore"
  }
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "FacilityCore",
  "url": "https://facilitycore.in",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://facilitycore.in/solutions?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const SOFTWARE_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "FacilityCore Smart Facility Management Platform",
  "operatingSystem": "Web, iOS, Android",
  "applicationCategory": "BusinessApplication",
  "description": "All-in-one CMMS and CAFM facility management software for work order automation, asset lifecycle tracking, preventive maintenance, visitor access, vendor management, and energy monitoring.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "seller": {
      "@type": "Organization",
      "name": "FacilityCore"
    }
  }
};

// Home Page SEO Data
export const homeSeo = {
  title: "Facility Management Software in India | FacilityCore",
  description: "FacilityCore is facility management software for managing preventive maintenance, assets, work orders, complaints, AMC, vendors and facility operations. Book a free demo.",
  keywords: "facility management software, facility management software India, facility management system, facility maintenance software, preventive maintenance software, asset management software, CMMS software, AMC management software",
  canonical: "https://facilitycore.in/",
  robots: "index, follow",
  ogTitle: "Facility Management Software & CMMS Platform | FacilityCore",
  ogDescription: "Automate facility operations, preventive maintenance, asset tracking, visitor management, and vendor SLAs with FacilityCore smart cloud platform.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/",
  ogImage: "https://facilitycore.in/homepageherosection2img.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Facility Management Software & CMMS Platform | FacilityCore",
  twitterDescription: "Automate facility operations, preventive maintenance, asset tracking, visitor management, and vendor SLAs with FacilityCore smart cloud platform.",
  twitterImage: "https://facilitycore.in/homepageherosection2img.png",
  schemas: [
    ORG_SCHEMA,
    LOCAL_BUSINESS_SCHEMA,
    HERO_IMAGE_SCHEMA,
    WEBSITE_SCHEMA,
    SOFTWARE_APP_SCHEMA,
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Facility Management Software & CMMS Platform | FacilityCore",
      "description": "FacilityCore is an all-in-one smart facility management software (CAFM & CMMS) for commercial real estate, office campuses, hospitals, and industrial facilities.",
      "url": "https://facilitycore.in/"
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
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is FacilityCore Facility Management Software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore is a cloud-based CAFM & CMMS facility management software designed to automate preventive maintenance, work order dispatches, asset lifecycle management, visitor safety, vendor SLAs, and utility energy tracking across commercial real estate, industrial plants, healthcare, education, and smart cities."
          }
        },
        {
          "@type": "Question",
          "name": "How does FacilityCore improve preventive maintenance compliance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore automates scheduled preventive maintenance (PM) calendars, generates mobile QR-code inspection checklists for technicians, triggers breakdown notifications, and ensures 99%+ equipment uptime across critical assets."
          }
        },
        {
          "@type": "Question",
          "name": "Can FacilityCore be used on mobile devices?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore provides dedicated native iOS and Android mobile apps for facility managers, field technicians, vendors, and tenants with offline work order logging and live push notifications."
          }
        },
        {
          "@type": "Question",
          "name": "Is FacilityCore suitable for multi-location enterprises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. FacilityCore supports multi-property, multi-city enterprise facility portfolios with centralized executive dashboards, role-based security permissions, and consolidated SLA analytics."
          }
        }
      ]
    }
  ]
};

// Solutions Page SEO Data
export const solutionsSeo = {
  title: "Smart Facility Management Solutions & Modules | FacilityCore",
  description: "Explore FacilityCore's comprehensive facility management modules: Preventive Maintenance, Work Order Dispatch, Asset Tracking, Visitor & Vendor Management, Energy & Sustainability Monitoring, and Space Optimization.",
  keywords: "Facility Management Solutions, Smart CMMS Modules, Work Order Dispatch Software, Preventive Maintenance Module, Asset Tracking System, Visitor Management Software, Vendor Management Portal, Energy Monitoring Platform, CAFM Modules, Space Management System",
  canonical: "https://facilitycore.in/solutions",
  robots: "index, follow",
  ogTitle: "Smart Facility Management Solutions & Modules | FacilityCore",
  ogDescription: "Streamline facility operations with intelligent automation, work order dispatch, preventive maintenance calendars, visitor passes, and vendor management.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/solutions",
  ogImage: "https://facilitycore.in/solutionpageherosection.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Smart Facility Management Solutions & Modules | FacilityCore",
  twitterDescription: "Streamline facility operations with intelligent automation, work order dispatch, preventive maintenance calendars, visitor passes, and vendor management.",
  twitterImage: "https://facilitycore.in/solutionpageherosection.png",
  schemas: [
    ORG_SCHEMA,
    SOFTWARE_APP_SCHEMA,
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Smart Facility Management Solutions & Modules | FacilityCore",
      "description": "Explore FacilityCore modules for preventive maintenance, asset management, vendor SLAs, visitor registration, and work order automation.",
      "url": "https://facilitycore.in/solutions"
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
          "name": "Solutions",
          "item": "https://facilitycore.in/solutions"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What modules are included in FacilityCore software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FacilityCore includes Helpdesk Work Order Management, Scheduled Preventive Maintenance, Asset Lifecycle & QR Tracking, Contractor/Vendor Management, Visitor & Gatekeeper Access, Utility Energy Management, and EHS Compliance Audits."
          }
        },
        {
          "@type": "Question",
          "name": "How does work order auto-dispatch work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When a tenant or staff member submits a ticket via mobile app or web portal, FacilityCore automatically routes the request to the designated technician or vendor team based on asset category, location, and priority SLA."
          }
        }
      ]
    }
  ]
};

// Industries Overview SEO Data
export const industriesSeo = {
  title: "Industry-Specific Facility Management Solutions | FacilityCore",
  description: "FacilityCore adapts to the unique operational requirements of 15+ industries including Commercial Real Estate, Healthcare, Education, Data Centers, Manufacturing, Airports, Hotels, Warehouses, and Smart Cities.",
  keywords: "Industry Facility Management Software, Commercial Property CMMS, Hospital Facility Management, Campus Maintenance Software, Warehouse CMMS, Data Center Facility Management, Hotel FM Software, Government Building Management, Smart City Facilities",
  canonical: "https://facilitycore.in/industries",
  robots: "index, follow",
  ogTitle: "Industry-Specific Facility Management Solutions | FacilityCore",
  ogDescription: "Specialized CMMS and CAFM software tailored for Commercial Real Estate, IT Campuses, Healthcare, Education, Data Centers, Airports, and Manufacturing.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/industries",
  ogImage: "https://facilitycore.in/Industryyyyyimg.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Industry-Specific Facility Management Solutions | FacilityCore",
  twitterDescription: "Specialized CMMS and CAFM software tailored for Commercial Real Estate, IT Campuses, Healthcare, Education, Data Centers, Airports, and Manufacturing.",
  twitterImage: "https://facilitycore.in/Industryyyyyimg.png",
  schemas: [
    ORG_SCHEMA,
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Industry-Specific Facility Management Solutions | FacilityCore",
      "description": "Tailored facility management software for commercial real estate, corporate offices, healthcare, education, airports, and industrial facilities.",
      "url": "https://facilitycore.in/industries"
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
        }
      ]
    }
  ]
};

// Features Page SEO Data
export const featuresSeo = {
  title: "Mobile-First Facility Management & CMMS Features | FacilityCore",
  description: "Discover FacilityCore's powerful mobile-first features: QR-code scanning, real-time push notifications, offline work order execution, IoT sensor integration, EHS compliance logs, and automated SLA alerts.",
  keywords: "Mobile Facility Management App, Mobile CMMS App, QR Code Maintenance Tracking, Offline Work Order App, Facility SLA Tracking, IoT Facility Sensors, Maintenance Mobile App, EHS Compliance Checklists, FM Field Mobile Platform",
  canonical: "https://facilitycore.in/features",
  robots: "index, follow",
  ogTitle: "Mobile-First Facility Management & CMMS Features | FacilityCore",
  ogDescription: "Empower facility managers and technicians with offline-capable mobile apps, QR code asset tagging, instant push alerts, and automated work order tracking.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/features",
  ogImage: "https://facilitycore.in/mobileworkforceplatform.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Mobile-First Facility Management & CMMS Features | FacilityCore",
  twitterDescription: "Empower facility managers and technicians with offline-capable mobile apps, QR code asset tagging, instant push alerts, and automated work order tracking.",
  twitterImage: "https://facilitycore.in/mobileworkforceplatform.png",
  schemas: [
    ORG_SCHEMA,
    SOFTWARE_APP_SCHEMA,
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mobile-First Facility Management & CMMS Features | FacilityCore",
      "description": "Mobile CMMS features: QR code scanning, offline inspection app, automated SLA timers, and IoT sensor monitoring.",
      "url": "https://facilitycore.in/features"
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
          "name": "Features",
          "item": "https://facilitycore.in/features"
        }
      ]
    }
  ]
};

// Pricing Page SEO Data
export const pricingSeo = {
  title: "Transparent Facility Management Software Pricing & Plans | FacilityCore",
  description: "Compare flexible pricing packages and individual module plans for FacilityCore. Simple, transparent pricing tailored for FM companies, commercial properties, residential communities, and enterprises.",
  keywords: "Facility Management Software Pricing, CMMS Cost, CAFM Software Plans, Enterprise Facility Management Pricing, FacilityCore Packages, Property Management Software Cost, FM Company Subscription",
  canonical: "https://facilitycore.in/pricing",
  robots: "index, follow",
  ogTitle: "Transparent Facility Management Software Pricing & Plans | FacilityCore",
  ogDescription: "Flexible subscription pricing for property managers, FM contractors, and enterprise facility teams with custom module selection.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/pricing",
  ogImage: "https://facilitycore.in/solutionpageherosection.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Transparent Facility Management Software Pricing & Plans | FacilityCore",
  twitterDescription: "Flexible subscription pricing for property managers, FM contractors, and enterprise facility teams with custom module selection.",
  twitterImage: "https://facilitycore.in/solutionpageherosection.png",
  schemas: [
    ORG_SCHEMA,
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "FacilityCore Facility Management Software Subscription",
      "description": "Modular facility management software subscription plans for commercial properties, residential communities, and FM service providers.",
      "brand": {
        "@type": "Brand",
        "name": "FacilityCore"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "0",
        "offerCount": "4"
      }
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
          "name": "Pricing",
          "item": "https://facilitycore.in/pricing"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is there a free trial for FacilityCore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer a full-featured free demo and trial period so facility teams can evaluate our platform setup."
          }
        },
        {
          "@type": "Question",
          "name": "Can we purchase individual modules instead of full packages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FacilityCore allows modular purchasing so you only pay for the features your team needs, such as Preventive Maintenance or Visitor Management."
          }
        }
      ]
    }
  ]
};

// About Page SEO Data
export const aboutSeo = {
  title: "About FacilityCore - Enterprise Smart Facility Management Platform",
  description: "Learn about FacilityCore's mission to transform global facility operations through cloud-native automation, mobile-first workflows, and AI-driven predictive maintenance analytics.",
  keywords: "About FacilityCore, Facility Management Software Company, Smart FM Technology, Enterprise CAFM Platform, Facility Management Innovators, Property Tech Solution Provider",
  canonical: "https://facilitycore.in/about",
  robots: "index, follow",
  ogTitle: "About FacilityCore - Enterprise Smart Facility Management Platform",
  ogDescription: "Discover how FacilityCore empowers organizations to streamline operations, reduce utility waste, and automate building maintenance.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/about",
  ogImage: "https://facilitycore.in/aboutsectionimg1.png",
  twitterCard: "summary_large_image",
  twitterTitle: "About FacilityCore - Enterprise Smart Facility Management Platform",
  twitterDescription: "Discover how FacilityCore empowers organizations to streamline operations, reduce utility waste, and automate building maintenance.",
  twitterImage: "https://facilitycore.in/aboutsectionimg1.png",
  schemas: [
    ORG_SCHEMA,
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About FacilityCore",
      "description": "Learn about FacilityCore mission, vision, core values, and smart facility management innovation.",
      "url": "https://facilitycore.in/about"
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
          "name": "About Us",
          "item": "https://facilitycore.in/about"
        }
      ]
    }
  ]
};

// Contact Page SEO Data
export const contactSeo = {
  title: "Contact FacilityCore - Request a Free Demo & Consultation",
  description: "Get in touch with FacilityCore facility experts. Schedule a personalized product demo, request enterprise pricing, or speak with our implementation support team.",
  keywords: "Contact FacilityCore, Request Facility Management Demo, CMMS Product Demo, FacilityCore Sales, Enterprise Facility Consultation, Property Tech Support",
  canonical: "https://facilitycore.in/contact",
  robots: "index, follow",
  ogTitle: "Contact FacilityCore - Request a Free Demo & Consultation",
  ogDescription: "Reach out to our facility management software experts to schedule a live demo or get personalized solution guidance.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/contact",
  ogImage: "https://facilitycore.in/solutionpageherosection.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Contact FacilityCore - Request a Free Demo & Consultation",
  twitterDescription: "Reach out to our facility management software experts to schedule a live demo or get personalized solution guidance.",
  twitterImage: "https://facilitycore.in/solutionpageherosection.png",
  schemas: [
    ORG_SCHEMA,
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact FacilityCore",
      "description": "Contact our facility management software support and sales team.",
      "url": "https://facilitycore.in/contact"
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
          "name": "Contact",
          "item": "https://facilitycore.in/contact"
        }
      ]
    }
  ]
};

// Terms Page SEO Data
export const termsSeo = {
  title: "Terms & Conditions | FacilityCore Smart Facility Management",
  description: "Review FacilityCore's Terms & Conditions governing the use of our web application, mobile apps, platform services, and subscription agreements.",
  keywords: "FacilityCore Terms and Conditions, Facility Management Service Terms, Software Terms of Use",
  canonical: "https://facilitycore.in/terms",
  robots: "index, follow",
  ogTitle: "Terms & Conditions | FacilityCore Smart Facility Management",
  ogDescription: "FacilityCore software platform terms of service and subscription user agreements.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/terms",
  ogImage: "https://facilitycore.in/CommercialBuildingimg.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Terms & Conditions | FacilityCore Smart Facility Management",
  twitterDescription: "FacilityCore software platform terms of service and subscription user agreements.",
  twitterImage: "https://facilitycore.in/CommercialBuildingimg.png",
  schemas: [
    ORG_SCHEMA,
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms & Conditions | FacilityCore",
      "description": "Legal terms and conditions governing the use of the FacilityCore platform.",
      "url": "https://facilitycore.in/terms"
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
          "name": "Terms & Conditions",
          "item": "https://facilitycore.in/terms"
        }
      ]
    }
  ]
};

// Privacy Page SEO Data
export const privacySeo = {
  title: "Privacy Policy | FacilityCore Smart Facility Management",
  description: "Read FacilityCore's Privacy Policy to understand how we protect, store, and process your enterprise organizational data and personal information securely.",
  keywords: "FacilityCore Privacy Policy, Data Privacy, Enterprise Data Protection, Cloud Security",
  canonical: "https://facilitycore.in/privacy",
  robots: "index, follow",
  ogTitle: "Privacy Policy | FacilityCore Smart Facility Management",
  ogDescription: "Learn how FacilityCore protects customer data, user privacy, and organizational records.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/privacy",
  ogImage: "https://facilitycore.in/CommercialBuildingimg.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Privacy Policy | FacilityCore Smart Facility Management",
  twitterDescription: "Learn how FacilityCore protects customer data, user privacy, and organizational records.",
  twitterImage: "https://facilitycore.in/CommercialBuildingimg.png",
  schemas: [
    ORG_SCHEMA,
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy | FacilityCore",
      "description": "FacilityCore privacy policy and enterprise data security practices.",
      "url": "https://facilitycore.in/privacy"
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
          "name": "Privacy Policy",
          "item": "https://facilitycore.in/privacy"
        }
      ]
    }
  ]
};

// Blogs Page SEO Data
export const blogsSeo = {
  title: "Facility Management & CMMS Blog Insights | FacilityCore",
  description: "Read expert articles, guides, and trends on Facility Management Software (CAFM), Preventive Maintenance, IoT Smart Sensors, and Asset Operations.",
  keywords: "Facility Management Blog, CMMS Articles, CAFM Insights, Predictive Maintenance Trends, Property Tech Blog, Facility Maintenance News, IoT Building Automation",
  canonical: "https://facilitycore.in/blogs",
  robots: "index, follow",
  ogTitle: "Facility Management & CMMS Blog Insights | FacilityCore",
  ogDescription: "Stay ahead with expert facility management insights, CMMS best practices, and smart building technology guides.",
  ogType: "website",
  ogUrl: "https://facilitycore.in/blogs",
  ogImage: "https://facilitycore.in/homepageherosection2img.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Facility Management & CMMS Blog Insights | FacilityCore",
  twitterDescription: "Stay ahead with expert facility management insights, CMMS best practices, and smart building technology guides.",
  twitterImage: "https://facilitycore.in/homepageherosection2img.png",
  schemas: [
    ORG_SCHEMA,
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "FacilityCore Facility Management & CMMS Blog",
      "description": "Articles and expert insights on CMMS, CAFM, IoT building sensors, and preventive maintenance.",
      "url": "https://facilitycore.in/blogs"
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
          "name": "Blogs",
          "item": "https://facilitycore.in/blogs"
        }
      ]
    }
  ]
};

