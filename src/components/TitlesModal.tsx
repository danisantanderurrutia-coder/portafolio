import React from 'react';
import { 
  X, 
  Award, 
  GraduationCap, 
  CheckCircle2,
  Calendar,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';

interface TitlesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onOpenCertificationsGlobe?: () => void;
}

export const TitlesModal: React.FC<TitlesModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onOpenCertificationsGlobe
}) => {
  if (!isOpen) return null;

  const degrees = [
    {
      id: 'uchile',
      institutionEs: 'Universidad de Chile',
      institutionEn: 'University of Chile',
      facultyEs: 'Facultad de Ciencias Físicas y Matemáticas (FCFM)',
      facultyEn: 'Faculty of Physical & Mathematical Sciences (FCFM)',
      titleEs: 'Geofísico. Licenciatura en Ciencias, mención Geofísica',
      titleEn: 'Geophysicist. Bachelor of Science in Geophysics',
      statusEs: 'Aprobado con distinción (2021)',
      statusEn: 'Awarded with distinction (2021)',
      statusBadge: 'bg-emerald-600 text-white',
      year: '2015 - 2021',
      locationEs: 'Santiago, Chile 🇨🇱',
      locationEn: 'Santiago, Chile 🇨🇱',
      logo: '/logos/universidad_de_chile_logo.png',
      logoAlt: 'Logo Universidad de Chile',
      url: 'https://uchile.cl',
      descEs: 'Formación de excelencia en física de la Tierra, sismología, prospección electromagnética y gravimétrica (SEV/TEM), fluidodinámica y modelación computacional avanzada.',
      descEn: 'Rigorous foundation in solid Earth physics, seismology, applied electromagnetic exploration (VES/TEM), fluid mechanics, and computational modeling.'
    },
    {
      id: 'kiel',
      institutionEs: 'Christian-Albrechts-Universität zu Kiel (Alemania)',
      institutionEn: 'Christian-Albrechts-Universität zu Kiel (Germany)',
      facultyEs: 'Faculty of Agricultural & Nutritional Sciences',
      facultyEn: 'Faculty of Agricultural & Nutritional Sciences',
      titleEs: 'Master en Ciencias en Manejo Ambiental',
      titleEn: 'Master of Science in Environmental Management',
      statusEs: 'Master en Ciencias (2026)',
      statusEn: 'Master of Science (2026)',
      statusBadge: 'bg-blue-600 text-white',
      year: '2023 - 2026',
      locationEs: 'Kiel, Alemania 🇩🇪',
      locationEn: 'Kiel, Germany 🇩🇪',
      logo: '/logos/kiel_university_logo.png',
      logoAlt: 'Logo Universidad de Kiel (CAU Kiel)',
      url: 'https://www.uni-kiel.de',
      descEs: 'Especialización en balance hídrico de cuencas, hidrofísica de suelos y curvas de retención en laboratorio, y modelación de degradación ecosistémica.',
      descEn: 'Specialization in catchment water budget, soil hydro-physical laboratory diagnostics, and post-fire ecosystem degradation modeling.'
    },
    {
      id: 'amu-poznan',
      institutionEs: 'Adam Mickiewicz University (AMU Poznań, Polonia)',
      institutionEn: 'Adam Mickiewicz University (AMU Poznań, Poland)',
      facultyEs: 'Faculty of Geographical & Geological Sciences',
      facultyEn: 'Faculty of Geographical & Geological Sciences',
      titleEs: 'Master en Ciencias en Protección Ambiental',
      titleEn: 'Master of Science in Environmental Protection',
      statusEs: 'Master en Ciencias (2026)',
      statusEn: 'Master of Science (2026)',
      statusBadge: 'bg-blue-600 text-white',
      year: '2023 - 2026',
      locationEs: 'Poznań, Polonia 🇵🇱',
      locationEn: 'Poznań, Poland 🇵🇱',
      logo: '/logos/amu_poznan_logo.png',
      logoAlt: 'Logo Universidad de Poznań (AMU)',
      url: 'https://amu.edu.pl',
      descEs: 'Especialización en secuestro de carbono en humedales lacustres y turberas, taxonomía microscópica de bioindicadores dulceacuícolas y gestión de calidad de agua.',
      descEn: 'Specialization in wetland carbon sequestration dynamics, freshwater bioindicator taxonomy, and aquatic catchment quality management.'
    }
  ];

  const postgraduateCertifications = [
    {
      id: 'wsl-davos',
      locationEs: 'Davos, Suiza 🇨🇭',
      locationEn: 'Davos, Switzerland 🇨🇭',
      institution: 'WSL Swiss Federal Research Institute',
      titleEs: 'BlueGreen Biodiversity Summit',
      titleEn: 'BlueGreen Biodiversity Summit',
      year: '2025',
      image: '/expeditions/davos_wsl_group.png',
      descEs: 'Dinámicas de biodiversidad y humedales alpinos de alta montaña.',
      descEn: 'Alpine wetland dynamics and riparian biodiversity indicators.'
    },
    {
      id: 'dresden',
      locationEs: 'Dresden, Alemania 🇩🇪',
      locationEn: 'Dresden, Germany 🇩🇪',
      institution: 'Leibniz Institute IOER / Dresden',
      titleEs: 'Interlinked Justice & Resilient Landscapes',
      titleEn: 'Interlinked Justice & Resilient Landscapes',
      year: '2024 - 2025',
      image: '/expeditions/dresden_interlinked_justice_cohort.jpg',
      descEs: 'Gobernanza territorial, justicia espacial y transiciones ecológicas.',
      descEn: 'Spatial planning, territorial equity, and ecological transitions.'
    },
    {
      id: 'deal-copenhagen',
      locationEs: 'Copenhague, Dinamarca 🇩🇰',
      locationEn: 'Copenhagen, Denmark 🇩🇰',
      institution: 'DEAL Doughnut Economics Action Lab',
      titleEs: 'Doughnut Economics Practitioner',
      titleEn: 'Doughnut Economics Practitioner',
      year: '2025',
      image: '/expeditions/copenhagen_doughnut_economics_book.jpg',
      descEs: 'Modelación de techos ecológicos y bases sociales para la planificación territorial.',
      descEn: 'Planetary boundaries modeling and regenerative economic foundations.'
    },
    {
      id: 'cert-aljezur',
      locationEs: 'Aljezur, Portugal 🇵🇹',
      locationEn: 'Aljezur, Portugal 🇵🇹',
      institution: 'Plano de Gestão Florestal & StoryMaps',
      titleEs: 'Rewilding & Gestión Forestal',
      titleEn: 'Rewilding & Forest Management',
      year: '2024',
      image: '/expeditions/aljezur_rewilding_portugal.png',
      descEs: 'Modelación satelital (Sentinel-2, GEDI LiDAR) y diseño de cortafuegos biológicos para resiliencia ante megaincendios.',
      descEn: 'Multi-temporal satellite modeling (Sentinel-2, GEDI LiDAR) and biological firebreak planning for wildfire resilience.'
    },
    {
      id: 'cert-permacultura',
      locationEs: 'Maule, Chile 🇨🇱',
      locationEn: 'Maule, Chile 🇨🇱',
      institution: 'Escuela Chilena de Permacultura y Agroecología (EPAC)',
      titleEs: 'Diseñador en Permacultura (CDP)',
      titleEn: 'Certified Permaculture Designer (CDP)',
      year: '2023',
      image: '/expeditions/ong_raiz_native_tree_planting.jpg',
      descEs: 'Zonificación predial regenerativa de 5 zonas, diseño hidrológico Keyline, cosecha de aguas y regeneración edáfica.',
      descEn: 'Regenerative 5-zone farm planning, Keyline hydrological design, rainwater harvesting, and living soil biology.'
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#0c0f14] border-4 border-black rounded-2xl shadow-[10px_10px_0px_#facc15] flex flex-col overflow-hidden text-white font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-5 py-3.5 bg-black border-b-3 border-black flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <span className="bg-[#facc15] text-black px-3 py-1 font-mono font-black text-xs sm:text-sm uppercase border-2 border-black shadow-[2px_2px_0px_#000] -rotate-1">
              {currentLang === 'es' ? '[ TÍTULOS ACADÉMICOS ]' : '[ ACADEMIC DEGREES ]'}
            </span>
            <span className="hidden sm:inline-block bg-white text-black font-mono font-black text-[10px] px-2 py-0.5 border border-black uppercase">
              {currentLang === 'es' ? 'GRADOS UNIVERSITARIOS OFICIALES' : 'OFFICIAL UNIVERSITY DEGREES'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/10 hover:bg-red-600 hover:text-white text-neutral-300 transition-all border border-white/20 active:scale-90 cursor-pointer"
            title={currentLang === 'es' ? 'Cerrar' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-7 no-scrollbar">
          
          {/* 1. OFFICIAL UNIVERSITY DEGREES (3 CARDS) */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono font-black text-xs sm:text-sm text-[#facc15] uppercase tracking-wider flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-[#facc15]" />
                <span>{currentLang === 'es' ? 'GRADOS UNIVERSITARIOS OFICIALES' : 'OFFICIAL UNIVERSITY DEGREES'}</span>
              </h3>
              <span className="text-[11px] font-mono text-neutral-400">
                {currentLang === 'es' ? '3 Fichas Académicas Verificadas' : '3 Verified Academic Credentials'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {degrees.map((deg) => (
                <div 
                  key={deg.id} 
                  className="bg-[#141822] border-3 border-black rounded-xl p-4 shadow-[4px_4px_0px_#000] flex flex-col justify-between hover:border-[#facc15] transition-colors group"
                >
                  <div>
                    {/* Institution Logo & Badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl p-2 border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center shrink-0">
                        <img 
                          src={resolveAsset(deg.logo)} 
                          alt={deg.logoAlt} 
                          className="max-w-full max-h-full object-contain filter contrast-110" 
                        />
                      </div>
                      
                      <div className="flex flex-col items-end space-y-1">
                        <span className={`font-mono font-black text-[9px] px-2 py-0.5 border border-black uppercase shadow-[1px_1px_0px_#000] ${deg.statusBadge}`}>
                          {currentLang === 'es' ? deg.statusEs : deg.statusEn}
                        </span>
                        <div className="flex items-center space-x-1 text-[10px] font-mono text-[#facc15] font-bold">
                          <Calendar className="w-3 h-3" />
                          <span>{deg.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Degree Title */}
                    <h4 className="font-mono font-black text-sm text-white group-hover:text-[#facc15] transition-colors leading-snug">
                      {currentLang === 'es' ? deg.titleEs : deg.titleEn}
                    </h4>

                    {/* Institution Name */}
                    <div className="mt-1.5 text-xs text-amber-300 font-mono font-bold">
                      {currentLang === 'es' ? deg.institutionEs : deg.institutionEn}
                    </div>

                    <div className="text-[10px] text-neutral-400 font-mono mt-0.5">
                      {currentLang === 'es' ? deg.facultyEs : deg.facultyEn}
                    </div>

                    {/* Description */}
                    <p className="mt-2.5 text-[11px] text-neutral-300 font-sans leading-relaxed border-t border-white/10 pt-2">
                      {currentLang === 'es' ? deg.descEs : deg.descEn}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-3.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-[#facc15]" />
                      <span>{currentLang === 'es' ? deg.locationEs : deg.locationEn}</span>
                    </span>
                    <a
                      href={deg.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-white font-bold flex items-center space-x-1 cursor-pointer"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{currentLang === 'es' ? 'OFICIAL' : 'OFFICIAL'}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. POSTGRADUATE CERTIFICATIONS (DAVOS, DRESDEN, COPENHAGUE) */}
          <div className="bg-[#0a0e16] border-3 border-black p-4 sm:p-5 rounded-2xl shadow-[5px_5px_0px_#facc15]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4 border-b-2 border-black pb-3">
              <div>
                <h3 className="font-mono font-black text-xs sm:text-sm text-[#facc15] uppercase tracking-wider flex items-center space-x-2">
                  <Award className="w-4 h-4 text-[#facc15]" />
                  <span>{currentLang === 'es' ? 'CERTIFICACIONES DE POSTGRADO' : 'POSTGRADUATE CERTIFICATIONS'}</span>
                </h3>
                <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                  {currentLang === 'es' 
                    ? 'Acreditaciones y certificaciones internacionales en Suiza, Alemania, Dinamarca, Portugal y Chile.' 
                    : 'International credentials and certifications from Switzerland, Germany, Denmark, Portugal, and Chile.'}
                </p>
              </div>

              {onOpenCertificationsGlobe && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenCertificationsGlobe();
                  }}
                  className="px-3 py-1.5 bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer transition-all active:scale-95 shrink-0"
                >
                  {currentLang === 'es' ? 'VER EN EL GLOBO 3D ➔' : 'EXPLORE ON 3D GLOBE ➔'}
                </button>
              )}
            </div>

            {/* Certifications Grid (Davos, Dresden, Copenhague, Aljezur, Permacultura) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {postgraduateCertifications.map((cert) => (
                <div 
                  key={cert.id} 
                  className="bg-[#121620] border-2 border-black p-3.5 rounded-xl shadow-[3px_3px_0px_#000] flex flex-col justify-between group hover:border-[#facc15] transition-colors"
                >
                  <div>
                    {/* Visual thumbnail */}
                    <div className="w-full h-28 mb-3 rounded-lg overflow-hidden border border-black/80 shadow-[1px_1px_0px_#000] bg-black">
                      <img 
                        src={resolveAsset(cert.image)} 
                        alt={cert.titleEs} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                      <span className="text-[#facc15] font-black">{cert.locationEs}</span>
                      <span className="text-neutral-400 font-bold">{cert.year}</span>
                    </div>

                    <h4 className="font-mono font-black text-xs text-white leading-snug">
                      {currentLang === 'es' ? cert.titleEs : cert.titleEn}
                    </h4>

                    <div className="text-[10px] font-mono text-emerald-400 mt-1 font-bold">
                      {cert.institution}
                    </div>

                    <p className="mt-2 text-[11px] text-neutral-300 font-sans leading-relaxed">
                      {currentLang === 'es' ? cert.descEs : cert.descEn}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-neutral-400">
                    <span>{currentLang === 'es' ? 'Postgraduate Credential' : 'Postgraduate Credential'}</span>
                    <span className="text-emerald-400 font-bold">✓ VERIFICADO</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 bg-black border-t-2 border-black flex items-center justify-between text-xs font-mono text-neutral-400 shrink-0">
          <span>{currentLang === 'es' ? 'EXPEDIENTE ACADÉMICO REGISTRADO // 2026' : 'REGISTERED ACADEMIC DOSSIER // 2026'}</span>
          <span className="text-[#facc15] font-black">UNIVERSIDAD DE CHILE • CAU KIEL • AMU POZNAŃ</span>
        </div>
      </div>
    </div>
  );
};
