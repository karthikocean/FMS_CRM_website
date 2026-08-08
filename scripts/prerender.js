import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { routeSeoMap } from '../src/data/routeSeoData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const mainHtmlPath = path.join(distDir, 'index.html');

if (fs.existsSync(mainHtmlPath)) {
  const baseHtml = fs.readFileSync(mainHtmlPath, 'utf-8');

  Object.values(routeSeoMap).forEach(meta => {
    if (!meta.path) {
      // Root index.html - update directly
      let rootHtml = baseHtml
        .replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`)
        .replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${meta.description}" />`)
        .replace(/<meta name="keywords" content=".*?" \/>/s, `<meta name="keywords" content="${meta.keywords}" />`)
        .replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${meta.canonical}" />`)
        .replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${meta.title}" />`)
        .replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${meta.description}" />`)
        .replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${meta.canonical}" />`)
        .replace(/<meta property="og:image" content=".*?" \/>/s, `<meta property="og:image" content="${meta.image}" />`)
        .replace(/<meta name="twitter:title" content=".*?" \/>/s, `<meta name="twitter:title" content="${meta.title}" />`)
        .replace(/<meta name="twitter:description" content=".*?" \/>/s, `<meta name="twitter:description" content="${meta.description}" />`)
        .replace(/<meta name="twitter:url" content=".*?" \/>/s, `<meta name="twitter:url" content="${meta.canonical}" />`)
        .replace(/<meta name="twitter:image" content=".*?" \/>/s, `<meta name="twitter:image" content="${meta.image}" />`);

      fs.writeFileSync(mainHtmlPath, rootHtml, 'utf-8');
      console.log(`✔ Prerendered static SEO HTML: dist/index.html`);
      return;
    }

    const targetRouteDir = path.join(distDir, ...meta.path.split('/'));
    fs.mkdirSync(targetRouteDir, { recursive: true });

    // Inject static route SEO metadata into HTML
    let routeHtml = baseHtml
      .replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`)
      .replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${meta.description}" />`)
      .replace(/<meta name="keywords" content=".*?" \/>/s, `<meta name="keywords" content="${meta.keywords}" />`)
      .replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${meta.canonical}" />`)
      .replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${meta.title}" />`)
      .replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${meta.description}" />`)
      .replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${meta.canonical}" />`)
      .replace(/<meta property="og:image" content=".*?" \/>/s, `<meta property="og:image" content="${meta.image}" />`)
      .replace(/<meta name="twitter:title" content=".*?" \/>/s, `<meta name="twitter:title" content="${meta.title}" />`)
      .replace(/<meta name="twitter:description" content=".*?" \/>/s, `<meta name="twitter:description" content="${meta.description}" />`)
      .replace(/<meta name="twitter:url" content=".*?" \/>/s, `<meta name="twitter:url" content="${meta.canonical}" />`)
      .replace(/<meta name="twitter:image" content=".*?" \/>/s, `<meta name="twitter:image" content="${meta.image}" />`);

    fs.writeFileSync(path.join(targetRouteDir, 'index.html'), routeHtml, 'utf-8');
    console.log(`✔ Prerendered static SEO HTML: dist/${meta.path}/index.html`);
  });
}
