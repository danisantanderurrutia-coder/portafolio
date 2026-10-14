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
              BACKSTAGE & CONCEPT BOOK
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/10 hover:bg-red-600 hover:text-white text-neutral-300 transition-all border border-white/20 active:scale-90 cursor-pointer ml-auto"
            title="Cerrar // Close"
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
            <span>01. CUARENTENA RAP // DISPOSITIVO & KARMAS</span>
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
            <span>03. INFRAESTRUCTURA DISCORD (+12K)</span>
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
            <span>04. BRIGADA PAULINA AGUIRRE & MURALES</span>
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
                      CONCEPTO FILOSÓFICO
                    </span>
                    <h3 className="font-mono font-black text-sm sm:text-base text-yellow-400 uppercase">
                      {currentLang === 'es' ? 'La Muerte Simbólica y el Viaje hacia la Liberación' : 'Symbolic Death & The Journey toward Liberation'}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">2020-2021 // Pandemia Global</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans text-neutral-300 leading-relaxed">
                  <div className="bg-black/60 p-3 rounded-lg border border-white/10 space-y-1">
                    <span className="text-[#facc15] font-mono font-black text-xs uppercase block">01. Fase de Tumbas</span>
                    <p className="text-[11px] text-neutral-300">
                      {currentLang === 'es'
                        ? 'En pleno confinamiento sanitario, la sociedad vivía rodeada de aislamiento y muerte en las noticias. Los emcees ingresan al torneo simbólicamente "muertos": inactivos y confinados.'
                        : 'During lockdowns, emcees entered the narrative symbolically "dead" — inactive and confined — waking up their voices to overcome isolation.'}
                    </p>
                  </div>

                  <div className="bg-black/60 p-3 rounded-lg border border-white/10 space-y-1">
                    <span className="text-[#f97316] font-mono font-black text-xs uppercase block">02. Fase de Karmas</span>
                    <p className="text-[11px] text-neutral-300">
                      {currentLang === 'es'
                        ? 'Los participantes se enfrentan a sus propios dolores, duelos y conflictos estructurales. No era solo insultar al rival: era purgar la asfixia del encierro mediante la palabra poética.'
                        : 'Contenders faced personal and societal grief. Beyond attacking rivals, emcees purged quarantine trauma through raw lyrical confrontation.'}
                    </p>
                  </div>

                  <div className="bg-black/60 p-3 rounded-lg border border-white/10 space-y-1">
                    <span className="text-[#22c55e] font-mono font-black text-xs uppercase block">03. La Liberación</span>
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
                          ▶ Clic para reproducir manifiesto audiovisual
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Grand Final & Tournament Climax Box */}
                <div className="bg-[#141720] border-3 border-black p-4 rounded-xl shadow-[4px_4px_0px_#000] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-amber-400 text-black font-mono font-black text-[9px] px-2 py-0.5 border border-black uppercase">
                      GRAN FINAL & CORONACIÓN
                    </span>
                    <a
                      href="https://www.instagram.com/p/CKu2R9qgy3Q/"
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[10px] text-neutral-400 hover:text-white flex items-center space-x-1"
                    >
                      <span>Instagram Oficial</span>
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
                        Crizzo Campeón: La Coronación de la Temporada
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
                      Batallas Destacadas en YouTube:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10.5px] font-mono">
                      <a 
                        href="https://www.youtube.com/watch?v=l2PwaGDStx8"
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 bg-black/60 hover:bg-neutral-800 border border-white/10 rounded flex items-center justify-between text-yellow-300"
                      >
                        <span>⚔️ Semifinales Oficiales</span>
                        <ExternalLink className="w-3 h-3 text-neutral-400" />
                      </a>
                      <a 
                        href="https://www.youtube.com/watch?v=YZhhS7l_04Q"
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 bg-black/60 hover:bg-neutral-800 border border-white/10 rounded flex items-center justify-between text-yellow-300"
                      >
                        <span>⚔️ Cuartos: Chologuapo</span>
                        <ExternalLink className="w-3 h-3 text-neutral-400" />
                      </a>
                      <a 
                        href="https://www.youtube.com/watch?v=I7Kiv8B5-8I"
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 bg-black/60 hover:bg-neutral-800 border border-white/10 rounded flex items-center justify-between text-yellow-300"
                      >
                        <span>⚔️ Fase de Karmas</span>
                        <ExternalLink className="w-3 h-3 text-neutral-400" />
                      </a>
                      <a 
                        href="https://www.youtube.com/watch?v=eQ8o4xRh2cI"
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 bg-black/60 hover:bg-neutral-800 border border-white/10 rounded flex items-center justify-between text-yellow-300"
                      >
                        <span>⚔️ Duelo: Chologuapo vs Crizzo</span>
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
                        Bases y Protocolos
                      </div>
                      <div className="text-[10px] text-neutral-400 mt-1">
                        Manual ético y normativas de competencia anti-discriminación.
                      </div>
                    </div>
                    <div className="mt-2 text-[9px] font-mono text-yellow-400 flex items-center justify-between">
                      <span>Ver en Instagram</span>
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
                        Criterio Lírico
                      </div>
                      <div className="text-[10px] text-neutral-400 mt-1">
                        Ponderación de coherencia, métrica, profundidad y figuras retóricas.
                      </div>
                    </div>
                    <div className="mt-2 text-[9px] font-mono text-yellow-400 flex items-center justify-between">
                      <span>Ver en Instagram</span>
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
                        Puntaje & Flow
                      </div>
                      <div className="text-[10px] text-neutral-400 mt-1">
                        Estructura matemática de calificación por compás e instrumental.
                      </div>
                    </div>
                    <div className="mt-2 text-[9px] font-mono text-yellow-400 flex items-center justify-between">
                      <span>Ver en Instagram</span>
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
                        Desempeño Global
                      </div>
                      <div className="text-[10px] text-neutral-400 mt-1">
                        Puesta en escena, actitud, consistencia conceptual y remate.
                      </div>
                    </div>
                    <div className="mt-2 text-[9px] font-mono text-yellow-400 flex items-center justify-between">
                      <span>Ver en Instagram</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>

                </div>
              </div>

              {/* INTEGRACIÓN DE DISCIPLINAS: BEATMAKERS, BEATBOX & BREAKING */}
              <div className="bg-[#12151e] border-2 border-black rounded-xl p-4 space-y-3">
                <div className="text-xs font-mono font-black text-amber-400 uppercase tracking-wider">
                  DISCIPLINAS INTEGRADAS DEL HIP-HOP EN CONFINAMIENTO
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
                      <span>Beatmakers & Boom-Bap</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      Producción de instrumentales exclusivas, samples y texturas sonoras creadas por productores de toda la región.
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
                      <span>Beatboxers Cup</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      Percusión vocal e innovación acústica transformando micrófonos hogareños en baterías completas en duelos virtuales.
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
                      <span>Breaking Virtual Cyphers</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      B-Boys y B-Girls compitiendo mediante grabaciones sincrónicas y cyphers en vivo durante el confinamiento.
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
                      ENCUENTRO FEMENINO HISTÓRICO
                    </span>
                    <h3 className="font-mono font-black text-sm sm:text-base text-pink-300 uppercase">
                      "Dueñas de la Voz" — Conciertos & Liderazgo de Mujeres
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">2019 // FCFM U. de Chile</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                  
                  {/* Video Box: Queena Final */}
                  <div className="bg-black border-2 border-black rounded-lg overflow-hidden">
                    <div className="p-2.5 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
                      <span className="font-mono font-bold text-xs text-pink-300">
                        QUEENA - Final Dueñas de la Voz (Registro Oficial)
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
                            ▶ Clic para ver presentación final de Queena
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
                        <span>Afiche Oficial de Lanzamiento</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href="https://www.instagram.com/p/B2O_yRGgRmY/?img_index=4"
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 bg-pink-950/80 hover:bg-pink-900 border border-pink-500/40 text-pink-300 rounded font-mono text-[10px] flex items-center space-x-1"
                      >
                        <span>Galería Fotográfica del Torneo</span>
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
                      PRODUCCIÓN EN VIVO: ANFITEATRO FCFM UNIVERSIDAD DE CHILE
                    </h4>
                  </div>
                  <a
                    href="https://www.instagram.com/rapbeauchef/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[11px] text-orange-400 hover:text-white flex items-center space-x-1"
                  >
                    <span>@rapbeauchef Oficial</span>
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
                        Escenario & Emcees
                      </div>
                      <div className="text-[9px] text-neutral-400">Duelos en arena abierta</div>
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
                        Anfiteatro Lleno
                      </div>
                      <div className="text-[9px] text-neutral-400">+1.500 asistentes</div>
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
                        Jueces & Flow
                      </div>
                      <div className="text-[9px] text-neutral-400">Panel de referentes</div>
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
                        Premiación & Trofeo
                      </div>
                      <div className="text-[9px] text-neutral-400">Cierre de temporada</div>
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
                      INGENIERÍA DE COMUNIDAD
                    </span>
                    <h3 className="font-mono font-black text-sm sm:text-base text-cyan-300 uppercase">
                      Arquitectura del Servidor Discord de Rap Beauchef & Cuarentena
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">+12.000 Usuarios Activos</span>
                </div>

                <p className="text-xs font-sans text-neutral-300 leading-relaxed">
                  {currentLang === 'es'
                    ? 'Cuando las plazas y escenarios físicos cerraron en marzo de 2020 por la pandemia, diseñé y administré la mayor infraestructura comunitaria de freestyle y batallas escritas de habla hispana en Discord. El servidor integró a más de 12.000 jóvenes, creadores y letristas de 8 países.'
                    : 'When street plazas closed during COVID lockdowns, I architected the largest Spanish-speaking competitive freestyle and spoken-word Discord ecosystem, integrating +12,000 members across 8 countries.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-black/60 p-3 rounded border border-white/10 space-y-1">
                    <div className="font-mono font-black text-cyan-400 text-xs">AUDIO LOW-LATENCY</div>
                    <div className="text-[11px] text-neutral-300">
                      Salas de audio optimizadas a 64 kbps mono/stereo para evitar desfases métricos en instrumentales de hip-hop en vivo.
                    </div>
                  </div>

                  <div className="bg-black/60 p-3 rounded border border-white/10 space-y-1">
                    <div className="font-mono font-black text-cyan-400 text-xs">BOTS & MATCHMAKING</div>
                    <div className="text-[11px] text-neutral-300">
                      Automatización de fixtures, cronómetros de rima por compás, conteo de votos de jurados y distribución de roles por liga.
                    </div>
                  </div>

                  <div className="bg-black/60 p-3 rounded border border-white/10 space-y-1">
                    <div className="font-mono font-black text-cyan-400 text-xs">RED FEDERAL</div>
                    <div className="text-[11px] text-neutral-300">
                      Alianza con ligas de plaza de Chile, Argentina, Colombia, Perú, México y España, federando los torneos de cada región.
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
                    <span>Ver Concurrencia de Salas en Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.instagram.com/p/CBV5veZFbFw/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 rounded font-mono text-[11px] flex items-center space-x-1"
                  >
                    <span>Fixture Oficial del Torneo</span>
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
                      AGITACIÓN GRÁFICA & MEMORIA
                    </span>
                    <h3 className="font-mono font-black text-sm sm:text-base text-pink-300 uppercase">
                      Brigada Paulina Aguirre: Muralismo, Stencil & Resistencia Callejera
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">2018-2022 // Santiago de Chile</span>
                </div>

                <p className="text-xs font-sans text-neutral-300 leading-relaxed">
                  {currentLang === 'es'
                    ? 'La Brigada Paulina Aguirre combinó técnicas tradicionales de xilografía popular, grabado en linóleo y stencil a gran escala con mensajes directos en los muros de las facultades universitarias y las calles de Santiago. El arte como memoria histórica viva y trinchera comunicacional innegociable.'
                    : 'The Paulina Aguirre Brigade deployed relief woodcut, linocut printing, and large-scale street stencils across Santiago walls, using graphic art as living historical memory and uncompromised frontline communication.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-black/60 p-3 rounded border border-white/10 space-y-1">
                    <div className="font-mono font-black text-pink-400 text-xs">ARTEFACTOS DE PRESIÓN GRÁFICA</div>
                    <div className="text-[11px] text-neutral-300">
                      Afiches de alto contraste xilográfico distribuidos mano a mano en ferias libres, asambleas barriales y centros sociales autogestionados.
                    </div>
                  </div>

                  <div className="bg-black/60 p-3 rounded border border-white/10 space-y-1">
                    <div className="font-mono font-black text-pink-400 text-xs">MEMORIA VIVA</div>
                    <div className="text-[11px] text-neutral-300">
                      Homenaje a las luchadoras populares y defensa irrestricta de los derechos humanos y la autodeterminación comunitaria.
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
            <span>PRODUCCIÓN CULTURAL • CONTRACULTURA DIGITAL • DANIEL SANTANDER</span>
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
