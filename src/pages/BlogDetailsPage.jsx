import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiArrowLeft, 
  FiCalendar, 
  FiClock, 
  FiTag, 
  FiUser, 
  FiArrowRight, 
  FiInbox, 
  FiLoader,
  FiShare2,
  FiBookOpen,
  FiChevronRight
} from 'react-icons/fi';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DOMPurify from 'dompurify';
import { getWebsiteBlogs, getWebsiteBlogDetails, mapApiBlogToUiBlog } from '../api/Blogs';
import '../styles/BlogsPage.css';

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track reading scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        // 1. Try direct ID fetch using /v1/blog/website-details/:id
        if (slug) {
          const detail = await getWebsiteBlogDetails(slug);
          if (isMounted && detail && (detail._id || detail.title)) {
            setPost(mapApiBlogToUiBlog(detail));
            setLoading(false);
            return;
          }
        }

        // 2. If direct ID fetch returns null, check website list in case param was slug or custom ID
        const response = await getWebsiteBlogs({ page: 0, limit: 100 });
        const items = response?.data?.list || response?.data || response?.list || [];
        if (Array.isArray(items) && items.length > 0) {
          const mapped = items.map(mapApiBlogToUiBlog).filter(Boolean);
          const found = mapped.find(
            (p) =>
              String(p.id) === String(slug) ||
              String(p._id) === String(slug) ||
              p.slug === slug
          );

          if (isMounted && found) {
            setPost(found);
            setLoading(false);
            return;
          }
        }

        if (isMounted) {
          setError('No data found for this blog post.');
          setPost(null);
        }
      } catch (err) {
        console.error('Error loading blog detail:', err);
        if (isMounted) {
          setError('Failed to load blog post.');
          setPost(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchDetail();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title || 'FacilityCore Blog',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="blogs-page-wrapper">
      {/* Top Reading Progress Bar */}
      <div 
        className="blogs-reading-progress" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <SEO
        title={post ? `${post.title} | FacilityCore Blog` : 'Facility Management Insights | FacilityCore'}
        description={post ? post.excerpt : 'Read smart facility management insights and technology articles on FacilityCore.'}
        keywords="facility management guide, maintenance strategy article, building operations trends"
      />

      <Navbar />

      {/* Hero / Header Section for Detail Page */}
      <div className="blog-detail-header-wrapper">
        <div className="blog-detail-header-container">
          {/* Breadcrumb Navigation */}
          <nav className="blog-detail-breadcrumbs" aria-label="Breadcrumbs">
            <Link to="/" className="blog-breadcrumb-link">Home</Link>
            <FiChevronRight className="blog-breadcrumb-sep" />
            <Link to="/blogs" className="blog-breadcrumb-link">Knowledge Hub</Link>
            {post && (
              <>
                <FiChevronRight className="blog-breadcrumb-sep" />
                <span className="blog-breadcrumb-current">{post.title}</span>
              </>
            )}
          </nav>

          <Link to="/blogs" className="blog-detail-back-btn">
            <FiArrowLeft aria-hidden="true" /> Back to Knowledge Hub
          </Link>
        </div>
      </div>

      <article className="blog-detail-container">
        {loading ? (
          <div className="blogs-detail-skeleton">
            <div className="blog-skeleton-meta"></div>
            <div className="blog-skeleton-title large"></div>
            <div className="blog-skeleton-author-bar"></div>
            <div className="blog-skeleton-hero-img"></div>
            <div className="blog-skeleton-text"></div>
            <div className="blog-skeleton-text"></div>
            <div className="blog-skeleton-text short"></div>
          </div>
        ) : !post || error ? (
          <div className="blogs-empty-card my-12">
            <div className="blogs-empty-icon-wrap">
              <FiInbox className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Article Not Found</h2>
            <p className="text-slate-500 text-sm mb-6 max-w-md">
              {error || "The requested blog article could not be found or has not been published yet."}
            </p>
            <Link
              to="/blogs"
              className="blogs-reset-btn inline-flex items-center gap-2"
            >
              <FiArrowLeft /> Back to Knowledge Hub
            </Link>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Metadata Bar */}
            <div className="blogs-post-meta mb-4">
              {post.category && (
                <>
                  <span className="blogs-post-meta-category">
                    <FiTag className="w-3.5 h-3.5" /> {post.category}
                  </span>
                  <span className="blogs-meta-dot">•</span>
                </>
              )}
              {post.date && (
                <>
                  <span className="blogs-post-meta-item">
                    <FiCalendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span className="blogs-meta-dot">•</span>
                </>
              )}
              {post.readTime && (
                <span className="blogs-post-meta-item">
                  <FiClock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              )}
            </div>

            {/* Main Headline */}
            <h1 className="blog-detail-title">{post.title}</h1>

            {/* Author Profile Card & Share Action */}
            <div className="blog-detail-author-section">
              <div className="blogs-author-bar">
                {post.authorAvatar ? (
                  <img
                    src={post.authorAvatar}
                    alt={post.author || 'Author'}
                    className="blog-detail-author-avatar"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                ) : (
                  <div className="blog-detail-author-avatar-fallback">
                    {post.author ? post.author.charAt(0).toUpperCase() : <FiUser />}
                  </div>
                )}
                <div>
                  <div className="blog-detail-author-name">{post.author || 'FacilityCore Contributor'}</div>
                  {post.authorRole && (
                    <div className="blog-detail-author-role">{post.authorRole}</div>
                  )}
                </div>
              </div>

              <button 
                onClick={handleShare}
                className="blog-share-btn"
                aria-label="Share article"
                title="Share article"
              >
                <FiShare2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>

            {/* Hero Image */}
            {post.image && (
              <div className="blog-detail-img-wrap">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-detail-hero-img"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            )}

            {/* Rich HTML Content Body */}
            <div
              className="blog-detail-content"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.content || '', {
                  ADD_TAGS: ['iframe'],
                  ADD_ATTR: ['target', 'style', 'class', 'type', 'start', 'allowfullscreen', 'frameborder'],
                }),
              }}
            />

            {/* Article Tags */}
            {Array.isArray(post.tags) && post.tags.length > 0 && (
              <div className="blog-detail-tags-section">
                <span className="blog-tags-label">Related Topics:</span>
                <div className="blog-tags-list">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="blog-tag-pill">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Box */}
            <section className="blogs-cta-banner mt-16" aria-label="Book Demo CTA">
              <div className="blogs-cta-glow" aria-hidden="true"></div>
              <div className="blogs-cta-content">
                <span className="blogs-cta-tag">ENTERPRISE CAFM & CMMS</span>
                <h2 className="blogs-cta-title">Ready to Automate Your Facility Operations?</h2>
                <p className="blogs-cta-desc">
                  Discover how FacilityCore's unified maintenance and facility management platform maximizes asset lifespan and SLA compliance.
                </p>
                <div className="blogs-cta-actions">
                  <a
                    href="https://admin.facilitycore.in/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blogs-cta-btn primary"
                  >
                    Book Free Demo <FiArrowRight aria-hidden="true" />
                  </a>
                  <Link to="/contact" className="blogs-cta-btn secondary">
                    Talk to an Expert
                  </Link>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </article>

      <Footer />
    </div>
  );
};

export default React.memo(BlogDetailsPage);
