import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
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

export type MissionType = 'science' | 'comms' | 'global' | 'rd' | 'culture';

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
  // 1. COMUNICACIONES: Cámara de Diputadas/os - Valparaíso
  {
    id: 'congreso-valparaiso',
    type: 'comms',
    titleEs: 'Intervención Oficial en Cámara de Diputadas/os: Megaincendios y Monocultivo',
    titleEn: 'Official Testimony at Chamber of Deputies: Wildfires & Forestry Monoculture',
    subtitleEs: 'Comisión Especial de Emergencia, Desastres y Bomberos // Asesoría Parlamentaria',
    subtitleEn: 'Special Commission on Emergencies, Disasters & Firefighting // Parliamentary Advisory',
    country: 'Chile',
    city: 'Valparaíso',
    flag: '🇨🇱',
    lat: -33.05,
    lng: -71.61,
    date: '2023',
    roleEs: 'Asesor Técnico Parlamentario & Vocero',
    roleEn: 'Parliamentary Technical Advisor & Spokesperson',
    mediaType: 'video',
    embedUrl: 'https://www.youtube.com/embed/7eJ-pQ3qe8o',
    url: 'https://www.youtube.com/watch?v=7eJ-pQ3qe8o',
    code: 'OPS-COM-01',
    source: 'Cámara de Diputadas y Diputados de Chile',
    impactEs: 'Asesoría técnica parlamentaria para coordinar políticas públicas sobre incendios, bosques y gestión del agua (según CV), exponiendo ante la Comisión Especial de Emergencia, Desastres y Bomberos.',
    impactEn: 'Parliamentary technical advice to coordinate public policies on fires, forests, and water management (CV), presenting before the Special Emergency Commission.',
    methodologyEs: [
      'Asesoría técnica parlamentaria en políticas de incendios, bosques y agua (CV)',
      'Correlación empírica entre monocultivos forestales y avance de incendios',
      'Propuesta de zonas de amortiguación y prevención civil'
    ],
    methodologyEn: [
      'Parliamentary technical advice on wildfire, forestry, and water policy (CV)',
      'Empirical correlation between timber monocultures and wildfire progression',
      'Civil protection and mandatory buffer zone proposals'
    ],
    tags: ['Congreso Nacional', 'Fiscalización', 'Megaincendios', 'Políticas Públicas']
  },

  // 2. CIENCIA: CAU Kiel - Doble Maestría en Gestión Ambiental
  {
    id: 'kiel-cau',
    type: 'science',
    titleEs: 'Doble Maestría en Gestión Ambiental // CAU Kiel',
    titleEn: 'Dual Master’s Degree in Environmental Management // CAU Kiel',
    subtitleEs: 'Christian Albrechts University (Kiel, Alemania) | 2023-2025',
    subtitleEn: 'Christian Albrechts University (Kiel, Germany) | 2023-2025',
    country: 'Alemania',
    city: 'Kiel',
    flag: '🇩🇪',
    lat: 54.32,
    lng: 10.13,
    date: '2023-2025',
    roleEs: 'Estudiante de Maestría & Investigador',
    roleEn: 'Master’s Student & Researcher',
    mediaType: 'plate',
    src: '/portfolio_pages/page_3.png',
    srcEn: '/portfolio_pages_en/page_3.png',
    code: 'OPS-SCI-01',
    source: 'Christian Albrechts University (CAU Kiel)',
    impactEs: 'Investigación en balance hídrico y dinámica de suelos integrando sistemas acuáticos y terrestres, y modelación del impacto de incendios forestales en ecosistemas de cuencas (según CV).',
    impactEn: 'Research on water balance and soil dynamics integrating aquatic and terrestrial systems, and modeling forest fire impacts on watershed ecosystems (from CV).',
    availablePages: [
      { titleEs: 'Lámina 1: Perfil y Trayectoria Geofísica', titleEn: 'Page 1: Profile & Geophysics Track', pageSrc: '/portfolio_pages/page_1.png', pageSrcEn: '/portfolio_pages_en/page_1.png' },
      { titleEs: 'Lámina 2: Balances Ecohidrológicos', titleEn: 'Page 2: Ecohydrological Balances', pageSrc: '/portfolio_pages/page_2.png', pageSrcEn: '/portfolio_pages_en/page_2.png' },
      { titleEs: 'Lámina 3: Modelación de Cuencas', titleEn: 'Page 3: Watershed Modeling', pageSrc: '/portfolio_pages/page_3.png', pageSrcEn: '/portfolio_pages_en/page_3.png' }
    ],
    methodologyEs: [
      'Balance hídrico y dinámica de suelos integrando sistemas acuáticos y terrestres (CV)',
      'Modelación del impacto de incendios forestales en ecosistemas de cuencas (CV)',
      'Doble maestría europea en gestión y protección ambiental (CV)'
    ],
    methodologyEn: [
      'Water balance and soil dynamics integrating aquatic and terrestrial systems (CV)',
      'Model of forest fire impacts on watershed ecosystems (CV)',
      'Dual European Master’s program in environmental management (CV)'
    ],
    tags: ['CAU Kiel', 'Alemania', 'Dinámica de Suelos', 'Balance Hídrico', 'Incendios']
  },

  // 3. COMUNICACIONES: Primera Línea Prensa (+700k) - Santiago
  {
    id: 'plp-prensa',
    type: 'comms',
    titleEs: 'Primera Línea Prensa: Redacción Independiente Popular (+700k)',
    titleEn: 'Primera Línea Prensa: Independent Grassroots Newsroom (+700k)',
    subtitleEs: 'Periodismo Ciudadano y Cobertura de Derechos Humanos en Chile',
    subtitleEn: 'Citizen Journalism & Human Rights Coverage in Chile',
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
    impactEs: 'Fundación y dirección de medio digital independiente durante el ciclo cívico 2019-2022 en Chile, alcanzando más de 700.000 seguidores orgánicos en redes sociales.',
    impactEn: 'Founded and led independent digital news outlet during the 2019-2022 civic cycle in Chile, scaling to +700,000 organic followers.',
    methodologyEs: [
      'Reportería en tiempo real y verificación de derechos humanos',
      'Desarrollo de red ciudadana de corresponsales comunitarios',
      'Comunicación política y agenda pública independiente'
    ],
    methodologyEn: [
      'Real-time frontline reporting and human rights verification',
      'Community correspondent network infrastructure',
      'Independent editorial agenda and digital advocacy'
    ],
    tags: ['+700k', 'Primera Línea Prensa', 'Periodismo Ciudadano', 'Santiago']
  },

  // 4. CIENCIA: AMU Poznań - Tesis de Maestría en Carbono y Humedales
  {
    id: 'poznan-amu',
    type: 'science',
    titleEs: 'Tesis de Maestría: Secuestro de Carbono en Humedales // AMU Poznań',
    titleEn: 'Master’s Thesis: Carbon Sequestration in Wetlands // AMU Poznań',
    subtitleEs: 'Adam Mickiewicz University (Poznań, Polonia) | 2023-2025',
    subtitleEn: 'Adam Mickiewicz University (Poznań, Poland) | 2023-2025',
    country: 'Polonia',
    city: 'Poznań',
    flag: '🇵🇱',
    lat: 52.41,
    lng: 16.93,
    date: '2023-2025',
    roleEs: 'Estudiante de Maestría & Tesista',
    roleEn: 'Master’s Student & Thesis Researcher',
    mediaType: 'plate',
    src: '/portfolio_pages/page_4.png',
    srcEn: '/portfolio_pages_en/page_4.png',
    code: 'OPS-SCI-02',
    source: 'Adam Mickiewicz University (AMU Poznań)',
    impactEs: 'Tesis de Maestría: Secuestro de carbono en humedales y su relación con ecosistemas terrestres adyacentes (Master\'s Thesis: Carbon sequestration in wetlands and its relationship with adjacent terrestrial ecosystems, según CV).',
    impactEn: 'Master’s Thesis: Carbon sequestration in wetlands and its relationship with adjacent terrestrial ecosystems (from CV).',
    methodologyEs: [
      'Secuestro de carbono en humedales (CV)',
      'Relación con ecosistemas terrestres adyacentes (CV)',
      'Maestría en Protección Ambiental en AMU Poznań (CV)'
    ],
    methodologyEn: [
      'Carbon sequestration in wetlands (CV)',
      'Coupling with adjacent terrestrial ecosystems (CV)',
      'Master’s Program in Environmental Protection at AMU Poznań (CV)'
    ],
    tags: ['AMU Poznań', 'Polonia', 'Carbono', 'Humedales', 'Tesis de Maestría']
  },

  // 5. COMUNICACIONES: Apruebo Rural - Maule
  {
    id: 'apruebo-rural',
    type: 'comms',
    titleEs: 'Campaña "Apruebo Rural": Coordinación Nacional de Campaña',
    titleEn: '"Apruebo Rural" Campaign: National Campaign Coordinator',
    subtitleEs: 'Campaña por una Nueva Constitución en Chile // Defensa Campesina del Agua',
    subtitleEn: 'Campaign for a New Constitution in Chile // Peasant Water Defense',
    country: 'Chile',
    city: 'Maule',
    flag: '🇨🇱',
    lat: -35.43,
    lng: -71.66,
    date: '2022',
    roleEs: 'Coordinador de Campaña "Apruebo Rural"',
    roleEn: '"Apruebo Rural" Campaign Coordinator',
    mediaType: 'woodcut',
    src: '/images/apruebo_rural_1.png',
    code: 'OPS-COM-03',
    source: 'Campaña Nacional Apruebo Rural (CV)',
    impactEs: 'Coordinación nacional de la campaña "Apruebo Rural" por una nueva constitución en Chile (según CV), articulando comités de agua potable rural y sindicatos campesinos con arte xilográfico.',
    impactEn: 'National coordinator of "Apruebo Rural": campaign for a new constitution in Chile (from CV), coordinating rural water assemblies, peasant unions, and relief printmaking.',
    methodologyEs: [
      'Coordinación de campaña por una nueva constitución en Chile (CV)',
      'Grabado en relieve y xilografía popular comunitaria',
      'Articulación de demandas del campo y soberanía de semillas'
    ],
    methodologyEn: [
      'Campaign coordinator for a new constitution in Chile (CV)',
      'Grassroots linocut and woodcut relief printmaking',
      'Articulating peasant water rights and seed defense'
    ],
    tags: ['Apruebo Rural', 'Constitución', 'Maule', 'Agua', 'Campesinado']
  },

  // 6. CUMBRES & POLÍTICA: Degrowth Conference - Oslo, Noruega
  {
    id: 'oslo-degrowth',
    type: 'global',
    titleEs: 'Degrowth Conference (Oslo, 2025): Alternativas a la Crisis',
    titleEn: 'Degrowth Conference (Oslo, 2025): Alternatives to the Crisis',
    subtitleEs: 'Conferencia Internacional de Decrecimiento // Presentación Oficial',
    subtitleEn: 'International Degrowth Conference // Official Presentation',
    country: 'Noruega',
    city: 'Oslo',
    flag: '🇳🇴',
    lat: 59.91,
    lng: 10.75,
    date: '2025',
    roleEs: 'Ponente Oficial',
    roleEn: 'Official Speaker',
    mediaType: 'press',
    src: '/press_covers/desconcierto_noruega_screen.png',
    url: 'https://eldesconcierto.cl/2025/07/06/paises-tan-ricos-que-no-quieren-crecer-mas-noruega-acoge-mayor-debate-mundial-sobre-alternativas-al-crecimiento-economico-infinito',
    code: 'OPS-GLO-01',
    source: 'Degrowth Conference Oslo 2025 (CV)',
    impactEs: 'Presentación en la Conferencia de Decrecimiento (Oslo, 2025) sobre alternativas a la crisis (Environment and Economy, según CV).',
    impactEn: 'Presentation at the Degrowth Conference (Oslo, 2025) on alternatives to the crisis (Environment and Economy, from CV).',
    methodologyEs: [
      'Presentación en la Conferencia de Decrecimiento sobre alternativas a la crisis (CV)',
      'Análisis de economía y medio ambiente (CV)',
      'Debate internacional sobre modelos poscrecimiento'
    ],
    methodologyEn: [
      'Presentation at the Degrowth Conference on alternatives to the crisis (CV)',
      'Environment and Economy research (CV)',
      'International post-growth debate'
    ],
    tags: ['Oslo', 'Noruega', 'Decrecimiento', 'Conferencia 2025', 'Economía']
  },

  // 7. CUMBRES & POLÍTICA: Environmental Justice Conference - Bonn, Alemania
  {
    id: 'bonn-ejc',
    type: 'global',
    titleEs: 'Environmental Justice Conference (Bonn, 2025)',
    titleEn: 'Environmental Justice Conference (Bonn, 2025)',
    subtitleEs: 'Estudio de Impactos de Celulosa y Biomasa // Maule, Biobío, Ñuble, Araucanía y Global (EPN & GFC)',
    subtitleEn: 'Study on Pulp & Biomass Impacts // Maule, Biobío, Ñuble, Araucanía & Global (EPN & GFC)',
    country: 'Alemania',
    city: 'Bonn',
    flag: '🇩🇪',
    lat: 50.73,
    lng: 7.10,
    date: '2025',
    roleEs: 'Investigador Expositor',
    roleEn: 'Researcher & Speaker',
    mediaType: 'press',
    src: '/press_covers/epn_screen.png',
    url: 'https://environmentalpaper.org/2023/06/spotlight-on-burning-biomass-for-energy-in-south-america-community-opposition-to-a-power-plant-in-parral-chile/',
    code: 'OPS-GLO-02',
    source: 'Environmental Justice Conference Bonn 2025 (CV)',
    impactEs: 'Ponencia en la Conferencia de Justicia Ambiental (Bonn, 2025) sobre los impactos de las plantaciones de monocultivo; investigación internacional sobre los impactos de la industria de celulosa, papel y quema de biomasa junto a Global Forest Coalition y Environmental Paper Network, centrada en la Región del Maule, Biobío, Ñuble, Araucanía y su cadena global (según CV).',
    impactEn: 'Presentation at the Environmental Justice Conference (Bonn, 2025) on monoculture impacts; international investigation into the pulp, paper, and biomass industry with Global Forest Coalition and Environmental Paper Network, analyzing Maule, Biobío, Ñuble, Araucanía, and global trade (from CV).',
    methodologyEs: [
      'Conferencia de Justicia Ambiental en Bonn sobre impactos de monocultivos (CV)',
      'Estudio sobre impactos de celulosa y biomasa en Maule, Biobío, Ñuble, Araucanía y Global (CV)',
      'Colaboración con Global Forest Coalition y Environmental Paper Network (CV)'
    ],
    methodologyEn: [
      'Environmental Justice Conference in Bonn on monoculture impacts (CV)',
      'Investigation into pulp and biomass across Maule, Biobío, Ñuble, Araucanía & Global (CV)',
      'Collaboration with Global Forest Coalition and Environmental Paper Network (CV)'
    ],
    tags: ['Bonn', 'Maule', 'Biobío', 'Ñuble', 'Araucanía', 'Global', 'EPN', 'Biomasa']
  },

  // 8. CUMBRES & POLÍTICA: CENSAT Agua Viva & Diálogos Forestales - Bogotá, Colombia
  {
    id: 'bogota-censat',
    type: 'global',
    titleEs: 'Foros de Justicia y Diálogos de Bosques // Bogotá, Colombia',
    titleEn: 'Justice Forums & Forest Dialogues // Bogotá, Colombia',
    subtitleEs: 'Censat Colombia - RESUMOF Chile & Certificación Economía Verde',
    subtitleEn: 'Censat Colombia - RESUMOF Chile & Green Economy Certification',
    country: 'Colombia',
    city: 'Bogotá',
    flag: '🇨🇴',
    lat: 4.71,
    lng: -74.07,
    date: '2022-2023',
    roleEs: 'Representante de Organizaciones Ambientales',
    roleEn: 'Environmental Organizations Delegate',
    mediaType: 'press',
    src: '/press_covers/olca_screen.png',
    url: 'https://olca.cl',
    code: 'OPS-GLO-03',
    source: 'Censat Colombia / RESUMOF (CV)',
    impactEs: 'Representación ante organizaciones ambientales en conferencias y foros sobre justicia y Cambio Climático (Bogotá, 2023); Diálogos sobre Manejo de Bosques y Selvas (Censat Colombia - RESUMOF Chile); Certificación en Economía Verde y Financiarización de la Naturaleza (CENSAT Agua Viva, 2022, según CV).',
    impactEn: 'Representation to environmental organizations at forums on justice and Climate Change (Bogotá, 2023); Dialogues on Forest and Jungle Management (Censat Colombia - RESUMOF Chile); Certification: Green Economy and Financialization of Nature (CENSAT, 2022, from CV).',
    methodologyEs: [
      'Representación en foros de justicia y Cambio Climático en Bogotá (CV)',
      'Diálogos sobre Manejo de Bosques y Selvas (Censat Colombia - RESUMOF Chile, CV)',
      'Certificación: Economía Verde y Financiarización de la Naturaleza (CENSAT Agua Viva, CV)'
    ],
    methodologyEn: [
      'Representation at forums on justice and Climate Change in Bogotá (CV)',
      'Dialogues on Forest and Jungle Management (Censat Colombia - RESUMOF Chile, CV)',
      'Certification: Green Economy and Financialization of Nature (CENSAT, CV)'
    ],
    tags: ['Bogotá', 'Colombia', 'Censat Colombia', 'RESUMOF', 'Bosques']
  },

  // 9. CUMBRES & POLÍTICA: Justicia y Cambio Climático - San José, Costa Rica
  {
    id: 'costarica-justicia',
    type: 'global',
    titleEs: 'Foro sobre Justicia y Cambio Climático // San José, Costa Rica',
    titleEn: 'Justice & Climate Change Forum // San José, Costa Rica',
    subtitleEs: 'Representación ante Organizaciones Ambientales (2023)',
    subtitleEn: 'Representation to Environmental Organizations (2023)',
    country: 'Costa Rica',
    city: 'San José',
    flag: '🇨🇷',
    lat: 9.93,
    lng: -84.08,
    date: '2023',
    roleEs: 'Representante de Organizaciones Ambientales',
    roleEn: 'Environmental Organizations Delegate',
    mediaType: 'press',
    src: '/press_covers/delfino_screen.png',
    url: 'https://delfino.cr/2023/04/jovenes-activistas-climaticos-de-latinoamerica-tuvieron-encuentro-de-trabajo-en-costa-rica',
    code: 'OPS-GLO-04',
    source: 'Foro Internacional de Organizaciones Ambientales (CV)',
    impactEs: 'Representación ante organizaciones ambientales en conferencias y foros sobre justicia y Cambio Climático (San José, Costa Rica, 2023, según CV).',
    impactEn: 'Representation to environmental organizations at conferences and forums on justice and Climate Change (San José, Costa Rica, 2023, from CV).',
    methodologyEs: [
      'Representación ante organizaciones ambientales en conferencias sobre justicia y Cambio Climático (CV)',
      'Intercambio regional de experiencias comunitarias frente a la crisis climática',
      'Articulación de redes socioambientales latinoamericanas'
    ],
    methodologyEn: [
      'Representation to environmental organizations at climate justice conferences (CV)',
      'Regional grassroots knowledge exchange on climate disruption',
      'Pan-American socio-environmental networking'
    ],
    tags: ['Costa Rica', 'San José', 'Justicia Climática', 'Organizaciones Ambientales']
  },

  // 10. CUMBRES & POLÍTICA: Justicia y Cambio Climático - Munich, Alemania
  {
    id: 'munich-clima',
    type: 'global',
    titleEs: 'Foro sobre Justicia y Cambio Climático // Munich, Alemania',
    titleEn: 'Justice & Climate Change Forum // Munich, Germany',
    subtitleEs: 'Representación ante Organizaciones Ambientales (2025)',
    subtitleEn: 'Representation to Environmental Organizations (2025)',
    country: 'Alemania',
    city: 'Munich',
    flag: '🇩🇪',
    lat: 48.14,
    lng: 11.58,
    date: '2025',
    roleEs: 'Representante de Organizaciones Ambientales',
    roleEn: 'Environmental Organizations Delegate',
    mediaType: 'cv',
    src: '/profile.jpg',
    code: 'OPS-GLO-05',
    source: 'Conferencia sobre Justicia y Clima Munich (CV)',
    impactEs: 'Representación ante organizaciones ambientales en conferencias y foros sobre justicia y Cambio Climático (Munich, Alemania, 2025, según CV).',
    impactEn: 'Representation to environmental organizations at conferences and forums on justice and Climate Change (Munich, Germany, 2025, from CV).',
    methodologyEs: [
      'Representación ante organizaciones ambientales en foros sobre justicia y Cambio Climático (CV)',
      'Incidencia internacional en políticas de transición ecológica',
      'Enlace entre realidades del Sur Global y redes de la sociedad civil europea'
    ],
    methodologyEn: [
      'Representation to environmental organizations at climate justice forums (CV)',
      'International advocacy on ecological transition policies',
      'Connecting Global South realities with European civil society networks'
    ],
    tags: ['Munich', 'Alemania', 'Justicia Climática', 'Foros Ambientales']
  },

  // 11. CIENCIA: WSL BlueGreen Biodiversity - Davos, Suiza
  {
    id: 'wsl-davos',
    type: 'science',
    titleEs: 'Certificación: BlueGreen Biodiversity // WSL Davos, Suiza',
    titleEn: 'Certification: BlueGreen Biodiversity // WSL Davos, Switzerland',
    subtitleEs: 'WSL Swiss Federal Research Institute | 2025',
    subtitleEn: 'WSL Swiss Federal Research Institute | 2025',
    country: 'Suiza',
    city: 'Davos',
    flag: '🇨🇭',
    lat: 46.80,
    lng: 9.83,
    date: '2025',
    roleEs: 'Investigador Certificado WSL',
    roleEn: 'WSL Certified Researcher',
    mediaType: 'plate',
    src: '/portfolio_pages/page_5.png',
    srcEn: '/portfolio_pages_en/page_5.png',
    code: 'OPS-SCI-03',
    source: 'WSL Davos (CV)',
    impactEs: 'Certificación en BlueGreen Biodiversity obtenida en el Instituto Federal Suizo de Investigación WSL (Davos, Suiza, 2025, según CV).',
    impactEn: 'Certification in BlueGreen Biodiversity from WSL Swiss Federal Research Institute (Davos, Switzerland, 2025, from CV).',
    methodologyEs: [
      'Certificación BlueGreen Biodiversity en WSL Davos (CV)',
      'Dinámica e interacción de sistemas riparios y terrestres',
      'Estrategias de resiliencia ecosistémica en cuencas'
    ],
    methodologyEn: [
      'BlueGreen Biodiversity Certification at WSL Davos (CV)',
      'Dynamics and interplay of riparian and terrestrial systems',
      'Ecosystem resilience strategies in watersheds'
    ],
    tags: ['Davos', 'Suiza', 'WSL', 'BlueGreen Biodiversity', 'Certificación']
  },

  // 12. CIENCIA: Doughnut Economics - Copenhague, Dinamarca
  {
    id: 'deal-copenhagen',
    type: 'science',
    titleEs: 'Certificación: Doughnut Economics // DEAL Copenhague',
    titleEn: 'Certification: Doughnut Economics // DEAL Copenhagen',
    subtitleEs: 'DEAL Copenhagen, Dinamarca | 2025',
    subtitleEn: 'DEAL Copenhagen, Denmark | 2025',
    country: 'Dinamarca',
    city: 'Copenhague',
    flag: '🇩🇰',
    lat: 55.68,
    lng: 12.57,
    date: '2025',
    roleEs: 'Especialista Certificado DEAL',
    roleEn: 'DEAL Certified Specialist',
    mediaType: 'plate',
    src: '/portfolio_pages/page_6.png',
    srcEn: '/portfolio_pages_en/page_6.png',
    code: 'OPS-SCI-04',
    source: 'Doughnut Economics Action Lab (DEAL Copenhagen, CV)',
    impactEs: 'Certificación en Doughnut Economics (DEAL Copenhague, Dinamarca, 2025, según CV).',
    impactEn: 'Certification in Doughnut Economics (DEAL Copenhagen, Denmark, 2025, from CV).',
    methodologyEs: [
      'Certificación en Doughnut Economics por DEAL Copenhague (CV)',
      'Marco de límites planetarios y fundamentos sociales',
      'Planificación territorial regenerativa y redistributiva'
    ],
    methodologyEn: [
      'Doughnut Economics certification by DEAL Copenhagen (CV)',
      'Planetary boundaries and social foundation framework',
      'Regenerative and distributive territorial planning'
    ],
    tags: ['Copenhague', 'Dinamarca', 'Doughnut Economics', 'DEAL', 'Certificación']
  },

  // 13. CIENCIA: Interlinked Justice - Dresden, Alemania
  {
    id: 'dresden-justice',
    type: 'science',
    titleEs: 'Certificación: Interlinked Justice // Dresden, Alemania',
    titleEn: 'Certification: Interlinked Justice // Dresden, Germany',
    subtitleEs: 'Programa Académico en Dresden | Certificación Oficial',
    subtitleEn: 'Academic Program in Dresden | Official Certification',
    country: 'Alemania',
    city: 'Dresden',
    flag: '🇩🇪',
    lat: 51.05,
    lng: 13.74,
    date: '2024-2025',
    roleEs: 'Participante Certificado',
    roleEn: 'Certified Participant',
    mediaType: 'cv',
    src: '/profile.jpg',
    code: 'OPS-SCI-05',
    source: 'Interlinked Justice Dresden (CV)',
    impactEs: 'Certificación académica en Interlinked Justice (Dresden - Alemania, según sección Additional Information del CV).',
    impactEn: 'Academic certification in Interlinked Justice (Dresden - Germany, from CV Additional Information section).',
    methodologyEs: [
      'Certificación en Interlinked Justice en Dresden, Alemania (CV)',
      'Marcos de justicia ambiental y social interconectada',
      'Gobernanza de recursos naturales y equidad territorial'
    ],
    methodologyEn: [
      'Interlinked Justice certification in Dresden, Germany (CV)',
      'Interconnected environmental and social justice frameworks',
      'Natural resource governance and spatial equity'
    ],
    tags: ['Dresden', 'Alemania', 'Interlinked Justice', 'Certificación']
  },

  // 14. CIENCIA: Universidad de Chile & Asesoría a la Convención Constitucional
  {
    id: 'uchile-convencion',
    type: 'science',
    titleEs: 'Geofísico con Distinción & Asesoría a la Convención Constitucional',
    titleEn: 'Geophysicist with Distinction & Advisor to Constitutional Convention',
    subtitleEs: 'Universidad de Chile (2021) // Asesor en Política Ambiental',
    subtitleEn: 'University of Chile (2021) // Environmental Policy Advisor',
    country: 'Chile',
    city: 'Santiago',
    flag: '🇨🇱',
    lat: -33.45,
    lng: -70.66,
    date: '2021-2022',
    roleEs: 'Geofísico con Distinción & Asesor en Política Ambiental',
    roleEn: 'Geophysicist with Distinction & Environmental Policy Advisor',
    mediaType: 'plate',
    src: '/portfolio_pages/page_1.png',
    srcEn: '/portfolio_pages_en/page_1.png',
    code: 'OPS-SCI-06',
    source: 'Universidad de Chile & Convención Constitucional (CV)',
    impactEs: 'Geofísico graduado con distinción por la Universidad de Chile (2021). Asesoría técnica a la Convención Constitucional en residuos, minería, clima y transición agroforestal; elaboración de planes de ordenamiento de cuencas y gestión de la transición productiva agrícola (según CV).',
    impactEn: 'Geophysicist graduated with distinction from the University of Chile (2021). Technical advice to the Constitutional Convention (waste, mining, climate, agroforestry transition); watershed management plans and agricultural transition (from CV).',
    methodologyEs: [
      'Geofísica con distinción máxima en Universidad de Chile (CV)',
      'Asesoría técnica a la Convención Constitucional en minería, residuos, clima y agroforestería (CV)',
      'Elaboración de planes de manejo de cuencas y transición productiva (CV)'
    ],
    methodologyEn: [
      'Geophysics with distinction from University of Chile (CV)',
      'Technical advice to the Constitutional Convention on mining, waste, climate, agroforestry (CV)',
      'Watershed management plans and agricultural transition design (CV)'
    ],
    tags: ['U. de Chile', 'Geofísica', 'Convención Constitucional', 'Cuencas']
  },

  // 15. COMUNICACIONES: Radio Cristalina 96.3 FM - Maule Sur
  {
    id: 'radio-cristalina',
    type: 'comms',
    titleEs: 'Red Comunitaria Maule Sur & Radio Cristalina 96.3 FM',
    titleEn: 'Maule Sur Community Network & Radio Cristalina 96.3 FM',
    subtitleEs: 'Programa "El Maule Sur También Existe" y Taller de Corresponsales Populares',
    subtitleEn: '"El Maule Sur También Existe" Radio Series & Popular Reporters Workshop',
    country: 'Chile',
    city: 'Maule Sur',
    flag: '🇨🇱',
    lat: -35.85,
    lng: -71.80,
    date: '2021-2023',
    roleEs: 'Panelista Radial & Capacitador Comunitario',
    roleEn: 'Radio Panellist & Grassroots Trainer',
    mediaType: 'audio',
    src: '/maule_sur_radio.jpg',
    code: 'OPS-COM-04',
    source: 'Radio Cristalina 96.3 FM & Red Maule Sur (Portafolio Comms)',
    impactEs: 'Panelista regular en el programa radial "El Maule Sur También Existe" en Radio Cristalina 96.3 FM y creador del Taller de Corresponsales Populares, capacitando a vecinos rurales en reportería comunitaria.',
    impactEn: 'Regular broadcaster on "El Maule Sur También Existe" on Radio Cristalina 96.3 FM and instructor of the Grassroots Reporters Workshop, training rural residents.',
    methodologyEs: [
      'Emisiones radiales en frecuencia modulada comunitaria en el Maule Sur',
      'Taller de Corresponsales Populares para vocerías y vecinos del campo',
      'Difusión pedagógica de problemas hídricos y ambientales territoriales'
    ],
    methodologyEn: [
      'Community FM radio broadcasting in rural Maule Sur',
      'Grassroots Reporters Workshop empowering agricultural neighbors',
      'Educational dissemination on local water and ecological challenges'
    ],
    tags: ['Radio Cristalina', 'Maule Sur', 'Corresponsales', 'Comunitaria']
  },

  // 16. COMUNICACIONES: Campaña "Solo el pueblo ayuda al pueblo"
  {
    id: 'campana-victimas',
    type: 'comms',
    titleEs: 'Campaña "Solo el pueblo ayuda al pueblo"',
    titleEn: '"Only the people help the people" Campaign',
    subtitleEs: 'Ayuda a Víctimas de Incendios e Inundaciones // Maule, Biobío, Ñuble y Santiago (CV)',
    subtitleEn: 'Aid to Victims of Fires & Floods // Maule, Biobío, Ñuble & Santiago (CV)',
    country: 'Chile',
    city: 'Maule, Biobío, Ñuble & Santiago',
    flag: '🇨🇱',
    lat: -35.60,
    lng: -71.55,
    date: '2019-2023',
    roleEs: 'Coordinador de Campaña & Recaudación',
    roleEn: 'Campaign Coordinator & Fundraising',
    mediaType: 'press',
    src: '/profile.jpg',
    code: 'OPS-COM-05',
    source: 'Campaña de Solidaridad Comunitaria (CV)',
    impactEs: 'Coordinación y recaudación de fondos para la campaña "Solo el pueblo ayuda al pueblo": campañas de ayuda a víctimas de incendios e inundaciones desplegadas en Maule, Biobío, Ñuble y Santiago en distintos años (según CV).',
    impactEn: 'Campaign coordinator & fundraising for "Only the people help the people": campaigns aiding victims of wildfires and floods deployed across Maule, Biobío, Ñuble, and Santiago across multiple years (from CV).',
    methodologyEs: [
      'Coordinación y recaudación de fondos en emergencias socioambientales (CV)',
      'Canalización directa de ayuda a familias damnificadas en Maule, Biobío, Ñuble y Santiago',
      'Solidaridad comunitaria y autoorganización popular territorial'
    ],
    methodologyEn: [
      'Campaign coordination and emergency fundraising (CV)',
      'Direct mutual aid delivery to families impacted across Maule, Biobío, Ñuble, and Santiago',
      'Grassroots community self-organization and relief logistics'
    ],
    tags: ['Maule', 'Biobío', 'Ñuble', 'Santiago', 'Solidaridad', 'Incendios', 'Inundaciones']
  },

  // 17. ARTE & CULTURA: Brigada Paulina Aguirre - Propaganda & Serigrafía Callejera
  {
    id: 'brigada-paulina-aguirre',
    type: 'culture',
    titleEs: 'Brigada Paulina Aguirre: Propaganda Callejera y Serigrafía Popular',
    titleEn: 'Brigada Paulina Aguirre: Street Propaganda & Grassroots Printmaking',
    subtitleEs: 'Afiche "Evadir", Muralismo No+AFP y Agitación Visual // Santiago (2019-2020)',
    subtitleEn: 'Historical "Evadir" Poster, No+AFP Muralism & Visual Agitation // Santiago',
    country: 'Chile',
    city: 'Santiago (Plaza Dignidad / Alameda)',
    flag: '🇨🇱',
    lat: -33.44,
    lng: -70.63,
    date: '2019-2020',
    roleEs: 'Muralista & Artivista de Propaganda Callejera',
    roleEn: 'Muralist & Street Propaganda Artivist',
    mediaType: 'woodcut',
    src: '/brigada/brigada_mural_no_afp.png',
    code: 'OPS-CUL-01',
    source: 'Brigada de Propaganda Paulina Aguirre (Portafolio)',
    availablePages: [
      { titleEs: 'Lámina 1: Mural Monumental No+AFP', titleEn: 'Plate 1: No+AFP Monumental Mural', pageSrc: '/brigada/brigada_mural_no_afp.png' },
      { titleEs: 'Lámina 2: Afiche "Evadir, No Pagar"', titleEn: 'Plate 2: "Evadir, No Pagar" Poster', pageSrc: '/brigada/brigada_afiche_evadir.png' },
      { titleEs: 'Lámina 3: Fotografía en Alameda', titleEn: 'Plate 3: Frontline Alameda Photo', pageSrc: '/brigada/brigada_protesta.png' },
      { titleEs: 'Lámina 4: Gráficas Digitales', titleEn: 'Plate 4: Digital Agitation Graphics', pageSrc: '/brigada/brigada_grafica_digital.jpg' }
    ],
    impactEs: 'Diseño y serigrafía callejera del histórico afiche "Evadir, No Pagar: Otra Forma de Luchar", muralismo monumental en fachadas barriales y agitación visual durante las jornadas de movilización popular en Santiago (2019).',
    impactEn: 'Design and silkscreen flyposting of the iconic "Evadir, No Pagar" poster, monumental neighborhood facade murals, and visual agitation during the October 2019 uprising in Santiago.',
    methodologyEs: [
      'Serigrafía y afiches de agitación callejera pegados en el centro de Santiago',
      'Muralismo monumental comunitario visibilizando las demandas del pueblo trabajador',
      'Registro fotográfico de movilizaciones populares y gráfica de contra-información'
    ],
    methodologyEn: [
      'Silkscreen flyposting across downtown Santiago subway turnstiles and streets',
      'Large-scale community facade murals portraying working-class struggles',
      'Protest photography and digital counter-information agitation'
    ],
    tags: ['Brigada Paulina Aguirre', 'Evadir No Pagar', 'Muralismo', 'No Más AFP', 'Santiago', 'Cultura']
  },

  // 18. ARTE & CULTURA: Rap Beauchef - Arena Universitaria & Circuito Internacional
  {
    id: 'rap-beauchef',
    type: 'culture',
    titleEs: 'Rap Beauchef: Arena Universitaria & Circuito Internacional',
    titleEn: 'Rap Beauchef: University Arena & International Online Circuit',
    subtitleEs: 'Torneos en Anfiteatro FCFM, "Dueñas de la Voz" y Alianzas con Japón, Perú, Argentina y México',
    subtitleEn: 'FCFM Amphitheater Cyphers, "Dueñas de la Voz" & Collaborations with Japan, Peru, Argentina & Mexico',
    country: 'Chile',
    city: 'Santiago & Red Internacional (Japón, Perú, Argentina, México)',
    flag: '🇨🇱',
    lat: -33.457,
    lng: -70.663,
    date: '2019-2021',
    roleEs: 'Organizador General & Director Creativo',
    roleEn: 'Head Organizer & Creative Director',
    mediaType: 'press',
    src: '/instagram_covers/B9ljgLMngum.jpg',
    url: 'https://www.instagram.com/p/B9ljgLMngum/',
    code: 'OPS-CUL-02',
    source: '@rapbeauchef // FCFM U. de Chile & Red Internacional',
    impactEs: 'Dirección y producción de Rap Beauchef en el anfiteatro de la FCFM (U. de Chile), certamen femenino "Dueñas de la Voz" y proyección internacional online con colaboraciones y competidores de Japón, Perú, Argentina y México.',
    impactEn: 'Directed and produced Rap Beauchef at the FCFM amphitheater (U. of Chile), the "Dueñas de la Voz" women\'s showcase, and international online expansions connecting emcees from Japan, Peru, Argentina, and Mexico.',
    methodologyEs: [
      'Organización y producción técnica autogestionada de batallas de freestyle en arena universitaria',
      'Certamen "Dueñas de la Voz": visibilización del liderazgo lírico y spoken word femenino',
      'Red internacional de freestyle online con emcees y colectivos de Japón, Perú, Argentina y México'
    ],
    methodologyEn: [
      'Self-managed technical and stage production of live university freestyle tournaments',
      '"Dueñas de la Voz": empowering women emcees, lyricists, and vocal artists',
      'International online tournament circuit connecting artists from Japan, Peru, Argentina, and Mexico'
    ],
    tags: ['Rap Beauchef', 'FCFM', 'Dueñas de la Voz', 'Japón', 'Perú', 'Argentina', 'México', 'Hip-Hop']
  },

  // 19. ARTE & CULTURA: Cuarentena Rap - Liga Federal Latinoamericana en Streaming
  {
    id: 'cuarentena-rap',
    type: 'culture',
    titleEs: 'Cuarentena Rap: Liga Federal Latinoamericana en Pandemia',
    titleEn: 'Cuarentena Rap: Pan-American Digital Streaming Championship',
    subtitleEs: 'Red Federal de Ligas Underground: Chile, Argentina, Colombia, Perú y México // Manifiesto Conceptual',
    subtitleEn: 'Federated Underground Leagues: Chile, Argentina, Colombia, Peru & Mexico // Conceptual Manifesto',
    country: 'Latinoamérica',
    city: 'Red Federal (Chile, Argentina, Colombia, Perú, México)',
    flag: '🌎',
    lat: -12.04,
    lng: -77.04,
    date: '2020-2021',
    roleEs: 'Creador & Director Creativo de la Liga',
    roleEn: 'Creator & Creative League Director',
    mediaType: 'video',
    embedUrl: 'https://www.youtube.com/embed/B2XrNxHxwrA',
    url: 'https://www.youtube.com/watch?v=B2XrNxHxwrA',
    src: '/youtube_covers/B2XrNxHxwrA.jpg',
    code: 'OPS-CUL-03',
    source: 'Cuarentena Rap // Streaming & Red Federal',
    impactEs: 'Diseño y dirección de la liga digital durante la pandemia con narrativa conceptual ("fase de karmas" y renacer artístico), federando colectivos y plazas underground de Chile, Argentina, Colombia, Perú y México en disciplinas de freestyle, batallas escritas y beatbox.',
    impactEn: 'Designed and directed the pandemic streaming championship with a conceptual narrative ("karma phase" and artistic rebirth), federating underground leagues from Chile, Argentina, Colombia, Peru, and Mexico across freestyle, written battles, and beatbox.',
    methodologyEs: [
      'Narrativa conceptual: purga de karmas del encierro y catarsis a través de la rima colectiva',
      'Red federal que articuló a ligas de plaza underground de Chile, Argentina, Colombia, Perú y México',
      'Integración multidisciplinaria de freestyle en vivo, guerra de letras escritas y torneo de beatbox'
    ],
    methodologyEn: [
      'Conceptual storytelling: purging lockdown karmas through collective lyricism and rebirth',
      'Federal network uniting underground street leagues from Chile, Argentina, Colombia, Peru, and Mexico',
      'Multidisciplinary league featuring live freestyle, written rap battles, and beatboxing cup'
    ],
    tags: ['Cuarentena Rap', 'Red Latinoamericana', 'Chile', 'Argentina', 'Colombia', 'Perú', 'México', 'Beatbox']
  },

  // 18. I+D & INNOVACIÓN: Bioacústica Vegetal & Geofísica en Bosques Nativos
  {
    id: 'rd-bioacustica',
    type: 'rd',
    titleEs: 'Proyecto en Desarrollo: Geofísica y Bioacústica Vegetal',
    titleEn: 'Project in Development: Geophysics & Plant Bioacoustics',
    subtitleEs: 'Evaluación de Salud de Ecosistemas en Bosques Nativos y Cuencas del Centro-Sur de Chile',
    subtitleEn: 'Ecosystem Health Assessment in Native Forests & Catchments of Central-Southern Chile',
    country: 'Chile',
    city: 'Bosques Nativos Centro-Sur',
    flag: '🇨🇱',
    lat: -37.40,
    lng: -72.30,
    date: '2024-2025',
    roleEs: 'Investigador de Proyecto (Concursos y Competiciones)',
    roleEn: 'Project Researcher (Contests & Competitions)',
    mediaType: 'plate',
    src: '/portfolio_pages/page_3.png',
    code: 'OPS-RD-01',
    source: 'Projects in development (CV)',
    impactEs: 'Proyecto en desarrollo (en concursos y competiciones): "Integrating geophysics and plant bioacoustics for ecosystem health assessment", orientado a la cuantificación del estado biofísico y estrés hídrico en bosques nativos y cuencas del centro-sur de Chile (según CV).',
    impactEn: 'Project in development (in contests and competitions): "Integrating geophysics and plant bioacoustics for ecosystem health assessment", focused on native forests and catchments in central-southern Chile (from CV).',
    methodologyEs: [
      'Integración de geofísica y bioacústica vegetal (CV)',
      'Evaluación de la salud de ecosistemas en bosques nativos del centro-sur de Chile',
      'Proyectos en desarrollo en concursos y competiciones (CV)'
    ],
    methodologyEn: [
      'Integrating geophysics and plant bioacoustics (CV)',
      'Ecosystem health assessment in native forests of central-southern Chile',
      'Projects in development in contests and competitions (CV)'
    ],
    tags: ['Chile', 'Bosques Nativos', 'Centro-Sur', 'Geofísica', 'Bioacústica', 'I+D']
  },

  // 19. I+D & INNOVACIÓN: Smart Food Parks & Permacultura para Ciudades Europeas ODS
  {
    id: 'rd-smart-food-parks',
    type: 'rd',
    titleEs: 'Smart Food Parks: Ciudades Europeas ODS & Permacultura (EPAC)',
    titleEn: 'Smart Food Parks: European SDG Cities & Permaculture (EPAC)',
    subtitleEs: 'Uniendo Naturaleza y Tecnología para Ciudades Europeas ODS // Permacultura (EPAC)',
    subtitleEn: 'Uniting Nature & Technology for European SDG Cities // Permaculture Design (EPAC)',
    country: 'Europa',
    city: 'Ciudades Europeas ODS',
    flag: '🇪🇺',
    lat: 53.55,
    lng: 9.99,
    date: '2023-2025',
    roleEs: 'Diseñador en Permacultura Certificado (CDP)',
    roleEn: 'Certified Permaculture Designer (CDP)',
    mediaType: 'woodcut',
    src: '/images/apruebo_rural_1.png',
    code: 'OPS-RD-02',
    source: 'Projects in development & Education EPAC (CV)',
    impactEs: 'Proyecto en desarrollo (en concursos y competiciones): "Smart Food Parks: Uniting nature and technology for SDG cities" concebido para ciudades europeas en el marco de los ODS, articulando diseño permacultural (CDP EPAC 2023) con tecnologías abiertas (según CV).',
    impactEn: 'Project in development (in contests and competitions): "Smart Food Parks: Uniting nature and technology for SDG cities" designed for European SDG cities, integrating permaculture design (CDP EPAC 2023) and open-source solutions (from CV).',
    methodologyEs: [
      'Smart Food Parks: uniendo naturaleza y tecnología para ciudades europeas ODS (CV)',
      'Certificado como Diseñador en Permacultura (CDP) por la Escuela Chilena de Permacultura y Agroecología EPAC (CV)',
      'Diseño regenerativo para entornos urbanos ODS'
    ],
    methodologyEn: [
      'Smart Food Parks: uniting nature and technology for European SDG cities (CV)',
      'Certified Permaculture Designer (CDP), Chilean School of Permaculture and Agroecology EPAC (CV)',
      'Regenerative design for SDG urban ecosystems'
    ],
    tags: ['Ciudades Europeas ODS', 'Europa', 'Smart Food Parks', 'Permacultura', 'EPAC', 'I+D']
  }
];


// Precise spherical coordinate mapping to Three.js 3D globe coordinates
const latLngToVector3 = (lat: number, lng: number, radius: number): THREE.Vector3 => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
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

  const mountRef = useRef<HTMLDivElement | null>(null);

  const currentMission = GAME_MISSIONS.find((m) => m.id === selectedMissionId) || GAME_MISSIONS[0];
  const currentMissionIndex = GAME_MISSIONS.findIndex((m) => m.id === selectedMissionId);

  const selectedMissionRef = useRef(selectedMissionId);
  selectedMissionRef.current = selectedMissionId;

  const activeFilterRef = useRef(activeFilter);
  activeFilterRef.current = activeFilter;

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

  // Three.js Photorealistic 3D Earth Globe HUD
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let animId: number;
    const width = mount.clientWidth || window.innerWidth || 1400;
    const height = mount.clientHeight || window.innerHeight || 900;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0, 6.2);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 3. Earth Group (Positioned with right-side bias on desktop for tactical HUD layout)
    const earthGroup = new THREE.Group();
    const updateLayout = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      if (w > 900) {
        earthGroup.position.set(1.4, 0, 0);
      } else {
        earthGroup.position.set(0, 0.35, 0);
      }
    };
    updateLayout();
    scene.add(earthGroup);

    // 4. Textures Loading (NASA Blue Marble True-Color surface + Normal Map Relief + Oceans + Clouds)
    const textureLoader = new THREE.TextureLoader();
    const dayMap = textureLoader.load(resolveAsset('/earth/earth_day_4096.jpg'));
    dayMap.colorSpace = THREE.SRGBColorSpace;
    dayMap.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const normalMap = textureLoader.load(resolveAsset('/earth/earth_normal_2048.jpg'));
    const specMap = textureLoader.load(resolveAsset('/earth/earth_specular_2048.jpg'));
    const cloudsMap = textureLoader.load(resolveAsset('/earth/earth_clouds_1024.png'));

    // 5. Main Earth Sphere (Real Continents, Oceans & Mountain Relief Shadows)
    const earthRadius = 2.25;
    const earthGeo = new THREE.SphereGeometry(earthRadius, 64, 64);
    const earthMat = new THREE.MeshPhongMaterial({
      map: dayMap,
      normalMap: normalMap,
      normalScale: new THREE.Vector2(1.6, 1.6), // Pronounced 3D relief on Andes, Himalayas, Alps, Rockies!
      specularMap: specMap,
      specular: new THREE.Color(0x305075), // Realistic water specularity
      shininess: 28,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthGroup.add(earthMesh);

    // 6. Clouds Sphere (Drifting Atmospheric Cloud Layer)
    const cloudsGeo = new THREE.SphereGeometry(earthRadius * 1.014, 64, 64);
    const cloudsMat = new THREE.MeshLambertMaterial({
      map: cloudsMap,
      transparent: true,
      opacity: 0.36,
      blending: THREE.AdditiveBlending,
    });
    const cloudsMesh = new THREE.Mesh(cloudsGeo, cloudsMat);
    earthGroup.add(cloudsMesh);

    // 7. Atmospheric Space Halo (Subtle glowing blue rim)
    const haloGeo = new THREE.SphereGeometry(earthRadius * 1.035, 48, 48);
    const haloMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.6);
          gl_FragColor = vec4(0.32, 0.68, 1.0, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    earthGroup.add(haloMesh);

    // 8. Cinematic Lighting
    // Directional Sunlight (Sun angle creating realistic mountain shadows)
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.3);
    sunLight.position.set(6, 3, 5);
    scene.add(sunLight);

    // Ambient space light for clear continent visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    // Blue rim light for space depth
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.85);
    rimLight.position.set(-6, -2, -3);
    scene.add(rimLight);

    // 9. Mission 3D Beacons & Pins
    const hitObjects: THREE.Object3D[] = [];
    const beaconMeshes: { missionId: string; type: MissionType; group: THREE.Group }[] = [];

    GAME_MISSIONS.forEach((m) => {
      const pos = latLngToVector3(m.lat, m.lng, earthRadius * 1.002);
      const norm = pos.clone().normalize();
      const colorHex = 
        m.type === 'science' ? 0xef4444 :
        m.type === 'comms' ? 0x22c55e :
        m.type === 'global' ? 0xf59e0b :
        m.type === 'culture' ? 0xf97316 : 0xa855f7;

      const bGroup = new THREE.Group();
      bGroup.position.copy(pos);
      bGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), norm);

      // Base ring on ground
      const baseRingGeo = new THREE.RingGeometry(0.025, 0.05, 16);
      const baseRingMat = new THREE.MeshBasicMaterial({ color: colorHex, side: THREE.DoubleSide });
      const baseRing = new THREE.Mesh(baseRingGeo, baseRingMat);
      baseRing.rotation.x = Math.PI / 2;
      bGroup.add(baseRing);

      // Glowing pin sphere
      const orbGeo = new THREE.SphereGeometry(0.045, 16, 16);
      const orbMat = new THREE.MeshBasicMaterial({ color: colorHex });
      const orb = new THREE.Mesh(orbGeo, orbMat);
      orb.position.y = 0.05;
      bGroup.add(orb);

      // Tactical vertical laser column
      const beamGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.35, 8);
      const beamMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending
      });
      const beam = new THREE.Mesh(beamGeo, beamMat);
      beam.position.y = 0.22;
      bGroup.add(beam);

      // Invisible Hit-Test Sphere for mouse click detection
      const hitGeo = new THREE.SphereGeometry(0.18, 8, 8);
      const hitMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitSphere = new THREE.Mesh(hitGeo, hitMat);
      hitSphere.position.y = 0.1;
      hitSphere.userData = { missionId: m.id };
      bGroup.add(hitSphere);
      hitObjects.push(hitSphere);

      earthGroup.add(bGroup);
      beaconMeshes.push({ missionId: m.id, type: m.type, group: bGroup });
    });

    // 10. Active Mission Target Reticle (Pulsing radar ring)
    const reticleGroup = new THREE.Group();
    const pulseRingGeo = new THREE.RingGeometry(0.06, 0.09, 32);
    const pulseRingMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide
    });
    const pulseRing = new THREE.Mesh(pulseRingGeo, pulseRingMat);
    pulseRing.rotation.x = Math.PI / 2;
    reticleGroup.add(pulseRing);
    earthGroup.add(reticleGroup);

    // Initial Globe Orientation (Focus on first mission)
    const initM = GAME_MISSIONS.find((m) => m.id === selectedMissionRef.current) || GAME_MISSIONS[0];
    const initVec = latLngToVector3(initM.lat, initM.lng, 1).normalize();
    const currentQuat = new THREE.Quaternion().setFromUnitVectors(initVec, new THREE.Vector3(0, 0, 1));
    const targetQuat = currentQuat.clone();
    earthGroup.quaternion.copy(currentQuat);

    // Interaction State (Drag to Rotate + Click to Select)
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let totalDrag = 0;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
      totalDrag = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      totalDrag += Math.abs(dx) + Math.abs(dy);
      prevX = e.clientX;
      prevY = e.clientY;

      // Rotate globe around camera view axes smoothly
      const rotY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), dx * 0.005);
      const rotX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), dy * 0.005);
      earthGroup.quaternion.premultiply(rotY);
      earthGroup.quaternion.premultiply(rotX);
      targetQuat.copy(earthGroup.quaternion);
    };

    const onPointerUp = (e: PointerEvent) => {
      if (isDragging && totalDrag < 8) {
        // Raycast to detect click on any beacon pin
        const rect = mount.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(hitObjects, false);
        if (intersects.length > 0) {
          const hitId = intersects[0].object.userData.missionId;
          if (hitId) {
            handleSelectMission(hitId);
          }
        }
      }
      isDragging = false;
    };

    mount.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('resize', updateLayout);

    // 11. Animation Loop
    let lastMissionId = selectedMissionRef.current;
    const render = () => {
      // If active mission changed, smoothly slerp to target coordinates
      if (selectedMissionRef.current !== lastMissionId) {
        lastMissionId = selectedMissionRef.current;
        const curM = GAME_MISSIONS.find((m) => m.id === selectedMissionRef.current) || GAME_MISSIONS[0];
        const v = latLngToVector3(curM.lat, curM.lng, 1).normalize();
        targetQuat.setFromUnitVectors(v, new THREE.Vector3(0, 0, 1));
      }

      if (!isDragging) {
        earthGroup.quaternion.slerp(targetQuat, 0.055);
      }

      // Atmospheric cloud drift
      cloudsMesh.rotation.y += 0.0003;

      // Update target reticle position and pulse animation
      const activeM = GAME_MISSIONS.find((m) => m.id === selectedMissionRef.current) || GAME_MISSIONS[0];
      const activePos = latLngToVector3(activeM.lat, activeM.lng, earthRadius * 1.004);
      reticleGroup.position.copy(activePos);
      reticleGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), activePos.clone().normalize());

      const pulse = (Date.now() % 1400) / 1400;
      pulseRing.scale.setScalar(1 + pulse * 2.2);
      pulseRingMat.opacity = 1 - pulse;

      // Filter highlighting
      const filter = activeFilterRef.current;
      beaconMeshes.forEach((bm) => {
        const matchesFilter = filter === 'all' || bm.type === filter;
        bm.group.visible = matchesFilter;
      });

      renderer.render(scene, camera);
      animId = requestAnimationFrame(render);
    };

    render();

    // 12. Cleanup
    return () => {
      cancelAnimationFrame(animId);
      mount.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', updateLayout);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

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
        style={{ backgroundImage: `url('${resolveAsset('/sky_background.jpg')}')` }}
      />
      {/* Subtle Dark Vignette & Atmospheric Fog */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090d13] via-transparent to-[#090d13]/70 pointer-events-none z-0" />

      {/* 2. THE 3D PLANET (SIEMPRE ATRÁS, GIRA Y SE ENFOCA EN CADA EVENTO - DRAG TO ROTATE) */}
      <div 
        ref={mountRef}
        className="absolute inset-0 z-10 overflow-hidden cursor-grab active:cursor-grabbing"
      />

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
            {currentLang === 'es' ? `TODAS (${GAME_MISSIONS.length})` : `ALL (${GAME_MISSIONS.length})`}
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

          {/* Naranja: Arte & Cultura */}
          <button
            onClick={() => setActiveFilter('culture')}
            className={`px-3 py-1 rounded-lg font-mono text-xs transition-all flex items-center space-x-1.5 ${
              activeFilter === 'culture'
                ? 'bg-orange-600 text-white font-bold shadow'
                : 'text-neutral-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span>{currentLang === 'es' ? 'ARTE & CULTURA (NARANJA)' : 'ART & CULTURE (ORANGE)'}</span>
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
            <span>{currentLang === 'es' ? 'I+D (MORADO)' : 'R&D (PURPLE)'}</span>
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
                  currentMission.type === 'global' ? 'bg-amber-500' :
                  currentMission.type === 'culture' ? 'bg-orange-500' : 'bg-purple-500'
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
                          {currentLang === 'es' ? 'LÁMINA' : 'PLATE'} {pIdx + 1}
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
                  <span>{currentLang === 'es' ? currentMission.roleEs : currentMission.roleEn}</span>
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
              {currentLang === 'es' ? 'SELECCIONA O ARRASTRA EL PLANETA // EL GLOBO GIRA A CADA MISIÓN' : 'SELECT OR DRAG PLANET // GLOBE ROTATES TO EACH TARGET'}
            </span>
          </div>
          <div className="flex items-center space-x-3 text-neutral-300">
            <span>{currentLang === 'es' ? '🔴 CIENCIA' : '🔴 SCIENCE'}</span>
            <span>{currentLang === 'es' ? '🟢 COMUNICACIONES' : '🟢 COMMS'}</span>
            <span>{currentLang === 'es' ? '🟡 CUMBRES' : '🟡 SUMMITS'}</span>
            <span>{currentLang === 'es' ? '🟠 CULTURA' : '🟠 CULTURE'}</span>
            <span>{currentLang === 'es' ? '🟣 I+D' : '🟣 R&D'}</span>
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
            } else if (m.type === 'culture') {
              borderTheme = 'border-orange-500 text-orange-400';
              dotColor = 'bg-orange-500';
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
