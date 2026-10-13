import React from 'react';

interface TopocatchmentLogoProps {
  className?: string;
  variant?: 'badge' | 'symbol';
  size?: number | string;
}

/**
 * Topocatchment Logo Component
 * Combines Environmental Catchment Isolines (Geophysics) with an Isometric Projection Megaphone (Strategic Communications).
 */
export const TopocatchmentLogo: React.FC<TopocatchmentLogoProps> = ({
  className = 'w-8 h-8',
  variant = 'badge',
  size
}) => {
  const isBadge = variant === 'badge';

  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="reactTcGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="reactTcAmber" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* Optional Dark Squircle Background for Standalone Badges */}
      {isBadge && (
        <>
          <rect width="512" height="512" rx="112" fill="#090b0e" />
          <rect
            x="6"
            y="6"
            width="500"
            height="500"
            rx="106"
            fill="none"
            stroke="#facc15"
            strokeOpacity="0.35"
            strokeWidth="3"
          />
        </>
      )}

      {/* Central Emblem Group */}
      <g transform="translate(6, 0)">
        {/* 1. TOPOGRAPHIC CONTOUR LINES */}
        {/* Layer 5: Outermost isoline */}
        <path
          d="M 210,95 C 160,85 110,105 82,150 C 55,192 48,245 62,295 C 78,348 108,382 135,420 C 165,460 215,445 245,415 C 278,382 288,335 272,290 C 260,252 245,215 238,175 C 232,132 250,102 210,95 Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.45"
        />

        {/* Layer 4: Deep Basin Contour */}
        <path
          d="M 205,122 C 168,112 128,130 105,168 C 82,205 78,248 90,290 C 105,335 130,360 152,392 C 178,426 218,415 240,388 C 265,358 270,320 258,282 C 248,248 235,218 230,185 C 225,150 240,130 205,122 Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.65"
        />

        {/* Layer 3: Core Watershed Isolines */}
        <path
          d="M 200,150 C 172,142 142,158 125,188 C 108,218 106,252 116,285 C 128,320 150,340 168,365 C 188,392 220,385 236,360 C 252,335 255,302 245,272 C 236,242 226,218 222,192 C 218,165 228,155 200,150 Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />

        {/* Layer 2: Innermost High-Altitude Ridge */}
        <path
          d="M 195,182 C 176,175 156,188 144,210 C 132,232 132,258 140,280 C 150,305 168,320 182,338 C 198,358 222,352 232,332 C 242,312 242,286 234,265 C 226,242 218,225 214,205 C 210,185 216,180 195,182 Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="1"
        />

        {/* Central Point (Spring / Sensor Origin) */}
        <circle cx="188" cy="256" r="7" fill="url(#reactTcAmber)" filter="url(#reactTcGlow)" />

        {/* 2. ISOMETRIC PROJECTION CONE / TACTICAL MEGAPHONE */}
        <line x1="188" y1="256" x2="352" y2="152" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
        <line x1="188" y1="256" x2="352" y2="360" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />

        {/* Megaphone Outer Rim */}
        <ellipse cx="352" cy="256" rx="30" ry="104" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />

        {/* Megaphone Depth Ring 1 */}
        <ellipse cx="334" cy="256" rx="19" ry="68" fill="none" stroke="#ffffff" strokeWidth="7" opacity="0.9" />

        {/* Megaphone Depth Ring 2 */}
        <ellipse cx="316" cy="256" rx="11" ry="38" fill="none" stroke="#ffffff" strokeWidth="5.5" opacity="0.75" />

        {/* 3. ACOUSTIC / TERRITORIAL WAVEFRONTS */}
        {/* Primary Amber Pulse */}
        <path
          d="M 390,132 C 424,170 442,212 442,256 C 442,300 424,342 390,380"
          fill="none"
          stroke="url(#reactTcAmber)"
          strokeWidth="9"
          strokeLinecap="round"
          filter="url(#reactTcGlow)"
        />

        {/* Secondary Extended Wavefront */}
        <path
          d="M 426,112 C 468,155 488,204 488,256 C 488,308 468,357 426,400"
          fill="none"
          stroke="#ffffff"
          strokeWidth="7.5"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>
    </svg>
  );
};
