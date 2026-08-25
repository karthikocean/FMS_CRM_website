import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiTag, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { fmSaasPlans, fmModules } from "../data/pricingData";
import { getFMCompanyPackages, mapApiPlanToUiPlan } from "../api/FMCompanyPackages";
import useLocation from "../hooks/useLocation";
import "../styles/FMCompanyPackages.css";

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

const headerVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

// ─── Pricing Card Component ───────────────────────────────────────────────────

const SaasPricingCard = ({ plan, index, countryCode }) => {
  const navigate = useNavigate();
  const isCustomize = plan.buttonType === "contact";
  const [showAllModules, setShowAllModules] = useState(false);
  const DEFAULT_MODULE_LIMIT = 10;

  const handleButtonClick = () => {
    if (isCustomize) {
      navigate(plan.buttonLink);
      // Smooth scroll to ContactDetails section after navigation
      setTimeout(() => {
        const target = document.querySelector('.cd-section');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      let targetUrl = plan.buttonLink;
      if (plan.id) {
        try {
          const url = new URL(plan.buttonLink);
          url.searchParams.set("planId", plan.id);
          url.searchParams.set("trial", "true");
          if (countryCode) {
            url.searchParams.set("countryCode", countryCode);
          }
          targetUrl = url.toString();
        } catch (e) {
          const separator = plan.buttonLink.includes("?") ? "&" : "?";
          targetUrl = `${plan.buttonLink}${separator}planId=${plan.id}&trial=true${countryCode ? `&countryCode=${countryCode}` : ""}`;
        }
      }
      window.open(targetUrl, "_blank", "noopener noreferrer");
    }
  };

  // Build module list for this card with deduplication and safe fallback
  const cardModules = [];
  const seenNames = new Set();

  (plan.moduleIds || []).forEach((id) => {
    const matched = fmModules.find((mod) => mod.id === id);
    if (matched) {
      if (!seenNames.has(matched.name)) {
        cardModules.push(matched);
        seenNames.add(matched.name);
      }
    } else {
      // Dynamic fallback title formatting
      const formattedName = id
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .trim();
      if (!seenNames.has(formattedName)) {
        cardModules.push({ id, name: formattedName, icon: FiTag });
        seenNames.add(formattedName);
      }
    }
  });

  const hasMoreModules = cardModules.length > DEFAULT_MODULE_LIMIT;
  const visibleModules = showAllModules
    ? cardModules
    : cardModules.slice(0, DEFAULT_MODULE_LIMIT);

  return (
    <motion.div
      className="fmsp-card"
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -8, boxShadow: "0 32px 64px rgba(15, 23, 42, 0.12)", transition: { duration: 0.3 } }}
    >
      {/* Plan Name */}
      <div className="fmsp-card-header">
        <h3 className="fmsp-plan-name">{plan.name}</h3>
        <p className="fmsp-plan-meta">
          <span>{plan.users}</span>
          <span className="fmsp-meta-dot">·</span>
          <span>{plan.platform}</span>
        </p>
      </div>

      {/* Price Display */}
      <div className="fmsp-price-block">
        {plan.originalPrice !== "Custom" ? (
          <>
            <span className="fmsp-original-price">{plan.originalPrice}</span>
            <span className="fmsp-discount-badge">{plan.discountPercent}</span>
            <div className="fmsp-discounted-row">
              <span className="fmsp-discounted-price">{plan.discountedPrice}</span>
              {plan.period && <span className="fmsp-price-period">{plan.period}</span>}
            </div>
          </>
        ) : (
          <>
            <div className="fmsp-custom-label">Enterprise Pricing</div>
            <div className="fmsp-discounted-row">
              <span className="fmsp-discounted-price fmsp-contact-price">{plan.discountedPrice}</span>
            </div>
          </>
        )}
      </div>

      {/* Divider */}
      <div className="fmsp-divider" />

      {/* Features List */}
      <ul className="fmsp-features-list">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="fmsp-feature-item">
            <span className="fmsp-check-icon">✓</span>
            <span className="fmsp-feature-text">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Modules Included */}
      <div className="fmsp-modules-section">
        <div className="fmsp-modules-header-row">
          <p className="fmsp-modules-label">Modules Included</p>
          {hasMoreModules && (
            <button
              type="button"
              className="fmsp-modules-toggle-btn"
              onClick={() => setShowAllModules((prev) => !prev)}
            >
              <span>
                {showAllModules
                  ? "Show less"
                  : `+${cardModules.length - DEFAULT_MODULE_LIMIT} more`}
              </span>
              {showAllModules ? (
                <FiChevronUp className="fmsp-toggle-icon" />
              ) : (
                <FiChevronDown className="fmsp-toggle-icon" />
              )}
            </button>
          )}
        </div>
        <div className="fmsp-modules-grid">
          {visibleModules.map((mod) => {
            const IconComponent = mod.icon;
            return (
              <div key={mod.id} className="fmsp-module-chip">
                <IconComponent className="fmsp-module-chip-icon" />
                <span className="fmsp-module-chip-name">{mod.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Button */}
      <div className="fmsp-card-action">
        <button
          className={`fmsp-btn ${isCustomize ? "fmsp-btn-outline" : "fmsp-btn-primary"}`}
          onClick={handleButtonClick}
        >
          {plan.buttonText}
        </button>
      </div>
    </motion.div>
  );
};

// ─── Products Included Grid ──

const ProductsIncluded = () => {
  return (
    <motion.div
      className="fmsp-products-section"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="fmsp-products-header">
        <h3 className="fmsp-products-title">Products Included</h3>
        <p className="fmsp-products-desc">
          All plans include access to our core suite of facility management modules.
          Higher plans unlock more advanced capabilities.
        </p>
      </div>

      <div className="fmsp-products-grid">
        {fmModules.map((mod, idx) => {
          const IconComponent = mod.icon;
          return (
            <motion.div
              key={mod.id}
              className="fmsp-product-card"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.4, delay: idx * 0.04 } }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <div className="fmsp-product-icon-wrap">
                <IconComponent className="fmsp-product-icon" />
              </div>
              <span className="fmsp-product-name">{mod.name}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const FMCompanyPackages = () => {
  const [plans, setPlans] = useState(fmSaasPlans);
  const { location, loading } = useLocation();

  useEffect(() => {
    let active = true;
    const fetchPlans = async () => {
      try {
        const countryCode = location?.country_code || "US";
        const response = await getFMCompanyPackages(countryCode);
        if (active && response) {
          const rawPlans = Array.isArray(response)
            ? response
            : (response.response || response.data || response.result || response.packages || []);

          if (Array.isArray(rawPlans) && rawPlans.length > 0) {

            const apiPlans = rawPlans
              .slice()
              .sort((a, b) => {
                const planOrder = ["starter", "business", "business pro", "customize"];
                const nameA = (a.planName || "").toLowerCase().trim();
                const nameB = (b.planName || "").toLowerCase().trim();
                
                const indexA = planOrder.indexOf(nameA);
                const indexB = planOrder.indexOf(nameB);
                
                if (indexA !== -1 && indexB !== -1) return indexA - indexB;
                if (indexA !== -1) return -1;
                if (indexB !== -1) return 1;
                
                const priceA = a.price ?? a.planPrice ?? 0;
                const priceB = b.price ?? b.planPrice ?? 0;
                return priceA - priceB;
              })
              .map((plan) => mapApiPlanToUiPlan(plan, countryCode));

            // Append static "Customize" plan at the end
            const customizePlan = fmSaasPlans.find((plan) => plan.id === "customize");
            if (customizePlan) {
              apiPlans.push(customizePlan);
            }

            setPlans(apiPlans);
          }
        }
      } catch (error) {
        console.error("Failed to load plans from API, using static data fallback:", error);
      }
    };

    if (!loading) {
      fetchPlans();
    }
    return () => {
      active = false;
    };
  }, [location, loading]);

  return (
    <section className="fmsp-section" id="fm-companies">
      <div className="fmsp-container">

        {/* Section Header */}
        <motion.div
          className="fmsp-section-header"
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="fmsp-badge">
            <FiTag className="fmsp-badge-icon" />
            PRICING PLANS
          </span>
          <h2 className="fmsp-heading">Choose the Perfect Plan</h2>
          <p className="fmsp-description">
            Flexible pricing plans designed for businesses of every size.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="fmsp-cards-grid">
          {plans.map((plan, idx) => (
            <SaasPricingCard key={plan.id || idx} plan={plan} index={idx} countryCode={location?.country_code || "US"} />
          ))}
        </div>

        {/* Products Included */}
        <ProductsIncluded />

      </div>
    </section>
  );
};

export default React.memo(FMCompanyPackages);

