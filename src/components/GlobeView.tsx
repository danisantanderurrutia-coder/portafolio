import React, { useEffect, useRef } from 'react';

export interface GeoLocation {
  id: string;
  nameEs: string;
  nameEn: string;
  country: string;
  flag: string;
  lat: number;
  lng: number;
  roleEs: string;
  roleEn: string;
  highlightsEs: string[];
  highlightsEn: string[];
}

export const GEO_LOCATIONS: Record<string, GeoLocation> = {
  chile: {
    id: 'chile',
    nameEs: 'Chile (Maule / Santiago / Valparaíso)',
    nameEn: 'Chile (Maule / Santiago / Valparaíso)',
    country: 'Chile',
    flag: '🇨🇱',
    lat: -35.6,
    lng: -71.5,
    roleEs: 'Ingeniería Geofísica (FCFM U. de Chile), Prensa +700k, Congreso & Cuencas',
    roleEn: 'Geophysics Engineering (U. of Chile), Media +700k, Congress & Catchments',
    highlightsEs: [
      'Ingeniero Geofísico con Distinción Máxima (Universidad de Chile, 2021)',
      'Fundador & Director de Prensa (+700.000 seguidores en estallido social)',
      'Exposición oficial en Comisión de Megaincendios de la Cámara de Diputadas/os',
      'Asesoría técnica ambiental en Convención Constitucional (agua, minería, transición)',
      'Campaña "Apruebo Rural" & matrices de xilografía popular por el agua',
      'Monitoreo in-situ y red de telemetría de cuencas en el Maule'
    ],
    highlightsEn: [
      'Geophysicist with Distinction (Universidad de Chile, 2021)',
      'Founder & Newsroom Director (+700,000 followers citizen newsroom)',
      'Official testimony at Chamber of Deputies Wildfire & Disaster Commission',
      'Environmental policy advisory for Constitutional Convention (water, forestry)',
      'Apruebo Rural campaign & woodcut printmaking for water rights',
      'Maule watershed in-situ sensor telemetry and ecohydrological modeling'
    ]
  },
  germany: {
    id: 'germany',
    nameEs: 'Alemania (Kiel / Bonn / Múnich / Dresde)',
    nameEn: 'Germany (Kiel / Bonn / Munich / Dresden)',
    country: 'Alemania',
    flag: '🇩🇪',
    lat: 54.3,
    lng: 10.1,
    roleEs: 'Doble M.Sc. Gestión Ambiental (CAU Kiel) & Justicia Ambiental',
    roleEn: 'Dual M.Sc. Environmental Management (CAU Kiel) & Climate Justice',
    highlightsEs: [
      'Doble Maestría en Gestión y Protección Ambiental (CAU Kiel, 2023-2025)',
      'Modelación de balances ecohidrológicos e impactos de plantaciones forestales',
      'Conferencia de Justicia Ambiental (Bonn 2025) sobre monocultivos y biomasa',
      'Representación en foros de transición y cambio climático (Múnich 2025)',
      'Certificación Interlinked Justice (Dresde)'
    ],
    highlightsEn: [
      'Dual Master Program in Environmental Management (CAU Kiel, 2023-2025)',
      'Ecohydrological catchment modeling and pine/eucalyptus balance simulations',
      'Environmental Justice Conference presentation (Bonn 2025)',
      'Climate justice delegation and international forums (Munich 2025)',
      'Interlinked Justice Certification (Dresden)'
    ]
  },
  poland: {
    id: 'poland',
    nameEs: 'Polonia (Poznań / Cuencas Bálticas)',
    nameEn: 'Poland (Poznań / Baltic Catchments)',
    country: 'Polonia',
    flag: '🇵🇱',
    lat: 52.4,
    lng: 16.9,
    roleEs: 'Doble M.Sc. Protección Ambiental (AMU Poznań) & Turberas',
    roleEn: 'Dual M.Sc. Environmental Protection (AMU Poznań) & Peatlands',
    highlightsEs: [
      'Maestría en Protección Ambiental (Adam Mickiewicz University, 2023-2025)',
      'Tesis de Maestría: Secuestro de carbono en turberas y balance de cuenca',
      'Directiva Marco del Agua de la Unión Europea y gobernanza hídrica transfronteriza',
      'Desarrollo de gemelos digitales para la conservación de humedales'
    ],
    highlightsEn: [
      'Master Program in Environmental Protection (AMU Poznań, 2023-2025)',
      'Master Thesis: Carbon sequestration in wetlands and adjacent ecosystems',
      'EU Water Framework Directive implementation and peatland restoration',
      'Catchment digital twin modeling for Baltic lowland ecosystems'
    ]
  },
  norway: {
    id: 'norway',
    nameEs: 'Noruega (Oslo)',
    nameEn: 'Norway (Oslo)',
    country: 'Noruega',
    flag: '🇳🇴',
    lat: 59.9,
    lng: 10.7,
    roleEs: 'Degrowth Conference Oslo 2025 (Presentación sobre crisis socioecológica)',
    roleEn: 'Degrowth Conference Oslo 2025 (Speaker on systemic alternatives)',
    highlightsEs: [
      'Ponencia oficial en la Conferencia Internacional de Decrecimiento (Oslo 2025)',
      'Propuesta de alternativas al colapso de cuencas por monocultivo y biomasa',
      'Debate internacional sobre economía ecológica y transición poscapitalista'
    ],
    highlightsEn: [
      'Official speaker at International Degrowth Conference (Oslo 2025)',
      'Presentation on alternatives to catchment collapse from tree monocultures',
      'Ecological economics frameworks bridging Global South with European policy'
    ]
  },
  switzerland: {
    id: 'switzerland',
    nameEs: 'Suiza (Davos)',
    nameEn: 'Switzerland (Davos)',
    country: 'Suiza',
    flag: '🇨🇭',
    lat: 46.8,
    lng: 9.8,
    roleEs: 'BlueGreen Biodiversity (WSL Davos 2025)',
    roleEn: 'BlueGreen Biodiversity Program (WSL Davos 2025)',
    highlightsEs: [
      'Certificación e investigación en BlueGreen Biodiversity (WSL Davos 2025)',
      'Interfase entre ecosistemas acuáticos y terrestres de alta montaña',
      'Mecanismos de resiliencia ecológica ante extremos climáticos'
    ],
    highlightsEn: [
      'BlueGreen Biodiversity certification at WSL Swiss Federal Institute (Davos 2025)',
      'Aquatic-terrestrial ecosystem interface and mountain hydrology',
      'Ecological resilience metrics under severe climate disruption'
    ]
  },
  denmark: {
    id: 'denmark',
    nameEs: 'Dinamarca (Copenhague)',
    nameEn: 'Denmark (Copenhagen)',
    country: 'Dinamarca',
    flag: '🇩🇰',
    lat: 55.7,
    lng: 12.6,
    roleEs: 'Doughnut Economics (DEAL Copenhagen 2025)',
    roleEn: 'Doughnut Economics (DEAL Copenhagen 2025)',
    highlightsEs: [
      'Especialización en Economía de la Dona (DEAL Copenhague 2025)',
      'Aplicación de techos ecológicos y bases sociales para el manejo de cuencas',
      'Estrategias de gobernanza urbana y regional sin crecimiento extractivista'
    ],
    highlightsEn: [
      'Doughnut Economics Action Lab (DEAL Copenhagen 2025)',
      'Applying ecological ceilings and social foundations to catchment governance',
      'Post-extractive urban and regional planning methodologies'
    ]
  },
  costa_rica: {
    id: 'costa_rica',
    nameEs: 'Costa Rica (San José)',
    nameEn: 'Costa Rica (San José)',
    country: 'Costa Rica',
    flag: '🇨🇷',
    lat: 9.9,
    lng: -84.1,
    roleEs: 'Cumbre de Organizaciones Ambientales & Justicia Climática (2023)',
    roleEn: 'Environmental Organizations Summit & Climate Justice (2023)',
    highlightsEs: [
      'Delegado en foros continentales de justicia climática y derechos de la naturaleza',
      'Articulación de redes latinoamericanas por la desmercantilización de las aguas',
      'Intercambio de estrategias de litigio y monitoreo comunitario'
    ],
    highlightsEn: [
      'Delegate to Latin American Climate Justice and Rights of Nature forums (2023)',
      'Continental networking on water decommodification and community sovereignty',
      'Grassroots environmental defense and open-source monitoring strategies'
    ]
  },
  colombia: {
    id: 'colombia',
    nameEs: 'Colombia (Bogotá)',
    nameEn: 'Colombia (Bogotá)',
    country: 'Colombia',
    flag: '🇨🇴',
    lat: 4.7,
    lng: -74.1,
    roleEs: 'CENSAT Agua Viva & Diálogos de Manejo Forestal (2022-2023)',
    roleEn: 'CENSAT Agua Viva & Forest Dialogues (2022-2023)',
    highlightsEs: [
      'Certificación en Economía Verde y Financiarización de la Naturaleza (CENSAT Agua Viva)',
      'Diálogos sobre Manejo de Bosques y Selvas (CENSAT Colombia - RESUMOF Chile)',
      'Análisis crítico del mercado de bonos de carbono y plantaciones industriales'
    ],
    highlightsEn: [
      'Green Economy and Nature Financialization certification (CENSAT Agua Viva, 2022)',
      'Dialogues on Forest and Jungle Management (CENSAT Colombia - RESUMOF Chile)',
      'Critical assessment of carbon offset trading schemes and plantation monocultures'
    ]
  }
};

// Simplified continent land points for lightweight, instantaneous 3D Canvas rendering
const CONTINENT_POINTS: [number, number][] = [
  // South America
  [-12, -77], [-15, -70], [-23, -70], [-33, -71], [-42, -73], [-53, -71], [-54, -68],
  [-45, -66], [-35, -57], [-23, -43], [-10, -36], [-3, -40], [2, -50], [7, -58],
  [10, -66], [11, -72], [8, -77], [2, -80], [-2, -80], [-8, -79],
  // North America
  [25, -80], [30, -81], [35, -75], [42, -70], [45, -63], [52, -56], [60, -64],
  [70, -70], [72, -100], [70, -130], [60, -140], [55, -132], [48, -124], [38, -122],
  [30, -115], [20, -105], [16, -93], [15, -88], [20, -87], [26, -97],
  // Europe
  [36, -6], [43, -9], [48, -4], [54, 8], [55, 12], [58, 11], [62, 5], [70, 20],
  [68, 30], [60, 30], [55, 21], [54, 18], [53, 14], [46, 14], [40, 18], [37, 15],
  [38, 24], [42, 28], [46, 30], [44, 38], [42, 44],
  // Africa
  [35, -5], [37, 10], [32, 25], [31, 32], [22, 38], [12, 44], [12, 51], [0, 42],
  [-12, 40], [-25, 33], [-34, 26], [-34, 18], [-23, 14], [-12, 13], [5, 1],
  [5, -2], [4, -7], [10, -14], [15, -17], [22, -16], [32, -9],
  // Asia
  [40, 50], [42, 60], [45, 75], [52, 85], [58, 95], [65, 110], [70, 130], [72, 150],
  [65, 175], [60, 165], [55, 160], [52, 140], [43, 132], [38, 128], [35, 120],
  [30, 122], [22, 114], [21, 108], [10, 105], [5, 103], [8, 98], [15, 95],
  [22, 90], [20, 85], [13, 80], [8, 77], [18, 73], [25, 68], [25, 60], [25, 55],
  // Australia
  [-15, 130], [-12, 136], [-12, 142], [-20, 148], [-28, 153], [-37, 150], [-38, 145],
  [-35, 138], [-32, 132], [-35, 118], [-32, 115], [-22, 114], [-20, 118], [-15, 124]
];

interface GlobeViewProps {
  targetLocationId: string;
  onSelectLocation?: (id: string) => void;
  currentLang: 'es' | 'en';
}

export const GlobeView: React.FC<GlobeViewProps> = ({ 
  targetLocationId, 
  onSelectLocation,
  currentLang 
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const targetLoc = GEO_LOCATIONS[targetLocationId] || GEO_LOCATIONS.chile;

  // Current view coordinates with smooth lerp interpolation
  const currentCoord = useRef<{ lat: number; lng: number }>({
    lat: targetLoc.lat,
    lng: targetLoc.lng
  });

  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let targetLat = targetLoc.lat;
    let targetLng = targetLoc.lng;

    const render = () => {
      // Lerp rotation smoothly
      const speed = 0.06;
      currentCoord.current.lat += (targetLat - currentCoord.current.lat) * speed;
      
      // Shortest angle difference for longitude wrapping
      let dLng = targetLng - currentCoord.current.lng;
      while (dLng > 180) dLng -= 360;
      while (dLng < -180) dLng += 360;
      currentCoord.current.lng += dLng * speed;

      const width = canvas.width;
      const height = canvas.height;
      const radius = Math.min(width, height) * 0.42;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // 1. Globe Ambient Shadow & Atmosphere Glow
      const glowGradient = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.15);
      glowGradient.addColorStop(0, 'rgba(45, 90, 60, 0.05)');
      glowGradient.addColorStop(0.7, 'rgba(217, 119, 6, 0.12)');
      glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.2, 0, Math.PI * 2);
      ctx.fill();

      // 2. Globe Oceanic Disk
      const diskGrad = ctx.createRadialGradient(cx - radius * 0.3, cy - radius * 0.3, radius * 0.1, cx, cy, radius);
      diskGrad.addColorStop(0, '#1a1f1b');
      diskGrad.addColorStop(0.7, '#111613');
      diskGrad.addColorStop(1, '#0b0e0c');
      ctx.fillStyle = diskGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Outer Technical Ring
      ctx.strokeStyle = '#3d4d42';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 3. Mathematical Orthographic Projection
      const centerLatRad = (currentCoord.current.lat * Math.PI) / 180;
      const centerLngRad = (currentCoord.current.lng * Math.PI) / 180;

      const project = (latDeg: number, lngDeg: number): { x: number; y: number; visible: boolean } => {
        const phi = (latDeg * Math.PI) / 180;
        const lambda = (lngDeg * Math.PI) / 180;
        const dLambda = lambda - centerLngRad;

        const cosC = Math.sin(centerLatRad) * Math.sin(phi) + Math.cos(centerLatRad) * Math.cos(phi) * Math.cos(dLambda);
        const visible = cosC >= 0;

        const x = cx + radius * Math.cos(phi) * Math.sin(dLambda);
        const y = cy - radius * (Math.cos(centerLatRad) * Math.sin(phi) - Math.sin(centerLatRad) * Math.cos(phi) * Math.cos(dLambda));

        return { x, y, visible };
      };

      // 4. Parallels & Meridians (Graticule Grid)
      ctx.strokeStyle = 'rgba(78, 102, 85, 0.25)';
      ctx.lineWidth = 0.8;

      // Parallels (-60, -30, 0, 30, 60)
      for (let p = -60; p <= 60; p += 30) {
        ctx.beginPath();
        let first = true;
        for (let m = -180; m <= 180; m += 10) {
          const pt = project(p, m);
          if (pt.visible) {
            if (first) { ctx.moveTo(pt.x, pt.y); first = false; }
            else { ctx.lineTo(pt.x, pt.y); }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // Meridians (-150 to 180 every 30 deg)
      for (let m = -180; m < 180; m += 30) {
        ctx.beginPath();
        let first = true;
        for (let p = -80; p <= 80; p += 10) {
          const pt = project(p, m);
          if (pt.visible) {
            if (first) { ctx.moveTo(pt.x, pt.y); first = false; }
            else { ctx.lineTo(pt.x, pt.y); }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // 5. Continents Reference Points (Connected Landmasses)
      ctx.fillStyle = 'rgba(164, 196, 172, 0.7)';
      for (const [cLat, cLng] of CONTINENT_POINTS) {
        const pt = project(cLat, cLng);
        if (pt.visible) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 6. Draw All Station Pins
      Object.values(GEO_LOCATIONS).forEach((loc) => {
        const isTarget = loc.id === targetLocationId;
        const pt = project(loc.lat, loc.lng);

        if (pt.visible) {
          if (isTarget) {
            // Pulse Target Beacon
            const pulse = (Date.now() % 1200) / 1200;
            ctx.strokeStyle = `rgba(217, 119, 6, ${1 - pulse})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 6 + pulse * 14, 0, Math.PI * 2);
            ctx.stroke();

            // Core Pin
            ctx.fillStyle = '#f59e0b';
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Label
            ctx.font = 'bold 10px monospace';
            ctx.fillStyle = '#fef3c7';
            ctx.fillText(loc.flag + ' ' + loc.country.toUpperCase(), pt.x + 8, pt.y - 4);
          } else {
            // Passive Pin
            ctx.fillStyle = '#4ade80';
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // 7. Tactical HUD Compass Overlay
      ctx.strokeStyle = 'rgba(217, 119, 6, 0.4)';
      ctx.lineWidth = 1;
      // Crosshairs on center
      ctx.beginPath();
      ctx.moveTo(cx - 8, cy); ctx.lineTo(cx + 8, cy);
      ctx.moveTo(cx, cy - 8); ctx.lineTo(cx, cy + 8);
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [targetLoc, targetLocationId]);

  return (
    <div className="w-full rounded-2xl bg-[#141815] border-2 border-[#2d3b31] p-4 text-[#f3ede2] flex flex-col space-y-4 shadow-xl select-none">
      {/* Header Telemetry */}
      <div className="flex items-center justify-between border-b border-[#2d3b31] pb-2 font-mono text-[11px]">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
          <span className="font-bold tracking-wider text-amber-400">
            {currentLang === 'es' ? 'SAT-LINK TÁCTICO // GLOBO VIVO' : 'TACTICAL SAT-LINK // LIVE GLOBE'}
          </span>
        </div>
        <div className="text-neutral-400 text-[10px]">
          {Math.abs(targetLoc.lat).toFixed(1)}°{targetLoc.lat >= 0 ? 'N' : 'S'}{' '}
          {Math.abs(targetLoc.lng).toFixed(1)}°{targetLoc.lng >= 0 ? 'E' : 'W'}
        </div>
      </div>

      {/* Canvas Viewport */}
      <div className="relative w-full aspect-square max-h-[300px] flex items-center justify-center overflow-hidden rounded-xl bg-black/40 border border-[#2d3b31]">
        <canvas
          ref={canvasRef}
          width={320}
          height={320}
          className="w-full h-full object-contain"
        />

        {/* Tactical Corner Reticles */}
        <div className="absolute top-2 left-2 font-mono text-[9px] text-[#6b8572]">
          [GRID: WGS84]
        </div>
        <div className="absolute bottom-2 left-2 font-mono text-[9px] text-amber-500/80">
          FOCUS: {targetLoc.country.toUpperCase()}
        </div>
        <div className="absolute bottom-2 right-2 font-mono text-[9px] text-[#6b8572]">
          EXPEDICIÓN 2020-2026
        </div>
      </div>

      {/* Selected Location Dossier Card */}
      <div className="p-3.5 rounded-xl bg-[#1a211c] border border-[#3b4c3f] space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl">{targetLoc.flag}</span>
            <span className="font-serif font-bold text-base text-amber-200">
              {currentLang === 'es' ? targetLoc.nameEs : targetLoc.nameEn}
            </span>
          </div>
          <span className="px-2 py-0.5 rounded font-mono text-[9px] bg-amber-500/10 text-amber-300 border border-amber-500/30">
            HITO CV
          </span>
        </div>

        <p className="text-xs text-neutral-300 font-sans font-medium">
          {currentLang === 'es' ? targetLoc.roleEs : targetLoc.roleEn}
        </p>

        {/* Highlights List */}
        <ul className="pt-2 border-t border-[#2d3b31] space-y-1.5 text-xs text-neutral-300 font-serif">
          {(currentLang === 'es' ? targetLoc.highlightsEs : targetLoc.highlightsEn).map((h, hIdx) => (
            <li key={hIdx} className="flex items-start space-x-2">
              <span className="text-amber-400 font-bold mt-0.5">•</span>
              <span className="leading-snug">{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Rapid Country Switcher Pills */}
      <div className="space-y-1 pt-1">
        <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
          {currentLang === 'es' ? 'ESTACIONES DE EXPEDICIÓN (8 PAÍSES)' : 'EXPEDITION STATIONS (8 COUNTRIES)'}:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {Object.values(GEO_LOCATIONS).map((loc) => {
            const isSelected = loc.id === targetLocationId;
            return (
              <button
                key={loc.id}
                onClick={() => onSelectLocation && onSelectLocation(loc.id)}
                className={`px-2 py-1 rounded-md font-mono text-[10px] transition-all flex items-center space-x-1 border ${
                  isSelected
                    ? 'bg-amber-500 text-black font-bold border-amber-400 shadow-sm scale-105'
                    : 'bg-[#1a211c] text-neutral-300 hover:text-white hover:bg-[#253028] border-[#2d3b31]'
                }`}
              >
                <span>{loc.flag}</span>
                <span>{loc.country}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
