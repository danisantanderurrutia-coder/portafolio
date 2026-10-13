import React, { useState } from 'react';
import { Language } from './types';
import { GameWorldView, MissionType } from './components/GameWorldView';
import { PunkMainMenu } from './components/PunkMainMenu';
import { ClassicDossierView } from './components/ClassicDossierView';
import { CommsCultureView, CommsCultureMode } from './components/CommsCultureView';
import { HireMeModal } from './components/HireMeModal';
import { SkillsModal } from './components/SkillsModal';

export { resolveAsset } from './utils';

export function App() {
  const [viewMode, setViewMode] = useState<'punk' | 'game' | 'dossier' | 'comms_culture'>('punk');
  const [commsCultureMode, setCommsCultureMode] = useState<CommsCultureMode>('comms_arts');
  const [selectedCategory, setSelectedCategory] = useState<'all' | MissionType>('all');
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <>
      {/* 1. MENÚ PRINCIPAL PUNK / ECO-NOIR (PORTADA PRINCIPAL CON EL LOGO, FOTO Y 8 BOTONES ESTRATÉGICOS) */}
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
    </>
  );
}

export default App;
