import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  ExternalLink, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Globe2, 
  Compass, 
  Maximize2,
  Volume2,
  Calendar,
  Layers,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';

export type MissionType = 'science' | 'comms' | 'global' | 'rd';

export interface GameMission {
  id: string;
  type: MissionType;
  titleEs: string;
  titleEn: string;
  subtitleEs: string;
  subtitleEn: string;
  country: string;
  city: string;
  flag: string;
  lat: number;
  lng: number;
  date: string;
  roleEs: string;
  roleEn: string;
  mediaType: 'video' | 'plate' | 'audio' | 'woodcut' | 'press' | 'cv';
  src?: string;
  srcEn?: string;
  embedUrl?: string;
  url?: string;
  code: string;
  source: string;
  impactEs: string;
  impactEn: string;
  methodologyEs: string[];
  methodologyEn: string[];
  tags: string[];
  availablePages?: { titleEs: string; titleEn: string; pageSrc: string; pageSrcEn?: string }[];
}

export const GAME_MISSIONS: GameMission[] = [
  // 1. COMUNICACIONES (VERDE): Cámara de Diputadas/os - Valparaíso
  {
    id: 'congreso-valparaiso',
    type: 'comms',
    titleEs: 'Intervención Oficial en Cámara de Diputadas/os: Megaincendios y Monocultivo',
    titleEn: 'Official Testimony at Chamber of Deputies: Wildfires & Forestry Monoculture',
    subtitleEs: 'Comisión Especial de Emergencia, Desastres y Bomberos // Congreso Nacional de Chile',
    subtitleEn: 'Special Commission on Emergencies, Disasters & Firefighting // National Congress',
    country: 'Chile',
    city: 'Valparaíso',
    flag: '🇨🇱',
    lat: -33.05,
    lng: -71.61,
    date: '2023',
    roleEs: 'Vocero Técnico & Expositor Territorial',
    roleEn: 'Technical Spokesperson & Grassroots Delegate',
    mediaType: 'video',
    embedUrl: 'https://www.youtube.com/embed/7eJ-pQ3qe8o',
    url: 'https://www.youtube.com/watch?v=7eJ-pQ3qe8o',
    code: 'OPS-COM-01',
    source: 'Cámara de Diputadas y Diputados de Chile',
    impactEs: 'Exposición formal en el parlamento presentando la correlación empírica entre las plantaciones continuas de monocultivo forestal y la velocidad de avance de megaincendios, exigiendo fajas de amortiguación obligatorias.',
    impactEn: 'Official legislative testimony presenting spatial and hydrological evidence on how timber monocultures accelerate catastrophic wildfire spread, demanding mandatory statutory buffer zones.',
    methodologyEs: [
      'Correlación espacial entre monocultivo forestal y focos de ignición',
      'Análisis biofísico de estrés hídrico de cuenca y velocidad de frente de fuego',
      'Propuesta regulatoria de cortafuegos y amortiguación agroecológica'
    ],
    methodologyEn: [
      'Spatial cross-correlation between industrial plantations and ignition points',
      'Biophysical analysis of catchment moisture deficit and fire velocity',
      'Regulatory proposal for agroecological buffer zones and firebreaks'
    ],
    tags: ['Congreso Nacional', 'Fiscalización', 'Megaincendios', 'Evidencia Técnica']
  },

  // 2. CIENCIA (ROJO): CAU Kiel - Modelación Hidrogeofísica de Cuencas
  {
    id: 'kiel-hidrogeofisica',
    type: 'science',
    titleEs: 'Modelación Hidrogeofísica de Cuencas y Balances Ecohidrológicos',
    titleEn: 'Hydrogeophysical Catchment Modeling & Ecohydrological Balances',
    subtitleEs: 'Cuenca del Maule y Dinámica Hídrica Báltica • CAU Kiel / Poznań',
    subtitleEn: 'Maule River Catchment & Baltic Peatlands • Kiel / Poznań',
    country: 'Alemania',
    city: 'Kiel',
    flag: '🇩🇪',
    lat: 54.32,
    lng: 10.13,
    date: '2023-2025',
    roleEs: 'Modelador Hidrogeofísico de Cuencas',
    roleEn: 'Catchment Modeler & Soil Physicist',
    mediaType: 'plate',
    src: '/portfolio_pages/page_3.png',
    srcEn: '/portfolio_pages_en/page_3.png',
    code: 'OPS-SCI-01',
    source: 'CAU Kiel // Instituto de Ciencias de la Tierra',
    impactEs: 'Simulaciones empíricas de balance hídrico que cuantifican cómo el reemplazo de bosque nativo por monocultivos forestales provoca abatimiento de napas y reduce el caudal base en cuencas de drenaje.',
    impactEn: 'Empirical hydrological balance simulations quantifying how replacing native forests with tree plantations draws down water tables and reduces streamflow across catchments.',
    availablePages: [
      { titleEs: 'Lámina 1: Perfil y Trayectoria Geofísica', titleEn: 'Page 1: Profile & Geophysics Track', pageSrc: '/portfolio_pages/page_1.png', pageSrcEn: '/portfolio_pages_en/page_1.png' },
      { titleEs: 'Lámina 2: Balances Ecohidrológicos', titleEn: 'Page 2: Ecohydrological Balances', pageSrc: '/portfolio_pages/page_2.png', pageSrcEn: '/portfolio_pages_en/page_2.png' },
      { titleEs: 'Lámina 3: Modelación Maule / Poznań', titleEn: 'Page 3: Maule / Poznań Modeling', pageSrc: '/portfolio_pages/page_3.png', pageSrcEn: '/portfolio_pages_en/page_3.png' },
      { titleEs: 'Lámina 4: Gemelos Digitales de Humedales', titleEn: 'Page 4: Wetland Digital Twins', pageSrc: '/portfolio_pages/page_4.png', pageSrcEn: '/portfolio_pages_en/page_4.png' }
    ],
    methodologyEs: [
      'Modelación numérica de flujo no saturado en perfiles de suelo mediante Richards',
      'Cálculo de balances de evapotranspiración real bajo distintos usos de suelo',
      'Validación con piezómetros y sensores continuos in-situ'
    ],
    methodologyEn: [
      'Numerical unsaturated flow modeling in soil profiles using Richards equations',
      'Actual evapotranspiration balance computation under contrasting land cover',
      'In-situ sensor validation with piezometers and continuous capacitive probes'
    ],
    tags: ['Hidrología', 'Cuencas', 'Modelación', 'Kiel', 'Física de Suelos']
  },

  // 3. COMUNICACIONES (VERDE): Primera Línea Prensa (+700k) - Santiago
  {
    id: 'plp-prensa-santiago',
    type: 'comms',
    titleEs: 'Primera Línea Prensa: Redacción Independiente Masiva (+700k)',
    titleEn: 'Primera Línea Prensa: Independent Grassroots Newsroom (+700k)',
    subtitleEs: 'Periodismo Ciudadano en Estallido Social // Millones de Impresiones Mensuales',
    subtitleEn: 'Independent Citizen Journalism Feed // Millions of Frontline Impressions',
    country: 'Chile',
    city: 'Santiago',
    flag: '🇨🇱',
    lat: -33.44,
    lng: -70.65,
    date: '2019-2022',
    roleEs: 'Fundador & Director de Redacción',
    roleEn: 'Founder & Newsroom Director',
    mediaType: 'press',
    src: '/plp/plp_header_consigna.png',
    url: 'https://www.primeralineaprensa.cl',
    code: 'OPS-COM-02',
    source: 'Archivo Histórico Primera Línea Prensa',
    impactEs: 'Creación y dirección editorial de un medio ciudadano que alcanzó más de 700.000 seguidores orgánicos, verificando vulneraciones a los derechos humanos en tiempo real sin censura corporativa.',
    impactEn: 'Founded and directed an independent citizen newsroom scaling to +700,000 organic followers during Chile’s uprising, verifying live human rights violations without corporate control.',
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
    tags: ['+700k', 'Prensa Popular', 'Derechos Humanos', 'Santiago']
  },

  // 4. CIENCIA (ROJO): AMU Poznań - Gemelo Digital de Turberas y Carbono
  {
    id: 'poznan-turberas',
    type: 'science',
    titleEs: 'Captura de Carbono en Turberas y Gemelo Digital de Humedales',
    titleEn: 'Wetland Carbon Sequestration & Catchment Hydrodynamic Digital Twin',
    subtitleEs: 'Adam Mickiewicz University (Poznań, Polonia) // Tesis de Maestría M.Sc.',
    subtitleEn: 'Adam Mickiewicz University (Poznań, Poland) // M.Sc. Thesis Track',
    country: 'Polonia',
    city: 'Poznań',
    flag: '🇵🇱',
    lat: 52.41,
    lng: 16.93,
    date: '2023-2025',
    roleEs: 'Investigador Principal de Tesis & Modelador Hidrológico',
    roleEn: 'Principal Thesis Researcher & Hydrological Modeler',
    mediaType: 'plate',
    src: '/portfolio_pages/page_4.png',
    srcEn: '/portfolio_pages_en/page_4.png',
    code: 'OPS-SCI-02',
    source: 'AMU Poznań // Facultad de Ciencias Geográficas',
    impactEs: 'Cuantificación de la dinámica de almacenamiento de carbono en turberas templadas de tierras bajas y su acoplamiento hidrológico con cuencas adyacentes aplicando gemelos digitales.',
    impactEn: 'Quantification of carbon sequestration dynamics in temperate lowland peatlands and their hydrological coupling with surrounding agricultural catchments using digital twins.',
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

  // 5. COMUNICACIONES (VERDE): Apruebo Rural - Maule
  {
    id: 'apruebo-rural-maule',
    type: 'comms',
    titleEs: 'Apruebo Rural: Defensa Campesina del Agua y Xilografía Popular',
    titleEn: 'Apruebo Rural: Peasant Water Defense & Linocut Agitation Posters',
    subtitleEs: 'Campaña Nacional por el Agua como Derecho Humano y Semillas Libres',
    subtitleEn: 'National Campaign for Water Decommodification & Peasant Seed Sovereignty',
    country: 'Chile',
    city: 'Maule',
    flag: '🇨🇱',
    lat: -35.43,
    lng: -71.66,
    date: '2022',
    roleEs: 'Director Creativo de Campaña & Grabador',
    roleEn: 'Campaign Creative Director & Printmaker',
    mediaType: 'woodcut',
    src: '/images/apruebo_rural_1.png',
    code: 'OPS-COM-03',
    source: 'Taller de Gráfica Popular // Maule & Nacional',
    impactEs: 'Diseño e impresión manual de afiches en linóleo y xilografía para comités de agua potable rural y sindicatos campesinos, instalando la desprivatización del agua en la agenda constitucional.',
    impactEn: 'Original woodblock linocut prints hand-carved and pressed on craft paper for rural water assemblies, positioning the end of the private water code into national voting agendas.',
    methodologyEs: [
      'Grabado en relieve con iconografía identitaria campesina y comunitaria',
      'Distribución física comunitaria de afiches y carteles en ferias y asambleas',
      'Articulación de demandas del campo con el debate constitucional'
    ],
    methodologyEn: [
      'Relief printmaking celebrating rural identities and seed guardianship',
      'Physical grassroots flyposting across agricultural valleys and community halls',
      'Translating complex water rights legal codes into powerful visual symbols'
    ],
    tags: ['Xilografía', 'Linograbado', 'Agua para los Pueblos', 'Maule']
  },

  // 6. CUMBRES & POLÍTICA (AMARILLO): Degrowth Conference - Oslo, Noruega
  {
    id: 'degrowth-oslo',
    type: 'global',
    titleEs: 'Conferencia Internacional de Decrecimiento: Alternativas a la Crisis Ecológica',
    titleEn: 'International Degrowth Conference: Alternatives to Ecological Crisis',
    subtitleEs: 'Oslo, Noruega (2025) // Ponencia sobre Colapso Hídrico por Monocultivo y Biomasa',
    subtitleEn: 'Oslo, Norway (2025) // Keynote on Catchment Collapse from Biomass & Forestry',
    country: 'Noruega',
    city: 'Oslo',
    flag: '🇳🇴',
    lat: 59.91,
    lng: 10.75,
    date: '2025',
    roleEs: 'Ponente Oficial / Investigador Expositor',
    roleEn: 'Official Speaker & Research Presenter',
    mediaType: 'cv',
    src: '/profile.jpg',
    code: 'OPS-GLO-01',
    source: 'International Degrowth Network // Oslo 2025',
    impactEs: 'Presentación en Oslo vinculando la degradación de cuencas en el Sur Global con la demanda de biomasa y celulosa del Norte Global, proponiendo marcos de transición poscapitalista.',
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

  // 7. CIENCIA (ROJO): WSL BlueGreen Biodiversity - Davos, Suiza
  {
    id: 'wsl-davos-suiza',
    type: 'science',
    titleEs: 'BlueGreen Biodiversity: Resiliencia Acuática y Terrestre de Ecosistemas',
    titleEn: 'BlueGreen Biodiversity: Aquatic & Terrestrial Ecosystem Resilience',
    subtitleEs: 'WSL Instituto Federal Suizo de Investigación // Davos, Suiza (2025)',
    subtitleEn: 'WSL Swiss Federal Research Institute // Davos, Switzerland (2025)',
    country: 'Suiza',
    city: 'Davos',
    flag: '🇨🇭',
    lat: 46.80,
    lng: 9.83,
    date: '2025',
    roleEs: 'Investigador Certificado WSL',
    roleEn: 'Certified Researcher & Specialist',
    mediaType: 'cv',
    src: '/portfolio_pages/page_2.png',
    code: 'OPS-SCI-03',
    source: 'WSL Swiss Federal Research Institute // Davos',
    impactEs: 'Certificación e investigación de posgrado en Davos sobre la conectividad estructural y funcional entre sistemas hídricos riparios y cuencas terrestres frente a extremos climáticos.',
    impactEn: 'Advanced research training at WSL in Davos on structural and functional connectivity between riparian freshwater systems and terrestrial catchments under severe climate disruption.',
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

  // 8. CUMBRES & POLÍTICA (AMARILLO): DEAL Doughnut Economics - Copenhague, Dinamarca
  {
    id: 'deal-copenhagen',
    type: 'global',
    titleEs: 'Economía de la Dona y Límites Planetarios para el Manejo de Cuencas',
    titleEn: 'Doughnut Economics & Planetary Boundaries for Catchment Planning',
    subtitleEs: 'DEAL (Doughnut Economics Action Lab) // Copenhague, Dinamarca (2025)',
    subtitleEn: 'DEAL (Doughnut Economics Action Lab) // Copenhagen, Denmark (2025)',
    country: 'Dinamarca',
    city: 'Copenhague',
    flag: '🇩🇰',
    lat: 55.68,
    lng: 12.57,
    date: '2025',
    roleEs: 'Especialista en Planificación Ecológica',
    roleEn: 'Ecological Planning Specialist',
    mediaType: 'cv',
    src: '/profile.jpg',
    code: 'OPS-GLO-02',
    source: 'DEAL // Copenhagen 2025',
    impactEs: 'Aplicación del marco de Kate Raworth a la escala de cuencas hidrográficas: garantizando bases sociales de acceso al agua potable sin rebasar los techos ecológicos de recarga.',
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

  // 9. CUMBRES & POLÍTICA (AMARILLO): Conferencia de Justicia Ambiental - Bonn, Alemania
  {
    id: 'bonn-justicia-ambiental',
    type: 'global',
    titleEs: 'Conferencia de Justicia Ambiental: Pasivos de la Industria de Celulosa y Biomasa',
    titleEn: 'Environmental Justice Conference: Impacts of Industrial Tree Plantations',
    subtitleEs: 'Bonn, Alemania (2025) // Alianza con Environmental Paper Network & GFC',
    subtitleEn: 'Bonn, Germany (2025) // Collaboration with EPN & Global Forest Coalition',
    country: 'Alemania',
    city: 'Bonn',
    flag: '🇩🇪',
    lat: 50.73,
    lng: 7.10,
    date: '2025',
    roleEs: 'Investigador Asociado & Expositor',
    roleEn: 'Research Associate & Speaker',
    mediaType: 'press',
    src: '/epn_cover.png',
    code: 'OPS-GLO-03',
    source: 'Environmental Justice Summit // Bonn 2025',
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

  // 10. CUMBRES & POLÍTICA (AMARILLO): CENSAT Agua Viva - Bogotá, Colombia
  {
    id: 'censat-bogota',
    type: 'global',
    titleEs: 'Economía Verde, Financiarización de la Naturaleza y Manejo Forestal',
    titleEn: 'Green Economy, Nature Financialization & Forest Management',
    subtitleEs: 'CENSAT Agua Viva & Diálogos Forestales RESUMOF // Bogotá, Colombia (2022-2023)',
    subtitleEn: 'CENSAT Agua Viva & Forest Dialogues // Bogotá, Colombia (2022-2023)',
    country: 'Colombia',
    city: 'Bogotá',
    flag: '🇨🇴',
    lat: 4.71,
    lng: -74.07,
    date: '2022-2023',
    roleEs: 'Investigador & Delegado Técnico',
    roleEn: 'Researcher & Technical Delegate',
    mediaType: 'cv',
    src: '/profile.jpg',
    code: 'OPS-GLO-04',
    source: 'CENSAT Agua Viva // Bogotá',
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

  // 11. CUMBRES & POLÍTICA (AMARILLO): Justicia Climática - San José, Costa Rica
  {
    id: 'costarica-justicia',
    type: 'global',
    titleEs: 'Cumbre de Organizaciones Ambientales: Derechos de la Naturaleza y Desmercantilización',
    titleEn: 'International Environmental Summit & Rights of Nature Forum',
    subtitleEs: 'San José, Costa Rica (2023) // Delegación por la Justicia Hídrica',
    subtitleEn: 'San José, Costa Rica (2023) // Water Justice Delegation',
    country: 'Costa Rica',
    city: 'San José',
    flag: '🇨🇷',
    lat: 9.93,
    lng: -84.08,
    date: '2023',
    roleEs: 'Representante Internacional',
    roleEn: 'International Delegate',
    mediaType: 'cv',
    src: '/profile.jpg',
    code: 'OPS-GLO-05',
    source: 'Cumbre Latinoamericana // San José',
    impactEs: 'Representación de organizaciones socioambientales en el foro regional de Costa Rica, posicionando la desprivatización del agua y la soberanía de semillas como referente latinoamericano.',
    impactEn: 'Represented grassroots water movements at the regional summit in Costa Rica, establishing the struggle to end the private water code as a key benchmark for Latin American legal reforms.',
    methodologyEs: [
      'Debate sobre litigio estratégico y tratados de derechos de la naturaleza',
      'Estrategias de comunicación popular para desmercantilizar bienes comunes',
      'Construcción de alianzas jurídicas y técnicas panamericanas'
    ],
    methodologyEn: [
      'Strategic environmental litigation and international Rights of Nature frameworks',
      'Community communications toolkits for decommodifying common pool resources',
      'Pan-American legal and scientific alliance building'
    ],
    tags: ['Costa Rica', 'San José', 'Justicia Climática', 'Derechos de la Naturaleza']
  },

  // 12. COMUNICACIONES (VERDE): Radio Cristalina 96.3 FM - Maule Sur
  {
    id: 'radio-cristalina-maule',
    type: 'comms',
    titleEs: 'Radio Cristalina 96.3 FM: Radiodifusión Comunitaria y Memoria Campesina',
    titleEn: 'Radio Cristalina 96.3 FM: Grassroots Rural Radio Broadcasts',
    subtitleEs: 'Microprogramas Radiales de Soberanía del Agua y Agroecología en el Maule Sur',
    subtitleEn: 'Community Radio Series on Water Sovereignty & Peasant Agroecology in Maule',
    country: 'Chile',
    city: 'Maule Sur',
    flag: '🇨🇱',
    lat: -35.85,
    lng: -71.80,
    date: '2021-2023',
    roleEs: 'Locutor, Guionista & Productor Radial',
    roleEn: 'Broadcaster, Scriptwriter & Producer',
    mediaType: 'audio',
    code: 'OPS-COM-04',
    source: 'Radio Cristalina 96.3 FM // Maule Sur',
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

  // 13. I+D & INNOVACIÓN (MORADO): Bioacústica Vegetal & Geofísica
  {
    id: 'rd-bioacustica',
    type: 'rd',
    titleEs: 'Bioacústica Vegetal y Geofísica para la Evaluación de Salud de Ecosistemas',
    titleEn: 'Plant Bioacoustics & Geophysics for Ecosystem Health Assessment',
    subtitleEs: 'Integración de Señales Acústicas de Xilema con Geoelectricidad de Suelo',
    subtitleEn: 'Integration of Xylem Acoustic Emissions with Soil Geoelectrics',
    country: 'Alemania',
    city: 'Kiel',
    flag: '🇩🇪',
    lat: 54.33,
    lng: 10.14,
    date: '2025-2026',
    roleEs: 'Investigador Principal e Innovador Tecnológico',
    roleEn: 'Lead Researcher & Technology Innovator',
    mediaType: 'plate',
    src: '/portfolio_pages/page_3.png',
    code: 'OPS-RD-01',
    source: 'Proyecto I+D // Kiel & Santiago',
    impactEs: 'Desarrollo de un sistema no invasivo que combina sensores acústicos ultrasónicos de cavitación vegetal con tomografía de resistividad eléctrica (ERT) para detectar estrés hídrico temprano.',
    impactEn: 'Non-invasive diagnostic framework merging ultrasonic xylem acoustic cavitation detection with electrical resistivity tomography (ERT) to measure early vegetative drought stress.',
    methodologyEs: [
      'Captación de emisiones acústicas en tallos durante estrés por sequía',
      'Mapeo geofísico de resistividad aparente en el bulbo radicular del suelo',
      'Algoritmos de alerta temprana para agricultura regenerativa y bosques nativos'
    ],
    methodologyEn: [
      'Acoustic emission tracking in plant vascular systems during drought stress',
      'Geophysical mapping of apparent electrical resistivity in the rhizosphere',
      'Early-warning indicators for regenerative agroforestry and native forests'
    ],
    tags: ['Bioacústica', 'Geofísica', 'Innovación', 'Estrés Hídrico', 'I+D']
  },

  // 14. I+D & INNOVACIÓN (MORADO): Smart Food Parks - Santiago / EPAC
  {
    id: 'rd-smart-food-parks',
    type: 'rd',
    titleEs: 'Smart Food Parks: Uniendo Naturaleza y Tecnología para Ciudades Sostenibles',
    titleEn: 'Smart Food Parks: Uniting Nature & Technology for SDG Cities',
    subtitleEs: 'Parques Productivos Comunitarios con Cosecha de Aguas y Sensores Abiertos',
    subtitleEn: 'Community Productive Parks with Rainwater Harvesting & Open Sensors',
    country: 'Chile',
    city: 'Santiago',
    flag: '🇨🇱',
    lat: -33.45,
    lng: -70.66,
    date: '2024-2026',
    roleEs: 'Diseñador en Permacultura (CDP) & Líder de Proyecto',
    roleEn: 'Certified Permaculture Designer (CDP) & Project Lead',
    mediaType: 'woodcut',
    src: '/images/apruebo_rural_1.png',
    code: 'OPS-RD-02',
    source: 'EPAC & Red de Ciudades Sostenibles ODS',
    impactEs: 'Diseño integral de parques urbanos comestibles equipados con captación de agua de lluvia, diseño permacultural (CDP EPAC) y micro-sensores de suelo para soberanía alimentaria barrial.',
    impactEn: 'Holistic blueprint for community edible urban parks featuring rainwater harvesting, permaculture zoning (CDP), and open-source telemetry for food security in marginalized zones.',
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

import { ALL_COASTLINES, CONTINENT_LAND_MATRIX, LatLng } from '../continentsData';

const drawCoastlinePath = (
  ctx: CanvasRenderingContext2D,
  coords: LatLng[],
  project: (latDeg: number, lngDeg: number) => { x: number; y: number; visible: boolean }
) => {
  if (coords.length < 2) return;
  for (let i = 0; i < coords.length - 1; i++) {
    const p1 = coords[i];
    const p2 = coords[i + 1];

    const dLat = p2[0] - p1[0];
    const dLng = p2[1] - p1[1];
    const dist = Math.sqrt(dLat * dLat + dLng * dLng);
    const steps = Math.max(1, Math.ceil(dist / 2.0));

    let first = true;
    for (let s = 0; s <= steps; s++) {
      const lat = p1[0] + (dLat * s) / steps;
      const lng = p1[1] + (dLng * s) / steps;
      const pt = project(lat, lng);

      if (pt.visible) {
        if (first) {
          ctx.moveTo(pt.x, pt.y);
          first = false;
        } else {
          ctx.lineTo(pt.x, pt.y);
        }
      } else {
        first = true;
      }
    }
  }
};

interface GameWorldViewProps {
  currentLang: Language;
  onToggleLanguage: () => void;
  onExitToDossier?: () => void;
  onBackToMenu?: () => void;
  initialFilter?: 'all' | MissionType;
}

export const GameWorldView: React.FC<GameWorldViewProps> = ({
  currentLang,
  onToggleLanguage,
  onExitToDossier,
  onBackToMenu,
  initialFilter = 'all'
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | MissionType>(initialFilter);
  const [selectedMissionId, setSelectedMissionId] = useState<string>(() => {
    if (initialFilter !== 'all') {
      const found = GAME_MISSIONS.find((m) => m.type === initialFilter);
      if (found) return found.id;
    }
    return GAME_MISSIONS[0].id;
  });
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(true);
  const [selectedPlatePage, setSelectedPlatePage] = useState<number>(0);

  useEffect(() => {
    if (initialFilter) {
      setActiveFilter(initialFilter);
      if (initialFilter !== 'all') {
        const found = GAME_MISSIONS.find((m) => m.type === initialFilter);
        if (found) setSelectedMissionId(found.id);
      }
    }
  }, [initialFilter]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const currentMission = GAME_MISSIONS.find((m) => m.id === selectedMissionId) || GAME_MISSIONS[0];
  const currentMissionIndex = GAME_MISSIONS.findIndex((m) => m.id === selectedMissionId);

  // Smooth lerp for globe rotation
  const currentCoord = useRef<{ lat: number; lng: number }>({
    lat: currentMission.lat,
    lng: currentMission.lng
  });

  // Render 3D Canvas Globe
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let targetLat = currentMission.lat;
    let targetLng = currentMission.lng;

    const render = () => {
      // Lerp rotation smoothly
      const speed = 0.055;
      currentCoord.current.lat += (targetLat - currentCoord.current.lat) * speed;
      
      let dLng = targetLng - currentCoord.current.lng;
      while (dLng > 180) dLng -= 360;
      while (dLng < -180) dLng += 360;
      currentCoord.current.lng += dLng * speed;

      const width = canvas.width;
      const height = canvas.height;
      
      // Make planet large and majestic in the background (center-right bias for cinematic game feel)
      const radius = Math.min(width, height) * 0.44;
      const cx = width > 900 ? width * 0.65 : width * 0.5;
      const cy = height * 0.5;

      ctx.clearRect(0, 0, width, height);

      // 1. Atmospheric Outer Glow
      const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.85, cx, cy, radius * 1.35);
      glowGrad.addColorStop(0, 'rgba(80, 160, 220, 0.15)');
      glowGrad.addColorStop(0.5, 'rgba(50, 110, 180, 0.08)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.4, 0, Math.PI * 2);
      ctx.fill();

      // 2. Planet Sphere Disk (Deep Blue-Black Ocean with Twilight Terminator)
      const oceanGrad = ctx.createRadialGradient(cx - radius * 0.35, cy - radius * 0.35, radius * 0.1, cx, cy, radius);
      oceanGrad.addColorStop(0, '#1c2e42');
      oceanGrad.addColorStop(0.65, '#0c1622');
      oceanGrad.addColorStop(1, '#05090f');
      ctx.fillStyle = oceanGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Outer Rim Glow
      ctx.strokeStyle = 'rgba(120, 180, 230, 0.45)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // 3. Mathematical Orthographic 3D Projection
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

      // 4. Parallels & Meridians (HUD Graticule)
      ctx.strokeStyle = 'rgba(90, 140, 180, 0.18)';
      ctx.lineWidth = 0.8;

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

      // 5. Continents: Luminous Vector Coastlines & Tactical Landmass Dot Grid
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.clip(); // Keep inside the planetary sphere

      // A. Outer Glow for Coastlines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
      ctx.lineWidth = 3.5;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.beginPath();
      ALL_COASTLINES.forEach((c) => {
        drawCoastlinePath(ctx, c.coords, project);
      });
      ctx.stroke();

      // B. Crisp Glowing Cyan Vector Coastline Core
      ctx.strokeStyle = 'rgba(125, 211, 252, 0.9)';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ALL_COASTLINES.forEach((c) => {
        drawCoastlinePath(ctx, c.coords, project);
      });
      ctx.stroke();

      // C. Dense Tactical Halftone Landmass Dot Matrix
      ctx.fillStyle = 'rgba(125, 211, 252, 0.65)';
      for (const [lLat, lLng] of CONTINENT_LAND_MATRIX) {
        const pt = project(lLat, lLng);
        if (pt.visible) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();

      // 6. Color-Coded Mission Beacons:
      // Rojo = Ciencia (#ef4444)
      // Verde = Comunicaciones (#22c55e)
      // Ámbar = Cumbres & Política (#f59e0b)
      // Morado = I+D (#a855f7)
      GAME_MISSIONS.forEach((m) => {
        const isSelected = m.id === selectedMissionId;
        const pt = project(m.lat, m.lng);

        if (pt.visible) {
          let beaconColor = '#ef4444'; // Red default (Science)
          if (m.type === 'comms') beaconColor = '#22c55e'; // Green
          if (m.type === 'global') beaconColor = '#f59e0b'; // Amber
          if (m.type === 'rd') beaconColor = '#a855f7'; // Purple

          if (isSelected) {
            // Large Radar Pulse
            const pulse = (Date.now() % 1400) / 1400;
            ctx.strokeStyle = beaconColor;
            ctx.globalAlpha = 1 - pulse;
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 8 + pulse * 28, 0, Math.PI * 2);
            ctx.stroke();
            ctx.globalAlpha = 1.0;

            // Target Core Pin
            ctx.fillStyle = beaconColor;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 6.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.stroke();

            // HUD Floating Label
            ctx.font = 'bold 11px monospace';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${m.flag} ${m.city.toUpperCase()}`, pt.x + 12, pt.y - 6);

            ctx.font = '9px monospace';
            ctx.fillStyle = beaconColor;
            ctx.fillText(m.code, pt.x + 12, pt.y + 7);
          } else {
            // Passive Glowing Pin
            ctx.fillStyle = beaconColor;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = 'rgba(255,255,255,0.7)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [currentMission, selectedMissionId]);

  // Mission selection handler (rotates globe smoothly)
  const handleSelectMission = (missionId: string) => {
    setSelectedMissionId(missionId);
    setSelectedPlatePage(0);
    setIsDossierOpen(true);
  };

  const handleNext = () => {
    const nextIdx = (currentMissionIndex + 1) % GAME_MISSIONS.length;
    handleSelectMission(GAME_MISSIONS[nextIdx].id);
  };

  const handlePrev = () => {
    const prevIdx = (currentMissionIndex - 1 + GAME_MISSIONS.length) % GAME_MISSIONS.length;
    handleSelectMission(GAME_MISSIONS[prevIdx].id);
  };

  // Filtered list for mission rail
  const filteredMissions = GAME_MISSIONS.filter((m) => {
    if (activeFilter === 'all') return true;
    return m.type === activeFilter;
  });

  return (
    <div className="relative w-full h-screen overflow-hidden select-none bg-[#090d13] text-white font-sans flex flex-col justify-between">
      
      {/* 1. CINEMATIC SKY BACKGROUND (Fondo de Cielo estilo Battlefield / Halo) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-80"
        style={{ backgroundImage: `url('/sky_background.jpg')` }}
      />
      {/* Subtle Dark Vignette & Atmospheric Fog */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090d13] via-transparent to-[#090d13]/70 pointer-events-none z-0" />

      {/* 2. THE 3D PLANET (SIEMPRE ATRÁS, GIRA Y SE ENFOCA EN CADA EVENTO) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <canvas
          ref={canvasRef}
          width={window.innerWidth || 1400}
          height={window.innerHeight || 900}
          className="w-full h-full object-contain"
        />
      </div>

      {/* ============================================================== */}
      {/* 3. GAME HUD TOP BAR (ESTILO BATTLEFIELD / HALO INFINITE)        */}
      {/* ============================================================== */}
      <header className="relative z-30 w-full px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 bg-gradient-to-b from-black/80 to-transparent border-b border-white/10 backdrop-blur-sm">
        {/* Call-Sign Identity & Back to Punk Menu */}
        <div className="flex items-center space-x-3">
          {onBackToMenu && (
            <button
              onClick={onBackToMenu}
              className="px-3 py-1.5 rounded-xl bg-black/80 hover:bg-black text-[#eab308] hover:text-white border-2 border-[#eab308] hover:border-white font-mono text-xs font-black tracking-wider uppercase transition shadow-[3px_3px_0px_#ffffff] flex items-center space-x-1.5 active:scale-95"
              title="Volver al menú punk inicial"
            >
              <span>←</span>
              <span>{currentLang === 'es' ? 'MENÚ PRINCIPAL' : 'MAIN MENU'}</span>
            </button>
          )}

          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 p-1 flex items-center justify-center shadow-lg border border-amber-300/40">
            <span className="font-serif font-black text-white text-base">DS</span>
          </div>
          <div>
            <div className="text-[10px] font-mono tracking-widest text-amber-400 font-bold uppercase leading-none">
              COMMAND THEATER // GEOFÍSICA & COMUNICACIONES
            </div>
            <h1 className="text-base sm:text-lg font-serif font-black text-white tracking-tight leading-snug">
              DANIEL SANTANDER URRUTIA
            </h1>
          </div>
        </div>

        {/* Tactical Mission Filters (Color Legend) */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/60 border border-white/15 backdrop-blur-md overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1 rounded-lg font-mono text-xs transition-all ${
              activeFilter === 'all'
                ? 'bg-white text-black font-bold shadow'
                : 'text-neutral-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {currentLang === 'es' ? 'TODAS (14)' : 'ALL (14)'}
          </button>

          {/* Rojo: Ciencia */}
          <button
            onClick={() => setActiveFilter('science')}
            className={`px-3 py-1 rounded-lg font-mono text-xs transition-all flex items-center space-x-1.5 ${
              activeFilter === 'science'
                ? 'bg-red-600 text-white font-bold shadow'
                : 'text-neutral-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>{currentLang === 'es' ? 'CIENCIA (ROJO)' : 'SCIENCE (RED)'}</span>
          </button>

          {/* Verde: Comunicaciones */}
          <button
            onClick={() => setActiveFilter('comms')}
            className={`px-3 py-1 rounded-lg font-mono text-xs transition-all flex items-center space-x-1.5 ${
              activeFilter === 'comms'
                ? 'bg-emerald-600 text-white font-bold shadow'
                : 'text-neutral-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{currentLang === 'es' ? 'COMUNICACIONES (VERDE)' : 'COMMS (GREEN)'}</span>
          </button>

          {/* Ámbar: Cumbres & Política */}
          <button
            onClick={() => setActiveFilter('global')}
            className={`px-3 py-1 rounded-lg font-mono text-xs transition-all flex items-center space-x-1.5 ${
              activeFilter === 'global'
                ? 'bg-amber-600 text-white font-bold shadow'
                : 'text-neutral-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>{currentLang === 'es' ? 'CUMBRES (ÁMBAR)' : 'SUMMITS (AMBER)'}</span>
          </button>

          {/* Morado: I+D Innovación */}
          <button
            onClick={() => setActiveFilter('rd')}
            className={`px-3 py-1 rounded-lg font-mono text-xs transition-all flex items-center space-x-1.5 ${
              activeFilter === 'rd'
                ? 'bg-purple-600 text-white font-bold shadow'
                : 'text-neutral-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>I+D</span>
          </button>
        </div>

        {/* Right Controls: Language & Telemetry */}
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex flex-col text-right font-mono text-[10px] text-neutral-300 pr-2">
            <span className="text-amber-400 font-bold">
              {currentMission.city.toUpperCase()}, {currentMission.country.toUpperCase()}
            </span>
            <span>
              {Math.abs(currentMission.lat).toFixed(1)}°{currentMission.lat >= 0 ? 'N' : 'S'}{' '}
              {Math.abs(currentMission.lng).toFixed(1)}°{currentMission.lng >= 0 ? 'E' : 'W'}
            </span>
          </div>

          <button
            onClick={onToggleLanguage}
            className="px-2.5 py-1 rounded-lg bg-black/60 hover:bg-black/90 border border-white/20 font-mono text-xs font-bold text-amber-300 flex items-center space-x-1 transition shadow"
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? 'ES' : 'EN'}</span>
          </button>

          {onExitToDossier && (
            <button
              onClick={onExitToDossier}
              className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 font-serif text-xs text-neutral-200 transition"
              title="Volver a versión documento"
            >
              {currentLang === 'es' ? 'Vista Dossier' : 'Dossier View'}
            </button>
          )}
        </div>
      </header>

      {/* ============================================================== */}
      {/* 4. MAIN INTERACTIVE HUD STAGE                                  */}
      {/* ============================================================== */}
      <main className="relative z-20 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-start overflow-hidden">
        
        {/* Floatable Tactical Dossier Card (Left / Center Stage) */}
        {isDossierOpen && (
          <div className="w-full max-w-2xl lg:max-w-3xl max-h-[78vh] bg-[#0c1219]/90 border-2 border-white/20 rounded-2xl shadow-[0_16px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col overflow-hidden animate-fadeIn text-white">
            
            {/* Mission Window Header */}
            <div className="px-5 py-2.5 bg-black/70 border-b border-white/15 flex items-center justify-between font-mono text-xs shrink-0">
              <div className="flex items-center space-x-2.5">
                <span className={`w-3 h-3 rounded-full ${
                  currentMission.type === 'science' ? 'bg-red-500' :
                  currentMission.type === 'comms' ? 'bg-emerald-500' :
                  currentMission.type === 'global' ? 'bg-amber-500' : 'bg-purple-500'
                }`} />
                <span className="font-bold text-white tracking-widest">
                  {currentMission.code} // {currentMission.city.toUpperCase()}
                </span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-300">{currentMission.flag} {currentMission.country}</span>
              </div>

              {/* Prev / Next & Close */}
              <div className="flex items-center space-x-1.5">
                <button
                  onClick={handlePrev}
                  className="p-1 rounded hover:bg-white/10 text-neutral-300 hover:text-white transition"
                  title="Misión anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1 rounded hover:bg-white/10 text-neutral-300 hover:text-white transition"
                  title="Misión siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsDossierOpen(false)}
                  className="p-1 rounded hover:bg-white/10 text-neutral-300 hover:text-white transition ml-2"
                  title="Minimizar panel para ver el planeta"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mission Body Scrollable */}
            <div className="overflow-y-auto p-5 sm:p-6 space-y-4 no-scrollbar">
              
              {/* Media Viewport */}
              <div className="relative w-full rounded-xl bg-black/80 border border-white/15 overflow-hidden flex items-center justify-center min-h-[240px] max-h-[380px]">
                {currentMission.mediaType === 'video' && currentMission.embedUrl ? (
                  <div className="w-full aspect-video">
                    <iframe
                      src={currentMission.embedUrl}
                      title={currentMission.titleEs}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : currentMission.mediaType === 'audio' ? (
                  /* Pletina de Casete de Radio Campesina */
                  <div className="w-full p-6 bg-[#161b22] text-white flex flex-col items-center justify-center space-y-4">
                    <div className="flex items-center justify-between w-full font-mono text-[10px] text-emerald-400 border-b border-white/10 pb-1">
                      <span>RADIO CRISTALINA 96.3 FM • MAULE SUR</span>
                      <span>SIDE A • CÁPSULA RURAL</span>
                    </div>
                    <div className="flex items-center justify-center space-x-6 py-2">
                      <div className="w-12 h-12 rounded-full border-2 border-emerald-400 flex items-center justify-center animate-spin" style={{ animationDuration: '6s' }}>
                        <div className="w-4 h-4 bg-emerald-400 rounded-full" />
                      </div>
                      <span className="font-mono text-xs text-emerald-300">96.3 MHz FM</span>
                      <div className="w-12 h-12 rounded-full border-2 border-emerald-400 flex items-center justify-center animate-spin" style={{ animationDuration: '6s' }}>
                        <div className="w-4 h-4 bg-emerald-400 rounded-full" />
                      </div>
                    </div>
                    <audio controls className="w-full max-w-sm">
                      <source src={resolveAsset('/audio/corte_constitucion.mp3')} type="audio/mp3" />
                      Audio no disponible.
                    </audio>
                  </div>
                ) : currentMission.availablePages && currentMission.availablePages.length > 0 ? (
                  /* Visor de Láminas de Expediente Científico PNG */
                  <div className="w-full flex flex-col items-center p-2 bg-[#fdfbf7] rounded-lg">
                    <img
                      src={resolveAsset(
                        currentLang === 'en' && currentMission.availablePages[selectedPlatePage].pageSrcEn
                          ? currentMission.availablePages[selectedPlatePage].pageSrcEn
                          : currentMission.availablePages[selectedPlatePage].pageSrc
                      )}
                      alt="Expediente Científico Oficial"
                      className="max-h-[300px] w-auto object-contain rounded"
                    />
                    <div className="flex gap-1.5 pt-2 flex-wrap justify-center">
                      {currentMission.availablePages.map((pg, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => setSelectedPlatePage(pIdx)}
                          className={`px-2.5 py-0.5 rounded font-mono text-[10px] transition ${
                            selectedPlatePage === pIdx
                              ? 'bg-red-700 text-white font-bold'
                              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                          }`}
                        >
                          LÁMINA {pIdx + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : currentMission.src ? (
                  <div className="w-full flex items-center justify-center p-2 bg-[#fdfbf7] rounded-lg">
                    <img
                      src={resolveAsset(
                        currentLang === 'en' && currentMission.srcEn ? currentMission.srcEn : currentMission.src
                      )}
                      alt={currentMission.titleEs}
                      className="max-h-[320px] w-auto object-contain rounded"
                    />
                  </div>
                ) : null}
              </div>

              {/* Title & Metadata */}
              <div>
                <div className="flex items-center space-x-2 font-mono text-[10px] text-amber-400 mb-1">
                  <span>{currentMission.roleEs}</span>
                  <span>• {currentMission.date}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif font-black text-white leading-snug">
                  {currentLang === 'es' ? currentMission.titleEs : currentMission.titleEn}
                </h2>

                <p className="text-xs font-sans text-neutral-300 mt-1">
                  {currentLang === 'es' ? currentMission.subtitleEs : currentMission.subtitleEn}
                </p>
              </div>

              {/* Impact Synopsis */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="font-mono text-[10px] uppercase tracking-wider text-amber-300 font-bold">
                  {currentLang === 'es' ? 'SINOPSIS METODOLÓGICA & IMPACTO' : 'METHODOLOGY & IMPACT SYNOPSIS'}
                </div>
                <p className="text-xs font-serif text-neutral-200 leading-relaxed">
                  {currentLang === 'es' ? currentMission.impactEs : currentMission.impactEn}
                </p>
              </div>

              {/* Methodology Bullets */}
              <ul className="space-y-1.5 text-xs font-serif text-neutral-300">
                {(currentLang === 'es' ? currentMission.methodologyEs : currentMission.methodologyEn).map((m, mIdx) => (
                  <li key={mIdx} className="flex items-start space-x-2 bg-white/5 p-2 rounded border border-white/5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>

              {/* Links & Tags */}
              <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {currentMission.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded font-mono text-[10px] bg-white/10 text-neutral-300">
                      #{t}
                    </span>
                  ))}
                </div>

                {currentMission.url && (
                  <a
                    href={currentMission.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-serif font-bold text-xs flex items-center space-x-1 transition shadow"
                  >
                    <span>{currentLang === 'es' ? 'Abrir Fuente' : 'Open Source'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Restore Button if Window is Closed */}
        {!isDossierOpen && (
          <button
            onClick={() => setIsDossierOpen(true)}
            className="px-4 py-2 rounded-xl bg-black/80 hover:bg-black border border-white/30 text-amber-400 font-mono text-xs font-bold transition flex items-center space-x-2 shadow-2xl backdrop-blur-md"
          >
            <Maximize2 className="w-4 h-4" />
            <span>
              {currentLang === 'es'
                ? `ABRIR FICHA // ${currentMission.city.toUpperCase()}`
                : `OPEN DOSSIER // ${currentMission.city.toUpperCase()}`}
            </span>
          </button>
        )}

      </main>

      {/* ============================================================== */}
      {/* 5. BOTTOM HORIZONTAL MISSION RAIL (ESTILO BATTLEFIELD 1 / HALO) */}
      {/* ============================================================== */}
      <footer className="relative z-30 w-full px-4 sm:px-8 py-3 bg-gradient-to-t from-black via-black/90 to-transparent border-t border-white/10 backdrop-blur-md flex flex-col space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-bold tracking-wider text-amber-300 uppercase">
              {currentLang === 'es' ? 'SELECCIONA UNA REGIÓN O PROYECTO (EL PLANETA GIRA AL LUGAR)' : 'SELECT A REGION OR PROJECT (PLANET ROTATES TO TARGET)'}
            </span>
          </div>
          <div className="flex items-center space-x-3 text-neutral-300">
            <span>🔴 CIENCIA</span>
            <span>🟢 COMUNICACIONES</span>
            <span>🟡 CUMBRES</span>
            <span>🟣 I+D</span>
          </div>
        </div>

        {/* Horizontal Carousel of Missions */}
        <div className="w-full flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
          {filteredMissions.map((m) => {
            const isSelected = m.id === selectedMissionId;

            let borderTheme = 'border-red-500 text-red-400';
            let dotColor = 'bg-red-500';
            if (m.type === 'comms') {
              borderTheme = 'border-emerald-500 text-emerald-400';
              dotColor = 'bg-emerald-500';
            } else if (m.type === 'global') {
              borderTheme = 'border-amber-500 text-amber-400';
              dotColor = 'bg-amber-500';
            } else if (m.type === 'rd') {
              borderTheme = 'border-purple-500 text-purple-400';
              dotColor = 'bg-purple-500';
            }

            return (
              <div
                key={m.id}
                onClick={() => handleSelectMission(m.id)}
                className={`group relative cursor-pointer px-3.5 py-2.5 rounded-xl transition-all duration-200 shrink-0 w-[240px] sm:w-[260px] flex flex-col justify-between border-2 ${
                  isSelected
                    ? `bg-black/90 shadow-[0_0_20px_rgba(255,255,255,0.25)] scale-105 ${borderTheme}`
                    : 'bg-black/60 hover:bg-black/80 border-white/15 text-neutral-300 hover:border-white/40'
                }`}
              >
                {/* Card Top: Code & Country */}
                <div className="flex items-center justify-between text-[10px] font-mono pb-1 border-b border-white/10">
                  <div className="flex items-center space-x-1.5">
                    <span className={`w-2 h-2 rounded-full ${dotColor}`} />
                    <span className="font-bold">{m.code}</span>
                  </div>
                  <span>{m.flag} {m.city}</span>
                </div>

                {/* Card Title */}
                <div className="my-1.5">
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-white line-clamp-2 leading-snug group-hover:text-amber-300 transition-colors">
                    {currentLang === 'es' ? m.titleEs : m.titleEn}
                  </h4>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400 pt-1">
                  <span>{m.date}</span>
                  <span className="font-bold uppercase tracking-wider text-amber-400">
                    {isSelected ? (currentLang === 'es' ? 'EN FOCO' : 'ACTIVE') : (currentLang === 'es' ? 'VER' : 'VIEW')} →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </footer>

    </div>
  );
};
