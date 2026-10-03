import React, { useRef, useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  ZoomIn, 
  ExternalLink, 
  Maximize2,
  Calendar,
  Layers,
  BarChart2,
  Volume2,
  FileText,
  Sparkles
} from 'lucide-react';
import { MediaItem, Language } from '../types';

interface BrochureCarouselProps {
  items: MediaItem[];
  currentLang: Language;
  onOpenModal: (item: MediaItem) => void;
}

export const BrochureCarousel: React.FC<BrochureCarouselProps> = ({
  items,
  currentLang,
  onOpenModal,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <div className="relative group/carousel">
      {/* Netflix-style Navigation Arrow Left */}
      <button
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        className={`absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-16 sm:w-12 sm:h-24 bg-canopy-950/90 border border-moss-emerald/30 text-emerald-200 rounded-r-xl flex items-center justify-center transition-all duration-300 shadow-2xl backdrop-blur-md ${
          canScrollLeft
            ? 'opacity-80 hover:opacity-100 hover:scale-105 hover:bg-canopy-900 cursor-pointer text-moss-bright'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Previous items"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Netflix-style Navigation Arrow Right */}
      <button
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        className={`absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-16 sm:w-12 sm:h-24 bg-canopy-950/90 border border-moss-emerald/30 text-emerald-200 rounded-l-xl flex items-center justify-center transition-all duration-300 shadow-2xl backdrop-blur-md ${
          canScrollRight
            ? 'opacity-80 hover:opacity-100 hover:scale-105 hover:bg-canopy-900 cursor-pointer text-moss-bright'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Next items"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Horizontal Brochure Track */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex space-x-5 sm:space-x-6 overflow-x-auto no-scrollbar py-4 px-1 scroll-smooth snap-x snap-mandatory"
      >
        {items.map((item, index) => {
          return (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[88vw] sm:w-[620px] lg:w-[720px] rounded-2xl bg-canopy-900/90 border border-moss-emerald/20 hover:border-moss-bright/50 transition-all duration-300 flex flex-col md:flex-row overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-moss-emerald/10 group"
            >
              {/* Left/Top Media Canvas */}
              <div 
                onClick={() => onOpenModal(item)}
                className="relative md:w-1/2 min-h-[220px] sm:min-h-[260px] md:min-h-full bg-canopy-950 flex items-center justify-center cursor-pointer overflow-hidden group/media border-b md:border-b-0 md:border-r border-moss-emerald/15"
              >
                {/* 1. Image */}
                {item.type === 'image' && item.src && (
                  <div className="relative w-full h-full min-h-[240px]">
                    <img
                      src={item.src}
                      alt={currentLang === 'es' ? item.titleEs : item.titleEn}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/media:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-canopy-950/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-canopy-950/80 border border-moss-emerald/30 text-moss-dew opacity-0 group-hover/media:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                )}

                {/* 2. Video Player Overlay */}
                {item.type === 'video' && item.embedUrl && (
                  <div className="relative w-full h-full min-h-[240px] aspect-video bg-black/60 flex items-center justify-center">
                    <iframe
                      src={item.embedUrl}
                      title={currentLang === 'es' ? item.titleEs : item.titleEn}
                      className="w-full h-full border-0 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover/media:bg-black/20 transition flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-moss-emerald/90 group-hover/media:bg-moss-bright flex items-center justify-center text-canopy-950 shadow-2xl transition-transform group-hover/media:scale-110">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Instagram Embed Preview */}
                {item.type === 'instagram' && (
                  <div className="relative w-full h-full min-h-[240px] bg-gradient-to-br from-pink-950/40 via-canopy-900 to-canopy-950 p-6 flex flex-col justify-between items-center text-center">
                    <span className="text-[11px] font-mono text-pink-400 uppercase tracking-wider">
                      Instagram Post / Reel
                    </span>
                    <div className="w-14 h-14 rounded-full bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400 group-hover/media:scale-110 transition">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                    <span className="text-xs font-mono text-neutral-300">
                      {currentLang === 'es' ? 'Click para reproducir' : 'Click to play in modal'}
                    </span>
                  </div>
                )}

                {/* 4. Social Analytics Card */}
                {item.type === 'social' && item.metrics && (
                  <div className="w-full h-full p-5 bg-gradient-to-br from-canopy-900 to-canopy-950 flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-moss-emerald/20 pb-2">
                      <span className="text-xs font-mono text-lichen-gold flex items-center gap-1.5">
                        <BarChart2 className="w-3.5 h-3.5" />
                        <span>{currentLang === 'es' ? 'AUDIENCIA ORGANICA' : 'ORGANIC AUDIENCE'}</span>
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 my-auto">
                      {item.metrics.slice(0, 4).map((m, mIdx) => (
                        <div key={mIdx} className="bg-canopy-950/90 p-2.5 rounded-lg border border-moss-emerald/10">
                          <div className="text-lg font-bold font-mono text-moss-bright">{m.value}</div>
                          <div className="text-[10px] text-emerald-200/70 truncate">
                            {currentLang === 'es' ? m.labelEs : m.labelEn}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-[11px] font-mono text-moss-dew/70 flex items-center justify-between">
                      <span>CrowdTangle Analytics</span>
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}

                {/* 5. Audio Broadcast Capsule */}
                {item.type === 'audio' && (
                  <div className="w-full h-full p-6 bg-gradient-to-br from-canopy-900 via-canopy-950 to-canopy-900 flex flex-col items-center justify-center text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-lichen-gold/20 border border-lichen-gold/40 flex items-center justify-center text-lichen-gold group-hover/media:scale-110 transition">
                      <Volume2 className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono text-lichen-gold uppercase tracking-wider">
                      {currentLang === 'es' ? 'Cápsula de Radio' : 'Radio Capsule'}
                    </span>
                    <div className="w-4/5 bg-canopy-950 py-1.5 px-3 rounded-full border border-moss-emerald/20 flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-moss-bright animate-ping" />
                      <span className="text-[11px] font-mono text-emerald-200 truncate">
                        {currentLang === 'es' ? 'Escuchar audio' : 'Listen audio'}
                      </span>
                    </div>
                  </div>
                )}

                {/* 6. Press & Blueprint Visors */}
                {(item.type === 'press' || item.type === 'diagram') && (
                  <div className="w-full h-full p-5 bg-gradient-to-br from-canopy-900 to-canopy-950 flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-moss-emerald/20 pb-2">
                      <span className="text-xs font-mono text-moss-bright flex items-center gap-1.5">
                        {item.type === 'press' ? <FileText className="w-3.5 h-3.5" /> : <Layers className="w-3.5 h-3.5" />}
                        <span>{item.type === 'press' ? 'DOCUMENTO / PRENSA' : 'DIAGRAMA TÉCNICO'}</span>
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400/60">{item.date}</span>
                    </div>
                    <div className="p-3 my-auto rounded-lg bg-canopy-950/80 border border-moss-emerald/15">
                      <div className="text-xs font-mono text-emerald-200 line-clamp-3">
                        {item.detailsEs?.[0] || item.detailsEn?.[0] || (currentLang === 'es' ? item.captionEs : item.captionEn)}
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-moss-dew/80 flex items-center justify-between">
                      <span className="truncate max-w-[160px]">{item.authorOrSource}</span>
                      <span className="flex items-center gap-1">
                        {currentLang === 'es' ? 'Ver' : 'Inspect'} <ZoomIn className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                )}

                {/* Number Badge (Netflix style counter) */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-canopy-950/90 border border-moss-emerald/30 text-[10px] font-mono font-bold text-moss-bright">
                  #0{index + 1}
                </div>
              </div>

              {/* Right/Bottom Contiguous Brochure Description */}
              <div className="p-5 sm:p-6 md:w-1/2 flex flex-col justify-between bg-canopy-900/60 space-y-4">
                <div>
                  {/* Category & Date Line */}
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400/80 mb-2">
                    <span className="uppercase tracking-wider font-semibold text-lichen-gold">
                      {item.authorOrSource || 'Field Expedition Archive'}
                    </span>
                    {item.date && <span>{item.date}</span>}
                  </div>

                  {/* Brochure Headline */}
                  <h4 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-moss-bright transition-colors leading-snug">
                    {currentLang === 'es' ? item.titleEs : item.titleEn}
                  </h4>

                  {/* Subtitle */}
                  {(item.subtitleEn || item.subtitleEs) && (
                    <p className="text-xs font-mono text-moss-bright mt-1">
                      {currentLang === 'es' ? item.subtitleEs : item.subtitleEn}
                    </p>
                  )}

                  {/* Contiguous Detailed Narrative */}
                  <p className="text-xs sm:text-sm text-emerald-100/80 font-sans leading-relaxed mt-3">
                    {currentLang === 'es' ? item.captionEs : item.captionEn}
                  </p>
                </div>

                {/* Bottom Pill & Expand Action */}
                <div className="pt-3 border-t border-moss-emerald/15 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center space-x-1.5 flex-wrap">
                    {item.tags?.slice(0, 2).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-full text-[10px] bg-canopy-950 border border-moss-emerald/20 text-emerald-300"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenModal(item)}
                    className="px-3 py-1.5 rounded-lg bg-moss-emerald/20 hover:bg-moss-emerald/40 text-moss-dew border border-moss-emerald/30 text-xs font-mono font-semibold transition flex items-center space-x-1"
                  >
                    <span>{currentLang === 'es' ? 'Explorar' : 'Explore'}</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
