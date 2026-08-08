import React, { useEffect } from 'react';

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
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let descriptionTag = document.querySelector(
        'meta[name="description"]'
      );

      if (!descriptionTag) {
        descriptionTag = document.createElement('meta');
        descriptionTag.setAttribute('name', 'description');
        document.head.appendChild(descriptionTag);
      }

      descriptionTag.setAttribute('content', description);
    }

    if (keywords) {
      let keywordsTag = document.querySelector(
        'meta[name="keywords"]'
      );

      if (!keywordsTag) {
        keywordsTag = document.createElement('meta');
        keywordsTag.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsTag);
      }

      keywordsTag.setAttribute('content', keywords);
    }

    if (ogTitle || title) {
      const ogTitleTag = document.querySelector(
        'meta[property="og:title"]'
      );

      if (ogTitleTag) {
        ogTitleTag.setAttribute(
          'content',
          ogTitle || title
        );
      }
    }

    if (ogDescription || description) {
      const ogDescriptionTag = document.querySelector(
        'meta[property="og:description"]'
      );

      if (ogDescriptionTag) {
        ogDescriptionTag.setAttribute(
          'content',
          ogDescription || description
        );
      }
    }

    if (canonical) {
      const canonicalTag = document.querySelector(
        'link[rel="canonical"]'
      );

      if (canonicalTag) {
        canonicalTag.setAttribute('href', canonical);
      }
    }
  }, [
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
