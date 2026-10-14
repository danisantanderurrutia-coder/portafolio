import React, { useState } from 'react';
import { 
  X, 
  CheckSquare, 
  Square, 
  Users, 
  Layers, 
  ExternalLink, 
  ArrowRight, 
  Sparkles,
  Code,
  Pin,
  Flame,
  Globe2,
  Terminal
} from 'lucide-react';
import { Language } from '../types';

const GithubIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}>
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
  </svg>
);

export interface SideProject {
  id: string;
  emoji: string;
  titleEn: string;
  titleEs: string;
  subtitleEn: string;
  subtitleEs: string;
  categoryEn: string;
  categoryEs: string;
  categoryColor: string;
  branch: 'science' | 'comms';
  progress: number;
  collaboratorsEn: string;
  collaboratorsEs: string;
  descEn: string;
  descEs: string;
  checklistEn: { text: string; completed: boolean }[];
  checklistEs: { text: string; completed: boolean }[];
  subprojectEn?: string;
  subprojectEs?: string;
  notesEn: string;
  notesEs: string;
  githubUrl?: string;
}

export const ACTIVE_INNOVATION_PROJECTS: SideProject[] = [
  // ==========================================
  // RAMA CIENCIA & MODELACIÓN AMBIENTAL (4)
  // ==========================================
  {
    id: 'lauwersmeer',
    emoji: '🌊',
    titleEn: 'Coastal Climate Risk in Lauwersmeer',
    titleEs: 'Climate Risk en Lauwersmeer',
    subtitleEn: 'Hydrodynamic modeling of storm surges and sea level rise in the Wadden Sea basin',
    subtitleEs: 'Evaluación y modelación hidrodinámica de riesgo climático costero y marejadas',
    categoryEn: 'Scientific Research',
    categoryEs: 'Investigación Científica',
    categoryColor: 'bg-blue-600 text-white',
    branch: 'science',
    progress: 75,
    collaboratorsEn: 'Co-authored with research colleagues (CAU Kiel, Germany)',
    collaboratorsEs: 'Co-autoría con colegas investigadores (CAU Kiel, Alemania)',
    descEn: 'Vulnerability assessment, extreme storm surge simulations, and sea level rise (SLR) scenarios for the Lauwersmeer coastal ecosystem in the Netherlands.',
    descEs: 'Estudio de vulnerabilidad, eventos de inundación extrema y modelación de ascenso del nivel del mar (SLR) en la cuenca y ecosistema de Lauwersmeer (Países Bajos).',
    checklistEn: [
      { text: 'Consolidate Lauwersmeer climate database (1990-2025)', completed: true },
      { text: 'Execute hydrodynamic storm surge simulations', completed: true },
      { text: 'Coordination review with co-authors in Kiel', completed: false },
      { text: 'Draft Methodology and Discussion sections of paper', completed: false }
    ],
    checklistEs: [
      { text: 'Consolidar base de datos climáticos de Lauwersmeer (1990-2025)', completed: true },
      { text: 'Ejecutar simulaciones de eventos de marejada de tempestad', completed: true },
      { text: 'Reunión de coordinación con co-autores en Kiel', completed: false },
      { text: 'Escribir la sección de Métodos y Discusión del artículo', completed: false }
    ],
    notesEn: 'Paper focused on coastal resilience, combining hydrodynamic modeling with LiDAR digital elevation models.',
    notesEs: 'Paper enfocado en resiliencia costera e integración con modelos de elevación digital LiDAR.',
    githubUrl: 'https://github.com/danisantanderurrutia-coder/wetland-monitor'
  },
  {
    id: 'rewild',
    emoji: '🔥',
    titleEn: 'ReWild: Forestry Model & Megafire Overhaul',
    titleEs: 'ReWild: Modelo Forestal & Incendios',
    subtitleEn: 'Ecological analysis and transition proposal from timber monocultures to native forest mosaics',
    subtitleEs: 'Análisis ecológico y propuesta de reconversión del monocultivo de pino y eucalipto',
    categoryEn: 'Ecology & Territorial Transition',
    categoryEs: 'Ecología & Transición Territorial',
    categoryColor: 'bg-orange-600 text-white',
    branch: 'science',
    progress: 65,
    collaboratorsEn: 'Network for the Overhaul of the Forestry Model + 2 Co-editors',
    collaboratorsEs: 'Red por la Superación del Modelo Forestal + 2 Co-editores',
    descEn: 'Collaborative volume and research initiative dissecting Chilean wildfire cycles, ecological restoration of sclerophyllous forest, and replacing timber monoculture extractivism.',
    descEs: 'Preparación y edición colectiva de obra crítica y propositiva sobre megaincendios forestales en Chile, restauración ecológica de bosques nativos y superación del extractivismo forestal.',
    subprojectEn: '🌲 App for Native Forest ReWilding (community monitoring and fire prevention)',
    subprojectEs: '🌲 App para ReWild de Bosques (monitoreo comunal de parches nativos y prevención)',
    checklistEn: [
      { text: 'Review and edit chapters from the Forestry Overhaul Network', completed: true },
      { text: 'Draft prologue and introduction with co-editors', completed: true },
      { text: 'Define data architecture for the ReWild Native Forest App', completed: false },
      { text: 'Map critical wildland-urban interface risk corridors', completed: false }
    ],
    checklistEs: [
      { text: 'Revisar y editar capítulos de la Red por la Superación del Modelo Forestal', completed: true },
      { text: 'Redactar prólogo e introducción con co-editores', completed: true },
      { text: 'Definir arquitectura de datos de la App ReWild (monitoreo de bosque nativo)', completed: false },
      { text: 'Diseñar cartografía de zonas críticas de interfase urbano-forestal', completed: false }
    ],
    notesEn: 'ReWild explores active versus passive restoration in Mediterranean-climate sclerophyllous landscapes.',
    notesEs: 'ReWild aborda la restauración activa versus pasiva del matorral y bosque esclerófilo.',
    githubUrl: 'https://github.com/danisantanderurrutia-coder/resumof'
  },
  {
    id: 'permacultura',
    emoji: '🌾',
    titleEn: 'Chile Agrotech & AgriTwin Platform',
    titleEs: 'Chile Agrotech & AgriTwin',
    subtitleEn: 'Precision Agriculture IoT & Soil Telemetry Digital Twin — Maule, Chile',
    subtitleEs: 'Tecnología Agrícola de Precisión & Gemelo Digital IoT — Maule, Chile',
    categoryEn: 'Agrotech, IoT & Satellites',
    categoryEs: 'Agrotech, IoT & Satélites',
    categoryColor: 'bg-emerald-600 text-white',
    branch: 'science',
    progress: 85,
    collaboratorsEn: 'Maule Agricultural Producers, IoT Engineers & ESG Specialists',
    collaboratorsEs: 'Productores Agrícolas del Maule, Ingenieros IoT & Especialistas ESG',
    descEn: 'Precision agricultural engineering platform for Chilean croplands. Couples AgriTwin digital twin engine with in-situ soil moisture telemetry and Sentinel-2 NDVI/NDRE satellite analytics.',
    descEs: 'Plataforma de ingeniería y tecnología agrícola de precisión para el campo chileno y la Región del Maule. Integra gemelo digital AgriTwin, sensores de humedad de suelo IoT y análisis satelital Sentinel/NDVI.',
    subprojectEn: '🚜 AgriTwin Hub + Keyline Regenerative Water Design for Vineyards',
    subprojectEs: '🚜 AgriTwin Hub + Diseño Regenerativo Keyline para huertos y viñas',
    checklistEn: [
      { text: 'Configure microservice architecture and production backend', completed: true },
      { text: 'Integrate automated Sentinel-2 multispectral vegetation feeds', completed: true },
      { text: 'Connect real-time capacitive soil moisture probes to telemetry hub', completed: false },
      { text: 'Deliver executive rollout brochure to partner vineyards in Maule', completed: false }
    ],
    checklistEs: [
      { text: 'Configurar entorno oficial y arquitectura de microservicios AgroTech Chile', completed: true },
      { text: 'Integrar capas satelitales multispectrales (Sentinel-2 / NDVI)', completed: true },
      { text: 'Conectar telemetría de sensores de humedad de suelo IoT al AgriTwin Hub', completed: false },
      { text: 'Presentar Brochure Ejecutivo a viñas y predios agrícolas del Maule', completed: false }
    ],
    notesEn: 'Bridges European precision environmental engineering with smallholder and vineyard water challenges.',
    notesEs: 'Chile Agrotech une tecnología de frontera con la realidad productiva y ecológica del campo chileno.',
    githubUrl: 'https://github.com/danisantanderurrutia-coder/agritwin-app'
  },
  {
    id: 'paper_fisica',
    emoji: '⚛️',
    titleEn: 'Non-Equilibrium Thermodynamics & Complex Systems',
    titleEs: 'Termodinámica & Sistemas Complejos',
    subtitleEn: 'Mathematical modeling of stochastic transport processes and entropy production',
    subtitleEs: 'Modelación matemática de procesos estocásticos y termodinámica de no equilibrio',
    categoryEn: 'Theoretical Physics & Modeling',
    categoryEs: 'Física Teórica & Modelación',
    categoryColor: 'bg-blue-600 text-white',
    branch: 'science',
    progress: 25,
    collaboratorsEn: 'Autonomous Research & Physics Mentors',
    collaboratorsEs: 'Investigación Autónoma & Asesores Físicos',
    descEn: 'Theoretical physics investigation applying non-equilibrium statistical mechanics to spatial dissipation and hydrological transport equations.',
    descEs: 'Exploración teórica rigurosa, modelación matemática y desarrollo de un paper de física aplicada a procesos estocásticos de transporte territorial y disipación de entropía.',
    checklistEn: [
      { text: 'Formulate governing equations and conceptual framework', completed: true },
      { text: 'Compile literature on non-linear dynamics and Fokker-Planck equations', completed: false }
    ],
    checklistEs: [
      { text: 'Definir marco conceptual y ecuaciones gobernantes', completed: true },
      { text: 'Compilar referencias de física estadística y sistemas no lineales', completed: false }
    ],
    notesEn: 'Deep intellectual project delving into stochastic thermodynamics and hydrogeophysical transport.',
    notesEs: 'Proyecto para profundizar en física teórica dura y procesos estocásticos.',
    githubUrl: 'https://github.com/danisantanderurrutia-coder'
  },

  // ==========================================
  // RAMA COMUNICACIONES & MEDIOS (4)
  // ==========================================
  {
    id: 'incel',
    emoji: '🎭',
    titleEn: 'Los Manejadores (Digital Media & AI Agency)',
    titleEs: 'Los Manejadores (Media & AI Strategy)',
    subtitleEn: 'Web presence architecture, virtual AI creators, and brand narrative engineering',
    subtitleEs: 'Arquitectura de presencia digital, influencers virtuales generados por IA y narrativa',
    categoryEn: 'Artificial Intelligence & Media',
    categoryEs: 'Inteligencia Artificial & Media',
    categoryColor: 'bg-purple-600 text-white',
    branch: 'comms',
    progress: 80,
    collaboratorsEn: 'Digital Media Crew, Generative AI Team & Storytellers',
    collaboratorsEs: 'Equipo de Medios Digitales, Producción IA & Storytelling',
    descEn: 'Digital communication agency combining European analytical precision with energetic digital storytelling. Managing AI-driven virtual creators, YouTube educational feeds, and strategic brand positioning.',
    descEs: 'Agencia de comunicación digital y arquitectura de presencia web. Une precisión analítica europea con visión de medios para gestionar creadores virtuales impulsados por IA, canales de divulgación y consultoría estratégica.',
    checklistEn: [
      { text: 'Establish virtual creator personas and core narrative pillars', completed: true },
      { text: 'Produce initial social media scripts, carousels, and visual assets', completed: true },
      { text: 'Finalize official web platform and automated distribution pipeline', completed: false },
      { text: 'Complete 10-slide pitch deck for institutional clients', completed: false }
    ],
    checklistEs: [
      { text: 'Definir perfiles de creadores digitales e identidades de marca', completed: true },
      { text: 'Producir primeros guiones y carruseles para redes sociales', completed: true },
      { text: 'Desarrollar landing page completa y conectar pipeline de difusión', completed: false },
      { text: 'Finalizar pitch deck de 10 diapositivas para inversores y clientes', completed: false }
    ],
    notesEn: 'Democratizing the reach of authentic narratives: Generative AI + compelling storytelling + measurable metrics.',
    notesEs: 'Los Manejadores democratiza el impacto digital: IA + storytelling + resultados medibles.'
  },
  {
    id: 'divulgacion',
    emoji: '🎙️',
    titleEn: 'Science & Territories (Ciencia & Territorios)',
    titleEs: 'Ciencia & Territorios',
    subtitleEn: 'Transmedia platform for public science communication and participatory socio-environmental mapping',
    subtitleEs: 'Plataforma transmedia de divulgación científica y comunicación pública de la ciencia',
    categoryEn: 'Public Science Outreach',
    categoryEs: 'Divulgación Científica',
    categoryColor: 'bg-emerald-600 text-white',
    branch: 'comms',
    progress: 70,
    collaboratorsEn: 'Frontline Communities, Scientists & Grassroots Communicators',
    collaboratorsEs: 'Comunidades Locales, Científicos & Comunicadores',
    descEn: 'Transmedia initiative translating complex environmental science into frontline community reality via audio podcasts, investigative video briefs, and participatory cartography.',
    descEs: 'Iniciativa transmedia para acercar el conocimiento científico a las realidades territoriales chilenas mediante reportajes, podcasts, cápsulas para redes y cartografía socio-ambiental participativa.',
    checklistEn: [
      { text: 'Produce first 4 episodes of the Ciencia & Territorios podcast', completed: true },
      { text: 'Publish in-depth feature on watershed biodiversity and water rights', completed: true },
      { text: 'Deploy interactive web platform for socio-ecological community maps', completed: false },
      { text: 'Establish strategic alliances with university research centers', completed: false }
    ],
    checklistEs: [
      { text: 'Producir primeros 4 episodios del podcast Ciencia & Territorios', completed: true },
      { text: 'Publicar reportaje sobre biodiversidad y escasez hídrica local', completed: true },
      { text: 'Diseñar plataforma web para visualización de mapas socio-ecológicos', completed: false },
      { text: 'Gestión de alianzas con centros de investigación universitarios', completed: false }
    ],
    notesEn: 'Bridging academic peer-reviewed research with community knowledge and water assemblies.',
    notesEs: 'Conectar el conocimiento académico con las vivencias y luchas de los territorios.',
    githubUrl: 'https://github.com/danisantanderurrutia-coder/memoria-y-dignidad-maule'
  },
  {
    id: 'piratas',
    emoji: '🏴‍☠️',
    titleEn: 'Graphic Novel: War of the Pacific & Sea Legends',
    titleEs: 'Novela Gráfica: Guerra del Pacífico & Leyendas',
    subtitleEn: 'Historical-mythological comic novel on South Pacific naval combat and coastal nautical legends',
    subtitleEs: 'Cómic histórico-fantástico sobre la contienda naval y mitología del Pacífico Sur',
    categoryEn: 'Art, Graphic Novel & Narrative',
    categoryEs: 'Arte, Cómic & Narrativa',
    categoryColor: 'bg-amber-600 text-white',
    branch: 'comms',
    progress: 55,
    collaboratorsEn: 'Illustrators, Naval Historians & Scriptwriters',
    collaboratorsEs: 'Ilustradores, Historiadores & Guionistas',
    descEn: 'Graphic novel exploring the 1879 War of the Pacific, intertwining historical ironclad combat, South Pacific corsairs, and maritime Chilean mythology.',
    descEs: 'Creación de novela gráfica ambientada en el marco de la Guerra del Pacífico chilena, entrelazando batallas navales históricas, corsarios del Pacífico sur y mitos náuticos de las costas chilenas.',
    checklistEn: [
      { text: 'Define character development arcs (naval officers, corsairs, sea mythical beings)', completed: true },
      { text: 'Complete literary script for the first 3 chapters', completed: true },
      { text: 'Approve historical sketches of ironclad warships and coastal landscapes', completed: false },
      { text: 'Coordinate layout and printing pipeline with indie comic publisher', completed: false }
    ],
    checklistEs: [
      { text: 'Definir arco de personajes (corsarios, marinos y seres mitológicos)', completed: true },
      { text: 'Finalizar guión literario de los primeros 3 capítulos', completed: true },
      { text: 'Aprobar bocetos de embarcaciones navales históricas', completed: false },
      { text: 'Coordinar maquetación con la editorial o plataforma webcomic', completed: false }
    ],
    notesEn: 'Focus on contrasting gritty military historical accuracy with maritime folklore.',
    notesEs: 'Enfoque en el choque entre realismo militar histórico y leyendas populares del mar de Chile.'
  },
  {
    id: 'red_maule',
    emoji: '📻',
    titleEn: 'Maule Red // Community Media & Rural Warning System',
    titleEs: 'Maule Red // Red de Medios Territoriales',
    subtitleEn: 'Live broadcast radio, rural drinking water emergency alerts (APR), and regional journalism',
    subtitleEs: 'Radio en vivo, avisador de emergencias rurales (APR) y periodismo territorial',
    categoryEn: 'Grassroots Media & Rural Water Alerts',
    categoryEs: 'Medios Territoriales & APR',
    categoryColor: 'bg-emerald-600 text-white',
    branch: 'comms',
    progress: 40,
    collaboratorsEn: 'Local Peasant Reporters, Rural Water Committees (APR) & Agrarian Unions',
    collaboratorsEs: 'Reporteros Locales, Comunidades Campesinas & Redes de APR',
    descEn: 'Grassroots information platform for rural Maule. Features live community streaming radio, emergency alert system for rural water cuts (APR) and power outages, and interactive community news.',
    descEs: 'Plataforma comunitaria de información para el Maule Sur. Integra radio comunitaria en vivo, avisador de emergencias de Agua Potable Rural (APR) y cortes de suministro eléctrico, mapa territorial colaborativo y periodismo de utilidad cotidiana.',
    checklistEn: [
      { text: 'Prototype responsive web platform and rural APR outage map', completed: true },
      { text: 'Draft guidelines and community call for citizen peasant reporters', completed: true },
      { text: 'Convene first assembly of community media correspondents', completed: false },
      { text: 'Stream live broadcast feed across rural community frequencies', completed: false }
    ],
    checklistEs: [
      { text: 'Prototipar plataforma web y mapa de cortes y emergencias APR', completed: true },
      { text: 'Elaborar perfil de roles y convocatoria abierta para reporteros locales', completed: true },
      { text: 'Realizar primera asamblea o reunión de equipo fundador', completed: false },
      { text: 'Conectar señal streaming para la radio comunitaria en vivo', completed: false }
    ],
    notesEn: 'Addressing the isolation of rural peasant towns: community communication produced by and for local territories.',
    notesEs: 'Maule Red responde a la desconexión informativa de los territorios rurales.',
    githubUrl: 'https://github.com/danisantanderurrutia-coder/MauleRed'
  }
];

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose, currentLang }) => {
  const [filterBranch, setFilterBranch] = useState<'all' | 'science' | 'comms'>('all');
  const [selectedProjectId, setSelectedProjectId] = useState<string>(ACTIVE_INNOVATION_PROJECTS[0].id);

  if (!isOpen) return null;

  const filteredProjects = ACTIVE_INNOVATION_PROJECTS.filter((p) => {
    if (filterBranch === 'all') return true;
    return p.branch === filterBranch;
  });

  const currentProj = ACTIVE_INNOVATION_PROJECTS.find((p) => p.id === selectedProjectId) || filteredProjects[0] || ACTIVE_INNOVATION_PROJECTS[0];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
    >
      {/* Modal Container (GTA Heist Quest Corkboard / Tactical Blueprint) */}
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#0c1017] border-4 border-black rounded-2xl shadow-[10px_10px_0px_#dc2626] flex flex-col overflow-hidden text-white font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ============================================================== */}
        {/* 1. TOP HEADER: TACTICAL CORKBOARD BLUEPRINT                    */}
        {/* ============================================================== */}
        <div className="px-4 sm:px-6 py-3.5 bg-black border-b-3 border-black flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-3">
            <span className="bg-[#dc2626] text-white px-3 py-1 font-mono font-black text-xs sm:text-sm uppercase border-2 border-black shadow-[2px_2px_0px_#000] -rotate-1 flex items-center space-x-1.5">
              <Pin className="w-3.5 h-3.5" />
              <span>{currentLang === 'es' ? '[ PROYECTOS & INNOVACIÓN // I+D ]' : '[ VENTURES & INNOVATION // R&D ]'}</span>
            </span>
            <span className="hidden sm:inline-block bg-yellow-400 text-black font-mono font-black text-[10px] px-2 py-0.5 border border-black uppercase rotate-1">
              {currentLang === 'es' ? '8 INICIATIVAS ACTIVAS' : '8 ACTIVE INITIATIVES'}
            </span>
          </div>

          {/* Branch Filter Tabs (Ciencia vs Comunicaciones) */}
          <div className="flex items-center space-x-1.5 ml-auto">
            <button
              onClick={() => {
                setFilterBranch('all');
                setSelectedProjectId(ACTIVE_INNOVATION_PROJECTS[0].id);
              }}
              className={`px-2.5 py-1 font-mono font-bold text-[10px] sm:text-xs uppercase border-2 border-black transition-all cursor-pointer ${
                filterBranch === 'all'
                  ? 'bg-white text-black shadow-[2px_2px_0px_#000]'
                  : 'bg-white/10 text-neutral-300 hover:bg-white/20'
              }`}
            >
              {currentLang === 'es' ? 'TODOS (8)' : 'ALL (8)'}
            </button>

            <button
              onClick={() => {
                setFilterBranch('science');
                const firstScience = ACTIVE_INNOVATION_PROJECTS.find(p => p.branch === 'science');
                if (firstScience) setSelectedProjectId(firstScience.id);
              }}
              className={`px-2.5 py-1 font-mono font-bold text-[10px] sm:text-xs uppercase border-2 border-black transition-all cursor-pointer ${
                filterBranch === 'science'
                  ? 'bg-blue-600 text-white shadow-[2px_2px_0px_#000]'
                  : 'bg-white/10 text-neutral-300 hover:bg-blue-600/40'
              }`}
            >
              🔬 {currentLang === 'es' ? 'CIENCIA (4)' : 'SCIENCE (4)'}
            </button>

            <button
              onClick={() => {
                setFilterBranch('comms');
                const firstComms = ACTIVE_INNOVATION_PROJECTS.find(p => p.branch === 'comms');
                if (firstComms) setSelectedProjectId(firstComms.id);
              }}
              className={`px-2.5 py-1 font-mono font-bold text-[10px] sm:text-xs uppercase border-2 border-black transition-all cursor-pointer ${
                filterBranch === 'comms'
                  ? 'bg-orange-600 text-white shadow-[2px_2px_0px_#000]'
                  : 'bg-white/10 text-neutral-300 hover:bg-orange-600/40'
              }`}
            >
              📢 {currentLang === 'es' ? 'MEDIOS (4)' : 'COMMS (4)'}
            </button>

            <button
              onClick={onClose}
              className="p-1 rounded-lg bg-white/10 hover:bg-red-600 hover:text-white text-neutral-300 transition-all border border-white/20 active:scale-90 cursor-pointer ml-1"
              title={currentLang === 'es' ? 'Cerrar panel' : 'Close panel'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Left Project List (Sidebar) + Right Project Detail */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Left Column: Project Selector Tabs */}
          <div className="w-full md:w-80 bg-black/95 border-r-3 border-black overflow-y-auto p-3 space-y-2 shrink-0 no-scrollbar">
            <div className="text-[10px] font-mono font-black text-amber-400 uppercase tracking-widest px-1 pb-1">
              📌 {currentLang === 'es' ? 'TABLERO DE MISIONES' : 'MISSION DOSSIERS'} ({filteredProjects.length})
            </div>

            {filteredProjects.map((proj) => {
              const isSelected = proj.id === currentProj.id;
              return (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProjectId(proj.id)}
                  className={`p-2.5 border-2 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-white text-black border-black shadow-[4px_4px_0px_#dc2626] translate-x-1 -rotate-0.5'
                      : 'bg-[#121620] text-neutral-300 border-black/80 hover:bg-[#1a202c] hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base">{proj.emoji}</span>
                    <span
                      className={`text-[9px] font-mono font-black px-1.5 py-0.2 border border-black uppercase ${
                        isSelected ? 'bg-black text-yellow-300' : proj.categoryColor
                      }`}
                    >
                      {proj.branch === 'science' 
                        ? (currentLang === 'es' ? 'CIENCIA' : 'SCIENCE') 
                        : (currentLang === 'es' ? 'MEDIOS' : 'COMMS')} • {proj.progress}%
                    </span>
                  </div>

                  <div className="font-mono font-black text-xs uppercase mt-1 truncate">
                    {currentLang === 'es' ? proj.titleEs : proj.titleEn}
                  </div>

                  <div className={`text-[10px] truncate mt-0.5 ${isSelected ? 'text-neutral-700 font-medium' : 'text-neutral-400'}`}>
                    {currentLang === 'es' ? proj.subtitleEs : proj.subtitleEn}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Mission Detail Briefing Board */}
          <div className="flex-1 bg-[#10141d] overflow-y-auto p-4 sm:p-6 space-y-4 no-scrollbar">
            
            {/* Mission Hero Header */}
            <div className="space-y-2 border-b-2 border-white/10 pb-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{currentProj.emoji}</span>
                  <span className={`text-[10px] font-mono font-black px-2 py-0.5 border border-black uppercase ${currentProj.categoryColor}`}>
                    {currentLang === 'es' ? currentProj.categoryEs : currentProj.categoryEn}
                  </span>
                  <span className="text-[10px] font-mono bg-white/10 text-neutral-300 px-2 py-0.5 border border-white/20 uppercase">
                    {currentProj.branch === 'science' 
                      ? (currentLang === 'es' ? '🔬 Rama Científica' : '🔬 Science Branch') 
                      : (currentLang === 'es' ? '📢 Rama Comunicación & Cultura' : '📢 Comms & Culture Branch')}
                  </span>
                </div>

                {/* GitHub link button if applicable */}
                {currentProj.githubUrl && (
                  <a
                    href={currentProj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white font-mono font-black text-xs border-2 border-black shadow-[2px_2px_0px_#000] flex items-center space-x-1.5 transition-all cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Repo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              <h3 className="font-mono font-black text-lg sm:text-xl text-white uppercase tracking-tight">
                {currentLang === 'es' ? currentProj.titleEs : currentProj.titleEn}
              </h3>
              <p className="font-sans text-xs text-neutral-300">
                {currentLang === 'es' ? currentProj.subtitleEs : currentProj.subtitleEn}
              </p>
            </div>

            {/* Collaborators */}
            <div className="flex items-center space-x-2 font-mono text-xs text-neutral-300 bg-black/60 p-2.5 border-2 border-black shadow-[2px_2px_0px_#000]">
              <Users className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-neutral-400">{currentLang === 'es' ? 'Colaboradores:' : 'Collaborators:'}</span>
              <span className="text-white font-bold">
                {currentLang === 'es' ? currentProj.collaboratorsEs : currentProj.collaboratorsEn}
              </span>
            </div>

            {/* Operational Progress Bar */}
            <div className="p-3 bg-black border-2 border-black rounded-lg shadow-[3px_3px_0px_#000] space-y-1.5">
              <div className="flex items-center justify-between font-mono text-xs font-bold">
                <span className="text-amber-400">
                  {currentLang === 'es' ? 'AVANCE OPERATIVO' : 'OPERATIONAL PROGRESS'}
                </span>
                <span className="text-white font-black">{currentProj.progress}%</span>
              </div>
              <div className="w-full h-3 bg-neutral-900 border border-white/30 overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-red-500 via-amber-400 to-green-400 transition-all duration-500"
                  style={{ width: `${currentProj.progress}%` }}
                />
              </div>
            </div>

            {/* Strategic Objective */}
            <div className="p-3.5 bg-[#0a0e14] border-2 border-dashed border-white/30 rounded-lg space-y-1">
              <div className="font-mono text-[10px] text-yellow-400 font-black uppercase">
                {currentLang === 'es' ? '[ OBJETIVO ESTRATÉGICO & ALCANCE ]' : '[ STRATEGIC OBJECTIVE & SCOPE ]'}
              </div>
              <p className="font-sans text-xs text-neutral-200 leading-relaxed">
                {currentLang === 'es' ? currentProj.descEs : currentProj.descEn}
              </p>
            </div>

            {/* Subproject Tag (if applicable) */}
            {(currentProj.subprojectEn || currentProj.subprojectEs) && (
              <div className="p-2.5 bg-[#facc15]/10 border-2 border-[#facc15] text-[#facc15] font-mono text-xs font-bold rounded flex items-center space-x-2">
                <Sparkles className="w-4 h-4 shrink-0 text-[#facc15]" />
                <span>{currentLang === 'es' ? currentProj.subprojectEs : currentProj.subprojectEn}</span>
              </div>
            )}

            {/* Checklist of Real Milestones */}
            <div className="space-y-2">
              <div className="font-mono text-xs font-black text-white uppercase tracking-wider flex items-center space-x-2">
                <span>{currentLang === 'es' ? 'HITOS & CHECKLIST DE OPERACIÓN' : 'MILESTONES & OPERATION CHECKLIST'}</span>
              </div>

              <div className="space-y-1.5">
                {(currentLang === 'es' ? currentProj.checklistEs : currentProj.checklistEn).map((chk, cIdx) => (
                  <div
                    key={cIdx}
                    className={`p-2 border-2 border-black font-mono text-xs flex items-start space-x-2.5 ${
                      chk.completed
                        ? 'bg-emerald-950/60 text-emerald-200'
                        : 'bg-black/50 text-neutral-300'
                    }`}
                  >
                    {chk.completed ? (
                      <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <Square className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                    )}
                    <span className={chk.completed ? 'line-through opacity-80' : ''}>{chk.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Field Notes */}
            <div className="font-mono text-[10px] text-neutral-400 pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
              <span>* {currentLang === 'es' ? `Bitácora: ${currentProj.notesEs}` : `Field note: ${currentProj.notesEn}`}</span>
              {currentProj.githubUrl && (
                <a 
                  href={currentProj.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-400 hover:text-white underline font-mono text-[10px]"
                >
                  {currentLang === 'es' ? 'Repositorio GitHub' : 'GitHub Repository'}
                </a>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
