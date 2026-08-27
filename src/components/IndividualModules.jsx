import React from "react";
import { FiBox } from "react-icons/fi";
import PricingCard from "./PricingCard";
import { individualModules } from "../data/pricingData";
import useLocation from "../hooks/useLocation";
import "../styles/IndividualModules.css";

const IndividualModules = () => {
  const { location } = useLocation();
  const countryCode = location?.country_code || "US";
  const isIN = countryCode === "IN";

  return (
    <section className="individual-modules-section" id="modules">
      <div className="pricing-section-header">
        <span className="fmsp-badge">
          <FiBox className="fmsp-badge-icon" />
          STANDALONE MODULES
        </span>
        <h2 className="fmsp-heading">Individual Modules</h2>
        <p className="fmsp-description">
          Only pay for what you need. Standardize operations by purchasing individual platform modules separately.
        </p>
      </div>

      <div className="modules-cards-grid">
        {individualModules.map((item, idx) => {
          const isUsd = !isIN;
          const pricingData = isUsd ? item.usd : item.inr;

          const priceVal = pricingData?.price ?? 0;
          const platformFeeVal = pricingData?.platformFee ?? 0;
          const totalVal = priceVal + platformFeeVal;

          const formatVal = (val) => {
            if (Number.isInteger(val)) return val.toLocaleString();
            return Number(val.toFixed(2)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          };

          const symbol = isUsd ? "$" : "₹";
          const priceDisplay = `${symbol}${formatVal(priceVal)}`;
          const platformFeeDisplay = `${symbol}${formatVal(platformFeeVal)}`;
          const totalDisplay = `${symbol}${formatVal(totalVal)}`;

          return (
            <PricingCard
              key={idx}
              title={item.name}
              price={priceDisplay}
              period="/mo"
              icon={item.icon}
              platformFee={platformFeeDisplay}
              total={totalDisplay}
              cta={null}
              className="module-pricing-card"
            />
          );
        })}
      </div>
    </section>
  );
};

export default React.memo(IndividualModules);
