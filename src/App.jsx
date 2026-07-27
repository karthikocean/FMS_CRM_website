import Home from './pages/Home';
import SolutionsPage from './pages/SolutionsPage';
import IndustriesPage from './pages/IndustriesPage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
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
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
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