import React, { useState } from 'react';
import { 
  X, 
  Code, 
  Database, 
  Globe2, 
  Award, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  Terminal,
  Radio,
  ExternalLink,
  Wrench,
  Activity,
  Binary
} from 'lucide-react';
import { Language } from '../types';
import { TechLogo } from './TechLogos';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialTab?: 'science' | 'comms' | 'equipment';
}

export const SkillsModal: React.FC<SkillsModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialTab = 'science'
}) => {
  const [activeTab, setActiveTab] = useState<'science' | 'comms' | 'equipment'>(initialTab);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c1017] border-4 border-black rounded-2xl shadow-[10px_10px_0px_#06b6d4] flex flex-col overflow-hidden text-white font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ============================================================== */}
        {/* 1. TOP HEADER: COMMERCIAL SERVICES & SKILLS MATRIX             */}
        {/* ============================================================== */}
        <div className="px-4 sm:px-6 py-3.5 bg-black border-b-3 border-black flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-3">
            <span className="bg-[#06b6d4] text-black px-3 py-1 font-mono font-black text-xs sm:text-sm uppercase border-2 border-black shadow-[2px_2px_0px_#000] -rotate-1">
              {currentLang === 'es' ? '[ CATÁLOGO DE SERVICIOS & CAPACIDADES TÉCNICAS ]' : '[ CONSULTING SERVICES & TECHNICAL CAPABILITIES ]'}
            </span>
            <span className="hidden sm:inline-block bg-emerald-400 text-black font-mono font-black text-[10px] px-2 py-0.5 border border-black uppercase rotate-1">
              {currentLang === 'es' ? 'DISPONIBLE PARA CONSULTORÍA' : 'OPEN FOR ROLES & ADVISORY'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/10 hover:bg-red-600 hover:text-white text-neutral-300 transition-all border border-white/20 active:scale-90 cursor-pointer ml-auto"
            title={currentLang === 'es' ? 'Cerrar' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Commercial Proposition Banner */}
        <div className="bg-[#07131d] border-b-2 border-cyan-500/30 px-4 sm:px-6 py-2.5 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-cyan-300">
          <div className="flex items-center space-x-2">
            <Binary className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="font-bold text-white">
              {currentLang === 'es' 
                ? 'GEMELOS DIGITALES 3D • GEOSPATIAL ML & dMRV • RIESGO NATCAT • AUDITORÍA UE & POLÍTICA PÚBLICA' 
                : '3D DIGITAL TWINS • GEOSPATIAL ML & dMRV • NATCAT RISK • EU POLICY & CARBON AUDITING'}
            </span>
          </div>
          <span className="text-emerald-400 font-bold shrink-0">
            ● {currentLang === 'es' ? 'AI PRODUCT OWNER / TECH LEAD // TIEMPO DE RESPUESTA < 24H' : 'AI PRODUCT OWNER / TECH LEAD // < 24H RESPONSE'}
          </span>
        </div>

        {/* ============================================================== */}
        {/* 2. TAB CONTROLS (STENCIL TAPE & COMIC INK)                     */}
        {/* ============================================================== */}
        <div className="px-4 sm:px-6 pt-3 pb-2 bg-black/70 border-b border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          <button
            onClick={() => setActiveTab('science')}
            className={`px-3 py-1.5 font-mono font-black text-xs uppercase tracking-tight border-2 border-black transition-all flex items-center space-x-1.5 cursor-pointer shrink-0 ${
              activeTab === 'science'
                ? 'bg-[#06b6d4] text-black shadow-[3px_3px_0px_#fff] -rotate-1'
                : 'bg-white/10 text-neutral-300 hover:bg-white/20'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? '01. CIENCIA, CÓDIGO & MODELACIÓN' : '01. SCIENCE, CODE & MODELING'}</span>
          </button>

          <button
            onClick={() => setActiveTab('comms')}
            className={`px-3 py-1.5 font-mono font-black text-xs uppercase tracking-tight border-2 border-black transition-all flex items-center space-x-1.5 cursor-pointer shrink-0 ${
              activeTab === 'comms'
                ? 'bg-[#f97316] text-white shadow-[3px_3px_0px_#fff] rotate-1'
                : 'bg-white/10 text-neutral-300 hover:bg-white/20'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? '02. COMUNICACIONES & ESTRATEGIA' : '02. COMMS & STRATEGY'}</span>
          </button>

          <button
            onClick={() => setActiveTab('equipment')}
            className={`px-3 py-1.5 font-mono font-black text-xs uppercase tracking-tight border-2 border-black transition-all flex items-center space-x-1.5 cursor-pointer shrink-0 ${
              activeTab === 'equipment'
                ? 'bg-[#22c55e] text-black shadow-[3px_3px_0px_#fff] -rotate-1'
                : 'bg-white/10 text-neutral-300 hover:bg-white/20'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? '03. EQUIPOS DE CAMPO & IDIOMAS' : '03. FIELD GEAR & LANGUAGES'}</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* 3. SCROLLABLE TAB CONTENT                                      */}
        {/* ============================================================== */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 no-scrollbar">
          
          {/* ============================================================== */}
          {/* TAB 1: SCIENCE, CODE & MODELING                                */}
          {/* ============================================================== */}
          {activeTab === 'science' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Languages & Software Meter Grid */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-cyan-500/20 pb-1.5">
                  <h4 className="font-mono font-black text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <Terminal className="w-4 h-4" />
                    <span>{currentLang === 'es' ? 'STACK DE PROGRAMACIÓN & SOFTWARE ESPACIAL' : 'PROGRAMMING STACK & GEOSPATIAL ENGINES'}</span>
                  </h4>
                  <span className="font-mono text-[10px] text-neutral-400">[VU POWER LEVELS]</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { 
                      name: 'Python', 
                      level: 95, 
                      tagsEn: 'GeoPandas, Rasterio, GDAL, scikit-learn, XGBoost, xarray, Remote Sensing ML & dMRV pipelines',
                      tagsEs: 'GeoPandas, Rasterio, GDAL, scikit-learn, XGBoost, xarray, Remote Sensing ML y pipelines dMRV',
                      meter: '[██████████████░] 95%'
                    },
                    { 
                      name: 'QGIS & ArcGIS Pro', 
                      level: 95, 
                      tagsEn: 'Catchment delineation, LiDAR DEMs, hydrogeological mapping, NatCat hazard & exposure rasters',
                      tagsEs: 'Delimitación de cuencas, DEMs LiDAR, mapeo hidrogeológico, rasters de amenaza y exposición NatCat',
                      meter: '[██████████████░] 95%'
                    },
                    { 
                      name: 'Docker', 
                      level: 90, 
                      tagsEn: 'Reproducible microservices, CI/CD images, containerized geo-modeling',
                      tagsEs: 'Microservicios reproducibles, imágenes CI/CD, modelación contenerizada',
                      meter: '[█████████████░░] 90%'
                    },
                    { 
                      name: 'PostgreSQL / PostGIS', 
                      level: 85, 
                      tagsEn: 'Indexed spatial queries, polygon filtering, relational GIS databases',
                      tagsEs: 'Consultas espaciales indexadas, filtrado poligonal, bases GIS relacionales',
                      meter: '[████████████░░░] 85%'
                    },
                    { 
                      name: 'Google Earth Engine (GEE)', 
                      level: 85, 
                      tagsEn: 'Sentinel-1/2 (SAR & Optical), Landsat, GEDI LiDAR, ML land-cover classification & carbon dMRV',
                      tagsEs: 'Sentinel-1/2 (Radar SAR y Óptico), Landsat, GEDI LiDAR, clasificación ML y carbono dMRV',
                      meter: '[████████████░░░] 85%'
                    },
                    { 
                      name: 'Delft3D / Hydro Models', 
                      level: 80, 
                      tagsEn: 'Storm surge dynamics, coastal flood catastrophe risk (NatCat), sea-level rise (Lauwersmeer)',
                      tagsEs: 'Dinámica de marejadas, riesgo catastrófico de inundación (NatCat) y nivel del mar (Lauwersmeer)',
                      meter: '[███████████░░░░] 80%'
                    },
                    { 
                      name: 'Unity 3D', 
                      level: 85, 
                      tagsEn: 'Real-time spatial digital twins, UN Citiverse simulation & 3D environmental R&D centers',
                      tagsEs: 'Gemelos digitales espaciales 3D en tiempo real, simulación ONU Citiverse y centros tecnológicos',
                      meter: '[████████████░░░] 85%'
                    },
                    { 
                      name: 'Next.js & React', 
                      level: 90, 
                      tagsEn: 'Interactive climate dashboards, analytical UI/UX, responsive map viewers',
                      tagsEs: 'Dashboards climáticos interactivos, UI/UX analítica, visores de mapas',
                      meter: '[█████████████░░] 90%'
                    },
                    { 
                      name: 'TypeScript', 
                      level: 90, 
                      tagsEn: 'Strict typing for geospatial data pipelines and web architectures',
                      tagsEs: 'Tipado estricto para pipelines de datos espaciales y arquitecturas web',
                      meter: '[█████████████░░] 90%'
                    },
                    { 
                      name: 'FastAPI', 
                      level: 90, 
                      tagsEn: 'High-performance async REST APIs for hydrological & ML numerical models',
                      tagsEs: 'APIs REST asíncronas de alto rendimiento para modelos numéricos y ML',
                      meter: '[█████████████░░] 90%'
                    },
                    { 
                      name: 'R Language', 
                      level: 90, 
                      tagsEn: 'Spatial analytics, sf, ggplot2, time-series, ecological modeling',
                      tagsEs: 'Análisis espacial, sf, ggplot2, series temporales, modelación ecológica',
                      meter: '[█████████████░░] 90%'
                    },
                    { 
                      name: 'Git & GitHub', 
                      level: 90, 
                      tagsEn: 'Version control, open repositories, automated reproducible workflows',
                      tagsEs: 'Control de versiones, repositorios abiertos, flujos reproducibles automáticos',
                      meter: '[█████████████░░] 90%'
                    },
                    { 
                      name: 'LaTeX / Typst', 
                      level: 95, 
                      tagsEn: 'High-precision mathematical typography for scientific papers and theses',
                      tagsEs: 'Tipografía matemática de alta precisión para artículos científicos y tesis',
                      meter: '[██████████████░] 95%'
                    }
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3 bg-[#111722] border-2 border-black rounded-lg shadow-[3px_3px_0px_#000] space-y-1.5 hover:border-cyan-500/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <TechLogo name={item.name} size={20} />
                          <span className="font-mono font-black text-sm text-white">{item.name}</span>
                        </div>
                        <span className="font-mono text-[10px] text-cyan-400 font-bold">{item.meter}</span>
                      </div>
                      
                      {/* Terminal Progress Bar */}
                      <div className="w-full h-2 bg-black rounded-sm overflow-hidden p-0.5 border border-white/20">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-yellow-400" 
                          style={{ width: `${item.level}%` }}
                        />
                      </div>

                      <p className="text-[10px] font-sans text-neutral-400 leading-tight">
                        {currentLang === 'es' ? item.tagsEs : item.tagsEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Biophysical & Catchment Methodologies */}
              <div className="space-y-3">
                <div className="border-b border-cyan-500/20 pb-1.5">
                  <h4 className="font-mono font-black text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <Database className="w-4 h-4" />
                    <span>{currentLang === 'es' ? 'METODOLOGÍAS CIENTÍFICAS APLICADAS' : 'APPLIED SCIENTIFIC METHODOLOGIES'}</span>
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      badgeEn: '3D DIGITAL TWINS & R&D CENTERS',
                      badgeEs: 'GEMELOS DIGITALES 3D & CENTROS TECNOLÓGICOS',
                      titleEn: 'Multi-Scale Environmental & Agricultural Digital Twins',
                      titleEs: 'Investigación y Arquitectura de Gemelos Digitales (Digital Twins)',
                      descEn: 'Development of 3D & 24h/365d ecohydrological digital twins (Wetland Monitor at CAU Kiel, AgriTwin 122,000 ha in Three.js/React/ESP32, and Smart Food Parks) for technological centers.',
                      descEs: 'Investigación y desarrollo de gemelos digitales 3D y simuladores ecohidrológicos (Wetland Monitor en CAU Kiel, AgriTwin 122.000 ha en Three.js/React/ESP32 y Smart Food Parks).'
                    },
                    {
                      badgeEn: 'CLIMATE-TECH, CARBON & dMRV',
                      badgeEs: 'CLIMATE-TECH, AUDITORÍA DE CARBONO & dMRV',
                      titleEn: 'Eddy Covariance GHG Fluxes & Digital MRV (IPCC Tier 2)',
                      titleEs: 'Flujos GEI (Eddy Covariance) & Sistemas Digitales dMRV',
                      descEn: 'High-frequency turbulent flux quantification of CO₂, CH₄ and N₂O (LI-COR towers, GWP20/GWP100) coupled with offline PWA field protocols (ReWild Suite) for carbon & biodiversity dMRV.',
                      descEs: 'Cuantificación de flujos turbulentos de CO₂, CH₄ y N₂O en turberas (torres LI-COR, balances GWP20/GWP100) acoplada a protocolos digitales de carbono IPCC Tier 2 y biodiversidad (dMRV).'
                    },
                    {
                      badgeEn: 'GEOSPATIAL DATA SCIENCE & REMOTE SENSING ML',
                      badgeEs: 'GEOSPATIAL DATA SCIENCE & REMOTE SENSING ML',
                      titleEn: 'Multi-Spectral, SAR Radar & GEDI LiDAR Machine Learning',
                      titleEs: 'Teledetección Satelital, Radar/LiDAR & Machine Learning Espacial',
                      descEn: 'Supervised/unsupervised classification, burn severity, canopy biomass (GEDI LiDAR) and NDVI/NDRE pipelines in Google Earth Engine, Python (GeoPandas/Rasterio/scikit-learn), R and PostGIS.',
                      descEs: 'Clasificación supervisada/no supervisada, severidad de fuego, estructura de dosel (LiDAR GEDI) y pipelines NDVI/NDRE en Google Earth Engine, Python, R y PostGIS.'
                    },
                    {
                      badgeEn: 'NATCAT & PHYSICAL CLIMATE RISK (FINANCE / REINSURANCE)',
                      badgeEs: 'RIESGO CATASTRÓFICO (NATCAT) & CLIMÁTICO FÍSICO',
                      titleEn: 'Wildfire, Flood & Drought Catastrophe Risk Modeling',
                      titleEs: 'Modelación de Catástrofes (Incendios, Inundaciones & Sequía)',
                      descEn: 'Quantitative physical climate risk assessment (Hazard × Exposure × Vulnerability, TCFD/CSRD): coastal storm surge (Delft3D Lauwersmeer), wildfire propagation (FWI) and aquifer drought (VES).',
                      descEs: 'Análisis cuantitativo de riesgo climático físico para finanzas y seguros (Amenaza × Exposición × Vulnerabilidad): inundaciones (Delft3D/TWI), megaincendios (FWI) y sequía hidrogeológica.'
                    },
                    {
                      badgeEn: 'AI PRODUCT OWNER & ENV TECH LEAD',
                      badgeEs: 'AI PRODUCT OWNER & LÍDER TÉCNICO AMBIENTAL',
                      titleEn: 'Environmental Decision Systems & AI Product Ownership',
                      titleEs: 'Dirección de Productos de IA y Software en Administración Ambiental',
                      descEn: 'End-to-end product leadership translating environmental regulation and biophysical science into software roadmaps, C++ IoT sensor networks, full-stack web apps and legal/ecological AI assistants.',
                      descEs: 'Liderazgo técnico y de producto (Product Owner / Tech Lead) desde sensores C++ ESP32 y modelos biofísicos hasta aplicaciones web progresivas y asistentes de IA para gestión ambiental.'
                    },
                    {
                      badgeEn: 'HYDROGEOPHYSICS & SOIL MECHANICS',
                      badgeEs: 'HIDROGEOFÍSICA & FÍSICA DE SUELOS',
                      titleEn: 'Electrical Resistivity Tomography (ERT / VES) & Soil Physics',
                      titleEs: 'Tomografía de Resistividad Eléctrica (ERT / SEV) y Mecánica Edáfica',
                      descEn: 'Non-invasive aquifer profiling (Syscal Pro), water table drawdown under agroforestry/climate stress, oedometer precompression stress and air permeability in peatlands.',
                      descEs: 'Caracterización no invasiva de acuíferos (Syscal Pro), abatimiento del nivel freático bajo presión agroforestal y ensayos de compactación mecánica y permeabilidad en suelos.'
                    }
                  ].map((m, idx) => (
                    <div key={idx} className="p-3 bg-[#0d141e] border-2 border-black rounded-lg space-y-1 shadow-[2px_2px_0px_#000]">
                      <span className="font-mono font-bold text-[9px] px-1.5 py-0.5 bg-cyan-950 text-cyan-300 border border-cyan-700/50 uppercase inline-block">
                        {currentLang === 'es' ? m.badgeEs : m.badgeEn}
                      </span>
                      <h5 className="font-mono font-black text-xs text-white pt-1">
                        {currentLang === 'es' ? m.titleEs : m.titleEn}
                      </h5>
                      <p className="text-[11px] font-sans text-neutral-300 leading-relaxed">
                        {currentLang === 'es' ? m.descEs : m.descEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 2: COMMS, STRATEGY & ART DIRECTION                         */}
          {/* ============================================================== */}
          {activeTab === 'comms' && (
            <div className="space-y-6 animate-fadeIn">
              
              <div className="space-y-3">
                <div className="border-b border-orange-500/20 pb-1.5">
                  <h4 className="font-mono font-black text-xs uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                    <Radio className="w-4 h-4" />
                    <span>{currentLang === 'es' ? 'ALTA POLÍTICA PÚBLICA, AUDITORÍA UE, ECONOMÍA ECOLÓGICA & COMUNICACIÓN ESTRATÉGICA' : 'PUBLIC POLICY, EU CARBON OVERSIGHT, ECOLOGICAL ECONOMICS & STRATEGIC COMMS'}</span>
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    {
                      titleEn: 'Legislative Advocacy & High-Level Public Policy',
                      titleEs: 'Incidencia Legislativa & Alta Política Pública',
                      metricEn: 'Congress & Constitutional Advisory',
                      metricEs: 'Congreso & Convención',
                      descEn: 'Official technical testimony before Chile’s Chamber of Deputies, constitutional environmental norm drafting, and watershed transition policy.',
                      descEs: 'Alegatos técnicos oficiales ante la Cámara de Diputadas y Diputados, redacción de normas constitucionales y planes de ordenamiento de cuencas.'
                    },
                    {
                      titleEn: 'EU Policy Oversight & Carbon Accounting Audits',
                      titleEs: 'Fiscalización de Políticas UE & Auditoría de Carbono',
                      metricEn: 'EU RED III • EPN / BAN / GFC',
                      metricEs: 'UE RED III • Think Tanks / ONGs',
                      descEn: 'Transnational carbon accounting and supply-chain audits exposing biomass loopholes under EU RED III / LULUCF directives with EPN, BAN and GFC.',
                      descEs: 'Auditoría científica de contabilidad de carbono y cadenas de biomasa bajo normativas europeas RED III / LULUCF junto a Think Tanks y redes globales (EPN, BAN, GFC).'
                    },
                    {
                      titleEn: 'Political Ecology, Degrowth & Ecological Economics',
                      titleEs: 'Ecología Política, Decrecimiento & Economía Ecológica',
                      metricEn: 'Oslo 2025 • DEAL Copenhagen',
                      metricEs: 'Oslo 2025 • DEAL Copenhague',
                      descEn: 'Speaker at the 10th International Degrowth Conference (Oslo), DEAL Doughnut Economics (Copenhagen), ENJUST (Bonn) and author of the 4-part OLCA treatise.',
                      descEs: 'Ponente en la Conferencia Internacional de Decrecimiento (Oslo 2025), certificado en Doughnut Economics (Copenhague), ENJUST Bonn y autor de la tetralogía en OLCA.'
                    },
                    {
                      titleEn: 'High-Impact Mass Campaigns & Media Direction',
                      titleEs: 'Campañas Masivas de Alto Impacto (+700K)',
                      metricEn: '+700K Audience',
                      metricEs: '+700K Audiencia',
                      descEn: 'Campaign direction for national initiatives (Apruebo Rural, Primera Línea Prensa, Red Maule Sur) with massive organic reach and territorial correspondents.',
                      descEs: 'Diseño y dirección de la campaña nacional Apruebo Rural, Primera Línea Prensa (+700k seguidores) y Red Comunitaria del Maule con corresponsales rurales.'
                    },
                    {
                      titleEn: 'Art Direction & Cultural Production',
                      titleEs: 'Dirección de Arte & Producción Cultural',
                      metricEn: 'Rap Beauchef & Cuarentena Rap',
                      metricEs: 'Rap Beauchef & Cuarentena Rap',
                      descEn: 'Executive stage production, live amphitheater audio engineering, and pan-American digital streaming league architecture across 5+ countries.',
                      descEs: 'Producción ejecutiva de escenarios en vivo, rigging de sonido en anfiteatros universitarios y ligas federales de streaming en Latinoamérica.'
                    },
                    {
                      titleEn: 'Graphic Agitprop & Relief Printmaking',
                      titleEs: 'Agitación Gráfica & Xilografía Popular',
                      metricEn: 'Paulina Aguirre Brigade',
                      metricEs: 'Brigada Paulina Aguirre',
                      descEn: 'Street murals, linocut, and woodcut poster art for historical memory, peasant water rights, and human rights.',
                      descEs: 'Muralismo callejero, grabado en linóleo y xilografía para defensa de derechos humanos, agua campesina y memoria histórica.'
                    }
                  ].map((c, idx) => (
                    <div key={idx} className="p-3 bg-[#19120d] border-2 border-black rounded-lg shadow-[3px_3px_0px_#000] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-black text-xs text-orange-300">
                          {currentLang === 'es' ? c.titleEs : c.titleEn}
                        </span>
                        <span className="font-mono text-[9px] px-1.5 py-0.2 bg-orange-500/20 text-orange-200 border border-orange-500/30">
                          {currentLang === 'es' ? c.metricEs : c.metricEn}
                        </span>
                      </div>
                      <p className="text-[11px] font-sans text-neutral-300 leading-relaxed">
                        {currentLang === 'es' ? c.descEs : c.descEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 3: FIELD EQUIPMENT & WORKING LANGUAGES                     */}
          {/* ============================================================== */}
          {activeTab === 'equipment' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Field Gear */}
              <div className="space-y-3">
                <div className="border-b border-green-500/20 pb-1.5">
                  <h4 className="font-mono font-black text-xs uppercase tracking-wider text-green-400 flex items-center gap-1.5">
                    <Activity className="w-4 h-4" />
                    <span>{currentLang === 'es' ? 'INSTRUMENTAL DE CAMPO & LABORATORIO OPERADO' : 'FIELD GEAR & LABORATORY INSTRUMENTATION'}</span>
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { 
                      name: 'Syscal Pro (Iris Instruments)', 
                      roleEn: 'Multi-electrode resistivity meter for deep electrical resistivity tomography (ERT).',
                      roleEs: 'Resistivímetro multielectrodo para tomografía eléctrica profunda (ERT).' 
                    },
                    { 
                      name: 'LI-COR LI-7500 / LI-7700', 
                      roleEn: 'Open-path infrared gas analyzers for micrometeorological CO2 and CH4 flux towers.',
                      roleEs: 'Analizadores de gas infrarrojo para torres micrometeorológicas de CO2 y CH4.' 
                    },
                    { 
                      name: 'CTD Divers & Piezometers', 
                      roleEn: 'Continuous logging of groundwater electrical conductivity, temperature, and water table levels.',
                      roleEs: 'Monitoreo de conductividad, temperatura y nivel freático en pozos.' 
                    },
                    { 
                      name: 'Edelman Augers & Soil Coring', 
                      roleEn: 'Undisturbed soil core extraction for bulk density, hydraulic conductivity, and porosity testing.',
                      roleEs: 'Extracción de testigos de suelo intactos para análisis de densidad aparente.' 
                    },
                    { 
                      name: 'Dynamic Soil Flux Chambers', 
                      roleEn: 'In-situ measurement of soil heterotrophic/autotrophic respiration and biogenic emissions.',
                      roleEs: 'Medición in-situ de respiración del suelo y emisiones biogénicas.' 
                    },
                    { 
                      name: 'Drones & Multispectral Sensors', 
                      roleEn: 'Aerial photogrammetry and NDVI/NDRE calculation for precision vegetation vigor diagnostics.',
                      roleEs: 'Fotogrametría aérea y cálculo de índices de vigor vegetal (NDVI).' 
                    }
                  ].map((eq, idx) => (
                    <div key={idx} className="p-3 bg-[#0d1811] border-2 border-black rounded-lg space-y-1">
                      <div className="flex items-center space-x-2">
                        <TechLogo name={eq.name} size={18} />
                        <div className="font-mono font-bold text-xs text-green-300">{eq.name}</div>
                      </div>
                      <p className="text-[10px] font-sans text-neutral-400">
                        {currentLang === 'es' ? eq.roleEs : eq.roleEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Languages */}
              <div className="space-y-3">
                <div className="border-b border-green-500/20 pb-1.5">
                  <h4 className="font-mono font-black text-xs uppercase tracking-wider text-green-400 flex items-center gap-1.5">
                    <Globe2 className="w-4 h-4" />
                    <span>{currentLang === 'es' ? 'DOMINIO DE IDIOMAS' : 'LANGUAGE PROFICIENCY'}</span>
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-black/60 border-2 border-black rounded-lg space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-black text-sm text-white">{currentLang === 'es' ? 'Español' : 'Spanish'}</span>
                      <span className="font-mono text-[9px] bg-green-500/20 text-green-300 px-1.5 border border-green-500/40">
                        {currentLang === 'es' ? 'NATIVO' : 'NATIVE'}
                      </span>
                    </div>
                    <p className="text-[10px] text-neutral-400">
                      {currentLang === 'es' 
                        ? 'Oratoria pública, vocería parlamentaria, redacción editorial y legislativa.' 
                        : 'Public speaking, parliamentary spokesperson, editorial authoring, and policy briefs.'}
                    </p>
                  </div>

                  <div className="p-3 bg-black/60 border-2 border-black rounded-lg space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-black text-sm text-white">English</span>
                      <span className="font-mono text-[9px] bg-green-500/20 text-green-300 px-1.5 border border-green-500/40">
                        C1 / FLUENT
                      </span>
                    </div>
                    <p className="text-[10px] text-neutral-400">
                      {currentLang === 'es'
                        ? 'Ponencias en cumbres internacionales (Oslo, Bonn, Davos) y redacción científica.'
                        : 'Keynote speaking at international summits (Oslo, Bonn, Davos) & scientific paper writing.'}
                    </p>
                  </div>

                  <div className="p-3 bg-black/60 border-2 border-black rounded-lg space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-black text-sm text-white">Deutsch</span>
                      <span className="font-mono text-[9px] bg-amber-500/20 text-amber-300 px-1.5 border border-amber-500/40">
                        B1 / B2
                      </span>
                    </div>
                    <p className="text-[10px] text-neutral-400">
                      {currentLang === 'es'
                        ? 'Estudios de M.Sc. en CAU Kiel, comunicación técnica y vida académica en Alemania.'
                        : 'M.Sc. studies at CAU Kiel, technical communication, and academic work in Germany.'}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* ============================================================== */}
        {/* 4. COMMERCIAL MODAL FOOTER                                     */}
        {/* ============================================================== */}
        <div className="px-4 sm:px-6 py-3 bg-black border-t-2 border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs font-mono shrink-0">
          <div className="flex items-center space-x-2 text-neutral-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px]">
              {currentLang === 'es' ? 'DISPONIBLE PARA CONTRATACIÓN & CONSULTORÍAS TÉCNICAS' : 'AVAILABLE FOR CONSULTING & TECHNICAL ROLES'}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="mailto:danisantander.urrutia@gmail.com?subject=Propuesta%20de%20Consultor%C3%ADa%20-%20Daniel%20Santander"
              className="px-3.5 py-1.5 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase text-xs transition-all shadow-[2px_2px_0px_#000] active:scale-95 flex items-center space-x-1.5"
            >
              <span>💼</span>
              <span>{currentLang === 'es' ? 'SOLICITAR PROPUESTA / HIRE ME' : 'REQUEST PROPOSAL / HIRE ME'}</span>
            </a>

            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-neutral-300 font-bold uppercase text-xs transition-all cursor-pointer border border-white/20"
            >
              {currentLang === 'es' ? 'CERRAR' : 'CLOSE'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
