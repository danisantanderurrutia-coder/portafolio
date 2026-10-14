import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Radio, 
  Tv, 
  ExternalLink, 
  Users, 
  Music, 
  Award, 
  Play, 
  Disc, 
  Mic2, 
  Flame, 
  ShieldCheck, 
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';

interface ArtDirectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ArtDirectorModal: React.FC<ArtDirectorModalProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  const [activeTab, setActiveTab] = useState<'cuarentena' | 'beauchef' | 'discord' | 'brigada'>('cuarentena');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[94vh] bg-[#0c0f14] border-4 border-black rounded-2xl shadow-[10px_10px_0px_#f97316] flex flex-col overflow-hidden text-white font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ============================================================== */}
        {/* 1. MODAL TOP HEADER: PUNK ZINE CASSETTE STYLE                  */}
        {/* ============================================================== */}
        <div className="px-4 sm:px-6 py-3.5 bg-black border-b-3 border-black flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-3">
            <span className="bg-[#f97316] text-black px-3 py-1 font-mono font-black text-xs sm:text-sm uppercase border-2 border-black shadow-[2px_2px_0px_#000] -rotate-1">
              {currentLang === 'es' ? '[ ARQUITECTURA CULTURAL & DIRECCIÓN DE ARTE ]' : '[ CULTURAL ARCHITECTURE & ART DIRECTION ]'}
            </span>
            <span className="hidden sm:inline-block bg-yellow-400 text-black font-mono font-black text-[10px] px-2 py-0.5 border border-black uppercase rotate-1">
              {currentLang === 'es' ? 'BACKSTAGE & LIBRO DE CONCEPTO' : 'BACKSTAGE & CONCEPT BOOK'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/10 hover:bg-red-600 hover:text-white text-neutral-300 transition-all border border-white/20 active:scale-90 cursor-pointer ml-auto"
            title={currentLang === 'es' ? 'Cerrar' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ============================================================== */}
        {/* 2. ROLE MANIFESTO BANNER                                       */}
        {/* ============================================================== */}
        <div className="bg-[#18110b] border-b-2 border-orange-500/30 px-4 sm:px-6 py-3 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-[11px] font-mono font-black text-orange-400 tracking-wider uppercase">
                {currentLang === 'es' 
                  ? 'ROL: DIRECTOR DE ARTE • PRODUCTOR EJECUTIVO • ARQUITECTO DE ECOSISTEMAS CULTURALES' 
                  : 'ROLE: ART DIRECTOR • EXECUTIVE PRODUCER • CULTURAL ECOSYSTEM ARCHITECT'}
              </div>
              <p className="text-[11px] text-neutral-300 font-sans mt-0.5 leading-relaxed">
                {currentLang === 'es'
                  ? 'Diseño conceptual, producción técnica de sonido en anfiteatros, dirección audiovisual, creación de rúbricas éticas y montaje de ligas internacionales multiplataforma (12k+ comunidad).'
                  : 'Conceptual design, amphitheater live sound rigging, broadcast directing, lyricism rubrics & cross-border multiplatform league engineering (12k+ community).'}
              </p>
            </div>
            <div className="shrink-0 flex items-center space-x-2">
              <span className="bg-red-600 text-white font-mono font-black text-[9px] px-2 py-0.5 border border-black uppercase">
                2019-2022
              </span>
              <span className="bg-white text-black font-mono font-black text-[9px] px-2 py-0.5 border border-black uppercase">
                FCFM • DISCORD • YOUTUBE
              </span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. NAVIGATION TABS (PUNK STENCIL TAPE)                         */}
        {/* ============================================================== */}
        <div className="px-4 sm:px-6 pt-3 pb-2 bg-black/60 border-b border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          <button
            onClick={() => setActiveTab('cuarentena')}
            className={`px-3 py-1.5 font-mono font-black text-xs uppercase tracking-tight border-2 border-black transition-all flex items-center space-x-1.5 cursor-pointer shrink-0 ${
              activeTab === 'cuarentena'
                ? 'bg-[#facc15] text-black shadow-[3px_3px_0px_#fff] -rotate-1'
                : 'bg-white/10 text-neutral-300 hover:bg-white/20'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? '01. CUARENTENA RAP // DISPOSITIVO & KARMAS' : '01. CUARENTENA RAP // CONCEPT & KARMAS'}</span>
          </button>

          <button
            onClick={() => setActiveTab('beauchef')}
            className={`px-3 py-1.5 font-mono font-black text-xs uppercase tracking-tight border-2 border-black transition-all flex items-center space-x-1.5 cursor-pointer shrink-0 ${
              activeTab === 'beauchef'
                ? 'bg-[#f97316] text-white shadow-[3px_3px_0px_#fff] rotate-1'
                : 'bg-white/10 text-neutral-300 hover:bg-white/20'
            }`}
          >
            <Mic2 className="w-3.5 h-3.5" />
            <span>02. RAP BEAUCHEF & DUEÑAS DE LA VOZ</span>
          </button>

          <button
            onClick={() => setActiveTab('discord')}
            className={`px-3 py-1.5 font-mono font-black text-xs uppercase tracking-tight border-2 border-black transition-all flex items-center space-x-1.5 cursor-pointer shrink-0 ${
              activeTab === 'discord'
                ? 'bg-[#06b6d4] text-black shadow-[3px_3px_0px_#fff] -rotate-1'
                : 'bg-white/10 text-neutral-300 hover:bg-white/20'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? '03. INFRAESTRUCTURA DISCORD (+12K)' : '03. DISCORD INFRASTRUCTURE (+12K)'}</span>
          </button>

          <button
            onClick={() => setActiveTab('brigada')}
            className={`px-3 py-1.5 font-mono font-black text-xs uppercase tracking-tight border-2 border-black transition-all flex items-center space-x-1.5 cursor-pointer shrink-0 ${
              activeTab === 'brigada'
                ? 'bg-[#ec4899] text-white shadow-[3px_3px_0px_#fff] rotate-1'
                : 'bg-white/10 text-neutral-300 hover:bg-white/20'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>{currentLang === 'es' ? '04. BRIGADA PAULINA AGUIRRE & MURALES' : '04. PAULINA AGUIRRE BRIGADE & MURALS'}</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* 4. SCROLLABLE TAB CONTENT AREA                                 */}
        {/* ============================================================== */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 no-scrollbar">
          
          {/* ============================================================== */}
          {/* TAB 1: CUARENTENA RAP                                          */}
          {/* ============================================================== */}
          {activeTab === 'cuarentena' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Concept Manifesto Card */}
              <div className="bg-[#141720] border-3 border-black p-4 sm:p-5 rounded-xl shadow-[4px_4px_0px_#facc15] space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
                  <div className="flex items-center space-x-2">
                    <span className="bg-red-600 text-white font-mono font-black text-[9px] px-2 py-0.5 border border-black uppercase">
                      {currentLang === 'es' ? 'CONCEPTO FILOSÓFICO' : 'PHILOSOPHICAL CONCEPT'}
                    </span>
                    <h3 className="font-mono font-black text-sm sm:text-base text-yellow-400 uppercase">
                      {currentLang === 'es' ? 'La Muerte Simbólica y el Viaje hacia la Liberación' : 'Symbolic Death & The Journey toward Liberation'}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">
                    {currentLang === 'es' ? '2020-2021 // Pandemia Global' : '2020-2021 // Global Pandemic'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans text-neutral-300 leading-relaxed">
                  <div className="bg-black/60 p-3 rounded-lg border border-white/10 space-y-1">
                    <span className="text-[#facc15] font-mono font-black text-xs uppercase block">
                      {currentLang === 'es' ? '01. Fase de Tumbas' : '01. Crypt Phase (Fase de Tumbas)'}
                    </span>
                    <p className="text-[11px] text-neutral-300">
                      {currentLang === 'es'
                        ? 'En pleno confinamiento sanitario, la sociedad vivía rodeada de aislamiento y muerte en las noticias. Los emcees ingresan al torneo simbólicamente "muertos": inactivos y confinados.'
                        : 'During lockdowns, emcees entered the tournament symbolically "dead" — inactive and confined — waking up their voices to overcome isolation.'}
                    </p>
                  </div>

                  <div className="bg-black/60 p-3 rounded-lg border border-white/10 space-y-1">
                    <span className="text-[#f97316] font-mono font-black text-xs uppercase block">
                      {currentLang === 'es' ? '02. Fase de Karmas' : '02. Karma Phase (Fase de Karmas)'}
                    </span>
                    <p className="text-[11px] text-neutral-300">
                      {currentLang === 'es'
                        ? 'Los participantes se enfrentan a sus propios dolores, duelos y conflictos estructurales. No era solo insultar al rival: era purgar la asfixia del encierro mediante la palabra poética.'
                        : 'Contenders faced personal and societal grief. Beyond attacking rivals, emcees purged quarantine trauma through raw lyrical confrontation.'}
                    </p>
                  </div>

                  <div className="bg-black/60 p-3 rounded-lg border border-white/10 space-y-1">
                    <span className="text-[#22c55e] font-mono font-black text-xs uppercase block">
                      {currentLang === 'es' ? '03. La Liberación' : '03. Liberation Phase'}
                    </span>
                    <p className="text-[11px] text-neutral-300">
                      {currentLang === 'es'
                        ? 'Culminación en la Gran Final. El arte se convierte en vehículo de catarsis colectiva y renacimiento, transmitido en directo ante miles de espectadores conectados.'
                        : 'The Grand Final climax. Rap becomes a collective liberation engine, broadcast live to thousands of concurrent streaming viewers.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Manifesto & Promo Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
                
                {/* Video Player Box */}
                <div className="bg-black border-3 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_#000]">
                  <div className="p-3 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Play className="w-4 h-4 text-red-500 fill-current" />
                      <span className="font-mono font-bold text-xs text-white uppercase">
                        {currentLang === 'es' ? 'Video Manifiesto Promocional' : 'Promotional Concept Video'}
                      </span>
                    </div>
                    <a 
                      href="https://www.youtube.com/watch?v=B2XrNxHxwrA" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-neutral-400 hover:text-white text-[11px] font-mono flex items-center space-x-1"
                    >
                      <span>YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="aspect-video w-full bg-neutral-950 relative flex items-center justify-center">
                    {playingVideo === 'B2XrNxHxwrA' ? (
                      <iframe
                        src="https://www.youtube.com/embed/B2XrNxHxwrA?autoplay=1"
                        title="Cuarentena Rap Video Promocional"
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div 
                        className="relative w-full h-full cursor-pointer group"
                        onClick={() => setPlayingVideo('B2XrNxHxwrA')}
                      >
                        <img 
                          src={resolveAsset('/youtube_covers/B2XrNxHxwrA.jpg')} 
                          alt="Cuarentena Rap Promo"
                          className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-all">
                          <div className="w-14 h-14 rounded-full bg-red-600 border-2 border-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-7 h-7 text-white fill-current ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2 bg-black/80 px-2.5 py-1 text-[11px] font-mono text-yellow-300 border border-white/20">
                          {currentLang === 'es' ? '▶ Clic para reproducir manifiesto audiovisual' : '▶ Click to play audiovisual manifesto'}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Grand Final & Tournament Climax Box */}
                <div className="bg-[#141720] border-3 border-black p-4 rounded-xl shadow-[4px_4px_0px_#000] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-amber-400 text-black font-mono font-black text-[9px] px-2 py-0.5 border border-black uppercase">
                      {currentLang === 'es' ? 'GRAN FINAL & CORONACIÓN' : 'GRAND FINAL & CORONATION'}
                    </span>
                    <a
                      href="https://www.instagram.com/p/CKu2R9qgy3Q/"
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[10px] text-neutral-400 hover:text-white flex items-center space-x-1"
                    >
                      <span>{currentLang === 'es' ? 'Instagram Oficial' : 'Official Instagram'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden border-2 border-black bg-black">
                      <img 
                        src={resolveAsset('/instagram_covers/CKu2R9qgy3Q.jpg')} 
                        alt="Crizzo Gran Final"
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-mono font-black text-sm text-white leading-tight">
                        {currentLang === 'es' ? 'Crizzo Campeón: La Coronación de la Temporada' : 'Crizzo Champion: Grand Season Finale'}
                      </h4>
                      <p className="text-[11px] text-neutral-300 font-sans leading-relaxed">
                        {currentLang === 'es'
                          ? 'Duelo cumbre transmitido en vivo que coronó a Crizzo tras atravesar las fases de tumbas, karmas y semifinales escritas con la más alta técnica métrica de la escena latinoamericana.'
                          : 'Monumental season climax crowning Crizzo after traversing crypt, karma and semifinal brackets with Latin America’s sharpest written rhyme schemes.'}
                      </p>
                    </div>
                  </div>

                  {/* Battle Links */}
                  <div className="pt-2 border-t border-white/10 space-y-1.5">
                    <div className="text-[10px] font-mono uppercase text-neutral-400 font-bold">
                      {currentLang === 'es' ? 'Batallas Destacadas en YouTube:' : 'Featured YouTube Battles:'}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10.5px] font-mono">
                      <a 
                        href="https://www.youtube.com/watch?v=l2PwaGDStx8"
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 bg-black/60 hover:bg-neutral-800 border border-white/10 rounded flex items-center justify-between text-yellow-300"
                      >
                        <span>{currentLang === 'es' ? '⚔️ Semifinales Oficiales' : '⚔️ Official Semifinals'}</span>
                        <ExternalLink className="w-3 h-3 text-neutral-400" />
                      </a>
                      <a 
                        href="https://www.youtube.com/watch?v=YZhhS7l_04Q"
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 bg-black/60 hover:bg-neutral-800 border border-white/10 rounded flex items-center justify-between text-yellow-300"
                      >
                        <span>{currentLang === 'es' ? '⚔️ Cuartos: Chologuapo' : '⚔️ Quarterfinals: Chologuapo'}</span>
                        <ExternalLink className="w-3 h-3 text-neutral-400" />
                      </a>
                      <a 
                        href="https://www.youtube.com/watch?v=I7Kiv8B5-8I"
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 bg-black/60 hover:bg-neutral-800 border border-white/10 rounded flex items-center justify-between text-yellow-300"
                      >
                        <span>{currentLang === 'es' ? '⚔️ Fase de Karmas' : '⚔️ Karma Phase'}</span>
                        <ExternalLink className="w-3 h-3 text-neutral-400" />
                      </a>
                      <a 
                        href="https://www.youtube.com/watch?v=eQ8o4xRh2cI"
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 bg-black/60 hover:bg-neutral-800 border border-white/10 rounded flex items-center justify-between text-yellow-300"
                      >
                        <span>{currentLang === 'es' ? '⚔️ Duelo: Chologuapo vs Crizzo' : '⚔️ Clash: Chologuapo vs Crizzo'}</span>
                        <ExternalLink className="w-3 h-3 text-neutral-400" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* RÚBRICAS ÉTICAS Y SISTEMA DE EVALUACIÓN TRANSPARENTE */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-yellow-400" />
                  <h4 className="font-mono font-black text-xs uppercase tracking-wider text-white">
                    {currentLang === 'es' 
                      ? 'SISTEMA DE RÚBRICAS ÉTICAS & CRITERIO LÍRICO TRANSPARENTE' 
                      : 'ETHICAL RUBRICS & TRANSPARENT SCORING SYSTEM'}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  
                  {/* Rubric 1: Bases */}
                  <a
                    href="https://www.instagram.com/p/CFqKMjHnKDc/?img_index=3"
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-[#141720] border-2 border-black rounded-lg p-3 hover:border-yellow-400 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-full h-24 rounded overflow-hidden mb-2 bg-black border border-white/10">
                        <img 
                          src={resolveAsset('/instagram_covers/CFqKMjHnKDc.jpg')} 
                          alt="Bases y Protocolos"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                        />
                      </div>
                      <div className="font-mono font-bold text-xs text-white group-hover:text-yellow-400">
                        {currentLang === 'es' ? 'Bases y Protocolos' : 'Rules & Ethical Guidelines'}
                      </div>
                      <div className="text-[10px] text-neutral-400 mt-1">
                        {currentLang === 'es' 
                          ? 'Manual ético y normativas de competencia anti-discriminación.' 
                          : 'Anti-discrimination community standards and competitive rules.'}
                      </div>
                    </div>
                    <div className="mt-2 text-[9px] font-mono text-yellow-400 flex items-center justify-between">
                      <span>{currentLang === 'es' ? 'Ver en Instagram' : 'View on Instagram'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>

                  {/* Rubric 2: Criterio Lírico */}
                  <a
                    href="https://www.instagram.com/p/CFv-xFUj3cP/?img_index=1"
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-[#141720] border-2 border-black rounded-lg p-3 hover:border-yellow-400 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-full h-24 rounded overflow-hidden mb-2 bg-black border border-white/10">
                        <img 
                          src={resolveAsset('/instagram_covers/CFv-xFUj3cP.jpg')} 
                          alt="Criterio Lírico"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                        />
                      </div>
                      <div className="font-mono font-bold text-xs text-white group-hover:text-yellow-400">
                        {currentLang === 'es' ? 'Criterio Lírico' : 'Lyricism Evaluation'}
                      </div>
                      <div className="text-[10px] text-neutral-400 mt-1">
                        {currentLang === 'es'
                          ? 'Ponderación de coherencia, métrica, profundidad y figuras retóricas.'
                          : 'Scoring weight for coherence, metrics, depth, and rhetorical devices.'}
                      </div>
                    </div>
                    <div className="mt-2 text-[9px] font-mono text-yellow-400 flex items-center justify-between">
                      <span>{currentLang === 'es' ? 'Ver en Instagram' : 'View on Instagram'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>

                  {/* Rubric 3: Flow & Puntaje */}
                  <a
                    href="https://www.instagram.com/p/CFwD6Nqjbrn/?img_index=1"
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-[#141720] border-2 border-black rounded-lg p-3 hover:border-yellow-400 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-full h-24 rounded overflow-hidden mb-2 bg-black border border-white/10">
                        <img 
                          src={resolveAsset('/instagram_covers/CFwD6Nqjbrn.jpg')} 
                          alt="Flow & Puntaje"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                        />
                      </div>
                      <div className="font-mono font-bold text-xs text-white group-hover:text-yellow-400">
                        {currentLang === 'es' ? 'Puntaje & Flow' : 'Flow & Metric Scoring'}
                      </div>
                      <div className="text-[10px] text-neutral-400 mt-1">
                        {currentLang === 'es'
                          ? 'Estructura matemática de calificación por compás e instrumental.'
                          : 'Mathematical scoring matrix per musical bar and beat.'}
                      </div>
                    </div>
                    <div className="mt-2 text-[9px] font-mono text-yellow-400 flex items-center justify-between">
                      <span>{currentLang === 'es' ? 'Ver en Instagram' : 'View on Instagram'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>

                  {/* Rubric 4: Desempeño Global */}
                  <a
                    href="https://www.instagram.com/p/CFwMfCCDvp5/?img_index=1"
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-[#141720] border-2 border-black rounded-lg p-3 hover:border-yellow-400 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-full h-24 rounded overflow-hidden mb-2 bg-black border border-white/10">
                        <img 
                          src={resolveAsset('/instagram_covers/CFwMfCCDvp5.jpg')} 
                          alt="Desempeño Global"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                        />
                      </div>
                      <div className="font-mono font-bold text-xs text-white group-hover:text-yellow-400">
                        {currentLang === 'es' ? 'Desempeño Global' : 'Overall Staging'}
                      </div>
                      <div className="text-[10px] text-neutral-400 mt-1">
                        {currentLang === 'es'
                          ? 'Puesta en escena, actitud, consistencia conceptual y remate.'
                          : 'Stage presence, delivery, conceptual consistency, and punchlines.'}
                      </div>
                    </div>
                    <div className="mt-2 text-[9px] font-mono text-yellow-400 flex items-center justify-between">
                      <span>{currentLang === 'es' ? 'Ver en Instagram' : 'View on Instagram'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>

                </div>
              </div>

              {/* INTEGRACIÓN DE DISCIPLINAS: BEATMAKERS, BEATBOX & BREAKING */}
              <div className="bg-[#12151e] border-2 border-black rounded-xl p-4 space-y-3">
                <div className="text-xs font-mono font-black text-amber-400 uppercase tracking-wider">
                  {currentLang === 'es' ? 'DISCIPLINAS INTEGRADAS DEL HIP-HOP EN CONFINAMIENTO' : 'INTEGRATED HIP-HOP DISCIPLINES UNDER LOCKDOWN'}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  
                  {/* Beatmakers */}
                  <a
                    href="https://www.instagram.com/p/CHwXUDll83G/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-black/60 rounded border border-white/10 hover:border-amber-400 transition-all block group"
                  >
                    <div className="flex items-center space-x-2 text-white font-mono font-bold text-xs group-hover:text-amber-400">
                      <Disc className="w-3.5 h-3.5 text-amber-400" />
                      <span>{currentLang === 'es' ? 'Beatmakers & Boom-Bap' : 'Beatmakers & Boom-Bap'}</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      {currentLang === 'es'
                        ? 'Producción de instrumentales exclusivas, samples y texturas sonoras creadas por productores de toda la región.'
                        : 'Exclusive instrumentals, sample-based loops, and boom-bap soundscapes produced across Latin America.'}
                    </p>
                  </a>

                  {/* Beatboxers */}
                  <a
                    href="https://www.instagram.com/p/CHwYsrQFfgx/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-black/60 rounded border border-white/10 hover:border-amber-400 transition-all block group"
                  >
                    <div className="flex items-center space-x-2 text-white font-mono font-bold text-xs group-hover:text-amber-400">
                      <Music className="w-3.5 h-3.5 text-amber-400" />
                      <span>{currentLang === 'es' ? 'Beatboxers Cup' : 'Beatboxers Cup'}</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      {currentLang === 'es'
                        ? 'Percusión vocal e innovación acústica transformando micrófonos hogareños en baterías completas en duelos virtuales.'
                        : 'Acoustic vocal percussion turning desktop mics into full drum kits during virtual duels.'}
                    </p>
                  </a>

                  {/* Breaking */}
                  <a
                    href="https://www.instagram.com/p/CHwWP8Wlq0u/?img_index=1"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-black/60 rounded border border-white/10 hover:border-amber-400 transition-all block group"
                  >
                    <div className="flex items-center space-x-2 text-white font-mono font-bold text-xs group-hover:text-amber-400">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      <span>{currentLang === 'es' ? 'Breaking Virtual Cyphers' : 'Breaking Virtual Cyphers'}</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      {currentLang === 'es'
                        ? 'B-Boys y B-Girls compitiendo mediante grabaciones sincrónicas y cyphers en vivo durante el confinamiento.'
                        : 'B-Boys & B-Girls competing via synchronized high-framerate cyphers during lockdowns.'}
                    </p>
                  </a>

                </div>
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 2: RAP BEAUCHEF & DUEÑAS DE LA VOZ                        */}
          {/* ============================================================== */}
          {activeTab === 'beauchef' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Dueñas de la Voz Showcase Box */}
              <div className="bg-[#1c131d] border-3 border-black p-4 sm:p-5 rounded-xl shadow-[4px_4px_0px_#ec4899] space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-pink-500/20 pb-2">
                  <div className="flex items-center space-x-2">
                    <span className="bg-[#ec4899] text-white font-mono font-black text-[9px] px-2 py-0.5 border border-black uppercase">
                      {currentLang === 'es' ? 'ENCUENTRO FEMENINO HISTÓRICO' : 'HISTORIC WOMEN’S TOURNAMENT'}
                    </span>
                    <h3 className="font-mono font-black text-sm sm:text-base text-pink-300 uppercase">
                      {currentLang === 'es' 
                        ? '"Dueñas de la Voz" — Conciertos & Liderazgo de Mujeres' 
                        : '"Dueñas de la Voz" — Live Hip-Hop & Women’s Spoken-Word Leadership'}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">2019 // FCFM U. de Chile</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                  
                  {/* Video Box: Queena Final */}
                  <div className="bg-black border-2 border-black rounded-lg overflow-hidden">
                    <div className="p-2.5 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
                      <span className="font-mono font-bold text-xs text-pink-300">
                        {currentLang === 'es' ? 'QUEENA - Final Dueñas de la Voz (Registro Oficial)' : 'QUEENA - Dueñas de la Voz Final (Official Recording)'}
                      </span>
                      <a 
                        href="https://www.youtube.com/watch?v=NcDejj3NKXo" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-neutral-400 hover:text-white text-[10px] font-mono flex items-center space-x-1"
                      >
                        <span>YouTube</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="aspect-video w-full bg-neutral-950 relative flex items-center justify-center">
                      {playingVideo === 'NcDejj3NKXo' ? (
                        <iframe
                          src="https://www.youtube.com/embed/NcDejj3NKXo?autoplay=1"
                          title="QUEENA Dueñas de la Voz"
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div 
                          className="relative w-full h-full cursor-pointer group"
                          onClick={() => setPlayingVideo('NcDejj3NKXo')}
                        >
                          <img 
                            src={resolveAsset('/youtube_covers/NcDejj3NKXo.jpg')} 
                            alt="QUEENA Final Dueñas de la Voz"
                            className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-all">
                            <div className="w-12 h-12 rounded-full bg-[#ec4899] border-2 border-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <Play className="w-6 h-6 text-white fill-current ml-1" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 left-2 right-2 bg-black/80 px-2.5 py-1 text-[10px] font-mono text-pink-300 border border-white/20">
                            {currentLang === 'es' ? '▶ Clic para ver presentación final de Queena' : '▶ Click to watch Queena\'s championship performance'}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Context & Description */}
                  <div className="space-y-2 text-xs font-sans text-neutral-300 leading-relaxed">
                    <p>
                      {currentLang === 'es'
                        ? 'Como director de arte y productor general de Rap Beauchef, concebí "Dueñas de la Voz" como un espacio pionero para quebrar la hegemonía masculina en los circuitos de rap y freestyle universitario.'
                        : 'As art director and producer of Rap Beauchef, I designed "Dueñas de la Voz" as a pioneer tournament breaking male dominance across university freestyle circuits.'}
                    </p>
                    <p>
                      {currentLang === 'es'
                        ? 'El encuentro reunió a emcees mujeres, cantantes y poetas de distintos puntos de Santiago, con jurado femenino especializado, sonido en vivo y cobertura audiovisual completa.'
                        : 'Convened female lyricists, spoken-word artists and singers across Santiago with specialized female juries, stage rigging and documentary video recording.'}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      <a
                        href="https://www.instagram.com/p/B1k2tdFgYoK/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 bg-pink-950/80 hover:bg-pink-900 border border-pink-500/40 text-pink-300 rounded font-mono text-[10px] flex items-center space-x-1"
                      >
                        <span>{currentLang === 'es' ? 'Afiche Oficial de Lanzamiento' : 'Official Launch Poster'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href="https://www.instagram.com/p/B2O_yRGgRmY/?img_index=4"
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 bg-pink-950/80 hover:bg-pink-900 border border-pink-500/40 text-pink-300 rounded font-mono text-[10px] flex items-center space-x-1"
                      >
                        <span>{currentLang === 'es' ? 'Galería Fotográfica del Torneo' : 'Tournament Photo Gallery'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Anfiteatro Beauchef Live Production Gallery */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-orange-400" />
                    <h4 className="font-mono font-black text-xs uppercase tracking-wider text-white">
                      {currentLang === 'es' 
                        ? 'PRODUCCIÓN EN VIVO: ANFITEATRO FCFM UNIVERSIDAD DE CHILE' 
                        : 'LIVE PRODUCTION: BEAUCHEF AMPHITHEATER (U. OF CHILE)'}
                    </h4>
                  </div>
                  <a
                    href="https://www.instagram.com/rapbeauchef/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[11px] text-orange-400 hover:text-white flex items-center space-x-1"
                  >
                    <span>@rapbeauchef {currentLang === 'es' ? 'Oficial' : 'Official'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  
                  {/* Photo 1: Escenario & Emcees */}
                  <a
                    href="https://www.instagram.com/p/B3ZZ8sGgaJX/"
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-black border-2 border-black rounded-lg overflow-hidden block"
                  >
                    <div className="aspect-square w-full bg-neutral-900 overflow-hidden">
                      <img 
                        src={resolveAsset('/instagram_covers/B3ZZ8sGgaJX.jpg')} 
                        alt="Escenario y Emcees"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                      />
                    </div>
                    <div className="p-2 bg-neutral-950 border-t border-neutral-800">
                      <div className="text-[10px] font-mono font-bold text-white group-hover:text-orange-400">
                        {currentLang === 'es' ? 'Escenario & Emcees' : 'Stage & Emcees'}
                      </div>
                      <div className="text-[9px] text-neutral-400">
                        {currentLang === 'es' ? 'Duelos en arena abierta' : 'Open-air battles'}
                      </div>
                    </div>
                  </a>

                  {/* Photo 2: Anfiteatro Lleno */}
                  <a
                    href="https://www.instagram.com/p/B3VfufbAH6A/?img_index=1"
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-black border-2 border-black rounded-lg overflow-hidden block"
                  >
                    <div className="aspect-square w-full bg-neutral-900 overflow-hidden">
                      <img 
                        src={resolveAsset('/instagram_covers/B3VfufbAH6A.jpg')} 
                        alt="Anfiteatro Lleno"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                      />
                    </div>
                    <div className="p-2 bg-neutral-950 border-t border-neutral-800">
                      <div className="text-[10px] font-mono font-bold text-white group-hover:text-orange-400">
                        {currentLang === 'es' ? 'Anfiteatro Lleno' : 'Crowded Amphitheater'}
                      </div>
                      <div className="text-[9px] text-neutral-400">
                        {currentLang === 'es' ? '+1.500 asistentes' : '+1,500 attendees'}
                      </div>
                    </div>
                  </a>

                  {/* Photo 3: Jueces & Jurado */}
                  <a
                    href="https://www.instagram.com/p/B3YgyJxgiBS/?img_index=1"
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-black border-2 border-black rounded-lg overflow-hidden block"
                  >
                    <div className="aspect-square w-full bg-neutral-900 overflow-hidden">
                      <img 
                        src={resolveAsset('/instagram_covers/B3YgyJxgiBS.jpg')} 
                        alt="Jueces y Flow"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                      />
                    </div>
                    <div className="p-2 bg-neutral-950 border-t border-neutral-800">
                      <div className="text-[10px] font-mono font-bold text-white group-hover:text-orange-400">
                        {currentLang === 'es' ? 'Jueces & Flow' : 'Jury & Evaluation'}
                      </div>
                      <div className="text-[9px] text-neutral-400">
                        {currentLang === 'es' ? 'Panel de referentes' : 'Veteran emcees'}
                      </div>
                    </div>
                  </a>

                  {/* Photo 4: Premiación & Cierre */}
                  <a
                    href="https://www.instagram.com/p/B3VMAN1gh9R/?img_index=5"
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-black border-2 border-black rounded-lg overflow-hidden block"
                  >
                    <div className="aspect-square w-full bg-neutral-900 overflow-hidden">
                      <img 
                        src={resolveAsset('/instagram_covers/B3VMAN1gh9R.jpg')} 
                        alt="Premiación y Cierre"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                      />
                    </div>
                    <div className="p-2 bg-neutral-950 border-t border-neutral-800">
                      <div className="text-[10px] font-mono font-bold text-white group-hover:text-orange-400">
                        {currentLang === 'es' ? 'Premiación & Trofeo' : 'Trophy & Ceremony'}
                      </div>
                      <div className="text-[9px] text-neutral-400">
                        {currentLang === 'es' ? 'Cierre de temporada' : 'Season finale'}
                      </div>
                    </div>
                  </a>

                </div>
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 3: DISCORD INFRASTRUCTURE (+12K USERS)                    */}
          {/* ============================================================== */}
          {activeTab === 'discord' && (
            <div className="space-y-6 animate-fadeIn">
              
              <div className="bg-[#0f172a] border-3 border-black p-4 sm:p-5 rounded-xl shadow-[4px_4px_0px_#06b6d4] space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cyan-500/20 pb-2">
                  <div className="flex items-center space-x-2">
                    <span className="bg-[#06b6d4] text-black font-mono font-black text-[9px] px-2 py-0.5 border border-black uppercase">
                      {currentLang === 'es' ? 'INGENIERÍA DE COMUNIDAD' : 'COMMUNITY ARCHITECTURE'}
                    </span>
                    <h3 className="font-mono font-black text-sm sm:text-base text-cyan-300 uppercase">
                      {currentLang === 'es'
                        ? 'Arquitectura del Servidor Discord de Rap Beauchef & Cuarentena'
                        : 'Discord Server Infrastructure for Rap Beauchef & Cuarentena Rap'}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">
                    {currentLang === 'es' ? '+12.000 Usuarios Activos' : '+12,000 Active Members'}
                  </span>
                </div>

                <p className="text-xs font-sans text-neutral-300 leading-relaxed">
                  {currentLang === 'es'
                    ? 'Cuando las plazas y escenarios físicos cerraron en marzo de 2020 por la pandemia, diseñé y administré la mayor infraestructura comunitaria de freestyle y batallas escritas de habla hispana en Discord. El servidor integró a más de 12.000 jóvenes, creadores y letristas de 8 países.'
                    : 'When street plazas closed during COVID lockdowns, I architected the largest Spanish-speaking competitive freestyle and spoken-word Discord ecosystem, integrating +12,000 members across 8 countries.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-black/60 p-3 rounded border border-white/10 space-y-1">
                    <div className="font-mono font-black text-cyan-400 text-xs">
                      {currentLang === 'es' ? 'AUDIO LOW-LATENCY' : 'LOW-LATENCY AUDIO'}
                    </div>
                    <div className="text-[11px] text-neutral-300">
                      {currentLang === 'es'
                        ? 'Salas de audio optimizadas a 64 kbps mono/stereo para evitar desfases métricos en instrumentales de hip-hop en vivo.'
                        : 'Optimized 64 kbps audio bitrates to prevent latency drift over live boom-bap instrumentals.'}
                    </div>
                  </div>

                  <div className="bg-black/60 p-3 rounded border border-white/10 space-y-1">
                    <div className="font-mono font-black text-cyan-400 text-xs">
                      {currentLang === 'es' ? 'BOTS & MATCHMAKING' : 'BOTS & MATCHMAKING'}
                    </div>
                    <div className="text-[11px] text-neutral-300">
                      {currentLang === 'es'
                        ? 'Automatización de fixtures, cronómetros de rima por compás, conteo de votos de jurados y distribución de roles por liga.'
                        : 'Automated bracket fixtures, bar-by-bar rhyme timers, jury vote tallying, and regional league roles.'}
                    </div>
                  </div>

                  <div className="bg-black/60 p-3 rounded border border-white/10 space-y-1">
                    <div className="font-mono font-black text-cyan-400 text-xs">
                      {currentLang === 'es' ? 'RED FEDERAL' : 'FEDERAL NETWORK'}
                    </div>
                    <div className="text-[11px] text-neutral-300">
                      {currentLang === 'es'
                        ? 'Alianza con ligas de plaza de Chile, Argentina, Colombia, Perú, México y España, federando los torneos de cada región.'
                        : 'Alliances with grassroots underground leagues from Chile, Argentina, Colombia, Peru, Mexico, and Spain.'}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex flex-wrap gap-3">
                  <a
                    href="https://www.instagram.com/p/CBCA5DGFBwO/?img_index=1"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 rounded font-mono text-[11px] flex items-center space-x-1"
                  >
                    <span>{currentLang === 'es' ? 'Ver Concurrencia de Salas en Instagram' : 'View Room Attendance on Instagram'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.instagram.com/p/CBV5veZFbFw/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 rounded font-mono text-[11px] flex items-center space-x-1"
                  >
                    <span>{currentLang === 'es' ? 'Fixture Oficial del Torneo' : 'Official Tournament Fixture'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 4: BRIGADA PAULINA AGUIRRE & STREET ART                   */}
          {/* ============================================================== */}
          {activeTab === 'brigada' && (
            <div className="space-y-6 animate-fadeIn">
              
              <div className="bg-[#1c1015] border-3 border-black p-4 sm:p-5 rounded-xl shadow-[4px_4px_0px_#ec4899] space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-pink-500/20 pb-2">
                  <div className="flex items-center space-x-2">
                    <span className="bg-[#ec4899] text-white font-mono font-black text-[9px] px-2 py-0.5 border border-black uppercase">
                      {currentLang === 'es' ? 'AGITACIÓN GRÁFICA & MEMORIA' : 'GRAPHIC AGITPROP & MEMORY'}
                    </span>
                    <h3 className="font-mono font-black text-sm sm:text-base text-pink-300 uppercase">
                      {currentLang === 'es'
                        ? 'Brigada Paulina Aguirre: Muralismo, Stencil & Resistencia Callejera'
                        : 'Brigada Paulina Aguirre: Murals, Stencils & Street Resistance'}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">
                    2018-2022 // Santiago, Chile
                  </span>
                </div>

                <p className="text-xs font-sans text-neutral-300 leading-relaxed">
                  {currentLang === 'es'
                    ? 'La Brigada Paulina Aguirre combinó técnicas tradicionales de xilografía popular, grabado en linóleo y stencil a gran escala con mensajes directos en los muros de las facultades universitarias y las calles de Santiago. El arte como memoria histórica viva y trinchera comunicacional innegociable.'
                    : 'The Paulina Aguirre Brigade deployed relief woodcut, linocut printing, and large-scale street stencils across Santiago walls, using graphic art as living historical memory and uncompromised frontline communication.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-black/60 p-3 rounded border border-white/10 space-y-1">
                    <div className="font-mono font-black text-pink-400 text-xs">
                      {currentLang === 'es' ? 'ARTEFACTOS DE PRESIÓN GRÁFICA' : 'GRAPHIC PRINT ARTIFACTS'}
                    </div>
                    <div className="text-[11px] text-neutral-300">
                      {currentLang === 'es'
                        ? 'Afiches de alto contraste xilográfico distribuidos mano a mano en ferias libres, asambleas barriales y centros sociales autogestionados.'
                        : 'High-contrast woodcut posters distributed hand-to-hand across street markets, neighborhood assemblies, and community centers.'}
                    </div>
                  </div>

                  <div className="bg-black/60 p-3 rounded border border-white/10 space-y-1">
                    <div className="font-mono font-black text-pink-400 text-xs">
                      {currentLang === 'es' ? 'MEMORIA VIVA' : 'LIVING HISTORICAL MEMORY'}
                    </div>
                    <div className="text-[11px] text-neutral-300">
                      {currentLang === 'es'
                        ? 'Homenaje a las luchadoras populares y defensa irrestricta de los derechos humanos y la autodeterminación comunitaria.'
                        : 'Honoring women freedom fighters and defending human rights and territorial autonomy.'}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* ============================================================== */}
        {/* 5. MODAL FOOTER                                                */}
        {/* ============================================================== */}
        <div className="px-4 sm:px-6 py-2.5 bg-black border-t-2 border-white/15 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-neutral-400 shrink-0">
          <div className="flex items-center space-x-2">
            <span className="bg-[#f97316] text-black font-black px-1.5 py-0.2">ART-DIR</span>
            <span>
              {currentLang === 'es' 
                ? 'PRODUCCIÓN CULTURAL • CONTRACULTURA DIGITAL • DANIEL SANTANDER' 
                : 'CULTURAL PRODUCTION • DIGITAL COUNTER-CULTURE • DANIEL SANTANDER'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-white hover:bg-yellow-400 text-black font-bold uppercase transition-all cursor-pointer"
          >
            {currentLang === 'es' ? 'CERRAR VENTANA' : 'CLOSE WINDOW'}
          </button>
        </div>

      </div>
    </div>
  );
};
