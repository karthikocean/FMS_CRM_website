import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/FloatingWhatsApp.css';

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/917904070360"
    target="_blank"
    rel="noopener noreferrer"
    className="floating-whatsapp"
  >
    <FaWhatsapp className="whatsapp-icon" />
    <span className="whatsapp-tooltip">Chat with us</span>
  </a>
);

export default FloatingWhatsApp;
