import React from 'react';
import { 
  X, 
  Download, 
  Check, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  Printer,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';

interface PdfDossierModalProps {
  isOpen: boolean;
  currentLang: Language;
  onClose: () => void;
}

export const PdfDossierModal: React.FC<PdfDossierModalProps> = ({
  isOpen,
  currentLang,
  onClose
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl bg-obsidian-900 border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Chrome */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-obsidian-850 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs text-white font-medium">
              {currentLang === 'es' ? 'DOSSIER TÉCNICO EJECUTIVO // FANFE & EPN' : 'EXECUTIVE TECHNICAL DOSSIER // FANFE & EPN'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white rounded hover:bg-white/10 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[75vh]">
          {/* Header Summary */}
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-mono text-emerald-400 mb-1">
              CANDIDACY: COMMUNICATIONS PROFESSIONAL (EU RED & ETS)
            </div>
            <h3 className="text-xl font-serif font-bold text-white">
              Daniel Santander Urrutia
            </h3>
            <p className="text-xs text-neutral-400 font-mono mt-1">
              Santiago, Chile • EPN 2024 Lead Author • daniel.santander.u@gmail.com
            </p>
          </div>

          {/* Dossier Structure Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400">
              {currentLang === 'es' ? 'Contenido del Expediente' : 'Dossier Outline'}
            </h4>
            <div className="space-y-2 text-xs font-sans text-neutral-300">
              <div className="p-3 rounded-lg bg-obsidian-950 border border-white/5">
                <span className="font-mono text-emerald-400 font-semibold">01.</span>{' '}
                {currentLang === 'es'
                  ? 'Traducción de Ciencia Biofísica: Demostración de vacíos de carbono en RED III y ETS (EPN 2024 Report).'
                  : 'Biophysical Science Translation: Demonstrating carbon accounting loopholes in RED III & ETS (EPN 2024).'}
              </div>
              <div className="p-3 rounded-lg bg-obsidian-950 border border-white/5">
                <span className="font-mono text-emerald-400 font-semibold">02.</span>{' '}
                {currentLang === 'es'
                  ? 'Red de Medios & Cobertura Masiva: Gestión de Primera Línea Prensa (+700k) y cobertura en El Desconcierto, Tomaterojo, CNN.'
                  : 'Media Architecture & Mass Reach: Managing Primera Línea Prensa (+700k) and press placements in El Desconcierto, Tomaterojo, CNN.'}
              </div>
              <div className="p-3 rounded-lg bg-obsidian-950 border border-white/5">
                <span className="font-mono text-emerald-400 font-semibold">03.</span>{' '}
                {currentLang === 'es'
                  ? 'Coordinación Nacional de Terreno: Giras campesinas de "Apruebo Rural" (14 regiones) y asambleas por el agua.'
                  : 'National Field Deployment: 14-region peasant tour of "Apruebo Rural" and frontline water defense rallies.'}
              </div>
              <div className="p-3 rounded-lg bg-obsidian-950 border border-white/5">
                <span className="font-mono text-emerald-400 font-semibold">04.</span>{' '}
                {currentLang === 'es'
                  ? 'Artivismo & Movilización Juvenil: Brigada Paulina Aguirre y torneos de Rap Beauchef / Cuarentena Rap.'
                  : 'Artivism & Youth Mobilization: Brigada Paulina Aguirre murals and Rap Beauchef / Cuarentena Rap tournaments.'}
              </div>
              <div className="p-3 rounded-lg bg-obsidian-950 border border-white/5">
                <span className="font-mono text-emerald-400 font-semibold">05.</span>{' '}
                {currentLang === 'es'
                  ? 'Metodología Ágil con Inteligencia Artificial: Flujo optimizado de 10 días/mes para producción multilingüe de alto estándar.'
                  : 'AI-Augmented Agile Workflow: 10-day/month high-impact production model for multilingual campaign delivery.'}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handlePrint}
              className="w-full sm:w-auto flex-1 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-bold font-mono text-xs flex items-center justify-center space-x-2 transition"
            >
              <Printer className="w-4 h-4" />
              <span>{currentLang === 'es' ? 'Imprimir / Guardar como PDF' : 'Print / Save as PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 font-mono text-xs border border-white/10 transition"
            >
              {currentLang === 'es' ? 'Cerrar' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
