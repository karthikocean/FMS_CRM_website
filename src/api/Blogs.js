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

  // Auto-clean & format HTML content (handles Word paste bullets, MSO comments, orphan <li> tags)
  const formattedContent = cleanAndFormatBlogHtml(apiBlog.content || "");

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
    content: formattedContent,
    rawContent: apiBlog.content || "",
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

/**
 * Cleans and transforms raw HTML blog content into standard, semantic HTML.
 * Intelligently converts MS Word pastes, plain-text numbered lists (1., 2.),
 * alphabetical lists (a., b.), and bullet lists (•, &middot;) into proper <ol>, <ol type="a">, and <ul> structures.
 * 
 * @param {string} html Raw HTML from backend or WYSIWYG editor
 * @returns {string} Clean formatted HTML with proper semantic tags
 */
export const cleanAndFormatBlogHtml = (html) => {
  if (!html || typeof html !== "string") return "";

  let cleaned = html;

  // 1. Process MS Word conditional comments & MSO list tags by detecting list type
  cleaned = cleaned.replace(
    /<!--\s*\[if\s+!supportLists\][\s\S]*?<!--\s*\[endif\]\s*-->|<span[^>]*style="[^"]*mso-list:\s*Ignore[^"]*"[^>]*>[\s\S]*?<\/span>/gi,
    (match) => {
      // Check if it was a number (e.g. 1., 2.), alphabet (e.g. a., b.), or bullet
      if (/\b\d+[\.\)]/i.test(match)) {
        return "<!--MSO_NUM-->";
      } else if (/\b[a-zA-Z][\.\)]/i.test(match)) {
        return "<!--MSO_ALPHA-->";
      }
      return "<!--MSO_BULLET-->";
    }
  );

  // 2. Convert MS Office List paragraphs based on marker
  cleaned = cleaned.replace(
    /<p\b[^>]*>\s*<!--MSO_NUM-->\s*([\s\S]*?)<\/p>/gi,
    (match, text) => {
      const trimmed = text.replace(/^\d+[\.\)]\s*/, "").trim();
      return trimmed ? `<li data-list-type="num">${trimmed}</li>` : "";
    }
  );

  cleaned = cleaned.replace(
    /<p\b[^>]*>\s*<!--MSO_ALPHA-->\s*([\s\S]*?)<\/p>/gi,
    (match, text) => {
      const trimmed = text.replace(/^[a-zA-Z][\.\)]\s*/, "").trim();
      return trimmed ? `<li data-list-type="alpha">${trimmed}</li>` : "";
    }
  );

  cleaned = cleaned.replace(
    /<p\b[^>]*>\s*<!--MSO_BULLET-->\s*([\s\S]*?)<\/p>/gi,
    (match, text) => {
      const trimmed = text.replace(/^(?:&middot;|&#183;|&bull;|&#8226;|•|·|▪|▫|\u00b7|\u2022|&nbsp;|\s|-|\*)+/i, "").trim();
      return trimmed ? `<li data-list-type="bullet">${trimmed}</li>` : "";
    }
  );

  // 3. Convert plain paragraphs starting with middle dot / bullet (·, &middot;, •, etc.) into bullet list items
  cleaned = cleaned.replace(
    /<p\b[^>]*>(?:<span[^>]*>)?(?:\s|&nbsp;)*(?:&middot;|&#183;|&bull;|&#8226;|•|·|▪|▫|\u00b7|\u2022)(?:\s|&nbsp;)*(?:<\/span>)?(?:\s|&nbsp;)*([\s\S]*?)<\/p>/gi,
    (match, text) => {
      const trimmed = text.replace(/^(?:&middot;|&#183;|&bull;|&#8226;|•|·|▪|▫|\u00b7|\u2022|&nbsp;|\s)+/i, "").trim();
      return trimmed ? `<li data-list-type="bullet">${trimmed}</li>` : "";
    }
  );

  // 4. Convert plain paragraphs starting with numbers ONLY when sequential: <p>1. Text</p> or <p>1) Text</p>
  cleaned = cleaned.replace(
    /<p\b[^>]*>\s*(?:<strong>)?(\d+)[\.\)](?:<\/strong>)?\s+([\s\S]*?)<\/p>/gi,
    (match, num, text) => {
      const trimmed = text.trim();
      return trimmed ? `<li data-list-type="num">${trimmed}</li>` : "";
    }
  );

  // 5. Convert plain paragraphs starting with alpha: <p>a. Text</p> or <p>a) Text</p>
  cleaned = cleaned.replace(
    /<p\b[^>]*>\s*(?:<strong>)?([a-zA-Z])[\.\)](?:<\/strong>)?\s+([\s\S]*?)<\/p>/gi,
    (match, alpha, text) => {
      const trimmed = text.trim();
      return trimmed ? `<li data-list-type="alpha">${trimmed}</li>` : "";
    }
  );

  // 6. Clean double bullet dots inside existing <li> tags
  cleaned = cleaned.replace(
    /<li\b([^>]*)>(?:\s|&nbsp;)*(?:&middot;|&#183;|&bull;|&#8226;|•|·|▪|▫|\u00b7|\u2022)(?:\s|&nbsp;)*([\s\S]*?)<\/li>/gi,
    "<li$1>$2</li>"
  );

  // 7. Group orphan <li> elements into proper <ol>, <ol type="a">, or <ul> using DOMParser
  if (typeof window !== "undefined" && typeof DOMParser !== "undefined") {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(`<body>${cleaned}</body>`, "text/html");
      const body = doc.body;

      let currentContainer = null;
      let currentType = null;
      const nodes = Array.from(body.childNodes);

      nodes.forEach((node) => {
        if (node.nodeType === 1 && node.tagName.toLowerCase() === "li") {
          const listType = node.getAttribute("data-list-type") || "bullet";
          node.removeAttribute("data-list-type");

          if (!currentContainer || currentType !== listType) {
            currentType = listType;
            if (listType === "num") {
              currentContainer = doc.createElement("ol");
            } else if (listType === "alpha") {
              currentContainer = doc.createElement("ol");
              currentContainer.setAttribute("type", "a");
            } else {
              currentContainer = doc.createElement("ul");
            }
            body.insertBefore(currentContainer, node);
          }
          currentContainer.appendChild(node);
        } else if (node.nodeType === 3 && !node.textContent.trim()) {
          // Keep whitespace within current group
        } else {
          currentContainer = null;
          currentType = null;
        }
      });

      cleaned = body.innerHTML;
    } catch (err) {
      console.warn("HTML list normalization fallback:", err);
    }
  }

  return cleaned;
};
