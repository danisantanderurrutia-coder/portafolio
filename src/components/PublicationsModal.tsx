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
  // 1. EPN 2024 BIOMASS REPORT
  {
    id: 'epn-2024',
    category: 'policy',
    titleEn: 'Spotlight on Burning Biomass for Energy in South America',
    titleEs: 'Spotlight on Burning Biomass for Energy in South America (Informe EPN 2024)',
    outletEn: 'Environmental Paper Network (EPN) // International Investigation',
    outletEs: 'Environmental Paper Network (EPN) // Investigación Internacional',
    date: '2024',
    url: 'https://environmentalpaper.org/biomass/',
    src: '/portfolio_pages/page_5.png',
    badgeEn: 'LEAD TECHNICAL AUTHOR',
    badgeEs: 'AUTOR PRINCIPAL',
    badgeColor: 'bg-red-600 text-white',
    summaryEn: 'Landmark international investigative report exposing critical carbon accounting loopholes under the EU Renewable Energy Directive (RED III) and EU ETS regarding industrial forestry biomass extraction across South America.',
    summaryEs: 'Informe investigativo internacional que expone las fallas críticas de contabilidad de carbono bajo la Directiva de Energías Renovables de la UE (RED III) y el mercado ETS sobre la extracción de biomasa forestal en Sudamérica.',
    tags: ['EPN', 'Biomasa', 'RED III', 'Carbon Accounting', 'UE']
  },

  // 2. TETRALOGÍA OLCA
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

  // 3. DIRK KOCK-ROHWER JOINT PUBLICATION
  {
    id: 'kock-rohwer-soils',
    category: 'policy',
    titleEn: 'Agricultural Soil Conservation & Agroecological Transition in Germany',
    titleEs: 'Conservación de Suelos Agrícolas y Transición Agroecológica en Alemania',
    outletEn: 'Joint publication with German Green MP Dirk Kock-Rohwer (Schleswig-Holstein)',
    outletEs: 'Publicación conjunta con el diputado de Los Verdes Dirk Kock-Rohwer (Schleswig-Holstein)',
    date: '2024',
    url: 'https://www.dirk-kock-rohwer.de/',
    src: '/portfolio_pages/page_5.png',
    badgeEn: 'PARLIAMENTARY CO-AUTHORSHIP',
    badgeEs: 'COAUTORÍA PARLAMENTARIA',
    badgeColor: 'bg-emerald-600 text-white',
    summaryEn: 'Technical and political brief addressing sustainable soil fertility, agroecology, and the post-chemical agricultural transition in Northern Germany (Schleswig-Holstein parliament).',
    summaryEs: 'Documento técnico-político sobre fertilidad orgánica de suelos, agroecología y transición post-química en el parlamento de Schleswig-Holstein, Alemania.',
    tags: ['Schleswig-Holstein', 'Alemania', 'Suelos', 'Agroecología', 'Los Verdes']
  },

  // 4. EL DESCONCIERTO: HUMEDALES Y TURBERAS
  {
    id: 'desconcierto-humedales',
    category: 'press',
    titleEn: 'El Desconcierto: Wetland Rewetting, Fire Prevention & Peatlands',
    titleEs: 'El Desconcierto: Rehumectación de Humedales y Prevención de Incendios',
    outletEn: 'El Desconcierto // National Investigative Journalism',
    outletEs: 'El Desconcierto // Periodismo de Investigación Nacional',
    date: '2026',
    url: 'https://www.eldesconcierto.cl',
    src: '/portfolio_pages/page_5.png',
    badgeEn: 'PRESS ARTICLE',
    badgeEs: 'ARTÍCULO DE PRENSA',
    badgeColor: 'bg-blue-600 text-white',
    summaryEn: 'Analysis of peatland restoration as natural climate buffers against catastrophic fires, combining European research with Chilean watershed reality.',
    summaryEs: 'Análisis sobre la rehumectación de turberas como amortiguadores naturales frente a megaincendios, articulando la investigación europea con la realidad hídrica de Chile.',
    tags: ['El Desconcierto', 'Turberas', 'Incendios', 'Cuencas']
  },

  // 5. TOMATEROJO: BIOMASA Y SEQUÍA
  {
    id: 'tomaterojo-biomasa',
    category: 'press',
    titleEn: 'Tomaterojo: Industrial Tree Monocultures & Water Exhaustion',
    titleEs: 'Tomaterojo: Monocultivos Forestales y Agotamiento del Agua',
    outletEn: 'Tomaterojo // Environmental Journalism',
    outletEs: 'Tomaterojo // Prensa Socioambiental',
    date: '2023',
    url: 'https://tomaterojo.cl',
    src: '/portfolio_pages/page_5.png',
    badgeEn: 'INVESTIGATIVE ESSAY',
    badgeEs: 'ENSAYO INVESTIGATIVO',
    badgeColor: 'bg-orange-600 text-white',
    summaryEn: 'Empirical breakdown of the water deficit caused by extensive pine and eucalyptus plantations in the Maule region and central-southern Chile.',
    summaryEs: 'Desglose empírico del déficit hídrico y agotamiento de napas subterráneas por plantaciones de pino y eucalipto en la Región del Maule.',
    tags: ['Tomaterojo', 'Monocultivo', 'Maule', 'Agua']
  },

  // 6. CLIMATECC TREE MONOCULTURES
  {
    id: 'climatecc-monocultures',
    category: 'essays',
    titleEn: 'ClimateCC: Global Tree Monocultures & False Climate Solutions',
    titleEs: 'ClimateCC: Monocultivos Forestales y Falsas Soluciones Climáticas',
    outletEn: 'ClimateCC // International Climate Portal',
    outletEs: 'ClimateCC // Portal Climático Internacional',
    date: '2024',
    url: 'https://www.climatecc.org/forests/tree-monocultures',
    src: '/portfolio_pages/page_5.png',
    badgeEn: 'GLOBAL SERIES',
    badgeEs: 'SERIE GLOBAL',
    badgeColor: 'bg-purple-600 text-white',
    summaryEn: 'International analytical series dissecting tree monocultures, carbon credits, and environmental justice from Latin America to global climate summits.',
    summaryEs: 'Serie analítica internacional que disecciona los monocultivos arbóreos, los créditos de carbono y la justicia climática desde Latinoamérica.',
    tags: ['ClimateCC', 'Falsas Soluciones', 'Carbon Credits', 'Bosques']
  },

  // 7. ALJEZUR MUNICIPALITY (PORTUGAL)
  {
    id: 'aljezur-rewilding',
    category: 'policy',
    titleEn: 'Rewilding Aljezur: Municipal Ecological Transition & Fire Resilience',
    titleEs: 'Rewilding Aljezur: Transición Ecológica y Resiliencia frente al Fuego',
    outletEn: 'Municipality of Aljezur (Algarve, Portugal) // Policy Brief & StoryMaps',
    outletEs: 'Municipio de Aljezur (Algarve, Portugal) // Policy Brief & StoryMaps',
    date: '2024',
    url: 'https://cm-aljezur.pt',
    src: '/portfolio_pages/page_5.png',
    badgeEn: 'MUNICIPAL POLICY BRIEF',
    badgeEs: 'POLICY BRIEF MUNICIPAL',
    badgeColor: 'bg-teal-600 text-white',
    summaryEn: 'Comprehensive policy brief and GIS StoryMaps delivered to the Aljezur Municipal Council in Portugal, outlining active rewilding strategies to curb recurrent wildfire devastation.',
    summaryEs: 'Policy brief y StoryMaps SIG entregados al Concejo Municipal de Aljezur en Portugal, delineando estrategias de renaturalización activa para mitigar incendios forestales.',
    tags: ['Portugal', 'Aljezur', 'Rewilding', 'SIG', 'Incendios']
  },

  // 8. RELATOS DE LA REVUELTA (LIBRO IMPRESO)
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
