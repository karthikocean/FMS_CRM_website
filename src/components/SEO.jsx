import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoDataForPath } from '../data/routeSeoData';

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl
}) => {
  let location;
  try {
    location = useLocation();
  } catch (e) {
    location = { pathname: typeof window !== 'undefined' ? window.location.pathname : '' };
  }

  useEffect(() => {
    const routeSeo = getSeoDataForPath(location.pathname);

    const finalTitle = routeSeo?.title || title;
    const finalDescription = routeSeo?.description || description;
    const finalKeywords = routeSeo?.keywords || keywords;
    const finalCanonical = routeSeo?.canonical || canonical;
    const finalOgTitle = routeSeo?.title || ogTitle || finalTitle;
    const finalOgDescription = routeSeo?.description || ogDescription || finalDescription;
    const finalOgImage = routeSeo?.image || ogImage;

    if (finalTitle) {
      document.title = finalTitle;
    }

    if (finalDescription) {
      let descriptionTag = document.querySelector(
        'meta[name="description"]'
      );

      if (!descriptionTag) {
        descriptionTag = document.createElement('meta');
        descriptionTag.setAttribute('name', 'description');
        document.head.appendChild(descriptionTag);
      }

      descriptionTag.setAttribute('content', finalDescription);
    }

    if (finalKeywords) {
      let keywordsTag = document.querySelector(
        'meta[name="keywords"]'
      );

      if (!keywordsTag) {
        keywordsTag = document.createElement('meta');
        keywordsTag.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsTag);
      }

      keywordsTag.setAttribute('content', finalKeywords);
    }

    if (finalOgTitle) {
      const ogTitleTag = document.querySelector(
        'meta[property="og:title"]'
      );

      if (ogTitleTag) {
        ogTitleTag.setAttribute(
          'content',
          finalOgTitle
        );
      }
    }

    if (finalOgDescription) {
      const ogDescriptionTag = document.querySelector(
        'meta[property="og:description"]'
      );

      if (ogDescriptionTag) {
        ogDescriptionTag.setAttribute(
          'content',
          finalOgDescription
        );
      }
    }

    if (finalOgImage) {
      const ogImageTag = document.querySelector(
        'meta[property="og:image"]'
      );

      if (ogImageTag) {
        ogImageTag.setAttribute(
          'content',
          finalOgImage
        );
      }
    }

    if (finalCanonical) {
      let canonicalTag = document.querySelector(
        'link[rel="canonical"]'
      );

      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalTag);
      }

      canonicalTag.setAttribute('href', finalCanonical);
    }
  }, [
    location.pathname,
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl
  ]);

  return null;
};

export default SEO;
