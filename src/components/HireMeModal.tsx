import React, { useState } from 'react';
import {
  X,
  Mail,
  Copy,
  Check,
  Send,
  Download,
  Eye,
  MapPin,
  Languages,
  Microscope,
  Scale,
  Radio,
  Info
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';
import { CV_VARIANTS } from './CvSelectorModal';

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
}

export const HireMeModal: React.FC<HireMeModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onOpenCvSelector
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

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
      accentBg: 'bg-blue-50 text-blue-700 border-blue-200',
      tagBg: 'bg-blue-50/80 text-blue-900 border-blue-200/80',
      icon: <Microscope className="w-4 h-4 text-blue-600" />,
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
      accentBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      tagBg: 'bg-emerald-50/80 text-emerald-900 border-emerald-200/80',
      icon: <Scale className="w-4 h-4 text-emerald-600" />,
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
      accentBg: 'bg-amber-50 text-amber-800 border-amber-200',
      tagBg: 'bg-amber-50/80 text-amber-950 border-amber-200/80',
      icon: <Radio className="w-4 h-4 text-amber-600" />,
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
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white text-slate-900 border-2 border-slate-900 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* High-Contrast Slate Masthead (Option 3 Contrast + Option 1 Editorial Hierarchy) */}
        <div className="px-6 py-3 bg-[#0f172a] text-white border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-mono text-[10px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {currentLang === 'es'
                ? 'DISPONIBLE • HANNOVER (UE) & CHILE'
                : 'AVAILABLE • HANNOVER (EU) & CHILE'}
            </span>
            <span className="font-mono text-[11px] text-slate-300 uppercase tracking-widest hidden sm:inline">
              {currentLang === 'es'
                ? 'EXPEDIENTE DE CONTRATACIÓN & CONSULTORÍA'
                : 'EXECUTIVE BRIEF & CONSULTING MANDATE'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-red-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title={currentLang === 'es' ? 'Cerrar' : 'Close'}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {/* Top Editorial Profile + High-Contrast Dark Contact Bar */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <img
                src={resolveAsset('/profile.jpg')}
                alt="Daniel Santander Urrutia"
                className="w-16 h-20 sm:w-20 sm:h-24 object-cover object-top rounded-xl border-2 border-slate-900 shadow-sm shrink-0"
              />
              <div className="space-y-1">
                <div className="font-mono text-[10px] uppercase tracking-widest text-emerald-700 font-bold">
                  U. DE CHILE (B.SC.) • CAU KIEL (M.SC.) • AMU POZNAŃ (M.SC.)
                </div>
                <h2 className="font-['Newsreader',Georgia,serif] font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-none">
                  Daniel Santander Urrutia
                </h2>
                <p className="font-['Newsreader',Georgia,serif] italic text-sm sm:text-base text-slate-700">
                  {currentLang === 'es'
                    ? '“Puente entre la ciencia de la Tierra, la decisión política y las personas.”'
                    : '“Bridging Earth science, policy decisions, and people.”'}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-0.5 font-mono text-[10.5px] text-slate-600">
                  <span className="inline-flex items-center gap-1 font-semibold text-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    Hannover, DE &amp; Santiago, CL
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Languages className="w-3.5 h-3.5 text-blue-600" />
                    ES (Nativo) · EN (C1) · DE (B1)
                  </span>
                </div>
              </div>
            </div>

            {/* High-Contrast Dark Contact Box from Option 3 */}
            <div className="w-full lg:w-auto p-3.5 rounded-xl bg-[#0f172a] text-white border border-slate-800 flex flex-col gap-2 shrink-0 shadow-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#facc15]" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-300">
                  {currentLang === 'es' ? 'CONTACTO DIRECTO' : 'DIRECT INQUIRIES'}
                </span>
              </div>
              <div className="font-mono font-bold text-xs text-white select-all">
                {email}
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-[11px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? (currentLang === 'es' ? 'Copiado' : 'Copied') : (currentLang === 'es' ? 'Copiar' : 'Copy')}</span>
                </button>
                <a
                  href={`mailto:${email}?subject=Contacto%20Profesional%20-%20Daniel%20Santander`}
                  className="flex-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-[11px] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{currentLang === 'es' ? 'Escribir' : 'Email'}</span>
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-[#0a66c2] text-white transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/25 text-white transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* 3 Editorial Columns with Crisp Color Contrast */}
          <div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
              {currentLang === 'es'
                ? 'ÁREAS DE PRÁCTICA, INVESTIGACIÓN APLICADA & CONSULTORÍA'
                : 'AREAS OF PRACTICE, APPLIED RESEARCH & CONSULTING'}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {mandates.map((m) => (
                <div
                  key={m.num}
                  className="p-3.5 rounded-xl bg-slate-50/75 border border-slate-200 hover:border-slate-400 transition-colors flex flex-col justify-between space-y-2.5"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-1.5">
                      <span
                        className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold border ${m.accentBg}`}
                      >
                        {m.num}
                      </span>
                      {m.icon}
                    </div>
                    <h3 className="font-['Newsreader',Georgia,serif] font-bold text-base text-slate-900 leading-snug">
                      {currentLang === 'es' ? m.titleEs : m.titleEn}
                    </h3>
                    <p className="text-[11.5px] text-slate-600 leading-relaxed">
                      {currentLang === 'es' ? m.descEs : m.descEn}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {m.tags.map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-0.5 rounded border font-mono text-[9px] font-semibold ${m.tagBg}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4-CV Repository Matrix + Tailored CV Note */}
          <div className="p-4 rounded-xl bg-slate-100/90 border border-slate-200 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h4 className="font-['Newsreader',Georgia,serif] font-bold text-base sm:text-lg text-slate-900">
                  {currentLang === 'es'
                    ? 'Descarga de Currículum Vitae por Formato e Idioma'
                    : 'Curriculum Vitae Repository by Format & Language'}
                </h4>
                <p className="text-[11px] text-slate-600 leading-snug mt-0.5 flex items-start sm:items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5 sm:mt-0" />
                  <span>
                    {currentLang === 'es'
                      ? 'Los CVs son referencias generales ya que cada currículum se adapta a cada puesto (habilidades, cursos y formación). Para un perfil específico, escríbeme a danisantander.urrutia@gmail.com.'
                      : 'These CVs serve as general references, as each resume is tailored to each role (selected skills, coursework & training). For a role-specific CV, contact danisantander.urrutia@gmail.com.'}
                  </span>
                </p>
              </div>
              {onOpenCvSelector && (
                <button
                  type="button"
                  onClick={() => onOpenCvSelector(currentLang, '1p')}
                  className="px-3 py-1.5 rounded-lg bg-[#0f172a] hover:bg-emerald-700 text-white font-mono text-[10.5px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  <Eye className="w-3.5 h-3.5 text-[#facc15]" />
                  <span>{currentLang === 'es' ? 'Abrir Selector & Visor CV' : 'Open CV Selector & Preview'}</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {CV_VARIANTS.map((cv) => (
                <a
                  key={cv.id}
                  href={resolveAsset(cv.path)}
                  download={cv.filename}
                  className="p-2.5 rounded-xl bg-white hover:bg-[#0f172a] text-slate-900 hover:text-white border border-slate-200 hover:border-[#0f172a] shadow-2xs transition-all group flex flex-col justify-between gap-1"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-[9.5px] font-bold text-emerald-700 group-hover:text-[#facc15]">
                      <span>{currentLang === 'es' ? cv.badgeEs : cv.badgeEn}</span>
                      <Download className="w-3.5 h-3.5" />
                    </div>
                    <div className="font-['Newsreader',Georgia,serif] font-bold text-xs sm:text-sm mt-0.5">
                      {currentLang === 'es' ? cv.titleEs : cv.titleEn}
                    </div>
                  </div>
                  <div className="font-mono text-[9px] text-slate-500 group-hover:text-slate-300">
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
    </div>
  );
};
