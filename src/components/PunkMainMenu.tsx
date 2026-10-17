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
        className="absolute inset-0 bg-cover bg-center lg:bg-left bg-no-repeat pointer-events-none z-0 filter brightness-95 contrast-105"
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

      {/* 3. MAIN STAGE: POSTE CON LETREROS DESORDENADOS TIPO PUNK (HECTIC, COMPACTO, SIN SUBTÍTULOS) */}
      <main className="relative z-20 flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between my-auto overflow-y-auto no-scrollbar py-2">
        
        {/* LEFT AREA: EMPTY TO FULLY DISPLAY THE CANAL, BRIDGE & BICYCLE ON DESKTOP */}
        <div className="hidden lg:flex flex-col justify-end pb-6 max-w-xs xl:max-w-sm pointer-events-none select-none">
          {/* Subtle location pin */}
          <div className="bg-black/70 backdrop-blur-md p-2.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_#facc15] pointer-events-auto inline-block self-start">
            <div className="flex items-center space-x-1.5 text-[10px] font-mono text-amber-400 font-bold uppercase">
              <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>UTRECHT & CATCHMENT ARCHIVE</span>
            </div>
            <div className="text-[9px] font-mono text-neutral-300 mt-0.5">
              52°05′N 5°07′E • 33°27′S 70°40′W
            </div>
          </div>
        </div>

        {/* RIGHT AREA: THE RUSTIC / PUNK POST WITH OUTWARD BRANCHING SIGNBOARDS */}
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-md xl:max-w-lg flex flex-col items-center my-auto relative py-1">
          
          {/* Vertical Wooden/Iron Post Behind the Signs */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-4 sm:w-5 bg-gradient-to-r from-[#2a221b] via-[#453629] to-[#1e1711] border-2 border-black shadow-[2px_2px_0px_#000] z-0 rounded-sm" />

          {/* 11 Hectic Directional Signboards Staggered on the Post */}
          <div className="relative z-10 w-full flex flex-col space-y-1.5 sm:space-y-2 py-1">
            
            {/* 1. SIGN 01: SCIENCE & ACADEMY (Points Right ➔) */}
            <div className="relative flex justify-end w-full -rotate-2 -translate-x-2 hover:rotate-0 hover:translate-x-0 transition-transform">
              <button
                onClick={onSelectSciencePlanet}
                className="group relative w-[92%] sm:w-[88%] text-left bg-[#facc15] hover:bg-white text-black py-1 sm:py-1.5 pl-3 pr-7 border-3 border-black shadow-[4px_4px_0px_#000000] hover:scale-105 hover:z-30 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 0% 100%)'
                }}
              >
                {/* Central Mounting Bolt */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner flex items-center justify-center">
                  <div className="w-1.5 h-0.5 bg-neutral-800" />
                </div>

                <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                  <Microscope className="w-4 h-4 text-black shrink-0" />
                  <span>{currentLang === 'es' ? '[ 01. CIENCIA & ACADEMIA ]' : '[ 01. SCIENCE & ACADEMY ]'}</span>
                </span>
                
                <span className="bg-black text-[#facc15] font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase flex items-center space-x-1 shrink-0">
                  <span>3D GLOBE</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </div>

            {/* 2. SIGN 02: SUMMITS & GLOBAL POLICY (Points Left ⬅) */}
            <div className="relative flex justify-start w-full rotate-2 translate-x-2 hover:rotate-0 hover:translate-x-0 transition-transform">
              <button
                onClick={onSelectSummits}
                className="group relative w-[92%] sm:w-[88%] text-left bg-white hover:bg-[#facc15] text-black py-1 sm:py-1.5 pl-7 pr-3 border-3 border-black shadow-[4px_4px_0px_#000000] hover:scale-105 hover:z-30 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                style={{
                  clipPath: 'polygon(15px 0%, 100% 0%, 100% 100%, 15px 100%, 0% 50%)'
                }}
              >
                {/* Central Mounting Bolt */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner flex items-center justify-center">
                  <div className="w-1.5 h-0.5 bg-neutral-800" />
                </div>

                <span className="bg-black text-[#facc15] font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase flex items-center space-x-1 shrink-0">
                  <ArrowLeft className="w-3 h-3" />
                  <span>3D GLOBE</span>
                </span>

                <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                  <Globe className="w-4 h-4 text-black shrink-0" />
                  <span>{currentLang === 'es' ? '[ 02. CUMBRES & POLÍTICA ]' : '[ 02. SUMMITS & POLICY ]'}</span>
                </span>
              </button>
            </div>

            {/* 3. SIGN 03: COMMUNICATIONS & ARTS (Points Right ➔) */}
            <div className="relative flex justify-end w-full -rotate-1.5 -translate-x-1 hover:rotate-0 hover:translate-x-0 transition-transform">
              <button
                onClick={onSelectCommsArts}
                className="group relative w-[92%] sm:w-[88%] text-left bg-[#ffedd5] hover:bg-[#f97316] hover:text-white text-black py-1 sm:py-1.5 pl-3 pr-7 border-3 border-black shadow-[4px_4px_0px_#000000] hover:scale-105 hover:z-30 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 0% 100%)'
                }}
              >
                {/* Central Mounting Bolt */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner flex items-center justify-center">
                  <div className="w-1.5 h-0.5 bg-neutral-800" />
                </div>

                <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                  <Palette className="w-4 h-4 text-black group-hover:text-white shrink-0" />
                  <span>{currentLang === 'es' ? '[ 03. MEDIOS & ARTE ]' : '[ 03. COMMS & ARTS ]'}</span>
                </span>

                <div className="flex items-center space-x-1 shrink-0">
                  {onOpenArtDirector && (
                    <span 
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenArtDirector();
                      }}
                      className="bg-black hover:bg-yellow-400 text-yellow-300 hover:text-black font-mono font-black text-[8px] sm:text-[9px] px-1.5 py-0.5 border border-white/50 uppercase transition-all shadow-[1px_1px_0px_#000]"
                      title="Abrir backstage de Rap"
                    >
                      ⚡ RAP
                    </span>
                  )}
                  <span className="bg-black text-white font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase flex items-center space-x-0.5">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            </div>

            {/* 4. SIGN 04: GRASSROOTS & COMMUNITIES (Points Left ⬅) */}
            <div className="relative flex justify-start w-full rotate-2.5 translate-x-2.5 hover:rotate-0 hover:translate-x-0 transition-transform">
              <button
                onClick={onSelectGrassroots}
                className="group relative w-[92%] sm:w-[88%] text-left bg-[#d1fae5] hover:bg-[#10b981] hover:text-white text-black py-1 sm:py-1.5 pl-7 pr-3 border-3 border-black shadow-[4px_4px_0px_#000000] hover:scale-105 hover:z-30 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                style={{
                  clipPath: 'polygon(15px 0%, 100% 0%, 100% 100%, 15px 100%, 0% 50%)'
                }}
              >
                {/* Central Mounting Bolt */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner flex items-center justify-center">
                  <div className="w-1.5 h-0.5 bg-neutral-800" />
                </div>

                <span className="bg-black text-white font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase flex items-center space-x-1 shrink-0">
                  <ArrowLeft className="w-3 h-3" />
                  <span>3D</span>
                </span>

                <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                  <Users className="w-4 h-4 text-black group-hover:text-white shrink-0" />
                  <span>{currentLang === 'es' ? '[ 04. COMUNIDADES & AGUA ]' : '[ 04. GRASSROOTS & WATER ]'}</span>
                </span>
              </button>
            </div>

            {/* 5. SIGN 05: PROJECTS & INNOVATION (Points Right ➔) */}
            <div className="relative flex justify-end w-full -rotate-1 -translate-x-2.5 hover:rotate-0 hover:translate-x-0 transition-transform">
              <button
                onClick={() => setIsProjectsModalOpen(true)}
                className="group relative w-[92%] sm:w-[88%] text-left bg-[#dc2626] hover:bg-[#b91c1c] text-white py-1 sm:py-1.5 pl-3 pr-7 border-3 border-black shadow-[4px_4px_0px_#000000] hover:scale-105 hover:z-30 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 0% 100%)'
                }}
              >
                {/* Central Mounting Bolt */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner flex items-center justify-center">
                  <div className="w-1.5 h-0.5 bg-neutral-800" />
                </div>

                <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span>{currentLang === 'es' ? '[ 05. PROYECTOS & I+D ]' : '[ 05. PROJECTS & INNOVATION ]'}</span>
                </span>

                <span className="bg-yellow-400 text-black font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase flex items-center space-x-1 shrink-0">
                  <span>8 VENTURES</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </div>

            {/* 6. SIGN 06: PUBLICATIONS & PRESS (Points Left ⬅) */}
            {onOpenPublications && (
              <div className="relative flex justify-start w-full rotate-1.5 translate-x-2 hover:rotate-0 hover:translate-x-0 transition-transform">
                <button
                  onClick={onOpenPublications}
                  className="group relative w-[92%] sm:w-[88%] text-left bg-[#fef08a] hover:bg-white text-black py-1 sm:py-1.5 pl-7 pr-3 border-3 border-black shadow-[4px_4px_0px_#000000] hover:scale-105 hover:z-30 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                  style={{
                    clipPath: 'polygon(15px 0%, 100% 0%, 100% 100%, 15px 100%, 0% 50%)'
                  }}
                >
                  {/* Central Mounting Bolt */}
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-0.5 bg-neutral-800" />
                  </div>

                  <span className="bg-red-600 text-white font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase flex items-center space-x-1 shrink-0">
                    <ArrowLeft className="w-3 h-3" />
                    <span>EPN • OLCA</span>
                  </span>

                  <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                    <BookOpen className="w-4 h-4 text-black shrink-0" />
                    <span>{currentLang === 'es' ? '[ 06. PUBLICACIONES & PRENSA ]' : '[ 06. PUBLICATIONS & PRESS ]'}</span>
                  </span>
                </button>
              </div>
            )}

            {/* 7. SIGN 07: SKILLS & TOOLKIT (Points Right ➔) */}
            {onOpenSkills && (
              <div className="relative flex justify-end w-full -rotate-2 -translate-x-1.5 hover:rotate-0 hover:translate-x-0 transition-transform">
                <button
                  onClick={onOpenSkills}
                  className="group relative w-[92%] sm:w-[88%] text-left bg-[#06b6d4] hover:bg-[#22d3ee] text-black py-1 sm:py-1.5 pl-3 pr-7 border-3 border-black shadow-[4px_4px_0px_#000000] hover:scale-105 hover:z-30 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                  style={{
                    clipPath: 'polygon(0% 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 0% 100%)'
                  }}
                >
                  {/* Central Mounting Bolt */}
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-0.5 bg-neutral-800" />
                  </div>

                  <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                    <Terminal className="w-4 h-4 text-black shrink-0" />
                    <span>{currentLang === 'es' ? '[ 07. FICHA TÉCNICA & SKILLS ]' : '[ 07. SKILLS & TOOLKIT ]'}</span>
                  </span>

                  <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>
            )}

            {/* 8. SIGN 08: ACADEMIC TITLES (Points Left ⬅) */}
            {onOpenTitles && (
              <div className="relative flex justify-start w-full rotate-2 translate-x-2 hover:rotate-0 hover:translate-x-0 transition-transform">
                <button
                  onClick={onOpenTitles}
                  className="group relative w-[92%] sm:w-[88%] text-left bg-[#c7d2fe] hover:bg-white text-black py-1 sm:py-1.5 pl-7 pr-3 border-3 border-black shadow-[4px_4px_0px_#000000] hover:scale-105 hover:z-30 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                  style={{
                    clipPath: 'polygon(15px 0%, 100% 0%, 100% 100%, 15px 100%, 0% 50%)'
                  }}
                >
                  {/* Central Mounting Bolt */}
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-0.5 bg-neutral-800" />
                  </div>

                  <span className="bg-indigo-900 text-white font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase flex items-center space-x-1 shrink-0">
                    <ArrowLeft className="w-3 h-3" />
                    <span>4 TÍTULOS</span>
                  </span>

                  <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                    <GraduationCap className="w-4 h-4 text-indigo-900 shrink-0" />
                    <span>{currentLang === 'es' ? '[ 08. TÍTULOS ACADÉMICOS ]' : '[ 08. ACADEMIC TITLES ]'}</span>
                  </span>
                </button>
              </div>
            )}

            {/* 9. SIGN 09: ACADEMIC DOSSIER PAPER (Points Right ➔) */}
            <div className="relative flex justify-end w-full -rotate-1.5 -translate-x-1 hover:rotate-0 hover:translate-x-0 transition-transform">
              <button
                onClick={onSelectScienceDossier}
                className="group relative w-[92%] sm:w-[88%] text-left bg-[#ede5d6] hover:bg-white text-[#2c2620] py-1 sm:py-1.5 pl-3 pr-7 border-3 border-black shadow-[4px_4px_0px_#000000] hover:scale-105 hover:z-30 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 0% 100%)'
                }}
              >
                {/* Central Mounting Bolt */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner flex items-center justify-center">
                  <div className="w-1.5 h-0.5 bg-neutral-800" />
                </div>

                <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                  <FileText className="w-4 h-4 text-[#7f3419] shrink-0" />
                  <span>{currentLang === 'es' ? '[ 09. EXPEDIENTE EN PAPEL ]' : '[ 09. ACADEMIC DOSSIER ]'}</span>
                </span>

                <span className="bg-black text-[#ede5d6] font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase flex items-center space-x-1 shrink-0">
                  <span>PAPEL</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </div>

            {/* 10. SIGN 10: CURRICULUM VITAE PDF (Points Left ⬅) */}
            <div className="relative flex justify-start w-full rotate-2 translate-x-2 hover:rotate-0 hover:translate-x-0 transition-transform">
              <a
                href={resolveAsset('/Daniel_Santander_CV.pdf')}
                download="Daniel_Santander_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-[92%] sm:w-[88%] text-left bg-[#22c55e] hover:bg-[#16a34a] text-black hover:text-white py-1 sm:py-1.5 pl-7 pr-3 border-3 border-black shadow-[4px_4px_0px_#000000] hover:scale-105 hover:z-30 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                style={{
                  clipPath: 'polygon(15px 0%, 100% 0%, 100% 100%, 15px 100%, 0% 50%)'
                }}
                title={currentLang === 'es' ? 'Descargar Currículum Vitae oficial (PDF)' : 'Download official Curriculum Vitae (PDF)'}
              >
                {/* Central Mounting Bolt */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner flex items-center justify-center">
                  <div className="w-1.5 h-0.5 bg-neutral-800" />
                </div>

                <span className="bg-black text-white font-mono font-black text-[9px] px-1.5 py-0.2 border border-white uppercase flex items-center space-x-1 shrink-0">
                  <ArrowLeft className="w-3 h-3" />
                  <span>PDF</span>
                </span>

                <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                  <Download className="w-4 h-4 text-black group-hover:text-white shrink-0" />
                  <span>{currentLang === 'es' ? '[ 10. CURRÍCULUM VITAE ]' : '[ 10. CURRICULUM VITAE ]'}</span>
                </span>
              </a>
            </div>

            {/* 11. SIGN 11: HIRE ME // WORK TOGETHER (Points Right ➔) */}
            {onOpenHireMe && (
              <div className="relative flex justify-end w-full -rotate-1.5 -translate-x-0.5 hover:rotate-0 hover:translate-x-0 transition-transform pt-0.5">
                <button
                  onClick={onOpenHireMe}
                  className="group relative w-[92%] sm:w-[88%] text-left bg-[#fbbf24] hover:bg-white text-black py-1.5 sm:py-2 pl-3 pr-7 border-3 border-black shadow-[5px_5px_0px_#000000] hover:scale-105 hover:z-30 active:scale-95 transition-all cursor-pointer flex items-center justify-between"
                  style={{
                    clipPath: 'polygon(0% 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 0% 100%)'
                  }}
                >
                  {/* Central Mounting Bolt */}
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-200 border-2 border-black shadow-inner flex items-center justify-center">
                    <div className="w-2 h-0.5 bg-black" />
                  </div>

                  <span className="font-mono font-black text-xs sm:text-sm md:text-base tracking-tight uppercase flex items-center space-x-1.5">
                    <Briefcase className="w-4 h-4 text-black shrink-0" />
                    <span>{currentLang === 'es' ? '★ [ 11. CONTRÁTAME // HIRE ME ] ★' : '★ [ 11. HIRE ME // WORK TOGETHER ] ★'}</span>
                  </span>

                  <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform shrink-0" />
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
