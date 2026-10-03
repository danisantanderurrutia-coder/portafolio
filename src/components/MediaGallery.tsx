import React from 'react';
import { 
  Play, 
  ExternalLink, 
  ZoomIn, 
  Radio, 
  FileText, 
  Share2, 
  Volume2, 
  Sparkles,
  Maximize2,
  Calendar,
  Layers,
  BarChart2
} from 'lucide-react';
import { MediaItem, Language } from '../types';

interface MediaGalleryProps {
  items: MediaItem[];
  currentLang: Language;
  onOpenModal: (item: MediaItem) => void;
}

export const MediaGallery: React.FC<MediaGalleryProps> = ({ items, currentLang, onOpenModal }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="group relative rounded-2xl bg-obsidian-900 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-emerald-500/5"
          >
            {/* Top Browser / Media Frame Chrome */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-obsidian-850/90 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 group-hover:bg-red-400 transition-colors" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 group-hover:bg-yellow-400 transition-colors" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 group-hover:bg-emerald-400 transition-colors" />
                <span className="ml-2 text-[11px] text-neutral-400 uppercase tracking-wider truncate max-w-[140px] sm:max-w-[200px]">
                  {item.type} // {item.id}
                </span>
              </div>

              <div className="flex items-center space-x-1.5 text-neutral-400">
                <button
                  onClick={() => onOpenModal(item)}
                  className="p-1 hover:text-white rounded hover:bg-white/10 transition"
                  title="Expand preview"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 hover:text-emerald-400 rounded hover:bg-white/10 transition"
                    title="External Link"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Media Body / Visual Preview */}
            <div 
              onClick={() => onOpenModal(item)}
              className="relative cursor-pointer overflow-hidden bg-obsidian-950 flex items-center justify-center min-h-[220px]"
            >
              {/* Type: Image */}
              {item.type === 'image' && item.src && (
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={item.src}
                    alt={currentLang === 'es' ? item.titleEs : item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              )}

              {/* Type: Video Embed */}
              {item.type === 'video' && item.embedUrl && (
                <div className="relative w-full aspect-video bg-black/50">
                  <iframe
                    src={item.embedUrl}
                    title={currentLang === 'es' ? item.titleEs : item.titleEn}
                    className="w-full h-full border-0 pointer-events-none"
                  />
                  {/* Clickable Overlay to open modal */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/80 group-hover:bg-emerald-400 flex items-center justify-center text-obsidian-950 shadow-xl transition-transform group-hover:scale-110">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
              )}

              {/* Type: Instagram Embed */}
              {item.type === 'instagram' && (
                <div className="relative w-full h-56 bg-gradient-to-br from-pink-950/30 via-obsidian-900 to-amber-950/20 p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-xs font-mono text-pink-400 flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                      <span>INSTAGRAM REEL / POST EMBED</span>
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">@instagram</span>
                  </div>

                  <div className="flex items-center justify-center py-2">
                    <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400 group-hover:scale-110 transition">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                    <span>{currentLang === 'es' ? 'Reproducir Reel / Post' : 'Play Reel / Post'}</span>
                    <span className="text-pink-400 group-hover:underline flex items-center gap-1">
                      {currentLang === 'es' ? 'Ver en modal' : 'Open in modal'} <ZoomIn className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              )}

              {/* Type: Social Post / Analytics */}
              {item.type === 'social' && item.metrics && (
                <div className="w-full p-5 bg-gradient-to-br from-obsidian-900 to-obsidian-850 flex flex-col justify-between h-56">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-xs font-mono text-amber-400 flex items-center space-x-1.5">
                      <BarChart2 className="w-3.5 h-3.5" />
                      <span>{currentLang === 'es' ? 'AUDIENCIA VERIFICADA' : 'VERIFIED AUDIENCE'}</span>
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">CrowdTangle / Meta</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 py-2">
                    {item.metrics.slice(0, 4).map((m, mIdx) => (
                      <div key={mIdx} className="bg-obsidian-950/80 p-2.5 rounded-lg border border-white/5">
                        <div className="text-xl font-bold font-mono text-emerald-400">{m.value}</div>
                        <div className="text-[11px] font-sans text-neutral-400 truncate">
                          {currentLang === 'es' ? m.labelEs : m.labelEn}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] font-mono text-neutral-500 flex items-center justify-between">
                    <span>{currentLang === 'es' ? 'Click para ver desglose' : 'Click for full breakdown'}</span>
                    <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </div>
              )}

              {/* Type: Audio Capsule */}
              {item.type === 'audio' && (
                <div className="w-full p-5 bg-gradient-to-br from-obsidian-900 to-obsidian-850 flex flex-col justify-center items-center text-center h-56 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:scale-110 transition">
                    <Volume2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-amber-300">
                      {currentLang === 'es' ? 'CÁPSULA RADIAL COMUNITARIA' : 'COMMUNITY RADIO CAPSULE'}
                    </span>
                    <p className="text-xs text-neutral-400 font-mono mt-0.5">{item.authorOrSource}</p>
                  </div>
                  <div className="w-4/5 bg-obsidian-950 p-2 rounded-lg border border-white/10 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[11px] font-mono text-neutral-300 truncate">
                      {currentLang === 'es' ? 'Reproducir fragmento de audio' : 'Play audio capsule'}
                    </span>
                  </div>
                </div>
              )}

              {/* Type: Press Clippings & Visors */}
              {item.type === 'press' && (
                <div className="w-full p-5 bg-gradient-to-br from-obsidian-900 to-obsidian-850 flex flex-col justify-between h-56">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                      <span className="text-xs font-mono text-emerald-400 flex items-center space-x-1">
                        <FileText className="w-3.5 h-3.5" />
                        <span>{currentLang === 'es' ? 'COBERTURA DE PRENSA' : 'PRESS VISOR'}</span>
                      </span>
                      <span className="text-[11px] font-mono text-neutral-500">{item.date}</span>
                    </div>
                    <h4 className="text-sm font-serif font-bold text-white line-clamp-2">
                      {currentLang === 'es' ? item.titleEs : item.titleEn}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-2 line-clamp-2">
                      {currentLang === 'es' ? item.captionEs : item.captionEn}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-neutral-500">
                    <span>{item.authorOrSource}</span>
                    <span className="text-emerald-400 group-hover:underline flex items-center gap-1">
                      {currentLang === 'es' ? 'Inspeccionar' : 'Inspect'} <ZoomIn className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              )}

              {/* Type: Diagram / Architecture */}
              {item.type === 'diagram' && (
                <div className="w-full p-5 bg-gradient-to-br from-obsidian-950 to-obsidian-900 flex flex-col justify-between h-56 border border-emerald-500/10">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                      <span className="text-xs font-mono text-emerald-400 flex items-center space-x-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        <span>{currentLang === 'es' ? 'PLANO METODOLÓGICO' : 'BLUEPRINT SCHEMA'}</span>
                      </span>
                      <span className="text-[11px] font-mono text-neutral-500">{item.date}</span>
                    </div>
                    <h4 className="text-sm font-mono font-medium text-white line-clamp-1">
                      {currentLang === 'es' ? item.titleEs : item.titleEn}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                      {currentLang === 'es' ? item.captionEs : item.captionEn}
                    </p>
                  </div>

                  <div className="p-2.5 rounded bg-obsidian-900 border border-white/5 text-[11px] font-mono text-emerald-300/80 truncate">
                    {item.detailsEs?.[0] || item.detailsEn?.[0] || 'System Architecture Specification'}
                  </div>
                </div>
              )}
            </div>

            {/* Card Metadata Footer */}
            <div className="p-4 bg-obsidian-900 border-t border-white/5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold font-serif text-white group-hover:text-emerald-300 transition-colors">
                  {currentLang === 'es' ? item.titleEs : item.titleEn}
                </h4>
                <p className="text-xs text-neutral-400 font-sans mt-1 line-clamp-2">
                  {currentLang === 'es' ? item.captionEs : item.captionEn}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span className="truncate max-w-[180px]">{item.authorOrSource || 'Archive Field Unit'}</span>
                <button
                  onClick={() => onOpenModal(item)}
                  className="text-emerald-400 hover:text-emerald-300 transition text-[11px] font-mono font-medium flex items-center space-x-1"
                >
                  <span>{currentLang === 'es' ? 'Ver detalle' : 'View detail'}</span>
                  <ZoomIn className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
