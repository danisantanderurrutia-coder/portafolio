import React from 'react';
import { Globe, ArrowRight, Shield, Award, Radio, Microscope, Compass, FileText, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';
import { MissionType } from './GameWorldView';

interface PunkMainMenuProps {
  currentLang: Language;
  onToggleLanguage: () => void;
  onSelectCategory: (category: MissionType | 'all') => void;
  onOpenDossier: () => void;
}

export const PunkMainMenu: React.FC<PunkMainMenuProps> = ({
  currentLang,
  onToggleLanguage,
  onSelectCategory,
  onOpenDossier
}) => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden select-none bg-[#0a0d12] text-white font-sans flex flex-col justify-between">
      
      {/* 1. HIGH-CONTRAST EDITORIAL / TECHNICAL BACKDROP */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle technical coordinate grid */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        {/* Ambient deep contrast gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e131a] via-[#0a0d12] to-[#06080b]" />
      </div>

      {/* 2. TOP TECHNICAL RULER & METRIC HEADER */}
      <header className="relative z-20 w-full px-4 sm:px-10 pt-5 pb-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="px-3 py-1 bg-white text-black font-mono text-xs font-black tracking-widest uppercase shadow-[3px_3px_0px_#f59e0b] -rotate-1">
            DSU // EXPEDIENTE TÉCNICO 2026
          </div>
          <div className="hidden md:flex items-center space-x-2 text-[11px] font-mono text-neutral-400">
            <span>CAU KIEL</span>
            <span>•</span>
            <span>AMU POZNAŃ</span>
            <span>•</span>
            <span>U. DE CHILE</span>
          </div>
        </div>

        {/* Technical Telemetry & Language Switcher */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:block text-right font-mono text-[10px] text-neutral-400">
            <span className="text-amber-400 font-bold">ESTACIÓN MAULE / BÁLTICO</span>
            <span className="block opacity-70">35°42'S 71°35'W • 54°19'N 10°08'E</span>
          </div>

          <button
            onClick={onToggleLanguage}
            className="px-3 py-1.5 bg-black border-2 border-white/80 hover:border-amber-400 text-white hover:text-amber-300 font-mono font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_#ffffff] transition-all flex items-center space-x-1.5"
            title="Cambiar idioma // Switch Language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? 'ES' : 'EN'}</span>
          </button>
        </div>
      </header>

      {/* 3. MAIN SCIENTIFIC BRUTALIST CLASSIFICATION BOARD */}
      <main className="relative z-20 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-10 py-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
        
        {/* LEFT COLUMN: IDENTIFIER DOSSIER & PROFILE PRESENTATION */}
        <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* STENCIL TITLE BOX [DANIEL SANTANDER] */}
          <div className="relative mb-5 inline-block">
            <div className="bg-white text-black px-5 py-2.5 border-3 border-black shadow-[5px_5px_0px_#eab308] -rotate-1.5 inline-block">
              <h1 className="font-mono font-black text-2xl sm:text-3xl lg:text-4xl tracking-tighter uppercase leading-none">
                [DANIEL SANTANDER]
              </h1>
            </div>
            <div className="mt-2 text-xs sm:text-sm font-mono font-bold tracking-widest text-amber-400 uppercase">
              {currentLang === 'es' 
                ? 'GEOFÍSICA DE CUENCAS • COMUNICACIONES • CUMBRES'
                : 'CATCHMENT HYDROGEOPHYSICS • COMMUNICATIONS • POLICY'}
            </div>
          </div>

          {/* SCIENTIFIC PROFILE PORTRAIT BADGE */}
          <div className="relative my-3 group">
            {/* Subtle architectural frame */}
            <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-lg bg-[#111620] p-2 border-3 border-white/90 shadow-[6px_6px_0px_#000000] rotate-0.5 group-hover:rotate-0 transition-transform overflow-hidden">
              <img 
                src={resolveAsset('/profile.jpg')} 
                alt="Daniel Santander Urrutia" 
                className="w-full h-full object-cover object-top rounded filter contrast-105 brightness-95"
              />
              {/* Technical badge overlay */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/90 border border-white/20 backdrop-blur-md px-3 py-1.5 rounded flex items-center justify-between text-[10px] font-mono">
                <span className="text-amber-400 font-bold uppercase">DUAL M.SC. & EXPOSITOR</span>
                <span className="text-neutral-300">8 PAÍSES</span>
              </div>
            </div>

            {/* Verification Stamp */}
            <div className="absolute -bottom-2.5 -right-2.5 bg-red-600 text-white font-mono font-black text-[9.5px] px-2.5 py-0.5 uppercase tracking-wider border-2 border-white shadow-[2px_2px_0px_#000] rotate-3">
              EXPEDIENTE ACTIVO
            </div>
          </div>

          {/* Professional Credentials & Abstract */}
          <div className="max-w-md text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed mt-4 bg-black/60 p-3 border-l-4 border-amber-400 text-left">
            <div className="text-[10px] text-amber-400 font-bold uppercase mb-1">
              PERFIL TÉCNICO INTEGRAL
            </div>
            {currentLang === 'es'
              ? 'Modelación biofísica e hidrogeológica de cuencas (Chile y Europa) combinada con vocería parlamentaria en el Congreso Nacional, medios masivos y diplomacia ambiental multilateral.'
              : 'Catchment hydrogeophysics and ecohydrological modeling (Chile and Europe) integrated with legislative testimony, mass media leadership, and global environmental governance.'}
          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-CONTRAST SLANTED TAPE SELECTION MENU */}
        <div className="w-full lg:w-7/12 flex flex-col space-y-3.5 max-w-xl">
          
          <div className="flex items-center justify-between text-[11px] font-mono text-amber-400 font-bold tracking-widest uppercase pb-1 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>{currentLang === 'es' ? 'SELECCIONA CATEGORÍA // INICIAR VISOR' : 'SELECT SECTOR // LAUNCH HUD'}</span>
            </div>
            <span className="text-neutral-400 font-normal">14 MISIONES</span>
          </div>

          {/* TAPE 01: 🔴 CIENCIA (ROJO) */}
          <button
            onClick={() => onSelectCategory('science')}
            className="group relative w-full text-left bg-black text-white hover:bg-[#b91c1c] p-3.5 sm:p-4 border-2 border-white shadow-[4px_4px_0px_#ef4444] -rotate-1 hover:rotate-0 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="w-3.5 h-3.5 rounded-full bg-red-500 border border-white group-hover:scale-125 transition-transform shrink-0" />
                <span className="font-mono font-black text-sm sm:text-lg tracking-tight uppercase">
                  01. CIENCIA // HIDROGEOFÍSICA & MODELACIÓN
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-red-400 group-hover:text-white group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
            <div className="mt-1 text-xs font-mono text-neutral-300 group-hover:text-red-100 flex items-center space-x-2 pl-6">
              <span className="text-red-400 group-hover:text-white font-bold">ALEMANIA & POLONIA:</span>
              <span className="truncate">
                {currentLang === 'es'
                  ? 'Balances ecohidrológicos de cuenca, CAU Kiel y turberas bálticas'
                  : 'Catchment ecohydrology, CAU Kiel & Baltic peatlands'}
              </span>
            </div>
          </button>

          {/* TAPE 02: 🟢 COMUNICACIONES (VERDE) */}
          <button
            onClick={() => onSelectCategory('comms')}
            className="group relative w-full text-left bg-black text-white hover:bg-[#15803d] p-3.5 sm:p-4 border-2 border-white shadow-[4px_4px_0px_#22c55e] rotate-1 hover:rotate-0 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 border border-white group-hover:scale-125 transition-transform shrink-0" />
                <span className="font-mono font-black text-sm sm:text-lg tracking-tight uppercase">
                  02. COMUNICACIONES & INCIDENCIA PÚBLICA
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:text-white group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
            <div className="mt-1 text-xs font-mono text-neutral-300 group-hover:text-emerald-100 flex items-center space-x-2 pl-6">
              <span className="text-emerald-400 group-hover:text-white font-bold">PARLAMENTO & RADIO:</span>
              <span className="truncate">
                {currentLang === 'es'
                  ? 'Testimonio oficial en Cámara de Diputados, Radio Cristalina y +700k audiencia'
                  : 'Chamber of Deputies testimony, Radio Cristalina & +700k reach'}
              </span>
            </div>
          </button>

          {/* TAPE 03: 🟡 CUMBRES & POLÍTICA GLOBAL (ÁMBAR) */}
          <button
            onClick={() => onSelectCategory('global')}
            className="group relative w-full text-left bg-black text-white hover:bg-[#b45309] p-3.5 sm:p-4 border-2 border-white shadow-[4px_4px_0px_#f59e0b] -rotate-0.5 hover:rotate-0 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-white group-hover:scale-125 transition-transform shrink-0" />
                <span className="font-mono font-black text-sm sm:text-lg tracking-tight uppercase">
                  03. CUMBRES // POLÍTICA AMBIENTAL GLOBAL
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-amber-400 group-hover:text-white group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
            <div className="mt-1 text-xs font-mono text-neutral-300 group-hover:text-amber-100 flex items-center space-x-2 pl-6">
              <span className="text-amber-400 group-hover:text-white font-bold">COP & CUMBRES:</span>
              <span className="truncate">
                {currentLang === 'es'
                  ? 'Negociaciones climáticas en Dinamarca, Egipto (COP27) y Costa Rica'
                  : 'Climate negotiations in Denmark, Egypt (COP27) & Costa Rica'}
              </span>
            </div>
          </button>

          {/* TAPE 04: 🟣 I+D E INNOVACIÓN (MORADO) */}
          <button
            onClick={() => onSelectCategory('rd')}
            className="group relative w-full text-left bg-black text-white hover:bg-[#7e22ce] p-3.5 sm:p-4 border-2 border-white shadow-[4px_4px_0px_#a855f7] rotate-1 hover:rotate-0 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="w-3.5 h-3.5 rounded-full bg-purple-400 border border-white group-hover:scale-125 transition-transform shrink-0" />
                <span className="font-mono font-black text-sm sm:text-lg tracking-tight uppercase">
                  04. I+D // INNOVACIÓN & ECO-TECNOLOGÍA
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-white group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
            <div className="mt-1 text-xs font-mono text-neutral-300 group-hover:text-purple-100 flex items-center space-x-2 pl-6">
              <span className="text-purple-400 group-hover:text-white font-bold">SUIZA & COLOMBIA:</span>
              <span className="truncate">
                {currentLang === 'es'
                  ? 'Telemetría biofísica, sensores de suelo y monitoreo satelital'
                  : 'Biophysical telemetry, soil sensors & satellite monitoring'}
              </span>
            </div>
          </button>

          {/* TAPE 05: 🌐 PLANISFERIO 3D COMPLETO */}
          <button
            onClick={() => onSelectCategory('all')}
            className="group relative w-full text-left bg-white text-black hover:bg-amber-400 p-3.5 sm:p-4 border-2 border-black shadow-[4px_4px_0px_#ffffff] -rotate-0.5 hover:rotate-0 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-black shrink-0" />
                <span className="font-mono font-black text-sm sm:text-lg tracking-tight uppercase">
                  05. EXPLORAR PLANISFERIO 3D COMPLETO
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
            <div className="mt-1 text-xs font-mono text-neutral-800 flex items-center space-x-2 pl-6">
              <span className="font-bold">HUD INTERACTIVO:</span>
              <span className="truncate">
                {currentLang === 'es'
                  ? 'Planeta con continentes detallados y rotación a los 8 países'
                  : 'Planet with detailed continents rotating to all 8 countries'}
              </span>
            </div>
          </button>

          {/* TAPE 06: 📁 DOSSIER ACADÉMICO */}
          <button
            onClick={onOpenDossier}
            className="group relative w-full text-left bg-[#eee5d5] text-[#2c2620] hover:bg-white p-3 border-2 border-[#8c7b64] shadow-[3px_3px_0px_#000] rotate-0.5 hover:rotate-0 hover:scale-[1.01] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <FileText className="w-4 h-4 text-[#7f3419] shrink-0" />
                <span className="font-serif font-bold text-xs sm:text-sm tracking-wide uppercase">
                  06. DOSSIER ACADÉMICO // ARCHIVO PAPEL MANILA
                </span>
              </div>
              <span className="font-mono text-[10px] bg-[#d8cdbc] px-2 py-0.5 rounded font-bold shrink-0">
                {currentLang === 'es' ? 'FORMATO IMPRESO' : 'PRINT DOSSIER'}
              </span>
            </div>
          </button>

        </div>
      </main>

      {/* 4. TECHNICAL FOOTER WITH AUDIT BARCODE */}
      <footer className="relative z-20 w-full px-4 sm:px-10 py-3 bg-black/90 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-neutral-400">
        <div className="flex items-center space-x-3">
          <span className="text-amber-400 font-bold">SISTEMA:</span>
          <span>[CLICK] SELECCIONA CATEGORÍA</span>
          <span>•</span>
          <span>ROTACIÓN AUTOMÁTICA DE GLOBO</span>
        </div>

        {/* Barcode & Registry Stamp */}
        <div className="flex items-center space-x-2">
          <span>REGISTRO ACADÉMICO N° 2026-DSU</span>
          <span className="font-mono font-bold tracking-tight text-white">
            ||| | ||||| || |||||| | |||
          </span>
        </div>
      </footer>

    </div>
  );
};
