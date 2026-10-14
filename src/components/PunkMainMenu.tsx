import React, { useState } from 'react';
import { 
  Globe, 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Download, 
  Briefcase, 
  Terminal, 
  Palette,
  Users,
  Microscope,
  BookOpen,
  GraduationCap
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
    <div className="relative w-full h-screen overflow-hidden select-none bg-[#090b0e] text-white font-sans flex flex-col justify-between">
      
      {/* 1. CINEMATIC FULLSCREEN ECO-NOIR GRAPHIC NOVEL ARTWORK */}
      <div 
        className="absolute inset-0 bg-cover bg-center lg:bg-right bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: `url('${resolveAsset('/eco_noir_menu_bg.jpg')}')` }}
      />

      {/* Center & Left Vignette for contrast while keeping artwork visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/35 pointer-events-none z-0" />

      {/* 2. TOP HEADER: CLEAN & COMPACT (LOGO + CV-SIZED PHOTO + NAME/TITLE + LANGUAGE SWITCH ONLY) */}
      <header className="relative z-20 w-full px-4 sm:px-8 pt-2.5 pb-1 flex items-center justify-between shrink-0">
        
        {/* Profile Card & Title Stencil Box */}
        <div className="flex items-center space-x-3">
          
          {/* Topocatchment Brand Emblem */}
          <div className="shrink-0 -rotate-2 hover:rotate-0 transition-transform cursor-pointer" title="Topocatchment Brandmark">
            <TopocatchmentLogo variant="badge" className="w-9 h-9 sm:w-10 sm:h-10 shadow-[3px_3px_0px_#facc15]" />
          </div>

          {/* Daniel Santander Real Portrait Badge (Tamaño Curriculum / Passport) */}
          <div className="relative shrink-0 group">
            <div className="w-9 h-11 sm:w-10 sm:h-12 rounded-lg bg-black p-0.5 border-2 border-white shadow-[3px_3px_0px_#facc15] overflow-hidden -rotate-1 group-hover:rotate-0 transition-transform">
              <img 
                src={resolveAsset('/profile.jpg')} 
                alt="Daniel Santander Urrutia" 
                className="w-full h-full object-cover object-top filter contrast-105"
              />
            </div>
            {/* Active Tag */}
            <div className="absolute -bottom-1 -right-1 bg-red-600 text-white font-mono font-black text-[7px] px-1 py-0.2 rounded border border-white uppercase tracking-wider">
              {currentLang === 'es' ? 'ACTIVO' : 'ACTIVE'}
            </div>
          </div>

          {/* Stencil Title & Academic Role */}
          <div className="flex flex-col">
            <div className="bg-white text-black px-2 sm:px-2.5 py-0.5 border-2 border-black shadow-[2px_2px_0px_#facc15] -rotate-1 inline-block self-start">
              <h1 className="font-mono font-black text-xs sm:text-base md:text-lg tracking-tighter uppercase leading-none">
                [DANIEL SANTANDER]
              </h1>
            </div>
            <div className="mt-0.5 text-[8.5px] sm:text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
              {currentLang === 'es' 
                ? 'GEOFÍSICA DE CUENCAS • COMUNICACIONES • CUMBRES'
                : 'CATCHMENT HYDROGEOPHYSICS • COMMUNICATIONS • SUMMITS'}
            </div>
            <div className="text-[8px] sm:text-[8.5px] font-mono text-neutral-300 opacity-80 hidden sm:block">
              {currentLang === 'es'
                ? 'Dual M.Sc. CAU Kiel & Poznań • U. de Chile • Vocero y Expositor (8 Países)'
                : 'Dual M.Sc. CAU Kiel & Poznań • U. of Chile • Speaker & Modeler (8 Countries)'}
            </div>
          </div>
        </div>

        {/* Top Right: Language Switcher */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onToggleLanguage}
            className="px-2.5 sm:px-3 py-1 bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000000] active:scale-95 transition-all flex items-center space-x-1.5 cursor-pointer"
            title={currentLang === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? 'ES' : 'EN'}</span>
          </button>
        </div>
      </header>

      {/* 3. MAIN MENU BUTTONS: AUTHENTIC PUNK ZINE TAPE COLLAGE, PERFECTLY CENTERED & SCROLL-SAFE */}
      <main className="relative z-20 flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center my-auto overflow-y-auto no-scrollbar py-2">
        
        {/* Buttons Stack Container with Dynamic Punk Angles & Staggered Offsets */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl flex flex-col space-y-1 sm:space-y-1.5">
          
          {/* BUTTON 1: [01. SCIENCE & ACADEMY // FIELD RESEARCH] */}
          <button
            onClick={onSelectSciencePlanet}
            className="group relative w-full text-left bg-[#facc15] hover:bg-white text-black px-3 py-1 sm:py-1.5 border-3 border-black shadow-[4px_4px_0px_#000000] -rotate-2 -translate-x-2 hover:rotate-0 hover:translate-x-0 hover:scale-[1.02] hover:z-30 active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                <Microscope className="w-3.5 h-3.5 text-black" />
                <span>{currentLang === 'es' ? '[ 01. CIENCIA & ACADEMIA ]' : '[ 01. SCIENCE & ACADEMY ]'}</span>
              </span>
              <span className="bg-black text-[#facc15] font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase">
                {currentLang === 'es' ? 'PLANETA 3D' : '3D GLOBE'}
              </span>
            </div>
            <div className="text-[9px] sm:text-[9.5px] font-mono font-bold text-neutral-800 tracking-tight mt-0.5">
              {currentLang === 'es'
                ? 'Dinámica de Suelos, Turberas GEI, Lauwersmeer & Hidrogeofísica (Kiel, Poznań & U. de Chile)'
                : 'Soil Dynamics, Peatland GHG, Lauwersmeer & Hydrogeophysics (Kiel, Poznań & U. of Chile)'}
            </div>
          </button>

          {/* BUTTON 2: [02. SUMMITS & GLOBAL POLICY] */}
          <button
            onClick={onSelectSummits}
            className="group relative w-full text-left bg-white hover:bg-[#facc15] text-black px-3 py-1 sm:py-1.5 border-3 border-black shadow-[4px_4px_0px_#000000] rotate-1.5 translate-x-2 hover:rotate-0 hover:translate-x-0 hover:scale-[1.02] hover:z-30 active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                <Globe className="w-3.5 h-3.5 text-black" />
                <span>{currentLang === 'es' ? '[ 02. CUMBRES & POLÍTICA GLOBAL ]' : '[ 02. SUMMITS & GLOBAL POLICY ]'}</span>
              </span>
              <span className="bg-black text-[#facc15] font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase">
                {currentLang === 'es' ? 'PLANETA 3D' : '3D GLOBE'}
              </span>
            </div>
            <div className="text-[9px] sm:text-[9.5px] font-mono font-bold text-neutral-700 group-hover:text-neutral-900 tracking-tight mt-0.5">
              {currentLang === 'es'
                ? 'Oslo (Decrecimiento), Bonn (Justicia Ambiental), Costa Rica y Bogotá'
                : 'Oslo (Degrowth), Bonn (Environmental Justice), Costa Rica & Bogotá'}
            </div>
          </button>

          {/* BUTTON 3: [03. COMMUNICATIONS, MEDIA & ARTS] + DEEP DIVE SABER MÁS */}
          <div className="relative group w-full -rotate-1.5 -translate-x-1 hover:rotate-0 hover:translate-x-0 transition-transform">
            <button
              onClick={onSelectCommsArts}
              className="w-full text-left bg-[#ffedd5] hover:bg-[#f97316] hover:text-white text-black px-3 py-1 sm:py-1.5 border-3 border-black shadow-[4px_4px_0px_#000000] hover:scale-[1.02] hover:z-30 active:scale-95 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                  <Palette className="w-3.5 h-3.5 text-black group-hover:text-white" />
                  <span>{currentLang === 'es' ? '[ 03. COMUNICACIONES, MEDIOS & ARTE ]' : '[ 03. COMMUNICATIONS, MEDIA & ARTS ]'}</span>
                </span>
                <div className="flex items-center space-x-1.5">
                  {onOpenArtDirector && (
                    <span 
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenArtDirector();
                      }}
                      className="bg-black hover:bg-yellow-400 text-yellow-300 hover:text-black font-mono font-black text-[8px] sm:text-[9px] px-1.5 py-0.5 border border-white/50 uppercase transition-all shadow-[1px_1px_0px_#000]"
                      title={currentLang === 'es' ? 'Abrir backstage y memoria de Rap Beauchef y Cuarentena Rap' : 'Open backstage & archives for Rap Beauchef and Cuarentena Rap'}
                    >
                      {currentLang === 'es' ? '⚡ SABER MÁS // RAP' : '⚡ DEEP DIVE // RAP'}
                    </span>
                  )}
                  <span className="bg-black text-white font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase">
                    {currentLang === 'es' ? 'PLANETA 3D' : '3D GLOBE'}
                  </span>
                </div>
              </div>
              <div className="text-[9px] sm:text-[9.5px] font-mono font-bold text-neutral-800 group-hover:text-white tracking-tight mt-0.5">
                {currentLang === 'es'
                  ? 'Primera Línea Prensa (+700k), Brigada Paulina Aguirre, Rap Beauchef y Cuarentena Rap'
                  : 'Primera Línea Prensa (+700k), Paulina Aguirre Brigade, Rap Beauchef & Cuarentena Rap'}
              </div>
            </button>
          </div>

          {/* BUTTON 4: [04. GRASSROOTS AND COMMUNITIES] */}
          <button
            onClick={onSelectGrassroots}
            className="group relative w-full text-left bg-[#d1fae5] hover:bg-[#10b981] hover:text-white text-black px-3 py-1 sm:py-1.5 border-3 border-black shadow-[4px_4px_0px_#000000] rotate-2 translate-x-2 hover:rotate-0 hover:translate-x-0 hover:scale-[1.02] hover:z-30 active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                <Users className="w-3.5 h-3.5 text-black group-hover:text-white" />
                <span>{currentLang === 'es' ? '[ 04. COMUNIDADES & TERRITORIOS ]' : '[ 04. GRASSROOTS & COMMUNITIES ]'}</span>
              </span>
              <span className="bg-black text-white font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase">
                {currentLang === 'es' ? 'PLANETA 3D' : '3D GLOBE'}
              </span>
            </div>
            <div className="text-[9px] sm:text-[9.5px] font-mono font-bold text-neutral-800 group-hover:text-white tracking-tight mt-0.5">
              {currentLang === 'es'
                ? 'Campaña Apruebo Rural (80+ Asambleas), Red Maule Sur, Radio Cristalina y Defensa APR'
                : 'Apruebo Rural Campaign (80+ Assemblies), Red Maule Sur, Radio Cristalina & APR Defense'}
            </div>
          </button>

          {/* BUTTON 5: [05. PROJECTS & INNOVATION] */}
          <button
            onClick={() => setIsProjectsModalOpen(true)}
            className="group relative w-full text-left bg-[#dc2626] hover:bg-[#b91c1c] text-white px-3 py-1 sm:py-1.5 border-3 border-black shadow-[4px_4px_0px_#000000] -rotate-1 -translate-x-2.5 hover:rotate-0 hover:translate-x-0 hover:scale-[1.02] hover:z-30 active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span>{currentLang === 'es' ? '[ 05. PROYECTOS & INNOVACIÓN ]' : '[ 05. PROJECTS & INNOVATION ]'}</span>
              </span>
              <span className="bg-yellow-400 text-black font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase">
                {currentLang === 'es' ? '8 INICIATIVAS' : '8 VENTURES'}
              </span>
            </div>
            <div className="text-[9px] sm:text-[9.5px] font-mono font-bold text-red-100 group-hover:text-white tracking-tight mt-0.5">
              {currentLang === 'es'
                ? 'Wetland Monitor, Agrotech, Bioacústica, EPAC, Novela Gráfica y Repositorios GitHub'
                : 'Wetland Monitor, Agrotech, Bioacoustics, EPAC, Graphic Novel & GitHub Repositories'}
            </div>
          </button>

          {/* BUTTON 6: [06. PUBLICATIONS & PRESS] */}
          {onOpenPublications && (
            <button
              onClick={onOpenPublications}
              className="group relative w-full text-left bg-[#fef08a] hover:bg-white text-black px-3 py-1 sm:py-1.5 border-3 border-black shadow-[4px_4px_0px_#000000] rotate-1 translate-x-2 hover:rotate-0 hover:translate-x-0 hover:scale-[1.02] hover:z-30 active:scale-95 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-black" />
                  <span>{currentLang === 'es' ? '[ 06. PUBLICACIONES & PRENSA INVESTIGATIVA ]' : '[ 06. PUBLICATIONS & INVESTIGATIVE PRESS ]'}</span>
                </span>
                <span className="bg-red-600 text-white font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase">
                  {currentLang === 'es' ? 'EPN • OLCA • PRENSA' : 'EPN • OLCA • PRESS'}
                </span>
              </div>
              <div className="text-[9px] sm:text-[9.5px] font-mono font-bold text-neutral-800 tracking-tight mt-0.5">
                {currentLang === 'es'
                  ? 'Informe Biomasa EPN 2024, Tetralogía OLCA, Dirk Kock-Rohwer (Alemania) y Medios'
                  : 'EPN 2024 Biomass Report, OLCA Essays, Dirk Kock-Rohwer (Germany) & Press Releases'}
              </div>
            </button>
          )}

          {/* BUTTON 7: [07. SKILLS] */}
          {onOpenSkills && (
            <button
              onClick={onOpenSkills}
              className="group relative w-full text-left bg-[#06b6d4] hover:bg-[#22d3ee] text-black px-3 py-1 sm:py-1.5 border-3 border-black shadow-[4px_4px_0px_#000000] -rotate-1.5 -translate-x-1.5 hover:rotate-0 hover:translate-x-0 hover:scale-[1.02] hover:z-30 active:scale-95 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                  <Terminal className="w-3.5 h-3.5 text-black" />
                  <span>{currentLang === 'es' ? '[ 07. FICHA TÉCNICA & HABILIDADES ]' : '[ 07. SKILLS & TECHNICAL TOOLKIT ]'}</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-[9px] sm:text-[9.5px] font-mono font-bold text-neutral-900 tracking-tight mt-0.5">
                {currentLang === 'es'
                  ? 'Python, R, QGIS, Teledetección, ERT, Gemelos Digitales y Dirección de Campañas'
                  : 'Python, R, QGIS, Remote Sensing, ERT, Digital Twins & Campaign Direction'}
              </div>
            </button>
          )}

          {/* BUTTON 8: [08. ACADEMIC TITLES & DEGREES] */}
          {onOpenTitles && (
            <button
              onClick={onOpenTitles}
              className="group relative w-full text-left bg-[#c7d2fe] hover:bg-white text-black px-3 py-1 sm:py-1.5 border-3 border-black shadow-[4px_4px_0px_#000000] rotate-1.5 translate-x-1.5 hover:rotate-0 hover:translate-x-0 hover:scale-[1.02] hover:z-30 active:scale-95 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-900" />
                  <span>{currentLang === 'es' ? '[ 08. TÍTULOS ACADÉMICOS & GRADOS ]' : '[ 08. ACADEMIC TITLES & DEGREES ]'}</span>
                </span>
                <span className="bg-indigo-900 text-white font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase">
                  {currentLang === 'es' ? 'KIEL • POZNAŃ • U. DE CHILE' : 'KIEL • POZNAŃ • U. OF CHILE'}
                </span>
              </div>
              <div className="text-[9px] sm:text-[9.5px] font-mono font-bold text-neutral-800 tracking-tight mt-0.5">
                {currentLang === 'es'
                  ? 'Dual M.Sc. Alemania/Polonia, Geofísica U. de Chile, Davos WSL, IOER & Cartas PI'
                  : 'Dual M.Sc. Germany/Poland, Geophysics U. of Chile, Davos WSL, IOER & PI Endorsements'}
              </div>
            </button>
          )}

          {/* BUTTON 9: [09. CV] */}
          <a
            href={resolveAsset('/Daniel_Santander_CV.pdf')}
            download="Daniel_Santander_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full text-left bg-[#22c55e] hover:bg-[#16a34a] text-black hover:text-white px-3 py-1 sm:py-1.5 border-3 border-black shadow-[4px_4px_0px_#000000] -rotate-2 -translate-x-2 hover:rotate-0 hover:translate-x-0 hover:scale-[1.02] hover:z-30 active:scale-95 transition-all flex flex-col cursor-pointer"
            title={currentLang === 'es' ? 'Descargar Currículum Vitae oficial (PDF)' : 'Download official Curriculum Vitae (PDF)'}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                <Download className="w-3.5 h-3.5 text-black group-hover:text-white" />
                <span>{currentLang === 'es' ? '[ 09. CURRÍCULUM VITAE (PDF) ]' : '[ 09. CURRICULUM VITAE (PDF) ]'}</span>
              </span>
              <span className="bg-black text-white font-mono font-black text-[9px] px-1.5 py-0.2 border border-white uppercase">
                {currentLang === 'es' ? 'DESCARGAR' : 'DOWNLOAD'}
              </span>
            </div>
            <div className="text-[9px] sm:text-[9.5px] font-mono font-bold text-neutral-900 group-hover:text-neutral-100 tracking-tight mt-0.5">
              {currentLang === 'es'
                ? 'Descarga directa del CV oficial 2026 en formato PDF'
                : 'Direct download of official 2026 Curriculum Vitae in PDF format'}
            </div>
          </a>

          {/* BUTTON 10: [10. ACADEMIC DOSSIER // PAPER ARCHIVE] */}
          <button
            onClick={onSelectScienceDossier}
            className="group relative w-full text-left bg-[#ede5d6] hover:bg-white text-[#2c2620] px-3 py-1 sm:py-1.5 border-3 border-black shadow-[4px_4px_0px_#000000] rotate-1.5 translate-x-2 hover:rotate-0 hover:translate-x-0 hover:scale-[1.02] hover:z-30 active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                <FileText className="w-3.5 h-3.5 text-[#7f3419]" />
                <span>{currentLang === 'es' ? '[ 10. EXPEDIENTE CIENTÍFICO EN PAPEL ]' : '[ 10. ACADEMIC DOSSIER // PAPER ARCHIVE ]'}</span>
              </span>
              <span className="bg-black text-[#ede5d6] font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase">
                {currentLang === 'es' ? 'ARCHIVO PAPEL' : 'PAPER ARCHIVE'}
              </span>
            </div>
            <div className="text-[9px] sm:text-[9.5px] font-mono font-bold text-neutral-700 tracking-tight mt-0.5">
              {currentLang === 'es'
                ? 'Expediente Académico y Científico en Papel • 8 Láminas Curriculares y Avales'
                : 'Official Academic Paper Dossier • 8 Curricular Plates, Certifications & Endorsements'}
            </div>
          </button>

          {/* BUTTON 11: [11. HIRE ME // WORK TOGETHER] */}
          {onOpenHireMe && (
            <button
              onClick={onOpenHireMe}
              className="group relative w-full text-left bg-[#fbbf24] hover:bg-white text-black px-3 py-1 sm:py-1.5 border-3 border-black shadow-[4px_4px_0px_#000000] -rotate-1 translate-x-0 hover:rotate-0 hover:scale-[1.02] hover:z-30 active:scale-95 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-black" />
                  <span>{currentLang === 'es' ? '[ 11. CONTRÁTAME // TRABAJEMOS JUNTOS ]' : '[ 11. HIRE ME // WORK TOGETHER ]'}</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-[9px] sm:text-[9.5px] font-mono font-bold text-neutral-800 tracking-tight mt-0.5">
                {currentLang === 'es'
                  ? 'Consultoría Ambiental, Contratos de Investigación, Ponencias y Dirección'
                  : 'Environmental Consulting, Research Contracts, Speaking & Campaign Leadership'}
              </div>
            </button>
          )}

        </div>
      </main>

      {/* 4. FOOTER: BARCODE & CONTROLLER PROMPTS */}
      <footer className="relative z-20 w-full px-4 sm:px-10 py-1.5 bg-black/90 border-t border-white/20 flex flex-wrap items-center justify-between gap-2 text-[9.5px] font-mono text-neutral-300 shrink-0">
        <div className="flex items-center space-x-3">
          <span className="bg-[#facc15] text-black px-1.5 py-0.2 font-black border border-black shadow-[1px_1px_0px_#ffffff]">
            A
          </span>
          <span className="font-bold text-white uppercase">
            {currentLang === 'es' ? 'SELECCIONAR SECTOR // NAVEGACIÓN ACTIVA' : 'SELECT CATEGORY // ACTIVE NAVIGATION'}
          </span>
          <span className="opacity-40">•</span>
          <span className="opacity-80">
            {currentLang === 'es' ? '8 PAÍSES REGISTRADOS' : '8 DOCUMENTED COUNTRIES'}
          </span>
        </div>

        {/* Barcode */}
        <div className="flex items-center space-x-2">
          <span>{currentLang === 'es' ? 'EXPEDIENTE N° 2026-DSU' : 'DOSSIER NO. 2026-DSU'}</span>
          <span className="font-mono font-black tracking-tight text-white">
            ||| | ||||| || |||||| | |||
          </span>
        </div>
      </footer>

      {/* Projects Modal */}
      <ProjectsModal
        isOpen={isProjectsModalOpen}
        onClose={() => setIsProjectsModalOpen(false)}
        currentLang={currentLang}
      />

    </div>
  );
};
