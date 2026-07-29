import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const mainHtmlPath = path.join(distDir, 'index.html');

const routes = [
  'industries/commercial-real-estate',
  'industries/corporate-offices-it-campuses',
  'industries/residential-communities',
  'industries/manufacturing-factories',
  'industries/warehouses-logistics',
  'industries/healthcare',
  'industries/education',
  'industries/retail-shopping-malls',
  'industries/airports-transportation',
  'industries/utilities-infrastructure',
  'industries/government-public-sector',
  'industries/data-centers-critical-facilities',
  'industries/smart-cities',
  'industries/industrial-facilities',
  'industries/hospitality-hotels'
];

if (fs.existsSync(mainHtmlPath)) {
  const htmlContent = fs.readFileSync(mainHtmlPath, 'utf-8');
  routes.forEach(route => {
    const targetRouteDir = path.join(distDir, ...route.split('/'));
    fs.mkdirSync(targetRouteDir, { recursive: true });
    fs.writeFileSync(path.join(targetRouteDir, 'index.html'), htmlContent, 'utf-8');
    console.log(`✔ Static route prerendered successfully: dist/${route}/index.html`);
  });
}
