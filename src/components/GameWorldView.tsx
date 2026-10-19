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
import { TechBadge, TechLogo } from './TechLogos';
export type MissionType = 'science' | 'comms' | 'global' | 'rd' | 'culture' | 'publications' | 'titles' | 'certifications' | 'skills' | 'policy';

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
  isStatic?: boolean;
  deliverablesEs?: string[];
  deliverablesEn?: string[];
  techStack?: string[];
}

export const GAME_MISSIONS: GameMission[] = [
  // 1. ASESORÍA EN POLÍTICAS PÚBLICAS: Cámara de Diputadas/os - Valparaíso
  {
    id: 'congreso-valparaiso',
    type: 'policy',
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
    mediaType: 'plate',
    src: '/congreso_valparaiso.jpg',
    availablePages: [
      {
        titleEs: 'Fotografía Oficial: Intervención en Sala (CDTV)',
        titleEn: 'Official Photography: Chamber Hearing (CDTV)',
        pageSrc: '/congreso_valparaiso.jpg'
      }
    ],
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

  // 1. CIENCIA 01: Rewetting wetlands and Greenhouse gas analysis (CAU Kiel - Master en Manejo Ambiental)
  {
    id: 'kiel-cau',
    type: 'science',
    titleEs: 'Rehumedecimiento de humedales y análisis de gases de efecto invernadero (GEI)',
    titleEn: 'Rewetting Wetlands & Greenhouse Gas (GHG) Exchange Analysis',
    subtitleEs: 'Tesis de Maestría en Manejo Ambiental & App Wetland Monitor | CAU Kiel (Alemania) | 2023-2026',
    subtitleEn: 'Master’s Thesis in Environmental Management & Wetland Monitor App | CAU Kiel (Germany) | 2023-2026',
    country: 'Alemania',
    city: 'Kiel (Wallener Au)',
    flag: '🇩🇪',
    lat: 54.32,
    lng: 10.13,
    date: '2023-2026',
    roleEs: 'Investigador de Tesis de Maestría & Creador de Wetland Monitor (CAU Kiel)',
    roleEn: 'Master’s Thesis Researcher & Wetland Monitor Creator (CAU Kiel)',
    mediaType: 'plate',
    src: '/expeditions/kiel_soil_lab.png',
    availablePages: [
      {
        titleEs: 'Laboratorio de Física de Suelos, Permeabilidad y Columnas de Flujo (CAU Kiel)',
        titleEn: 'Soil Physics Laboratory, Air Permeability & Column Flux Analysis (CAU Kiel)',
        pageSrc: '/expeditions/kiel_soil_lab.png'
      },
      {
        titleEs: 'Wetland Monitor (Humedal Monitor) • Logotipo Oficial del Gemelo Digital de Tesis',
        titleEn: 'Wetland Monitor • Official Logo of the Peatland Digital Twin & Thesis Studio',
        pageSrc: '/logos/wetland_monitor_logo.png'
      },
      {
        titleEs: 'Interfaz Suelo-Atmósfera y Estratigrafía en Wallener Au (Wetland Monitor)',
        titleEn: 'Soil-Atmosphere Interface & Stratigraphy at Wallener Au (Wetland Monitor)',
        pageSrc: '/expeditions/wallener_au_digital_twin.png'
      },
      {
        titleEs: 'Dinámica de Humedales y Ecosistemas Costeros del Mar de Wadden',
        titleEn: 'Wetlands Dynamics & Wadden Sea Fieldwork',
        pageSrc: '/expeditions/wadden_sea_birding.jpg'
      }
    ],
    url: 'https://danisantanderurrutia-coder.github.io/wetland-monitor/',
    code: 'OPS-SCI-01',
    source: 'Christian-Albrechts-Universität zu Kiel (CAU Kiel) • App: Wetland Monitor',
    impactEs: 'Tesis de Maestría en Manejo Ambiental (CAU Kiel) en la turbera Wallener Au (Schleswig-Holstein) junto al desarrollo de la aplicación interactiva "Wetland Monitor" (Humedal Monitor). Observamos y cuantificamos la transición del humedal entre sumidero y fuente de carbono durante la etapa de rehumedecimiento (rewetting) debido al pulso agudo de metano (CH₄ hasta +145 nmol m⁻² s⁻¹ por chimeneas de aerénquima en inundación invernal) y picos otoñales de N₂O (>50% del total anual), analizando el intercambio de GEI (CO₂, CH₄, N₂O) bajo efectos micrometeorológicos y edáficos (Eddy Covariance R² = 0.94 y cámaras cerradas). Asimismo, cuantificamos el legado de antiguos usos de paludicultura y drenaje previo sobre la estructura ecosistémica y evaluamos la compactación mecánica por maquinaria agrícola (horizonte de arado con tensión de precompresión σp = 62.4 kPa).',
    impactEn: 'Master’s thesis in Environmental Management (CAU Kiel) at Wallener Au Peatland alongside the interactive web app "Wetland Monitor". We observed and quantified the peatland’s transition between carbon sink and source during managed rewetting driven by acute methane spikes (CH₄ up to +145 nmol m⁻² s⁻¹ via open aerenchyma chimneys) and autumn N₂O pulses (>50% of annual budget), analyzing GHG exchange (CO₂, CH₄, N₂O) under micrometeorological and soil controls (Eddy Covariance R² = 0.94 & closed chambers). We also quantified the legacy of historical drainage and paludiculture land uses on ecosystem structure and evaluated soil compaction from agricultural machinery (plow pan precompression stress σp = 62.4 kPa).',
    methodologyEs: [
      'Cuantificación de la transición sumidero-fuente en rehumedecimiento por pulsos de metano (CH₄) y balance radiativo GWP₂₀/GWP₁₀₀',
      'Análisis del intercambio de gases (CO₂, CH₄, N₂O) bajo forzantes micrometeorológicos (Eddy Covariance) y de suelo (cámaras cerradas)',
      'Evaluación de antiguos usos de suelo (drenaje previo y paludicultura) y compactación por maquinaria agrícola (edómetro σp = 62.4 kPa, permeámetro de aire)',
      'Desarrollo de la app "Wetland Monitor" (Humedal Monitor): Gemelo Digital interactivo 24h/365d y estudio de defensa en GitHub'
    ],
    methodologyEn: [
      'Quantified sink-to-source transitions during rewetting driven by methane (CH₄) spikes and GWP₂₀/GWP₁₀₀ radiative balances',
      'Analyzed gas exchange (CO₂, CH₄, N₂O) under micrometeorological (Eddy Covariance) and soil physical controls (closed chambers)',
      'Assessed legacy drainage, paludiculture land-use history, and agricultural machinery compaction (oedometer σp = 62.4 kPa, air permeametry)',
      'Built the "Wetland Monitor" web application: 24h/365d interactive peatland digital twin and thesis defense studio on GitHub'
    ],
    deliverablesEs: [
      'App interactiva Wetland Monitor (Humedal Monitor): https://danisantanderurrutia-coder.github.io/wetland-monitor/',
      'Repositorio abierto y pipelines científicos: https://github.com/danisantanderurrutia-coder/wetland-monitor',
      'Cuantificación empírica de presupuestos anuales de CO₂, CH₄ y N₂O y estratigrafía mecánica de turberas'
    ],
    deliverablesEn: [
      'Interactive Wetland Monitor Web App: https://danisantanderurrutia-coder.github.io/wetland-monitor/',
      'Open-source repository & scientific pipelines: https://github.com/danisantanderurrutia-coder/wetland-monitor',
      'Empirical annual CO₂, CH₄, and N₂O budgets and peat soil mechanical stratigraphy'
    ],
    techStack: ['Python', 'Eddy Covariance', 'Wetland Monitor App', 'Soil Physics', 'GHG Chambers', 'CAU Kiel'],
    tags: ['Wetland Monitor', 'Humedal Monitor', 'Rehumedecimiento', 'Metano CH4', 'Paludicultura', 'CAU Kiel', 'Alemania']
  },

  // 1B. CIENCIA 01B: App Wetland Monitor (Humedal Monitor - Gemelo Digital en Tesis CAU Kiel)
  {
    id: 'wetland-monitor-app',
    type: 'science',
    titleEs: 'App Humedal Monitor (Wetland Monitor): Gemelo Digital de Turberas',
    titleEn: 'Wetland Monitor App: Peatland Ecohydrological Digital Twin',
    subtitleEs: 'Plataforma Interactiva de Simulación Diurna/Anual de GEI y Estratigrafía | Tesis CAU Kiel',
    subtitleEn: 'Interactive Diurnal/Seasonal GHG Simulation & Soil Stratigraphy Platform | CAU Kiel Thesis',
    country: 'Alemania',
    city: 'Wallener Au / Kiel',
    flag: '🌿',
    lat: 54.28,
    lng: 9.38,
    date: '2025-2026',
    roleEs: 'Autor Científico & Desarrollador Full-Stack (Wetland Monitor)',
    roleEn: 'Scientific Author & Full-Stack Developer (Wetland Monitor)',
    mediaType: 'plate',
    src: '/logos/wetland_monitor_logo.png',
    availablePages: [
      {
        titleEs: 'Logotipo Oficial • Wetland Monitor (Humedal Monitor)',
        titleEn: 'Official Logo • Wetland Monitor Digital Twin',
        pageSrc: '/logos/wetland_monitor_logo.png'
      },
      {
        titleEs: 'Simulador de Interfaz Suelo-Atmósfera y Estratigrafía (Horizontes O, A, B, R)',
        titleEn: 'Soil-Atmosphere Interface & Horizon Stratigraphy Simulator (O, A, B, R)',
        pageSrc: '/expeditions/wallener_au_digital_twin.png'
      },
      {
        titleEs: 'Laboratorio de Física de Suelos y Columnas en CAU Kiel',
        titleEn: 'Soil Physics & Column Laboratory at CAU Kiel',
        pageSrc: '/expeditions/kiel_soil_lab.png'
      }
    ],
    url: 'https://danisantanderurrutia-coder.github.io/wetland-monitor/',
    code: 'OPS-SCI-01B',
    source: 'GitHub: danisantanderurrutia-coder/wetland-monitor • CAU Kiel',
    impactEs: 'Aplicación web científica e interactiva ("Humedal Monitor / Wetland Monitor") desarrollada para la defensa de tesis de maestría en CAU Kiel. Simula en tiempo real el ciclo diurno de 24 horas y la evolución estacional de 365 días en la turbera Wallener Au, visualizando cómo el rehumedecimiento, las fluctuaciones del nivel freático (-44 cm en sequía estival a +2 cm en invierno) y el horizonte compactado por maquinaria agrícola (σp = 62.4 kPa) gobiernan la transición entre sumidero y emisor de CO₂, CH₄ y N₂O.',
    impactEn: 'Interactive scientific web application ("Wetland Monitor") built for the Master’s thesis defense at CAU Kiel. Simulates in real time the 24-hour diurnal cycle and 365-day seasonal evolution at Wallener Au Peatland, visualizing how managed rewetting, water table fluctuations (-44 cm summer drawdown to +2 cm winter ponding), and the machinery-compacted plow pan (σp = 62.4 kPa) govern the net sink-to-source transition of CO₂, CH₄, and N₂O.',
    methodologyEs: [
      'Motor de simulación ecohidrológica de 24 horas (cierre estomático por VPD > 1.2 kPa e inversión térmica nocturna u* < 0.12 m/s)',
      'Evolución anual de 365 días calibrada empíricamente con datos de torre Eddy Covariance y cámaras estáticas',
      'Visualización interactiva de mecánica de suelos (precompresión por maquinaria agrícola y antiguos usos de paludicultura)',
      'Repositorio y demo pública en vivo en GitHub Pages (danisantanderurrutia-coder/wetland-monitor)'
    ],
    methodologyEn: [
      '24-hour diurnal ecohydrological simulation engine (midday VPD > 1.2 kPa stomatal closure & nocturnal decoupling u* < 0.12 m/s)',
      '365-day seasonal evolution empirically calibrated to Eddy Covariance tower and closed-chamber datasets',
      'Interactive soil mechanics visualizer (agricultural machinery precompression & historical paludiculture legacy)',
      'Open-source repository and live web app hosted on GitHub Pages (danisantanderurrutia-coder/wetland-monitor)'
    ],
    deliverablesEs: [
      'Aplicación Web en Vivo: https://danisantanderurrutia-coder.github.io/wetland-monitor/',
      'Código Fuente y Figuras en GitHub: https://github.com/danisantanderurrutia-coder/wetland-monitor'
    ],
    deliverablesEn: [
      'Live Web Application: https://danisantanderurrutia-coder.github.io/wetland-monitor/',
      'Source Code & Thesis Figures on GitHub: https://github.com/danisantanderurrutia-coder/wetland-monitor'
    ],
    techStack: ['Python', 'JavaScript', 'HTML5 Canvas', 'Eddy Covariance', 'Soil Mechanics', 'GitHub Pages'],
    tags: ['Wetland Monitor', 'Humedal Monitor', 'Gemelo Digital', 'CAU Kiel', 'GitHub', 'Turberas']
  },

  // 2. CIENCIA 02: Investigación sobre protozoos, zooplancton, fitoplancton y macrófitas (AMU Poznań)
  {
    id: 'poznan-amu',
    type: 'science',
    titleEs: 'Calidad del agua y bioindicadores: protozoos, zooplancton, fitoplancton y macrófitas',
    titleEn: 'Water Quality & Bioindicators: Protozoa, Zooplankton, Phytoplankton & Macrophytes',
    subtitleEs: 'Tesis de Maestría en Protección Ambiental | AMU Poznań (Polonia) | 2023-2026',
    subtitleEn: 'Master’s Thesis in Environmental Protection | AMU Poznań (Poland) | 2023-2026',
    country: 'Polonia',
    city: 'Poznań (Lagos y Estanques)',
    flag: '🇵🇱',
    lat: 52.41,
    lng: 16.93,
    date: '2023-2026',
    roleEs: 'Investigador de Tesis de Maestría en Protección Ambiental',
    roleEn: 'Master’s Thesis Researcher in Environmental Protection',
    mediaType: 'plate',
    src: '/expeditions/poland_microscope_zeiss.jpg',
    availablePages: [
      {
        titleEs: 'Identificación de Protozoos y Ciliados al Microscopio Zeiss',
        titleEn: 'Zeiss Microscopy of Protozoa and Ciliates',
        pageSrc: '/expeditions/poland_microscope_zeiss.jpg'
      },
      {
        titleEs: 'Muestreo Limnológico de Fitoplancton y Perifiton en Lago',
        titleEn: 'Limnological Phytoplankton & Biofilm Lake Sampling',
        pageSrc: '/expeditions/poland_lake_sampling.jpg'
      },
      {
        titleEs: 'Clasificación de Macroinvertebrados Bentónicos y Macrófitas',
        titleEn: 'Benthic Macroinvertebrate & Macrophyte Field Sorting',
        pageSrc: '/expeditions/poznan_lake_benthos.jpg'
      },
      {
        titleEs: 'Expedición en Bote a Remo y Batimetría Lacustre',
        titleEn: 'Lake Expedition by Rowboat & Depth Profiling',
        pageSrc: '/expeditions/poland_lake_rowing.jpg'
      }
    ],
    url: 'https://amu.edu.pl',
    code: 'OPS-SCI-02',
    source: 'Adam Mickiewicz University (AMU Poznań)',
    impactEs: 'Investigación de tesis para el Master en Protección Ambiental (M.Sc. Environmental Protection) en la Universidad Adam Mickiewicz de Poznań (AMU). Verificamos cuantitativamente la calidad ecológica del agua mediante múltiples examinaciones en laboratorio e in situ a través de diferentes lagos y cuerpos de agua menores (ponds) de Polonia, diagnosticando comunidades de protozoos, zooplancton, fitoplancton y macrófitas para fundamentar su protección y cuidado como áreas clave de refugio de biodiversidad.',
    impactEn: 'Master’s thesis research in Environmental Protection at Adam Mickiewicz University in Poznań (AMU). We quantitatively verified ecological water quality through comprehensive laboratory and in-situ examinations across diverse lakes and ponds in Poland, diagnosing protozoa, zooplankton, phytoplankton, and macrophyte assemblages to guide their conservation and protection as vital biodiversity refugia.',
    methodologyEs: [
      'Verificación de la calidad del agua mediante examinaciones físico-químicas y biológicas en laboratorio e in situ',
      'Monitoreo comparativo en diferentes lagos y estanques (ponds) para su protección y cuidado como áreas de biodiversidad',
      'Microscopía óptica Zeiss de alta resolución e identificación taxonómica de protozoos, zooplancton, fitoplancton y macrófitas'
    ],
    methodologyEn: [
      'Water quality verification through multi-parameter laboratory and in-situ examinations across diverse lakes and ponds',
      'Ecological status assessment aimed at habitat protection and management as freshwater biodiversity hotspots',
      'High-resolution Zeiss optical microscopy and taxonomic profiling of protozoa, zooplankton, phytoplankton, and macrophytes'
    ],
    tags: ['AMU Poznań', 'Calidad del Agua', 'Biodiversidad', 'Lagos y Estanques', 'Bioindicadores', 'Polonia']
  },

  // 3. CIENCIA 03: Estudios geofísicos, hídricos y de resistividad de suelos (U. de Chile - Geofísica)
  {
    id: 'science-geophysics-soils',
    type: 'science',
    titleEs: 'Estudios hidrogeofísicos, resistividad de suelos y nivel freático (Cuenca del Maule)',
    titleEn: 'Hydrogeophysical, Soil Resistivity & Water Table Studies (Maule Basin)',
    subtitleEs: 'Tesis de Licenciatura en Geofísica | FCFM Universidad de Chile | Maule & Santiago',
    subtitleEn: 'Bachelor’s Thesis in Geophysics | FCFM Universidad de Chile | Maule & Santiago',
    country: 'Chile',
    city: 'Cuenca del Maule (Cauquenes)',
    flag: '🇨🇱',
    lat: -35.97,
    lng: -72.31,
    date: '2016-2021',
    roleEs: 'Geofísico de Terreno & Tesista de Pregrado (FCFM U. de Chile)',
    roleEn: 'Field Geophysicist & Undergraduate Thesis Researcher (FCFM U. de Chile)',
    mediaType: 'plate',
    src: '/expeditions/cauquenes_rain_gauge.jpg',
    availablePages: [
      {
        titleEs: 'Instalación de Pluviómetro y Estación Hidrometeorológica en Terreno',
        titleEn: 'Field Installation of Rain Gauge & Hydrometeorological Station',
        pageSrc: '/expeditions/cauquenes_rain_gauge.jpg'
      },
      {
        titleEs: 'Sondeo Eléctrico Vertical (SEV) y Resistividad Geoeléctrica de Suelos',
        titleEn: 'Vertical Electrical Sounding (VES) & Soil Geoelectrical Resistivity',
        pageSrc: '/expeditions/cauquenes_geophysics_ves.jpg'
      }
    ],
    url: 'https://ingenieria.uchile.cl',
    code: 'OPS-SCI-03',
    source: 'FCFM Universidad de Chile (Departamento de Geofísica)',
    impactEs: 'Investigación empírica para el grado de Licenciado en Geofísica en la Universidad de Chile (FCFM), aprobada con distinción máxima. En los estudios en la cuenca del Maule (secano interior de Cauquenes), pudimos observar y cuantificar directamente el efecto combinado de la actividad agroforestal intensiva y el cambio climático sobre las anomalías de resistividad eléctrica de los suelos y el abatimiento crítico del nivel freático, integrando Sondeos Eléctricos Verticales (SEV) y redes pluviométricas de terreno.',
    impactEn: 'Empirical research for the Bachelor’s in Geophysics at Universidad de Chile (FCFM), awarded with highest distinction. Across the Maule River Basin (Cauquenes interior dryland), we observed and quantified the combined impact of intensive agroforestry plantations and climate change on soil electrical resistivity profiles and severe water table drawdown, integrating Vertical Electrical Soundings (VES) with in-situ rain gauge telemetry.',
    methodologyEs: [
      'Cuantificación en la cuenca del Maule del efecto de la actividad agroforestal y el cambio climático sobre la resistividad de suelos y el nivel freático',
      'Sondeos Eléctricos Verticales (SEV Schlumberger) e inversión geofísica 1D/2D para perfilar humedad edáfica y profundidad de acuíferos someros',
      'Instalación, nivelación y monitoreo continuo con pluviómetros e instrumental hidroclimático en terreno (FCFM U. de Chile)'
    ],
    methodologyEn: [
      'Quantified the combined impact of agroforestry plantations and climate change on soil resistivity and water table depth in the Maule Basin',
      'Vertical Electrical Soundings (VES Schlumberger) and 1D/2D geophysical inversion to profile soil moisture and shallow aquifer depth',
      'Field deployment, calibration, and continuous logging with rain gauges and hydroclimatic sensors (FCFM U. de Chile)'
    ],
    tags: ['Geofísica', 'U. de Chile', 'Cuenca del Maule', 'Nivel Freático', 'Resistividad de Suelos', 'Actividad Agroforestal']
  },

  // 4. CIENCIA 04: Evaluación de riesgos y cadenas de suministro de biomasa, celulosa y papel (BAN, EPN, GFC)
  {
    id: 'science-biomass-risk',
    type: 'science',
    titleEs: 'Evaluación de riesgos y cadenas de suministro de biomasa, celulosa y papel',
    titleEn: 'Biomass, Pulp and Paper Risk Assessment & Supply Chains',
    subtitleEs: 'Investigación Internacional con BAN, EPN y Global Forest Coalition (GFC)',
    subtitleEn: 'International Research with BAN, EPN & Global Forest Coalition (GFC)',
    country: 'Chile / Global',
    city: 'Biobío / Parral',
    flag: '🌐',
    lat: -36.82,
    lng: -73.05,
    date: '2022-2025',
    roleEs: 'Investigador de Cadenas de Suministro & Riesgo Biofísico',
    roleEn: 'Supply Chain & Biophysical Risk Researcher',
    mediaType: 'plate',
    src: '/expeditions/epn_parral_biomass.jpg',
    availablePages: [
      {
        titleEs: 'Auditoría en Terreno: Plantas de Biomasa y Aserraderos Industriales (Parral)',
        titleEn: 'Field Audit: Biomass Plants & Industrial Sawmills (Parral)',
        pageSrc: '/expeditions/epn_parral_biomass.jpg'
      },
      {
        titleEs: 'Conferencia y Exposición sobre Cadenas Globales de Celulosa y Papel (Concepción)',
        titleEn: 'Conference & Briefing on Global Pulp & Paper Chains (Concepción)',
        pageSrc: '/expeditions/concepcion_biomass_talk.png'
      },
      {
        titleEs: 'Informe de Investigación: Environmental Paper Network (EPN)',
        titleEn: 'Research Brief: Environmental Paper Network (EPN)',
        pageSrc: '/press_covers/epn_cover.png'
      },
      {
        titleEs: 'Red Internacional Enjust y Alianzas de Justicia Ecosocial',
        titleEn: 'Enjust Network & Ecosocial Alliances',
        pageSrc: '/expeditions/enjust_logo.png'
      }
    ],
    url: 'https://environmentalpaper.org',
    code: 'OPS-SCI-04',
    source: 'Biomass Action Network (BAN), EPN & Global Forest Coalition (GFC)',
    impactEs: 'Investigación científica y auditoría de cadenas de suministro globales de biomasa leñosa, pulpa de celulosa y papel en el Cono Sur y los mercados de exportación globales. Desarrollada en estrecha colaboración con Biomass Action Network (BAN), Environmental Paper Network (EPN) y Global Forest Coalition (GFC), evaluando la contabilidad real de emisiones de carbono, degradación de suelos, estrés hídrico y las falsas soluciones bioenergéticas.',
    impactEn: 'Scientific research and international supply chain audit of woody biomass, pulp, and paper flows across the Southern Cone and export markets. Developed in collaboration with Biomass Action Network (BAN), Environmental Paper Network (EPN), and Global Forest Coalition (GFC), evaluating true carbon accounting balances, soil degradation, watershed water stress, and bioenergy false solutions.',
    methodologyEs: [
      'Auditoría y trazabilidad en terreno de aserraderos, acopios y plantas de biomasa en Chile',
      'Evaluación de riesgos ecológicos y cadenas globales junto a BAN, EPN y Global Forest Coalition',
      'Modelación de balances de carbono y flujos biofísicos de exportación de biomasa y celulosa'
    ],
    methodologyEn: [
      'Field auditing and supply chain tracing of sawmills, stockyards, and biomass facilities in Chile',
      'Ecological risk evaluation and international trade mapping alongside BAN, EPN, and Global Forest Coalition',
      'Biophysical flow modeling, carbon balance accounting, and pulp export lifecycle analysis'
    ],
    tags: ['Biomass Action Network', 'EPN', 'Global Forest Coalition', 'Cadenas de Suministro', 'Riesgo Biofísico', 'Celulosa']
  },

  // 5. CIENCIA 05: Riesgos climáticos: Megaincendios forestales y humedales
  {
    id: 'science-wildfires-risks',
    type: 'science',
    titleEs: 'Riesgos climáticos: Megaincendios forestales e impacto en humedales',
    titleEn: 'Climate Risks: Wildfires & Impacts on Wetland Catchments',
    subtitleEs: 'Red Plurinacional de Humedales & Red de Superación al Modelo Forestal | Chile',
    subtitleEn: 'Plurinational Wetland Network & Network Overcoming the Forestry Model | Chile',
    country: 'Chile',
    city: 'Maule / Biobío',
    flag: '🇨🇱',
    lat: -36.20,
    lng: -72.10,
    date: '2021-2025',
    roleEs: 'Modelador Geoespacial & Asesor Científico de Riesgo',
    roleEn: 'Geospatial Modeler & Scientific Risk Advisor',
    mediaType: 'plate',
    src: '/press_covers/tomaterojo_humedales_fuego.jpg',
    availablePages: [
      {
        titleEs: 'Humedales en Llamas: Impacto de Megaincendios en Ecosistemas Acuáticos',
        titleEn: 'Wetlands in Flames: Megafire Impacts on Aquatic Ecosystems',
        pageSrc: '/press_covers/tomaterojo_humedales_fuego.jpg'
      },
      {
        titleEs: 'Propuestas Técnicas y Franjas de Protección ante el Congreso y la Convención',
        titleEn: 'Technical Proposals & Buffer Zones Presented to Congress & Convention',
        pageSrc: '/expeditions/convencion_norma_residuos.jpg'
      },
      {
        titleEs: 'Relevamiento de Biodiversidad y Vulnerabilidad en Cuencas del Centro-Sur',
        titleEn: 'Biodiversity & Vulnerability Survey in Central-Southern Basins',
        pageSrc: '/expeditions/longavi_biodiversity_survey.jpg'
      }
    ],
    url: 'https://tomaterojo.cl',
    code: 'OPS-SCI-05',
    source: 'Red Plurinacional de Humedales en Chile & Red de Superación al Modelo Forestal',
    impactEs: 'Modelación de riesgos climáticos extremos enfocada en la dinámica de megaincendios forestales y su impacto crítico sobre humedales, cuencas abastecedoras de agua y comunidades en Chile. Realizado en estrecha articulación con la Red Plurinacional de Humedales en Chile y la Red de Superación al Modelo Forestal, integrando teledetección satelital de severidad de fuego, pirogeomorfología y propuestas normativas de cortafuegos y restauración ecológica.',
    impactEn: 'Extreme climate risk modeling focused on forest wildfire dynamics and their severe downstream impacts on wetlands, drinking water catchments, and communities across Chile. Conducted in partnership with Red Plurinacional de Humedales en Chile and Red de Superación al Modelo Forestal, combining satellite burn severity analysis, pyrogeomorphology, and evidence-based ecological buffer zone proposals.',
    methodologyEs: [
      'Modelación de severidad espectral y propagación de megaincendios sobre cuencas y humedales',
      'Articulación técnica con la Red Plurinacional de Humedales y la Red de Superación al Modelo Forestal',
      'Desarrollo de propuestas científicas de ordenamiento territorial, amortiguamiento y cortafuegos biológicos'
    ],
    methodologyEn: [
      'Satellite burn severity modeling and wildfire propagation dynamics across watersheds and wetlands',
      'Technical partnership with Red Plurinacional de Humedales and Red de Superación al Modelo Forestal',
      'Development of science-based land use zoning, ecological buffer zones, and biological firebreaks'
    ],
    tags: ['Riesgo Climático', 'Megaincendios', 'Red Plurinacional de Humedales', 'Modelo Forestal', 'Chile', 'Incendios']
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
    src: '/plp/plp_logo.jpg',
    availablePages: [
      {
        titleEs: 'Logotipo Oficial • Primera Línea Prensa',
        titleEn: 'Official Logo • Primera Línea Prensa',
        pageSrc: '/plp/plp_logo.jpg'
      },
      {
        titleEs: 'Cabecera Editorial & Consigna Popular',
        titleEn: 'Editorial Header & Popular Slogan',
        pageSrc: '/plp/plp_header_consigna.png'
      },
      {
        titleEs: 'Lanzamiento del Libro Impreso "Relatos de la Revuelta"',
        titleEn: 'Print Book Release "Relatos de la Revuelta"',
        pageSrc: '/plp/plp_articulo_revuelta.png'
      },
      {
        titleEs: 'Afiche de Contra-Información y Agitación Gráfica',
        titleEn: 'Counter-Information Poster & Graphic Agitation',
        pageSrc: '/plp/plp_afiche_inflacion.jpg'
      }
    ],
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
    tags: ['+700k', 'Primera Línea Prensa', 'Periodismo Ciudadano', 'Santiago', 'Logo Oficial']
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
    src: '/expeditions/oslo_degrowth_logo.png',
    availablePages: [
      {
        titleEs: '10ª Conferencia Internacional de Decrecimiento (Oslo)',
        titleEn: '10th International Degrowth Conference (Oslo)',
        pageSrc: '/expeditions/oslo_degrowth_logo.png'
      },
      {
        titleEs: 'Cobertura de Prensa Oficial (El Desconcierto)',
        titleEn: 'Official Press Coverage (El Desconcierto)',
        pageSrc: '/press_covers/desconcierto_noruega_screen.png'
      }
    ],
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
    src: '/expeditions/hamburg_enjust_library.jpg',
    availablePages: [
      {
        titleEs: 'Mesa Plenaria en Biblioteca Histórica de Hamburgo (ENJUST)',
        titleEn: 'Plenary Session in Hamburg Historical Library (ENJUST)',
        pageSrc: '/expeditions/hamburg_enjust_library.jpg'
      },
      {
        titleEs: 'Red Europea de Justicia Ambiental (ENJUST Bonn/Hamburgo)',
        titleEn: 'European Environmental Justice Network (ENJUST)',
        pageSrc: '/expeditions/enjust_logo.png'
      },
      {
        titleEs: 'Spotlight EPN: Oposición Comunitaria a Planta de Biomasa en Parral, Maule',
        titleEn: 'EPN Spotlight: Community Opposition to Biomass Plant in Parral, Maule',
        pageSrc: '/press_covers/epn_parral_biomass.jpg'
      },
      {
        titleEs: 'Informe Internacional EPN & Impacto de Biomasa',
        titleEn: 'EPN International Report on Biomass Impacts',
        pageSrc: '/press_covers/epn_screen.png'
      }
    ],
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
    src: '/expeditions/colombia_climate_justice_group.jpg',
    availablePages: [
      {
        titleEs: 'Plenaria de la Plataforma Latinoamericana por la Justicia Climática',
        titleEn: 'Latin American Climate Justice Platform Plenary',
        pageSrc: '/expeditions/colombia_climate_justice_group.jpg'
      },
      {
        titleEs: 'Círculo de Diálogo Territorial y Dinámica de Tejido de Redes',
        titleEn: 'Territorial Dialogue Circle & Network Weaving Dynamic',
        pageSrc: '/expeditions/colombia_climate_justice_circle.jpg'
      },
      {
        titleEs: 'Cobertura OLCA & Mandatos Socioambientales',
        titleEn: 'OLCA Coverage & Socioenvironmental Mandates',
        pageSrc: '/press_covers/olca_screen.png'
      }
    ],
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
    src: '/expeditions/costa_rica_wycj_summit.jpg',
    availablePages: [
      {
        titleEs: 'Panel en Cumbre de Justicia Climática Intergeneracional (WYCJ)',
        titleEn: 'Intergenerational Climate Justice Summit Panel (WYCJ)',
        pageSrc: '/expeditions/costa_rica_wycj_summit.jpg'
      },
      {
        titleEs: 'Cobertura de Prensa Oficial (Delfino Costa Rica)',
        titleEn: 'Official Press Coverage (Delfino Costa Rica)',
        pageSrc: '/press_covers/delfino_screen.png'
      }
    ],
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

  // 10. CERTIFICACIONES ADICIONALES: WSL BlueGreen Biodiversity - Davos, Suiza
  {
    id: 'wsl-davos',
    type: 'certifications',
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
    src: '/expeditions/davos_wsl_group.png',
    availablePages: [
      {
        titleEs: 'Cohorte de Investigación WSL BlueGreen Biodiversity',
        titleEn: 'WSL Davos Research Cohort • BlueGreen Biodiversity',
        pageSrc: '/expeditions/davos_wsl_group.png'
      },
      {
        titleEs: 'Relevamiento Ripario y Fluvial en Valle Flüela (Davos)',
        titleEn: 'Riparian Stream Survey in Flüela Valley (Davos)',
        pageSrc: '/expeditions/davos_stream_fieldwork.jpg'
      }
    ],
    url: 'https://www.wsl.ch',
    code: 'OPS-CERT-01',
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

  // 11. CERTIFICACIONES ADICIONALES: Doughnut Economics - Copenhague, Dinamarca
  {
    id: 'deal-copenhagen',
    type: 'certifications',
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
    src: '/expeditions/copenhagen_doughnut_economics_book.jpg',
    availablePages: [
      {
        titleEs: 'Seminario DEAL Doughnut Economics (Copenhague, Dinamarca)',
        titleEn: 'DEAL Doughnut Economics Seminar (Copenhagen, Denmark)',
        pageSrc: '/expeditions/copenhagen_doughnut_economics_book.jpg'
      },
      {
        titleEs: '10ª Conferencia Internacional de Decrecimiento (Oslo)',
        titleEn: '10th International Degrowth Conference (Oslo)',
        pageSrc: '/expeditions/oslo_degrowth_logo.png'
      },
      {
        titleEs: 'Prensa Oficial: Modelación de Límites Planetarios (El Desconcierto)',
        titleEn: 'Official Press: Planetary Boundaries Modeling (El Desconcierto)',
        pageSrc: '/press_covers/desconcierto_noruega_screen.png'
      }
    ],
    url: 'https://doughnuteconomics.org',
    code: 'OPS-CERT-02',
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

  // 12. CERTIFICACIONES ADICIONALES: Interlinked Justice - Dresden, Alemania
  {
    id: 'dresden-justice',
    type: 'certifications',
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
    mediaType: 'plate',
    src: '/expeditions/dresden_interlinked_justice_cohort.jpg',
    availablePages: [
      {
        titleEs: 'Cohorte de la Escuela de Verano Interlinked Justice (Dresden)',
        titleEn: 'Interlinked Justice Summer School Cohort (Dresden)',
        pageSrc: '/expeditions/dresden_interlinked_justice_cohort.jpg'
      },
      {
        titleEs: 'Mesa Plenaria en Biblioteca Histórica de Hamburgo (ENJUST)',
        titleEn: 'Plenary Session in Hamburg Historical Library (ENJUST)',
        pageSrc: '/expeditions/hamburg_enjust_library.jpg'
      },
      {
        titleEs: 'Red Europea de Justicia Ambiental (ENJUST Bonn/Hamburgo)',
        titleEn: 'European Environmental Justice Network (ENJUST)',
        pageSrc: '/expeditions/enjust_logo.png'
      }
    ],
    code: 'OPS-CERT-03',
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

  // 12b. CERTIFICACIONES ADICIONALES: Rewilding & Gestión Forestal - Aljezur, Portugal
  {
    id: 'cert-aljezur',
    type: 'certifications',
    titleEs: 'Certificación: Rewilding & Gestión Forestal // Aljezur, Portugal',
    titleEn: 'Certification: Rewilding & Forest Management // Aljezur, Portugal',
    subtitleEs: 'Plano de Gestão Florestal & StoryMaps | Algarve, Portugal | 2024',
    subtitleEn: 'Forest Management Plan & StoryMaps | Algarve, Portugal | 2024',
    country: 'Portugal',
    city: 'Aljezur',
    flag: '🇵🇹',
    lat: 37.31,
    lng: -8.80,
    date: '2024',
    roleEs: 'Especialista en Rewilding & SIG Forestal',
    roleEn: 'Rewilding & Forestry GIS Specialist',
    mediaType: 'plate',
    src: '/expeditions/aljezur_rewilding_portugal.png',
    availablePages: [
      {
        titleEs: 'Imagen Satelital True Color (Sentinel-2) • Aljezur, Algarve',
        titleEn: 'Sentinel-2 True Color Satellite Imagery • Aljezur, Algarve',
        pageSrc: '/expeditions/aljezur_rewilding_portugal.png'
      },
      {
        titleEs: 'Índice de Vegetación NDVI y Análisis de Combustible Forestal',
        titleEn: 'NDVI Vegetation Index & Fuel Load Analysis',
        pageSrc: '/expeditions/aljezur_ndvi_portugal.png'
      }
    ],
    url: 'https://cm-aljezur.pt',
    code: 'OPS-CERT-04',
    source: 'Plano de Gestão Florestal Aljezur (StoryMaps & GIS)',
    impactEs: 'Certificación y modelación espacial aplicada en Aljezur (Algarve, Portugal): desarrollo del Plano de Gestão Florestal, StoryMaps interactivo y análisis satelital (Sentinel-2, GEDI LiDAR) para mitigación de incendios mediante renaturalización activa.',
    impactEn: 'Field certification and applied spatial modeling in Aljezur (Algarve, Portugal): development of the Forest Management Plan (Plano de Gestão Florestal), interactive StoryMaps, and satellite analysis (Sentinel-2, GEDI LiDAR) for wildfire resilience through active rewilding.',
    methodologyEs: [
      'Modelación multitemporal satelital Sentinel-2 (NDVI, NDRE, SAVI) y LiDAR GEDI de dosel',
      'Diseño de franjas de gestión de combustible y cortafuegos biológicos con especies autóctonas',
      'Articulación de herramientas SIG y StoryMaps para planificación territorial comunal'
    ],
    methodologyEn: [
      'Multi-temporal Sentinel-2 satellite analysis (NDVI, NDRE, SAVI) and GEDI LiDAR canopy modeling',
      'Design of fuelbreak buffer zones and native green firebreaks',
      'Integration of open GIS workflows and StoryMaps for municipal land-use planning'
    ],
    tags: ['Portugal', 'Aljezur', 'Rewilding', 'SIG', 'GEDI', 'Incendios', 'Certificación']
  },

  // 12c. CERTIFICACIONES ADICIONALES: Diseñador en Permacultura (CDP) - Curarrehue & Maule, Chile
  {
    id: 'cert-permacultura',
    type: 'certifications',
    titleEs: 'Certificación: Curso de Diseño en Permacultura (80 hrs) // EPAC & Fundación Suelo',
    titleEn: 'Certification: Permaculture Design Course (80 hrs) // EPAC & Fundación Suelo',
    subtitleEs: 'Escuela de Permacultura Aplicada Chile & Fundación Suelo | Curarrehue, 2023',
    subtitleEn: 'Applied Permaculture School of Chile & Soil Foundation | Curarrehue, 2023',
    country: 'Chile',
    city: 'Curarrehue / Maule',
    flag: '🇨🇱',
    lat: -39.36,
    lng: -71.58,
    date: '2023',
    roleEs: 'Diseñador en Permacultura Certificado (CDP • 80 hrs)',
    roleEn: 'Certified Permaculture Designer (CDP • 80 hrs)',
    mediaType: 'plate',
    src: '/certificates/permacultura_epac_curarrehue.jpg',
    availablePages: [
      {
        titleEs: 'Diploma Oficial: Curso Certificado de Diseño en Permacultura (EPAC & Fundación Suelo)',
        titleEn: 'Official Diploma: Certified Permaculture Design Course (EPAC & Soil Foundation)',
        pageSrc: '/certificates/permacultura_epac_curarrehue.jpg'
      },
      {
        titleEs: 'Reforestación Comunitaria y Prácticas Agroecológicas en Terreno',
        titleEn: 'Community Reforestation & Hands-on Agroecological Practices',
        pageSrc: '/expeditions/ong_raiz_native_tree_planting.jpg'
      },
      {
        titleEs: 'Monitoreo Pluviométrico y Diseño Hidrológico en Cerro Molco (Cauquenes)',
        titleEn: 'Rainfall Monitoring & Hydrological Keyline at Cerro Molco (Cauquenes)',
        pageSrc: '/expeditions/cauquenes_rain_gauge.jpg'
      },
      {
        titleEs: 'Prospección Geofísica (SEV) para Hidrología de Cuencas',
        titleEn: 'Geophysical Sounding (VES) for Watershed Hydrogeology',
        pageSrc: '/expeditions/cauquenes_geophysics_ves.jpg'
      }
    ],
    url: 'https://www.facebook.com/EPACPermacultura/',
    code: 'OPS-CERT-05',
    source: 'Escuela de Permacultura Aplicada Chile (EPAC) & Fundación Suelo (Diploma)',
    impactEs: 'Certificación oficial de 80 horas de formación presencial y online en Diseño en Permacultura (CDP), facilitada por Julio E. Pérez Díaz, María Carolina Miranda, Raymond Lodge y equipo en Curarrehue (febrero 2023). Aplicación de zonificación de 5 zonas, diseño hidrológico Keyline y regeneración de suelos.',
    impactEn: 'Official 80-hour on-site and online certification as a Certified Permaculture Designer (CDP), facilitated by Julio E. Pérez Díaz, María Carolina Miranda, Raymond Lodge, and design team in Curarrehue (February 2023).',
    methodologyEs: [
      'Diploma oficial de 80 horas presenciales y online (EPAC & Fundación Suelo)',
      'Diseño hidrológico en contorno (Keyline) y cosecha de agua de lluvia en cuencas de secano',
      'Zonificación predial regenerativa de 5 zonas y transición agroforestal sin agroquímicos'
    ],
    methodologyEn: [
      'Official 80-hour on-site and online diploma (EPAC & Soil Foundation)',
      'Contour Keyline hydrological design and rainwater harvesting in dryland catchments',
      'Regenerative 5-zone farm planning and pesticide-free agroforestry transitions'
    ],
    tags: ['Permacultura', 'EPAC', 'Fundación Suelo', 'CDP', 'Curarrehue', 'Maule', 'Certificación']
  },

  // 12d. CERTIFICACIONES ADICIONALES: (CR)2 Summer School - Costas Resilientes (Concepción, Chile)
  {
    id: 'cert-cr2',
    type: 'certifications',
    titleEs: 'Certificación: Escuela de Verano (CR)2 Costas Resilientes (57 hrs)',
    titleEn: 'Certification: (CR)2 Resilient Coasts Summer School (57 hrs)',
    subtitleEs: 'Centro de Ciencia del Clima y la Resiliencia (CR)2 • Universidad de Chile | 2023',
    subtitleEn: 'Center for Climate and Resilience Research (CR)2 • University of Chile | 2023',
    country: 'Chile',
    city: 'Concepción',
    flag: '🇨🇱',
    lat: -36.82,
    lng: -73.05,
    date: '2023',
    roleEs: 'Investigador Participante (57 hrs presenciales)',
    roleEn: 'Participant Researcher (57 on-site hrs)',
    mediaType: 'plate',
    src: '/certificates/cr2_summer_school_costas_resilientes.png',
    availablePages: [
      {
        titleEs: 'Certificado Oficial (CR)2: 3ª Escuela de Verano Costas Resilientes',
        titleEn: 'Official (CR)2 Certificate: 3rd Resilient Coasts Summer School',
        pageSrc: '/certificates/cr2_summer_school_costas_resilientes.png'
      },
      {
        titleEs: 'Exposición y Trabajo de Campo en Cuencas y Zonas Costeras del Biobío',
        titleEn: 'Fieldwork and Presentations across Biobío Watersheds & Coasts',
        pageSrc: '/expeditions/concepcion_biomass_talk.png'
      }
    ],
    url: 'https://www.cr2.cl',
    code: 'OPS-CERT-06',
    source: 'Centro de Ciencia del Clima y la Resiliencia (CR)2 (Diploma Oficial)',
    impactEs: 'Certificación presencial de 57 horas académicas en la 3ª Escuela de Verano «Con los pies en el mar: Hacia el co-diseño de costas resilientes. Riesgos climáticos y respuestas a lo largo de las zonas costeras», dirigida por el climatólogo René Garreaud S. en Concepción, Chile (enero 2023).',
    impactEn: '57-hour certified on-site summer school on resilient coastal co-design and climate hazards organized by the Center for Climate and Resilience Research (CR)2 / University of Chile, directed by René Garreaud S. in Concepción (January 2023).',
    methodologyEs: [
      'Co-diseño de respuestas adaptativas ante eventos climáticos extremos en zonas costeras',
      'Modelación de amenazas climáticas costeras, oleaje extremo y erosión de playas',
      'Articulación transdisciplinar entre oceanografía física, geofísica y gobernanza local'
    ],
    methodologyEn: [
      'Co-design of adaptive responses to extreme climate events along coastal zones',
      'Modeling coastal climate hazards, extreme wave regimes, and beach erosion',
      'Transdisciplinary integration between physical oceanography, geophysics, and local governance'
    ],
    tags: ['(CR)2', 'U. de Chile', 'René Garreaud', 'Costas Resilientes', 'Concepción', 'Certificación']
  },

  // 12e. CERTIFICACIONES ADICIONALES: Instituto Ambiental GIS - Nicho Ecológico & R (Online)
  {
    id: 'cert-instituto-gis',
    type: 'certifications',
    titleEs: 'Certificación: Modelado de Nicho Ecológico, Teledetección & R (20 hrs)',
    titleEn: 'Certification: Ecological Niche Modeling, Remote Sensing & R (20 hrs)',
    subtitleEs: 'Instituto Ambiental GIS // QGIS, ArcGIS PRO, Radar & GEE | 2022',
    subtitleEn: 'Environmental GIS Institute // QGIS, ArcGIS PRO, Radar & GEE | 2022',
    country: 'Chile / Internacional',
    city: 'Online / GIS',
    flag: '🌐',
    lat: -33.45,
    lng: -70.66,
    date: '2022',
    roleEs: 'Especialista en Modelado de Biodiversidad & SIG',
    roleEn: 'Biodiversity Modeling & GIS Specialist',
    mediaType: 'plate',
    src: '/certificates/instituto_ambiental_gis_r_qgis.png',
    availablePages: [
      {
        titleEs: 'Diploma Oficial: El Desafío en Biodiversidad y Medio Ambiente (Instituto Ambiental GIS)',
        titleEn: 'Official Diploma: Biodiversity & Environmental Challenge (Environmental GIS Institute)',
        pageSrc: '/certificates/instituto_ambiental_gis_r_qgis.png'
      }
    ],
    url: 'https://escuelaambiental.com',
    code: 'OPS-CERT-07',
    source: 'Instituto Ambiental GIS (Diploma Oficial)',
    impactEs: 'Diploma de culminación satisfactoria del Desafío en Biodiversidad y Medio Ambiente: modelado de nicho ecológico, descarga de datos de biodiversidad GBIF, teledetección y clasificación satelital con QGIS y ArcGIS PRO, análisis EDA en R y procesamiento de imágenes Radar con Google Earth Engine (20 horas académicas).',
    impactEn: 'Official certification diploma in Biodiversity and Environmental Modeling: GBIF biodiversity data extraction, satellite classification via ArcGIS PRO and QGIS, exploratory data analysis in R, and Radar / Google Earth Engine workflows.',
    methodologyEs: [
      'Descarga e integración de bases de datos de biodiversidad mundial GBIF',
      'Clasificación supervisada y no supervisada de imágenes satelitales en QGIS y ArcGIS PRO',
      'Análisis exploratorio de datos espaciales (EDA) con R y teledetección Radar en Google Earth Engine'
    ],
    methodologyEn: [
      'Extraction and spatial mapping of global GBIF biodiversity occurrence databases',
      'Supervised and unsupervised satellite imagery classification in QGIS and ArcGIS PRO',
      'Exploratory spatial data analysis (EDA) in R and Radar remote sensing via Google Earth Engine'
    ],
    tags: ['QGIS', 'R', 'GEE', 'Radar', 'GBIF', 'Nicho Ecológico', 'ArcGIS', 'Certificación']
  },

  // 12f. CERTIFICACIONES ADICIONALES: Censat Agua Viva - Economía Verde y Financiarización (Bogotá)
  {
    id: 'cert-censat',
    type: 'certifications',
    titleEs: 'Certificación: Economía Verde y Financiarización de la Naturaleza (16 hrs)',
    titleEn: 'Certification: Green Economy & Nature Financialization (16 hrs)',
    subtitleEs: 'Censat Agua Viva & Amigos de la Tierra Internacional | Bogotá, 2022',
    subtitleEn: 'Censat Agua Viva & Friends of the Earth International | Bogotá, 2022',
    country: 'Colombia',
    city: 'Bogotá',
    flag: '🇨🇴',
    lat: 4.71,
    lng: -74.07,
    date: '2022',
    roleEs: 'Participante Certificado (16 hrs)',
    roleEn: 'Certified Participant (16 hrs)',
    mediaType: 'plate',
    src: '/certificates/censat_economia_verde_financiarizacion.png',
    availablePages: [
      {
        titleEs: 'Certificado Oficial: Curso sobre Economía Verde y Financiarización de la Naturaleza',
        titleEn: 'Official Certificate: Green Economy & Nature Financialization Course',
        pageSrc: '/certificates/censat_economia_verde_financiarizacion.png'
      },
      {
        titleEs: 'Círculo de Diálogo y Formación Territorial en Colombia (Censat Agua Viva)',
        titleEn: 'Territorial Dialogue & Training Circle in Colombia (Censat Agua Viva)',
        pageSrc: '/expeditions/colombia_climate_justice_circle.jpg'
      }
    ],
    url: 'https://censat.org',
    code: 'OPS-CERT-08',
    source: 'Censat Agua Viva & Amigos de la Tierra (Diploma Oficial)',
    impactEs: 'Certificación otorgada por Censat Agua Viva, Amigos de la Tierra Internacional, Green Livelihoods Alliance, Profundo, Fundación Heinrich Böll y la Universidad Nacional de Colombia (UNAL) por la culminación del curso sobre economía verde, mercados de carbono y financiarización de bienes comunes.',
    impactEn: 'Official certification awarded by Censat Agua Viva, Friends of the Earth International, Green Livelihoods Alliance, Profundo, Heinrich Böll Foundation, and National University of Colombia (UNAL) analyzing green economy and nature financialization.',
    methodologyEs: [
      'Auditoría crítica a los mecanismos de compensación y créditos de carbono forestal',
      'Desmitificación de la financiarización de ecosistemas y servicios ambientales',
      'Articulación con movimientos socioambientales de América Latina y defensa territorial'
    ],
    methodologyEn: [
      'Critical audit of carbon offset mechanisms and corporate forest carbon credits',
      'Demystification of ecosystem financialization and market-based natural capital',
      'Networking with Latin American environmental justice and grassroots territorial defense'
    ],
    tags: ['Censat Agua Viva', 'Colombia', 'Bogotá', 'Economía Verde', 'Mercados de Carbono', 'UNAL', 'Certificación']
  },

  // 13. ASESORÍA EN POLÍTICAS PÚBLICAS: Universidad de Chile & Convención Constitucional
  {
    id: 'uchile-convencion',
    type: 'policy',
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
      { titleEs: 'Lámina 4: Asesoría Convención Constitucional', titleEn: 'Plate 4: Constitutional Convention Advisory', pageSrc: '/portfolio_pages/page_4.png', pageSrcEn: '/portfolio_pages_en/page_4.png' },
      { titleEs: 'Fotografía: Presentación de Norma Constitucional de Residuos', titleEn: 'Photograph: Zero-Waste Constitutional Norm Presentation', pageSrc: '/expeditions/convencion_norma_residuos.jpg' }
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

  // 14. COMUNICACIONES & MEDIOS: Red Comunitaria del Maule & Radio Cristalina 96.3 FM
  {
    id: 'radio-cristalina',
    type: 'comms',
    titleEs: 'Red Comunitaria del Maule & Radio Cristalina 96.3 FM',
    titleEn: 'Maule Community Network & Radio Cristalina 96.3 FM',
    subtitleEs: 'MauleRed, Radio Comunitaria y Taller de Corresponsales Populares',
    subtitleEn: 'MauleRed Digital News Platform, Community Radio & Popular Reporters Workshop',
    country: 'Chile',
    city: 'Maule Sur',
    flag: '🇨🇱',
    lat: -35.85,
    lng: -71.80,
    date: '2021-2023',
    roleEs: 'Panelista de la Red de Medios Comunitaria del Maule & Radio Cristalina',
    roleEn: 'Panellist on Maule Community Media Network & Radio Cristalina',
    mediaType: 'plate',
    src: '/maule_sur_radio.jpg',
    url: 'https://danisantanderurrutia-coder.github.io/MauleRed/',
    availablePages: [
      {
        titleEs: 'Panelista en Estudio de Transmisión Radial • Maule Sur (Radio Cristalina 96.3 FM)',
        titleEn: 'Panellist in Radio Broadcasting Studio • Maule Sur (Radio Cristalina 96.3 FM)',
        pageSrc: '/maule_sur_radio.jpg'
      },
      {
        titleEs: 'Plataforma Digital de Noticias Maule Red (GitHub Pages)',
        titleEn: 'Maule Red Digital Grassroots News Platform (GitHub Pages)',
        pageSrc: '/maulered_web.png'
      },
      {
        titleEs: 'Logotipo Oficial • MauleRed Red de Medios Comunitaria',
        titleEn: 'Official Logo • MauleRed Community Media Network',
        pageSrc: '/maulered_logo.png'
      },
      {
        titleEs: 'Aplicación Móvil y PWA • MauleRed Comunitaria',
        titleEn: 'Mobile App & PWA • MauleRed Community',
        pageSrc: '/logos/maulered_app_icon.png'
      },
      {
        titleEs: 'Logotipo Oficial • Red Maule Sur & Radio Comunitaria (Chucao de los Andes)',
        titleEn: 'Official Logo • Maule Sur Network & Community Radio (Chucao de los Andes)',
        pageSrc: '/logos/logo_chucao_andes.png'
      }
    ],
    code: 'OPS-COM-04',
    source: 'Red de Medios Comunitaria del Maule & Radio Cristalina 96.3 FM',
    impactEs: 'Fundación y coordinación de la Red de Medios Comunitaria del Maule (MauleRed) y panelista regular en el programa radial "El Maule Sur También Existe" en Radio Cristalina 96.3 FM. Creador del Taller de Corresponsales Populares, capacitando a vecinos rurales en reportería comunitaria, defensa del agua y soberanía de la información.',
    impactEn: 'Founder and coordinator of the Maule Community Media Network (MauleRed) and regular broadcaster on "El Maule Sur También Existe" on Radio Cristalina 96.3 FM. Creator of the Popular Reporters Workshop training rural neighbors in grassroots journalism, water defense, and community information sovereignty.',
    methodologyEs: [
      'Plataforma digital independiente de noticias MauleRed (web y PWA comunitaria)',
      'Emisiones radiales en frecuencia modulada comunitaria 96.3 FM en el Maule Sur',
      'Taller de Corresponsales Populares para vocerías y vecinos del campo',
      'Difusión pedagógica de problemas hídricos, monocultivos y derechos territoriales'
    ],
    methodologyEn: [
      'Independent grassroots news platform MauleRed (web and community PWA)',
      'Community FM radio broadcasting on 96.3 FM across rural Maule Sur',
      'Grassroots Reporters Workshop empowering agricultural neighbors and youth',
      'Educational dissemination on local water struggles, timber plantations, and territorial rights'
    ],
    tags: ['Red Comunitaria del Maule', 'MauleRed', 'Radio Cristalina', 'Maule Sur', 'Corresponsales', 'Comunitaria', 'Logo Oficial']
  },

  // 15. COMUNICACIONES: Campaña "Solo el pueblo ayuda al pueblo"
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
    mediaType: 'plate',
    src: '/campana_solo_el_pueblo_ayuda.jpg',
    availablePages: [
      {
        titleEs: 'Fotografía: Caravana 4x4 y Logística de Terreno "Solo el pueblo ayuda al pueblo"',
        titleEn: 'Photography: 4x4 Caravan & Field Logistics "Solo el pueblo ayuda al pueblo"',
        pageSrc: '/campana_solo_el_pueblo_ayuda.jpg'
      },
      {
        titleEs: 'Monitoreo Comunitario de Humedales (ONG Raíz EcoAcción)',
        titleEn: 'Community Wetland Monitoring (ONG Raíz EcoAcción)',
        pageSrc: '/expeditions/ong_raiz_wetland_group.jpg'
      },
      {
        titleEs: 'Reforestación Comunitaria con Especies Nativas',
        titleEn: 'Community Native Tree Reforestation',
        pageSrc: '/expeditions/ong_raiz_native_tree_planting.jpg'
      }
    ],
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

  // 15b. COMUNICACIONES & GRASSROOTS: Memoria y Dignidad Maule - Museo Digital
  {
    id: 'memoria-dignidad-maule',
    type: 'comms',
    titleEs: 'Memoria y Dignidad Maule: Museo Digital de Derechos Humanos',
    titleEn: 'Memoria y Dignidad Maule: Digital Museum of Human Rights',
    subtitleEs: 'Museo virtual de memoria histórica y derechos humanos de la Región del Maule, Chile',
    subtitleEn: 'Virtual museum of historical memory and human rights in Maule Region, Chile',
    country: 'Chile',
    city: 'Talca / Maule',
    flag: '🇨🇱',
    lat: -35.43,
    lng: -71.66,
    date: '2024-2026',
    roleEs: 'Desarrollador & Investigador',
    roleEn: 'Developer & Researcher',
    mediaType: 'plate',
    src: '/expeditions/memoria_dignidad_maule.png',
    url: 'https://danisantanderurrutia-coder.github.io/memoria-y-dignidad-maule/',
    availablePages: [
      {
        titleEs: 'Plataforma Oficial Memoria y Dignidad Maule (Museo Digital)',
        titleEn: 'Official Memoria y Dignidad Maule Platform (Digital Museum)',
        pageSrc: '/expeditions/memoria_dignidad_maule.png'
      },
      {
        titleEs: 'Logotipo Oficial • Memoria y Dignidad Maule',
        titleEn: 'Official Logo • Memoria y Dignidad Maule',
        pageSrc: '/logos/memoria_dignidad_logo.svg'
      }
    ],
    code: 'OPS-COM-06',
    source: 'Memoria y Dignidad Maule (Museo Virtual)',
    impactEs: 'Desarrollo del museo virtual de memoria histórica y derechos humanos de la Región del Maule, Chile, documentando sitios de memoria, testimonios y preservación del patrimonio territorial.',
    impactEn: 'Development of the virtual museum of historical memory and human rights in the Maule Region, Chile, documenting memorial sites, oral histories, and community heritage.',
    methodologyEs: [
      'Museo virtual interactivo de derechos humanos y sitios de memoria del Maule',
      'Mapeo territorial y preservación de archivos orales e históricos',
      'Plataforma web abierta disponible en GitHub Pages'
    ],
    methodologyEn: [
      'Interactive virtual museum of human rights and memory sites in Maule',
      'Spatial mapping and archival preservation of oral and historical testimonies',
      'Open-access web platform published on GitHub Pages'
    ],
    tags: ['Memoria Histórica', 'Derechos Humanos', 'Maule', 'Museo Digital', 'GitHub Pages']
  },

  // 16. ARTE & CULTURA: Brigada Paulina Aguirre - Propaganda & Serigrafía Callejera
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

  // 17. ARTE & CULTURA: Rap Beauchef & Dueñas de la Voz - Arena Universitaria & Circuito Internacional
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
    src: '/logos/duenas-de-la-voz.jpg',
    availablePages: [
      {
        titleEs: 'Gran Final "Dueñas de la Voz" • Logotipo & Afiche Oficial',
        titleEn: 'Grand Final "Dueñas de la Voz" • Official Logo & Artwork',
        pageSrc: '/logos/duenas-de-la-voz.jpg'
      },
      {
        titleEs: 'Rap Beauchef en Vivo • Batalla de Rimas en Anfiteatro FCFM',
        titleEn: 'Rap Beauchef Live • Freestyle Battle in FCFM Amphitheater',
        pageSrc: '/logos/rap-beauchef.jpg'
      },
      {
        titleEs: 'Sticker & Tipografía Oficial • Rap Beauchef (Dossier-Rap GitHub)',
        titleEn: 'Official Sticker & Typography • Rap Beauchef (Dossier-Rap GitHub)',
        pageSrc: '/logos/rap-beauchef-sticker.png'
      },
      {
        titleEs: 'Registro Audiovisual 4K • Gran Final Queena en YouTube',
        titleEn: 'Official 4K Video Record • Queena Grand Final on YouTube',
        pageSrc: '/youtube_covers/NcDejj3NKXo.jpg'
      },
      {
        titleEs: 'Cyphers y Encuentro de Rimas Internacional (Japón, Perú, México, Argentina)',
        titleEn: 'International Cyphers & Rhyme Sessions (Japan, Peru, Mexico, Argentina)',
        pageSrc: '/instagram_covers/B3YgyJxgiBS.jpg'
      }
    ],
    techStack: ['Sony 4K', 'DaVinci Resolve', 'OBS Studio', 'Audio Multicanal'],
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

  // 18. ARTE & CULTURA: Cuarentena Rap - Liga Federal Latinoamericana en Streaming
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
    src: '/logos/cuarentena-rap-official.png',
    availablePages: [
      {
        titleEs: 'Logotipo e Identidad Oficial • Cuarentena Rap (Médico de la Peste QRTN)',
        titleEn: 'Official Logo & Insignia • Cuarentena Rap (Plague Doctor QRTN)',
        pageSrc: '/logos/cuarentena-rap-official.png'
      },
      {
        titleEs: 'Streaming en Vivo • Batalla de Maestros y Cuartos de Final',
        titleEn: 'Live Streaming • Masters Battle & Quarterfinals',
        pageSrc: '/youtube_covers/B2XrNxHxwrA.jpg'
      },
      {
        titleEs: 'Fase de Karmas • Torneo Panamericano de Beatbox & Spoken Word',
        titleEn: 'Karma Phase • Pan-American Beatbox Tournament & Spoken Word',
        pageSrc: '/instagram_covers/CFqKMjHnKDc.jpg'
      },
      {
        titleEs: 'Crizzo Campeón • Gran Final y Coronación de Temporada',
        titleEn: 'Crizzo Champion • Grand Season Finale & Coronation',
        pageSrc: '/instagram_covers/CKu2R9qgy3Q.jpg'
      }
    ],
    techStack: ['OBS Studio', 'DaVinci Resolve', 'YouTube Live', 'Discord API'],
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

  // 19. I+D & INNOVACIÓN: Agrotech & AgriTwin - Gemelo Digital Agrícola 3D & Telemetría IoT
  {
    id: 'rd-agrotech-agritwin',
    type: 'rd',
    titleEs: 'Agrotech & AgriTwin: Gemelo Digital Agrícola 3D & Telemetría IoT',
    titleEn: 'Agrotech & AgriTwin: Agricultural Digital Twin & Soil IoT Telemetry',
    subtitleEs: 'Arquitectura Principio Árbol: Fundo Meniel 3D, Sensores FDR, PRV y Satélites // Maule, Chile',
    subtitleEn: 'Tree Principle Architecture: Fundo Meniel 3D, Soil Sensors, PRV & Satellites // Maule, Chile',
    country: 'Chile',
    city: 'Valle del Maule / Cuenca Longaví',
    flag: '🇨🇱',
    lat: -35.96,
    lng: -71.68,
    date: '2023-2026',
    roleEs: 'Arquitecto de Software & Diseñador de Gemelo Digital 3D',
    roleEn: 'Lead Software Architect & Digital Twin Designer',
    mediaType: 'plate',
    src: '/agrotech/agritwin_3d_twin.jpg',
    availablePages: [
      {
        titleEs: 'Gemelo Digital 3D: Fundo Meniel & Simulación Espacial (CesiumJS / Three.js)',
        titleEn: '3D Digital Twin: Fundo Meniel & Spatial Simulation (CesiumJS / Three.js)',
        pageSrc: '/agrotech/agritwin_3d_twin.jpg'
      },
      {
        titleEs: 'Arquitectura del Principio Árbol: Suite AgroTwin y Telemetría Multirrama',
        titleEn: 'Tree Principle Architecture: AgroTwin Suite & Multi-Branch Telemetry',
        pageSrc: '/agrotech/agritwin_tree_principle.jpg'
      },
      {
        titleEs: 'Monitoreo de Suelos: Sensores FDR, Telemetría IoT LoRaWAN y Microclima',
        titleEn: 'Soil Monitoring: FDR Moisture Sensors, IoT LoRaWAN Telemetry & Microclimate',
        pageSrc: '/agrotech/agritwin_iot_sensors.jpg'
      },
      {
        titleEs: 'Zonificación de Paisaje y Manejo de Pastoreo Racional Voisin (PRV)',
        titleEn: 'Landscape Zoning & Voisin Rational Grazing (PRV) Simulation',
        pageSrc: '/agrotech/agritwin_landscape.jpg'
      },
      {
        titleEs: 'Insignia & Logotipo Oficial • Agrotech & AgriTwin Platform',
        titleEn: 'Official Logo & Insignia • Agrotech & AgriTwin Platform',
        pageSrc: '/agrotech/agritwin_logo.png'
      }
    ],
    url: 'https://github.com/danisantanderurrutia-coder/agritwin-app',
    techStack: ['CesiumJS', 'Three.js', 'React', 'Python', 'FastAPI', 'IoT LoRaWAN', 'Copernicus Sentinel-2', 'QGIS'],
    code: 'OPS-RD-AGRO',
    source: 'GitHub: danisantanderurrutia-coder/agritwin-app & agrotech',
    impactEs: 'Desarrollo de una suite integral de gemelo digital agrícola (AgriTwin / AgroTech) construida bajo la arquitectura del "Principio Árbol". Integra modelación tridimensional interactiva (CesiumJS y shaders Three.js) del predio agrícola (Fundo Meniel en la cuenca del Maule), tranques de acumulación de 18.500 m³, potreros de pastoreo regenerativo (PRV), telemetría de suelo en tiempo real (sensores FDR de humedad, temperatura y potencial mátrico) e índices satelitales automáticos Sentinel-2 (NDVI/NDRE), logrando reducciones proyectadas de hasta 35% en consumo de agua de riego.',
    impactEn: 'Engineered a comprehensive agricultural digital twin suite (AgriTwin / AgroTech) founded on the "Tree Principle" decoupled architecture. Integrates high-fidelity 3D spatial visualization (CesiumJS & Three.js shaders) of commercial farmland (Fundo Meniel in the Maule basin), 18,500 m³ retention reservoirs, regenerative Voisin grazing (PRV), real-time soil telemetry (FDR moisture, temperature, and matric potential sensors), and automated Sentinel-2 multispectral vegetation indices (NDVI/NDRE), yielding up to 35% irrigation water savings.',
    methodologyEs: [
      'Arquitectura Principio Árbol: Soberanía endógena desacoplada (Rama Predio, Rama Mesa Vecinal, Rama Cuenca Longaví)',
      'Visualización 3D satelital de alta resolución en navegador sin tokens restrictivos (CesiumJS + Esri World Imagery)',
      'Integración de telemetría IoT de suelo (sondas FDR) con pipeline satelital Sentinel-2 para prevención de estrés hídrico',
      'Modelación de infraestructura regenerativa: zanjas de infiltración Keyline y tranques de bio-retención'
    ],
    methodologyEn: [
      'Tree Principle Architecture: Decoupled endogenous sovereignty (Farm Twin, Community Board, Longaví Catchment)',
      'High-resolution browser-based 3D satellite visualization without paywalled tokens (CesiumJS + Esri World Imagery)',
      'Real-time IoT soil telemetry (FDR probes) coupled with Sentinel-2 satellite pipeline to prevent crop water stress',
      'Regenerative engineering modeling: Keyline infiltration contours and bio-retention reservoirs'
    ],
    tags: ['AgriTwin', 'Agrotech', 'Gemelo Digital 3D', 'CesiumJS', 'Three.js', 'IoT Suelos', 'Copernicus', 'Maule', 'Chile', 'GitHub']
  },

  // 20. I+D & INNOVACIÓN: Ciencia i Territorio - Soberanía del Conocimiento & Ciencia Popular
  {
    id: 'rd-ciencia-territorio',
    type: 'rd',
    titleEs: 'Ciencia i Territorio: Soberanía del Conocimiento & Divulgación Popular',
    titleEn: 'Ciencia i Territorio: Knowledge Sovereignty & Popular Science Platform',
    subtitleEs: 'Plataforma de Divulgación Biocultural, Justicia Ambiental y Ciencia Abierta sin Paywalls',
    subtitleEn: 'Biocultural Popular Science, Environmental Justice & Open Science Without Paywalls',
    country: 'Chile',
    city: 'Red Territorial (Santiago, Maule, Valdivia, Patagonia)',
    flag: '🇨🇱',
    lat: -39.81,
    lng: -73.24,
    date: '2023-2026',
    roleEs: 'Fundador & Director de Plataforma',
    roleEn: 'Founder & Platform Director',
    mediaType: 'plate',
    src: '/ciencia_territorio/earth_concept.jpg',
    availablePages: [
      {
        titleEs: 'Manifiesto Conceptual: Tierra, Evolución y Soberanía Científica Popular',
        titleEn: 'Conceptual Manifesto: Earth, Evolution & Popular Scientific Sovereignty',
        pageSrc: '/ciencia_territorio/earth_concept.jpg'
      },
      {
        titleEs: 'Nodo Satelital & Tecnologías Ciborg para la Observación Terrestre',
        titleEn: 'Satellite Node & Cyborg Technologies for Earth Observation',
        pageSrc: '/ciencia_territorio/ciborg_satellite.jpg'
      },
      {
        titleEs: 'Nodo Territorio: Cartografía Popular & Ciencia Comunitaria en Cuencas',
        titleEn: 'Territory Node: Community Cartography & Catchment Citizen Science',
        pageSrc: '/ciencia_territorio/nodo_territorio.jpg'
      },
      {
        titleEs: 'Expedición Científica en Terreno: Ecosistemas Australes y Patagonia',
        titleEn: 'Field Scientific Expedition: Austral Ecosystems & Patagonia',
        pageSrc: '/ciencia_territorio/patagonia_expedition.jpg'
      },
      {
        titleEs: 'Emblema e Identidad Oficial • Ciencia i Territorio',
        titleEn: 'Official Insignia & Visual Identity • Ciencia i Territorio',
        pageSrc: '/ciencia_territorio/ciencia_territorio_logo.png'
      }
    ],
    url: 'https://github.com/danisantanderurrutia-coder',
    techStack: ['HTML5 / Modern JS', 'CSS Grid', 'GIS Cartography', 'Ciencia Abierta', 'Comms Estratégica'],
    code: 'OPS-RD-CIT',
    source: 'Ciencia i Territorio // Plataforma & Nodos Territoriales',
    impactEs: 'Creación de "Ciencia i Territorio", una plataforma de divulgación científica, justicia ambiental y comunicación comunitaria inspirada en la ciencia abierta sin barreras ni paywalls (en tributo a Paulo Freire y Alexandra Elbakyan). Articula el conocimiento geofísico de cuencas, ecología de suelos, bioacústica y soberanía de datos directamente con asambleas vecinales, escuelas rurales y comités ambientales.',
    impactEn: 'Founded "Ciencia i Territorio", an open-access scientific dissemination and environmental justice platform designed to break paywalls and bring high-level earth sciences to frontline communities (inspired by Paulo Freire & Alexandra Elbakyan). Connects catchment geophysics, soil ecology, bioacoustics, and data sovereignty directly with rural assemblies and grassroots water committees.',
    methodologyEs: [
      'Divulgación popular y ciencia comunitaria: democratización de conceptos geofísicos y ecológicos complejos',
      'Arquitectura de plataforma web abierta con identidad gráfica de vanguardia y recursos educativos libres',
      'Nodos territoriales: vinculación de investigaciones en terreno (Patagonia, Maule, cuenca central) con movimientos sociales',
      'Justicia ambiental y defensa del territorio: insumos técnicos para la participación ciudadana incidente'
    ],
    methodologyEn: [
      'Popular education and community science: translating complex geophysics and ecological data into accessible tools',
      'Open-web digital architecture featuring vanguard visual identity and free educational assets',
      'Territorial nodes: bridging empirical fieldwork (Patagonia, Maule, Central Chile) with social movements',
      'Environmental justice and territorial defense: technical evidence supporting grassroots legal and water advocacy'
    ],
    tags: ['Ciencia i Territorio', 'Ciencia Abierta', 'Soberanía del Conocimiento', 'Geofísica', 'Educación Popular', 'Chile', 'I+D']
  },

  // 21. I+D & INNOVACIÓN: Bioacústica Vegetal & Geofísica en Bosques Nativos
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
    src: '/expeditions/cauquenes_geophysics_ves.jpg',
    availablePages: [
      {
        titleEs: 'Sondaje Eléctrico Vertical (SEV / VES) en Cauquenes',
        titleEn: 'Vertical Electrical Sounding (VES) in Cauquenes',
        pageSrc: '/expeditions/cauquenes_geophysics_ves.jpg'
      },
      {
        titleEs: 'Monitoreo Pluviométrico en Cerro Molco, Cauquenes',
        titleEn: 'Rain Gauge Installation at Cerro Molco, Cauquenes',
        pageSrc: '/expeditions/cauquenes_rain_gauge.jpg'
      },
      {
        titleEs: 'Evaluación Ecológica y Biodiversidad en Cerro Longaví',
        titleEn: 'Ecological Biodiversity Assessment at Cerro Longaví',
        pageSrc: '/expeditions/longavi_biodiversity_survey.jpg'
      }
    ],
    url: 'https://github.com/danisantanderurrutia-coder',
    code: 'OPS-RD-01',
    source: 'Proyectos de I+D en Desarrollo',
    impactEs: 'Proyecto de I+D en desarrollo (concursos de innovación): Integración de geofísica y bioacústica vegetal para la evaluación de la salud de los ecosistemas, orientado a cuantificar el estado biofísico, la resistividad radicular y el estrés hídrico en bosques nativos y cuencas del centro-sur de Chile.',
    impactEn: 'R&D project in development (innovation contests): Integrating geophysics and plant bioacoustics for ecosystem health assessment, focused on quantifying biophysical status, root-zone resistivity, and water stress in native forests and catchments of central-southern Chile.',
    methodologyEs: [
      'Integración de prospección geofísica (SEV) y sensores de bioacústica vegetal no invasiva',
      'Evaluación cuantitativa de la salud de ecosistemas y estrés hídrico en bosques nativos del centro-sur de Chile',
      'Formulación técnica para fondos de innovación y competiciones internacionales'
    ],
    methodologyEn: [
      'Integration of geophysical prospecting (VES) and non-invasive plant bioacoustics sensors',
      'Quantitative ecosystem health and water stress assessment in native forests of central-southern Chile',
      'Technical formulation for international innovation grants and competitions'
    ],
    tags: ['Chile', 'Bosques Nativos', 'Centro-Sur', 'Geofísica', 'Bioacústica', 'I+D']
  },

  // 20. I+D & INNOVACIÓN: Smart Food Parks, AgriTwin 3D & Permacultura para Ciudades Europeas ODS
  {
    id: 'rd-smart-food-parks',
    type: 'rd',
    titleEs: 'Smart Food Parks & AgriTwin 3D: Ciudades ODS y Gemelo Digital Agrícola',
    titleEn: 'Smart Food Parks & AgriTwin 3D: SDG Cities & Agricultural Digital Twin',
    subtitleEs: 'Uniendo Naturaleza, Simulación Hidrológica y Tecnología para Ciudades ODS // Permacultura (EPAC)',
    subtitleEn: 'Uniting Nature, Hydrological Simulation & Technology for SDG Cities // Permaculture Design (EPAC)',
    country: 'Europa',
    city: 'Ciudades Europeas ODS',
    flag: '🇪🇺',
    lat: 53.55,
    lng: 9.99,
    date: '2023-2026',
    roleEs: 'Arquitecto de Gemelos Digitales & Diseñador en Permacultura (CDP)',
    roleEn: 'Digital Twin Architect & Certified Permaculture Designer (CDP)',
    mediaType: 'plate',
    src: '/expeditions/smart_food_parks_ui.jpg',
    availablePages: [
      {
        titleEs: 'Gemelo Digital y Telemetría IoT en Smart Food Parks / AgriTwin 3D',
        titleEn: 'Digital Twin & IoT Telemetry in Smart Food Parks / AgriTwin 3D',
        pageSrc: '/expeditions/smart_food_parks_ui.jpg'
      },
      {
        titleEs: 'Arquitectura de Datos y Gemelo Digital en 3D',
        titleEn: 'Data Architecture & 3D Digital Twin Engine Blueprint',
        pageSrc: '/expeditions/smart_food_parks_architecture.jpg'
      }
    ],
    url: 'https://github.com/danisantanderurrutia-coder/agritwin-app',
    code: 'OPS-RD-02',
    source: 'GitHub: danisantanderurrutia-coder/agritwin-app • EPAC',
    impactEs: 'Desarrollo del ecosistema "Smart Food Parks" para ciudades europeas en el marco de los ODS y del repositorio abierto "AgriTwin 3D" (Gemelo Digital Agrícola, Simulación Hidrológica y Manejo Regenerativo), articulando diseño permacultural certificado (CDP EPAC) con telemetría IoT y visualización 3D interactiva.',
    impactEn: 'Development of the "Smart Food Parks" initiative for European SDG cities and the open-source "AgriTwin 3D" platform (Agricultural Digital Twin, Hydrological Simulation & Regenerative Management), combining certified permaculture design (CDP EPAC) with IoT telemetry and interactive 3D visualization.',
    methodologyEs: [
      'Smart Food Parks: integración de infraestructura verde y tecnología abierta para ciudades europeas ODS',
      'AgriTwin 3D (GitHub): Gemelo digital agrícola, simulación hidrológica y manejo regenerativo',
      'Diseño en Permacultura Certificado (CDP) por la Escuela Chilena de Permacultura y Agroecología (EPAC)'
    ],
    methodologyEn: [
      'Smart Food Parks: uniting green infrastructure and open-source technology for European SDG cities',
      'AgriTwin 3D (GitHub): Agricultural digital twin, hydrological simulation, and regenerative management',
      'Certified Permaculture Designer (CDP), Chilean School of Permaculture and Agroecology (EPAC)'
    ],
    tags: ['AgriTwin 3D', 'Smart Food Parks', 'Ciudades Europeas ODS', 'Permacultura', 'GitHub', 'I+D']
  },

  // 21. I+D & INVESTIGACIÓN: Modelación de Impacto de Incendios en Cuencas (CV)
  {
    id: 'rd-incendios-cuencas',
    type: 'rd',
    titleEs: 'Modelación del Impacto de Incendios en Ecosistemas de Cuencas',
    titleEn: 'Modeling Forest Fire Impacts on Watershed Ecosystems',
    subtitleEs: 'Investigación Científica en Cuencas del Centro-Sur // Balance Hídrico y Suelos',
    subtitleEn: 'Scientific Research on Central-Southern Watersheds // Water Balance & Soil Dynamics',
    country: 'Chile',
    city: 'Centro-Sur',
    flag: '🇨🇱',
    lat: -36.20,
    lng: -71.90,
    date: '2023-2025',
    roleEs: 'Investigador Principal (Modelación de Cuencas)',
    roleEn: 'Lead Researcher (Watershed Modeling)',
    mediaType: 'plate',
    src: '/expeditions/longavi_biodiversity_survey.jpg',
    availablePages: [
      {
        titleEs: 'Catastro Ecológico y Parches de Bosque Nativo en Cerro Longaví',
        titleEn: 'Ecological Survey & Native Forest Patches at Cerro Longaví',
        pageSrc: '/expeditions/longavi_biodiversity_survey.jpg'
      },
      {
        titleEs: 'Monitoreo Comunitario de Humedales y Ecosistemas Acuáticos',
        titleEn: 'Community Wetland & Aquatic Ecosystem Monitoring',
        pageSrc: '/expeditions/ong_raiz_wetland_group.jpg'
      }
    ],
    url: 'https://github.com/danisantanderurrutia-coder/resumof',
    code: 'OPS-RD-03',
    source: 'Investigación de Cuencas Hidrográficas & Balance Hídrico',
    impactEs: 'Investigación orientada a modelar cuantitativamente el impacto de los incendios forestales en ecosistemas de cuencas, integrando física de suelos, escorrentía post-fuego y balance hídrico entre sistemas acuáticos y terrestres en el centro-sur de Chile.',
    impactEn: 'Research focused on quantitatively modeling forest fire impacts on watershed ecosystems, integrating soil physics, post-fire runoff, and water balance between aquatic and terrestrial systems in central-southern Chile.',
    methodologyEs: [
      'Modelación del impacto de incendios forestales sobre el balance hídrico de cuencas hidrográficas',
      'Acoplamiento de la dinámica física de suelos entre sistemas acuáticos y terrestres',
      'Evaluación de severidad post-fuego, erosión y resiliencia hidrológica en cabeceras de cuenca'
    ],
    methodologyEn: [
      'Modeling of forest fire impacts on watershed hydrological balances',
      'Coupled soil physical dynamics across aquatic and terrestrial ecosystem boundaries',
      'Post-fire burn severity, erosion, and headwater catchment resilience assessment'
    ],
    techStack: ['QGIS', 'R Modeling', 'Python', 'Balance Hídrico'],
    tags: ['Incendios', 'Cuencas', 'Balance Hídrico', 'Suelos', 'Chile', 'I+D']
  },

  // 22. ASESORÍA EN POLÍTICAS PÚBLICAS: Ordenamiento de Cuencas & Transición Productiva (CV)
  {
    id: 'rd-transicion-cuencas',
    type: 'policy',
    titleEs: 'Planes de Ordenamiento de Cuencas y Transición Productiva',
    titleEn: 'Watershed Management Plans & Agricultural Production Transition',
    subtitleEs: 'Gestión de Cuencas y Transición Agroforestal // Permacultura (EPAC)',
    subtitleEn: 'Watershed Management & Agroforestry Transition // Permaculture (EPAC)',
    country: 'Chile',
    city: 'Maule',
    flag: '🇨🇱',
    lat: -35.43,
    lng: -71.66,
    date: '2022-2025',
    roleEs: 'Asesor en Política Ambiental & Diseñador en Permacultura (CDP)',
    roleEn: 'Environmental Policy Advisor & Certified Permaculture Designer (CDP)',
    mediaType: 'plate',
    src: '/expeditions/cauquenes_rain_gauge.jpg',
    availablePages: [
      {
        titleEs: 'Instalación de Monitoreo Pluviométrico en Cerro Molco (Cauquenes)',
        titleEn: 'Rainfall Monitoring Installation at Cerro Molco (Cauquenes)',
        pageSrc: '/expeditions/cauquenes_rain_gauge.jpg'
      },
      {
        titleEs: 'Sondaje Eléctrico Vertical (SEV) para Hidrogeología en Terreno',
        titleEn: 'Vertical Electrical Sounding (VES) for Field Hydrogeology',
        pageSrc: '/expeditions/cauquenes_geophysics_ves.jpg'
      }
    ],
    url: 'https://github.com/danisantanderurrutia-coder/agritwin-app',
    code: 'OPS-RD-04',
    source: 'Asesoría en Política Ambiental & Permacultura EPAC',
    impactEs: 'Desarrollo de planes de ordenamiento de cuencas y gestión de la transición productiva agrícola y agroforestal frente al déficit hídrico, aplicando diseño permacultural (CDP EPAC) y prospección hidrogeofísica de resistividad y nivel freático en comunidades rurales.',
    impactEn: 'Development of watershed management plans and agricultural production transition strategies under water scarcity, applying permaculture design (CDP EPAC) and hydrogeophysical resistivity and water table exploration in rural communities.',
    methodologyEs: [
      'Formulación de planes de ordenamiento de cuencas y transición productiva agroecológica',
      'Diseño en Permacultura Certificado (CDP) por la Escuela Chilena de Permacultura y Agroecología (EPAC)',
      'Integración de prospección hidrogeofísica (SEV/VES), nivel freático y balance hídrico territorial'
    ],
    methodologyEn: [
      'Development of watershed management plans and agroecological production transition',
      'Certified Permaculture Designer (CDP), Chilean School of Permaculture and Agroecology (EPAC)',
      'Integration of hydrogeophysical exploration (VES), water table profiling, and watershed water balance'
    ],
    techStack: ['QGIS', 'SEV / VES', 'Permacultura', 'Agroecología', 'Planificación Territorial'],
    tags: ['Ordenamiento de Cuencas', 'Transición Agrícola', 'Permacultura', 'EPAC', 'Maule', 'I+D']
  },

  // ==============================================================
  // SECCIÓN: PUBLICACIONES, INFORMES INTERNACIONALES & PRENSA (8)
  // ==============================================================

  // 26. PUBLICACIONES: EPN 2023-2024 Spotlight on Burning Biomass (Parral, Chile)
  {
    id: 'pub-epn-biomass',
    type: 'publications',
    titleEs: 'Spotlight on Burning Biomass: Oposición Comunitaria en Parral (EPN & GFC)',
    titleEn: 'Spotlight on Burning Biomass: Community Opposition in Parral (EPN & GFC)',
    subtitleEs: 'Environmental Paper Network & Global Forest Coalition // Caso de Estudio Parral, Maule',
    subtitleEn: 'Environmental Paper Network & Global Forest Coalition // Parral Case Study, Maule',
    country: 'Chile / Alemania',
    city: 'Parral / Bonn',
    flag: '📑',
    lat: -36.14,
    lng: -71.82,
    date: '2023-2024',
    roleEs: 'Autor Técnico Principal // Spotlight',
    roleEn: 'Lead Technical Author // Spotlight',
    mediaType: 'press',
    src: '/press_covers/epn_parral_biomass.jpg',
    availablePages: [
      {
        titleEs: 'Spotlight EPN: Oposición Comunitaria a Central de Biomasa en Parral, Maule',
        titleEn: 'EPN Spotlight: Community Opposition to Biomass Plant in Parral, Maule',
        pageSrc: '/press_covers/epn_parral_biomass.jpg'
      },
      {
        titleEs: 'Portada Oficial del Informe Internacional EPN 2024',
        titleEn: 'Official Cover of EPN 2024 International Report',
        pageSrc: '/press_covers/epn_cover.png'
      },
      {
        titleEs: 'Investigación sobre Central de Biomasa en Parral, Maule',
        titleEn: 'Investigation on Parral Biomass Power Plant, Maule',
        pageSrc: '/press_covers/epn_screen.png'
      },
      {
        titleEs: 'Logotipo de la Red Europea de Justicia Ambiental (ENJUST)',
        titleEn: 'European Environmental Justice Network (ENJUST) Logo',
        pageSrc: '/expeditions/enjust_logo.png'
      }
    ],
    url: 'https://environmentalpaper.org/2023/06/spotlight-on-burning-biomass-for-energy-in-south-america-community-opposition-to-a-power-plant-in-parral-chile/',
    code: 'OPS-PUB-01',
    source: 'Environmental Paper Network (EPN) & Global Forest Coalition',
    impactEs: 'Investigación internacional en terreno sobre la resistencia de las comunidades de Parral (Maule) contra la instalación de una termoeléctrica a biomasa forestal, desmontando la falsa neutralidad de carbono y las subvenciones europeas bajo la directiva RED III.',
    impactEn: 'International investigation examining grassroots resistance against a forest biomass power plant in Parral (Maule, Chile), exposing false carbon neutrality claims and EU RED III bioenergy subsidies.',
    methodologyEs: [
      'Investigación empírica en terreno en Parral, Maule y cuencas vecinas',
      'Desglose del balance de carbono bajo la directiva europea RED III',
      'Auditoría a subsidios de bioenergía y articulación con redes de justicia ambiental'
    ],
    methodologyEn: [
      'Empirical fieldwork across Parral, Maule, and neighboring watersheds',
      'Carbon balance audit under the European RED III directive',
      'Scrutiny of bioenergy subsidies and environmental justice alliance building'
    ],
    tags: ['EPN', 'Parral', 'Maule', 'Biomasa', 'RED III', 'Carbon Accounting', 'Publicación']
  },

  // 27. PUBLICACIONES: Tetralogía OLCA: Ser libres al borde del abismo (ESTÁTICO)
  {
    id: 'pub-olca-tetralogia',
    type: 'publications',
    titleEs: 'Ser libres al borde del abismo (Tetralogía de Ensayos Político-Ecológicos)',
    titleEn: 'Being Free on the Brink of the Abyss (4-Part Political Ecology Treatise)',
    subtitleEs: 'Observatorio Latinoamericano de Conflictos Ambientales (OLCA, 2025)',
    subtitleEn: 'Latin American Observatory of Environmental Conflicts (OLCA, 2025)',
    country: 'Latinoamérica',
    city: 'Ensayos Filosóficos',
    flag: '📚',
    lat: 0,
    lng: 0,
    isStatic: true,
    date: '2025',
    roleEs: 'Autor del Tratado',
    roleEn: 'Author of the Treatise',
    mediaType: 'press',
    src: '/press_covers/olca_screen.png',
    availablePages: [
      {
        titleEs: 'Portada y Publicación Oficial en el Portal OLCA',
        titleEn: 'Official Cover & Publication on OLCA Portal',
        pageSrc: '/press_covers/olca_screen.png'
      },
      {
        titleEs: 'Segunda Entrega: Se hunde el Titanic (La agonía estatal)',
        titleEn: 'Part 2: The Sinking Titanic (The State in Agony)',
        pageSrc: '/press_covers/olca_1_screen.png'
      }
    ],
    url: 'https://olca.cl/articulo/nota.php?id=111288',
    code: 'OPS-PUB-02',
    source: 'Observatorio Latinoamericano de Conflictos Ambientales (OLCA)',
    impactEs: 'Obra ensayística de cuatro partes sobre la crisis civilizatoria: 1. El colapso económico; 2. Se hunde el Titanic (la agonía de los Estados); 3. Cariño, ¿qué nos pasó? (la domesticación moderna); 4. La llamada de la selva (autonomía comunitaria y ecología regenerativa).',
    impactEn: 'Four-part philosophical and political ecology work: 1. Economic Collapse; 2. The Sinking Titanic (Leviathan agony); 3. Darling, What Happened to Us? (Modern domestication); 4. The Call of the Wild (Community autonomy and regenerative ecology).',
    methodologyEs: [
      'Crítica a la economía política extractivista y límites del crecimiento',
      'Genealogía de la domesticación urbana y alienación ecosistémica',
      'Propuestas de autonomía territorial comunitaria y Buen Vivir'
    ],
    methodologyEn: [
      'Critique of extractivist political economy and limits to growth',
      'Genealogy of urban domestication and ecosystem alienation',
      'Community territorial autonomy and Good Living alternatives'
    ],
    tags: ['OLCA', 'Autonomía', 'Decrecimiento', 'Ecología Política', 'Buen Vivir', 'Ensayos']
  },

  // 29. PUBLICACIONES: El Desconcierto: Noruega y Decrecimiento (2025)
  {
    id: 'pub-desconcierto',
    type: 'publications',
    titleEs: 'El Desconcierto: ¿Países tan ricos que no quieren crecer más? Noruega y Decrecimiento',
    titleEn: 'El Desconcierto: Countries Too Rich to Grow? Norway & World Degrowth Summit',
    subtitleEs: 'Crónica y cobertura internacional desde el mayor debate mundial en Noruega (2025)',
    subtitleEn: 'Dispatch and international coverage from the global degrowth summit in Norway (2025)',
    country: 'Noruega / Chile',
    city: 'Oslo / Santiago',
    flag: '🇳🇴',
    lat: 59.91,
    lng: 10.75,
    date: '2025',
    roleEs: 'Corresponsal Internacional & Analista',
    roleEn: 'International Correspondent & Analyst',
    mediaType: 'press',
    src: '/press_covers/desconcierto_noruega_screen.png',
    availablePages: [
      {
        titleEs: 'Reportaje en El Desconcierto: Noruega y el Debate Mundial sobre Decrecimiento',
        titleEn: 'El Desconcierto Feature: Norway and the World Degrowth Debate',
        pageSrc: '/press_covers/desconcierto_noruega_screen.png'
      },
      {
        titleEs: 'Portada Editorial El Desconcierto',
        titleEn: 'Editorial Cover El Desconcierto',
        pageSrc: '/press_covers/desconcierto_cover.png'
      }
    ],
    url: 'https://eldesconcierto.cl/2025/07/06/paises-tan-ricos-que-no-quieren-crecer-mas-noruega-acoge-mayor-debate-mundial-sobre-alternativas-al-crecimiento-economico-infinito',
    code: 'OPS-PUB-04',
    source: 'El Desconcierto // Periodismo de Investigación Internacional',
    impactEs: 'Crónica periodística y análisis socioeconómico desde Oslo sobre la Cumbre Mundial de Decrecimiento, evaluando la transición post-extractivista y alternativas al dogma del crecimiento infinito.',
    impactEn: 'Investigative dispatch and socio-economic analysis from Oslo covering the World Degrowth Summit, evaluating post-extractivist pathways and alternatives to perpetual growth.',
    methodologyEs: [
      'Cobertura periodística in situ del mayor encuentro global sobre decrecimiento en Noruega',
      'Análisis comparativo de bienestar social sin expansión material ni dependencia fósil',
      'Articulación de debates del Norte Global con las luchas socioambientales del Sur Global'
    ],
    methodologyEn: [
      'On-the-ground journalistic reporting at the world degrowth conference in Norway',
      'Comparative analysis of well-being detached from material throughput and fossil fuels',
      'Connecting Global North economic debates with Global South environmental justice struggles'
    ],
    tags: ['El Desconcierto', 'Noruega', 'Decrecimiento', 'Oslo', 'Economía Ecológica', 'Prensa']
  },

  // 30. PUBLICACIONES: Tomate Rojo: Humedales bajo fuego (2023)
  {
    id: 'pub-tomaterojo',
    type: 'publications',
    titleEs: 'Tomate Rojo: ¡Aguas, aguas! Humedales bajo fuego: ¿Qué sabemos y qué está haciendo Chile?',
    titleEn: 'Tomate Rojo: Waters Under Fire: What Do We Know and What Is Chile Doing?',
    subtitleEs: 'Red Plurinacional de Humedales (D. Santander, L. Muñoz, C. Bonifetti)',
    subtitleEn: 'Plurinational Wetland Network (D. Santander, L. Muñoz, C. Bonifetti)',
    country: 'Chile',
    city: 'Santiago / Maule',
    flag: '🇨🇱',
    lat: -33.44,
    lng: -70.65,
    date: '2023',
    roleEs: 'Investigador & Coautor',
    roleEn: 'Researcher & Co-Author',
    mediaType: 'press',
    src: '/press_covers/tomaterojo_humedales_fuego.jpg',
    availablePages: [
      {
        titleEs: 'Reportaje Investigativo: Humedales bajo fuego en Tomate Rojo',
        titleEn: 'Investigative Feature: Wetlands Under Fire in Tomate Rojo',
        pageSrc: '/press_covers/tomaterojo_humedales_fuego.jpg'
      },
      {
        titleEs: 'Investigación en Plataforma Tomate Rojo',
        titleEn: 'Article on Tomate Rojo Portal',
        pageSrc: '/press_covers/tomaterojo_screen.png'
      },
      {
        titleEs: 'Portada Editorial Tomate Rojo',
        titleEn: 'Editorial Cover Tomate Rojo',
        pageSrc: '/press_covers/tomaterojo_cover.jpg'
      }
    ],
    url: 'https://tomaterojo.cl/aguas-aguas-humedales-bajo-fuego-que-sabemos-y-que-esta-haciendo-chile/',
    code: 'OPS-PUB-05',
    source: 'Tomate Rojo & Red Plurinacional de Humedales',
    impactEs: 'Investigación colaborativa junto a la Red Plurinacional de Humedales de Chile exponiendo la vulnerabilidad crítica de los ecosistemas acuáticos ante los megaincendios y la negligencia en la protección de cabeceras de cuenca.',
    impactEn: 'Collaborative investigation with the Chilean Plurinational Wetland Network exposing the acute vulnerability of aquatic habitats to megafires and the lack of systemic watershed protection.',
    methodologyEs: [
      'Evaluación del régimen de fuego sobre humedales urbanos y rurales del centro-sur',
      'Diagnóstico de marcos regulatorios y vacíos en la ley de humedales urbanos',
      'Propuestas de cortafuegos ecosistémicos y rehumectación comunitaria'
    ],
    methodologyEn: [
      'Assessment of fire regimes across urban and rural wetlands in central-southern Chile',
      'Regulatory audit of legislative gaps in urban wetland conservation',
      'Ecosystem firebreak blueprints and community-led rewetting'
    ],
    tags: ['Tomate Rojo', 'Humedales', 'Incendios', 'Red Plurinacional', 'Agua', 'Prensa']
  },

  // 30B. PUBLICACIONES: El Regionalista: ¿Cómo nos preparamos para un colapso climático? (2023)
  {
    id: 'pub-regionalista-colapso',
    type: 'publications',
    titleEs: 'El Regionalista: ¿Cómo nos preparamos para un colapso climático?',
    titleEn: 'El Regionalista: How Do We Prepare for a Climate Collapse?',
    subtitleEs: 'Fundación Suelo (Carolina Miranda y Daniel Santander) // Enero 2023',
    subtitleEn: 'Fundación Suelo (Carolina Miranda & Daniel Santander) // January 2023',
    country: 'Chile',
    city: 'Rancagua / Maule',
    flag: '🇨🇱',
    lat: -34.17,
    lng: -70.74,
    date: '2023',
    roleEs: 'Coautor & Analista de Resiliencia Climática',
    roleEn: 'Co-Author & Climate Resilience Analyst',
    mediaType: 'press',
    src: '/press_covers/el_regionalista_colapso_climatico.jpg',
    availablePages: [
      {
        titleEs: 'Columna en El Regionalista: ¿Cómo nos preparamos para un colapso climático?',
        titleEn: 'El Regionalista Column: How Do We Prepare for a Climate Collapse?',
        pageSrc: '/press_covers/el_regionalista_colapso_climatico.jpg'
      }
    ],
    url: 'https://elregionalista.cl/como-nos-preparamos-para-un-colapso-climatico/',
    code: 'OPS-PUB-05B',
    source: 'El Regionalista & Fundación Suelo',
    impactEs: 'Columna de opinión y análisis prospectivo sobre resiliencia comunitaria, regeneración de suelos y adaptación descentralizada ante el colapso ecológico acelerado en el centro-sur de Chile.',
    impactEn: 'Prospective analysis on grassroots resilience, soil regeneration, and decentralized community adaptation facing accelerated ecological collapse in central-southern Chile.',
    methodologyEs: [
      'Análisis de escenarios de estrés hídrico extremo y calentamiento global regional',
      'Propuestas de soberanía alimentaria descentralizada y microbiología de suelos',
      'Articulación de redes de apoyo mutuo y resiliencia barrial y campesina'
    ],
    methodologyEn: [
      'Scenario analysis of extreme hydrological stress and regional global heating',
      'Decentralized food sovereignty and living soil biology frameworks',
      'Mutual aid networking and peasant-neighborhood community resilience'
    ],
    tags: ['El Regionalista', 'Fundación Suelo', 'Colapso Climático', 'Adaptación', 'Suelos', 'Prensa']
  },

  // 30C. PUBLICACIONES: Resumen.cl & Comestible.info: Dirk Kock-Rohwer (2024)
  {
    id: 'pub-kock-rohwer-resumen',
    type: 'publications',
    titleEs: 'Resumen.cl: La tierra está en riesgo: ¡Inversiones para la agricultura orgánica ahora!',
    titleEn: 'Resumen.cl: The Earth is at Risk: Investments for Organic Agriculture Now!',
    subtitleEs: 'Columna conjunta con Dirk Kock-Rohwer (diputado de Schleswig-Holstein) // Comestible.info',
    subtitleEn: 'Joint column with Dirk Kock-Rohwer (Schleswig-Holstein MP) // Comestible.info',
    country: 'Alemania / Chile',
    city: 'Kiel / Concepción',
    flag: '🌱',
    lat: 54.32,
    lng: 10.13,
    date: '2024',
    roleEs: 'Coautor con Dirk Kock-Rohwer',
    roleEn: 'Co-Author with Dirk Kock-Rohwer',
    mediaType: 'press',
    src: '/press_covers/resumen_dirk_kock_rohwer_agricultura_organica.jpg',
    availablePages: [
      {
        titleEs: 'Columna de Opinión en Resumen.cl & Comestible.info',
        titleEn: 'Opinion Column on Resumen.cl & Comestible.info',
        pageSrc: '/press_covers/resumen_dirk_kock_rohwer_agricultura_organica.jpg'
      },
      {
        titleEs: 'Publicación en Revista Comestible',
        titleEn: 'Publication on Comestible Magazine',
        pageSrc: '/press_covers/comestible_screen.png'
      },
      {
        titleEs: 'Portada de Revista Comestible',
        titleEn: 'Comestible Magazine Cover',
        pageSrc: '/press_covers/comestible_cover.jpg'
      }
    ],
    url: 'https://comestible.info/inversiones-para-la-agroecologia-ahora/',
    code: 'OPS-PUB-05C',
    source: 'Resumen.cl & Comestible.info',
    impactEs: 'Columna de opinión conjunta con el parlamentario ecologista alemán Dirk Kock-Rohwer (Schleswig-Holstein) alertando sobre la degradación de suelos fértiles y exigiendo financiamiento público directo para la transición agroecológica urgente sin agroquímicos.',
    impactEn: 'Joint opinion column with German Green MP Dirk Kock-Rohwer (Schleswig-Holstein) warning against fertile topsoil loss and demanding direct public subsidies for non-chemical agroecological transitions.',
    methodologyEs: [
      'Análisis de directivas europeas de conservación de suelos y biodiversidad agraria',
      'Articulación de demandas del movimiento agroecológico chileno y alemán',
      'Incidencia en políticas públicas parlamentarias de Schleswig-Holstein'
    ],
    methodologyEn: [
      'Analysis of European soil conservation and agricultural biodiversity directives',
      'Cross-continental alliance between Chilean and German agroecological movements',
      'Policy advocacy in the Schleswig-Holstein state parliament'
    ],
    tags: ['Dirk Kock-Rohwer', 'Resumen.cl', 'Comestible.info', 'Agroecología', 'Suelos', 'Alemania', 'Prensa']
  },

  // 31. PUBLICACIONES: ClimateCC: Monocultivos Arbóreos y Falsas Soluciones (ESTÁTICO)
  {
    id: 'pub-climatecc',
    type: 'publications',
    titleEs: 'ClimateCC: Monocultivos Forestales y Falsas Soluciones Climáticas',
    titleEn: 'ClimateCC: Global Tree Monocultures & False Climate Solutions',
    subtitleEs: 'Serie analítica internacional sobre compensaciones de carbono y justicia climática',
    subtitleEn: 'International analytical series on carbon offsets and climate justice',
    country: 'Global',
    city: 'Portal Internacional',
    flag: '🌐',
    lat: 0,
    lng: 0,
    isStatic: true,
    date: '2024',
    roleEs: 'Analista Internacional de Política Climática',
    roleEn: 'International Climate Policy Analyst',
    mediaType: 'press',
    src: '/press_covers/climatecc_screen.png',
    availablePages: [
      {
        titleEs: 'Publicación en el Portal Internacional ClimateCC',
        titleEn: 'Publication on ClimateCC Global Portal',
        pageSrc: '/press_covers/climatecc_screen.png'
      }
    ],
    url: 'https://www.climatecc.org/forests/tree-monocultures',
    code: 'OPS-PUB-06',
    source: 'ClimateCC // International Climate Portal',
    impactEs: 'Serie analítica internacional que disecciona los monocultivos arbóreos, los créditos de carbono y la justicia climática desde Latinoamérica.',
    impactEn: 'International analytical series dissecting tree monocultures, carbon credits, and environmental justice from Latin America to global climate summits.',
    methodologyEs: [
      'Desmitificación de los bonos de carbono forestal como herramienta de greenwashing',
      'Auditoría a los impactos del monocultivo en comunidades indígenas y campesinas',
      'Articulación de propuestas de decrecimiento y soberanía de los pueblos'
    ],
    methodologyEn: [
      'Demystification of forest carbon credits as corporate greenwashing tools',
      'Audit of timber monoculture impacts on indigenous and peasant populations',
      'Advocacy for degrowth frameworks and people’s climate sovereignty'
    ],
    tags: ['ClimateCC', 'Falsas Soluciones', 'Carbon Credits', 'Bosques', 'Internacional']
  },

  // 33. PUBLICACIONES: Libro Impreso "Relatos de la revuelta popular" (PLP)
  {
    id: 'pub-plp-libro',
    type: 'publications',
    titleEs: 'Libro Impreso: "Relatos de la revuelta popular" (Editorial PLP)',
    titleEn: 'Print Book Release: "Relatos de la revuelta popular" (PLP Publishing)',
    subtitleEs: 'Publicación física y distribución autogestionada de 44 crónicas y testimonios',
    subtitleEn: 'Physical publication and street distribution of 44 grassroots micro-narratives',
    country: 'Chile',
    city: 'Santiago',
    flag: '🇨🇱',
    lat: -33.44,
    lng: -70.65,
    date: '2020',
    roleEs: 'Editor General & Diseñador',
    roleEn: 'Editor-in-Chief & Book Designer',
    mediaType: 'press',
    src: '/plp/plp_articulo_revuelta.png',
    availablePages: [
      {
        titleEs: 'Página de Lanzamiento del Libro en Primera Línea Prensa',
        titleEn: 'Book Release Feature on Primera Línea Prensa',
        pageSrc: '/plp/plp_articulo_revuelta.png'
      },
      {
        titleEs: 'Logotipo Oficial • Primera Línea Prensa',
        titleEn: 'Official Logo • Primera Línea Prensa',
        pageSrc: '/plp/plp_logo.jpg'
      }
    ],
    url: 'https://www.primeralineaprensa.cl/?p=5542',
    code: 'OPS-PUB-08',
    source: 'Editorial Primera Línea Prensa',
    impactEs: 'Publicación física y distribución autogestionada del libro «Relatos de la revuelta popular», antología con 44 microtextos y crónicas sobre el estallido social en Chile.',
    impactEn: 'Physical publication and street distribution of "Relatos de la revuelta popular", an anthology gathering 44 grassroots micro-narratives from the Chilean social uprising.',
    methodologyEs: [
      'Curaduría editorial y compilación de relatos ciudadanos en primera persona',
      'Diseño tipográfico, maquetación editorial y diagramación para imprenta',
      'Distribución autogestionada mano a mano en ferias del libro y plazas públicas'
    ],
    methodologyEn: [
      'Editorial curation and compilation of first-person grassroots chronicles',
      'Typography design, print layout, and prepress production',
      'Self-managed independent distribution at street book fairs and public squares'
    ],
    tags: ['Libro', 'Estallido Social', 'PLP', 'Editorial', 'Crónicas']
  },

  // ==============================================================
  // SECCIÓN: TÍTULOS ACADÉMICOS UNIVERSITARIOS (3)
  // ==============================================================

  // 34. TÍTULOS ACADÉMICOS: Universidad de Chile - Geofísica
  {
    id: 'titulo-uchile',
    type: 'titles',
    titleEs: 'Geofísico. Licenciatura en Ciencias, mención Geofísica',
    titleEn: 'Geophysicist. Bachelor of Science in Geophysics',
    subtitleEs: 'Universidad de Chile • Aprobado con distinción (2021)',
    subtitleEn: 'University of Chile • Awarded with distinction (2021)',
    country: 'Chile',
    city: 'Santiago',
    flag: '🇨🇱',
    lat: -33.45,
    lng: -70.66,
    date: '2021',
    roleEs: 'Geofísico (Aprobado con Distinción)',
    roleEn: 'Geophysicist (Awarded with Distinction)',
    mediaType: 'plate',
    src: '/logos/universidad_de_chile_logo.png',
    availablePages: [
      {
        titleEs: 'Logotipo Oficial • Universidad de Chile',
        titleEn: 'Official Logo • University of Chile',
        pageSrc: '/logos/universidad_de_chile_logo.png'
      },
      {
        titleEs: 'Facultad de Ciencias Físicas y Matemáticas (FCFM)',
        titleEn: 'Faculty of Physical & Mathematical Sciences (FCFM)',
        pageSrc: '/logos/fcfm_uchile_logo.jpg'
      },
      {
        titleEs: 'Lámina 1: Perfil Académico y Geofísica FCFM',
        titleEn: 'Plate 1: Academic Profile & Geophysics FCFM',
        pageSrc: '/portfolio_pages/page_1.png'
      }
    ],
    url: 'https://uchile.cl',
    code: 'OPS-TIT-01',
    source: 'Universidad de Chile (FCFM)',
    impactEs: 'Geofísico. Licenciatura en Ciencias, mención Geofísica, aprobado con distinción por la Universidad de Chile (2021). Formación rigurosa en física de la Tierra, sismología, prospección electromagnética y gravimétrica (SEV/TEM) y modelación computacional avanzada.',
    impactEn: 'Geophysicist. Bachelor of Science in Geophysics, awarded with distinction by the University of Chile (2021). Rigorous foundation in Earth physics, applied electromagnetic geophysics (VES/TEM), seismology, and advanced computational modeling.',
    methodologyEs: [
      'Licenciatura en Ciencias, mención Geofísica (2021)',
      'Aprobado con distinción en la FCFM Universidad de Chile',
      'Prospección electromagnética, balance hídrico y modelación computacional'
    ],
    methodologyEn: [
      'Bachelor of Science in Geophysics (2021)',
      'Awarded with distinction at FCFM University of Chile',
      'Applied electromagnetic exploration, water balance, and computational physics'
    ],
    tags: ['Universidad de Chile', 'Geofísico', 'Licenciatura en Ciencias', 'Distinción', '2021', 'FCFM']
  },

  // 35. TÍTULOS ACADÉMICOS: Universidad de Kiel (Alemania) - Manejo Ambiental
  {
    id: 'titulo-kiel',
    type: 'titles',
    titleEs: 'Master en Ciencias en Manejo Ambiental',
    titleEn: 'Master of Science in Environmental Management',
    subtitleEs: 'Christian-Albrechts-Universität zu Kiel (Alemania) • 2026',
    subtitleEn: 'Christian-Albrechts-Universität zu Kiel (Germany) • 2026',
    country: 'Alemania',
    city: 'Kiel',
    flag: '🇩🇪',
    lat: 54.32,
    lng: 10.13,
    date: '2026',
    roleEs: 'Master en Ciencias (M.Sc.)',
    roleEn: 'Master of Science (M.Sc.)',
    mediaType: 'plate',
    src: '/logos/kiel_university_logo.png',
    availablePages: [
      {
        titleEs: 'Sello Histórico Oficial • Christian-Albrechts-Universität zu Kiel',
        titleEn: 'Official Historical Seal • Christian-Albrechts-Universität zu Kiel',
        pageSrc: '/logos/kiel_university_logo.png'
      },
      {
        titleEs: 'Sello Histórico CAU Kiel',
        titleEn: 'Historical Seal of CAU Kiel',
        pageSrc: '/logos/cau_kiel_seal.svg'
      },
      {
        titleEs: 'Laboratorio de Física de Suelos y Columnas de Flujo',
        titleEn: 'Soil Physics Laboratory & Column Diagnostics',
        pageSrc: '/expeditions/kiel_soil_lab.png'
      }
    ],
    url: 'https://www.uni-kiel.de',
    code: 'OPS-TIT-02',
    source: 'Christian-Albrechts-Universität zu Kiel (CAU Kiel)',
    impactEs: 'Master en Ciencias en Manejo Ambiental (M.Sc. in Environmental Management) por la Universidad de Kiel (Alemania), 2026. Especialización en balance hídrico de cuencas, hidrofísica de suelos y modelación ambiental de degradación.',
    impactEn: 'Master of Science in Environmental Management from Kiel University (Germany), 2026. Specialization in catchment water balance, soil hydro-physical laboratory diagnostics, and environmental modeling.',
    methodologyEs: [
      'Master en Ciencias en Manejo Ambiental (2026)',
      'Christian-Albrechts-Universität zu Kiel (Alemania)',
      'Dinámica de suelos, hidrofísica y balance hídrico de cuencas'
    ],
    methodologyEn: [
      'Master of Science in Environmental Management (2026)',
      'Christian-Albrechts-Universität zu Kiel (Germany)',
      'Soil dynamics, hydro-physics, and catchment water balance'
    ],
    tags: ['CAU Kiel', 'Alemania', 'Master en Ciencias', 'Manejo Ambiental', '2026']
  },

  // 36. TÍTULOS ACADÉMICOS: Universidad de Poznań (Polonia) - Protección Ambiental
  {
    id: 'titulo-amu-poznan',
    type: 'titles',
    titleEs: 'Master en Ciencias en Protección Ambiental',
    titleEn: 'Master of Science in Environmental Protection',
    subtitleEs: 'Adam Mickiewicz University (AMU Poznań, Polonia) • 2026',
    subtitleEn: 'Adam Mickiewicz University (AMU Poznań, Poland) • 2026',
    country: 'Polonia',
    city: 'Poznań',
    flag: '🇵🇱',
    lat: 52.41,
    lng: 16.93,
    date: '2026',
    roleEs: 'Master en Ciencias (M.Sc.)',
    roleEn: 'Master of Science (M.Sc.)',
    mediaType: 'plate',
    src: '/logos/amu_poznan_logo.png',
    availablePages: [
      {
        titleEs: 'Logotipo Oficial • Adam Mickiewicz University (AMU Poznań)',
        titleEn: 'Official Logo • Adam Mickiewicz University (AMU Poznań)',
        pageSrc: '/logos/amu_poznan_logo.png'
      },
      {
        titleEs: 'Muestreo Limnológico de Perifiton en Lago',
        titleEn: 'Limnological Periphyton Lake Sampling',
        pageSrc: '/expeditions/poland_lake_sampling.jpg'
      },
      {
        titleEs: 'Microscopía Óptica Zeiss e Identificación de Protozoos',
        titleEn: 'Zeiss Optical Microscopy & Protozoa Taxonomy',
        pageSrc: '/expeditions/poland_microscope_zeiss.jpg'
      },
      {
        titleEs: 'Clasificación de Bentos y Macroinvertebrados',
        titleEn: 'Benthic Macroinvertebrate Sorting & Biodiversity',
        pageSrc: '/expeditions/poznan_lake_benthos.jpg'
      }
    ],
    url: 'https://amu.edu.pl',
    code: 'OPS-TIT-03',
    source: 'Adam Mickiewicz University (AMU Poznań)',
    impactEs: 'Master en Ciencias en Protección Ambiental (M.Sc. in Environmental Protection) por la Universidad Adam Mickiewicz de Poznań (Polonia), 2026. Especialización en dinámicas de secuestro de carbono en humedales y calidad ecológica dulceacuícola.',
    impactEn: 'Master of Science in Environmental Protection from Adam Mickiewicz University in Poznań (Poland), 2026. Specialization in carbon sequestration in wetlands and freshwater ecological quality.',
    methodologyEs: [
      'Master en Ciencias en Protección Ambiental (2026)',
      'Adam Mickiewicz University (AMU Poznań, Polonia)',
      'Secuestro de carbono en humedales e indicadores limnológicos'
    ],
    methodologyEn: [
      'Master of Science in Environmental Protection (2026)',
      'Adam Mickiewicz University (AMU Poznań, Poland)',
      'Carbon sequestration in wetlands and limnological indicators'
    ],
    tags: ['AMU Poznań', 'Polonia', 'Master en Ciencias', 'Protección Ambiental', '2026']
  },

  // ==============================================================
  // SECCIÓN: FICHA TÉCNICA, SKILLS & HERRAMIENTAS (3)
  // ==============================================================

  // 38. SKILLS: Ciencia, Código, Modelación Numérica & SIG (ESTÁTICO)
  {
    id: 'skills-ciencia-codigo',
    type: 'skills',
    titleEs: 'Ficha Técnica: Ciencia, Código, Modelación & SIG',
    titleEn: 'Technical Matrix: Science, Code, Modeling & GIS',
    subtitleEs: 'Python (NumPy, SciPy, GeoPandas) • Delft3D • Google Earth Engine • QGIS • PostGIS • Unity 3D',
    subtitleEn: 'Python (NumPy, SciPy, GeoPandas) • Delft3D • Google Earth Engine • QGIS • PostGIS • Unity 3D',
    country: 'Toolkit',
    city: 'Stack de Modelación',
    flag: '💻',
    lat: 0,
    lng: 0,
    isStatic: true,
    date: 'Actualizado 2026',
    roleEs: 'Ingeniero de Software Científico & Modelador',
    roleEn: 'Scientific Software Engineer & Modeler',
    mediaType: 'plate',
    src: '/expeditions/smart_food_parks_architecture.jpg',
    availablePages: [
      {
        titleEs: 'Lámina 1: Matriz de Software Científico & Logotipos Oficiales',
        titleEn: 'Plate 1: Scientific Software Matrix & Official Logos',
        pageSrc: 'TECH_MATRIX_CIENCIA'
      },
      {
        titleEs: 'Lámina 2: Arquitectura de Datos y Pipeline Técnico (IoT, Cloud, Unity 3D)',
        titleEn: 'Plate 2: Technical Data Pipeline & Cloud Architecture (IoT, 3D)',
        pageSrc: '/expeditions/smart_food_parks_architecture.jpg'
      },
      {
        titleEs: 'Lámina 3: Modelación Hidrológica y Geofísica',
        titleEn: 'Plate 3: Hydrological & Geophysical Modeling',
        pageSrc: '/portfolio_pages/page_2.png'
      }
    ],
    url: 'https://github.com/danisantanderurrutia-coder',
    code: 'OPS-SKI-01',
    source: 'Matriz Técnica de Habilidades y Software',
    impactEs: 'Dominio avanzado de computación científica para análisis ambiental: modelación hidrodinámica 2D (Delft3D), procesamiento de imágenes satelitales (GEE / Sentinel-2), pipelines de datos geoespaciales (Python / PostGIS) y gemelos digitales en tiempo real.',
    impactEn: 'Advanced scientific computing for environmental analysis: 2D hydrodynamic simulations (Delft3D), satellite image processing (GEE / Sentinel-2), geospatial data pipelines (Python / PostGIS), and real-time digital twins.',
    methodologyEs: [
      'Python Científico: NumPy, SciPy, Pandas, GeoPandas, Rasterio, Matplotlib, Scikit-learn',
      'Modelación Hidrodinámica: Delft3D (mallas curvilíneas, batimetría, forzamiento de mareas)',
      'Sistemas de Información Geográfica: QGIS Desktop, PostGIS, Google Earth Engine, LiDAR DEM',
      'Desarrollo Web & Cloud: Next.js, React, TypeScript, FastAPI, Docker, Tailwind CSS'
    ],
    methodologyEn: [
      'Scientific Python: NumPy, SciPy, Pandas, GeoPandas, Rasterio, Matplotlib, Scikit-learn',
      'Hydrodynamic Modeling: Delft3D (curvilinear grids, bathymetry, tidal surge forcing)',
      'Geographic Information Systems: QGIS Desktop, PostGIS, Google Earth Engine, LiDAR DEM',
      'Web & Cloud Stack: Next.js, React, TypeScript, FastAPI, Docker, Tailwind CSS'
    ],
    deliverablesEs: [
      'Modelos numéricos hidrológicos e hidrodinámicos calibrados',
      'Pipelines automatizados de procesamiento satelital Sentinel-2 / Landsat',
      'Bases de datos espaciales y servidores de mapas vectoriales',
      'Dashboards interactivos y gemelos digitales en tiempo real'
    ],
    deliverablesEn: [
      'Calibrated hydrological & hydrodynamic numerical models',
      'Automated satellite processing pipelines (Sentinel-2 / Landsat)',
      'Geospatial databases and vector tile map servers',
      'Interactive dashboards and real-time digital twins'
    ],
    techStack: ['Python', 'QGIS', 'Docker', 'PostGIS', 'GEE', 'Delft3D', 'Unity 3D', 'Next.js', 'React', 'TypeScript', 'FastAPI', 'Tailwind CSS'],
    tags: ['Python', 'Delft3D', 'GEE', 'QGIS', 'PostGIS', 'Unity 3D', 'Skills']
  },

  // 39. SKILLS: Comunicaciones Estratégicas & Dirección Creativa (ESTÁTICO)
  {
    id: 'skills-comms-medios',
    type: 'skills',
    titleEs: 'Ficha Técnica: Comunicaciones Estratégicas & Dirección de Arte',
    titleEn: 'Technical Matrix: Strategic Comms & Art Direction',
    subtitleEs: 'Periodismo de Investigación • Producción 4K • Transmisión en Vivo • Campañas de Incidencia',
    subtitleEn: 'Investigative Journalism • 4K Video Production • Live Broadcasting • Grassroots Campaigns',
    country: 'Toolkit',
    city: 'Medios & Arte',
    flag: '📡',
    lat: 0,
    lng: 0,
    isStatic: true,
    date: 'Actualizado 2026',
    roleEs: 'Director Creativo & Estratega de Comunicaciones',
    roleEn: 'Creative Director & Communications Strategist',
    mediaType: 'plate',
    src: '/plp/plp_header_consigna.png',
    availablePages: [
      {
        titleEs: 'Lámina 1: Matriz de Producción Audiovisual, Broadcast & Logotipos',
        titleEn: 'Plate 1: Audiovisual Production, Broadcast Matrix & Logos',
        pageSrc: 'TECH_MATRIX_COMMS'
      },
      {
        titleEs: 'Lámina 2: Cabecera Editorial y Estrategia de Redacción (+700k Audiencia)',
        titleEn: 'Plate 2: Editorial Header & Newsroom Strategy (+700k Audience)',
        pageSrc: '/plp/plp_header_consigna.png'
      },
      {
        titleEs: 'Lámina 3: Producción Cultural y Dirección Creativa de Freestyle',
        titleEn: 'Plate 3: Cultural Production & Freestyle Creative Direction',
        pageSrc: '/youtube_covers/NcDejj3NKXo.jpg'
      },
      {
        titleEs: 'Lámina 4: Identidad Visual y Propaganda Callejera',
        titleEn: 'Plate 4: Visual Identity & Street Agitation',
        pageSrc: '/brigada/brigada_mural_no_afp.png'
      }
    ],
    url: 'https://github.com/danisantanderurrutia-coder',
    code: 'OPS-SKI-02',
    source: 'Matriz Técnica de Comunicaciones y Medios',
    impactEs: 'Capacidad demostrada en dirección de medios independientes (+700k personas de audiencia), producción audiovisual en 4K multicámara, transmisión de torneos en vivo, radiodifusión comunitaria FM y diseño de campañas políticas.',
    impactEn: 'Demonstrated leadership directing independent media outlets (+700k audience reach), multi-camera 4K broadcast production, live streaming championships, community FM radio, and grassroots campaigns.',
    methodologyEs: [
      'Producción Audiovisual: Sony 4K, DaVinci Resolve, Premiere Pro, OBS Studio Multicámara',
      'Radiodifusión Comunitaria: Mezcla de audio en vivo, transmisores FM, locución y edición de podcasts',
      'Estrategia de Redes: Guiones de alta retención para YouTube/TikTok, carruseles de datos para LinkedIn',
      'Dirección Creativa: Serigrafía callejera, muralismo, escenografía e iluminación para auditorios'
    ],
    methodologyEn: [
      'Audiovisual Production: Sony 4K, DaVinci Resolve, Premiere Pro, OBS Studio Live Streaming',
      'Community Radio: Live audio mixing, FM transmitters, voice recording, podcast editing',
      'Social Strategy: High-retention technical scriptwriting, data-driven LinkedIn carousels',
      'Creative Direction: Silkscreen flyposting, facade murals, stage design, and venue lighting'
    ],
    deliverablesEs: [
      'Campañas de comunicación estratégica y planes de difusión territorial',
      'Producción audiovisual completa de eventos y certámenes en 4K',
      'Piezas editoriales, libros impresos y publicaciones de investigación',
      'Infraestructura técnica para transmisiones globales de baja latencia'
    ],
    deliverablesEn: [
      'Strategic communications campaigns and territorial outreach roadmaps',
      'End-to-end 4K audiovisual production for cultural and academic events',
      'Investigative publications, print books, and editorial assets',
      'Low-latency technical infrastructure for international live broadcasts'
    ],
    techStack: ['DaVinci Resolve', 'OBS Studio', 'Sony 4K', 'Premiere Pro', 'Radio FM', 'Storytelling'],
    tags: ['Audiovisual', 'OBS Studio', 'DaVinci', 'Radio FM', 'Comunicaciones', 'Dirección de Arte']
  },

  // 40. SKILLS: Equipos de Campo, Instrumental & Idiomas (ESTÁTICO)
  {
    id: 'skills-equipos-idiomas',
    type: 'skills',
    titleEs: 'Ficha Técnica: Equipamiento de Campo, Instrumental & Idiomas',
    titleEn: 'Technical Matrix: Field Equipment, Instrumentation & Languages',
    subtitleEs: 'SEV/VES resistivímetro • Sondas multiparámetro • Pluviómetros digitales • Microscopía Zeiss',
    subtitleEn: 'DC Resistivity VES sounders • Multiparameter probes • Digital rain gauges • Zeiss microscopy',
    country: 'Global',
    city: 'Equipos & Idiomas',
    flag: '🔬',
    lat: 0,
    lng: 0,
    isStatic: true,
    date: 'Actualizado 2026',
    roleEs: 'Operador de Instrumental Científico',
    roleEn: 'Scientific Instrument Operator',
    mediaType: 'plate',
    src: '/expeditions/cauquenes_geophysics_ves.jpg',
    availablePages: [
      {
        titleEs: 'Lámina 1: Matriz de Instrumental de Campo, Laboratorio & Idiomas',
        titleEn: 'Plate 1: Field Instrumentation, Laboratory & Languages Matrix',
        pageSrc: 'TECH_MATRIX_EQUIPOS'
      },
      {
        titleEs: 'Lámina 2: Sondaje Eléctrico Vertical (SEV / VES) en Terreno (Cauquenes)',
        titleEn: 'Plate 2: Vertical Electrical Sounding (VES) in the Field (Cauquenes)',
        pageSrc: '/expeditions/cauquenes_geophysics_ves.jpg'
      },
      {
        titleEs: 'Lámina 3: Estación Pluviométrica Digital en Cerro Molco (Cauquenes)',
        titleEn: 'Plate 3: Digital Rain Gauge Station at Cerro Molco (Cauquenes)',
        pageSrc: '/expeditions/cauquenes_rain_gauge.jpg'
      },
      {
        titleEs: 'Lámina 4: Microscopía Binocular Zeiss Primo Star para Taxonomía Acuática',
        titleEn: 'Plate 4: Zeiss Primo Star Binocular Microscopy for Aquatic Taxonomy',
        pageSrc: '/expeditions/poland_microscope_zeiss.jpg'
      }
    ],
    techStack: ['Syscal SEV / VES', 'IoT LoRaWAN', 'Zeiss Microscopio', 'LiDAR DEM', 'Garmin GPS', 'Español', 'Inglés', 'Alemán', 'Polaco'],
    url: 'https://github.com/danisantanderurrutia-coder',
    code: 'OPS-SKI-03',
    source: 'Catálogo de Instrumental Científico y Certificaciones Lingüísticas',
    impactEs: 'Experiencia directa en despliegue de instrumentación hidrogeofísica y ambiental en cuencas de Chile y Europa, con fluidez trilingüe para articulación de redes científicas y diplomacia ambiental.',
    impactEn: 'Hands-on experience deploying hydrogeophysical and environmental field instruments across Chile and Europe, with trilingual proficiency for international scientific networks and climate diplomacy.',
    methodologyEs: [
      'Geofísica de Terreno: SEV/VES corriente continua, arreglo Schlumberger/Wenner, resistivímetro',
      'Hidrometría & Clima: Balancines pluviométricos automáticos, molinetes de aforo, sondas multiparámetro YSI',
      'Laboratorio: Microscopios ópticos Zeiss Primo Star, muestreadores de sedimento Van Veen, filtrado de bentos',
      'Idiomas: Español (Nativo) • Inglés (IELTS Academic – C1) • Alemán (A2-B1) • Polaco (Básico)'
    ],
    methodologyEn: [
      'Field Geophysics: DC VES sounding, Schlumberger/Wenner electrode arrays, resistivity meters',
      'Hydrometry & Climate: Automated tipping-bucket rain gauges, streamflow meters, YSI multiparameter probes',
      'Laboratory: Zeiss Primo Star optical microscopes, Van Veen sediment grabs, benthic sieve sorting',
      'Languages: Spanish (Native) • English (IELTS Academic – C1) • German (A2-B1) • Polish (Basic)'
    ],
    deliverablesEs: [
      'Campañas de prospección hidrogeofísica para captación de aguas subterráneas',
      'Redes de telemetría y estaciones meteorológicas comunitarias calibradas',
      'Diagnósticos taxonómicos de microfauna para bioindicación lacustre',
      'Negociación técnica trilingüe (Español, Inglés, Alemán) con delegaciones internacionales'
    ],
    deliverablesEn: [
      'Hydrogeophysical exploration campaigns for groundwater extraction planning',
      'Calibrated community meteorological and telemetry station networks',
      'Microfauna taxonomic diagnostics for freshwater bioindication',
      'Trilingual technical negotiation (Spanish, English, German) with international delegations'
    ],
    tags: ['SEV', 'Geofísica', 'Instrumentación', 'Microscopía', 'Idiomas', 'Inglés', 'Alemán']
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

export const formatCountry = (country: string, lang: Language): string => {
  if (lang === 'es') return country;
  const map: Record<string, string> = {
    'Alemania': 'Germany',
    'Alemania / Chile': 'Germany / Chile',
    'Dinamarca': 'Denmark',
    'Polonia': 'Poland',
    'Suiza': 'Switzerland',
    'Noruega': 'Norway',
    'Europa': 'Europe',
    'Latinoamérica': 'Latin America',
    'Estados Unidos': 'United States',
    'Bélgica': 'Belgium',
    'Egipto': 'Egypt',
    'Emiratos Árabes': 'United Arab Emirates',
    'España': 'Spain',
    'Francia': 'France',
    'Países Bajos': 'Netherlands'
  };
  return map[country] || country;
};

export const formatCity = (city: string, lang: Language): string => {
  if (lang === 'es') return city;
  const map: Record<string, string> = {
    '23 Fotos de Campo': '23 Field Photographs',
    'Bosques Nativos Centro-Sur': 'Central-South Native Forests',
    'Centro-Sur': 'Central-South Chile',
    'Ciudades Europeas ODS': 'European SDG Cities',
    'Copenhague': 'Copenhagen',
    'Dresden': 'Dresden',
    'Ensayos Filosóficos': 'Philosophical Essays',
    'Equipos & Idiomas': 'Gear & Languages',
    'Medios & Arte': 'Media & Arts',
    'Portal Internacional': 'International Portal',
    'Poznań': 'Poznan',
    'Red Federal (Chile, Argentina, Colombia, Perú, México)': 'Federal Network (Chile, Argentina, Colombia, Peru, Mexico)',
    'Santiago (Plaza Dignidad / Alameda)': 'Santiago (Dignidad Square / Alameda)',
    'Santiago & Red Internacional (Japón, Perú, Argentina, México)': 'Santiago & Global Network (Japan, Peru, Argentina, Mexico)',
    'Stack de Modelación': 'Modelling Stack',
    'Maule, Biobío, Ñuble & Santiago': 'Maule, Biobio, Nuble & Santiago',
    'Maule Sur': 'South Maule'
  };
  return map[city] || city;
};

export const formatDate = (date: string, lang: Language): string => {
  if (lang === 'es') return date;
  if (date === 'Actualizado 2026') return 'Updated 2026';
  return date;
};

export const formatTag = (tag: string, lang: Language): string => {
  if (lang === 'es') return tag;
  const map: Record<string, string> = {
    '23 Fotos Reales': '23 Real Photos',
    'Expediciones': 'Expeditions',
    'Laboratorios': 'Laboratories',
    'Cumbres': 'Summits',
    'Fototeca': 'Photo Archive',
    'Geofísica': 'Geophysics',
    'Instrumentación': 'Instrumentation',
    'Microscopía': 'Microscopy',
    'Idiomas': 'Languages',
    'Inglés': 'English',
    'Alemán': 'German',
    'Polaco': 'Polish',
    'Congreso Nacional': 'National Congress',
    'Megaincendios': 'Mega-wildfires',
    'Incidencia Política': 'Policy Advocacy',
    'Comisión Especial': 'Special Commission',
    'Bosque Nativo': 'Native Forest',
    'Agua': 'Water',
    'Cuencas': 'Watersheds',
    'Comunidades': 'Grassroots',
    'Incendios Forestales': 'Wildfires',
    'Cambio Climático': 'Climate Change',
    'Prensa Independiente': 'Independent Press',
    'Derechos Humanos': 'Human Rights',
    'Estallido Social': 'Social Uprising',
    'Fotoperiodismo': 'Photojournalism',
    'Radio Comunitaria': 'Community Radio',
    'Gobernanza del Agua': 'Water Governance',
    'Modelación Hidrológica': 'Hydrological Modeling',
    'Sensores': 'Sensors',
    'Monitoreo Ambiental': 'Environmental Monitoring',
    'Dirección de Arte': 'Art Direction',
    'Cultura': 'Culture',
    'Música': 'Music',
    'Edición de Video': 'Video Editing',
    'Transmisión en Vivo': 'Live Streaming'
  };
  return map[tag] || tag;
};

interface SkillToolDetail {
  name: string;
  badge: string;
  badgeEn?: string;
  level: string;
  levelEn?: string;
  levelPercent: number;
  tags: string;
  tagsEn?: string;
  descEs: string;
  descEn: string;
  applicationEs: string;
  applicationEn: string;
  color: string;
}

export const getToolBadge = (tool: SkillToolDetail, lang: Language) => (lang === 'en' && tool.badgeEn ? tool.badgeEn : tool.badge);
export const getToolLevel = (tool: SkillToolDetail, lang: Language) => (lang === 'en' && tool.levelEn ? tool.levelEn : tool.level);
export const getToolTags = (tool: SkillToolDetail, lang: Language) => (lang === 'en' && tool.tagsEn ? tool.tagsEn : tool.tags);

const TOOLS_CIENCIA: SkillToolDetail[] = [
  {
    name: 'Python',
    badge: 'Python 3.12+ // CIENTÍFICO',
    badgeEn: 'Python 3.12+ // SCIENTIFIC',
    level: '95% • PRODUCCIÓN & RESEARCH',
    levelEn: '95% • PRODUCTION & RESEARCH',
    levelPercent: 95,
    tags: 'NumPy • SciPy • Pandas • GeoPandas • Rasterio • Matplotlib • Scikit-learn',
    tagsEn: 'NumPy • SciPy • Pandas • GeoPandas • Rasterio • Matplotlib • Scikit-learn',
    descEs: 'Computación científica, balance hídrico, scripts de automatización satelital y modelos hidrogeofísicos.',
    descEn: 'Scientific computing, water balance modeling, satellite automation pipelines, and hydrogeophysics.',
    applicationEs: 'Desarrollo de scripts de balance de cuencas en Kiel, modelos numéricos de turberas y análisis de datos climáticos.',
    applicationEn: 'Watershed balance modeling at Kiel, numerical peatland dynamics, and climate time-series analysis.',
    color: '#387eb8'
  },
  {
    name: 'QGIS & GIS',
    badge: 'QGIS 3.34 LTR // ESPACIAL',
    badgeEn: 'QGIS 3.34 LTR // SPATIAL',
    level: '95% • ANÁLISIS VECTORIAL & RASTER',
    levelEn: '95% • VECTOR & RASTER ANALYSIS',
    levelPercent: 95,
    tags: 'DEMs LiDAR • Mapeo Cuencas • Grass GIS • SAGA • ModelBuilder',
    tagsEn: 'LiDAR DEMs • Catchment Mapping • Grass GIS • SAGA • ModelBuilder',
    descEs: 'Cartografía vectorial y raster avanzada, delimitación hidrológica de cuencas y cálculo de índices espectrales.',
    descEn: 'Advanced raster & vector cartography, hydrological catchment delineation, and spectral index calculations.',
    applicationEs: 'Modelación de cuencas hidrográficas, riesgo de incendios y zonificación territorial comunitaria.',
    applicationEn: 'Watershed hydrological modeling, wildfire risk analysis, and community land-use zoning.',
    color: '#589632'
  },
  {
    name: 'R & Modelación',
    badge: 'R Studio // MODELACIÓN & SIG',
    badgeEn: 'R Studio // MODELING & GIS',
    level: '90% • CERTIFICADO ESCUELA GIS',
    levelEn: '90% • CERTIFIED GIS SCHOOL',
    levelPercent: 90,
    tags: 'R Modeling • Spatial Data • GeoTIFF • Series Temporales • Análisis Estadístico',
    tagsEn: 'R Modeling • Spatial Data • GeoTIFF • Time Series • Statistical Analysis',
    descEs: 'Modelación cuantitativa y gestión de datos satelitales SIG en lenguaje R (certificación Escuela Ambiental GIS).',
    descEn: 'Quantitative modeling and GIS satellite data management in R (certified by Escuela Ambiental GIS).',
    applicationEs: 'Análisis estadístico ambiental, modelos de balance hídrico y procesamiento de datos satelitales en R.',
    applicationEn: 'Environmental statistical analysis, water balance modeling, and satellite raster processing in R.',
    color: '#276dc3'
  },
  {
    name: 'Docker',
    badge: 'Docker Engine // REPRODUCIBILIDAD',
    badgeEn: 'Docker Engine // REPRODUCIBILITY',
    level: '90% • VIRTUALIZACIÓN & CI/CD',
    levelEn: '90% • VIRTUALIZATION & CI/CD',
    levelPercent: 90,
    tags: 'Contenedores • Multi-stage Builds • Docker Compose • Pipelines Reproducibles',
    tagsEn: 'Containers • Multi-stage Builds • Docker Compose • Reproducible Pipelines',
    descEs: 'Virtualización de modelos matemáticos, empaquetado de servicios científicos y reproducibilidad computacional.',
    descEn: 'Virtualization of mathematical models, scientific service packaging, and computational reproducibility.',
    applicationEs: 'Ambientes aislados para correr simulaciones hidrodinámicas Delft3D y APIs geoespaciales en producción.',
    applicationEn: 'Isolated runtime environments for hydrodynamic Delft3D simulations and production geospatial APIs.',
    color: '#2496ED'
  },
  {
    name: 'PostGIS',
    badge: 'PostgreSQL 16 + PostGIS 3.4',
    badgeEn: 'PostgreSQL 16 + PostGIS 3.4',
    level: '85% • BASES ESPACIALES SQL',
    levelEn: '85% • SPATIAL SQL DATABASES',
    levelPercent: 85,
    tags: 'Consultas Espaciales ST_* • Índices GiST • Topología de Redes Hídricas',
    tagsEn: 'Spatial Queries ST_* • GiST Indexes • River Network Topology',
    descEs: 'Bases de datos espaciales masivas, análisis relacional geográfico y almacenamiento de nubes de puntos.',
    descEn: 'Massive spatial databases, topological network routing, and geographic relational queries.',
    applicationEs: 'Almacenamiento y consulta de millones de polígonos catastrales forestales y redes de drenaje en el Maule.',
    applicationEn: 'Querying and storage of millions of cadastral forest plots and drainage networks across central Chile.',
    color: '#336791'
  },
  {
    name: 'Earth Engine (GEE)',
    badge: 'Google Earth Engine // CLOUD',
    badgeEn: 'Google Earth Engine // CLOUD',
    level: '85% • PROCESAMIENTO PETABYTE',
    levelEn: '85% • PETABYTE PROCESSING',
    levelPercent: 85,
    tags: 'Sentinel-2 MSI • Landsat 8/9 • Índices dNBR, NDVI, NDWI • Reducciones Espaciales',
    tagsEn: 'Sentinel-2 MSI • Landsat 8/9 • dNBR, NDVI, NDWI • Spatial Reducers',
    descEs: 'Análisis multitemporal de series de satélites en la nube, severidad de incendios forestales y estrés hídrico.',
    descEn: 'Multitemporal satellite time-series analysis in the cloud, wildfire severity burn index, and drought monitoring.',
    applicationEs: 'Evaluación satelital del megaincendio de Valparaíso (2024) y monocultivos en el Maule con Sentinel-2.',
    applicationEn: 'Satellite burn severity mapping of Valparaíso wildfires (2024) and pine plantations using Sentinel-2.',
    color: '#1A73E8'
  },
  {
    name: 'Delft3D',
    badge: 'Deltares Delft3D 4.04 // 2D/3D',
    badgeEn: 'Deltares Delft3D 4.04 // 2D/3D',
    level: '80% • MODELACIÓN HIDRODINÁMICA',
    levelEn: '80% • HYDRODYNAMIC MODELING',
    levelPercent: 80,
    tags: 'Mallas Curvilíneas • Batimetría • Transporte de Sedimentos • Forzamiento de Mareas',
    tagsEn: 'Curvilinear Grids • Bathymetry • Sediment Transport • Tidal Forcing',
    descEs: 'Simulación física de hidrodinámica de fluidos, propagación de ondas mareales y morfología costera y estuarina.',
    descEn: 'Physics-based hydrodynamic simulation, tidal surge propagation, and estuarine sediment morphodynamics.',
    applicationEs: 'Modelación del estuario del río Eider en Alemania y dinámicas de intrusión salina.',
    applicationEn: 'Hydrodynamic flow modeling of the Eider River estuary in Germany and saltwater intrusion dynamics.',
    color: '#00A3E0'
  },
  {
    name: 'Unity 3D',
    badge: 'Unity Engine // GEMELOS DIGITALES',
    badgeEn: 'Unity Engine // DIGITAL TWINS',
    level: '85% • INTERACCIÓN & 3D REAL-TIME',
    levelEn: '85% • REAL-TIME 3D & INTERACTION',
    levelPercent: 85,
    tags: 'C# • Shaders HLSL • Modelado Procedural • Telemetría IoT en Tiempo Real',
    tagsEn: 'C# • HLSL Shaders • Procedural Modeling • Real-Time IoT Telemetry',
    descEs: 'Construcción de gemelos digitales interactivos y visualización espacial inmersiva para planificación urbana.',
    descEn: 'Interactive digital twin authoring and immersive real-time spatial visualization for urban resilience.',
    applicationEs: 'Gemelo Digital Smart Food Parks presentado para la iniciativa ONU Citiverse (Copenhague/Barcelona).',
    applicationEn: 'Smart Food Parks Digital Twin developed for the UN Citiverse track (Copenhagen/Barcelona).',
    color: '#ffffff'
  },
  {
    name: 'Next.js & React',
    badge: 'Next.js 14 / React 19 // FRONTEND',
    badgeEn: 'Next.js 14 / React 19 // FRONTEND',
    level: '90% • ARQUITECTURA WEB REACTIVA',
    levelEn: '90% • REACTIVE WEB ARCHITECTURE',
    levelPercent: 90,
    tags: 'TypeScript • Tailwind CSS • Three.js • Mapbox GL • Visualización Dinámica',
    tagsEn: 'TypeScript • Tailwind CSS • Three.js • Mapbox GL • Dynamic Visualization',
    descEs: 'Desarrollo de interfaces de alto rendimiento, plataformas científicas interactivas y visualizadores geoespaciales.',
    descEn: 'High-performance interactive scientific interfaces, geospatial map viewers, and responsive portals.',
    applicationEs: 'Desarrollo de portales de cartografía comunitaria, visores satelitales y portafolio interactivo Three.js.',
    applicationEn: 'Development of community cartography portals, satellite viewers, and interactive Three.js applications.',
    color: '#06b6d4'
  },
  {
    name: 'FastAPI',
    badge: 'FastAPI + Python // ASYNC REST',
    badgeEn: 'FastAPI + Python // ASYNC REST',
    level: '90% • SERVICIOS WEB DE ALTA VELOCIDAD',
    levelEn: '90% • HIGH-SPEED WEB SERVICES',
    levelPercent: 90,
    tags: 'Pydantic • AsyncIO • Uvicorn • Endpoints de Telemetría • GeoJSON Serializers',
    tagsEn: 'Pydantic • AsyncIO • Uvicorn • Telemetry Endpoints • GeoJSON Serializers',
    descEs: 'APIs asíncronas de microsegundos para disponibilizar datos de modelos matemáticos y sensores en terreno.',
    descEn: 'High-throughput async APIs delivering mathematical model inferences and field sensor telemetry.',
    applicationEs: 'Backend de ingesta de datos meteorológicos IoT y endpoints de cálculo hidrológico en tiempo real.',
    applicationEn: 'Backend ingesting IoT weather telemetry and real-time hydrological calculation microservices.',
    color: '#009688'
  }
];

const TOOLS_COMMS: SkillToolDetail[] = [
  {
    name: 'DaVinci Resolve',
    badge: 'Blackmagic DaVinci // COLOR & 4K',
    badgeEn: 'Blackmagic DaVinci // COLOR & 4K',
    level: '95% • EDICIÓN & COLOR GRADING',
    levelEn: '95% • EDITING & COLOR GRADING',
    levelPercent: 95,
    tags: 'Corte Cinematográfico • Fairlight Audio • Nodos de Color • HDR Delivery',
    tagsEn: 'Cinematic Cut • Fairlight Audio • Color Nodes • HDR Delivery',
    descEs: 'Montaje cinematográfico y corrección de color profesional para piezas de cine documental y reportajes de campo.',
    descEn: 'Cinematic editing and color grading for documentary films and on-the-ground investigative reporting.',
    applicationEs: 'Edición y etalonaje en 4K para piezas audiovisuales sobre el estallido social y cumbres de justicia climática.',
    applicationEn: '4K editing and grading for socio-environmental video journalism and climate justice summits.',
    color: '#FF6B00'
  },
  {
    name: 'OBS Studio',
    badge: 'OBS Studio // BROADCAST EN VIVO',
    badgeEn: 'OBS Studio // LIVE BROADCAST',
    level: '90% • TRANSMISIÓN MULTICÁMARA',
    levelEn: '90% • MULTI-CAMERA BROADCAST',
    levelPercent: 90,
    tags: 'Streaming RTMP • Overlays NDI • Mezcla de Audio Digital • Baja Latencia',
    tagsEn: 'RTMP Streaming • NDI Overlays • Digital Audio Mixing • Low Latency',
    descEs: 'Transmisión en vivo de eventos multitudinarios, torneos culturales de freestyle y conferencias académicas.',
    descEn: 'Multi-camera live streaming for mass cultural freestyle championships and international summits.',
    applicationEs: 'Emisión en vivo con múltiples cámaras de torneos de freestyle en el Teatro Caupolicán (+5.000 espectadores).',
    applicationEn: 'Multi-cam broadcast for freestyle tournaments at Caupolicán Arena (+5,000 live attendees).',
    color: '#7000FF'
  },
  {
    name: 'Sony 4K',
    badge: 'Sony Alpha Cine // CÁMARA & ÓPTICA',
    badgeEn: 'Sony Alpha Cine // CAMERA & OPTICS',
    level: '90% • REGISTRO EN TERRENO',
    levelEn: '90% • FIELD CINEMATOGRAPHY',
    levelPercent: 90,
    tags: 'Perfiles S-Log3 • Ópticas Cine • Estabilización Gimbal • Audio Shotgun XLR',
    tagsEn: 'S-Log3 Profiles • Cinema Lenses • Gimbal Stabilization • XLR Audio',
    descEs: 'Operación de cámaras cinematográficas en condiciones adversas de campo, protestas y entornos rurales.',
    descEn: 'Cinematography in adverse outdoor field conditions, frontline protests, and remote rural territories.',
    applicationEs: 'Dirección de fotografía y cámara en las calles de Santiago durante el estallido de 2019.',
    applicationEn: 'Cinematography and direct field camera work on Santiago streets during 2019 uprising.',
    color: '#00F0FF'
  },
  {
    name: 'Premiere Pro',
    badge: 'Adobe Premiere Pro // NEWSROOM',
    badgeEn: 'Adobe Premiere Pro // NEWSROOM',
    level: '90% • FLUJO DE PRENSA DIGITAL',
    levelEn: '90% • DIGITAL NEWSROOM WORKFLOW',
    levelPercent: 90,
    tags: 'Edición Ágil • Subtitulado Automático • Sincronización Multi-cámara • Redes',
    tagsEn: 'Agile Editing • Auto Subtitling • Multi-Camera Sync • Social Formats',
    descEs: 'Flujo de trabajo de prensa digital para producción de despachos y cápsulas noticiosas de entrega inmediata.',
    descEn: 'Fast-paced newsroom workflow generating immediate breaking news reels and video reports.',
    applicationEs: 'Producción de cientos de despachos de prensa para Primera Línea Prensa (+700k personas de audiencia).',
    applicationEn: 'Production of hundreds of newsreels for Primera Línea Prensa reaching +700k citizens.',
    color: '#EA77FF'
  },
  {
    name: 'Radio FM',
    badge: 'Broadcast FM // RADIODIFUSIÓN',
    badgeEn: 'Broadcast FM // BROADCASTING',
    level: '95% • ESTUDIOS COMUNITARIOS',
    levelEn: '95% • COMMUNITY RADIO STUDIOS',
    levelPercent: 95,
    tags: 'Transmisores FM • Antenas Dipolo • Consolas Behringer • Locución Técnica',
    tagsEn: 'FM Transmitters • Dipole Antennas • Audio Consoles • Technical Voiceover',
    descEs: 'Instalación y operación de estaciones de radio comunitaria, edición de podcasts y transmisión radial campesina.',
    descEn: 'Installation and operation of community radio stations, podcast mastering, and rural FM broadcast.',
    applicationEs: 'Emisión de cápsulas ambientales y transmisiones en Radio Cristalina 96.3 FM (Constitución, Maule).',
    applicationEn: 'Broadcasting environmental awareness episodes on Radio Cristalina 96.3 FM (Maule, Chile).',
    color: '#22c55e'
  },
  {
    name: 'Dirección Creativa',
    badge: 'Dirección de Arte // PROPAGANDA',
    badgeEn: 'Art Direction // MEDIA & PRINT',
    level: '95% • IDENTIDAD & SERIGRAFÍA',
    levelEn: '95% • IDENTITY & SCREENPRINTING',
    levelPercent: 95,
    tags: 'Serigrafía Textil y Papel • Tipografía Editorial • Escenografía • Muralismo',
    tagsEn: 'Textile & Paper Screenprinting • Editorial Typography • Scenography • Murals',
    descEs: 'Diseño integral de campañas visuales, cartelería callejera, portadas editoriales y dirección de arte.',
    descEn: 'Comprehensive visual campaign branding, street flyposting, editorial covers, and stage art direction.',
    applicationEs: 'Libro impreso "Relatos de la revuelta popular", estética de brigadas y afiches políticos.',
    applicationEn: 'Print book "Relatos de la revuelta popular", silkscreen posters, and cultural movement branding.',
    color: '#facc15'
  }
];

const TOOLS_EQUIPOS: SkillToolDetail[] = [
  {
    name: 'Syscal SEV / VES',
    badge: 'Syscal Pro / Resistivímetro // GEOFÍSICA',
    badgeEn: 'Syscal Pro / Resistivity Meter // GEOPHYSICS',
    level: '95% • PROSPECCIÓN DE AGUAS',
    levelEn: '95% • GROUNDWATER EXPLORATION',
    levelPercent: 95,
    tags: 'Sondaje Eléctrico Vertical • Arreglo Schlumberger • Resistividad Aparente • Curvas de Inversión',
    tagsEn: 'Vertical Electrical Sounding • Schlumberger Array • Apparent Resistivity • Inversion Curves',
    descEs: 'Prospección hidrogeofísica en corriente continua para detección de napas freáticas y estratigrafía.',
    descEn: 'Direct-current hydrogeophysical sounding for groundwater aquifer detection and stratigraphic mapping.',
    applicationEs: 'Campañas de prospección en Cauquenes para comités de agua potable rural y pequeños agricultores.',
    applicationEn: 'Field exploration campaigns in Cauquenes locating groundwater wells for rural peasant communities.',
    color: '#06b6d4'
  },
  {
    name: 'IoT LoRaWAN',
    badge: 'LoRaWAN & Microcontroladores // TELEMETRÍA',
    badgeEn: 'LoRaWAN & Microcontrollers // TELEMETRY',
    level: '90% • REDES DE SENSORES',
    levelEn: '90% • SENSOR NETWORKS',
    levelPercent: 90,
    tags: 'Pluviómetros Digitales de Balancín • Balizas ESP32 • Baterías Solares • Telemetría Rural',
    tagsEn: 'Digital Rain Gauges • ESP32 Beacons • Solar Batteries • Rural Telemetry',
    descEs: 'Despliegue de estaciones meteorológicas comunitarias y sensores de humedad de bajo costo en cerros aislados.',
    descEn: 'Deployment of community weather stations and low-cost soil moisture probes on remote mountains.',
    applicationEs: 'Instalación de pluviómetro digital en Cerro Molco (Cauquenes) transmitiendo datos en tiempo real.',
    applicationEn: 'Installation of autonomous tipping-bucket rain gauge on Cerro Molco (Cauquenes) streaming live rain data.',
    color: '#22c55e'
  },
  {
    name: 'Zeiss Microscopio',
    badge: 'Zeiss Primo Star // LIMNOLOGÍA',
    badgeEn: 'Zeiss Primo Star // LIMNOLOGY',
    level: '90% • TAXONOMÍA DE MICROFAUNA',
    levelEn: '90% • MICROFAUNA TAXONOMY',
    levelPercent: 90,
    tags: 'Óptica de Campo Claro • Conteo Utermöhl • Protozoos • Ciliados • Algas Bentónicas',
    tagsEn: 'Brightfield Optics • Utermöhl Counting • Protozoa • Ciliates • Benthic Algae',
    descEs: 'Identificación taxonómica de bioindicadores acuáticos en lagos y humedales para evaluar calidad ecológica.',
    descEn: 'Taxonomic identification of freshwater bioindicators in lakes and peatlands for ecological status diagnosis.',
    applicationEs: 'Diagnóstico de perifiton y macroinvertebrados en lagos de Poznań (Polonia) y humedales del Maule.',
    applicationEn: 'Periphyton and macroinvertebrate diagnostics across Poznań lakes (Poland) and Maule wetlands.',
    color: '#387eb8'
  },
  {
    name: 'LiDAR DEM',
    badge: 'LiDAR Aerotransportado // RELIEVE',
    badgeEn: 'Airborne LiDAR // ELEVATION & RELIEF',
    level: '95% • NUBES DE PUNTOS LÁSER',
    levelEn: '95% • LASER POINT CLOUDS',
    levelPercent: 95,
    tags: 'Modelos Digitales de Terreno (DTM) • Detección de Cárcavas • Pendientes • Sombras de Relieve',
    tagsEn: 'Digital Terrain Models (DTM) • Gully Detection • Slope Analysis • Hillshading',
    descEs: 'Procesamiento de nubes de puntos LiDAR para calcular micro-relieve, erosión de suelos y flujos hídricos.',
    descEn: 'LiDAR point cloud filtering generating high-res bare-earth DTMs, gully erosion, and hydrologic flow.',
    applicationEs: 'Modelación de erosión en laderas deforestadas por monocultivos forestales en la Cordillera de la Costa.',
    applicationEn: 'Erosion risk modeling on coastal range slopes deforested by industrial timber monocultures.',
    color: '#f97316'
  },
  {
    name: 'Garmin GPS',
    badge: 'Garmin GNSS // GEORREFERENCIACIÓN',
    badgeEn: 'Garmin GNSS // GEOREFERENCING',
    level: '95% • PUNTOS DE CONTROL',
    levelEn: '95% • GROUND CONTROL POINTS',
    levelPercent: 95,
    tags: 'Waypoints de Precisión • Tracks de Expedición • Coordenadas WGS84 / UTM • Ground Truth',
    tagsEn: 'Precision Waypoints • Expedition Tracks • WGS84 / UTM Coordinates • Ground Truth',
    descEs: 'Georreferenciación milimétrica de pozos, calicatas, sensores y transectos de biodiversidad.',
    descEn: 'Precise ground-truth coordinate logging for wells, soil pits, weather stations, and biodiversity transects.',
    applicationEs: 'Relevamiento de terreno en expediciones a lagos polacos, Alpes suizos y cerros del Maule.',
    applicationEn: 'Expedition fieldwork coordinate logging across Polish lakes, Swiss Alps, and Chilean ranges.',
    color: '#facc15'
  },
  {
    name: 'Idiomas',
    badge: 'Idiomas // DIPLOMACIA & INVESTIGACIÓN',
    badgeEn: 'Languages // DIPLOMACY & RESEARCH',
    level: 'ES / EN / DE / PL • CERTIFICADO',
    levelEn: 'ES / EN / DE / PL • CERTIFIED',
    levelPercent: 100,
    tags: 'Español (Nativo) • Inglés (IELTS Academic – C1) • Alemán (A2-B1) • Polaco (Básico)',
    tagsEn: 'Spanish (Native) • English (IELTS Academic – C1) • German (A2-B1) • Polish (Basic)',
    descEs: 'Competencia lingüística para investigación en consorcios internacionales, redacción científica y diplomacia climática.',
    descEn: 'Linguistic proficiency for international research consortia, scientific reporting, and climate diplomacy.',
    applicationEs: 'Expositor en cumbres de Bonn, Hamburgo, Oslo y Costa Rica; trabajo de investigación en Kiel y Poznań.',
    applicationEn: 'Speaker at Bonn, Hamburg, Oslo, and Costa Rica; scientific research in Kiel and Poznań.',
    color: '#ec4899'
  }
];

interface GameWorldViewProps {
  currentLang: Language;
  onToggleLanguage: () => void;
  onExitToDossier?: () => void;
  onBackToMenu?: () => void;
  initialFilter?: 'all' | MissionType;
  initialMissionId?: string;
  onStateChange?: (filter: 'all' | MissionType, missionId: string) => void;
  onOpenHireMe?: () => void;
  onOpenSkills?: () => void;
  onOpenArtDirector?: () => void;
  onBackToGateway?: () => void;
}

export const GameWorldView: React.FC<GameWorldViewProps> = ({
  currentLang,
  onToggleLanguage,
  onExitToDossier,
  onBackToMenu,
  initialFilter = 'all',
  initialMissionId,
  onStateChange,
  onOpenHireMe,
  onOpenSkills,
  onOpenArtDirector,
  onBackToGateway
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | MissionType>(initialFilter);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [selectedMissionId, setSelectedMissionId] = useState<string>(() => {
    if (initialMissionId && GAME_MISSIONS.some((m) => m.id === initialMissionId)) {
      return initialMissionId;
    }
    if (initialFilter !== 'all') {
      const found = GAME_MISSIONS.find((m) => {
        if (initialFilter === 'culture') return m.type === 'culture' || m.id === 'plp-prensa' || m.id === 'radio-cristalina';
        return m.type === initialFilter;
      });
      if (found) return found.id;
    }
    return GAME_MISSIONS[0].id;
  });
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(true);
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState<boolean>(false);
  const [selectedPlatePage, setSelectedPlatePage] = useState<number>(0);
  const [activeSkillToolIndex, setActiveSkillToolIndex] = useState<number>(0);
  const [isTourPlaying, setIsTourPlaying] = useState<boolean>(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState<boolean>(false);
  const categoryMenuRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarouselLeft = () => {
    carouselRef.current?.scrollBy({ left: -260, behavior: 'smooth' });
  };

  const scrollCarouselRight = () => {
    carouselRef.current?.scrollBy({ left: 260, behavior: 'smooth' });
  };

  // Auto-scroll active card into view in carousel
  useEffect(() => {
    if (!carouselRef.current) return;
    const activeElem = carouselRef.current.querySelector('[data-selected="true"]');
    if (activeElem) {
      activeElem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [selectedMissionId, activeSkillToolIndex]);

  const CATEGORIES_LIST: { id: 'all' | MissionType; labelEs: string; labelEn: string; color: string; count: number }[] = [
    { id: 'all', labelEs: 'TODAS LAS EXPEDICIONES', labelEn: 'ALL FIELD DOSSIERS', color: 'bg-[#facc15]', count: GAME_MISSIONS.length },
    { id: 'policy', labelEs: 'ASESORÍA EN POLÍTICAS PÚBLICAS', labelEn: 'POLICY ADVISORY', color: 'bg-violet-600', count: GAME_MISSIONS.filter((m) => m.type === 'policy').length },
    { id: 'science', labelEs: 'CIENCIA & GEOFÍSICA', labelEn: 'SCIENCE & GEOPHYSICS', color: 'bg-red-600', count: GAME_MISSIONS.filter((m) => m.type === 'science').length },
    { id: 'global', labelEs: 'CUMBRES CLIMÁTICAS', labelEn: 'CLIMATE SUMMITS', color: 'bg-amber-500', count: GAME_MISSIONS.filter((m) => m.type === 'global').length },
    { id: 'culture', labelEs: 'MEDIOS & ARTE', labelEn: 'MEDIA & ARTS', color: 'bg-orange-600', count: GAME_MISSIONS.filter((m) => m.type === 'culture' || m.id === 'plp-prensa' || m.id === 'radio-cristalina').length },
    { id: 'comms', labelEs: 'COMUNIDADES & ECOLOGÍA', labelEn: 'GRASSROOTS & ECOLOGY', color: 'bg-emerald-600', count: GAME_MISSIONS.filter((m) => m.type === 'comms').length },
    { id: 'rd', labelEs: 'PROYECTOS & I+D', labelEn: 'PROJECTS & R&D', color: 'bg-purple-600', count: GAME_MISSIONS.filter((m) => m.type === 'rd').length },
    { id: 'publications', labelEs: 'PUBLICACIONES & ENSAYOS', labelEn: 'PUBLICATIONS & TREATISES', color: 'bg-indigo-600', count: GAME_MISSIONS.filter((m) => m.type === 'publications').length },
    { id: 'titles', labelEs: 'TÍTULOS UNIVERSITARIOS', labelEn: 'ACADEMIC DEGREES', color: 'bg-pink-600', count: GAME_MISSIONS.filter((m) => m.type === 'titles').length },
    { id: 'certifications', labelEs: 'CERTIFICACIONES ADICIONALES', labelEn: 'ADDITIONAL CERTIFICATIONS', color: 'bg-teal-600', count: GAME_MISSIONS.filter((m) => m.type === 'certifications').length },
    { id: 'skills', labelEs: 'SKILLS & TOOLKIT', labelEn: 'SKILLS & TOOLKIT', color: 'bg-cyan-500', count: GAME_MISSIONS.filter((m) => m.type === 'skills').length }
  ];

  // Close category dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (categoryMenuRef.current && !categoryMenuRef.current.contains(e.target as Node)) {
        setIsCategoryMenuOpen(false);
      }
    };
    if (isCategoryMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCategoryMenuOpen]);

  // Filtered list for mission rail
  const filteredMissions = GAME_MISSIONS.filter((m) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'culture') return m.type === 'culture' || m.id === 'plp-prensa' || m.id === 'radio-cristalina';
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

  const handleFilterChange = (newFilter: 'all' | MissionType) => {
    setActiveFilter(newFilter);
    setSelectedPlatePage(0);
    setActiveSkillToolIndex(0);
    setIsDossierOpen(true);
    setIsVideoPlaying(false);
    let nextMissionId = GAME_MISSIONS[0].id;
    if (newFilter !== 'all') {
      const match = GAME_MISSIONS.find((m) => {
        if (newFilter === 'culture') return m.type === 'culture' || m.id === 'plp-prensa' || m.id === 'radio-cristalina';
        return m.type === newFilter;
      });
      if (match) nextMissionId = match.id;
    }
    setSelectedMissionId(nextMissionId);
    onStateChange?.(newFilter, nextMissionId);
  };

  const mountRef = useRef<HTMLDivElement | null>(null);

  const currentMission = GAME_MISSIONS.find((m) => m.id === selectedMissionId) || GAME_MISSIONS[0];
  const currentMissionIndex = GAME_MISSIONS.findIndex((m) => m.id === selectedMissionId);

  const selectedMissionRef = useRef(selectedMissionId);
  const activeFilterRef = useRef(activeFilter);

  useEffect(() => {
    selectedMissionRef.current = selectedMissionId;
    activeFilterRef.current = activeFilter;
  }, [selectedMissionId, activeFilter]);

  // Mission selection handler (rotates globe smoothly)
  const handleSelectMission = (missionId: string) => {
    setSelectedMissionId(missionId);
    setSelectedPlatePage(0);
    setActiveSkillToolIndex(0);
    setIsDossierOpen(true);
    setIsVideoPlaying(false);
    onStateChange?.(activeFilter, missionId);
  };

  const handleNext = () => {
    const list = filteredMissions.length > 0 ? filteredMissions : GAME_MISSIONS;
    const curIdx = list.findIndex((m) => m.id === selectedMissionId);
    const nextIdx = ((curIdx >= 0 ? curIdx : 0) + 1) % list.length;
    handleSelectMission(list[nextIdx].id);
  };

  const handlePrev = () => {
    const list = filteredMissions.length > 0 ? filteredMissions : GAME_MISSIONS;
    const curIdx = list.findIndex((m) => m.id === selectedMissionId);
    const prevIdx = ((curIdx >= 0 ? curIdx : 0) - 1 + list.length) % list.length;
    handleSelectMission(list[prevIdx].id);
  };

  // Keyboard navigation for card switching & Escape to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        setIsMoreInfoOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMissionId, activeFilter, filteredMissions]);

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
      if (m.isStatic) return; // Non-geographical items do not create pushpins on the globe

      const pos = latLngToVector3(m.lat, m.lng, earthRadius * 1.002);
      const norm = pos.clone().normalize();
      const colorHex = 
        m.type === 'science' ? 0xef4444 :
        m.type === 'policy' ? 0x8b5cf6 :
        m.type === 'comms' ? 0x22c55e :
        m.type === 'global' ? 0xf59e0b :
        m.type === 'culture' ? 0xf97316 :
        m.type === 'rd' ? 0xa855f7 :
        m.type === 'publications' ? 0x6366f1 :
        m.type === 'titles' ? 0xec4899 :
        m.type === 'certifications' ? 0x0d9488 : 0x06b6d4;

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

    // 10.5 High-Energy Volumetric Beams of Light & Plasma Pulses by Category
    const BEAM_PALETTE: Record<MissionType, { beam: number; core: number; halo: number }> = {
      science:      { beam: 0xff2a5f, core: 0xffffff, halo: 0xff6688 }, // Laser Crimson
      policy:       { beam: 0x8b5cf6, core: 0xf5f3ff, halo: 0xa78bfa }, // Violet Imperial
      global:       { beam: 0xfbbf24, core: 0xfffbeb, halo: 0xfcd34d }, // Solar Amber
      culture:      { beam: 0xf97316, core: 0xffedd5, halo: 0xfb923c }, // Tangerine Fire
      comms:        { beam: 0x10b981, core: 0xecfdf5, halo: 0x34d399 }, // Bio-Emerald
      rd:           { beam: 0xa855f7, core: 0xfaf5ff, halo: 0xc084fc }, // Cosmic Violet
      publications: { beam: 0x6366f1, core: 0xeef2ff, halo: 0x818cf8 }, // Electric Indigo
      titles:       { beam: 0xec4899, core: 0xfdf2f8, halo: 0xf472b6 }, // Rose Quartz
      certifications: { beam: 0x0d9488, core: 0xf0fdfa, halo: 0x2dd4bf }, // Deep Teal
      skills:       { beam: 0x06b6d4, core: 0xecfeff, halo: 0x22d3ee }, // Cyber Cyan
    };

    interface EnergyBeamArc {
      type: MissionType;
      curve: THREE.QuadraticBezierCurve3;
      speed: number;
      offset: number;
      arcGroup: THREE.Group;
      headCore: THREE.Mesh;
      headGlow: THREE.Mesh;
      tailNodes: THREE.Mesh[];
      trailLine: THREE.Line;
    }

    const energyBeamArcs: EnergyBeamArc[] = [];
    const flightGroup = new THREE.Group();

    const missionCategories: MissionType[] = ['science', 'policy', 'global', 'comms', 'culture', 'rd', 'publications', 'titles', 'certifications', 'skills'];

    missionCategories.forEach((cat, catIdx) => {
      const catMissions = GAME_MISSIONS.filter((m) => m.type === cat && !m.isStatic);
      if (catMissions.length < 2) return;

      const palette = BEAM_PALETTE[cat];

      for (let i = 0; i < catMissions.length; i++) {
        const fromM = catMissions[i];
        const toM = catMissions[(i + 1) % catMissions.length];
        const posA = latLngToVector3(fromM.lat, fromM.lng, earthRadius * 1.002);
        const posB = latLngToVector3(toM.lat, toM.lng, earthRadius * 1.002);

        const mid = new THREE.Vector3().addVectors(posA, posB).multiplyScalar(0.5);
        const dist = posA.distanceTo(posB);
        // Elevate midpoint above the sphere surface proportionally to distance
        mid.normalize().multiplyScalar(earthRadius + Math.max(0.20, dist * 0.24));

        const curve = new THREE.QuadraticBezierCurve3(posA, mid, posB);

        const arcGroup = new THREE.Group();

        // 1. Volumetric Energy Conduit (Outer glowing tube)
        const tubeGeo = new THREE.TubeGeometry(curve, 36, 0.006, 6, false);
        const tubeMat = new THREE.MeshBasicMaterial({
          color: palette.beam,
          transparent: true,
          opacity: 0.38,
          blending: THREE.AdditiveBlending,
        });
        const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
        arcGroup.add(tubeMesh);

        // 2. Inner Laser Core Line
        const coreGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(36));
        const coreMat = new THREE.LineBasicMaterial({
          color: palette.halo,
          transparent: true,
          opacity: 0.75,
          blending: THREE.AdditiveBlending,
        });
        const coreLine = new THREE.Line(coreGeo, coreMat);
        arcGroup.add(coreLine);

        // 3. Traveling Energy Beam Head (Hot white/tinted core + colorful plasma halo)
        const headCoreGeo = new THREE.SphereGeometry(0.016, 8, 8);
        const headCoreMat = new THREE.MeshBasicMaterial({
          color: palette.core,
          blending: THREE.AdditiveBlending,
        });
        const headCore = new THREE.Mesh(headCoreGeo, headCoreMat);
        arcGroup.add(headCore);

        const headGlowGeo = new THREE.SphereGeometry(0.038, 12, 12);
        const headGlowMat = new THREE.MeshBasicMaterial({
          color: palette.beam,
          transparent: true,
          opacity: 0.7,
          blending: THREE.AdditiveBlending,
        });
        const headGlow = new THREE.Mesh(headGlowGeo, headGlowMat);
        arcGroup.add(headGlow);

        // 4. Trailing Light Streak (5 nodes along the curve behind the head)
        const tailNodes: THREE.Mesh[] = [];
        const tailOpacities = [0.55, 0.42, 0.30, 0.20, 0.10];
        const tailSizes = [0.028, 0.022, 0.017, 0.012, 0.008];

        for (let tIdx = 0; tIdx < 5; tIdx++) {
          const tGeo = new THREE.SphereGeometry(tailSizes[tIdx], 8, 8);
          const tMat = new THREE.MeshBasicMaterial({
            color: palette.beam,
            transparent: true,
            opacity: tailOpacities[tIdx],
            blending: THREE.AdditiveBlending,
          });
          const tNode = new THREE.Mesh(tGeo, tMat);
          arcGroup.add(tNode);
          tailNodes.push(tNode);
        }

        // 5. Dynamic Streaming Beam Line (Connects head and tail nodes into a solid streak of light)
        const trailGeo = new THREE.BufferGeometry().setFromPoints(new Array(6).fill(new THREE.Vector3()));
        const trailMat = new THREE.LineBasicMaterial({
          color: palette.halo,
          transparent: true,
          opacity: 0.85,
          blending: THREE.AdditiveBlending,
        });
        const trailLine = new THREE.Line(trailGeo, trailMat);
        arcGroup.add(trailLine);

        flightGroup.add(arcGroup);

        energyBeamArcs.push({
          type: cat,
          curve,
          speed: 0.10 + (catIdx % 3) * 0.02,
          offset: (i / catMissions.length) + (catIdx * 0.15),
          arcGroup,
          headCore,
          headGlow,
          tailNodes,
          trailLine,
        });
      }
    });

    earthGroup.add(flightGroup);

    // Initial Globe Orientation (Focus on first mission or calm neutral perspective)
    const initM = GAME_MISSIONS.find((m) => m.id === selectedMissionRef.current) || GAME_MISSIONS[0];
    const initVec = latLngToVector3(initM.isStatic ? 20 : initM.lat, initM.isStatic ? -30 : initM.lng, 1).normalize();
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
      // If active mission changed, smoothly slerp to target coordinates (only if not static)
      if (selectedMissionRef.current !== lastMissionId) {
        lastMissionId = selectedMissionRef.current;
        const curM = GAME_MISSIONS.find((m) => m.id === selectedMissionRef.current) || GAME_MISSIONS[0];
        if (!curM.isStatic) {
          const v = latLngToVector3(curM.lat, curM.lng, 1).normalize();
          targetQuat.setFromUnitVectors(v, new THREE.Vector3(0, 0, 1));
          velX = 0;
          velY = 0;
        }
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

      // Update target reticle position and pulse animation (hide if static item)
      const activeM = GAME_MISSIONS.find((m) => m.id === selectedMissionRef.current) || GAME_MISSIONS[0];
      if (activeM.isStatic) {
        reticleGroup.visible = false;
      } else {
        reticleGroup.visible = true;
        const activePos = latLngToVector3(activeM.lat, activeM.lng, earthRadius * 1.004);
        reticleGroup.position.copy(activePos);
        reticleGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), activePos.clone().normalize());

        const pulse = (Date.now() % 1400) / 1400;
        pulseRing.scale.setScalar(1 + pulse * 2.2);
        pulseRingMat.opacity = 1 - pulse;
      }

      // Update high-energy beams of light & trailing plasma streams
      const fTime = Date.now() * 0.001;
      const filter = activeFilterRef.current;

      energyBeamArcs.forEach(({ curve, speed, offset, headCore, headGlow, tailNodes, trailLine, type, arcGroup }) => {
        const matchesFilter = filter === 'all' || type === filter;
        arcGroup.visible = matchesFilter;
        if (!matchesFilter) return;

        const t = (fTime * speed + offset) % 1;
        const headPos = curve.getPoint(t);
        headCore.position.copy(headPos);
        headGlow.position.copy(headPos);

        const glowPulse = 1 + 0.25 * Math.sin(fTime * 7 + offset * 15);
        headGlow.scale.setScalar(glowPulse);

        const trailPoints: THREE.Vector3[] = [headPos];
        const trailOffsets = [0.012, 0.024, 0.038, 0.052, 0.070];
        tailNodes.forEach((node, nIdx) => {
          const tNode = (t - trailOffsets[nIdx] + 1) % 1;
          const pNode = curve.getPoint(tNode);
          node.position.copy(pNode);
          trailPoints.push(pNode);
        });

        trailLine.geometry.setFromPoints(trailPoints);
      });

      // Filter highlighting for beacons
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

  const heroPinColor =
    currentMission.type === 'science' ? 'bg-red-600 border-red-900' :
    currentMission.type === 'policy' ? 'bg-violet-600 border-violet-900' :
    currentMission.type === 'comms' ? 'bg-emerald-600 border-emerald-900' :
    currentMission.type === 'global' ? 'bg-amber-500 border-amber-800' :
    currentMission.type === 'culture' || (activeFilter === 'culture' && (currentMission.id === 'plp-prensa' || currentMission.id === 'radio-cristalina')) ? 'bg-orange-500 border-orange-800' :
    currentMission.type === 'titles' ? 'bg-pink-600 border-pink-900' :
    currentMission.type === 'certifications' ? 'bg-teal-600 border-teal-900' :
    currentMission.type === 'publications' ? 'bg-indigo-600 border-indigo-900' :
    'bg-purple-600 border-purple-900';

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
      <header className="relative z-30 w-full px-3 sm:px-6 pt-3 pb-1 flex flex-wrap items-center justify-between gap-2.5 bg-transparent border-none shadow-none pointer-events-none">
        
        {/* Left: Identity Sticker Box & Back Button */}
        <div className="flex items-center space-x-2.5 sm:space-x-3 pointer-events-auto">
          {onBackToMenu && (
            <button
              onClick={onBackToMenu}
              className="px-2.5 sm:px-3 py-1 bg-black hover:bg-[#facc15] text-[#facc15] hover:text-black border-2 border-[#facc15] hover:border-black font-mono text-xs font-black tracking-wider uppercase transition shadow-[2px_2px_0px_#ffffff] flex items-center space-x-1 active:scale-95"
              title={currentLang === 'es' ? 'Volver al menú principal' : 'Return to main menu'}
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
            {/* Geofrecuencia Official Insignia */}
            <div 
              className="absolute -top-1 -left-1 w-5 h-5 rounded-md bg-[#090b0e] border border-white shadow-[1.5px_1.5px_0px_#facc15] p-0.5 flex items-center justify-center -rotate-6"
              title={currentLang === 'es' ? 'Geofrecuencia: Pulso Geofísico & Frecuencia de Comunicación' : 'Geofrecuencia: Geophysical Pulse & Communication Frequency'}
            >
              <img src={resolveAsset('/favicon.svg')} alt="Geofrecuencia Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Stencil Title Tape */}
          <div className="flex flex-col">
            <div className="bg-white text-black px-2.5 sm:px-3 py-0.5 border-2 border-black shadow-[2px_2px_0px_#facc15] -rotate-1 inline-block self-start">
              <h1 className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase leading-none">
                [DANIEL SANTANDER // {currentLang === 'es' ? 'EL PLANETA' : 'THE PLANET'}]
              </h1>
            </div>
            {currentMission.isStatic ? (
              <div className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-cyan-400 uppercase mt-0.5">
                🌐 {formatCity(currentMission.city, currentLang).toUpperCase()} • {formatCountry(currentMission.country, currentLang).toUpperCase()}
              </div>
            ) : (
              <div className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase mt-0.5">
                SECTOR: {formatCity(currentMission.city, currentLang).toUpperCase()} ({Math.abs(currentMission.lat).toFixed(1)}°{currentMission.lat >= 0 ? 'N' : 'S'} {Math.abs(currentMission.lng).toFixed(1)}°{currentMission.lng >= 0 ? 'E' : 'W'})
              </div>
            )}
          </div>
        </div>

        {/* Center: Category Filter Dropdown Menu */}
        {(() => {
          const activeCategoryItem = CATEGORIES_LIST.find((c) => c.id === activeFilter) || CATEGORIES_LIST[0];
          return (
            <div className="relative pointer-events-auto" ref={categoryMenuRef}>
              <button
                onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
                className="px-3 py-1.5 bg-black/95 hover:bg-black text-[#facc15] border-2 border-[#facc15] shadow-[2px_2px_0px_#ffffff] font-mono font-black text-xs uppercase tracking-wider flex items-center space-x-2 transition cursor-pointer active:scale-95"
                title={currentLang === 'es' ? 'Menú desplegable de categorías' : 'Category filter dropdown'}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${activeCategoryItem.color} animate-pulse shrink-0`} />
                <span className="truncate max-w-[150px] sm:max-w-[220px]">
                  {currentLang === 'es' ? activeCategoryItem.labelEs : activeCategoryItem.labelEn} ({activeCategoryItem.count})
                </span>
                <span className={`text-[10px] text-[#facc15] transition-transform duration-150 ${isCategoryMenuOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {isCategoryMenuOpen && (
                <div className="absolute left-0 mt-2 w-64 sm:w-72 bg-[#0c1017] border-2 border-black rounded-lg shadow-[8px_8px_0px_#000000] z-50 py-1 overflow-hidden animate-fadeIn">
                  <div className="px-3 py-1.5 border-b border-white/10 text-[9px] font-mono text-neutral-400 font-bold uppercase tracking-wider flex items-center justify-between">
                    <span>{currentLang === 'es' ? 'CATEGORÍAS DE PORTAFOLIO:' : 'PORTFOLIO TRACKS:'}</span>
                    <span className="text-[#facc15]">{GAME_MISSIONS.length} {currentLang === 'es' ? 'TOTAL' : 'TOTAL'}</span>
                  </div>
                  <div className="max-h-72 overflow-y-auto no-scrollbar py-1">
                    {CATEGORIES_LIST.map((cat) => {
                      const isSelected = cat.id === activeFilter;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            handleFilterChange(cat.id);
                            setIsCategoryMenuOpen(false);
                          }}
                          className={`w-full px-3 py-2 text-left font-mono text-xs flex items-center justify-between transition cursor-pointer ${
                            isSelected
                              ? 'bg-white/15 text-[#facc15] font-black border-l-4 border-[#facc15]'
                              : 'text-neutral-200 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center space-x-2 truncate pr-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${cat.color} shrink-0`} />
                            <span className="truncate uppercase font-bold text-[11px]">
                              {currentLang === 'es' ? cat.labelEs : cat.labelEn}
                            </span>
                          </div>
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.2 rounded shrink-0 ${
                              isSelected ? 'bg-[#facc15] text-black font-black' : 'bg-white/10 text-neutral-400'
                            }`}
                          >
                            {cat.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        {/* Right: Actions (Tour, Dossier, CV, Hire Me, Language on Far Right) */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 ml-auto pointer-events-auto">
          {/* Guided Tour Auto-Play Toggle */}
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

          {/* Dossier Document View Button */}
          {onExitToDossier && (
            <button
              onClick={onExitToDossier}
              className="px-2 py-1 bg-[#ede5d6] hover:bg-white text-black font-mono font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all flex items-center space-x-1"
              title={currentLang === 'es' ? 'Volver a versión documento' : 'Switch to document view'}
            >
              <FileText className="w-3.5 h-3.5 text-[#7f3419]" />
              <span className="hidden lg:inline">{currentLang === 'es' ? 'DOSSIER' : 'DOSSIER'}</span>
            </button>
          )}

          {/* One-Click CV Loot Download (Kept on Right) */}
          <a
            href={resolveAsset('/Daniel_Santander_CV.pdf')}
            download="Daniel_Santander_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 bg-[#22c55e] hover:bg-[#16a34a] text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all flex items-center space-x-1 rotate-1"
            title={currentLang === 'es' ? 'Descargar Currículum Vitae oficial (PDF)' : 'Download official Curriculum Vitae (PDF)'}
          >
            <Download className="w-3.5 h-3.5 text-black" />
            <span className="hidden sm:inline">{currentLang === 'es' ? 'CV (PDF)' : 'CV (PDF)'}</span>
          </a>

          {/* Hire Me Direct Button (Kept on Right) */}
          {onOpenHireMe && (
            <button
              onClick={onOpenHireMe}
              className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all flex items-center space-x-1"
              title={currentLang === 'es' ? 'Contratar // Contactar a Daniel' : 'Hire Me // Contact Daniel'}
            >
              <span>💼</span>
              <span className="hidden xl:inline">{currentLang === 'es' ? 'HIRE ME' : 'HIRE ME'}</span>
            </button>
          )}

          {/* Language Switcher (Moved to Far Top-Right) */}
          <button
            onClick={onToggleLanguage}
            className="px-2 py-1 bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all flex items-center space-x-1"
            title={currentLang === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? 'ES' : 'EN'}</span>
          </button>
        </div>
      </header>

      <main className="relative z-20 flex-1 w-full max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8 pt-2 pb-2 sm:pb-3 flex flex-col justify-between overflow-y-auto lg:overflow-visible no-scrollbar pointer-events-none">
        
        {/* Main Tactical Stage: Pinned Photo on Left + Dossier Briefing & 1-Row Carousel on Right */}
        {isDossierOpen && (
          <div className="w-full flex-1 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 lg:gap-8 pointer-events-auto h-full">
            
            {/* ======================================================== */}
            {/* A. LEFT COLUMN: PINNED HERO PHOTO (SMALLER & DETACHED)   */}
            {/* ======================================================== */}
            <div className="w-full lg:w-[38%] xl:w-[36%] max-w-[460px] flex flex-col items-center justify-center self-center my-auto">
              <div className="relative group w-full -rotate-1 hover:rotate-0 transition-transform duration-200 bg-[#fbfbf9] p-3 sm:p-4 pb-4 border-4 border-black shadow-[0_16px_36px_rgba(0,0,0,0.85),_8px_8px_0px_#000000] flex flex-col justify-between">
                
                {/* Pushpin pinned through the photo paper onto the wall */}
                <div className="absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                  <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${heroPinColor} border-2 border-black shadow-[0_3px_6px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/80" />
                  </div>
                </div>

                {/* Yellow Sticky Note / Post-it on Top Left Corner */}
                <div className="absolute top-3 left-3 z-20 bg-[#fef08a] text-black font-mono font-black text-xs px-2.5 py-1 border border-black shadow-[2px_2px_0px_#000] -rotate-3 uppercase">
                  {currentMission.code} // {formatCity(currentMission.city, currentLang).toUpperCase()}
                </div>

                {/* Media Viewport Frame - BALANCED & PROPORTIONED */}
                <div className="relative w-full rounded-xl bg-[#080c14] border-2 border-black shadow-[4px_4px_0px_#000000] overflow-hidden flex items-center justify-center min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] xl:min-h-[380px] max-h-[440px]">
                  {currentMission.mediaType === 'video' && currentMission.embedUrl && isVideoPlaying ? (
                    <div className="relative w-full h-full aspect-video min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] bg-black">
                      <iframe
                        src={`${currentMission.embedUrl}${currentMission.embedUrl.includes('?') ? '&' : '?'}autoplay=1`}
                        title={currentLang === 'es' ? currentMission.titleEs : currentMission.titleEn}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <button
                        onClick={() => setIsVideoPlaying(false)}
                        className="absolute top-3 right-3 z-30 px-3 py-1.5 bg-black/90 hover:bg-[#facc15] text-white hover:text-black font-mono font-black text-xs uppercase border border-white/40 rounded shadow-lg transition flex items-center space-x-1.5 cursor-pointer"
                        title={currentLang === 'es' ? 'Cerrar reproductor y ver fotografías' : 'Close player and view photos'}
                      >
                        <span>✕ {currentLang === 'es' ? 'VER FOTOS' : 'VIEW PHOTOS'}</span>
                      </button>
                    </div>
                  ) : currentMission.mediaType === 'audio' ? (
                    /* Pletina de Casete de Radio Campesina */
                    <div className="w-full h-full p-8 sm:p-12 bg-[#161b22] text-white flex flex-col items-center justify-center space-y-6">
                      <div className="flex items-center justify-between w-full font-mono text-xs text-emerald-400 border-b border-white/10 pb-2">
                        <span>RADIO CRISTALINA 96.3 FM • {formatCity('Maule Sur', currentLang).toUpperCase()}</span>
                        <span>{currentLang === 'es' ? 'SIDE A • CÁPSULA RURAL (TRANSMISIÓN DE CAMPO)' : 'SIDE A • RURAL BROADCAST (FIELD TRANSMISSION)'}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-12 py-6">
                        <div className="w-20 h-20 rounded-full border-3 border-emerald-400 flex items-center justify-center animate-spin" style={{ animationDuration: '6s' }}>
                          <div className="w-7 h-7 bg-emerald-400 rounded-full" />
                        </div>
                        <span className="font-mono text-lg text-emerald-300 font-bold tracking-widest">96.3 MHz FM</span>
                        <div className="w-20 h-20 rounded-full border-3 border-emerald-400 flex items-center justify-center animate-spin" style={{ animationDuration: '6s' }}>
                          <div className="w-7 h-7 bg-emerald-400 rounded-full" />
                        </div>
                      </div>
                      <audio controls className="w-full max-w-md">
                        <source src={resolveAsset('/audio/corte_constitucion.mp3')} type="audio/mp3" />
                        {currentLang === 'es' ? 'Audio no disponible.' : 'Audio unavailable.'}
                      </audio>
                    </div>
                  ) : currentMission.availablePages && currentMission.availablePages.length > 0 ? (
                    currentMission.availablePages[selectedPlatePage].pageSrc.startsWith('TECH_MATRIX') ? (() => {
                      /* ★ SINGLE-LOGO HERO SHOWCASE: UN LOGO A LA VEZ (MASSIVE 150% AREA) ★ */
                      const pageCode = currentMission.availablePages[selectedPlatePage].pageSrc;
                      const toolList = pageCode === 'TECH_MATRIX_CIENCIA' ? TOOLS_CIENCIA : pageCode === 'TECH_MATRIX_COMMS' ? TOOLS_COMMS : TOOLS_EQUIPOS;
                      const safeIdx = ((activeSkillToolIndex % toolList.length) + toolList.length) % toolList.length;
                      const currentTool = toolList[safeIdx];

                      return (
                        <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-[#0a0f19]">
                          {/* Top Bar: Category & Counter */}
                          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                            <div className="flex items-center space-x-2">
                              <span className="w-3 h-3 rounded-full bg-[#facc15] animate-pulse" />
                              <span className="font-mono text-sm font-black text-[#facc15] uppercase tracking-wider">
                                {pageCode === 'TECH_MATRIX_CIENCIA'
                                  ? (currentLang === 'es' ? 'STACK CIENTÍFICO' : 'SCIENTIFIC STACK')
                                  : pageCode === 'TECH_MATRIX_COMMS'
                                  ? (currentLang === 'es' ? 'PRODUCCIÓN & MEDIOS' : 'MEDIA & BROADCAST')
                                  : (currentLang === 'es' ? 'INSTRUMENTAL DE CAMPO' : 'FIELD GEAR')}
                              </span>
                            </div>
                            <span className="font-mono text-xs bg-white/10 text-neutral-300 px-2.5 py-1 rounded border border-white/15">
                              {safeIdx + 1} / {toolList.length}
                            </span>
                          </div>

                          {/* Hero Section: CENTERED LOGO PEDESTAL */}
                          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-4 sm:p-5 bg-black/60 rounded-xl border border-white/10">
                            {/* Logo Pedestal */}
                            <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-gradient-to-b from-white/10 to-black/80 border-2 border-white/20 shadow-xl flex items-center justify-center p-3 group">
                              <div 
                                className="absolute inset-0 rounded-xl blur-2xl opacity-35 pointer-events-none"
                                style={{ backgroundColor: currentTool.color }}
                              />
                              <TechLogo name={currentTool.name} size={68} className="drop-shadow-[0_6px_18px_rgba(0,0,0,0.95)] transition-transform group-hover:scale-105" />
                            </div>

                            {/* Tool Info */}
                            <div className="flex-1 flex flex-col space-y-1.5 text-center sm:text-left min-w-0">
                              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                                <h3 className="font-mono font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
                                  {currentTool.name}
                                </h3>
                                <span className="font-mono text-xs font-black px-2 py-0.5 rounded border border-[#facc15]/40 text-[#facc15] bg-[#facc15]/10">
                                  ★ {getToolLevel(currentTool, currentLang)}
                                </span>
                              </div>

                              <p className="font-mono text-xs text-cyan-300 font-bold leading-tight">
                                {getToolTags(currentTool, currentLang)}
                              </p>

                              <p className="text-xs text-neutral-200 leading-relaxed pt-0.5 line-clamp-3">
                                {currentLang === 'es' ? currentTool.descEs : currentTool.descEn}
                              </p>

                              <div className="pt-1.5 flex items-start space-x-1.5 text-xs font-mono text-emerald-400 border-t border-white/10">
                                <span className="font-bold shrink-0">{currentLang === 'es' ? '▶ APLICACIÓN:' : '▶ APPLICATION:'}</span>
                                <span className="text-neutral-300 italic text-[11px] line-clamp-2">
                                  {currentLang === 'es' ? currentTool.applicationEs : currentTool.applicationEn}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Footer Help text */}
                          <div className="text-center pt-0.5 text-[11px] font-mono text-neutral-400">
                            ★ {currentLang === 'es'
                              ? 'Selecciona herramientas desde el panel inferior derecho o la barra carrusel'
                              : 'Select tools from the bottom-right panel or carousel bar'}
                          </div>
                        </div>
                      );
                    })() : (
                      /* NATURAL PHOTO & PLATE VIEWER */
                      <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] xl:min-h-[380px] max-h-[440px] flex items-center justify-center bg-black/60 overflow-hidden group">
                        <div
                          className="absolute inset-0 bg-center bg-cover filter blur-3xl opacity-35 scale-125 pointer-events-none"
                          style={{
                            backgroundImage: `url('${resolveAsset(
                              currentLang === 'en' && currentMission.availablePages[selectedPlatePage].pageSrcEn
                                ? currentMission.availablePages[selectedPlatePage].pageSrcEn
                                : currentMission.availablePages[selectedPlatePage].pageSrc
                            )}')`
                          }}
                        />

                        <img
                          src={resolveAsset(
                            currentLang === 'en' && currentMission.availablePages[selectedPlatePage].pageSrcEn
                              ? currentMission.availablePages[selectedPlatePage].pageSrcEn
                              : currentMission.availablePages[selectedPlatePage].pageSrc
                          )}
                          alt={
                            currentLang === 'es'
                              ? currentMission.availablePages[selectedPlatePage].titleEs
                              : currentMission.availablePages[selectedPlatePage].titleEn
                          }
                          className="relative z-10 max-h-[280px] sm:max-h-[320px] lg:max-h-[350px] w-auto max-w-full object-contain rounded-lg drop-shadow-[0_16px_36px_rgba(0,0,0,0.98)]"
                        />

                        {/* Play Video Controls overlay when mediaType is video */}
                        {currentMission.mediaType === 'video' && currentMission.embedUrl && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsVideoPlaying(true);
                              }}
                              className="absolute top-3 right-3 z-30 px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white font-mono font-black text-xs uppercase border border-black rounded shadow-[2px_2px_0px_#000] flex items-center space-x-1.5 active:scale-95 transition cursor-pointer"
                              title={currentLang === 'es' ? 'Reproducir video en vivo' : 'Play live video'}
                            >
                              <Play className="w-3.5 h-3.5 fill-white" />
                              <span>{currentLang === 'es' ? '▶ REPRODUCIR VIDEO' : '▶ PLAY VIDEO'}</span>
                            </button>

                            <div
                              onClick={() => setIsVideoPlaying(true)}
                              className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer group/vidhero bg-black/20 hover:bg-black/10 transition-colors"
                              title={currentLang === 'es' ? 'Click para reproducir video' : 'Click to play video'}
                            >
                              <div className="flex flex-col items-center space-y-2 transform group-hover/vidhero:scale-105 transition-all">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/95 hover:bg-red-500 text-white border-2 border-white shadow-[0_8px_30px_rgba(0,0,0,0.95)] flex items-center justify-center">
                                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white ml-1" />
                                </div>
                                <span className="font-mono text-xs sm:text-sm font-black text-white bg-black/85 px-3 py-1 rounded border border-white/30 uppercase tracking-wider shadow-lg">
                                  {currentLang === 'es' ? 'VER REGISTRO EN VIVO 4K' : 'WATCH 4K LIVE RECORD'}
                                </span>
                              </div>
                            </div>
                          </>
                        )}

                        {/* Floating Nav Arrows when multiple pages exist */}
                        {currentMission.availablePages.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedPlatePage(
                                  (prev) =>
                                    (prev - 1 + currentMission.availablePages!.length) % currentMission.availablePages!.length
                                );
                              }}
                              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/75 hover:bg-[#facc15] text-white hover:text-black border border-white/30 flex items-center justify-center transition shadow-lg cursor-pointer"
                              title={currentLang === 'es' ? 'Foto anterior' : 'Previous picture'}
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedPlatePage((prev) => (prev + 1) % currentMission.availablePages!.length);
                              }}
                              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/75 hover:bg-[#facc15] text-white hover:text-black border border-white/30 flex items-center justify-center transition shadow-lg cursor-pointer"
                              title={currentLang === 'es' ? 'Foto siguiente' : 'Next picture'}
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>

                            <div className="absolute bottom-2.5 left-2.5 right-2.5 z-20 px-3 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs font-mono shadow-lg">
                              <span className="text-white font-bold truncate pr-2 text-xs">
                                {currentLang === 'es'
                                  ? currentMission.availablePages[selectedPlatePage].titleEs
                                  : currentMission.availablePages[selectedPlatePage].titleEn}
                              </span>
                              <span className="font-mono text-xs text-[#facc15] font-black bg-white/10 px-2 py-0.5 rounded border border-white/10 shrink-0">
                                {selectedPlatePage + 1}/{currentMission.availablePages.length}
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    )
                  ) : currentMission.src ? (
                    /* SINGLE NATURAL PHOTO */
                    <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] xl:min-h-[380px] max-h-[440px] flex items-center justify-center bg-black/60 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-center bg-cover filter blur-3xl opacity-35 scale-125 pointer-events-none"
                        style={{
                          backgroundImage: `url('${resolveAsset(
                            currentLang === 'en' && currentMission.srcEn ? currentMission.srcEn : currentMission.src
                          )}')`
                        }}
                      />
                      <img
                        src={resolveAsset(
                          currentLang === 'en' && currentMission.srcEn ? currentMission.srcEn : currentMission.src
                        )}
                        alt={currentLang === 'es' ? currentMission.titleEs : currentMission.titleEn}
                        className="relative z-10 max-h-[280px] sm:max-h-[320px] lg:max-h-[350px] w-auto max-w-full object-contain rounded-lg drop-shadow-[0_16px_36px_rgba(0,0,0,0.98)]"
                      />
                      {currentMission.mediaType === 'video' && currentMission.embedUrl && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsVideoPlaying(true);
                            }}
                            className="absolute top-3 right-3 z-30 px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white font-mono font-black text-xs uppercase border border-black rounded shadow-[2px_2px_0px_#000] flex items-center space-x-1.5 active:scale-95 transition cursor-pointer"
                            title={currentLang === 'es' ? 'Reproducir video en vivo' : 'Play live video'}
                          >
                            <Play className="w-3.5 h-3.5 fill-white" />
                            <span>{currentLang === 'es' ? '▶ REPRODUCIR VIDEO' : '▶ PLAY VIDEO'}</span>
                          </button>

                          <div
                            onClick={() => setIsVideoPlaying(true)}
                            className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer group/vidhero bg-black/20 hover:bg-black/10 transition-colors"
                            title={currentLang === 'es' ? 'Click para reproducir video' : 'Click to play video'}
                          >
                            <div className="flex flex-col items-center space-y-2 transform group-hover/vidhero:scale-105 transition-all">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/95 hover:bg-red-500 text-white border-2 border-white shadow-[0_8px_30px_rgba(0,0,0,0.95)] flex items-center justify-center">
                                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white ml-1" />
                              </div>
                              <span className="font-mono text-xs sm:text-sm font-black text-white bg-black/85 px-3 py-1 rounded border border-white/30 uppercase tracking-wider shadow-lg">
                                {currentLang === 'es' ? 'VER REGISTRO EN VIVO 4K' : 'WATCH 4K LIVE RECORD'}
                              </span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    /* Classified Pending Blueprint */
                    <div className="w-full h-full min-h-[320px] p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-amber-500/35 rounded-xl bg-black/50">
                      <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-3">
                        <Layers className="w-7 h-7 animate-pulse" />
                      </div>
                      <span className="font-mono text-sm font-bold tracking-widest text-amber-300 uppercase">
                        {currentLang === 'es' ? '[ REGISTRO VISUAL PENDIENTE ]' : '[ PENDING VISUAL ARCHIVE ]'}
                      </span>
                      <p className="text-xs font-mono text-neutral-300 max-w-md mt-2 leading-relaxed">
                        {currentLang === 'es'
                          ? 'Hito verificado en CV sin archivo gráfico asignado aún.'
                          : 'Milestone verified in CV without assigned graphic file yet.'}
                      </p>
                      <div className="mt-4 px-3 py-1 rounded bg-white/5 border border-white/10 font-mono text-xs text-neutral-400">
                        ID: <span className="text-white font-bold">{currentMission.code}</span> • {formatCity(currentMission.city, currentLang)}, {formatCountry(currentMission.country, currentLang)}
                      </div>
                    </div>
                  )}
                </div>

                {/* Pinned Photo Handwritten Marker Caption at Bottom */}
                <div className="pt-3 flex flex-col space-y-1.5 border-t border-black/15 mt-3">
                  {/* Top row: Verified flag & city + dates + quick arrows */}
                  <div className="flex items-center justify-between font-mono text-xs font-bold text-neutral-700">
                    <div className="flex items-center space-x-1.5 truncate pr-2">
                      <span className="text-emerald-700 font-black">✔</span>
                      <span className="uppercase tracking-tight text-neutral-900 font-black truncate max-w-[200px] sm:max-w-[240px]">
                        {currentMission.flag} {formatCity(currentMission.city, currentLang)}, {formatCountry(currentMission.country, currentLang)}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1 shrink-0">
                      <button
                        onClick={handlePrev}
                        className="p-1 bg-black hover:bg-[#facc15] text-white hover:text-black border border-black shadow-[1px_1px_0px_#000] active:scale-95 transition-all cursor-pointer"
                        title={currentLang === 'es' ? 'Ficha anterior (←)' : 'Previous card (←)'}
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="p-1 bg-black hover:bg-[#facc15] text-white hover:text-black border border-black shadow-[1px_1px_0px_#000] active:scale-95 transition-all cursor-pointer"
                        title={currentLang === 'es' ? 'Ficha siguiente (→)' : 'Next card (→)'}
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Role Badge and Date */}
                  <div className="flex items-center space-x-2 pt-0.5">
                    <span className="bg-[#facc15] text-black font-mono font-black text-[9px] sm:text-[10px] px-2 py-0.5 border border-black shadow-[1.5px_1.5px_0px_#000] uppercase -rotate-0.5">
                      {currentLang === 'es' ? currentMission.roleEs : currentMission.roleEn}
                    </span>
                    <span className="text-neutral-500 font-mono text-[10px] sm:text-[11px] font-bold">
                      • {formatDate(currentMission.date, currentLang)}
                    </span>
                  </div>

                  {/* Full Uncut Title (no line-clamp-1) */}
                  <h3 className="font-mono font-black text-sm sm:text-base text-neutral-950 uppercase leading-snug tracking-tight pt-0.5">
                    {currentLang === 'es' ? currentMission.titleEs : currentMission.titleEn}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs font-mono text-neutral-700 font-bold leading-normal">
                    {currentLang === 'es' ? currentMission.subtitleEs : currentMission.subtitleEn}
                  </p>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* B. RIGHT COLUMN: TRIGGER BAR & 1-ROW PINNED CAROUSEL (DOCKED AT BOTTOM)   */}
            {/* ========================================================================= */}
            <div className="w-full lg:w-[58%] xl:w-[54%] max-w-[660px] xl:max-w-[740px] flex flex-col space-y-1.5 self-center lg:self-end pb-1">
              
              {/* Trigger Bar to open More Information Drawer */}
              <div className="flex items-center justify-between bg-black/85 border-2 border-black p-1.5 shadow-[4px_4px_0px_#000000] -rotate-0.5 backdrop-blur-md">
                <button
                  onClick={() => setIsMoreInfoOpen(true)}
                  className="px-3 py-1.5 bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs uppercase tracking-wider flex items-center space-x-2 border border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all cursor-pointer"
                  title={currentLang === 'es' ? 'Abrir ficha completa hacia la derecha' : 'Slide open detailed dossier to the right'}
                >
                  <FileText className="w-3.5 h-3.5 text-black" />
                  <span>{currentLang === 'es' ? '📄 MÁS INFORMACIÓN →' : '📄 MORE INFORMATION →'}</span>
                </button>

                <div className="flex items-center space-x-1.5 font-mono text-xs text-white pr-1">
                  <span className="text-[10px] text-[#facc15] font-black mr-1 hidden sm:inline">
                    {currentMission.code}
                  </span>
                  <button
                    onClick={() => {
                      handlePrev();
                      scrollCarouselLeft();
                    }}
                    className="p-1 bg-black hover:bg-[#facc15] text-white hover:text-black border border-white/40 hover:border-black transition font-mono font-black shadow-[1px_1px_0px_#000] cursor-pointer"
                    title={currentLang === 'es' ? 'Ficha anterior' : 'Previous mission'}
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      handleNext();
                      scrollCarouselRight();
                    }}
                    className="p-1 bg-black hover:bg-[#facc15] text-white hover:text-black border border-white/40 hover:border-black transition font-mono font-black shadow-[1px_1px_0px_#000] cursor-pointer"
                    title={currentLang === 'es' ? 'Ficha siguiente' : 'Next mission'}
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Quick Track Switcher when inside Skills */}
              {currentMission.type === 'skills' && (
                <div className="flex items-center space-x-1.5 pb-1 overflow-x-auto no-scrollbar shrink-0">
                  <button
                    onClick={() => {
                      handleSelectMission('skills-ciencia-geofisica');
                      setActiveSkillToolIndex(0);
                    }}
                    className={`px-2.5 py-0.5 font-mono text-[9px] font-black uppercase transition cursor-pointer shrink-0 border-2 border-black shadow-[2px_2px_0px_#000] -rotate-1 ${
                      currentMission.id === 'skills-ciencia-geofisica'
                        ? 'bg-red-600 text-white ring-2 ring-yellow-400'
                        : 'bg-black/80 hover:bg-black text-neutral-200'
                    }`}
                  >
                    {currentLang === 'es' ? '⚡ CIENCIA (9)' : '⚡ SCIENCE (9)'}
                  </button>
                  <button
                    onClick={() => {
                      handleSelectMission('skills-comms-cultura');
                      setActiveSkillToolIndex(0);
                    }}
                    className={`px-2.5 py-0.5 font-mono text-[9px] font-black uppercase transition cursor-pointer shrink-0 border-2 border-black shadow-[2px_2px_0px_#000] rotate-1 ${
                      currentMission.id === 'skills-comms-cultura'
                        ? 'bg-emerald-600 text-white ring-2 ring-yellow-400'
                        : 'bg-black/80 hover:bg-black text-neutral-200'
                    }`}
                  >
                    {currentLang === 'es' ? '🎬 MEDIOS (6)' : '🎬 MEDIA (6)'}
                  </button>
                  <button
                    onClick={() => {
                      handleSelectMission('skills-equipos-idiomas');
                      setActiveSkillToolIndex(0);
                    }}
                    className={`px-2.5 py-0.5 font-mono text-[9px] font-black uppercase transition cursor-pointer shrink-0 border-2 border-black shadow-[2px_2px_0px_#000] -rotate-1 ${
                      currentMission.id === 'skills-equipos-idiomas'
                        ? 'bg-cyan-600 text-white ring-2 ring-yellow-400'
                        : 'bg-black/80 hover:bg-black text-neutral-200'
                    }`}
                  >
                    {currentLang === 'es' ? '🔬 INSTRUMENTAL (6)' : '🔬 INSTRUMENTS (6)'}
                  </button>
                </div>
              )}

              {/* SINGLE ROW HORIZONTAL CAROUSEL OF SQUARE PINNED POLAROIDS */}
              <div 
                ref={carouselRef}
                className="w-full flex flex-row items-stretch overflow-x-auto no-scrollbar gap-2.5 p-1 pt-2.5 pb-2 scroll-smooth"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {currentMission.type === 'skills' ? (
                  /* ★ SKILLS AS SQUARE PINNED CARDS ★ */
                  (() => {
                    const activeToolList =
                      currentMission.id === 'skills-comms-cultura' ? TOOLS_COMMS :
                      currentMission.id === 'skills-equipos-idiomas' ? TOOLS_EQUIPOS :
                      TOOLS_CIENCIA;

                    return activeToolList.map((tool, tIdx) => {
                      const isToolActive = activeSkillToolIndex === tIdx;
                      const rotation =
                        tIdx % 3 === 0 ? '-rotate-1.5' :
                        tIdx % 3 === 1 ? 'rotate-1.5' :
                        '-rotate-0.5';

                      return (
                        <div
                          key={tool.name}
                          data-selected={isToolActive}
                          onClick={() => {
                            setActiveSkillToolIndex(tIdx);
                            setSelectedPlatePage(0);
                          }}
                          className={`group relative cursor-pointer shrink-0 w-[122px] sm:w-[130px] bg-[#fbfbf9] p-1.5 pb-2 border-2 border-black transition-all duration-200 flex flex-col justify-between ${
                            isToolActive
                              ? 'scale-105 -rotate-1 z-20 shadow-[6px_8px_16px_rgba(0,0,0,1)] ring-2 ring-red-600'
                              : `${rotation} hover:rotate-0 hover:scale-[1.04] shadow-[4px_6px_12px_rgba(0,0,0,0.9)] opacity-95 hover:opacity-100 hover:z-20`
                          }`}
                          title={currentLang === 'es' ? `Ver ficha técnica de ${tool.name}` : `View technical datasheet for ${tool.name}`}
                        >
                          {/* Pushpin pinned through top edge */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                            <div className="w-3 h-3 rounded-full bg-cyan-500 border border-black shadow-[0_2px_4px_rgba(0,0,0,0.9)] flex items-center justify-center">
                              <div className="w-1 h-1 rounded-full bg-white/90" />
                            </div>
                          </div>

                          {/* Square Logo Frame */}
                          <div className="relative w-full aspect-square bg-[#090d16] rounded border border-cyan-500/40 overflow-hidden mb-1 flex items-center justify-center p-1 group-hover:border-cyan-300">
                            <div
                              className="absolute inset-0 rounded blur-xl opacity-40 pointer-events-none"
                              style={{ backgroundColor: tool.color }}
                            />
                            <TechLogo name={tool.name} size={48} className="relative z-10 drop-shadow-[0_3px_12px_rgba(0,0,0,0.98)] transition-transform duration-200 group-hover:scale-108" />
                            
                            {/* Mini index */}
                            <div className="absolute top-0.5 left-0.5 bg-[#fef08a] text-black font-mono font-black text-[6px] px-1 py-0.2 border border-black shadow-[1px_1px_0px_#000] -rotate-3 uppercase">
                              #{tIdx + 1}
                            </div>
                          </div>

                          {/* Caption with vertical breathing room */}
                          <div className="flex flex-col space-y-0.5 pt-0.5">
                            <div className="flex items-center space-x-1 font-mono text-[7.5px] font-bold text-neutral-800">
                              <span className="text-cyan-700 font-black">★</span>
                              <span className="uppercase tracking-tight truncate font-black text-[8px] text-neutral-900">
                                {tool.name}
                              </span>
                            </div>

                            <div className="relative pt-0.2">
                              {isToolActive ? (
                                <div className="border border-red-600 rounded-[3px] px-1 py-0.2 bg-red-50/90 -rotate-1 shadow-sm">
                                  <h4 className="font-mono font-black text-[7.5px] text-red-700 line-clamp-2 leading-tight uppercase">
                                    {tool.name}
                                  </h4>
                                </div>
                              ) : (
                                <h4 className="font-mono font-bold text-[7.5px] text-neutral-800 line-clamp-2 leading-tight group-hover:text-black">
                                  {tool.name}
                                </h4>
                              )}
                            </div>

                            <div className="text-[6.5px] font-mono text-neutral-500 pt-0.5 flex items-center justify-between">
                              <span className="text-[#b45309] font-black">{getToolLevel(tool, currentLang).split(' ')[0]}</span>
                              <span className="text-neutral-400 truncate max-w-[50px]">{getToolTags(tool, currentLang).split(',')[0]}</span>
                            </div>
                          </div>
                        </div>
                      );
                    });
                  })()
                ) : (
                  /* ★ EXPEDITIONS / MISSIONS AS SQUARE PINNED POLAROIDS ★ */
                  filteredMissions.map((m, idx) => {
                    const isSelected = m.id === selectedMissionId;

                    const pinColor = 
                      m.type === 'science' ? 'bg-red-600 border-red-900' :
                      m.type === 'policy' ? 'bg-violet-600 border-violet-900' :
                      m.type === 'comms' ? 'bg-emerald-600 border-emerald-900' :
                      m.type === 'global' ? 'bg-amber-500 border-amber-800' :
                      m.type === 'culture' || m.id === 'plp-prensa' || m.id === 'radio-cristalina' ? 'bg-orange-500 border-orange-800' :
                      m.type === 'titles' ? 'bg-pink-600 border-pink-900' :
                      m.type === 'certifications' ? 'bg-teal-600 border-teal-900' :
                      m.type === 'publications' ? 'bg-indigo-600 border-indigo-900' :
                      'bg-purple-600 border-purple-900';

                    const rotation = 
                      idx % 3 === 0 ? '-rotate-1.5' :
                      idx % 3 === 1 ? 'rotate-1.5' :
                      '-rotate-0.5';

                    return (
                      <div
                        key={m.id}
                        data-selected={isSelected}
                        onClick={() => handleSelectMission(m.id)}
                        className={`group relative cursor-pointer shrink-0 w-[122px] sm:w-[130px] bg-[#fbfbf9] p-1.5 pb-2 border-2 border-black transition-all duration-200 flex flex-col justify-between ${
                          isSelected
                            ? 'scale-105 -rotate-1 z-20 shadow-[6px_8px_16px_rgba(0,0,0,1)] ring-2 ring-red-600'
                            : `${rotation} hover:rotate-0 hover:scale-[1.04] shadow-[4px_6px_12px_rgba(0,0,0,0.9)] opacity-95 hover:opacity-100 hover:z-20`
                        }`}
                      >
                        {/* Pushpin pinned through top edge */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                          <div className={`w-3 h-3 rounded-full ${pinColor} border border-black shadow-[0_2px_4px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
                            <div className="w-1 h-1 rounded-full bg-white/90" />
                          </div>
                        </div>

                        {/* Square Image / Preview Frame */}
                        <div className="relative w-full aspect-square bg-[#0c1017] rounded border border-black/40 overflow-hidden mb-1 flex items-center justify-center">
                          {m.mediaType === 'video' ? (
                            <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-black group/thumb">
                              {m.src ? (
                                <img
                                  src={resolveAsset(m.src)}
                                  alt={currentLang === 'es' ? m.titleEs : m.titleEn}
                                  className="w-full h-full object-cover filter contrast-105 group-hover/thumb:scale-105 transition-transform duration-300"
                                />
                              ) : m.availablePages && m.availablePages.length > 0 ? (
                                <img
                                  src={resolveAsset(m.availablePages[0].pageSrc)}
                                  alt={currentLang === 'es' ? m.titleEs : m.titleEn}
                                  className="w-full h-full object-cover filter contrast-105 group-hover/thumb:scale-105 transition-transform duration-300"
                                />
                              ) : (
                                <div className="w-full h-full bg-[#12161f]" />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-6 h-6 rounded-full bg-red-600/90 border-2 border-white shadow-[0_2px_8px_rgba(0,0,0,0.8)] flex items-center justify-center group-hover/thumb:scale-110 transition-transform">
                                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                                </div>
                              </div>
                              <span className="absolute bottom-1 right-1 font-mono text-[6px] sm:text-[7px] bg-red-600 text-white px-1 py-0.2 rounded font-black uppercase tracking-wider shadow">
                                4K VIDEO
                              </span>
                            </div>
                          ) : m.mediaType === 'audio' ? (
                            <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#1e293b]">
                              {m.src ? (
                                <img
                                  src={resolveAsset(m.src)}
                                  alt={currentLang === 'es' ? m.titleEs : m.titleEn}
                                  className="w-full h-full object-cover filter contrast-105"
                                />
                              ) : null}
                              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-emerald-400">
                                <Volume2 className="w-4 h-4" />
                                <span className="font-mono text-[6px] font-bold">96.3 FM</span>
                              </div>
                            </div>
                          ) : (m.availablePages && m.availablePages.length > 0 && m.availablePages[0].pageSrc.startsWith('TECH_MATRIX')) || m.type === 'skills' ? (
                            <div className="w-full h-full bg-[#090d16] p-0.5 flex flex-col items-center justify-center">
                              <TechLogo name={m.techStack?.[0] || 'Python'} size={44} className="drop-shadow-[0_3px_10px_rgba(0,0,0,0.98)]" />
                              <span className="font-mono text-[6px] text-cyan-300 font-bold mt-0.2 uppercase">
                                {formatCity(m.city, currentLang)}
                              </span>
                            </div>
                          ) : m.availablePages && m.availablePages.length > 0 ? (
                            <img
                              src={resolveAsset(m.availablePages[0].pageSrc)}
                              alt={currentLang === 'es' ? m.titleEs : m.titleEn}
                              className="w-full h-full object-cover filter contrast-105"
                            />
                          ) : m.src ? (
                            <img
                              src={resolveAsset(m.src)}
                              alt={currentLang === 'es' ? m.titleEs : m.titleEn}
                              className="w-full h-full object-cover filter contrast-105"
                            />
                          ) : (
                            <div className="w-full h-full bg-[#0f172a] border border-dashed border-cyan-500/40 p-0.5 flex flex-col items-center justify-center text-center">
                              <span className="font-mono text-[6px] font-black text-cyan-400 uppercase">
                                [DOC]
                              </span>
                            </div>
                          )}

                          {/* Mini Sticky Note */}
                          <div className="absolute top-0.5 left-0.5 bg-[#fef08a] text-black font-mono font-black text-[6px] px-1 py-0.2 border border-black shadow-[1px_1px_0px_#000] -rotate-2 uppercase">
                            {m.code}
                          </div>
                        </div>

                        {/* Caption with +1/3 vertical space for title */}
                        <div className="flex flex-col space-y-0.5 pt-0.5">
                          <div className="flex items-center space-x-1 font-mono text-[7.5px] font-bold text-neutral-800">
                            <span className="text-emerald-700 font-black">✔</span>
                            <span className="uppercase tracking-tight truncate">
                              {m.flag} {formatCity(m.city, currentLang)}
                            </span>
                          </div>

                          {/* Title (up to 2 lines for comfortable reading) */}
                          <div className="relative pt-0.2">
                            {isSelected ? (
                              <div className="border border-red-600 rounded-[3px] px-1 py-0.2 bg-red-50/90 -rotate-1 shadow-sm">
                                <h4 className="font-mono font-black text-[7.5px] text-red-700 line-clamp-2 leading-tight uppercase">
                                  {currentLang === 'es' ? m.titleEs : m.titleEn}
                                </h4>
                              </div>
                            ) : (
                              <h4 className="font-mono font-bold text-[7.5px] text-neutral-800 line-clamp-2 leading-tight group-hover:text-black">
                                {currentLang === 'es' ? m.titleEs : m.titleEn}
                              </h4>
                            )}
                          </div>

                          <div className="text-[6.5px] font-mono text-neutral-500 pt-0.5 flex items-center justify-between">
                            <span className="truncate">{formatDate(m.date, currentLang)}</span>
                            <span className="font-bold text-[6.5px] text-neutral-600 uppercase">{m.type}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        )}

        {/* Slide-out "More Information" Drawer docked on the right */}
        {isMoreInfoOpen && (
          <div 
            onClick={() => setIsMoreInfoOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 transition-opacity duration-300 pointer-events-auto"
          />
        )}

        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-[500px] lg:w-[540px] bg-[#0c1017]/95 border-l-4 border-black backdrop-blur-2xl shadow-[-16px_0_40px_rgba(0,0,0,0.95)] z-50 transition-transform duration-300 ease-in-out flex flex-col text-white pointer-events-auto ${
            isMoreInfoOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
          }`}
        >
          {/* Drawer Header */}
          <div className="px-4 py-3 bg-black border-b-2 border-black flex items-center justify-between font-mono text-xs shrink-0">
            <div className="flex items-center space-x-2">
              <div className="bg-[#facc15] text-black font-mono font-black text-xs px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_#000] -rotate-1">
                {currentMission.code} // {formatCity(currentMission.city, currentLang).toUpperCase()}
              </div>
              <div className="bg-white/10 text-neutral-200 font-mono text-[10px] px-2 py-0.5 border border-white/20">
                {currentMission.flag} {formatCountry(currentMission.country, currentLang).toUpperCase()}
              </div>
              <span className="bg-emerald-600 text-white font-mono font-black text-[9px] px-1.5 py-0.5 border border-white uppercase tracking-wider rotate-1">
                {currentLang === 'es' ? 'VERIFICADO' : 'VERIFIED'}
              </span>
            </div>

            <div className="flex items-center space-x-1.5">
              <button
                onClick={handlePrev}
                className="p-1.5 bg-black hover:bg-[#facc15] text-white hover:text-black border border-white/40 hover:border-black transition font-mono font-black shadow-[1px_1px_0px_#000] cursor-pointer"
                title={currentLang === 'es' ? 'Ficha anterior' : 'Previous mission'}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 bg-black hover:bg-[#facc15] text-white hover:text-black border border-white/40 hover:border-black transition font-mono font-black shadow-[1px_1px_0px_#000] cursor-pointer"
                title={currentLang === 'es' ? 'Ficha siguiente' : 'Next mission'}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsMoreInfoOpen(false)}
                className="p-1.5 bg-red-600 hover:bg-white text-white hover:text-black border border-black transition font-mono font-black shadow-[1px_1px_0px_#000] ml-1 cursor-pointer"
                title={currentLang === 'es' ? 'Cerrar ficha' : 'Close dossier'}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Drawer Body Scrollable */}
          <div className="overflow-y-auto p-4 sm:p-5 space-y-3.5 no-scrollbar flex-1">
            {/* Title & Metadata */}
            <div>
              <div className="flex items-center space-x-2 font-mono text-[11px] text-amber-400 mb-1">
                <span className="bg-[#facc15] text-black font-mono font-black px-2 py-0.5 border border-black shadow-[1px_1px_0px_#000] uppercase -rotate-0.5">
                  {currentLang === 'es' ? currentMission.roleEs : currentMission.roleEn}
                </span>
                <span className="text-neutral-400 font-mono font-bold">• {formatDate(currentMission.date, currentLang)}</span>
              </div>

              <h2 className="text-lg sm:text-xl font-mono font-black text-white uppercase tracking-tight leading-snug">
                {currentLang === 'es' ? currentMission.titleEs : currentMission.titleEn}
              </h2>

              <p className="text-xs sm:text-sm font-mono text-neutral-300 mt-1 leading-normal">
                {currentLang === 'es' ? currentMission.subtitleEs : currentMission.subtitleEn}
              </p>
            </div>

            {/* Tech Stack & Tools */}
            {currentMission.techStack && currentMission.techStack.length > 0 && (
              <div className="p-2.5 rounded-lg bg-black/80 border-2 border-[#facc15]/70 shadow-[2px_2px_0px_#000] space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] animate-pulse" />
                    <span className="font-mono text-xs font-black uppercase text-[#facc15] tracking-wider">
                      {currentLang === 'es' ? '⚡ HERRAMIENTAS & LOGOS TÉCNICOS:' : '⚡ TECH STACK & TOOLS:'}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] bg-[#facc15] text-black px-1.5 py-0.2 font-black uppercase">
                    {currentMission.techStack.length} {currentLang === 'es' ? 'HERRAMIENTAS' : 'TOOLS'}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  {currentMission.techStack.map((tech, tIdx) => (
                    <TechBadge key={tIdx} name={tech} size="sm" />
                  ))}
                </div>
              </div>
            )}

            {/* Impact Synopsis Box */}
            <div className="p-3 rounded-lg bg-black/70 border-2 border-dashed border-white/30 space-y-1">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#facc15] font-black">
                {currentLang === 'es' ? '[ SINOPSIS METODOLÓGICA & IMPACTO (CV) ]' : '[ METHODOLOGY & IMPACT SYNOPSIS (CV) ]'}
              </div>
              <p className="text-xs sm:text-sm font-serif text-neutral-200 leading-relaxed">
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

            {/* Deliverables Box if present */}
            {currentMission.deliverablesEs && currentMission.deliverablesEs.length > 0 && (
              <div className="p-3 rounded-lg bg-black/70 border-2 border-dashed border-[#facc15]/40 space-y-1.5">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#facc15] font-black flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
                  <span>{currentLang === 'es' ? '[ ENTREGABLES & RESULTADOS TÉCNICOS ]' : '[ DELIVERABLES & TECHNICAL OUTPUTS ]'}</span>
                </div>
                <ul className="space-y-1 text-xs font-mono text-neutral-300">
                  {(currentLang === 'es' ? currentMission.deliverablesEs : currentMission.deliverablesEn || currentMission.deliverablesEs).map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-2 bg-black/40 p-1.5 border border-white/5 rounded">
                      <span className="text-[#facc15] font-black">✔</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links & Tags */}
            <div className="pt-2 border-t-2 border-black flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1">
                {currentMission.tags.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 font-mono text-[9px] bg-white/10 text-neutral-300 border border-white/15">
                    #{formatTag(t, currentLang)}
                  </span>
                ))}
              </div>

              {currentMission.url && (
                <a
                  href={currentMission.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs border-2 border-black shadow-[2px_2px_0px_#000] flex items-center space-x-1 transition active:scale-95"
                >
                  <span>{currentLang === 'es' ? 'ABRIR FUENTE' : 'OPEN SOURCE'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Restore Button if Window is Closed */}
        {!isDossierOpen && (
          <button
            onClick={() => setIsDossierOpen(true)}
            className="pointer-events-auto px-4 py-2 bg-[#facc15] hover:bg-white text-black font-mono text-xs font-black uppercase border-3 border-black shadow-[4px_4px_0px_#000000] -rotate-1 transition flex items-center space-x-2 active:scale-95"
          >
            <Maximize2 className="w-4 h-4" />
            <span>
              {currentLang === 'es'
                ? `ABRIR FICHA // ${formatCity(currentMission.city, 'es').toUpperCase()}`
                : `OPEN DOSSIER // ${formatCity(currentMission.city, 'en').toUpperCase()}`}
            </span>
          </button>
        )}

      </main>

    </div>
  );
};
