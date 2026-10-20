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
  Briefcase
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

  if (!isOpen) return null;

  const activeVariant =
    CV_VARIANTS.find((v) => v.lang === selectedLang && v.length === selectedLength) || CV_VARIANTS[0];

  const resolvedPdfUrl = resolveAsset(activeVariant.path);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#faf8f4] text-[#1c1917] border-[3px] border-black rounded-2xl shadow-[10px_10px_0px_#facc15] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-5 py-3.5 bg-[#1c1917] text-[#faf8f4] border-b-2 border-black flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="px-2 py-0.5 bg-[#facc15] text-black font-mono font-black text-[10px] uppercase border border-black">
              CV REPOSITORY
            </span>
            <h2 className="font-mono font-black text-xs sm:text-sm uppercase tracking-wider text-white">
              {currentLang === 'es'
                ? 'SELECTOR DE CURRÍCULUM VITAE (INGLÉS / ESPAÑOL • 1 O 2 PÁGINAS)'
                : 'CURRICULUM VITAE SELECTOR (ENGLISH / SPANISH • 1 OR 2 PAGES)'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-red-600 text-neutral-300 hover:text-white transition-all border border-white/20 cursor-pointer"
            title={currentLang === 'es' ? 'Cerrar' : 'Close'}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {/* Step 1 & Step 2 Filters + Quick 4-Card Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Language Switcher */}
            <div className="p-3.5 rounded-xl bg-[#efe9dd] border-2 border-black shadow-[3px_3px_0px_#000]">
              <div className="font-mono font-black text-[10px] uppercase tracking-wider text-neutral-600 mb-2">
                {currentLang === 'es' ? '1. SELECCIONA IDIOMA DEL CV' : '1. SELECT CV LANGUAGE'}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedLang('en')}
                  className={`py-2 px-3 rounded-lg font-mono font-black text-xs uppercase border-2 transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    selectedLang === 'en'
                      ? 'bg-[#1c1917] text-[#facc15] border-black shadow-[2px_2px_0px_#facc15]'
                      : 'bg-white text-neutral-700 border-black/30 hover:border-black'
                  }`}
                >
                  <span>🇬🇧</span>
                  <span>English (EN)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLang('es')}
                  className={`py-2 px-3 rounded-lg font-mono font-black text-xs uppercase border-2 transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    selectedLang === 'es'
                      ? 'bg-[#1c1917] text-[#facc15] border-black shadow-[2px_2px_0px_#facc15]'
                      : 'bg-white text-neutral-700 border-black/30 hover:border-black'
                  }`}
                >
                  <span>🇪🇸</span>
                  <span>Español (ES)</span>
                </button>
              </div>
            </div>

            {/* Length Switcher */}
            <div className="p-3.5 rounded-xl bg-[#efe9dd] border-2 border-black shadow-[3px_3px_0px_#000]">
              <div className="font-mono font-black text-[10px] uppercase tracking-wider text-neutral-600 mb-2">
                {currentLang === 'es' ? '2. SELECCIONA EXTENSIÓN / FORMATO' : '2. SELECT LENGTH / FORMAT'}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedLength('1p')}
                  className={`py-2 px-3 rounded-lg font-mono font-black text-xs uppercase border-2 transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    selectedLength === '1p'
                      ? 'bg-[#1f4e37] text-white border-black shadow-[2px_2px_0px_#000]'
                      : 'bg-white text-neutral-700 border-black/30 hover:border-black'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{currentLang === 'es' ? '1 Página (Ejecutivo)' : '1-Page (Executive)'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLength('2p')}
                  className={`py-2 px-3 rounded-lg font-mono font-black text-xs uppercase border-2 transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    selectedLength === '2p'
                      ? 'bg-[#1f4e37] text-white border-black shadow-[2px_2px_0px_#000]'
                      : 'bg-white text-neutral-700 border-black/30 hover:border-black'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{currentLang === 'es' ? '2 Páginas (Completo)' : '2-Pages (Full CV)'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Selected Variant Featured Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-black shadow-[6px_6px_0px_#1c1917] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
            <div className="space-y-2.5 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#facc15] text-black font-mono font-black text-[11px] uppercase border-2 border-black shadow-[2px_2px_0px_#000]">
                  {currentLang === 'es' ? activeVariant.badgeEs : activeVariant.badgeEn}
                </span>
                <span className="font-mono text-xs text-neutral-500">
                  {activeVariant.filename}
                </span>
              </div>

              <h3 className="font-['Newsreader',Georgia,serif] font-bold text-2xl sm:text-3xl text-[#1c1917] leading-tight">
                {currentLang === 'es' ? activeVariant.titleEs : activeVariant.titleEn}
              </h3>

              <p className="font-mono font-bold text-xs text-[#1f4e37]">
                {currentLang === 'es' ? activeVariant.subtitleEs : activeVariant.subtitleEn}
              </p>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {currentLang === 'es' ? activeVariant.descEs : activeVariant.descEn}
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-1.5">
                <span className="font-mono font-bold text-[10px] uppercase text-neutral-500 mr-1">
                  {currentLang === 'es' ? 'Ideal para:' : 'Recommended for:'}
                </span>
                {(currentLang === 'es' ? activeVariant.recommendedForEs : activeVariant.recommendedForEn).map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#f3efe6] border border-[#d6cebf] font-mono text-[10px] font-bold text-[#1c1917]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#1f4e37]" />
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Action Buttons for Active Variant */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full lg:w-56 shrink-0">
              <a
                href={resolvedPdfUrl}
                download={activeVariant.filename}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#facc15] hover:bg-amber-300 text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_#000] active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{currentLang === 'es' ? 'Descargar PDF' : 'Download PDF'}</span>
              </a>

              <button
                type="button"
                onClick={() => setShowPreview((prev) => !prev)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#1c1917] hover:bg-neutral-800 text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_#000] transition-all flex items-center justify-center gap-2 cursor-pointer"
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
                className="w-full py-2 px-3 rounded-xl bg-[#f3efe6] hover:bg-[#e6dfd1] text-neutral-800 font-mono font-bold text-[11px] uppercase border border-black/40 transition-all flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{currentLang === 'es' ? 'Abrir en pestaña nueva' : 'Open in new tab'}</span>
              </a>
            </div>
          </div>

          {/* Optional Inline PDF Viewer */}
          {showPreview && (
            <div className="rounded-xl overflow-hidden border-2 border-black bg-neutral-900 shadow-[4px_4px_0px_#000]">
              <div className="px-4 py-2 bg-black text-white font-mono text-[11px] flex items-center justify-between">
                <span>
                  📄 {activeVariant.filename}
                </span>
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
            <div className="font-mono font-black text-[10px] uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
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
                    className={`p-3 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                      isSelected
                        ? 'bg-[#1c1917] text-white border-black shadow-[3px_3px_0px_#facc15]'
                        : 'bg-white hover:bg-[#f3efe6] text-[#1c1917] border-black/30 hover:border-black'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span
                          className={`font-mono font-black text-[10px] uppercase px-1.5 py-0.5 rounded ${
                            isSelected
                              ? 'bg-[#facc15] text-black'
                              : 'bg-[#efe9dd] text-[#1c1917]'
                          }`}
                        >
                          {variant.lang.toUpperCase()} • {variant.length.toUpperCase()}
                        </span>
                        <FileText className="w-3.5 h-3.5 opacity-70" />
                      </div>
                      <div className="font-mono font-bold text-xs mt-1.5 leading-snug">
                        {currentLang === 'es' ? variant.titleEs : variant.titleEn}
                      </div>
                    </div>

                    <a
                      href={resolveAsset(variant.path)}
                      download={variant.filename}
                      onClick={(e) => e.stopPropagation()}
                      className={`mt-1 py-1.5 px-2.5 rounded-lg font-mono font-black text-[10px] uppercase flex items-center justify-center gap-1.5 border transition-all ${
                        isSelected
                          ? 'bg-[#facc15] text-black border-black hover:bg-amber-300'
                          : 'bg-[#faf8f4] text-[#1c1917] border-black/30 hover:bg-black hover:text-white'
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
