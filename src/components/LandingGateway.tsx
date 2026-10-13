import React, { useState } from 'react';
import { 
  Globe2, 
  FileText, 
  Briefcase, 
  Sparkles, 
  ArrowRight, 
  Download, 
  Terminal, 
  Code, 
  ExternalLink, 
  Compass, 
  ChevronRight,
  Radio,
  CheckCircle2
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';

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
    <div className="relative min-h-screen bg-[#090b10] text-white flex flex-col justify-between selection:bg-amber-400 selection:text-black overflow-x-hidden">
      
      {/* Background Ambient Depth */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[450px] bg-amber-500/10 blur-[160px] rounded-full" />
        <div 
          className="absolute inset-0 opacity-[0.03] bg-repeat"
          style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '24px 24px' }}
        />
      </div>

      {/* 1. TOP HEADER NAVIGATION */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-5 pb-3 flex items-center justify-between border-b border-white/10">
        
        {/* Profile Identity Badge */}
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-black p-0.5 border-2 border-[#facc15] shadow-[3px_3px_0px_#000] overflow-hidden -rotate-2 shrink-0">
            <img 
              src={resolveAsset('/profile.jpg')} 
              alt="Daniel Santander" 
              className="w-full h-full object-cover object-top filter contrast-110"
            />
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-mono font-black text-sm sm:text-base text-white uppercase tracking-tight">
                Daniel Santander Urrutia
              </h1>
              <span className="hidden sm:inline bg-emerald-500/20 text-emerald-400 font-mono text-[9px] px-2 py-0.5 rounded border border-emerald-500/40 font-bold">
                ● OPEN TO WORK
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] font-mono text-neutral-400">
              {currentLang === 'es'
                ? 'Geofísica (U. de Chile) • Dual M.Sc. (CAU Kiel & AMU Poznań)'
                : 'Geophysics (Univ. of Chile) • European Dual M.Sc. (Kiel & Poznań)'}
            </p>
          </div>
        </div>

        {/* Header Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          {/* Hire Me CTA Button */}
          <button
            onClick={onOpenHireMe}
            className="px-3 sm:px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-black text-xs uppercase tracking-wider rounded-lg border-2 border-black shadow-[2px_2px_0px_#facc15] active:scale-95 transition-all flex items-center space-x-1.5 cursor-pointer animate-pulse"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? 'CONTRATAR' : 'HIRE ME'}</span>
          </button>

          {/* Technical Skills Button */}
          <button
            onClick={onOpenSkills}
            className="hidden md:flex px-3 py-1.5 bg-white/10 hover:bg-white hover:text-black text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg border border-white/20 active:scale-95 transition-all items-center space-x-1.5 cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? 'FICHA TÉCNICA' : 'TECH SKILLS'}</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={onToggleLanguage}
            className="px-2.5 py-1.5 bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs uppercase tracking-wider rounded-lg border-2 border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all flex items-center space-x-1 cursor-pointer"
            title="Cambiar idioma // Switch Language"
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? 'ES' : 'EN'}</span>
          </button>
        </div>
      </header>

      {/* 2. HERO STATEMENT */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-10 flex flex-col items-center justify-center text-center">
        
        {/* Availability Pill */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] sm:text-xs mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>
            {currentLang === 'es' 
              ? 'Disponible para Contratos, Consultorías y Liderazgo Técnico (Europa & LatAm)' 
              : 'Available for Roles, Technical Consulting & Leadership (EU & LatAm)'}
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="font-serif font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-4xl">
          {currentLang === 'es' ? (
            <>
              Uniendo la <span className="text-blue-400 italic font-serif">Ciencia Biofísica & Datos</span> con la{' '}
              <span className="text-amber-400 italic font-serif">Comunicación Estratégica</span> de Alto Impacto
            </>
          ) : (
            <>
              Bridging <span className="text-blue-400 italic font-serif">Biophysical Science & Earth Data</span> with High-Impact{' '}
              <span className="text-amber-400 italic font-serif">Strategic Communications</span>
            </>
          )}
        </h2>

        {/* Narrative Subtitle */}
        <p className="mt-3.5 text-xs sm:text-base text-neutral-300 font-sans max-w-2xl leading-relaxed">
          {currentLang === 'es'
            ? 'Bienvenido al portafolio profesional de Daniel Santander. Elige la vertiente que mejor se adapte a tu objetivo de contratación o explora el globo terráqueo interactivo.'
            : 'Welcome to the professional portfolio of Daniel Santander. Select the view tailored to your hiring criteria or explore the interactive 3D field mission globe.'}
        </p>

        {/* 3. FOUR CORE ENTRANCE PATHWAYS (CARDS) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10 text-left">
          
          {/* CARD 1: VISTA EJECUTIVA CIENCIA & DATOS */}
          <div 
            onClick={onSelectScienceExecutive}
            className="group relative p-5 sm:p-6 rounded-2xl bg-[#0c1220] hover:bg-[#0f172a] border-2 border-blue-500/40 hover:border-blue-400 shadow-[6px_6px_0px_#1e3a8a] transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="bg-blue-600 text-white font-mono font-black text-[10px] px-2.5 py-0.5 rounded uppercase border border-black shadow-[1px_1px_0px_#000]">
                  {currentLang === 'es' ? 'VISTA EJECUTIVA 01' : 'EXECUTIVE VIEW 01'}
                </span>
                <span className="text-2xl">🔬</span>
              </div>

              <h3 className="font-mono font-black text-lg sm:text-xl text-white uppercase tracking-tight mt-3 group-hover:text-blue-300 transition-colors">
                {currentLang === 'es' ? 'Ciencia & Modelación Ambiental' : 'Environmental Science & Modeling'}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2 leading-relaxed">
                {currentLang === 'es'
                  ? 'Dossier sobrio en formato paper: modelación hidrológica de cuencas, riesgo climático en Lauwersmeer (Países Bajos), series temporales en Python/R y sensores remotos.'
                  : 'Rigorous peer-reviewed paper dossier: catchment hydrology, coastal climate risk at Lauwersmeer (Netherlands), Python/R data pipelines & remote sensing.'}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px] text-blue-300">
                <span className="px-2 py-0.5 bg-blue-950/80 rounded border border-blue-800/60">CAU Kiel & Poznań</span>
                <span className="px-2 py-0.5 bg-blue-950/80 rounded border border-blue-800/60">Python / QGIS</span>
                <span className="px-2 py-0.5 bg-blue-950/80 rounded border border-blue-800/60">Catchment Hydro</span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-blue-900/40 flex items-center justify-between text-blue-400 font-mono font-bold text-xs group-hover:translate-x-1 transition-transform">
              <span>{currentLang === 'es' ? 'Ver Dossier Científico' : 'Open Science Dossier'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* CARD 2: VISTA EJECUTIVA COMUNICACIONES & MEDIOS */}
          <div 
            onClick={onSelectCommsExecutive}
            className="group relative p-5 sm:p-6 rounded-2xl bg-[#1c0f08] hover:bg-[#27130b] border-2 border-orange-500/40 hover:border-orange-400 shadow-[6px_6px_0px_#9a3412] transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="bg-orange-600 text-white font-mono font-black text-[10px] px-2.5 py-0.5 rounded uppercase border border-black shadow-[1px_1px_0px_#000]">
                  {currentLang === 'es' ? 'VISTA EJECUTIVA 02' : 'EXECUTIVE VIEW 02'}
                </span>
                <span className="text-2xl">📢</span>
              </div>

              <h3 className="font-mono font-black text-lg sm:text-xl text-white uppercase tracking-tight mt-3 group-hover:text-orange-300 transition-colors">
                {currentLang === 'es' ? 'Comunicaciones & Campañas' : 'Strategic Communications & Media'}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2 leading-relaxed">
                {currentLang === 'es'
                  ? 'Dossier de impacto público: dirección de campañas masivas (+700k audiencia), vocería en el Congreso Nacional, investigación periodística EPN y narrativa transmedia.'
                  : 'Public impact dossier: national mass campaign leadership (+700k reach), parliamentary testimonies, landmark investigative reporting & transmedia outreach.'}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px] text-orange-300">
                <span className="px-2 py-0.5 bg-orange-950/80 rounded border border-orange-800/60">+700K Audiencia</span>
                <span className="px-2 py-0.5 bg-orange-950/80 rounded border border-orange-800/60">Cámara de Diputadas/os</span>
                <span className="px-2 py-0.5 bg-orange-950/80 rounded border border-orange-800/60">Vocería Prensa</span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-orange-900/40 flex items-center justify-between text-orange-400 font-mono font-bold text-xs group-hover:translate-x-1 transition-transform">
              <span>{currentLang === 'es' ? 'Ver Dossier de Comunicaciones' : 'Open Comms Dossier'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* CARD 3: VISTA INMERSIVA EL PLANETA 3D */}
          <div 
            onClick={onSelectImmersive}
            className="group relative p-5 sm:p-6 rounded-2xl bg-[#090b0e] hover:bg-black border-2 border-[#facc15]/50 hover:border-[#facc15] shadow-[6px_6px_0px_#facc15] transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="bg-[#facc15] text-black font-mono font-black text-[10px] px-2.5 py-0.5 rounded uppercase border border-black shadow-[1px_1px_0px_#000]">
                  {currentLang === 'es' ? 'EXPERIENCIA INTERACTIVA 3D' : '3D INTERACTIVE EXPERIENCE'}
                </span>
                <span className="text-2xl">🌍</span>
              </div>

              <h3 className="font-mono font-black text-lg sm:text-xl text-white uppercase tracking-tight mt-3 group-hover:text-amber-300 transition-colors">
                {currentLang === 'es' ? 'El Planeta: Visor Táctico 3D' : 'The Planet: 3D Tactical Globe'}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2 leading-relaxed">
                {currentLang === 'es'
                  ? 'Globo 3D interactivo con relieve y nubes, uniendo 8 países en arcos de vuelo parabólicos, polaroids de expedición, fanzines de arte y tablero de misiones GTA Heist.'
                  : 'Interactive 3D Earth with relief and atmospheric clouds, flight trajectory arcs across 8 countries, expedition polaroids, art fanzines & GTA Heist mission board.'}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px] text-amber-300">
                <span className="px-2 py-0.5 bg-black/80 rounded border border-amber-500/40">Three.js WebGL</span>
                <span className="px-2 py-0.5 bg-black/80 rounded border border-amber-500/40">8 Países Conectados</span>
                <span className="px-2 py-0.5 bg-black/80 rounded border border-amber-500/40">Tour Guiado Automático</span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-neutral-800 flex items-center justify-between text-amber-400 font-mono font-bold text-xs group-hover:translate-x-1 transition-transform">
              <span>{currentLang === 'es' ? 'Lanzar Visor 3D El Planeta' : 'Launch 3D Planet Globe'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* CARD 4: DESCARGA DIRECTA DE CV & REPOSITORIO GITHUB */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border-2 border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="bg-emerald-600 text-white font-mono font-black text-[10px] px-2.5 py-0.5 rounded uppercase border border-black shadow-[1px_1px_0px_#000]">
                  {currentLang === 'es' ? 'ACCESOS RÁPIDOS' : 'QUICK ACCESS'}
                </span>
                <span className="text-2xl">📄</span>
              </div>

              <h3 className="font-mono font-black text-lg sm:text-xl text-white uppercase tracking-tight mt-3">
                {currentLang === 'es' ? 'CV Oficial & GitHub' : 'Official CV & GitHub'}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2 leading-relaxed">
                {currentLang === 'es'
                  ? 'Descarga directa del Currículum Vitae en PDF para comités evaluadores, o inspecciona repositorios y código científico en GitHub.'
                  : 'Direct one-click official CV download in PDF for evaluation boards, or inspect scientific code and repositories on GitHub.'}
              </p>

              {/* Action Buttons Inside Card */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={resolveAsset('/Daniel_Santander_CV.pdf')}
                  download="Daniel_Santander_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-black text-xs uppercase rounded-lg border border-black shadow-[2px_2px_0px_#000] flex items-center justify-center space-x-1.5 transition-all active:scale-95 text-center"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{currentLang === 'es' ? 'Descargar CV (PDF)' : 'Download CV (PDF)'}</span>
                </a>

                <a
                  href="https://github.com/danisantanderurrutia-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-purple-700 hover:bg-purple-600 text-white font-mono font-black text-xs uppercase rounded-lg border border-black shadow-[2px_2px_0px_#000] flex items-center justify-center space-x-1.5 transition-all active:scale-95 text-center"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>{currentLang === 'es' ? 'PDF Oficial Actualizado 2026' : 'Official PDF Updated 2026'}</span>
              <button
                onClick={onOpenSkills}
                className="text-amber-400 hover:underline flex items-center space-x-1"
              >
                <span>{currentLang === 'es' ? 'Ver Ficha de Skills' : 'View Skills Matrix'}</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Alternative Links (Menú Fanzine Punk / Contacto) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
          <button
            onClick={onSelectPunkMenu}
            className="text-neutral-400 hover:text-amber-400 transition-colors flex items-center space-x-1 underline decoration-dotted"
          >
            <span>{currentLang === 'es' ? '⚡ ¿Prefieres el Menú Fanzine / Eco-Noir Arcade? Entrar aquí' : '⚡ Prefer the Punk Fanzine / Eco-Noir Arcade Menu? Click here'}</span>
          </button>
        </div>

      </main>

      {/* 4. FOOTER CREDENTIALS & ATS COMPLIANCE */}
      <footer className="relative z-10 w-full px-4 sm:px-8 py-3.5 bg-black/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[10px] sm:text-xs font-mono text-neutral-400">
        <div className="flex items-center space-x-2">
          <span>© {new Date().getFullYear()} Daniel Santander Urrutia</span>
          <span>•</span>
          <span className="text-emerald-400 font-bold">🟢 {currentLang === 'es' ? 'Disponible para Contratación' : 'Open for Roles'}</span>
        </div>

        <div className="flex items-center space-x-3">
          <button onClick={onOpenSkills} className="hover:text-white transition-colors">
            {currentLang === 'es' ? '[ MATRIZ DE SKILLS ]' : '[ SKILLS MATRIX ]'}
          </button>
          <span>•</span>
          <button onClick={onOpenHireMe} className="text-amber-400 hover:text-white transition-colors font-bold">
            {currentLang === 'es' ? '[ CONTACTAR DIRECTO ]' : '[ HIRE ME ]'}
          </button>
        </div>
      </footer>

    </div>
  );
};
