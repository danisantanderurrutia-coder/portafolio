import React, { useState } from 'react';
import { 
  Play, 
  ExternalLink, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  Volume2, 
  FileText,
  Flame,
  Droplets,
  Megaphone,
  Microscope,
  Compass,
  Check,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Calendar,
  Award,
  Globe2
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';
import { GlobeView, GEO_LOCATIONS } from './GlobeView';

export interface TacticalProject {
  id: string;
  category: 'science' | 'comms' | 'global_cv' | 'key_project';
  locationId: string;
  badgeEs: string;
  badgeEn: string;
  titleEs: string;
  titleEn: string;
  subtitleEs: string;
  subtitleEn: string;
  roleEs: string;
  roleEn: string;
  date: string;
  type: 'plate' | 'video' | 'audio' | 'woodcut' | 'press' | 'dossier' | 'cv_item';
  src?: string;
  srcEn?: string;
  embedUrl?: string;
  url?: string;
  source: string;
  folio: string;
  tapeClass: string; // Angled duct-tape styling class
  tapeColor: 'black' | 'white' | 'amber' | 'terracotta' | 'forest';
  impactEs: string;
  impactEn: string;
  methodologyEs: string[];
  methodologyEn: string[];
  tags: string[];
  // For multi-page scientific plates (official PNG dossiers)
  availablePages?: { titleEs: string; titleEn: string; pageSrc: string; pageSrcEn?: string }[];
}

export const TACTICAL_PROJECTS: TacticalProject[] = [
  // 1. CHILE - Congreso Nacional (Incendios)
  {
    id: 'comms-congreso-incendios',
    category: 'comms',
    locationId: 'chile',
    badgeEs: 'Incidencia Legislativa & Forense de Incendios',
    badgeEn: 'Legislative Testimony & Fire Forensics',
    titleEs: 'Intervención Oficial en Cámara de Diputadas/os: Megaincendios y Monocultivo Forestal',
    titleEn: 'Official Testimony at Chamber of Deputies: Wildfires & Forestry Monoculture',
    subtitleEs: 'Comisión Especial de Emergencia, Desastres y Bomberos // Congreso Nacional de Chile',
    subtitleEn: 'Special Commission on Emergencies, Disasters & Firefighting // National Congress',
    roleEs: 'Vocero Técnico & Expositor Delegado',
    roleEn: 'Technical Spokesperson & Grassroots Delegate',
    date: '2023',
    type: 'video',
    embedUrl: 'https://www.youtube.com/embed/7eJ-pQ3qe8o',
    url: 'https://www.youtube.com/watch?v=7eJ-pQ3qe8o',
    source: 'Cámara de Diputadas y Diputados de Chile',
    folio: 'ACTA-01 // VALPARAÍSO',
    tapeClass: '-rotate-[1.8deg]',
    tapeColor: 'terracotta',
    impactEs: 'Presentación formal en el parlamento exponiendo con cartografía y datos biofísicos cómo el monocultivo intensivo de pino y eucalipto reduce la humedad de cuenca y multiplica la velocidad de propagación de megaincendios hacia comunidades rurales.',
    impactEn: 'Official testimony before the Chilean Congress presenting biophysical spatial evidence on how pine and eucalyptus plantations deplete watershed soil moisture and accelerate catastrophic wildfire propagation toward rural settlements.',
    methodologyEs: [
      'Análisis cruzado de cobertura de monocultivo forestal y focos de ignición',
      'Correlación entre sequía hídrica y velocidad de avance de frentes de fuego',
      'Exigencia reglamentaria de fajas de amortiguación libres de plantaciones exóticas'
    ],
    methodologyEn: [
      'Spatial correlation between industrial plantation density and fire ignition points',
      'Analysis of drought dynamics versus fire front velocity across catchments',
      'Statutory demand for mandatory buffer zones free of exotic tree plantations'
    ],
    tags: ['Congreso Nacional', 'Fiscalización', 'Megaincendios', 'Biopolítica']
  },

  // 2. CHILE / ALEMANIA - Expediente Científico Oficial PNG
  {
    id: 'sci-expediente-oficial',
    category: 'science',
    locationId: 'germany',
    badgeEs: 'Expediente Científico & FCFM U. de Chile / CAU Kiel',
    badgeEn: 'Official Scientific Dossier & Dual M.Sc.',
    titleEs: 'Expediente Científico Oficial: Cuantificación Biofísica y Gestión de Cuencas',
    titleEn: 'Official Scientific Dossier: Biophysical Catchment Modeling & Governance',
    subtitleEs: 'FCFM Universidad de Chile (Ingeniería Geofísica) • CAU Kiel (Alemania) • AMU Poznań (Polonia)',
    subtitleEn: 'FCFM Universidad de Chile • CAU Kiel (Germany) • AMU Poznań (Poland)',
    roleEs: 'Ingeniero Geofísico & Especialista en Sistemas Hidrogeofísicos',
    roleEn: 'Environmental Geophysicist & Catchment Modeler',
    date: '2020-2026',
    type: 'plate',
    src: '/portfolio_pages/page_1.png',
    srcEn: '/portfolio_pages_en/page_1.png',
    source: 'Registro Académico & Portafolio de Investigación',
    folio: 'DOC-01 // KIEL-SANTIAGO',
    tapeClass: 'rotate-[1.4deg]',
    tapeColor: 'forest',
    impactEs: 'Compendio curricular y de investigación de alto rigor que articula la geofísica aplicada de la Universidad de Chile con la doble maestría europea en protección ambiental y gestión integrada de cuencas en Alemania y Polonia.',
    impactEn: 'High-rigor academic and research compilation connecting applied geophysics from Universidad de Chile with double European master qualifications in Environmental Protection and Catchment Modeling in Germany and Poland.',
    availablePages: [
      { titleEs: 'Página 1: Perfil y Formación Geofísica', titleEn: 'Page 1: Profile & Geophysics Track', pageSrc: '/portfolio_pages/page_1.png', pageSrcEn: '/portfolio_pages_en/page_1.png' },
      { titleEs: 'Página 2: Balances Ecohidrológicos', titleEn: 'Page 2: Ecohydrological Balances', pageSrc: '/portfolio_pages/page_2.png', pageSrcEn: '/portfolio_pages_en/page_2.png' },
      { titleEs: 'Página 3: Modelación Maule / Poznań', titleEn: 'Page 3: Maule / Poznań Modeling', pageSrc: '/portfolio_pages/page_3.png', pageSrcEn: '/portfolio_pages_en/page_3.png' },
      { titleEs: 'Página 4: Gemelos Digitales de Humedales', titleEn: 'Page 4: Wetland Digital Twins', pageSrc: '/portfolio_pages/page_4.png', pageSrcEn: '/portfolio_pages_en/page_4.png' }
    ],
    methodologyEs: [
      'Ingeniería Geofísica con distinción máxima en FCFM Universidad de Chile',
      'Modelación física de suelos, balances hídricos acoplados suelo-vegetación',
      'Integración de directivas marco de aguas de la Unión Europea y gobernanza hídrica'
    ],
    methodologyEn: [
      'Geophysics Engineering with maximum distinction at FCFM U. of Chile',
      'Coupled soil-vegetation hydrological balance modeling and soil physics',
      'EU Water Framework Directive integration and international water policy'
    ],
    tags: ['FCFM', 'U. de Chile', 'CAU Kiel', 'AMU Poznań', 'Geofísica']
  },

  // 3. CHILE - Primera Línea Prensa (+700k)
  {
    id: 'comms-plp-prensa',
    category: 'comms',
    locationId: 'chile',
    badgeEs: 'Prensa Ciudadana Masiva (+700k Audiencia)',
    badgeEn: 'Grassroots Citizen Newsroom (+700k Reach)',
    titleEs: 'Primera Línea Prensa: Redacción Independiente de Cobertura Territorial Masiva',
    titleEn: 'Primera Línea Prensa: Independent Mass Frontline Newsroom (+700k)',
    subtitleEs: 'Periodismo de Trinchera // Millones de Impresiones Mensuales Sin Pautas Corporativas',
    subtitleEn: 'Independent Citizen Journalism Feed // Millions of Monthly Frontline Impressions',
    roleEs: 'Fundador & Director de Redacción',
    roleEn: 'Founder & Newsroom Director',
    date: '2019-2022',
    type: 'press',
    src: '/plp/plp_header_consigna.png',
    url: 'https://www.primeralineaprensa.cl',
    source: 'Archivo Histórico Primera Línea Prensa',
    folio: 'PLP-01 // AUDIENCIA +700K',
    tapeClass: '-rotate-[1.2deg]',
    tapeColor: 'black',
    impactEs: 'Creación y dirección de un medio nativo digital que alcanzó más de 700.000 seguidores orgánicos durante la revuelta popular, verificando denuncias de derechos humanos en vivo y rompiendo el cerco comunicacional tradicional.',
    impactEn: 'Founded and directed a native digital media outlet that scaled to +700,000 organic followers during the social uprising, verifying live human rights violations and bypassing corporate press censorship.',
    methodologyEs: [
      'Protocolos de verificación de video en tiempo real desde puntos de conflicto',
      'Arquitectura de cobertura descentralizada con corresponsales comunitarios',
      'Estrategia de comunicación de alto impacto en redes sociales e incidencia política'
    ],
    methodologyEn: [
      'Real-time video verification protocols from frontline demonstration hotspots',
      'Decentralized reporting infrastructure powered by community correspondents',
      'Viral political communication and independent editorial agenda setting'
    ],
    tags: ['+700k', 'Prensa Popular', 'Derechos Humanos', 'Comunicación Estratégica']
  },

  // 4. CHILE / ALEMANIA - Modelación Hidrogeofísica de Cuencas
  {
    id: 'sci-modelacion-hidrogeofisica',
    category: 'science',
    locationId: 'germany',
    badgeEs: 'Modelación Hidrogeofísica & Física de Suelos',
    badgeEn: 'Hydrogeophysical Catchment Modeling',
    titleEs: 'Modelación Hidrogeofísica de Cuencas y Balances Ecohidrológicos',
    titleEn: 'Hydrogeophysical Catchment Modeling & Ecohydrological Balances',
    subtitleEs: 'Cuenca del Maule y Dinámica Hídrica • CAU Kiel / Poznań',
    subtitleEn: 'Maule River Catchment & Baltic Peatlands • Kiel / Poznań',
    roleEs: 'Modelador Hidrogeofísico de Cuencas',
    roleEn: 'Catchment Modeler & Soil Physicist',
    date: '2023-2025',
    type: 'plate',
    src: '/portfolio_pages/page_3.png',
    srcEn: '/portfolio_pages_en/page_3.png',
    source: 'CAU Kiel // Instituto de Ciencias de la Tierra',
    folio: 'GEO-03 // HYDRO-BALANCE',
    tapeClass: 'rotate-[1.6deg]',
    tapeColor: 'forest',
    impactEs: 'Simulaciones empíricas que demuestran cómo la sustitución de bosque nativo por monocultivos forestales provoca estrés hídrico acumulativo y reduce la recarga subterránea en acuíferos del Maule.',
    impactEn: 'Empirical cross-sectional ecohydrological simulation evaluating how pine and eucalyptus tree plantations disrupt baseline groundwater recharge and streamflow across Maule catchments.',
    methodologyEs: [
      'Modelación numérica de flujo no saturado en perfiles de suelo mediante Richards',
      'Cálculo de balances de evapotranspiración real bajo distintos usos de suelo',
      'Validación con registros de humedad de suelo y piezometría in-situ'
    ],
    methodologyEn: [
      'Numerical unsaturated flow modeling in soil profiles using Richards equations',
      'Actual evapotranspiration balance computation under contrasting land cover',
      'In-situ sensor validation with piezometers and continuous capacitive probes'
    ],
    tags: ['Hidrología', 'Cuencas', 'Modelación', 'Física de Suelos']
  },

  // 5. CHILE - Apruebo Rural (Xilografía Popular)
  {
    id: 'comms-apruebo-rural',
    category: 'comms',
    locationId: 'chile',
    badgeEs: 'Campaña Popular & Linograbado Callejero',
    badgeEn: 'Grassroots Campaign & Peasant Woodcut Prints',
    titleEs: 'Apruebo Rural: Defensa Campesina del Agua y Xilografía de Imprenta Popular',
    titleEn: 'Apruebo Rural: Peasant Water Defense & Linocut Agitation Posters',
    subtitleEs: 'Campaña Nacional por el Agua como Derecho Humano y Semillas Libres',
    subtitleEn: 'National Campaign for Water Decommodification & Peasant Seed Sovereignty',
    roleEs: 'Director Creativo de Campaña & Grabador',
    roleEn: 'Campaign Creative Director & Printmaker',
    date: '2022',
    type: 'woodcut',
    src: '/images/apruebo_rural_1.png',
    source: 'Taller de Gráfica Popular // Maule & Nacional',
    folio: 'XILO-01 // APRUEBO-RURAL',
    tapeClass: '-rotate-[1.1deg]',
    tapeColor: 'amber',
    impactEs: 'Creación de matrices de xilografía y linóleo talladas e impresas a mano para sindicatos campesinos y comités de agua potable rural (APR), instalando la desprivatización del agua en el debate público nacional.',
    impactEn: 'Original woodblock linocut prints hand-carved and pressed on craft paper for rural water assemblies and peasant unions, positioning the end of the private water code directly into national voting agendas.',
    methodologyEs: [
      'Grabado en relieve con iconografía identitaria campesina y comunitaria',
      'Distribución física comunitaria de afiches y carteles en ferias y asambleas',
      'Articulación de demandas del campo con el texto constitucional'
    ],
    methodologyEn: [
      'Relief relief printmaking celebrating rural identities and seed guardianship',
      'Physical grassroots flyposting across agricultural valleys and community halls',
      'Translating complex water rights legal codes into powerful visual symbols'
    ],
    tags: ['Xilografía', 'Linograbado', 'Agua para los Pueblos', 'Campaña Rural']
  },

  // 6. POLONIA - Gemelo Digital de Turberas y Carbono
  {
    id: 'sci-turberas-polonia',
    category: 'science',
    locationId: 'poland',
    badgeEs: 'Tesis de Maestría & Gemelos Digitales de Turberas',
    badgeEn: 'Master Thesis & Wetland Digital Twins',
    titleEs: 'Captura de Carbono en Turberas y Modelación Hidrodinámica de Humedales',
    titleEn: 'Wetland Carbon Sequestration & Catchment Hydrodynamic Digital Twin',
    subtitleEs: 'Adam Mickiewicz University (Poznań, Polonia) // Tesis de Maestría M.Sc.',
    subtitleEn: 'Adam Mickiewicz University (Poznań, Poland) // M.Sc. Thesis Track',
    roleEs: 'Investigador Principal de Tesis & Modelador Hidrológico',
    roleEn: 'Principal Thesis Researcher & Hydrological Modeler',
    date: '2023-2025',
    type: 'plate',
    src: '/portfolio_pages/page_4.png',
    srcEn: '/portfolio_pages_en/page_4.png',
    source: 'AMU Poznań // Facultad de Ciencias Geográficas y Geológicas',
    folio: 'PEAT-04 // POZNAŃ-BALTIC',
    tapeClass: 'rotate-[1.5deg]',
    tapeColor: 'forest',
    impactEs: 'Investigación sobre la dinámica del almacenamiento de carbono en turberas templadas de tierras bajas y su interconexión hidrológica con cuencas agrícolas adyacentes, aplicando gemelos digitales para la restauración ecológica.',
    impactEn: 'Quantification of carbon sequestration dynamics in temperate lowland peatlands and their hydrological coupling with surrounding agricultural catchments using digital twin simulation tools.',
    methodologyEs: [
      'Medición de flujos de carbono y balance de agua en turberas restauradas',
      'Simulación de escenarios climáticos y abatimiento de napas en cuencas de drenaje',
      'Alineamiento con directivas europeas de restauración de la naturaleza'
    ],
    methodologyEn: [
      'Carbon flux and water balance quantification in restored peatland ecosystems',
      'Climate scenario simulation and water table drawdown analysis',
      'Alignment with EU Nature Restoration Law targets and water basin policies'
    ],
    tags: ['Turberas', 'Polonia', 'Carbono', 'Gemelo Digital', 'AMU Poznań']
  },

  // 7. NORUEGA - Degrowth Conference Oslo 2025
  {
    id: 'global-oslo-degrowth',
    category: 'global_cv',
    locationId: 'norway',
    badgeEs: 'Conferencia Internacional // Oslo, Noruega 2025',
    badgeEn: 'International Conference // Oslo, Norway 2025',
    titleEs: 'Conferencia Internacional de Decrecimiento: Alternativas a la Crisis Ecológica',
    titleEn: 'International Degrowth Conference: Alternatives to Ecological Crisis',
    subtitleEs: 'Oslo, Noruega (2025) // Ponencia sobre Colapso Hídrico por Monocultivo y Biomasa',
    subtitleEn: 'Oslo, Norway (2025) // Keynote on Catchment Collapse from Biomass & Forestry',
    roleEs: 'Ponente Oficial / Investigador Expositor',
    roleEn: 'Official Speaker & Research Presenter',
    date: '2025',
    type: 'cv_item',
    src: '/profile.jpg',
    source: 'International Degrowth Network // Oslo 2025',
    folio: 'CONF-01 // OSLO-NORWAY',
    tapeClass: '-rotate-[1.7deg]',
    tapeColor: 'white',
    impactEs: 'Presentación magistral en Oslo conectando la degradación biofísica de cuencas en el Sur Global con el consumo energético y la demanda de celulosa de los mercados del Norte Global.',
    impactEn: 'Presentation in Oslo bridging Global South catchment degradation with Global North biomass and pulp consumption dynamics, articulating concrete post-extractive transition roadmaps.',
    methodologyEs: [
      'Modelos de economía ecológica aplicados a la regeneración de cuencas',
      'Desarticulación del discurso de biomasa forestal como "energía verde"',
      'Estrategias de soberanía hídrica y alimentaria comunitaria'
    ],
    methodologyEn: [
      'Ecological economics frameworks applied to watershed regeneration',
      'Deconstructing false climate solutions and industrial biomass myths',
      'Community-led water and food sovereignty strategies'
    ],
    tags: ['Oslo', 'Noruega', 'Decrecimiento', 'Economía Ecológica', 'Conferencia 2025']
  },

  // 8. ALEMANIA - Environmental Justice Conference Bonn 2025
  {
    id: 'global-bonn-justicia',
    category: 'global_cv',
    locationId: 'germany',
    badgeEs: 'Conferencia de Justicia Ambiental // Bonn, Alemania 2025',
    badgeEn: 'Environmental Justice Conference // Bonn, Germany 2025',
    titleEs: 'Conferencia de Justicia Ambiental: Impactos del Modelo Forestal y la Biomasa',
    titleEn: 'Environmental Justice Conference: Impacts of Industrial Tree Plantations',
    subtitleEs: 'Bonn, Alemania (2025) // Alianza con Environmental Paper Network & Global Forest Coalition',
    subtitleEn: 'Bonn, Germany (2025) // Collaboration with EPN & Global Forest Coalition',
    roleEs: 'Investigador Asociado & Expositor',
    roleEn: 'Research Associate & Speaker',
    date: '2025',
    type: 'cv_item',
    src: '/epn_cover.png',
    source: 'Environmental Justice Summit // Bonn 2025',
    folio: 'CONF-02 // BONN-GERMANY',
    tapeClass: 'rotate-[1.3deg]',
    tapeColor: 'amber',
    impactEs: 'Exposición en Bonn sobre la investigación internacional respecto a los pasivos socioambientales de las plantaciones de pino y eucalipto y las plantas de celulosa en América Latina.',
    impactEn: 'International research presentation in Bonn exposing the ecological footprint and community displacement caused by corporate pulp mills and industrial plantations in Latin America.',
    methodologyEs: [
      'Cartografía satelital de zonas de sacrificio ambiental por monocultivo',
      'Cuantificación de emisiones netas de quema de biomasa industrial',
      'Articulación con delegaciones indígenas y científicas globales'
    ],
    methodologyEn: [
      'Satellite tracking of sacrificial sacrifice zones under corporate timber control',
      'Net emission audits of industrial wood-pellet and biomass combustion',
      'Coordination with frontline Indigenous and scientific delegates worldwide'
    ],
    tags: ['Bonn', 'Alemania', 'Justicia Ambiental', 'Biomasa', 'EPN']
  },

  // 9. SUIZA - WSL BlueGreen Biodiversity Davos 2025
  {
    id: 'global-davos-biodiversidad',
    category: 'global_cv',
    locationId: 'switzerland',
    badgeEs: 'Programa WSL Davos // Suiza 2025',
    badgeEn: 'WSL Davos Program // Switzerland 2025',
    titleEs: 'BlueGreen Biodiversity: Interconexión Acuática y Terrestre de Ecosistemas',
    titleEn: 'BlueGreen Biodiversity: Aquatic & Terrestrial Ecosystem Resilience',
    subtitleEs: 'WSL Instituto Federal Suizo // Davos, Suiza (2025)',
    subtitleEn: 'WSL Swiss Federal Institute // Davos, Switzerland (2025)',
    roleEs: 'Investigador Certificado',
    roleEn: 'Certified Researcher & Specialist',
    date: '2025',
    type: 'cv_item',
    src: '/portfolio_pages/page_2.png',
    source: 'WSL Swiss Federal Research Institute // Davos',
    folio: 'CERT-01 // DAVOS-SUISSE',
    tapeClass: '-rotate-[1.4deg]',
    tapeColor: 'forest',
    impactEs: 'Capacitación e investigación avanzada en Davos sobre la conectividad estructural y funcional entre sistemas hídricos riparios y cuencas terrestres frente al cambio climático acelerado.',
    impactEn: 'Advanced research training at WSL in Davos on structural and functional connectivity between riparian freshwater systems and terrestrial catchments under accelerated climate disruption.',
    methodologyEs: [
      'Monitoreo biológico y físico de microcuencas de alta montaña',
      'Indicadores de resiliencia frente a inundaciones y sequías extremas',
      'Diseño de infraestructura verde y azul para mitigación ecológica'
    ],
    methodologyEn: [
      'Biological and geophysical tracking in alpine micro-catchments',
      'Resilience metrics against compounding floods and severe dry spells',
      'Blue-green nature-based solutions design for hydrological buffering'
    ],
    tags: ['Davos', 'Suiza', 'WSL', 'Biodiversidad', 'Agua']
  },

  // 10. DINAMARCA - Doughnut Economics DEAL Copenhagen 2025
  {
    id: 'global-copenhagen-deal',
    category: 'global_cv',
    locationId: 'denmark',
    badgeEs: 'Economía de la Dona DEAL // Copenhague 2025',
    badgeEn: 'Doughnut Economics DEAL // Copenhagen 2025',
    titleEs: 'Economía de la Dona y Límites Planetarios para el Manejo de Cuencas',
    titleEn: 'Doughnut Economics & Planetary Boundaries for Catchment Planning',
    subtitleEs: 'DEAL (Doughnut Economics Action Lab) // Copenhague, Dinamarca (2025)',
    subtitleEn: 'DEAL (Doughnut Economics Action Lab) // Copenhagen, Denmark (2025)',
    roleEs: 'Especialista en Planificación Ecológica',
    roleEn: 'Ecological Planning Specialist',
    date: '2025',
    type: 'cv_item',
    src: '/profile.jpg',
    source: 'DEAL // Copenhagen 2025',
    folio: 'DEAL-01 // COPENHAGEN',
    tapeClass: 'rotate-[1.1deg]',
    tapeColor: 'white',
    impactEs: 'Aplicación del marco de Kate Raworth a la escala de cuencas hidrográficas: garantizando bases sociales de acceso al agua potable sin rebasar los techos ecológicos de recarga de acuíferos.',
    impactEn: 'Translating Kate Raworth’s planetary framework into catchment-scale operations: guaranteeing human rights to water while staying within recharge limits.',
    methodologyEs: [
      'Modelación de balances de extracción hídrica contra límites biofísicos',
      'Diseño de indicadores socioecológicos integrados para planes comunales',
      'Transición productiva hacia agroforestería regenerativa'
    ],
    methodologyEn: [
      'Water extraction balance modeling versus planetary boundary ceilings',
      'Integrated socioecological metrics for municipal catchment blueprints',
      'Productive shift frameworks toward regenerative agroforestry'
    ],
    tags: ['Dinamarca', 'Copenhague', 'Doughnut Economics', 'Sostenibilidad']
  },

  // 11. COLOMBIA - CENSAT Agua Viva & Economía Verde Bogotá
  {
    id: 'global-colombia-censat',
    category: 'global_cv',
    locationId: 'colombia',
    badgeEs: 'CENSAT Agua Viva // Bogotá, Colombia 2022-2023',
    badgeEn: 'CENSAT Agua Viva // Bogotá, Colombia 2022-2023',
    titleEs: 'Economía Verde, Financiarización de la Naturaleza y Manejo Forestal',
    titleEn: 'Green Economy, Nature Financialization & Forest Management',
    subtitleEs: 'CENSAT Agua Viva & Diálogos Forestales RESUMOF // Bogotá, Colombia',
    subtitleEn: 'CENSAT Agua Viva & Forest Dialogues // Bogotá, Colombia',
    roleEs: 'Investigador & Delegado Técnico',
    roleEn: 'Researcher & Technical Delegate',
    date: '2022-2023',
    type: 'cv_item',
    src: '/images/apruebo_rural_1.png',
    source: 'CENSAT Agua Viva // Bogotá',
    folio: 'COL-01 // BOGOTÁ-CENSAT',
    tapeClass: '-rotate-[1.6deg]',
    tapeColor: 'amber',
    impactEs: 'Estudio y desarticulación técnica de los mecanismos de especulación financiera sobre el agua y la biodiversidad, compartiendo aprendizajes de resistencia territorial entre Chile y Colombia.',
    impactEn: 'Technical audit of financialization mechanisms applied to water rights and biodiversity credits, linking frontline resistance models between Chile and Colombia.',
    methodologyEs: [
      'Auditoría crítica de mercados de bonos de carbono y derechos de agua',
      'Sistematización de acuerdos de gobernanza comunitaria de bosques y selvas',
      'Articulación sur-sur frente a megaproyectos extractivos'
    ],
    methodologyEn: [
      'Critical audit of carbon credit markets and commodified water concessions',
      'Documenting community-based forest and watershed stewardship protocols',
      'South-South alliance building against predatory extractivism'
    ],
    tags: ['Colombia', 'Bogotá', 'CENSAT', 'Financiarización', 'Bosques']
  },

  // 12. COSTA RICA - Cumbre Justicia Climática San José 2023
  {
    id: 'global-costarica-justicia',
    category: 'global_cv',
    locationId: 'costa_rica',
    badgeEs: 'Cumbre de Justicia Climática // San José, Costa Rica 2023',
    badgeEn: 'Climate Justice Summit // San José, Costa Rica 2023',
    titleEs: 'Foro Internacional de Organizaciones Ambientales y Derechos de la Naturaleza',
    titleEn: 'International Environmental Summit & Rights of Nature Forum',
    subtitleEs: 'San José, Costa Rica (2023) // Delegación por la Justicia Hídrica',
    subtitleEn: 'San José, Costa Rica (2023) // Water Justice Delegation',
    roleEs: 'Representante Internacional',
    roleEn: 'International Delegate',
    date: '2023',
    type: 'cv_item',
    src: '/profile.jpg',
    source: 'Cumbre Latinoamericana de Justicia Climática // San José',
    folio: 'CR-01 // SAN-JOSÉ',
    tapeClass: 'rotate-[1.2deg]',
    tapeColor: 'terracotta',
    impactEs: 'Representación de organizaciones socioambientales chilenas en el foro regional de Costa Rica, posicionando el caso chileno de desprivatización del agua y soberanía de semillas como referente latinoamericano.',
    impactEn: 'Represented Chilean grassroots water movements at the regional summit in Costa Rica, establishing the struggle to end the private water code as a key benchmark for Latin American legal reforms.',
    methodologyEs: [
      'Debate sobre litigio estratégico y tratados internacionales de derechos de la naturaleza',
      'Estrategias de comunicación popular para desmercantilizar los bienes comunes',
      'Construcción de alianzas jurídicas y técnicas panamericanas'
    ],
    methodologyEn: [
      'Strategic environmental litigation and international Rights of Nature frameworks',
      'Community communications toolkits for decommodifying common pool resources',
      'Pan-American legal and scientific alliance building'
    ],
    tags: ['Costa Rica', 'San José', 'Justicia Climática', 'Derechos de la Naturaleza']
  },

  // 13. CHILE - Radio Cristalina 96.3 FM (Maule Sur)
  {
    id: 'comms-radio-cristalina',
    category: 'comms',
    locationId: 'chile',
    badgeEs: 'Radio Comunitaria Campesina // 96.3 FM',
    badgeEn: 'Community Peasant Radio // 96.3 FM',
    titleEs: 'Radio Cristalina 96.3 FM: Radiodifusión Comunitaria y Memoria Campesina',
    titleEn: 'Radio Cristalina 96.3 FM: Grassroots Rural Radio Broadcasts',
    subtitleEs: 'Microprogramas Radiales de Soberanía del Agua y Agroecología en el Maule Sur',
    subtitleEn: 'Community Radio Series on Water Sovereignty & Peasant Agroecology in Maule',
    roleEs: 'Locutor, Guionista & Productor Radial',
    roleEn: 'Broadcaster, Scriptwriter & Producer',
    date: '2021-2023',
    type: 'audio',
    source: 'Radio Cristalina 96.3 FM // Maule Sur',
    folio: 'FM-96.3 // CRISTALINA',
    tapeClass: '-rotate-[1.5deg]',
    tapeColor: 'black',
    impactEs: 'Producción de cápsulas sonoras emitidas en el dial FM del Maule profundo, llevando explicaciones hidrogeológicas sencillas y testimonios campesinos directamente a los hogares rurales sin internet.',
    impactEn: 'Produced grassroots audio capsules broadcast on FM bands across deep rural Maule, translating hydrogeology concepts and farmer testimonies to households without internet access.',
    methodologyEs: [
      'Guionización pedagógica adaptada a la oralidad tradicional del campesinado',
      'Grabación de campo con agricultores, recolectoras y guardianas de semillas',
      'Difusión de frecuencias libres para democratizar el espectro radioeléctrico'
    ],
    methodologyEn: [
      'Accessible scientific scriptwriting honoring rural oral traditions',
      'Field audio recording with peasant farmers, herb gatherers, and seedkeepers',
      'Free-frequency broadcasts democratizing local radio spectrum'
    ],
    tags: ['Radio FM', 'Maule', 'Comunitaria', 'Agroecología', 'Audio']
  },

  // 14. CHILE - Cuarentena Rap (Freestyle Popular)
  {
    id: 'comms-cuarentena-rap',
    category: 'comms',
    locationId: 'chile',
    badgeEs: 'Hip-Hop & Batallas Digitales Populares',
    badgeEn: 'Underground Hip-Hop & Freestyle Tournament',
    titleEs: 'Cuarentena Rap: Torneo Nacional de Freestyle Popular y Apoyo Mutuo',
    titleEn: 'Cuarentena Rap: Underground Digital Hip-Hop Battles & Solidarity',
    subtitleEs: 'Organización Cultural Masiva en Pandemia // Miles de Espectadores en Vivo',
    subtitleEn: 'Mass Youth Cultural Organizing // Live Stream Battles & Mutual Aid',
    roleEs: 'Fundador, Productor Ejecutivo y Host',
    roleEn: 'Tournament Founder, Executive Producer & Host',
    date: '2020-2021',
    type: 'video',
    src: '/youtube_covers/eQ8o4xRh2cI.jpg',
    url: 'https://www.youtube.com/watch?v=eQ8o4xRh2cI',
    source: 'Archivo Audiovisual Cuarentena Rap',
    folio: 'RAP-01 // FREESTYLE-POPULAR',
    tapeClass: 'rotate-[1.8deg]',
    tapeColor: 'terracotta',
    impactEs: 'Creación del mayor torneo de freestyle popular transmitido en vivo durante el confinamiento, canalizando la poesía urbana de jóvenes de poblaciones con temáticas sociales y redes de acopio.',
    impactEn: 'Pioneered Chile’s premier online freestyle tournament during COVID lockdowns, mobilizing thousands of youth around social commentary, community mutual aid, and street poetry.',
    methodologyEs: [
      'Producción de transmisiones en vivo con arbitraje de batallas y jurados de la cultura',
      'Canalización de donaciones para ollas comunes en sectores populares',
      'Uso del hip-hop como herramienta pedagógica de resistencia comunitaria'
    ],
    methodologyEn: [
      'Live stream tournament production with cultural judges and youth hosts',
      'Mobilizing micro-donations directly for community soup kitchens in Santiago',
      'Hip-hop as a pedagogical weapon for youth self-expression and organizing'
    ],
    tags: ['Hip-Hop', 'Freestyle', 'Juventud', 'Cultura Popular']
  },

  // 15. PROYECTO CLAVE: Bioacústica Vegetal & Geofísica
  {
    id: 'key-bioacustica-vegetal',
    category: 'key_project',
    locationId: 'germany',
    badgeEs: 'Proyecto en Desarrollo & Concursos 2025-2026',
    badgeEn: 'Project in Development & Grants 2025-2026',
    titleEs: 'Bioacústica Vegetal y Geofísica para la Evaluación de Salud de Ecosistemas',
    titleEn: 'Plant Bioacoustics & Geophysics for Ecosystem Health Assessment',
    subtitleEs: 'Integración Pionera de Señales Acústicas de Xilema con Geoelectricidad de Suelo',
    subtitleEn: 'Pioneering Integration of Xylem Acoustic Emissions with Soil Geoelectrics',
    roleEs: 'Investigador Principal e Innovador Tecnológico',
    roleEn: 'Lead Researcher & Technology Innovator',
    date: '2025-2026',
    type: 'cv_item',
    src: '/portfolio_pages/page_3.png',
    source: 'Proyecto I+D // Kiel & Santiago',
    folio: 'R&D-01 // BIOACOUSTICS',
    tapeClass: '-rotate-[1.3deg]',
    tapeColor: 'forest',
    impactEs: 'Desarrollo de un sistema no invasivo que combina sensores acústicos ultrasónicos de cavitación vegetal con tomografía de resistividad eléctrica (ERT) para detectar estrés hídrico temprano antes de daños visibles.',
    impactEn: 'Non-invasive diagnostic framework merging ultrasonic xylem acoustic cavitation detection with electrical resistivity tomography (ERT) to measure early vegetative drought stress.',
    methodologyEs: [
      'Captación de emisiones acústicas en tallos durante ciclos de estrés por sequía',
      'Mapeo geofísico de la resistividad aparente en el bulbo radicular del suelo',
      'Algoritmos de alerta temprana para agricultura regenerativa y bosques nativos'
    ],
    methodologyEn: [
      'Acoustic emission tracking in plant vascular systems during drought stress',
      'Geophysical mapping of apparent electrical resistivity in the rhizosphere',
      'Early-warning indicators for regenerative agroforestry and native forests'
    ],
    tags: ['Bioacústica', 'Geofísica', 'Innovación', 'Estrés Hídrico', 'I+D']
  },

  // 16. PROYECTO CLAVE: Smart Food Parks & Ciudades Sostenibles
  {
    id: 'key-smart-food-parks',
    category: 'key_project',
    locationId: 'chile',
    badgeEs: 'Proyecto en Desarrollo // Urbanismo ODS',
    badgeEn: 'Project in Development // SDG Urbanism',
    titleEs: 'Smart Food Parks: Uniendo Naturaleza y Tecnología para Ciudades Sostenibles',
    titleEn: 'Smart Food Parks: Uniting Nature & Technology for SDG Cities',
    subtitleEs: 'Parques Productivos Comunitarios con Cosecha de Aguas y Sensores Abiertos',
    subtitleEn: 'Community Productive Parks with Rainwater Harvesting & Open Sensors',
    roleEs: 'Diseñador en Permacultura (CDP) & Líder de Proyecto',
    roleEn: 'Certified Permaculture Designer (CDP) & Project Lead',
    date: '2024-2026',
    type: 'cv_item',
    src: '/images/apruebo_rural_1.png',
    source: 'EPAC & Red de Ciudades Sostenibles ODS',
    folio: 'R&D-02 // FOOD-PARKS',
    tapeClass: 'rotate-[1.4deg]',
    tapeColor: 'amber',
    impactEs: 'Diseño integral de parques urbanos comestibles equipados con captación de agua de lluvia, diseño permacultural (CDP EPAC) y micro-sensores de suelo para abastecimiento alimentario en barrios vulnerables.',
    impactEn: 'Holistic blueprint for community edible urban parks featuring rainwater harvesting, permaculture zone zoning (CDP), and open-source telemetry for food security in marginalized zones.',
    methodologyEs: [
      'Diseño en permacultura y curvas de nivel para infiltración hidrológica máxima',
      'Huertos polivarietales de bajo consumo de agua con especies nativas comestibles',
      'Monitoreo ambiental abierto gestionado por juntas de vecinos y escuelas'
    ],
    methodologyEn: [
      'Keyline permaculture water-retaining earthworks for maximum infiltration',
      'Polyculture resilient agroecosystems maximizing edible yields per square meter',
      'Open-source monitoring kits managed directly by neighborhood assemblies'
    ],
    tags: ['Permacultura', 'Smart Cities', 'ODS', 'Agroecología', 'Ciudades']
  }
];

interface TacticalCommandViewProps {
  currentLang: Language;
  onToggleLanguage: () => void;
}

export const TacticalCommandView: React.FC<TacticalCommandViewProps> = ({
  currentLang,
  onToggleLanguage
}) => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'science' | 'comms' | 'global_cv' | 'key_project'>('all');
  const [selectedPlatePage, setSelectedPlatePage] = useState<number>(0);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Active project resolution
  const currentProjectIndex = TACTICAL_PROJECTS.findIndex((p) => p.id === activeProjectId);
  const activeProject = activeProjectId ? TACTICAL_PROJECTS[currentProjectIndex] : null;

  // Next / Previous navigation within tactical command
  const handleNextProject = () => {
    if (currentProjectIndex >= 0) {
      const nextIdx = (currentProjectIndex + 1) % TACTICAL_PROJECTS.length;
      setActiveProjectId(TACTICAL_PROJECTS[nextIdx].id);
      setSelectedPlatePage(0);
    }
  };

  const handlePrevProject = () => {
    if (currentProjectIndex >= 0) {
      const prevIdx = (currentProjectIndex - 1 + TACTICAL_PROJECTS.length) % TACTICAL_PROJECTS.length;
      setActiveProjectId(TACTICAL_PROJECTS[prevIdx].id);
      setSelectedPlatePage(0);
    }
  };

  const handleCopyProjectLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Filtered list for the Level 1 Zine menu
  const filteredProjects = TACTICAL_PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <div className="relative w-full min-h-screen bg-[#0f1311] text-[#f7f5ee] font-sans select-none overflow-x-hidden pb-16">
      
      {/* 0. TECHNICAL SAT-LINK TOP RULER (ALTO CONTRASTE TÁCTICO) */}
      <div className="w-full bg-[#18201a] border-b border-[#2d3d31] px-3 sm:px-6 py-1.5 flex items-center justify-between text-[10px] font-mono text-neutral-400 overflow-x-auto no-scrollbar">
        <div className="flex items-center space-x-3 shrink-0">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-ping" />
          <span className="font-bold text-amber-400 tracking-wider">
            {currentLang === 'es' ? 'COMANDO TÁCTICO // EXPEDICIÓN GLOBAL' : 'TACTICAL COMMAND // GLOBAL THEATER'}
          </span>
          <span className="opacity-40">|</span>
          <span className="text-[#a3b899]">
            8 PAÍSES • FCFM U. DE CHILE • CAU KIEL • AMU POZNAŃ
          </span>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <button
            onClick={onToggleLanguage}
            className="px-2.5 py-0.5 rounded border border-[#3d4d42] bg-[#101411] hover:bg-[#253328] text-amber-300 font-bold font-mono text-[10px] transition flex items-center space-x-1"
          >
            <Globe2 className="w-3 h-3" />
            <span>{currentLang === 'es' ? 'ESPAÑOL' : 'ENGLISH'}</span>
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* VISTA 1: NIVEL 1 — EL MENÚ FANZINE CYBERPUNK (PORTADA REBELDE) */}
      {/* ============================================================== */}
      {!activeProject ? (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fadeIn">
          {/* Header Brutalista / Fanzine Xerox */}
          <div className="border-b-4 border-amber-500 pb-6 mb-8 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500 text-black font-mono text-xs font-bold uppercase tracking-wider transform -rotate-1 shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentLang === 'es' ? 'EXPEDIENTE DE TERRENO // SELECCIONA UN TRABAJO' : 'FIELD DOSSIER // SELECT AN OPERATION'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-[#fbf8f2] uppercase leading-none">
              Daniel Santander Urrutia
            </h1>

            <p className="font-mono text-xs sm:text-sm text-neutral-300 max-w-3xl leading-relaxed">
              {currentLang === 'es'
                ? 'Geofísica de cuencas (FCFM U. de Chile) • Doble M.Sc. Kiel (Alemania) / Poznań (Polonia) • Periodismo ciudadano (+700k) • Xilografía popular & Políticas de agua en 8 países.'
                : 'Catchment Geophysics (U. of Chile) • Dual M.Sc. Kiel (Germany) / Poznań (Poland) • Grassroots journalism (+700k) • Peatland modeling & Water advocacy across 8 nations.'}
            </p>

            {/* Categorías / Filtros Fanzine */}
            <div className="flex flex-wrap gap-2 pt-3">
              {[
                { id: 'all', es: 'TODOS LOS PLIEGOS (16)', en: 'ALL RECORDS (16)' },
                { id: 'comms', es: 'CAMPAÑAS & MEDIOS (+700K)', en: 'ADVOCACY & MEDIA (+700K)' },
                { id: 'science', es: 'GEOFÍSICA & CUENCAS', en: 'GEOPHYSICS & BASINS' },
                { id: 'global_cv', es: 'CONFERENCIAS (8 PAÍSES)', en: 'GLOBAL CONFERENCES (8 NATIONS)' },
                { id: 'key_project', es: 'I+D & BIOACÚSTICA', en: 'R&D & BIOACOUSTICS' }
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id as any)}
                  className={`px-3 py-1.5 font-mono text-xs uppercase font-bold transition-all border ${
                    activeFilter === f.id
                      ? 'bg-amber-500 text-black border-amber-400 shadow-md scale-105'
                      : 'bg-[#18201a] text-neutral-300 border-[#2d3d31] hover:bg-[#232f26] hover:text-white'
                  }`}
                >
                  {currentLang === 'es' ? f.es : f.en}
                </button>
              ))}
            </div>
          </div>

          {/* Menú de Cintas Desordenadas (Estilo Punk / Cyberpunk) */}
          <div className="flex flex-col space-y-3 sm:space-y-4 max-w-5xl mx-auto py-2">
            {filteredProjects.map((proj, idx) => {
              const countryInfo = GEO_LOCATIONS[proj.locationId] || GEO_LOCATIONS.chile;

              // Color styles for the duct-tape strips
              let tapeBg = 'bg-[#1c221e] text-[#f7f5ee] border-[#3d4d42] hover:bg-neutral-800';
              let badgeColor = 'bg-neutral-800 text-neutral-300';

              if (proj.tapeColor === 'amber') {
                tapeBg = 'bg-[#d97706] text-black border-amber-400 hover:bg-amber-400 font-bold';
                badgeColor = 'bg-black text-amber-300';
              } else if (proj.tapeColor === 'terracotta') {
                tapeBg = 'bg-[#9c4928] text-white border-[#b85d38] hover:bg-[#b85d38] font-bold';
                badgeColor = 'bg-black/40 text-white';
              } else if (proj.tapeColor === 'forest') {
                tapeBg = 'bg-[#1e3a27] text-[#e3f2e6] border-[#386b47] hover:bg-[#284f35]';
                badgeColor = 'bg-black/50 text-emerald-300';
              } else if (proj.tapeColor === 'white') {
                tapeBg = 'bg-[#f4efe4] text-black border-[#d5c7b0] hover:bg-white font-bold';
                badgeColor = 'bg-black text-white';
              }

              return (
                <div
                  key={proj.id}
                  onClick={() => {
                    setActiveProjectId(proj.id);
                    setSelectedPlatePage(0);
                  }}
                  className={`group relative cursor-pointer p-4 sm:p-5 rounded border-2 shadow-lg transition-all duration-200 hover:scale-[1.015] hover:shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-3 transform ${proj.tapeClass} ${tapeBg}`}
                >
                  {/* Left Label */}
                  <div className="flex items-start sm:items-center space-x-3">
                    <span className="font-mono text-xs opacity-75 font-bold shrink-0">
                      [{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <span className="text-xl shrink-0">{countryInfo.flag}</span>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold ${badgeColor}`}>
                          {currentLang === 'es' ? proj.badgeEs : proj.badgeEn}
                        </span>
                        <span className="text-[10px] font-mono opacity-60">
                          {countryInfo.country} • {proj.date}
                        </span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-serif font-black tracking-tight mt-0.5 group-hover:translate-x-1 transition-transform">
                        {currentLang === 'es' ? proj.titleEs : proj.titleEn}
                      </h2>
                    </div>
                  </div>

                  {/* Right Action Trigger */}
                  <div className="flex items-center space-x-2 self-end md:self-center shrink-0">
                    <span className="font-mono text-xs tracking-wider uppercase font-bold flex items-center space-x-1 group-hover:text-amber-300">
                      <span>{currentLang === 'es' ? 'ENTRAR // ROTAR GLOBO' : 'ENTER // ROTATE GLOBE'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* ============================================================== */
        /* VISTA 2: NIVEL 2 — HALO COMMAND THEATER (HERO IZQ + GLOBO DCH)  */
        /* ============================================================== */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 animate-fadeIn space-y-6">
          
          {/* Navigation Bar inside Mission Theater */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#2d3d31] pb-4">
            <button
              onClick={() => setActiveProjectId(null)}
              className="px-4 py-2 rounded-lg bg-[#18201a] hover:bg-[#232f26] border border-[#3d4d42] font-mono text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-2 transition shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{currentLang === 'es' ? '← VOLVER AL MENÚ FANZINE' : '← BACK TO ZINE MENU'}</span>
            </button>

            {/* Pagination Controls */}
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs text-neutral-400 mr-2">
                FICHA {currentProjectIndex + 1} / {TACTICAL_PROJECTS.length}
              </span>
              <button
                onClick={handlePrevProject}
                className="p-2 rounded bg-[#18201a] hover:bg-[#232f26] border border-[#3d4d42] text-neutral-200 hover:text-white transition"
                title="Ficha anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextProject}
                className="p-2 rounded bg-[#18201a] hover:bg-[#232f26] border border-[#3d4d42] text-neutral-200 hover:text-white transition"
                title="Ficha siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleCopyProjectLink}
                className="px-3 py-2 rounded bg-[#18201a] hover:bg-[#232f26] border border-[#3d4d42] font-mono text-xs text-neutral-300 hover:text-white flex items-center space-x-1.5 transition"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <ExternalLink className="w-3.5 h-3.5" />}
                <span>{copiedLink ? (currentLang === 'es' ? 'COPIADO' : 'COPIED') : (currentLang === 'es' ? 'COMPARTIR' : 'SHARE')}</span>
              </button>
            </div>
          </div>

          {/* DUAL STAGE: HERO DISPLAY (IZQUIERDA 65%) + GLOBO & CV (DERECHA 35%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* 1. IZQUIERDA (65% -> col-span-7 or col-span-8): HERO DISPLAY */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col space-y-6">
              
              {/* Media Viewport Container */}
              <div className="relative w-full rounded-2xl bg-[#141815] border-2 border-[#2d3d31] p-3 sm:p-5 shadow-2xl overflow-hidden flex flex-col">
                
                {/* Folio Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2d3d31] font-mono text-[11px] text-neutral-400">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="font-bold text-amber-400 tracking-wider">
                      {activeProject.folio}
                    </span>
                    <span className="opacity-40">•</span>
                    <span>{activeProject.source}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400">
                    {activeProject.type.toUpperCase()}
                  </span>
                </div>

                {/* Main Media Player / Sheet Viewer */}
                <div className="relative w-full rounded-xl bg-black overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[420px]">
                  {activeProject.type === 'video' && activeProject.embedUrl ? (
                    <div className="w-full aspect-video">
                      <iframe
                        src={activeProject.embedUrl}
                        title={activeProject.titleEs}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : activeProject.type === 'audio' ? (
                    /* Pletina de Casete de Radio */
                    <div className="w-full p-8 rounded-xl bg-[#1f1914] text-[#f7f5ee] flex flex-col items-center justify-center space-y-6 border-2 border-[#544335] shadow-2xl">
                      <div className="flex items-center justify-between w-full font-mono text-xs text-amber-400 border-b border-[#544335] pb-2">
                        <span>RADIO CRISTALINA 96.3 FM • MAULE SUR</span>
                        <span>SIDE A • CÁPSULA RURAL</span>
                      </div>
                      
                      {/* Animated Cassette Wheels */}
                      <div className="flex items-center justify-center space-x-8 py-4">
                        <div className="w-16 h-16 rounded-full border-4 border-amber-500/80 flex items-center justify-center animate-spin" style={{ animationDuration: '6s' }}>
                          <div className="w-5 h-5 bg-amber-500 rounded-full" />
                        </div>
                        <div className="w-24 h-6 bg-[#2d2219] rounded border border-amber-500/50 flex items-center justify-center font-mono text-[10px] text-amber-400">
                          96.3 MHz
                        </div>
                        <div className="w-16 h-16 rounded-full border-4 border-amber-500/80 flex items-center justify-center animate-spin" style={{ animationDuration: '6s' }}>
                          <div className="w-5 h-5 bg-amber-500 rounded-full" />
                        </div>
                      </div>

                      <div className="text-center space-y-1">
                        <h3 className="font-serif font-bold text-xl text-white">
                          {currentLang === 'es' ? activeProject.titleEs : activeProject.titleEn}
                        </h3>
                        <p className="text-xs text-neutral-300 font-sans">
                          {currentLang === 'es' ? 'Emisión FM libre sin cerco mediático' : 'Free FM broadcast reaching rural households'}
                        </p>
                      </div>

                      {/* Embedded HTML5 Audio Player */}
                      <audio controls className="w-full max-w-md pt-2">
                        <source src={resolveAsset('/audio/corte_constitucion.mp3')} type="audio/mp3" />
                        Tu navegador no soporta audio.
                      </audio>
                    </div>
                  ) : activeProject.availablePages && activeProject.availablePages.length > 0 ? (
                    /* Multi-page Official Scientific PNG Dossier */
                    <div className="relative w-full flex flex-col items-center bg-[#fdfbf7] p-2 sm:p-4 rounded-xl">
                      <div className="w-full flex items-center justify-center max-h-[70vh] overflow-hidden">
                        <img
                          src={resolveAsset(
                            currentLang === 'en' && activeProject.availablePages[selectedPlatePage].pageSrcEn
                              ? activeProject.availablePages[selectedPlatePage].pageSrcEn
                              : activeProject.availablePages[selectedPlatePage].pageSrc
                          )}
                          alt="Lámina de Expediente Oficial"
                          className="w-full h-auto max-h-[68vh] object-contain rounded shadow"
                        />
                      </div>
                      
                      {/* Page Navigator Tabs for Scientific Dossier */}
                      <div className="w-full flex items-center justify-center gap-2 pt-3 border-t border-neutral-300 mt-2 flex-wrap">
                        {activeProject.availablePages.map((pg, pIdx) => (
                          <button
                            key={pIdx}
                            onClick={() => setSelectedPlatePage(pIdx)}
                            className={`px-3 py-1 rounded font-mono text-xs transition-all ${
                              selectedPlatePage === pIdx
                                ? 'bg-[#1e3a27] text-white font-bold shadow'
                                : 'bg-[#ede5d4] text-[#4d443b] hover:bg-[#e0d6c1]'
                            }`}
                          >
                            <span>LÁMINA {pIdx + 1}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : activeProject.src ? (
                    /* Single High-Res Plate / Image */
                    <div className="relative w-full flex items-center justify-center p-2 bg-[#fdfbf7] rounded-xl">
                      <img
                        src={resolveAsset(
                          currentLang === 'en' && activeProject.srcEn ? activeProject.srcEn : activeProject.src
                        )}
                        alt={activeProject.titleEs}
                        className="w-auto h-auto max-h-[68vh] object-contain rounded"
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Comprehensive Descriptive Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#141815] border-2 border-[#2d3d31] space-y-5 text-[#f7f5ee]">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
                    <span>{activeProject.roleEs}</span>
                    <span>• {activeProject.date}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-black text-white leading-tight">
                    {currentLang === 'es' ? activeProject.titleEs : activeProject.titleEn}
                  </h2>

                  {(activeProject.subtitleEs || activeProject.subtitleEn) && (
                    <p className="text-sm font-sans font-medium text-amber-200 mt-1">
                      {currentLang === 'es' ? activeProject.subtitleEs : activeProject.subtitleEn}
                    </p>
                  )}
                </div>

                {/* Impact Synopsis */}
                <div className="p-4 rounded-xl bg-[#1a211c] border border-[#3b4c3f] space-y-2">
                  <div className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold">
                    {currentLang === 'es' ? 'SINOPSIS METODOLÓGICA & IMPACTO' : 'METHODOLOGY & IMPACT SYNOPSIS'}
                  </div>
                  <p className="text-sm font-serif text-neutral-200 leading-relaxed">
                    {currentLang === 'es' ? activeProject.impactEs : activeProject.impactEn}
                  </p>
                </div>

                {/* Methodology Bullets */}
                <div className="space-y-2">
                  <div className="font-mono text-xs uppercase text-neutral-400">
                    {currentLang === 'es' ? 'EJES DE EJECUCIÓN & METODOLOGÍA:' : 'CORE EXECUTION PILLARS:'}
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-serif text-neutral-300">
                    {(currentLang === 'es' ? activeProject.methodologyEs : activeProject.methodologyEn).map((m, mIdx) => (
                      <li key={mIdx} className="flex items-start space-x-2 bg-[#1a211c] p-2.5 rounded-lg border border-[#2d3d31]">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags and External Links */}
                <div className="pt-4 border-t border-[#2d3d31] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tags.map((t, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded font-mono text-[11px] bg-[#1a211c] border border-[#2d3d31] text-neutral-300">
                        #{t}
                      </span>
                    ))}
                  </div>

                  {activeProject.url && (
                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-serif font-bold text-xs flex items-center space-x-1.5 transition shadow-lg"
                    >
                      <span>{currentLang === 'es' ? 'Abrir Fuente / Documento' : 'Open Source / Document'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>

            {/* 2. DERECHA (35% -> col-span-5 or col-span-4): GLOBO 3D + TELEMETRÍA CV */}
            <div className="lg:col-span-5 xl:col-span-4 sticky top-6">
              <GlobeView
                targetLocationId={activeProject.locationId}
                onSelectLocation={(locId) => {
                  // Find a project in that country or just rotate the globe!
                  const match = TACTICAL_PROJECTS.find((p) => p.locationId === locId);
                  if (match) {
                    setActiveProjectId(match.id);
                    setSelectedPlatePage(0);
                  }
                }}
                currentLang={currentLang}
              />
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
