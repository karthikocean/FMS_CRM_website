import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Reusable Production SEO Component powered by react-helmet-async.
 * Injects metadata, Open Graph tags, Twitter cards, canonical tags, alternate URLs,
 * preconnect links, and structured JSON-LD schemas into document <head>.
 */
const SEO = ({
  title,
  description,
  keywords,
  canonical,
  robots = 'index, follow',
  ogTitle,
  ogDescription,
  ogType = 'website',
  ogUrl,
  ogImage = 'https://facilitycore.in/CommercialBuildingimg.png',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  author = 'FacilityCore',
  themeColor = '#0F172A',
  schemas = []
}) => {
  const pageTitle = title || 'Facility Management Software & CMMS Platform | FacilityCore';
  const pageDesc = description || 'FacilityCore is an enterprise-grade smart facility management software (CAFM & CMMS) for building operations, asset management, and preventive maintenance.';
  const pageCanonical = canonical || 'https://facilitycore.in/';
  const pageOgTitle = ogTitle || pageTitle;
  const pageOgDesc = ogDescription || pageDesc;
  const pageOgUrl = ogUrl || pageCanonical;
  const pageOgImage = ogImage || 'https://facilitycore.in/CommercialBuildingimg.png';
  const pageTwitterTitle = twitterTitle || pageTitle;
  const pageTwitterDesc = twitterDescription || pageDesc;
  const pageTwitterImage = twitterImage || pageOgImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <meta name="author" content={author} />
      <meta name="theme-color" content={themeColor} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical & Language Alternate Tags */}
      <link rel="canonical" href={pageCanonical} />
      <link rel="alternate" href={pageCanonical} hrefLang="x-default" />
      <link rel="alternate" href={pageCanonical} hrefLang="en" />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="FacilityCore" />
      <meta property="og:title" content={pageOgTitle} />
      <meta property="og:description" content={pageOgDesc} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageOgUrl} />
      <meta property="og:image" content={pageOgImage} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={pageTwitterTitle} />
      <meta name="twitter:description" content={pageTwitterDesc} />
      <meta name="twitter:image" content={pageTwitterImage} />

      {/* Preconnect & Performance Links */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

      {/* JSON-LD Schemas */}
      {Array.isArray(schemas) &&
        schemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
    </Helmet>
  );
};

export default React.memo(SEO);
