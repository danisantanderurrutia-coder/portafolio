import React, { useState } from 'react';
import { Language } from './types';
import { GameWorldView, MissionType } from './components/GameWorldView';
import { PunkMainMenu } from './components/PunkMainMenu';
import { ClassicDossierView } from './components/ClassicDossierView';
import { LandingGateway } from './components/LandingGateway';
import { HireMeModal } from './components/HireMeModal';
import { SkillsModal } from './components/SkillsModal';

export { resolveAsset } from './utils';

export function App() {
  const [viewMode, setViewMode] = useState<'gateway' | 'punk' | 'game' | 'dossier'>('gateway');
  const [dossierMode, setDossierMode] = useState<'science' | 'comms'>('science');
  const [selectedCategory, setSelectedCategory] = useState<'all' | MissionType>('all');
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <>
      {/* 1. PORTADA PRINCIPAL DE ACCESO PROFESIONAL (LANDING GATEWAY) */}
      {viewMode === 'gateway' && (
        <LandingGateway
          currentLang={currentLang}
          onToggleLanguage={toggleLanguage}
          onSelectScienceExecutive={() => {
            setDossierMode('science');
            setViewMode('dossier');
          }}
          onSelectCommsExecutive={() => {
            setDossierMode('comms');
            setViewMode('dossier');
          }}
          onSelectImmersive={() => {
            setSelectedCategory('all');
            setViewMode('game');
          }}
          onSelectPunkMenu={() => setViewMode('punk')}
          onOpenHireMe={() => setIsHireMeOpen(true)}
          onOpenSkills={() => setIsSkillsOpen(true)}
        />
      )}

      {/* 2. MENÚ ESTILO PUNK / FANZINE ECO-NOIR ARCADE */}
      {viewMode === 'punk' && (
        <PunkMainMenu
          currentLang={currentLang}
          onToggleLanguage={toggleLanguage}
          onSelectCategory={(category) => {
            setSelectedCategory(category);
            setViewMode('game');
          }}
          onOpenDossier={() => {
            setDossierMode('comms');
            setViewMode('dossier');
          }}
          onBackToGateway={() => setViewMode('gateway')}
          onOpenHireMe={() => setIsHireMeOpen(true)}
          onOpenSkills={() => setIsSkillsOpen(true)}
        />
      )}

      {/* 3. VISOR INMERSIVO: EL PLANETA 3D INTERACTIVO */}
      {viewMode === 'game' && (
        <GameWorldView
          currentLang={currentLang}
          onToggleLanguage={toggleLanguage}
          onExitToDossier={() => {
            setDossierMode('science');
            setViewMode('dossier');
          }}
          onBackToMenu={() => setViewMode('gateway')}
          onBackToGateway={() => setViewMode('gateway')}
          onOpenHireMe={() => setIsHireMeOpen(true)}
          onOpenSkills={() => setIsSkillsOpen(true)}
          initialFilter={selectedCategory}
        />
      )}

      {/* 4. VISTA EJECUTIVA: DOSSIER ACADÉMICO / EDITORIAL LIMPIO (CIENCIA O COMUNICACIONES) */}
      {viewMode === 'dossier' && (
        <ClassicDossierView
          currentLang={currentLang}
          onToggleLanguage={toggleLanguage}
          onSwitchToGameView={() => setViewMode('game')}
          initialProfileMode={dossierMode}
          onOpenHireMe={() => setIsHireMeOpen(true)}
          onOpenSkills={() => setIsSkillsOpen(true)}
          onBackToGateway={() => setViewMode('gateway')}
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
        initialTab={dossierMode === 'comms' ? 'comms' : 'science'}
      />
    </>
  );
}

export default App;
