import React, { useState, useEffect } from 'react';
import {
  X,
  Mail,
  FileText,
  Copy,
  Check,
  Send,
  Download,
  ExternalLink,
  Eye,
  MapPin,
  Languages,
  ArrowUpRight,
  Microscope,
  Scale,
  Radio
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';
import { CV_VARIANTS } from './CvSelectorModal';
import { GeofrecuenciaLogo } from './GeofrecuenciaLogo';

export type HireMeAesthetic = 'editorial' | 'brutalist' | 'minimal';

const LinkedinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.95 0-1.72.78-1.72 1.73s.77 1.73 1.72 1.73a1.73 1.73 0 0 0 1.74-1.73c0-.95-.79-1.73-1.74-1.73" />
  </svg>
);

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}>
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
  </svg>
);

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onOpenCvSelector?: (lang?: Language, length?: '1p' | '2p') => void;
  initialStyle?: HireMeAesthetic;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onOpenCvSelector,
  initialStyle
}) => {
  const [aesthetic, setAesthetic] = useState<HireMeAesthetic>(() => {
    const param = new URLSearchParams(window.location.search).get('style');
    if (param === 'editorial' || param === 'brutalist' || param === 'minimal') {
      return param;
    }
    return initialStyle || 'editorial';
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (initialStyle) {
      setAesthetic(initialStyle);
    }
  }, [initialStyle]);

  if (!isOpen) return null;

  const email = 'danisantander.urrutia@gmail.com';
  const githubUrl = 'https://github.com/danisantanderurrutia-coder';
  const linkedinUrl = 'https://www.linkedin.com/in/santanderurrutia/';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const mandates = [
    {
      num: '01',
      icon: <Microscope className="w-4 h-4" />,
      titleEs: 'Hidrogeofísica, Turberas & Gemelos Digitales',
      titleEn: 'Hydro-Geophysics, Peatlands & Digital Twins',
      descEs:
        'Monitoreo de flujos GEI (CO₂ / CH₄) en rehumedecimiento de turberas, tomografía eléctrica (ERT/VES), física de suelos, limnología y plataformas interactivas en Python/R/QGIS/Three.js.',
      descEn:
        'Peatland rewetting GHG flux analytics (CO₂ / CH₄), electrical resistivity (ERT/VES), soil hydro-physics, limnology & interactive 3D monitoring platforms (Python/R/QGIS/Three.js).',
      tags: ['VES / ERT', 'CH₄ / CO₂ Fluxes', 'Python • R • QGIS', 'Wetland Monitor 3D']
    },
    {
      num: '02',
      icon: <Scale className="w-4 h-4" />,
      titleEs: 'Política Climática, Agua & Asesoría ESG (UE / LATAM)',
      titleEn: 'Climate Policy, Water Governance & ESG Advisory',
      descEs:
        'Traducción de evidencia biofísica a normativa pública, Directiva Marco del Agua UE, restauración ecológica, informes técnicos parlamentarios y evaluación de riesgos hídricos.',
      descEn:
        'Translating biophysical evidence into regulatory policy, EU Water Framework Directive, ecological restoration, parliamentary technical briefs, and catchment risk assessment.',
      tags: ['EU Water Directive', 'Policy Briefs', 'Carbon & Peatland', 'Parliamentary Advisory']
    },
    {
      num: '03',
      icon: <Radio className="w-4 h-4" />,
      titleEs: 'Comunicación Científica & Dirección Estratégica',
      titleEn: 'Science Communication & Strategic Direction',
      descEs:
        'Vocería científica bilingüe, dirección de campañas ambientales de alto alcance (+700k audiencia), narrativa transmedia y articulación entre ciencia, instituciones y ciudadanía.',
      descEn:
        'Bilingual scientific spokesperson, high-reach environmental campaign direction (+700k audience), transmedia storytelling, and multi-stakeholder engagement.',
      tags: ['+700k Audience Reach', 'Executive Briefings', 'Data Storytelling', 'ES • EN • DE']
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-2 sm:p-5 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* LIVE AESTHETIC SWITCHER BAR (SO USER CAN PREVIEW ALL 3 DESIGNS INSTANTLY) */}
      <div
        className="mb-2.5 px-2.5 py-1.5 rounded-full bg-black/90 border border-white/25 shadow-lg flex items-center gap-1.5 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 px-2 hidden sm:inline">
          {currentLang === 'es' ? 'Diseño:' : 'Style:'}
        </span>
        <button
          type="button"
          onClick={() => setAesthetic('editorial')}
          className={`px-3 py-1 rounded-full font-mono font-bold text-[10px] uppercase transition-all cursor-pointer ${
            aesthetic === 'editorial'
              ? 'bg-[#faf8f4] text-[#1c1917] shadow-sm'
              : 'text-neutral-300 hover:text-white'
          }`}
        >
          1. Editorial Paper
        </button>
        <button
          type="button"
          onClick={() => setAesthetic('brutalist')}
          className={`px-3 py-1 rounded-full font-mono font-bold text-[10px] uppercase transition-all cursor-pointer ${
            aesthetic === 'brutalist'
              ? 'bg-[#facc15] text-black shadow-sm'
              : 'text-neutral-300 hover:text-white'
          }`}
        >
          2. Neo-Brutalist Credential
        </button>
        <button
          type="button"
          onClick={() => setAesthetic('minimal')}
          className={`px-3 py-1 rounded-full font-mono font-bold text-[10px] uppercase transition-all cursor-pointer ${
            aesthetic === 'minimal'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-neutral-300 hover:text-white'
          }`}
        >
          3. Executive Minimal
        </button>
      </div>

      {/* =====================================================================
          OPTION 1: EDITORIAL PAPER DOSSIER (#faf8f4, Newsreader Serif + Ink)
         ===================================================================== */}
      {aesthetic === 'editorial' && (
        <div
          className="relative w-full max-w-4xl bg-[#faf8f4] text-[#1c1917] border-2 border-[#1c1917] rounded-xl shadow-[0_25px_70px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col max-h-[88vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Editorial Masthead */}
          <div className="px-6 py-3.5 bg-[#f2ece1] border-b border-[#d6cebf] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1f4e37] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                {currentLang === 'es'
                  ? 'DISPONIBLE • EUROPA & CHILE'
                  : 'AVAILABLE • EUROPE & CHILE'}
              </span>
              <span className="font-mono text-[11px] text-[#57534e] uppercase tracking-widest hidden sm:inline">
                {currentLang === 'es'
                  ? 'EXPEDIENTE DE CONTRATACIÓN & CONSULTORÍA'
                  : 'EXECUTIVE BRIEF & CONSULTING MANDATE'}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#e4dcce] text-[#57534e] hover:text-[#1c1917] transition-colors cursor-pointer"
              title={currentLang === 'es' ? 'Cerrar' : 'Close'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Editorial Content */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
            {/* Top Editorial Profile Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-[#d6cebf]">
              <div className="flex items-center gap-4">
                <img
                  src={resolveAsset('/profile.jpg')}
                  alt="Daniel Santander Urrutia"
                  className="w-16 h-20 sm:w-20 sm:h-24 object-cover object-top rounded-lg border border-[#1c1917] shadow-sm shrink-0"
                />
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#1f4e37] font-bold">
                    U. DE CHILE (B.SC.) • CAU KIEL (M.SC.) • AMU POZNAŃ (M.SC.)
                  </div>
                  <h2 className="font-['Newsreader',Georgia,serif] font-bold text-2xl sm:text-3xl text-[#1c1917] tracking-tight leading-none">
                    Daniel Santander Urrutia
                  </h2>
                  <p className="font-['Newsreader',Georgia,serif] italic text-sm sm:text-base text-[#44403c]">
                    {currentLang === 'es'
                      ? '“Puente entre la ciencia de la Tierra, la decisión política y las personas.”'
                      : '“Bridging Earth science, policy decisions, and people.”'}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-0.5 font-mono text-[10.5px] text-[#57534e]">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#1f4e37]" />
                      Hannover, DE &amp; Santiago, CL
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Languages className="w-3.5 h-3.5 text-[#1f4e37]" />
                      ES (Nativo) · EN (C1) · DE (B1)
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Contact Stamp Box */}
              <div className="w-full md:w-auto p-3 rounded-lg bg-[#f2ece1] border border-[#cfc5b4] flex flex-col gap-1.5 shrink-0">
                <div className="font-mono text-[9.5px] uppercase tracking-wider text-[#57534e]">
                  {currentLang === 'es' ? 'CONTACTO DIRECTO' : 'DIRECT INQUIRIES'}
                </div>
                <div className="font-mono font-bold text-xs text-[#1c1917] select-all">
                  {email}
                </div>
                <div className="flex items-center gap-2 pt-0.5">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 px-2.5 py-1 rounded bg-white hover:bg-[#1c1917] text-[#1c1917] hover:text-white border border-[#1c1917] font-mono font-bold text-[10.5px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? (currentLang === 'es' ? 'Copiado' : 'Copied') : (currentLang === 'es' ? 'Copiar' : 'Copy')}</span>
                  </button>
                  <a
                    href={`mailto:${email}?subject=Contacto%20Profesional%20-%20Daniel%20Santander`}
                    className="flex-1 px-2.5 py-1 rounded bg-[#1f4e37] hover:bg-[#163a28] text-white font-mono font-bold text-[10.5px] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{currentLang === 'es' ? 'Escribir' : 'Email'}</span>
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded bg-white hover:bg-[#0a66c2] text-[#1c1917] hover:text-white border border-[#1c1917] transition-colors"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded bg-white hover:bg-[#1c1917] text-[#1c1917] hover:text-white border border-[#1c1917] transition-colors"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* 3 Consulting & Role Pillars in Clean Editorial Columns */}
            <div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#78716c] mb-2">
                {currentLang === 'es'
                  ? 'ÁREAS DE PRÁCTICA, INVESTIGACIÓN APLICADA & CONSULTORÍA'
                  : 'AREAS OF PRACTICE, APPLIED RESEARCH & CONSULTING'}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {mandates.map((m) => (
                  <div
                    key={m.num}
                    className="p-3.5 rounded-lg bg-white border border-[#d6cebf] flex flex-col justify-between space-y-2"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[#1f4e37] border-b border-[#efe9dd] pb-1.5">
                        <span className="font-mono text-xs font-bold">{m.num}</span>
                        {m.icon}
                      </div>
                      <h3 className="font-['Newsreader',Georgia,serif] font-bold text-base text-[#1c1917] leading-snug">
                        {currentLang === 'es' ? m.titleEs : m.titleEn}
                      </h3>
                      <p className="text-[11.5px] text-[#57534e] leading-relaxed">
                        {currentLang === 'es' ? m.descEs : m.descEn}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {m.tags.map((t) => (
                        <span
                          key={t}
                          className="px-1.5 py-0.5 rounded bg-[#f5f0e6] text-[#44403c] font-mono text-[9px] font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-CV Repository Matrix (EN/ES x 1P/2P) */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#f2ece1] border border-[#cfc5b4] space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="font-['Newsreader',Georgia,serif] font-bold text-base text-[#1c1917]">
                    {currentLang === 'es'
                      ? 'Descarga de Currículum Vitae por Formato e Idioma'
                      : 'Curriculum Vitae Repository by Format & Language'}
                  </h4>
                  <p className="font-mono text-[10.5px] text-[#57534e]">
                    {currentLang === 'es'
                      ? 'Elige versión ejecutiva (1 página) o extendida (2 páginas) en inglés o español:'
                      : 'Select the 1-page executive summary or 2-page comprehensive CV in English or Spanish:'}
                  </p>
                </div>
                {onOpenCvSelector && (
                  <button
                    type="button"
                    onClick={() => onOpenCvSelector(currentLang, '1p')}
                    className="px-3 py-1 rounded-lg bg-[#1c1917] hover:bg-[#1f4e37] text-white font-mono text-[10.5px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{currentLang === 'es' ? 'Abrir Visor de CV' : 'Open CV Previewer'}</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {CV_VARIANTS.map((cv) => (
                  <a
                    key={cv.id}
                    href={resolveAsset(cv.path)}
                    download={cv.filename}
                    className="p-2.5 rounded-lg bg-white hover:bg-[#1c1917] text-[#1c1917] hover:text-white border border-[#cfc5b4] hover:border-[#1c1917] transition-all group flex flex-col justify-between gap-1"
                  >
                    <div>
                      <div className="flex items-center justify-between font-mono text-[9.5px] font-bold text-[#1f4e37] group-hover:text-emerald-300">
                        <span>{currentLang === 'es' ? cv.badgeEs : cv.badgeEn}</span>
                        <Download className="w-3.5 h-3.5" />
                      </div>
                      <div className="font-['Newsreader',Georgia,serif] font-bold text-xs sm:text-sm mt-0.5">
                        {currentLang === 'es' ? cv.titleEs : cv.titleEn}
                      </div>
                    </div>
                    <div className="font-mono text-[9px] text-[#78716c] group-hover:text-neutral-300">
                      {cv.length === '1p'
                        ? currentLang === 'es'
                          ? 'Síntesis ejecutiva • PDF'
                          : 'Executive synthesis • PDF'
                        : currentLang === 'es'
                          ? 'Expediente completo • PDF'
                          : 'Full technical record • PDF'}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          OPTION 2: NEO-BRUTALIST PASSPORT / CREDENTIAL (#fdfbf7 + Black & Gold)
         ===================================================================== */}
      {aesthetic === 'brutalist' && (
        <div
          className="relative w-full max-w-4xl bg-[#fdfbf7] text-black border-[3px] border-black rounded-2xl shadow-[10px_10px_0px_#facc15] overflow-hidden flex flex-col max-h-[88vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Neo-Brutalist Top Stencil Header */}
          <div className="px-5 py-3 bg-black text-white border-b-[3px] border-black flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 bg-[#facc15] text-black font-mono font-black text-[10px] uppercase border border-black">
                FIELD &amp; POLICY CREDENTIAL
              </span>
              <span className="font-mono font-black text-xs sm:text-sm uppercase tracking-wider text-white">
                {currentLang === 'es'
                  ? 'CONTRATACIÓN DIRECTA & CONSULTORÍA CIENTÍFICA'
                  : 'DIRECT HIRE & SCIENTIFIC CONSULTING DOSSIER'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 bg-white text-black hover:bg-red-600 hover:text-white border-2 border-black transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* 2-Column Graphic Novel Layout */}
          <div className="p-5 sm:p-6 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Column (5 cols): Identity Card + Direct Contact + 4 CVs */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              <div className="p-4 rounded-xl bg-[#f4efe4] border-2 border-black shadow-[5px_5px_0px_#000] space-y-3">
                <div className="flex items-center gap-3.5">
                  <div className="relative shrink-0">
                    <img
                      src={resolveAsset('/profile.jpg')}
                      alt="Daniel Santander"
                      className="w-20 h-24 object-cover object-top rounded-lg border-2 border-black shadow-[3px_3px_0px_#000]"
                    />
                    <div className="absolute -top-2 -left-2 -rotate-6">
                      <GeofrecuenciaLogo variant="badge" className="w-7 h-7" />
                    </div>
                  </div>
                  <div>
                    <div className="inline-block bg-black text-[#facc15] font-mono font-black text-xs px-2 py-0.5 uppercase">
                      [DANIEL SANTANDER]
                    </div>
                    <div className="font-mono font-bold text-[11px] text-neutral-800 mt-1 leading-snug">
                      {currentLang === 'es'
                        ? 'Geofísico (U. de Chile) • Doble M.Sc. Ambiental (CAU Kiel 🇩🇪 & AMU Poznań 🇵🇱)'
                        : 'Geophysicist (U. of Chile) • Double M.Sc. Env. Mgmt (CAU Kiel 🇩🇪 & AMU Poznań 🇵🇱)'}
                    </div>
                    <div className="inline-flex items-center gap-1.5 mt-1.5 px-2 py-0.5 bg-emerald-700 text-white font-mono font-black text-[9.5px] uppercase border border-black">
                      <span>●</span>
                      <span>Hannover, DE &amp; Chile</span>
                    </div>
                  </div>
                </div>

                {/* Contact Box */}
                <div className="pt-2 border-t-2 border-black/15 space-y-2">
                  <div className="font-mono font-black text-[10px] uppercase text-neutral-600">
                    {currentLang === 'es' ? 'CORREO & PERFILES OFICIALES' : 'DIRECT EMAIL & PROFILES'}
                  </div>
                  <div className="flex items-center justify-between px-2.5 py-1.5 bg-white border-2 border-black font-mono text-xs font-bold truncate">
                    <span className="truncate">{email}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handleCopyEmail}
                      className="py-2 px-3 bg-white hover:bg-[#facc15] text-black font-mono font-black text-[11px] uppercase border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedEmail ? 'OK!' : currentLang === 'es' ? 'Copiar' : 'Copy'}</span>
                    </button>
                    <a
                      href={`mailto:${email}?subject=Contacto%20Profesional%20-%20Daniel%20Santander`}
                      className="py-2 px-3 bg-black hover:bg-emerald-700 text-white font-mono font-black text-[11px] uppercase border-2 border-black shadow-[2px_2px_0px_#facc15] flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{currentLang === 'es' ? 'Escribir' : 'Write'}</span>
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-0.5">
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2.5 bg-white hover:bg-[#0a66c2] hover:text-white text-black font-mono font-black text-[11px] uppercase border-2 border-black flex items-center justify-between"
                    >
                      <span className="flex items-center gap-1.5">
                        <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2.5 bg-white hover:bg-black hover:text-white text-black font-mono font-black text-[11px] uppercase border-2 border-black flex items-center justify-between"
                    >
                      <span className="flex items-center gap-1.5">
                        <GithubIcon className="w-3.5 h-3.5" /> GitHub
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* 4-CV Matrix in Brutalist Box */}
              <div className="p-4 rounded-xl bg-[#facc15] border-2 border-black shadow-[5px_5px_0px_#000] space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-black text-xs uppercase text-black">
                    📄 {currentLang === 'es' ? 'DESCARGAR CV (4 FORMATOS)' : 'DOWNLOAD CV (4 FORMATS)'}
                  </span>
                  {onOpenCvSelector && (
                    <button
                      type="button"
                      onClick={() => onOpenCvSelector(currentLang, '1p')}
                      className="px-2 py-0.5 bg-black text-white font-mono font-bold text-[10px] uppercase cursor-pointer"
                    >
                      {currentLang === 'es' ? 'Visor PDF ➔' : 'Preview ➔'}
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {CV_VARIANTS.map((cv) => (
                    <a
                      key={cv.id}
                      href={resolveAsset(cv.path)}
                      download={cv.filename}
                      className="p-2 bg-white hover:bg-black text-black hover:text-[#facc15] border-2 border-black shadow-[2px_2px_0px_#000] transition-colors flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between font-mono font-black text-[10px]">
                        <span>
                          {cv.lang === 'en' ? '🇬🇧 EN' : '🇪🇸 ES'} • {cv.length.toUpperCase()}
                        </span>
                        <Download className="w-3 h-3" />
                      </div>
                      <div className="font-mono text-[9.5px] font-bold mt-0.5 truncate">
                        {cv.length === '1p'
                          ? currentLang === 'es'
                            ? '1 Pág. Ejecutivo'
                            : '1-Page Executive'
                          : currentLang === 'es'
                            ? '2 Págs. Completo'
                            : '2-Pages Full CV'}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): 3 Numbered Mandate Slats */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
              {mandates.map((m) => (
                <div
                  key={m.num}
                  className="p-4 rounded-xl bg-white border-2 border-black shadow-[5px_5px_0px_#000] space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-black text-[#facc15] font-mono font-black text-xs">
                        {m.num}
                      </span>
                      <h3 className="font-mono font-black text-xs sm:text-sm uppercase text-black">
                        {currentLang === 'es' ? m.titleEs : m.titleEn}
                      </h3>
                    </div>
                    <div className="text-black">{m.icon}</div>
                  </div>
                  <p className="text-xs text-neutral-800 leading-relaxed font-sans">
                    {currentLang === 'es' ? m.descEs : m.descEn}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {m.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-[#f4efe4] border border-black font-mono font-bold text-[10px] text-black"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          OPTION 3: EXECUTIVE MINIMAL (NO-SCROLL BUSINESS CARD)
         ===================================================================== */}
      {aesthetic === 'minimal' && (
        <div
          className="relative w-full max-w-2xl bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.55)] overflow-hidden p-6 sm:p-8 space-y-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Identity Row */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={resolveAsset('/profile.jpg')}
                alt="Daniel Santander Urrutia"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border border-slate-200 shadow-sm shrink-0"
              />
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-[10px] font-bold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  {currentLang === 'es'
                    ? 'Disponible • Hannover (UE) & Chile'
                    : 'Available • Hannover (EU) & Chile'}
                </div>
                <h2 className="font-['Newsreader',Georgia,serif] font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
                  Daniel Santander Urrutia
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  {currentLang === 'es'
                    ? 'Geofísico (U. de Chile) · Doble M.Sc. Gestión & Protección Ambiental (CAU Kiel & AMU Poznań)'
                    : 'Geophysicist (U. of Chile) · Double M.Sc. Environmental Management & Protection (CAU Kiel & AMU Poznań)'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 3 Ultra-Concise Value Rows */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100">
            {mandates.map((m) => (
              <div key={m.num} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-mono font-bold text-xs">
                  <span className="shrink-0">{m.icon}</span>
                  <span className="truncate">
                    {currentLang === 'es'
                      ? m.titleEs.split(/[,&]/)[0].trim()
                      : m.titleEn.split(/[,&]/)[0].trim()}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  {m.tags.join(' · ')}
                </p>
              </div>
            ))}
          </div>

          {/* Direct Contact Bar */}
          <div className="p-3.5 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-amber-300" />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-slate-400">
                  {currentLang === 'es' ? 'Contacto Directo' : 'Direct Email'}
                </div>
                <div className="font-mono font-bold text-xs sm:text-sm select-all">{email}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'OK' : currentLang === 'es' ? 'Copiar' : 'Copy'}</span>
              </button>
              <a
                href={`mailto:${email}?subject=Contacto%20Profesional%20-%20Daniel%20Santander`}
                className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{currentLang === 'es' ? 'Escribir' : 'Email'}</span>
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-[#0a66c2] text-white transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/25 text-white transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Compact 4-CV Selector Strip */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-slate-700" />
                {currentLang === 'es'
                  ? 'Descargar Currículum Vitae (Inglés / Español • 1 o 2 Páginas)'
                  : 'Download Curriculum Vitae (English / Spanish • 1 or 2 Pages)'}
              </span>
              {onOpenCvSelector && (
                <button
                  type="button"
                  onClick={() => onOpenCvSelector(currentLang, '1p')}
                  className="font-mono text-[11px] font-bold text-emerald-700 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{currentLang === 'es' ? 'Vista previa' : 'Preview'}</span>
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {CV_VARIANTS.map((cv) => (
                <a
                  key={cv.id}
                  href={resolveAsset(cv.path)}
                  download={cv.filename}
                  className="py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200 transition-colors flex items-center justify-between font-mono text-[11px] font-bold"
                >
                  <span>
                    {cv.lang === 'en' ? '🇬🇧 EN' : '🇪🇸 ES'} · {cv.length.toUpperCase()}
                  </span>
                  <Download className="w-3.5 h-3.5 opacity-70" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
