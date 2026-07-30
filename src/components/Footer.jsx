import React from 'react';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiChevronsRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      {/* Tailwind container mx-auto wrapper for page width consistency */}
      <div className="container mx-auto footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-left">
            <Link to="/" className="footer-logo-link">
              <img
                src="/fcfotterlogo.png"
                alt="FacilityCore Smart Facility Management Software"
                title="FacilityCore Smart Facility Management Software"
                loading="lazy"
                decoding="async"
                className="footer-logo"
              />
            </Link>
            <p className="footer-description">
              FacilityCore simplifies facility operations through intelligent asset, maintenance, and workforce management.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/profile.php?id=61592424172256"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-social-icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/facilitycore_software/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/917904070360"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="footer-social-icon"
              >
                <FaWhatsapp />
              </a>
              <a href="#" aria-label="LinkedIn" className="footer-social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Wrapper for Company & Legal Links - side by side on mobile */}
          <div className="footer-links-wrapper">
            {/* Column 2: Company Links */}
            <div className="footer-column">
              <h4 className="footer-heading">COMPANY</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/about" className="footer-link">
                    <FiChevronsRight className="footer-link-icon" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="footer-link">
                    <FiChevronsRight className="footer-link-icon" />
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="footer-link">
                    <FiChevronsRight className="footer-link-icon" />
                    Blogs & Insights
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="footer-link">
                    <FiChevronsRight className="footer-link-icon" />
                    Industries
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="footer-link">
                    <FiChevronsRight className="footer-link-icon" />
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link">
                    <FiChevronsRight className="footer-link-icon" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal Links */}
            <div className="footer-column">
              <h4 className="footer-heading">LEGAL</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/privacy" className="footer-link">
                    <FiChevronsRight className="footer-link-icon" />
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="footer-link">
                    <FiChevronsRight className="footer-link-icon" />
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Details */}
          <div className="footer-column">
            <h4 className="footer-heading">CONTACT DETAILS</h4>
            <ul className="footer-contact-list">
              <li>
                <FiMail className="footer-contact-icon" />
                <a href="mailto:sales@facilitycore.in">
                  sales@facilitycore.in
                </a>
              </li>
              <li>
                <FiPhone className="footer-contact-icon" />
                <a href="tel:+917904070360">
                  +91 7904070360
                </a>
              </li>
              <li>
                <FiMapPin className="footer-contact-icon" />
                <span>
                  FacilityCore <br />
                  Chennai, Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom separator & Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} FacilityCore . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
