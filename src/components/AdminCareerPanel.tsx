import React, { useState } from 'react';
import {
  Lock,
  ArrowLeft,
  Copy,
  Check,
  ExternalLink,
  Globe,
  FileText,
  Sparkles,
  Video,
  Briefcase,
  Target,
  Share2,
  Download,
  Eye,
  Compass,
  CheckCircle2,
  Building2,
  Terminal
} from 'lucide-react';
import { Language } from '../types';
import { resolveAsset } from '../utils';

interface AdminCareerPanelProps {
  currentLang: Language;
  onToggleLanguage: () => void;
  onBackToHome: () => void;
  onOpenDeepLinkView: (view: 'game' | 'dossier', cat?: string, mission?: string, lang?: Language) => void;
}

type AdminTab = 'deeplinks' | 'coverletters' | 'interviews' | 'linkedin' | 'ogbanner';

export const AdminCareerPanel: React.FC<AdminCareerPanelProps> = ({
  currentLang,
  onToggleLanguage,
  onBackToHome,
  onOpenDeepLinkView
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('deeplinks');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [linkLang, setLinkLang] = useState<Language>('en');
  const [letterLang, setLetterLang] = useState<'en' | 'de' | 'es'>('en');

  const baseUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname.replace(/\/admin\/?$/, '/')}`
      : 'https://danisantanderurrutia-coder.github.io/portafolio/';

  const copyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const langSuffix = linkLang === 'es' ? '&lang=es' : '';
  const langQueryOnly = linkLang === 'es' ? '?lang=es' : '';

  const DEEP_LINK_PROFILES = [
    {
      id: 'policy-advisory',
      badge: '🏛️ PERFIL 1 • INCIDENCIA LEGISLATIVA & ALTA POLÍTICA PÚBLICA',
      title: 'Incidencia Legislativa, Asesoría Parlamentaria & Gobernanza Hídrica',
      targetRoles: 'Senior Public Policy Advisor, Legislative Affairs Lead, Science-Policy Officer (Ministerios, Parlamentos, ONU, GIZ)',
      Highlight:
        'Abre el Globo 3D directamente en tu intervención oficial ante la Cámara de Diputadas/os, asesoría a la Convención Constitucional y planes de ordenamiento de cuencas.',
      query: `policy${langQueryOnly}`,
      view: 'game' as const,
      cat: 'policy',
      mission: 'congreso-valparaiso'
    },
    {
      id: 'eu-carbon-audit',
      badge: '🇪🇺 PERFIL 2 • FISCALIZACIÓN UE & AUDITORÍA DE CARBONO (THINK TANKS / ONGs)',
      title: 'Fiscalización de Políticas Europeas (RED III / LULUCF) & Auditoría de Carbono',
      targetRoles: 'EU Climate Policy Officer, Carbon Accounting Auditor, Biomass & Supply-Chain Analyst (Carbon Market Watch, Agora, SEI, EPN, Adelphi)',
      Highlight:
        'Abre el Globo 3D en tu auditoría científica de contabilidad de carbono y cadenas globales de biomasa bajo la directiva europea RED III junto a EPN, BAN y Global Forest Coalition.',
      query: `science?mission=science-biomass-risk${langSuffix}`,
      view: 'game' as const,
      cat: 'science',
      mission: 'science-biomass-risk'
    },
    {
      id: 'degrowth-ecological-econ',
      badge: '🌍 PERFIL 3 • ECOLOGÍA POLÍTICA, DECRECIMIENTO & ECONOMÍA ECOLÓGICA',
      title: 'Ecología Política, Decrecimiento (Oslo 2025) & Doughnut Economics (DEAL)',
      targetRoles: 'Political Ecology Researcher, Post-Growth / Ecological Economist, Environmental Justice Fellow (ICTA-UAB, DEAL, Heinrich Böll, TNI)',
      Highlight:
        'Abre el Globo 3D en tu ponencia oficial en la 10ª Conferencia Internacional de Decrecimiento en Oslo (2025), articulada con DEAL Copenhague, ENJUST Bonn y tu tetralogía en OLCA.',
      query: `policy?mission=oslo-degrowth${langSuffix}`,
      view: 'game' as const,
      cat: 'policy',
      mission: 'oslo-degrowth'
    },
    {
      id: 'agritwin-agrotech',
      badge: '🤖 PERFIL 4 & 7 • AI PRODUCT OWNER / TECH LEAD & GEMELOS DIGITALES 3D',
      title: 'AgroTech Chile & AgriTwin 3D (122.000 ha) • AI Product Owner & Digital Twins Lead',
      targetRoles: 'AI Product Owner, Environmental Technical Lead, Digital Twins Researcher (Fraunhofer, Helmholtz UFZ, Deltares, AgTech / GovTech)',
      Highlight:
        'Abre el Globo 3D en tu suite de Gemelos Digitales AgriTwin 3D y AgroTwin Regional (TypeScript, React 19, Three.js WebGL, Python y nodos ESP32 en C++ con balance FAO-56 e incendios/inundaciones).',
      query: `projects?mission=rd-agrotech-agritwin${langSuffix}`,
      view: 'game' as const,
      cat: 'rd',
      mission: 'rd-agrotech-agritwin'
    },
    {
      id: 'rewild-dmrv',
      badge: '🛰️ PERFIL 5 • GEOSPATIAL DATA SCIENTIST & REMOTE SENSING ML (CLIMATE-TECH & dMRV)',
      title: 'ReWild Suite (PWA Offline dMRV) • Carbono IPCC Tier 2, GEE, Sentinel-2 & GEDI LiDAR',
      targetRoles: 'Geospatial Data Scientist, Remote Sensing ML Engineer, dMRV Carbon Specialist (Sylvera, Pachama, Planet, OroraTech, Kayrros)',
      Highlight:
        'Abre el Globo 3D en ReWild Suite: sistema dMRV 100% offline con 9 protocolos ecológicos, carbono IPCC Tier 2, edafología VESS y cartografía satelital NDVI/LiDAR en Chile y Portugal.',
      query: `projects?mission=rd-rewild${langSuffix}`,
      view: 'game' as const,
      cat: 'rd',
      mission: 'rd-rewild'
    },
    {
      id: 'natcat-risk',
      badge: '🏦 PERFIL 6 • CATASTROPHE RISK MODELER & PHYSICAL CLIMATE RISK (FINANZAS & SEGUROS)',
      title: 'Modelación de Riesgo Catastrófico (NatCat) & Riesgo Climático Físico (Incendios, Inundaciones, Sequía)',
      targetRoles: 'Catastrophe Risk Modeler (NatCat), Physical Climate Risk Analyst, ESG / TCFD Risk Specialist (Hannover Re, Munich Re, Swiss Re, Allianz, Moody’s RMS)',
      Highlight:
        'Abre el Globo 3D en tu modelación de riesgo físico y catastrófico (Amenaza × Exposición × Vulnerabilidad) para megaincendios, inundaciones (Delft3D/TWI) y sequía hidrogeológica.',
      query: `science?mission=science-wildfires-risks${langSuffix}`,
      view: 'game' as const,
      cat: 'science',
      mission: 'science-wildfires-risks'
    },
    {
      id: 'kiel-ghg',
      badge: '🇩🇪 PERFIL 2, 5 & 7 • TURBERAS, FLUJOS GEI (EDDY COVARIANCE) & WETLAND MONITOR',
      title: 'Hidrogeofísica, Rehumedecimiento de Turberas, Flujos GEI & Gemelo Digital (CAU Kiel)',
      targetRoles: 'Peatland / GHG Modeler, Ecohydrological Digital Twin Researcher, dMRV Scientist (Greifswald Mire Centre, Thünen, UFZ, Ramboll, DHI)',
      Highlight:
        'Abre el Globo 3D directamente en Kiel mostrando tus resultados cuantitativos en Wallener Au (transición sumidero-fuente por metano CH₄, Eddy Covariance, paludicultura, compactación y Wetland Monitor).',
      query: `science?mission=kiel-cau${langSuffix}`,
      view: 'game' as const,
      cat: 'science',
      mission: 'kiel-cau'
    },
    {
      id: 'wetland-monitor',
      badge: '🌿 PERFIL 7 • INVESTIGADOR DE GEMELOS DIGITALES EN CENTROS TECNOLÓGICOS',
      title: 'App Humedal Monitor (Wetland Monitor) • Peatland Ecohydrological Digital Twin',
      targetRoles: 'Digital Twin Researcher, Scientific Software Architect, Environmental Modeling Engineer',
      Highlight:
        'Abre el Globo 3D directamente en la ficha dedicada a tu aplicación Wetland Monitor con su logotipo oficial, simulador diurno/estacional 24h/365d y repositorio en GitHub.',
      query: `science?mission=wetland-monitor-app${langSuffix}`,
      view: 'game' as const,
      cat: 'science',
      mission: 'wetland-monitor-app'
    },
    {
      id: 'hombros-metabolismo',
      badge: '⚖️ CHILE & EUROPA • METABOLISMO TERRITORIAL & CAPACIDAD PORTANTE',
      title: 'HOMBROS: Sistema Metabólico Territorial & Capacidad Portante H = (S·E·K)^(1/3)',
      targetRoles: 'Territorial Systems Modeler, Biophysical Economist, ESG & Carrying Capacity Auditor, Environmental Tech Lead',
      Highlight:
        'Abre el Globo 3D en la plataforma HOMBROS para modelación de capacidad portante no compensatoria y auditoría metabólica birregional en 8 territorios de Chile y Europa.',
      query: `science?mission=rd-hombros${langSuffix}`,
      view: 'game' as const,
      cat: 'rd',
      mission: 'rd-hombros'
    },
    {
      id: 'poznan-water',
      badge: '🇵🇱 POLONIA / UE • CALIDAD DEL AGUA & DIRECTIVA MARCO DEL AGUA',
      title: 'Limnología, Bioindicadores Acuáticos & Directiva Marco del Agua (AMU Poznań)',
      targetRoles: 'Water Quality Specialist, Freshwater Ecologist, EU Water Framework Directive Officer',
      Highlight:
        'Abre el Globo 3D en Poznań destacando tus examinaciones en laboratorio e in situ en lagos y estanques (ponds) para su protección como refugios de biodiversidad.',
      query: `science?mission=poznan-amu${langSuffix}`,
      view: 'game' as const,
      cat: 'science',
      mission: 'poznan-amu'
    },
    {
      id: 'dossier-paper',
      badge: '📄 COMITÉS ACADÉMICOS & LECTURA RÁPIDA',
      title: 'Dossier Científico Ejecutivo en Formato Papel (Sin 3D)',
      targetRoles: 'Profesores titulares, Comités de Doctorado (UFZ, PIK, WSL), Directores de área conservadores',
      Highlight:
        'Ideal para académicos senior que prefieren leer un expediente editorial limpio en formato revista científica sin navegar un entorno 3D.',
      query: `dossier${langQueryOnly}`,
      view: 'dossier' as const
    }
  ];

  const COVER_LETTER_TEMPLATES = {
    en: [
      {
        id: 'cl-en-science',
        title: '1. For Hydrology, Peatland / GHG Modeling, GIS & Environmental Engineering (Europe)',
        context: 'Insert this paragraph in the body of your Cover Letter when applying to research centers, engineering consultancies (Ramboll, DHI, Sweco), or climate agencies:',
        text: `Across my Dual European M.Sc. (CAU Kiel & AMU Poznań) and my B.Sc. in Geophysics (Universidad de Chile), I have focused on turning complex field and micrometeorological data into actionable environmental models. In my Master’s research at CAU Kiel (Wallener Au Peatland), I quantified the ecosystem’s transition between carbon sink and source during managed rewetting driven by acute methane (CH4) spikes and seasonal N2O pulses under micrometeorological (Eddy Covariance) and soil physical controls—evaluating historical paludiculture legacies and agricultural machinery compaction. To make these findings interactive, I developed the "Wetland Monitor" digital twin web application. In parallel, at AMU Poznań I verified freshwater quality across Polish lakes and ponds through laboratory and in-situ bioindicator examinations, building upon my geophysical fieldwork in Chile’s Maule Basin where I quantified the combined impact of agroforestry plantations and climate change on soil electrical resistivity (VES) and water table drawdown.\n\n👉 Interactive 3D Case Studies & Wetland Monitor App: ${baseUrl}science?mission=kiel-cau`
      },
      {
        id: 'cl-en-policy',
        title: '2. For EU Policy Oversight, Carbon Accounting Audits, Legislative Advocacy & Ecological Economics (Think Tanks / NGOs)',
        context: 'Use this when applying to organizations bridging EU policy oversight, carbon auditing, political ecology, and advocacy (Carbon Market Watch, Agora, SEI, Adelphi, GIZ, EPN, DEAL):',
        text: `What sets my profile apart is the ability to bridge rigorous biophysical modeling with European policy oversight, carbon accounting audits, and legislative advocacy. Combining a background in Geophysics (Universidad de Chile) and a Dual European M.Sc. in Environmental Management and Protection (CAU Kiel & AMU Poznań), I translate quantitative evidence—from peatland GHG radiative balances (GWP20/GWP100 via Eddy Covariance) and EU RED III woody biomass supply-chain carbon audits (with EPN, BAN, and Global Forest Coalition) to Ecological Economics and Degrowth (Official Speaker at Oslo Degrowth Conference 2025 & DEAL Doughnut Economics)—into parliamentary testimony, watershed transition plans, and large-scale public campaigns (+700k audience reach).\n\n👉 Explore my EU Carbon Audit & Policy Portfolio on the 3D Globe: ${baseUrl}science?mission=science-biomass-risk`
      },
      {
        id: 'cl-en-tech-risk',
        title: '3. For Digital Twins, AI Product Owner / Tech Lead, Geospatial ML (dMRV) & Catastrophe Risk Modeling (NatCat / Finance)',
        context: 'Use this for Reinsurance & Physical Climate Risk (Hannover Re, Munich Re, Swiss Re), Climate-Tech & dMRV (Sylvera, Pachama, Planet), or Technological Centers (Fraunhofer, Helmholtz UFZ, Deltares):',
        text: `As a Geophysicist (B.Sc.) holding a Dual European M.Sc. (CAU Kiel & AMU Poznań), I operate at the intersection of biophysical hazard modeling, geospatial data science, and full-stack software leadership (AI Product Owner / Technical Lead). I have architected and deployed multiple operational environmental Digital Twins and dMRV platforms: "Wetland Monitor" (24h/365d peatland GHG simulation calibrated to Eddy Covariance at CAU Kiel), "AgriTwin 3D & AgroTwin Regional" (122,000 ha WebGL/Three.js + React/TypeScript + C++ ESP32 digital twin modeling wildfire FWI propagation, TWI flood risk, and 3-layer FAO-56 soil water balance), and "ReWild Suite" (100% offline PWA for IPCC Tier 2 carbon dMRV and Sentinel-2 / GEDI LiDAR cartography). Combining Delft3D coastal storm-surge modeling, ERT/VES aquifer drought profiling, and multi-spectral Remote Sensing ML (Python, GEE, R, PostGIS), I deliver end-to-end physical climate risk (NatCat: Hazard × Exposure × Vulnerability) and environmental decision systems.\n\n👉 Interactive 3D Digital Twins & dMRV Suite: ${baseUrl}projects?mission=rd-agrotech-agritwin`
      }
    ],
    de: [
      {
        id: 'cl-de-science',
        title: '1. Für Umweltmanagement, Moorforschung, Hydrologie & GIS-Ingenieurbüros (Deutschland / DACH)',
        context: 'Absatz für das Anschreiben bei Bewerbungen in Deutschland (Ingenieurbüros, Landesämter, UFZ, Thünen-Institut, Greifswald Mire Centre):',
        text: `Durch mein europäisches Doppelmasterstudium in Environmental Management und Environmental Protection (CAU Kiel & AMU Poznań) sowie meinen Hintergrund als Geophysiker (Universidad de Chile) verbinde ich bodenphysikalische und ökohydrologische Labor- und Feldarbeit mit moderner Datenmodellierung (Python, R, QGIS). In meiner Masterarbeit an der CAU Kiel (Wallener Au) habe ich den Übergang wiedervernässter Niedermoore zwischen Kohlenstoffsenke und -quelle infolge akuter Methan-Impulse (CH4) sowie den Austausch von Treibhausgasen (CO2, CH4, N2O) unter mikrometeorologischen (Eddy-Kovarianz) und bodenphysikalischen Faktoren quantifiziert. Dabei untersuchte ich auch die Auswirkungen früherer Paludikultur- und Entwässerungsnutzungen sowie die Bodenverdichtung durch landwirtschaftliche Maschinen und entwickelte hierfür den interaktiven digitalen Zwilling „Wetland Monitor“. Ergänzend habe ich an der AMU Poznań die Wasserqualität verschiedener Seen und Kleingewässer im Labor und in situ zum Schutz der Biodiversität überprüft.\n\n👉 Interaktives 3D-Portfolio & Wetland Monitor App: ${baseUrl}science?mission=kiel-cau`
      }
    ],
    es: [
      {
        id: 'cl-es-science',
        title: '1. Para Consultoras Hidrogeológicas, Recursos Hídricos, Ministerios (MMA/DGA) y Centros en Chile',
        context: 'Párrafo de impacto para postulaciones técnicas, ambientales e hidrogeofísicas en Chile y Latinoamérica:',
        text: `Mi trayectoria articula la geofísica aplicada y la hidrología de cuencas en Chile con la investigación avanzada en gestión y protección ambiental en Europa (Doble M.Sc. en CAU Kiel, Alemania y AMU Poznań, Polonia). En la cuenca del Maule (FCFM U. de Chile), cuantifiqué en terreno el efecto combinado de la actividad agroforestal y el cambio climático sobre la resistividad eléctrica de suelos (mediante Sondeos Eléctricos Verticales SEV) y el abatimiento del nivel freático. Posteriormente, en Alemania cuantifiqué la transición de turberas en rehumedecimiento entre sumidero y fuente de GEI (CO2, CH4, N2O) bajo forzantes micrometeorológicos y compactación mecánica por maquinaria agrícola (desarrollando la aplicación interactiva "Humedal Monitor / Wetland Monitor"), y en Polonia verifiqué en laboratorio e in situ la calidad ecológica del agua en diversos lagos y estanques para su conservación como áreas de biodiversidad.\n\n👉 Explorar casos de estudio en el Globo 3D: ${baseUrl}science?mission=science-geophysics-soils&lang=es`
      },
      {
        id: 'cl-es-policy',
        title: '2. Para Dirección de Comunicaciones, Incidencia Legislativa, ONGs y Fundaciones',
        context: 'Párrafo para cargos directivos en fundaciones ambientales, asesoría parlamentaria o dirección de proyectos:',
        text: `Aporto un perfil puente poco frecuente en el sector socioambiental: la capacidad de traducir ciencia biofísica dura (física de suelos, hidrología y modelación numérica en Python/QGIS) en incidencia legislativa directa (exposición técnica ante el Congreso Nacional y propuestas de ordenamiento de cuencas) y dirección de medios y campañas masivas con más de 700.000 seguidores de alcance orgánico.\n\n👉 Ver portafolio de Políticas Públicas y Comunicaciones: ${baseUrl}policy?lang=es`
      }
    ]
  };

  return (
    <div className="min-h-screen w-full bg-[#07090d] text-white font-sans flex flex-col selection:bg-[#facc15] selection:text-black">
      {/* TOP COMMAND HEADER */}
      <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b-2 border-neutral-800 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-[#facc15] text-black flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_#fff]">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-black text-xs sm:text-sm uppercase tracking-wider text-[#facc15]">
                PANEL PRIVADO DE ADMINISTRACIÓN // ESTRATEGIA DE EMPLEO
              </span>
              <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded">
                EUROPA &amp; CHILE
              </span>
            </div>
            <p className="text-[11px] font-mono text-neutral-400">
              Centro táctico de enlaces quirúrgicos, plantillas de postulación, guion de entrevistas y laboratorio og:image
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onToggleLanguage}
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono font-bold flex items-center space-x-1.5 border border-white/15 cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-[#facc15]" />
            <span>{currentLang.toUpperCase()}</span>
          </button>
          <button
            onClick={onBackToHome}
            className="px-3.5 py-1.5 rounded-lg bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs uppercase flex items-center space-x-1.5 border-2 border-black cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al Portafolio</span>
          </button>
        </div>
      </header>

      {/* NAVIGATION TABS */}
      <div className="bg-[#0c1017] border-b border-neutral-800 px-4 sm:px-8 py-2.5 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 min-w-max">
          {[
            { id: 'deeplinks', label: '1. Enlaces Quirúrgicos (Deep-Links)', icon: <Target className="w-4 h-4" /> },
            { id: 'coverletters', label: '2. Plantillas Cover Letter (EN / DE / ES)', icon: <FileText className="w-4 h-4" /> },
            { id: 'interviews', label: '3. Guion en Entrevistas (Zoom/Teams)', icon: <Video className="w-4 h-4" /> },
            { id: 'linkedin', label: '4. Estrategia LinkedIn, ATS & Empleadores', icon: <Briefcase className="w-4 h-4" /> },
            { id: 'ogbanner', label: '5. Prueba Banner og:image (1200×630)', icon: <Eye className="w-4 h-4" /> }
          ].map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as AdminTab)}
                className={`px-3.5 py-2 rounded-xl font-mono text-xs font-bold flex items-center space-x-2 transition cursor-pointer ${
                  active
                    ? 'bg-[#facc15] text-black shadow-[3px_3px_0px_#000] border border-black'
                    : 'bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTENT BODY */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 space-y-6">
        {/* TAB 1: DEEP-LINKS */}
        {activeTab === 'deeplinks' && (
          <div className="space-y-5">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-emerald-950/50 border border-blue-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="font-mono font-black text-base sm:text-lg text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#facc15]" />
                  <span>GENERADOR DE PUERTAS DE ENTRADA POR VACANTE (DEEP-LINKING)</span>
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-3xl">
                  Nunca envíes la misma URL genérica a ofertas distintas. Selecciona el idioma de la oferta laboral y copia el enlace que abre directamente la misión o expediente que ese reclutador necesita ver en los primeros 5 segundos.
                </p>
              </div>

              {/* Language selector for generated links */}
              <div className="flex items-center space-x-2 bg-black/60 p-1.5 rounded-xl border border-white/15 shrink-0">
                <span className="font-mono text-[11px] text-neutral-400 px-2">Idioma del enlace:</span>
                <button
                  onClick={() => setLinkLang('en')}
                  className={`px-3 py-1 rounded-lg font-mono text-xs font-black cursor-pointer ${
                    linkLang === 'en' ? 'bg-[#facc15] text-black' : 'text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  🇬🇧 EN (Europa/Global)
                </button>
                <button
                  onClick={() => setLinkLang('es')}
                  className={`px-3 py-1 rounded-lg font-mono text-xs font-black cursor-pointer ${
                    linkLang === 'es' ? 'bg-[#facc15] text-black' : 'text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  🇨🇱 ES (Chile/LATAM)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DEEP_LINK_PROFILES.map((item) => {
                const fullUrl = `${baseUrl}${item.query}`;
                const isCopied = copiedId === item.id;
                return (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-[#111622] border border-white/10 hover:border-[#facc15]/60 transition flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono font-black text-[10px] px-2 py-0.5 rounded bg-white/10 text-[#facc15] uppercase">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="font-mono font-bold text-sm sm:text-base text-white">
                        {item.title}
                      </h3>
                      <div className="text-[11px] font-mono text-emerald-400">
                        <strong>Cargos objetivo:</strong> {item.targetRoles}
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {item.Highlight}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <div className="px-2.5 py-1.5 rounded-lg bg-black/70 font-mono text-[10px] text-neutral-400 truncate border border-white/5">
                        {fullUrl}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => copyText(item.id, fullUrl)}
                          className="flex-1 py-2 px-3 rounded-xl bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer transition"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-4 h-4 text-emerald-700" />
                              <span>¡URL Copiada!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copiar Enlace ({linkLang.toUpperCase()})</span>
                            </>
                          )}
                        </button>
                        <button
                          onClick={() => onOpenDeepLinkView(item.view, item.cat, item.mission, linkLang)}
                          className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs flex items-center gap-1.5 cursor-pointer transition"
                          title="Probar vista ahora"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Probar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: COVER LETTERS / ANSCHREIBEN */}
        {activeTab === 'coverletters' && (
          <div className="space-y-5">
            <div className="p-4 rounded-2xl bg-[#111622] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-mono font-black text-base sm:text-lg text-white">
                  EL MÉTODO DEL &ldquo;CASO DE ESTUDIO ANCLADO&rdquo; (COVER LETTERS &amp; ANSCHREIBEN)
                </h2>
                <p className="text-xs text-neutral-300 mt-1">
                  En Alemania, Suiza, Países Bajos, Escandinavia y Chile, incluir un párrafo con tus hallazgos cuantitativos reales y un enlace directo a la misión en tu Globo 3D multiplica la tasa de respuesta para entrevistas.
                </p>
              </div>
              <div className="flex items-center space-x-1.5 bg-black p-1.5 rounded-xl border border-white/15 shrink-0">
                {(['en', 'de', 'es'] as const).map((lng) => (
                  <button
                    key={lng}
                    onClick={() => setLetterLang(lng)}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs font-black uppercase cursor-pointer ${
                      letterLang === lng ? 'bg-[#facc15] text-black' : 'text-neutral-300 hover:bg-white/10'
                    }`}
                  >
                    {lng === 'en' ? '🇬🇧 English' : lng === 'de' ? '🇩🇪 Deutsch' : '🇨🇱 Español'}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {COVER_LETTER_TEMPLATES[letterLang].map((tpl) => {
                const isCopied = copiedId === tpl.id;
                return (
                  <div key={tpl.id} className="p-5 rounded-2xl bg-[#111622] border border-white/10 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h3 className="font-mono font-bold text-sm sm:text-base text-[#facc15]">{tpl.title}</h3>
                        <p className="text-xs text-neutral-400">{tpl.context}</p>
                      </div>
                      <button
                        onClick={() => copyText(tpl.id, tpl.text)}
                        className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-black text-xs uppercase flex items-center gap-1.5 cursor-pointer"
                      >
                        {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopied ? '¡Texto Copiado!' : 'Copiar Párrafo'}</span>
                      </button>
                    </div>
                    <pre className="p-4 rounded-xl bg-black/70 border border-white/10 text-xs sm:text-sm text-neutral-200 font-sans whitespace-pre-wrap leading-relaxed">
                      {tpl.text}
                    </pre>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: INTERVIEW PLAYBOOK */}
        {activeTab === 'interviews' && (
          <div className="space-y-5">
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-blue-950/60 border border-emerald-500/30 space-y-2">
              <h2 className="font-mono font-black text-base sm:text-lg text-white flex items-center gap-2">
                <Video className="w-5 h-5 text-emerald-400" />
                <span>TU &ldquo;ARMA SECRETA&rdquo; EN ENTREVISTAS POR ZOOM / TEAMS (RECORRIDO EN 3 MINUTOS)</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300">
                Cuando te hagan la primera pregunta clásica (<em>&ldquo;Tell us about yourself / Erzählen Sie etwas über sich / Cuéntanos sobre tu experiencia&rdquo;</em>), di: <strong>&ldquo;¿Me permiten compartir pantalla 2 minutos para mostrarles visualmente los sitios de estudio y herramientas que desarrollé?&rdquo;</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#111622] border border-blue-500/30 space-y-2.5">
                <div className="font-mono font-black text-xs text-blue-400 uppercase">
                  MINUTO 0:00 – 1:00 • FUNDAMENTO GEOFÍSICO (CHILE)
                </div>
                <h3 className="font-mono font-bold text-sm text-white">
                  1. Cuenca del Maule (FCFM U. de Chile)
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Abre la misión <code className="text-blue-300">science-geophysics-soils</code>. Muestra tus fotos reales instalando pluviómetros e instrumentación de Sondeos Eléctricos Verticales (SEV). Explica cómo cuantificaste el efecto de la actividad agroforestal y el cambio climático en la resistividad del suelo y el nivel freático.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#111622] border border-emerald-500/30 space-y-2.5">
                <div className="font-mono font-black text-xs text-emerald-400 uppercase">
                  MINUTO 1:00 – 2:15 • DOBLE MÁSTER EUROPEO &amp; APP
                </div>
                <h3 className="font-mono font-bold text-sm text-white">
                  2. Giro hacia Kiel 🇩🇪 (Wetland Monitor) &amp; Poznań 🇵🇱
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Haz clic en <code className="text-emerald-300">kiel-cau</code> y <code className="text-emerald-300">wetland-monitor-app</code>. El globo rota a Alemania. Explica la transición de la turbera de sumidero a fuente durante el <em>rewetting</em> por metano (CH₄), el legado de paludicultura y compactación por maquinaria agrícola, y abre en 1 clic tu app interactiva <strong>Wetland Monitor</strong>. Luego muestra Poznań (<code className="text-emerald-300">poznan-amu</code>) con tus análisis de calidad de agua en lagos y estanques.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#111622] border border-amber-500/30 space-y-2.5">
                <div className="font-mono font-black text-xs text-amber-400 uppercase">
                  MINUTO 2:15 – 3:00 • TRADUCCIÓN A DECISIÓN PÚBLICA
                </div>
                <h3 className="font-mono font-bold text-sm text-white">
                  3. Incidencia, Políticas &amp; Comunicación
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Cierra mostrando cómo esa capacidad analítica no se queda guardada en un paper: sabes presentarla ante comisiones parlamentarias (<code className="text-amber-300">congreso-valparaiso</code>), cumbres europeas (Oslo, Davos, Copenhague) y transformarla en herramientas web abiertas (GitHub) para tomadores de decisiones.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: LINKEDIN, ATS & TARGET EMPLOYERS */}
        {activeTab === 'linkedin' && (
          <div className="space-y-6">
            {/* ATS Keywords */}
            <div className="p-5 rounded-2xl bg-[#111622] border border-white/10 space-y-3">
              <h2 className="font-mono font-black text-base text-[#facc15] flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>PALABRAS CLAVE ATS (PARA TU TITULAR DE LINKEDIN Y CV EN ALEMANIA/UE Y CHILE)</span>
              </h2>
              <p className="text-xs text-neutral-300">
                Los sistemas de filtrado automático (Workday, Personio, SAP SuccessFactors en Alemania) buscan coincidencias exactas. Copia el titular según la familia de cargos a la que apuntes:
              </p>
              <div className="space-y-2.5">
                <div className="p-3.5 rounded-xl bg-black border border-white/10 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-mono text-[#facc15] uppercase font-bold mb-1">
                      Opción A • Tech, Digital Twins, Geospatial ML (dMRV) &amp; NatCat Risk
                    </div>
                    <code className="text-xs text-emerald-300 font-mono">
                      Geophysicist (B.Sc.) &amp; Dual European M.Sc. (CAU Kiel &amp; AMU Poznań) | 3D Digital Twins, Geospatial ML &amp; dMRV, Physical Climate Risk (NatCat) &amp; Environmental AI Product Owner
                    </code>
                  </div>
                  <button
                    onClick={() =>
                      copyText(
                        'li-headline-a',
                        'Geophysicist (B.Sc.) & Dual European M.Sc. (CAU Kiel & AMU Poznań) | 3D Digital Twins, Geospatial ML & dMRV, Physical Climate Risk (NatCat) & Environmental AI Product Owner'
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-[#facc15] text-black font-mono font-black text-xs shrink-0 cursor-pointer"
                  >
                    {copiedId === 'li-headline-a' ? '¡Copiado!' : 'Copiar Titular A'}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-black border border-white/10 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-mono text-cyan-400 uppercase font-bold mb-1">
                      Opción B • Política Pública, Auditoría de Carbono UE (RED III) &amp; Economía Ecológica
                    </div>
                    <code className="text-xs text-emerald-300 font-mono">
                      Geophysicist (B.Sc.) &amp; Dual European M.Sc. (CAU Kiel &amp; AMU Poznań) | EU Climate Policy Oversight, Carbon Accounting Audits (RED III / dMRV), Legislative Advocacy &amp; Ecological Economics
                    </code>
                  </div>
                  <button
                    onClick={() =>
                      copyText(
                        'li-headline-b',
                        'Geophysicist (B.Sc.) & Dual European M.Sc. (CAU Kiel & AMU Poznań) | EU Climate Policy Oversight, Carbon Accounting Audits (RED III / dMRV), Legislative Advocacy & Ecological Economics'
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-[#facc15] text-black font-mono font-black text-xs shrink-0 cursor-pointer"
                  >
                    {copiedId === 'li-headline-b' ? '¡Copiado!' : 'Copiar Titular B'}
                  </button>
                </div>
              </div>
            </div>

            {/* Target Employers Map */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#111622] border border-blue-500/30 space-y-3">
                <h3 className="font-mono font-black text-sm text-blue-400 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>EMPLEADORES OBJETIVO EN ALEMANIA &amp; EUROPA (POR PERFIL)</span>
                </h3>
                <ul className="space-y-2 text-xs text-neutral-300">
                  <li>
                    <strong className="text-white">• Reaseguros, Finanzas &amp; Riesgo Catastrófico (NatCat):</strong> Hannover Re (sede central en Hannover), Munich Re, Swiss Re, Allianz Climate Solutions, Moody’s RMS, Verisk, AXA Climate.
                  </li>
                  <li>
                    <strong className="text-white">• Centros Tecnológicos, Gemelos Digitales &amp; Turberas:</strong> Fraunhofer (IOSB / IGD), Helmholtz UFZ (Leipzig), Greifswald Mire Centre (GMC), Thünen-Institut, PIK Potsdam, WSL (Suiza), Deltares (Países Bajos).
                  </li>
                  <li>
                    <strong className="text-white">• Climate-Tech, Geospatial ML &amp; Sistemas dMRV:</strong> Sylvera, Pachama, Planet Labs (Berlín), OroraTech (Múnich - incendios satelitales), Kayrros, Puro.earth, South Pole.
                  </li>
                  <li>
                    <strong className="text-white">• Fiscalización Políticas UE, Auditoría Carbono &amp; Economía Ecológica:</strong> Carbon Market Watch (Bruselas), Agora Agrar / Agora Energiewende (Berlín), SEI, Adelphi, Climate Analytics, GIZ, DEAL (Doughnut Economics), EPN / Fern.
                  </li>
                  <li>
                    <strong className="text-white">• Consultoras de Ingeniería &amp; AI Product Ownership Ambiental:</strong> Ramboll, DHI Group, Sweco, COWI, WSP, Mull und Partner (Hannover), AFRY.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#111622] border border-emerald-500/30 space-y-3">
                <h3 className="font-mono font-black text-sm text-emerald-400 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>EMPLEADORES OBJETIVO EN CHILE &amp; LATAM</span>
                </h3>
                <ul className="space-y-2 text-xs text-neutral-300">
                  <li>
                    <strong className="text-white">• Instituciones Públicas y Centros de Excelencia:</strong> Dirección General de Aguas (DGA - Modelación Estratégica de Cuencas), Ministerio del Medio Ambiente (Humedales / Cambio Climático), CR2 (U. de Chile), CIREN, INFOR.
                  </li>
                  <li>
                    <strong className="text-white">• Consultoras Hidrogeológicas y Ambientales:</strong> Amphos 21, Montgomery &amp; Associates, GeoHidrología, Arcadis Chile, WSP, Knight Piésold.
                  </li>
                  <li>
                    <strong className="text-white">• Organismos Internacionales y Fundaciones:</strong> CEPAL (División de Recursos Naturales), FAO Chile, PNUD, WWF Chile, Fundación Terram, Fundación Chile (Escenarios Hídricos), The Nature Conservancy (TNC).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: OG:IMAGE BANNER LAB (1200x630 PREVIEW) */}
        {activeTab === 'ogbanner' && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-[#111622] border border-[#facc15]/40 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="px-2 py-0.5 rounded bg-[#facc15] text-black font-mono font-black text-[10px] uppercase">
                    MODO PRUEBA // SANDBOX
                  </span>
                  <h2 className="font-mono font-black text-base sm:text-lg text-white mt-1">
                    PROTOTIPO DE BANNER HORIZONTAL 1200×630 PX PARA LINKEDIN (og:image)
                  </h2>
                  <p className="text-xs text-neutral-300">
                    Generado con tus activos reales: retrato + Globo 3D con pines en Kiel, Poznań y Chile + tus 3 pilares + insignias de FCFM U. de Chile, CAU Kiel / AMU Poznań y Wetland Monitor. Actualmente tu <code className="text-amber-300">index.html</code> mantiene <code className="text-amber-300">profile.jpg</code> intacto hasta que decidas si activamos este banner o lo ajustamos.
                  </p>
                </div>
                <a
                  href={resolveAsset('/og_banner_preview.jpg')}
                  download="Daniel_Santander_LinkedIn_Banner_1200x630.jpg"
                  className="px-4 py-2.5 rounded-xl bg-[#facc15] hover:bg-white text-black font-mono font-black text-xs uppercase flex items-center gap-2 border-2 border-black shadow-[3px_3px_0px_#000]"
                >
                  <Download className="w-4 h-4" />
                  <span>Descargar Banner (1200×630)</span>
                </a>
              </div>
            </div>

            {/* Simulated LinkedIn Post / Featured Card Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-8 space-y-2">
                <div className="font-mono text-xs font-bold text-neutral-400 uppercase">
                  VISTA PREVIA A TAMAÑO COMPLETO (1200 × 630 PX):
                </div>
                <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black">
                  <img
                    src={resolveAsset('/og_banner_preview.jpg')}
                    alt="Preview 1200x630 OG Banner"
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              <div className="lg:col-span-4 space-y-3">
                <div className="font-mono text-xs font-bold text-neutral-400 uppercase">
                  SIMULACIÓN DE TARJETA EN EL FEED DE LINKEDIN:
                </div>
                <div className="rounded-xl bg-[#1b1f23] border border-neutral-700 overflow-hidden shadow-xl">
                  <div className="p-3 flex items-center space-x-2.5 border-b border-neutral-800">
                    <img
                      src={resolveAsset('/profile.jpg')}
                      alt="Daniel Santander"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">Daniel Santander Urrutia</div>
                      <div className="text-[10px] text-neutral-400">
                        Geophysicist &amp; Dual European M.Sc. (CAU Kiel &amp; AMU Poznań)
                      </div>
                    </div>
                  </div>
                  <img
                    src={resolveAsset('/og_banner_preview.jpg')}
                    alt="LinkedIn Card Preview"
                    className="w-full h-auto block"
                  />
                  <div className="p-3 bg-[#262b31]">
                    <div className="text-xs font-bold text-white truncate">
                      Daniel Santander Urrutia | Geofísico Ambiental &amp; Dual European M.Sc.
                    </div>
                    <div className="text-[11px] text-neutral-400 truncate mt-0.5">
                      danisantanderurrutia-coder.github.io
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminCareerPanel;
