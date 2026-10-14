import React from 'react';
import { 
  X, 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  ExternalLink, 
  Building2, 
  Scroll, 
  Sparkles,
  FileText
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';

interface TitlesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const TitlesModal: React.FC<TitlesModalProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c0f14] border-4 border-black rounded-2xl shadow-[10px_10px_0px_#facc15] flex flex-col overflow-hidden text-white font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-5 py-3.5 bg-black border-b-3 border-black flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <span className="bg-[#facc15] text-black px-3 py-1 font-mono font-black text-xs sm:text-sm uppercase border-2 border-black shadow-[2px_2px_0px_#000] -rotate-1">
              {currentLang === 'es' ? '[ TÍTULOS ACADÉMICOS, CERTIFICACIONES & AVALES ]' : '[ ACADEMIC DEGREES, POSTGRADUATE CERTIFICATIONS & ENDORSEMENTS ]'}
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
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6 no-scrollbar">
          
          {/* 1. OFFICIAL UNIVERSITY DEGREES */}
          <div>
            <h3 className="font-mono font-black text-xs sm:text-sm text-[#facc15] uppercase tracking-wider mb-3 flex items-center space-x-2">
              <GraduationCap className="w-4 h-4 text-[#facc15]" />
              <span>{currentLang === 'es' ? 'GRADOS UNIVERSITARIOS OFICIALES' : 'OFFICIAL UNIVERSITY DEGREES'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* DEGREE 1: DUAL M.SC. CAU KIEL & AMU POZNAŃ */}
              <div className="bg-[#141822] border-3 border-black rounded-xl p-4 shadow-[4px_4px_0px_#000] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-600 text-white font-mono font-black text-[9px] px-2 py-0.5 border border-black uppercase -rotate-1">
                      {currentLang === 'es' ? 'DUAL M.SC. (EUROPA)' : 'DUAL EUROPEAN M.SC.'}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 font-bold">2023 - 2026</span>
                  </div>

                  <h4 className="font-mono font-black text-sm text-white leading-snug">
                    {currentLang === 'es' 
                      ? 'Doble Maestría Europea en Ciencias (Dual M.Sc.)' 
                      : 'Dual European Master of Science (Dual M.Sc.)'}
                  </h4>

                  <div className="mt-2 space-y-1 text-xs text-neutral-300 font-sans">
                    <div className="flex items-start space-x-1.5">
                      <span className="text-[#facc15] font-mono font-bold">•</span>
                      <span><strong>CAU Kiel ({currentLang === 'es' ? 'Alemania' : 'Germany'}):</strong> M.Sc. in Environmental Management</span>
                    </div>
                    <div className="flex items-start space-x-1.5">
                      <span className="text-[#facc15] font-mono font-bold">•</span>
                      <span><strong>AMU Poznań ({currentLang === 'es' ? 'Polonia' : 'Poland'}):</strong> M.Sc. in Environmental Protection</span>
                    </div>
                  </div>

                  <p className="mt-2.5 text-[11px] text-neutral-400 font-sans leading-relaxed border-t border-white/10 pt-2">
                    {currentLang === 'es'
                      ? 'Especialización en balance hídrico, dinámicas de flujos de gases de efecto invernadero (GEI) mediante torres eddy covariance en turberas, y modelación de cuencas costeras.'
                      : 'Specialization in catchment water balances, greenhouse gas flux quantification using eddy covariance towers in peatlands, and coastal watershed risk modeling.'}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>{currentLang === 'es' ? 'Alemania 🇩🇪 & Polonia 🇵🇱' : 'Germany 🇩🇪 & Poland 🇵🇱'}</span>
                  <span className="text-emerald-400 font-bold">
                    {currentLang === 'es' ? 'VERIFICADO' : 'VERIFIED'}
                  </span>
                </div>
              </div>

              {/* DEGREE 2: GEOFÍSICA U. DE CHILE CON DISTINCIÓN */}
              <div className="bg-[#141822] border-3 border-black rounded-xl p-4 shadow-[4px_4px_0px_#000] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-emerald-600 text-white font-mono font-black text-[9px] px-2 py-0.5 border border-black uppercase rotate-1">
                      {currentLang === 'es' ? 'CON DISTINCIÓN MÁXIMA' : 'WITH HIGHEST DISTINCTION'}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 font-bold">2015 - 2021</span>
                  </div>

                  <h4 className="font-mono font-black text-sm text-white leading-snug">
                    {currentLang === 'es' 
                      ? 'Licenciatura en Ciencias de la Ingeniería, mención Geofísica' 
                      : 'Bachelor of Science in Geophysics (Engineering Degree)'}
                  </h4>

                  <div className="mt-1 text-xs text-amber-400 font-mono font-bold">
                    {currentLang === 'es' 
                      ? 'Facultad de Ciencias Físicas y Matemáticas (FCFM) • Universidad de Chile'
                      : 'Faculty of Physical & Mathematical Sciences (FCFM) • University of Chile'}
                  </div>

                  <p className="mt-2 text-[11px] text-neutral-400 font-sans leading-relaxed border-t border-white/10 pt-2">
                    {currentLang === 'es'
                      ? 'Formación rigurosa en física de la Tierra, sismología, métodos electromagnéticos y gravimétricos, termodinámica de fluidos y modelación computacional avanzada (MATLAB / Python).'
                      : 'Rigorous foundation in solid Earth geophysics, applied electromagnetic methods (VES/TEM), fluid mechanics, seismology, and advanced computational modeling (MATLAB / Python).'}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>Santiago, Chile 🇨🇱</span>
                  <span className="text-emerald-400 font-bold">
                    {currentLang === 'es' ? 'FCFM U. DE CHILE' : 'FCFM U. OF CHILE'}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* 2. EXECUTIVE POSTGRADUATE CERTIFICATIONS & DIPLOMAS */}
          <div>
            <h3 className="font-mono font-black text-xs sm:text-sm text-[#facc15] uppercase tracking-wider mb-3 flex items-center space-x-2">
              <Award className="w-4 h-4 text-[#facc15]" />
              <span>{currentLang === 'es' ? 'CERTIFICACIONES EJECUTIVAS Y DIPLOMAS DE POSTGRADO' : 'EXECUTIVE POSTGRADUATE CERTIFICATIONS & DIPLOMAS'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
              
              <div className="bg-[#10141d] border-2 border-black p-3 rounded-lg shadow-[2px_2px_0px_#000]">
                <div className="text-[10px] text-amber-400 font-black">WSL DAVOS ({currentLang === 'es' ? 'SUIZA 🇨🇭' : 'SWITZERLAND 🇨🇭'})</div>
                <div className="font-bold text-white text-xs mt-1">BlueGreen Biodiversity Summit</div>
                <div className="text-[9px] text-neutral-400 mt-1">
                  {currentLang === 'es' ? 'Dinámicas de biodiversidad y humedales alpinos' : 'Alpine wetland & biodiversity dynamics'}
                </div>
              </div>

              <div className="bg-[#10141d] border-2 border-black p-3 rounded-lg shadow-[2px_2px_0px_#000]">
                <div className="text-[10px] text-emerald-400 font-black">LEIBNIZ IOER ({currentLang === 'es' ? 'ALEMANIA 🇩🇪' : 'GERMANY 🇩🇪'})</div>
                <div className="font-bold text-white text-xs mt-1">Dresden Resilient Landscapes</div>
                <div className="text-[9px] text-neutral-400 mt-1">
                  {currentLang === 'es' ? 'Ordenamiento territorial y transiciones post-carbón' : 'Spatial planning & post-coal transitions'}
                </div>
              </div>

              <div className="bg-[#10141d] border-2 border-black p-3 rounded-lg shadow-[2px_2px_0px_#000]">
                <div className="text-[10px] text-cyan-400 font-black">DEAL ({currentLang === 'es' ? 'DINAMARCA 🇩🇰' : 'DENMARK 🇩🇰'})</div>
                <div className="font-bold text-white text-xs mt-1">Doughnut Economics Lab</div>
                <div className="text-[9px] text-neutral-400 mt-1">
                  {currentLang === 'es' ? 'Límites planetarios aplicados a ciudades y economía' : 'Planetary boundaries applied to urban regions'}
                </div>
              </div>

              <div className="bg-[#10141d] border-2 border-black p-3 rounded-lg shadow-[2px_2px_0px_#000]">
                <div className="text-[10px] text-purple-400 font-black">(CR)2 CHILE 🇨🇱</div>
                <div className="font-bold text-white text-xs mt-1">{currentLang === 'es' ? 'Centro de Clima y Resiliencia' : 'Center for Climate & Resilience'}</div>
                <div className="text-[9px] text-neutral-400 mt-1">
                  {currentLang === 'es' ? 'Megasequía y modelación climática regional' : 'Megadrought & regional climate modeling'}
                </div>
              </div>

            </div>
          </div>

          {/* 3. AVALES INSTITUCIONALES Y CARTAS DE REFERENCIA */}
          <div>
            <h3 className="font-mono font-black text-xs sm:text-sm text-[#facc15] uppercase tracking-wider mb-3 flex items-center space-x-2">
              <Scroll className="w-4 h-4 text-[#facc15]" />
              <span>{currentLang === 'es' ? 'AVALES INSTITUCIONALES & CARTAS DE REFERENCIA VERIFICABLES' : 'VERIFIED INSTITUTIONAL ENDORSEMENTS & REFERENCES'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              
              <div className="bg-[#141822] border-2 border-black rounded-lg p-3.5 shadow-[2px_2px_0px_#000]">
                <div className="font-mono font-black text-xs text-white">Dr. Sebastian Jordan</div>
                <div className="text-[10px] font-mono text-neutral-400">
                  {currentLang === 'es' ? 'Investigador Principal • CAU Kiel (Alemania)' : 'Principal Investigator • CAU Kiel (Germany)'}
                </div>
                <div className="text-xs text-neutral-300 font-sans mt-2 italic">
                  "{currentLang === 'es' ? 'Carta de respaldo académico sobre capacidades cuantitativas, trabajo en laboratorio de suelos y rigurosidad analítica.' : 'Official letter of endorsement attesting to high quantitative capabilities, soil laboratory diagnostics, and analytical rigor.'}"
                </div>
              </div>

              <div className="bg-[#141822] border-2 border-black rounded-lg p-3.5 shadow-[2px_2px_0px_#000]">
                <div className="font-mono font-black text-xs text-white">Janaina Uemura</div>
                <div className="text-[10px] font-mono text-neutral-400">
                  {currentLang === 'es' ? 'Coordinadora Global • Global Forest Coalition' : 'Global Coordinator • Global Forest Coalition'}
                </div>
                <div className="text-xs text-neutral-300 font-sans mt-2 italic">
                  "{currentLang === 'es' ? 'Referencia sobre investigación de campo internacional, salvaguardas sociales e informe de biomasa para EPN.' : 'Endorsement regarding field research, social safeguards assessment, and landmark biomass investigation for EPN.'}"
                </div>
              </div>

              <div className="bg-[#141822] border-2 border-black rounded-lg p-3.5 shadow-[2px_2px_0px_#000]">
                <div className="font-mono font-black text-xs text-white">Francisca Arauna</div>
                <div className="text-[10px] font-mono text-neutral-400">
                  {currentLang === 'es' ? 'Abogada • Ex Convencional Constituyente (Chile)' : 'Attorney • Former Constitutional Delegate (Chile)'}
                </div>
                <div className="text-xs text-neutral-300 font-sans mt-2 italic">
                  "{currentLang === 'es' ? 'Testimonio de asesoría legislativa y propuestas técnicas de ordenamiento por cuencas y protección hídrica rural.' : 'Testimonial on legislative advisory and technical watershed governance proposals for rural water assemblies.'}"
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 bg-black border-t-2 border-black flex items-center justify-between text-xs font-mono text-neutral-400 shrink-0">
          <span>{currentLang === 'es' ? 'EXPEDIENTE ACADÉMICO REGISTRADO // 2026' : 'REGISTERED ACADEMIC DOSSIER // 2026'}</span>
          <span className="text-[#facc15] font-black">||| | ||||| || |||||| | |||</span>
        </div>
      </div>
    </div>
  );
};
