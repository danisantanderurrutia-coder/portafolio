import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = '', size = 18 }) => {
  const norm = name.toLowerCase().trim();

  // 1. PYTHON
  if (norm.includes('python')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <defs>
          <linearGradient id="py-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#387eb8" />
            <stop offset="100%" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="py-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe873" />
            <stop offset="100%" stopColor="#ffd43b" />
          </linearGradient>
        </defs>
        <path
          fill="url(#py-blue)"
          d="M63.7 3.1c-15.6 0-26.2 3.1-31.5 7.6-5.8 4.9-7.2 10.4-7.2 21.6h38.7v5.5H25c-11.2 0-21.9 6.8-25 21.4-3.6 17.2-3.7 28 0 45.4 2.8 13.1 9.7 21.4 25 21.4h11.1v-14.8c0-12.7 10.9-24 24.1-24h37.4c10.4 0 19-8.7 19-19V24.5c0-10.4-8.8-17.6-19-19-4.8-.7-10.7-1.4-19.1-1.4H63.7zm-11 12.1c3.5 0 6.3 2.8 6.3 6.3 0 3.5-2.8 6.3-6.3 6.3s-6.3-2.8-6.3-6.3c0-3.5 2.8-6.3 6.3-6.3z"
        />
        <path
          fill="url(#py-yellow)"
          d="M64.3 124.9c15.6 0 26.2-3.1 31.5-7.6 5.8-4.9 7.2-10.4 7.2-21.6H64.3v-5.5h38.7c11.2 0 21.9-6.8 25-21.4 3.6-17.2 3.7-28 0-45.4-2.8-13.1-9.7-21.4-25-21.4H112v14.8c0 12.7-10.9 24-24.1 24H50.5c-10.4 0-19 8.7-19 19v38.1c0 10.4 8.8 17.6 19 19 4.8.7 10.7 1.4 19.1 1.4h4.7zm11-12.1c-3.5 0-6.3-2.8-6.3-6.3 0-3.5 2.8-6.3 6.3-6.3s6.3 2.8 6.3 6.3c0 3.5-2.8 6.3-6.3 6.3z"
        />
      </svg>
    );
  }

  // 2. QGIS
  if (norm.includes('qgis') || norm === 'gis') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <circle cx="64" cy="64" r="56" fill="#589632" stroke="#2b4e18" strokeWidth="4" />
        <circle cx="64" cy="64" r="34" fill="#93c748" />
        <circle cx="64" cy="64" r="18" fill="#ffffff" />
        <path d="M50 50 L95 95" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" />
        <path d="M72 95 L95 95 L95 72" fill="#ffffff" />
      </svg>
    );
  }

  // 3. DOCKER
  if (norm.includes('docker')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <path
          fill="#2496ED"
          d="M124.8 55.4c-2.3-1.6-9.1-2.1-14.1.7-1.1-6.1-5.7-10.9-11.7-13.2l-2.4-.9-.9 2.4c-2.4 6.3-1.2 13.8 3.3 19.1C94.2 65 87 66 79 66H10c-3.3 0-6 2.7-6 6 0 15 6.7 28.5 17.5 37.6C34.2 119.9 50.4 125 68 125c40.5 0 74-27.4 75-67.6.1-.7 0-1.4-.2-2zm-67.6-6.1H46.8V39h10.4v10.3zm0-13.8H46.8V25.2h10.4v10.3zm13.8 13.8H60.6V39H71v10.3zm0-13.8H60.6V25.2H71v10.3zm13.8 13.8H74.4V39h10.4v10.3zm13.8 0H88.2V39h10.4v10.3zm-55.2 0H33V39h10.4v10.3zm0-13.8H33V25.2h10.4v10.3zm-13.8 13.8H19.2V39h10.4v10.3z"
        />
      </svg>
    );
  }

  // 4. POSTGIS / POSTGRESQL
  if (norm.includes('postgis') || norm.includes('postgres')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <rect width="128" height="128" rx="28" fill="#336791" />
        <path
          fill="#ffffff"
          d="M64 22c-20 0-36 14-36 34 0 14 8 26 21 31l-3 19 18-9 18 9-3-19c13-5 21-17 21-31 0-20-16-34-36-34zm-14 36c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm28 0c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
        />
        <circle cx="64" cy="74" r="8" fill="#59a9e6" />
      </svg>
    );
  }

  // 5. GOOGLE EARTH ENGINE (GEE)
  if (norm.includes('earth engine') || norm.includes('gee')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <circle cx="64" cy="64" r="56" fill="#1A73E8" />
        <path d="M64 8 A56 56 0 0 1 120 64 L64 64 Z" fill="#34A853" />
        <path d="M120 64 A56 56 0 0 1 64 120 L64 64 Z" fill="#FBBC04" />
        <path d="M64 120 A56 56 0 0 1 8 64 L64 64 Z" fill="#EA4335" />
        <circle cx="64" cy="64" r="32" fill="#0d1b2a" />
        <ellipse cx="64" cy="64" rx="26" ry="12" fill="none" stroke="#64ffda" strokeWidth="3" transform="rotate(-30 64 64)" />
        <circle cx="64" cy="64" r="6" fill="#64ffda" />
      </svg>
    );
  }

  // 6. DELFT3D
  if (norm.includes('delft3d') || norm.includes('delft')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <rect width="128" height="128" rx="24" fill="#003B70" />
        <path
          d="M20 75 C 38 45, 54 95, 74 65 C 94 35, 110 85, 118 60"
          fill="none"
          stroke="#00A3E0"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M20 95 C 40 65, 56 115, 76 85 C 96 55, 112 105, 118 80"
          fill="none"
          stroke="#7AD2F6"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <text x="64" y="42" textAnchor="middle" fill="#FFFFFF" fontWeight="900" fontSize="24" fontFamily="monospace">
          D3D
        </text>
      </svg>
    );
  }

  // 7. UNITY 3D
  if (norm.includes('unity')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <circle cx="64" cy="64" r="60" fill="#18181b" stroke="#ffffff" strokeWidth="4" />
        <path
          fill="#ffffff"
          d="M64 24 L98 44 L98 84 L64 104 L30 84 L30 44 Z"
          fillOpacity="0.2"
        />
        <path
          fill="#ffffff"
          d="M64 32 L88 46 L88 74 L64 60 Z M64 68 L88 82 L64 96 L40 82 Z M64 60 L40 74 L40 46 Z"
        />
      </svg>
    );
  }

  // 8. NEXT.JS
  if (norm.includes('next.js') || norm.includes('nextjs') || norm === 'next') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <circle cx="64" cy="64" r="60" fill="#000000" stroke="#333333" strokeWidth="4" />
        <path
          d="M44 40 L44 88 M84 40 L84 64"
          stroke="#ffffff"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M44 40 L94 92"
          stroke="#ffffff"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 9. REACT
  if (norm.includes('react')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <ellipse cx="64" cy="64" rx="48" ry="18" fill="none" stroke="#61DAFB" strokeWidth="5" />
        <ellipse cx="64" cy="64" rx="48" ry="18" fill="none" stroke="#61DAFB" strokeWidth="5" transform="rotate(60 64 64)" />
        <ellipse cx="64" cy="64" rx="48" ry="18" fill="none" stroke="#61DAFB" strokeWidth="5" transform="rotate(120 64 64)" />
        <circle cx="64" cy="64" r="8" fill="#61DAFB" />
      </svg>
    );
  }

  // 10. TYPESCRIPT
  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <text x="36" y="88" fill="#ffffff" fontWeight="bold" fontSize="56" fontFamily="sans-serif">T</text>
        <text x="74" y="88" fill="#ffffff" fontWeight="bold" fontSize="56" fontFamily="sans-serif">S</text>
      </svg>
    );
  }

  // 11. FASTAPI
  if (norm.includes('fastapi')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <circle cx="64" cy="64" r="58" fill="#059669" />
        <path
          d="M68 18 L32 72 L62 72 L56 110 L94 54 L66 54 Z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // 12. TAILWIND CSS
  if (norm.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <rect width="128" height="128" rx="24" fill="#0f172a" />
        <path
          fill="#38BDF8"
          d="M42 46c5.3-8 12-12 20-12 12 0 17.3 8 24 12 6.7 4 12 6 20 6 5.3 0 10.7-2.7 16-8-5.3 8-12 12-20 12-12 0-17.3-8-24-12-6.7-4-12-6-20-6-5.3 0-10.7 2.7-16 8zm-20 32c5.3-8 12-12 20-12 12 0 17.3 8 24 12 6.7 4 12 6 20 6 5.3 0 10.7-2.7 16-8-5.3 8-12 12-20 12-12 0-17.3-8-24-12-6.7-4-12-6-20-6-5.3 0-10.7 2.7-16 8z"
        />
      </svg>
    );
  }

  // 13. DAVINCI RESOLVE
  if (norm.includes('davinci')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <circle cx="64" cy="64" r="60" fill="#1e1e24" />
        <circle cx="64" cy="40" r="22" fill="#E11D48" opacity="0.9" />
        <circle cx="44" cy="78" r="22" fill="#06B6D4" opacity="0.9" />
        <circle cx="84" cy="78" r="22" fill="#EAB308" opacity="0.9" />
        <circle cx="64" cy="64" r="8" fill="#ffffff" />
      </svg>
    );
  }

  // 14. OBS STUDIO
  if (norm.includes('obs')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <circle cx="64" cy="64" r="60" fill="#09090b" stroke="#ffffff" strokeWidth="4" />
        <path
          fill="#ffffff"
          d="M64 24 C 86 24 104 42 104 64 C 104 76 98 87 90 94 C 84 82 82 66 74 54 C 68 46 56 40 46 36 C 51 28 57 24 64 24 Z"
        />
        <path
          fill="#ffffff"
          d="M24 64 C 24 42 42 24 64 24 C 76 24 87 30 94 38 C 82 44 66 46 54 54 C 46 60 40 72 36 82 C 28 77 24 71 24 64 Z"
          transform="rotate(120 64 64)"
        />
        <path
          fill="#ffffff"
          d="M24 64 C 24 42 42 24 64 24 C 76 24 87 30 94 38 C 82 44 66 46 54 54 C 46 60 40 72 36 82 C 28 77 24 71 24 64 Z"
          transform="rotate(240 64 64)"
        />
      </svg>
    );
  }

  // 15. SENTINEL-2 / COPERNICUS
  if (norm.includes('sentinel') || norm.includes('copernicus')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <circle cx="64" cy="64" r="58" fill="#002D62" stroke="#FFCC00" strokeWidth="3" />
        <ellipse cx="64" cy="64" rx="46" ry="16" fill="none" stroke="#FFCC00" strokeWidth="3" transform="rotate(-25 64 64)" />
        <rect x="52" y="52" width="24" height="24" rx="4" fill="#E5E7EB" stroke="#111827" strokeWidth="2" />
        <line x1="32" y1="64" x2="52" y2="64" stroke="#38BDF8" strokeWidth="5" />
        <line x1="76" y1="64" x2="96" y2="64" stroke="#38BDF8" strokeWidth="5" />
      </svg>
    );
  }

  // 16. STREAMLIT
  if (norm.includes('streamlit')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <path
          fill="#FF4B4B"
          d="M64 16 L112 104 L16 104 Z"
        />
        <path
          fill="#FFFFFF"
          d="M64 42 L88 90 L40 90 Z"
          opacity="0.3"
        />
      </svg>
    );
  }

  // 17. GEOPANDAS / PANDAS
  if (norm.includes('pandas')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <rect width="128" height="128" rx="24" fill="#150458" />
        <rect x="28" y="24" width="16" height="80" rx="4" fill="#13B5EA" />
        <rect x="56" y="44" width="16" height="60" rx="4" fill="#FFD43B" />
        <rect x="84" y="32" width="16" height="72" rx="4" fill="#E70488" />
      </svg>
    );
  }

  // 18. IOT / LORAWAN
  if (norm.includes('iot') || norm.includes('lorawan')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <circle cx="64" cy="64" r="58" fill="#78350F" />
        <circle cx="64" cy="80" r="10" fill="#F59E0B" />
        <path d="M64 80 L64 36" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round" />
        <path d="M46 52 C 54 44 74 44 82 52" fill="none" stroke="#FBBF24" strokeWidth="6" strokeLinecap="round" />
        <path d="M34 40 C 50 24 78 24 94 40" fill="none" stroke="#FBBF24" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  // 19. PREMIERE PRO
  if (norm.includes('premiere')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <rect width="128" height="128" rx="24" fill="#00005B" />
        <text x="36" y="86" fill="#EA77FF" fontWeight="bold" fontSize="56" fontFamily="sans-serif">Pr</text>
      </svg>
    );
  }

  // 20. RADIO FM
  if (norm.includes('radio') || norm.includes('fm')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <rect width="128" height="128" rx="24" fill="#064E3B" />
        <circle cx="64" cy="64" r="14" fill="#34D399" />
        <path d="M42 42 C 54 30 74 30 86 42" fill="none" stroke="#6EE7B7" strokeWidth="8" strokeLinecap="round" />
        <path d="M30 30 C 48 12 80 12 98 30" fill="none" stroke="#A7F3D0" strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  }

  // 21. LIDAR / DEM
  if (norm.includes('lidar') || norm.includes('dem')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
        <rect width="128" height="128" rx="24" fill="#082f49" />
        <path d="M24 94 L64 34 L104 94 Z" fill="none" stroke="#38bdf8" strokeWidth="6" strokeLinejoin="round" />
        <circle cx="64" cy="34" r="6" fill="#facc15" />
        <circle cx="44" cy="64" r="5" fill="#38bdf8" />
        <circle cx="84" cy="64" r="5" fill="#38bdf8" />
        <circle cx="34" cy="79" r="4" fill="#38bdf8" />
        <circle cx="94" cy="79" r="4" fill="#38bdf8" />
      </svg>
    );
  }

  // DEFAULT / CODE / TOOL BADGE
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={`shrink-0 ${className}`}>
      <rect width="128" height="128" rx="24" fill="#27272a" stroke="#52525b" strokeWidth="4" />
      <path d="M44 48 L28 64 L44 80 M84 48 L100 64 L84 80 M72 38 L56 90" stroke="#facc15" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
};

interface TechBadgeProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabel?: boolean;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  size = 'sm',
  className = '',
  showLabel = true
}) => {
  const iconSize = size === 'lg' ? 22 : size === 'md' ? 18 : 14;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.8 rounded-md bg-black/80 hover:bg-black text-white border border-white/20 hover:border-yellow-400/80 shadow-[2px_2px_0px_#000000] transition-transform hover:scale-105 select-none ${className}`}
      title={name}
    >
      <TechLogo name={name} size={iconSize} />
      {showLabel && (
        <span className="font-mono text-[10px] sm:text-[11px] font-bold text-gray-200 tracking-tight">
          {name}
        </span>
      )}
    </span>
  );
};
