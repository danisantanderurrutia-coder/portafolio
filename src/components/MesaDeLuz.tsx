import React, { useState } from 'react';
import { 
  Play, 
  ExternalLink, 
  Maximize2, 
  X, 
  Sparkles, 
  Layers, 
  Eye, 
  Volume2, 
  Compass, 
  FileText,
  Flame,
  Droplets,
  Megaphone,
  Microscope,
  Check
} from 'lucide-react';
import { Language, MediaItem } from '../types';
import { resolveAsset } from '../App';

interface LightTableArtifact {
  id: string;
  category: 'science' | 'comms';
  thread: 'agua' | 'fuego' | 'palabra' | 'general';
  titleEn: string;
  titleEs: string;
  subtitleEn?: string;
  subtitleEs?: string;
  roleEn: string;
  roleEs: string;
  type: 'plate' | 'woodcut' | 'audio' | 'video' | 'press' | 'bracket';
  src?: string;
  srcEn?: string;
  embedUrl?: string;
  url?: string;
  date?: string;
  source: string;
  folio: string;
  captionEn: string;
  captionEs: string;
  tags: string[];
  tapeRotation?: string; // Slight organic angle
}

// Curated selection of representative artifacts connecting science and communications
const tableArtifacts: LightTableArtifact[] = [
  // 1. CIENCIA: Lámina de Modelación de Cuencas Maule
  {
    id: 'sci-cuencas-maule',
    category: 'science',
    thread: 'agua',
    titleEn: 'Watershed Hydrogeophysical Modeling & Land Use Balance',
    titleEs: 'Modelación Hidrogeofísica de Cuencas y Balances Ecohidrológicos',
    subtitleEn: 'Maule River Catchment & Peatland Hydrodynamics • Kiel / Poznań',
    subtitleEs: 'Cuenca del Maule y Dinámica Hídrica • Kiel / Poznań',
    roleEn: 'Biophysical Catchment Modeler',
    roleEs: 'Modelador Hidrogeofísico de Cuencas',
    type: 'plate',
    src: '/portfolio_pages/page_3.png',
    srcEn: '/portfolio_pages_en/page_3.png',
    date: '2023-2025',
    source: 'Dossier Científico // CAU Kiel & U. de Chile',
    folio: 'SCI-03 // HYDRO',
    captionEn: 'Empirical cross-sectional ecohydrological simulation evaluating how pine and eucalyptus tree plantations disrupt baseline groundwater recharge and streamflow across Maule catchments.',
    captionEs: 'Simulación hidrogeológica de cuenca que demuestra empíricamente cómo el monocultivo forestal de pino y eucalipto agota las napas freáticas y reduce el caudal en las cuencas del Maule.',
    tags: ['Hidrología', 'Cuencas', 'Modelación', 'Maule', 'U. de Chile'],
    tapeRotation: 'rotate-[0.5deg]'
  },

  // 2. COMMS: Apruebo Rural Linocut Posters
  {
    id: 'comms-apruebo-rural',
    category: 'comms',
    thread: 'agua',
    titleEn: 'Apruebo Rural: Peasant Water Defense & Linocut Agitation',
    titleEs: 'Apruebo Rural: Defensa Campesina del Agua & Xilografía Popular',
    subtitleEn: 'National Campaign for Water as a Human Right & Peasant Seed Sovereignty',
    subtitleEs: 'Campaña Nacional por el Agua como Derecho Humano y Semillas Libres',
    roleEn: 'Campaign Creative Director & Printmaker',
    roleEs: 'Director Creativo de Campaña & Grabador',
    type: 'woodcut',
    src: '/images/apruebo_rural_1.png',
    date: '2022',
    source: 'Archivo Serigráfico Apruebo Rural // Maule & Nacional',
    folio: 'COM-01 // GRABADO',
    captionEn: 'Original woodblock linocut prints hand-pressed on craft paper for rural water assemblies, smallholders, and peasant unions, positioning the end of the private water code directly into national voting agendas.',
    captionEs: 'Grabados en linóleo y xilografía popular impresos a mano para comités de agua potable rural y sindicatos campesinos, instalando la desprivatización del agua y la defensa de semillas campesinas en el debate constitucional.',
    tags: ['Linograbado', 'Agua para los Pueblos', 'Campaña Rural', 'Xilografía'],
    tapeRotation: '-rotate-[1deg]'
  },

  // 3. COMMS: Cámara de Diputadas/os - Incendio y Modelo Forestal
  {
    id: 'comms-congreso-incendios',
    category: 'comms',
    thread: 'fuego',
    titleEn: 'Parliamentary Hearing: Forestry Monopoly & Catastrophic Wildfires',
    titleEs: 'Intervención en Cámara de Diputados: Megaincendios y Monocultivo',
    subtitleEn: 'Emergency, Disaster & Firefighter Commission // National Congress of Chile',
    subtitleEs: 'Comisión de Emergencia, Desastres y Bomberos // Congreso Nacional',
    roleEn: 'Technical Spokesperson & Grassroots Delegate',
    roleEs: 'Vocero Técnico & Delegado Territorial',
    type: 'video',
    embedUrl: 'https://www.youtube.com/embed/7eJ-pQ3qe8o',
    url: 'https://www.youtube.com/watch?v=7eJ-pQ3qe8o',
    date: '2023',
    source: 'Cámara de Diputadas y Diputados de Chile',
    folio: 'COM-02 // CONGRESO',
    captionEn: 'Live parliamentary testimony before the Chamber of Deputies using hard biophysical wildfire spread data to demand statutory buffer zones between industrial tree plantations and rural human settlements.',
    captionEs: 'Exposición oficial en el Congreso Nacional presentando la correlación entre las plantaciones forestales continuas y la propagación de megaincendios, exigiendo fajas de amortiguación obligatorias para proteger poblados.',
    tags: ['Congreso Nacional', 'Fiscalización', 'Megaincendios', 'Evidencia Técnica'],
    tapeRotation: 'rotate-[1.5deg]'
  },

  // 4. CIENCIA: Gemelo Digital de Cuenca & Turberas Europeas
  {
    id: 'sci-gemelo-digital',
    category: 'science',
    thread: 'fuego',
    titleEn: 'Digital Twin of Peatlands & GHG Flux Quantification',
    titleEs: 'Gemelo Digital de Turberas y Cuantificación de Flujos de GEI',
    subtitleEn: 'Eddy Covariance & Soil Physics • CAU Kiel / AMU Poznań',
    subtitleEs: 'Eddy Covariance y Física de Suelos • Alemania / Polonia',
    roleEn: 'Environmental Scientist (Dual M.Sc.)',
    roleEs: 'Científico Ambiental (Doble Maestría)',
    type: 'plate',
    src: '/portfolio_pages/page_4.png',
    srcEn: '/portfolio_pages_en/page_4.png',
    date: '2024-2025',
    source: 'CAU Kiel (Alemania) & AMU Poznań (Polonia)',
    folio: 'SCI-04 // TURBERAS',
    captionEn: 'Sensor telemetry and digital twin modeling of restored peatland soils, assessing carbon sequestration thresholds and fire vulnerability in northern temperate European ecosystems.',
    captionEs: 'Telemetría de sensores y gemelo digital de suelos de turbera restaurados en Alemania y Polonia, modelando umbrales de captura de carbono y vulnerabilidad ante sequías e incendios.',
    tags: ['Turberas', 'Gemelo Digital', 'Gases de Efecto Invernadero', 'Alemania', 'Polonia'],
    tapeRotation: '-rotate-[0.5deg]'
  },

  // 5. COMMS: Radio Comunitaria Maule Sur
  {
    id: 'comms-radio-maule',
    category: 'comms',
    thread: 'agua',
    titleEn: 'Community Radio Broadcast: "El Maule Sur También Existe"',
    titleEs: 'Transmisión Radial Comunitaria: "El Maule Sur También Existe"',
    subtitleEn: 'Live Studio Broadcast // Radio Cristalina 96.3 FM & Regional Transmitters',
    subtitleEs: 'Estudio en Vivo // Radio Cristalina 96.3 FM y Red Regional',
    roleEn: 'Radio Panellist & Grassroots Correspondent Trainer',
    roleEs: 'Panelista Radial & Capacitador de Corresponsales',
    type: 'audio',
    src: '/maule_sur_radio.jpg',
    date: '2022-Presente',
    source: 'Radio Cristalina 96.3 FM // Maule Sur',
    folio: 'COM-03 // RADIO',
    captionEn: 'Weekly live radio broadcast translating complex hydrology, forestry agribusiness concessions, and rural water rights into everyday peasant language across southern Maule communes.',
    captionEs: 'Programa radial semanal que traduce balances hidrológicos, derechos de agua campesinos y conflictos forestales al lenguaje cotidiano de las comunidades rurales del Maule Sur.',
    tags: ['Radio Comunitaria', 'Maule Sur', 'Educación Popular', 'Corresponsales'],
    tapeRotation: 'rotate-[0.8deg]'
  },

  // 6. COMMS: Investigación Periodística EPN Biomasa
  {
    id: 'comms-prensa-epn',
    category: 'comms',
    thread: 'fuego',
    titleEn: 'Investigative Exposé: Biomass Greenwashing & Forest Devastation',
    titleEs: 'Reportaje de Investigación: El Fraude de la Biomasa Forestal',
    subtitleEn: 'Environmental Paper Network (EPN) // Landmark Investigation',
    subtitleEs: 'Environmental Paper Network (EPN) // Cobertura de Medios',
    roleEn: 'Lead Investigative Journalist',
    roleEs: 'Periodista de Investigación Principal',
    type: 'press',
    src: '/press_covers/epn_cover.png',
    url: 'https://environmentalpaper.org',
    date: '2023',
    source: 'Environmental Paper Network (EPN) // Hemeroteca',
    folio: 'COM-04 // PRENSA',
    captionEn: 'Co-authored investigative report proving that subsidizing industrial biomass pellets triggers native forest clear-cutting and acute respiratory health crises in southern Chile.',
    captionEs: 'Investigación periodística de impacto internacional que desmanteló el "greenwashing" de las centrales de biomasa, demostrando que subsidian la tala de bosque nativo y agravan la crisis respiratoria comunitaria.',
    tags: ['Investigación', 'Biomasa', 'Prensa', 'EPN'],
    tapeRotation: '-rotate-[1.2deg]'
  },

  // 7. CIENCIA: Red de Monitoreo Hidrológico en Terreno
  {
    id: 'sci-sensores-terreno',
    category: 'science',
    thread: 'agua',
    titleEn: 'Field Sensor Telemetry Network: Ecosystem & Water Monitoring',
    titleEs: 'Red de Sensores de Terreno: Monitoreo Hidrológico In Situ',
    subtitleEn: 'Ecosystem & Water Monitoring Stations in Maule Basins • Geophysics',
    subtitleEs: 'Estaciones de Monitoreo Hidrológico en Cuencas del Maule • Geofísica',
    roleEn: 'Field Geophysicist & Sensor Engineer',
    roleEs: 'Geofísico de Terreno & Ingeniero de Sensores',
    type: 'plate',
    src: '/portfolio_pages/page_5.png',
    srcEn: '/portfolio_pages_en/page_5.png',
    date: '2021-2024',
    source: 'Expedición Geofísica // FCFM U. de Chile',
    folio: 'SCI-05 // TELEMETRÍA',
    captionEn: 'Installation and maintenance of in-situ soil moisture sensor probes, piezometers, and micro-meteorological logging stations across Maule watersheds.',
    captionEs: 'Diseño e instalación de sondas de humedad de suelo, piezómetros y estaciones de registro meteorológico continuo en las microcuencas del Maule para capturar datos biofísicos de primera fuente.',
    tags: ['Sensores', 'Geofísica', 'Terreno', 'Monitoreo In Situ'],
    tapeRotation: 'rotate-[0.3deg]'
  },

  // 8. COMMS: Cuarentena Rap & Cultura Hip-Hop Libre
  {
    id: 'comms-cuarentena-rap',
    category: 'comms',
    thread: 'palabra',
    titleEn: 'Cuarentena Rap: Underground Digital Hip-Hop Battles',
    titleEs: 'Cuarentena Rap: Torneo Nacional de Freestyle Popular',
    subtitleEn: 'Mass Youth Cultural Organizing // Live Stream Tournament & Mutual Aid',
    subtitleEs: 'Organización Cultural Masiva // Torneo Online y Apoyo Mutuo',
    roleEn: 'Tournament Founder, Executive Producer & Host',
    roleEs: 'Fundador, Productor Ejecutivo y Host',
    type: 'bracket',
    src: '/youtube_covers/eQ8o4xRh2cI.jpg',
    url: 'https://www.youtube.com/watch?v=eQ8o4xRh2cI',
    date: '2020-2021',
    source: 'Archivo Audiovisual // Cuarentena Rap Oficial',
    folio: 'COM-05 // HIP-HOP',
    captionEn: 'Pioneered Chile’s premier online freestyle tournament during COVID lockdowns, mobilizing thousands of youth around social commentary, community mutual aid, and street poetry.',
    captionEs: 'Fundó y produjo el torneo nacional de rap freestyle online durante el confinamiento, canalizando la voz de cientos de jóvenes de poblaciones con batallas temáticas y redes de acopio comunitario.',
    tags: ['Hip-Hop', 'Freestyle', 'Cultura Popular', 'Juventud'],
    tapeRotation: '-rotate-[1deg]'
  },

  // 9. COMMS: Primera Línea Prensa (+700k Audiencia)
  {
    id: 'comms-plp-redaccion',
    category: 'comms',
    thread: 'palabra',
    titleEn: 'Primera Línea Prensa: Mass Grassroots Newsroom (+700k)',
    titleEs: 'Primera Línea Prensa: Redacción Popular Masiva (+700k)',
    subtitleEn: 'Independent Citizen Journalism Feed // Millions of Monthly Impressions',
    subtitleEs: 'Periodismo Ciudadano Independiente // Millones de Impresiones',
    roleEn: 'Founder & Newsroom Director',
    roleEs: 'Fundador & Director de Redacción',
    type: 'press',
    src: '/plp/plp_header_consigna.png',
    url: 'https://www.primeralineaprensa.cl',
    date: '2019-2022',
    source: 'Primera Línea Prensa // Archivo Histórico',
    folio: 'COM-06 // PRENSA',
    captionEn: 'Scaled a grassroots citizen reporting collective into a +700,000 follower digital outlet during the social uprising, verifying and broadcasting frontline footage with zero corporate sponsorship.',
    captionEs: 'Construyó un medio digital de más de 700.000 seguidores orgánicos que cubrió el estallido social y la crisis política desde la calle, sin pautas corporativas ni censura editorial.',
    tags: ['+700k', 'Primera Línea', 'Prensa Ciudadana', 'Derechos Humanos'],
    tapeRotation: 'rotate-[0.6deg]'
  },

  // 10. CIENCIA: Dossier Curricular y Perfil Científico
  {
    id: 'sci-portada-dossier',
    category: 'science',
    thread: 'general',
    titleEn: 'Executive Scientific Dossier: Biophysical Quantification & Policy',
    titleEs: 'Expediente Científico Ejecutivo: Cuantificación Biofísica y Política',
    subtitleEn: 'CAU Kiel (Germany) • AMU Poznań (Poland) • FCFM Universidad de Chile',
    subtitleEs: 'CAU Kiel (Alemania) • AMU Poznań (Polonia) • FCFM Universidad de Chile',
    roleEn: 'Environmental Geophysicist & Catchment Specialist',
    roleEs: 'Geofísico Ambiental & Especialista en Cuencas',
    type: 'plate',
    src: '/portfolio_pages/page_1.png',
    srcEn: '/portfolio_pages_en/page_1.png',
    date: '2020-2026',
    source: 'Expediente Oficial // Kiel, Poznań & Santiago',
    folio: 'SCI-01 // CURRICULAR',
    captionEn: 'Curricular overview articulating engineering geophysics rigor from Universidad de Chile with double European master qualifications in Environmental Protection and Integrated Catchment Management.',
    captionEs: 'Síntesis curricular que articula la formación en ingeniería geofísica de la Universidad de Chile con la doble maestría europea en protección ambiental y gestión integrada de cuencas en Alemania y Polonia.',
    tags: ['Geofísica', 'Doble Maestría', 'Alemania', 'Polonia', 'U. de Chile'],
    tapeRotation: '-rotate-[0.4deg]'
  }
];

type LightFilter = 'all' | 'agua' | 'fuego' | 'palabra' | 'science' | 'comms';

interface MesaDeLuzProps {
  currentLang: Language;
  onOpenItemModal?: (item: MediaItem) => void;
}

export const MesaDeLuz: React.FC<MesaDeLuzProps> = ({ currentLang }) => {
  const [activeFilter, setActiveFilter] = useState<LightFilter>('all');
  const [selectedArtifact, setSelectedArtifact] = useState<LightTableArtifact | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Filter artifacts according to active light filter
  const filteredArtifacts = tableArtifacts.filter((art) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'science') return art.category === 'science';
    if (activeFilter === 'comms') return art.category === 'comms';
    return art.thread === activeFilter;
  });

  return (
    <div className="relative w-full min-h-screen bg-[#f3efe4] text-[#1c1917] select-none overflow-x-hidden pb-16">
      
      {/* 1. MESA DE DIBUJO Y CORTE: BORDES Y REGLETA TOPOGRÁFICA TÉCNICA */}
      <div className="w-full bg-[#e8deca] border-b-2 border-[#cfbe9f] px-3 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-[#6b5842] shadow-inner">
        <div className="flex items-center space-x-3">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#b85d38] animate-pulse" />
          <span className="font-bold tracking-wider uppercase text-[#1c1917]">
            {currentLang === 'es' ? 'MESA DE LUZ DE TALLER & LABORATORIO // PLIEGO CURATORIAL' : 'WORKSHOP LIGHT TABLE & RESEARCH BOARD // CURATORIAL FIELD'}
          </span>
          <span className="opacity-40">|</span>
          <span className="hidden sm:inline text-[#2d5a3c] font-bold">
            ESCALA 1:1 • SUPERFICIE ILUMINADA
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline opacity-70">
            COORDENADAS: 35°42'S 71°35'W (MAULE) ⇄ 54°19'N 10°08'E (KIEL)
          </span>
          <span className="px-2 py-0.5 rounded bg-[#fdfbf7] border border-[#cfbe9f] font-bold text-[#8a3315]">
            {filteredArtifacts.length} {currentLang === 'es' ? 'ARTEFACTOS SOBRE LA MESA' : 'ARTIFACTS ON BOARD'}
          </span>
        </div>
      </div>

      {/* 2. HEADER CONCEPTUAL & CONTROL DE LENTES DE LUZ */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-5 border-b-2 border-[#d5c3a4]">
          <div>
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-[#fdfbf7] border border-[#d5c3a4] font-mono text-[10px] text-[#7f3419] font-bold uppercase mb-2 shadow-sm">
              <Sparkles className="w-3 h-3 text-[#b85d38]" />
              <span>{currentLang === 'es' ? 'FORMATO MESA DE LUZ: CERO CARRUSELES' : 'LIGHT TABLE FORMAT: ZERO CAROUSELS'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1c1917] tracking-tight">
              {currentLang === 'es' ? 'La Mesa de Luz del Territorio' : 'The Territorial Lightboard'}
            </h1>
            <p className="text-xs sm:text-sm text-[#5c4f3f] font-serif max-w-2xl mt-1 leading-relaxed">
              {currentLang === 'es'
                ? 'Todos los documentos conviven en la misma mesa de imprenta y laboratorio: los grabados populares, las mediciones de cuenca, la radio campesina y las pruebas científicas. Usa los filtros de luz para trazar las conexiones.'
                : 'All artifacts rest simultaneously on the workshop table: peasant woodcuts, watershed models, community radio tapes, and scientific evidence. Use curatorial light filters to trace cross-disciplinary connections.'}
            </p>
          </div>

          {/* LENTES DE ILUMINACIÓN DE LA MESA (CURATORIAL FILTERS) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#e8decb] border border-[#cfbe9f] shadow-inner">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all flex items-center space-x-1.5 ${
                activeFilter === 'all'
                  ? 'bg-[#1c1917] text-[#fdfbf7] font-bold shadow-sm'
                  : 'text-[#6b5842] hover:text-[#1c1917] hover:bg-[#f6efe2]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{currentLang === 'es' ? 'Mesa Completa' : 'Full Board'}</span>
            </button>

            <button
              onClick={() => setActiveFilter('agua')}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all flex items-center space-x-1.5 ${
                activeFilter === 'agua'
                  ? 'bg-[#2b597a] text-white font-bold shadow-sm'
                  : 'text-[#6b5842] hover:text-[#1c1917] hover:bg-[#f6efe2]'
              }`}
            >
              <Droplets className="w-3.5 h-3.5 text-sky-400" />
              <span>{currentLang === 'es' ? 'Ruta del Agua' : 'Water Thread'}</span>
            </button>

            <button
              onClick={() => setActiveFilter('fuego')}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all flex items-center space-x-1.5 ${
                activeFilter === 'fuego'
                  ? 'bg-[#9c4928] text-white font-bold shadow-sm'
                  : 'text-[#6b5842] hover:text-[#1c1917] hover:bg-[#f6efe2]'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              <span>{currentLang === 'es' ? 'Ruta del Fuego' : 'Fire Thread'}</span>
            </button>

            <button
              onClick={() => setActiveFilter('palabra')}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all flex items-center space-x-1.5 ${
                activeFilter === 'palabra'
                  ? 'bg-[#7a3920] text-white font-bold shadow-sm'
                  : 'text-[#6b5842] hover:text-[#1c1917] hover:bg-[#f6efe2]'
              }`}
            >
              <Megaphone className="w-3.5 h-3.5 text-amber-200" />
              <span>{currentLang === 'es' ? 'Ruta de la Palabra' : 'Voice Thread'}</span>
            </button>

            <button
              onClick={() => setActiveFilter('science')}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all flex items-center space-x-1.5 ${
                activeFilter === 'science'
                  ? 'bg-[#2d5a3c] text-white font-bold shadow-sm'
                  : 'text-[#6b5842] hover:text-[#1c1917] hover:bg-[#f6efe2]'
              }`}
            >
              <Microscope className="w-3.5 h-3.5 text-emerald-300" />
              <span>{currentLang === 'es' ? 'Solo Ciencia' : 'Science Only'}</span>
            </button>

            <button
              onClick={() => setActiveFilter('comms')}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all flex items-center space-x-1.5 ${
                activeFilter === 'comms'
                  ? 'bg-[#8f3e1b] text-white font-bold shadow-sm'
                  : 'text-[#6b5842] hover:text-[#1c1917] hover:bg-[#f6efe2]'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-orange-200" />
              <span>{currentLang === 'es' ? 'Solo Campañas' : 'Comms Only'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. EL TABLERO DE LUZ ILUMINADO (MATRIZ ORGANICA DE DOCUMENTOS) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-3">
        {/* Registration Crop Marks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredArtifacts.map((art) => {
            const isScience = art.category === 'science';

            return (
              <div
                key={art.id}
                onClick={() => setSelectedArtifact(art)}
                className={`group relative cursor-pointer rounded-xl bg-[#fdfbf7] border-2 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl overflow-hidden flex flex-col justify-between ${art.tapeRotation || ''} ${
                  isScience 
                    ? 'border-[#a8c4a9] hover:border-[#2d5a3c] shadow-[0_4px_16px_rgba(45,90,60,0.08)]' 
                    : 'border-[#dfa38f] hover:border-[#9c4928] shadow-[0_4px_16px_rgba(156,73,40,0.08)]'
                }`}
              >
                {/* Visual Paper Tape on Top Edge (Efecto físico de pliego fijado con cinta kraft) */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#e8dec7]/90 border border-[#cfbe9f] rounded-sm transform rotate-1 z-20 shadow-sm pointer-events-none" />

                {/* Top Folio Ticker */}
                <div className="px-4 pt-3.5 pb-2 bg-[#f6efe2] border-b border-[#e2d5bf] flex items-center justify-between text-[10px] font-mono">
                  <div className="flex items-center space-x-2">
                    <span className={`w-2 h-2 rounded-full ${isScience ? 'bg-[#2d5a3c]' : 'bg-[#9c4928]'}`} />
                    <span className={`font-bold tracking-wider ${isScience ? 'text-[#2d5a3c]' : 'text-[#9c4928]'}`}>
                      {art.folio}
                    </span>
                  </div>
                  <span className="text-[#786b5e] uppercase">
                    {art.type.toUpperCase()}
                  </span>
                </div>

                {/* Viewport de Imagen / Medio Real */}
                <div className="relative w-full aspect-[4/3] bg-[#ede5d6] overflow-hidden flex items-center justify-center p-2.5">
                  {art.type === 'video' && art.embedUrl ? (
                    <div className="relative w-full h-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
                      <iframe
                        src={art.embedUrl}
                        title={art.titleEs}
                        className="w-full h-full pointer-events-none opacity-90"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                        <div className="w-12 h-12 rounded-full bg-[#9c4928] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 ml-0.5" />
                        </div>
                      </div>
                    </div>
                  ) : art.type === 'audio' ? (
                    /* Pletina de Casete Analógico de Radio */
                    <div className="w-full h-full p-4 rounded-lg bg-[#251f1a] text-[#f5ede4] flex flex-col justify-between border-2 border-[#544335] shadow-inner">
                      <div className="flex items-center justify-between font-mono text-[9px] text-[#c97d3e]">
                        <span>RADIO CRISTALINA 96.3 FM</span>
                        <span>SIDE A • MONO</span>
                      </div>
                      <div className="flex items-center justify-center space-x-4 my-2">
                        <div className="w-10 h-10 rounded-full border-2 border-[#c97d3e] flex items-center justify-center animate-spin" style={{ animationDuration: '8s' }}>
                          <div className="w-3 h-3 bg-[#c97d3e] rounded-full" />
                        </div>
                        <div className="w-12 h-3 bg-[#3d332a] rounded flex items-center justify-center">
                          <div className="w-8 h-1 bg-[#c97d3e]/80 rounded" />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-[#c97d3e] flex items-center justify-center animate-spin" style={{ animationDuration: '8s' }}>
                          <div className="w-3 h-3 bg-[#c97d3e] rounded-full" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#a39482]">
                        <span>CÁPSULA MAULE SUR</span>
                        <Volume2 className="w-3.5 h-3.5 text-[#c97d3e]" />
                      </div>
                    </div>
                  ) : art.src ? (
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-white shadow-sm flex items-center justify-center p-1">
                      <img
                        src={resolveAsset(art.src)}
                        alt={currentLang === 'es' ? art.titleEs : art.titleEn}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Loupe Overlay Pill */}
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#1c1917]/80 text-white font-mono text-[9px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1 shadow-md">
                        <Maximize2 className="w-2.5 h-2.5" />
                        <span>{currentLang === 'es' ? 'Examinar pliego' : 'Inspect'}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-[#f4ece0] flex items-center justify-center text-[#786b5e] font-mono text-xs">
                      DOCUMENTO EN FICHERO
                    </div>
                  )}
                </div>

                {/* Contenido Editorial de la Ficha */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-[#fdfbf7]">
                  <div>
                    <div className="flex items-center space-x-2 text-[10px] font-mono text-[#786b5e] mb-1">
                      <span>{art.source}</span>
                      {art.date && <span>• {art.date}</span>}
                    </div>

                    <h3 className="font-serif font-bold text-base sm:text-lg leading-snug text-[#1c1917] group-hover:text-[#9c4928] transition-colors">
                      {currentLang === 'es' ? art.titleEs : art.titleEn}
                    </h3>

                    {(art.subtitleEs || art.subtitleEn) && (
                      <p className={`text-xs font-sans font-medium mt-0.5 ${isScience ? 'text-[#2d5a3c]' : 'text-[#8a3315]'}`}>
                        {currentLang === 'es' ? art.subtitleEs : art.subtitleEn}
                      </p>
                    )}

                    <p className="text-xs font-serif text-[#463e36] mt-2 line-clamp-3 leading-relaxed">
                      {currentLang === 'es' ? art.captionEs : art.captionEn}
                    </p>
                  </div>

                  {/* Tags & Action Stamp */}
                  <div className="pt-2 border-t border-[#e8dfcf] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {art.tags.slice(0, 2).map((t, tIdx) => (
                        <span key={tIdx} className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-[#f4ede0] text-[#6b5842]">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <span className="text-[10px] font-mono font-bold text-[#8a3315] group-hover:translate-x-0.5 transition-transform flex items-center space-x-1">
                      <span>{currentLang === 'es' ? 'Ver Ficha' : 'Open'}</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. MODAL "LUPA DE INSPECCIÓN CURATORIAL" (CUANDO SE PINCHA CUALQUIER PLIEGO) */}
      {selectedArtifact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#181512]/80 backdrop-blur-md animate-fadeIn">
          {/* Backdrop dismiss */}
          <div className="absolute inset-0" onClick={() => setSelectedArtifact(null)} />

          <div className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-[#fdfbf7] border-2 border-[#d5c3a4] rounded-2xl shadow-2xl overflow-hidden flex flex-col text-[#1c1917]">
            {/* Lupa Top Bar */}
            <div className="px-5 py-3 bg-[#e8decb] border-b border-[#cfbe9f] flex items-center justify-between shrink-0 font-mono text-xs">
              <div className="flex items-center space-x-3">
                <span className={`w-3 h-3 rounded-full ${selectedArtifact.category === 'science' ? 'bg-[#2d5a3c]' : 'bg-[#9c4928]'}`} />
                <span className="font-bold tracking-widest text-[#1c1917]">
                  {selectedArtifact.folio} // {currentLang === 'es' ? 'LUPA DE TALLER' : 'INSPECTION LOUPE'}
                </span>
                <span className="opacity-40">•</span>
                <span className="text-[#6b5842]">{selectedArtifact.source}</span>
              </div>

              <div className="flex items-center space-x-2">
                {selectedArtifact.url && (
                  <a
                    href={selectedArtifact.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded bg-[#fdfbf7] hover:bg-[#9c4928] text-[#8a3315] hover:text-white border border-[#cfbe9f] text-xs font-serif transition flex items-center space-x-1"
                  >
                    <span>{currentLang === 'es' ? 'Abrir Fuente Original' : 'Original Source'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedArtifact(null)}
                  className="p-1 rounded-full text-[#6b5842] hover:text-black hover:bg-[#d5c3a4] transition"
                  title="Cerrar Lupa (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lupa Body: Full inspection */}
            <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
              {/* Media Viewport */}
              <div className="w-full bg-[#ebe3d3] border-2 border-[#d5c3a4] rounded-xl overflow-hidden flex items-center justify-center p-3 sm:p-5">
                {selectedArtifact.type === 'video' && selectedArtifact.embedUrl ? (
                  <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-xl">
                    <iframe
                      src={selectedArtifact.embedUrl}
                      title={selectedArtifact.titleEs}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : selectedArtifact.type === 'audio' ? (
                  <div className="w-full max-w-xl p-6 rounded-xl bg-[#251f1a] text-[#f5ede4] flex flex-col items-center justify-center text-center space-y-4 border-2 border-[#544335] shadow-xl">
                    <div className="w-16 h-16 rounded-full bg-[#c97d3e]/20 border-2 border-[#c97d3e] flex items-center justify-center text-[#c97d3e]">
                      <Volume2 className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#c97d3e]">
                        {currentLang === 'es' ? 'CÁPSULA RADIAL COMUNITARIA // 96.3 FM' : 'COMMUNITY RADIO ARCHIVE // 96.3 FM'}
                      </span>
                      <h4 className="text-lg font-serif font-bold text-white mt-1">
                        {currentLang === 'es' ? selectedArtifact.titleEs : selectedArtifact.titleEn}
                      </h4>
                      <p className="text-xs font-mono text-neutral-400 mt-0.5">{selectedArtifact.source}</p>
                    </div>
                  </div>
                ) : selectedArtifact.src ? (
                  <div className="w-full flex items-center justify-center bg-white rounded-lg p-2 shadow-sm">
                    <img
                      src={resolveAsset(selectedArtifact.src)}
                      alt={currentLang === 'es' ? selectedArtifact.titleEs : selectedArtifact.titleEn}
                      className="w-auto h-auto max-h-[70vh] object-contain rounded"
                    />
                  </div>
                ) : null}
              </div>

              {/* Comprehensive Description & Context */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#8a3315] uppercase tracking-wider mb-1">
                    <span>{selectedArtifact.source}</span>
                    {selectedArtifact.date && <span>• {selectedArtifact.date}</span>}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1c1917] leading-tight">
                    {currentLang === 'es' ? selectedArtifact.titleEs : selectedArtifact.titleEn}
                  </h2>

                  {(selectedArtifact.subtitleEs || selectedArtifact.subtitleEn) && (
                    <p className={`text-sm font-sans font-medium mt-1 ${selectedArtifact.category === 'science' ? 'text-[#2d5a3c]' : 'text-[#8a3315]'}`}>
                      {currentLang === 'es' ? selectedArtifact.subtitleEs : selectedArtifact.subtitleEn}
                    </p>
                  )}
                </div>

                <div className="p-4 rounded-xl bg-[#f6efe2] border border-[#d5c3a4] space-y-2">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#7f3419] font-bold">
                    {currentLang === 'es' ? 'DESCRIPCIÓN DEL ARTEFACTO & IMPACTO' : 'ARTIFACT SYNOPSIS & IMPACT'}
                  </div>
                  <p className="text-sm font-serif text-[#352f29] leading-relaxed">
                    {currentLang === 'es' ? selectedArtifact.captionEs : selectedArtifact.captionEn}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#e2d5bf]">
                  {selectedArtifact.tags.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded font-mono text-xs bg-[#f4ede0] border border-[#d5c3a4] text-[#6b5842]">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
