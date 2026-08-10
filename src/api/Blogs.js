const API_BASE_URL = import.meta.env.VITE_API_URL || "https://api.facilitycore.in/api/v1";
const IMAGE_BASE_URL = "https://api.facilitycore.in/api";

/**
 * Resolves an image/thumbnail URL relative to the backend server or as an absolute URL.
 * 
 * @param {string} url The image URL or relative path.
 * @returns {string} Fully resolved image URL or empty string.
 */
export const getImageUrl = (url) => {
  if (!url) return "";
  if (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("blob:") ||
    url.startsWith("data:")
  ) {
    return url;
  }
  return `${IMAGE_BASE_URL.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;
};

/**
 * Fetches published blogs for the public website.
 * Endpoint: POST /blog/website-list
 * 
 * @param {Object} params Pagination and filter parameters (e.g. { page: 0, limit: 100, search: "" })
 * @returns {Promise<Object>} API response with list of published blogs and pagination data.
 */
export const getWebsiteBlogs = async (params = { page: 0, limit: 100 }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/blog/website-list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching website blogs:", error);
    return { status: false, data: [], list: [] };
  }
};

/**
 * Fetches detailed information for a single published blog by ID.
 * Endpoint: GET /blog/website-details/:id
 * 
 * @param {string} id The blog ID.
 * @returns {Promise<Object|null>} API response with blog details or null.
 */
export const getWebsiteBlogDetails = async (id) => {
  if (!id) return null;
  try {
    const response = await fetch(`${API_BASE_URL}/blog/website-details/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return null;
    }

    const result = await response.json();
    if (result && (result.statusCode === 200 || result.status === 200 || result.status === true)) {
      return result.data || result;
    }
    return result?.data || null;
  } catch (error) {
    console.error("Error fetching blog details:", error);
    return null;
  }
};

/**
 * Maps a blog object from the backend API structure to the UI structure expected by the frontend.
 * 
 * @param {Object} apiBlog The raw blog object from the backend database.
 * @returns {Object} Formatted blog object ready for rendering.
 */
export const mapApiBlogToUiBlog = (apiBlog) => {
  if (!apiBlog) return null;

  const rawImage =
    apiBlog.thumbnail ||
    apiBlog.image ||
    apiBlog.thumbnailUrl ||
    apiBlog.thumbnailImage ||
    (apiBlog.imageDetails && apiBlog.imageDetails[0]?.url) ||
    "";

  // Format date to human-readable format
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return "";
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "";
    }
  };

  // Estimate reading time based on word count
  const calculateReadTime = (content) => {
    if (!content) return "";
    const textOnly = content.replace(/<[^>]*>/g, "");
    const words = textOnly.trim().split(/\s+/).filter(Boolean).length;
    if (words === 0) return "";
    const minutes = Math.ceil(words / 200);
    return `${Math.max(1, minutes)} min read`;
  };

  // Auto-generate clean URL slug
  const slug =
    apiBlog.slug ||
    (apiBlog.title
      ? apiBlog.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "")
      : apiBlog._id || apiBlog.id);

  // Auto-generate excerpt if not present
  const excerpt =
    apiBlog.excerpt ||
    (apiBlog.content
      ? apiBlog.content
          .replace(/<[^>]*>/g, "")
          .trim()
          .slice(0, 160) + "..."
      : "");

  return {
    id: apiBlog._id || apiBlog.id,
    _id: apiBlog._id || apiBlog.id,
    slug: slug,
    title: apiBlog.title || "",
    excerpt: excerpt,
    content: apiBlog.content || "",
    category: apiBlog.category || "",
    author: apiBlog.author || "",
    authorRole: apiBlog.authorRole || "",
    authorAvatar: apiBlog.authorAvatar ? getImageUrl(apiBlog.authorAvatar) : "",
    date: formatDate(apiBlog.createdAt || apiBlog.date),
    createdAt: apiBlog.createdAt,
    readTime: calculateReadTime(apiBlog.content),
    image: getImageUrl(rawImage),
    tags: Array.isArray(apiBlog.tags) ? apiBlog.tags.filter(Boolean) : [],
    featured: Boolean(apiBlog.featured),
    status: apiBlog.status || "Published",
  };
};
