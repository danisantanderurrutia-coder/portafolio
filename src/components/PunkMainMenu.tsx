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
  Users
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';
import { ProjectsModal } from './ProjectsModal';
import { TopocatchmentLogo } from './TopocatchmentLogo';

interface PunkMainMenuProps {
  currentLang: Language;
  onToggleLanguage: () => void;
  onSelectSummits: () => void;
  onSelectCommsArts: () => void;
  onSelectGrassroots: () => void;
  onSelectScience: () => void;
  onOpenHireMe?: () => void;
  onOpenSkills?: () => void;
}

export const PunkMainMenu: React.FC<PunkMainMenuProps> = ({
  currentLang,
  onToggleLanguage,
  onSelectSummits,
  onSelectCommsArts,
  onSelectGrassroots,
  onSelectScience,
  onOpenHireMe,
  onOpenSkills
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30 pointer-events-none z-0" />

      {/* 2. TOP HEADER: CLEAN (LOGO + CV-SIZED PHOTO + NAME/TITLE + LANGUAGE SWITCH) */}
      <header className="relative z-20 w-full px-4 sm:px-8 pt-3 pb-1 flex items-center justify-between">
        
        {/* Profile Card & Title Stencil Box */}
        <div className="flex items-center space-x-3">
          
          {/* Topocatchment Brand Emblem */}
          <div className="shrink-0 -rotate-2 hover:rotate-0 transition-transform cursor-pointer" title="Topocatchment Brandmark">
            <TopocatchmentLogo variant="badge" className="w-10 h-10 sm:w-11 sm:h-11 shadow-[3px_3px_0px_#facc15]" />
          </div>

          {/* Daniel Santander Real Portrait Badge (Tamaño Curriculum / Pasaporte) */}
          <div className="relative shrink-0 group">
            <div className="w-10 h-12 sm:w-11 sm:h-13 rounded-lg bg-black p-0.5 border-2 border-white shadow-[3px_3px_0px_#facc15] overflow-hidden -rotate-1 group-hover:rotate-0 transition-transform">
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
            <div className="bg-white text-black px-2.5 sm:px-3 py-0.5 border-2 border-black shadow-[2px_2px_0px_#facc15] -rotate-1 inline-block self-start">
              <h1 className="font-mono font-black text-sm sm:text-lg md:text-xl tracking-tighter uppercase leading-none">
                [DANIEL SANTANDER]
              </h1>
            </div>
            <div className="mt-0.5 text-[9px] sm:text-[11px] font-mono font-bold tracking-wider text-amber-400 uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
              {currentLang === 'es' 
                ? 'GEOFÍSICA DE CUENCAS • COMUNICACIONES • CUMBRES'
                : 'CATCHMENT HYDROGEOPHYSICS • COMMUNICATIONS • SUMMITS'}
            </div>
            <div className="text-[8.5px] font-mono text-neutral-300 opacity-80 hidden sm:block">
              {currentLang === 'es'
                ? 'Dual M.Sc. CAU Kiel & Poznań • U. de Chile • Vocero y Expositor (8 Países)'
                : 'Dual M.Sc. CAU Kiel & Poznań • U. de Chile • Speaker & Modeler (8 Countries)'}
            </div>
          </div>
        </div>

        {/* Top Right: ONLY the Language Switcher (No scattered buttons) */}
        <div className="flex items-center">
          <button
            onClick={onToggleLanguage}
            className="px-2.5 sm:px-3 py-1 bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000000] active:scale-95 transition-all flex items-center space-x-1.5 cursor-pointer"
            title="Cambiar idioma // Switch Language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? 'ES' : 'EN'}</span>
          </button>
        </div>
      </header>

      {/* 3. MAIN MENU BUTTONS: PERFECTLY CENTERED IN THE SCREEN */}
      <main className="relative z-20 flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center my-auto">
        
        {/* Buttons Stack Container (Centered, crisp, balanced spacing) */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl flex flex-col space-y-1.5 sm:space-y-2">
          
          {/* BUTTON 1: [01. SUMMITS & GLOBAL POLICY] (White Stencil Tape -> Opens Planet 3D) */}
          <button
            onClick={onSelectSummits}
            className="group relative w-full text-left bg-white hover:bg-[#facc15] text-black px-3.5 py-1.5 sm:py-2 border-3 border-black shadow-[3px_3px_0px_#000000] -rotate-0.5 hover:rotate-0 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                <Globe className="w-3.5 h-3.5 text-black" />
                <span>{currentLang === 'es' ? '[ 01. SUMMITS & GLOBAL POLICY ]' : '[ 01. SUMMITS & GLOBAL POLICY ]'}</span>
              </span>
              <span className="bg-black text-[#facc15] font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase">
                {currentLang === 'es' ? 'PLANETA 3D' : '3D GLOBE'}
              </span>
            </div>
            <div className="text-[10px] font-mono font-bold text-neutral-700 group-hover:text-neutral-900 tracking-tight mt-0.5">
              {currentLang === 'es'
                ? 'Oslo (Decrecimiento), Bonn (Justicia Ambiental), Costa Rica y Bogotá'
                : 'Oslo (Degrowth), Bonn (Environmental Justice), Costa Rica & Bogotá'}
            </div>
          </button>

          {/* BUTTON 2: [02. COMMUNICATIONS, MEDIA & ARTS] (Warm Amber / Orange Tape -> Opens Planet 3D) */}
          <button
            onClick={onSelectCommsArts}
            className="group relative w-full text-left bg-[#ffedd5] hover:bg-[#f97316] hover:text-white text-black px-3.5 py-1.5 sm:py-2 border-3 border-black shadow-[3px_3px_0px_#000000] rotate-0.5 hover:rotate-0 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                <Palette className="w-3.5 h-3.5 text-black group-hover:text-white" />
                <span>{currentLang === 'es' ? '[ 02. COMMUNICATIONS, MEDIA & ARTS ]' : '[ 02. COMMUNICATIONS, MEDIA & ARTS ]'}</span>
              </span>
              <span className="bg-black text-white font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase">
                {currentLang === 'es' ? 'PLANETA 3D' : '3D GLOBE'}
              </span>
            </div>
            <div className="text-[10px] font-mono font-bold text-neutral-800 group-hover:text-white tracking-tight mt-0.5">
              {currentLang === 'es'
                ? 'Primera Línea Prensa (+700k), Brigada Paulina Aguirre, Rap Beauchef y Cuarentena Rap'
                : 'Primera Línea Prensa (+700k), Paulina Aguirre Brigade, Rap Beauchef & Cuarentena Rap'}
            </div>
          </button>

          {/* BUTTON 3: [03. GRASSROOTS AND COMMUNITIES] (Emerald / Mint Tape -> Opens Planet 3D) */}
          <button
            onClick={onSelectGrassroots}
            className="group relative w-full text-left bg-[#d1fae5] hover:bg-[#10b981] hover:text-white text-black px-3.5 py-1.5 sm:py-2 border-3 border-black shadow-[3px_3px_0px_#000000] -rotate-0.5 hover:rotate-0 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                <Users className="w-3.5 h-3.5 text-black group-hover:text-white" />
                <span>{currentLang === 'es' ? '[ 03. GRASSROOTS AND COMMUNITIES ]' : '[ 03. GRASSROOTS AND COMMUNITIES ]'}</span>
              </span>
              <span className="bg-black text-white font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase">
                {currentLang === 'es' ? 'PLANETA 3D' : '3D GLOBE'}
              </span>
            </div>
            <div className="text-[10px] font-mono font-bold text-neutral-800 group-hover:text-white tracking-tight mt-0.5">
              {currentLang === 'es'
                ? 'Campaña Apruebo Rural (80+ Asambleas), Red Maule Sur, Radio Cristalina y Defensa APR'
                : 'Apruebo Rural Campaign (80+ Assemblies), Red Maule Sur, Radio Cristalina & APR Defense'}
            </div>
          </button>

          {/* BUTTON 4: [04. PROJECTS & INNOVATION] (Red Tape, Zero mention of Caballero Jaguar) */}
          <button
            onClick={() => setIsProjectsModalOpen(true)}
            className="group relative w-full text-left bg-[#dc2626] hover:bg-[#b91c1c] text-white px-3.5 py-1.5 sm:py-2 border-3 border-black shadow-[3px_3px_0px_#000000] rotate-0.5 hover:rotate-0 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span>{currentLang === 'es' ? '[ 04. PROJECTS & INNOVATION ]' : '[ 04. PROJECTS & INNOVATION ]'}</span>
              </span>
              <span className="bg-yellow-400 text-black font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase">
                8 INICIATIVAS
              </span>
            </div>
            <div className="text-[10px] font-mono font-bold text-red-100 group-hover:text-white tracking-tight mt-0.5">
              {currentLang === 'es'
                ? 'Wetland Monitor, Agrotech, Bioacústica, EPAC, Cómic de Piratas y Repositorios GitHub'
                : 'Wetland Monitor, Agrotech, Bioacoustics, EPAC, Pirate Comic & GitHub Repositories'}
            </div>
          </button>

          {/* BUTTON 5: [05. SKILLS] (Distinct High-Contrast Neon Cyan Tape) */}
          {onOpenSkills && (
            <button
              onClick={onOpenSkills}
              className="group relative w-full text-left bg-[#06b6d4] hover:bg-[#22d3ee] text-black px-3.5 py-1.5 sm:py-2 border-3 border-black shadow-[3px_3px_0px_#000000] -rotate-0.5 hover:rotate-0 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                  <Terminal className="w-3.5 h-3.5 text-black" />
                  <span>{currentLang === 'es' ? '[ 05. SKILLS & TECHNICAL TOOLKIT ]' : '[ 05. SKILLS & TECHNICAL TOOLKIT ]'}</span>
                </span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-[10px] font-mono font-bold text-neutral-900 tracking-tight mt-0.5">
                {currentLang === 'es'
                  ? 'Python, R, QGIS, Teledetección, ERT, Gemelos Digitales y Dirección de Campañas'
                  : 'Python, R, QGIS, Remote Sensing, ERT, Digital Twins & Campaign Direction'}
              </div>
            </button>
          )}

          {/* BUTTON 6: [06. CV] (Bright Green Direct Download Tape) */}
          <a
            href={resolveAsset('/Daniel_Santander_CV.pdf')}
            download="Daniel_Santander_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full text-left bg-[#22c55e] hover:bg-[#16a34a] text-black hover:text-white px-3.5 py-1.5 sm:py-2 border-3 border-black shadow-[3px_3px_0px_#000000] rotate-0.5 hover:rotate-0 hover:scale-[1.02] active:scale-95 transition-all flex flex-col cursor-pointer"
            title="Descargar Currículum Vitae oficial (PDF)"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                <Download className="w-3.5 h-3.5 text-black group-hover:text-white" />
                <span>{currentLang === 'es' ? '[ 06. CURRICULUM VITAE (PDF) ]' : '[ 06. CURRICULUM VITAE (PDF) ]'}</span>
              </span>
              <span className="bg-black text-white font-mono font-black text-[9px] px-1.5 py-0.2 border border-white uppercase">
                DOWNLOAD
              </span>
            </div>
            <div className="text-[10px] font-mono font-bold text-neutral-900 group-hover:text-neutral-100 tracking-tight mt-0.5">
              {currentLang === 'es'
                ? 'Descarga directa del CV oficial 2026 en formato PDF'
                : 'Direct download of official 2026 Curriculum Vitae in PDF format'}
            </div>
          </a>

          {/* BUTTON 7: [07. SCIENCE & ACADEMY // DOSSIER CIENTÍFICO] (Aparte, justo después del curriculum!) */}
          <button
            onClick={onSelectScience}
            className="group relative w-full text-left bg-[#facc15] hover:bg-white text-black px-3.5 py-1.5 sm:py-2 border-3 border-black shadow-[3px_3px_0px_#000000] -rotate-1 hover:rotate-0 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                <FileText className="w-3.5 h-3.5 text-black" />
                <span>{currentLang === 'es' ? '[ 07. SCIENCE & ACADEMY // DOSSIER CIENTÍFICO ]' : '[ 07. SCIENCE & ACADEMY // SCIENTIFIC DOSSIER ]'}</span>
              </span>
              <span className="bg-black text-[#facc15] font-mono font-black text-[9px] px-1.5 py-0.2 border border-black uppercase">
                {currentLang === 'es' ? 'ARCHIVO PAPEL' : 'PAPER ARCHIVE'}
              </span>
            </div>
            <div className="text-[10px] font-mono font-bold text-neutral-800 tracking-tight mt-0.5">
              {currentLang === 'es'
                ? 'Expediente Académico en Papel • Geofísica de Cuencas, CAU Kiel & AMU Poznań, U. de Chile'
                : 'Academic Paper Dossier • Catchment Hydrogeophysics, CAU Kiel & AMU Poznań, U. of Chile'}
            </div>
          </button>

          {/* BUTTON 8: [08. HIRE ME] (Gold / Amber Stencil Tape) */}
          {onOpenHireMe && (
            <button
              onClick={onOpenHireMe}
              className="group relative w-full text-left bg-[#fbbf24] hover:bg-white text-black px-3.5 py-1.5 sm:py-2 border-3 border-black shadow-[3px_3px_0px_#000000] rotate-0.5 hover:rotate-0 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-black" />
                  <span>{currentLang === 'es' ? '[ 08. HIRE ME // WORK TOGETHER ]' : '[ 08. HIRE ME // WORK TOGETHER ]'}</span>
                </span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-[10px] font-mono font-bold text-neutral-800 tracking-tight mt-0.5">
                {currentLang === 'es'
                  ? 'Consultoría Ambiental, Contratos de Investigación, Ponencias y Dirección'
                  : 'Environmental Consulting, Research Contracts, Speaking & Campaign Direction'}
              </div>
            </button>
          )}

        </div>
      </main>

      {/* 4. FOOTER: BARCODE & CONTROLLER PROMPTS */}
      <footer className="relative z-20 w-full px-4 sm:px-10 py-2 bg-black/90 border-t border-white/20 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-neutral-300">
        <div className="flex items-center space-x-3">
          <span className="bg-[#facc15] text-black px-1.5 py-0.2 font-black border border-black shadow-[1px_1px_0px_#ffffff]">
            A
          </span>
          <span className="font-bold text-white uppercase">
            {currentLang === 'es' ? 'SELECCIONAR SECTOR // NAVEGACIÓN ACTIVA' : 'SELECT CATEGORY // ACTIVE NAVIGATION'}
          </span>
          <span className="opacity-40">•</span>
          <span className="opacity-80">
            {currentLang === 'es' ? '8 PAÍSES REGISTRADOS' : '8 COUNTRIES DOCUMENTED'}
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
