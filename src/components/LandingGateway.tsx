import React from 'react';
import { 
  Globe2, 
  Briefcase, 
  ArrowRight, 
  Download, 
  Terminal, 
  Code, 
  ExternalLink, 
  ChevronRight,
  Layers,
  Sparkles,
  FileText,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';
import { TopocatchmentLogo } from './TopocatchmentLogo';

interface LandingGatewayProps {
  currentLang: Language;
  onToggleLanguage: () => void;
  onSelectScienceExecutive: () => void;
  onSelectCommsExecutive: () => void;
  onSelectImmersive: () => void;
  onSelectPunkMenu: () => void;
  onOpenHireMe: () => void;
  onOpenSkills: () => void;
}

export const LandingGateway: React.FC<LandingGatewayProps> = ({
  currentLang,
  onToggleLanguage,
  onSelectScienceExecutive,
  onSelectCommsExecutive,
  onSelectImmersive,
  onSelectPunkMenu,
  onOpenHireMe,
  onOpenSkills
}) => {
  return (
    <div className="relative min-h-screen bg-[#07090e] text-white flex flex-col justify-between selection:bg-[#facc15] selection:text-black overflow-x-hidden">
      
      {/* Background Topographic Texture & Subsurface Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-[700px] h-[450px] bg-emerald-500/10 blur-[170px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[650px] h-[500px] bg-amber-500/10 blur-[180px] rounded-full" />
        {/* Subtle coordinate grid hairline */}
        <div 
          className="absolute inset-0 opacity-[0.04] bg-repeat"
          style={{ 
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, 
            backgroundSize: '48px 48px' 
          }}
        />
      </div>

      {/* 1. TOP HEADER NAVIGATION */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-5 pb-3.5 flex items-center justify-between border-b border-white/10">
        
        {/* Identity & Topocatchment Logo */}
        <div className="flex items-center space-x-3.5">
          {/* Official Topocatchment Brand Symbol */}
          <div className="group relative cursor-pointer" title="Topocatchment Lab Emblem">
            <TopocatchmentLogo 
              variant="badge" 
              className="w-11 h-11 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105" 
            />
          </div>

          {/* Profile photo avatar */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-neutral-900 border border-neutral-700 overflow-hidden shrink-0 shadow-md">
            <img 
              src={resolveAsset('/profile.jpg')} 
              alt="Daniel Santander Urrutia" 
              className="w-full h-full object-cover object-top filter contrast-110"
            />
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-mono font-bold text-sm sm:text-base text-white uppercase tracking-tight">
                Daniel Santander Urrutia
              </h1>
              <span className="hidden sm:inline bg-emerald-500/15 text-emerald-400 font-mono text-[9px] px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                ● OPEN TO ROLES (EU & LATAM)
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] font-mono text-neutral-400 flex items-center space-x-1.5">
              <span>Catchment Hydrogeophysics</span>
              <span className="text-neutral-600">•</span>
              <span>European Dual M.Sc.</span>
              <span className="text-neutral-600">•</span>
              <span className="text-amber-400">Strategic Media</span>
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          {/* Hire Me CTA Button */}
          <button
            onClick={onOpenHireMe}
            className="px-3 sm:px-4 py-1.5 bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs uppercase tracking-wider rounded-lg border border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all flex items-center space-x-1.5 cursor-pointer"
          >
            <Briefcase className="w-3.5 h-3.5 text-black" />
            <span>{currentLang === 'es' ? 'CONTRATAR' : 'HIRE ME'}</span>
          </button>

          {/* Technical Skills Button */}
          <button
            onClick={onOpenSkills}
            className="hidden md:flex px-3 py-1.5 bg-white/10 hover:bg-white hover:text-black text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg border border-white/20 active:scale-95 transition-all items-center space-x-1.5 cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? 'FICHA TÉCNICA' : 'TECH SPECS'}</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={onToggleLanguage}
            className="px-2.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg border border-neutral-700 active:scale-95 transition-all flex items-center space-x-1 cursor-pointer"
            title="Switch Language // Cambiar idioma"
          >
            <Globe2 className="w-3.5 h-3.5 text-amber-400" />
            <span>{currentLang === 'es' ? 'ES' : 'EN'}</span>
          </button>
        </div>
      </header>

      {/* 2. HERO STATEMENT & CONCEPTUAL GROUNDING */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 py-7 sm:py-12 flex flex-col items-center justify-center text-center">
        
        {/* Top Concept Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-neutral-900/90 border border-neutral-700 text-neutral-300 font-mono text-[11px] mb-4 shadow-sm backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="tracking-wide">
            {currentLang === 'es'
              ? 'TOPOCATCHMENT // INVESTIGACIÓN DE CAMPO Y COMUNICACIONES DE IMPACTO'
              : 'TOPOCATCHMENT // FIELD RESEARCH DOSSIER & STRATEGIC MEDIA'}
          </span>
        </div>

        {/* Authoritative Main Headline */}
        <h2 className="font-serif font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-4xl">
          {currentLang === 'es' ? (
            <>
              Geofísica de Cuencas, Ciencia de Sistemas Terrestres y Estrategia de Medios
            </>
          ) : (
            <>
              Catchment Hydrogeophysics, Earth Systems & Strategic Media
            </>
          )}
        </h2>

        {/* Narrative Subtitle */}
        <p className="mt-4 text-xs sm:text-base text-neutral-300 font-sans max-w-3xl leading-relaxed">
          {currentLang === 'es'
            ? 'Investigación biofísica de cuencas en humedales europeos y territorio chileno, complementada con dirección de campañas públicas masivas (+700k audiencia), vocería en el Congreso Nacional y periodismo de investigación.'
            : 'Subsurface hydrological research across European coastal wetlands & Latin American watersheds, integrated with mass public advocacy leadership (+700k audience), national parliamentary testimonies, and investigative journalism.'}
        </p>

        {/* Technical Discipline Pillars */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs font-mono text-neutral-400">
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
            🌊 Catchment Hydrology & ERT
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
            🇩🇪 CAU Kiel & 🇵🇱 AMU Poznań (Dual M.Sc.)
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
            📢 +700k Mass Media Reach
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
            🏛 National Congress Testimony
          </span>
        </div>

        {/* 3. FOUR CORE ENTRANCE PATHWAYS (CARDS) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-11 text-left">
          
          {/* CARD 01: VISTA EJECUTIVA CIENCIA & DATOS */}
          <div 
            onClick={onSelectScienceExecutive}
            className="group relative p-5 sm:p-6 rounded-2xl bg-[#0c1017] hover:bg-[#101622] border border-neutral-800 hover:border-emerald-500/60 shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="bg-emerald-500/15 text-emerald-400 font-mono font-bold text-[10px] px-2.5 py-0.5 rounded uppercase border border-emerald-500/30">
                  {currentLang === 'es' ? 'EXPEDIENTE 01 // CIENCIA' : 'DOSSIER 01 // SCIENCE'}
                </span>
                <span className="text-xl">🔬</span>
              </div>

              <h3 className="font-mono font-bold text-lg sm:text-xl text-white tracking-tight mt-3 group-hover:text-emerald-300 transition-colors">
                {currentLang === 'es' ? 'Geofísica de Cuencas & Modelación' : 'Catchment Hydrogeophysics & Modeling'}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2.5 leading-relaxed">
                {currentLang === 'es'
                  ? 'Expediente científico en formato paper: geoelectro-tomografía (ERT), balance hidrológico en turberas (Wallener Au), riesgo de inundación costera en Lauwersmeer (Países Bajos) y series temporales en Python/QGIS.'
                  : 'Peer-reviewed academic research dossier: Electrical Resistivity Tomography (ERT), peatland water table dynamics (Wallener Au), coastal flood risk at Lauwersmeer (Netherlands) & Python/QGIS pipelines.'}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px] text-emerald-300/90">
                <span className="px-2 py-0.5 bg-emerald-950/60 rounded border border-emerald-800/40">CAU Kiel & Poznań</span>
                <span className="px-2 py-0.5 bg-emerald-950/60 rounded border border-emerald-800/40">Subsurface ERT</span>
                <span className="px-2 py-0.5 bg-emerald-950/60 rounded border border-emerald-800/40">Python & QGIS</span>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-emerald-400 font-mono font-bold text-xs group-hover:translate-x-1 transition-transform">
              <span>{currentLang === 'es' ? 'Abrir Expediente Científico' : 'Access Science Dossier'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* CARD 02: VISTA EJECUTIVA COMUNICACIONES & MEDIOS */}
          <div 
            onClick={onSelectCommsExecutive}
            className="group relative p-5 sm:p-6 rounded-2xl bg-[#111218] hover:bg-[#181924] border border-neutral-800 hover:border-amber-500/60 shadow-lg hover:shadow-amber-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="bg-amber-500/15 text-amber-400 font-mono font-bold text-[10px] px-2.5 py-0.5 rounded uppercase border border-amber-500/30">
                  {currentLang === 'es' ? 'EXPEDIENTE 02 // MEDIOS' : 'DOSSIER 02 // MEDIA'}
                </span>
                <span className="text-xl">📢</span>
              </div>

              <h3 className="font-mono font-bold text-lg sm:text-xl text-white tracking-tight mt-3 group-hover:text-amber-300 transition-colors">
                {currentLang === 'es' ? 'Comunicaciones & Prensa de Investigación' : 'Strategic Communications & Public Media'}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2.5 leading-relaxed">
                {currentLang === 'es'
                  ? 'Expediente editorial y de incidencia pública: dirección de campañas nacionales (+700k alcance), vocería técnica en la Cámara de Diputadas y Diputados, reportajes de investigación sobre el modelo forestal y narrativa transmedia.'
                  : 'Public impact and editorial portfolio: national campaign directorship (+700k reach), legislative expert testimonies in the Chilean Congress, investigative reporting on monoculture impacts, and transmedia publications.'}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px] text-amber-300/90">
                <span className="px-2 py-0.5 bg-amber-950/60 rounded border border-amber-800/40">+700k Audience</span>
                <span className="px-2 py-0.5 bg-amber-950/60 rounded border border-amber-800/40">National Congress</span>
                <span className="px-2 py-0.5 bg-amber-950/60 rounded border border-amber-800/40">Investigative Press</span>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-amber-400 font-mono font-bold text-xs group-hover:translate-x-1 transition-transform">
              <span>{currentLang === 'es' ? 'Abrir Expediente de Comunicaciones' : 'Access Media Dossier'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* CARD 03: VISTA INMERSIVA EL PLANETA 3D */}
          <div 
            onClick={onSelectImmersive}
            className="group relative p-5 sm:p-6 rounded-2xl bg-[#090b0f] hover:bg-[#0e1118] border border-neutral-800 hover:border-[#facc15]/70 shadow-lg hover:shadow-[#facc15]/10 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="bg-[#facc15]/15 text-[#facc15] font-mono font-bold text-[10px] px-2.5 py-0.5 rounded uppercase border border-[#facc15]/30">
                  {currentLang === 'es' ? 'GLOBO TÁCTICO // 3D' : 'TACTICAL GLOBE // 3D'}
                </span>
                <span className="text-xl">🌍</span>
              </div>

              <h3 className="font-mono font-bold text-lg sm:text-xl text-white tracking-tight mt-3 group-hover:text-yellow-300 transition-colors">
                {currentLang === 'es' ? 'El Planeta: Visor Táctico 3D' : 'The Planet: 3D Tactical Globe'}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2.5 leading-relaxed">
                {currentLang === 'es'
                  ? 'Globo terráqueo tridimensional interactivo con relieve, atmósfera y arcos de trayectoria conectando 8 países de expedición, polaroids de terreno, bitácora de campo y tablero de misiones.'
                  : 'Interactive 3D WebGL Earth with topography, atmospheric layers, and trajectory arcs connecting 8 expedition countries, field polaroids, mission notes, and tactical briefing boards.'}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px] text-yellow-300/90">
                <span className="px-2 py-0.5 bg-black/60 rounded border border-yellow-500/30">Three.js WebGL</span>
                <span className="px-2 py-0.5 bg-black/60 rounded border border-yellow-500/30">8 Expedition Nations</span>
                <span className="px-2 py-0.5 bg-black/60 rounded border border-yellow-500/30">Guided Tour</span>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[#facc15] font-mono font-bold text-xs group-hover:translate-x-1 transition-transform">
              <span>{currentLang === 'es' ? 'Lanzar Visor 3D El Planeta' : 'Launch 3D Planet Globe'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* CARD 04: DESCARGA DIRECTA DE CV & REPOSITORIOS GITHUB */}
          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="bg-white/10 text-neutral-300 font-mono font-bold text-[10px] px-2.5 py-0.5 rounded uppercase border border-white/20">
                  {currentLang === 'es' ? 'ACREDITACIÓN Y CÓDIGO' : 'CREDENTIALS & CODE'}
                </span>
                <span className="text-xl">📄</span>
              </div>

              <h3 className="font-mono font-bold text-lg sm:text-xl text-white tracking-tight mt-3">
                {currentLang === 'es' ? 'CV Oficial & Repositorios' : 'Official CV & Repositories'}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2.5 leading-relaxed">
                {currentLang === 'es'
                  ? 'Descarga directa del Curriculum Vitae en PDF para comités evaluadores, o explora los repositorios verificados en GitHub (monitoreo de turberas, gemelos digitales y redes comunitarias).'
                  : 'Direct PDF Curriculum Vitae download for evaluation boards, or explore verified open-source repositories on GitHub (wetland monitoring, digital twins, and community data platforms).'}
              </p>

              {/* Action Buttons Inside Card */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={resolveAsset('/Daniel_Santander_CV.pdf')}
                  download="Daniel_Santander_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs uppercase rounded-lg border border-black shadow-sm flex items-center justify-center space-x-1.5 transition-all active:scale-95 text-center"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{currentLang === 'es' ? 'Descargar CV (PDF)' : 'Download CV (PDF)'}</span>
                </a>

                <a
                  href="https://github.com/danisantanderurrutia-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-white font-mono font-bold text-xs uppercase rounded-lg border border-neutral-700 flex items-center justify-center space-x-1.5 transition-all active:scale-95 text-center"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>{currentLang === 'es' ? 'PDF Oficial Actualizado 2026' : 'Official PDF Track Record'}</span>
              <button
                onClick={onOpenSkills}
                className="text-amber-400 hover:underline flex items-center space-x-1"
              >
                <span>{currentLang === 'es' ? 'Ver Matriz de Skills' : 'View Skills Matrix'}</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Alternative Pathway: Punk Fanzine Arcade Board */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
          <button
            onClick={onSelectPunkMenu}
            className="text-neutral-400 hover:text-amber-400 transition-colors flex items-center space-x-1.5 underline decoration-dotted"
          >
            <span>⚡ {currentLang === 'es' ? '¿Prefieres el Menú Fanzine Eco-Noir Arcade? Entrar al tablero de misiones' : 'Prefer the Eco-Noir Punk Arcade / Fanzine Mission Board? Enter here'}</span>
          </button>
        </div>

      </main>

      {/* 4. FOOTER CREDENTIALS & ATS COMPLIANCE */}
      <footer className="relative z-10 w-full px-4 sm:px-8 py-4 bg-black/95 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[10px] sm:text-xs font-mono text-neutral-400">
        <div className="flex items-center space-x-2">
          <span>© {new Date().getFullYear()} Daniel Santander Urrutia</span>
          <span>•</span>
          <span className="text-emerald-400 font-bold">🟢 {currentLang === 'es' ? 'Disponible para Contratación' : 'Open for Roles & Consulting'}</span>
        </div>

        <div className="flex items-center space-x-3">
          <button onClick={onOpenSkills} className="hover:text-white transition-colors">
            {currentLang === 'es' ? '[ MATRIZ DE SKILLS ]' : '[ SKILLS MATRIX ]'}
          </button>
          <span>•</span>
          <button onClick={onOpenHireMe} className="text-[#facc15] hover:text-white transition-colors font-bold">
            {currentLang === 'es' ? '[ CONTACTAR DIRECTO ]' : '[ HIRE ME DIRECT ]'}
          </button>
        </div>
      </footer>

    </div>
  );
};
