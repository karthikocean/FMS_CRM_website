import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiSmartphone, FiCheckSquare } from 'react-icons/fi';
import { whyMobileFirstData } from '../data/FeaturesPageData';
import '../styles/WhyMobileFirst.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const cardMeta = [
  {
    step: "01",
    tag: "Real-Time Speed",
    icon: FiClock,
    colorClass: "wmf-icon-amber"
  },
  {
    step: "02",
    tag: "Core Advantage",
    icon: FiSmartphone,
    colorClass: "wmf-icon-green",
    featured: true
  },
  {
    step: "03",
    tag: "On-the-Go Mobility",
    icon: FiCheckSquare,
    colorClass: "wmf-icon-blue"
  }
];

const WhyMobileFirst = () => {
  const { badge, heading, paragraphs } = whyMobileFirstData;
  const BadgeIcon = badge?.icon;

  return (
    <section className="wmf-section" id="why-mobile-first">
      {/* Decorative background glow accents */}
      <div className="wmf-bg-glow wmf-bg-glow-1" />
      <div className="wmf-bg-glow wmf-bg-glow-2" />

      <div className="wmf-container">
        {/* Header Section */}
        <motion.div
          className="wmf-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {badge && (
            <div className="wmf-badge">
              {BadgeIcon && <BadgeIcon className="wmf-badge-icon" />}
              <span>{badge.text}</span>
            </div>
          )}
          <h2 className="wmf-heading">{heading}</h2>
        </motion.div>

        {/* 3-Column Enterprise Card Grid */}
        <motion.div
          className="wmf-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {paragraphs && paragraphs.map((para, idx) => {
            const meta = cardMeta[idx] || cardMeta[0];
            const CardIcon = meta.icon;
            const isFeatured = meta.featured;

            return (
              <motion.div
                key={idx}
                className={`wmf-card ${isFeatured ? 'wmf-card-featured' : ''}`}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Top Accent Bar */}
                <div className="wmf-card-top-bar" />

                {/* Card Top Header */}
                <div className="wmf-card-header">
                  <div className={`wmf-icon-badge ${meta.colorClass}`}>
                    <CardIcon />
                  </div>
                  <div className="wmf-card-step">
                    <span>{meta.step}</span>
                  </div>
                </div>

                {/* Subtitle Tag */}
                <div className="wmf-card-tag-wrap">
                  <span className="wmf-card-tag">{meta.tag}</span>
                </div>

                {/* Content Paragraph */}
                <p className="wmf-panel-paragraph">{para}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(WhyMobileFirst);

