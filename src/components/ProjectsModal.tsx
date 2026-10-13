import React, { useState } from 'react';
import { X, CheckSquare, Square, Users, Layers, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { Language } from '../types';

export interface SideProject {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  category: string;
  categoryColor: string;
  progress: number;
  collaborators: string;
  desc: string;
  checklist: { text: string; completed: boolean }[];
  subproject?: string;
  notes: string;
}

export const CABALLERO_JAGUAR_PROJECTS: SideProject[] = [
  {
    id: 'lauwersmeer',
    emoji: '🌊',
    title: 'Climate Risk en Lauwersmeer',
    subtitle: 'Artículo científico sobre evaluación y modelación de riesgo climático costero',
    category: 'Investigación Científica',
    categoryColor: 'bg-red-600 text-white',
    progress: 75,
    collaborators: 'Co-autoría con 2 colegas investigadores',
    desc: 'Estudio de evaluación de vulnerabilidad, eventos de inundación extrema y modelación de ascenso del nivel del mar en la cuenca y ecosistema de Lauwersmeer (Países Bajos).',
    checklist: [
      { text: 'Consolidar base de datos climáticos de Lauwersmeer (1990-2025)', completed: true },
      { text: 'Ejecutar simulaciones de eventos de marejada de tempestad', completed: true },
      { text: 'Reunión de coordinación con los 2 colegas co-autores', completed: false },
      { text: 'Escribir la sección de Métodos y Discusión del artículo', completed: false }
    ],
    notes: 'Paper enfocado en resiliencia costera. Integración con modelos de elevación digital y simulaciones de marejadas.'
  },
  {
    id: 'rewild',
    emoji: '🔥',
    title: 'ReWild: Libro de Incendios & Modelo Forestal',
    subtitle: 'Libro de análisis ecológico y propuesta de reconversión del monocultivo forestal',
    category: 'Ecología & Transición Territorial',
    categoryColor: 'bg-orange-600 text-white',
    progress: 65,
    collaborators: 'Red por la Superación del Modelo Forestal + 2 Co-editores + Autores Colaboradores',
    desc: 'Preparación y edición colectiva de obra crítica y propositiva sobre incendios forestales en Chile, restauración ecológica de bosques nativos y superación del modelo de sustitución forestal.',
    subproject: '🌲 Subproyecto: App para ReWild de Bosques (monitoreo comunal de parches nativos y prevención comunitaria)',
    checklist: [
      { text: 'Revisar y editar capítulos de la Red por la Superación del Modelo Forestal', completed: true },
      { text: 'Redactar prólogo e introducción en conjunto con los 2 co-editores', completed: true },
      { text: 'Definir arquitectura de datos de la App ReWild (monitoreo de bosque nativo)', completed: false },
      { text: 'Diseñar mapas cartográficos de zonas afectadas por megaincendios', completed: false }
    ],
    notes: 'ReWild aborda la restauración activa versus pasiva del matorral y bosque esclerófilo y templado.'
  },
  {
    id: 'permacultura',
    emoji: '🌾',
    title: 'Chile Agrotech (Tecnología de Precisión & AgriTwin)',
    subtitle: 'Tecnología Agrícola de Precisión & Gemelo Digital (AgriTwin) — Maule, Chile',
    category: 'Agrotech, IoT & Satélites',
    categoryColor: 'bg-purple-600 text-white',
    progress: 85,
    collaborators: 'Productores Agrícolas del Maule, Ingenieros IoT & Especialistas ESG',
    desc: 'Plataforma de ingeniería y tecnología agrícola de precisión para el campo chileno y la Región del Maule. Integra gemelo digital AgriTwin, sensores de humedad de suelo IoT y análisis satelital Sentinel/NDVI.',
    subproject: '🚜 AgriTwin Hub + Diseño Regenerativo Keyline para huertos y viñas',
    checklist: [
      { text: 'Configurar entorno oficial y arquitectura de microservicios AgroTech Chile', completed: true },
      { text: 'Integrar capas satelitales multispectrales (Sentinel-2 / NDVI)', completed: true },
      { text: 'Conectar telemetría de sensores de humedad de suelo IoT al AgriTwin Hub', completed: false },
      { text: 'Presentar Brochure Ejecutivo a viñas y predios agrícolas del Maule', completed: false }
    ],
    notes: 'Chile Agrotech une tecnología de frontera con la realidad productiva y ecológica del campo chileno.'
  },
  {
    id: 'incel',
    emoji: '🎭',
    title: 'Los Manejadores (Agencia Digital & IA)',
    subtitle: 'Conectamos talentos con el mundo · Arquitectura de presencia e influencers virtuales',
    category: 'Inteligencia Artificial & Media Agency',
    categoryColor: 'bg-emerald-600 text-white',
    progress: 80,
    collaborators: 'Equipo de Medios Digitales, Producción IA & Storytelling',
    desc: 'Agencia de comunicación digital y arquitectura de presencia web. Une precisión analítica europea con energía emprendedora americana para gestionar influencers virtuales generados por IA, canales de YouTube de divulgación y asesorías estratégicas.',
    checklist: [
      { text: 'Definir set de influencers digitales e identidades de marca', completed: true },
      { text: 'Producir primeros guiones y carruseles para redes sociales', completed: true },
      { text: 'Desarrollar landing page completa y conectar pipeline de difusión', completed: false },
      { text: 'Finalizar pitch deck de 10 diapositivas para inversores y clientes', completed: false }
    ],
    notes: 'Los Manejadores democratiza el poder de la influencia auténtica: IA + storytelling + resultados medibles.'
  },
  {
    id: 'divulgacion',
    emoji: '🎙️',
    title: 'Ciencia & Territorios',
    subtitle: 'Plataforma de divulgación científica territorial y comunicación pública de la ciencia',
    category: 'Comunicación Pública de la Ciencia',
    categoryColor: 'bg-emerald-600 text-white',
    progress: 70,
    collaborators: 'Comunidades Locales, Científicos & Comunicadores',
    desc: 'Iniciativa transmedia para acercar el conocimiento científico a las realidades territoriales chilenas mediante reportajes, podcasts, cápsulas para redes y cartografía socio-ambiental participativa.',
    checklist: [
      { text: 'Producir primeros 4 episodios del podcast Ciencia & Territorios', completed: true },
      { text: 'Publicar reportaje sobre biodiversidad y escasez hídrica local', completed: true },
      { text: 'Diseñar plataforma web para visualización de mapas socio-ecológicos', completed: false },
      { text: 'Gestión de alianzas con centros de investigación universitarios', completed: false }
    ],
    notes: 'Conectar el conocimiento académico con los saberes y luchas de los territorios.'
  },
  {
    id: 'piratas',
    emoji: '🏴‍☠️',
    title: 'Cómic de Piratas: Guerra del Pacífico & Leyendas del Mar',
    subtitle: 'Cómic histórico-fantástico sobre la contienda naval y mitología del Pacífico Sur',
    category: 'Arte, Narrativa & Historia Naval',
    categoryColor: 'bg-amber-600 text-white',
    progress: 55,
    collaborators: 'Ilustradores, Historiadores & Guionistas',
    desc: 'Creación de novela gráfica ambientada en el marco de la Guerra del Pacífico chilena, entrelazando batallas navales históricas, piratas del Pacífico sur y mitos náuticos de las costas chilenas.',
    checklist: [
      { text: 'Definir arco de personajes (corsarios, marinos y criaturas del mar)', completed: true },
      { text: 'Finalizar guión literario de los primeros 3 capítulos', completed: true },
      { text: 'Aprobar bocetos de embarcaciones navales históricas y seres fantásticos', completed: false },
      { text: 'Coordinar maquetación con la editorial o plataforma webcomic', completed: false }
    ],
    notes: 'Enfoque en el choque entre realismo militar histórico y leyendas populares del mar de Chile.'
  },
  {
    id: 'red_maule',
    emoji: '📻',
    title: 'Red Comunitaria de Medios Maule Sur (Maule Red)',
    subtitle: 'Radio en vivo, avisador de emergencias rurales (APR) y periodismo territorial',
    category: 'Medios Territoriales & Emergencias',
    categoryColor: 'bg-emerald-600 text-white',
    progress: 40,
    collaborators: 'Reporteros Locales, Comunidades Campesinas & Redes de APR',
    desc: 'Plataforma comunitaria de información para el Maule Sur. Integra radio comunitaria en vivo, avisador de emergencias de Agua Potable Rural (APR) y cortes de suministro eléctrico, mapa territorial colaborativo y periodismo de utilidad cotidiana.',
    checklist: [
      { text: 'Prototipar plataforma web y mapa de cortes y emergencias APR', completed: true },
      { text: 'Elaborar perfil de roles y convocatoria abierta para reporteros locales', completed: true },
      { text: 'Realizar primera asamblea o reunión de equipo fundador', completed: false },
      { text: 'Conectar señal streaming para la radio comunitaria en vivo', completed: false }
    ],
    notes: 'Maule Red responde a la desconexión informativa de los territorios rurales: comunicación hecha por y para las comunidades.'
  },
  {
    id: 'paper_fisica',
    emoji: '⚛️',
    title: 'Paper en Física & Sistemas Complejos',
    subtitle: 'Investigación en termodinámica de no equilibrio o sistemas complejos (Eventual)',
    category: 'Física Teórica & Modelación',
    categoryColor: 'bg-red-600 text-white',
    progress: 20,
    collaborators: 'Investigación Autónoma & Asesores Físicos',
    desc: 'Exploración teórica rigurosa, modelación matemática y desarrollo de un paper de física aplicada a procesos territoriales o termodinámicos.',
    checklist: [
      { text: 'Definir marco conceptual y ecuaciones gobernantes', completed: true },
      { text: 'Compilar referencias de física estadística y sistemas no lineales', completed: false }
    ],
    notes: 'Proyecto intelectual eventual para profundizar en ciencia dura.'
  }
];

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose, currentLang }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(CABALLERO_JAGUAR_PROJECTS[0].id);

  if (!isOpen) return null;

  const currentProj = CABALLERO_JAGUAR_PROJECTS.find((p) => p.id === selectedProjectId) || CABALLERO_JAGUAR_PROJECTS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn select-none">
      
      {/* Modal Container (Comic / GTA Heist Quest Board) */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#0c0f14] border-4 border-black rounded-2xl shadow-[10px_10px_0px_#facc15] flex flex-col overflow-hidden text-white">
        
        {/* Header Bar */}
        <div className="px-4 sm:px-6 py-3 bg-black border-b-3 border-black flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <span className="bg-[#facc15] text-black px-2.5 py-0.5 font-mono font-black text-xs sm:text-sm uppercase border-2 border-black shadow-[2px_2px_0px_#000] -rotate-1">
              [ CABALLERO JAGUAR // MISIONES SECUNDARIAS ]
            </span>
            <span className="hidden sm:inline font-mono text-xs text-neutral-400 font-bold">
              {currentLang === 'es' ? '8 FRENTES ESTRATÉGICOS ACTIVOS' : '8 ACTIVE STRATEGIC FRONTS'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-black hover:bg-red-600 text-white border-2 border-white/50 hover:border-black font-mono font-black transition shadow-[2px_2px_0px_#000] active:scale-95"
            title="Cerrar panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Left Project List (Sidebar) + Right Project Detail */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Left Column: Project Selector Tabs */}
          <div className="w-full md:w-80 bg-black/90 border-r-2 border-black/80 overflow-y-auto p-3 space-y-2 shrink-0 no-scrollbar">
            <div className="text-[10px] font-mono font-black text-amber-400 uppercase tracking-widest px-1 pb-1">
              {currentLang === 'es' ? 'SELECCIONA PROYECTO / CAMPAÑA' : 'SELECT CAMPAIGN / VENTURE'}
            </div>

            {CABALLERO_JAGUAR_PROJECTS.map((proj) => {
              const isSelected = proj.id === selectedProjectId;
              return (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProjectId(proj.id)}
                  className={`p-2.5 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#facc15] text-black border-black shadow-[3px_3px_0px_#000] -rotate-0.5 font-bold'
                      : 'bg-[#151921] hover:bg-[#1c222d] text-neutral-200 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center space-x-1.5 font-bold truncate">
                      <span>{proj.emoji}</span>
                      <span className="truncate">{proj.title.split(':')[0]}</span>
                    </span>
                    <span className={`text-[10px] font-mono font-black px-1.5 py-0.2 rounded border ${isSelected ? 'bg-black text-white border-black' : 'bg-white/10 text-neutral-300 border-white/10'}`}>
                      {proj.progress}%
                    </span>
                  </div>

                  <div className="text-[10px] font-mono text-neutral-400 truncate mt-1">
                    {proj.category}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Project Deep Dive */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-[#090b0e] no-scrollbar">
            
            {/* Title & Category Banner */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-2 py-0.5 font-mono font-black text-[10px] uppercase border border-black shadow-[1px_1px_0px_#000] ${currentProj.categoryColor}`}>
                  {currentProj.category}
                </span>
                <span className="font-mono text-xs text-amber-400 font-bold flex items-center space-x-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{currentProj.collaborators}</span>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-mono font-black text-white uppercase tracking-tight">
                {currentProj.emoji} {currentProj.title}
              </h2>

              <p className="font-mono text-xs text-neutral-300">
                {currentProj.subtitle}
              </p>
            </div>

            {/* Progress Bar (RPG / Heist Style) */}
            <div className="p-3 bg-black/60 border-2 border-black rounded-lg shadow-[3px_3px_0px_#000] space-y-1.5">
              <div className="flex items-center justify-between font-mono text-xs font-bold">
                <span className="text-amber-400">
                  {currentLang === 'es' ? 'AVANCE OPERATIVO' : 'OPERATIONAL PROGRESS'}
                </span>
                <span className="text-white font-black">{currentProj.progress}%</span>
              </div>
              <div className="w-full h-3 bg-neutral-800 border border-black rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500"
                  style={{ width: `${currentProj.progress}%` }}
                />
              </div>
            </div>

            {/* Description */}
            <div className="p-3.5 bg-black/40 border-2 border-dashed border-white/20 rounded-lg">
              <div className="font-mono text-[10px] text-amber-300 font-black uppercase mb-1">
                {currentLang === 'es' ? '[ OBJETIVO ESTRATÉGICO ]' : '[ STRATEGIC OBJECTIVE ]'}
              </div>
              <p className="font-serif text-xs text-neutral-200 leading-relaxed">
                {currentProj.desc}
              </p>
            </div>

            {/* Subproject Tag (if applicable) */}
            {currentProj.subproject && (
              <div className="p-2.5 bg-[#facc15]/10 border-2 border-[#facc15] text-[#facc15] font-mono text-xs font-bold rounded flex items-center space-x-2">
                <Sparkles className="w-4 h-4 shrink-0 text-[#facc15]" />
                <span>{currentProj.subproject}</span>
              </div>
            )}

            {/* Checklist of Real Milestones */}
            <div className="space-y-2">
              <div className="font-mono text-xs font-black text-white uppercase tracking-wider flex items-center space-x-2">
                <span>{currentLang === 'es' ? 'HITOS & CHECKLIST DE OPERACIÓN' : 'MILESTONES & OPERATION CHECKLIST'}</span>
              </div>

              <div className="space-y-1.5">
                {currentProj.checklist.map((chk, cIdx) => (
                  <div
                    key={cIdx}
                    className={`p-2 border rounded font-mono text-xs flex items-start space-x-2.5 ${
                      chk.completed
                        ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                        : 'bg-black/40 border-white/10 text-neutral-300'
                    }`}
                  >
                    {chk.completed ? (
                      <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <Square className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                    )}
                    <span className={chk.completed ? 'line-through opacity-85' : ''}>{chk.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Field Notes */}
            <div className="font-mono text-[10px] text-neutral-400 italic pt-2 border-t border-white/10">
              * Nota de bitácora: {currentProj.notes}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
