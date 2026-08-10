import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, 
  FiClock, 
  FiCalendar, 
  FiUser, 
  FiArrowRight, 
  FiBookOpen, 
  FiTag, 
  FiInbox, 
  FiX, 
  FiLayers,
  FiTrendingUp,
  FiFileText,
  FiZap,
  FiShield,
  FiSliders
} from 'react-icons/fi';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getWebsiteBlogs, mapApiBlogToUiBlog } from '../api/Blogs';
import '../styles/BlogsPage.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 }
  }
};

// Generates consistent modern gradient backgrounds for blogs without images
const getCardGradient = (index) => {
  const gradients = [
    'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
    'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)',
    'linear-gradient(135deg, #4338CA 0%, #6366F1 100%)',
    'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
    'linear-gradient(135deg, #0369A1 0%, #38BDF8 100%)',
    'linear-gradient(135deg, #701A75 0%, #D946EF 100%)'
  ];
  return gradients[index % gradients.length];
};

// Interactive Spotlight Card Component with mouse tracking glow
const SpotlightBlogCard = ({ post, idx }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.article 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      layout
      layoutId={post.id || post._id || `blog-${idx}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="blog-card spotlight-card"
    >
      <Link 
        to={`/blogs/${post.id || post._id || post.slug}`} 
        className="blog-card-link-wrapper"
      >
        {/* Card Image / Branded Thumbnail */}
        <div className="blog-card-img-wrapper">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              decoding="async"
              className="blog-card-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextElementSibling) {
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }
              }}
            />
          ) : null}

          <div 
            className="blog-card-gradient-fallback" 
            style={{ 
              background: getCardGradient(idx),
              display: post.image ? 'none' : 'flex'
            }}
          >
            <div className="blog-fallback-pattern"></div>
            <FiFileText className="blog-fallback-icon" />
            {post.category && (
              <span className="blog-fallback-watermark">{post.category}</span>
            )}
          </div>

          {post.category && (
            <span className="blog-card-category">{post.category}</span>
          )}
        </div>

        {/* Card Content Body */}
        <div className="blog-card-body">
          {/* Metadata row */}
          <div className="blogs-post-meta">
            {post.date && (
              <span className="blogs-post-meta-item">
                <FiCalendar className="w-3.5 h-3.5 text-blue-500" /> {post.date}
              </span>
            )}
            {post.date && post.readTime && <span className="blogs-meta-dot">•</span>}
            {post.readTime && (
              <span className="blogs-post-meta-item">
                <FiClock className="w-3.5 h-3.5 text-cyan-500" /> {post.readTime}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="blog-card-title">
            {post.title}
          </h3>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="blog-card-excerpt">{post.excerpt}</p>
          )}

          {/* Footer with author and animated read button */}
          <div className="blog-card-footer">
            <div className="blogs-author-bar">
              {post.authorAvatar ? (
                <img
                  src={post.authorAvatar}
                  alt={post.author || 'Author'}
                  className="blogs-author-avatar"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              ) : (
                <div className="blogs-author-avatar-fallback">
                  {post.author ? post.author.charAt(0).toUpperCase() : <FiUser />}
                </div>
              )}
              <span className="blogs-author-name">{post.author || 'FacilityCore Team'}</span>
            </div>

            <span className="blogs-read-action">
              Read <FiArrowRight className="blogs-arrow-icon" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

const BlogsPage = () => {
  const [blogsList, setBlogsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'oldest'

  useEffect(() => {
    let isMounted = true;

    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await getWebsiteBlogs({ page: 0, limit: 100 });
        const items = response?.data?.list || response?.data || response?.list || [];

        if (isMounted) {
          if (Array.isArray(items) && items.length > 0) {
            const mappedBlogs = items.map(mapApiBlogToUiBlog).filter(Boolean);
            setBlogsList(mappedBlogs);
          } else {
            setBlogsList([]);
          }
        }
      } catch (err) {
        console.error('Error fetching blogs from API:', err);
        if (isMounted) {
          setBlogsList([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  // Compute available categories with article counts dynamically from API results
  const categoryStats = useMemo(() => {
    const counts = { All: blogsList.length };
    blogsList.forEach((post) => {
      if (post.category) {
        counts[post.category] = (counts[post.category] || 0) + 1;
      }
    });
    return counts;
  }, [blogsList]);

  const categories = useMemo(() => {
    return Object.keys(categoryStats);
  }, [categoryStats]);

  // Filter & sort posts by category, search query, and date
  const filteredPosts = useMemo(() => {
    let result = blogsList.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        (post.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.excerpt || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (Array.isArray(post.tags) && post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesSearch;
    });

    // Sorting
    if (sortBy === 'oldest') {
      result = [...result].reverse();
    }

    return result;
  }, [blogsList, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="blogs-page-wrapper">
      <SEO
        title="Facility Management Insights & Knowledge Hub | FacilityCore"
        description="Explore the latest insights, expert guides, and technology trends in smart facility operations, CMMS, CAFM, IoT automation, and enterprise building maintenance."
        keywords="facility management blog, CMMS insights, CAFM software, smart building technology, predictive maintenance"
      />
      <Navbar />

      {/* Modern Animated Hero Banner */}
      <section className="blogs-header-section" aria-label="Blog Header">
        <div className="blogs-header-mesh" aria-hidden="true"></div>
        
        {/* Floating Ambient Glowing Orbs */}
        <motion.div 
          animate={{ 
            y: [0, -25, 0],
            x: [0, 15, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="blogs-header-glow blogs-glow-1" 
          aria-hidden="true" 
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            x: [0, -20, 0],
            scale: [1, 1.12, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="blogs-header-glow blogs-glow-2" 
          aria-hidden="true" 
        />

        <div className="blogs-header-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="blogs-hero-content"
          >
            {/* Pulsing Animated Brand Badge */}
            <motion.div 
              whileHover={{ scale: 1.04 }}
              className="blogs-badge"
            >
              <span className="blogs-badge-dot"></span>
              <FiBookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span>FACILITYCORE KNOWLEDGE HUB</span>
            </motion.div>

            <h1 className="blogs-title">
              Smart Facility Operations <br className="hidden md:block" />
              <span className="blogs-title-highlight">& Modern Building Technology</span>
            </h1>

            <p className="blogs-subtitle">
              Actionable insights, maintenance strategy guides, and technology analysis for modern facility managers and enterprise property leaders.
            </p>

            {/* Feature Stat Highlight Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="blogs-hero-features"
            >
              <div className="blogs-hero-feature-item">
                <FiZap className="text-amber-400" />
                <span>Zero-Downtime Guides</span>
              </div>
              <div className="blogs-hero-feature-item">
                <FiShield className="text-emerald-400" />
                <span>Compliance Ready</span>
              </div>
              <div className="blogs-hero-feature-item">
                <FiTrendingUp className="text-cyan-400" />
                <span>Smart IoT Trends</span>
              </div>
            </motion.div>

            {/* Instant Search Bar */}
            <div className="blogs-search-wrapper">
              <div className="blogs-search-inner">
                <FiSearch className="blogs-search-icon" aria-hidden="true" />
                <input
                  type="text"
                  className="blogs-search-input"
                  placeholder="Search articles by keyword, topic, or tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search blog articles"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="blogs-search-clear-btn"
                    aria-label="Clear search"
                  >
                    <FiX />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="blogs-content-container">

        {/* Loading State with Modern Shimmer Skeletons */}
        {loading ? (
          <div className="blogs-grid">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="blog-card-skeleton">
                <div className="blog-skeleton-img"></div>
                <div className="blog-skeleton-body">
                  <div className="blog-skeleton-meta"></div>
                  <div className="blog-skeleton-title"></div>
                  <div className="blog-skeleton-text"></div>
                  <div className="blog-skeleton-text short"></div>
                  <div className="blog-skeleton-footer"></div>
                </div>
              </div>
            ))}
          </div>
        ) : blogsList.length === 0 ? (
          /* Empty / No Data State */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="blogs-empty-card"
          >
            <div className="blogs-empty-icon-wrap">
              <FiInbox className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="blogs-empty-title">No Articles Published Yet</h3>
            <p className="blogs-empty-desc">
              There are currently no published blog articles available in the hub. Check back shortly for industry-leading insights and tutorials.
            </p>
          </motion.div>
        ) : (
          <>
            {/* Category Filter Navigation Bar with Sliding Animated Pill */}
            <div className="blogs-filter-header">
              <div className="blogs-category-bar" role="tablist" aria-label="Blog Categories">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      className={`blogs-category-pill ${isActive ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                      role="tab"
                      aria-selected={isActive}
                    >
                      {/* Animated sliding background pill */}
                      {isActive && (
                        <motion.div
                          layoutId="activeCategoryPill"
                          className="blogs-category-active-bg"
                          transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10">{cat}</span>
                      <span className={`blogs-category-count relative z-10 ${isActive ? 'active' : ''}`}>
                        {categoryStats[cat] || 0}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Controls bar: Results counter & Sort toggle */}
              <div className="blogs-filter-controls">
                <div className="blogs-results-count">
                  Showing <strong>{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'article' : 'articles'}
                </div>

                <div className="blogs-sort-wrapper">
                  <FiSliders className="w-3.5 h-3.5 text-slate-400" />
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="blogs-sort-select"
                    aria-label="Sort articles"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Articles Grid with Framer Motion Layout animations */}
            {filteredPosts.length > 0 ? (
              <motion.div
                layout
                className="blogs-grid"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <AnimatePresence>
                  {filteredPosts.map((post, idx) => (
                    <SpotlightBlogCard 
                      key={post.id || post._id || `post-${idx}`} 
                      post={post} 
                      idx={idx} 
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              /* No Results for Search/Filter */
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="blogs-no-results-card"
              >
                <div className="blogs-no-results-icon">
                  <FiSearch className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No matching articles found</h3>
                <p className="text-slate-500 text-sm max-w-md mb-6">
                  We couldn't find any articles matching "{searchQuery}". Try searching for other keywords like CMMS, IoT, energy, or maintenance.
                </p>
                <button
                  className="blogs-reset-btn"
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                >
                  Reset Search & Filters
                </button>
              </motion.div>
            )}
          </>
        )}

        {/* Newsletter & Free Demo Banner with Animated Glow */}
        <section className="blogs-cta-banner" aria-label="Subscribe to Insights">
          <div className="blogs-cta-glow" aria-hidden="true"></div>
          <div className="blogs-cta-content">
            <span className="blogs-cta-tag">GET STARTED TODAY</span>
            <h2 className="blogs-cta-title">Streamline Your Entire Facility Operations</h2>
            <p className="blogs-cta-desc">
              Join leading facility teams automating preventive maintenance, assets, and service compliance on FacilityCore.
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
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default React.memo(BlogsPage);
