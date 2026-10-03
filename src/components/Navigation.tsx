import React from 'react';
import { 
  FileText, 
  Share2, 
  Check, 
  Globe, 
  TreePine,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Radio,
  Award
} from 'lucide-react';
import { Language } from '../types';

interface NavigationProps {
  currentLang: Language;
  onToggleLang: () => void;
  activeSectionIndex: number;
  onSelectSection: (index: number) => void;
  onOpenPdfModal: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentLang,
  onToggleLang,
  onOpenPdfModal
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const badges = [
    { icon: Award, textEn: 'EPN 2024 Lead Author', textEs: 'Autor Principal EPN 2024' },
    { icon: TrendingUp, textEn: '+700k Audience Director', textEs: 'Director Audiencia +700k' },
    { icon: Radio, textEn: 'Artivist & Live Producer', textEs: 'Artivista y Productor en Vivo' },
    { icon: Cpu, textEn: 'AI-Augmented Workflows', textEs: 'Flujos Asistidos por IA' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-canopy-950/90 backdrop-blur-md border-b border-moss-emerald/20 transition-all duration-200">
      {/* Top Forest Canopy Ticker */}
      <div className="border-b border-moss-emerald/15 bg-canopy-900/90 py-1.5 px-4 text-xs font-mono tracking-wider text-emerald-200/70">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <TreePine className="w-3.5 h-3.5 text-moss-bright" />
            <span className="font-semibold text-moss-bright">EXPEDITION DOSSIER:</span>
            <span className="text-emerald-100">FANFE / EPN // EU RED III & ETS</span>
            <span className="hidden sm:inline text-canopy-700">//</span>
            <span className="hidden sm:inline text-lichen-gold">BILINGUAL BROCHURE EDITION</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1.5 text-[11px] text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 text-moss-bright" />
              <span>FIELD VERIFIED & PEER REVIEWED</span>
            </div>

            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded border border-moss-emerald/40 bg-canopy-950 hover:bg-canopy-850 text-emerald-200 text-xs transition font-mono uppercase shadow-sm"
              title="Cambiar idioma / Toggle Language"
            >
              <Globe className="w-3 h-3 text-lichen-gold" />
              <span className="font-bold text-lichen-gold">{currentLang === 'es' ? 'ES' : 'EN'}</span>
              <span className="text-canopy-600">/</span>
              <span className="text-emerald-300">{currentLang === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-white font-mono flex items-center gap-2">
              <span className="text-moss-bright">DANIEL SANTANDER URRUTIA</span>
              <span className="text-emerald-600 font-light">//</span>
              <span className="text-xs uppercase tracking-widest text-emerald-300/80 font-sans hidden sm:inline">
                {currentLang === 'es' ? 'Folleto Documental de Campañas' : 'Documentary Campaign Brochure'}
              </span>
            </h1>
          </div>
          <p className="text-xs text-emerald-300/70 mt-0.5 font-mono">
            {currentLang === 'es'
              ? 'Postulación Profesional de Comunicaciones (FANFE / EPN sobre EU RED & ETS)'
              : 'Communications Professional Candidacy (FANFE / EPN on EU RED & ETS)'}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex items-center space-x-2.5">
          <button
            onClick={onOpenPdfModal}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-moss-emerald/25 border border-moss-bright/40 text-moss-dew hover:bg-moss-emerald/40 text-xs font-medium font-mono transition shadow-md shadow-moss-emerald/10"
          >
            <FileText className="w-3.5 h-3.5 text-moss-bright" />
            <span>{currentLang === 'es' ? 'Descargar Folleto PDF' : 'Download Brochure PDF'}</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-canopy-900 border border-moss-emerald/30 text-emerald-200 hover:bg-canopy-850 hover:text-white text-xs font-mono transition"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-moss-bright" />
                <span className="text-moss-dew">{currentLang === 'es' ? '¡Copiado!' : 'Copied!'}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{currentLang === 'es' ? 'Compartir' : 'Share Link'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Badges Bar */}
      <div className="border-t border-moss-emerald/15 bg-canopy-900/50 px-4 py-1.5 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <span
                key={idx}
                className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full border border-moss-emerald/30 bg-canopy-950/70 text-emerald-200 text-[11px] font-mono shrink-0 shadow-sm"
              >
                <Icon className="w-3 h-3 text-moss-bright" />
                <span>{currentLang === 'es' ? b.textEs : b.textEn}</span>
              </span>
            );
          })}
        </div>
      </div>
    </header>
  );
};
