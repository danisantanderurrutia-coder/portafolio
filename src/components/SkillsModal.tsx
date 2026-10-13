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
  BookOpen,
  Terminal,
  Radio,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialTab?: 'science' | 'comms' | 'credentials';
}

export const SkillsModal: React.FC<SkillsModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialTab = 'science'
}) => {
  const [activeTab, setActiveTab] = useState<'science' | 'comms' | 'credentials'>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[#0c0f14] border-3 border-black rounded-2xl shadow-[10px_10px_0px_#facc15] overflow-hidden flex flex-col max-h-[92vh] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-3.5 bg-black border-b-2 border-neutral-800 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 rounded-lg bg-[#facc15] text-black">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-mono font-black text-xs sm:text-sm uppercase tracking-wider text-white">
                {currentLang === 'es' ? 'FICHA TÉCNICA // SKILLS, HERRAMIENTAS & METODOLOGÍAS' : 'TECHNICAL SPECIFICATIONS // SKILLS & TOOLS'}
              </h3>
              <p className="font-mono text-[10px] text-neutral-400">
                {currentLang === 'es' ? 'MATRIZ DE COMPETENCIAS PROFESIONALES COMPROBABLES' : 'VERIFIED PROFESSIONAL CAPABILITY MATRIX'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/10 hover:bg-red-600 hover:text-white text-neutral-400 transition-all border border-white/20 active:scale-90"
            title="Cerrar // Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons (Slanted Stencil Tape / Modern Tabs) */}
        <div className="px-5 pt-3 pb-1 bg-black/50 border-b border-neutral-800 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          <button
            onClick={() => setActiveTab('science')}
            className={`px-3 py-1.5 font-mono font-black text-xs uppercase tracking-wider border-2 border-black transition-all rounded-md flex items-center space-x-1.5 ${
              activeTab === 'science'
                ? 'bg-blue-600 text-white shadow-[2px_2px_0px_#fff]'
                : 'bg-white/10 text-neutral-300 hover:bg-white/20'
            }`}
          >
            <span>🔬</span>
            <span>{currentLang === 'es' ? 'CIENCIA & DATOS' : 'SCIENCE & DATA'}</span>
          </button>

          <button
            onClick={() => setActiveTab('comms')}
            className={`px-3 py-1.5 font-mono font-black text-xs uppercase tracking-wider border-2 border-black transition-all rounded-md flex items-center space-x-1.5 ${
              activeTab === 'comms'
                ? 'bg-orange-600 text-white shadow-[2px_2px_0px_#fff]'
                : 'bg-white/10 text-neutral-300 hover:bg-white/20'
            }`}
          >
            <span>📢</span>
            <span>{currentLang === 'es' ? 'COMUNICACIONES & ESTRATEGIA' : 'COMMS & STRATEGY'}</span>
          </button>

          <button
            onClick={() => setActiveTab('credentials')}
            className={`px-3 py-1.5 font-mono font-black text-xs uppercase tracking-wider border-2 border-black transition-all rounded-md flex items-center space-x-1.5 ${
              activeTab === 'credentials'
                ? 'bg-emerald-600 text-white shadow-[2px_2px_0px_#fff]'
                : 'bg-white/10 text-neutral-300 hover:bg-white/20'
            }`}
          >
            <span>🌐</span>
            <span>{currentLang === 'es' ? 'IDIOMAS & GRADOS' : 'LANGUAGES & DEGREES'}</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">

          {/* ============================================================== */}
          {/* TAB 1: SCIENCE & DATA                                          */}
          {/* ============================================================== */}
          {activeTab === 'science' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Block 1: Programming & Tools */}
              <div className="space-y-2.5">
                <h4 className="font-mono font-black text-xs uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                  <Code className="w-4 h-4" />
                  <span>{currentLang === 'es' ? 'LENGUAJES DE PROGRAMACIÓN & SOFTWARE CIENTÍFICO' : 'LANGUAGES & SCIENTIFIC SOFTWARE'}</span>
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { name: 'Python', level: 'Avanzado', desc: 'GeoPandas, NumPy, SciPy, Matplotlib, GDAL, Rasterio' },
                    { name: 'R Language', level: 'Avanzado', desc: 'Análisis espacial, series de tiempo, ggplot2, sf' },
                    { name: 'QGIS / ArcGIS Pro', level: 'Experto', desc: 'Modelación geoespacial, DEMs, raster, shapefiles' },
                    { name: 'Google Earth Engine', level: 'Competente', desc: 'Procesamiento satelital Sentinel-2 & Landsat' },
                    { name: 'Git & GitHub', level: 'Avanzado', desc: 'Control de versiones, CI/CD, trabajo colaborativo' },
                    { name: 'Three.js / WebGL', level: 'Competente', desc: 'Visualización de datos 3D, mapas esféricos' },
                    { name: 'Delft3D / Hydro', level: 'Especializado', desc: 'Dinámica costera, marejadas y transporte estuarino' },
                    { name: 'SQL & Bases Espaciales', level: 'Competente', desc: 'PostGIS, consultas relacionales y filtrado' },
                    { name: 'LaTeX / Typst', level: 'Experto', desc: 'Composición de artículos y reportes científicos' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-xs text-white">{item.name}</span>
                        <span className="font-mono text-[9px] px-1 py-0.2 bg-blue-500/20 text-blue-300 rounded border border-blue-500/30">
                          {item.level}
                        </span>
                      </div>
                      <p className="text-[10px] text-neutral-400 mt-1 font-sans leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Block 2: Methodologies */}
              <div className="space-y-2.5">
                <h4 className="font-mono font-black text-xs uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                  <Database className="w-4 h-4" />
                  <span>{currentLang === 'es' ? 'METODOLOGÍAS BIOFÍSICAS & MODELACIÓN' : 'BIOPHYSICAL METHODOLOGIES & MODELING'}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    {
                      title: currentLang === 'es' ? 'Modelación Hidrogeofísica de Cuencas' : 'Catchment Hydrogeophysical Modeling',
                      detail: currentLang === 'es' ? 'Flujo de aguas subterráneas, balances hídricos integrados y recarga en cuencas de Chile y Europa.' : 'Groundwater dynamics, integrated water balance & recharge models in Chile & EU.'
                    },
                    {
                      title: currentLang === 'es' ? 'Evaluación de Riesgo Climático Costero' : 'Coastal Climate Risk & SLR Assessments',
                      detail: currentLang === 'es' ? 'Modelación de marejadas de tempestad, ascenso del nivel del mar y resiliencia en Lauwersmeer (Países Bajos).' : 'Storm surge simulations, sea level rise modeling & resilience at Lauwersmeer (Netherlands).'
                    },
                    {
                      title: currentLang === 'es' ? 'Gemelos Digitales & IoT Agrícola (AgriTwin)' : 'Digital Twins & Agricultural IoT (AgriTwin)',
                      detail: currentLang === 'es' ? 'Diseño de sensores de suelo, microclima y mapas multispectrales para eficiencia hídrica en viñas del Maule.' : 'Soil telemetry, microclimates & multispectral satellite feeds for precision irrigation in Chile.'
                    },
                    {
                      title: currentLang === 'es' ? 'Bioacústica & Ecosistemas Nativos' : 'Bioacoustics & Native Forest Ecology',
                      detail: currentLang === 'es' ? 'Monitoreo acústico de biodiversidad, procesamiento de señales y modelos de restauración ecológica (ReWild).' : 'Acoustic biodiversity monitoring, signal processing & restoration modeling (ReWild).'
                    }
                  ].map((m, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-blue-950/20 border border-blue-800/40">
                      <div className="font-mono font-bold text-xs text-blue-300">
                        {m.title}
                      </div>
                      <p className="text-[11px] text-neutral-300 font-sans mt-1 leading-relaxed">
                        {m.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 2: COMMS & STRATEGY                                        */}
          {/* ============================================================== */}
          {activeTab === 'comms' && (
            <div className="space-y-6 animate-fadeIn">
              
              <div className="space-y-2.5">
                <h4 className="font-mono font-black text-xs uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                  <Radio className="w-4 h-4" />
                  <span>{currentLang === 'es' ? 'HABILIDADES EN COMUNICACIÓN ESTRATÉGICA & MEDIOS' : 'STRATEGIC COMMUNICATIONS & MEDIA SKILLS'}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    {
                      title: currentLang === 'es' ? 'Campañas Masivas de Alto Impacto' : 'High-Impact Mass Campaigns',
                      metric: '+700K Audiencia',
                      desc: currentLang === 'es' ? 'Diseño y dirección de la campaña nacional Apruebo Rural y Primera Línea Prensa con cobertura viral orgánica.' : 'Direction of national campaigns (Apruebo Rural, Primera Línea Prensa) with massive organic reach.'
                    },
                    {
                      title: currentLang === 'es' ? 'Vocería Parlamentaria & Incidencia' : 'Parliamentary Advocacy & Spokesperson',
                      metric: 'Cámara de Diputadas/os',
                      desc: currentLang === 'es' ? 'Alegatos técnicos ante comisiones del Congreso, fiscalización de megaincendios y articulación comunitaria.' : 'Official expert testimonies before congressional committees, investigating wildfire spread.'
                    },
                    {
                      title: currentLang === 'es' ? 'Periodismo de Investigación & Datos' : 'Investigative & Data Journalism',
                      metric: 'Caso EPN / Biomasa',
                      desc: currentLang === 'es' ? 'Investigaciones complejas que revelaron subsidios ilícitos y catalizaron reformas regulatorias nacionales.' : 'In-depth reporting exposing irregular subsidies that triggered nationwide regulatory overhauls.'
                    },
                    {
                      title: currentLang === 'es' ? 'Narrativa Transmedia & Podcasting' : 'Transmedia Outreach & Podcasting',
                      metric: 'Podcast & Multimedia',
                      desc: currentLang === 'es' ? 'Producción de plataformas de audio, guiones narrativos, cartografía participativa y divulgación científica.' : 'Audio showrunner, participatory cartography, narrative scripting & public science outreach.'
                    },
                    {
                      title: currentLang === 'es' ? 'Artivismo & Cultura Popular' : 'Artivism & Grassroots Culture',
                      metric: 'Brigada Paulina Aguirre',
                      desc: currentLang === 'es' ? 'Muralismo político, diseño de fanzines, estética cómic punk y proyectos musicales de rap social.' : 'Public street muralism, fanzine editorial design, punk comic aesthetics & conscious hip-hop music.'
                    },
                    {
                      title: currentLang === 'es' ? 'Estrategia Digital, IA & Storytelling' : 'Digital Strategy, AI & Storytelling',
                      metric: 'Los Manejadores',
                      desc: currentLang === 'es' ? 'Arquitectura de presencia digital, gestión de creadores virtuales de IA y consultoría de comunicación estratégica.' : 'Digital presence architecture, virtual AI talent management & strategic brand narratives.'
                    }
                  ].map((c, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-orange-950/20 border border-orange-800/40">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-xs text-orange-300">{c.title}</span>
                        <span className="font-mono text-[9px] px-1.5 py-0.2 bg-orange-500/20 text-orange-200 rounded border border-orange-500/30">
                          {c.metric}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-300 font-sans mt-1 leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 3: CREDENTIALS & LANGUAGES                                */}
          {/* ============================================================== */}
          {activeTab === 'credentials' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Languages */}
              <div className="space-y-2.5">
                <h4 className="font-mono font-black text-xs uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Globe2 className="w-4 h-4" />
                  <span>{currentLang === 'es' ? 'IDIOMAS DE TRABAJO' : 'WORKING LANGUAGES'}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-black text-sm text-white">Español</span>
                      <span className="font-mono text-[10px] text-emerald-400 font-bold">Nativo</span>
                    </div>
                    <p className="text-[10px] text-neutral-400 mt-1">Lengua materna, oratoria en prensa, redacción editorial y legislativa.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-black text-sm text-white">English</span>
                      <span className="font-mono text-[10px] text-emerald-400 font-bold">C1 / Fluido</span>
                    </div>
                    <p className="text-[10px] text-neutral-400 mt-1">Ponencias en cumbres (Oslo, Bonn, Davos), redacción de papers y posgrado.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-black text-sm text-white">Deutsch</span>
                      <span className="font-mono text-[10px] text-amber-400 font-bold">B1 / B2</span>
                    </div>
                    <p className="text-[10px] text-neutral-400 mt-1">Estudios de M.Sc. en Kiel (Alemania), comunicación técnica y vida académica.</p>
                  </div>
                </div>
              </div>

              {/* Degrees & Formations */}
              <div className="space-y-2.5">
                <h4 className="font-mono font-black text-xs uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>{currentLang === 'es' ? 'GRADOS ACADÉMICOS & FORMACIÓN' : 'ACADEMIC DEGREES & EDUCATION'}</span>
                </h4>

                <div className="space-y-2">
                  {[
                    {
                      degree: currentLang === 'es' ? 'Doble M.Sc. en Gestión Ambiental & Manejo Integrado de Cuencas' : 'Double European M.Sc. in Environmental Management & Integrated Catchment Management',
                      institution: 'Christian-Albrechts-Universität zu Kiel (Alemania) & Adam Mickiewicz University in Poznań (Polonia)',
                      years: '2018 - 2021',
                      badge: 'Graduación con Honores'
                    },
                    {
                      degree: currentLang === 'es' ? 'Ingeniería Civil en Geofísica & Licenciatura en Ciencias de la Tierra' : 'Engineering Geophysics & B.Sc. in Earth Sciences',
                      institution: 'Universidad de Chile (Facultad de Ciencias Físicas y Matemáticas - FCFM / Beauchef)',
                      years: '2010 - 2017',
                      badge: 'U. de Chile'
                    }
                  ].map((deg, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="font-mono font-bold text-xs sm:text-sm text-white">{deg.degree}</div>
                        <div className="text-[11px] text-neutral-300 font-sans mt-0.5">{deg.institution}</div>
                      </div>
                      <div className="flex items-center space-x-2 shrink-0">
                        <span className="font-mono text-[10px] text-neutral-400">{deg.years}</span>
                        <span className="font-mono text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                          {deg.badge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer with Direct CV & Hire Me Links */}
        <div className="px-5 py-3 bg-black/90 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <span className="text-neutral-400">
            {currentLang === 'es' ? 'COMPATIBLE CON FILTROS ATS Y PERFILES CORPORATIVOS' : 'ATS & RECRUITER COMPATIBLE MATRIX'}
          </span>
          <a
            href="https://github.com/danisantanderurrutia-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-white flex items-center space-x-1"
          >
            <span>github.com/danisantanderurrutia-coder</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
