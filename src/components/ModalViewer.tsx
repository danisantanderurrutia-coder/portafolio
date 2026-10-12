import React from 'react';
import { 
  X, 
  ExternalLink, 
  Calendar, 
  User, 
  CheckCircle2,
  Volume2
} from 'lucide-react';
import { MediaItem, Language } from '../types';
import { resolveAsset } from '../App';

interface ModalViewerProps {
  item: MediaItem | null;
  currentLang: Language;
  onClose: () => void;
}

export const ModalViewer: React.FC<ModalViewerProps> = ({ item, currentLang, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#181512]/75 backdrop-blur-sm animate-fadeIn">
      {/* Background dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Archival Folio Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-[#fdfbf7] border border-[#dcd1be] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#1c1917]">
        {/* Modal Top Bar (Expediente Documental) */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#ede6d8] border-b border-[#d8cebd] shrink-0">
          <div className="flex items-center space-x-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#b85d38]" />
            <span className="font-mono text-xs text-[#7f3419] font-bold tracking-wider">
              {currentLang === 'es' ? 'FICHA DOCUMENTAL // ARCHIVO' : 'DOCUMENTARY RECORD // ARCHIVE'}
            </span>
            <span className="text-[#a39482]">•</span>
            <span className="font-mono text-[11px] text-[#63584e] uppercase">
              {item.type}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-full bg-[#fdfbf7] hover:bg-[#b85d38] text-[#7f3419] hover:text-white border border-[#d5c7b0] hover:border-[#b85d38] transition text-xs font-serif font-medium flex items-center space-x-1 shadow-sm"
                title={currentLang === 'es' ? 'Abrir enlace original' : 'Open original link'}
              >
                <span>{currentLang === 'es' ? 'Abrir Fuente' : 'Open Source'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-[#63584e] hover:text-[#1c1917] rounded-full hover:bg-[#e2d8c6] transition"
              title="Cerrar (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Media Viewport */}
          <div className="w-full bg-[#ebe3d3] rounded-xl border border-[#d8cebd] overflow-hidden flex items-center justify-center">
            {item.type === 'video' && item.embedUrl ? (
              <div className="w-full aspect-video bg-[#181512]">
                <iframe
                  src={item.embedUrl}
                  title={currentLang === 'es' ? item.titleEs : item.titleEn}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : item.type === 'instagram' ? (
              <div className="w-full flex flex-col items-center justify-center p-4 bg-[#ede5d6] space-y-4">
                {item.src && (
                  <div className="relative max-h-[60vh] flex items-center justify-center bg-[#181512] rounded-xl overflow-hidden shadow-xl p-1">
                    <img
                      src={resolveAsset(item.src)}
                      alt={currentLang === 'es' ? item.titleEs : item.titleEn}
                      className="max-h-[58vh] w-auto object-contain rounded-lg"
                    />
                  </div>
                )}
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-full bg-[#9c4928] hover:bg-[#7f3419] text-white font-serif text-xs font-bold flex items-center space-x-2 shadow-md transition"
                  >
                    <span>{currentLang === 'es' ? 'Ver Publicación en Instagram' : 'View on Instagram'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ) : item.type === 'image' && (item.src || item.srcEn) ? (
              <div className="relative group max-h-[65vh] flex items-center justify-center bg-[#f3ece0] p-3 w-full">
                <img
                  src={resolveAsset((currentLang === 'en' && item.srcEn) ? item.srcEn : item.src)}
                  alt={currentLang === 'es' ? item.titleEs : item.titleEn}
                  className="max-h-[60vh] w-auto object-contain rounded-lg shadow-md"
                />
              </div>
            ) : item.type === 'audio' ? (
              <div className="p-8 w-full flex flex-col items-center justify-center space-y-4 text-center bg-[#f5ede1]">
                <div className="w-16 h-16 rounded-full bg-[#e8dac6] border border-[#d5c5ad] flex items-center justify-center text-[#9c4928] shadow-sm">
                  <Volume2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-[#1c1917] font-serif font-bold text-lg">
                    {currentLang === 'es' ? item.titleEs : item.titleEn}
                  </h4>
                  <p className="text-xs text-[#7f3419] font-mono mt-1">
                    {item.authorOrSource} {item.date && `• ${item.date}`}
                  </p>
                </div>
              </div>
            ) : item.type === 'press' ? (
              <div className="w-full flex flex-col items-center bg-[#ebe3d3] p-2 sm:p-4 space-y-4">
                {item.src && (
                  <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm p-2">
                    <img
                      src={resolveAsset(item.src)}
                      alt={currentLang === 'es' ? item.titleEs : item.titleEn}
                      className="max-h-[70vh] w-auto object-contain rounded-lg"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="p-6 w-full bg-[#fbf9f4] space-y-3">
                <h4 className="text-[#1c1917] font-serif font-bold text-lg">
                  {currentLang === 'es' ? item.titleEs : item.titleEn}
                </h4>
                <p className="text-sm text-[#463e36]">
                  {currentLang === 'es' ? item.captionEs : item.captionEn}
                </p>
              </div>
            )}
          </div>

          {/* Details & Description Section */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-serif font-bold text-[#9c4928] uppercase tracking-wider mb-1">
                <span>{item.authorOrSource || 'Archivo de Campo'}</span>
                {item.date && <span className="opacity-60">• {item.date}</span>}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#1c1917]">
                {currentLang === 'es' ? item.titleEs : item.titleEn}
              </h3>
              {(item.subtitleEn || item.subtitleEs) && (
                <p className="text-xs sm:text-sm font-sans font-medium text-[#7f3419] mt-1">
                  {currentLang === 'es' ? item.subtitleEs : item.subtitleEn}
                </p>
              )}
            </div>

            <p className="text-sm text-[#352f29] leading-relaxed font-sans">
              {currentLang === 'es' ? item.captionEs : item.captionEn}
            </p>

            {/* Structured details list */}
            {((currentLang === 'es' && item.detailsEs) || (currentLang === 'en' && item.detailsEn)) && (
              <div className="p-4 rounded-xl bg-[#f7f2e7] border border-[#ded5c5] space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#9c4928] font-bold mb-2">
                  {currentLang === 'es' ? 'Desglose Metodológico & Datos' : 'Methodological Breakdown & Data'}
                </div>
                {(currentLang === 'es' ? item.detailsEs : item.detailsEn)?.map((det, dIdx) => (
                  <div key={dIdx} className="flex items-start space-x-2 text-xs text-[#463e36]">
                    <CheckCircle2 className="w-4 h-4 text-[#2d5a3c] shrink-0 mt-0.5" />
                    <span>{det}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Sub-links / Series chapters */}
            {item.subLinks && item.subLinks.length > 0 && (
              <div className="p-4 rounded-xl bg-[#f7f2e7] border border-[#ded5c5] space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#9c4928] font-bold mb-2">
                  {currentLang === 'es' ? 'Capítulos y entregas de la serie:' : 'Series Chapters & Parts:'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.subLinks.map((sub, sIdx) => (
                    <a
                      key={sIdx}
                      href={sub.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg bg-[#fdfbf7] hover:bg-[#ede5d6] border border-[#dad0bf] text-[#352f29] hover:text-[#1c1917] text-xs font-sans transition group"
                    >
                      <span className="truncate pr-2 font-medium">
                        {currentLang === 'es' ? sub.titleEs : sub.titleEn}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#9c4928] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Tags and Metadata Footer */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-[#ded5c5] text-xs">
              <div className="flex items-center space-x-4 text-[#63584e] font-sans">
                {item.authorOrSource && (
                  <span className="flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-[#9c4928]" />
                    <span>{item.authorOrSource}</span>
                  </span>
                )}
                {item.date && (
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-[#9c4928]" />
                    <span>{item.date}</span>
                  </span>
                )}
              </div>

              {item.tags && (
                <div className="flex items-center space-x-1.5 flex-wrap">
                  {item.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#f4ece0] border border-[#dfd4c1] text-[#7f3419]"
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
