import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  ExternalLink, 
  FileText, 
  Sparkles, 
  Share2, 
  Check, 
  ArrowRight,
  Flame,
  Globe,
  Trees,
  Scale
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';

interface PublicationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

interface PublicationItem {
  id: string;
  category: 'policy' | 'press' | 'essays';
  titleEn: string;
  titleEs: string;
  outletEn: string;
  outletEs: string;
  date: string;
  url: string;
  src?: string;
  badgeEn: string;
  badgeEs: string;
  badgeColor: string;
  summaryEn: string;
  summaryEs: string;
  tags: string[];
}

export const PUBLICATIONS_DATA: PublicationItem[] = [
  // 1. EPN 2023-2024: SPOTLIGHT ON BURNING BIOMASS (PARRAL, CHILE)
  {
    id: 'epn-parral-biomass',
    category: 'policy',
    titleEn: 'Spotlight on Burning Biomass: Community Opposition to Power Plant in Parral, Chile',
    titleEs: 'Spotlight on Burning Biomass: Oposición Comunitaria a Central en Parral, Chile',
    outletEn: 'Environmental Paper Network (EPN) & Global Forest Coalition',
    outletEs: 'Environmental Paper Network (EPN) & Global Forest Coalition',
    date: '2023',
    url: 'https://environmentalpaper.org/2023/06/spotlight-on-burning-biomass-for-energy-in-south-america-community-opposition-to-a-power-plant-in-parral-chile/',
    src: '/press_covers/epn_parral_biomass.jpg',
    badgeEn: 'LEAD TECHNICAL AUTHOR',
    badgeEs: 'AUTOR PRINCIPAL // SPOTLIGHT',
    badgeColor: 'bg-red-600 text-white',
    summaryEn: 'International case study investigating community resistance against forest biomass incineration in Parral (Maule), exposing EU renewable energy subsidies and carbon accounting loopholes.',
    summaryEs: 'Investigación internacional sobre la resistencia comunitaria contra la incineración de biomasa forestal en Parral (Maule), desmintiendo la neutralidad de carbono y subsidios europeos.',
    tags: ['EPN', 'Parral', 'Maule', 'Biomasa', 'Justicia Ambiental', 'RED III']
  },

  // 2. TOMATE ROJO: HUMEDALES BAJO FUEGO
  {
    id: 'tomaterojo-humedales',
    category: 'press',
    titleEn: 'Waters Under Fire: What Do We Know and What Is Chile Doing?',
    titleEs: '¡Aguas, aguas! Humedales bajo fuego: ¿Qué sabemos y qué está haciendo Chile?',
    outletEn: 'Tomate Rojo // Red Plurinacional de Humedales (D. Santander, L. Muñoz, C. Bonifetti)',
    outletEs: 'Tomate Rojo // Red Plurinacional de Humedales (D. Santander, L. Muñoz, C. Bonifetti)',
    date: '2023',
    url: 'https://tomaterojo.cl/aguas-aguas-humedales-bajo-fuego-que-sabemos-y-que-esta-haciendo-chile/',
    src: '/press_covers/tomaterojo_humedales_fuego.jpg',
    badgeEn: 'INVESTIGATIVE REPORT',
    badgeEs: 'REPORTAJE INVESTIGATIVO',
    badgeColor: 'bg-orange-600 text-white',
    summaryEn: 'Comprehensive investigation co-authored with the Plurinational Wetland Network on how catastrophic wildfires threaten vital aquatic and peatland ecosystems across Chile.',
    summaryEs: 'Investigación colaborativa con la Red Plurinacional de Humedales sobre el impacto de los megaincendios forestales en ecosistemas de humedales y turberas en Chile.',
    tags: ['Tomate Rojo', 'Humedales', 'Incendios', 'Red Plurinacional', 'Agua']
  },

  // 3. EL REGIONALISTA & FUNDACIÓN SUELO: COLAPSO CLIMÁTICO
  {
    id: 'el-regionalista-colapso',
    category: 'press',
    titleEn: 'How Do We Prepare for a Climate Collapse?',
    titleEs: '¿Cómo nos preparamos para un colapso climático?',
    outletEn: 'El Regionalista & Fundación Suelo (Carolina Miranda & Daniel Santander)',
    outletEs: 'El Regionalista & Fundación Suelo (Carolina Miranda y Daniel Santander)',
    date: '2023',
    url: 'https://elregionalista.cl/como-nos-preparamos-para-un-colapso-climatico/',
    src: '/press_covers/el_regionalista_colapso_climatico.jpg',
    badgeEn: 'OPINION & RESILIENCE BRIEF',
    badgeEs: 'COLUMNA & RESILIENCIA',
    badgeColor: 'bg-emerald-600 text-white',
    summaryEn: 'Prospective analysis addressing deep community adaptation, soil living networks, and decentralized food sovereignty in response to impending ecological collapse.',
    summaryEs: 'Columna de análisis prospectivo sobre adaptación comunitaria profunda, regeneración de suelos y soberanía territorial frente al colapso ecológico.',
    tags: ['El Regionalista', 'Fundación Suelo', 'Colapso Climático', 'Adaptación', 'Suelos']
  },

  // 4. RESUMEN.CL & COMESTIBLE.INFO: DIRK KOCK-ROHWER
  {
    id: 'kock-rohwer-soils',
    category: 'policy',
    titleEn: 'The Earth is at Risk: Investments for Organic Agriculture Now!',
    titleEs: 'La tierra está en riesgo: ¡Inversiones para la agricultura orgánica ahora!',
    outletEn: 'Resumen.cl & Comestible.info (with German Green MP Dirk Kock-Rohwer)',
    outletEs: 'Resumen.cl & Comestible.info (con el diputado Dirk Kock-Rohwer)',
    date: '2024',
    url: 'https://comestible.info/inversiones-para-la-agroecologia-ahora/',
    src: '/press_covers/resumen_dirk_kock_rohwer_agricultura_organica.jpg',
    badgeEn: 'PARLIAMENTARY JOINT COLUMN',
    badgeEs: 'COLUMNA PARLAMENTARIA',
    badgeColor: 'bg-green-600 text-white',
    summaryEn: 'Joint political ecology column with Schleswig-Holstein Green MP Dirk Kock-Rohwer on soil organic fertility, agroecology, and the imperative for direct public subsidies for non-chemical farming.',
    summaryEs: 'Columna conjunta con el diputado de Los Verdes Dirk Kock-Rohwer (Schleswig-Holstein) sobre fertilidad orgánica de suelos, agroecología y subsidios a la transición sin pesticidas.',
    tags: ['Dirk Kock-Rohwer', 'Resumen.cl', 'Comestible.info', 'Agroecología', 'Suelos', 'Alemania']
  },

  // 5. EL DESCONCIERTO: NORUEGA Y DECRECIMIENTO
  {
    id: 'desconcierto-noruega',
    category: 'press',
    titleEn: 'Countries Too Rich to Grow? Norway & World Degrowth Summit',
    titleEs: '¿Países tan ricos que no quieren crecer más? Noruega y Decrecimiento',
    outletEn: 'El Desconcierto // International Investigative Journalism',
    outletEs: 'El Desconcierto // Periodismo de Investigación Internacional',
    date: '2025',
    url: 'https://eldesconcierto.cl/2025/07/06/paises-tan-ricos-que-no-quieren-crecer-mas-noruega-acoge-mayor-debate-mundial-sobre-alternativas-al-crecimiento-economico-infinito',
    src: '/press_covers/desconcierto_noruega_screen.png',
    badgeEn: 'INTERNATIONAL DISPATCH',
    badgeEs: 'CRÓNICA INTERNACIONAL',
    badgeColor: 'bg-blue-600 text-white',
    summaryEn: 'Special dispatch from Oslo reporting on the world degrowth conference, post-extractivism, and alternatives to perpetual economic growth in Nordic economies.',
    summaryEs: 'Crónica especial desde Oslo sobre la conferencia mundial de decrecimiento, post-extractivismo y los límites ecológicos del crecimiento infinito en el norte global.',
    tags: ['El Desconcierto', 'Noruega', 'Decrecimiento', 'Oslo', 'Economía Ecológica']
  },

  // 6. DELFINO.CR: ENCUENTRO CLIMÁTICO EN COSTA RICA
  {
    id: 'delfino-costa-rica',
    category: 'press',
    titleEn: 'Latin American Youth Climate Activists Convene in Costa Rica',
    titleEs: 'Jóvenes activistas climáticos de Latinoamérica tuvieron encuentro en Costa Rica',
    outletEn: 'Delfino.cr // International Climate Justice Coverage',
    outletEs: 'Delfino.cr // Cobertura de Justicia Climática Internacional',
    date: '2023',
    url: 'https://delfino.cr/2023/04/jovenes-activistas-climaticos-de-latinoamerica-tuvieron-encuentro-de-trabajo-en-costa-rica',
    src: '/press_covers/delfino_screen.png',
    badgeEn: 'CLIMATE SUMMIT PRESS',
    badgeEs: 'PRENSA CUMBRE CLIMÁTICA',
    badgeColor: 'bg-cyan-600 text-white',
    summaryEn: 'International press coverage highlighting the working summit of Latin American climate justice leaders and environmental delegates in San José, Costa Rica.',
    summaryEs: 'Cobertura de prensa sobre el encuentro de trabajo de líderes socioambientales de América Latina en San José de Costa Rica por justicia climática intergeneracional.',
    tags: ['Costa Rica', 'Delfino', 'Justicia Climática', 'Juventudes', 'San José']
  },

  // 7. TETRALOGÍA OLCA: SER LIBRES AL BORDE DEL ABISMO
  {
    id: 'olca-ser-libres',
    category: 'essays',
    titleEn: 'Being Free on the Brink of the Abyss (4-Part Political Ecology Treatise)',
    titleEs: 'Ser libres al borde del abismo (Tetralogía de Ensayos Político-Ecológicos)',
    outletEn: 'Observatorio Latinoamericano de Conflictos Ambientales (OLCA)',
    outletEs: 'Observatorio Latinoamericano de Conflictos Ambientales (OLCA)',
    date: '2025',
    url: 'https://olca.cl/articulo/nota.php?id=111288',
    src: '/press_covers/olca_screen.png',
    badgeEn: 'POLITICAL ECOLOGY TREATISE',
    badgeEs: 'TETRALOGÍA FILOSÓFICA',
    badgeColor: 'bg-amber-500 text-black',
    summaryEn: 'Four-part philosophical and political ecology work: 1. Economic Collapse; 2. The Sinking Titanic (Leviathan agony); 3. Darling, What Happened to Us? (Modern domestication); 4. The Call of the Wild (Community autonomy and regenerative ecology).',
    summaryEs: 'Obra ensayística de cuatro partes sobre la crisis civilizatoria: 1. El colapso económico; 2. Se hunde el Titanic (la agonía de los Estados); 3. Cariño, ¿qué nos pasó? (la domesticación moderna); 4. La llamada de la selva (autonomía comunitaria y ecología regenerativa).',
    tags: ['OLCA', 'Autonomía', 'Decrecimiento', 'Ecología Política', 'Buen Vivir']
  },

  // 8. CLIMATECC: GLOBAL TREE MONOCULTURES
  {
    id: 'climatecc-monocultures',
    category: 'essays',
    titleEn: 'Global Tree Monocultures & False Climate Solutions',
    titleEs: 'Monocultivos Forestales y Falsas Soluciones Climáticas',
    outletEn: 'ClimateCC // International Climate Portal',
    outletEs: 'ClimateCC // Portal Climático Internacional',
    date: '2024',
    url: 'https://www.climatecc.org/forests/tree-monocultures',
    src: '/press_covers/climatecc_screen.png',
    badgeEn: 'GLOBAL ESSAY SERIES',
    badgeEs: 'SERIE GLOBAL',
    badgeColor: 'bg-purple-600 text-white',
    summaryEn: 'International analytical series dissecting industrial tree monocultures, carbon offsetting fallacies, and climate justice from the Global South.',
    summaryEs: 'Serie analítica internacional que disecciona los monocultivos forestales industriales, los créditos de carbono y las falsas soluciones climáticas.',
    tags: ['ClimateCC', 'Falsas Soluciones', 'Carbon Credits', 'Bosques']
  },

  // 9. RELATOS DE LA REVUELTA (LIBRO IMPRESO)
  {
    id: 'plp-libro-revuelta',
    category: 'press',
    titleEn: 'Relatos de la revuelta popular (Anthology Book Release)',
    titleEs: 'Relatos de la revuelta popular (Lanzamiento de Libro Impreso)',
    outletEn: 'Primera Línea Prensa // Independent Publishing House',
    outletEs: 'Primera Línea Prensa // Editorial Popular Autogestionada',
    date: '2020',
    url: 'https://www.primeralineaprensa.cl/?p=5542',
    src: '/plp/plp_articulo_revuelta.png',
    badgeEn: 'PRINT BOOK ANTHOLOGY',
    badgeEs: 'LIBRO IMPRESO',
    badgeColor: 'bg-yellow-400 text-black',
    summaryEn: 'Physical publication and street distribution of "Relatos de la revuelta popular", an anthology gathering 44 grassroots micro-narratives from the Chilean social uprising.',
    summaryEs: 'Publicación física y distribución autogestionada del libro «Relatos de la revuelta popular», antología con 44 microtextos y crónicas sobre el estallido social en Chile.',
    tags: ['Libro', 'Estallido Social', 'PLP', 'Editorial']
  }
];

export const PublicationsModal: React.FC<PublicationsModalProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'policy' | 'press' | 'essays'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const filtered = PUBLICATIONS_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c0f14] border-4 border-black rounded-2xl shadow-[10px_10px_0px_#facc15] flex flex-col overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-5 py-3.5 bg-black border-b-3 border-black flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <span className="bg-[#facc15] text-black px-3 py-1 font-mono font-black text-xs sm:text-sm uppercase border-2 border-black shadow-[2px_2px_0px_#000] -rotate-1">
              {currentLang === 'es' ? '[ PUBLICACIONES, PRENSA & ENSAYOS ]' : '[ PUBLICATIONS, PRESS & ESSAYS ]'}
            </span>
            <span className="hidden sm:inline font-mono text-xs text-neutral-400 font-bold">
              {currentLang === 'es' ? 'INVESTIGACIONES & MEDIOS' : 'INVESTIGATIVE JOURNALISM & BRIEFS'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/10 hover:bg-red-600 hover:text-white text-neutral-300 transition-all border border-white/20 active:scale-90 cursor-pointer"
            title="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Stencil Filter Strip */}
        <div className="px-5 py-2.5 bg-[#12161f] border-b-2 border-black flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1 font-mono font-black text-xs uppercase border-2 border-black rounded transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-white text-black shadow-[2px_2px_0px_#facc15] -rotate-0.5'
                : 'bg-black/60 text-neutral-300 hover:bg-white/10'
            }`}
          >
            {currentLang === 'es' ? `TODAS (${PUBLICATIONS_DATA.length})` : `ALL (${PUBLICATIONS_DATA.length})`}
          </button>

          <button
            onClick={() => setActiveCategory('policy')}
            className={`px-3 py-1 font-mono font-black text-xs uppercase border-2 border-black rounded transition-all cursor-pointer ${
              activeCategory === 'policy'
                ? 'bg-red-600 text-white shadow-[2px_2px_0px_#000] rotate-0.5'
                : 'bg-black/60 text-neutral-300 hover:bg-red-600/30'
            }`}
          >
            📄 {currentLang === 'es' ? 'INFORMES TÉCNICOS & POLICY BRIEFS' : 'POLICY BRIEFS & REPORTS'}
          </button>

          <button
            onClick={() => setActiveCategory('essays')}
            className={`px-3 py-1 font-mono font-black text-xs uppercase border-2 border-black rounded transition-all cursor-pointer ${
              activeCategory === 'essays'
                ? 'bg-amber-500 text-black shadow-[2px_2px_0px_#000] -rotate-0.5'
                : 'bg-black/60 text-neutral-300 hover:bg-amber-500/30'
            }`}
          >
            🔥 {currentLang === 'es' ? 'ENSAYOS & ECOLOGÍA POLÍTICA' : 'ESSAYS & POLITICAL ECOLOGY'}
          </button>

          <button
            onClick={() => setActiveCategory('press')}
            className={`px-3 py-1 font-mono font-black text-xs uppercase border-2 border-black rounded transition-all cursor-pointer ${
              activeCategory === 'press'
                ? 'bg-blue-600 text-white shadow-[2px_2px_0px_#000] rotate-0.5'
                : 'bg-black/60 text-neutral-300 hover:bg-blue-600/30'
            }`}
          >
            📰 {currentLang === 'es' ? 'PRENSA & PERIODISMO' : 'PRESS & JOURNALISM'}
          </button>
        </div>

        {/* Scrollable Cards Grid */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-4 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#141822] border-3 border-black rounded-xl p-4 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#facc15] hover:scale-[1.01] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Date */}
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono font-black text-[9px] px-2 py-0.5 border border-black uppercase ${item.badgeColor} -rotate-1`}>
                      {currentLang === 'es' ? item.badgeEs : item.badgeEn}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 font-bold">
                      {item.date}
                    </span>
                  </div>

                  {/* Cover Preview Image */}
                  {item.src && (
                    <div className="relative w-full h-36 mb-2.5 overflow-hidden rounded-lg border border-white/10 bg-black/60 group-hover:border-amber-400/40 transition-colors">
                      <img
                        src={resolveAsset(item.src)}
                        alt={currentLang === 'es' ? item.titleEs : item.titleEn}
                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Title */}
                  <h4 className="font-mono font-black text-sm text-white group-hover:text-[#facc15] transition-colors leading-snug">
                    {currentLang === 'es' ? item.titleEs : item.titleEn}
                  </h4>

                  {/* Outlet */}
                  <div className="text-[10px] font-mono font-bold text-amber-400 mt-1 mb-2">
                    {currentLang === 'es' ? item.outletEs : item.outletEn}
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-neutral-300 leading-relaxed font-sans mb-3">
                    {currentLang === 'es' ? item.summaryEs : item.summaryEn}
                  </p>
                </div>

                {/* Footer: Tags & Action Links */}
                <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-black/60 text-neutral-400 px-1.5 py-0.2 border border-white/10 text-[9px] font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-white hover:bg-[#facc15] text-black font-mono font-black text-[10px] uppercase border-2 border-black shadow-[1px_1px_0px_#000] transition-all flex items-center space-x-1"
                    >
                      <span>{currentLang === 'es' ? 'LEER ARTÍCULO' : 'READ'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bar */}
        <div className="px-5 py-2.5 bg-black border-t-2 border-black flex items-center justify-between text-xs font-mono text-neutral-400 shrink-0">
          <span>{currentLang === 'es' ? 'ARCHIVO DOCUMENTAL DE ACCESO ABIERTO' : 'OPEN ACCESS INVESTIGATIVE ARCHIVE'}</span>
          <span className="text-white font-bold">||| | ||||| || |||||| | |||</span>
        </div>
      </div>
    </div>
  );
};
