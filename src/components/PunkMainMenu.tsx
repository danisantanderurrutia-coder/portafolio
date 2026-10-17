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
  MapPin,
  ExternalLink
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
      
      {/* 1. CINEMATIC BACKGROUND ARTWORK (HIGH-LATITUDE EXPEDITION ATMOSPHERE) */}
      <div 
        className="absolute inset-0 bg-cover bg-center lg:bg-right bg-no-repeat pointer-events-none z-0 opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: `url('${resolveAsset('/eco_noir_menu_bg.jpg')}')` }}
      />

      {/* Atmospheric Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#06080b] via-[#080b10]/80 to-[#07090d]/95 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-transparent to-transparent pointer-events-none z-0" />

      {/* 2. TOP HEADER BAR: EXPEDITION CREW IDENTITY & LANGUAGE SWITCH */}
      <header className="relative z-30 w-full px-4 sm:px-8 pt-3 pb-2 flex items-center justify-between shrink-0 border-b border-white/10 bg-black/60 backdrop-blur-md">
        
        {/* Profile Card & Identity Plaque */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          
          {/* Topocatchment Brandmark */}
          <div className="shrink-0 transition-transform hover:scale-105 cursor-pointer" title="Topocatchment Brandmark">
            <TopocatchmentLogo variant="badge" className="w-9 h-9 sm:w-11 sm:h-11 shadow-[2px_2px_0px_#06b6d4]" />
          </div>

          {/* Daniel Santander Real Portrait (Passport / Field ID) */}
          <div className="relative shrink-0 group">
            <div className="w-9 h-11 sm:w-10 sm:h-12 rounded-lg bg-black p-0.5 border-2 border-white/60 shadow-[2px_2px_0px_#000] overflow-hidden transition-transform group-hover:scale-105">
              <img 
                src={resolveAsset('/profile.jpg')} 
                alt="Daniel Santander Urrutia" 
                className="w-full h-full object-cover object-top filter contrast-105"
              />
            </div>
            {/* Active Status Beacon */}
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-black font-mono font-black text-[7px] px-1 py-0.2 rounded border border-black uppercase tracking-wider">
              {currentLang === 'es' ? 'ONLINE' : 'ONLINE'}
            </div>
          </div>

          {/* Name & Academic Scope */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <h1 className="font-mono font-black text-sm sm:text-base md:text-lg tracking-tight uppercase leading-none text-white">
                DANIEL SANTANDER URRUTIA
              </h1>
              <span className="hidden md:inline-block bg-[#06b6d4] text-black font-mono font-black text-[9px] px-1.5 py-0.2 rounded">
                DUAL M.SC. & ING.
              </span>
            </div>
            <div className="text-[9px] sm:text-[10px] font-mono text-cyan-300 font-semibold mt-0.5 flex items-center space-x-1.5">
              <span>{currentLang === 'es' ? 'GEOFÍSICA DE CUENCAS' : 'CATCHMENT HYDROGEOPHYSICS'}</span>
              <span className="text-neutral-500">•</span>
              <span>{currentLang === 'es' ? 'ESTRATEGIA DE COMUNICACIONES' : 'STRATEGIC COMMS'}</span>
              <span className="text-neutral-500">•</span>
              <span>{currentLang === 'es' ? 'I+D AMBIENTAL' : 'ENVIRONMENTAL R&D'}</span>
            </div>
          </div>
        </div>

        {/* Top Right: Global Coordinates & Language Toggle */}
        <div className="flex items-center space-x-3 font-mono">
          <div className="hidden lg:flex items-center space-x-1.5 text-[10px] text-neutral-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
            <MapPin className="w-3 h-3 text-red-400" />
            <span>BASE: SANTIAGO, CHILE (33°27′S 70°40′W)</span>
          </div>

          <button
            onClick={onToggleLanguage}
            className="px-2.5 sm:px-3 py-1 bg-white hover:bg-cyan-400 text-black font-mono font-black text-xs uppercase tracking-wider rounded border border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all flex items-center space-x-1.5 cursor-pointer"
            title={currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? 'ES' : 'EN'}</span>
            <span className="opacity-40">/</span>
            <span className="opacity-60">{currentLang === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </div>
      </header>

      {/* 3. MAIN STAGE: THE GLOBAL EXPEDITION MILESTONE SIGNPOST */}
      <main className="relative z-20 flex-1 w-full max-w-4xl mx-auto px-3 sm:px-6 flex flex-col items-center justify-center my-auto overflow-y-auto no-scrollbar py-3">
        
        {/* Milestone Compass Mast Header */}
        <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-1 bg-black/60 px-3 py-1 rounded-full border border-white/10">
          <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          <span>{currentLang === 'es' ? 'CRUCE DE RUTAS & ÁREAS DEL EXPEDIENTE' : 'CAREER MILESTONE CROSSROADS // ROUTE DIRECTORY'}</span>
        </div>

        {/* The Central Signpost Mast & Directional Arrow Array */}
        <div className="relative w-full max-w-xl sm:max-w-2xl flex flex-col items-center my-auto">
          
          {/* Vertical Central Pole (Titanium Mast) */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-3 sm:w-3.5 bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-900 border-x border-neutral-700 shadow-[0_0_12px_rgba(0,0,0,0.9)] z-0 rounded-sm" />

          {/* Stack of 11 Directional Arrow Signposts */}
          <div className="relative z-10 w-full flex flex-col space-y-1 sm:space-y-1.5 py-1">
            
            {/* 1. SIGN 01: SCIENCE & ACADEMY (Points Right ➔) */}
            <div className="relative flex justify-end w-full pl-6 sm:pl-10">
              <button
                onClick={onSelectSciencePlanet}
                className="group relative w-full sm:w-[96%] text-left bg-[#101726] hover:bg-[#16233b] text-white py-1.5 sm:py-2 pl-4 pr-6 sm:pr-8 border border-cyan-500/40 hover:border-cyan-400 rounded-l-xl rounded-r-sm shadow-[3px_3px_0px_rgba(0,0,0,0.8)] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all cursor-pointer flex flex-col justify-center"
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%)'
                }}
              >
                {/* Central Mounting Rivet */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner z-20 flex items-center justify-center">
                  <div className="w-1.5 h-0.5 bg-neutral-700" />
                </div>

                <div className="flex items-center justify-between pr-2">
                  <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5 text-cyan-300 group-hover:text-cyan-200">
                    <Microscope className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{currentLang === 'es' ? '01. CIENCIA & ACADEMIA' : '01. SCIENCE & ACADEMY'}</span>
                  </span>
                  
                  {/* Kilometer Distance Badge */}
                  <span className="font-mono font-bold text-[9px] sm:text-[10px] bg-cyan-500/20 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-black px-2 py-0.5 rounded border border-cyan-500/30 uppercase flex items-center space-x-1">
                    <span>12,480 KM // KIEL & POZNAŃ</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

                <div className="text-[8.5px] sm:text-[9.5px] font-sans text-neutral-300 group-hover:text-white truncate mt-0.5">
                  {currentLang === 'es'
                    ? 'Doble Máster Europeo • Dinámica de Suelos, Turberas GEI, Lauwersmeer & Hidrogeofísica'
                    : 'Double European M.Sc. • Soil Dynamics, Peatland GHG, Lauwersmeer SLR & Hydrogeophysics'}
                </div>
              </button>
            </div>

            {/* 2. SIGN 02: SUMMITS & GLOBAL POLICY (Points Left ⬅) */}
            <div className="relative flex justify-start w-full pr-6 sm:pr-10">
              <button
                onClick={onSelectSummits}
                className="group relative w-full sm:w-[96%] text-left bg-[#1d160e] hover:bg-[#2a2013] text-white py-1.5 sm:py-2 pl-6 sm:pl-8 pr-4 border border-amber-500/40 hover:border-amber-400 rounded-r-xl rounded-l-sm shadow-[3px_3px_0px_rgba(0,0,0,0.8)] hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all cursor-pointer flex flex-col justify-center"
                style={{
                  clipPath: 'polygon(16px 0%, 100% 0%, 100% 100%, 16px 100%, 0% 50%)'
                }}
              >
                {/* Central Mounting Rivet */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner z-20 flex items-center justify-center">
                  <div className="w-1.5 h-0.5 bg-neutral-700" />
                </div>

                <div className="flex items-center justify-between pl-2">
                  {/* Kilometer Distance Badge */}
                  <span className="font-mono font-bold text-[9px] sm:text-[10px] bg-amber-500/20 text-amber-300 group-hover:bg-amber-400 group-hover:text-black px-2 py-0.5 rounded border border-amber-500/30 uppercase flex items-center space-x-1">
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    <span>⬅ 12,980 KM // OSLO & BONN</span>
                  </span>

                  <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5 text-amber-300 group-hover:text-amber-200">
                    <Globe className="w-3.5 h-3.5 text-amber-400" />
                    <span>{currentLang === 'es' ? '02. CUMBRES & POLÍTICA GLOBAL' : '02. SUMMITS & GLOBAL POLICY'}</span>
                  </span>
                </div>

                <div className="text-[8.5px] sm:text-[9.5px] font-sans text-neutral-300 group-hover:text-white truncate mt-0.5 pl-2">
                  {currentLang === 'es'
                    ? 'Conferencias de Decrecimiento, Justicia Ambiental en Europa y Vocería Parlamentaria (8 Países)'
                    : 'Degrowth Conferences, European Environmental Justice & Parliamentary Spokesperson (8 Countries)'}
                </div>
              </button>
            </div>

            {/* 3. SIGN 03: COMMUNICATIONS, MEDIA & ARTS (Points Right ➔) */}
            <div className="relative flex justify-end w-full pl-6 sm:pl-10">
              <button
                onClick={onSelectCommsArts}
                className="group relative w-full sm:w-[96%] text-left bg-[#20140e] hover:bg-[#2e1d13] text-white py-1.5 sm:py-2 pl-4 pr-6 sm:pr-8 border border-orange-500/40 hover:border-orange-400 rounded-l-xl rounded-r-sm shadow-[3px_3px_0px_rgba(0,0,0,0.8)] hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all cursor-pointer flex flex-col justify-center"
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%)'
                }}
              >
                {/* Central Mounting Rivet */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner z-20 flex items-center justify-center">
                  <div className="w-1.5 h-0.5 bg-neutral-700" />
                </div>

                <div className="flex items-center justify-between pr-2">
                  <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5 text-orange-300 group-hover:text-orange-200">
                    <Palette className="w-3.5 h-3.5 text-orange-400" />
                    <span>{currentLang === 'es' ? '03. COMUNICACIONES & ARTES' : '03. COMMUNICATIONS & ARTS'}</span>
                  </span>

                  <div className="flex items-center space-x-1.5">
                    {onOpenArtDirector && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenArtDirector();
                        }}
                        className="bg-orange-500 hover:bg-yellow-400 text-black font-mono font-black text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded transition-all shadow-sm"
                        title={currentLang === 'es' ? 'Abrir archivo de Rap Beauchef y Cuarentena Rap' : 'Open archives for Rap Beauchef and Cuarentena Rap'}
                      >
                        ⚡ RAP ARCHIVE
                      </span>
                    )}
                    <span className="font-mono font-bold text-[9px] sm:text-[10px] bg-orange-500/20 text-orange-300 group-hover:bg-orange-400 group-hover:text-black px-2 py-0.5 rounded border border-orange-500/30 uppercase flex items-center space-x-1">
                      <span>0 KM // SANTIAGO & LATAM</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

                <div className="text-[8.5px] sm:text-[9.5px] font-sans text-neutral-300 group-hover:text-white truncate mt-0.5">
                  {currentLang === 'es'
                    ? 'Primera Línea Prensa (+700k Audiencia), Brigada Paulina Aguirre & Producción de Eventos 4K'
                    : 'Primera Línea Prensa (+700k Reach), Paulina Aguirre Brigade & 4K Event Production'}
                </div>
              </button>
            </div>

            {/* 4. SIGN 04: GRASSROOTS & COMMUNITIES (Points Left ⬅) */}
            <div className="relative flex justify-start w-full pr-6 sm:pr-10">
              <button
                onClick={onSelectGrassroots}
                className="group relative w-full sm:w-[96%] text-left bg-[#0c1c14] hover:bg-[#132a1e] text-white py-1.5 sm:py-2 pl-6 sm:pl-8 pr-4 border border-emerald-500/40 hover:border-emerald-400 rounded-r-xl rounded-l-sm shadow-[3px_3px_0px_rgba(0,0,0,0.8)] hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all cursor-pointer flex flex-col justify-center"
                style={{
                  clipPath: 'polygon(16px 0%, 100% 0%, 100% 100%, 16px 100%, 0% 50%)'
                }}
              >
                {/* Central Mounting Rivet */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner z-20 flex items-center justify-center">
                  <div className="w-1.5 h-0.5 bg-neutral-700" />
                </div>

                <div className="flex items-center justify-between pl-2">
                  <span className="font-mono font-bold text-[9px] sm:text-[10px] bg-emerald-500/20 text-emerald-300 group-hover:bg-emerald-400 group-hover:text-black px-2 py-0.5 rounded border border-emerald-500/30 uppercase flex items-center space-x-1">
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    <span>⬅ 320 KM // MAULE SUR</span>
                  </span>

                  <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5 text-emerald-300 group-hover:text-emerald-200">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{currentLang === 'es' ? '04. COMUNIDADES & TERRITORIOS' : '04. GRASSROOTS & COMMUNITIES'}</span>
                  </span>
                </div>

                <div className="text-[8.5px] sm:text-[9.5px] font-sans text-neutral-300 group-hover:text-white truncate mt-0.5 pl-2">
                  {currentLang === 'es'
                    ? 'Campaña Apruebo Rural (80+ Asambleas), Radio Comunitaria, Defensa APR y Agua Campesina'
                    : 'Apruebo Rural Campaign (80+ Assemblies), Peasant Water Defense & Community Radio Syndication'}
                </div>
              </button>
            </div>

            {/* 5. SIGN 05: COMMERCIAL PROJECTS & R&D (Points Right ➔) */}
            <div className="relative flex justify-end w-full pl-6 sm:pl-10">
              <button
                onClick={() => setIsProjectsModalOpen(true)}
                className="group relative w-full sm:w-[96%] text-left bg-[#201015] hover:bg-[#30161f] text-white py-1.5 sm:py-2 pl-4 pr-6 sm:pr-8 border border-red-500/40 hover:border-red-400 rounded-l-xl rounded-r-sm shadow-[3px_3px_0px_rgba(0,0,0,0.8)] hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all cursor-pointer flex flex-col justify-center"
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%)'
                }}
              >
                {/* Central Mounting Rivet */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner z-20 flex items-center justify-center">
                  <div className="w-1.5 h-0.5 bg-neutral-700" />
                </div>

                <div className="flex items-center justify-between pr-2">
                  <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5 text-red-300 group-hover:text-red-200">
                    <Sparkles className="w-3.5 h-3.5 text-red-400" />
                    <span>{currentLang === 'es' ? '05. PROYECTOS & INNOVACIÓN COMERCIAL' : '05. PROJECTS & INNOVATION'}</span>
                  </span>

                  <span className="font-mono font-bold text-[9px] sm:text-[10px] bg-red-500/20 text-red-300 group-hover:bg-red-500 group-hover:text-white px-2 py-0.5 rounded border border-red-500/30 uppercase flex items-center space-x-1">
                    <span>R&D CORRIDOR // 8 VENTURES</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

                <div className="text-[8.5px] sm:text-[9.5px] font-sans text-neutral-300 group-hover:text-white truncate mt-0.5">
                  {currentLang === 'es'
                    ? 'AgriTwin Chile (Ahorro 35% Riego), Lauwersmeer SLR Engine, ReWild Forestal & Bioacústica Marina'
                    : 'AgriTwin Precision Agtech (-35% Water), Lauwersmeer SLR Model, ReWild Forestry & Bioacoustics'}
                </div>
              </button>
            </div>

            {/* 6. SIGN 06: PUBLICATIONS & PRESS (Points Left ⬅) */}
            {onOpenPublications && (
              <div className="relative flex justify-start w-full pr-6 sm:pr-10">
                <button
                  onClick={onOpenPublications}
                  className="group relative w-full sm:w-[96%] text-left bg-[#1d1d12] hover:bg-[#2b2b18] text-white py-1.5 sm:py-2 pl-6 sm:pl-8 pr-4 border border-yellow-500/40 hover:border-yellow-400 rounded-r-xl rounded-l-sm shadow-[3px_3px_0px_rgba(0,0,0,0.8)] hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all cursor-pointer flex flex-col justify-center"
                  style={{
                    clipPath: 'polygon(16px 0%, 100% 0%, 100% 100%, 16px 100%, 0% 50%)'
                  }}
                >
                  {/* Central Mounting Rivet */}
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner z-20 flex items-center justify-center">
                    <div className="w-1.5 h-0.5 bg-neutral-700" />
                  </div>

                  <div className="flex items-center justify-between pl-2">
                    <span className="font-mono font-bold text-[9px] sm:text-[10px] bg-yellow-500/20 text-yellow-300 group-hover:bg-yellow-400 group-hover:text-black px-2 py-0.5 rounded border border-yellow-500/30 uppercase flex items-center space-x-1">
                      <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                      <span>⬅ OPEN ACCESS // 6 RELEASES</span>
                    </span>

                    <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5 text-yellow-300 group-hover:text-yellow-200">
                      <BookOpen className="w-3.5 h-3.5 text-yellow-400" />
                      <span>{currentLang === 'es' ? '06. PUBLICACIONES & PRENSA' : '06. PUBLICATIONS & PRESS'}</span>
                    </span>
                  </div>

                  <div className="text-[8.5px] sm:text-[9.5px] font-sans text-neutral-300 group-hover:text-white truncate mt-0.5 pl-2">
                    {currentLang === 'es'
                      ? 'Informe Biomasa EPN 2024, Tetralogía OLCA, Dirk Kock-Rohwer (Alemania) y Artículos Investigativos'
                      : 'EPN 2024 Biomass Report, OLCA Philosophical Treatise, Dirk Kock-Rohwer & Investigative Articles'}
                  </div>
                </button>
              </div>
            )}

            {/* 7. SIGN 07: SKILLS & TECHNICAL CAPABILITIES (Points Right ➔) */}
            {onOpenSkills && (
              <div className="relative flex justify-end w-full pl-6 sm:pl-10">
                <button
                  onClick={onOpenSkills}
                  className="group relative w-full sm:w-[96%] text-left bg-[#0c1822] hover:bg-[#122433] text-white py-1.5 sm:py-2 pl-4 pr-6 sm:pr-8 border border-cyan-500/40 hover:border-cyan-400 rounded-l-xl rounded-r-sm shadow-[3px_3px_0px_rgba(0,0,0,0.8)] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all cursor-pointer flex flex-col justify-center"
                  style={{
                    clipPath: 'polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%)'
                  }}
                >
                  {/* Central Mounting Rivet */}
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner z-20 flex items-center justify-center">
                    <div className="w-1.5 h-0.5 bg-neutral-700" />
                  </div>

                  <div className="flex items-center justify-between pr-2">
                    <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5 text-cyan-300 group-hover:text-cyan-200">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{currentLang === 'es' ? '07. FICHA TÉCNICA & SERVICIOS' : '07. TECHNICAL SKILLS & SERVICES'}</span>
                    </span>

                    <span className="font-mono font-bold text-[9px] sm:text-[10px] bg-cyan-500/20 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-black px-2 py-0.5 rounded border border-cyan-500/30 uppercase flex items-center space-x-1">
                      <span>VERIFIED STACK & GEAR</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  <div className="text-[8.5px] sm:text-[9.5px] font-sans text-neutral-300 group-hover:text-white truncate mt-0.5">
                    {currentLang === 'es'
                      ? 'Python, R, QGIS, Earth Engine, ERT Syscal Pro, LI-COR Eddy Covariance & Idiomas (ES, EN, DE)'
                      : 'Python, R, QGIS, Earth Engine, ERT Syscal Pro, LI-COR Gas Analyzers & Working Languages'}
                  </div>
                </button>
              </div>
            )}

            {/* 8. SIGN 08: ACADEMIC TITLES & DEGREES (Points Left ⬅) */}
            {onOpenTitles && (
              <div className="relative flex justify-start w-full pr-6 sm:pr-10">
                <button
                  onClick={onOpenTitles}
                  className="group relative w-full sm:w-[96%] text-left bg-[#131526] hover:bg-[#1a1e36] text-white py-1.5 sm:py-2 pl-6 sm:pl-8 pr-4 border border-indigo-500/40 hover:border-indigo-400 rounded-r-xl rounded-l-sm shadow-[3px_3px_0px_rgba(0,0,0,0.8)] hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all cursor-pointer flex flex-col justify-center"
                  style={{
                    clipPath: 'polygon(16px 0%, 100% 0%, 100% 100%, 16px 100%, 0% 50%)'
                  }}
                >
                  {/* Central Mounting Rivet */}
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner z-20 flex items-center justify-center">
                    <div className="w-1.5 h-0.5 bg-neutral-700" />
                  </div>

                  <div className="flex items-center justify-between pl-2">
                    <span className="font-mono font-bold text-[9px] sm:text-[10px] bg-indigo-500/20 text-indigo-300 group-hover:bg-indigo-400 group-hover:text-black px-2 py-0.5 rounded border border-indigo-500/30 uppercase flex items-center space-x-1">
                      <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                      <span>⬅ 4 DEGREES // KIEL, AMU & UCH</span>
                    </span>

                    <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5 text-indigo-300 group-hover:text-indigo-200">
                      <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{currentLang === 'es' ? '08. TÍTULOS ACADÉMICOS' : '08. ACADEMIC DEGREES & TITLES'}</span>
                    </span>
                  </div>

                  <div className="text-[8.5px] sm:text-[9.5px] font-sans text-neutral-300 group-hover:text-white truncate mt-0.5 pl-2">
                    {currentLang === 'es'
                      ? 'Doble M.Sc. Alemania/Polonia, Geofísica U. de Chile, Certificaciones Davos WSL & Cartas de Recomendación'
                      : 'Dual M.Sc. Germany/Poland, Geophysics U. of Chile, Davos WSL Diplomas & Endorsement Letters'}
                  </div>
                </button>
              </div>
            )}

            {/* 9. SIGN 09: OFFICIAL ACADEMIC DOSSIER (Points Right ➔) */}
            <div className="relative flex justify-end w-full pl-6 sm:pl-10">
              <button
                onClick={onSelectScienceDossier}
                className="group relative w-full sm:w-[96%] text-left bg-[#1f1d18] hover:bg-[#2c2820] text-white py-1.5 sm:py-2 pl-4 pr-6 sm:pr-8 border border-[#d4b996]/40 hover:border-[#d4b996] rounded-l-xl rounded-r-sm shadow-[3px_3px_0px_rgba(0,0,0,0.8)] hover:shadow-[0_0_15px_rgba(212,185,150,0.4)] transition-all cursor-pointer flex flex-col justify-center"
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%)'
                }}
              >
                {/* Central Mounting Rivet */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner z-20 flex items-center justify-center">
                  <div className="w-1.5 h-0.5 bg-neutral-700" />
                </div>

                <div className="flex items-center justify-between pr-2">
                  <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5 text-[#ebd5ba] group-hover:text-white">
                    <FileText className="w-3.5 h-3.5 text-[#d4b996]" />
                    <span>{currentLang === 'es' ? '09. EXPEDIENTE CIENTÍFICO EN PAPEL' : '09. ACADEMIC PAPER DOSSIER'}</span>
                  </span>

                  <span className="font-mono font-bold text-[9px] sm:text-[10px] bg-[#d4b996]/20 text-[#ebd5ba] group-hover:bg-[#d4b996] group-hover:text-black px-2 py-0.5 rounded border border-[#d4b996]/30 uppercase flex items-center space-x-1">
                    <span>8 LÁMINAS // ARCHIVO PAPEL</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

                <div className="text-[8.5px] sm:text-[9.5px] font-sans text-neutral-300 group-hover:text-white truncate mt-0.5">
                  {currentLang === 'es'
                    ? 'Expediente Oficial de Investigación • Láminas Curriculares de Alta Resolución, Gráficos & Avales'
                    : 'Official Scientific Dossier • High-Resolution Curricular Plates, Field Data & Endorsements'}
                </div>
              </button>
            </div>

            {/* 10. SIGN 10: CURRICULUM VITAE PDF (Points Left ⬅) */}
            <div className="relative flex justify-start w-full pr-6 sm:pr-10">
              <a
                href={resolveAsset('/Daniel_Santander_CV.pdf')}
                download="Daniel_Santander_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-[96%] text-left bg-[#0d2215] hover:bg-[#143320] text-white py-1.5 sm:py-2 pl-6 sm:pl-8 pr-4 border border-emerald-500/50 hover:border-emerald-400 rounded-r-xl rounded-l-sm shadow-[3px_3px_0px_rgba(0,0,0,0.8)] hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all cursor-pointer flex flex-col justify-center"
                style={{
                  clipPath: 'polygon(16px 0%, 100% 0%, 100% 100%, 16px 100%, 0% 50%)'
                }}
                title={currentLang === 'es' ? 'Descargar Currículum Vitae oficial (PDF)' : 'Download official Curriculum Vitae (PDF)'}
              >
                {/* Central Mounting Rivet */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-neutral-300 border-2 border-black shadow-inner z-20 flex items-center justify-center">
                  <div className="w-1.5 h-0.5 bg-neutral-700" />
                </div>

                <div className="flex items-center justify-between pl-2">
                  <span className="font-mono font-bold text-[9px] sm:text-[10px] bg-emerald-500/20 text-emerald-300 group-hover:bg-emerald-400 group-hover:text-black px-2 py-0.5 rounded border border-emerald-500/30 uppercase flex items-center space-x-1">
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    <span>⬅ OFFICIAL RESUME // PDF</span>
                  </span>

                  <span className="font-mono font-black text-xs sm:text-sm tracking-tight uppercase flex items-center space-x-1.5 text-emerald-300 group-hover:text-emerald-200">
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{currentLang === 'es' ? '10. CURRÍCULUM VITAE (PDF)' : '10. CURRICULUM VITAE (PDF)'}</span>
                  </span>
                </div>

                <div className="text-[8.5px] sm:text-[9.5px] font-sans text-neutral-300 group-hover:text-white truncate mt-0.5 pl-2">
                  {currentLang === 'es'
                    ? 'Descarga directa del documento oficial 2026 en formato PDF con trayectoria completa'
                    : 'Direct download of official 2026 Curriculum Vitae document in PDF format'}
                </div>
              </a>
            </div>

            {/* 11. SIGN 11: HIRE ME & CONSULTING (Points Right ➔) [FLAGSHIP GOLDEN SIGN] */}
            {onOpenHireMe && (
              <div className="relative flex justify-end w-full pl-6 sm:pl-10 pt-1">
                <button
                  onClick={onOpenHireMe}
                  className="group relative w-full sm:w-[96%] text-left bg-gradient-to-r from-[#291f0c] via-[#3d2f13] to-[#291f0c] hover:from-[#473614] hover:to-[#544119] text-white py-2 sm:py-2.5 pl-4 pr-6 sm:pr-8 border-2 border-amber-400/80 hover:border-amber-300 rounded-l-xl rounded-r-sm shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all cursor-pointer flex flex-col justify-center"
                  style={{
                    clipPath: 'polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%)'
                  }}
                >
                  {/* Central Mounting Rivet */}
                  <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-300 border-2 border-black shadow-inner z-20 flex items-center justify-center">
                    <div className="w-2 h-0.5 bg-neutral-900" />
                  </div>

                  <div className="flex items-center justify-between pr-2">
                    <span className="font-mono font-black text-xs sm:text-base tracking-tight uppercase flex items-center space-x-2 text-amber-300 group-hover:text-amber-100">
                      <Briefcase className="w-4 h-4 text-amber-400" />
                      <span>{currentLang === 'es' ? '11. CONTRATACIÓN & CONSULTORÍA // HIRE ME' : '11. HIRE ME // WORK TOGETHER'}</span>
                    </span>

                    <span className="font-mono font-black text-[9px] sm:text-[10px] bg-amber-400 text-black px-2.5 py-0.5 rounded uppercase tracking-wider flex items-center space-x-1 shadow-sm">
                      <span>WORLDWIDE DISPATCH</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  <div className="text-[9px] sm:text-[10px] font-sans text-amber-200/90 group-hover:text-white truncate mt-0.5">
                    {currentLang === 'es'
                      ? 'Consultoría Ambiental, Contratos de Investigación, Modelación de Cuencas y Ponencias Internacionales'
                      : 'Environmental Consulting, Research Contracts, Catchment Modeling & Keynote Speaking'}
                  </div>
                </button>
              </div>
            )}

          </div>
        </div>
      </main>

      {/* 4. FOOTER: COORDINATE TICKER & STATUS BAR */}
      <footer className="relative z-30 w-full px-4 sm:px-8 py-2 bg-black/80 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[9.5px] sm:text-[10px] font-mono text-neutral-400 shrink-0 backdrop-blur-sm">
        <div className="flex items-center space-x-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
          <span className="text-white font-bold">
            {currentLang === 'es' ? 'POSTE DE RUTAS EXPEDICIONARIAS' : 'GLOBAL EXPEDITION MILESTONE'}
          </span>
          <span className="text-neutral-600">•</span>
          <span>{currentLang === 'es' ? '11 DESTINOS REGISTRADOS' : '11 REGISTERED MILESTONES'}</span>
        </div>

        <div className="flex items-center space-x-3 text-neutral-400">
          <span>{currentLang === 'es' ? 'RESPUESTA HABITUAL: < 24 HORAS' : 'RESPONSE TIME: < 24H'}</span>
          <span className="text-neutral-600">•</span>
          <span className="text-cyan-400 font-bold">© {new Date().getFullYear()} DANIEL SANTANDER</span>
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
