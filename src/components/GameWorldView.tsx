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
  Sparkles,
  FileText,
  Pause,
  Download
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';
import { ProjectsModal } from './ProjectsModal';

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
  mediaType?: 'video' | 'plate' | 'audio' | 'woodcut' | 'press' | 'cv' | 'pending';
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
    mediaType: 'pending',
    url: 'https://www.uni-kiel.de',
    code: 'OPS-SCI-01',
    source: 'Christian Albrechts University (CAU Kiel)',
    impactEs: 'Investigación en balance hídrico y dinámica de suelos integrando sistemas acuáticos y terrestres, y modelación del impacto de incendios forestales en ecosistemas de cuencas (según CV).',
    impactEn: 'Research on water balance and soil dynamics integrating aquatic and terrestrial systems, and modeling forest fire impacts on watershed ecosystems (from CV).',
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
    mediaType: 'pending',
    url: 'https://amu.edu.pl',
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
    mediaType: 'pending',
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
    mediaType: 'pending',
    url: 'https://www.wsl.ch',
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
    mediaType: 'pending',
    url: 'https://doughnuteconomics.org',
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
    mediaType: 'pending',
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
    availablePages: [
      { titleEs: 'Lámina 1: Perfil Geofísica FCFM U. de Chile', titleEn: 'Plate 1: FCFM Geophysics Profile', pageSrc: '/portfolio_pages/page_1.png', pageSrcEn: '/portfolio_pages_en/page_1.png' },
      { titleEs: 'Lámina 4: Asesoría Convención Constitucional', titleEn: 'Plate 4: Constitutional Convention Advisory', pageSrc: '/portfolio_pages/page_4.png', pageSrcEn: '/portfolio_pages_en/page_4.png' }
    ],
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
    mediaType: 'pending',
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

  // 18. ARTE & CULTURA: Rap Beauchef & Dueñas de la Voz - Arena Universitaria & Circuito Internacional
  {
    id: 'rap-beauchef',
    type: 'culture',
    titleEs: 'Rap Beauchef & Dueñas de la Voz: Arena Universitaria y Circuito Internacional',
    titleEn: 'Rap Beauchef & Dueñas de la Voz: University Arena & International Circuit',
    subtitleEs: 'Encuentro Femenino "Dueñas de la Voz" (Queena - Final) // Anfiteatro FCFM & Red Internacional',
    subtitleEn: 'Women\'s Tournament "Dueñas de la Voz" (Queena - Final) // FCFM Amphitheater & Global Cyphers',
    country: 'Chile',
    city: 'Santiago & Red Internacional (Japón, Perú, Argentina, México)',
    flag: '🇨🇱',
    lat: -33.457,
    lng: -70.663,
    date: '2019-2021',
    roleEs: 'Organizador General & Director Creativo',
    roleEn: 'Head Organizer & Creative Director',
    mediaType: 'video',
    embedUrl: 'https://www.youtube.com/embed/NcDejj3NKXo',
    url: 'https://www.youtube.com/watch?v=NcDejj3NKXo',
    src: '/youtube_covers/NcDejj3NKXo.jpg',
    code: 'OPS-CUL-02',
    source: '@rapbeauchef // FCFM U. de Chile & Dueñas de la Voz',
    impactEs: 'Dirección y producción general de Rap Beauchef en el anfiteatro de la FCFM (U. de Chile) y certamen femenino "Dueñas de la Voz" (registro audiovisual oficial de la Gran Final por Queena), articulando competencias en vivo, conciertos y proyección internacional online con colaboraciones en Japón, Perú, Argentina y México.',
    impactEn: 'General direction and production of Rap Beauchef at the FCFM amphitheater (U. of Chile) and the landmark "Dueñas de la Voz" women\'s tournament (official audio/video record of Queena\'s Grand Final), bridging live arenas with international online cyphers linking Japan, Peru, Argentina, and Mexico.',
    methodologyEs: [
      'Registro sonoro y audiovisual oficial de la Final de "Dueñas de la Voz" (Queena)',
      'Organización y producción técnica de batallas de freestyle en arena universitaria (FCFM)',
      'Certamen "Dueñas de la Voz": visibilización del liderazgo lírico y spoken word femenino',
      'Red internacional de freestyle online con emcees y colectivos de Japón, Perú, Argentina y México'
    ],
    methodologyEn: [
      'Official live audio and video documentation of the "Dueñas de la Voz" Grand Final (Queena)',
      'Self-managed technical and stage production of university freestyle tournaments at FCFM',
      '"Dueñas de la Voz": empowering women emcees, lyricists, and vocal artists',
      'International online tournament circuit connecting artists from Japan, Peru, Argentina, and Mexico'
    ],
    tags: ['Rap Beauchef', 'Dueñas de la Voz', 'Queena', 'FCFM', 'Santiago', 'Hip-Hop', 'Cultura']
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
    mediaType: 'pending',
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
    mediaType: 'pending',
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
  const [isTourPlaying, setIsTourPlaying] = useState<boolean>(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState<boolean>(false);

  // Filtered list for mission rail
  const filteredMissions = GAME_MISSIONS.filter((m) => {
    if (activeFilter === 'all') return true;
    return m.type === activeFilter;
  });

  // Tour Auto-Play (Advances every 5.5s to next country)
  useEffect(() => {
    if (!isTourPlaying) return;
    const interval = setInterval(() => {
      setSelectedMissionId((prevId) => {
        const curIdx = filteredMissions.findIndex((m) => m.id === prevId);
        const nextIdx = (curIdx + 1) % filteredMissions.length;
        return filteredMissions[nextIdx].id;
      });
    }, 5500);
    return () => clearInterval(interval);
  }, [isTourPlaying, filteredMissions]);

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

      // 1. Base Grommet / Pinhole shadow on surface
      const holeGeo = new THREE.RingGeometry(0.008, 0.028, 24);
      const holeMat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
      const hole = new THREE.Mesh(holeGeo, holeMat);
      hole.rotation.x = Math.PI / 2;
      bGroup.add(hole);

      // 2. Slender Metallic Steel Needle / Mast
      const needleGeo = new THREE.CylinderGeometry(0.0035, 0.0035, 0.22, 8);
      const needleMat = new THREE.MeshBasicMaterial({ color: 0xe2e8f0 });
      const needle = new THREE.Mesh(needleGeo, needleMat);
      needle.position.y = 0.11;
      bGroup.add(needle);

      // 3. Round Ball Pinhead at top of needle (colored sphere)
      const capGeo = new THREE.SphereGeometry(0.018, 16, 16);
      const capMat = new THREE.MeshBasicMaterial({ color: colorHex });
      const cap = new THREE.Mesh(capGeo, capMat);
      cap.position.y = 0.225;
      bGroup.add(cap);

      // 4. Map Pushpin Flag Pennant (Banderita de tablero con bandera y ciudad)
      const flagCanvas = document.createElement('canvas');
      flagCanvas.width = 144;
      flagCanvas.height = 84;
      const fCtx = flagCanvas.getContext('2d')!;
      fCtx.fillStyle = '#' + colorHex.toString(16).padStart(6, '0');
      fCtx.fillRect(0, 0, 144, 84);
      fCtx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      fCtx.fillRect(0, 0, 144, 42);
      fCtx.lineWidth = 6;
      fCtx.strokeStyle = '#000000';
      fCtx.strokeRect(3, 3, 138, 78);
      fCtx.font = '34px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      fCtx.textAlign = 'center';
      fCtx.textBaseline = 'middle';
      fCtx.fillText(m.flag, 42, 42);
      fCtx.fillStyle = '#ffffff';
      fCtx.font = 'bold 22px monospace';
      fCtx.fillText(m.city.slice(0, 4).toUpperCase(), 102, 43);

      const flagTex = new THREE.CanvasTexture(flagCanvas);
      const flagGeo = new THREE.PlaneGeometry(0.15, 0.088);
      const flagMat = new THREE.MeshBasicMaterial({ map: flagTex, side: THREE.DoubleSide });
      const flagMesh = new THREE.Mesh(flagGeo, flagMat);
      flagMesh.position.set(0.075, 0.165, 0);
      bGroup.add(flagMesh);

      // Invisible Hit-Test Sphere for easy mouse / touch click detection
      const hitGeo = new THREE.SphereGeometry(0.2, 8, 8);
      const hitMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitSphere = new THREE.Mesh(hitGeo, hitMat);
      hitSphere.position.y = 0.14;
      hitSphere.userData = { missionId: m.id };
      bGroup.add(hitSphere);
      hitObjects.push(hitSphere);

      earthGroup.add(bGroup);
      beaconMeshes.push({ missionId: m.id, type: m.type, group: bGroup });
    });

    // 10. Active Mission Target Reticle (Graphic Action Burst in Comic Yellow & Black)
    const reticleGroup = new THREE.Group();
    const pulseRingGeo = new THREE.RingGeometry(0.045, 0.075, 32);
    const pulseRingMat = new THREE.MeshBasicMaterial({
      color: 0xfacc15, // Comic Yellow #facc15
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide
    });
    const pulseRing = new THREE.Mesh(pulseRingGeo, pulseRingMat);
    pulseRing.rotation.x = Math.PI / 2;
    reticleGroup.add(pulseRing);

    const outerBlackRingGeo = new THREE.RingGeometry(0.078, 0.094, 32);
    const outerBlackRingMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      side: THREE.DoubleSide
    });
    const outerBlackRing = new THREE.Mesh(outerBlackRingGeo, outerBlackRingMat);
    outerBlackRing.rotation.x = Math.PI / 2;
    reticleGroup.add(outerBlackRing);

    earthGroup.add(reticleGroup);

    // 10.5 Flight Trajectory Arcs & Traveling Photons (Suggestion A)
    const flightGroup = new THREE.Group();
    const flightArcs: { curve: THREE.QuadraticBezierCurve3; photon: THREE.Mesh; speed: number; offset: number }[] = [];

    for (let i = 0; i < GAME_MISSIONS.length; i++) {
      const fromM = GAME_MISSIONS[i];
      const toM = GAME_MISSIONS[(i + 1) % GAME_MISSIONS.length];
      const posA = latLngToVector3(fromM.lat, fromM.lng, earthRadius * 1.002);
      const posB = latLngToVector3(toM.lat, toM.lng, earthRadius * 1.002);

      const mid = new THREE.Vector3().addVectors(posA, posB).multiplyScalar(0.5);
      const dist = posA.distanceTo(posB);
      // Elevate midpoint above the sphere surface proportionally to distance
      mid.normalize().multiplyScalar(earthRadius + Math.max(0.18, dist * 0.22));

      const curve = new THREE.QuadraticBezierCurve3(posA, mid, posB);
      const points = curve.getPoints(40);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(points);
      const arcMat = new THREE.LineBasicMaterial({
        color: 0xfacc15, // Comic Yellow #facc15
        transparent: true,
        opacity: 0.45,
      });
      const arcLine = new THREE.Line(arcGeo, arcMat);
      flightGroup.add(arcLine);

      // Glowing traveling photon along the flight trajectory
      const photonGeo = new THREE.SphereGeometry(0.022, 8, 8);
      const photonMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const photon = new THREE.Mesh(photonGeo, photonMat);
      flightGroup.add(photon);

      flightArcs.push({ curve, photon, speed: 0.12, offset: i / GAME_MISSIONS.length });
    }
    earthGroup.add(flightGroup);

    // Initial Globe Orientation (Focus on first mission)
    const initM = GAME_MISSIONS.find((m) => m.id === selectedMissionRef.current) || GAME_MISSIONS[0];
    const initVec = latLngToVector3(initM.lat, initM.lng, 1).normalize();
    const currentQuat = new THREE.Quaternion().setFromUnitVectors(initVec, new THREE.Vector3(0, 0, 1));
    const targetQuat = currentQuat.clone();
    earthGroup.quaternion.copy(currentQuat);

    // Interaction State (Drag to Rotate + Inertia Momentum + Click to Select)
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let totalDrag = 0;
    let velX = 0;
    let velY = 0;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
      totalDrag = 0;
      velX = 0;
      velY = 0;
      try {
        mount.setPointerCapture(e.pointerId);
      } catch (_) {}
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      totalDrag += Math.abs(dx) + Math.abs(dy);
      prevX = e.clientX;
      prevY = e.clientY;

      velX = dx * 0.005;
      velY = dy * 0.005;

      // Rotate globe around camera view axes smoothly
      const rotY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), dx * 0.005);
      const rotX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), dy * 0.005);
      earthGroup.quaternion.premultiply(rotY);
      earthGroup.quaternion.premultiply(rotX);
      targetQuat.copy(earthGroup.quaternion);
    };

    const onPointerUp = (e: PointerEvent) => {
      try {
        mount.releasePointerCapture(e.pointerId);
      } catch (_) {}

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
        velX = 0;
        velY = 0;
      }

      if (isDragging) {
        // Direct tracking
      } else if (Math.abs(velX) > 0.0001 || Math.abs(velY) > 0.0001) {
        // Inertia rotation with natural friction
        const rotY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), velX);
        const rotX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), velY);
        earthGroup.quaternion.premultiply(rotY);
        earthGroup.quaternion.premultiply(rotX);
        targetQuat.copy(earthGroup.quaternion);
        velX *= 0.92;
        velY *= 0.92;
      } else {
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

      // Update flight trajectory traveling photons
      const fTime = Date.now() * 0.001;
      flightArcs.forEach(({ curve, photon, speed, offset }) => {
        const t = (fTime * speed + offset) % 1;
        const pt = curve.getPoint(t);
        photon.position.copy(pt);
      });

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


  return (
    <div className="relative w-full h-screen overflow-hidden select-none bg-[#090b0e] text-white font-sans flex flex-col justify-between">
      
      {/* 1. CINEMATIC BACKGROUND WITH PUNK HALFTONE OVERLAY */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-70"
        style={{ backgroundImage: `url('${resolveAsset('/sky_background.jpg')}')` }}
      />
      
      {/* Halftone Dot Screen Tone (Signature Comic Texture) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px'
        }}
      />

      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#090b0e]/60 to-[#090b0e]/95 pointer-events-none z-0" />

      {/* Yellow/Black Industrial Caution Tape Top Bar */}
      <div 
        className="absolute top-0 left-0 right-0 h-2 opacity-85 z-40 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #facc15, #facc15 12px, #000 12px, #000 24px)'
        }}
      />

      {/* 2. THE 3D PLANET (EL PLANETA - DRAG TO ROTATE & CLICK STICKERS) */}
      <div 
        ref={mountRef}
        className="absolute inset-0 z-10 overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ touchAction: 'none' }}
      />

      {/* ============================================================== */}
      {/* 3. COMIC PUNK HEADER (ESTILO [REDACTED] // KRAFTON)            */}
      {/* ============================================================== */}
      <header className="relative z-30 w-full px-4 sm:px-8 pt-3.5 pb-2 flex flex-wrap items-center justify-between gap-2.5 bg-black/90 border-b-2 border-black shadow-[0_4px_0px_#000000]">
        
        {/* Left: Identity Sticker Box & Back Button */}
        <div className="flex items-center space-x-2.5 sm:space-x-3">
          {onBackToMenu && (
            <button
              onClick={onBackToMenu}
              className="px-2.5 sm:px-3 py-1 bg-black hover:bg-[#facc15] text-[#facc15] hover:text-black border-2 border-[#facc15] hover:border-black font-mono text-xs font-black tracking-wider uppercase transition shadow-[2px_2px_0px_#ffffff] flex items-center space-x-1 active:scale-95"
              title="Volver al menú principal"
            >
              <span>←</span>
              <span>{currentLang === 'es' ? 'MENÚ' : 'MENU'}</span>
            </button>
          )}

          {/* Daniel Santander Comic Portrait Sticker */}
          <div className="relative group shrink-0 hidden sm:block">
            <div className="w-10 h-10 rounded-lg bg-black p-0.5 border-2 border-white shadow-[3px_3px_0px_#facc15] -rotate-2 overflow-hidden">
              <img 
                src={resolveAsset('/profile.jpg')} 
                alt="Daniel Santander" 
                className="w-full h-full object-cover object-top filter contrast-110"
              />
            </div>
          </div>

          {/* Stencil Title Tape */}
          <div className="flex flex-col">
            <div className="bg-white text-black px-2.5 sm:px-3 py-0.5 border-2 border-black shadow-[2px_2px_0px_#facc15] -rotate-1 inline-block self-start">
              <h1 className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase leading-none">
                [DANIEL SANTANDER // EL PLANETA]
              </h1>
            </div>
            <div className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase mt-0.5">
              SECTOR: {currentMission.city.toUpperCase()} ({Math.abs(currentMission.lat).toFixed(1)}°{currentMission.lat >= 0 ? 'N' : 'S'} {Math.abs(currentMission.lng).toFixed(1)}°{currentMission.lng >= 0 ? 'E' : 'W'})
            </div>
          </div>
        </div>

        {/* Center: Category Filter Slanted Tape Strips */}
        <div className="flex items-center gap-1 sm:gap-1.5 p-1 bg-black/60 border border-white/20 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-2.5 py-0.5 font-mono font-black text-[10px] sm:text-[11px] uppercase transition-all border-2 border-black -rotate-1 ${
              activeFilter === 'all'
                ? 'bg-[#facc15] text-black shadow-[2px_2px_0px_#000]'
                : 'bg-white/10 text-white hover:bg-white hover:text-black'
            }`}
          >
            {currentLang === 'es' ? `TODAS (${GAME_MISSIONS.length})` : `ALL (${GAME_MISSIONS.length})`}
          </button>

          <button
            onClick={() => setActiveFilter('science')}
            className={`px-2.5 py-0.5 font-mono font-black text-[10px] sm:text-[11px] uppercase transition-all border-2 border-black rotate-0.5 ${
              activeFilter === 'science'
                ? 'bg-red-600 text-white shadow-[2px_2px_0px_#000]'
                : 'bg-white/10 text-neutral-300 hover:bg-red-500 hover:text-white'
            }`}
          >
            {currentLang === 'es' ? '[CIENCIA]' : '[SCIENCE]'}
          </button>

          <button
            onClick={() => setActiveFilter('comms')}
            className={`px-2.5 py-0.5 font-mono font-black text-[10px] sm:text-[11px] uppercase transition-all border-2 border-black -rotate-0.5 ${
              activeFilter === 'comms'
                ? 'bg-emerald-600 text-white shadow-[2px_2px_0px_#000]'
                : 'bg-white/10 text-neutral-300 hover:bg-emerald-500 hover:text-white'
            }`}
          >
            {currentLang === 'es' ? '[MEDIOS]' : '[COMMS]'}
          </button>

          <button
            onClick={() => setActiveFilter('global')}
            className={`px-2.5 py-0.5 font-mono font-black text-[10px] sm:text-[11px] uppercase transition-all border-2 border-black rotate-1 ${
              activeFilter === 'global'
                ? 'bg-[#facc15] text-black shadow-[2px_2px_0px_#000]'
                : 'bg-white/10 text-neutral-300 hover:bg-[#facc15] hover:text-black'
            }`}
          >
            {currentLang === 'es' ? '[CUMBRES]' : '[SUMMITS]'}
          </button>

          <button
            onClick={() => setActiveFilter('culture')}
            className={`px-2.5 py-0.5 font-mono font-black text-[10px] sm:text-[11px] uppercase transition-all border-2 border-black -rotate-1 ${
              activeFilter === 'culture'
                ? 'bg-orange-600 text-white shadow-[2px_2px_0px_#000]'
                : 'bg-white/10 text-neutral-300 hover:bg-orange-500 hover:text-white'
            }`}
          >
            {currentLang === 'es' ? '[CULTURA]' : '[CULTURE]'}
          </button>

          <button
            onClick={() => setActiveFilter('rd')}
            className={`px-2.5 py-0.5 font-mono font-black text-[10px] sm:text-[11px] uppercase transition-all border-2 border-black rotate-0.5 ${
              activeFilter === 'rd'
                ? 'bg-purple-600 text-white shadow-[2px_2px_0px_#000]'
                : 'bg-white/10 text-neutral-300 hover:bg-purple-500 hover:text-white'
            }`}
          >
            {currentLang === 'es' ? '[I+D]' : '[R&D]'}
          </button>
        </div>

        {/* Right: Actions (Tour, Projects, CV, Lang, Dossier) */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          {/* Guided Tour Auto-Play Toggle (Suggestion B) */}
          <button
            onClick={() => setIsTourPlaying(!isTourPlaying)}
            className={`px-2.5 py-1 font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all flex items-center space-x-1.5 ${
              isTourPlaying 
                ? 'bg-amber-400 text-black ring-2 ring-amber-300 animate-pulse' 
                : 'bg-black/80 hover:bg-black text-amber-300 border-amber-400/60'
            }`}
            title={currentLang === 'es' ? 'Activar/desactivar recorrido automático documental por el mundo' : 'Toggle auto-pilot global documentary tour'}
          >
            {isTourPlaying ? <Pause className="w-3.5 h-3.5 text-black" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
            <span className="hidden md:inline">
              {isTourPlaying 
                ? (currentLang === 'es' ? 'PAUSAR TOUR' : 'PAUSE TOUR') 
                : (currentLang === 'es' ? 'TOUR GUIADO' : 'AUTO TOUR')}
            </span>
          </button>

          {/* Caballero Jaguar Grounded Projects Hub (Misiones Secundarias) */}
          <button
            onClick={() => setIsProjectsModalOpen(true)}
            className="px-2.5 py-1 bg-red-600 hover:bg-red-500 text-white font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all flex items-center space-x-1 -rotate-1"
            title="Ver Misiones Secundarias y Proyectos (Caballero Jaguar)"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span className="hidden sm:inline">{currentLang === 'es' ? 'PROYECTOS' : 'PROJECTS'}</span>
            <span className="text-[10px] bg-black text-yellow-300 px-1 font-mono rounded">8</span>
          </button>

          {/* One-Click CV Loot Download (Suggestion E) */}
          <a
            href={resolveAsset('/Daniel_Santander_CV.pdf')}
            download="Daniel_Santander_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 bg-[#22c55e] hover:bg-[#16a34a] text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all flex items-center space-x-1 rotate-1"
            title="Descargar Currículum Vitae oficial (PDF)"
          >
            <Download className="w-3.5 h-3.5 text-black" />
            <span className="hidden sm:inline">{currentLang === 'es' ? 'CV (PDF)' : 'CV (PDF)'}</span>
          </a>

          {/* Language Switcher */}
          <button
            onClick={onToggleLanguage}
            className="px-2 py-1 bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all flex items-center space-x-1"
            title="Cambiar idioma // Switch Language"
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? 'ES' : 'EN'}</span>
          </button>

          {onExitToDossier && (
            <button
              onClick={onExitToDossier}
              className="px-2 py-1 bg-[#ede5d6] hover:bg-white text-black font-mono font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all flex items-center space-x-1"
              title="Volver a versión documento"
            >
              <FileText className="w-3.5 h-3.5 text-[#7f3419]" />
              <span className="hidden lg:inline">{currentLang === 'es' ? 'DOSSIER' : 'DOSSIER'}</span>
            </button>
          )}
        </div>
      </header>

      {/* ============================================================== */}
      {/* 4. MAIN INTERACTIVE HUD STAGE                                  */}
      {/* ============================================================== */}
      <main className="relative z-20 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-start overflow-hidden pointer-events-none">
        
        {/* Floatable Tactical Dossier Card (Left / Center Stage) */}
        {isDossierOpen && (
          <div className="w-full max-w-2xl lg:max-w-3xl max-h-[78vh] bg-[#0c0f14] border-3 border-black rounded-xl shadow-[8px_8px_0px_#000000] flex flex-col overflow-hidden animate-fadeIn text-white pointer-events-auto">
            
            {/* Comic Panel Header */}
            <div className="px-4 py-2.5 bg-black border-b-2 border-black flex items-center justify-between font-mono text-xs shrink-0">
              <div className="flex items-center space-x-2.5">
                {/* Yellow Slanted Stencil Tape */}
                <div className="bg-[#facc15] text-black font-mono font-black text-xs px-2.5 py-0.5 border-2 border-black shadow-[2px_2px_0px_#000] -rotate-1">
                  {currentMission.code} // {currentMission.city.toUpperCase()}
                </div>
                
                {/* Country Badge */}
                <div className="bg-white/10 text-neutral-200 font-mono text-[10px] px-2 py-0.5 border border-white/20">
                  {currentMission.flag} {currentMission.country.toUpperCase()}
                </div>

                {/* Verification Stamp */}
                {currentMission.src || currentMission.embedUrl || (currentMission.availablePages && currentMission.availablePages.length > 0) ? (
                  <span className="hidden sm:inline bg-emerald-600 text-white font-mono font-black text-[9px] px-1.5 py-0.5 border border-white uppercase tracking-wider rotate-1">
                    {currentLang === 'es' ? 'REGISTRO REAL' : 'VERIFIED'}
                  </span>
                ) : (
                  <span className="hidden sm:inline bg-red-600 text-white font-mono font-black text-[9px] px-1.5 py-0.5 border border-white uppercase tracking-wider -rotate-1">
                    {currentLang === 'es' ? 'REGISTRO PENDIENTE' : 'PENDING'}
                  </span>
                )}
              </div>

              {/* Prev / Next & Close */}
              <div className="flex items-center space-x-1.5">
                <button
                  onClick={handlePrev}
                  className="p-1 bg-black hover:bg-[#facc15] text-white hover:text-black border border-white/40 hover:border-black transition font-mono font-black shadow-[1px_1px_0px_#000]"
                  title="Misión anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1 bg-black hover:bg-[#facc15] text-white hover:text-black border border-white/40 hover:border-black transition font-mono font-black shadow-[1px_1px_0px_#000]"
                  title="Misión siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsDossierOpen(false)}
                  className="p-1 bg-black hover:bg-red-600 text-white border border-white/40 hover:border-black transition ml-1 font-mono font-black shadow-[1px_1px_0px_#000]"
                  title="Minimizar panel para ver el planeta"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mission Body Scrollable */}
            <div className="overflow-y-auto p-5 sm:p-6 space-y-4 no-scrollbar">
              
              {/* Media Viewport Frame with Comic Ink Border */}
              <div className="relative w-full rounded-lg bg-black border-3 border-black shadow-[4px_4px_0px_#000000] overflow-hidden flex items-center justify-center min-h-[240px] max-h-[380px]">
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
                ) : (
                  /* Slot limpio y explícito para detectar material faltante */
                  <div className="w-full h-full min-h-[220px] p-6 flex flex-col items-center justify-center text-center border-2 border-dashed border-amber-500/35 rounded-xl bg-black/50">
                    <div className="w-11 h-11 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-2.5">
                      <Layers className="w-5 h-5 animate-pulse" />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-widest text-amber-300 uppercase">
                      {currentLang === 'es' ? '[ REGISTRO VISUAL PENDIENTE ]' : '[ PENDING VISUAL ARCHIVE ]'}
                    </span>
                    <p className="text-[11px] font-mono text-neutral-300 max-w-md mt-1.5 leading-relaxed">
                      {currentLang === 'es'
                        ? 'Hito verificado en CV sin archivo gráfico asignado aún. Espacio reservado para fotografía, certificado o enlace oficial.'
                        : 'Milestone verified in CV without assigned graphic file yet. Reserved slot for photograph, certificate, or official link.'}
                    </p>
                    <div className="mt-3 px-3 py-1 rounded bg-white/5 border border-white/10 font-mono text-[9px] text-neutral-400">
                      ID: <span className="text-white font-bold">{currentMission.code}</span> • {currentMission.city}, {currentMission.country}
                    </div>
                    {currentMission.url && (
                      <a
                        href={currentMission.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2.5 inline-flex items-center space-x-1.5 text-xs text-amber-400 hover:text-white underline font-mono"
                      >
                        <span>{currentLang === 'es' ? 'Ver sitio web oficial' : 'Visit official website'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Title & Metadata */}
              <div>
                <div className="flex items-center space-x-2 font-mono text-[10px] text-amber-400 mb-1">
                  <span className="bg-[#facc15] text-black font-mono font-black px-1.5 py-0.5 border border-black shadow-[1px_1px_0px_#000] uppercase -rotate-0.5">
                    {currentLang === 'es' ? currentMission.roleEs : currentMission.roleEn}
                  </span>
                  <span className="text-neutral-400 font-mono font-bold">• {currentMission.date}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-mono font-black text-white uppercase tracking-tight leading-snug">
                  {currentLang === 'es' ? currentMission.titleEs : currentMission.titleEn}
                </h2>

                <p className="text-xs font-mono text-neutral-300 mt-1">
                  {currentLang === 'es' ? currentMission.subtitleEs : currentMission.subtitleEn}
                </p>
              </div>

              {/* Impact Synopsis Box */}
              <div className="p-3.5 rounded-lg bg-black/70 border-2 border-dashed border-white/30 space-y-1.5">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#facc15] font-black">
                  {currentLang === 'es' ? '[ SINOPSIS METODOLÓGICA & IMPACTO ]' : '[ METHODOLOGY & IMPACT SYNOPSIS ]'}
                </div>
                <p className="text-xs font-serif text-neutral-200 leading-relaxed">
                  {currentLang === 'es' ? currentMission.impactEs : currentMission.impactEn}
                </p>
              </div>

              {/* Methodology Bullets */}
              <ul className="space-y-1.5 text-xs font-mono text-neutral-300">
                {(currentLang === 'es' ? currentMission.methodologyEs : currentMission.methodologyEn).map((m, mIdx) => (
                  <li key={mIdx} className="flex items-start space-x-2 bg-black/50 p-2 border border-white/10">
                    <span className="bg-[#facc15] text-black font-mono font-black text-[9px] px-1 border border-black shrink-0">
                      0{mIdx + 1}
                    </span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>

              {/* Links & Tags & Comic Barcode */}
              <div className="pt-2 border-t-2 border-black flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {currentMission.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 font-mono text-[10px] bg-white/10 text-neutral-300 border border-white/15">
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  {currentMission.url && (
                    <a
                      href={currentMission.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs border-2 border-black shadow-[2px_2px_0px_#000] flex items-center space-x-1 transition active:scale-95"
                    >
                      <span>{currentLang === 'es' ? 'ABRIR FUENTE' : 'OPEN SOURCE'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {/* Barcode Stamp [REDACTED] 2294 */}
                  <div className="hidden sm:flex flex-col items-end opacity-70">
                    <div className="flex space-x-0.5 h-4 items-center">
                      <div className="w-0.5 h-full bg-white" />
                      <div className="w-1 h-full bg-white" />
                      <div className="w-0.5 h-full bg-white" />
                      <div className="w-1.5 h-full bg-white" />
                      <div className="w-0.5 h-full bg-white" />
                      <div className="w-1 h-full bg-white" />
                      <div className="w-0.5 h-full bg-white" />
                      <div className="w-2 h-full bg-white" />
                    </div>
                    <span className="text-[7px] font-mono tracking-widest text-neutral-400">DS-2294</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Restore Button if Window is Closed */}
        {!isDossierOpen && (
          <button
            onClick={() => setIsDossierOpen(true)}
            className="pointer-events-auto px-4 py-2 bg-[#facc15] hover:bg-white text-black font-mono text-xs font-black uppercase border-3 border-black shadow-[4px_4px_0px_#000000] -rotate-1 transition flex items-center space-x-2 active:scale-95"
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
      {/* 5. GTA MISSION PLANNING BOARD // PINNED DIRECTLY ON DARK STAGE */}
      {/* ============================================================== */}
      <footer className="relative z-30 w-full px-3 sm:px-6 pt-2 pb-3 bg-gradient-to-t from-black via-black/85 to-transparent border-t border-white/10 select-none flex flex-col space-y-2">
        
        {/* Top Header: Stencil Banner + Counter + Legend (Centered & Aligned) */}
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-1 font-mono text-xs">
          
          {/* Left: Punk Stencil Header */}
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono font-black text-xs sm:text-sm tracking-tight text-[#facc15] uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
              {currentLang === 'es' ? '★ RUTA DE CAMPO & EXPEDIENTES DISPONIBLES ★' : '★ AVAILABLE FIELD CONTRACTS & DOSSIERS ★'}
            </span>
          </div>

          {/* Right: Heist Completed Counter (GTA Style) & Category Pushpin Legend */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="hidden lg:flex items-center space-x-2.5 text-[10px] font-mono font-bold text-neutral-300">
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 border border-white/40 shadow-sm" />
                <span>CIENCIA</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 border border-white/40 shadow-sm" />
                <span>MEDIOS</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 border border-white/40 shadow-sm" />
                <span>CUMBRES</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 border border-white/40 shadow-sm" />
                <span>ARTE</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600 border border-white/40 shadow-sm" />
                <span>I+D</span>
              </span>
            </div>

            {/* Total Contracts Done Box (Like "COMPLETED: 773" in GTA Image 1) */}
            <div className="flex items-center space-x-1.5 bg-black/90 text-white px-2.5 py-0.5 border border-white/30 shadow-[2px_2px_0px_#facc15]">
              <span className="font-mono font-bold text-[10px] text-neutral-300 uppercase">
                {currentLang === 'es' ? 'COMPLETADAS:' : 'COMPLETED:'}
              </span>
              <span className="font-mono font-black text-xs text-[#facc15]">
                {filteredMissions.length}
              </span>
            </div>
          </div>
        </div>

        {/* Polaroids & Contracts Horizontal Prep Rail (Always Centered via mx-auto flex wrapper) */}
        <div className="w-full overflow-x-auto no-scrollbar py-1 px-1">
          <div className="flex items-center gap-2.5 sm:gap-3.5 mx-auto w-max justify-center min-w-full">
          {filteredMissions.map((m, idx) => {
            const isSelected = m.id === selectedMissionId;

            // Colored pushpin matching category
            const pinColor = 
              m.type === 'science' ? 'bg-red-600 border-red-900' :
              m.type === 'comms' ? 'bg-emerald-600 border-emerald-900' :
              m.type === 'global' ? 'bg-amber-500 border-amber-800' :
              m.type === 'culture' ? 'bg-orange-500 border-orange-800' :
              'bg-purple-600 border-purple-900';

            // Natural slight Polaroid angle
            const rotation = 
              idx % 4 === 0 ? '-rotate-1' :
              idx % 4 === 1 ? 'rotate-1' :
              idx % 4 === 2 ? '-rotate-2' : 'rotate-2';

            return (
              <React.Fragment key={m.id}>
                {/* Hand-drawn marker arrow > between polaroids (from GTA Image 3) */}
                {idx > 0 && (
                  <span className="text-neutral-500 font-black text-base select-none shrink-0 -mx-1">
                    ›
                  </span>
                )}

                {/* The Polaroid Card */}
                <div
                  onClick={() => handleSelectMission(m.id)}
                  className={`group relative cursor-pointer shrink-0 w-[170px] sm:w-[190px] bg-[#fbfbf9] p-2 pb-2.5 border-2 border-black transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? `scale-105 -rotate-1 z-20 shadow-[6px_6px_0px_#000000] ring-2 ring-red-600`
                      : `${rotation} hover:rotate-0 hover:scale-[1.03] shadow-[3px_3px_0px_#222222] opacity-90 hover:opacity-100`
                  }`}
                >
                  {/* Pushpin / Magnet on Top Center */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                    <div className={`w-3.5 h-3.5 rounded-full ${pinColor} border-2 shadow-[0_2px_4px_rgba(0,0,0,0.6)] flex items-center justify-center`}>
                      <div className="w-1 h-1 rounded-full bg-white/70" />
                    </div>
                  </div>

                  {/* Polaroid Photo Image Frame */}
                  <div className="relative w-full aspect-[4/3] bg-[#1a1e24] border border-black/40 overflow-hidden mb-1.5 flex items-center justify-center">
                    {m.mediaType === 'video' ? (
                      <div className="relative w-full h-full bg-[#12161f] flex flex-col items-center justify-center">
                        <Play className="w-6 h-6 text-red-600 fill-red-600/30" />
                        <span className="absolute bottom-1 right-1 font-mono text-[7px] bg-red-600 text-white px-1 font-black uppercase">
                          VIDEO REC
                        </span>
                      </div>
                    ) : m.mediaType === 'audio' ? (
                      <div className="w-full h-full bg-[#1e293b] flex flex-col items-center justify-center p-2 text-center text-emerald-400">
                        <Volume2 className="w-5 h-5 mb-0.5" />
                        <span className="font-mono text-[7px] font-bold">96.3 FM AUDIO</span>
                      </div>
                    ) : m.availablePages && m.availablePages.length > 0 ? (
                      <img
                        src={resolveAsset(m.availablePages[0].pageSrc)}
                        alt={m.titleEs}
                        className="w-full h-full object-cover filter contrast-105"
                      />
                    ) : m.src ? (
                      <img
                        src={resolveAsset(m.src)}
                        alt={m.titleEs}
                        className="w-full h-full object-cover filter contrast-105"
                      />
                    ) : (
                      /* Blueprint style for pending */
                      <div className="w-full h-full bg-[#0f172a] border border-dashed border-cyan-500/40 p-1 flex flex-col items-center justify-center text-center">
                        <span className="font-mono text-[8px] font-black text-cyan-400 uppercase tracking-tighter">
                          [REGISTRO PENDIENTE]
                        </span>
                        <span className="text-[7px] font-mono text-neutral-400 mt-0.5">DOC CLASIFICADO</span>
                      </div>
                    )}

                    {/* Small Yellow Sticky Note (Post-it) on Corner */}
                    <div className="absolute top-1 left-1 bg-[#fef08a] text-black font-mono font-black text-[8px] px-1 py-0.2 border border-black shadow-[1px_1px_0px_#000] -rotate-3 uppercase">
                      {m.code}
                    </div>
                  </div>

                  {/* Polaroid Handwritten Marker Caption */}
                  <div className="flex flex-col space-y-1">
                    
                    {/* Checkbox item (like [✔] ALPHA MAIL DISGUISE in GTA Image 3) */}
                    <div className="flex items-center space-x-1 font-mono text-[10px] font-bold text-neutral-700">
                      <span className="text-emerald-700 font-black">✔</span>
                      <span className="uppercase tracking-tight text-neutral-900 font-black truncate">
                        {m.flag} {m.city}
                      </span>
                    </div>

                    {/* Mission Target Name - with Hand-drawn RED MARKER OVAL when Active (From GTA Image 1 & 2) */}
                    <div className="relative pt-0.5">
                      {isSelected ? (
                        <div className="relative inline-block w-full">
                          {/* Red hand-drawn marker oval outline */}
                          <div className="border-2 border-red-600 rounded-[14px] px-1.5 py-0.5 bg-red-50/80 -rotate-1 shadow-sm">
                            <h4 className="font-mono font-black text-[10px] text-red-700 line-clamp-1 leading-tight uppercase">
                              {currentLang === 'es' ? m.titleEs : m.titleEn}
                            </h4>
                          </div>
                          <span className="absolute -bottom-2 -right-1 font-mono text-[7px] bg-red-600 text-white px-1 font-black uppercase rotate-3">
                            {currentLang === 'es' ? 'EN CURSO' : 'ACTIVE'}
                          </span>
                        </div>
                      ) : (
                        <h4 className="font-mono font-bold text-[10px] text-neutral-800 line-clamp-1 leading-tight group-hover:text-black">
                          {currentLang === 'es' ? m.titleEs : m.titleEn}
                        </h4>
                      )}
                    </div>

                    {/* Bottom Metadata */}
                    <div className="flex items-center justify-between text-[8px] font-mono text-neutral-500 pt-0.5">
                      <span>{m.date}</span>
                      <span className="font-bold text-neutral-700">{m.country}</span>
                    </div>

                  </div>
                </div>
              </React.Fragment>
            );
          })}
          </div>
        </div>
      </footer>

      {/* Projects / Side Quests Modal (Caballero Jaguar ground truth) */}
      <ProjectsModal
        isOpen={isProjectsModalOpen}
        onClose={() => setIsProjectsModalOpen(false)}
        currentLang={currentLang}
      />

    </div>
  );
};
