import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve(process.cwd(), 'dist');

const ROUTES = [
  { slug: 'dossier', title: 'Professional & Scientific Dossier | Daniel Santander' },
  { slug: 'cv', title: 'Curriculum Vitae Repository (EN/ES) | Daniel Santander' },
  { slug: 'hire', title: 'Executive Brief & Consulting Mandate | Daniel Santander' },
  { slug: 'science', title: '3D Earth Atlas: Science & Geophysics | Daniel Santander' },
  { slug: 'summits', title: '3D Earth Atlas: Global Summits | Daniel Santander' },
  { slug: 'policy', title: '3D Earth Atlas: Climate Policy & Governance | Daniel Santander' },
  { slug: 'media', title: '3D Earth Atlas: Media, Press & Arts | Daniel Santander' },
  { slug: 'grassroots', title: '3D Earth Atlas: Grassroots & Permaculture | Daniel Santander' },
  { slug: 'projects', title: '3D Earth Atlas: R&D & Digital Twins | Daniel Santander' },
  { slug: 'publications', title: 'Publications & Research | Daniel Santander' },
  { slug: 'skills', title: 'Technical Stack & Methodologies | Daniel Santander' },
  { slug: 'degrees', title: 'Academic Degrees (U. of Chile, CAU Kiel, AMU Poznań) | Daniel Santander' },
  { slug: 'certifications', title: 'International Certifications | Daniel Santander' },
  { slug: 'art', title: 'Art Direction & Music | Daniel Santander' },
  { slug: 'admin', title: 'Admin Career Command Center | Daniel Santander', noindex: true },
  { slug: 'globe', title: 'Interactive 3D Earth Atlas | Daniel Santander' }
];

function createRouteHtml({ slug, title, noindex }) {
  const url = `https://danisantanderurrutia-coder.github.io/portafolio/${slug}`;
  const ogImage = 'https://danisantanderurrutia-coder.github.io/portafolio/og_banner_preview.jpg';
  const description =
    'Geophysicist (Universidad de Chile) & Dual European M.Sc. in Environmental Management and Protection (CAU Kiel, Germany & AMU Poznań, Poland). Bridging Earth science, policy decisions, and people.';

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${noindex ? '<meta name="robots" content="noindex, nofollow" />' : '<meta name="robots" content="index, follow" />'}
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />
    <script>
      (function () {
        var path = window.location.pathname;
        var base = path.replace(/\\/${slug}\\/?$/i, '/');
        var extraQuery = window.location.search ? '&' + window.location.search.slice(1) : '';
        window.location.replace(base + '?route=${slug}' + extraQuery + window.location.hash);
      })();
    </script>
  </head>
  <body style="background:#07090d;color:#ffffff;font-family:monospace;"></body>
</html>
`;
}

for (const route of ROUTES) {
  const dir = path.join(DIST_DIR, route.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), createRouteHtml(route), 'utf8');
}

// Create universal 404.html fallback for GitHub Pages
const indexHtmlPath = path.join(DIST_DIR, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
  fs.copyFileSync(indexHtmlPath, path.join(DIST_DIR, '404.html'));
}

console.log(`Generated ${ROUTES.length} clean English static routes + 404.html fallback in dist/`);
