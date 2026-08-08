import React from 'react';
import SEO from '../components/SEO';
import { contactSeo } from '../data/mainPagesSeoData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ContactDetails from '../components/ContactDetails';

import '../styles/ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <SEO
        title="Contact Us & Request a Product Demo | FacilityCore"
        description="Get in touch with the FacilityCore team to schedule a personalized demo, inquire about custom enterprise software, or consult facility management experts."
        keywords="facility management demo, facility software consultation, contact facilitycore team"
      />
            <Navbar />

            <HeroSection
                backgroundImage="/solutionpageherosection.png"
                badge="CONTACT US"
                title="Let's Transform Your Facility Operations Together"
                description="Have questions or need a personalized demo? Our experts are ready to help you streamline facility management."
                breadcrumbItems={[
                    { label: "Home", link: "/" },
                    { label: "Contact" }
                ]}
            />
            <ContactDetails />

            <Footer />

        </div>
    );
};

export default ContactPage;