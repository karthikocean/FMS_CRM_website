import Home from './pages/Home';
import SolutionsPage from './pages/SolutionsPage';
import IndustriesPage from './pages/IndustriesPage';
import IndustriesDetailsPage from './pages/industriesdetailspage.jsx';
import CorporateOfficesITCampusesPage from './pages/CorporateOfficesITCampusesPage.jsx';
import ResidentialCommunitiesPage from './pages/ResidentialCommunitiesPage.jsx';
import ManufacturingFactoriesPage from './pages/ManufacturingFactoriesPage.jsx';
import WarehousesLogisticsPage from './pages/WarehousesLogisticsPage.jsx';
import HealthcarePage from './pages/HealthcarePage.jsx';
import EducationPage from './pages/EducationPage.jsx';
import RetailShoppingMallsPage from './pages/RetailShoppingMallsPage.jsx';
import AirportsTransportationPage from './pages/AirportsTransportationPage.jsx';
import UtilitiesInfrastructurePage from './pages/UtilitiesInfrastructurePage.jsx';
import GovernmentPublicSectorPage from './pages/GovernmentPublicSectorPage.jsx';
import DataCentersCriticalFacilitiesPage from './pages/DataCentersCriticalFacilitiesPage.jsx';
import SmartCitiesPage from './pages/SmartCitiesPage.jsx';
import IndustrialFacilitiesPage from './pages/IndustrialFacilitiesPage.jsx';
import HospitalityHotelsPage from './pages/HospitalityHotelsPage.jsx';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { setupFetchInterceptor, fetchUserLocation } from './services/locationService';

// Initialize global fetch interceptor so all outgoing requests contain user location headers
setupFetchInterceptor();

function App() {
  useEffect(() => {
    // Warm up and cache user location on application startup
    fetchUserLocation();
  }, []);

  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/commercial-real-estate" element={<IndustriesDetailsPage />} />
        <Route path="/industries/corporate-offices-it-campuses" element={<CorporateOfficesITCampusesPage />} />
        <Route path="/industries/residential-communities" element={<ResidentialCommunitiesPage />} />
        <Route path="/industries/manufacturing-factories" element={<ManufacturingFactoriesPage />} />
        <Route path="/industries/warehouses-logistics" element={<WarehousesLogisticsPage />} />
        <Route path="/industries/healthcare" element={<HealthcarePage />} />
        <Route path="/industries/education" element={<EducationPage />} />
        <Route path="/industries/retail-shopping-malls" element={<RetailShoppingMallsPage />} />
        <Route path="/industries/airports-transportation" element={<AirportsTransportationPage />} />
        <Route path="/industries/utilities-infrastructure" element={<UtilitiesInfrastructurePage />} />
        <Route path="/industries/government-public-sector" element={<GovernmentPublicSectorPage />} />
        <Route path="/industries/data-centers-critical-facilities" element={<DataCentersCriticalFacilitiesPage />} />
        <Route path="/industries/smart-cities" element={<SmartCitiesPage />} />
        <Route path="/industries/industrial-facilities" element={<IndustrialFacilitiesPage />} />
        <Route path="/industries/hospitality-hotels" element={<HospitalityHotelsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

export default App;