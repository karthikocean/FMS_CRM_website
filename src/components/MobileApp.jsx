import React, { useState } from "react";
import { FiSmartphone, FiCheckCircle, FiX } from "react-icons/fi";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import "../styles/MobileApp.css";

// Image path
const mobileAppImage = "/downloadimg.png";

const MobileApp = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const features = [
    "FC Admin App",
    "FC Employee App",
    "FC Occupant App",
    "Real-Time Updates",
    "QR Asset Scanning",
    "Offline Capability",
  ];

  return (
    <>
      <section className="mobileapp-section py-10">
        {/* Tailwind container mx-auto wraps the layout */}
        <div className="container mx-auto mobileapp-container">
          {/* Left Side Content (Desktop/Tablet) */}
          <div className="mobileapp-content">
            <div className="mobileapp-tag">
              <FiSmartphone className="mobileapp-tag-icon" size={24} />
              <span className="mobileapp-tag-text">Mobile Workforce Platform</span>
            </div>

            <h2 className="mobileapp-heading">
              Mobile Workforce Platform
            </h2>

            <p className="mobileapp-description">
              Empower managers, technicians, occupants, and stakeholders with real-time access to facility operations from anywhere.
            </p>

            {/* Mobile-only Image (rendered between Description and Bullet Points on mobile screens) */}
            <div className="mobileapp-image-container mobile-only-image">
              <img src={mobileAppImage} alt="FacilityCore Mobile App" className="mobileapp-image" />
            </div>

            <ul className="mobileapp-grid">
              {features.map((item) => (
                <li key={item} className="mobileapp-item">
                  <FiCheckCircle className="mobileapp-item-icon" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mobileapp-downloads">
              {/* App Store — Coming Soon */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setShowComingSoon(true); }}
                className="mobileapp-store-btn"
              >
                <FaApple size={24} />
                <div className="flex flex-col items-start">
                  <span className="mobileapp-store-subtitle">Download on the</span>
                  <span className="mobileapp-store-title">App Store</span>
                </div>
              </a>

              {/* Google Play — Live link */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=com.ocean.fcadmin.facility_core_admin_app&hl=en_IN"
                className="mobileapp-store-btn"
              >
                <FaGooglePlay size={20} />
                <div className="flex flex-col items-start">
                  <span className="mobileapp-store-subtitle">GET IT ON</span>
                  <span className="mobileapp-store-title">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side Image (Desktop/Tablet only) */}
          <div className="mobileapp-image-container desktop-only-image">
            <img src={mobileAppImage} alt="FacilityCore Mobile App" className="mobileapp-image" />
          </div>
        </div>
      </section>

      {/* ── Coming Soon Modal ── */}
      {showComingSoon && (
        <div
          onClick={() => setShowComingSoon(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(4px)',
            animation: 'csOverlayIn 0.25s ease',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: '24px',
              padding: '48px 40px 36px',
              maxWidth: '360px',
              width: '90%',
              textAlign: 'center',
              boxShadow: '0 32px 80px rgba(0,0,0,0.22)',
              position: 'relative',
              animation: 'csModalIn 0.3s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowComingSoon(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748b',
              }}
            >
              <FiX size={16} />
            </button>

            {/* Apple Icon */}
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '18px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
            }}>
              <FaApple size={36} color="#fff" />
            </div>

            {/* Badge */}
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              color: '#fff',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '1.5px',
              borderRadius: '20px',
              padding: '4px 14px',
              marginBottom: '14px',
              textTransform: 'uppercase',
            }}>
              Coming Soon
            </span>

            <h3 style={{
              fontSize: '22px',
              fontWeight: '800',
              color: '#0f172a',
              margin: '0 0 10px',
            }}>
              App Store
            </h3>

            <p style={{
              fontSize: '14px',
              color: '#64748b',
              lineHeight: '1.6',
              margin: '0 0 28px',
            }}>
              Our iOS app is currently under review and will be available on the App Store very soon. Stay tuned!
            </p>

            <button
              onClick={() => setShowComingSoon(false)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: '#fff',
                fontWeight: '700',
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(99,102,241,0.35)',
              }}
            >
              Got it!
            </button>
          </div>

          {/* Keyframe animations injected via style tag */}
          <style>{`
            @keyframes csOverlayIn {
              from { opacity: 0; }
              to   { opacity: 1; }
            }
            @keyframes csModalIn {
              from { opacity: 0; transform: scale(0.85) translateY(20px); }
              to   { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default MobileApp;
