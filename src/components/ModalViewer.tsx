import React from 'react';
import { 
  X, 
  ExternalLink, 
  Calendar, 
  User, 
  CheckCircle2,
  Volume2,
  TreePine
} from 'lucide-react';
import { MediaItem, Language } from '../types';

interface ModalViewerProps {
  item: MediaItem | null;
  currentLang: Language;
  onClose: () => void;
}

export const ModalViewer: React.FC<ModalViewerProps> = ({ item, currentLang, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Background dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-canopy-900 border border-moss-emerald/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Forest Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-canopy-950 border-b border-moss-emerald/20 shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-moss-bright animate-ping" />
            <span className="font-mono text-xs text-moss-dew font-semibold">
              FICHA DOCUMENTAL // {item.type.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-emerald-300 hover:text-white rounded hover:bg-canopy-850 transition text-xs flex items-center space-x-1"
                title="Abrir enlace original"
              >
                <ExternalLink className="w-4 h-4 text-moss-bright" />
                <span className="hidden sm:inline font-mono">
                  {currentLang === 'es' ? 'Abrir Fuente' : 'Open Source'}
                </span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-canopy-850 transition"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Media Viewport */}
          <div className="w-full bg-canopy-950 rounded-xl border border-moss-emerald/20 overflow-hidden flex items-center justify-center">
            {item.type === 'video' && item.embedUrl ? (
              <div className="w-full aspect-video">
                <iframe
                  src={item.embedUrl}
                  title={currentLang === 'es' ? item.titleEs : item.titleEn}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : item.type === 'instagram' && (item.embedUrl || item.instagramId || item.url) ? (
              <div className="w-full flex justify-center p-3 bg-canopy-950">
                <iframe
                  src={
                    item.embedUrl ||
                    (item.instagramId
                      ? `https://www.instagram.com/p/${item.instagramId}/embed/captioned/`
                      : item.url?.includes('instagram.com')
                      ? `${item.url.replace(/\/$/, '')}/embed/captioned/`
                      : '')
                  }
                  title={currentLang === 'es' ? item.titleEs : item.titleEn}
                  className="w-full max-w-[540px] h-[580px] border-0 rounded-xl bg-white/5"
                  allowTransparency={true}
                  allow="encrypted-media"
                />
              </div>
            ) : item.type === 'image' && (item.src || item.srcEn) ? (
              <div className="relative group max-h-[60vh] flex items-center justify-center bg-black/50 p-2">
                <img
                  src={(currentLang === 'en' && item.srcEn) ? item.srcEn : item.src}
                  alt={currentLang === 'es' ? item.titleEs : item.titleEn}
                  className="max-h-[58vh] w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>
            ) : item.type === 'audio' ? (
              <div className="p-8 w-full flex flex-col items-center justify-center space-y-4 text-center bg-gradient-to-b from-canopy-900 to-canopy-950">
                <div className="w-16 h-16 rounded-full bg-lichen-gold/20 border border-lichen-gold/40 flex items-center justify-center text-lichen-gold">
                  <Volume2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-white font-mono font-medium text-lg">
                    {currentLang === 'es' ? item.titleEs : item.titleEn}
                  </h4>
                  <p className="text-xs text-emerald-300 font-mono mt-1">
                    {item.authorOrSource} • {item.date}
                  </p>
                </div>
                <div className="w-full max-w-md bg-canopy-950 p-3 rounded-lg border border-moss-emerald/20 flex items-center space-x-3">
                  <span className="text-xs font-mono text-moss-bright">03:42</span>
                  <div className="flex-1 h-2 bg-canopy-800 rounded-full overflow-hidden">
                    <div className="h-full bg-moss-emerald w-3/5 rounded-full" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400/60">12:15</span>
                </div>
              </div>
            ) : item.type === 'press' ? (
              <div className="w-full flex flex-col items-center bg-black/60 p-2 sm:p-4 space-y-4">
                {item.src && (
                  <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl bg-black/50">
                    <img
                      src={item.src}
                      alt={currentLang === 'es' ? item.titleEs : item.titleEn}
                      className="max-h-[72vh] w-auto object-contain rounded-lg shadow-xl"
                    />
                  </div>
                )}
                <div className="w-full flex items-center justify-between border-t border-white/10 pt-3">
                  <div>
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                      {currentLang === 'es' ? 'Recorte de Prensa / Portada del Reportaje' : 'Press Cover / Article Preview'}
                    </span>
                    <h3 className="text-base font-bold text-white font-serif mt-0.5">
                      {currentLang === 'es' ? item.titleEs : item.titleEn}
                    </h3>
                  </div>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black text-xs font-sans font-bold flex items-center space-x-1.5 transition shadow-md shrink-0"
                    >
                      <span>{currentLang === 'es' ? 'Ver Publicación' : 'View Publication'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-6 w-full bg-canopy-900 space-y-3">
                <h4 className="text-white font-mono font-medium">
                  {currentLang === 'es' ? item.titleEs : item.titleEn}
                </h4>
                <p className="text-sm text-emerald-100">
                  {currentLang === 'es' ? item.captionEs : item.captionEn}
                </p>
              </div>
            )}
          </div>

          {/* Details & Description Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold font-serif text-white">
                {currentLang === 'es' ? item.titleEs : item.titleEn}
              </h3>
              {(item.subtitleEn || item.subtitleEs) && (
                <p className="text-xs font-mono text-moss-bright mt-1">
                  {currentLang === 'es' ? item.subtitleEs : item.subtitleEn}
                </p>
              )}
            </div>

            <p className="text-sm text-emerald-100/90 leading-relaxed">
              {currentLang === 'es' ? item.captionEs : item.captionEn}
            </p>

            {/* Structured details list */}
            {((currentLang === 'es' && item.detailsEs) || (currentLang === 'en' && item.detailsEn)) && (
              <div className="p-4 rounded-xl bg-canopy-950 border border-moss-emerald/20 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-lichen-gold mb-2">
                  {currentLang === 'es' ? 'Desglose Metodológico & Datos' : 'Methodological Breakdown & Data'}
                </div>
                {(currentLang === 'es' ? item.detailsEs : item.detailsEn)?.map((det, dIdx) => (
                  <div key={dIdx} className="flex items-start space-x-2 text-xs text-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-moss-bright shrink-0 mt-0.5" />
                    <span>{det}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Sub-links / Series chapters */}
            {item.subLinks && item.subLinks.length > 0 && (
              <div className="p-4 rounded-xl bg-canopy-950 border border-moss-emerald/20 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-lichen-gold mb-2">
                  {currentLang === 'es' ? 'Capítulos y entregas de la serie' : 'Series Chapters & Parts'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.subLinks.map((sub, sIdx) => (
                    <a
                      key={sIdx}
                      href={sub.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-2 rounded-lg bg-canopy-900 hover:bg-canopy-850 border border-moss-emerald/30 text-emerald-200 hover:text-white text-xs font-mono transition"
                    >
                      <span className="truncate pr-2">
                        {currentLang === 'es' ? sub.titleEs : sub.titleEn}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-moss-bright shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics */}
            {item.metrics && item.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {item.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-2.5 rounded-lg bg-canopy-950 border border-moss-emerald/20 text-center">
                    <div className="text-lg font-bold font-mono text-moss-bright">{m.value}</div>
                    <div className="text-[11px] font-mono text-emerald-300 mt-0.5">
                      {currentLang === 'es' ? m.labelEs : m.labelEn}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Metadata Footer */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-moss-emerald/20 text-xs font-mono text-emerald-400">
              <div className="flex items-center space-x-4">
                {item.authorOrSource && (
                  <span className="flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-moss-bright" />
                    <span>{item.authorOrSource}</span>
                  </span>
                )}
                {item.date && (
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-moss-bright" />
                    <span>{item.date}</span>
                  </span>
                )}
              </div>

              {item.tags && (
                <div className="flex items-center space-x-1.5 flex-wrap">
                  {item.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] bg-canopy-950 border border-moss-emerald/30 text-emerald-300"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
