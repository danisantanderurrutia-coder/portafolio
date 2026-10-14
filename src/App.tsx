import React, { useState } from 'react';
import { Language } from './types';
import { GameWorldView, MissionType } from './components/GameWorldView';
import { PunkMainMenu } from './components/PunkMainMenu';
import { ClassicDossierView } from './components/ClassicDossierView';
import { CommsCultureView, CommsCultureMode } from './components/CommsCultureView';
import { HireMeModal } from './components/HireMeModal';
import { SkillsModal } from './components/SkillsModal';
import { PublicationsModal } from './components/PublicationsModal';
import { TitlesModal } from './components/TitlesModal';
import { ArtDirectorModal } from './components/ArtDirectorModal';

export { resolveAsset } from './utils';

export function App() {
  const [viewMode, setViewMode] = useState<'punk' | 'game' | 'dossier' | 'comms_culture'>('punk');
  const [commsCultureMode, setCommsCultureMode] = useState<CommsCultureMode>('comms_arts');
  const [selectedCategory, setSelectedCategory] = useState<'all' | MissionType>('all');
  const [currentLang, setCurrentLang] = useState<Language>('en');
  
  // Modals state
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(false);
  const [isTitlesOpen, setIsTitlesOpen] = useState(false);
  const [isArtDirectorOpen, setIsArtDirectorOpen] = useState(false);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <>
      {/* 1. MENÚ PRINCIPAL PUNK / ECO-NOIR (PORTADA PRINCIPAL CON EL LOGO, FOTO Y BOTONES ESTRATÉGICOS) */}
      {viewMode === 'punk' && (
        <PunkMainMenu
          currentLang={currentLang}
          onToggleLanguage={toggleLanguage}
          onSelectSciencePlanet={() => {
            setSelectedCategory('science');
            setViewMode('game');
          }}
          onSelectSummits={() => {
            setSelectedCategory('global');
            setViewMode('game');
          }}
          onSelectCommsArts={() => {
            setSelectedCategory('culture');
            setViewMode('game');
          }}
          onSelectGrassroots={() => {
            setSelectedCategory('comms');
            setViewMode('game');
          }}
          onSelectScienceDossier={() => {
            setViewMode('dossier');
          }}
          onOpenHireMe={() => setIsHireMeOpen(true)}
          onOpenSkills={() => setIsSkillsOpen(true)}
          onOpenPublications={() => setIsPublicationsOpen(true)}
          onOpenTitles={() => setIsTitlesOpen(true)}
          onOpenArtDirector={() => setIsArtDirectorOpen(true)}
        />
      )}

      {/* 2. VISOR INMERSIVO: EL PLANETA 3D INTERACTIVO */}
      {viewMode === 'game' && (
        <GameWorldView
          currentLang={currentLang}
          onToggleLanguage={toggleLanguage}
          onExitToDossier={() => {
            setViewMode('dossier');
          }}
          onBackToMenu={() => setViewMode('punk')}
          onBackToGateway={() => setViewMode('punk')}
          onOpenHireMe={() => setIsHireMeOpen(true)}
          onOpenSkills={() => setIsSkillsOpen(true)}
          onOpenArtDirector={() => setIsArtDirectorOpen(true)}
          initialFilter={selectedCategory}
        />
      )}

      {/* 3. VISTA EJECUTIVA: EXPEDIENTE CIENTÍFICO EN PAPEL (CIENCIA & ACADEMIA EXCLUSIVAMENTE) */}
      {viewMode === 'dossier' && (
        <ClassicDossierView
          currentLang={currentLang}
          onToggleLanguage={toggleLanguage}
          onSwitchToGameView={() => {
            setSelectedCategory('science');
            setViewMode('game');
          }}
          onOpenHireMe={() => setIsHireMeOpen(true)}
          onOpenSkills={() => setIsSkillsOpen(true)}
          onBackToGateway={() => setViewMode('punk')}
        />
      )}

      {/* 4. VISOR DE MEDIOS, ARTIVISMO & FRENTE TERRITORIAL (CON TODAS LAS SUBPESTAÑAS Y MULTIMEDIA PRESERVADOS) */}
      {viewMode === 'comms_culture' && (
        <CommsCultureView
          currentLang={currentLang}
          onToggleLanguage={toggleLanguage}
          onBackToHome={() => setViewMode('punk')}
          onSwitchToGameView={(cat) => {
            setSelectedCategory((cat as MissionType) || 'all');
            setViewMode('game');
          }}
          onOpenHireMe={() => setIsHireMeOpen(true)}
          onOpenSkills={() => setIsSkillsOpen(true)}
          initialMode={commsCultureMode}
        />
      )}

      {/* MODAL GLOBAL HIRE ME // CANALES DE CONTRATACIÓN */}
      <HireMeModal
        isOpen={isHireMeOpen}
        onClose={() => setIsHireMeOpen(false)}
        currentLang={currentLang}
      />

      {/* MODAL GLOBAL DE SKILLS // FICHA TÉCNICA Y METODOLOGÍAS */}
      <SkillsModal
        isOpen={isSkillsOpen}
        onClose={() => setIsSkillsOpen(false)}
        currentLang={currentLang}
        initialTab={viewMode === 'comms_culture' ? 'comms' : 'science'}
      />

      {/* MODAL GLOBAL DE PUBLICACIONES & PRENSA INVESTIGATIVA */}
      <PublicationsModal
        isOpen={isPublicationsOpen}
        onClose={() => setIsPublicationsOpen(false)}
        currentLang={currentLang}
      />

      {/* MODAL GLOBAL DE TÍTULOS ACADÉMICOS, CERTIFICACIONES & AVALES */}
      <TitlesModal
        isOpen={isTitlesOpen}
        onClose={() => setIsTitlesOpen(false)}
        currentLang={currentLang}
      />

      {/* MODAL GLOBAL DE DIRECCIÓN DE ARTE, RAP BEAUCHEF & CUARENTENA RAP (SABER MÁS) */}
      <ArtDirectorModal
        isOpen={isArtDirectorOpen}
        onClose={() => setIsArtDirectorOpen(false)}
        currentLang={currentLang}
      />
    </>
  );
}

export default App;
