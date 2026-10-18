import React, { useState } from 'react';
import { 
  Globe, 
  ArrowRight, 
  ArrowLeft,
  FileText, 
  Sparkles, 
  Download, 
  Briefcase, 
  Terminal, 
  Palette,
  Users,
  Microscope,
  BookOpen,
  GraduationCap,
  Award,
  Scale
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';
import { GeofrecuenciaLogo } from './GeofrecuenciaLogo';

interface PunkMainMenuProps {
  currentLang: Language;
  onToggleLanguage: () => void;
  onSelectSciencePlanet: () => void;
  onSelectSummits: () => void;
  onSelectPolicy?: () => void;
  onSelectCommsArts: () => void;
  onSelectGrassroots: () => void;
  onSelectProjects: () => void;
  onSelectPublications: () => void;
  onSelectSkills: () => void;
  onSelectTitles: () => void;
  onSelectCertifications?: () => void;
  onSelectScienceDossier: () => void;
  onOpenHireMe?: () => void;
  onOpenSkills?: () => void;
  onOpenPublications?: () => void;
  onOpenTitles?: () => void;
  onOpenArtDirector?: () => void;
}

interface WoodenSignSlatProps {
  direction: 'left' | 'right';
  bgColor: string;
  textColor?: string;
  rotationClass: string;
  offsetClass?: string;
  icon: React.ReactNode;
  label: string;
  extraElement?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  download?: string;
  title?: string;
  isSpecial?: boolean;
}

const WoodenSignSlat: React.FC<WoodenSignSlatProps> = ({
  direction,
  bgColor,
  textColor = '#ffffff',
  rotationClass,
  offsetClass = '',
  icon,
  label,
  extraElement,
  onClick,
  href,
  download,
  title,
  isSpecial
}) => {
  // Arrow paths with full comic stroke and no clipped borders
  // Right arrow: flat left end, pointy chevron on right
  // Left arrow: pointy chevron on left, flat right end
  const pathData = direction === 'right'
    ? "M 2.5 2.5 L 198 2.5 L 217.5 19 L 198 35.5 L 2.5 35.5 Z"
    : "M 217.5 2.5 L 22 2.5 L 2.5 19 L 22 35.5 L 217.5 35.5 Z";

  const highlightPath = direction === 'right'
    ? "M 4 4.5 L 196 4.5 L 213 19"
    : "M 216 4.5 L 24 4.5 L 6 19";

  const isLightBg = textColor === '#000000';

  const content = (
    <div
      className={`group relative w-full h-[36px] sm:h-[39px] flex items-center justify-between select-none cursor-pointer transition-all duration-150 active:scale-95 hover:scale-[1.03] hover:z-30 ${
        direction === 'right' ? 'pl-3.5 sm:pl-4 pr-7 sm:pr-8' : 'pl-7 sm:pl-8 pr-3.5 sm:pr-4'
      }`}
      style={{
        filter: isSpecial 
          ? 'drop-shadow(3.5px 4px 0px rgba(0,0,0,0.95))' 
          : 'drop-shadow(2.5px 3px 0px rgba(0,0,0,0.85))'
      }}
      title={title}
    >
      {/* SVG Painted Wooden Plank (Continuous stroke, vector nail bolts, bevel highlight) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 220 38"
        preserveAspectRatio="none"
      >
        {/* Main wood plank */}
        <path
          d={pathData}
          fill={bgColor}
          stroke="#000000"
          strokeWidth={isSpecial ? 3 : 2.5}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Wood top edge bevel highlight */}
        <path
          d={highlightPath}
          fill="none"
          stroke={isLightBg ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Two metallic nail heads holding the wooden plank to the post axis */}
        <circle cx="110" cy="12" r="2.2" fill="#334155" stroke="#000000" strokeWidth="0.8" />
        <circle cx="110" cy="26" r="2.2" fill="#334155" stroke="#000000" strokeWidth="0.8" />
      </svg>

      {/* Content Layer */}
      <div className="relative z-10 w-full flex items-center justify-between pointer-events-none">
        {direction === 'right' ? (
          <>
            <div className="flex items-center space-x-2 min-w-0">
              <span className="shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]" style={{ color: textColor }}>
                {icon}
              </span>
              <span
                className="font-mono font-black text-[11px] sm:text-xs md:text-[13px] tracking-wide uppercase whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]"
                style={{ color: textColor }}
              >
                {label}
              </span>
            </div>
            <div className="flex items-center space-x-1.5 shrink-0 ml-1">
              {extraElement}
              <ArrowRight
                className="w-3.5 h-3.5 shrink-0 opacity-80 group-hover:translate-x-1 transition-transform"
                style={{ color: textColor }}
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center space-x-1.5 shrink-0 mr-1">
              <ArrowLeft
                className="w-3.5 h-3.5 shrink-0 opacity-80 group-hover:-translate-x-1 transition-transform"
                style={{ color: textColor }}
              />
              {extraElement}
            </div>
            <div className="flex items-center space-x-2 min-w-0">
              <span
                className="font-mono font-black text-[11px] sm:text-xs md:text-[13px] tracking-wide uppercase whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]"
                style={{ color: textColor }}
              >
                {label}
              </span>
              <span className="shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]" style={{ color: textColor }}>
                {icon}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div
      className={`relative flex justify-center w-full transition-transform duration-150 hover:rotate-0 hover:translate-x-0 ${rotationClass} ${offsetClass}`}
    >
      {href ? (
        <a
          href={href}
          download={download}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[92%] sm:w-[94%] block"
        >
          {content}
        </a>
      ) : (
        <button
          onClick={onClick}
          className="w-[92%] sm:w-[94%] block text-left"
          type="button"
        >
          {content}
        </button>
      )}
    </div>
  );
};

export const PunkMainMenu: React.FC<PunkMainMenuProps> = ({
  currentLang,
  onToggleLanguage,
  onSelectSciencePlanet,
  onSelectSummits,
  onSelectPolicy,
  onSelectCommsArts,
  onSelectGrassroots,
  onSelectProjects,
  onSelectPublications,
  onSelectSkills,
  onSelectTitles,
  onSelectCertifications,
  onSelectScienceDossier,
  onOpenHireMe,
  onOpenArtDirector
}) => {

  return (
    <div className="relative w-full h-screen overflow-hidden select-none bg-[#07090d] text-white font-sans flex flex-col justify-between">
      
      {/* 1. CINEMATIC BACKGROUND ARTWORK: EUROPEAN GRAPHIC NOVEL CANAL SCENE */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0 filter brightness-95 contrast-105"
        style={{ backgroundImage: `url('${resolveAsset('/dutch_canal_comic.jpg')}')` }}
      />

      {/* Contrast Overlays: Keeps artwork fully visible while giving punchy contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/25 to-black/75 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 pointer-events-none z-0" />

      {/* 2. TOP RIGHT: LANGUAGE SWITCHER */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-40">
        <button
          onClick={onToggleLanguage}
          className="px-3 py-1.5 bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_#000000] active:scale-95 transition-all flex items-center space-x-1.5 cursor-pointer"
          title={currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{currentLang === 'es' ? 'ES' : 'EN'}</span>
        </button>
      </div>

      {/* 3. TOP-LEFT THIRD: HEROIC PORTRAIT (7X LARGER), NAME, LOGO STAMP & DETAILS */}
      <div className="relative lg:absolute lg:top-8 lg:left-8 xl:left-12 z-30 max-w-sm sm:max-w-md pt-4 sm:pt-6 lg:pt-0 px-4 sm:px-6 lg:px-0 pointer-events-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-black/65 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border-2 sm:border-[2.5px] border-black shadow-[6px_6px_0px_rgba(0,0,0,0.9)] -rotate-1 hover:rotate-0 transition-transform duration-200">
          
          {/* Portrait Frame (7x larger than old thumbnail) */}
          <div className="relative shrink-0 group">
            <div className="w-28 h-36 sm:w-36 sm:h-46 md:w-40 md:h-50 rounded-xl bg-black p-1 border-2 sm:border-3 border-white shadow-[3px_3px_0px_#000] overflow-hidden -rotate-1 group-hover:rotate-0 transition-transform">
              <img 
                src={resolveAsset('/profile.jpg')} 
                alt="Daniel Santander Urrutia" 
                className="w-full h-full object-cover object-top filter contrast-105"
              />
            </div>

            {/* Geofrecuencia Official Brandmark Stamp (Clean integration on photo corner) */}
            <div 
              className="absolute -top-2.5 -left-2.5 transition-transform hover:scale-110 cursor-pointer -rotate-6" 
              title="Geofrecuencia Brandmark"
            >
              <GeofrecuenciaLogo variant="badge" className="w-8 h-8 sm:w-9 sm:h-9 shadow-[2px_2px_0px_#facc15]" />
            </div>

            {/* Active Status Beacon */}
            <div className="absolute -bottom-1.5 -right-1.5 bg-red-600 text-white font-mono font-black text-[8px] sm:text-[9px] px-2 py-0.5 rounded border border-black uppercase tracking-wider shadow-[2px_2px_0px_#000] flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>{currentLang === 'es' ? 'ACTIVO' : 'ACTIVE'}</span>
            </div>
          </div>

          {/* Identity & Career Details */}
          <div className="flex flex-col space-y-1.5 text-center sm:text-left max-w-xs sm:max-w-sm">
            {/* Stencil Name */}
            <div className="bg-white text-black px-2.5 py-1 border-2 border-black shadow-[3px_3px_0px_#facc15] -rotate-1 inline-block self-center sm:self-start">
              <h1 className="font-mono font-black text-sm sm:text-base md:text-lg tracking-tight uppercase leading-none">
                [DANIEL SANTANDER]
              </h1>
            </div>

            {/* Disciplines & Specialties */}
            <div className="text-[10px] sm:text-[11px] font-mono text-amber-300 font-bold tracking-normal leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
              {currentLang === 'es' 
                ? 'Geofísico, Doble M.Sc. en Gestión y Protección Ambiental, Permacultor'
                : 'Geophysicist, Double Ms.C. Environmental Manager & Protector, Permaculturist'}
            </div>

            {/* Credentials / Location Brief */}
            <div className="text-[9.5px] sm:text-[10px] font-mono text-neutral-200 bg-black/75 px-2 py-0.5 rounded border border-white/25 inline-block self-center sm:self-start shadow-sm">
              {currentLang === 'es'
                ? 'Desde Chile, actualmente en Hannover, Alemania'
                : 'From Chile, currently in Hannover Germany'}
            </div>
          </div>

        </div>
      </div>

      {/* 4. MAIN STAGE: DIRECTIONAL WOODEN SLATS MOUNTED OVER THE TIMBER POST (CLEAN, NO FOOTER) */}
      <main className="relative z-20 flex-1 w-full px-4 sm:px-8 lg:px-12 flex flex-col justify-center items-center my-auto overflow-y-auto no-scrollbar py-2">
        
        {/* RIGHT AREA: DIRECTIONAL WOODEN SLATS MOUNTED DIRECTLY ON THE TIMBER POST */}
        <div className="w-full max-w-sm sm:max-w-md lg:w-[410px] xl:w-[450px] lg:absolute lg:left-[67.7%] lg:-translate-x-1/2 flex flex-col items-center my-auto relative py-1">
          
          {/* Slender Timber Post Core Behind the Signs */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-4 sm:w-5 bg-gradient-to-r from-[#291c13] via-[#483324] to-[#1c120b] border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,0.85)] z-0 rounded-sm" />

          {/* 11 Hectic Directional Signboards (Non-parallel, Alternating, No Subtitles/KM) */}
          <div className="relative z-10 w-full flex flex-col space-y-1 sm:space-y-1.5 py-1">
            
            {/* 1. SIGN 01: SCIENCE & ACADEMY (Points Right ➔) */}
            <WoodenSignSlat
              direction="right"
              bgColor="#1d4ed8"
              textColor="#ffffff"
              rotationClass="-rotate-2.5"
              offsetClass="translate-x-1"
              icon={<Microscope className="w-4 h-4" />}
              label={currentLang === 'es' ? 'CIENCIA & ACADEMIA' : 'SCIENCE & ACADEMY'}
              onClick={onSelectSciencePlanet}
              title={currentLang === 'es' ? 'Explorar Planeta Ciencia 3D' : 'Explore 3D Science Planet'}
            />

            {/* 2. SIGN 02: SUMMITS & GLOBAL POLICY (Points Left ⬅) */}
            <WoodenSignSlat
              direction="left"
              bgColor="#b91c1c"
              textColor="#ffffff"
              rotationClass="rotate-3"
              offsetClass="-translate-x-1"
              icon={<Globe className="w-4 h-4" />}
              label={currentLang === 'es' ? 'CUMBRES & POLÍTICA GLOBAL' : 'SUMMITS & GLOBAL POLICY'}
              onClick={onSelectSummits}
              title={currentLang === 'es' ? 'Ver Cumbres y Política Global 3D' : 'View Summits & Global Policy 3D'}
            />

            {/* 2B. SIGN 02B: POLICY ADVISORY (Points Right ➔) */}
            {onSelectPolicy && (
              <WoodenSignSlat
                direction="right"
                bgColor="#7c3aed"
                textColor="#ffffff"
                rotationClass="-rotate-2"
                offsetClass="translate-x-1"
                icon={<Scale className="w-4 h-4" />}
                label={currentLang === 'es' ? 'ASESORÍA EN POLÍTICAS PÚBLICAS' : 'POLICY ADVISORY'}
                onClick={onSelectPolicy}
                title={currentLang === 'es' ? 'Ver Asesoría Parlamentaria, Convención Constitucional y Cuencas en el Globo 3D' : 'Explore Policy Advisory, Parliamentary Testimony & Constitutional Convention on 3D Globe'}
              />
            )}

            {/* 3. SIGN 03: COMMUNICATIONS & ARTS (Points Right ➔) */}
            <WoodenSignSlat
              direction="right"
              bgColor="#ea580c"
              textColor="#ffffff"
              rotationClass="-rotate-1.5"
              offsetClass="translate-x-2"
              icon={<Palette className="w-4 h-4" />}
              label={currentLang === 'es' ? 'MEDIOS & ARTE' : 'COMMUNICATIONS & ARTS'}
              extraElement={onOpenArtDirector && (
                <span 
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenArtDirector();
                  }}
                  className="pointer-events-auto bg-black hover:bg-yellow-400 text-yellow-300 hover:text-black font-mono font-black text-[8px] sm:text-[9px] px-1.5 py-0.5 border border-white/60 uppercase shadow-[1px_1px_0px_#000] cursor-pointer"
                  title={currentLang === 'es' ? 'Abrir backstage de Rap' : 'Open Rap backstage'}
                >
                  ⚡ RAP
                </span>
              )}
              onClick={onSelectCommsArts}
              title={currentLang === 'es' ? 'Ver Medios, Música y Arte' : 'View Communications & Arts'}
            />

            {/* 4. SIGN 04: GRASSROOTS & WATER (Points Left ⬅) */}
            <WoodenSignSlat
              direction="left"
              bgColor="#15803d"
              textColor="#ffffff"
              rotationClass="rotate-3.5"
              offsetClass="-translate-x-2"
              icon={<Users className="w-4 h-4" />}
              label={currentLang === 'es' ? 'COMUNIDADES & AGUA' : 'GRASSROOTS & WATER'}
              onClick={onSelectGrassroots}
              title={currentLang === 'es' ? 'Ver Comunidades y Defensa del Agua' : 'View Grassroots & Water Governance'}
            />

            {/* 5. SIGN 05: PROJECTS & INNOVATION (Points Right ➔) */}
            <WoodenSignSlat
              direction="right"
              bgColor="#eab308"
              textColor="#000000"
              rotationClass="-rotate-3"
              offsetClass="translate-x-1.5"
              icon={<Sparkles className="w-4 h-4" />}
              label={currentLang === 'es' ? 'PROYECTOS & INNOVACIÓN' : 'PROJECTS & INNOVATION'}
              onClick={onSelectProjects}
              title={currentLang === 'es' ? 'Ver Portafolio de Proyectos y Soluciones Comerciales en el Globo 3D' : 'View Commercial Projects Portfolio on the 3D Globe'}
            />

            {/* 6. SIGN 06: PUBLICATIONS & PRESS (Points Left ⬅) */}
            <WoodenSignSlat
              direction="left"
              bgColor="#1e1b4b"
              textColor="#fef08a"
              rotationClass="rotate-2"
              offsetClass="-translate-x-0.5"
              icon={<BookOpen className="w-4 h-4" />}
              label={currentLang === 'es' ? 'PUBLICACIONES & PRENSA' : 'PUBLICATIONS & PRESS'}
              onClick={onSelectPublications}
              title={currentLang === 'es' ? 'Ver Publicaciones, Libros y Prensa en el Globo 3D' : 'View Publications & Press on the 3D Globe'}
            />

            {/* 7. SIGN 07: SKILLS & TOOLKIT (Points Right ➔) */}
            <WoodenSignSlat
              direction="right"
              bgColor="#0891b2"
              textColor="#ffffff"
              rotationClass="-rotate-3.5"
              offsetClass="translate-x-2"
              icon={<Terminal className="w-4 h-4" />}
              label={currentLang === 'es' ? 'FICHA TÉCNICA & SKILLS' : 'SKILLS & TOOLKIT'}
              onClick={onSelectSkills}
              title={currentLang === 'es' ? 'Ver Ficha Técnica de Habilidades y Software en el Globo' : 'View Skills & Technical Toolkit'}
            />

            {/* 8. SIGN 08: ACADEMIC TITLES (Points Left ⬅) */}
            <WoodenSignSlat
              direction="left"
              bgColor="#831843"
              textColor="#ffffff"
              rotationClass="rotate-2.5"
              offsetClass="-translate-x-1.5"
              icon={<GraduationCap className="w-4 h-4" />}
              label={currentLang === 'es' ? 'TÍTULOS ACADÉMICOS' : 'ACADEMIC TITLES'}
              onClick={onSelectTitles}
              title={currentLang === 'es' ? 'Ver Títulos Académicos y Grados en el Globo 3D' : 'View Academic Degrees & Diplomas'}
            />

            {/* 9. SIGN 09: ADDITIONAL CERTIFICATIONS (Points Right ➔) */}
            {onSelectCertifications && (
              <WoodenSignSlat
                direction="right"
                bgColor="#0d9488"
                textColor="#ffffff"
                rotationClass="-rotate-2"
                offsetClass="translate-x-1.5"
                icon={<Award className="w-4 h-4" />}
                label={currentLang === 'es' ? 'CERTIFICACIONES ADICIONALES' : 'ADDITIONAL CERTIFICATIONS'}
                onClick={onSelectCertifications}
                title={currentLang === 'es' ? 'Ver Certificaciones de Postgrado (Davos, Dresden, Copenhague) en el Globo 3D' : 'Explore Postgraduate Certifications (Davos, Dresden, Copenhagen) on 3D Globe'}
              />
            )}

            {/* 10. SIGN 10: ACADEMIC DOSSIER PAPER (Points Left ⬅) */}
            <WoodenSignSlat
              direction="right"
              bgColor="#c2410c"
              textColor="#ffffff"
              rotationClass="-rotate-2"
              offsetClass="translate-x-1"
              icon={<FileText className="w-4 h-4" />}
              label={currentLang === 'es' ? 'EXPEDIENTE ACADÉMICO' : 'ACADEMIC DOSSIER'}
              onClick={onSelectScienceDossier}
              title={currentLang === 'es' ? 'Ver Expediente Académico Formato Fanzine Papel' : 'View Academic Dossier Paper Format'}
            />

            {/* 10. SIGN 10: CURRICULUM VITAE PDF (Points Left ⬅) */}
            <WoodenSignSlat
              direction="left"
              bgColor="#16a34a"
              textColor="#ffffff"
              rotationClass="rotate-3"
              offsetClass="-translate-x-2"
              icon={<Download className="w-4 h-4" />}
              label={currentLang === 'es' ? 'CURRÍCULUM VITAE (PDF)' : 'CURRICULUM VITAE (PDF)'}
              href={resolveAsset('/Daniel_Santander_CV.pdf')}
              download="Daniel_Santander_CV.pdf"
              title={currentLang === 'es' ? 'Descargar Currículum Vitae oficial (PDF)' : 'Download official Curriculum Vitae (PDF)'}
            />

          </div>

          {/* Elegant Standalone Closing Button outside the timber post */}
          {onOpenHireMe && (
            <div className="w-full flex justify-center mt-3 pt-1 z-20">
              <button
                type="button"
                onClick={onOpenHireMe}
                className="group relative inline-flex items-center space-x-2 px-5 py-2 bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black rounded-full shadow-[3px_3px_0px_#000000] hover:shadow-[5px_5px_0px_#000000] hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                title={currentLang === 'es' ? 'Contactar para contratación o colaboraciones' : 'Contact for hiring or partnerships'}
              >
                <Briefcase className="w-3.5 h-3.5 text-black group-hover:scale-110 transition-transform" />
                <span>
                  {currentLang === 'es' ? 'TRABAJEMOS JUNTOS // HIRE ME' : 'HIRE ME // WORK TOGETHER'}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-black group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </main>

    </div>
  );
};

export default PunkMainMenu;
