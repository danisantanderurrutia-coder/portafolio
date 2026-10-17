import React, { useState } from 'react';
import { 
  Globe, 
  ArrowRight, 
  ArrowLeft,
  FileText, 
  Sparkles, 
  Download, 
  Briefcase, 
  Terminal, 
  Palette,
  Users,
  Microscope,
  BookOpen,
  GraduationCap,
  Compass,
  MapPin
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';
import { ProjectsModal } from './ProjectsModal';
import { TopocatchmentLogo } from './TopocatchmentLogo';

interface PunkMainMenuProps {
  currentLang: Language;
  onToggleLanguage: () => void;
  onSelectSciencePlanet: () => void;
  onSelectSummits: () => void;
  onSelectCommsArts: () => void;
  onSelectGrassroots: () => void;
  onSelectScienceDossier: () => void;
  onOpenHireMe?: () => void;
  onOpenSkills?: () => void;
  onOpenPublications?: () => void;
  onOpenTitles?: () => void;
  onOpenArtDirector?: () => void;
}

export const PunkMainMenu: React.FC<PunkMainMenuProps> = ({
  currentLang,
  onToggleLanguage,
  onSelectSciencePlanet,
  onSelectSummits,
  onSelectCommsArts,
  onSelectGrassroots,
  onSelectScienceDossier,
  onOpenHireMe,
  onOpenSkills,
  onOpenPublications,
  onOpenTitles,
  onOpenArtDirector
}) => {
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden select-none bg-[#07090d] text-white font-sans flex flex-col justify-between">
      
      {/* 1. CINEMATIC BACKGROUND ARTWORK: EUROPEAN GRAPHIC NOVEL CANAL SCENE */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0 filter brightness-95 contrast-105"
        style={{ backgroundImage: `url('${resolveAsset('/dutch_canal_comic.jpg')}')` }}
      />

      {/* Contrast Overlays: Keeps artwork fully visible while giving punchy contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/25 to-black/75 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 pointer-events-none z-0" />

      {/* 2. TOP HEADER BAR: COMPACT IDENTITY & LANGUAGE SWITCH */}
      <header className="relative z-30 w-full px-4 sm:px-8 pt-2.5 pb-2 flex items-center justify-between shrink-0 border-b border-black/40 bg-black/60 backdrop-blur-md">
        
        {/* Profile Card & Identity Plaque */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          
          {/* Topocatchment Brandmark */}
          <div className="shrink-0 transition-transform hover:scale-105 cursor-pointer -rotate-2" title="Topocatchment Brandmark">
            <TopocatchmentLogo variant="badge" className="w-9 h-9 sm:w-10 sm:h-10 shadow-[2px_2px_0px_#facc15]" />
          </div>

          {/* Daniel Santander Real Portrait (Curriculum/Passport size) */}
          <div className="relative shrink-0 group">
            <div className="w-9 h-11 sm:w-10 sm:h-12 rounded-lg bg-black p-0.5 border-2 border-white shadow-[2px_2px_0px_#000] overflow-hidden -rotate-1 group-hover:rotate-0 transition-transform">
              <img 
                src={resolveAsset('/profile.jpg')} 
                alt="Daniel Santander Urrutia" 
                className="w-full h-full object-cover object-top filter contrast-105"
              />
            </div>
            {/* Active Status Beacon */}
            <div className="absolute -bottom-1 -right-1 bg-red-600 text-white font-mono font-black text-[7px] px-1 py-0.2 rounded border border-black uppercase tracking-wider">
              {currentLang === 'es' ? 'ACTIVO' : 'ACTIVE'}
            </div>
          </div>

          {/* Stencil Title */}
          <div className="flex flex-col">
            <div className="bg-white text-black px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_#facc15] -rotate-1 inline-block self-start">
              <h1 className="font-mono font-black text-xs sm:text-base tracking-tighter uppercase leading-none">
                [DANIEL SANTANDER]
              </h1>
            </div>
            <div className="text-[9px] sm:text-[10px] font-mono text-amber-300 font-bold tracking-wider uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] mt-0.5">
              {currentLang === 'es' 
                ? 'GEOFÍSICA DE CUENCAS • COMUNICACIONES • CUMBRES'
                : 'CATCHMENT HYDROGEOPHYSICS • COMMUNICATIONS • SUMMITS'}
            </div>
          </div>
        </div>

        {/* Top Right: Language Switcher */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onToggleLanguage}
            className="px-2.5 sm:px-3 py-1 bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000000] active:scale-95 transition-all flex items-center space-x-1.5 cursor-pointer"
            title={currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? 'ES' : 'EN'}</span>
          </button>
        </div>
      </header>

      {/* 3. MAIN STAGE: AUTHENTIC HECTIC WOODEN SIGNPOST OVER THE COMIC TIMBER POLE */}
      <main className="relative z-20 flex-1 w-full px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between my-auto overflow-y-auto no-scrollbar py-2">
        
        {/* LEFT AREA: EMPTY TO FULLY DISPLAY THE CANAL, BRIDGE & BICYCLE ON DESKTOP */}
        <div className="hidden lg:flex flex-col justify-end pb-8 max-w-xs pointer-events-none select-none">
          {/* Subtle location pin */}
          <div className="bg-black/75 backdrop-blur-md p-2.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_#facc15] pointer-events-auto inline-block self-start">
            <div className="flex items-center space-x-1.5 text-[10px] font-mono text-amber-400 font-bold uppercase">
              <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>UTRECHT & CATCHMENT ARCHIVE</span>
            </div>
            <div className="text-[9px] font-mono text-neutral-300 mt-0.5">
              52°05′N 5°07′E • 33°27′S 70°40′W
            </div>
          </div>
        </div>

        {/* RIGHT AREA: DIRECTIONAL WOODEN SLATS MOUNTED DIRECTLY ON THE TIMBER POST */}
        <div className="w-full max-w-sm sm:max-w-md lg:w-[410px] xl:w-[450px] lg:absolute lg:left-[67.7%] lg:-translate-x-1/2 flex flex-col items-center my-auto relative py-1">
          
          {/* Slender Timber Post Core Behind the Signs */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-4 sm:w-5 bg-gradient-to-r from-[#291c13] via-[#483324] to-[#1c120b] border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,0.85)] z-0 rounded-sm" />

          {/* 11 Hectic Directional Signboards (Non-parallel, Alternating, No Subtitles/KM) */}
          <div className="relative z-10 w-full flex flex-col space-y-1 sm:space-y-1.5 py-1">
            
            {/* 1. SIGN 01: SCIENCE & ACADEMY (Points Right ➔) */}
            <div className="relative flex justify-center w-full -rotate-2.5 translate-x-1 hover:rotate-0 hover:translate-x-0 transition-transform duration-150">
              <button
                onClick={onSelectSciencePlanet}
                className="group relative w-[90%] sm:w-[92%] bg-[#1d4ed8] hover:bg-[#2563eb] text-white py-1.5 sm:py-2 pl-4 pr-7 sm:pr-8 border-2 sm:border-[2.5px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.85)] hover:shadow-[6px_6px_0px_#000] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%)'
                }}
                title={currentLang === 'es' ? 'Explorar Planeta Ciencia 3D' : 'Explore 3D Science Planet'}
              >
                {/* Two Metallic Nail Heads Bolted to the Post */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col space-y-1.5 pointer-events-none z-20 opacity-80">
                  <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                  <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                </div>

                <div className="flex items-center space-x-2">
                  <Microscope className="w-4 h-4 shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
                  <span className="font-mono font-black text-xs sm:text-[13px] md:text-sm tracking-wide uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {currentLang === 'es' ? 'CIENCIA & ACADEMIA' : 'SCIENCE & ACADEMY'}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform opacity-90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
              </button>
            </div>

            {/* 2. SIGN 02: SUMMITS & GLOBAL POLICY (Points Left ⬅) */}
            <div className="relative flex justify-center w-full rotate-3 -translate-x-1 hover:rotate-0 hover:translate-x-0 transition-transform duration-150">
              <button
                onClick={onSelectSummits}
                className="group relative w-[90%] sm:w-[92%] bg-[#b91c1c] hover:bg-[#dc2626] text-white py-1.5 sm:py-2 pl-7 sm:pl-8 pr-4 border-2 sm:border-[2.5px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.85)] hover:shadow-[6px_6px_0px_#000] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                style={{
                  clipPath: 'polygon(16px 0%, 100% 0%, 100% 100%, 16px 100%, 0% 50%)'
                }}
                title={currentLang === 'es' ? 'Ver Cumbres y Política Global 3D' : 'View Summits & Global Policy 3D'}
              >
                {/* Two Metallic Nail Heads Bolted to the Post */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col space-y-1.5 pointer-events-none z-20 opacity-80">
                  <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                  <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                </div>

                <ArrowLeft className="w-3.5 h-3.5 shrink-0 group-hover:-translate-x-1 transition-transform opacity-90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
                <div className="flex items-center space-x-2">
                  <span className="font-mono font-black text-xs sm:text-[13px] md:text-sm tracking-wide uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {currentLang === 'es' ? 'CUMBRES & POLÍTICA GLOBAL' : 'SUMMITS & GLOBAL POLICY'}
                  </span>
                  <Globe className="w-4 h-4 shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
                </div>
              </button>
            </div>

            {/* 3. SIGN 03: COMMUNICATIONS & ARTS (Points Right ➔) */}
            <div className="relative flex justify-center w-full -rotate-1.5 translate-x-2 hover:rotate-0 hover:translate-x-0 transition-transform duration-150">
              <button
                onClick={onSelectCommsArts}
                className="group relative w-[90%] sm:w-[92%] bg-[#ea580c] hover:bg-[#f97316] text-white py-1.5 sm:py-2 pl-4 pr-7 sm:pr-8 border-2 sm:border-[2.5px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.85)] hover:shadow-[6px_6px_0px_#000] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%)'
                }}
                title={currentLang === 'es' ? 'Ver Medios, Música y Arte' : 'View Communications & Arts'}
              >
                {/* Two Metallic Nail Heads Bolted to the Post */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col space-y-1.5 pointer-events-none z-20 opacity-80">
                  <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                  <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                </div>

                <div className="flex items-center space-x-2">
                  <Palette className="w-4 h-4 shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
                  <span className="font-mono font-black text-xs sm:text-[13px] md:text-sm tracking-wide uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {currentLang === 'es' ? 'MEDIOS & ARTE' : 'COMMUNICATIONS & ARTS'}
                  </span>
                </div>

                <div className="flex items-center space-x-1.5 shrink-0">
                  {onOpenArtDirector && (
                    <span 
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenArtDirector();
                      }}
                      className="bg-black hover:bg-yellow-400 text-yellow-300 hover:text-black font-mono font-black text-[8px] sm:text-[9px] px-1.5 py-0.5 border border-white/60 uppercase shadow-[1px_1px_0px_#000] cursor-pointer"
                      title="Abrir backstage de Rap"
                    >
                      ⚡ RAP
                    </span>
                  )}
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform opacity-90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
                </div>
              </button>
            </div>

            {/* 4. SIGN 04: GRASSROOTS & WATER (Points Left ⬅) */}
            <div className="relative flex justify-center w-full rotate-3.5 -translate-x-2 hover:rotate-0 hover:translate-x-0 transition-transform duration-150">
              <button
                onClick={onSelectGrassroots}
                className="group relative w-[90%] sm:w-[92%] bg-[#15803d] hover:bg-[#16a34a] text-white py-1.5 sm:py-2 pl-7 sm:pl-8 pr-4 border-2 sm:border-[2.5px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.85)] hover:shadow-[6px_6px_0px_#000] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                style={{
                  clipPath: 'polygon(16px 0%, 100% 0%, 100% 100%, 16px 100%, 0% 50%)'
                }}
                title={currentLang === 'es' ? 'Ver Comunidades y Defensa del Agua' : 'View Grassroots & Water Governance'}
              >
                {/* Two Metallic Nail Heads Bolted to the Post */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col space-y-1.5 pointer-events-none z-20 opacity-80">
                  <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                  <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                </div>

                <ArrowLeft className="w-3.5 h-3.5 shrink-0 group-hover:-translate-x-1 transition-transform opacity-90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
                <div className="flex items-center space-x-2">
                  <span className="font-mono font-black text-xs sm:text-[13px] md:text-sm tracking-wide uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {currentLang === 'es' ? 'COMUNIDADES & AGUA' : 'GRASSROOTS & WATER'}
                  </span>
                  <Users className="w-4 h-4 shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
                </div>
              </button>
            </div>

            {/* 5. SIGN 05: PROJECTS & INNOVATION (Points Right ➔) */}
            <div className="relative flex justify-center w-full -rotate-3 translate-x-1.5 hover:rotate-0 hover:translate-x-0 transition-transform duration-150">
              <button
                onClick={() => setIsProjectsModalOpen(true)}
                className="group relative w-[90%] sm:w-[92%] bg-[#eab308] hover:bg-[#facc15] text-black py-1.5 sm:py-2 pl-4 pr-7 sm:pr-8 border-2 sm:border-[2.5px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.85)] hover:shadow-[6px_6px_0px_#000] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%)'
                }}
                title={currentLang === 'es' ? 'Ver Portafolio de Proyectos y Soluciones Comerciales' : 'View Commercial Projects Portfolio'}
              >
                {/* Two Metallic Nail Heads Bolted to the Post */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col space-y-1.5 pointer-events-none z-20 opacity-80">
                  <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                  <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                </div>

                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 shrink-0 text-black drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]" />
                  <span className="font-mono font-black text-xs sm:text-[13px] md:text-sm tracking-wide uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                    {currentLang === 'es' ? 'PROYECTOS & INNOVACIÓN' : 'PROJECTS & INNOVATION'}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform opacity-90 drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]" />
              </button>
            </div>

            {/* 6. SIGN 06: PUBLICATIONS & PRESS (Points Left ⬅) */}
            {onOpenPublications && (
              <div className="relative flex justify-center w-full rotate-2 -translate-x-0.5 hover:rotate-0 hover:translate-x-0 transition-transform duration-150">
                <button
                  onClick={onOpenPublications}
                  className="group relative w-[90%] sm:w-[92%] bg-[#1e1b4b] hover:bg-[#312e81] text-[#fef08a] py-1.5 sm:py-2 pl-7 sm:pl-8 pr-4 border-2 sm:border-[2.5px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.85)] hover:shadow-[6px_6px_0px_#000] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                  style={{
                    clipPath: 'polygon(16px 0%, 100% 0%, 100% 100%, 16px 100%, 0% 50%)'
                  }}
                  title={currentLang === 'es' ? 'Ver Publicaciones, Libros y Prensa' : 'View Publications & Press'}
                >
                  {/* Two Metallic Nail Heads Bolted to the Post */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col space-y-1.5 pointer-events-none z-20 opacity-80">
                    <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                    <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                  </div>

                  <ArrowLeft className="w-3.5 h-3.5 shrink-0 group-hover:-translate-x-1 transition-transform opacity-90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
                  <div className="flex items-center space-x-2">
                    <span className="font-mono font-black text-xs sm:text-[13px] md:text-sm tracking-wide uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {currentLang === 'es' ? 'PUBLICACIONES & PRENSA' : 'PUBLICATIONS & PRESS'}
                    </span>
                    <BookOpen className="w-4 h-4 shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
                  </div>
                </button>
              </div>
            )}

            {/* 7. SIGN 07: SKILLS & TOOLKIT (Points Right ➔) */}
            {onOpenSkills && (
              <div className="relative flex justify-center w-full -rotate-3.5 translate-x-2 hover:rotate-0 hover:translate-x-0 transition-transform duration-150">
                <button
                  onClick={onOpenSkills}
                  className="group relative w-[90%] sm:w-[92%] bg-[#0891b2] hover:bg-[#06b6d4] text-white py-1.5 sm:py-2 pl-4 pr-7 sm:pr-8 border-2 sm:border-[2.5px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.85)] hover:shadow-[6px_6px_0px_#000] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                  style={{
                    clipPath: 'polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%)'
                  }}
                  title={currentLang === 'es' ? 'Ver Ficha Técnica de Habilidades y Software' : 'View Skills & Technical Toolkit'}
                >
                  {/* Two Metallic Nail Heads Bolted to the Post */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col space-y-1.5 pointer-events-none z-20 opacity-80">
                    <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                    <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Terminal className="w-4 h-4 shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
                    <span className="font-mono font-black text-xs sm:text-[13px] md:text-sm tracking-wide uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {currentLang === 'es' ? 'FICHA TÉCNICA & SKILLS' : 'SKILLS & TOOLKIT'}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform opacity-90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
                </button>
              </div>
            )}

            {/* 8. SIGN 08: ACADEMIC TITLES (Points Left ⬅) */}
            {onOpenTitles && (
              <div className="relative flex justify-center w-full rotate-2.5 -translate-x-1.5 hover:rotate-0 hover:translate-x-0 transition-transform duration-150">
                <button
                  onClick={onOpenTitles}
                  className="group relative w-[90%] sm:w-[92%] bg-[#831843] hover:bg-[#9d174d] text-white py-1.5 sm:py-2 pl-7 sm:pl-8 pr-4 border-2 sm:border-[2.5px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.85)] hover:shadow-[6px_6px_0px_#000] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                  style={{
                    clipPath: 'polygon(16px 0%, 100% 0%, 100% 100%, 16px 100%, 0% 50%)'
                  }}
                  title={currentLang === 'es' ? 'Ver Títulos Académicos y Grados' : 'View Academic Degrees & Diplomas'}
                >
                  {/* Two Metallic Nail Heads Bolted to the Post */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col space-y-1.5 pointer-events-none z-20 opacity-80">
                    <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                    <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                  </div>

                  <ArrowLeft className="w-3.5 h-3.5 shrink-0 group-hover:-translate-x-1 transition-transform opacity-90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
                  <div className="flex items-center space-x-2">
                    <span className="font-mono font-black text-xs sm:text-[13px] md:text-sm tracking-wide uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {currentLang === 'es' ? 'TÍTULOS ACADÉMICOS' : 'ACADEMIC TITLES'}
                    </span>
                    <GraduationCap className="w-4 h-4 shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
                  </div>
                </button>
              </div>
            )}

            {/* 9. SIGN 09: ACADEMIC DOSSIER PAPER (Points Right ➔) */}
            <div className="relative flex justify-center w-full -rotate-1.5 translate-x-1 hover:rotate-0 hover:translate-x-0 transition-transform duration-150">
              <button
                onClick={onSelectScienceDossier}
                className="group relative w-[90%] sm:w-[92%] bg-[#c2410c] hover:bg-[#d97706] text-white py-1.5 sm:py-2 pl-4 pr-7 sm:pr-8 border-2 sm:border-[2.5px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.85)] hover:shadow-[6px_6px_0px_#000] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%)'
                }}
                title={currentLang === 'es' ? 'Ver Expediente Académico Formato Fanzine Papel' : 'View Academic Dossier Paper Format'}
              >
                {/* Two Metallic Nail Heads Bolted to the Post */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col space-y-1.5 pointer-events-none z-20 opacity-80">
                  <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                  <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                </div>

                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
                  <span className="font-mono font-black text-xs sm:text-[13px] md:text-sm tracking-wide uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {currentLang === 'es' ? 'EXPEDIENTE ACADÉMICO' : 'ACADEMIC DOSSIER'}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform opacity-90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
              </button>
            </div>

            {/* 10. SIGN 10: CURRICULUM VITAE PDF (Points Left ⬅) */}
            <div className="relative flex justify-center w-full rotate-3 -translate-x-2 hover:rotate-0 hover:translate-x-0 transition-transform duration-150">
              <a
                href={resolveAsset('/Daniel_Santander_CV.pdf')}
                download="Daniel_Santander_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-[90%] sm:w-[92%] bg-[#16a34a] hover:bg-[#22c55e] text-white py-1.5 sm:py-2 pl-7 sm:pl-8 pr-4 border-2 sm:border-[2.5px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.85)] hover:shadow-[6px_6px_0px_#000] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                style={{
                  clipPath: 'polygon(16px 0%, 100% 0%, 100% 100%, 16px 100%, 0% 50%)'
                }}
                title={currentLang === 'es' ? 'Descargar Currículum Vitae oficial (PDF)' : 'Download official Curriculum Vitae (PDF)'}
              >
                {/* Two Metallic Nail Heads Bolted to the Post */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col space-y-1.5 pointer-events-none z-20 opacity-80">
                  <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                  <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                </div>

                <ArrowLeft className="w-3.5 h-3.5 shrink-0 group-hover:-translate-x-1 transition-transform opacity-90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
                <div className="flex items-center space-x-2">
                  <span className="font-mono font-black text-xs sm:text-[13px] md:text-sm tracking-wide uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {currentLang === 'es' ? 'CURRÍCULUM VITAE (PDF)' : 'CURRICULUM VITAE (PDF)'}
                  </span>
                  <Download className="w-4 h-4 shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]" />
                </div>
              </a>
            </div>

            {/* 11. SIGN 11: HIRE ME // WORK TOGETHER (Points Right ➔) */}
            {onOpenHireMe && (
              <div className="relative flex justify-center w-full -rotate-1 translate-x-0 hover:rotate-0 hover:translate-x-0 transition-transform duration-150 pt-0.5">
                <button
                  onClick={onOpenHireMe}
                  className="group relative w-[90%] sm:w-[92%] bg-[#facc15] hover:bg-white text-black py-2 pl-4 pr-7 sm:pr-8 border-3 border-black shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#000] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                  style={{
                    clipPath: 'polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%)'
                  }}
                  title={currentLang === 'es' ? 'Contactar para contratación o colaboraciones' : 'Contact for hiring or partnerships'}
                >
                  {/* Two Metallic Nail Heads Bolted to the Post */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col space-y-1.5 pointer-events-none z-20 opacity-80">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1e293b] border border-black shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.7)] flex items-center justify-center"><div className="w-1 h-0.5 bg-neutral-900" /></div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-black shrink-0" />
                    <span className="font-mono font-black text-xs sm:text-[13px] md:text-sm tracking-wide uppercase">
                      {currentLang === 'es' ? '★ CONTRÁTAME // HIRE ME ★' : '★ HIRE ME // WORK TOGETHER ★'}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-black shrink-0 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

          </div>
        </div>
      </main>

      {/* 4. FOOTER: CONTROLLER PROMPTS & TICKER */}
      <footer className="relative z-30 w-full px-4 sm:px-8 py-1.5 bg-black/80 border-t-2 border-black flex flex-wrap items-center justify-between gap-2 text-[9.5px] font-mono text-neutral-300 shrink-0 backdrop-blur-md">
        <div className="flex items-center space-x-2.5">
          <span className="bg-[#facc15] text-black px-1.5 py-0.2 font-black border border-black shadow-[1px_1px_0px_#ffffff]">
            A
          </span>
          <span className="font-bold text-white uppercase">
            {currentLang === 'es' ? 'SELECCIONAR SECTOR // CRUCE DE RUTAS' : 'SELECT SECTOR // CAREER CROSSROADS'}
          </span>
          <span className="text-neutral-500">•</span>
          <span className="text-emerald-400 font-bold">ONLINE & DISPONIBLE</span>
        </div>

        <div className="flex items-center space-x-3 text-neutral-400">
          <span>{currentLang === 'es' ? 'EXPEDIENTE N° 2026-DSU' : 'DOSSIER NO. 2026-DSU'}</span>
          <span className="text-neutral-500">•</span>
          <span className="font-mono font-black text-white">
            ||| | ||||| || |||||| | |||
          </span>
        </div>
      </footer>

      {/* Commercial Projects Modal */}
      <ProjectsModal
        isOpen={isProjectsModalOpen}
        onClose={() => setIsProjectsModalOpen(false)}
        currentLang={currentLang}
      />

    </div>
  );
};

export default PunkMainMenu;
