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

export function resolveAsset(path?: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  // Strip leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [profileMode, setProfileMode] = useState<ProfileMode>('comms');
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [hasEntered, setHasEntered] = useState<boolean>(false);

  // Sync tab and entered state with URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase().replace(/^#/, '');
      if (hash === 'acceso' || hash === 'portada' || hash === '' || hash === '/') {
        // Stay on welcome screen or tab 0
        setActiveTabIndex(0);
      } else if (hash.length > 1) {
        setHasEntered(true);
        const sections = profileMode === 'comms' ? communicationsSections : scientificSections;
        const foundIdx = sections.findIndex(
          (s) => s.id.toLowerCase() === hash || s.tabKey.toLowerCase().includes(hash)
        );
        if (foundIdx > 0) {
          setActiveTabIndex(foundIdx);
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
  const items = activeSection.mediaItems;
  const currentItem = items[currentSlideIndex] || items[0];

  // Switch between nocturnal comms and diurnal science
  const handleToggleProfile = (mode: ProfileMode) => {
    setProfileMode(mode);
    if (hasEntered) {
      // In comms, tab 0 is the welcome entrance gate, so we activate tab 1 (01. Cultura) directly
      // In science, tab 0 is the scientific dossier cover (00. Portada), so we activate tab 0 directly
      setActiveTabIndex(mode === 'comms' ? 1 : 0);
      window.location.hash = mode === 'comms' ? '#cultura' : '#portada';
    } else {
      setActiveTabIndex(0);
    }
    setCurrentSlideIndex(0);
  };

  const handleSelectTab = (index: number) => {
    setActiveTabIndex(index);
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
    <div
      className={`relative min-h-screen transition-colors duration-500 flex flex-col justify-between overflow-x-hidden select-none ${
        !hasEntered
          ? 'bg-[#121214] text-[#f4f4f5]' // Estética neutra, minimalista y equilibrada para el menú de entrada
          : isComms
          ? 'bg-[#0c0a07] text-[#fefce8]' // Fondo cálido noche café-negro profundo con tintes ámbar
          : 'bg-[#faf8f4] text-[#1c1917]' // Fondo diurno papel crema / beige claro (científico y biofísico)
      }`}
    >
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {!hasEntered ? (
          /* Brillo neutral equilibrado: dorado tenue a la izquierda y verde esmeralda tenue a la derecha */
          <>
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full" />
          </>
        ) : isComms ? (
          <>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-amber-500/15 via-amber-950/25 to-transparent blur-[150px] rounded-full" />
            <div className="absolute bottom-10 right-10 w-[550px] h-[450px] bg-yellow-500/10 blur-[140px] rounded-full" />
            <div className="absolute top-1/3 left-10 w-[450px] h-[350px] bg-orange-600/10 blur-[130px] rounded-full" />
          </>
        ) : (
          <>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-b from-[#e8decb]/60 via-[#efe8da]/40 to-transparent blur-[120px] rounded-full" />
            <div className="absolute bottom-10 right-10 w-[600px] h-[450px] bg-[#dbe8df]/50 blur-[130px] rounded-full" />
          </>
        )}
      </div>

      {/* 1. TOP HEADER: MODE TOGGLE & BRANDING */}
      <header
        className={`relative z-40 w-full px-4 sm:px-8 py-4 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-b transition-colors duration-300 ${
          !hasEntered
            ? 'border-neutral-800'
            : isComms
            ? 'border-amber-500/20'
            : 'border-[#e4dcce]'
        }`}
      >
        {/* Identity & Sub-brand (Clickable to Access & Intro) */}
        <div 
          onClick={() => {
            setHasEntered(false);
            setActiveTabIndex(0);
          }}
          className="flex items-center space-x-3.5 self-start sm:self-center cursor-pointer group"
          title={currentLang === 'es' ? 'Ir a portada de acceso // Go to Access & Intro' : 'Go to Access & Intro'}
        >
          <div
            className={`w-9 h-9 rounded-2xl flex items-center justify-center shadow-md transition-all group-hover:scale-105 overflow-hidden ${
              !hasEntered
                ? 'bg-neutral-900 border border-neutral-700 text-neutral-300 p-1'
                : isComms
                ? 'bg-[#18130c] border border-amber-500/40 text-amber-400 p-1 shadow-amber-500/10'
                : 'bg-[#eae3d5] border border-[#d0c4b0] text-[#2d5a3c] p-1'
            }`}
          >
            <img src="/favicon.svg" alt="DS Icon" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-serif font-bold tracking-wide flex items-center gap-2">
              <span className={!hasEntered ? 'text-white group-hover:text-amber-300 transition-colors' : isComms ? 'group-hover:text-amber-300 transition-colors' : 'group-hover:text-[#2d5a3c] transition-colors'}>
                DANIEL SANTANDER URRUTIA
              </span>
              <span className={!hasEntered ? 'text-neutral-600' : isComms ? 'text-amber-600/60' : 'text-neutral-400'}>//</span>
              <span
                className={`text-xs font-sans font-medium hidden md:inline ${
                  !hasEntered
                    ? 'text-neutral-400'
                    : isComms
                    ? 'text-amber-400'
                    : 'text-[#2d5a3c]'
                }`}
              >
                {!hasEntered
                  ? currentLang === 'es'
                    ? 'Portafolio Profesional • Doble Vertiente'
                    : 'Professional Portfolio • Dual Edition'
                  : isComms
                  ? currentLang === 'es'
                    ? 'Comunicaciones Estratégicas & Campañas (+700k)'
                    : 'Strategic Communications & Campaigns (+700k)'
                  : currentLang === 'es'
                  ? 'Científico Ambiental (Dual M.Sc.)'
                  : 'Environmental Scientist (Dual M.Sc.)'}
              </span>
            </h1>
          </div>
        </div>

        {/* Action Controls: Profile Switcher (Solo visible tras entrar al portafolio) + Language + Share */}
        <div className="flex items-center space-x-2.5 self-end sm:self-center">
          {/* DUAL PROFILE SWITCHER (OCULTO EN EL MENÚ DE ENTRADA PARA EVITAR CONFUSIONES) */}
          {hasEntered && (
            <div
              className={`p-1 rounded-full border flex items-center shadow-sm backdrop-blur-md transition-colors ${
                isComms
                  ? 'bg-[#19140e]/90 border-amber-500/35'
                  : 'bg-[#ede5d6]/90 border-[#d0c4b0]'
              }`}
            >
              <button
                onClick={() => handleToggleProfile('comms')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-300 ${
                  isComms
                    ? 'bg-amber-400 text-[#0c0a07] font-bold shadow-md shadow-amber-500/30'
                    : 'text-neutral-600 hover:text-black'
                }`}
                title="Modo Nocturno Cálido: Comunicaciones y Campañas"
              >
                <Moon className="w-3.5 h-3.5" />
                <span>{currentLang === 'es' ? 'Comunicaciones' : 'Communications'}</span>
              </button>

              <button
                onClick={() => handleToggleProfile('science')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-300 ${
                  !isComms
                    ? 'bg-[#2d5a3c] text-white font-bold shadow-md'
                    : 'text-amber-200/60 hover:text-amber-100'
                }`}
                title="Modo Diurno: Científico y Biofísica"
              >
                <Sun className="w-3.5 h-3.5" />
                <span>{currentLang === 'es' ? 'Científico' : 'Scientific'}</span>
              </button>
            </div>
          )}

          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border text-xs font-sans transition shadow-sm backdrop-blur-md ${
              !hasEntered
                ? 'border-neutral-700 bg-neutral-900/80 text-neutral-200 hover:bg-neutral-800'
                : isComms
                ? 'border-amber-500/30 bg-[#18130c]/80 text-amber-300 hover:bg-amber-500/10'
                : 'border-[#d0c4b0] bg-[#ede5d6]/80 text-neutral-800 hover:bg-[#e4dcce]'
            }`}
          >
            <Globe className={`w-3.5 h-3.5 ${!hasEntered ? 'text-neutral-400' : isComms ? 'text-amber-400' : 'text-[#2d5a3c]'}`} />
            <span className="font-bold">{currentLang === 'es' ? 'ES' : 'EN'}</span>
            <span className="opacity-40">/</span>
            <span className="opacity-70">{currentLang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          {/* Share Link */}
          <button
            onClick={handleCopyLink}
            className={`p-2 rounded-full border text-xs transition shadow-sm backdrop-blur-md ${
              !hasEntered
                ? 'border-neutral-700 bg-neutral-900/80 text-neutral-300 hover:bg-neutral-800 hover:text-white'
                : isComms
                ? 'border-amber-500/30 bg-[#18130c]/80 text-amber-200 hover:bg-amber-500/10 hover:text-white'
                : 'border-[#d0c4b0] bg-[#ede5d6]/80 text-neutral-700 hover:bg-[#e4dcce] hover:text-black'
            }`}
            title="Copiar enlace"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* 2. FLOATING TAB PILLS (MENÚ FLOTANTE MÁS COMPACTO Y ELEGANTE EN MODO CIENTÍFICO) */}
      {hasEntered ? (
        <div className={`sticky top-2.5 z-40 w-full px-3 flex justify-center ${isComms ? 'mb-3 sm:mb-4' : 'mb-2 sm:mb-3'}`}>
          <nav
            className={`inline-flex items-center border backdrop-blur-xl shadow-xl overflow-x-auto max-w-[98vw] no-scrollbar transition-all duration-300 ${
              isComms
                ? 'p-1.5 rounded-full bg-[#18130d]/95 border-amber-500/30'
                : 'p-1 rounded-full bg-[#ede5d6]/95 border-[#d0c4b0] shadow-md'
            }`}
          >
            {/* Always accessible Return to Welcome & Cover button */}
            <button
              onClick={() => {
                setHasEntered(false);
                setActiveTabIndex(0);
                window.location.hash = '#portada';
              }}
              className={`relative rounded-full font-medium transition-all duration-300 shrink-0 flex items-center space-x-1.5 ${
                isComms
                  ? 'px-3 py-1.5 sm:px-4 sm:py-1.5 text-xs bg-amber-500/15 border border-amber-400/40 text-amber-300 hover:bg-amber-500/30'
                  : 'px-3 py-1.5 text-[11px] sm:text-xs bg-[#2d5a3c]/15 border border-[#2d5a3c]/40 text-[#2d5a3c] hover:bg-[#2d5a3c]/25'
              }`}
              title={currentLang === 'es' ? 'Volver a la portada' : 'Return to Cover'}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-mono text-[10px] opacity-75">00.</span>
              <span className="font-serif tracking-tight whitespace-nowrap">
                {currentLang === 'es' ? 'Portada' : 'Cover'}
              </span>
            </button>

            {/* Content Section Tabs */}
            {activeSections.slice(1).map((sec, originalIdx) => {
              const idx = originalIdx + 1;
              const isActive = activeTabIndex === idx;
              // Full title for tab
              const tabTitle = currentLang === 'es'
                ? (sec.tabTitleEs || sec.tabKey.replace(/^\d+\.\s*/, ''))
                : (sec.tabTitleEn || sec.tabKey.replace(/^\d+\.\s*/, ''));
              
              // Tab index prefix: 01., 02., etc.
              const prefix = `0${idx}.`;

              return (
                <button
                  key={sec.id}
                  onClick={() => handleSelectTab(idx)}
                  className={`relative rounded-full font-medium transition-all duration-300 shrink-0 flex items-center space-x-1.5 ${
                    isComms
                      ? `px-4 py-2 sm:px-5 sm:py-2 text-xs ${
                          isActive
                            ? 'bg-amber-400 text-[#0c0a07] font-bold shadow-lg shadow-amber-500/25 scale-[1.02]'
                            : 'text-amber-100/70 hover:text-white hover:bg-amber-500/10'
                        }`
                      : `px-3 py-1.5 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs ${
                          isActive
                            ? 'bg-[#2d5a3c] text-white font-bold shadow-md scale-[1.02]'
                            : 'text-neutral-700 hover:text-black hover:bg-black/5'
                        }`
                  }`}
                >
                  <span className={`font-mono ${isComms ? 'text-[10px] opacity-70' : 'text-[9.5px] opacity-60'}`}>
                    {prefix}
                  </span>
                  <span className="font-serif tracking-tight whitespace-nowrap">{tabTitle}</span>
                </button>
              );
            })}
          </nav>
        </div>
      ) : (
        /* Top badge when in Welcome Gate view */
        <div className="w-full flex justify-center py-2">
          <div className={`px-4 py-1.5 rounded-full border text-xs font-mono font-semibold flex items-center space-x-2 backdrop-blur-md ${
            isComms ? 'bg-[#18130c]/90 border-amber-400/40 text-amber-300 shadow-lg shadow-amber-500/10' : 'bg-[#ede5d6] border-[#d0c4b0] text-[#2d5a3c]'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>{currentLang === 'es' ? 'PORTADA Y PRESENTACIÓN EJECUTIVA' : 'COVER & EXECUTIVE BRIEFING'}</span>
          </div>
        </div>
      )}

      {/* 3. MAIN CENTRAL PANORAMIC STAGE */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 w-full max-w-6xl mx-auto my-auto py-2">
        {/* Chapter Header Ribbon (Omit on dedicated Cover Gate to maintain clean heroic focus) */}
        {activeSection.id !== 'portada-portafolio' && (
          <div className="w-full text-center max-w-3xl mb-4 animate-fadeIn">
            <div
              className={`inline-flex items-center space-x-2 px-4 py-1 rounded-full border text-xs font-sans uppercase shadow-sm transition-colors ${
                isComms
                  ? 'bg-[#18130c] border-amber-500/35 text-amber-400'
                  : 'bg-[#eae3d5] border-[#d0c4b0] text-[#2d5a3c]'
              }`}
            >
              <span>
                {isComms
                  ? currentLang === 'es'
                    ? 'CAMPAÑAS & MEDIOS'
                    : 'CAMPAIGNS & MEDIA'
                  : currentLang === 'es'
                  ? 'EXPEDIENTE CIENTÍFICO'
                  : 'SCIENTIFIC DOSSIER'}
              </span>
              <span className="opacity-40">•</span>
              <span className="font-bold">
                {currentLang === 'es' ? activeSection.badgeEs : activeSection.badgeEn}
              </span>
            </div>

            <h2
              className={`text-2xl sm:text-4xl font-serif font-bold tracking-tight mt-2 transition-colors ${
                isComms ? 'text-white' : 'text-neutral-900'
              }`}
            >
              {currentLang === 'es' ? activeSection.titleEs : activeSection.titleEn}
            </h2>
            <p
              className={`text-xs sm:text-sm font-medium mt-1 transition-colors ${
                isComms ? 'text-amber-300/90' : 'text-[#3c6e4e]'
              }`}
            >
              {currentLang === 'es' ? activeSection.roleEs : activeSection.roleEn}
            </p>
          </div>
        )}

        {/* The Central Stage: Conditional Layout for Comms vs Science */}
        {!hasEntered ? (
          /* ENTRADA MINIMALISTA REPRESENTATIVA DE AMBOS MODOS (COMUNICACIONES & CIENTÍFICO) */
          <div className="relative w-full max-w-4xl mx-auto py-6 sm:py-10 animate-fadeIn flex flex-col items-center text-center space-y-8">
              
              {/* Monogram Icon & Identity */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative group">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-neutral-600 shadow-2xl p-0.5 bg-neutral-900">
                    <img
                      src={resolveAsset('/profile.jpg')}
                      alt="Daniel Santander Urrutia"
                      className="w-full h-full object-cover object-center rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-neutral-900 border border-neutral-600 p-1 flex items-center justify-center shadow-lg">
                    <img src={resolveAsset('/favicon.svg')} alt="DS" className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white">
                    Daniel Santander Urrutia
                  </h1>
                  <p className="text-xs sm:text-sm font-sans font-medium text-neutral-400 tracking-wide">
                    {currentLang === 'es'
                      ? 'Geofísica Ambiental (U. de Chile) • M.Sc. Kiel / Poznań'
                      : 'Environmental Geophysics (U. de Chile) • M.Sc. Kiel / Poznań'}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 max-w-lg font-sans leading-relaxed">
                  {currentLang === 'es'
                    ? 'Portafolio profesional interactivo. Selecciona el perfil para ingresar al expediente correspondiente:'
                    : 'Interactive professional portfolio. Choose an edition below to enter the dossier:'}
                </p>
              </div>

              {/* DUAL MODE MINIMALIST PORTALS (SIDE-BY-SIDE EQUILIBRADO) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl px-2">
                
                {/* 1. PUERTA COMUNICACIONES (Cálido / Ámbar sutil) */}
                <div 
                  onClick={() => {
                    handleToggleProfile('comms');
                    setHasEntered(true);
                    setActiveTabIndex(1);
                    setCurrentSlideIndex(0);
                    window.location.hash = '#cultura';
                  }}
                  className="group relative cursor-pointer rounded-2xl border border-neutral-800 hover:border-amber-500/50 bg-neutral-900/90 hover:bg-[#1a1610] p-6 text-left transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 flex items-center justify-center group-hover:bg-amber-500/20 transition">
                        <Moon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/90 font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                        +700k Reach
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                        {currentLang === 'es' ? 'Comunicaciones & Medios' : 'Communications & Media'}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                        {currentLang === 'es'
                          ? 'Dirección de campañas territoriales masivas, cultura comunitaria, artivismo táctico y periodismo de investigación.'
                          : 'Mass communication campaigns, community culture, tactical artivism, and investigative reporting.'}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-neutral-800 group-hover:border-amber-500/20 flex items-center justify-between text-xs font-serif font-bold text-neutral-400 group-hover:text-amber-400 transition-colors">
                    <span>{currentLang === 'es' ? 'Entrar a Comunicaciones' : 'Enter Communications'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* 2. PUERTA CIENTÍFICO (Biofísico / Esmeralda sutil) */}
                <div 
                  onClick={() => {
                    handleToggleProfile('science');
                    setHasEntered(true);
                    setActiveTabIndex(0);
                    setCurrentSlideIndex(0);
                    window.location.hash = '#portada';
                  }}
                  className="group relative cursor-pointer rounded-2xl border border-neutral-800 hover:border-emerald-500/50 bg-neutral-900/90 hover:bg-[#101a14] p-6 text-left transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500/20 transition">
                        <Microscope className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400/90 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                        Dual M.Sc.
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {currentLang === 'es' ? 'Expediente Científico' : 'Scientific Dossier'}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                        {currentLang === 'es'
                          ? 'Geofísica de cuencas, gemelos hidrogeológicos, monitoreo en Maule y análisis de políticas ambientales en Europa.'
                          : 'Catchment geophysics, hydrogeological twins, Maule basin monitoring, and European environmental policy.'}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-neutral-800 group-hover:border-emerald-500/20 flex items-center justify-between text-xs font-serif font-bold text-neutral-400 group-hover:text-emerald-400 transition-colors">
                    <span>{currentLang === 'es' ? 'Entrar a Científico' : 'Enter Scientific'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>

              {/* Direct Full Access Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setHasEntered(true);
                    setActiveTabIndex(1);
                    setCurrentSlideIndex(0);
                    window.location.hash = '#cultura';
                  }}
                  className="px-7 py-2.5 rounded-full border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200 bg-neutral-900/60 hover:bg-neutral-900 font-sans text-xs font-medium transition-all flex items-center space-x-2 shadow-sm"
                >
                  <span>{currentLang === 'es' ? 'O explorar todo el contenido directo' : 'Or explore all contents directly'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
                </button>
              </div>

            </div>
          ) : isComms ? (
            currentItem.type === 'press' ? (
              /* MODO NOCTURNO: VISOR DE PRENSA Y ARTÍCULOS WEB COMPLETO (100% VISIBLE SIN ZOOM) */
              <div className="relative w-full flex flex-col space-y-5 animate-fadeIn">
              {/* 1. NAVEGADOR WEB / PANTALLAZO DEL MEDIO COMPLETO Y LEGIBLE */}
              <div className="relative w-full rounded-2xl bg-[#140f09] border border-amber-500/30 shadow-2xl overflow-hidden flex flex-col">
                {/* Browser Mockup Top Bar */}
                <div className="w-full px-4 py-2.5 bg-[#1b150d] border-b border-amber-500/20 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 font-mono text-[11px] text-amber-200/70 hidden sm:inline">
                      {currentItem.authorOrSource}
                    </span>
                  </div>

                  {/* Browser Address Bar Pill */}
                  {currentItem.url && (
                    <a
                      href={currentItem.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 border border-amber-500/30 text-amber-300 hover:text-amber-100 hover:border-amber-400 text-xs font-mono transition"
                      title={currentLang === 'es' ? 'Abrir publicación original' : 'Open original article'}
                    >
                      <span className="truncate max-w-[200px] sm:max-w-[340px]">
                        {currentItem.url.replace(/^https?:\/\//, '')}
                      </span>
                      <ExternalLink className="w-3 h-3 text-amber-400 shrink-0" />
                    </a>
                  )}

                  {/* Counter Badge */}
                  <div className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-[11px] font-semibold">
                    {currentLang === 'es' ? 'Nota' : 'Article'} {currentSlideIndex + 1} / {items.length}
                  </div>
                </div>

                {/* Screenshot Display: 100% visible, completely uncropped, readable from the start */}
                <div className="relative w-full p-2 sm:p-5 bg-[#0a0805] flex items-center justify-center min-h-[360px]">
                  <img
                    src={resolveAsset(currentItem.src)}
                    alt={currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                    className="w-full h-auto max-h-[72vh] object-contain rounded-lg shadow-2xl"
                  />
                </div>

                {/* Navigation controls inside the visor */}
                {items.length > 1 && (
                  <div className="w-full flex items-center justify-between px-4 py-2.5 bg-[#18130c] border-t border-amber-500/20">
                    <div className="flex items-center space-x-1.5">
                      {items.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setCurrentSlideIndex(dotIdx)}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            dotIdx === currentSlideIndex
                              ? 'w-7 bg-amber-400 shadow-sm shadow-amber-400/50'
                              : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                          }`}
                          title={`Ver nota ${dotIdx + 1}`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={handlePrevSlide}
                        className="px-3 py-1.5 rounded-full bg-[#1e170e] border border-amber-500/30 hover:border-amber-400 text-xs font-sans text-amber-200 hover:text-white transition flex items-center space-x-1 shadow-sm"
                        title="Anterior (←)"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <span>{currentLang === 'es' ? 'Anterior' : 'Prev'}</span>
                      </button>
                      <button
                        onClick={handleNextSlide}
                        className="px-3 py-1.5 rounded-full bg-[#1e170e] border border-amber-500/30 hover:border-amber-400 text-xs font-sans text-amber-200 hover:text-white transition flex items-center space-x-1 shadow-sm"
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
              <div className="w-full rounded-2xl bg-[#16120b] border border-amber-500/25 p-5 sm:p-7 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-amber-500/20 pb-4 mb-4">
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-serif font-bold text-amber-400 uppercase tracking-wider mb-1">
                      <span>{currentItem.authorOrSource || 'Prensa de Investigación'}</span>
                      {currentItem.date && <span className="opacity-60">• {currentItem.date}</span>}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
                      {currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                    </h3>

                    {(currentItem.subtitleEn || currentItem.subtitleEs) && (
                      <p className="text-xs sm:text-sm font-medium text-amber-300 mt-1">
                        {currentLang === 'es' ? currentItem.subtitleEs : currentItem.subtitleEn}
                      </p>
                    )}
                  </div>

                  {currentItem.url && (
                    <a
                      href={currentItem.url}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 px-4 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-sans font-bold text-xs flex items-center space-x-2 shadow-lg shadow-amber-500/20 transition"
                    >
                      <span>{currentLang === 'es' ? 'Leer en el Medio Original' : 'Read on Original Outlet'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Full Article Synopsis & Impact */}
                <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                  <p>{currentLang === 'es' ? currentItem.captionEs : currentItem.captionEn}</p>
                  
                  {/* Category / Topic Tags */}
                  {currentItem.tags && currentItem.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-amber-500/15">
                      {currentItem.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-amber-500/10 border border-amber-500/20 text-amber-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Series Chapters / Sub-links if available */}
                  {currentItem.subLinks && currentItem.subLinks.length > 0 && (
                    <div className="pt-3 border-t border-amber-500/20">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-2">
                        {currentLang === 'es' ? 'Capítulos y entregas de la serie:' : 'Series Chapters & Parts:'}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {currentItem.subLinks.map((sub, sIdx) => (
                          <a
                            key={sIdx}
                            href={sub.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between p-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/25 text-amber-200 hover:text-white text-xs font-sans transition group"
                          >
                            <span className="truncate pr-2 font-medium">
                              {currentLang === 'es' ? sub.titleEs : sub.titleEn}
                            </span>
                            <ExternalLink className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* MODO NOCTURNO: TARJETA PANORÁMICA DE CAMPAÑA CÁLIDA (AMBAR & ORO) */
            <div className="relative w-full rounded-3xl sm:rounded-[32px] border backdrop-blur-md shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[440px] sm:min-h-[500px] lg:h-[530px] transition-all duration-300 bg-[#16120b]/95 border-amber-500/25">
              {/* LEFT: Media Viewport */}
              <div
                className="relative lg:w-[58%] flex items-center justify-center overflow-hidden group min-h-[280px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-amber-500/15 bg-black/75 p-3"
              >
                {currentItem.type === 'video' && currentItem.embedUrl ? (
                  <div className="relative w-full h-full aspect-video bg-black/70 flex items-center justify-center rounded-xl overflow-hidden shadow-2xl">
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
                    className="w-full h-full p-8 flex flex-col items-center justify-center text-center space-y-4 bg-[#18130c] cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-amber-500/20 border border-amber-500/40 text-amber-400 group-hover:scale-110 transition shadow-xl">
                      <Volume2 className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-xs font-serif uppercase tracking-wider font-bold text-amber-300">
                        {currentLang === 'es' ? 'CÁPSULA RADIAL COMUNITARIA' : 'COMMUNITY RADIO CAPSULE'}
                      </span>
                      <p className="text-xs opacity-80 mt-1 text-neutral-300">{currentItem.authorOrSource}</p>
                    </div>
                  </div>
                ) : currentItem.type === 'instagram' ? (
                  <div 
                    onClick={() => {
                      if (currentItem.url) window.open(currentItem.url, '_blank');
                      else setSelectedMedia(currentItem);
                    }}
                    className="relative w-full h-full min-h-[360px] flex items-center justify-center p-3 bg-[#0d0a07] cursor-pointer group/ig"
                  >
                    {currentItem.src ? (
                      <div className="relative w-full max-h-[480px] flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl bg-black">
                        <img
                          src={resolveAsset(currentItem.src)}
                          alt={currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                          className="max-w-full max-h-[460px] w-auto h-auto object-contain transition-transform duration-500 group-hover/ig:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1.5 rounded-full font-sans font-semibold shadow-lg">
                              <InstagramIcon className="w-3.5 h-3.5" />
                              <span>{currentItem.tags?.[0] || 'Instagram'}</span>
                            </div>
                            <span className="text-[11px] font-mono text-white/90 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/10 flex items-center space-x-1">
                              <span>{currentLang === 'es' ? 'Ver en Instagram' : 'View on Instagram'}</span>
                              <ExternalLink className="w-3 h-3 text-pink-400" />
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full max-w-[360px] p-6 rounded-2xl bg-[#1a140d] border border-amber-500/30 flex flex-col items-center text-center space-y-3">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-xl">
                          <InstagramIcon className="w-7 h-7" />
                        </div>
                        <h4 className="text-white font-serif font-bold text-base">
                          {currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                        </h4>
                        <p className="text-xs text-neutral-300 font-sans">
                          {currentItem.captionEs || currentItem.captionEn}
                        </p>
                        <a
                          href={currentItem.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-sans text-xs font-semibold flex items-center space-x-1.5 shadow-md hover:brightness-110 transition"
                        >
                          <span>{currentLang === 'es' ? 'Abrir publicación' : 'Open post'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <div 
                    onClick={() => setSelectedMedia(currentItem)}
                    className="relative w-full h-full flex items-center justify-center bg-[#110e08] cursor-pointer"
                  >
                    <img
                      src={resolveAsset((currentLang === 'en' && currentItem.srcEn) ? currentItem.srcEn : currentItem.src)}
                      alt={currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                      className="max-w-full max-h-[480px] w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01] rounded-lg shadow-lg"
                    />
                  </div>
                )}

                {/* Badge Indicator */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full border text-xs font-mono font-medium shadow-lg backdrop-blur-sm bg-[#18130c]/85 border-amber-500/30 text-amber-300">
                  {currentSlideIndex + 1} / {items.length}
                </div>
              </div>

              {/* RIGHT: Fluid Editorial Description */}
              <div className="lg:w-[42%] p-6 sm:p-8 flex flex-col justify-between space-y-4 bg-[#1b150c]/80 overflow-y-auto max-h-[530px] no-scrollbar">
                <div>
                  <div className="flex items-center justify-between text-xs mb-2 font-serif font-semibold tracking-wider uppercase text-amber-400">
                    <span>{currentItem.authorOrSource || 'Archivo de Campo'}</span>
                    {currentItem.date && <span className="font-mono opacity-60">{currentItem.date}</span>}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold leading-tight text-white">
                    {currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                  </h3>

                  {(currentItem.subtitleEn || currentItem.subtitleEs) && (
                    <p className="text-xs font-medium mt-1.5 text-amber-300">
                      {currentLang === 'es' ? currentItem.subtitleEs : currentItem.subtitleEn}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm leading-relaxed mt-4 font-sans text-neutral-300">
                    {currentLang === 'es' ? currentItem.captionEs : currentItem.captionEn}
                  </p>

                  {/* Series / Event Gallery Links (if available) */}
                  {currentItem.subLinks && currentItem.subLinks.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-amber-500/20">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-2">
                        {currentLang === 'es' ? 'Registros, afiches & galerías:' : 'Records, posters & galleries:'}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {currentItem.subLinks.map((sub, sIdx) => (
                          <a
                            key={sIdx}
                            href={sub.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between p-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/25 text-amber-200 hover:text-white text-xs font-sans transition group"
                          >
                            <span className="truncate pr-1.5 font-medium">
                              {currentLang === 'es' ? sub.titleEs : sub.titleEn}
                            </span>
                            <ExternalLink className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentItem.url && (
                    <div className="mt-4 pt-3 border-t border-amber-500/20">
                      <a
                        href={currentItem.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 hover:underline"
                      >
                        <span>{currentLang === 'es' ? 'Ver publicación original' : 'Open original article / link'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Slider Controls */}
                <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    {items.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setCurrentSlideIndex(dotIdx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          dotIdx === currentSlideIndex
                            ? 'w-6 bg-amber-400'
                            : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                        }`}
                        title={`Ir a ficha ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handlePrevSlide}
                      className="p-2.5 rounded-full border border-amber-500/25 hover:border-amber-400 text-amber-200 bg-[#18130c] transition shadow-sm"
                      title="Anterior (←)"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="p-2.5 rounded-full border border-amber-500/25 hover:border-amber-400 text-amber-200 bg-[#18130c] transition shadow-sm"
                      title="Siguiente (→)"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setSelectedMedia(currentItem)}
                      className="ml-2 px-4 py-2 rounded-full font-serif font-bold text-xs bg-amber-400 hover:bg-amber-300 text-black transition shadow-md flex items-center space-x-1.5"
                      title="Expandir modal"
                    >
                      <span>{currentLang === 'es' ? 'Ver Full' : 'Full View'}</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
          /* MODO DIURNO: FORMATO CIENTÍFICO COMPLETO (FICHA COMPLETA SIN RECORTAR CON DETALLE ABAJO) */
          <div className="relative w-full flex flex-col space-y-5 animate-fadeIn">
            {/* 1. LÁMINA CIENTÍFICA COMPLETA (VISIBLE AL 100% DESDE EL INICIO) */}
            <div className="relative w-full rounded-2xl bg-[#ede5d6]/70 border border-[#d8cdb9] shadow-xl overflow-hidden p-2 sm:p-4 flex flex-col items-center justify-center">
              <div className="relative w-full flex items-center justify-center rounded-xl overflow-hidden bg-white/40">
                <img
                  src={resolveAsset((currentLang === 'en' && currentItem.srcEn) ? currentItem.srcEn : currentItem.src)}
                  alt={currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                  className="w-full h-auto max-h-[68vh] object-contain rounded-lg shadow-sm"
                />
              </div>

              {/* Top Ticker on the Document */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 border border-[#d0c4b0] text-xs font-mono font-semibold text-[#2d5a3c] shadow-md">
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
                      className="px-3 py-1.5 rounded-full bg-white border border-[#d0c4b0] hover:border-[#2d5a3c] text-xs font-sans text-neutral-800 transition flex items-center space-x-1 shadow-sm"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>{currentLang === 'es' ? 'Anterior' : 'Prev'}</span>
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="px-3 py-1.5 rounded-full bg-white border border-[#d0c4b0] hover:border-[#2d5a3c] text-xs font-sans text-neutral-800 transition flex items-center space-x-1 shadow-sm"
                    >
                      <span>{currentLang === 'es' ? 'Siguiente' : 'Next'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. TEXTO DESCRIPTIVO Y RIGOR CIENTÍFICO DIRECTO ABAJO */}
            <div className="w-full rounded-2xl bg-[#faf6ee] border border-[#d8cdb9] p-5 sm:p-7 shadow-md">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#e4dcce] pb-4 mb-4">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-serif font-bold text-[#2d5a3c] uppercase tracking-wider mb-1">
                    <span>{currentItem.authorOrSource || 'Expedición Científica'}</span>
                    {currentItem.date && <span className="opacity-60">• {currentItem.date}</span>}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900 leading-snug">
                    {currentLang === 'es' ? currentItem.titleEs : currentItem.titleEn}
                  </h3>

                  {(currentItem.subtitleEn || currentItem.subtitleEs) && (
                    <p className="text-xs sm:text-sm font-medium text-[#8c5225] mt-1">
                      {currentLang === 'es' ? currentItem.subtitleEs : currentItem.subtitleEn}
                    </p>
                  )}
                </div>

                {currentItem.url && (
                  <a
                    href={currentItem.url}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 px-4 py-2 rounded-full bg-[#2d5a3c] hover:bg-[#22472f] text-white font-sans font-bold text-xs flex items-center space-x-1.5 shadow-sm transition"
                  >
                    <span>{currentLang === 'es' ? 'Abrir Fuente / Publicación' : 'View Publication'}</span>
                    <ZoomIn className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Full Description & Methodology */}
              <div className="space-y-3 text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
                <p>{currentLang === 'es' ? currentItem.captionEs : currentItem.captionEn}</p>
                
                {/* Outcomes / details if available */}
                {(currentLang === 'es' ? currentItem.detailsEs : currentItem.detailsEn) && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2 border-t border-[#e8dfcf]">
                    {(currentLang === 'es' ? currentItem.detailsEs : currentItem.detailsEn)?.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start space-x-2 text-xs text-neutral-700">
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

      {/* 4. FOOTER */}
      <footer
        className={`relative z-20 w-full py-3.5 px-6 text-center text-xs font-serif border-t transition-colors ${
          isComms
            ? 'bg-[#0c0a07] border-amber-500/20 text-amber-200/50'
            : 'bg-[#faf8f4] border-[#e4dcce] text-neutral-600'
        }`}
      >
        <span>
          © {new Date().getFullYear()} Daniel Santander Urrutia •{' '}
          {isComms ? 'Perfil de Comunicaciones & Campañas' : 'Perfil Científico & Sistemas Biofísicos'} • Usa ← y →
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
