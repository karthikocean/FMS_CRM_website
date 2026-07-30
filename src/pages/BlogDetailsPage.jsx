import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiClock, FiTag, FiUser, FiArrowRight } from 'react-icons/fi';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogsData } from '../data/blogsData';
import '../styles/BlogsPage.css';

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const post = blogsData.find((p) => p.slug === slug) || blogsData[0];

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://facilitycore.in${post.image}`,
    "datePublished": "2026-07-28T08:00:00+05:30",
    "dateModified": "2026-07-28T08:00:00+05:30",
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": post.authorRole
    },
    "publisher": {
      "@type": "Organization",
      "name": "FacilityCore",
      "logo": {
        "@type": "ImageObject",
        "url": "https://facilitycore.in/Facility_Core_logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://facilitycore.in/blogs/${post.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://facilitycore.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": "https://facilitycore.in/blogs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://facilitycore.in/blogs/${post.slug}`
      }
    ]
  };

  return (
    <div className="blogs-page-wrapper">
      <SEO
        title={`${post.title} | FacilityCore Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        canonical={`https://facilitycore.in/blogs/${post.slug}`}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        ogImage={`https://facilitycore.in${post.image}`}
        ogUrl={`https://facilitycore.in/blogs/${post.slug}`}
        schemas={[blogPostSchema, breadcrumbSchema]}
      />

      <Navbar />

      <article className="blog-detail-container">
        <Link to="/blogs" className="blog-detail-back">
          <FiArrowLeft aria-hidden="true" /> Back to All Articles
        </Link>

        <div className="blogs-post-meta mb-4">
          <span className="blogs-post-meta-item">
            <FiTag /> {post.category}
          </span>
          <span>•</span>
          <span className="blogs-post-meta-item">
            <FiCalendar /> {post.date}
          </span>
          <span>•</span>
          <span className="blogs-post-meta-item">
            <FiClock /> {post.readTime}
          </span>
        </div>

        <h1 className="blog-detail-title">{post.title}</h1>

        <div className="blogs-author-bar my-6">
          <img
            src={post.authorAvatar}
            alt={post.author}
            className="blogs-author-avatar !w-12 !h-12"
          />
          <div>
            <div className="blogs-author-name">{post.author}</div>
            <div className="blogs-author-role">{post.authorRole}</div>
          </div>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="blog-detail-hero-img"
        />

        <div
          className="blog-detail-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-2">
          <span className="font-semibold text-gray-700 mr-2">Tags:</span>
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA Box */}
        <section className="blogs-cta-banner mt-16" aria-label="Book Demo CTA">
          <h2 className="blogs-cta-title">Ready to Automate Your Facility Operations?</h2>
          <p className="blogs-cta-desc">
            Discover how FacilityCore's smart CMMS & CAFM platform improves equipment uptime and maintenance SLA compliance.
          </p>
          <a
            href="https://admin.facilitycore.in/register"
            target="_blank"
            rel="noopener noreferrer"
            className="blogs-cta-btn"
          >
            Book Free Demo <FiArrowRight aria-hidden="true" />
          </a>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default React.memo(BlogDetailsPage);
