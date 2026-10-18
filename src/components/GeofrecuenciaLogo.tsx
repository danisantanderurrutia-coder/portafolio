import React from 'react';

interface GeofrecuenciaLogoProps {
  className?: string;
  variant?: 'badge' | 'symbol';
  size?: number | string;
}

/**
 * Geofrecuencia Logo Component
 * Concept 1: Seismic Waveform (Geophysics) + DS Monogram + Broadcast Frequency Arcs (Strategic Communications).
 */
export const GeofrecuenciaLogo: React.FC<GeofrecuenciaLogoProps> = ({
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
        <filter id="geoReactGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="geoReactAmber" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* Optional Dark Squircle Background for Badges */}
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

      {/* Main Vector Group */}
      <g transform="translate(4, 0)">
        {/* Origin Sensor Dot */}
        <circle cx="58" cy="256" r="6.5" fill="url(#geoReactAmber)" filter="url(#geoReactGlow)" />

        {/* Seismic Waveform */}
        <path
          d="M 68,256 L 100,256 L 110,274 L 122,236 L 132,270 L 148,155 L 164,352 L 178,220 L 188,272 L 198,256 L 214,256"
          stroke="#ffffff"
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Horizontal Connector Line through D */}
        <line
          x1="214"
          y1="256"
          x2="280"
          y2="256"
          stroke="url(#geoReactAmber)"
          strokeWidth="6.5"
          strokeLinecap="round"
          filter="url(#geoReactGlow)"
        />

        {/* Monogram Letter D */}
        <line x1="228" y1="184" x2="228" y2="328" stroke="#ffffff" strokeWidth="9.5" strokeLinecap="round" />
        <path
          d="M 228,184 L 254,184 C 288,184 308,206 308,256 C 308,306 288,328 254,328 L 228,328"
          stroke="#ffffff"
          strokeWidth="9.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Monogram Letter S */}
        <path
          d="M 374,212 C 365,192 344,184 326,184 C 302,184 288,198 288,218 C 288,252 358,244 358,284 C 358,312 334,328 312,328 C 292,328 276,316 268,298"
          stroke="#ffffff"
          strokeWidth="9.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Terminal Dot */}
        <circle cx="380" cy="328" r="5.5" fill="url(#geoReactAmber)" filter="url(#geoReactGlow)" />

        {/* Broadcast Waves */}
        <path
          d="M 376,192 A 52,52 0 0,1 416,248"
          stroke="url(#geoReactAmber)"
          strokeWidth="9"
          strokeLinecap="round"
          filter="url(#geoReactGlow)"
        />
        <path
          d="M 396,166 A 84,84 0 0,1 448,254"
          stroke="#ffffff"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M 416,140 A 116,116 0 0,1 478,260"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.55"
        />
      </g>
    </svg>
  );
};
