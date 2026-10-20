import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Language } from './types';
import type { MissionType } from './components/GameWorldView';
import type { CommsCultureMode } from './components/CommsCultureView';
import { PunkMainMenu } from './components/PunkMainMenu';

// Lazy-loaded heavy views & modals for optimal Core Web Vitals & bundle splitting
const GameWorldView = lazy(() =>
  import('./components/GameWorldView').then((m) => ({ default: m.GameWorldView }))
);
const ClassicDossierView = lazy(() =>
  import('./components/ClassicDossierView').then((m) => ({ default: m.ClassicDossierView }))
);
const CommsCultureView = lazy(() =>
  import('./components/CommsCultureView').then((m) => ({ default: m.CommsCultureView }))
);
const HireMeModal = lazy(() =>
  import('./components/HireMeModal').then((m) => ({ default: m.HireMeModal }))
);
const CvSelectorModal = lazy(() =>
  import('./components/CvSelectorModal').then((m) => ({ default: m.CvSelectorModal }))
);
const SkillsModal = lazy(() =>
  import('./components/SkillsModal').then((m) => ({ default: m.SkillsModal }))
);
const PublicationsModal = lazy(() =>
  import('./components/PublicationsModal').then((m) => ({ default: m.PublicationsModal }))
);
const TitlesModal = lazy(() =>
  import('./components/TitlesModal').then((m) => ({ default: m.TitlesModal }))
);
const ArtDirectorModal = lazy(() =>
  import('./components/ArtDirectorModal').then((m) => ({ default: m.ArtDirectorModal }))
);
const AdminCareerPanel = lazy(() =>
  import('./components/AdminCareerPanel').then((m) => ({ default: m.AdminCareerPanel }))
);
const OgBannerWebCanvas = lazy(() =>
  import('./components/OgBannerWebCanvas').then((m) => ({ default: m.OgBannerWebCanvas }))
);

export { resolveAsset } from './utils';

type ViewMode = 'punk' | 'game' | 'dossier' | 'comms_culture' | 'admin' | 'og_render';

const VALID_VIEWS: ViewMode[] = ['punk', 'game', 'dossier', 'comms_culture', 'admin', 'og_render'];
const VALID_CATEGORIES: ('all' | MissionType)[] = [
  'all',
  'science',
  'comms',
  'global',
  'rd',
  'culture',
  'publications',
  'titles',
  'certifications',
  'skills',
  'policy'
];

function parseUrlState() {
  const params = new URLSearchParams(window.location.search);
  const langParam = params.get('lang');
  const viewParam = params.get('view') as ViewMode | null;
  const catParam = params.get('cat') as ('all' | MissionType) | null;
  const missionParam = params.get('mission') || undefined;
  const modalParam = params.get('modal');

  const cleanPath = window.location.pathname.replace(/\/+$/, '');
  const cleanHash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  const isPathAdmin = cleanPath.endsWith('/admin') || cleanHash === 'admin';

  const lang: Language = langParam === 'es' || langParam === 'en' ? langParam : 'en';
  const view: ViewMode = isPathAdmin
    ? 'admin'
    : viewParam && VALID_VIEWS.includes(viewParam)
      ? viewParam
      : catParam || missionParam
        ? 'game'
        : 'punk';
  const cat: 'all' | MissionType =
    catParam && VALID_CATEGORIES.includes(catParam) ? catParam : 'all';

  return { lang, view, cat, mission: missionParam, modal: modalParam };
}

export function App() {
  const initial = parseUrlState();

  const [viewMode, setViewMode] = useState<ViewMode>(initial.view);
  const [commsCultureMode] = useState<CommsCultureMode>('comms_arts');
  const [selectedCategory, setSelectedCategory] = useState<'all' | MissionType>(initial.cat);
  const [selectedMissionId, setSelectedMissionId] = useState<string | undefined>(initial.mission);
  const [currentLang, setCurrentLang] = useState<Language>(initial.lang);

  // Modals state
  const [isHireMeOpen, setIsHireMeOpen] = useState(initial.modal === 'hire');
  const [isCvSelectorOpen, setIsCvSelectorOpen] = useState(initial.modal === 'cv');
  const [isSkillsOpen, setIsSkillsOpen] = useState(initial.modal === 'skills');
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(initial.modal === 'publications');
  const [isTitlesOpen, setIsTitlesOpen] = useState(initial.modal === 'titles');
  const [isArtDirectorOpen, setIsArtDirectorOpen] = useState(initial.modal === 'art');

  // Synchronize URL query parameters when navigation state changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (currentLang !== 'en') {
      params.set('lang', currentLang);
    }
    if (viewMode !== 'punk') {
      params.set('view', viewMode);
    }
    if (viewMode === 'game') {
      if (selectedCategory !== 'all') {
        params.set('cat', selectedCategory);
      }
      if (selectedMissionId) {
        params.set('mission', selectedMissionId);
      }
    }
    if (isHireMeOpen) params.set('modal', 'hire');
    else if (isCvSelectorOpen) params.set('modal', 'cv');
    else if (isSkillsOpen) params.set('modal', 'skills');
    else if (isPublicationsOpen) params.set('modal', 'publications');
    else if (isTitlesOpen) params.set('modal', 'titles');
    else if (isArtDirectorOpen) params.set('modal', 'art');

    let basePath = window.location.pathname;
    if (viewMode !== 'admin' && /\/admin\/?$/.test(basePath)) {
      basePath = basePath.replace(/\/admin\/?$/, '/');
    }

    const searchStr = params.toString();
    const hashStr = viewMode !== 'admin' && /^#\/?admin$/i.test(window.location.hash) ? '' : window.location.hash;
    const newUrl = `${basePath}${searchStr ? `?${searchStr}` : ''}${hashStr}`;
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    if (newUrl !== currentUrl) {
      window.history.pushState(null, '', newUrl);
    }
  }, [
    currentLang,
    viewMode,
    selectedCategory,
    selectedMissionId,
    isHireMeOpen,
    isCvSelectorOpen,
    isSkillsOpen,
    isPublicationsOpen,
    isTitlesOpen,
    isArtDirectorOpen
  ]);

  // Listen to browser Back / Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const next = parseUrlState();
      setCurrentLang(next.lang);
      setViewMode(next.view);
      setSelectedCategory(next.cat);
      setSelectedMissionId(next.mission);
      setIsHireMeOpen(next.modal === 'hire');
      setIsCvSelectorOpen(next.modal === 'cv');
      setIsSkillsOpen(next.modal === 'skills');
      setIsPublicationsOpen(next.modal === 'publications');
      setIsTitlesOpen(next.modal === 'titles');
      setIsArtDirectorOpen(next.modal === 'art');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const openGameCategory = (cat: 'all' | MissionType) => {
    setSelectedCategory(cat);
    setSelectedMissionId(undefined);
    setViewMode('game');
  };

  return (
    <Suspense
      fallback={
        <div className="w-full h-screen bg-[#07090d] text-white flex flex-col items-center justify-center font-mono text-xs tracking-widest uppercase gap-3">
          <div className="w-8 h-8 border-2 border-[#facc15] border-t-transparent rounded-full animate-spin" />
          <span>{currentLang === 'es' ? 'Cargando Módulo...' : 'Loading Module...'}</span>
        </div>
      }
    >
      {/* 1. MENÚ PRINCIPAL PUNK / ECO-NOIR (PORTADA PRINCIPAL CON EL LOGO, FOTO Y BOTONES ESTRATÉGICOS) */}
      {viewMode === 'punk' && (
        <PunkMainMenu
          currentLang={currentLang}
          onToggleLanguage={toggleLanguage}
          onSelectSciencePlanet={() => openGameCategory('science')}
          onSelectSummits={() => openGameCategory('global')}
          onSelectPolicy={() => openGameCategory('policy')}
          onSelectCommsArts={() => openGameCategory('culture')}
          onSelectGrassroots={() => openGameCategory('comms')}
          onSelectProjects={() => openGameCategory('rd')}
          onSelectPublications={() => openGameCategory('publications')}
          onSelectSkills={() => openGameCategory('skills')}
          onSelectTitles={() => openGameCategory('titles')}
          onSelectCertifications={() => openGameCategory('certifications')}
          onSelectScienceDossier={() => setViewMode('dossier')}
          onOpenHireMe={() => setIsHireMeOpen(true)}
          onOpenCvSelector={() => setIsCvSelectorOpen(true)}
          onOpenArtDirector={() => setIsArtDirectorOpen(true)}
          onOpenAdmin={() => setViewMode('admin')}
        />
      )}

      {/* 1B. PANEL DE ADMINISTRADOR: PLAYBOOK DE BÚSQUEDA DE EMPLEO (EUROPA & CHILE) */}
      {viewMode === 'admin' && (
        <AdminCareerPanel
          currentLang={currentLang}
          onToggleLanguage={toggleLanguage}
          onBackToHome={() => setViewMode('punk')}
          onOpenDeepLinkView={(view, cat, mission, lang) => {
            if (lang) setCurrentLang(lang);
            if (view === 'dossier') {
              setViewMode('dossier');
            } else {
              setSelectedCategory((cat as 'all' | MissionType) || 'all');
              setSelectedMissionId(mission);
              setViewMode('game');
            }
          }}
        />
      )}

      {/* 1C. LIENZO WEB REAL 1200x630 (REACT + THREE.JS WEBGL) PARA BANNER OG:IMAGE */}
      {viewMode === 'og_render' && <OgBannerWebCanvas />}

      {/* 2. VISOR INMERSIVO: EL PLANETA 3D INTERACTIVO */}
      {viewMode === 'game' && (
        <GameWorldView
          currentLang={currentLang}
          onToggleLanguage={toggleLanguage}
          onExitToDossier={() => setViewMode('dossier')}
          onBackToMenu={() => setViewMode('punk')}
          onBackToGateway={() => setViewMode('punk')}
          onOpenHireMe={() => setIsHireMeOpen(true)}
          onOpenSkills={() => setIsSkillsOpen(true)}
          onOpenArtDirector={() => setIsArtDirectorOpen(true)}
          initialFilter={selectedCategory}
          initialMissionId={selectedMissionId}
          onStateChange={(newFilter, newMissionId) => {
            setSelectedCategory(newFilter);
            setSelectedMissionId(newMissionId);
          }}
        />
      )}

      {/* 3. VISTA EJECUTIVA: EXPEDIENTE CIENTÍFICO EN PAPEL (CIENCIA & ACADEMIA EXCLUSIVAMENTE) */}
      {viewMode === 'dossier' && (
        <ClassicDossierView
          currentLang={currentLang}
          onToggleLanguage={toggleLanguage}
          onSwitchToGameView={() => openGameCategory('science')}
          onOpenHireMe={() => setIsHireMeOpen(true)}
          onOpenSkills={() => setIsSkillsOpen(true)}
          onBackToGateway={() => setViewMode('punk')}
        />
      )}

      {/* 4. VISOR DE MEDIOS, ARTIVISMO & FRENTE TERRITORIAL */}
      {viewMode === 'comms_culture' && (
        <CommsCultureView
          currentLang={currentLang}
          onToggleLanguage={toggleLanguage}
          onBackToHome={() => setViewMode('punk')}
          onSwitchToGameView={(cat) => openGameCategory((cat as MissionType) || 'all')}
          onOpenHireMe={() => setIsHireMeOpen(true)}
          onOpenSkills={() => setIsSkillsOpen(true)}
          initialMode={commsCultureMode}
        />
      )}

      {/* MODAL GLOBAL HIRE ME // CANALES DE CONTRATACIÓN */}
      {isHireMeOpen && (
        <HireMeModal
          isOpen={isHireMeOpen}
          onClose={() => setIsHireMeOpen(false)}
          currentLang={currentLang}
          onOpenCvSelector={() => {
            setIsHireMeOpen(false);
            setIsCvSelectorOpen(true);
          }}
        />
      )}

      {/* MODAL GLOBAL SELECTOR DE CURRÍCULUM VITAE (EN/ES • 1P/2P) */}
      {isCvSelectorOpen && (
        <CvSelectorModal
          isOpen={isCvSelectorOpen}
          onClose={() => setIsCvSelectorOpen(false)}
          currentLang={currentLang}
        />
      )}

      {/* MODAL GLOBAL DE SKILLS // FICHA TÉCNICA Y METODOLOGÍAS */}
      {isSkillsOpen && (
        <SkillsModal
          isOpen={isSkillsOpen}
          onClose={() => setIsSkillsOpen(false)}
          currentLang={currentLang}
          initialTab={viewMode === 'comms_culture' ? 'comms' : 'science'}
        />
      )}

      {/* MODAL GLOBAL DE PUBLICACIONES & PRENSA INVESTIGATIVA */}
      {isPublicationsOpen && (
        <PublicationsModal
          isOpen={isPublicationsOpen}
          onClose={() => setIsPublicationsOpen(false)}
          currentLang={currentLang}
        />
      )}

      {/* MODAL GLOBAL DE TÍTULOS ACADÉMICOS, CERTIFICACIONES & AVALES */}
      {isTitlesOpen && (
        <TitlesModal
          isOpen={isTitlesOpen}
          onClose={() => setIsTitlesOpen(false)}
          currentLang={currentLang}
          onOpenCertificationsGlobe={() => openGameCategory('certifications')}
        />
      )}

      {/* MODAL GLOBAL DE DIRECCIÓN DE ARTE, RAP BEAUCHEF & CUARENTENA RAP */}
      {isArtDirectorOpen && (
        <ArtDirectorModal
          isOpen={isArtDirectorOpen}
          onClose={() => setIsArtDirectorOpen(false)}
          currentLang={currentLang}
        />
      )}
    </Suspense>
  );
}

export default App;
