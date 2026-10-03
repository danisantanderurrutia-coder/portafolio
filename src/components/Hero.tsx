import React from 'react';
import { 
  TreePine, 
  ChevronRight, 
  Flame, 
  BarChart3, 
  FileCheck2, 
  Radio, 
  Compass,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  currentLang: Language;
  onExploreClick: () => void;
  onJumpToBiomass: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onExploreClick, onJumpToBiomass }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-20 border-b border-moss-emerald/20 rainforest-mist">
      {/* Background Rainforest Canopy Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-moss-emerald/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-5 right-10 w-[500px] h-[350px] bg-lichen-gold/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Tagline */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-moss-emerald/40 bg-canopy-900/80 text-moss-dew text-xs font-mono uppercase tracking-wider mb-6 shadow-sm">
          <TreePine className="w-3.5 h-3.5 text-moss-bright" />
          <span>
            {currentLang === 'es'
              ? 'Folleto Documental de Terreno // FANFE / EPN 2024'
              : 'Field Documentary Brochure // FANFE / EPN 2024'}
          </span>
          <span className="text-canopy-600">|</span>
          <span className="text-lichen-gold">EU RED III & ETS FOCUS</span>
        </div>

        {/* Editorial Headline */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight leading-[1.12] mb-5">
            {currentLang === 'es' ? (
              <>
                Traduciendo la <span className="italic text-moss-bright font-serif">Ciencia de Bosques Nativos y Biomasa</span> en Incidencia Cívica Masiva.
              </>
            ) : (
              <>
                Translating <span className="italic text-moss-bright font-serif">Native Forest & Biomass Science</span> into Mass Civic Impact.
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 font-sans leading-relaxed mb-8 max-w-3xl">
            {currentLang === 'es' ? (
              <>
                Uniendo el rigor técnico sobre cadenas de suministro de biomasa y vacíos de la política europea (RED & ETS) con arquitectura de medios masivos (<strong className="text-moss-bright font-medium">+700k alcance</strong>), organización territorial campesina y flujos ágiles potenciados por IA.
              </>
            ) : (
              <>
                Merging technical rigor on industrial biomass supply chains and EU regulatory loopholes (RED & ETS) with mass media architecture (<strong className="text-moss-bright font-medium">+700k reach</strong>), peasant territorial organizing, and AI-augmented digital pipelines.
              </>
            )}
          </p>
        </div>

        {/* Feature Overview Strip (Brochure Highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl border border-moss-emerald/25 bg-canopy-900/80 backdrop-blur-sm hover:border-moss-bright/40 transition">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono text-moss-bright uppercase tracking-wider">
                {currentLang === 'es' ? 'Informe EPN 2024' : 'EPN 2024 Report'}
              </span>
              <FileCheck2 className="w-4 h-4 text-moss-bright" />
            </div>
            <div className="text-xl font-bold font-mono text-white mb-0.5">Autor Principal</div>
            <p className="text-xs text-emerald-200/70 leading-normal">
              {currentLang === 'es'
                ? 'Desmitificando vacíos contables de carbono y subsidios a la biomasa forestal en Europa.'
                : 'Dismantling carbon debt fallacies and bioenergy subsidy distortions across the EU.'}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-moss-emerald/25 bg-canopy-900/80 backdrop-blur-sm hover:border-lichen-gold/40 transition">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono text-lichen-gold uppercase tracking-wider">
                {currentLang === 'es' ? 'Alcance Comunitario' : 'Mass Reach'}
              </span>
              <BarChart3 className="w-4 h-4 text-lichen-gold" />
            </div>
            <div className="text-xl font-bold font-mono text-white mb-0.5">+700K Audiencia</div>
            <p className="text-xs text-emerald-200/70 leading-normal">
              {currentLang === 'es'
                ? 'Dirección editorial en Primera Línea Prensa y cápsulas radiales comunitarias.'
                : 'Direct digital audience leadership and rural community radio broadcasts.'}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-moss-emerald/25 bg-canopy-900/80 backdrop-blur-sm hover:border-moss-bright/40 transition">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono text-moss-bright uppercase tracking-wider">
                {currentLang === 'es' ? 'Frente Campesino' : 'Agrarian Frontline'}
              </span>
              <Radio className="w-4 h-4 text-moss-bright" />
            </div>
            <div className="text-xl font-bold font-mono text-white mb-0.5">Apruebo Rural</div>
            <p className="text-xs text-emerald-200/70 leading-normal">
              {currentLang === 'es'
                ? 'Coordinación de 14 regiones, comités de agua APR y el histórico acto de cierre.'
                : 'Coordinated 14 regions, rural water committees, and national closing rally.'}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onExploreClick}
            className="px-5 py-2.5 rounded-lg bg-moss-emerald hover:bg-moss-bright text-canopy-950 font-semibold text-xs sm:text-sm font-mono transition flex items-center space-x-2 shadow-lg shadow-moss-emerald/25"
          >
            <Compass className="w-4 h-4" />
            <span>{currentLang === 'es' ? 'Explorar Fichas del Folleto' : 'Browse Brochure Cards'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={onJumpToBiomass}
            className="px-5 py-2.5 rounded-lg bg-canopy-900 border border-moss-emerald/40 text-emerald-100 hover:bg-canopy-850 hover:border-moss-bright/60 text-xs sm:text-sm font-mono transition flex items-center space-x-2"
          >
            <Flame className="w-4 h-4 text-lichen-gold" />
            <span>
              {currentLang === 'es' ? 'Ir al Capítulo de Biomasa y Política UE' : 'Jump to Biomass & EU Policy Chapter'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
