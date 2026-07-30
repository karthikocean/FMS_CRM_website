import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const mainHtmlPath = path.join(distDir, 'index.html');

const routeMetadata = [
  {
    path: 'solutions',
    title: 'Smart Facility Management Solutions & Modules | FacilityCore',
    description: 'Explore FacilityCore\'s comprehensive facility management modules: Preventive Maintenance, Work Order Dispatch, Asset Tracking, Visitor & Vendor Management, and Energy Monitoring.',
    canonical: 'https://facilitycore.in/solutions',
    image: 'https://facilitycore.in/solutionpageherosection.png'
  },
  {
    path: 'industries',
    title: 'Industry-Specific Facility Management Solutions | FacilityCore',
    description: 'FacilityCore adapts to the unique operational requirements of 15+ industries including Commercial Real Estate, Healthcare, Education, Data Centers, Manufacturing, Airports, and Hotels.',
    canonical: 'https://facilitycore.in/industries',
    image: 'https://facilitycore.in/Industryyyyyimg.png'
  },
  {
    path: 'features',
    title: 'Mobile-First Facility Management & CMMS Features | FacilityCore',
    description: 'Discover FacilityCore\'s mobile-first features: QR-code scanning, real-time push notifications, offline work order execution, IoT sensor integration, and automated SLA alerts.',
    canonical: 'https://facilitycore.in/features',
    image: 'https://facilitycore.in/mobileworkforceplatform.png'
  },
  {
    path: 'pricing',
    title: 'Transparent Facility Management Software Pricing & Plans | FacilityCore',
    description: 'Compare flexible pricing packages and individual module plans for FacilityCore. Simple, transparent pricing tailored for FM companies, commercial properties, and enterprises.',
    canonical: 'https://facilitycore.in/pricing',
    image: 'https://facilitycore.in/solutionpageherosection.png'
  },
  {
    path: 'blogs',
    title: 'Facility Management & CMMS Blog Insights | FacilityCore',
    description: 'Read expert articles, guides, and trends on Facility Management Software (CAFM), Preventive Maintenance, IoT Smart Sensors, and Asset Operations.',
    canonical: 'https://facilitycore.in/blogs',
    image: 'https://facilitycore.in/homepageherosection2img.png'
  },
  {
    path: 'about',
    title: 'About FacilityCore - Enterprise Smart Facility Management Platform',
    description: 'Learn about FacilityCore\'s mission to transform global facility operations through cloud-native automation, mobile-first workflows, and AI-driven predictive maintenance.',
    canonical: 'https://facilitycore.in/about',
    image: 'https://facilitycore.in/aboutsectionimg1.png'
  },
  {
    path: 'contact',
    title: 'Contact FacilityCore - Request a Free Demo & Consultation',
    description: 'Get in touch with FacilityCore facility experts. Schedule a personalized product demo, request enterprise pricing, or speak with our implementation support team.',
    canonical: 'https://facilitycore.in/contact',
    image: 'https://facilitycore.in/solutionpageherosection.png'
  },
  {
    path: 'terms',
    title: 'Terms & Conditions | FacilityCore Smart Facility Management',
    description: 'Review FacilityCore\'s Terms & Conditions governing the use of our web application, mobile apps, platform services, and subscription agreements.',
    canonical: 'https://facilitycore.in/terms',
    image: 'https://facilitycore.in/CommercialBuildingimg.png'
  },
  {
    path: 'privacy',
    title: 'Privacy Policy | FacilityCore Smart Facility Management',
    description: 'Read FacilityCore\'s Privacy Policy to understand how we protect, store, and process your enterprise organizational data and personal information securely.',
    canonical: 'https://facilitycore.in/privacy',
    image: 'https://facilitycore.in/CommercialBuildingimg.png'
  },
  {
    path: 'industries/commercial-real-estate',
    title: 'Commercial Real Estate Facility Management Software | FacilityCore',
    description: 'Manage commercial buildings, office towers, retail spaces, and mixed-use properties with FacilityCore\'s smart facility management software.',
    canonical: 'https://facilitycore.in/industries/commercial-real-estate',
    image: 'https://facilitycore.in/CommercialBuildingimg.png'
  },
  {
    path: 'industries/corporate-offices-it-campuses',
    title: 'Corporate Offices & IT Campuses Facility Management Software | FacilityCore',
    description: 'Optimize corporate real estate, IT parks, and tech campuses with FacilityCore software.',
    canonical: 'https://facilitycore.in/industries/corporate-offices-it-campuses',
    image: 'https://facilitycore.in/ITCampusimggg.png'
  },
  {
    path: 'industries/residential-communities',
    title: 'Residential Communities & Gated Societies FM Software | FacilityCore',
    description: 'Streamline residential complex maintenance, visitor management, amenity booking, and resident ticketing.',
    canonical: 'https://facilitycore.in/industries/residential-communities',
    image: 'https://facilitycore.in/Apartmentimg.png'
  },
  {
    path: 'industries/manufacturing-factories',
    title: 'Manufacturing Plants & Factory Facility Management Software | FacilityCore',
    description: 'Maximize industrial manufacturing uptime, EHS compliance, and equipment maintenance with FacilityCore.',
    canonical: 'https://facilitycore.in/industries/manufacturing-factories',
    image: 'https://facilitycore.in/Industrialplantimg.png'
  },
  {
    path: 'industries/warehouses-logistics',
    title: 'Warehouse & Logistics Facility Management Software | FacilityCore',
    description: 'Manage distribution centers, cold storage, MHE assets, and logistics hub maintenance.',
    canonical: 'https://facilitycore.in/industries/warehouses-logistics',
    image: 'https://facilitycore.in/Warehouseimg.png'
  },
  {
    path: 'industries/healthcare',
    title: 'Hospital & Healthcare Facility Management Software | FacilityCore',
    description: 'Ensure 100% biomedical equipment uptime, NABH compliance, and hospital hygiene with FacilityCore.',
    canonical: 'https://facilitycore.in/industries/healthcare',
    image: 'https://facilitycore.in/Hospitalllimg.png'
  },
  {
    path: 'industries/education',
    title: 'Education & Campus Facility Management Software | FacilityCore',
    description: 'Manage schools, colleges, universities, hostels, and educational campuses with FacilityCore.',
    canonical: 'https://facilitycore.in/industries/education',
    image: 'https://facilitycore.in/school.png'
  },
  {
    path: 'industries/retail-shopping-malls',
    title: 'Shopping Mall & Retail Facility Management Software | FacilityCore',
    description: 'Automate mall maintenance, tenant service requests, HVAC, escalators, and retail vendor SLAs.',
    canonical: 'https://facilitycore.in/industries/retail-shopping-malls',
    image: 'https://facilitycore.in/ShoppingMallimgggg.png'
  },
  {
    path: 'industries/airports-transportation',
    title: 'Airport & Transit Hub Facility Management Software | FacilityCore',
    description: 'Smart CAFM and CMMS for airport terminals, railway stations, and public transit hubs.',
    canonical: 'https://facilitycore.in/industries/airports-transportation',
    image: 'https://facilitycore.in/Airportimg.png'
  },
  {
    path: 'industries/utilities-infrastructure',
    title: 'Utilities & Infrastructure Facility Management Software | FacilityCore',
    description: 'Manage power grids, water plants, renewable energy sites, and public utility infrastructure.',
    canonical: 'https://facilitycore.in/industries/utilities-infrastructure',
    image: 'https://facilitycore.in/Utilitiesimg.png'
  },
  {
    path: 'industries/government-public-sector',
    title: 'Government & Public Sector Facility Management Software | FacilityCore',
    description: 'Secure, compliant facility management software for civic centers, public buildings, and municipal offices.',
    canonical: 'https://facilitycore.in/industries/government-public-sector',
    image: 'https://facilitycore.in/Governmentimg.png'
  },
  {
    path: 'industries/data-centers-critical-facilities',
    title: 'Data Center & Critical Facility Management Software | FacilityCore',
    description: 'Ensure 99.999% uptime for power, cooling, and security assets in data centers and mission-critical facilities.',
    canonical: 'https://facilitycore.in/industries/data-centers-critical-facilities',
    image: 'https://facilitycore.in/Datacenterimg.png'
  },
  {
    path: 'industries/smart-cities',
    title: 'Smart City Infrastructure Facility Management Software | FacilityCore',
    description: 'Intelligent urban facility management for smart city assets, streetlights, traffic systems, and public parks.',
    canonical: 'https://facilitycore.in/industries/smart-cities',
    image: 'https://facilitycore.in/SmartCityimg.png'
  },
  {
    path: 'industries/industrial-facilities',
    title: 'Industrial Facilities & Business Park Management Software | FacilityCore',
    description: 'Comprehensive facility management platform for industrial estates, tech parks, and SEZs.',
    canonical: 'https://facilitycore.in/industries/industrial-facilities',
    image: 'https://facilitycore.in/Industrialplantimg.png'
  },
  {
    path: 'industries/hospitality-hotels',
    title: 'Hotel & Hospitality Facility Management Software | FacilityCore',
    description: 'Automate luxury hotel maintenance, guest room tickets, banquet operations, and resort facilities.',
    canonical: 'https://facilitycore.in/industries/hospitality-hotels',
    image: 'https://facilitycore.in/Hotelimg.png'
  }
];

if (fs.existsSync(mainHtmlPath)) {
  const baseHtml = fs.readFileSync(mainHtmlPath, 'utf-8');

  routeMetadata.forEach(meta => {
    const targetRouteDir = path.join(distDir, ...meta.path.split('/'));
    fs.mkdirSync(targetRouteDir, { recursive: true });

    // Inject static route SEO metadata into HTML
    let routeHtml = baseHtml
      .replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`)
      .replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${meta.description}" />`)
      .replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${meta.canonical}" />`)
      .replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${meta.title}" />`)
      .replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${meta.description}" />`)
      .replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${meta.canonical}" />`)
      .replace(/<meta property="og:image" content=".*?" \/>/s, `<meta property="og:image" content="${meta.image}" />`)
      .replace(/<meta name="twitter:title" content=".*?" \/>/s, `<meta name="twitter:title" content="${meta.title}" />`)
      .replace(/<meta name="twitter:description" content=".*?" \/>/s, `<meta name="twitter:description" content="${meta.description}" />`)
      .replace(/<meta name="twitter:url" content=".*?" \/>/s, `<meta name="twitter:url" content="${meta.canonical}" />`)
      .replace(/<meta name="twitter:image" content=".*?" \/>/s, `<meta name="twitter:image" content="${meta.image}" />`);

    fs.writeFileSync(path.join(targetRouteDir, 'index.html'), routeHtml, 'utf-8');
    console.log(`✔ Prerendered static SEO HTML: dist/${meta.path}/index.html`);
  });
}
