import React from 'react';
import { Globe, ArrowRight, FileText } from 'lucide-react';
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
    <div className="relative w-full h-screen overflow-hidden select-none bg-[#090b0e] text-white font-sans flex flex-col justify-between">
      
      {/* 1. CINEMATIC FULLSCREEN ECO-NOIR ARTWORK */}
      {/* Estética de cómic / novela gráfica en tinta china: calle estrecha, plantas abundantes, bicicletas y paneles solares */}
      <div 
        className="absolute inset-0 bg-cover bg-center lg:bg-right bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: `url('/eco_noir_menu_bg.jpg')` }}
      />

      {/* Subtle vignette for extreme text contrast on small mobile viewports */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent lg:from-transparent pointer-events-none z-0" />

      {/* 2. TOP BAR: TITLE STAMP & LANGUAGE TOGGLE */}
      <header className="relative z-20 w-full px-4 sm:px-10 pt-4 pb-2 flex items-center justify-between">
        {/* Title Stencil Box */}
        <div className="flex flex-col">
          <div className="bg-white text-black px-4 sm:px-5 py-1.5 border-3 border-black shadow-[4px_4px_0px_#eab308] -rotate-1 inline-block self-start">
            <h1 className="font-mono font-black text-xl sm:text-2xl tracking-tighter uppercase leading-none">
              [DANIEL SANTANDER]
            </h1>
          </div>
          <div className="mt-1.5 text-[11px] sm:text-xs font-mono font-bold tracking-widest text-amber-400 uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
            {currentLang === 'es' 
              ? 'GEOFÍSICA DE CUENCAS • COMUNICACIONES • CUMBRES'
              : 'HYDROGEOPHYSICS • COMMUNICATIONS • GLOBAL POLICY'}
          </div>
        </div>

        {/* Language Switcher */}
        <button
          onClick={onToggleLanguage}
          className="px-3 py-1.5 bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_#000000] active:scale-95 transition-all flex items-center space-x-1.5"
          title="Cambiar idioma // Switch Language"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{currentLang === 'es' ? 'ES' : 'EN'}</span>
        </button>
      </header>

      {/* 3. MAIN MENU BUTTONS (ESTILO CINTAS TORN-TAPE DE LA IMAGEN DE REFERENCIA) */}
      <main className="relative z-20 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-10 flex flex-col justify-center">
        
        {/* Tape Buttons Column: Left-aligned over the halftone screen tone area */}
        <div className="w-full max-w-sm sm:max-w-md flex flex-col space-y-2.5 sm:space-y-3 py-2">
          
          {/* TAPE 1: [01. CIENCIA // CAU KIEL] (YELLOW STENCIL TAPE COMO EL BOTÓN [PLAY]) */}
          <button
            onClick={() => onSelectCategory('science')}
            className="group relative w-full text-left bg-[#facc15] hover:bg-white text-black px-4 py-2.5 sm:py-3 border-3 border-black shadow-[4px_4px_0px_#000000] -rotate-1 hover:rotate-0 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-sm sm:text-base tracking-tight uppercase">
                [ 01. CIENCIA // CAU KIEL ]
              </span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-neutral-800 tracking-tight">
              {currentLang === 'es'
                ? 'Modelación hidrogeofísica & turberas bálticas (Alemania/Polonia)'
                : 'Hydrogeophysics & Baltic peatlands (Germany/Poland)'}
            </div>
          </button>

          {/* TAPE 2: [02. COMUNICACIONES // CONGRESO] (WHITE STENCIL TAPE) */}
          <button
            onClick={() => onSelectCategory('comms')}
            className="group relative w-full text-left bg-white hover:bg-[#facc15] text-black px-4 py-2.5 sm:py-3 border-3 border-black shadow-[4px_4px_0px_#000000] rotate-1 hover:rotate-0 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-sm sm:text-base tracking-tight uppercase">
                [ 02. COMUNICACIONES & MEDIOS ]
              </span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-neutral-700 group-hover:text-neutral-900 tracking-tight">
              {currentLang === 'es'
                ? 'Cámara de Diputados, Radio Cristalina y +700k audiencia'
                : 'Chamber of Deputies testimony & +700k reach'}
            </div>
          </button>

          {/* TAPE 3: [03. CUMBRES // POLÍTICA GLOBAL] (WHITE STENCIL TAPE) */}
          <button
            onClick={() => onSelectCategory('global')}
            className="group relative w-full text-left bg-white hover:bg-[#facc15] text-black px-4 py-2.5 sm:py-3 border-3 border-black shadow-[4px_4px_0px_#000000] -rotate-0.5 hover:rotate-0 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-sm sm:text-base tracking-tight uppercase">
                [ 03. CUMBRES & POLÍTICA GLOBAL ]
              </span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-neutral-700 group-hover:text-neutral-900 tracking-tight">
              {currentLang === 'es'
                ? 'COP27 Clima (Egipto), Copenhague (Dinamarca) y Costa Rica'
                : 'COP27 Summit (Egypt), Copenhagen (Denmark) & Costa Rica'}
            </div>
          </button>

          {/* TAPE 4: [04. I+D // INNOVACIÓN] (WHITE STENCIL TAPE) */}
          <button
            onClick={() => onSelectCategory('rd')}
            className="group relative w-full text-left bg-white hover:bg-[#facc15] text-black px-4 py-2.5 sm:py-3 border-3 border-black shadow-[4px_4px_0px_#000000] rotate-1 hover:rotate-0 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-sm sm:text-base tracking-tight uppercase">
                [ 04. I+D // ECO-TECNOLOGÍA ]
              </span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-neutral-700 group-hover:text-neutral-900 tracking-tight">
              {currentLang === 'es'
                ? 'Telemetría de cuencas en Zúrich y monitoreo satelital en Bogotá'
                : 'Telemetry in Zurich & satellite monitoring in Bogota'}
            </div>
          </button>

          {/* TAPE 5: [05. PLANISFERIO 3D // GLOBO] (WHITE/AMBER STENCIL TAPE) */}
          <button
            onClick={() => onSelectCategory('all')}
            className="group relative w-full text-left bg-black text-white hover:bg-[#facc15] hover:text-black px-4 py-2.5 sm:py-3 border-3 border-white hover:border-black shadow-[4px_4px_0px_#facc15] -rotate-1 hover:rotate-0 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-sm sm:text-base tracking-tight uppercase">
                [ 05. EXPLORAR PLANISFERIO 3D ]
              </span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:text-black group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-neutral-300 group-hover:text-neutral-900 tracking-tight">
              {currentLang === 'es'
                ? 'Visor táctico con el planeta rotando a los 8 países'
                : 'Tactical HUD with 3D globe rotating to all 8 countries'}
            </div>
          </button>

          {/* TAPE 6: [06. DOSSIER // PAPEL] (SUBTLE MANILA TAPE) */}
          <button
            onClick={onOpenDossier}
            className="group relative w-full text-left bg-[#eee5d5] hover:bg-white text-[#2c2620] px-3.5 py-2 border-2 border-black shadow-[3px_3px_0px_#000000] rotate-0.5 hover:rotate-0 hover:scale-102 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold text-xs sm:text-sm tracking-wide uppercase">
                [ 06. DOSSIER ACADÉMICO IMPRESO ]
              </span>
              <FileText className="w-3.5 h-3.5 text-[#7f3419]" />
            </div>
          </button>

        </div>
      </main>

      {/* 4. FOOTER: CONTROLLER PROMPTS & BARCODE (COMO EN LA IMAGEN) */}
      <footer className="relative z-20 w-full px-4 sm:px-10 py-3 bg-black/90 border-t border-white/20 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-neutral-300">
        <div className="flex items-center space-x-3">
          <span className="bg-[#facc15] text-black px-1.5 py-0.5 font-black border border-black shadow-[1px_1px_0px_#ffffff]">
            A
          </span>
          <span className="font-bold text-white uppercase">
            {currentLang === 'es' ? 'SELECCIONAR SECTOR // ENTRAR AL GLOBO' : 'SELECT SECTOR // LAUNCH HUD'}
          </span>
        </div>

        {/* Barcode */}
        <div className="flex items-center space-x-2">
          <span>EXPEDIENTE N° 2026-DSU</span>
          <span className="font-mono font-black tracking-tight text-white">
            ||| | ||||| || |||||| | |||
          </span>
        </div>
      </footer>

    </div>
  );
};
