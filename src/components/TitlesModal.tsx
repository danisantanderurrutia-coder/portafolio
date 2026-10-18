import React, { useState } from 'react';
import { 
  X, 
  Award, 
  GraduationCap, 
  Scroll, 
  Camera,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Building,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';

export interface ExpeditionPhoto {
  id: string;
  src: string;
  titleEs: string;
  titleEn: string;
  category: 'science' | 'fieldwork' | 'summit';
  categoryLabelEs: string;
  categoryLabelEn: string;
  categoryColor: string;
  locationEs: string;
  locationEn: string;
  year: string;
  institution: string;
  descEs: string;
  descEn: string;
}

export const EXPEDITION_PHOTOS: ExpeditionPhoto[] = [
  // --- 1. CIENCIA & LABORATORIO ---
  {
    id: 'kiel-lab',
    src: '/expeditions/kiel_soil_lab.png',
    titleEs: 'Laboratorio de Física de Suelos y Columnas de Flujo',
    titleEn: 'Soil Physics Laboratory & Column Flux Diagnostics',
    category: 'science',
    categoryLabelEs: 'LABORATORIO',
    categoryLabelEn: 'LABORATORY',
    categoryColor: 'bg-blue-600 text-white',
    locationEs: 'Kiel, Alemania 🇩🇪',
    locationEn: 'Kiel, Germany 🇩🇪',
    year: '2024',
    institution: 'Christian-Albrechts-Universität zu Kiel (CAU Kiel)',
    descEs: 'Análisis instrumental de propiedades hidrofísicas, conductividad hidráulica y curvas de retención hídrica (pF) en laboratorio de suelos bajo supervisión del grupo del Dr. Sebastian Jordan.',
    descEn: 'Experimental diagnostics on soil hydro-physical properties, hydraulic conductivity, and water retention curves (pF) in soil physics lab at CAU Kiel.'
  },
  {
    id: 'poland-microscope',
    src: '/expeditions/poland_microscope_zeiss.jpg',
    titleEs: 'Microscopía Óptica Zeiss • Identificación de Protozoos',
    titleEn: 'Zeiss Optical Microscopy • Protozoa Taxonomy & Identification',
    category: 'science',
    categoryLabelEs: 'LABORATORIO',
    categoryLabelEn: 'LABORATORY',
    categoryColor: 'bg-blue-600 text-white',
    locationEs: 'Poznań, Polonia 🇵🇱',
    locationEn: 'Poznań, Poland 🇵🇱',
    year: '2024',
    institution: 'Adam Mickiewicz University (AMU Poznań)',
    descEs: 'Identificación taxonómica de protozoos, ciliados y microfauna dulceacuícola en microscopio binocular Zeiss Primo Star para bioindicación de calidad ecológica en humedales lacustres.',
    descEn: 'Taxonomic identification of freshwater protozoa, ciliates, and microfauna using a Zeiss Primo Star binocular microscope for wetland bioindication.'
  },
  {
    id: 'poland-sampling',
    src: '/expeditions/poland_lake_sampling.jpg',
    titleEs: 'Muestreo Limnológico de Perifiton y Biofilm en Lago Polaco',
    titleEn: 'Biofilm & Periphyton Limnological Sampling',
    category: 'science',
    categoryLabelEs: 'CIENCIA LACUSTRE',
    categoryLabelEn: 'LIMNOLOGY',
    categoryColor: 'bg-emerald-600 text-white',
    locationEs: 'Wielkopolska, Polonia 🇵🇱',
    locationEn: 'Wielkopolska, Poland 🇵🇱',
    year: '2024',
    institution: 'Adam Mickiewicz University (AMU Poznań)',
    descEs: 'Raspado y aislamiento de biofilm sobre vegetación acuática (nenúfares) para determinar tasas de fijación de carbono y bioindicación de calidad de agua en humedales lacustres.',
    descEn: 'Scraping and extraction of biofilm/periphyton from floating aquatic vegetation (water lilies) to quantify carbon dynamics and limnological indicators.'
  },
  {
    id: 'poznan-benthos',
    src: '/expeditions/poznan_lake_benthos.jpg',
    titleEs: 'Clasificación de Bentos y Macroinvertebrados en Terreno',
    titleEn: 'Field Benthic Macroinvertebrate Sorting & Biodiversity Assessment',
    category: 'science',
    categoryLabelEs: 'BIODIVERSIDAD',
    categoryLabelEn: 'BIODIVERSITY',
    categoryColor: 'bg-emerald-600 text-white',
    locationEs: 'Lagos de Poznań, Polonia 🇵🇱',
    locationEn: 'Poznań Lakes, Poland 🇵🇱',
    year: '2024',
    institution: 'AMU Poznań • Protección Ambiental',
    descEs: 'Filtrado en bandejas de campo y selección con micropipetas de macroinvertebrados bentónicos lacustres para estimación de índices bióticos y estado trófico de cuencas.',
    descEn: 'Field tray sorting and pipette extraction of benthic macroinvertebrates to determine biotic indices and trophic state in lake catchments.'
  },
  {
    id: 'cauquenes-ves',
    src: '/expeditions/cauquenes_geophysics_ves.jpg',
    titleEs: 'Sondaje Eléctrico Vertical (SEV / VES) • Prospección Hidrogeofísica',
    titleEn: 'Vertical Electrical Sounding (VES) • Groundwater Geophysics',
    category: 'science',
    categoryLabelEs: 'HIDRO-GEOFÍSICA',
    categoryLabelEn: 'HYDRO-GEOPHYSICS',
    categoryColor: 'bg-amber-600 text-white',
    locationEs: 'Cauquenes, Región del Maule, Chile 🇨🇱',
    locationEn: 'Cauquenes, Maule Region, Chile 🇨🇱',
    year: '2021',
    institution: 'FCFM U. de Chile & Monitoreo Comunitario',
    descEs: 'Montaje de estación de resistividad eléctrica con multímetros calibrados, caja de control e inyección de corriente continua para delimitar profundidad de acuíferos y estratigrafía hidrogeológica.',
    descEn: 'Field setup of direct-current electrical resistivity sounding (VES) with calibrated multimeters to delineate aquifer depths and hydrogeological layers in drought-stricken basins.'
  },
  {
    id: 'cauquenes-rain',
    src: '/expeditions/cauquenes_rain_gauge.jpg',
    titleEs: 'Instalación de Pluviómetro Digital en Cerro Molco',
    titleEn: 'Installation of Digital Rain Gauge at Cerro Molco',
    category: 'science',
    categoryLabelEs: 'INSTRUMENTACIÓN',
    categoryLabelEn: 'INSTRUMENTATION',
    categoryColor: 'bg-emerald-600 text-white',
    locationEs: 'Cerro Molco, Cauquenes, Maule 🇨🇱',
    locationEn: 'Cerro Molco, Cauquenes, Maule 🇨🇱',
    year: '2021',
    institution: 'FCFM U. de Chile & Monitoreo Comunitario',
    descEs: 'Instalación y calibración en terreno de estación pluviométrica digital con balancín (tipping bucket) para medir precipitación efectiva e intercepción en cuencas del secano costero.',
    descEn: 'Field installation and calibration of digital tipping-bucket rain gauge station on Cerro Molco to monitor effective precipitation and canopy interception in coastal dryland basins.'
  },

  // --- 2. EXPEDICIONES EN TERRENO ---
  {
    id: 'davos-stream',
    src: '/expeditions/davos_stream_fieldwork.jpg',
    titleEs: 'Monitoreo Ripario en el Valle Alpino de Davos',
    titleEn: 'Riparian Stream Monitoring in Davos Alpine Valley',
    category: 'fieldwork',
    categoryLabelEs: 'TERRENO ALPINO',
    categoryLabelEn: 'ALPINE FIELDWORK',
    categoryColor: 'bg-emerald-700 text-white',
    locationEs: 'Flüelatal / Davos, Suiza 🇨🇭',
    locationEn: 'Flüela Valley / Davos, Switzerland 🇨🇭',
    year: '2025',
    institution: 'WSL Instituto Federal Suizo',
    descEs: 'Documentación de campo y análisis geomorfológico de cursos de agua de alta montaña, régimen de deshielo y dinámica de cabeceras de cuenca en los Alpes suizos.',
    descEn: 'Field survey and geomorphic assessment of alpine headwater streams, snowmelt regime, and riparian buffer integrity in the Swiss Alps.'
  },
  {
    id: 'davos-group',
    src: '/expeditions/davos_wsl_group.png',
    titleEs: 'Curso de Postgrado en WSL Davos • Biodiversidad Azul-Verde',
    titleEn: 'WSL Davos Research Cohort • BlueGreen Biodiversity',
    category: 'fieldwork',
    categoryLabelEs: 'POSTGRADO SUIZA',
    categoryLabelEn: 'SWISS POSTGRAD',
    categoryColor: 'bg-amber-500 text-black',
    locationEs: 'Davos, Suiza 🇨🇭',
    locationEn: 'Davos, Switzerland 🇨🇭',
    year: '2025',
    institution: 'WSL Swiss Federal Research Institute',
    descEs: 'Cohorte internacional de investigadoras e investigadores en la cumbre BlueGreen Biodiversity, abordando conectividad ecohidrológica entre sistemas riparios y terrestres alpinos.',
    descEn: 'International research cohort at WSL Swiss Federal Institute in Davos, focusing on ecohydrological connectivity between alpine riparian and terrestrial systems.'
  },
  {
    id: 'wadden-birding',
    src: '/expeditions/wadden_sea_birding.jpg',
    titleEs: 'Monitoreo Ornitológico & Planicies Intermareales • Mar de Wadden',
    titleEn: 'Bird Spotting & Intertidal Mudflats • Wadden Sea',
    category: 'fieldwork',
    categoryLabelEs: 'ECOLOGÍA COSTERA',
    categoryLabelEn: 'COASTAL ECOLOGY',
    categoryColor: 'bg-sky-600 text-white',
    locationEs: 'Mar de Wadden, Alemania / Países Bajos 🇩🇪🇳🇱',
    locationEn: 'Wadden Sea, Germany / Netherlands 🇩🇪🇳🇱',
    year: '2024',
    institution: 'CAU Kiel • Investigación Costera',
    descEs: 'Observación instrumental con telescopio terrestre de alta precisión en las planicies de marea del Mar de Wadden (Patrimonio UNESCO). Evaluación de avifauna migratoria y dinámica de sedimentos.',
    descEn: 'Field bird spotting and intertidal mudflat assessment with high-magnification spotting scope in the UNESCO Wadden Sea. Migratory flyway ecology and coastal sediment dynamics.'
  },
  {
    id: 'poland-rowing',
    src: '/expeditions/poland_lake_rowing.jpg',
    titleEs: 'Expedición Lacustre en Bote • Cuencas Bálticas',
    titleEn: 'Lake Expedition by Rowboat • Baltic Catchments',
    category: 'fieldwork',
    categoryLabelEs: 'EXPEDICIÓN',
    categoryLabelEn: 'EXPEDITION',
    categoryColor: 'bg-cyan-600 text-white',
    locationEs: 'Región de los Lagos, Polonia 🇵🇱',
    locationEn: 'Polish Lake District, Poland 🇵🇱',
    year: '2024',
    institution: 'AMU Poznań • Protección Ambiental',
    descEs: 'Navegación y campañas de muestreo batimétrico en bote a remo para obtención de perfiles de oxígeno, turbidez y temperatura en zonas costeras y litorales.',
    descEn: 'Field campaign navigating lake littoral zones by rowboat for depth profiling, dissolved oxygen, and wetland habitat characterization.'
  },
  {
    id: 'longavi-survey',
    src: '/expeditions/longavi_biodiversity_survey.jpg',
    titleEs: 'Evaluación Ecológica y Biodiversidad en Cerro Longaví',
    titleEn: 'Ecological Biodiversity Assessment at Cerro Longaví',
    category: 'fieldwork',
    categoryLabelEs: 'ECOLOGÍA DE BOSQUE',
    categoryLabelEn: 'FOREST ECOLOGY',
    categoryColor: 'bg-emerald-800 text-white',
    locationEs: 'Cerro Longaví, Maule, Chile 🇨🇱',
    locationEn: 'Cerro Longaví, Maule, Chile 🇨🇱',
    year: '2022',
    institution: 'Investigación Independiente & ONG Raíz EcoAcción',
    descEs: 'Prospección botánica y evaluación del estado de conservación de remanentes de bosque nativo esclerófilo frente a la presión de monocultivos de pino y recurrencia de incendios forestales.',
    descEn: 'Botanical survey and conservation assessment of sclerophyll native forest remnants facing commercial pine monoculture expansion and wildfire hazards.'
  },
  {
    id: 'smart-food-parks-ui',
    src: '/expeditions/smart_food_parks_ui.jpg',
    titleEs: 'Smart Food Parks: Gemelo Digital & Agricultura Urbana IoT',
    titleEn: 'Smart Food Parks: Digital Twin & Urban IoT Agriculture',
    category: 'fieldwork',
    categoryLabelEs: 'TECNOLOGÍA & I+D',
    categoryLabelEn: 'R&D / DIGITAL TWIN',
    categoryColor: 'bg-teal-600 text-white',
    locationEs: 'Kiel (Alemania) / UN Habitat Citiverse 🇩🇪🇺🇳',
    locationEn: 'Kiel (Germany) / UN Habitat Citiverse 🇩🇪🇺🇳',
    year: '2023',
    institution: 'UN Citiverse Challenge (Semifinalista Global)',
    descEs: 'Interfaz de telemetría y gemelo digital para monitoreo en tiempo real de parques agroalimentarios urbanos y microclimas de cultivo vertical hidroponizado.',
    descEn: 'Digital twin telemetry interface and real-time sensor visualization platform for urban hydroponic food parks (UN Citiverse Global Semifinalist).'
  },
  {
    id: 'smart-food-parks-arch',
    src: '/expeditions/smart_food_parks_architecture.jpg',
    titleEs: 'Arquitectura de Datos y Gemelo Digital en Smart Food Parks',
    titleEn: 'Smart Food Parks System Architecture & Digital Twin Engine',
    category: 'science',
    categoryLabelEs: 'ARQUITECTURA DE DATOS',
    categoryLabelEn: 'SYSTEM ARCHITECTURE',
    categoryColor: 'bg-indigo-600 text-white',
    locationEs: 'Alemania / Naciones Unidas 🇩🇪🇺🇳',
    locationEn: 'Germany / United Nations 🇩🇪🇺🇳',
    year: '2023',
    institution: 'Christian-Albrechts-Universität zu Kiel & UN Citiverse',
    descEs: 'Diagrama de flujo de integración técnica: sensores IoT, contratos inteligentes, modelos predictivos de IA, pipeline cloud y renderizado en Unity 3D.',
    descEn: 'Technical architecture blueprint integrating IoT sensor nodes, cloud data lakes, AI optimization engines, and real-time Unity 3D digital twins.'
  },

  // --- 3. CUMBRES & POLÍTICA GLOBAL ---
  {
    id: 'costa-rica-summit',
    src: '/expeditions/costa_rica_wycj_summit.jpg',
    titleEs: 'Cumbre de Justicia Climática Intergeneracional • WYCJ Costa Rica',
    titleEn: 'Intergenerational Climate Justice Summit • WYCJ Costa Rica',
    category: 'summit',
    categoryLabelEs: 'CUMBRE GLOBAL',
    categoryLabelEn: 'GLOBAL SUMMIT',
    categoryColor: 'bg-rose-600 text-white',
    locationEs: 'San José, Costa Rica 🇨🇷',
    locationEn: 'San José, Costa Rica 🇨🇷',
    year: '2023',
    institution: "World's Youth for Climate Justice (WYCJ)",
    descEs: 'Panelista en el diálogo internacional sobre incidencia climática jurídica ante la Corte Interamericana de Derechos Humanos (Corte IDH) y la Corte Internacional de Justicia de La Haya.',
    descEn: 'Invited panelist in international legal advocacy dialogue for state climate obligations before the Inter-American Court of Human Rights and ICJ The Hague.'
  },
  {
    id: 'hamburg-enjust',
    src: '/expeditions/hamburg_enjust_library.jpg',
    titleEs: 'Conferencia Red ENJUST en Biblioteca Histórica de Hamburgo',
    titleEn: 'ENJUST Environmental Justice Conference • Hamburg Library',
    category: 'summit',
    categoryLabelEs: 'CONFERENCIA CIENTÍFICA',
    categoryLabelEn: 'SCIENTIFIC CONFERENCE',
    categoryColor: 'bg-purple-600 text-white',
    locationEs: 'Hamburgo, Alemania 🇩🇪',
    locationEn: 'Hamburg, Germany 🇩🇪',
    year: '2024',
    institution: 'ENJUST European Environmental Justice Network',
    descEs: 'Sesión plenaria y mesa redonda en la biblioteca circular histórica de la Universidad de Hamburgo, debatiendo sobre colonialismo verde, monocultivos forestales y transición ecosocial justa.',
    descEn: 'Plenary roundtable in the historic circular library of the University of Hamburg, debating green colonialism, forest monoculture impacts, and just ecological transitions.'
  },
  {
    id: 'colombia-group',
    src: '/expeditions/colombia_climate_justice_group.jpg',
    titleEs: 'Plataforma Latinoamericana por la Justicia Climática • Colombia',
    titleEn: 'Latin American Climate Justice Platform Summit • Colombia',
    category: 'summit',
    categoryLabelEs: 'CUMBRE LATAM',
    categoryLabelEn: 'LATAM SUMMIT',
    categoryColor: 'bg-amber-600 text-white',
    locationEs: 'Bogotá, Colombia 🇨🇴',
    locationEn: 'Bogotá, Colombia 🇨🇴',
    year: '2023',
    institution: 'Plataforma Latinoamericana & MAT Chile',
    descEs: 'Encuentro continental de organizaciones territoriales, defensores de cuencas y delegados de comunidades campesinas e indígenas analizando falsas soluciones de carbono y deuda ecológica.',
    descEn: 'Continental summit of watershed defenders, peasant and indigenous delegates analyzing carbon offset mechanisms and historical ecological debt.'
  },
  {
    id: 'colombia-circle',
    src: '/expeditions/colombia_climate_justice_circle.jpg',
    titleEs: 'Círculo de Diálogo Territorial y Dinámica de Red • Colombia',
    titleEn: 'Territorial Dialogue Circle & Network Weaving • Colombia',
    category: 'summit',
    categoryLabelEs: 'CUMBRE LATAM',
    categoryLabelEn: 'LATAM SUMMIT',
    categoryColor: 'bg-amber-600 text-white',
    locationEs: 'Bogotá, Colombia 🇨🇴',
    locationEn: 'Bogotá, Colombia 🇨🇴',
    year: '2023',
    institution: 'Plataforma Latinoamericana por la Justicia Climática',
    descEs: 'Metodología participativa de tejido territorial conectando mandatos comunitarios de gobernanza del agua, desmilitarización de cuencas y defensa de bienes comunes.',
    descEn: 'Participatory community weaving workshop connecting regional mandates on water democracy, basin protection, and ecological commons.'
  },
  {
    id: 'convencion-residuos',
    src: '/expeditions/convencion_norma_residuos.jpg',
    titleEs: 'Presentación de Norma de Residuos y Agua en Convención Constitucional',
    titleEn: 'Zero-Waste & Watershed Norm Presentation at Constitutional Convention',
    category: 'summit',
    categoryLabelEs: 'INCIDENCIA LEGISLATIVA',
    categoryLabelEn: 'LEGISLATIVE POLICY',
    categoryColor: 'bg-red-600 text-white',
    locationEs: 'Congreso Nacional, Santiago, Chile 🇨🇱',
    locationEn: 'National Congress, Santiago, Chile 🇨🇱',
    year: '2022',
    institution: 'Movimientos Sociales Constituyentes & MAT',
    descEs: 'Punto de prensa y entrega formal de la iniciativa popular de norma constitucional para la gestión integral de residuos, protección de cabeceras de cuenca y derechos de la naturaleza.',
    descEn: 'Press conference and formal presentation of constitutional popular initiatives on comprehensive waste management, headwater protection, and rights of nature.'
  },
  {
    id: 'concepcion-biomass',
    src: '/expeditions/concepcion_biomass_talk.png',
    titleEs: 'Conferencia sobre Industria de Biomasa y Conflicto Hídrico',
    titleEn: 'Keynote on Biomass Energy Industry & Water Conflicts',
    category: 'summit',
    categoryLabelEs: 'CONFERENCIA',
    categoryLabelEn: 'KEYNOTE',
    categoryColor: 'bg-amber-700 text-white',
    locationEs: 'Concepción, Región del Biobío, Chile 🇨🇱',
    locationEn: 'Concepción, Biobío Region, Chile 🇨🇱',
    year: '2023',
    institution: 'Global Forest Coalition & EPN',
    descEs: 'Exposición magistral de datos de deforestación y plantaciones forestales (FAO 1990-2020), demostrando el agotamiento de napas freáticas por la demanda industrial de bioenergía en la zona centro-sur.',
    descEn: 'Keynote presentation presenting FAO forest cover data (1990-2020), exposing groundwater depletion driven by industrial biomass energy plantations in south-central Chile.'
  },
  {
    id: 'oslo-degrowth',
    src: '/expeditions/oslo_degrowth_logo.png',
    titleEs: '10ª Conferencia Internacional de Decrecimiento • Oslo',
    titleEn: '10th International Degrowth Conference • University of Oslo',
    category: 'summit',
    categoryLabelEs: 'CONFERENCIA GLOBAL',
    categoryLabelEn: 'GLOBAL CONFERENCE',
    categoryColor: 'bg-yellow-500 text-black',
    locationEs: 'Oslo, Noruega 🇳🇴',
    locationEn: 'Oslo, Norway 🇳🇴',
    year: '2024',
    institution: 'University of Oslo & International Degrowth Network',
    descEs: 'Ponencia aceptada sobre límites planetarios, redistribución hídrica y transiciones justas en el marco de la mayor cumbre académica de economía ecológica en Europa.',
    descEn: 'Accepted research presentation on planetary boundaries, water redistribution, and just transitions at Europe’s premier ecological economics conference.'
  },
  {
    id: 'enjust-network',
    src: '/expeditions/enjust_logo.png',
    titleEs: 'Red Europea ENJUST • Conferencia de Bonn y Hamburgo',
    titleEn: 'ENJUST European Environmental Justice Network • Bonn & Hamburg',
    category: 'summit',
    categoryLabelEs: 'RED CIENTÍFICA',
    categoryLabelEn: 'SCIENTIFIC NETWORK',
    categoryColor: 'bg-purple-600 text-white',
    locationEs: 'Bonn / Hamburgo, Alemania 🇩🇪',
    locationEn: 'Bonn / Hamburg, Germany 🇩🇪',
    year: '2023 - 2024',
    institution: 'ENJUST Network & University of Bonn / Hamburg',
    descEs: 'Investigador expositor en las conferencias internacionales de justicia ambiental en Bonn y Hamburgo, presentando investigaciones sobre extractivismo de biomasa, conflictividad hídrica y colonialismo verde.',
    descEn: 'Invited researcher and speaker at the European Environmental Justice Network conferences in Bonn and Hamburg, presenting studies on biomass extraction, water conflicts, and green transitions.'
  },
  {
    id: 'ong-raiz-wetlands',
    src: '/expeditions/ong_raiz_wetland_group.jpg',
    titleEs: 'Monitoreo Comunitario de Humedales • ONG Raíz EcoAcción',
    titleEn: 'Community Wetland Monitoring • ONG Raíz EcoAcción',
    category: 'fieldwork',
    categoryLabelEs: 'CONSERVACIÓN COMUNITARIA',
    categoryLabelEn: 'COMMUNITY CONSERVATION',
    categoryColor: 'bg-emerald-700 text-white',
    locationEs: 'Cuencas del Maule, Chile 🇨🇱',
    locationEn: 'Maule River Basins, Chile 🇨🇱',
    year: '2020 - 2022',
    institution: 'ONG Raíz EcoAcción (Socio Fundador & Primer Presidente)',
    descEs: 'Jornada territorial de monitoreo ecohidrológico y catastro de biodiversidad en humedales del Maule junto a comunidades y voluntariado, frente a la cordillera de los Andes.',
    descEn: 'Territorial ecohydrological monitoring and biodiversity survey day in Maule wetlands alongside local communities and volunteers, facing the Andean range.'
  },
  {
    id: 'ong-raiz-planting',
    src: '/expeditions/ong_raiz_native_tree_planting.jpg',
    titleEs: 'Reforestación Comunitaria con Especies Nativas • Cuencas del Maule',
    titleEn: 'Native Tree Reforestation & Catchment Restoration • Maule',
    category: 'fieldwork',
    categoryLabelEs: 'RESTAURACIÓN ECOLÓGICA',
    categoryLabelEn: 'ECOLOGICAL RESTORATION',
    categoryColor: 'bg-lime-700 text-white',
    locationEs: 'Cordillera de la Costa / Maule, Chile 🇨🇱',
    locationEn: 'Coastal Range / Maule, Chile 🇨🇱',
    year: '2021',
    institution: 'ONG Raíz EcoAcción',
    descEs: 'Plantación comunitaria de plántulas de bosque nativo esclerófilo (peumo, quillay, boldo) para la recuperación de suelos degradados, efecto esponja y recarga hídrica tras megaincendios.',
    descEn: 'Community planting of native sclerophyll saplings to restore degraded soils, promote hydrological sponge effects, and enhance aquifer recharge in wildfire-scarred basins.'
  }
];

interface TitlesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const TitlesModal: React.FC<TitlesModalProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'science' | 'fieldwork' | 'summit'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const filteredPhotos = selectedCategory === 'all'
    ? EXPEDITION_PHOTOS
    : EXPEDITION_PHOTOS.filter(p => p.category === selectedCategory);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : filteredPhotos.length - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex < filteredPhotos.length - 1 ? lightboxIndex + 1 : 0);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#0c0f14] border-4 border-black rounded-2xl shadow-[10px_10px_0px_#facc15] flex flex-col overflow-hidden text-white font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-5 py-3.5 bg-black border-b-3 border-black flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <span className="bg-[#facc15] text-black px-3 py-1 font-mono font-black text-xs sm:text-sm uppercase border-2 border-black shadow-[2px_2px_0px_#000] -rotate-1">
              {currentLang === 'es' ? '[ TÍTULOS ACADÉMICOS & EXPEDICIONES EN TERRENO ]' : '[ ACADEMIC DEGREES & FIELDWORK EXPEDITIONS ]'}
            </span>
            <span className="hidden sm:inline-block bg-white text-black font-mono font-black text-[10px] px-2 py-0.5 border border-black uppercase">
              20 {currentLang === 'es' ? 'FOTOGRAFÍAS REALES' : 'FIELD PHOTOS'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/10 hover:bg-red-600 hover:text-white text-neutral-300 transition-all border border-white/20 active:scale-90 cursor-pointer"
            title={currentLang === 'es' ? 'Cerrar' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-7 no-scrollbar">
          
          {/* 1. OFFICIAL UNIVERSITY DEGREES */}
          <div>
            <h3 className="font-mono font-black text-xs sm:text-sm text-[#facc15] uppercase tracking-wider mb-3 flex items-center space-x-2">
              <GraduationCap className="w-4 h-4 text-[#facc15]" />
              <span>{currentLang === 'es' ? 'GRADOS UNIVERSITARIOS OFICIALES' : 'OFFICIAL UNIVERSITY DEGREES'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* DEGREE 1: DUAL M.SC. CAU KIEL & AMU POZNAŃ */}
              <div className="bg-[#141822] border-3 border-black rounded-xl p-4 shadow-[4px_4px_0px_#000] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-600 text-white font-mono font-black text-[9px] px-2 py-0.5 border border-black uppercase -rotate-1">
                      {currentLang === 'es' ? 'DUAL M.SC. (EUROPA)' : 'DUAL EUROPEAN M.SC.'}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 font-bold">2023 - 2026</span>
                  </div>

                  <h4 className="font-mono font-black text-sm text-white leading-snug">
                    {currentLang === 'es' 
                      ? 'Doble Maestría Europea en Ciencias (Dual M.Sc.)' 
                      : 'Dual European Master of Science (Dual M.Sc.)'}
                  </h4>

                  <div className="mt-2 space-y-1 text-xs text-neutral-300 font-sans">
                    <div className="flex items-start space-x-1.5">
                      <span className="text-[#facc15] font-mono font-bold">•</span>
                      <span><strong>CAU Kiel ({currentLang === 'es' ? 'Alemania' : 'Germany'}):</strong> M.Sc. in Environmental Management</span>
                    </div>
                    <div className="flex items-start space-x-1.5">
                      <span className="text-[#facc15] font-mono font-bold">•</span>
                      <span><strong>AMU Poznań ({currentLang === 'es' ? 'Polonia' : 'Poland'}):</strong> M.Sc. in Environmental Protection</span>
                    </div>
                  </div>

                  <p className="mt-2.5 text-[11px] text-neutral-400 font-sans leading-relaxed border-t border-white/10 pt-2">
                    {currentLang === 'es'
                      ? 'Especialización en balance hídrico, dinámicas de flujos de gases de efecto invernadero (GEI) mediante torres eddy covariance en turberas, y modelación de cuencas costeras.'
                      : 'Specialization in catchment water balances, greenhouse gas flux quantification using eddy covariance towers in peatlands, and coastal watershed risk modeling.'}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>{currentLang === 'es' ? 'Alemania 🇩🇪 & Polonia 🇵🇱' : 'Germany 🇩🇪 & Poland 🇵🇱'}</span>
                  <span className="text-emerald-400 font-bold flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{currentLang === 'es' ? 'VERIFICADO' : 'VERIFIED'}</span>
                  </span>
                </div>
              </div>

              {/* DEGREE 2: GEOFÍSICA U. DE CHILE CON DISTINCIÓN */}
              <div className="bg-[#141822] border-3 border-black rounded-xl p-4 shadow-[4px_4px_0px_#000] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-emerald-600 text-white font-mono font-black text-[9px] px-2 py-0.5 border border-black uppercase rotate-1">
                      {currentLang === 'es' ? 'CON DISTINCIÓN MÁXIMA' : 'WITH HIGHEST DISTINCTION'}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 font-bold">2015 - 2021</span>
                  </div>

                  <h4 className="font-mono font-black text-sm text-white leading-snug">
                    {currentLang === 'es' 
                      ? 'Licenciatura en Ciencias de la Ingeniería, mención Geofísica' 
                      : 'Bachelor of Science in Geophysics (Engineering Degree)'}
                  </h4>

                  <div className="mt-1 text-xs text-amber-400 font-mono font-bold">
                    {currentLang === 'es' 
                      ? 'Facultad de Ciencias Físicas y Matemáticas (FCFM) • Universidad de Chile'
                      : 'Faculty of Physical & Mathematical Sciences (FCFM) • University of Chile'}
                  </div>

                  <p className="mt-2 text-[11px] text-neutral-400 font-sans leading-relaxed border-t border-white/10 pt-2">
                    {currentLang === 'es'
                      ? 'Formación rigurosa en física de la Tierra, sismología, métodos electromagnéticos y gravimétricos, termodinámica de fluidos y modelación computacional avanzada (MATLAB / Python).'
                      : 'Rigorous foundation in solid Earth geophysics, applied electromagnetic methods (VES/TEM), fluid mechanics, seismology, and advanced computational modeling (MATLAB / Python).'}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>Santiago, Chile 🇨🇱</span>
                  <span className="text-emerald-400 font-bold">
                    {currentLang === 'es' ? 'FCFM U. DE CHILE' : 'FCFM U. OF CHILE'}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* 2. PHOTO GALLERY OF EXPEDITIONS, LABORATORIES & SUMMITS (23 REAL ARCHIVES) */}
          <div className="bg-[#080b10] border-3 border-black p-4 sm:p-5 rounded-2xl shadow-[5px_5px_0px_#facc15]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4 border-b-2 border-black pb-3">
              <div>
                <h3 className="font-mono font-black text-xs sm:text-sm text-[#facc15] uppercase tracking-wider flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-[#facc15]" />
                  <span>{currentLang === 'es' ? 'EVIDENCIA EN TERRENO: EXPEDICIONES, LABORATORIOS & CUMBRES' : 'FIELDWORK EVIDENCE: EXPEDITIONS, LABORATORIES & SUMMITS'}</span>
                </h3>
                <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                  {currentLang === 'es' 
                    ? '23 fotografías auténticas de trabajo científico, estancias internacionales, cumbres e investigación aplicada.' 
                    : '23 authentic photographs documenting scientific fieldwork, international research stays, and policy summits.'}
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { id: 'all', es: 'TODAS (23)', en: 'ALL (23)' },
                  { id: 'science', es: 'CIENCIA & LAB (7)', en: 'SCIENCE & LAB (7)' },
                  { id: 'fieldwork', es: 'EXPEDICIONES (8)', en: 'EXPEDITIONS (8)' },
                  { id: 'summit', es: 'CUMBRES & POLÍTICA (8)', en: 'SUMMITS & ADVOCACY (8)' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id as any)}
                    className={`px-2.5 py-1 text-[10px] font-mono font-black uppercase rounded border-2 border-black transition-all cursor-pointer ${
                      selectedCategory === tab.id
                        ? 'bg-[#facc15] text-black shadow-[2px_2px_0px_#000]'
                        : 'bg-[#151922] text-neutral-400 hover:text-white hover:bg-neutral-800'
                    }`}
                  >
                    {currentLang === 'es' ? tab.es : tab.en}
                  </button>
                ))}
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative bg-[#121620] border-2 border-black rounded-xl overflow-hidden shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#facc15] hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between"
                >
                  {/* Photo Thumbnail */}
                  <div className="relative w-full aspect-[4/3] bg-black overflow-hidden border-b-2 border-black">
                    <img 
                      src={resolveAsset(photo.src)} 
                      alt={currentLang === 'es' ? photo.titleEs : photo.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-2 left-2 z-10">
                      <span className={`text-[8px] font-mono font-black px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#000] uppercase ${photo.categoryColor}`}>
                        {currentLang === 'es' ? photo.categoryLabelEs : photo.categoryLabelEn}
                      </span>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute bottom-2 left-2 right-2 z-10 flex items-center justify-between text-[9px] font-mono font-bold bg-black/80 backdrop-blur-md px-2 py-1 rounded border border-white/20 text-neutral-200">
                      <span className="flex items-center space-x-1 truncate mr-1">
                        <MapPin className="w-3 h-3 text-[#facc15] shrink-0" />
                        <span className="truncate">{currentLang === 'es' ? photo.locationEs : photo.locationEn}</span>
                      </span>
                      <span className="text-[#facc15] shrink-0">{photo.year}</span>
                    </div>

                    {/* Zoom Icon Overlay on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity z-20">
                      <span className="bg-[#facc15] text-black p-2 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] transform group-hover:scale-110 transition-transform">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-3 flex flex-col flex-1 justify-between">
                    <div>
                      <h4 className="font-mono font-black text-xs text-white group-hover:text-[#facc15] transition-colors leading-snug">
                        {currentLang === 'es' ? photo.titleEs : photo.titleEn}
                      </h4>
                      <p className="mt-1 text-[10px] text-neutral-400 font-sans line-clamp-2 leading-relaxed">
                        {currentLang === 'es' ? photo.descEs : photo.descEn}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center space-x-1.5 text-[9px] font-mono text-neutral-400">
                      <Building className="w-3 h-3 text-neutral-500 shrink-0" />
                      <span className="truncate">{photo.institution}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. EXECUTIVE POSTGRADUATE CERTIFICATIONS & DIPLOMAS */}
          <div>
            <h3 className="font-mono font-black text-xs sm:text-sm text-[#facc15] uppercase tracking-wider mb-3 flex items-center space-x-2">
              <Award className="w-4 h-4 text-[#facc15]" />
              <span>{currentLang === 'es' ? 'CERTIFICACIONES EJECUTIVAS Y DIPLOMAS DE POSTGRADO' : 'EXECUTIVE POSTGRADUATE CERTIFICATIONS & DIPLOMAS'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
              
              <div className="bg-[#10141d] border-2 border-black p-3 rounded-lg shadow-[2px_2px_0px_#000]">
                <div className="text-[10px] text-amber-400 font-black">WSL DAVOS ({currentLang === 'es' ? 'SUIZA 🇨🇭' : 'SWITZERLAND 🇨🇭'})</div>
                <div className="font-bold text-white text-xs mt-1">BlueGreen Biodiversity Summit</div>
                <div className="text-[9px] text-neutral-400 mt-1">
                  {currentLang === 'es' ? 'Dinámicas de biodiversidad y humedales alpinos' : 'Alpine wetland & biodiversity dynamics'}
                </div>
              </div>

              <div className="bg-[#10141d] border-2 border-black p-3 rounded-lg shadow-[2px_2px_0px_#000]">
                <div className="text-[10px] text-emerald-400 font-black">LEIBNIZ IOER ({currentLang === 'es' ? 'ALEMANIA 🇩🇪' : 'GERMANY 🇩🇪'})</div>
                <div className="font-bold text-white text-xs mt-1">Dresden Resilient Landscapes</div>
                <div className="text-[9px] text-neutral-400 mt-1">
                  {currentLang === 'es' ? 'Ordenamiento territorial y transiciones post-carbón' : 'Spatial planning & post-coal transitions'}
                </div>
              </div>

              <div className="bg-[#10141d] border-2 border-black p-3 rounded-lg shadow-[2px_2px_0px_#000]">
                <div className="text-[10px] text-cyan-400 font-black">DEAL ({currentLang === 'es' ? 'DINAMARCA 🇩🇰' : 'DENMARK 🇩🇰'})</div>
                <div className="font-bold text-white text-xs mt-1">Doughnut Economics Lab</div>
                <div className="text-[9px] text-neutral-400 mt-1">
                  {currentLang === 'es' ? 'Límites planetarios aplicados a ciudades y economía' : 'Planetary boundaries applied to urban regions'}
                </div>
              </div>

              <div className="bg-[#10141d] border-2 border-black p-3 rounded-lg shadow-[2px_2px_0px_#000]">
                <div className="text-[10px] text-purple-400 font-black">(CR)2 CHILE 🇨🇱</div>
                <div className="font-bold text-white text-xs mt-1">{currentLang === 'es' ? 'Centro de Clima y Resiliencia' : 'Center for Climate & Resilience'}</div>
                <div className="text-[9px] text-neutral-400 mt-1">
                  {currentLang === 'es' ? 'Megasequía y modelación climática regional' : 'Megadrought & regional climate modeling'}
                </div>
              </div>

            </div>
          </div>

          {/* 4. AVALES INSTITUCIONALES Y CARTAS DE REFERENCIA */}
          <div>
            <h3 className="font-mono font-black text-xs sm:text-sm text-[#facc15] uppercase tracking-wider mb-3 flex items-center space-x-2">
              <Scroll className="w-4 h-4 text-[#facc15]" />
              <span>{currentLang === 'es' ? 'AVALES INSTITUCIONALES & CARTAS DE REFERENCIA VERIFICABLES' : 'VERIFIED INSTITUTIONAL ENDORSEMENTS & REFERENCES'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              
              <div className="bg-[#141822] border-2 border-black rounded-lg p-3.5 shadow-[2px_2px_0px_#000]">
                <div className="font-mono font-black text-xs text-white">Dr. Sebastian Jordan</div>
                <div className="text-[10px] font-mono text-neutral-400">
                  {currentLang === 'es' ? 'Investigador Principal • CAU Kiel (Alemania)' : 'Principal Investigator • CAU Kiel (Germany)'}
                </div>
                <div className="text-xs text-neutral-300 font-sans mt-2 italic">
                  "{currentLang === 'es' ? 'Carta de respaldo académico sobre capacidades cuantitativas, trabajo en laboratorio de suelos y rigurosidad analítica.' : 'Official letter of endorsement attesting to high quantitative capabilities, soil laboratory diagnostics, and analytical rigor.'}"
                </div>
              </div>

              <div className="bg-[#141822] border-2 border-black rounded-lg p-3.5 shadow-[2px_2px_0px_#000]">
                <div className="font-mono font-black text-xs text-white">Janaina Uemura</div>
                <div className="text-[10px] font-mono text-neutral-400">
                  {currentLang === 'es' ? 'Coordinadora Global • Global Forest Coalition' : 'Global Coordinator • Global Forest Coalition'}
                </div>
                <div className="text-xs text-neutral-300 font-sans mt-2 italic">
                  "{currentLang === 'es' ? 'Referencia sobre investigación de campo internacional, salvaguardas sociales e informe de biomasa para EPN.' : 'Endorsement regarding field research, social safeguards assessment, and landmark biomass investigation for EPN.'}"
                </div>
              </div>

              <div className="bg-[#141822] border-2 border-black rounded-lg p-3.5 shadow-[2px_2px_0px_#000]">
                <div className="font-mono font-black text-xs text-white">Francisca Arauna</div>
                <div className="text-[10px] font-mono text-neutral-400">
                  {currentLang === 'es' ? 'Abogada • Ex Convencional Constituyente (Chile)' : 'Attorney • Former Constitutional Delegate (Chile)'}
                </div>
                <div className="text-xs text-neutral-300 font-sans mt-2 italic">
                  "{currentLang === 'es' ? 'Testimonio de asesoría legislativa y propuestas técnicas de ordenamiento por cuencas y protección hídrica rural.' : 'Testimonial on legislative advisory and technical watershed governance proposals for rural water assemblies.'}"
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 bg-black border-t-2 border-black flex items-center justify-between text-xs font-mono text-neutral-400 shrink-0">
          <span>{currentLang === 'es' ? 'EXPEDIENTE ACADÉMICO REGISTRADO // 2026' : 'REGISTERED ACADEMIC DOSSIER // 2026'}</span>
          <span className="text-[#facc15] font-black">||| | ||||| || |||||| | |||</span>
        </div>
      </div>

      {/* Lightbox Modal for Expanded Photo Inspection */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-60 bg-black/95 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 select-none animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0c0f14] border-4 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_#facc15] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="px-4 py-2.5 bg-black border-b-2 border-black flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className={`text-[9px] font-mono font-black px-2 py-0.5 rounded border border-black uppercase ${activePhoto.categoryColor}`}>
                  {currentLang === 'es' ? activePhoto.categoryLabelEs : activePhoto.categoryLabelEn}
                </span>
                <span className="font-mono font-bold text-xs text-amber-300">
                  {currentLang === 'es' ? activePhoto.locationEs : activePhoto.locationEn} • {activePhoto.year}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-1 rounded bg-white/10 hover:bg-red-600 text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Viewport */}
            <div className="relative w-full bg-black flex items-center justify-center max-h-[62vh] overflow-hidden">
              <img 
                src={resolveAsset(activePhoto.src)} 
                alt={currentLang === 'es' ? activePhoto.titleEs : activePhoto.titleEn}
                className="max-h-[62vh] w-auto object-contain"
              />

              {/* Prev / Next Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-[#facc15] text-white hover:text-black border-2 border-black shadow-[2px_2px_0px_#000] transition-all cursor-pointer"
                title={currentLang === 'es' ? 'Foto anterior' : 'Previous photo'}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-[#facc15] text-white hover:text-black border-2 border-black shadow-[2px_2px_0px_#000] transition-all cursor-pointer"
                title={currentLang === 'es' ? 'Siguiente foto' : 'Next photo'}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Details Footer */}
            <div className="p-4 bg-[#121620] border-t-2 border-black flex flex-col space-y-1.5">
              <h3 className="font-mono font-black text-sm sm:text-base text-white">
                {currentLang === 'es' ? activePhoto.titleEs : activePhoto.titleEn}
              </h3>
              <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                {currentLang === 'es' ? activePhoto.descEs : activePhoto.descEn}
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>{activePhoto.institution}</span>
                <span>{lightboxIndex! + 1} / {filteredPhotos.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
