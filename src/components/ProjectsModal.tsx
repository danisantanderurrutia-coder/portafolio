import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Users, 
  Layers, 
  ExternalLink, 
  ArrowRight, 
  Sparkles,
  Code,
  Flame,
  Globe2,
  Terminal,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Mail,
  Zap,
  Target
} from 'lucide-react';
import { Language } from '../types';

const GithubIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}>
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
  </svg>
);

export interface CommercialDeliverable {
  titleEn: string;
  titleEs: string;
  descEn: string;
  descEs: string;
}

export interface SideProject {
  id: string;
  emoji: string;
  titleEn: string;
  titleEs: string;
  subtitleEn: string;
  subtitleEs: string;
  categoryEn: string;
  categoryEs: string;
  categoryColor: string;
  branch: 'science' | 'comms';
  statusBadgeEn: string;
  statusBadgeEs: string;
  statusBadgeColor: string;
  clientEn: string;
  clientEs: string;
  valuePropEn: string;
  valuePropEs: string;
  deliverablesEn: string[];
  deliverablesEs: string[];
  impactMetricEn: string;
  impactMetricEs: string;
  techStack: string[];
  notesEn: string;
  notesEs: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const ACTIVE_INNOVATION_PROJECTS: SideProject[] = [
  // ==========================================
  // RAMA CIENCIA & MODELACIÓN AMBIENTAL (4)
  // ==========================================
  {
    id: 'permacultura',
    emoji: '🌾',
    titleEn: 'Chile Agrotech & AgriTwin Platform',
    titleEs: 'Chile Agrotech & Plataforma AgriTwin',
    subtitleEn: 'Precision Agriculture IoT & Soil Telemetry Digital Twin — Maule, Chile',
    subtitleEs: 'Tecnología Agrícola de Precisión & Gemelo Digital IoT — Maule, Chile',
    categoryEn: 'Agrotech, IoT & Satellites',
    categoryEs: 'Agrotech, IoT & Satélites',
    categoryColor: 'bg-emerald-600 text-white',
    branch: 'science',
    statusBadgeEn: 'COMMERCIAL READY / AGRO-SAAS',
    statusBadgeEs: 'LISTO PARA PRODUCCIÓN / SAAS',
    statusBadgeColor: 'bg-emerald-500 text-black',
    clientEn: 'Maule Agricultural Producers, Export Vineyards & Agtech Operators',
    clientEs: 'Productores Agrícolas del Maule, Viñas de Exportación & Agroindustria',
    valuePropEn: 'Precision environmental engineering platform that eliminates crop water stress and slashes agricultural water consumption by combining micro-meteorological LoRaWAN telemetry with automated Copernicus satellite vegetation indices (NDVI/NDRE).',
    valuePropEs: 'Plataforma de ingeniería ambiental de precisión que reduce el consumo de agua de riego y previene el estrés hídrico de cultivos combinando telemetría de suelo IoT LoRaWAN con índices de vegetación satelitales automáticos (Copernicus Sentinel-2 NDVI/NDRE).',
    deliverablesEn: [
      'Real-time IoT soil moisture & matric potential digital twin dashboard',
      'Automated Sentinel-2 multispectral crop stress & canopy vigor tracking pipeline',
      'Keyline regenerative water contour engineering and predictive irrigation schedules',
      'Certified ESG water footprint audit and regulatory compliance documentation'
    ],
    deliverablesEs: [
      'Panel de control y gemelo digital de telemetría de humedad y potencial mátrico en tiempo real',
      'Pipeline automatizado de monitoreo multiespectral Sentinel-2 (NDVI/NDRE) para vigor vegetal',
      'Diseño hidrológico regenerativo Keyline y cálculo predictivo de tasas óptimas de riego',
      'Auditoría y certificación de reducción de huella hídrica para estándares de exportación ESG'
    ],
    impactMetricEn: 'Up to 35% Irrigation Water Savings • Proven Maule Valley Deployment',
    impactMetricEs: 'Hasta 35% de Ahorro de Agua de Riego • Validado en el Valle del Maule',
    techStack: ['Python', 'Sentinel-2 API', 'IoT LoRaWAN', 'FastAPI', 'QGIS', 'PostGIS', 'Next.js'],
    notesEn: 'Scalable to orchards, vineyards, and cooperative water user associations (WUA).',
    notesEs: 'Escalable a viñedos, huertos comerciales y asociaciones de canalistas (Juntas de Vigilancia).',
    githubUrl: 'https://github.com/danisantanderurrutia-coder/agritwin-app'
  },
  {
    id: 'lauwersmeer',
    emoji: '🌊',
    titleEn: 'Lauwersmeer Coastal Climate Risk & SLR Engine',
    titleEs: 'Lauwersmeer: Simulación de Riesgo Costero & Marejadas',
    subtitleEn: 'Hydrodynamic 2D modeling of storm surges and sea level rise in the Wadden Sea basin',
    subtitleEs: 'Modelación hidrodinámica 2D de marejadas de tempestad y aumento del nivel del mar',
    categoryEn: 'Coastal Engineering & Climate Risk',
    categoryEs: 'Ingeniería Costera & Riesgo Climático',
    categoryColor: 'bg-blue-600 text-white',
    branch: 'science',
    statusBadgeEn: 'PRODUCTION CLIMATE ENGINE',
    statusBadgeEs: 'MODELO CLIMÁTICO VALIDADO',
    statusBadgeColor: 'bg-blue-400 text-black',
    clientEn: 'Coastal Management Authorities, Port Operators & CAU Kiel Research Group',
    clientEs: 'Autoridades Portuarias, Direcciones de Obras Hidráulicas & CAU Kiel',
    valuePropEn: 'High-resolution hydrodynamic modeling platform providing coastal engineers, port authorities, and municipalities with physics-grounded flood risk forecasts under IPCC SSP2-4.5 and SSP5-8.5 sea level rise scenarios.',
    valuePropEs: 'Plataforma de modelación hidrodinámica de alta resolución que proporciona a ingenieros costeros, autoridades portuarias y municipios pronósticos físicos de inundación bajo escenarios IPCC de cambio climático y ascenso del nivel del mar.',
    deliverablesEn: [
      'High-resolution hydrodynamic bathymetry and wave propagation simulations (Delft3D)',
      '100-year and 500-year storm surge return period inundation hazard mapping',
      'Critical infrastructure vulnerability audit and coastal barrier failure diagnostics',
      'Policy-ready executive climate risk briefing for maritime and environmental authorities'
    ],
    deliverablesEs: [
      'Simulación hidrodinámica 2D de batimetría y propagación de oleaje extremo en Delft3D',
      'Cartografía de riesgo de inundación para periodos de retorno de marejada de 100 y 500 años',
      'Auditoría de vulnerabilidad de infraestructura crítica y diagnóstico de diques costeros',
      'Informe ejecutivo de riesgo climático para autoridades marítimas y comisiones ambientales'
    ],
    impactMetricEn: '100-Year Storm Surge Modeling • 35-Year Climate Database Integration',
    impactMetricEs: 'Modelación de Marejada de 100 Años • Integración de 35 Años de Datos Climáticos',
    techStack: ['Delft3D', 'Python Hydro', 'LiDAR DEM', 'QGIS', 'Copernicus Marine', 'NetCDF'],
    notesEn: 'Grounding European coastal resilience frameworks for international ports and estuaries.',
    notesEs: 'Articulación de metodologías de resiliencia costera europea para puertos y estuarios.',
    githubUrl: 'https://github.com/danisantanderurrutia-coder/wetland-monitor'
  },
  {
    id: 'rewild',
    emoji: '🔥',
    titleEn: 'ReWild: Forestry Model & Megafire Overhaul',
    titleEs: 'ReWild: Analítica de Incendios & Mosaicos Nativos',
    subtitleEn: 'Predictive wildfire risk modeling and transition from timber monocultures to native forest mosaics',
    subtitleEs: 'Modelación predictiva de megaincendios y reconversión de monocultivos a mosaicos nativos',
    categoryEn: 'Forestry Analytics & Wildfire Risk',
    categoryEs: 'Analítica Forestal & Riesgo de Incendios',
    categoryColor: 'bg-orange-600 text-white',
    branch: 'science',
    statusBadgeEn: 'SPATIAL DECISION SUPPORT SYSTEM',
    statusBadgeEs: 'SISTEMA DE SOPORTE DE DECISIÓN ESPACIAL',
    statusBadgeColor: 'bg-orange-400 text-black',
    clientEn: 'Territorial Municipalities, Forestry Transition Networks & Watershed Coalitions',
    clientEs: 'Municipios Territoriales, Red de Superación del Modelo Forestal & Cuencas',
    valuePropEn: 'Strategic engineering and spatial analytics framework designed to replace highly combustible pine/eucalyptus monocultures with fire-resilient biological buffers, quantifying fire velocity dampening and catchment water recovery.',
    valuePropEs: 'Marco de ingeniería espacial y analítica territorial para reemplazar monocultivos combustibles de pino y eucalipto por franjas de amortiguación biológica nativa, cuantificando la reducción en la velocidad de propagación del fuego y la recuperación hídrica.',
    deliverablesEn: [
      'Wildland-Urban Interface (WUI) combustible fuel-load risk cartography',
      'Species-specific sclerophyllous native reforestation optimization algorithms',
      'Mobile & Web Spatial App for community vegetation monitoring and early hazard alert',
      'Institutional roadmaps for sustainable timber transition and watershed restoration'
    ],
    deliverablesEs: [
      'Cartografía de carga de combustible y vulnerabilidad en la interfaz urbano-forestal (IUF)',
      'Algoritmos de optimización espacial para la restauración de parches de bosque esclerófilo',
      'Aplicación espacial web y móvil para monitoreo comunitario y alerta temprana de focos',
      'Hojas de ruta institucionales para la transición forestal y restauración de cuencas'
    ],
    impactMetricEn: '100,000+ Hectares Basins Analyzed • Fire-Resilient Buffer Architecture',
    impactMetricEs: '+100.000 Hectáreas Modeladas • Arquitectura de Barreras Cortafuego Vivas',
    techStack: ['Google Earth Engine', 'Python GIS', 'Sentinel-2', 'GeoPandas', 'Streamlit', 'Rasterio'],
    notesEn: 'Empirical decision tool for public policy and territorial risk management.',
    notesEs: 'Herramienta de soporte técnico para políticas públicas de ordenamiento territorial.',
    githubUrl: 'https://github.com/danisantanderurrutia-coder/resumof'
  },
  {
    id: 'paper_fisica',
    emoji: '⚛️',
    titleEn: 'Non-Equilibrium Thermodynamics & Transport Systems',
    titleEs: 'Termodinámica & Sistemas Complejos de Transporte',
    subtitleEn: 'Mathematical modeling of stochastic dissipation and entropy production in natural systems',
    subtitleEs: 'Modelación matemática de disipación estocástica y producción de entropía territorial',
    categoryEn: 'Theoretical Physics & Modeling',
    categoryEs: 'Física Teórica & Modelación',
    categoryColor: 'bg-purple-600 text-white',
    branch: 'science',
    statusBadgeEn: 'THEORETICAL FOUNDATION / ADVANCED MATH',
    statusBadgeEs: 'FUNDAMENTO TEÓRICO / MATEMÁTICA AVANZADA',
    statusBadgeColor: 'bg-purple-400 text-black',
    clientEn: 'Academic Research Labs, Complex Systems Institutes & Advanced R&D Centers',
    clientEs: 'Laboratorios de Investigación, Institutos de Sistemas Complejos & Centros I+D',
    valuePropEn: 'Rigorous theoretical physics investigation applying non-equilibrium statistical mechanics to spatial dissipation and hydrological transport equations, bridging microscopic fluctuations with macroscopic watershed behavior.',
    valuePropEs: 'Investigación rigurosa de física teórica que aplica mecánica estadística de no equilibrio a procesos estocásticos de transporte territorial y disipación de energía, vinculando fluctuaciones microscópicas con el comportamiento macroscópico de cuencas.',
    deliverablesEn: [
      'Governing stochastic differential equations for non-linear landscape transport',
      'Entropy production calculation models for thermodynamic hydrological states',
      'Numerical solver scripts in Python / NumPy for Fokker-Planck equations',
      'Peer-reviewed manuscript ready for submission to scientific physics journals'
    ],
    deliverablesEs: [
      'Ecuaciones diferenciales estocásticas para transporte no lineal en medios porosos',
      'Modelos analíticos de producción de entropía para estados hidrológicos termodinámicos',
      'Solucionadores numéricos en Python / NumPy para ecuaciones de Fokker-Planck',
      'Manuscrito científico listo para someter a revisión por pares en revistas internacionales'
    ],
    impactMetricEn: 'Non-Linear Physics Modeling • Analytical Stochastic Framework',
    impactMetricEs: 'Modelación de Física No Lineal • Marco Estocástico Analítico',
    techStack: ['Python NumPy', 'SciPy', 'SymPy', 'LaTeX / Typst', 'Differential Equations'],
    notesEn: 'Intellectual engine powering all physical transport and environmental modeling algorithms.',
    notesEs: 'Motor intelectual que sustenta todos los algoritmos de modelación física y transporte ambiental.',
    githubUrl: 'https://github.com/danisantanderurrutia-coder'
  },

  // ==========================================
  // RAMA COMUNICACIONES & MEDIOS (4)
  // ==========================================
  {
    id: 'plp-editorial',
    emoji: '📰',
    titleEn: 'Primera Línea Prensa: High-Impact Investigative Media',
    titleEs: 'Primera Línea Prensa: Red de Periodismo de Investigación',
    subtitleEn: 'Digital news platform, verified crisis journalism, human rights documentation, and publishing house',
    subtitleEs: 'Plataforma de prensa digital, periodismo de crisis, derechos humanos y editorial autogestionada',
    categoryEn: 'Investigative Media & Publishing',
    categoryEs: 'Prensa de Investigación & Editorial',
    categoryColor: 'bg-red-600 text-white',
    branch: 'comms',
    statusBadgeEn: 'HIGH-IMPACT MEDIA NETWORK',
    statusBadgeEs: 'RED DE MEDIOS DE ALTO IMPACTO',
    statusBadgeColor: 'bg-red-500 text-white',
    clientEn: 'Independent Readers, International Human Rights Organizations & Educational Collectives',
    clientEs: 'Audiencias Independientes, Organismos Internacionales de DDHH & Colectivos Sociales',
    valuePropEn: 'Independent investigative news organization delivering real-time crisis coverage, factual verification, human rights documentation, and physical book publishing with over 700,000 digital community reach.',
    valuePropEs: 'Organización de periodismo de investigación que lideró la cobertura en terreno durante la crisis social chilena, entregando verificación de hechos, documentación audiovisual de derechos humanos y producción editorial con más de 700.000 personas de alcance.',
    deliverablesEn: [
      'High-traffic digital journalism portal and automated multi-channel newsroom pipeline',
      'Verified investigative report series on water privatization, forestry extractivism, and political rights',
      'Physical print book publishing & distribution ("Relatos de la revuelta", 44 chronicles)',
      'Independent crisis verification protocols and digital security architecture for field journalists'
    ],
    deliverablesEs: [
      'Portal de periodismo digital de alto tráfico y pipeline automatizado de distribución en redes',
      'Series de reportajes investigativos sobre privatización del agua, modelo forestal y proceso constituyente',
      'Publicación y distribución física del libro impreso «Relatos de la revuelta» (44 crónicas)',
      'Protocolos de verificación periodística y seguridad digital para corresponsales en terreno'
    ],
    impactMetricEn: '+700,000 Audience Reach • Physical Book Published & Distributed',
    impactMetricEs: '+700.000 Audiencia Alcanzada • Libro Impreso Publicado & Distribuido',
    techStack: ['WordPress Enterprise', 'Next.js', '4K Audiovisual', 'Social Syndication', 'Open Journalism'],
    notesEn: 'Benchmark in independent citizen journalism and verified grassroots documentation.',
    notesEs: 'Referente de periodismo independiente, verificación técnica y memoria histórica popular.',
    githubUrl: 'https://github.com/danisantanderurrutia-coder/primera-linea-prensa'
  },
  {
    id: 'apruebo-rural',
    emoji: '📢',
    titleEn: 'Apruebo Rural: Transmedia Peasant Campaign Leadership',
    titleEs: 'Apruebo Rural: Dirección de Campaña Transmedia Territorial',
    subtitleEn: 'Decentralized political strategy, transmedia campaign production, and community syndication across 20+ communes',
    subtitleEs: 'Estrategia comunicacional descentralizada, producción audiovisual y difusión comunitaria en 20+ comunas',
    categoryEn: 'Strategic Communications & Campaigns',
    categoryEs: 'Comunicaciones Estratégicas & Campañas',
    categoryColor: 'bg-emerald-600 text-white',
    branch: 'comms',
    statusBadgeEn: 'LARGE-SCALE CAMPAIGN DIRECTED',
    statusBadgeEs: 'CAMPAÑA MASIVA DIRIGIDA',
    statusBadgeColor: 'bg-emerald-400 text-black',
    clientEn: 'Peasant Organizations, Rural Water Boards, Peasant Women Federations & Civic Movements',
    clientEs: 'Organizaciones Campesinas, Juntas de Agua Potable Rural (APR) & Federaciones Agrarias',
    valuePropEn: 'Executive political and transmedia communication campaign designed to translate complex constitutional water reform into concrete rural benefits, producing high-impact viral videos, radio broadcasting capsules, and communal assemblies.',
    valuePropEs: 'Dirección ejecutiva de campaña comunicacional y transmedia diseñada para traducir reformas complejas del Código de Aguas a beneficios concretos para el campesinado, produciendo videos virales de alto impacto, cápsulas radiales y encuentros territoriales.',
    deliverablesEn: [
      'Viral short-form video production achieving +500,000 organic views on TikTok & Meta platforms',
      'Syndicated daily audio capsules broadcast across rural community radio stations in Maule Sur',
      'Multi-commune town-hall deliberation summits and pedagogical graphic leaflets',
      'Strategic messaging architecture connecting peasant water struggles with national policy'
    ],
    deliverablesEs: [
      'Producción audiovisual viral de formato corto con +500.000 reproducciones orgánicas en TikTok y Meta',
      'Cápsulas radiales diarias emitidas en cadenas de emisoras comunitarias de la Región del Maule',
      'Encuentros comunales de deliberación territorial y material pedagógico gráfico impreso',
      'Arquitectura de mensajes estratégicos que posicionaron el derecho humano al agua en el mundo rural'
    ],
    impactMetricEn: '+500,000 Organic Video Views • 20+ Rural Communes Coordinated',
    impactMetricEs: '+500.000 Visualizaciones Orgánicas • 20+ Comunas Rurales Coordinadas',
    techStack: ['Premiere Pro', 'DaVinci Resolve', 'Radio Broadcasting', 'Meta/TikTok Ads', 'Community Strategy'],
    notesEn: 'Demonstrated ability to move mass audiences and build trusted grassroots coalitions.',
    notesEs: 'Demostrada capacidad de movilización de audiencias masivas y construcción de confianza territorial.',
    githubUrl: 'https://github.com/danisantanderurrutia-coder/campana-maule-sur'
  },
  {
    id: 'rap-beauchef',
    emoji: '🎤',
    titleEn: 'Rap Beauchef & Urban Culture Agency',
    titleEs: 'Rap Beauchef & Agencia de Producción Cultural',
    subtitleEn: 'Live tournament direction, multi-camera 4K broadcast production, and international cypher federation',
    subtitleEs: 'Dirección de certámenes en vivo, transmisión 4K multicámara y circuito internacional de freestyle',
    categoryEn: 'Creative Direction & Event Architecture',
    categoryEs: 'Dirección Creativa & Producción de Eventos',
    categoryColor: 'bg-amber-600 text-white',
    branch: 'comms',
    statusBadgeEn: 'COMMERCIAL EVENT AGENCY',
    statusBadgeEs: 'AGENCIA DE EVENTOS CULTURALES',
    statusBadgeColor: 'bg-yellow-400 text-black',
    clientEn: 'Universidad de Chile FCFM, Corporate Brands, Urban Music Collectives & Media Partners',
    clientEs: 'Universidad de Chile FCFM, Colectivos de Música Urbana, Marcas & Medios',
    valuePropEn: 'Comprehensive art direction and live event production agency that elevates grassroots hip hop into high-production cultural spectacles, commanding 1,000+ attendee auditoriums, global livestreams, and brand collaborations.',
    valuePropEs: 'Agencia de producción general y dirección de arte que profesionaliza el hip hop y el freestyle underground, convirtiéndolos en espectáculos culturales de alta fidelidad técnica con auditorios de más de 1.000 asistentes y transmisión global.',
    deliverablesEn: [
      'Full live tournament production in high-capacity venues (FCFM U. de Chile Amphitheater)',
      'Landmark women\'s tournament direction ("Dueñas de la Voz", official Queena championship)',
      'Low-latency multi-channel online cypher infrastructure connecting emcees in 5 countries (Cuarentena Rap)',
      'Brand identity, stage lighting design, motion graphics, and post-production aftermovies'
    ],
    deliverablesEs: [
      'Producción ejecutiva de eventos masivos en anfiteatros universitarios y recintos culturales',
      'Dirección y realización del certamen femenino «Dueñas de la Voz» (registro audiovisual de la Gran Final)',
      'Infraestructura técnica para batallas online de baja latencia con emcees en 5 países (Cuarentena Rap)',
      'Identidad visual, diseño de escenario, motion graphics y aftermovies oficiales en resolución 4K'
    ],
    impactMetricEn: '1,000+ Live Attendees • 5-Country International Cypher Circuit',
    impactMetricEs: '+1.000 Asistentes en Vivo • Circuito Internacional en 5 Países',
    techStack: ['OBS Studio Broadcast', 'Discord Infrastructure', 'Sony 4K Production', 'Audio Engineering'],
    notesEn: 'Unites engineering rigor with youth subculture authenticity and audiovisual mastery.',
    notesEs: 'Unión única entre rigor ingenieril de producción, autenticidad urbana y dominio audiovisual.',
    githubUrl: 'https://github.com/danisantanderurrutia-coder'
  },
  {
    id: 'incel',
    emoji: '🤖',
    titleEn: 'Los Manejadores: Generative AI & Digital Media Strategy',
    titleEs: 'Los Manejadores: Estrategia de Medios & IA Generativa',
    subtitleEn: 'Virtual AI creators, automated technical knowledge pipelines, and high-retention digital narratives',
    subtitleEs: 'Creadores virtuales de IA, pipelines automáticos de divulgación y narrativa digital de alta retención',
    categoryEn: 'Artificial Intelligence & Media Strategy',
    categoryEs: 'Inteligencia Artificial & Estrategia de Medios',
    categoryColor: 'bg-purple-600 text-white',
    branch: 'comms',
    statusBadgeEn: 'ACTIVE DIGITAL VENTURE',
    statusBadgeEs: 'VENTURE DIGITAL ACTIVO',
    statusBadgeColor: 'bg-purple-400 text-black',
    clientEn: 'Knowledge-Driven Companies, Tech Founders, Scientific Brands & Educational Channels',
    clientEs: 'Empresas de Tecnología, Founders, Marcas Científicas & Canales de Divulgación',
    valuePropEn: 'Digital media agency coupling European analytical rigor with generative AI production pipelines to build high-retention educational feeds, synthetic character IP, and narrative positioning for commercial clients.',
    valuePropEs: 'Agencia de medios digitales que combina precisión analítica con pipelines de producción asistida por IA para desarrollar canales de divulgación técnica, propiedad intelectual de personajes virtuales y posicionamiento estratégico de marcas.',
    deliverablesEn: [
      'Synthetic virtual creator pipelines (neural voice cloning, automated lip-sync, visual consistency)',
      'High-retention technical scriptwriting and data-driven carousel engineering for LinkedIn & YouTube',
      'Automated multi-platform content scheduling and audience engagement analytics',
      'Executive brand consulting and AI implementation roadmap for corporate enterprises'
    ],
    deliverablesEs: [
      'Pipelines de creación sintética de personajes (clonación neural de voz, sincronización labial, avatares)',
      'Guionización técnica de alta retención e ingeniería de carruseles de datos para LinkedIn y YouTube',
      'Automatización de distribución multicanal y analítica predictiva de retención de audiencia',
      'Consultoría estratégica de posicionamiento de marca y adopción de IA para empresas corporativas'
    ],
    impactMetricEn: 'Automated Content Engine • High-Retention Narrative Architecture',
    impactMetricEs: 'Motor de Contenidos Automatizado • Arquitectura de Alta Retención',
    techStack: ['Generative AI', 'ElevenLabs', 'RunwayML', 'Python Automation', 'Next.js', 'Tailwind CSS'],
    notesEn: 'Pioneering ethical, high-quality AI storytelling for the modern knowledge economy.',
    notesEs: 'Pioneros en storytelling con IA de alta calidad para la economía del conocimiento.',
    githubUrl: 'https://github.com/danisantanderurrutia-coder'
  }
];

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  const [selectedBranch, setSelectedBranch] = useState<'all' | 'science' | 'comms'>('all');
  const [selectedProjectId, setSelectedProjectId] = useState<string>(ACTIVE_INNOVATION_PROJECTS[0].id);

  if (!isOpen) return null;

  const filteredProjects = ACTIVE_INNOVATION_PROJECTS.filter((p) => {
    if (selectedBranch === 'all') return true;
    return p.branch === selectedBranch;
  });

  const currentProj = ACTIVE_INNOVATION_PROJECTS.find((p) => p.id === selectedProjectId) || filteredProjects[0];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl h-[92vh] bg-[#0c1017] border-4 border-black rounded-2xl shadow-[10px_10px_0px_#facc15] flex flex-col overflow-hidden text-white font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ============================================================== */}
        {/* 1. TOP COMMERCIAL HEADER BAR                                   */}
        {/* ============================================================== */}
        <div className="px-4 sm:px-6 py-3.5 bg-black border-b-3 border-black flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-3">
            <span className="bg-[#facc15] text-black px-3 py-1 font-mono font-black text-xs sm:text-sm uppercase border-2 border-black shadow-[2px_2px_0px_#000] -rotate-1">
              {currentLang === 'es' ? '[ CATÁLOGO DE SOLUCIONES & PROYECTOS ]' : '[ COMMERCIAL PORTFOLIO & SOLUTIONS ]'}
            </span>
            <span className="hidden sm:inline-block bg-emerald-500 text-black font-mono font-black text-[10px] px-2 py-0.5 border border-black uppercase rotate-1">
              {currentLang === 'es' ? 'DISPONIBLE PARA CONTRATACIÓN' : 'ENTERPRISE & CONSULTING READY'}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Filter Pills */}
            <div className="inline-flex p-0.5 rounded-lg bg-white/10 border border-white/20 text-xs font-mono">
              <button
                onClick={() => setSelectedBranch('all')}
                className={`px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${
                  selectedBranch === 'all' ? 'bg-[#facc15] text-black shadow-sm' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {currentLang === 'es' ? 'TODOS (8)' : 'ALL (8)'}
              </button>
              <button
                onClick={() => setSelectedBranch('science')}
                className={`px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${
                  selectedBranch === 'science' ? 'bg-blue-500 text-white shadow-sm' : 'text-neutral-300 hover:text-white'
                }`}
              >
                🔬 {currentLang === 'es' ? 'CIENCIA & I+D (4)' : 'SCIENCE & R&D (4)'}
              </button>
              <button
                onClick={() => setSelectedBranch('comms')}
                className={`px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${
                  selectedBranch === 'comms' ? 'bg-orange-500 text-white shadow-sm' : 'text-neutral-300 hover:text-white'
                }`}
              >
                📢 {currentLang === 'es' ? 'MEDIOS & CAMPAÑAS (4)' : 'COMMS & CAMPAIGNS (4)'}
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-red-600 hover:text-white text-neutral-300 transition-all border border-white/20 active:scale-90 cursor-pointer ml-1"
              title={currentLang === 'es' ? 'Cerrar panel' : 'Close panel'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. MAIN SPLIT BODY: LEFT SHOWCASE SIDEBAR + RIGHT EXECUTIVE PANE */}
        {/* ============================================================== */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Left Column: Commercial Product Selector */}
          <div className="w-full md:w-84 bg-[#080b10] border-r-3 border-black overflow-y-auto p-3 space-y-2.5 shrink-0 no-scrollbar">
            <div className="text-[10px] font-mono font-black text-amber-400 uppercase tracking-widest px-1 pb-1 flex items-center justify-between">
              <span>{currentLang === 'es' ? '⚡ SOLUCIONES DESARROLLADAS' : '⚡ DEVELOPED SOLUTIONS'}</span>
              <span className="text-neutral-500">({filteredProjects.length})</span>
            </div>

            {filteredProjects.map((proj) => {
              const isSelected = proj.id === currentProj.id;
              return (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProjectId(proj.id)}
                  className={`p-3 border-2 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-white via-neutral-100 to-white text-black border-black shadow-[4px_4px_0px_#facc15] translate-x-1'
                      : 'bg-[#111622] text-neutral-300 border-black/80 hover:bg-[#182030] hover:text-white hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-lg">{proj.emoji}</span>
                    <span
                      className={`text-[9px] font-mono font-black px-2 py-0.5 rounded border border-black uppercase ${
                        isSelected ? 'bg-black text-[#facc15]' : proj.statusBadgeColor
                      }`}
                    >
                      {currentLang === 'es' ? proj.statusBadgeEs : proj.statusBadgeEn}
                    </span>
                  </div>

                  <div className="font-mono font-black text-xs uppercase leading-tight truncate">
                    {currentLang === 'es' ? proj.titleEs : proj.titleEn}
                  </div>

                  <div className={`text-[10px] truncate mt-1 ${isSelected ? 'text-neutral-700 font-medium' : 'text-neutral-400'}`}>
                    {currentLang === 'es' ? proj.subtitleEs : proj.subtitleEn}
                  </div>

                  <div className={`mt-2 pt-1.5 border-t flex items-center justify-between text-[9px] font-mono ${
                    isSelected ? 'border-neutral-300 text-emerald-800 font-bold' : 'border-white/10 text-emerald-400'
                  }`}>
                    <span className="truncate max-w-[200px]">
                      {currentLang === 'es' ? proj.impactMetricEs : proj.impactMetricEn}
                    </span>
                    <ArrowRight className="w-3 h-3 shrink-0 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Executive Commercial Solution Dossier */}
          <div className="flex-1 bg-[#0e131d] overflow-y-auto p-4 sm:p-6 lg:p-7 space-y-5 no-scrollbar">
            
            {/* Top Product Header */}
            <div className="space-y-2.5 border-b border-white/15 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-3xl">{currentProj.emoji}</span>
                  <span className={`text-[10px] font-mono font-black px-2.5 py-1 rounded border border-black uppercase ${currentProj.statusBadgeColor}`}>
                    {currentLang === 'es' ? currentProj.statusBadgeEs : currentProj.statusBadgeEn}
                  </span>
                  <span className="text-[10px] font-mono bg-white/10 text-neutral-300 px-2.5 py-1 rounded border border-white/20 uppercase">
                    {currentProj.branch === 'science' 
                      ? (currentLang === 'es' ? '🔬 Rama Científica & Modelación' : '🔬 Science & Computational Modeling') 
                      : (currentLang === 'es' ? '📢 Rama Estrategia & Comunicaciones' : '📢 Comms & Strategy Branch')}
                  </span>
                </div>

                {/* External Links Bar */}
                <div className="flex items-center space-x-2">
                  {currentProj.githubUrl && (
                    <a
                      href={currentProj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white font-mono font-black text-xs rounded border border-black shadow-[2px_2px_0px_#000] flex items-center space-x-1.5 transition-all cursor-pointer"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>{currentLang === 'es' ? 'Ver Código' : 'Code Repo'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <a
                    href="mailto:danisantander.urrutia@gmail.com?subject=Consulta%20Comercial%20-%20Proyecto%20Daniel%20Santander"
                    className="px-3 py-1.5 bg-[#facc15] hover:bg-yellow-400 text-black font-mono font-black text-xs rounded border border-black shadow-[2px_2px_0px_#000] flex items-center space-x-1.5 transition-all cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{currentLang === 'es' ? 'Solicitar Propuesta' : 'Request Proposal'}</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-mono font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
                  {currentLang === 'es' ? currentProj.titleEs : currentProj.titleEn}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
                  {currentLang === 'es' ? currentProj.subtitleEs : currentProj.subtitleEn}
                </p>
              </div>
            </div>

            {/* Impact Metric & Business ROI Highlight Banner */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-emerald-950/80 via-black to-[#091816] border-2 border-emerald-500/60 shadow-[4px_4px_0px_#10b981] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                    {currentLang === 'es' ? 'IMPACTO CUANTIFICADO & VALOR DEMOSTRADO' : 'QUANTIFIED IMPACT & PROVEN VALUE'}
                  </div>
                  <div className="font-mono font-black text-sm sm:text-base text-white">
                    {currentLang === 'es' ? currentProj.impactMetricEs : currentProj.impactMetricEn}
                  </div>
                </div>
              </div>

              <span className="px-3 py-1 rounded bg-emerald-500 text-black font-mono font-black text-[10px] uppercase border border-black shrink-0">
                {currentLang === 'es' ? 'RESULTADO VERIFICADO' : 'VERIFIED ROI'}
              </span>
            </div>

            {/* Commercial Value Proposition / Problem Solved */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="font-mono text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Target className="w-4 h-4" />
                <span>{currentLang === 'es' ? 'PROPUESTA DE VALOR & SOLUCIÓN COMERCIAL' : 'VALUE PROPOSITION & COMMERCIAL SOLUTION'}</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-neutral-200 leading-relaxed">
                {currentLang === 'es' ? currentProj.valuePropEs : currentProj.valuePropEn}
              </p>
            </div>

            {/* Tangible Commercial Deliverables (What the Client / Partner Receives) */}
            <div className="space-y-2.5">
              <div className="font-mono text-xs font-black text-white uppercase tracking-wider flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Layers className="w-4 h-4" />
                  <span>{currentLang === 'es' ? 'ENTREGABLES COMERCIALES & CAPACIDADES CLAVE' : 'COMMERCIAL DELIVERABLES & KEY CAPABILITIES'}</span>
                </span>
                <span className="text-[10px] font-mono text-neutral-400">[READY TO IMPLEMENT]</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(currentLang === 'es' ? currentProj.deliverablesEs : currentProj.deliverablesEn).map((deliv, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-3 rounded-lg bg-[#121824] border border-cyan-500/30 font-sans text-xs text-neutral-200 flex items-start space-x-2.5 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Clients & Institutional Partners */}
            <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-xs">
              <div className="flex items-center space-x-2 text-neutral-300">
                <Users className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-neutral-400">{currentLang === 'es' ? 'Contrapartes & Clientes Clave:' : 'Clients & Key Partners:'}</span>
                <span className="text-white font-bold">
                  {currentLang === 'es' ? currentProj.clientEs : currentProj.clientEn}
                </span>
              </div>
            </div>

            {/* Verified Tech Stack Badges */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                <span>{currentLang === 'es' ? 'STACK TECNOLÓGICO EMPLEADO' : 'DEPLOYED TECHNOLOGY STACK'}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentProj.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded bg-[#161c28] border border-white/15 font-mono text-[10px] text-neutral-300 font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Strategic Notes & Direct CTA Footer */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-neutral-900 to-black border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs">
              <div className="text-neutral-400 text-[11px] font-sans">
                💡 <span className="font-semibold text-neutral-300">{currentLang === 'es' ? 'Nota Estratégica:' : 'Strategic Scope:'}</span>{' '}
                {currentLang === 'es' ? currentProj.notesEs : currentProj.notesEn}
              </div>

              <a
                href="mailto:danisantander.urrutia@gmail.com?subject=Consulta%20Comercial%20-%20Daniel%20Santander"
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs flex items-center space-x-1.5 shrink-0 transition shadow-md active:scale-95"
              >
                <span>{currentLang === 'es' ? 'Consultar Disponibilidad' : 'Check Availability'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectsModal;
