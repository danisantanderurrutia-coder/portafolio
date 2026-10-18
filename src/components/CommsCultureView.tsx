import React, { useState } from 'react';
import { 
  Globe, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Play, 
  Share2, 
  Check, 
  Download, 
  Sparkles, 
  Radio, 
  Users, 
  Mic, 
  Palette, 
  BookOpen, 
  Megaphone,
  Home,
  FileText
} from 'lucide-react';
import { Language, MediaItem } from '../types';
import { resolveAsset } from '../utils';
import { ModalViewer } from './ModalViewer';
import { GeofrecuenciaLogo } from './GeofrecuenciaLogo';
import { communicationsSections } from '../data';

export type CommsCultureMode = 'comms_arts' | 'grassroots';

interface CommsCultureViewProps {
  currentLang: Language;
  onToggleLanguage: () => void;
  onBackToHome: () => void;
  onSwitchToGameView?: (category?: string) => void;
  onOpenHireMe?: () => void;
  onOpenSkills?: () => void;
  initialMode?: CommsCultureMode;
}

export const CommsCultureView: React.FC<CommsCultureViewProps> = ({
  currentLang,
  onToggleLanguage,
  onBackToHome,
  onSwitchToGameView,
  onOpenHireMe,
  onOpenSkills,
  initialMode = 'comms_arts'
}) => {
  const [activeMode, setActiveMode] = useState<CommsCultureMode>(initialMode);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [copied, setCopied] = useState(false);

  // Filter sections according to active mode
  // 'comms_arts': Primera Línea Prensa (plp), Intervención, Brigada Paulina Aguirre, Rap Beauchef, Cuarentena Rap, Ensayos
  // 'grassroots': Apruebo Rural, Red Maule Sur & Radio Cristalina, Corresponsales Populares
  const commsArtsTabs = [
    {
      id: 'plp',
      labelEn: '01. Primera Línea Prensa (+700k)',
      labelEs: '01. Primera Línea Prensa (+700k)',
      icon: Megaphone,
      accent: '#facc15',
      badgeEn: 'Independent Digital Newsroom // +700k Followers',
      badgeEs: 'Redacción Digital Independiente // +700k Seguidores',
      sectionData: communicationsSections.find(s => s.id === 'primera-linea-prensa')?.subSections?.find(sub => sub.id === 'plp'),
      parentSection: communicationsSections.find(s => s.id === 'primera-linea-prensa')
    },
    {
      id: 'intervencion',
      labelEn: '02. Parliamentary Advocacy',
      labelEs: '02. Intervención en el Congreso',
      icon: Mic,
      accent: '#ef4444',
      badgeEn: 'Chamber of Deputies // Wildfire Policy Hearings',
      badgeEs: 'Cámara de Diputadas y Diputados // Monocultivos e Incendios',
      sectionData: communicationsSections.find(s => s.id === 'intervencion'),
      parentSection: communicationsSections.find(s => s.id === 'intervencion')
    },
    {
      id: 'propaganda',
      labelEn: '03. Brigada Paulina Aguirre',
      labelEs: '03. Brigada Paulina Aguirre',
      icon: Palette,
      accent: '#dc2626',
      badgeEn: 'Tactical Artivism, Silkscreens & Street Murals',
      badgeEs: 'Artivismo Táctico, Serigrafía y Megamurales',
      sectionData: communicationsSections.find(s => s.id === 'arte-y-cultura')?.subSections?.find(sub => sub.id === 'propaganda'),
      parentSection: communicationsSections.find(s => s.id === 'arte-y-cultura')
    },
    {
      id: 'rap-beauchef',
      labelEn: '04. Rap Beauchef & Dueñas',
      labelEs: '04. Rap Beauchef & Dueñas',
      icon: Sparkles,
      accent: '#8b5cf6',
      badgeEn: 'University Arena, Female Showcase & Discord League',
      badgeEs: 'Arena Universitaria, Encuentro Femenino & Discord',
      sectionData: communicationsSections.find(s => s.id === 'arte-y-cultura')?.subSections?.find(sub => sub.id === 'rap-beauchef'),
      parentSection: communicationsSections.find(s => s.id === 'arte-y-cultura')
    },
    {
      id: 'cuarentena-rap',
      labelEn: '05. Cuarentena Rap',
      labelEs: '05. Cuarentena Rap',
      icon: Play,
      accent: '#06b6d4',
      badgeEn: 'Pandemic Streaming League & Socio-Artistic Concept',
      badgeEs: 'Liga Online en Pandemia & Dispositivo Socio-Artístico',
      sectionData: communicationsSections.find(s => s.id === 'arte-y-cultura')?.subSections?.find(sub => sub.id === 'cuarentena-rap'),
      parentSection: communicationsSections.find(s => s.id === 'arte-y-cultura')
    },
    {
      id: 'ensayos',
      labelEn: '06. Essays & Publications',
      labelEs: '06. Ensayos & Publicaciones',
      icon: BookOpen,
      accent: '#f97316',
      badgeEn: 'OLCA 4-Part Treatise & ClimateCC Series',
      badgeEs: 'Tetralogía OLCA & Serie ClimateCC Monocultivos',
      sectionData: communicationsSections.find(s => s.id === 'publicaciones-ensayos'),
      parentSection: communicationsSections.find(s => s.id === 'publicaciones-ensayos')
    }
  ];

  const grassrootsTabs = [
    {
      id: 'apruebo-rural',
      labelEn: '01. Apruebo Rural National Campaign',
      labelEs: '01. Campaña Nacional Apruebo Rural',
      icon: Users,
      accent: '#10b981',
      badgeEn: '14 Regions // 80+ Assemblies // Peasant Water Front',
      badgeEs: '14 Regiones // 80+ Asambleas // Frente Campesino y APR',
      sectionData: communicationsSections.find(s => s.id === 'apruebo-rural'),
      parentSection: communicationsSections.find(s => s.id === 'apruebo-rural')
    },
    {
      id: 'red-maule',
      labelEn: '02. Red Maule Sur & Radio Cristalina',
      labelEs: '02. Red Maule Sur & Radio Cristalina',
      icon: Radio,
      accent: '#059669',
      badgeEn: 'Regional Broadcast 96.3 FM & MauleRed Citizen Dispatcher',
      badgeEs: 'Transmisión 96.3 FM & Avisador de Emergencias MauleRed',
      sectionData: communicationsSections.find(s => s.id === 'primera-linea-prensa')?.subSections?.find(sub => sub.id === 'red-comunitaria-maule'),
      parentSection: communicationsSections.find(s => s.id === 'primera-linea-prensa')
    },
    {
      id: 'corresponsales',
      labelEn: '03. Popular Correspondents Workshop',
      labelEs: '03. Taller de Corresponsales Populares',
      icon: Mic,
      accent: '#14b8a6',
      badgeEn: '45+ Rural Leaders Certified in Mobile Journalism',
      badgeEs: '45+ Dirigentas/es Rurales Capacitados en Reportería Móvil',
      sectionData: communicationsSections.find(s => s.id === 'primera-linea-prensa'),
      parentSection: communicationsSections.find(s => s.id === 'primera-linea-prensa')
    }
  ];

  const currentTabs = activeMode === 'comms_arts' ? commsArtsTabs : grassrootsTabs;
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [activeMediaSlideIdx, setActiveMediaSlideIdx] = useState(0);

  const activeTab = currentTabs[activeTabIdx] || currentTabs[0];
  const activeMediaItems: MediaItem[] = activeTab.sectionData?.mediaItems || activeTab.parentSection?.mediaItems || [];
  const currentMedia = activeMediaItems[activeMediaSlideIdx] || activeMediaItems[0];

  const handleNextMedia = () => {
    setActiveMediaSlideIdx((prev) => (prev + 1) % activeMediaItems.length);
  };

  const handlePrevMedia = () => {
    setActiveMediaSlideIdx((prev) => (prev - 1 + activeMediaItems.length) % activeMediaItems.length);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#07090c] text-white font-sans flex flex-col justify-between selection:bg-[#facc15] selection:text-black">
      
      {/* 1. CINEMATIC TEXTURE BACKDROP */}
      <div 
        className="fixed inset-0 bg-cover bg-center pointer-events-none opacity-25 z-0 mix-blend-luminosity"
        style={{ backgroundImage: `url('${resolveAsset('/eco_noir_street.jpg')}')` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#07090c]/90 via-[#07090c]/95 to-[#07090c] pointer-events-none z-0" />

      {/* 2. TOP HEADER BAR */}
      <header className="relative z-20 w-full px-4 sm:px-8 py-3 bg-black/90 border-b-2 border-white/10 backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: Brand + Navigation Back */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onBackToHome}
            className="px-2.5 py-1.5 bg-white hover:bg-[#facc15] text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#facc15] active:scale-95 transition-all flex items-center space-x-1 cursor-pointer"
            title="Volver a Inicio // Back to Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? 'INICIO' : 'HOME'}</span>
          </button>

          <div className="flex items-center space-x-2.5">
            <GeofrecuenciaLogo variant="badge" className="w-9 h-9 border border-white/20" />
            <div className="flex flex-col">
              <span className="font-mono font-black text-xs uppercase tracking-tight text-[#facc15]">
                DANIEL SANTANDER URRUTIA
              </span>
              <span className="text-[10px] font-mono text-neutral-400">
                {activeMode === 'comms_arts'
                  ? (currentLang === 'es' ? 'COMUNICACIONES, MEDIOS & ARTIVISMO' : 'COMMUNICATIONS, MEDIA & ARTIVISM')
                  : (currentLang === 'es' ? 'COMUNIDADES & FRENTE TERRITORIAL' : 'GRASSROOTS & FRONTLINE COMMUNITIES')}
              </span>
            </div>
          </div>
        </div>

        {/* Center: Mode Switcher (Communications vs Grassroots) */}
        <div className="flex items-center bg-black/80 p-1 border-2 border-white/20 rounded-lg">
          <button
            onClick={() => {
              setActiveMode('comms_arts');
              setActiveTabIdx(0);
              setActiveMediaSlideIdx(0);
            }}
            className={`px-3 py-1 font-mono font-black text-xs uppercase tracking-wider rounded transition-all cursor-pointer flex items-center space-x-1.5 ${
              activeMode === 'comms_arts'
                ? 'bg-[#facc15] text-black shadow-[2px_2px_0px_#000]'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? 'MEDIOS & ARTE' : 'MEDIA & ARTS'}</span>
          </button>

          <button
            onClick={() => {
              setActiveMode('grassroots');
              setActiveTabIdx(0);
              setActiveMediaSlideIdx(0);
            }}
            className={`px-3 py-1 font-mono font-black text-xs uppercase tracking-wider rounded transition-all cursor-pointer flex items-center space-x-1.5 ${
              activeMode === 'grassroots'
                ? 'bg-[#10b981] text-black shadow-[2px_2px_0px_#000]'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? 'COMUNIDADES & APR' : 'GRASSROOTS & APR'}</span>
          </button>
        </div>

        {/* Right Action Tools: 3D Globe, CV, Hire Me, Language */}
        <div className="flex items-center space-x-2">
          {onSwitchToGameView && (
            <button
              onClick={() => onSwitchToGameView(activeMode === 'comms_arts' ? 'culture' : 'comms')}
              className="px-2.5 py-1.5 bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all flex items-center space-x-1.5 cursor-pointer"
              title="Explorar coordenadas en el Planeta 3D"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{currentLang === 'es' ? 'VER EN 3D' : '3D GLOBE'}</span>
            </button>
          )}

          <a
            href={resolveAsset('/Daniel_Santander_CV.pdf')}
            download="Daniel_Santander_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 bg-[#22c55e] hover:bg-[#16a34a] text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all flex items-center space-x-1 cursor-pointer"
            title="Descargar CV en PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden md:inline">CV</span>
          </a>

          {onOpenHireMe && (
            <button
              onClick={onOpenHireMe}
              className="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all flex items-center space-x-1 cursor-pointer"
              title="Contacto Directo"
            >
              <span>💼</span>
              <span className="hidden lg:inline">{currentLang === 'es' ? 'CONTRATAR' : 'HIRE ME'}</span>
            </button>
          )}

          <button
            onClick={onToggleLanguage}
            className="px-2.5 py-1.5 bg-white/10 hover:bg-white hover:text-black text-white font-mono font-bold text-xs uppercase tracking-wider border border-white/20 transition-all cursor-pointer"
            title="Switch Language"
          >
            {currentLang === 'es' ? 'ES' : 'EN'}
          </button>
        </div>
      </header>

      {/* 3. SUBTABS NAVIGATION STRIP */}
      <nav className="relative z-20 w-full px-4 sm:px-8 py-2.5 bg-black/80 border-b border-white/10 overflow-x-auto no-scrollbar flex items-center space-x-2">
        {currentTabs.map((tab, idx) => {
          const Icon = tab.icon;
          const isSelected = activeTabIdx === idx;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTabIdx(idx);
                setActiveMediaSlideIdx(0);
              }}
              className={`shrink-0 px-3 py-1.5 border-2 font-mono font-black text-xs uppercase tracking-tight transition-all flex items-center space-x-2 cursor-pointer ${
                isSelected
                  ? 'bg-white text-black border-black shadow-[3px_3px_0px_#facc15] -rotate-0.5 scale-[1.02]'
                  : 'bg-black/60 text-neutral-300 border-white/20 hover:border-white hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" style={{ color: isSelected ? '#000000' : tab.accent }} />
              <span>{currentLang === 'es' ? tab.labelEs : tab.labelEn}</span>
            </button>
          );
        })}
      </nav>

      {/* 4. MAIN CONTENT HERO & MEDIA VIEWPORT */}
      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: NARRATIVE & CONTEXT (5 COLS) */}
        <section className="lg:col-span-5 flex flex-col space-y-4">
          
          {/* Badge & Stamp */}
          <div className="flex items-center space-x-2">
            <div 
              className="font-mono font-black text-[10px] sm:text-xs px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_#000] uppercase text-black inline-block -rotate-1"
              style={{ backgroundColor: activeTab.accent }}
            >
              {currentLang === 'es' ? activeTab.badgeEs : activeTab.badgeEn}
            </div>

            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 border border-emerald-500/30">
              {currentLang === 'es' ? 'REGISTRO HISTÓRICO' : 'VERIFIED ARCHIVE'}
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="font-mono font-black text-xl sm:text-2xl lg:text-3xl tracking-tight uppercase leading-tight text-white drop-shadow-md">
              {currentLang === 'es' 
                ? (activeTab.sectionData?.titleEs || activeTab.parentSection?.titleEs || activeTab.labelEs)
                : (activeTab.sectionData?.titleEn || activeTab.parentSection?.titleEn || activeTab.labelEn)}
            </h1>
            <p className="mt-1 text-xs sm:text-sm font-mono text-[#facc15] font-bold">
              {currentLang === 'es' 
                ? (activeTab.parentSection?.headlineEs || activeTab.badgeEs)
                : (activeTab.parentSection?.headlineEn || activeTab.badgeEn)}
            </p>
          </div>

          {/* Role Pill */}
          <div className="bg-white/5 border border-white/10 p-2.5 rounded-lg font-mono text-xs text-neutral-300">
            <span className="text-[#facc15] font-black">{currentLang === 'es' ? 'ROL // DIRECCIÓN: ' : 'ROLE // LEADERSHIP: '}</span>
            <span>{currentLang === 'es' ? activeTab.parentSection?.roleEs : activeTab.parentSection?.roleEn}</span>
          </div>

          {/* Narrative Body */}
          <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans space-y-2 bg-black/40 p-4 border border-white/10 rounded-xl">
            <p>
              {currentLang === 'es' 
                ? activeTab.parentSection?.narrativeEs
                : activeTab.parentSection?.narrativeEn}
            </p>
          </div>

          {/* Key Outcomes */}
          {activeTab.parentSection?.keyOutcomesEs && (
            <div className="space-y-1.5 pt-1">
              <span className="font-mono font-black text-xs text-neutral-400 uppercase tracking-wider">
                {currentLang === 'es' ? 'HITOS & RESULTADOS VERIFICADOS:' : 'VERIFIED MILESTONES & OUTCOMES:'}
              </span>
              <div className="space-y-1">
                {(currentLang === 'es' ? activeTab.parentSection.keyOutcomesEs : activeTab.parentSection.keyOutcomesEn).map((outcome, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-neutral-300 font-mono">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stats Bar */}
          {activeTab.parentSection?.stats && (
            <div className="grid grid-cols-3 gap-2 pt-2">
              {activeTab.parentSection.stats.map((stat, idx) => (
                <div key={idx} className="bg-black/70 border border-white/15 p-2 rounded text-center font-mono">
                  <div className="font-black text-base sm:text-lg text-[#facc15]">{stat.value}</div>
                  <div className="text-[9px] text-neutral-400 uppercase leading-tight mt-0.5">
                    {currentLang === 'es' ? stat.labelEs : stat.labelEn}
                  </div>
                </div>
              ))}
            </div>
          )}

        </section>

        {/* RIGHT COLUMN: RICH MEDIA VIEWER, VIDEO EMBEDS & GALLERY (7 COLS) */}
        <section className="lg:col-span-7 flex flex-col space-y-4">
          
          {/* Main Media Viewport Box */}
          <div className="relative w-full rounded-xl bg-black border-3 border-black shadow-[6px_6px_0px_#000000] overflow-hidden flex flex-col">
            
            {/* Viewport Top Header */}
            <div className="px-4 py-2 bg-neutral-900 border-b-2 border-black flex items-center justify-between font-mono text-xs">
              <div className="flex items-center space-x-2">
                <span className="bg-[#facc15] text-black font-mono font-black px-1.5 py-0.5 text-[10px] border border-black uppercase">
                  {currentMedia?.type?.toUpperCase() || 'DOCUMENTO'}
                </span>
                <span className="text-neutral-300 text-[11px] truncate max-w-[220px] sm:max-w-xs font-bold">
                  {currentLang === 'es' ? currentMedia?.titleEs : currentMedia?.titleEn}
                </span>
              </div>

              {/* Slide Counter & Controls */}
              {activeMediaItems.length > 1 && (
                <div className="flex items-center space-x-1.5">
                  <span className="text-[10px] text-neutral-400 font-mono mr-1">
                    {activeMediaSlideIdx + 1} / {activeMediaItems.length}
                  </span>
                  <button
                    onClick={handlePrevMedia}
                    className="p-1 bg-black hover:bg-[#facc15] text-white hover:text-black border border-white/30 transition cursor-pointer"
                    title="Anterior"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleNextMedia}
                    className="p-1 bg-black hover:bg-[#facc15] text-white hover:text-black border border-white/30 transition cursor-pointer"
                    title="Siguiente"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Media Canvas Body */}
            <div className="relative w-full min-h-[300px] sm:min-h-[400px] max-h-[520px] bg-neutral-950 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
              
              {/* VIDEO EMBED */}
              {currentMedia?.type === 'video' && currentMedia.embedUrl ? (
                <div className="w-full aspect-video rounded-lg overflow-hidden border-2 border-black shadow-lg">
                  <iframe
                    src={currentMedia.embedUrl}
                    title={currentMedia.titleEs}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : currentMedia?.src ? (
                /* HIGH RES IMAGE / PRESS / SILKSCREEN */
                <div 
                  className="relative group cursor-pointer max-h-[460px] flex items-center justify-center"
                  onClick={() => setSelectedMedia(currentMedia)}
                  title="Click para ampliar en alta resolución"
                >
                  <img
                    src={resolveAsset(currentMedia.src)}
                    alt={currentMedia.titleEs}
                    className="max-h-[460px] w-auto object-contain rounded-md filter contrast-105 group-hover:scale-[1.01] transition-transform"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = resolveAsset('/plp/plp_logo.jpg');
                    }}
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 hover:bg-black text-white text-[10px] font-mono px-2 py-1 border border-white/40 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-3 h-3 text-yellow-300" />
                    <span>{currentLang === 'es' ? 'AMPLIAR' : 'EXPAND'}</span>
                  </div>
                </div>
              ) : (
                /* FALLBACK CARD */
                <div className="p-8 text-center font-mono">
                  <BookOpen className="w-12 h-12 text-[#facc15] mx-auto mb-3" />
                  <p className="text-sm font-bold text-white">
                    {currentLang === 'es' ? currentMedia?.titleEs : currentMedia?.titleEn}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1 max-w-md">
                    {currentLang === 'es' ? currentMedia?.captionEs : currentMedia?.captionEn}
                  </p>
                </div>
              )}
            </div>

            {/* Media Caption & Tags Footer */}
            <div className="p-4 bg-[#0d1015] border-t-2 border-black space-y-2 font-mono text-xs">
              <div className="text-neutral-200 leading-snug">
                {currentLang === 'es' ? currentMedia?.captionEs : currentMedia?.captionEn}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-white/10 text-[10px] text-neutral-400">
                <div className="flex items-center space-x-2">
                  <span className="text-[#facc15] font-bold">{currentMedia?.authorOrSource}</span>
                  {currentMedia?.date && <span>• {currentMedia.date}</span>}
                </div>

                {currentMedia?.url && (
                  <a
                    href={currentMedia.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-0.5 bg-white/10 hover:bg-[#facc15] hover:text-black text-white font-bold border border-white/20 transition-all flex items-center space-x-1"
                  >
                    <span>{currentLang === 'es' ? 'ENLACE ORIGINAL' : 'ORIGINAL SOURCE'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Tags */}
              {currentMedia?.tags && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentMedia.tags.map((tag, idx) => (
                    <span key={idx} className="bg-black/60 text-neutral-300 px-1.5 py-0.5 border border-white/15 text-[9px]">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* SubLinks & Multi-Plate Thumbnails Grid */}
          {currentMedia?.subLinks && currentMedia.subLinks.length > 0 && (
            <div className="bg-black/50 border border-white/10 p-3 rounded-xl space-y-2">
              <span className="font-mono font-black text-xs text-[#facc15] uppercase tracking-wider block">
                {currentLang === 'es' ? 'GALERÍA DE REGISTROS & ENLACES EXTERNOS:' : 'ARCHIVE GALLERY & EXTERNAL LINKS:'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentMedia.subLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-neutral-900/80 hover:bg-neutral-800 border border-white/15 hover:border-[#facc15] rounded flex items-center justify-between transition-all group font-mono text-xs text-neutral-200"
                  >
                    <div className="flex items-center space-x-2 truncate">
                      {link.src && (
                        <img 
                          src={resolveAsset(link.src)} 
                          alt="" 
                          className="w-7 h-7 object-cover rounded border border-white/20 shrink-0" 
                        />
                      )}
                      <span className="truncate group-hover:text-[#facc15]">
                        {currentLang === 'es' ? link.titleEs : link.titleEn}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#facc15] shrink-0 ml-1.5" />
                  </a>
                ))}
              </div>
            </div>
          )}

        </section>

      </main>

      {/* 5. FOOTER STATUS BAR */}
      <footer className="relative z-20 w-full px-4 sm:px-8 py-2.5 bg-black/95 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-400">
        <div className="flex items-center space-x-2">
          <span className="bg-[#facc15] text-black px-1.5 py-0.2 font-black border border-black">
            EXP
          </span>
          <span className="text-white">
            {activeMode === 'comms_arts'
              ? (currentLang === 'es' ? 'ARCHIVO HISTÓRICO DE MEDIOS Y ARTIVISMO' : 'HISTORICAL MEDIA & ARTIVISM ARCHIVE')
              : (currentLang === 'es' ? 'ARCHIVO TERRITORIAL Y MOVILIZACIÓN CAMPESINA' : 'TERRITORIAL ARCHIVE & PEASANT MOBILIZATION')}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleShare}
            className="hover:text-white transition flex items-center space-x-1 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-[#facc15]" />
            <span>{copied ? (currentLang === 'es' ? '¡COPIADO!' : 'COPIED!') : (currentLang === 'es' ? 'COMPARTIR' : 'SHARE')}</span>
          </button>
          <span>||| | ||||| || |||||| | |||</span>
        </div>
      </footer>

      {/* MODAL FULLSCREEN VIEWER FOR PLATES */}
      {selectedMedia && (
        <ModalViewer
          item={selectedMedia}
          onClose={() => setSelectedMedia(null)}
          currentLang={currentLang}
        />
      )}

    </div>
  );
};
