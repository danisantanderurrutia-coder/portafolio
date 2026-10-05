import { SectionData } from './types';

// ==========================================
// MODO NOCTURNO: COMUNICACIONES ESTRATÉGICAS
// (Campaña, +700k Audiencia, Cultura, Artivismo, Apruebo Rural, FANFE/EPN)
// ==========================================
export const communicationsSections: SectionData[] = [
  // SECTION 0: PESTAÑA DE PORTADA & BIENVENIDA
  {
    id: 'portada-portafolio',
    tabKey: '00. PORTADA',
    tabTitleEn: 'Cover',
    tabTitleEs: 'Portada',
    badgeEn: 'PORTFOLIO COVER & EXECUTIVE PROFILE',
    badgeEs: 'PORTADA DEL PORTAFOLIO & PERFIL EJECUTIVO',
    roleEn: 'Environmental Geophysicist | Strategic Communicator | Campaign Director',
    roleEs: 'Geofísico Ambiental | Comunicador Estratégico | Director de Campañas',
    titleEn: 'Daniel Santander Urrutia',
    titleEs: 'Daniel Santander Urrutia',
    headlineEn: 'Bridging Rigorous Biophysical Science with High-Impact Territorial Communications',
    headlineEs: 'Uniendo la Ciencia Biofísica de Vanguardia con las Comunicaciones Estratégicas y Territoriales',
    narrativeEn: 'Welcome to the professional portfolio of Daniel Santander Urrutia. This dossier bridges two complementary worlds: high-impact grassroots communication campaigns (+700k audience), tactical artivism, and investigative reporting; alongside empirical hydrogeophysical catchment modeling, digital twins, and European environmental policy. Choose an edition or click Enter to explore.',
    narrativeEs: 'Bienvenido al portafolio profesional de Daniel Santander Urrutia. Este espacio articula dos vertientes complementarias: campañas de comunicación masiva (+700k audiencia), artivismo táctico y periodismo de investigación; junto a modelación hidrogeofísica de cuencas, gemelos digitales y análisis de políticas ambientales en Europa. Selecciona una edición o pulsa Entrar para comenzar.',
    keyOutcomesEn: [
      'Dual Professional Profile: Strategic Communications (+700k audience) & Biophysical Environmental Science.',
      'International Training: Universidad de Chile (Geophysics), CAU Kiel (Germany), and AMU Poznań (Poland).',
      'Proven Track Record: Landmark EPN Biomass investigation, Apruebo Rural national campaign, and high-impact media investigations.'
    ],
    keyOutcomesEs: [
      'Doble Perfil Profesional: Comunicaciones Estratégicas (+700k audiencia) y Ciencia Ambiental Biofísica.',
      'Formación Internacional: Geofísica en U. de Chile, Doble M.Sc. en CAU Kiel (Alemania) y AMU Poznań (Polonia).',
      'Trayectoria Comprobada: Investigación de biomasa EPN, campaña nacional Apruebo Rural y reportajes de investigación en medios.'
    ],
    stats: [
      { value: '2 Modos', labelEn: 'Dual Editions (Comms / Science)', labelEs: 'Ediciones (Comms / Ciencia)' },
      { value: '+700K', labelEn: 'Campaign Reach & Media Audience', labelEs: 'Audiencia de Medios y Campañas' },
      { value: 'Global', labelEn: 'Chile, Germany, Poland & EU', labelEs: 'Chile, Alemania, Polonia y UE' }
    ],
    mediaItems: [
      {
        id: 'perfil-daniel-santander',
        type: 'image',
        titleEn: 'Daniel Santander Urrutia - Professional Profile',
        titleEs: 'Daniel Santander Urrutia - Perfil Profesional',
        subtitleEn: 'Environmental Geophysicist & Strategic Communications Director',
        subtitleEs: 'Geofísico Ambiental & Director de Comunicaciones Estratégicas',
        src: '/profile.jpg',
        captionEn: 'Daniel Santander Urrutia holds an Engineering Geophysics degree from Universidad de Chile and a double European Master of Science in Environmental Management and Integrated Catchment Management (Kiel, Germany and Poznań, Poland). Combines scientific fieldwork with public interest communications.',
        captionEs: 'Daniel Santander Urrutia es Ingeniero Geofísico de la Universidad de Chile y posee un doble Máster Europeo en Gestión Ambiental y Manejo Integrado de Cuencas (Kiel, Alemania y Poznań, Polonia). Integra investigación biofísica de campo con comunicaciones estratégicas de interés público.',
        authorOrSource: 'Perfil Oficial // Archivo Personal',
        date: '2026',
        tags: ['Geofísica', 'Comunicaciones', 'Kiel', 'Poznań', 'Chile']
      }
    ]
  },

  // SECTION 1: CULTURA & ESPACIOS COMUNITARIOS
  {
    id: 'rap-beauchef',
    tabKey: '01. CULTURA',
    tabTitleEn: 'Culture',
    tabTitleEs: 'Cultura',
    badgeEn: 'YOUTH CULTURE & ARTISTIC PRODUCTION',
    badgeEs: 'CULTURA JUVENIL Y PRODUCCIÓN ARTÍSTICA',
    roleEn: 'Artistic Director, Live Producer & Community Architect',
    roleEs: 'Director Artístico, Productor en Vivo y Arquitecto Comunitario',
    titleEn: 'Rap Beauchef, Cuarentena Rap & Rap Libre',
    titleEs: 'Rap Beauchef, Cuarentena Rap & Rap Libre',
    headlineEn: 'Scaling Youth Freestyle Counter-Culture into Civic Ecology and Human Rights Advocacy',
    headlineEs: 'Transformando la Contracultura del Freestyle Juvenil en Incidencia Ecológica y Derechos Humanos',
    narrativeEn: 'Engineered cross-platform youth mobilization from university amphitheaters (Beauchef - FCFM Universidad de Chile) to national pandemic leagues (Cuarentena Rap) and massive live urban arenas (Rap Libre). Designed decentralized governance structures on Discord, livestreamed broadcasts, and forged alliances between lyricists and frontline environmental causes.',
    narrativeEs: 'Diseñó la movilización juvenil multiplataforma desde anfiteatros universitarios (Beauchef - FCFM Universidad de Chile) hasta ligas online nacionales en pandemia (Cuarentena Rap) y masivas arenas urbanas (Rap Libre). Creó estructuras de gobernanza descentralizada en Discord, transmisiones multimedia en vivo y alianzas estratégicas entre letristas y causas territoriales.',
    keyOutcomesEn: [
      'Orchestrated 40+ high-intensity live tournaments and pandemic streaming leagues with 50,000+ total views.',
      'Constructed a 12,000+ member Discord server with automated role permissions and community pipelines.',
      'Positioned environmental defense, territorial sovereignty, and human rights into competitive spoken-word improvisation.'
    ],
    keyOutcomesEs: [
      'Producción de más de 40 torneos en vivo y ligas de streaming pandémicas con más de 50.000 visualizaciones acumuladas.',
      'Diseño y gestión de servidor Discord con más de 12.000 miembros, roles automatizados y moderación comunitaria.',
      'Integración sistemática de temáticas socioambientales, defensa de la tierra y derechos humanos en la improvisación lírica.'
    ],
    stats: [
      { value: '40+', labelEn: 'Tournaments Produced', labelEs: 'Torneos Producidos' },
      { value: '12K+', labelEn: 'Discord Community Members', labelEs: 'Miembros en Discord' },
      { value: '100%', labelEn: 'Grassroots Self-Funded', labelEs: 'Autogestión de Base' }
    ],
    mediaItems: [
      {
        id: 'camara-diputadas-forestal',
        type: 'video',
        titleEn: 'Testimony at Chile\'s Chamber of Deputies: Forestry Model & Wildfire Risk',
        titleEs: 'Exposición en la Cámara de Diputadas y Diputados: Modelo Forestal y Riesgo de Incendios',
        subtitleEn: 'Emergency, Disaster & Firefighter Commission // National Congress of Chile',
        subtitleEs: 'Comisión de Emergencia, Desastres y Bomberos // Congreso Nacional de Chile',
        embedUrl: 'https://www.youtube.com/embed/7eJ-pQ3qe8o',
        url: 'https://www.youtube.com/watch?v=7eJ-pQ3qe8o',
        captionEn: 'The "Red por la Superación al modelo forestal" presents before the Emergency, Disaster and Firefighter Commission of Chile\'s Chamber of Deputies, detailing the direct correlation between massive tree monocultures (pine and eucalyptus plantations) and catastrophic wildfire hazards in central-southern Chile.',
        captionEs: 'La Red por la Superación al modelo forestal expone ante la Comisión de Emergencia, Desastres y Bomberos de la Cámara de Diputadas y Diputados de Chile sobre la relación estructural entre los monocultivos forestales a gran escala y el riesgo crítico de megaincendios en el centro-sur de Chile.',
        authorOrSource: 'Cámara de Diputadas y Diputados de Chile',
        date: '2023',
        tags: ['Incidencia Pública', 'Congreso Nacional', 'Riesgo de Incendios', 'Modelo Forestal']
      },
      {
        id: 'rap-beauchef-batallas-vivo',
        type: 'instagram',
        instagramId: 'B9ljgLMngum',
        url: 'https://www.instagram.com/p/B9ljgLMngum/',
        titleEn: 'Rap Beauchef: Live Arena Tournaments & University Cyphers',
        titleEs: 'Rap Beauchef: Torneos en Vivo & Cyphers Universitarios',
        subtitleEn: 'Beauchef Amphitheater (FCFM Universidad de Chile) // Live Freestyle Circuit',
        subtitleEs: 'Anfiteatro Beauchef (FCFM U. de Chile) // Circuito en Vivo de Freestyle',
        captionEn: 'Live university arena competitions convening thousands of students, underground emcees, and local beatmakers. High-level freestyle battles organized with self-managed stage sound, multi-camera crews, and strict community ethics.',
        captionEs: 'Competencias en arena universitaria que convocaron a miles de estudiantes, emcees de la escena underground y beatmakers. Batallas de freestyle de alto nivel con producción técnica autogestionada, registro audiovisual y ética comunitaria.',
        authorOrSource: '@rapbeauchef // Producción en Vivo',
        date: '2019-2020',
        tags: ['Rap Beauchef', 'Batallas en Vivo', 'FCFM', 'Cultura Hip-Hop'],
        subLinks: [
          {
            titleEn: 'Live Battle Gallery I (Stage & Emcees)',
            titleEs: 'Galería Batalla en Vivo I (Escenario & Emcees)',
            url: 'https://www.instagram.com/p/B3ZZ8sGgaJX/'
          },
          {
            titleEn: 'Live Battle Gallery II (Crowd & Cyphers)',
            titleEs: 'Galería Batalla en Vivo II (Público & Cyphers)',
            url: 'https://www.instagram.com/p/B3ZZb3BgR1R/?img_index=1'
          },
          {
            titleEn: 'Live Battle Gallery III (Rounds)',
            titleEs: 'Galería Batalla en Vivo III (Rondas)',
            url: 'https://www.instagram.com/p/B3Yig7mg_02/?img_index=1'
          },
          {
            titleEn: 'Live Battle Gallery IV (Judges & Flow)',
            titleEs: 'Galería Batalla en Vivo IV (Jueces & Flow)',
            url: 'https://www.instagram.com/p/B3YgyJxgiBS/?img_index=1'
          },
          {
            titleEn: 'Live Battle Gallery V (Amphitheater)',
            titleEs: 'Galería Batalla en Vivo V (Anfiteatro)',
            url: 'https://www.instagram.com/p/B3VfufbAH6A/?img_index=1'
          },
          {
            titleEn: 'Live Battle Gallery VI (Energy & Mic)',
            titleEs: 'Galería Batalla en Vivo VI (Micrófono & Energía)',
            url: 'https://www.instagram.com/p/B3VR8cqABYU/?img_index=1'
          },
          {
            titleEn: 'Live Battle Gallery VII (Final Stage)',
            titleEs: 'Galería Batalla en Vivo VII (Etapa Final)',
            url: 'https://www.instagram.com/p/B3VO-R7Akr3/?img_index=1'
          },
          {
            titleEn: 'Live Battle Gallery VIII (Champions)',
            titleEs: 'Galería Batalla en Vivo VIII (Premiación & Cierre)',
            url: 'https://www.instagram.com/p/B3VMAN1gh9R/?img_index=5'
          }
        ]
      },
      {
        id: 'rap-beauchef-shows-duenas',
        type: 'instagram',
        instagramId: 'B3SOa_YgJ5j',
        url: 'https://www.instagram.com/p/B3SOa_YgJ5j/?img_index=1',
        titleEn: 'Rap Beauchef: Live Concerts & "Dueñas de la Voz" Female Tournament',
        titleEs: 'Rap Beauchef: Shows en Vivo & "Dueñas de la Voz" (Encuentro Femenino)',
        subtitleEn: 'Live Hip-Hop Showcase & Women\'s Spoken-Word Leadership',
        subtitleEs: 'Conciertos en Vivo y Liderazgo de Mujeres en la Escena del Rap',
        captionEn: 'Expanding beyond battles into live musical concerts and specialized events like "Dueñas de la Voz", a landmark female tournament celebrating women rap artists, lyricism, and vocal sovereignty in university cultural spaces.',
        captionEs: 'Expansión hacia conciertos y eventos temáticos de gran impacto como "Dueñas de la Voz", certamen y encuentro femenino pionero que visibilizó y potenció a mujeres músicas, freestylers y poetas en la escena universitaria.',
        authorOrSource: '@rapbeauchef // Producción Artística',
        date: '2019-2020',
        tags: ['Dueñas de la Voz', 'Shows en Vivo', 'Mujeres en Hip-Hop', 'Gestión Cultural'],
        subLinks: [
          {
            titleEn: 'Poster: Dueñas de la Voz (Official Launch)',
            titleEs: 'Afiche Oficial: Dueñas de la Voz',
            url: 'https://www.instagram.com/p/B1k2tdFgYoK/'
          },
          {
            titleEn: 'Gallery: Dueñas de la Voz Tournament',
            titleEs: 'Galería: Encuentro Dueñas de la Voz',
            url: 'https://www.instagram.com/p/B2O_yRGgRmY/?img_index=4'
          }
        ]
      },
      {
        id: 'rap-beauchef-online-discord',
        type: 'instagram',
        instagramId: 'CCPVa5elGhn',
        url: 'https://www.instagram.com/p/CCPVa5elGhn/',
        titleEn: 'Rap Beauchef Online: Discord Leagues & International Community',
        titleEs: 'Rap Beauchef Online: Ligas en Discord & Red Internacional',
        subtitleEn: 'Pandemic Streaming Ecosystem // Cross-Border Latin American Cyphers',
        subtitleEs: 'Ecosistema de Streaming en Pandemia // Red Latinoamericana de Freestyle',
        captionEn: 'Pioneered online rap tournaments during global lockdowns by architecting an automated Discord server (+12,000 users) with low-latency audio rooms, international participation across Latin America and Spain, video cyphers, and live Twitch/YouTube broadcasts.',
        captionEs: 'Pioneros en la adaptación online durante los confinamientos: creación de una comunidad de +12.000 usuarios en Discord con salas de audio optimizadas, jueces internacionales, competidores de Chile, Argentina, Perú, Colombia y España, y streaming en directo.',
        authorOrSource: '@rapbeauchef // Comunidad Digital',
        date: '2020-2021',
        tags: ['Discord', 'Online League', 'Comunidad Internacional', 'Streaming'],
        subLinks: [
          {
            titleEn: 'Online Version Info & Announcement',
            titleEs: 'Información y Convocatoria Versión Online',
            url: 'https://www.instagram.com/p/CCKc5F1F-bq/'
          },
          {
            titleEn: 'Discord Turnout & High-Concurrence Rounds',
            titleEs: 'Concurrencia y Rondas en Salas de Discord',
            url: 'https://www.instagram.com/p/CBCA5DGFBwO/?img_index=1'
          },
          {
            titleEn: 'Official Tournament Fixture & Poster',
            titleEs: 'Afiche Oficial y Cuadro del Torneo Online',
            url: 'https://www.instagram.com/p/CBV5veZFbFw/'
          },
          {
            titleEn: 'Grand Championship Online Final',
            titleEs: 'Gran Final de la Temporada Online',
            url: 'https://www.instagram.com/p/CEsyoUSln0c/'
          },
          {
            titleEn: 'International Jury & Community Evaluation',
            titleEs: 'Evaluación y Jurado Internacional',
            url: 'https://www.instagram.com/p/CDMWyFale-C/'
          },
          {
            titleEn: 'International Event Poster',
            titleEs: 'Afiche Encuentro Internacional',
            url: 'https://www.instagram.com/p/CDwWpGOF6N5/'
          }
        ]
      },
      {
        id: 'rap-libre-urbano',
        type: 'instagram',
        instagramId: 'B42bAbtnntp',
        url: 'https://www.instagram.com/p/B42bAbtnntp/',
        titleEn: 'Rap Libre: Urban Public Space & Civic Freestyle Arena',
        titleEs: 'Rap Libre: Conquista del Espacio Público & Escena Urbana',
        subtitleEn: 'Massive Urban Gathering // Free Expression & Independent Art',
        subtitleEs: 'Encuentro Urbano Masivo // Expresión Libre & Cultura Independiente',
        captionEn: 'Rap Libre brought high-octane freestyle culture directly into major public urban spaces. A movement founded on grassroots independence, civic youth assembly, free expression, and the defense of public parks and squares for artistic performance.',
        captionEs: 'Rap Libre expandió la energía del freestyle directamente a los espacios públicos urbanos de alta concurrencia. Un movimiento fundado en la autogestión territorial, la libre expresión juvenil y la reapropiación del espacio público para el arte y la comunidad.',
        authorOrSource: 'Rap Libre // Producción Urbana',
        date: '2019-2020',
        tags: ['Rap Libre', 'Espacio Público', 'Cultura Urbana', 'Autogestión'],
        subLinks: [
          {
            titleEn: 'Event Launch Poster: Rap Libre Official Fixture',
            titleEs: 'Afiche Oficial del Evento: Rap Libre',
            url: 'https://www.instagram.com/p/B42bAbtnntp/'
          },
          {
            titleEn: 'Live Event Photo Gallery & Massive Crowd',
            titleEs: 'Galería Fotográfica del Evento & Multitud Urbana',
            url: 'https://www.instagram.com/p/B46IqYzHJkB/?img_index=1'
          }
        ]
      }
    ]
  },

  // SECTION 2: PRIMERA LÍNEA PRENSA & RED MAULE SUR
  {
    id: 'primera-linea-prensa',
    tabKey: '02. PERIODISMO',
    tabTitleEn: 'Citizen Journalism',
    tabTitleEs: 'Periodismo Ciudadano',
    badgeEn: 'CITIZEN JOURNALISM & MASS REACH (+700K)',
    badgeEs: 'PERIODISMO CIUDADANO Y ALCANCE MASIVO (+700K)',
    roleEn: 'Founder & Executive Director | Broadcast Panellist | Grassroots Network Architect',
    roleEs: 'Fundador y Director Ejecutivo | Panelista de Radio | Arquitecto de Redes Comunitarias',
    titleEn: 'Primera Línea Prensa & Maule Regional Media',
    titleEs: 'Primera Línea Prensa & Red de Medios del Maule',
    headlineEn: 'Building an Independent +700k Audience Outlet & Training Rural Territorial Correspondents',
    headlineEs: 'Construyendo un Medio Independiente de +700k Seguidores y Capacitando Corresponsales Rurales',
    narrativeEn: 'Co-founded and scaled "Primera Línea Prensa" into one of Chile’s most influential independent digital news feeds during the historic 2019-2022 civic cycle, reaching over 700,000 organic followers. Transitioned this mass communication engine into regional territorial empowerment in Maule Sur, co-hosting regional radio broadcasts and authoring an investigative journalism syllabus.',
    narrativeEs: 'Cofundó y dirigió "Primera Línea Prensa", posicionándola como una de las plataformas de noticias independientes más influyentes de Chile durante el ciclo 2019-2022, superando los 700.000 seguidores orgánicos. Trasladó este músculo comunicacional a la Región del Maule, co-conduciendo el programa radial "El Maule Sur También Existe" y formando corresponsales populares.',
    keyOutcomesEn: [
      'Grew digital audience from zero to +700,000 verified followers across Instagram, Facebook & Twitter with millions of monthly impressions.',
      'Regular broadcast panellist on "El Maule Sur También Existe", dissecting agribusiness water monopolies and monoculture forestry.',
      'Authored the "Grassroots Correspondent Workshop": certifying 45+ local rural community members in mobile documentary reporting.'
    ],
    keyOutcomesEs: [
      'Crecimiento de audiencia digital de 0 a +700.000 seguidores en Instagram, Facebook y Twitter con millones de impresiones mensuales.',
      'Panelista semanal en el programa radial "El Maule Sur También Existe", analizando el acaparamiento de agua y el monocultivo forestal.',
      'Creación del "Taller de Corresponsales Populares": certificó a más de 45 voceros y vecinos rurales en reportería móvil y ética.'
    ],
    stats: [
      { value: '+700K', labelEn: 'Direct Social Reach', labelEs: 'Audiencia Digital Directa' },
      { value: '45+', labelEn: 'Trained Rural Correspondents', labelEs: 'Corresponsales Capacitados' },
      { value: '180+', labelEn: 'Radio Capsules Broadcasted', labelEs: 'Cápsulas Radiales Emitidas' }
    ],
    mediaItems: [
      {
        id: 'plp-analytics',
        type: 'social',
        titleEn: 'Digital Reach Analytics & Real-Time Engagement Dashboard',
        titleEs: 'Panel de Analítica y Alcance Digital en Tiempo Real',
        subtitleEn: 'Metrics Breakdown: +700k Active Network Followers',
        subtitleEs: 'Desglose de Métricas: Red de +700k Seguidores Activos',
        captionEn: 'Organic reach metrics overview showing virality spikes during frontline human rights alerts and constitutional debate broadcasts (+700,000 organic followers).',
        captionEs: 'Resumen de métricas de alcance orgánico con picos de viralidad durante coberturas de derechos humanos y debates constituyentes (+700.000 seguidores orgánicos).',
        authorOrSource: 'Meta Business Insights & CrowdTangle',
        date: '2020-2022',
        metrics: [
          { labelEn: 'Cumulative Followers', labelEs: 'Seguidores Acumulados', value: '714,000+' },
          { labelEn: 'Peak 30-Day Impressions', labelEs: 'Impresiones pico en 30 días', value: '14.2M' },
          { labelEn: 'Engagement Rate', labelEs: 'Tasa de Interacción', value: '8.4%' },
          { labelEn: 'Citizen Reports Processed', labelEs: 'Reportes Ciudadanos Verificados', value: '2,400+' }
        ],
        tags: ['Social Strategy', 'Big Data', 'Crisis Comms']
      },
      {
        id: 'maule-radio-capsule',
        type: 'audio',
        titleEn: 'Broadcast Capsule: "El Maule Sur También Existe"',
        titleEs: 'Cápsula Radial: "El Maule Sur También Existe"',
        subtitleEn: 'Radio Ancoa & Community Transmitters // Regional Analysis',
        subtitleEs: 'Radio Ancoa y Transmisores Comunitarios // Análisis Territorial',
        captionEn: 'Studio panel recording exposing forestry monoculture fire risks, groundwater depletion in Linares/Parral, and peasant agriculture survival.',
        captionEs: 'Grabación de panel en estudio que denuncia el riesgo de megaincendios por monocultivo de pino/eucalipto y la crisis hídrica en Linares/Parral.',
        authorOrSource: 'Radio Ancoa 95.7 FM & Transmisoras Locales',
        date: '2022',
        tags: ['Broadcast Radio', 'Peasant Economy', 'Investigation']
      }
    ]
  },

  // SECTION 3: APRUEBO RURAL / NATIONAL CAMPAIGN
  {
    id: 'apruebo-rural',
    tabKey: '03. CAMPAÑA NACIONAL',
    tabTitleEn: 'National Campaign',
    tabTitleEs: 'Campaña Nacional',
    badgeEn: 'NATIONAL CAMPAIGN & PEASANT FRONTLINE',
    badgeEs: 'CAMPAÑA NACIONAL Y FRENTE CAMPESINO',
    roleEn: 'Lead Campaign Coordinator & National Press Director',
    roleEs: 'Coordinador General de Campaña y Director de Prensa Nacional',
    titleEn: '"Apruebo Rural" National Campaign & Historic Closing Rally',
    titleEs: 'Campaña Nacional "Apruebo Rural" & Cierre de Campaña',
    headlineEn: 'Uniting Frontline Agrarian Communities, Megafire Victims & Water Assemblies into the National Debate',
    headlineEs: 'Uniendo a las Comunidades Agrarias Afectadas por Megaincendios y Escasez Hídrica en el Debate Nacional',
    narrativeEn: 'Spearheaded the nationwide "Apruebo Rural" communication and field campaign (2020-2023). Bridged disconnected peasant smallholders, rural water committees (APR), and fire-devastated forestry borderlands directly into mainstream television, provincial radio networks, and massive public rallies. Coordinated the monumental closing campaign march and assembly featuring thousands of peasant families and grassroots delegates.',
    narrativeEs: 'Lideró la coordinación general de la campaña comunicacional y despliegue territorial de "Apruebo Rural" (2020-2023). Articuló a pequeños agricultores familiares campesinos, comités de agua potable rural (APR) y poblados cercados por monocultivos forestales con las cadenas nacionales de TV, radios comunales y masivos actos públicos. Coordinó el histórico acto de cierre de campaña con miles de familias rurales.',
    keyOutcomesEn: [
      'Executed a 14-region rural communication tour across central and southern Chile with 80+ community assemblies.',
      'Placed 60+ op-eds, television interviews, and radio specials centering rural water sovereignty and agroecology.',
      'Organized the historic "Cierre de Campaña Apruebo Rural" assembling rural women, elders, and youth delegates.'
    ],
    keyOutcomesEs: [
      'Gira nacional por 14 regiones del centro y sur de Chile realizando más de 80 asambleas y encuentros comunales.',
      'Publicación de más de 60 columnas de opinión, notas en televisión y especiales radiales sobre soberanía del agua y agroecología.',
      'Organización y dirección del histórico acto de "Cierre de Campaña Apruebo Rural" con mujeres campesinas, delegaciones y familias.'
    ],
    stats: [
      { value: '14', labelEn: 'Regions Coordinated', labelEs: 'Regiones Coordinadas' },
      { value: '80+', labelEn: 'Town Hall Assemblies', labelEs: 'Asambleas Territoriales' },
      { value: '500K+', labelEn: 'Print Leaflets & Field Kits', labelEs: 'Volantes y Kits Distribuidos' }
    ],
    mediaItems: [
      {
        id: 'apruebo-photo-stage',
        type: 'image',
        titleEn: 'Historic Closing Rally: Stage Rig & Mass Assembly',
        titleEs: 'Cierre de Campaña Histórico: Escenario y Concentración Masiva',
        subtitleEn: 'User Archive Photo // Cierre de Campaña Apruebo Rural',
        subtitleEs: 'Foto de Archivo Personal // Cierre de Campaña Apruebo Rural',
        src: '/images/apruebo_rural_2.png',
        captionEn: 'Daniel Santander addressing thousands of rural delegates and families from the main stage under stage lighting and fluttering national & peasant flags.',
        captionEs: 'Daniel Santander sobre el escenario principal dirigiendo el acto masivo ante miles de delegaciones rurales, banderas campesinas y asambleas.',
        authorOrSource: 'Daniel Santander Personal Documentary Archive',
        date: 'Septiembre 2022',
        tags: ['Cierre de Campaña', 'Field Production', 'Mass Rally']
      },
      {
        id: 'apruebo-photo-flags',
        type: 'image',
        titleEn: 'Peasant & Feminist Banners in Public Square',
        titleEs: 'Banderas Campesinas, Feministas y del Agua en Marcha',
        subtitleEn: 'User Archive Photo // Frontline Rural Mobilization',
        subtitleEs: 'Foto de Archivo Personal // Movilización de la Frontera Rural',
        src: '/images/apruebo_rural_3.png',
        captionEn: 'Grassroots rural women and smallholder farmers waving purple and regional flags during the massive national closing march.',
        captionEs: 'Mujeres rurales, dirigentas de APR y agricultoras ondeando banderas en la gran marcha de cierre de campaña rural.',
        authorOrSource: 'Daniel Santander Personal Documentary Archive',
        date: 'Septiembre 2022',
        tags: ['Rural Women', 'Peasant Movement', 'Grassroots']
      },
      {
        id: 'apruebo-photo-mother',
        type: 'image',
        titleEn: 'Intergenerational Solidarity: Rural Families & Future Generations',
        titleEs: 'Solidaridad Intergeneracional: Familias Rurales y Nuevas Generaciones',
        subtitleEn: 'User Archive Photo // Community Portrait',
        subtitleEs: 'Foto de Archivo Personal // Retrato Comunitario',
        src: '/images/apruebo_rural_1.png',
        captionEn: 'Mother holding her child amidst the assembly of blue, green, and peasant flags, embodying the intergenerational demand for ecological survival.',
        captionEs: 'Madre campesina con su bebé en brazos entre las banderas del encuentro, reflejando el horizonte intergeneracional de justicia territorial.',
        authorOrSource: 'Daniel Santander Personal Documentary Archive',
        date: 'Septiembre 2022',
        tags: ['Intergenerational', 'Community Life', 'Human Rights']
      }
    ]
  },

  // SECTION 4: BRIGADA PAULINA AGUIRRE
  {
    id: 'brigada-paulina-aguirre',
    tabKey: '04. ARTIVISMO',
    tabTitleEn: 'Artivism & Murals',
    tabTitleEs: 'Artivismo & Murales',
    badgeEn: 'TACTICAL ARTIVISM & SPATIAL STUNTS',
    badgeEs: 'ARTIVISMO TÁCTICO E INTERVENCIONES ESPACIALES',
    roleEn: 'Co-Founder, Visual Strategist & Mural Crew Leader',
    roleEs: 'Cofundador, Estratega Visual y Jefe de Cuadrilla Muralista',
    titleEn: 'Brigada de Arte Paulina Aguirre',
    titleEs: 'Brigada de Arte Paulina Aguirre',
    headlineEn: 'Designing High-Contrast Street Artivism, Megamurals & Transit Hub Interventions for Viral Amplification',
    headlineEs: 'Diseño de Muralismo de Alto Contraste e Intervenciones Urbanas para Máxima Viralización y Prensa',
    narrativeEn: 'Co-founded the renowned artistic collective "Brigada de Arte Paulina Aguirre", translating historical memory, anti-extractivism, and feminist territorial defense into public spaces. Engineered rapid-deployment stenciling, typography, and large-scale murals situated at strategic transportation choke points, framed for viral photographic capture.',
    narrativeEs: 'Cofundador de la emblemática "Brigada de Arte Paulina Aguirre", transformando la memoria histórica, el antiextractivismo y la defensa territorial ecofeminista en intervenciones monumentales en el espacio público. Desarrolló metodologías de despliegue rápido de serigrafía, tipografía mural y megamurales ubicados estratégicamente.',
    keyOutcomesEn: [
      'Painted 35+ high-impact murals across Santiago metropolitan avenues, university walls, and regional community hubs.',
      'Developed "Tactical Spatial Stunting": mapping street corners with optimal natural sunlight and pedestrian flow for viral social pickups.',
      'Collaborated directly with memorial human rights sites and environmental defense fronts.'
    ],
    keyOutcomesEs: [
      'Pintura de más de 35 murales de gran formato en ejes viales metropolitanos, recintos universitarios y centros comunitarios regionales.',
      'Metodología de "Despliegue Espacial Táctico": mapeo de esquinas con iluminación cenital idónea y flujo peatonal para maximizar fotografías virales.',
      'Articulación directa con sitios de memoria, organizaciones de DD.HH. y frentes de defensa del agua.'
    ],
    stats: [
      { value: '35+', labelEn: 'Monumental Murals Executed', labelEs: 'Murales Monumentales Pintados' },
      { value: '100%', labelEn: 'Night-Op Precision Deployment', labelEs: 'Despliegues Nocturnos de Precisión' },
      { value: '500K+', labelEn: 'Photographic Social Shares', labelEs: 'Compartidos en Redes Sociales' }
    ],
    mediaItems: [
      {
        id: 'brigada-mural-1',
        type: 'image',
        titleEn: 'High-Contrast Memorial & Territorial Defense Megamural',
        titleEs: 'Megamural de Memoria Histórica y Resistencia Territorial',
        subtitleEn: 'Alameda / Vicuña Mackenna Transit Corridor // Santiago',
        subtitleEs: 'Corredor Alameda / Vicuña Mackenna // Santiago',
        src: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
        captionEn: 'Gigantic typographic and figurative artwork executed in 48-hour sprints combining latex, acrylic spray, and stencil wheat-pasting.',
        captionEs: 'Obra monumental tipográfica y figurativa ejecutada en jornadas continuas de 48 horas combinando esmalte al agua, aerosol y técnica mixta.',
        authorOrSource: 'Brigada Paulina Aguirre Archive',
        date: '2020',
        tags: ['Public Artivism', 'Street Graphics', 'Typography']
      },
      {
        id: 'spatial-stunt-diagram',
        type: 'diagram',
        titleEn: 'Spatial Deployment & Viral Sightline Diagram',
        titleEs: 'Diagrama de Despliegue Espacial y Líneas de Visión Viral',
        subtitleEn: 'Tactical Geometry: Angle of View, Metro Exits & Drone Camera Paths',
        subtitleEs: 'Geometría Táctica: Ángulo Visual, Salidas de Metro y Rutas de Drones',
        captionEn: 'Technical blueprint mapping how murals were positioned relative to traffic signals, morning pedestrian flow, and press telephoto lenses.',
        captionEs: 'Plano técnico que grafica la orientación de los murales respecto a semáforos, flujo de transeúntes matutino y ópticas de la prensa.',
        date: '2021',
        tags: ['Spatial Tactics', 'Visual Geometry', 'Urban Planning'],
        detailsEn: [
          'Choke Point Selection: Walls situated perpendicular to major bus corridors with minimum 45-second red light intervals.',
          'High-Contrast Palette: Ultra-saturated red, black, and bone-white maximizing contrast under harsh midday direct sun.',
          'Social Framing: Embedded hashtag stencils placed exactly at eye level for high-conversion selfie framing.'
        ],
        detailsEs: [
          'Selección de Vértices: Muros perpendiculares a corredores de transporte con detención semafórica mínima de 45 segundos.',
          'Paleta de Alto Contraste: Rojo bermellón, negro humo y blanco hueso para máxima visibilidad bajo sol directo.',
          'Encuadre Social: Hashtags y sellos situados a la altura promedio de los ojos para fácil encuadre en retratos y selfies.'
        ]
      }
    ]
  },

  // SECTION 5: PRENSA & MEDIOS NACIONALES
  {
    id: 'prensa-medios',
    tabKey: '05. PRENSA',
    tabTitleEn: 'Investigative Press',
    tabTitleEs: 'Prensa & Medios',
    badgeEn: 'NATIONAL & INTERNATIONAL INVESTIGATIVE PRESS',
    badgeEs: 'PRENSA DE INVESTIGACIÓN & DIVULGACIÓN CIENTÍFICA',
    roleEn: 'Investigative Journalist | Environmental Columnist | Science Communicator',
    roleEs: 'Periodista de Investigación | Columnista Ambiental | Divulgador',
    titleEn: 'Investigative Journalism, Columns & National Media',
    titleEs: 'Periodismo de Investigación, Columnas & Medios Nacionales',
    headlineEn: 'Positioning Climate Integrity, Post-Growth Economics & Basin Vulnerability Across Major Print Outlets',
    headlineEs: 'Posicionando el Debate Ecológico, la Crisis de Cuencas y el Decrecimiento en los Principales Medios Escritos',
    narrativeEn: 'Author and investigative contributor across prominent Chilean and international independent media outlets (El Desconcierto, Tomaterojo, Resumen, Comestible, Delfino). Translates hard environmental data and global climate governance debates—from wetland rewetting and megafire dynamics to the world degrowth conference in Oslo—into high-impact investigative reporting.',
    narrativeEs: 'Autor y colaborador de investigación en destacados medios de prensa independiente nacionales e internacionales (El Desconcierto, Tomaterojo, Resumen, Comestible, Delfino). Traduce evidencia ambiental de campo y debates de gobernanza global —desde la rehumectación de turberas y la propagación de megaincendios hasta la cumbre mundial de decrecimiento en Oslo— en reportajes de alto impacto público.',
    keyOutcomesEn: [
      'Authored in-depth international dispatch on the Oslo World Degrowth Conference featuring Kate Raworth and Max Ajl in El Desconcierto.',
      'Investigative coverage on wetland restoration and peatland rewetting for national carbon neutrality targets.',
      'Published joint soil transition policy paper with German Green MP Dirk Kock-Rohwer in Comestible and Resumen.',
      'Spatial investigations exposing aquatic vulnerability and forestry hazards in Tomaterojo.'
    ],
    keyOutcomesEs: [
      'Cobertura de fondo en El Desconcierto sobre la Conferencia Mundial de Decrecimiento en Oslo con Kate Raworth y Max Ajl.',
      'Reportajes de divulgación científica sobre rehumectación de humedales degradados y sumideros de carbono.',
      'Artículo de política agraria junto al diputado estatal alemán Dirk Kock-Rohwer en Comestible y Resumen.',
      'Investigaciones espaciales en Tomaterojo sobre desecación de humedales y propagación de megaincendios.'
    ],
    stats: [
      { value: '7 Artículos', labelEn: 'Press Investigations', labelEs: 'Investigaciones en Prensa' },
      { value: '6 Medios', labelEn: 'Publishing Outlets', labelEs: 'Medios de Prensa' },
      { value: '100%', labelEn: 'Editorial Integrity', labelEs: 'Rigor y Fuentes de Campo' }
    ],
    mediaItems: [
      {
        id: 'pub-epn-report',
        type: 'press',
        titleEn: 'EPN Biomass Investigation: Spotlight on Burning Biomass in South America',
        titleEs: 'Investigación EPN: Spotlight on Burning Biomass for Energy in South America',
        subtitleEn: 'Environmental Paper Network International Dossier // Lead Author',
        subtitleEs: 'Dossier Internacional EPN // Autor Principal',
        url: 'https://environmentalpaper.org/2023/06/spotlight-on-burning-biomass-for-energy-in-south-america-community-opposition-to-a-power-plant-in-parral-chile/',
        src: '/press_covers/epn_screen.png',
        captionEn: 'Lead author of the landmark EPN investigation exposing carbon accounting loopholes and false renewable claims of industrial biomass plants in Parral, Chile, and the EU regulatory framework (RED III & ETS).',
        captionEs: 'Autor principal de la investigación insignia de EPN que expone los vacíos contables de carbono y las falsas declaraciones de energía renovable de plantas de biomasa en Parral, Chile, y su encuadre en las directivas europeas (RED III y ETS).',
        authorOrSource: 'Environmental Paper Network (EPN)',
        date: '2023-2024',
        tags: ['EPN Report', 'Lead Author', 'RED III / ETS', 'EU Policy']
      },
      {
        id: 'press-desconcierto-noruega',
        type: 'press',
        titleEn: 'El Desconcierto: Countries Too Rich to Grow? World Degrowth Conference in Oslo',
        titleEs: 'El Desconcierto: ¿Países tan ricos que no quieren crecer más? Noruega y Decrecimiento',
        subtitleEn: 'International Dispatch from Oslo // Featuring Kate Raworth & Max Ajl',
        subtitleEs: 'Crónica Internacional desde Oslo // Debate Mundial con Kate Raworth y Max Ajl',
        url: 'https://eldesconcierto.cl/2025/07/06/paises-tan-ricos-que-no-quieren-crecer-mas-noruega-acoge-mayor-debate-mundial-sobre-alternativas-al-crecimiento-economico-infinito',
        src: '/press_covers/desconcierto_noruega_screen.png',
        captionEn: 'Dispatched analysis from Oslo covering the historic global summit of over 1,000 economists, scientists, and policy experts—featuring Kate Raworth (Doughnut Economics) and Max Ajl—interrogating post-growth economic paradigms, North-South climate debt, and transitions beyond GDP towards sufficiency and ecological balance.',
        captionEs: 'Crónica y análisis desde Oslo sobre la histórica cumbre que reunió a más de mil economistas, científicos y delegados de todo el mundo —con ponencias de Kate Raworth (Economía de la Dona) y Max Ajl— debatiendo cómo superar el dogma del PIB infinito, la justicia climática Norte-Sur y la transición hacia economías de suficiencia y bienestar ecológico.',
        authorOrSource: 'El Desconcierto (Por Daniel S. Santander Urrutia)',
        date: 'Julio 2025',
        tags: ['El Desconcierto', 'Noruega', 'Decrecimiento', 'Kate Raworth', 'Economía de la Dona']
      },
      {
        id: 'press-desconcierto-humedales',
        type: 'press',
        titleEn: 'El Desconcierto: Peatland Rewetting & Global Climate Frameworks',
        titleEs: 'El Desconcierto: Rehumectación de Humedales Degradados',
        subtitleEn: 'Scientific Column // Wetland Restoration & Carbon Sinks',
        subtitleEs: 'Columna Científica // Restauración de Humedales y Sumideros de Carbono',
        url: 'https://eldesconcierto.cl/medio-ambiente/rehumectacion-la-tecnica-que-le-devuelve-la-vida-humedales-degradados-y-que-crece-el-mundo-n5458943',
        src: '/press_covers/desconcierto_screen.png',
        captionEn: 'Investigative science article dissecting peatland rewetting techniques and nature-based solutions to curb emissions in Chile and Europe.',
        captionEs: 'Artículo de divulgación científica explicando la técnica de rehumectación de humedales degradados y su rol clave en el secuestro global de carbono.',
        authorOrSource: 'El Desconcierto',
        date: '2026',
        tags: ['Divulgación Científica', 'Humedales', 'Prensa Nacional']
      },
      {
        id: 'press-comestible',
        type: 'press',
        titleEn: 'Comestible & Resumen.cl: Agroecological Investment w/ Dirk Kock-Rohwer',
        titleEs: 'Comestible & Resumen.cl: Inversiones en Agroecología con Dirk Kock-Rohwer',
        subtitleEn: 'Policy Analysis // Written alongside German Green MP Dirk Kock-Rohwer',
        subtitleEs: 'Análisis de Políticas // Escrito junto al Diputado Alemán Dirk Kock-Rohwer',
        url: 'https://comestible.info/inversiones-para-la-agroecologia-ahora/',
        src: '/press_covers/comestible_screen.png',
        captionEn: 'Joint policy paper with German parliamentarian Dirk Kock-Rohwer assessing agroecological soil transitions and subsidies in Schleswig-Holstein, Germany.',
        captionEs: 'Artículo de fondo junto al diputado estatal alemán Dirk Kock-Rohwer sobre conservación de suelos y la necesidad urgente de redirigir subsidios agrícolas a la agroecología.',
        authorOrSource: 'Comestible.info & Resumen.cl',
        date: '2024',
        tags: ['Dirk Kock-Rohwer', 'Alemania', 'Agroecología']
      },
      {
        id: 'press-tomaterojo',
        type: 'press',
        titleEn: 'Tomaterojo: Wetlands Under Fire & Megafire Propagation',
        titleEs: 'Tomaterojo: Humedales bajo fuego y propagación de megaincendios',
        subtitleEn: 'Field Investigation // Water Vulnerability & Forestry Hazards',
        subtitleEs: 'Investigación de Campo // Vulnerabilidad Hídrica y Riesgo Forestal',
        url: 'https://tomaterojo.cl/aguas-aguas-humedales-bajo-fuego-que-sabemos-y-que-esta-haciendo-chile/',
        src: '/press_covers/tomaterojo_screen.png',
        captionEn: 'Spatial analysis of aquatic ecosystems and regulatory gaps enabling megafire propagation across central-southern Chilean monoculture zones.',
        captionEs: 'Investigación espacial sobre cómo la desecación de humedales por monocultivos forestales acelera la propagación de megaincendios en el centro-sur de Chile.',
        authorOrSource: 'Tomaterojo.cl',
        date: '2023',
        tags: ['Tomaterojo', 'Incendios', 'Periodismo Ambiental']
      },
      {
        id: 'press-resumen',
        type: 'press',
        titleEn: 'Resumen.cl: Community Frontline Solutions to Megafires in Tomé',
        titleEs: 'Resumen.cl: Soluciones Comunitarias ante Incendios en Tomé',
        subtitleEn: 'Grassroots Assembly // Bío-Bío Disaster Recovery',
        subtitleEs: 'Asamblea Popular // Recuperación ante Desastres en Bío-Bío',
        url: 'https://resumen.cl/articulos/organizaciones-sociales-trabajaron-en-soluciones-colectivas-ante-incendios-forestales-en-encuentro-en-tome',
        src: '/press_covers/resumen_screen.png',
        captionEn: 'Grassroots assembly of affected communities and scientists developing collective disaster recovery plans against pine plantation fires.',
        captionEs: 'Encuentro de organizaciones territoriales y científicos levantando soluciones frente a la devastación de los incendios forestales en Tomé.',
        authorOrSource: 'Resumen.cl',
        date: '2023',
        tags: ['Resumen.cl', 'Tomé', 'Frente Social']
      },
      {
        id: 'press-delfino',
        type: 'press',
        titleEn: 'Delfino (Costa Rica): Latin American Youth Climate Justice Summit',
        titleEs: 'Delfino (Costa Rica): Cumbre Latinoamericana de Jóvenes por el Clima',
        subtitleEn: 'International Press Spotlight // Intergenerational Climate Accountability',
        subtitleEs: 'Prensa Internacional // Rendición de Cuentas y Justicia Climática',
        url: 'https://delfino.cr/2023/04/jovenes-activistas-climaticos-de-latinoamerica-tuvieron-encuentro-de-trabajo-en-costa-rica',
        src: '/press_covers/delfino_screen.png',
        captionEn: 'International press coverage of Daniel Santander and Latin American delegations working on the landmark climate advisory opinion for the ICJ and IACtHR.',
        captionEs: 'Cobertura de prensa internacional del encuentro de trabajo en Costa Rica incidiendo ante tribunales internacionales por justicia climática intergeneracional.',
        authorOrSource: 'Delfino.cr',
        date: '2023',
        tags: ['Costa Rica', 'Justicia Climática', 'Prensa Internacional']
      },
      {
        id: 'press-laneta',
        type: 'press',
        titleEn: 'La Neta: Constitutional Waste Management & Circular Soils Bill',
        titleEs: 'La Neta: Iniciativa Constituyente sobre Gestión de Residuos y Suelos',
        subtitleEn: 'Constitutional Convention Legislative Initiative // Lead Author',
        subtitleEs: 'Iniciativa Popular Constituyente // Co-redactor Técnico',
        url: 'https://laneta.cl/ingresa-iniciativa-sobre-gestion-de-residuos-que-busca-transformar-el-actual-sistema-de-produccion-y-consumo/',
        src: '/press_covers/laneta_screen.png',
        captionEn: 'Drafted constitutional proposal presented to the Chilean Constitutional Convention transforming production and waste governance under closed ecological cycles.',
        captionEs: 'Presentación formal de la norma constituyente sobre gestión de residuos orgánicos, protección de suelos y transición de consumo ante la Convención Constitucional.',
        authorOrSource: 'La Neta / Convención Constitucional',
        date: '2022',
        tags: ['Convención Constitucional', 'La Neta', 'Norma']
      }
    ]
  },

  // SECTION 6: PUBLICACIONES & ENSAYOS DE FONDO
  {
    id: 'publicaciones-ensayos',
    tabKey: '06. PUBLICACIONES',
    tabTitleEn: 'Publications & Essays',
    tabTitleEs: 'Publicaciones & Ensayos',
    badgeEn: 'INTERNATIONAL REPORTS, MONOGRAPHS & POLITICAL ECOLOGY',
    badgeEs: 'INFORMES INTERNACIONALES, MONOGRAFÍAS Y ENSAYOS',
    roleEn: 'Lead Technical Author | Political Ecology Essayist | International Researcher',
    roleEs: 'Autor Técnico Principal | Ensayista de Ecología Política | Investigador Internacional',
    titleEn: 'International Reports, Analytical Monographs & Socioecological Treatises',
    titleEs: 'Informes Internacionales, Monografías Analíticas & Tratados Socioecológicos',
    headlineEn: 'Dismantling False Climate Solutions, Industrial Plantation Impacts & Charting Regenerative Transitions',
    headlineEs: 'Desnudando las Falsas Soluciones Climáticas, los Impactos de Monocultivos y Trazando Rutas hacia la Ecología Regenerativa',
    narrativeEn: 'A curated collection of foundational publications, policy monographs, and philosophical political ecology treatises. Includes the landmark 2024 Environmental Paper Network (EPN) report on industrial biomass accounting loopholes under EU RED and ETS, the comprehensive three-part international dossier for Climate Communications Coalition on tree monocultures and indigenous frontline defense (dedicated to Julia Chuñil), and the four-part socio-ecological treatise published by OLCA analyzing systemic collapse, state erosion, and pathways toward communal autonomy and regenerative ecology.',
    narrativeEs: 'Colección de publicaciones monográficas, informes de política ambiental internacional y tratados ensayísticos de ecología política. Abarca el informe insignia 2024 de la Red Ambiental del Papel (EPN) sobre vacíos de contabilidad de biomasa en las directivas de la UE (RED y ETS), la serie tripartita internacional para Climate Communications Coalition sobre monocultivos forestales y defensa territorial indígena (dedicada a la dirigenta Julia Chuñil), y la tetralogía de ensayos publicada por OLCA sobre colapso civilizatorio, agonía del Estado y autonomía comunitaria regenerativa.',
    keyOutcomesEn: [
      'Primary author of the EPN 2024 Biomass Investigation, cited across European and Latin American climate coalitions.',
      'Three-part analytical series published by Climate Communications Coalition evaluating plantation impacts on communities, ecosystems, and climate.',
      'Four-part political ecology treatise published by OLCA articulating post-capitalist autonomy and regenerative bioeconomy.',
      '100% peer-informed open access publications disseminated to multilateral bodies and frontline organizations.'
    ],
    keyOutcomesEs: [
      'Autor principal del Informe EPN 2024 sobre biomasa industrial y directivas de la Unión Europea.',
      'Serie analítica de tres partes para la Climate Communications Coalition sobre monocultivos forestales y derechos territoriales.',
      'Tetralogía de ensayos para OLCA articulando autonomía postcapitalista, decrecimiento y ecología regenerativa.',
      'Publicaciones de acceso abierto difundidas a organismos multilaterales, redes europeas y frentes socioambientales.'
    ],
    stats: [
      { value: '3 Obras', labelEn: 'Major Series & Reports', labelEs: 'Obras y Series Mayores' },
      { value: '8 Entregas', labelEn: 'Total Analytical Chapters', labelEs: 'Capítulos y Entregas' },
      { value: 'Global', labelEn: 'EU, Latin America & Global South', labelEs: 'Alcance UE y América Latina' }
    ],
    mediaItems: [
      {
        id: 'pub-climatecc-series',
        type: 'press',
        titleEn: 'ClimateCC: Tree Monocultures, Plantations and Impacts (3-Part Series)',
        titleEs: 'ClimateCC: Tree Monocultures, Plantations and Impacts (Serie Trilogía)',
        subtitleEn: 'Climate Communications Coalition // Dedicated to Julia Chuñil',
        subtitleEs: 'Climate Communications Coalition // Dedicado a Julia Chuñil',
        url: 'https://www.climatecc.org/forests/tree-monocultures',
        src: '/press_covers/climatecc_screen.png',
        captionEn: 'Three-part analytical dossier published by Climate Communications Coalition investigating how industrial tree plantations destroy water cycles and violate territorial rights under the guise of "nature-based solutions". Dedicated to Mapuche leader Julia Chuñil.',
        captionEs: 'Dossier analítico de tres entregas publicado por Climate Communications Coalition que investiga cómo los monocultivos forestales degradan cuencas y vulneran derechos territoriales bajo el disfraz corporativo de "soluciones basadas en la naturaleza". Dedicado a la dirigenta mapuche Julia Chuñil.',
        authorOrSource: 'Climate Communications Coalition (ClimateCC.org)',
        date: '2025-2026',
        tags: ['ClimateCC.org', 'Tree Monocultures', 'Julia Chuñil', 'Derechos Indígenas', 'Carbon Offsets'],
        subLinks: [
          {
            titleEn: 'Part 1: Impact on Communities',
            titleEs: '1. Impacto en las Comunidades',
            url: 'https://www.climatecc.org/forests/tree-monocultures/communities'
          },
          {
            titleEn: 'Part 2: Impact on the Environment',
            titleEs: '2. Impacto en el Medio Ambiente',
            url: 'https://www.climatecc.org/forests/tree-monocultures/environment'
          },
          {
            titleEn: 'Part 3: Impact on Climate',
            titleEs: '3. Impacto en el Clima',
            url: 'https://www.climatecc.org/forests/tree-monocultures/climate'
          },
          {
            titleEn: 'Full Series Hub at ClimateCC.org',
            titleEs: 'Portal Central de la Serie (ClimateCC)',
            url: 'https://www.climatecc.org/forests/tree-monocultures'
          }
        ]
      },
      {
        id: 'pub-olca-series',
        type: 'press',
        titleEn: 'OLCA: Being Free on the Brink of the Abyss (4-Part Philosophical Treatise)',
        titleEs: 'OLCA: Ser libres al borde del abismo (Tetralogía de Ensayos Político-Ecológicos)',
        subtitleEn: 'Observatorio Latinoamericano de Conflictos Ambientales // Deep Analytical Treatise',
        subtitleEs: 'Observatorio Latinoamericano de Conflictos Ambientales // Ensayo Político-Ecológico',
        url: 'https://olca.cl/articulo/nota.php?id=111288',
        src: '/press_covers/olca_screen.png',
        captionEn: 'Four-part political ecology treatise diagnosing modern civilizational crisis (economic, social, and spiritual) and articulating concrete pathways toward communal autonomy, post-extractivism, and regenerative ecology: 1. Economic Collapse; 2. The Sinking Titanic; 3. Human Domestication; 4. The Call of the Wild & Regenerative Ecology.',
        captionEs: 'Obra ensayística de cuatro partes que diagnostica la crisis sistémica contemporánea (económica, social y espiritual) y articula las rutas de salida hacia la autonomía comunitaria y la ecología regenerativa: (1) El colapso económico; (2) Se hunde el Titanic (agonía del Leviatán); (3) Cariño, ¿qué nos pasó? (la domesticación moderna); y (4) La llamada de la selva (autonomía y regeneración).',
        authorOrSource: 'Observatorio Latinoamericano de Conflictos Ambientales (OLCA)',
        date: 'Agosto 2025',
        tags: ['OLCA', 'Autonomía', 'Ecología Regenerativa', 'Post-extractivismo', 'Decrecimiento', 'Buen Vivir'],
        subLinks: [
          {
            titleEn: 'Part 1: The World Approaches Economic Collapse',
            titleEs: 'Parte 1: El mundo se acerca a un colapso económico',
            url: 'https://olca.cl/articulo/nota.php?id=111259'
          },
          {
            titleEn: 'Part 2: The Titanic Sinks: State Collapse & Leviathan Agony',
            titleEs: 'Parte 2: Se hunde el Titanic: El colapso de los Estados',
            url: 'https://olca.cl/articulo/nota.php?id=111262'
          },
          {
            titleEn: 'Part 3: Darling, What Happened to Us? Human Domestication',
            titleEs: 'Parte 3: Cariño, ¿qué nos pasó? Domesticación humana',
            url: 'https://olca.cl/articulo/nota.php?id=111268'
          },
          {
            titleEn: 'Part 4: The Call of the Wild: Autonomy & Regeneration',
            titleEs: 'Parte 4: La llamada de la selva: Autonomía y Ecología',
            url: 'https://olca.cl/articulo/nota.php?id=111288'
          }
        ]
      }
    ]
  }
];

// ==========================================
// MODO DIURNO: CIENTÍFICO AMBIENTAL & BIOFÍSICO
// (Investigación empírica, Sensores, Cuencas, Gemelo Digital, CAU Kiel / AMU Poznań)
// ==========================================
export const scientificSections: SectionData[] = [
  // 0. PORTADA & PERFIL PROFESIONAL (COVER PAGE 1)
  {
    id: 'portada-cientifica',
    tabKey: '00. PORTADA',
    tabTitleEn: 'Cover',
    tabTitleEs: 'Portada',
    badgeEn: 'PORTFOLIO // SCIENTIFIC PROFILE & BIO',
    badgeEs: 'PORTAFOLIO // PERFIL CIENTÍFICO Y BIO',
    roleEn: 'Environmental Scientist & Biophysical Systems Specialist (CAU Kiel / AMU Poznań / U. de Chile)',
    roleEs: 'Científico Ambiental y Especialista en Sistemas Biofísicos (CAU Kiel / AMU Poznań / U. de Chile)',
    titleEn: 'Daniel Sebastián Santander Urrutia',
    titleEs: 'Daniel Sebastián Santander Urrutia',
    headlineEn: 'Interdisciplinary Environmental Scientist: Biophysical Quantification, Watershed Modeling & Land Governance',
    headlineEs: 'Científico Ambiental Interdisciplinario: Cuantificación Biofísica, Modelación de Cuencas y Gobernanza del Territorio',
    narrativeEn: 'Interdisciplinary environmental scientist combining rigorous biophysical quantification with multi-stakeholder land governance and policy analysis. Experienced in conducting independent risk assessment of intensive land-use models, bioenergy supply chains, and carbon accounting methodologies. Proven track record across the Americas and Europe translating hard field-data into robust environmental integrity safeguards, due diligence frameworks, and evidence-based policy inputs.',
    narrativeEs: 'Científico ambiental interdisciplinario con base fundacional en Geofísica (FCFM, Universidad de Chile) y Doble Maestría Europea en Manejo y Protección Ambiental (CAU Kiel, Alemania / AMU Poznań, Polonia). Especializado en dinámica de flujos de gases de efecto invernadero, evaluación geoespacial de riesgos climáticos (incendios, sequías, inundaciones), ordenamiento territorial con enfoque en cuencas y gobernanza multiactor.',
    keyOutcomesEn: [
      'Dual M.Sc. in Environmental Management & Environmental Protection (Germany & Poland).',
      'Geophysics degree awarded with distinction from FCFM, Universidad de Chile.',
      'Field hydro-geophysical ecosystem monitoring across Maule forest basins and European peatlands.'
    ],
    keyOutcomesEs: [
      'Doble Maestría en Manejo y Protección Ambiental (Alemania y Polonia).',
      'Licenciatura en Geofísica con distinción máxima en FCFM, Universidad de Chile.',
      'Monitoreo hidrogeofísico de ecosistemas y agua en cuencas del Maule y turberas europeas.'
    ],
    stats: [
      { value: 'Dual M.Sc.', labelEn: 'Germany & Poland', labelEs: 'Alemania y Polonia' },
      { value: 'Geofísica', labelEn: 'FCFM U. de Chile', labelEs: 'FCFM U. de Chile' },
      { value: '2020-2026', labelEn: 'Active Research', labelEs: 'Investigación Activa' }
    ],
    mediaItems: [
      {
        id: 'portada-sheet-000',
        type: 'image',
        titleEn: 'Curricular Dossier Cover & Executive Scientific Profile',
        titleEs: 'Portada de Dossier Curricular y Perfil Científico Ejecutivo',
        subtitleEn: 'Ecosystem & Water Monitoring in Maule Basins • Doughnut Economics (Copenhagen)',
        subtitleEs: 'Monitoreo de Ecosistemas y Agua en Cuencas del Maule • Doughnut Economics (Copenhague)',
        src: '/portfolio_pages/page_1.png',
        srcEn: '/portfolio_pages_en/page_1.png',
        captionEn: 'Official dossier cover featuring field hydrogeophysical monitoring in Maule basins (Chile), executive research bio, and international training credentials in Germany, Poland, and Denmark.',
        captionEs: 'Portada oficial del expediente con estación de terreno en cuencas del Maule (Chile), síntesis curricular de investigación y trayectoria internacional en Alemania, Polonia y Dinamarca.',
        authorOrSource: 'Expediente Científico Oficial (2020-2026)',
        date: '2020-2026',
        tags: ['Portada', 'Perfil Científico', 'Geofísica', 'Doble M.Sc.']
      }
    ]
  },

  // 1. INVESTIGACIÓN CUANTITATIVA Y EVALUACIÓN BIOFÍSICA (SHEET 001 -> PAGE 2)
  {
    id: 'investigacion-biofisica',
    tabKey: '01. CUANTITATIVA',
    tabTitleEn: 'Quantitative',
    tabTitleEs: 'Cuantitativa',
    badgeEn: '001 // QUANTITATIVE RESEARCH & BIOPHYSICAL RISK',
    badgeEs: '001 // INVESTIGACIÓN CUANTITATIVA Y EVALUACIÓN BIOFÍSICA',
    roleEn: 'Environmental Scientist & Biophysical Systems Specialist (CAU Kiel / AMU Poznań / U. de Chile)',
    roleEs: 'Científico Ambiental y Especialista en Sistemas Biofísicos (CAU Kiel / AMU Poznań / U. de Chile)',
    titleEn: 'Biophysical Systems, Peatland GHG Dynamics & Basin Balances',
    titleEs: 'Sistemas Biofísicos, Dinámica de GEI en Turberas y Balance de Cuencas',
    headlineEn: 'Empirical Quantification of Greenhouse Gas Exchanges and Forest Monoculture Water Stress',
    headlineEs: 'Cuantificación Empírica de Flujos de Gases de Efecto Invernadero y Estrés Hídrico por Monocultivos',
    narrativeEn: 'Interdisciplinary research bridging geophysics with European double-degree environmental science. Specializing in eddy covariance GHG flux towers in rewetted peatlands, vertical electrical sounding (VES) for soil moisture depletion in Chilean forestry megadroughts, and post-fire erosion/socio-ecological disturbance modeling.',
    narrativeEs: 'Investigación interdisciplinaria articulando geofísica con doble maestría europea en gestión ambiental. Especializado en torres de covarianza de torbellinos (Eddy Covariance) para flujos de GEI en turberas rehumedecidas, sondeos eléctricos verticales para agotamiento hídrico por monocultivos forestales en Chile y modelos socioecológicos post-incendio.',
    keyOutcomesEn: [
      'Advanced quantification of peatland GHG exchange (CO2/CH4) using eddy covariance and static flux chambers.',
      'Hydrogeophysical assessment of water deficit in central-southern Chile basins under industrial eucalyptus/pine plantations.',
      'Socio-ecological disturbance modeling assessing fire severity, biodiversity loss, and climate change vulnerability.'
    ],
    keyOutcomesEs: [
      'Cuantificación avanzada de flujos de GEI (CO2/CH4) en turberas en transición mediante covarianza de torbellinos y cámaras estáticas.',
      'Diagnóstico hidrogeofísico del estrés hídrico y agotamiento de humedad edáfica en cuencas del centro-sur de Chile.',
      'Modelación de perturbaciones socioecológicas y severidad de megaincendios forestales bajo escenarios de cambio climático.'
    ],
    stats: [
      { value: 'EddyCov', labelEn: 'Flux Tower Analytics', labelEs: 'Análisis Micrometeorológico' },
      { value: 'Dual M.Sc.', labelEn: 'Germany & Poland', labelEs: 'Alemania y Polonia' },
      { value: 'Geofísica', labelEn: 'Universidad de Chile', labelEs: 'Base FCFM U. de Chile' }
    ],
    mediaItems: [
      {
        id: 'biofisica-sheet-001',
        type: 'image',
        titleEn: 'Quantitative Research & Biophysical Risk Assessment (Sheet 001)',
        titleEs: 'Investigación Cuantitativa y Evaluación Biofísica (Lámina 001)',
        subtitleEn: 'Lake Góreckie • Durowskie • Peatlands • Urban Aquifers (Poland & Germany)',
        subtitleEs: 'Lago Góreckie • Durowskie • Turberas • Acuíferos Urbanos (Polonia y Alemania)',
        src: '/portfolio_pages/page_2.png',
        srcEn: '/portfolio_pages_en/page_2.png',
        captionEn: 'Empirical quantification of greenhouse gas dynamics, eddy covariance GHG flux towers in rewetted peatlands, and hydrogeophysical basin water balances in Chilean forestry monoculture zones.',
        captionEs: 'Cuantificación empírica, dinámica de gases de efecto invernadero (GEI) con torres eddy covariance en turberas rehumedecidas, y balance hidrogeofísico de cuencas en zonas de monocultivo forestal.',
        authorOrSource: 'Expedición CAU Kiel & AMU Poznań (2020-2025)',
        date: '2020-2025',
        tags: ['EddyCovariance', 'Hidrogeofísica', 'Turberas', 'Biomasa']
      }
    ]
  },

  // 2. CAPACIDADES COMPUTACIONALES, INSTRUMENTACIÓN Y HERRAMIENTAS (SHEET 002 -> PAGE 3)
  {
    id: 'capacidades-computacionales',
    tabKey: '02. HERRAMIENTAS',
    tabTitleEn: 'Tools & Sensors',
    tabTitleEs: 'Herramientas',
    badgeEn: '002 // COMPUTATIONAL CAPABILITIES, INSTRUMENTATION & TOOLS',
    badgeEs: '002 // CAPACIDADES COMPUTACIONALES, INSTRUMENTACIÓN Y HERRAMIENTAS',
    roleEn: 'Data Modeler, Earth Observation Specialist & Digital Twin Architect',
    roleEs: 'Modelador de Datos, Especialista en Teledetección y Arquitecto de Gemelo Digital',
    titleEn: 'Smart Food Parks, Earth Observation & Laboratory Sensors',
    titleEs: 'Smart Food Parks, Teledetección Espacial y Sensores de Laboratorio',
    headlineEn: 'UN Citiverse Challenge Semifinalist: Merging IoT Data Streams with Satellite Remote Sensing',
    headlineEs: 'Semifinalista UN Citiverse Challenge: Integración de Datos IoT, Satélite y Gemelos Digitales',
    narrativeEn: 'Architecture of geospatial data pipelines, satellite Earth Observation (QGIS, Google Earth Engine, NDVI/vegetation indices), statistical modeling (R, Python, MATLAB), and field instrument operation. Semifinalist in the UN Citiverse Challenge for SDG Cities with Smart Food Parks.',
    narrativeEs: 'Diseño de arquitecturas de datos geoespaciales, teledetección satelital (QGIS, GEE, índices de vegetación), modelación estadística (R, Python, MATLAB) y operación de instrumental de terreno. Semifinalista en el UN Citiverse Challenge para Ciudades SDG.',
    keyOutcomesEn: [
      'Semifinalist UN Citiverse Challenge for SDG Cities with the Smart Food Parks & Digital Twin architecture.',
      'Comprehensive programming stack: R, Python, MATLAB, Google Earth Engine and QGIS spatial modeling.',
      'Mastery of physical field instruments: vertical electrical soundings, soil chemical analyses, and micrometeorological stations.'
    ],
    keyOutcomesEs: [
      'Semifinalista UN Citiverse Challenge para Ciudades SDG con la plataforma Smart Food Parks & Gemelo Digital.',
      'Stack de programación y análisis: R, Python, MATLAB, Google Earth Engine y modelación multitemporal satelital en QGIS.',
      'Dominio de instrumentos de campo y laboratorio: sondeos eléctricos, análisis fisicoquímicos en Kiel y estaciones meteorológicas.'
    ],
    stats: [
      { value: 'UN Semifinalist', labelEn: 'Citiverse Challenge', labelEs: 'Citiverse Challenge SDG' },
      { value: 'R / Python', labelEn: 'Statistical Modeling', labelEs: 'Modelación Estadística' },
      { value: 'QGIS / GEE', labelEn: 'Earth Observation (EO)', labelEs: 'Observación Terrestre' }
    ],
    mediaItems: [
      {
        id: 'computational-sheet-002',
        type: 'image',
        titleEn: 'Computational Capabilities, Instrumentation & Tools (Sheet 002)',
        titleEs: 'Capacidades Computacionales, Instrumentación y Herramientas (Lámina 002)',
        subtitleEn: 'Smart Food Parks • Soil Analysis Lab (Kiel) • Maule Transient Sounding',
        subtitleEs: 'Smart Food Parks • Laboratorio de Suelos (Kiel) • Sondaje Eléctrico Maule',
        src: '/portfolio_pages/page_3.png',
        srcEn: '/portfolio_pages_en/page_3.png',
        captionEn: 'UN Citiverse Challenge Smart Food Parks blueprint, soil chemical laboratory diagnostics at CAU Kiel, and transient electromagnetic field soundings in Maule basin, Chile.',
        captionEs: 'Arquitectura de Smart Food Parks (semifinalista ONU), análisis fisicoquímico de suelos en CAU Kiel y sondeos electromagnéticos transitorios en cuencas de Chile.',
        authorOrSource: 'UN Citiverse & CAU Kiel Soil Lab (2021-2025)',
        date: '2021-2025',
        tags: ['Gemelo Digital', 'IoT', 'Laboratorio Kiel', 'Python/R']
      }
    ]
  },

  // 3. GOBERNANZA, ASESORÍA EN POLÍTICAS Y ENFOQUE MULTIACTOR (SHEET 003 -> PAGE 4)
  {
    id: 'gobernanza-politicas',
    tabKey: '03. GOBERNANZA',
    tabTitleEn: 'Governance',
    tabTitleEs: 'Gobernanza',
    badgeEn: '003 // GOVERNANCE, POLICY ADVISORY & MULTI-STAKEHOLDER',
    badgeEs: '003 // GOBERNANZA, ASESORÍA EN POLÍTICAS Y ENFOQUE MULTIACTOR',
    roleEn: 'Legislative & Constitutional Advisor | Social Safeguards Coordinator',
    roleEs: 'Asesor Legislativo y Constitucional | Coordinador de Salvaguardas Sociales',
    titleEn: 'Constitutional Advisory, Disaster Committees & Social Safeguards',
    titleEs: 'Asesoría Constitucional, Comisión de Desastres y Salvaguardas Sociales',
    headlineEn: 'Translating Biophysical Soil Science into Binding Legislation and Grassroots Disaster Relief',
    headlineEs: 'Traducción de Ciencia Biofísica a Normativas Vinculantes y Mediación Territorial',
    narrativeEn: 'Drafted technical benchmarks and policy bills on agroforestry transitions, watershed-level governance, and wildfire hazard mitigation for regional governors, deputies, and the Constitutional Convention of Chile. Led social safeguards and due diligence in frontline floods and fires (2017-2024), coordinating churches, municipalities, and assemblies under FPIC standards.',
    narrativeEs: 'Redacción de documentos técnicos y propuestas normativas sobre ordenamiento por cuencas, transición agroforestal y prevención de megaincendios para gobernadores regionales, diputados y la Convención Constitucional de Chile. Coordinación de salvaguardas sociales, ayuda a víctimas de inundaciones e incendios con estándar de Consentimiento PLI.',
    keyOutcomesEn: [
      'Expert advisory delivered to the Disaster & Firefighters Committee at the Chamber of Deputies of Chile (2023).',
      'Constitutional proposals on water basin management, agroforestry zoning, and ecological restoration (2021-2022).',
      'Multi-stakeholder governance dialogues coordinated across Chile, Colombia, Argentina, Brazil, and Portugal (2024-Present).'
    ],
    keyOutcomesEs: [
      'Exposición y asesoría técnica en la Comisión de Emergencias, Desastres y Bomberos de la Cámara de Diputados de Chile (2023).',
      'Elaboración de normas sobre ordenamiento por cuencas y mitigación de incendios ante la Convención Constitucional (2021-2022).',
      'Coordinación de mesas de diálogo multiactor en Chile, Colombia, Argentina, Brasil y Portugal (2024-Presente).'
    ],
    stats: [
      { value: 'Congreso', labelEn: 'Chamber of Deputies', labelEs: 'Cámara de Diputados' },
      { value: 'PLI Standards', labelEn: 'Social Safeguards', labelEs: 'Consentimiento PLI' },
      { value: '5 Países', labelEn: 'Multi-Actor Networks', labelEs: 'Diálogos de Gobernanza' }
    ],
    mediaItems: [
      {
        id: 'gobernanza-sheet-003',
        type: 'image',
        titleEn: 'Governance, Policy Advisory & Multi-Stakeholder Approach (Sheet 003)',
        titleEs: 'Gobernanza, Asesoría en Políticas y Enfoque Multiactor (Lámina 003)',
        subtitleEn: 'Chamber of Deputies • Constitutional Convention • Flood Frontline Relief',
        subtitleEs: 'Cámara de Diputados • Convención Constitucional • Ayuda a Damnificados',
        src: '/portfolio_pages/page_4.png',
        srcEn: '/portfolio_pages_en/page_4.png',
        captionEn: 'Daniel Santander testifying at the Chamber of Deputies Committee on Disasters and Wildfires, constitutional advisory presentation in Santiago, and grassroots frontline emergency coordination for flood victims.',
        captionEs: 'Daniel Santander exponiendo en la Cámara de Diputados ante la Comisión de Bomberos y Emergencias, acto constituyente y coordinación territorial de ayuda a damnificados por inundaciones.',
        authorOrSource: 'Cámara de Diputados & Convención Constitucional (2021-2024)',
        date: '2021-2024',
        tags: ['Cámara de Diputados', 'Convención', 'Salvaguardas', 'Incendios']
      }
    ]
  },

  // 4. PUBLICACIONES TÉCNICAS, INFORMES Y REPORTES DE POLÍTICA (SHEET 004 -> PAGE 5)
  {
    id: 'publicaciones-tecnicas',
    tabKey: '04. PUBLICACIONES',
    tabTitleEn: 'Publications',
    tabTitleEs: 'Publicaciones',
    badgeEn: '004 // PUBLICATIONS & POLICY BRIEFS',
    badgeEs: '004 // PUBLICACIONES TÉCNICAS, INFORMES Y REPORTES DE POLÍTICA',
    roleEn: 'Lead Technical Author (EPN 2024) | Scientific Communicator | Policy Brief Author',
    roleEs: 'Autor Técnico Principal (EPN 2024) | Divulgador Científico | Autor de Policy Briefs',
    titleEn: 'EPN Biomass Investigation, Rewilding Aljezur & Peatland Rewetting',
    titleEs: 'Informe EPN sobre Biomasa, Rewilding Aljezur y Rehumectación de Humedales',
    headlineEn: 'Investigative Dossiers with Global Impact: From the European Paper Network to Municipal Rewilding in Portugal',
    headlineEs: 'Dossiers Investigativos con Impacto Global: Desde la Red EPN hasta Rewilding Municipal en Portugal',
    narrativeEn: 'Lead author of landmark reports exposing biomass carbon accounting loopholes under the EU Renewable Energy Directive (RED) and Emissions Trading System (ETS). Co-author with German Green MP Dirk Kock-Rohwer on agroecological transition in Schleswig-Holstein. Author of "Rewilding Aljezur" in Portugal and investigative science essays.',
    narrativeEs: 'Autor principal del informe EPN 2024 sobre los riesgos biofísicos de la biomasa industrial para energía bajo las directivas RED III y ETS de la UE. Coautor junto al diputado alemán de Schleswig-Holstein Dirk Kock-Rohwer sobre conservación de suelos. Autor del policy brief "Rewilding Aljezur" (Portugal) y artículos en El Desconcierto, Tomaterojo y Comestible.',
    keyOutcomesEn: [
      'Primary author: "Spotlight on Burning Biomass for Energy in South America" (EPN 2024).',
      'Policy brief & StoryMaps for the municipality of Aljezur (Portugal) on forest fire reduction through ecological rewilding (2024).',
      'Joint publication with German MP Dirk Kock-Rohwer on agricultural soil transition in Germany (2024).'
    ],
    keyOutcomesEs: [
      'Autor principal: "Spotlight on Burning Biomass for Energy in South America" para Environmental Paper Network (2024).',
      'Policy brief y StoryMaps entregados al Municipio de Aljezur (Portugal) sobre renaturalización y resiliencia frente al fuego (2024).',
      'Artículo conjunto con el diputado de Schleswig-Holstein Dirk Kock-Rohwer sobre conservación de suelos y agroecología (2024).'
    ],
    stats: [
      { value: 'EPN 2024', labelEn: 'Biomass Report Author', labelEs: 'Autor Informe EPN' },
      { value: 'Aljezur PT', labelEn: 'Rewilding Policy Brief', labelEs: 'Policy Brief Portugal' },
      { value: 'S-H Germany', labelEn: 'Co-Author w/ Dirk Kock-Rohwer', labelEs: 'Coautoría Parlamentaria' }
    ],
    mediaItems: [
      {
        id: 'publicaciones-sheet-004',
        type: 'image',
        titleEn: 'Publications & Policy Briefs (Sheet 004)',
        titleEs: 'Publicaciones Técnicas, Informes y Reportes de Política (Lámina 004)',
        subtitleEn: 'EPN Biomass • Rewilding Aljezur • El Desconcierto • Tomaterojo',
        subtitleEs: 'Biomasa EPN • Rewilding Aljezur • El Desconcierto • Tomaterojo',
        src: '/portfolio_pages/page_5.png',
        srcEn: '/portfolio_pages_en/page_5.png',
        captionEn: 'Six international publications: EPN Biomass Report (2024), Global Forest Coalition review (2025), Dirk Kock-Rohwer German soil brief (2024), El Desconcierto wetland rewetting (2026), Tomaterojo wildfire paper, and municipal policy brief for Aljezur, Portugal.',
        captionEs: 'Seis publicaciones clave: Informe EPN 2024, revisión para Global Forest Coalition (2025), columna con el diputado alemán Dirk Kock-Rohwer, El Desconcierto (rehumectación de humedales), Tomaterojo y policy brief para Aljezur (Portugal).',
        authorOrSource: 'EPN, Global Forest Coalition, Aljezur (2024-2026)',
        date: '2024-2026',
        tags: ['EPN Report', 'Rewilding', 'El Desconcierto', 'Dirk Kock-Rohwer']
      }
    ]
  },

  // 5. CONFERENCIAS INTERNACIONALES Y TRANSFERENCIA DE CONOCIMIENTO (SHEET 005 -> PAGE 6)
  {
    id: 'conferencias-internacionales',
    tabKey: '05. CONFERENCIAS',
    tabTitleEn: 'Conferences',
    tabTitleEs: 'Conferencias',
    badgeEn: '005 // INTERNATIONAL CONFERENCES & KNOWLEDGE TRANSFER',
    badgeEs: '005 // CONFERENCIAS INTERNACIONALES Y TRANSFERENCIA DE CONOCIMIENTO',
    roleEn: 'Keynote Speaker | Multilateral Climate Justice Panelist',
    roleEs: 'Conferencista Internacional | Panelista Multilateral de Justicia Climática',
    titleEn: 'Bonn, Oslo, Bogotá, San José & Climate Justice Summits',
    titleEs: 'Bonn, Oslo, Bogotá, San José y Cumbre de Justicia Climática',
    headlineEn: 'Multilateral Advocacy on Planetary Boundaries, Forest Offsets & Peasant Water Rights',
    headlineEs: 'Incidencia Multilateral sobre Límites Planetarios, Bonos de Carbono y Soberanía Hídrica',
    narrativeEn: 'Invited panelist and speaker at premier international forums: Bonn Environmental Justice Conference (carbon offsets & monocultures), Oslo Degrowth Conference (ecological economics), Bogota Latin American Climate Justice Forum (biomass extraction & peasant resilience), and San Jose Costa Rica.',
    narrativeEs: 'Conferencista y panelista invitado en cumbres internacionales: Conferencia de Justicia Ambiental en Bonn (compensaciones de carbono y monocultivos), Conferencia de Decrecimiento en Oslo (economía ecológica), Foro Latinoamericano en Bogotá (extracción de biomasa) y Diálogo Intergeneracional en Costa Rica.',
    keyOutcomesEn: [
      'Bonn Environmental Justice Conference (Germany, 2025): Carbon offsets and socio-ecological impacts of large-scale monocultures.',
      'Oslo Degrowth Conference (Norway, 2025): Alternatives to infinite growth and planetary boundaries.',
      'Bogotá Latin American & Caribbean Climate Justice Forum (Colombia, 2023): Land use conflicts and biomass extraction.'
    ],
    keyOutcomesEs: [
      'Conferencia en Justicia Ambiental de Bonn (Alemania, 2025): Carbon offsets e impactos socioecológicos de monocultivos.',
      'Conferencia de Decrecimiento de Oslo (Noruega, 2025): Alternativas al crecimiento infinito y economía ecológica.',
      'Foro Latinoamericano y del Caribe de Bogotá (Colombia, 2023): Conflictos de uso de suelo y extracción de biomasa.'
    ],
    stats: [
      { value: 'Bonn & Oslo', labelEn: 'European Summits (2025)', labelEs: 'Cumbres Europa (2025)' },
      { value: 'Bogotá & San José', labelEn: 'Latin American Dialogues', labelEs: 'Paneles Latinoamérica' },
      { value: 'Climate Nexus', labelEn: 'USA - Chile Alliance', labelEs: 'Alianza The Climate Project' }
    ],
    mediaItems: [
      {
        id: 'conferencias-sheet-005',
        type: 'image',
        titleEn: 'International Conferences & Knowledge Transfer (Sheet 005)',
        titleEs: 'Conferencias Internacionales y Transferencia de Conocimiento (Lámina 005)',
        subtitleEn: 'Costa Rica Climate Dialogue • Bioenergy Infrastructure Bío-Bío • ENJUST',
        subtitleEs: 'Diálogo Climático Costa Rica • Infraestructura Forestal Bío-Bío • ENJUST',
        src: '/portfolio_pages/page_6.png',
        srcEn: '/portfolio_pages_en/page_6.png',
        captionEn: 'International speaking engagements: intergenerational justice dialogue in Costa Rica, keynote on bioenergy infrastructure in Bío-Bío Chile, and ENJUST Environmental Justice Network.',
        captionEs: 'Ponencias en foros multilaterales: diálogo de justicia climática en San José de Costa Rica, exposición sobre bioenergía forestal en Bío-Bío y red ENJUST.',
        authorOrSource: 'ENJUST, Climate Reality, WYCJ (2022-2025)',
        date: '2022-2025',
        tags: ['Bonn', 'Oslo', 'Bogotá', 'Costa Rica', 'Bío-Bío']
      }
    ]
  },

  // 6. LIDERAZGO INSTITUCIONAL, INNOVACIÓN DIGITAL Y COMUNICACIÓN (SHEET 006 -> PAGE 7)
  {
    id: 'liderazgo-innovacion',
    tabKey: '06. LIDERAZGO',
    tabTitleEn: 'Leadership',
    tabTitleEs: 'Liderazgo',
    badgeEn: '006 // SELECTED LEADERSHIP, INNOVATION & ENGAGEMENT',
    badgeEs: '006 // LIDERAZGO INSTITUCIONAL, INNOVACIÓN DIGITAL Y COMUNICACIÓN',
    roleEn: 'Project Director, Open Science Innovator & NGO Co-Founder',
    roleEs: 'Director de Proyectos, Innovador en Ciencia Abierta y Cofundador de ONG',
    titleEn: 'Geospatial Modeling, Open Science & Agroecological Restoration',
    titleEs: 'Modelado Geoespacial, Ciencia Abierta y Regeneración Agroecológica',
    headlineEn: 'Executive Project Management, Digital Open Tools & Ecological Regeneration',
    headlineEs: 'Gestión de Proyectos Ejecutivos, Herramientas Abiertas y Regeneración Ecológica',
    narrativeEn: 'Developed geospatial risk modeling web apps integrating open-access Earth Observation satellite data to evaluate ecosystem stability, wildfire hazards, and flood vulnerability. Lead editor and coordinator of an upcoming international multi-author scientific book on wildfire risks and forestry monocultures. Founder of Geofísica Libre (international open-access science dissemination platform) and founder/director of "Primera Línea Prensa" (+700k followers). Co-founder and former president of "ONG Raíz EcoAcción" (cooperative governance, soil regeneration, and bio-circular systems); former Secretary of Culture at the Engineering Student Center (CEI FCFM, Universidad de Chile).',
    narrativeEs: 'Desarrollo de aplicación web que integra datos satelitales de observación de la Tierra y estaciones abiertas para evaluar en terreno estabilidad ecosistémica, riesgo de incendios e inundaciones. Editor principal y coordinador de libro científico internacional sobre incendios y monocultivos forestales. Fundador de Geofísica Libre y fundador/director de «Primera Línea Prensa» (+700.000 seguidores). Cofundador y expresidente de ONG «Raíz EcoAcción» (cooperativismo, regeneración de suelos y sistemas biocirculares); exsecretario de Cultura del Centro de Estudiantes de Ingeniería (CEI FCFM, U. de Chile).',
    keyOutcomesEn: [
      'Web-based Earth Observation mapping application for real-time wildfire hazard and flood risk modeling (2024).',
      'Lead editor of upcoming multi-author international scientific book on biomass, fire risk, and forest monocultures.',
      'Founder of Geofísica Libre (open science platform) & First Line media network (700k+ audience).',
      'Co-founder & former President of Root EcoAction NGO (soil regeneration, agroecological tree planting campaigns).'
    ],
    keyOutcomesEs: [
      'Aplicación web de modelado geoespacial integrando datos satelitales abiertos para riesgo de incendios e inundaciones (2024).',
      'Editor principal y coordinador de libro científico internacional sobre dinámica de biomasa y monocultivos forestales.',
      'Fundador de Geofísica Libre (divulgación abierta) y Primera Línea Prensa (+700k seguidores).',
      'Cofundador y expresidente de ONG Raíz EcoAcción (jornadas masivas de siembra y regeneración de suelos).'
    ],
    stats: [
      { value: 'Web EO App', labelEn: 'Geospatial Risk Modeling', labelEs: 'Modelado Satelital' },
      { value: '700K+', labelEn: 'Open Science & Digital Reach', labelEs: 'Audiencia Digital' },
      { value: 'Raíz EcoAcción', labelEn: 'Restoration NGO President', labelEs: 'Presidencia ONG' }
    ],
    mediaItems: [
      {
        id: 'liderazgo-sheet-006',
        type: 'image',
        titleEn: 'Selected Leadership, Innovation & Engagement (Sheet 006)',
        titleEs: 'Liderazgo Institucional, Innovación Digital y Comunicación (Lámina 006)',
        subtitleEn: 'Wadden Sea Analysis (2024) • The Alps (2025) • NGO Root EcoAction Tree Planting (2021)',
        subtitleEs: 'Mar de Wadden (2024) • Los Alpes (2025) • Jornadas de Siembra ONG Raíz EcoAcción (2021)',
        src: '/portfolio_pages/page_7.png',
        srcEn: '/portfolio_pages_en/page_7.png',
        captionEn: 'Geospatial risk modeling application, upcoming international scientific book coordination, Geofísica Libre open science platform, and field restoration days with NGO Root EcoAction.',
        captionEs: 'Modelado de riesgos geoespaciales satelitales, coordinación de libro científico internacional, plataforma Geofísica Libre y jornadas de restauración ecológica con ONG Raíz EcoAcción.',
        authorOrSource: 'Geofísica Libre, Raíz EcoAcción & CAU Kiel (2021-2025)',
        date: '2021-2025',
        tags: ['Modelado Satelital', 'Geofísica Libre', 'Raíz EcoAcción', 'Libro Científico']
      }
    ]
  },

  // 7. TITULACIONES ACADÉMICAS, CERTIFICACIONES Y REFERENCIAS (SHEET 007 -> PAGE 8)
  {
    id: 'titulaciones-referencias',
    tabKey: '07. TITULACIONES',
    tabTitleEn: 'Degrees & Endorsements',
    tabTitleEs: 'Titulaciones & Avales',
    badgeEn: '007 // ACADEMIC DEGREES, CERTIFICATIONS & REFERENCES',
    badgeEs: '007 // TITULACIONES ACADÉMICAS, CERTIFICACIONES Y REFERENCIAS',
    roleEn: 'Dual M.Sc. (CAU Kiel & AMU Poznań) | B.Sc. Geophysics (U. de Chile - With Distinction)',
    roleEs: 'Doble M.Sc. (CAU Kiel y AMU Poznań) | Lic. Geofísica (U. de Chile - Con Distinción)',
    titleEn: 'Dual European Master of Science & World-Class Institutional Endorsements',
    titleEs: 'Doble Maestría Europea en Ciencias y Referencias Académicas de Primer Nivel',
    headlineEn: 'Rigorous Academic Foundation Verified by Leading European and International PIs',
    headlineEs: 'Sólida Formación Académica Respaldada por Investigadores Principales en Europa y Latinoamérica',
    narrativeEn: 'Dual Master of Science in Environmental Management (Christian-Albrechts-Universität zu Kiel, Germany) and Environmental Protection (Adam Mickiewicz University in Poznań, Poland). Bachelor of Science in Geophysics (with distinction, FCFM Universidad de Chile). Postgraduate certifications from WSL Swiss Federal Institute (Davos), Leibniz Institute IOER (Dresden), DEAL Doughnut Economics (Denmark), and CR2 Climate Center.',
    narrativeEs: 'Doble Maestría Europea en Manejo Ambiental (CAU Kiel, Alemania) y Protección Ambiental (Universidad Adam Mickiewicz de Poznań, Polonia). Licenciatura en Geofísica con distinción máxima en FCFM, Universidad de Chile. Certificaciones ejecutivas de postgrado en el Instituto Federal Suizo WSL (Davos), Instituto Leibniz IOER (Alemania) y DEAL Copenhague.',
    keyOutcomesEn: [
      'Dual M.Sc. (2023-2026): Environmental Management (CAU Kiel) & Environmental Protection (AMU Poznań).',
      'B.Sc. in Geophysics (2021): FCFM Universidad de Chile (Awarded With Distinction).',
      'Verified academic references: Dr. Sebastian Jordan (CAU Kiel), Janaina Uemura (Global Forest Coalition), Francisca Arauna.'
    ],
    keyOutcomesEs: [
      'Doble M.Sc. (2023-2026): Gestión Ambiental (CAU Kiel, Alemania) y Protección Ambiental (AMU Poznań, Polonia).',
      'Licenciatura en Geofísica (2021): FCFM Universidad de Chile (Aprobado con Distinción).',
      'Referencias verificadas: Dr. Sebastian Jordan (CAU Kiel), Janaina Uemura (Global Forest Coalition) y Francisca Arauna.'
    ],
    stats: [
      { value: 'Dual M.Sc.', labelEn: 'Germany & Poland', labelEs: 'Doble Maestría Europea' },
      { value: 'Con Distinción', labelEn: 'Geophysics U. de Chile', labelEs: 'Geofísica Con Distinción' },
      { value: '3 Referencias', labelEn: 'Academic & PI Endorsements', labelEs: 'Cartas y Referencias PI' }
    ],
    mediaItems: [
      {
        id: 'titulaciones-sheet-007',
        type: 'image',
        titleEn: 'Academic Degrees, Postgraduate Certifications & References (Sheet 007)',
        titleEs: 'Titulaciones Académicas, Certificaciones y Referencias (Lámina 007)',
        subtitleEn: 'Dual M.Sc. • WSL Davos • Leibniz Dresden • DEAL Denmark',
        subtitleEs: 'Doble M.Sc. • WSL Davos • Leibniz Dresden • DEAL Copenhague',
        src: '/portfolio_pages/page_8.png',
        srcEn: '/portfolio_pages_en/page_8.png',
        captionEn: 'Official degrees breakdown: Dual M.Sc. in Germany/Poland, Geophysics at U. de Chile, Davos BlueGreen Biodiversity summit, Hamburg ENJUST conference, and references by Dr. Sebastian Jordan and Global Forest Coalition.',
        captionEs: 'Detalle de grados académicos: Doble M.Sc. en Alemania y Polonia, Geofísica en U. de Chile con distinción, cumbre en Davos, y cartas de referencia del Dr. Sebastian Jordan (Kiel) y Janaina Uemura.',
        authorOrSource: 'CAU Kiel, AMU Poznań, FCFM U. de Chile (2021-2026)',
        date: '2021-2026',
        tags: ['Doble Maestría', 'Geofísica', 'Dr. Jordan Kiel', 'Davos WSL']
      }
    ]
  }
];

// Default export
export const portfolioSections = communicationsSections;
