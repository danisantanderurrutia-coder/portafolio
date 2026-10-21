export const ROUTE_SLUGS = [
  'dossier',
  'cv',
  'hire',
  'science',
  'summits',
  'policy',
  'media',
  'grassroots',
  'projects',
  'publications',
  'skills',
  'degrees',
  'certifications',
  'art',
  'admin',
  'globe'
] as const;

export type RouteSlug = (typeof ROUTE_SLUGS)[number];

export function getAppBasePath(): string {
  if (typeof window === 'undefined') return '/';
  const path = window.location.pathname;
  const slugPattern = new RegExp(`/(${ROUTE_SLUGS.join('|')})/?$`, 'i');
  const stripped = path.replace(slugPattern, '/');
  return stripped.endsWith('/') ? stripped : `${stripped}/`;
}

export function resolveAsset(path?: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  // Strip leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${getAppBasePath()}${cleanPath}`;
}

/**
 * Generates a crisp vector-painted HTMLCanvasElement of the national flag
 * for 3D map pushpin pennants on the Three.js Globe.
 */
export function createCountryFlagCanvas(flag: string, country = ''): HTMLCanvasElement {
  const w = 160;
  const h = 100;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;

  const c = country.toLowerCase();
  const isChile = flag.includes('🇨🇱') || c.includes('chile');
  const isGermany = flag.includes('🇩🇪') || c.includes('alemania') || c.includes('germany');
  const isPoland = flag.includes('🇵🇱') || c.includes('polonia') || c.includes('poland');
  const isNorway = flag.includes('🇳🇴') || c.includes('noruega') || c.includes('norway');
  const isSwitzerland = flag.includes('🇨🇭') || c.includes('suiza') || c.includes('switzerland');
  const isDenmark = flag.includes('🇩🇰') || c.includes('dinamarca') || c.includes('denmark');
  const isPortugal = flag.includes('🇵🇹') || c.includes('portugal');
  const isColombia = flag.includes('🇨🇴') || c.includes('colombia');
  const isCostaRica = flag.includes('🇨🇷') || c.includes('costa rica');

  if (isChile) {
    // Top white half
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h / 2);
    // Bottom red half
    ctx.fillStyle = '#d52b1e';
    ctx.fillRect(0, h / 2, w, h / 2);
    // Blue canton top-left
    const cantonW = Math.round(w * 0.36);
    ctx.fillStyle = '#0039a6';
    ctx.fillRect(0, 0, cantonW, h / 2);
    // 5-pointed white star in canton center
    const cx = cantonW / 2;
    const cy = h / 4;
    const outerR = 14;
    const innerR = 5.6;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? outerR : innerR;
      const angle = (i * Math.PI) / 5 - Math.PI / 2;
      const sx = cx + Math.cos(angle) * r;
      const sy = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(sx, sy);
      else ctx.lineTo(sx, sy);
    }
    ctx.closePath();
    ctx.fill();
  } else if (isGermany) {
    ctx.fillStyle = '#111111';
    ctx.fillRect(0, 0, w, h / 3);
    ctx.fillStyle = '#dd0000';
    ctx.fillRect(0, h / 3, w, h / 3);
    ctx.fillStyle = '#ffce00';
    ctx.fillRect(0, (h * 2) / 3, w, h / 3);
  } else if (isPoland) {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h / 2);
    ctx.fillStyle = '#dc143c';
    ctx.fillRect(0, h / 2, w, h / 2);
  } else if (isNorway) {
    ctx.fillStyle = '#ba0c2f';
    ctx.fillRect(0, 0, w, h);
    // White cross
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(w * 0.27, 0, w * 0.18, h);
    ctx.fillRect(0, h * 0.35, w, h * 0.30);
    // Blue inner cross
    ctx.fillStyle = '#00205b';
    ctx.fillRect(w * 0.315, 0, w * 0.09, h);
    ctx.fillRect(0, h * 0.42, w, h * 0.16);
  } else if (isSwitzerland) {
    ctx.fillStyle = '#da291c';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(w * 0.42, h * 0.18, w * 0.16, h * 0.64);
    ctx.fillRect(w * 0.30, h * 0.37, w * 0.40, h * 0.26);
  } else if (isDenmark) {
    ctx.fillStyle = '#c8102e';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(w * 0.28, 0, w * 0.13, h);
    ctx.fillRect(0, h * 0.40, w, h * 0.20);
  } else if (isPortugal) {
    ctx.fillStyle = '#006600';
    ctx.fillRect(0, 0, w * 0.4, h);
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(w * 0.4, 0, w * 0.6, h);
    // Gold armillary sphere + shield
    ctx.beginPath();
    ctx.arc(w * 0.4, h * 0.5, 18, 0, Math.PI * 2);
    ctx.fillStyle = '#ffcc00';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(w * 0.4 - 7, h * 0.5 - 8, 14, 16);
  } else if (isColombia) {
    ctx.fillStyle = '#fcd116';
    ctx.fillRect(0, 0, w, h * 0.5);
    ctx.fillStyle = '#003893';
    ctx.fillRect(0, h * 0.5, w, h * 0.25);
    ctx.fillStyle = '#ce1126';
    ctx.fillRect(0, h * 0.75, w, h * 0.25);
  } else if (isCostaRica) {
    ctx.fillStyle = '#002b7f';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, h / 6, w, (h * 4) / 6);
    ctx.fillStyle = '#ce1126';
    ctx.fillRect(0, (h * 2) / 6, w, (h * 2) / 6);
  } else {
    // Fallback EU / International
    ctx.fillStyle = '#003399';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#ffcc00';
    for (let i = 0; i < 12; i++) {
      const a = (i * Math.PI) / 6;
      ctx.beginPath();
      ctx.arc(w / 2 + Math.cos(a) * 26, h / 2 + Math.sin(a) * 26, 3.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Subtle top fabric sheen
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, 'rgba(255,255,255,0.18)');
  grad.addColorStop(0.5, 'rgba(255,255,255,0.0)');
  grad.addColorStop(1, 'rgba(0,0,0,0.18)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Crisp comic black border
  ctx.lineWidth = 7;
  ctx.strokeStyle = '#000000';
  ctx.strokeRect(3.5, 3.5, w - 7, h - 7);

  return canvas;
}
