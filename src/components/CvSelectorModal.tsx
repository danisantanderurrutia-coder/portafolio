import React, { useState } from 'react';
import {
  X,
  Download,
  FileText,
  Eye,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Briefcase,
  Info,
  Mail,
  Copy,
  Check,
  Send
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';

export type CvLength = '1p' | '2p';

export interface CvVariant {
  id: string;
  lang: Language;
  length: CvLength;
  filename: string;
  path: string;
  badgeEs: string;
  badgeEn: string;
  titleEs: string;
  titleEn: string;
  subtitleEs: string;
  subtitleEn: string;
  descEs: string;
  descEn: string;
  recommendedForEs: string[];
  recommendedForEn: string[];
}

export const CV_VARIANTS: CvVariant[] = [
  {
    id: 'en-1p',
    lang: 'en',
    length: '1p',
    filename: 'Daniel_Santander_CV_EN_1p.pdf',
    path: '/cv/Daniel_Santander_CV_EN_1p.pdf',
    badgeEs: '🇬🇧 INGLÉS • 1 PÁGINA',
    badgeEn: '🇬🇧 ENGLISH • 1 PAGE',
    titleEs: 'Executive Resume (1 Página)',
    titleEn: 'Executive Resume (1-Page)',
    subtitleEs: 'Síntesis de alto impacto para lectura en 30 segundos',
    subtitleEn: 'High-impact synthesis designed for 30-second screening',
    descEs:
      'Formato compacto internacional con métricas clave (U. de Chile, CAU Kiel, AMU Poznań), stack técnico (Python, R, QGIS, Eddy/Cámaras GEI, ERT/VES) y liderazgo estratégico.',
    descEn:
      'Compact international format highlighting core metrics (U. of Chile, CAU Kiel, AMU Poznań), technical stack (Python, R, QGIS, GHG Fluxes, ERT/VES), and strategic leadership.',
    recommendedForEs: ['Empresas & Consultoras UE', 'Primer filtro RR.HH.', 'Networking rápido'],
    recommendedForEn: ['EU Industry & Consultancies', 'Fast HR Screening', 'Direct Networking']
  },
  {
    id: 'en-2p',
    lang: 'en',
    length: '2p',
    filename: 'Daniel_Santander_CV_EN_2p.pdf',
    path: '/cv/Daniel_Santander_CV_EN_2p.pdf',
    badgeEs: '🇬🇧 INGLÉS • 2 PÁGINAS',
    badgeEn: '🇬🇧 ENGLISH • 2 PAGES',
    titleEs: 'Full Technical & Policy CV (2 Páginas)',
    titleEn: 'Full Technical & Policy CV (2-Pages)',
    subtitleEs: 'Desglose completo de investigación, tesis, campañas y gobernanza',
    subtitleEn: 'Comprehensive breakdown of research, theses, field campaigns & policy',
    descEs:
      'Incluye detalle metodológico de las 3 tesis (Cuenca del Maule, Turbera Wallener Au en Kiel, Lagos de Poznań), desarrollo de Wetland Monitor 3D, cumbres internacionales y publicaciones.',
    descEn:
      'Includes full methodological breakdown of all 3 theses (Maule Basin, Wallener Au Peatland in Kiel, Poznań Lakes), Wetland Monitor 3D Digital Twin, international summits, and publications.',
    recommendedForEs: ['Centros de Investigación / Doctorado', 'Organismos Internacionales (ONU/UE)', 'Dirección Técnica'],
    recommendedForEn: ['Research Institutes / PhD', 'International Orgs (UN/EU)', 'Senior Technical Roles']
  },
  {
    id: 'es-1p',
    lang: 'es',
    length: '1p',
    filename: 'Daniel_Santander_CV_ES_1p.pdf',
    path: '/cv/Daniel_Santander_CV_ES_1p.pdf',
    badgeEs: '🇪🇸 ESPAÑOL • 1 PÁGINA',
    badgeEn: '🇪🇸 SPANISH • 1 PAGE',
    titleEs: 'CV Ejecutivo (1 Página)',
    titleEn: 'Spanish Executive CV (1-Page)',
    subtitleEs: 'Perfil directo para industria, consultoría y sector público hispanohablante',
    subtitleEn: 'Direct executive profile for Spanish-speaking industry & public sector',
    descEs:
      'Resumen ejecutivo de una plana enfocado en resultados cuantitativos en hidrogeofísica, gestión ambiental europea, ciencia de datos e incidencia climática.',
    descEn:
      'One-page Spanish executive summary focused on quantitative outcomes in hydrogeophysics, European environmental management, data science, and climate policy.',
    recommendedForEs: ['Consultoría Ambiental (Chile/España)', 'Sector Privado & ESG', 'Postulación Ejecutiva'],
    recommendedForEn: ['Environmental Consulting (Chile/Spain)', 'Private Sector & ESG', 'Executive Applications']
  },
  {
    id: 'es-2p',
    lang: 'es',
    length: '2p',
    filename: 'Daniel_Santander_CV_ES_2p.pdf',
    path: '/cv/Daniel_Santander_CV_ES_2p.pdf',
    badgeEs: '🇪🇸 ESPAÑOL • 2 PÁGINAS',
    badgeEn: '🇪🇸 SPANISH • 2 PAGES',
    titleEs: 'CV Extendido Científico & Gestión (2 Páginas)',
    titleEn: 'Spanish Full Technical & Policy CV (2-Pages)',
    subtitleEs: 'Trayectoria académica, técnica, legislativa y comunicacional detallada',
    subtitleEn: 'Detailed academic, technical, legislative, and communications trajectory',
    descEs:
      'Expediente completo de 2 páginas con experiencia en terreno, modelación numérica, asesoría legislativa en el Congreso y dirección de campañas (+700k alcance).',
    descEn:
      'Complete 2-page Spanish curriculum covering field instrumentation, numerical modeling, parliamentary policy advisory, and large-scale campaign direction (+700k reach).',
    recommendedForEs: ['Ministerios & Sector Público', 'ONGs & Fundaciones', 'Academia & Proyectos I+D'],
    recommendedForEn: ['Ministries & Public Agencies', 'NGOs & Foundations', 'Academia & R&D Projects']
  }
];

interface CvSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialCvLang?: Language;
  initialCvLength?: CvLength;
}

export const CvSelectorModal: React.FC<CvSelectorModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialCvLang,
  initialCvLength = '1p'
}) => {
  const [selectedLang, setSelectedLang] = useState<Language>(initialCvLang || currentLang);
  const [selectedLength, setSelectedLength] = useState<CvLength>(initialCvLength);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  if (!isOpen) return null;

  const email = 'danisantander.urrutia@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const activeVariant =
    CV_VARIANTS.find((v) => v.lang === selectedLang && v.length === selectedLength) || CV_VARIANTS[0];

  const resolvedPdfUrl = resolveAsset(activeVariant.path);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white text-slate-900 border-2 border-slate-900 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-5 py-3.5 bg-[#0f172a] text-white border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="px-2 py-0.5 bg-[#facc15] text-slate-950 font-mono font-black text-[10px] uppercase rounded">
              CV REPOSITORY
            </span>
            <h2 className="font-mono font-bold text-xs sm:text-sm uppercase tracking-wider text-white">
              {currentLang === 'es'
                ? 'SELECTOR DE CURRÍCULUM VITAE (INGLÉS / ESPAÑOL • 1 O 2 PÁGINAS)'
                : 'CURRICULUM VITAE SELECTOR (ENGLISH / SPANISH • 1 OR 2 PAGES)'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-red-600 text-slate-300 hover:text-white transition-all cursor-pointer"
            title={currentLang === 'es' ? 'Cerrar' : 'Close'}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {/* IMPORTANT TAILORED CV NOTICE BANNER */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#0f172a] text-white border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-3.5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-400/15 border border-amber-400/40 text-[#facc15] flex items-center justify-center shrink-0 mt-0.5">
                <Info className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="font-mono font-bold text-[10.5px] uppercase tracking-wider text-[#facc15]">
                  {currentLang === 'es'
                    ? 'NOTA IMPORTANTE SOBRE PERSONALIZACIÓN DE CV'
                    : 'IMPORTANT NOTE ON TAILORED CVs'}
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {currentLang === 'es' ? (
                    <>
                      Los CVs aquí disponibles son <strong className="text-white">referencias generales</strong>, ya que cada currículum es preparado específicamente para cada puesto o proyecto con el fin de ajustar las habilidades, cursos y formación seleccionada. Si busca algo más detallado o específico, por favor comuníquese conmigo a{' '}
                      <a
                        href={`mailto:${email}?subject=Solicitud%20de%20CV%20Espec%C3%ADfico%20-%20Daniel%20Santander`}
                        className="text-emerald-400 font-mono font-bold underline hover:text-emerald-300"
                      >
                        {email}
                      </a>
                      .
                    </>
                  ) : (
                    <>
                      These CVs serve as <strong className="text-white">general baseline references</strong>, as each resume is specifically tailored to each role or project to align selected skills, coursework, and academic training. If you are looking for a more detailed or role-specific breakdown, please contact me at{' '}
                      <a
                        href={`mailto:${email}?subject=Tailored%20CV%20Request%20-%20Daniel%20Santander`}
                        className="text-emerald-400 font-mono font-bold underline hover:text-emerald-300"
                      >
                        {email}
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-[10.5px] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? (currentLang === 'es' ? 'Copiado' : 'Copied') : (currentLang === 'es' ? 'Copiar correo' : 'Copy email')}</span>
              </button>
              <a
                href={`mailto:${email}?subject=Solicitud%20de%20CV%20Espec%C3%ADfico%20-%20Daniel%20Santander`}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-[10.5px] flex items-center gap-1.5 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{currentLang === 'es' ? 'Solicitar CV' : 'Request CV'}</span>
              </a>
            </div>
          </div>

          {/* Step 1 & Step 2 Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* Language Switcher */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-mono font-bold text-[10px] uppercase tracking-wider text-slate-500 mb-2">
                {currentLang === 'es' ? '1. SELECCIONA IDIOMA DEL CV' : '1. SELECT CV LANGUAGE'}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedLang('en')}
                  className={`py-2 px-3 rounded-lg font-mono font-bold text-xs uppercase border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    selectedLang === 'en'
                      ? 'bg-[#0f172a] text-[#facc15] border-[#0f172a] shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <span>🇬🇧</span>
                  <span>English (EN)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLang('es')}
                  className={`py-2 px-3 rounded-lg font-mono font-bold text-xs uppercase border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    selectedLang === 'es'
                      ? 'bg-[#0f172a] text-[#facc15] border-[#0f172a] shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <span>🇪🇸</span>
                  <span>Español (ES)</span>
                </button>
              </div>
            </div>

            {/* Length Switcher */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-mono font-bold text-[10px] uppercase tracking-wider text-slate-500 mb-2">
                {currentLang === 'es' ? '2. SELECCIONA EXTENSIÓN / FORMATO' : '2. SELECT LENGTH / FORMAT'}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedLength('1p')}
                  className={`py-2 px-3 rounded-lg font-mono font-bold text-xs uppercase border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    selectedLength === '1p'
                      ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{currentLang === 'es' ? '1 Página (Ejecutivo)' : '1-Page (Executive)'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLength('2p')}
                  className={`py-2 px-3 rounded-lg font-mono font-bold text-xs uppercase border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    selectedLength === '2p'
                      ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{currentLang === 'es' ? '2 Páginas (Completo)' : '2-Pages (Full CV)'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Selected Variant Featured Card */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border-2 border-slate-900 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#0f172a] text-[#facc15] font-mono font-bold text-[10.5px] uppercase rounded">
                  {currentLang === 'es' ? activeVariant.badgeEs : activeVariant.badgeEn}
                </span>
                <span className="font-mono text-xs text-slate-500">
                  {activeVariant.filename}
                </span>
              </div>

              <h3 className="font-['Newsreader',Georgia,serif] font-bold text-2xl sm:text-3xl text-slate-900 leading-tight">
                {currentLang === 'es' ? activeVariant.titleEs : activeVariant.titleEn}
              </h3>

              <p className="font-mono font-bold text-xs text-emerald-700">
                {currentLang === 'es' ? activeVariant.subtitleEs : activeVariant.subtitleEn}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentLang === 'es' ? activeVariant.descEs : activeVariant.descEn}
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-1.5">
                <span className="font-mono font-bold text-[10px] uppercase text-slate-500 mr-1">
                  {currentLang === 'es' ? 'Ideal para:' : 'Recommended for:'}
                </span>
                {(currentLang === 'es' ? activeVariant.recommendedForEs : activeVariant.recommendedForEn).map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-slate-200 font-mono text-[10px] font-bold text-slate-800"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Action Buttons for Active Variant */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2 w-full lg:w-56 shrink-0">
              <a
                href={resolvedPdfUrl}
                download={activeVariant.filename}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{currentLang === 'es' ? 'Descargar PDF' : 'Download PDF'}</span>
              </a>

              <button
                type="button"
                onClick={() => setShowPreview((prev) => !prev)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0f172a] hover:bg-slate-800 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#facc15]" />
                <span>
                  {showPreview
                    ? currentLang === 'es'
                      ? 'Ocultar Vista Previa'
                      : 'Hide Preview'
                    : currentLang === 'es'
                      ? 'Vista Previa aquí'
                      : 'Inline Preview'}
                </span>
              </button>

              <a
                href={resolvedPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-mono font-bold text-[11px] uppercase border border-slate-200 transition-all flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{currentLang === 'es' ? 'Abrir en pestaña nueva' : 'Open in new tab'}</span>
              </a>
            </div>
          </div>

          {/* Optional Inline PDF Viewer */}
          {showPreview && (
            <div className="rounded-xl overflow-hidden border-2 border-slate-900 bg-slate-900">
              <div className="px-4 py-2 bg-[#0f172a] text-white font-mono text-[11px] flex items-center justify-between">
                <span>📄 {activeVariant.filename}</span>
                <span className="text-[#facc15]">
                  {currentLang === 'es' ? 'Visor PDF Integrado' : 'Embedded PDF Viewer'}
                </span>
              </div>
              <iframe
                src={resolvedPdfUrl}
                title={activeVariant.filename}
                className="w-full h-[460px] bg-white"
              />
            </div>
          )}

          {/* Direct 4-Option Quick Grid */}
          <div className="space-y-2">
            <div className="font-mono font-bold text-[10px] uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>
                {currentLang === 'es'
                  ? 'ACCESO DIRECTO A LAS 4 VERSIONES DISPONIBLES:'
                  : 'DIRECT ACCESS TO ALL 4 AVAILABLE VERSIONS:'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {CV_VARIANTS.map((variant) => {
                const isSelected =
                  variant.lang === selectedLang && variant.length === selectedLength;
                return (
                  <div
                    key={variant.id}
                    onClick={() => {
                      setSelectedLang(variant.lang);
                      setSelectedLength(variant.length);
                    }}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                      isSelected
                        ? 'bg-[#0f172a] text-white border-[#0f172a] shadow-md'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border-slate-200'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span
                          className={`font-mono font-bold text-[10px] uppercase px-1.5 py-0.5 rounded ${
                            isSelected
                              ? 'bg-[#facc15] text-slate-950'
                              : 'bg-white text-slate-700 border border-slate-200'
                          }`}
                        >
                          {variant.lang.toUpperCase()} • {variant.length.toUpperCase()}
                        </span>
                        <FileText className="w-3.5 h-3.5 opacity-70" />
                      </div>
                      <div className="font-['Newsreader',Georgia,serif] font-bold text-sm mt-1.5 leading-snug">
                        {currentLang === 'es' ? variant.titleEs : variant.titleEn}
                      </div>
                    </div>

                    <a
                      href={resolveAsset(variant.path)}
                      download={variant.filename}
                      onClick={(e) => e.stopPropagation()}
                      className={`mt-1 py-1.5 px-2.5 rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1.5 border transition-all ${
                        isSelected
                          ? 'bg-emerald-600 text-white border-emerald-500 hover:bg-emerald-500'
                          : 'bg-white text-slate-800 border-slate-200 hover:bg-[#0f172a] hover:text-white'
                      }`}
                    >
                      <Download className="w-3 h-3" />
                      <span>{currentLang === 'es' ? 'Descargar' : 'Download'}</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
