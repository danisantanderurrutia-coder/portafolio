import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  FileText, 
  Copy, 
  Check, 
  Send, 
  Globe2, 
  Briefcase, 
  MessageSquare,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.95 0-1.72.78-1.72 1.73s.77 1.73 1.72 1.73a1.73 1.73 0 0 0 1.74-1.73c0-.95-.79-1.73-1.74-1.73" />
  </svg>
);

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}>
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
  </svg>
);

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = 'dsantanderurrutia@gmail.com';
  const githubUrl = 'https://github.com/danisantanderurrutia-coder';
  const linkedinUrl = 'https://www.linkedin.com/in/daniel-santander-urrutia';

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#0e1117] border-3 border-black rounded-2xl shadow-[10px_10px_0px_#facc15] overflow-hidden flex flex-col max-h-[92vh] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-5 py-3.5 bg-black border-b-2 border-neutral-800 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 -ml-4" />
            <span className="font-mono font-black text-xs sm:text-sm uppercase tracking-wider text-emerald-400">
              {currentLang === 'es' ? 'DISPONIBLE PARA CONTRATACIÓN & CONSULTORÍAS' : 'AVAILABLE FOR ROLES & CONSULTING'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/10 hover:bg-red-600 hover:text-white text-neutral-400 transition-all border border-white/20 active:scale-90"
            title="Cerrar // Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          
          {/* Header Card: Daniel Santander Profile Summary */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="relative shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-black p-0.5 border-2 border-[#facc15] shadow-[3px_3px_0px_#000] overflow-hidden -rotate-2">
                <img 
                  src={resolveAsset('/profile.jpg')} 
                  alt="Daniel Santander" 
                  className="w-full h-full object-cover object-top filter contrast-110"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-mono font-black text-lg sm:text-xl text-white uppercase tracking-tight">
                  Daniel Santander Urrutia
                </h3>
                <span className="bg-[#facc15] text-black font-mono font-black text-[10px] px-2 py-0.5 border border-black shadow-[1px_1px_0px_#000]">
                  DUAL M.SC. & ING.
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-1 leading-relaxed">
                {currentLang === 'es'
                  ? 'Ingeniero Geofísico (U. de Chile) y Doble Máster Europeo en Gestión Ambiental y Cuencas (CAU Kiel, Alemania & AMU Poznań, Polonia).'
                  : 'Geophysical Engineer (Univ. of Chile) & European Double M.Sc. in Environmental & Catchment Management (CAU Kiel, Germany & AMU Poznań, Poland).'}
              </p>
              <div className="flex flex-wrap gap-2 mt-2 font-mono text-[10px] text-neutral-400">
                <span>📍 Santiago, Chile • CET Friendly</span>
                <span>•</span>
                <span>🗣️ Español (Nativo), English (C1), Deutsch (B1/B2)</span>
              </div>
            </div>
          </div>

          {/* Value Proposition: 2 High-Impact Tracks */}
          <div className="space-y-2.5">
            <h4 className="font-mono font-black text-xs uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{currentLang === 'es' ? 'ÁREAS DONDE APORTO VALOR INMEDIATO' : 'AREAS OF IMMEDIATE IMPACT'}</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Card 1: Science & Data */}
              <div className="p-3.5 rounded-xl bg-[#0f172a] border border-blue-500/30 space-y-1.5">
                <div className="flex items-center space-x-1.5 text-blue-400 font-mono font-black text-xs uppercase">
                  <span>🔬</span>
                  <span>{currentLang === 'es' ? 'Ciencia & Modelación de Datos' : 'Science & Environmental Data'}</span>
                </div>
                <p className="text-[11px] text-neutral-300 leading-relaxed font-sans">
                  {currentLang === 'es'
                    ? 'Evaluación de riesgo climático (marejadas, SLR), modelación hidrogeofísica de cuencas, análisis espacial en Python/R/QGIS y gemelos digitales.'
                    : 'Climate risk assessments (storm surges, SLR), catchment hydrogeophysics, spatial modeling in Python/R/QGIS & digital twins.'}
                </p>
                <div className="pt-1 flex flex-wrap gap-1 font-mono text-[9px] text-blue-300">
                  <span className="px-1.5 py-0.5 bg-blue-950/80 rounded border border-blue-800/40">Python</span>
                  <span className="px-1.5 py-0.5 bg-blue-950/80 rounded border border-blue-800/40">QGIS / Earth Engine</span>
                  <span className="px-1.5 py-0.5 bg-blue-950/80 rounded border border-blue-800/40">Delft3D / Hydro</span>
                </div>
              </div>

              {/* Card 2: Strategic Comms */}
              <div className="p-3.5 rounded-xl bg-[#2a1309] border border-orange-500/30 space-y-1.5">
                <div className="flex items-center space-x-1.5 text-orange-400 font-mono font-black text-xs uppercase">
                  <span>📢</span>
                  <span>{currentLang === 'es' ? 'Comunicaciones & Campañas' : 'Strategic Communications'}</span>
                </div>
                <p className="text-[11px] text-neutral-300 leading-relaxed font-sans">
                  {currentLang === 'es'
                    ? 'Dirección de campañas masivas (+700k audiencia), vocería técnica en el Congreso, divulgación transmedia, periodismo de investigación e IA.'
                    : 'Large-scale campaign leadership (+700k reach), parliamentary spokesperson, transmedia science outreach, investigative journalism & AI.'}
                </p>
                <div className="pt-1 flex flex-wrap gap-1 font-mono text-[9px] text-orange-300">
                  <span className="px-1.5 py-0.5 bg-orange-950/80 rounded border border-orange-800/40">+700K Audiencia</span>
                  <span className="px-1.5 py-0.5 bg-orange-950/80 rounded border border-orange-800/40">Vocería Prensa</span>
                  <span className="px-1.5 py-0.5 bg-orange-950/80 rounded border border-orange-800/40">Narrativa Transmedia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Channels (1-Click Actions) */}
          <div className="space-y-3 pt-2 border-t border-neutral-800">
            <h4 className="font-mono font-black text-xs uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{currentLang === 'es' ? 'CANALES DE CONTACTO DIRECTO' : 'DIRECT CONTACT CHANNELS'}</span>
            </h4>

            {/* Email Copier */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center space-x-3 overflow-hidden">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="font-mono text-[10px] text-neutral-400 uppercase">
                    {currentLang === 'es' ? 'Correo Electrónico Oficial' : 'Official Email Address'}
                  </div>
                  <div className="font-mono font-bold text-xs sm:text-sm text-white truncate">
                    {email}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-emerald-600 hover:text-white text-neutral-200 font-mono font-bold text-xs flex items-center space-x-1.5 border border-white/20 active:scale-95 transition-all"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{currentLang === 'es' ? '¡Copiado!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{currentLang === 'es' ? 'Copiar' : 'Copy'}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}?subject=Contacto%20Profesional%20-%20Daniel%20Santander`}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs flex items-center space-x-1 border border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{currentLang === 'es' ? 'Escribir' : 'Write'}</span>
                </a>
              </div>
            </div>

            {/* Grid of Profiles & CV Loot */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              
              {/* LinkedIn */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-[#0077b5]/20 hover:border-[#0077b5] border border-white/10 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center space-x-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
                  <span className="font-mono font-bold text-xs text-white">LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-purple-600/20 hover:border-purple-400 border border-white/10 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center space-x-2.5">
                  <GithubIcon className="w-4 h-4 text-purple-400" />
                  <span className="font-mono font-bold text-xs text-white">GitHub</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              {/* CV Download Loot */}
              <a
                href={resolveAsset('/Daniel_Santander_CV.pdf')}
                download="Daniel_Santander_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-emerald-600/10 hover:bg-emerald-600/20 hover:border-emerald-500 border border-emerald-500/30 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center space-x-2.5">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono font-bold text-xs text-emerald-300">CV Oficial (PDF)</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-black">⬇</span>
              </a>

            </div>
          </div>

        </div>

        {/* Modal Bottom Banner */}
        <div className="px-5 py-2.5 bg-black/90 border-t border-neutral-800 flex items-center justify-between font-mono text-[10px] text-neutral-400">
          <span>{currentLang === 'es' ? 'RESPUESTA HABITUAL: < 24 HORAS' : 'TYPICAL RESPONSE TIME: < 24H'}</span>
          <span className="text-emerald-400 font-bold">● ONLINE / DISPONIBLE</span>
        </div>
      </div>
    </div>
  );
};
