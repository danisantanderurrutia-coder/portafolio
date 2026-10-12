import React, { useState, useEffect } from 'react';
import { communicationsSections, scientificSections } from './data';
import { Language, MediaItem, SectionData } from './types';
import { 
  ChevronLeft, 
  ChevronRight, 
  Globe, 
  Share2, 
  Check, 
  Play, 
  ZoomIn, 
  Volume2, 
  Maximize2,
  ExternalLink,
  TreePine,
  Sparkles,
  Layers,
  FileText,
  Moon,
  Sun,
  Radio,
  Microscope,
  FileCheck,
  Award,
  ArrowRight
} from 'lucide-react';
import { ModalViewer } from './components/ModalViewer';
import { MesaDeLuz } from './components/MesaDeLuz';

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

type ProfileMode = 'comms' | 'science';

export { resolveAsset } from './utils';
import { resolveAsset } from './utils';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [profileMode, setProfileMode] = useState<ProfileMode>('comms');
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [activeSubSectionIndex, setActiveSubSectionIndex] = useState<number>(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [viewFormat, setViewFormat] = useState<'mesa' | 'dossier'>('mesa');

  // Sync tab, view format and entered state with URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase().replace(/^#/, '');
      if (hash === 'mesa' || hash === '' || hash === '/') {
        setViewFormat('mesa');
      } else if (hash === 'dossier' || hash === 'acceso') {
        setViewFormat('dossier');
        setHasEntered(false);
        setActiveTabIndex(0);
      } else if (hash.length > 1) {
        setViewFormat('dossier');
        setHasEntered(true);
        const sections = profileMode === 'comms' ? communicationsSections : scientificSections;
        const foundIdx = sections.findIndex(
          (s) => s.id.toLowerCase() === hash || s.tabKey.toLowerCase().includes(hash)
        );
        if (foundIdx >= 0) {
          setActiveTabIndex(foundIdx);
          setActiveSubSectionIndex(0);
          setCurrentSlideIndex(0);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [profileMode]);

  // Pick dataset based on profile mode
  const activeSections: SectionData[] = profileMode === 'comms' ? communicationsSections : scientificSections;
  const activeSection: SectionData = activeSections[activeTabIndex] || activeSections[0];

  // Resolve media items taking into account subSections if present (e.g. Citizen Journalism)
  const currentSubSection = activeSection.subSections ? activeSection.subSections[activeSubSectionIndex] : null;
  const items = currentSubSection ? currentSubSection.mediaItems : activeSection.mediaItems;
  const currentItem = items[currentSlideIndex] || items[0];

  // Switch between nocturnal comms and diurnal science (Direct shortcut)
  const handleToggleProfile = (mode: ProfileMode) => {
    setProfileMode(mode);
    setHasEntered(true); // Actúa como shortcut directo dentro del visor
    if (mode === 'comms') {
      setActiveTabIndex(1); // 01. Intervención
      window.location.hash = '#intervencion';
    } else {
      setActiveTabIndex(0); // 00. Portada del Expediente Científico
      window.location.hash = '#portada-cientifica';
    }
    setActiveSubSectionIndex(0);
    setCurrentSlideIndex(0);
  };

  const handleSelectTab = (index: number) => {
    setActiveTabIndex(index);
    setActiveSubSectionIndex(0);
    setCurrentSlideIndex(0);
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedMedia) return;
      if (e.key === 'ArrowRight') handleNextSlide();
      if (e.key === 'ArrowLeft') handlePrevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items.length, selectedMedia]);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isComms = profileMode === 'comms';

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden select-none bg-[#f7f5ee] text-[#1c1917] paper-texture">
      {/* Background Subtle Ambient Paper Warmth */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-b from-[#eee5d5]/60 via-[#f7f5ee]/30 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#ebe2d0]/40 blur-3xl" />
      </div>

      {/* 0. TECHNICAL TOP RULER & EXPEDITION COORDINATES */}
      <div className="relative z-50 w-full bg-[#eee5d5] border-b border-[#d8cdbc] px-3 sm:px-6 py-1 text-[10px] font-mono text-[#786b5e] flex items-center justify-between select-none overflow-x-auto no-scrollbar">
        <div className="flex items-center space-x-2.5 sm:space-x-4 shrink-0">
          <span className="font-bold text-[#2d5a3c] tracking-wider">ESTACIÓN: 35°42'S 71°35'W</span>
          <span className="opacity-30">|</span>
          <span className="tracking-tight">CUENCA DEL MAULE // TURBERAS BÁLTICAS</span>
          <span className="opacity-30">|</span>
          <span className="text-[#9c4928] font-bold tracking-wider">REGISTRO N° 2026-DSU</span>
        </div>
        <div className="hidden lg:flex items-center space-x-3 font-mono text-[9px] opacity-70 shrink-0">
          <span>ESCALA DOCUMENTAL 1:1</span>
          <span className="tracking-widest">|||||'''|||||'''|||||'''|||||'''|||||</span>
          <span>FCFM U. DE CHILE • CAU KIEL • AMU POZNAŃ</span>
        </div>
      </div>

      {/* 1. TOP MANILA HEADER: DOSSIER CEJA & RUBBER STAMP SWITCHER */}
      <header className="relative z-40 w-full px-3 sm:px-6 py-2.5 border-b border-[#d5c7b0] bg-[#ede4d3] shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Identity Stamp */}
          <div 
            onClick={() => {
              setHasEntered(false);
              setActiveTabIndex(0);
              window.location.hash = '';
            }}
            className="flex items-center space-x-3 self-start md:self-center cursor-pointer group"
            title={currentLang === 'es' ? 'Ir al índice del expediente' : 'Go to dossier cover'}
          >
            {/* Seal Box */}
            <div className="p-1 rounded bg-[#fdfbf7] border-2 border-[#b85d38]/50 group-hover:border-[#9c4928] shadow-sm transition-all flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded bg-[#f6efe2] border border-[#d8cebd] p-0.5 flex items-center justify-center overflow-hidden">
                <img src={resolveAsset('/favicon.svg')} alt="DS" className="w-full h-full object-contain" />
              </div>
              <div className="pr-1.5">
                <div className="text-[9.5px] font-mono font-bold tracking-widest text-[#7f3419] uppercase leading-tight">
                  EXPEDIENTE DE TERRENO
                </div>
                <div className="text-sm font-serif font-bold text-[#1c1917] tracking-tight group-hover:text-[#9c4928] transition-colors leading-none mt-0.5">
                  DANIEL SANTANDER URRUTIA
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2 w-full md:w-auto">
            {/* VIEW MODE TOGGLE: MESA DE LUZ VS DOSSIER */}
            <div className="flex items-center p-0.5 rounded-lg bg-[#ded2be] border border-[#c4b39b] shadow-inner text-xs font-mono">
              <button
                onClick={() => {
                  setViewFormat('mesa');
                  window.location.hash = '#mesa';
                }}
                className={`px-3 py-1.5 rounded-md transition-all flex items-center space-x-1.5 ${
                  viewFormat === 'mesa'
                    ? 'bg-[#1c1917] text-[#fbf8f2] font-bold shadow-sm'
                    : 'text-[#63584e] hover:text-[#1c1917]'
                }`}
                title={currentLang === 'es' ? 'Mesa de Luz: Tablero de Taller interactivo' : 'Light Table: Interactive Workshop drafting board'}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                <span className="font-serif tracking-tight font-bold">{currentLang === 'es' ? 'MESA DE LUZ' : 'LIGHT TABLE'}</span>
                <span className="text-[9px] px-1 py-0.2 rounded bg-[#d97706]/20 text-[#d97706] font-mono font-bold">NUEVO</span>
              </button>

              <button
                onClick={() => {
                  setViewFormat('dossier');
                  window.location.hash = '#dossier';
                }}
                className={`px-3 py-1.5 rounded-md transition-all flex items-center space-x-1.5 ${
                  viewFormat === 'dossier'
                    ? 'bg-[#1c1917] text-[#fbf8f2] font-bold shadow-sm'
                    : 'text-[#63584e] hover:text-[#1c1917]'
                }`}
                title={currentLang === 'es' ? 'Dossier Clásico: Fichas y pestañas' : 'Classic Dossier: Tabs and file cards'}
              >
                <FileText className="w-3.5 h-3.5 opacity-80" />
                <span className="font-serif tracking-tight">{currentLang === 'es' ? 'DOSSIER' : 'DOSSIER'}</span>
              </button>
            </div>

            {/* DUAL TOMO RUBBER STAMPS (SOLO EN MODO DOSSIER CON ACCESO) */}
            {viewFormat === 'dossier' && hasEntered && (
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Tomo I: Comunicaciones */}
                <button
                  onClick={() => handleToggleProfile('comms')}
                  className={`px-3 py-1.5 rounded font-mono text-xs transition-all duration-200 flex items-center space-x-2 border-2 ${
                    isComms
                      ? 'bg-[#9c4928] text-white border-[#7f3419] shadow-sm font-bold scale-[1.02]'
                      : 'bg-[#fdfbf7] text-[#63584e] border-dashed border-[#c5b59e] hover:border-[#9c4928] hover:text-[#9c4928]'
                  }`}
                  title="Tomo I: Campañas, Medios e Incidencia"
                >
                  <span className={`w-2 h-2 rounded-full ${isComms ? 'bg-white' : 'bg-[#9c4928]'}`} />
                  <span className="font-serif tracking-wide text-xs">TOMO I // COMUNICACIONES</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${isComms ? 'bg-black/25 text-white' : 'bg-[#f4ede0] text-[#7f3419]'}`}>
                    +700K
                  </span>
                </button>

                {/* Tomo II: Científico */}
                <button
                  onClick={() => handleToggleProfile('science')}
                  className={`px-3 py-1.5 rounded font-mono text-xs transition-all duration-200 flex items-center space-x-2 border-2 ${
                    !isComms
                      ? 'bg-[#2d5a3c] text-white border-[#1e402a] shadow-sm font-bold scale-[1.02]'
                      : 'bg-[#fdfbf7] text-[#63584e] border-dashed border-[#c5b59e] hover:border-[#2d5a3c] hover:text-[#2d5a3c]'
                  }`}
                  title="Tomo II: Cuencas, Geofísica y Sistemas Biofísicos"
                >
                  <span className={`w-2 h-2 rounded-full ${!isComms ? 'bg-white' : 'bg-[#2d5a3c]'}`} />
                  <span className="font-serif tracking-wide text-xs">TOMO II // CIENTÍFICO</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${!isComms ? 'bg-black/25 text-white' : 'bg-[#e7eee8] text-[#2d5a3c]'}`}>
                    DUAL M.SC.
                  </span>
                </button>
              </div>
            )}

            {/* Language & Share Stamp Buttons */}
            <div className="flex items-center space-x-1.5">
              <button
                onClick={toggleLanguage}
                className="px-2.5 py-1.5 rounded border border-[#cfc1a8] bg-[#fdfbf7] hover:bg-[#ede5d4] text-[#2c2620] text-xs font-mono transition shadow-sm flex items-center space-x-1"
                title="Cambiar idioma // Switch language"
              >
                <Globe className={`w-3.5 h-3.5 ${isComms ? 'text-[#9c4928]' : 'text-[#2d5a3c]'}`} />
                <span className="font-bold">{currentLang === 'es' ? 'ES' : 'EN'}</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="p-1.5 rounded border border-[#cfc1a8] bg-[#fdfbf7] hover:bg-[#ede5d4] text-[#2c2620] text-xs transition shadow-sm"
                title="Copiar enlace de esta ficha"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#2d5a3c]" /> : <Share2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* CONDITIONAL WORKSPACE VIEW: MESA DE LUZ VS DOSSIER CLÁSICO */}
      {viewFormat === 'mesa' ? (
        <MesaDeLuz currentLang={currentLang} />
      ) : (
        <>
          {/* 2. MANILA FOLDER INDEX TABS (PESTAÑAS ESCALONADAS FÍSICAS DE ARCHIVADOR) */}
          <div className="relative z-30 w-full bg-[#eee5d5] border-b-2 border-[#cfc1a8] pt-2 px-3 sm:px-6 select-none">
        <div className="max-w-6xl mx-auto flex items-end overflow-x-auto no-scrollbar gap-1 sm:gap-1.5">
          {hasEntered ? (
            (isComms ? activeSections.slice(1) : activeSections).map((sec, originalIdx) => {
              const idx = isComms ? originalIdx + 1 : originalIdx;
              const isActive = activeTabIndex === idx;
              const tabTitle = currentLang === 'es'
                ? (sec.tabTitleEs || sec.tabKey.replace(/^\d+\.\s*/, ''))
                : (sec.tabTitleEn || sec.tabKey.replace(/^\d+\.\s*/, ''));
              const prefix = `§ 0${idx}`;

              return (
                <button
                  key={sec.id}
                  onClick={() => handleSelectTab(idx)}
                  className={`group relative px-3 sm:px-4 py-2 font-mono text-xs rounded-t-lg transition-all duration-150 shrink-0 flex items-center space-x-1.5 border-t-2 border-x-2 ${
                    isActive
                      ? isComms
                        ? 'bg-[#fdfbf7] text-[#9c4928] border-[#9c4928] -mb-[2px] pb-[10px] z-10 font-bold shadow-[0_-2px_4px_rgba(0,0,0,0.04)]'
                        : 'bg-[#fdfbf7] text-[#2d5a3c] border-[#2d5a3c] -mb-[2px] pb-[10px] z-10 font-bold shadow-[0_-2px_4px_rgba(0,0,0,0.04)]'
                      : 'bg-[#e2d5bf] text-[#63584e] border-[#cfc1a8] hover:bg-[#eae0cf] hover:text-[#1c1917]'
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? (isComms ? 'text-[#9c4928]' : 'text-[#2d5a3c]') : 'opacity-60'}`}>
                    {prefix}
                  </span>
                  <span className="font-serif tracking-tight uppercase whitespace-nowrap">
                    {tabTitle}
                  </span>
                </button>
              );
            })
          ) : (
            <div className="px-4 py-2 font-mono text-xs rounded-t-lg bg-[#fdfbf7] text-[#7f3419] border-t-2 border-x-2 border-[#b85d38] -mb-[2px] pb-[10px] z-10 font-bold flex items-center space-x-2">
              <span className="text-[10px]">§ 00</span>
              <span className="font-serif uppercase tracking-tight">PORTADA GENERAL // EXPEDIENTE DE TERRENO</span>
            </div>
          )}
        </div>
      </div>

      {/* 3. MAIN CENTRAL PANORAMIC STAGE */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-3 sm:px-6 w-full max-w-6xl mx-auto my-auto py-2 sm:py-3">
        {/* Chapter Header Ribbon (Omit on dedicated Cover Gate to maintain clean heroic focus) */}
        {activeSection.id !== 'portada-portafolio' && (
          <div className="w-full text-center max-w-3xl mb-4 sm:mb-5 animate-fadeIn">
            {/* Rubber Stamp Box */}
            <div className="inline-block p-1 rounded border-2 border-dashed border-[#b85d38]/40 bg-[#fbf5eb]">
              <div
                className={`inline-flex items-center space-x-2 px-3 py-0.5 border text-[10px] font-mono uppercase tracking-widest ${
                  isComms
                    ? 'border-[#9c4928] text-[#9c4928] bg-[#fbf0eb]'
                    : 'border-[#2d5a3c] text-[#2d5a3c] bg-[#eef4ef]'
                }`}
              >
                <span className="font-bold">
                  {isComms
                    ? currentLang === 'es' ? 'TOMO I • INCIDENCIA & MEDIOS' : 'VOL I • ADVOCACY & MEDIA'
                    : currentLang === 'es' ? 'TOMO II • EXPEDIENTE CIENTÍFICO' : 'VOL II • SCIENTIFIC DOSSIER'}
                </span>
                <span className="opacity-40">//</span>
                <span>
                  {currentLang === 'es' ? activeSection.badgeEs : activeSection.badgeEn}
                </span>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold tracking-tight mt-2 text-[#1c1917]">
              {currentLang === 'es' ? activeSection.titleEs : activeSection.titleEn}
            </h2>
            <p
              className={`text-xs sm:text-sm font-sans font-medium mt-1 ${
                isComms ? 'text-[#8a4a2b]' : 'text-[#2d5a3c]'
              }`}
            >
              {currentLang === 'es' ? activeSection.roleEs : activeSection.roleEn}
            </p>

            {/* Sub-Section Switcher: Manila Index Tags */}
            {activeSection.subSections && activeSection.subSections.length > 1 && (
              <div className="mt-3.5 flex items-center justify-center">
                <div className="inline-flex p-1 rounded border border-[#cfc1a8] bg-[#eee5d5] shadow-inner gap-1">
                  {activeSection.subSections.map((subSec, sIdx) => {
                    const isSubActive = sIdx === activeSubSectionIndex;
                    return (
                      <button
                        key={subSec.id}
                        onClick={() => {
                          setActiveSubSectionIndex(sIdx);
                          setCurrentSlideIndex(0);
                        }}
                        className={`px-3 sm:px-4 py-1 rounded font-mono text-xs transition-all duration-150 flex items-center space-x-1.5 ${
                          isSubActive
                            ? 'bg-[#9c4928] text-white font-bold shadow-sm'
                            : 'bg-[#fdfbf7] text-[#63584e] hover:text-[#1c1917] hover:bg-[#f6efe2] border border-[#d8cebd]'
                        }`}
                      >
                        <span className="text-[9px] opacity-70">#{sIdx + 1}</span>
                        <span className="font-serif">{currentLang === 'es' ? subSec.titleEs : subSec.titleEn}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* The Central Stage: Conditional Layout for Comms vs Science */}
        {!hasEntered ? (
          /* ENTRADA EDITORIAL DE ARCHIVO (AMBAS VERTIENTES COMPLEMENTARIAS) */
          <div className="relative w-full max-w-4xl mx-auto py-6 sm:py-10 animate-fadeIn flex flex-col items-center text-center space-y-8">
              
              {/* Monogram Icon & Identity */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative group">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#d5c9b6] shadow-md p-1 bg-[#ede6d8]">
                    <img
                      src={resolveAsset('/profile.jpg')}
                      alt="Daniel Santander Urrutia"
                      className="w-full h-full object-cover object-center rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#ede6d8] border border-[#d5c9b6] p-1 flex items-center justify-center shadow-sm">
                    <img src={resolveAsset('/favicon.svg')} alt="DS" className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-[#1c1917]">
                    Daniel Santander Urrutia
                  </h1>
                  <p className="text-xs sm:text-sm font-sans font-medium text-[#786b5e] tracking-wide">
                    {currentLang === 'es'
                      ? 'Geofísica Ambiental (FCFM, U. de Chile) • Doble M.Sc. Kiel (Alemania) / Poznań (Polonia)'
                      : 'Environmental Geophysics (FCFM, U. de Chile) • Dual M.Sc. Kiel (Germany) / Poznań (Poland)'}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#4d443b] max-w-xl font-serif leading-relaxed">
                  {currentLang === 'es'
                    ? 'Dossier profesional interactivo. Articulando la investigación biofísica de cuencas con la comunicación estratégica territorial y la incidencia pública:'
                    : 'Interactive professional dossier. Bridging biophysical catchment science with territorial strategic communications and public policy advocacy:'}
                </p>
              </div>

              {/* DUAL MODE MINIMALIST PORTALS (SIDE-BY-SIDE EQUILIBRADO) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl px-2">
                
                {/* 1. PUERTA COMUNICACIONES (Tinta Terracota / Imprenta Popular) */}
                <div 
                  onClick={() => {
                    handleToggleProfile('comms');
                    setHasEntered(true);
                    setActiveTabIndex(1);
                    setCurrentSlideIndex(0);
                    window.location.hash = '#intervencion';
                  }}
                  className="group relative cursor-pointer rounded-2xl border border-[#dad0be] hover:border-[#b85d38] bg-[#fdfbf7] hover:bg-[#faf4ed] p-6 text-left transition-all duration-300 hover:scale-[1.01] shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#fbf0eb] border border-[#dfa38f] text-[#9c4928] flex items-center justify-center group-hover:bg-[#f6e5dc] transition">
                        <Moon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#9c4928] font-bold px-2 py-0.5 rounded bg-[#fbf0eb] border border-[#dfa38f]">
                        {currentLang === 'es' ? 'Campañas & Medios' : 'Campaigns & Media'}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#1c1917] group-hover:text-[#9c4928] transition-colors">
                        {currentLang === 'es' ? 'Comunicaciones & Campañas' : 'Communications & Campaigns'}
                      </h3>
                      <p className="text-xs text-[#5c5247] mt-1.5 leading-relaxed font-sans">
                        {currentLang === 'es'
                          ? 'Intervención parlamentaria, periodismo ciudadano (+700k audiencia), campañas territoriales por el agua, arte comunitario y prensa de investigación.'
                          : 'Parliamentary advocacy, citizen journalism (+700k audience), grassroots water campaigns, community art, and investigative journalism.'}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#ded5c5] group-hover:border-[#b85d38]/30 flex items-center justify-between text-xs font-serif font-bold text-[#786b5e] group-hover:text-[#9c4928] transition-colors">
                    <span>{currentLang === 'es' ? 'Entrar a Comunicaciones' : 'Enter Communications'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* 2. PUERTA CIENTÍFICO (Verde Bosque / Cartografía y Cuencas) */}
                <div 
                  onClick={() => {
                    handleToggleProfile('science');
                    setHasEntered(true);
                    setActiveTabIndex(0);
                    setCurrentSlideIndex(0);
                    window.location.hash = '#portada';
                  }}
                  className="group relative cursor-pointer rounded-2xl border border-[#dad0be] hover:border-[#2d5a3c] bg-[#fdfbf7] hover:bg-[#f3f7f4] p-6 text-left transition-all duration-300 hover:scale-[1.01] shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#eef4ef] border border-[#a8c4a9] text-[#2d5a3c] flex items-center justify-center group-hover:bg-[#e3ede4] transition">
                        <Microscope className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#2d5a3c] font-bold px-2 py-0.5 rounded bg-[#eef4ef] border border-[#a8c4a9]">
                        Dual M.Sc.
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#1c1917] group-hover:text-[#2d5a3c] transition-colors">
                        {currentLang === 'es' ? 'Expediente Científico' : 'Scientific Dossier'}
                      </h3>
                      <p className="text-xs text-[#5c5247] mt-1.5 leading-relaxed font-sans">
                        {currentLang === 'es'
                          ? 'Geofísica de cuencas (FCFM U. de Chile), modelación de balances ecohidrológicos, monitoreo en Maule y análisis de gobernanza en Europa.'
                          : 'Catchment geophysics (U. de Chile), ecohydrological modeling, Maule field monitoring, and European land governance analysis.'}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#ded5c5] group-hover:border-[#2d5a3c]/30 flex items-center justify-between text-xs font-serif font-bold text-[#786b5e] group-hover:text-[#2d5a3c] transition-colors">
                    <span>{currentLang === 'es' ? 'Entrar a Científico' : 'Enter Scientific'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>

              {/* Direct Full Access & Mesa de Luz Shortcuts */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setViewFormat('mesa');
                    window.location.hash = '#mesa';
                  }}
                  className="px-6 py-2.5 rounded-full border-2 border-[#d97706] text-[#7f3419] bg-[#fbf5eb] hover:bg-[#faebd7] font-serif text-xs font-bold transition-all flex items-center space-x-2 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>{currentLang === 'es' ? 'Abrir Mesa de Luz de Taller (Nuevo Formato)' : 'Open Workshop Light Table (New Format)'}</span>
                </button>

                <button
                  onClick={() => {
                    setHasEntered(true);
                    setActiveTabIndex(1);
                    setCurrentSlideIndex(0);
                    window.location.hash = '#intervencion';
                  }}
                  className="px-6 py-2.5 rounded-full border border-[#d6cab6] hover:border-[#b85d38] text-[#5c5247] hover:text-[#1c1917] bg-[#ede6d8]/70 hover:bg-[#ede6d8] font-serif text-xs font-medium transition-all flex items-center space-x-2 shadow-sm"
                >
                  <span>{currentLang === 'es' ? 'Explorar Dossier clásico' : 'Explore classic dossier'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#786b5e]" />
                </button>
              </div>

            </div>
          ) : isComms ? (
            currentItem.type === 'press' ? (
              /* MODO EDITORIAL: VISOR DE PRENSA Y HEMEROTECA DOCUMENTAL (100% VISIBLE) */
              <div className="relative w-full flex flex-col space-y-5 animate-fadeIn">
              {/* 1. MESA DE HEMEROTECA / RECORTE COMPLETO Y LEGIBLE */}
              <div className="relative w-full rounded-2xl bg-[#fdfbf7] border border-[#dcd1be] shadow-sm overflow-hidden flex flex-col">
                {/* Hemeroteca Header Bar */}
                <div className="w-full px-4 sm:px-6 py-2.5 bg-[#ede6d8] border-b border-[#dad0bf] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#b85d38]" />
                    <span className="font-serif font-bold text-xs text-[#2c2620]">
                      {currentItem.authorOrSource}
                    </span>
                    <span className="text-[#a39482]">•</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#786b5e]">
                      {currentLang === 'es' ? 'Recorte de Prensa' : 'Press Archive'}
                    </span>
                  </div>

                  {/* Original Article Link Pill */}
                  {currentItem.url && (
                    <a
                      href={currentItem.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#fdfbf7] hover:bg-[#9c4928] text-[#7f3419] hover:text-white border border-[#d6cab6] hover:border-[#9c4928] text-xs font-mono transition shadow-sm"
                      title={currentLang === 'es' ? 'Abrir publicación original' : 'Open original article'}
                    >
                      <span className="truncate max-w-[200px] sm:max-w-[340px]">
                        {currentItem.url.replace(/^https?:\/\//, '')}
                      </span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  )}

                  {/* Counter Badge */}
                  <div className="px-2.5 py-0.5 rounded-full bg-[#f4ece0] border border-[#dfd4c1] text-[#7f3419] font-mono text-[11px] font-semibold">
                    {currentLang === 'es' ? 'Nota' : 'Article'} {currentSlideIndex + 1} / {items.length}
                  </div>
                </div>

                {/* Screenshot Display: 100% visible, archival matting with gentle shadow */}
                <div className="relative w-full p-3 sm:p-6 bg-[#ebe3d3] border-b border-[#dad0bf] flex items-center justify-center min-h-[360px]">
                  <img
                    src={resolveAsset(currentItem.src)}
                    alt={currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                    className="w-full h-auto max-h-[72vh] object-contain rounded-lg shadow-md bg-white p-1"
                  />
                </div>

                {/* Navigation controls inside the visor */}
                {items.length > 1 && (
                  <div className="w-full flex items-center justify-between px-4 sm:px-6 py-2.5 bg-[#ede6d8]">
                    <div className="flex items-center space-x-1.5">
                      {items.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setCurrentSlideIndex(dotIdx)}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            dotIdx === currentSlideIndex
                              ? 'w-7 bg-[#9c4928]'
                              : 'w-2 bg-[#cfc4b1] hover:bg-[#b0a490]'
                          }`}
                          title={`Ver nota ${dotIdx + 1}`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={handlePrevSlide}
                        className="px-3 py-1.5 rounded-full bg-[#fdfbf7] border border-[#d6cab6] hover:border-[#9c4928] text-xs font-serif text-[#2c2620] hover:bg-[#9c4928] hover:text-white transition flex items-center space-x-1 shadow-sm"
                        title="Anterior (←)"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <span>{currentLang === 'es' ? 'Anterior' : 'Prev'}</span>
                      </button>
                      <button
                        onClick={handleNextSlide}
                        className="px-3 py-1.5 rounded-full bg-[#fdfbf7] border border-[#d6cab6] hover:border-[#9c4928] text-xs font-serif text-[#2c2620] hover:bg-[#9c4928] hover:text-white transition flex items-center space-x-1 shadow-sm"
                        title="Siguiente (→)"
                      >
                        <span>{currentLang === 'es' ? 'Siguiente' : 'Next'}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. CONTEXTO EDITORIAL Y RIGOR PERIODÍSTICO DIRECTO ABAJO */}
              <div className="w-full rounded-2xl bg-[#fdfbf7] border border-[#ded5c5] p-5 sm:p-7 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#e2d8c7] pb-4 mb-4">
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-serif font-bold text-[#9c4928] uppercase tracking-wider mb-1">
                      <span>{currentItem.authorOrSource || 'Prensa de Investigación'}</span>
                      {currentItem.date && <span className="opacity-60">• {currentItem.date}</span>}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1c1917] leading-snug">
                      {currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                    </h3>

                    {(currentItem.subtitleEn || currentItem.subtitleEs) && (
                      <p className="text-xs sm:text-sm font-sans font-medium text-[#7f3419] mt-1">
                        {currentLang === 'es' ? currentItem.subtitleEs : currentItem.subtitleEn}
                      </p>
                    )}
                  </div>

                  {currentItem.url && (
                    <a
                      href={currentItem.url}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 px-4 py-2.5 rounded-full bg-[#9c4928] hover:bg-[#7f3419] text-white font-serif font-bold text-xs flex items-center space-x-2 shadow-sm transition"
                    >
                      <span>{currentLang === 'es' ? 'Leer en el Medio Original' : 'Read on Original Outlet'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Full Article Synopsis & Impact */}
                <div className="space-y-3 text-xs sm:text-sm text-[#352f29] leading-relaxed font-sans">
                  <p>{currentLang === 'es' ? currentItem.captionEs : currentItem.captionEn}</p>
                  
                  {/* Category / Topic Tags */}
                  {currentItem.tags && currentItem.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#ded5c5]">
                      {currentItem.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#f8ede7] border border-[#e5b5a4] text-[#8a3315]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Series Chapters / Sub-links if available */}
                  {currentItem.subLinks && currentItem.subLinks.length > 0 && (
                    <div className="pt-3 border-t border-[#ded5c5]">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#9c4928] font-bold block mb-2">
                        {currentLang === 'es' ? 'Capítulos y entregas de la serie:' : 'Series Chapters & Parts:'}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {currentItem.subLinks.map((sub, sIdx) => (
                          <a
                            key={sIdx}
                            href={sub.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between p-2.5 rounded-xl bg-[#f7f2e7] hover:bg-[#ede5d4] border border-[#ded4c3] text-[#2c2620] text-xs font-sans transition group"
                          >
                            <span className="truncate pr-2 font-medium">
                              {currentLang === 'es' ? sub.titleEs : sub.titleEn}
                            </span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#9c4928] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* MODO EDITORIAL: TARJETA PANORÁMICA DE CAMPAÑA (TINTA TERRAROTA & PAPEL) */
            <div className="relative w-full rounded-2xl sm:rounded-3xl border border-[#ded5c5] shadow-sm hover:shadow-md overflow-hidden flex flex-col lg:flex-row min-h-[420px] lg:h-[470px] transition-all duration-300 bg-[#fdfbf7]">
              {/* LEFT: Media Viewport */}
              <div
                className="relative lg:w-[56%] flex items-center justify-center overflow-hidden group min-h-[260px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-[#ded5c5] bg-[#ebe3d3] p-2 sm:p-3"
              >
                {currentItem.type === 'video' && currentItem.embedUrl ? (
                  <div className="relative w-full h-full aspect-video bg-[#181512] flex items-center justify-center rounded-xl overflow-hidden shadow-md">
                    <iframe
                      src={currentItem.embedUrl}
                      title={currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : currentItem.type === 'audio' ? (
                  <div 
                    onClick={() => setSelectedMedia(currentItem)}
                    className="w-full h-full p-6 flex flex-col items-center justify-center text-center space-y-3 bg-[#f5ede1] rounded-xl border border-[#dad0bf] cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#fdfbf7] border border-[#d6cab6] text-[#9c4928] group-hover:scale-105 transition shadow-sm">
                      <Volume2 className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-serif uppercase tracking-wider font-bold text-[#9c4928]">
                        {currentLang === 'es' ? 'CÁPSULA RADIAL COMUNITARIA' : 'COMMUNITY RADIO CAPSULE'}
                      </span>
                      <p className="text-xs opacity-80 mt-1 text-[#5c5247]">{currentItem.authorOrSource}</p>
                    </div>
                  </div>
                ) : currentItem.type === 'instagram' ? (
                  <div 
                    onClick={() => {
                      if (currentItem.url) window.open(currentItem.url, '_blank');
                      else setSelectedMedia(currentItem);
                    }}
                    className="relative w-full h-full min-h-[300px] flex items-center justify-center p-2 bg-[#ebe3d3] cursor-pointer group/ig"
                  >
                    {currentItem.src ? (
                      <div className="relative w-full max-h-[440px] flex items-center justify-center overflow-hidden rounded-xl shadow-md bg-[#181512] p-1">
                        <img
                          src={resolveAsset(currentItem.src)}
                          alt={currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                          className="max-w-full max-h-[430px] w-auto h-auto object-contain transition-transform duration-500 group-hover/ig:scale-[1.02] rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 bg-[#9c4928] text-white text-xs px-2.5 py-1 rounded-full font-serif font-semibold shadow-md">
                              <InstagramIcon className="w-3 h-3" />
                              <span>{currentItem.tags?.[0] || 'Instagram'}</span>
                            </div>
                            <span className="text-[10px] font-mono text-white/95 bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/20 flex items-center space-x-1">
                              <span>{currentLang === 'es' ? 'Ver en Instagram' : 'View on Instagram'}</span>
                              <ExternalLink className="w-3 h-3 text-[#dfa38f]" />
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full max-w-[340px] p-5 rounded-2xl bg-[#fdfbf7] border border-[#dad0bf] flex flex-col items-center text-center space-y-2.5 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-[#fbf0eb] border border-[#dfa38f] text-[#9c4928] flex items-center justify-center shadow-sm">
                          <InstagramIcon className="w-6 h-6" />
                        </div>
                        <h4 className="text-[#1c1917] font-serif font-bold text-sm">
                          {currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                        </h4>
                        <p className="text-[11px] text-[#5c5247] font-sans">
                          {currentItem.captionEs || currentItem.captionEn}
                        </p>
                        <a
                          href={currentItem.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="mt-1 px-3.5 py-1.5 rounded-full bg-[#9c4928] hover:bg-[#7f3419] text-white font-serif text-xs font-semibold flex items-center space-x-1.5 shadow-sm transition"
                        >
                          <span>{currentLang === 'es' ? 'Abrir publicación' : 'Open post'}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <div 
                    onClick={() => setSelectedMedia(currentItem)}
                    className="relative w-full h-full flex items-center justify-center bg-[#ebe3d3] cursor-pointer"
                  >
                    <img
                      src={resolveAsset((currentLang === 'en' && currentItem.srcEn) ? currentItem.srcEn : currentItem.src)}
                      alt={currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                      className="max-w-full max-h-[440px] w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01] rounded-lg shadow-sm bg-white p-1"
                    />
                  </div>
                )}

                {/* Badge Indicator */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-medium shadow-sm bg-[#fdfbf7]/95 border-[#d6cab6] text-[#7f3419] pointer-events-none z-10">
                  {currentSlideIndex + 1} / {items.length}
                </div>

                {/* Always visible Floating Navigation Arrows over media viewport */}
                {items.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevSlide();
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#fdfbf7]/95 hover:bg-[#9c4928] border border-[#d6cab6] hover:border-[#9c4928] text-[#2c2620] hover:text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 active:scale-95"
                      title={currentLang === 'es' ? 'Ficha anterior (←)' : 'Previous item (←)'}
                      aria-label="Previous item"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextSlide();
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#fdfbf7]/95 hover:bg-[#9c4928] border border-[#d6cab6] hover:border-[#9c4928] text-[#2c2620] hover:text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 active:scale-95"
                      title={currentLang === 'es' ? 'Ficha siguiente (→)' : 'Next item (→)'}
                      aria-label="Next item"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* RIGHT: Fluid Editorial Description */}
              <div className="lg:w-[44%] p-4 sm:p-5 lg:p-6 flex flex-col justify-between space-y-3 bg-[#fdfbf7] overflow-y-auto max-h-[470px] no-scrollbar">
                <div>
                  {/* TOP NAVIGATION & SLIDER CONTROLS */}
                  <div className="pb-2.5 mb-2.5 border-b border-[#ded5c5] flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      {items.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setCurrentSlideIndex(dotIdx)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            dotIdx === currentSlideIndex
                              ? 'w-6 bg-[#9c4928]'
                              : 'w-2 bg-[#d6cab6] hover:bg-[#b5a793]'
                          }`}
                          title={`Ir a ficha ${dotIdx + 1}`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center space-x-1.5">
                      <button
                        onClick={handlePrevSlide}
                        className="p-1.5 sm:p-2 rounded-full border border-[#d6cab6] hover:border-[#9c4928] text-[#2c2620] hover:text-white bg-[#f8f4ec] hover:bg-[#9c4928] transition shadow-sm hover:scale-105 active:scale-95"
                        title="Anterior (←)"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={handleNextSlide}
                        className="p-1.5 sm:p-2 rounded-full border border-[#d6cab6] hover:border-[#9c4928] text-[#2c2620] hover:text-white bg-[#f8f4ec] hover:bg-[#9c4928] transition shadow-sm hover:scale-105 active:scale-95"
                        title="Siguiente (→)"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setSelectedMedia(currentItem)}
                        className="ml-1 px-3 py-1.5 rounded-full font-serif font-bold text-xs bg-[#9c4928] hover:bg-[#7f3419] text-white transition shadow-sm flex items-center space-x-1 hover:scale-105 active:scale-95"
                        title="Expandir modal"
                      >
                        <span>{currentLang === 'es' ? 'Ver Full' : 'Full View'}</span>
                        <Maximize2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] mb-1.5 font-serif font-semibold tracking-wider uppercase text-[#9c4928]">
                    <span>{currentItem.authorOrSource || 'Archivo de Campo'}</span>
                    {currentItem.date && <span className="font-mono opacity-60 text-[#786b5e]">{currentItem.date}</span>}
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold leading-tight text-[#1c1917]">
                    {currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                  </h3>

                  {(currentItem.subtitleEn || currentItem.subtitleEs) && (
                    <p className="text-xs font-sans font-medium mt-1 text-[#7f3419]">
                      {currentLang === 'es' ? currentItem.subtitleEs : currentItem.subtitleEn}
                    </p>
                  )}

                  <p className="text-xs leading-relaxed mt-2.5 font-sans text-[#352f29]">
                    {currentLang === 'es' ? currentItem.captionEs : currentItem.captionEn}
                  </p>

                  {/* Series / Event Gallery Links (Visual Thumbnails Mosaic) */}
                  {currentItem.subLinks && currentItem.subLinks.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-[#ded5c5]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#9c4928] font-bold">
                          {currentLang === 'es' ? 'Galerías & Entregas Relacionadas:' : 'Related Galleries & Releases:'}
                        </span>
                        <span className="text-[10px] font-mono text-[#786b5e]">
                          {currentItem.subLinks.length} {currentLang === 'es' ? 'registros' : 'items'}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5">
                        {currentItem.subLinks.map((sub, sIdx) => (
                          <a
                            key={sIdx}
                            href={sub.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative rounded-lg overflow-hidden border border-[#dad0bf] bg-[#f7f2e7] hover:border-[#9c4928] transition shadow-sm flex flex-col"
                            title={currentLang === 'es' ? sub.titleEs : sub.titleEn}
                          >
                            {sub.src ? (
                              <div className="relative w-full h-12 bg-black overflow-hidden">
                                <img
                                  src={resolveAsset(sub.src)}
                                  alt={currentLang === 'es' ? sub.titleEs : sub.titleEn}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-black/70 flex items-center justify-center opacity-80 group-hover:opacity-100">
                                  <ExternalLink className="w-2.5 h-2.5 text-amber-200" />
                                </div>
                              </div>
                            ) : (
                              <div className="w-full h-10 bg-[#ede5d6] flex items-center justify-center">
                                <ExternalLink className="w-3.5 h-3.5 text-[#9c4928]" />
                              </div>
                            )}
                            <div className="p-1.5 bg-[#fdfbf7] flex-1 flex items-center">
                              <span className="text-[10px] leading-tight font-sans font-medium text-[#352f29] group-hover:text-[#9c4928] line-clamp-2">
                                {currentLang === 'es' ? sub.titleEs : sub.titleEn}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentItem.url && (
                    <div className="mt-3 pt-2 border-t border-[#ded5c5]">
                      <a
                        href={currentItem.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-serif font-semibold text-[#9c4928] hover:text-[#7f3419] hover:underline"
                      >
                        <span>{currentLang === 'es' ? 'Ver publicación original' : 'Open original article / link'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        ) : (
          /* MODO DIURNO: FORMATO CIENTÍFICO COMPLETO (FICHA COMPLETA SIN RECORTAR CON DETALLE ABAJO) */
          <div className="relative w-full flex flex-col space-y-5 animate-fadeIn">
            {/* 1. LÁMINA CIENTÍFICA COMPLETA (VISIBLE AL 100% DESDE EL INICIO) */}
            <div className="relative w-full rounded-2xl bg-[#ede5d6]/70 border border-[#d8cdb9] shadow-sm overflow-hidden p-2 sm:p-4 flex flex-col items-center justify-center">
              <div className="relative w-full flex items-center justify-center rounded-xl overflow-hidden bg-white/70 p-1">
                <img
                  src={resolveAsset((currentLang === 'en' && currentItem.srcEn) ? currentItem.srcEn : currentItem.src)}
                  alt={currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                  className="w-full h-auto max-h-[68vh] object-contain rounded-lg shadow-sm"
                />
              </div>

              {/* Top Ticker on the Document */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#fdfbf7] border border-[#d0c4b0] text-xs font-mono font-semibold text-[#2d5a3c] shadow-sm">
                {currentLang === 'es' ? 'Lámina' : 'Plate'} {currentSlideIndex + 1} de {items.length}
              </div>

              {/* Controls bar inside document */}
              {items.length > 1 && (
                <div className="w-full flex items-center justify-between px-2 pt-3">
                  <div className="flex items-center space-x-1.5">
                    {items.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setCurrentSlideIndex(dotIdx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          dotIdx === currentSlideIndex
                            ? 'w-8 bg-[#2d5a3c]'
                            : 'w-2.5 bg-[#cfc3af] hover:bg-[#b5a791]'
                        }`}
                        title={`Lámina ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handlePrevSlide}
                      className="px-3 py-1.5 rounded-full bg-[#fdfbf7] border border-[#d0c4b0] hover:border-[#2d5a3c] text-xs font-serif text-[#2c2620] hover:bg-[#2d5a3c] hover:text-white transition flex items-center space-x-1 shadow-sm"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>{currentLang === 'es' ? 'Anterior' : 'Prev'}</span>
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="px-3 py-1.5 rounded-full bg-[#fdfbf7] border border-[#d0c4b0] hover:border-[#2d5a3c] text-xs font-serif text-[#2c2620] hover:bg-[#2d5a3c] hover:text-white transition flex items-center space-x-1 shadow-sm"
                    >
                      <span>{currentLang === 'es' ? 'Siguiente' : 'Next'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. TEXTO DESCRIPTIVO Y RIGOR CIENTÍFICO DIRECTO ABAJO */}
            <div className="w-full rounded-2xl bg-[#fdfbf7] border border-[#ded5c5] p-5 sm:p-7 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#e2d8c7] pb-4 mb-4">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-serif font-bold text-[#2d5a3c] uppercase tracking-wider mb-1">
                    <span>{currentItem.authorOrSource || 'Expedición Científica'}</span>
                    {currentItem.date && <span className="opacity-60">• {currentItem.date}</span>}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1c1917] leading-snug">
                    {currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                  </h3>

                  {(currentItem.subtitleEn || currentItem.subtitleEs) && (
                    <p className="text-xs sm:text-sm font-sans font-medium text-[#2d5a3c] mt-1">
                      {currentLang === 'es' ? currentItem.subtitleEs : currentItem.subtitleEn}
                    </p>
                  )}
                </div>

                {currentItem.url && (
                  <a
                    href={currentItem.url}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 px-4 py-2 rounded-full bg-[#2d5a3c] hover:bg-[#22472f] text-white font-serif font-bold text-xs flex items-center space-x-1.5 shadow-sm transition"
                  >
                    <span>{currentLang === 'es' ? 'Abrir Fuente / Publicación' : 'View Publication'}</span>
                    <ZoomIn className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Full Description & Methodology */}
              <div className="space-y-3 text-xs sm:text-sm text-[#352f29] leading-relaxed font-sans">
                <p>{currentLang === 'es' ? currentItem.captionEs : currentItem.captionEn}</p>
                
                {/* Outcomes / details if available */}
                {(currentLang === 'es' ? currentItem.detailsEs : currentItem.detailsEn) && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2 border-t border-[#e8dfcf]">
                    {(currentLang === 'es' ? currentItem.detailsEs : currentItem.detailsEn)?.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start space-x-2 text-xs text-[#463e36]">
                        <span className="text-[#2d5a3c] font-bold mt-0.5">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
        </>
      )}

      {/* 4. FOOTER */}
      <footer className="relative z-20 w-full py-3.5 px-6 text-center text-xs font-serif border-t border-[#ded5c5] bg-[#f2ebdf] text-[#63584e] transition-colors">
        <span>
          {viewFormat === 'mesa'
            ? `© ${new Date().getFullYear()} Daniel Santander Urrutia • Mesa de Luz de Taller & Geofísica Territorial • FCFM Universidad de Chile • Dual M.Sc. Kiel / Poznań`
            : `© ${new Date().getFullYear()} Daniel Santander Urrutia • Dossier Editorial & Científico • Usa ← y →`}
        </span>
      </footer>

      {/* Modal Lightbox */}
      <ModalViewer
        item={selectedMedia}
        currentLang={currentLang}
        onClose={() => setSelectedMedia(null)}
      />
    </div>
  );
}

export default App;
