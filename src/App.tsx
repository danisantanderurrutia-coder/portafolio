import React, { useState } from 'react';
import { Language } from './types';
import { GameWorldView, MissionType } from './components/GameWorldView';
import { PunkMainMenu } from './components/PunkMainMenu';
import { ClassicDossierView } from './components/ClassicDossierView';

export { resolveAsset } from './utils';

export function App() {
  const [viewMode, setViewMode] = useState<'punk' | 'game' | 'dossier'>('punk');
  const [selectedCategory, setSelectedCategory] = useState<'all' | MissionType>('all');
  const [currentLang, setCurrentLang] = useState<Language>('es');

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  // 1. NIVEL 1: MENÚ INICIAL TIPO PUNK / ECO-NOIR (LANDING CON CALLE ESTRECHA, PLANTAS, BICICLETAS Y PANELES)
  if (viewMode === 'punk') {
    return (
      <PunkMainMenu
        currentLang={currentLang}
        onToggleLanguage={toggleLanguage}
        onSelectCategory={(category) => {
          setSelectedCategory(category);
          setViewMode('game');
        }}
        onOpenDossier={() => setViewMode('dossier')}
      />
    );
  }

  // 2. NIVEL 2: VISOR TÁCTICO HALO / BATTLEFIELD CON PLANETA TIERRA 3D Y CONTINENTES REALES
  if (viewMode === 'game') {
    return (
      <GameWorldView
        currentLang={currentLang}
        onToggleLanguage={toggleLanguage}
        onExitToDossier={() => setViewMode('dossier')}
        onBackToMenu={() => setViewMode('punk')}
        initialFilter={selectedCategory}
      />
    );
  }

  // 3. NIVEL 3: DOSSIER ACADÉMICO CLÁSICO RESTAURADO AL ESTILO ANTERIOR LIMPIO DE AYER AL MEDIODÍA
  return (
    <ClassicDossierView
      currentLang={currentLang}
      onToggleLanguage={toggleLanguage}
      onSwitchToGameView={() => setViewMode('game')}
    />
  );
}

export default App;
