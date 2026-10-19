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
  const [copiedDeepLink, setCopiedDeepLink] = useState<string | null>(null);
  const email = 'danisantander.urrutia@gmail.com';
  const githubUrl = 'https://github.com/danisantanderurrutia-coder';
  const linkedinUrl = 'https://www.linkedin.com/in/santanderurrutia/';

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyDeepLink = (key: string, query: string) => {
    const base = `${window.location.origin}${window.location.pathname}`;
    navigator.clipboard.writeText(`${base}${query}`);
    setCopiedDeepLink(key);
    setTimeout(() => setCopiedDeepLink(null), 2200);
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
              {currentLang === 'es' ? 'DISPONIBLE PARA CONTRATACIÓN & CONSULTORÍAS (UE / GLOBAL)' : 'AVAILABLE FOR ROLES & CONSULTING (EU / GLOBAL)'}
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
                  DUAL M.SC. &amp; ING.
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-1 leading-relaxed">
                {currentLang === 'es'
                  ? 'Ingeniero Geofísico (U. de Chile) y Doble Máster Europeo en Gestión y Protección Ambiental (CAU Kiel, Alemania & AMU Poznań, Polonia).'
                  : 'Geophysical Engineer (Univ. of Chile) & European Double M.Sc. in Environmental Management & Protection (CAU Kiel, Germany & AMU Poznań, Poland).'}
              </p>
              <div className="flex flex-wrap gap-2 mt-2 font-mono text-[10px] text-neutral-300">
                <span className="text-emerald-400 font-bold">📍 Hannover, Germany (EU) &amp; Chile • CET</span>
                <span>•</span>
                <span>🗣️ {currentLang === 'es' ? 'Español (Nativo), English (C1), Deutsch (B1), Polski (A1)' : 'Spanish (Native), English (C1), German (B1), Polish (A1)'}</span>
              </div>
            </div>
          </div>

          {/* Value Proposition: 3 High-Impact Tracks */}
          <div className="space-y-2.5">
            <h4 className="font-mono font-black text-xs uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{currentLang === 'es' ? '3 LÍNEAS DE VALOR E IMPACTO INMEDIATO' : '3 CORE TRACKS OF IMMEDIATE IMPACT'}</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {/* Card 1: Science & Data */}
              <div className="p-3 rounded-xl bg-[#0f172a] border border-blue-500/30 space-y-1.5 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-blue-400 font-mono font-black text-[11px] uppercase">
                    <span>🔬</span>
                    <span>{currentLang === 'es' ? 'Ciencia, Hidro & SIG' : 'Science, Hydro & GIS'}</span>
                  </div>
                  <p className="text-[11px] text-neutral-300 leading-relaxed font-sans">
                    {currentLang === 'es'
                      ? 'Rehumedecimiento de turberas, flujos GEI (CO₂/CH₄), hidrogeofísica de cuencas, limnología y modelación en Python/R/QGIS.'
                      : 'Peatland rewetting, GHG flux analytics (CO₂/CH₄), catchment hydrogeophysics, limnology & Python/R/QGIS modeling.'}
                  </p>
                </div>
                <div className="pt-1 flex flex-wrap gap-1 font-mono text-[9px] text-blue-300">
                  <span className="px-1.5 py-0.5 bg-blue-950/80 rounded border border-blue-800/40">Python / R</span>
                  <span className="px-1.5 py-0.5 bg-blue-950/80 rounded border border-blue-800/40">QGIS / GEE</span>
                  <span className="px-1.5 py-0.5 bg-blue-950/80 rounded border border-blue-800/40">GHG &amp; Hydro</span>
                </div>
              </div>

              {/* Card 2: Public Policy & Governance */}
              <div className="p-3 rounded-xl bg-[#1e1035] border border-violet-500/30 space-y-1.5 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-violet-300 font-mono font-black text-[11px] uppercase">
                    <span>⚖️</span>
                    <span>{currentLang === 'es' ? 'Políticas & Gobernanza' : 'Policy & Governance'}</span>
                  </div>
                  <p className="text-[11px] text-neutral-300 leading-relaxed font-sans">
                    {currentLang === 'es'
                      ? 'Traducción ciencia-política, Directiva Marco del Agua UE, asesoría parlamentaria, evaluación de riesgo climático y ESG.'
                      : 'Science-policy translation, EU Water Framework Directive, parliamentary testimony, climate risk & ESG advisory.'}
                  </p>
                </div>
                <div className="pt-1 flex flex-wrap gap-1 font-mono text-[9px] text-violet-300">
                  <span className="px-1.5 py-0.5 bg-violet-950/80 rounded border border-violet-800/40">Policy Briefs</span>
                  <span className="px-1.5 py-0.5 bg-violet-950/80 rounded border border-violet-800/40">EU WFD / ESG</span>
                </div>
              </div>

              {/* Card 3: Strategic Comms */}
              <div className="p-3 rounded-xl bg-[#2a1309] border border-orange-500/30 space-y-1.5 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-orange-400 font-mono font-black text-[11px] uppercase">
                    <span>📢</span>
                    <span>{currentLang === 'es' ? 'Comunicaciones & Medios' : 'Strategic Comms'}</span>
                  </div>
                  <p className="text-[11px] text-neutral-300 leading-relaxed font-sans">
                    {currentLang === 'es'
                      ? 'Dirección de campañas (+700k audiencia), vocería técnica, divulgación científica transmedia y periodismo de datos.'
                      : 'Large-scale campaign direction (+700k reach), technical spokesperson, transmedia science outreach & data journalism.'}
                  </p>
                </div>
                <div className="pt-1 flex flex-wrap gap-1 font-mono text-[9px] text-orange-300">
                  <span className="px-1.5 py-0.5 bg-orange-950/80 rounded border border-orange-800/40">+700K Reach</span>
                  <span className="px-1.5 py-0.5 bg-orange-950/80 rounded border border-orange-800/40">Transmedia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Shareable Tailored Deep-Links for Recruiters */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-[10px] uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-[#facc15]" />
                {currentLang === 'es' ? 'ENLACES DIRECTOS POR PERFIL (CLIC PARA COPIAR URL)' : 'TAILORED PORTFOLIO DEEP-LINKS (CLICK TO COPY URL)'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleCopyDeepLink('science', `?lang=${currentLang}&view=game&cat=science`)}
                className="px-2.5 py-1.5 rounded-lg bg-blue-950/50 hover:bg-blue-900/60 border border-blue-500/30 text-left font-mono text-[10px] text-blue-200 flex items-center justify-between transition cursor-pointer"
              >
                <span className="truncate">🔬 {currentLang === 'es' ? 'Link Ciencia 3D' : '3D Science Link'}</span>
                <span className="text-[9px] text-emerald-400 font-bold ml-1">
                  {copiedDeepLink === 'science' ? '✓' : 'COPY'}
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleCopyDeepLink('policy', `?lang=${currentLang}&view=game&cat=policy`)}
                className="px-2.5 py-1.5 rounded-lg bg-violet-950/50 hover:bg-violet-900/60 border border-violet-500/30 text-left font-mono text-[10px] text-violet-200 flex items-center justify-between transition cursor-pointer"
              >
                <span className="truncate">⚖️ {currentLang === 'es' ? 'Link Políticas 3D' : '3D Policy Link'}</span>
                <span className="text-[9px] text-emerald-400 font-bold ml-1">
                  {copiedDeepLink === 'policy' ? '✓' : 'COPY'}
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleCopyDeepLink('dossier', `?lang=${currentLang}&view=dossier`)}
                className="px-2.5 py-1.5 rounded-lg bg-amber-950/50 hover:bg-amber-900/60 border border-amber-500/30 text-left font-mono text-[10px] text-amber-200 flex items-center justify-between transition cursor-pointer"
              >
                <span className="truncate">📄 {currentLang === 'es' ? 'Dossier Ejecutivo' : 'Executive Dossier'}</span>
                <span className="text-[9px] text-emerald-400 font-bold ml-1">
                  {copiedDeepLink === 'dossier' ? '✓' : 'COPY'}
                </span>
              </button>
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
                  <span className="font-mono font-bold text-xs text-emerald-300">
                    {currentLang === 'es' ? 'CV Oficial (PDF)' : 'Official Resume (PDF)'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-black">⬇</span>
              </a>

            </div>
          </div>

        </div>

        {/* Modal Bottom Banner */}
        <div className="px-5 py-2.5 bg-black/90 border-t border-neutral-800 flex items-center justify-between font-mono text-[10px] text-neutral-400">
          <span>{currentLang === 'es' ? 'RESPUESTA HABITUAL: < 24 HORAS' : 'TYPICAL RESPONSE TIME: < 24H'}</span>
          <span className="text-emerald-400 font-bold">{currentLang === 'es' ? '● ONLINE / DISPONIBLE' : '● ONLINE / AVAILABLE'}</span>
        </div>
      </div>
    </div>
  );
};
