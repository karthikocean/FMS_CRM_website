import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiClock, FiCalendar, FiUser, FiArrowRight, FiBookOpen, FiTag } from 'react-icons/fi';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogsData, blogCategories } from '../data/blogsData';
import { blogsSeo } from '../data/mainPagesSeoData';
import '../styles/BlogsPage.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const BlogsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter posts by category and search query
  const filteredPosts = useMemo(() => {
    return blogsData.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = blogsData.find((p) => p.featured) || blogsData[0];
  const regularPosts = filteredPosts.filter((p) => p.id !== featuredPost.id || selectedCategory !== 'All' || searchQuery !== '');

  return (
    <div className="blogs-page-wrapper">
      <SEO {...blogsSeo} />
      <Navbar />

      {/* Header Banner Section */}
      <section className="blogs-header-section" aria-label="Blog Header">
        <div className="blogs-header-glow" aria-hidden="true"></div>
        <div className="blogs-header-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="blogs-badge">
              <FiBookOpen /> FACILITYCORE INSIGHTS
            </span>
            <h1 className="blogs-title">
              Smart Facility Management <span className="blogs-title-highlight">& Technology Blog</span>
            </h1>
            <p className="blogs-subtitle">
              Expert articles, guides, and trends on CAFM, CMMS, preventive maintenance, IoT sensors, and enterprise real estate operations.
            </p>

            {/* Instant Search Bar */}
            <div className="blogs-search-wrapper">
              <FiSearch className="blogs-search-icon" aria-hidden="true" />
              <input
                type="text"
                className="blogs-search-input"
                placeholder="Search articles by keyword, topic, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search blog articles"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="blogs-content-container">

        {/* Category Filter Pills */}
        <div className="blogs-category-bar" role="tablist" aria-label="Blog Categories">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              className={`blogs-category-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
              role="tab"
              aria-selected={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post Banner (Only when viewing All and no search query) */}
        {selectedCategory === 'All' && !searchQuery && featuredPost && (
          <motion.article
            className="blogs-featured-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="blogs-featured-image-wrapper">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                loading="lazy"
                decoding="async"
                className="blogs-featured-image"
              />
              <span className="blogs-featured-badge">Featured Insight</span>
            </div>

            <div className="blogs-featured-body">
              <div className="blogs-post-meta">
                <span className="blogs-post-meta-item">
                  <FiTag /> {featuredPost.category}
                </span>
                <span>•</span>
                <span className="blogs-post-meta-item">
                  <FiCalendar /> {featuredPost.date}
                </span>
                <span>•</span>
                <span className="blogs-post-meta-item">
                  <FiClock /> {featuredPost.readTime}
                </span>
              </div>

              <h2 className="blogs-featured-title">
                <Link to={`/blogs/${featuredPost.slug}`} className="hover:text-blue-600 transition-colors">
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="blogs-featured-excerpt">{featuredPost.excerpt}</p>

              <div className="blogs-author-bar">
                <img
                  src={featuredPost.authorAvatar}
                  alt={featuredPost.author}
                  className="blogs-author-avatar"
                />
                <div>
                  <div className="blogs-author-name">{featuredPost.author}</div>
                  <div className="blogs-author-role">{featuredPost.authorRole}</div>
                </div>

                <Link
                  to={`/blogs/${featuredPost.slug}`}
                  className="blogs-read-btn ml-auto"
                >
                  Read Article <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.article>
        )}

        {/* Regular Articles Grid */}
        <motion.div
          className="blogs-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <motion.article key={post.id} className="blog-card" variants={fadeUp}>
                <div className="blog-card-img-wrapper">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="blog-card-img"
                  />
                  <span className="blog-card-category">{post.category}</span>
                </div>

                <div className="blog-card-body">
                  <div className="blogs-post-meta">
                    <span className="blogs-post-meta-item">
                      <FiCalendar /> {post.date}
                    </span>
                    <span>•</span>
                    <span className="blogs-post-meta-item">
                      <FiClock /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="blog-card-title">
                    <Link to={`/blogs/${post.slug}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="blog-card-excerpt">{post.excerpt}</p>

                  <div className="blog-card-footer">
                    <div className="blogs-author-bar">
                      <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="blogs-author-avatar !w-8 !h-8"
                      />
                      <span className="blogs-author-name text-xs">{post.author}</span>
                    </div>

                    <Link to={`/blogs/${post.slug}`} className="blogs-read-btn text-xs">
                      Read <FiArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-500 text-lg">No articles found matching "{searchQuery}".</p>
              <button
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold"
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </motion.div>

        {/* Newsletter / CTA Banner */}
        <section className="blogs-cta-banner" aria-label="Subscribe to Insights">
          <h2 className="blogs-cta-title">Supercharge Your Facility Operations</h2>
          <p className="blogs-cta-desc">
            Join thousands of facility leaders receiving expert maintenance guides, technology updates, and enterprise best practices.
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

      </main>

      <Footer />
    </div>
  );
};

export default React.memo(BlogsPage);
