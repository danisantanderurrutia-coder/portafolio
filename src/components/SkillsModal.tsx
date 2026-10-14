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
        {/* 1. TOP HEADER: TACTICAL TECHNICAL BLUEPRINT                    */}
        {/* ============================================================== */}
        <div className="px-4 sm:px-6 py-3.5 bg-black border-b-3 border-black flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-3">
            <span className="bg-[#06b6d4] text-black px-3 py-1 font-mono font-black text-xs sm:text-sm uppercase border-2 border-black shadow-[2px_2px_0px_#000] -rotate-1">
              {currentLang === 'es' ? '[ FICHA TÉCNICA // SKILLS & METODOLOGÍAS ]' : '[ TECHNICAL SPECIFICATIONS // SKILLS MATRIX ]'}
            </span>
            <span className="hidden sm:inline-block bg-yellow-400 text-black font-mono font-black text-[10px] px-2 py-0.5 border border-black uppercase rotate-1">
              VERIFIED WORKFLOWS
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/10 hover:bg-red-600 hover:text-white text-neutral-300 transition-all border border-white/20 active:scale-90 cursor-pointer ml-auto"
            title="Cerrar // Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Blueprint Subheader Bar */}
        <div className="bg-[#07131d] border-b-2 border-cyan-500/30 px-4 sm:px-6 py-2.5 shrink-0 flex items-center justify-between text-[11px] font-mono text-cyan-300">
          <div className="flex items-center space-x-2">
            <Binary className="w-3.5 h-3.5 text-cyan-400" />
            <span>ID: DSU-ENGINEERING-CORE • VERSIÓN 2026.04</span>
          </div>
          <span className="text-neutral-400 hidden sm:inline">
            {currentLang === 'es' ? 'AUDITABLE PARA PERFILES SENIOR' : 'SENIOR AUDITABLE COMPETENCIES'}
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
            <span>01. CIENCIA, CÓDIGO & MODELACIÓN</span>
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
            <span>02. COMUNICACIONES & ESTRATEGIA</span>
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
            <span>03. EQUIPOS DE CAMPO & IDIOMAS</span>
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
                      tags: 'GeoPandas, NumPy, SciPy, Rasterio, GDAL, Matplotlib',
                      meter: '[██████████████░] 95%'
                    },
                    { 
                      name: 'R Language', 
                      level: 90, 
                      tags: 'Análisis espacial, sf, ggplot2, series temporales, ecología',
                      meter: '[█████████████░░] 90%'
                    },
                    { 
                      name: 'QGIS & ArcGIS Pro', 
                      level: 95, 
                      tags: 'Modelación hidrológica, DEMs LiDAR, cuencas, cartografía',
                      meter: '[██████████████░] 95%'
                    },
                    { 
                      name: 'Google Earth Engine (GEE)', 
                      level: 85, 
                      tags: 'Procesamiento masivo de constelaciones Sentinel-2 y Landsat',
                      meter: '[████████████░░░] 85%'
                    },
                    { 
                      name: 'Delft3D / Hydro Models', 
                      level: 80, 
                      tags: 'Dinámica de marejadas de tempestad, transporte estuarino (Lauwersmeer)',
                      meter: '[███████████░░░░] 80%'
                    },
                    { 
                      name: 'Git, GitHub & CI/CD', 
                      level: 90, 
                      tags: 'Control de versiones, pipelines automatizados, repositorios abiertos',
                      meter: '[█████████████░░] 90%'
                    },
                    { 
                      name: 'LaTeX / Typst', 
                      level: 95, 
                      tags: 'Tipografía de alta precisión para artículos científicos y tesis',
                      meter: '[██████████████░] 95%'
                    },
                    { 
                      name: 'PostgreSQL / PostGIS', 
                      level: 85, 
                      tags: 'Consultas espaciales indexadas, filtrado de polígonos masivos',
                      meter: '[████████████░░░] 85%'
                    }
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3 bg-[#111722] border-2 border-black rounded-lg shadow-[3px_3px_0px_#000] space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-black text-sm text-white">{item.name}</span>
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
                        {item.tags}
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
                      badge: 'GEOFÍSICA & HIDROLOGÍA',
                      title: currentLang === 'es' ? 'Tomografía de Resistividad Eléctrica (ERT)' : 'Electrical Resistivity Tomography (ERT)',
                      desc: currentLang === 'es' ? 'Caracterización no invasiva de acuíferos, intrusión salina y mapeo de perfiles de suelo 2D/3D con Syscal Pro.' : 'Non-invasive aquifer characterization, saline intrusion and 2D/3D soil profiles using Syscal Pro.'
                    },
                    {
                      badge: 'ATMÓSFERA & FLUJOS GEI',
                      title: currentLang === 'es' ? 'Eddy Covariance & Micro-meteorología' : 'Eddy Covariance & Micro-meteorology',
                      desc: currentLang === 'es' ? 'Cuantificación de flujos turbulentos de CO2, CH4 y vapor de agua en turberas y agroecosistemas con torres LI-COR.' : 'Quantifying turbulent CO2, CH4 and water vapor exchange across peatlands using LI-COR towers.'
                    },
                    {
                      badge: 'RIESGO CLIMÁTICO',
                      title: currentLang === 'es' ? 'Modelación de Ascenso del Nivel del Mar' : 'Sea Level Rise & Coastal Storm Surge',
                      desc: currentLang === 'es' ? 'Simulaciones de inundación costera y vulnerabilidad hidrodinámica en la cuenca de Lauwersmeer (Países Bajos).' : 'Coastal flooding simulations and hydrodynamic vulnerability in the Lauwersmeer basin (Netherlands).'
                    },
                    {
                      badge: 'IOT & AGROTECNOLOGÍA',
                      title: currentLang === 'es' ? 'Gemelos Digitales Agrícolas (AgriTwin)' : 'Agricultural Digital Twins (AgriTwin)',
                      desc: currentLang === 'es' ? 'Integración de telemetría de humedad en tiempo real con índices satelitales Sentinel (NDVI/NDRE) en el Maule.' : 'Real-time soil telemetry integrated with Sentinel NDVI/NDRE satellite indexes in Maule, Chile.'
                    }
                  ].map((m, idx) => (
                    <div key={idx} className="p-3 bg-[#0d141e] border-2 border-black rounded-lg space-y-1 shadow-[2px_2px_0px_#000]">
                      <span className="font-mono font-bold text-[9px] px-1.5 py-0.5 bg-cyan-950 text-cyan-300 border border-cyan-700/50 uppercase inline-block">
                        {m.badge}
                      </span>
                      <h5 className="font-mono font-black text-xs text-white pt-1">{m.title}</h5>
                      <p className="text-[11px] font-sans text-neutral-300 leading-relaxed">{m.desc}</p>
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
                    <span>{currentLang === 'es' ? 'CAPACIDADES EN COMUNICACIÓN ESTRATÉGICA & PRODUCCIÓN' : 'STRATEGIC COMMS & PRODUCTION CAPABILITIES'}</span>
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    {
                      title: 'Campañas Masivas de Alto Impacto',
                      metric: '+700K Audiencia',
                      desc: 'Diseño y dirección de la campaña nacional Apruebo Rural y de Primera Línea Prensa con amplia cobertura orgánica y viral.'
                    },
                    {
                      title: 'Dirección de Arte & Producción Cultural',
                      metric: 'Rap Beauchef & Cuarentena',
                      desc: 'Producción ejecutiva de escenarios en vivo, rigging de sonido en anfiteatros universitarios y ligas de streaming digital.'
                    },
                    {
                      title: 'Vocería Parlamentaria & Incidencia',
                      metric: 'Congreso Nacional',
                      desc: 'Alegatos técnicos ante comisiones de la Cámara de Diputadas y Diputados sobre megaincendios e impacto del monocultivo forestal.'
                    },
                    {
                      title: 'Periodismo de Investigación & Datos',
                      metric: 'Informe EPN 2024',
                      desc: 'Investigación transnacional sobre contabilidad de carbono en biomasa forestal bajo las normativas RED III de la Unión Europea.'
                    },
                    {
                      title: 'Arquitectura de Comunidades Digitales',
                      metric: '+12.000 Miembros',
                      desc: 'Administración de servidores Discord de alto rendimiento con bots de matchmaking, baja latencia y alcance en 8 países.'
                    },
                    {
                      title: 'Agitación Gráfica & Xilografía Popular',
                      metric: 'Brigada Paulina Aguirre',
                      desc: 'Muralismo callejero, grabado en linóleo y xilografía para defensa de derechos humanos y memoria histórica.'
                    }
                  ].map((c, idx) => (
                    <div key={idx} className="p-3 bg-[#19120d] border-2 border-black rounded-lg shadow-[3px_3px_0px_#000] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-black text-xs text-orange-300">{c.title}</span>
                        <span className="font-mono text-[9px] px-1.5 py-0.2 bg-orange-500/20 text-orange-200 border border-orange-500/30">
                          {c.metric}
                        </span>
                      </div>
                      <p className="text-[11px] font-sans text-neutral-300 leading-relaxed">{c.desc}</p>
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
                    { name: 'Syscal Pro (Iris Instruments)', role: 'Resistivímetro multielectrodo para tomografía eléctrica profunda (ERT).' },
                    { name: 'LI-COR LI-7500 / LI-7700', role: 'Analizadores de gas infrarrojo para torres micrometeorológicas de CO2 y CH4.' },
                    { name: 'Sondas CTD & Piezómetros', role: 'Monitoreo de conductividad, temperatura y nivel freático en pozos.' },
                    { name: 'Barrenos Edelman & Muestreo', role: 'Extracción de testigos de suelo intactos para análisis de densidad aparente.' },
                    { name: 'Cámaras de Flujo Dinámicas', role: 'Medición in-situ de respiración del suelo y emisiones biogénicas.' },
                    { name: 'Drones & Sensores Multiespectrales', role: 'Fotogrametría aérea y cálculo de índices de vigor vegetal (NDVI).' }
                  ].map((eq, idx) => (
                    <div key={idx} className="p-3 bg-[#0d1811] border-2 border-black rounded-lg space-y-1">
                      <div className="font-mono font-bold text-xs text-green-300">{eq.name}</div>
                      <p className="text-[10px] font-sans text-neutral-400">{eq.role}</p>
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
                      <span className="font-mono font-black text-sm text-white">Español</span>
                      <span className="font-mono text-[9px] bg-green-500/20 text-green-300 px-1.5 border border-green-500/40">NATIVO</span>
                    </div>
                    <p className="text-[10px] text-neutral-400">Oratoria pública, vocería parlamentaria y redacción editorial.</p>
                  </div>

                  <div className="p-3 bg-black/60 border-2 border-black rounded-lg space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-black text-sm text-white">English</span>
                      <span className="font-mono text-[9px] bg-green-500/20 text-green-300 px-1.5 border border-green-500/40">C1 / FLUENT</span>
                    </div>
                    <p className="text-[10px] text-neutral-400">Ponencias en cumbres internacionales (Oslo, Bonn, Davos) y redacción científica.</p>
                  </div>

                  <div className="p-3 bg-black/60 border-2 border-black rounded-lg space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-black text-sm text-white">Deutsch</span>
                      <span className="font-mono text-[9px] bg-amber-500/20 text-amber-300 px-1.5 border border-amber-500/40">B1 / B2</span>
                    </div>
                    <p className="text-[10px] text-neutral-400">Estudios de M.Sc. en CAU Kiel, comunicación técnica y vida académica en Alemania.</p>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* ============================================================== */}
        {/* 4. MODAL FOOTER                                                */}
        {/* ============================================================== */}
        <div className="px-4 sm:px-6 py-2.5 bg-black border-t-2 border-white/15 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-neutral-400 shrink-0">
          <div className="flex items-center space-x-2">
            <span className="bg-[#06b6d4] text-black font-black px-1.5 py-0.2">SKILLS-DB</span>
            <span>TOPOCATCHMENT HYDROGEOPHYSICS & STRATEGIC COMMS</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-white hover:bg-cyan-400 text-black font-bold uppercase transition-all cursor-pointer"
          >
            {currentLang === 'es' ? 'CERRAR FICHA' : 'CLOSE SPEC SHEET'}
          </button>
        </div>

      </div>
    </div>
  );
};
