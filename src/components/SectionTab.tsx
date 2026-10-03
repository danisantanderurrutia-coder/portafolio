import React from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Compass,
  TreePine,
  Sparkles
} from 'lucide-react';
import { SectionData, Language, MediaItem } from '../types';
import { BrochureCarousel } from './BrochureCarousel';

interface SectionTabProps {
  section: SectionData;
  currentLang: Language;
  onOpenModal: (item: MediaItem) => void;
  index: number;
}

export const SectionTab: React.FC<SectionTabProps> = ({ 
  section, 
  currentLang, 
  onOpenModal,
  index 
}) => {
  return (
    <section 
      id={section.id} 
      className="py-10 md:py-16 border-b border-moss-emerald/20 relative"
    >
      {/* Subtle forest depth glow */}
      <div className="absolute top-10 left-1/4 w-96 h-48 bg-moss-emerald/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header: Brochure Chapter Headline */}
        <div className="mb-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-moss-bright animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-lichen-gold uppercase">
                CAPÍTULO 0{index + 1} // {currentLang === 'es' ? section.badgeEs : section.badgeEn}
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400/70">
              <Compass className="w-3.5 h-3.5 text-moss-bright" />
              <span>{section.mediaItems.length} {currentLang === 'es' ? 'FICHAS VISUALES' : 'VISUAL VISORS'}</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                {currentLang === 'es' ? section.titleEs : section.titleEn}
              </h2>
              <p className="text-sm sm:text-base font-mono text-moss-bright mt-1">
                {currentLang === 'es' ? section.roleEs : section.roleEn}
              </p>
            </div>

            {/* Quick Metrics Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {section.stats.map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className="px-3 py-1.5 rounded-lg bg-canopy-900 border border-moss-emerald/30 flex items-center space-x-2 shadow-sm"
                >
                  <span className="text-sm font-mono font-bold text-moss-bright">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-300/80 uppercase">
                    {currentLang === 'es' ? stat.labelEs : stat.labelEn}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Narrative Summary Ribbon */}
          <div className="p-4 sm:p-5 rounded-xl bg-canopy-900/60 border border-moss-emerald/20 backdrop-blur-sm">
            <h3 className="text-sm sm:text-base font-serif font-semibold text-emerald-100 mb-2">
              {currentLang === 'es' ? section.headlineEs : section.headlineEn}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/80 font-sans leading-relaxed">
              {currentLang === 'es' ? section.narrativeEs : section.narrativeEn}
            </p>
          </div>
        </div>

        {/* Netflix-Style Brochure Carousel Showcase */}
        <div>
          <div className="flex items-center justify-between mb-2 px-1 text-xs font-mono text-emerald-300/70">
            <span className="uppercase tracking-wider flex items-center gap-1.5">
              <TreePine className="w-3.5 h-3.5 text-moss-bright" />
              <span>{currentLang === 'es' ? 'DESLIZA EL FOLLETO HORIZONTAL' : 'SWIPE HORIZONTAL BROCHURE'}</span>
            </span>
            <span className="hidden sm:inline">← / →</span>
          </div>

          <BrochureCarousel
            items={section.mediaItems}
            currentLang={currentLang}
            onOpenModal={onOpenModal}
          />
        </div>
      </div>
    </section>
  );
};
