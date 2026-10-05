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

  // SECTION 1: INTERVENCIÓN & INCIDENCIA EN EL CONGRESO
  {
    id: 'intervencion',
    tabKey: '01. INTERVENCIÓN',
    tabTitleEn: 'Intervention',
    tabTitleEs: 'Intervención',
    badgeEn: 'PARLIAMENTARY INTERVENTION & PUBLIC ADVOCACY',
    badgeEs: 'INTERVENCIÓN PARLAMENTARIA E INCIDENCIA PÚBLICA',
    roleEn: 'Technical Spokesperson & Grassroots Environmental Delegate',
    roleEs: 'Vocero Técnico y Delegado Ambiental Comunitario',
    titleEn: 'Parliamentary Hearings & Public Policy Advocacy',
    titleEs: 'Intervención en el Congreso Nacional e Incidencia Pública',
    headlineEn: 'Elevating Grassroots Ecological Evidence into Legislative Oversight and State Accountability',
    headlineEs: 'Llevando la Evidencia Territorial y Científica a la Fiscalización Legislativa del Estado',
    narrativeEn: 'Representing frontline communities and environmental federations directly within parliamentary commissions, public hearings, and state investigative committees. Translates on-the-ground ecological degradation and community testimonies into rigorous, evidence-backed legislative presentations that challenge industrial monopolies and state negligence.',
    narrativeEs: 'Representación directa de comunidades afectadas y redes socioambientales en comisiones parlamentarias, audiencias públicas e instancias de fiscalización del Estado. Transforma la vivencia de los territorios en alegatos técnicos y políticos fundamentados para enfrentar la negligencia estatal y el modelo extractivo.',
    keyOutcomesEn: [
      'Official testimony before the Emergency, Disaster and Firefighter Commission of Chile’s Chamber of Deputies.',
      'Established structural correlation between large-scale monoculture forestry and catastrophic wildfire spread.',
      'Positioned peasant smallholders and water assemblies at the core of national civil protection reforms.'
    ],
    keyOutcomesEs: [
      'Presentación oficial ante la Comisión de Emergencia, Desastres y Bomberos de la Cámara de Diputadas y Diputados de Chile.',
      'Demostración técnica de la correlación estructural entre el modelo forestal de monocultivo y los megaincendios.',
      'Incorporación de la voz de comités de agua potable rural y pequeños agricultores en el debate legislativo de prevención.'
    ],
    stats: [
      { value: 'Congreso', labelEn: 'Chamber of Deputies', labelEs: 'Cámara de Diputadas/os' },
      { value: 'Nacional', labelEn: 'Broadcast & Record', labelEs: 'Transmisión Oficial' },
      { value: '100%', labelEn: 'Evidence-Based Advocacy', labelEs: 'Evidencia Territorial' }
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
      }
    ]
  },

  // SECTION 2: PERIODISMO CIUDADANO (PRIMERA LÍNEA PRENSA & RED COMUNITARIA MAULE SUR)
  {
    id: 'primera-linea-prensa',
    tabKey: '02. PERIODISMO',
    tabTitleEn: 'Citizen Journalism',
    tabTitleEs: 'Periodismo Ciudadano',
    badgeEn: 'CITIZEN JOURNALISM & MASS REACH (+700K)',
    badgeEs: 'PERIODISMO CIUDADANO Y ALCANCE MASIVO (+700K)',
    roleEn: 'Founder & Executive Director | Broadcast Panellist | Grassroots Network Architect',
    roleEs: 'Fundador y Director Ejecutivo | Panelista de Radio | Arquitecto de Redes Comunitarias',
    titleEn: 'Citizen Journalism: Primera Línea Prensa & Red Maule Sur',
    titleEs: 'Periodismo Ciudadano: Primera Línea Prensa & Red Maule Sur',
    headlineEn: 'Building an Independent +700k Audience Outlet & Training Rural Territorial Correspondents',
    headlineEs: 'Construyendo un Medio Independiente de +700k Seguidores y Capacitando Corresponsales Rurales',
    narrativeEn: 'Founded and scaled "Primera Línea Prensa" into one of Chile’s most influential independent digital news feeds during the historic 2019-2022 civic cycle, reaching over 700,000 organic followers. Transitioned this mass communication engine into regional territorial empowerment in Maule Sur, co-hosting regional radio broadcasts and authoring an investigative journalism syllabus.',
    narrativeEs: 'Fundó y dirigió "Primera Línea Prensa", posicionándola como una de las plataformas de noticias independientes más influyentes de Chile durante el ciclo 2019-2022, superando los 700.000 seguidores orgánicos. Trasladó este músculo comunicacional a la Región del Maule, co-conduciendo el programa radial "El Maule Sur También Existe" y formando corresponsales populares.',
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
    subSections: [
      {
        id: 'plp',
        titleEn: 'Primera Línea Prensa (+700k)',
        titleEs: 'Primera Línea Prensa (+700k)',
        badgeEn: 'Independent Digital Newsroom',
        badgeEs: 'Redacción Digital Independiente',
        mediaItems: [
          {
            id: 'plp-logo-oficial',
            type: 'image',
            titleEn: 'Official Profile & Media Brandmark: Primera Línea Prensa',
            titleEs: 'Perfil Oficial & Identidad: Primera Línea Prensa',
            subtitleEn: 'Independent Digital Media // +700k Verified Followers Network',
            subtitleEs: 'Medio Digital Independiente // Red con +700k Seguidores',
            src: '/plp/plp_logo.jpg',
            captionEn: 'Official identity and profile of Primera Línea Prensa. Scaled into one of Chile’s most followed citizen journalism feeds with +700,000 active community members across Instagram and Facebook. Follow their official social platforms below:',
            captionEs: 'Perfil e identidad oficial de Primera Línea Prensa. Medio de comunicación digital autogestionado que superó los 700.000 seguidores en sus canales oficiales de Instagram y Facebook, cubriendo de primera mano la contingencia social, política y de derechos humanos en Chile.',
            authorOrSource: 'Primera Línea Prensa // Redes Oficiales',
            date: '2019-2022',
            metrics: [
              { labelEn: 'Total Community', labelEs: 'Comunidad Total', value: '+700.000' },
              { labelEn: 'Instagram Network', labelEs: 'Instagram Oficial', value: '+550k' },
              { labelEn: 'Facebook Audience', labelEs: 'Página Facebook', value: '+160k' }
            ],
            tags: ['Perfil Oficial', '+700k Seguidores', 'Instagram', 'Facebook', 'Prensa Independiente'],
            subLinks: [
              {
                titleEn: 'Instagram Oficial (@primeralineaprensa)',
                titleEs: 'Instagram Oficial (@primeralineaprensa)',
                url: 'https://www.instagram.com/primeralineaprensa/',
                src: '/plp/plp_logo.jpg'
              },
              {
                titleEn: 'Facebook Oficial (Primera Línea Prensa)',
                titleEs: 'Facebook Oficial (Primera Línea Prensa)',
                url: 'https://www.facebook.com/PrimeraLineaPrensa',
                src: '/plp/plp_header_consigna.png'
              }
            ]
          },
          {
            id: 'plp-afiche-inflacion',
            type: 'image',
            titleEn: 'Social Media Broadsheet: Economic Crisis & Popular Impact',
            titleEs: 'Afiche de Difusión en Redes: Crisis Económica y Bolsillo del Pueblo',
            subtitleEn: 'Digital News Feed Campaign // Street Reality & Inflation Dissection',
            subtitleEs: 'Gráfica de Redes Sociales // Realidad Popular e Inflación',
            src: '/plp/plp_afiche_inflacion.jpg',
            captionEn: 'Viral social media broadsheet created for digital networks dissecting soaring fuel prices, cost-of-living spikes, and inflation impacts on working-class street markets and families. Demonstrates high-contrast investigative graphic design optimized for viral dissemination.',
            captionEs: 'Afiche informativo de alto impacto diseñado para las redes de Primera Línea Prensa: desglose del encarecimiento de combustibles y la inflación que golpea las ferias libres y el bolsillo de los sectores populares. Gráfica de agitación y periodismo de datos al servicio del pueblo.',
            authorOrSource: 'Primera Línea Prensa // Difusión en Redes Sociales',
            date: '2021-2022',
            tags: ['Difusión en Redes', 'Crisis Económica', 'Periodismo Popular', 'Gráfica Digital']
          },
          {
            id: 'plp-header-consigna',
            type: 'image',
            titleEn: 'Editorial Hero Banner: "Informando desde las Trincheras del Pueblo"',
            titleEs: 'Header Hero Editorial: "Informando desde las Trincheras del Pueblo"',
            subtitleEn: 'Official Editorial Statement & Frontline Newsroom Identity',
            subtitleEs: 'Declaración Editorial e Identidad de la Redacción Popular',
            src: '/plp/plp_header_consigna.png',
            captionEn: 'Official editorial hero banner and founding manifesto of Primera Línea Prensa: "Informando desde las trincheras del pueblo". Encapsulates the media outlet\'s core commitment to uncompromised grassroots news reporting from frontline communities and working-class territories.',
            captionEs: 'Header oficial y lema editorial fundacional de Primera Línea Prensa: "Informando desde las trincheras del pueblo". Sintetiza la línea editorial de reportería directa, independiente y comprometida con las comunidades en resistencia y los territorios.',
            authorOrSource: 'Primera Línea Prensa // Cabecera Oficial',
            date: '2019-2022',
            tags: ['Consigna Editorial', 'Trincheras del Pueblo', 'Identidad', 'primeralineaprensa.cl']
          },
          {
            id: 'plp-articulo-revuelta',
            type: 'press',
            titleEn: 'PLP News Article: Independent Press & Street Literature',
            titleEs: 'Noticia PLP: Prensa Independiente y Literatura Callejera',
            subtitleEn: '"Relatos de la revuelta popular" // Book Release & Editorial Milestone',
            subtitleEs: '“Relatos de la revuelta popular” // Lanzamiento Editorial y Éxito de Ventas',
            url: 'https://www.primeralineaprensa.cl/?p=5542',
            src: '/plp/plp_articulo_revuelta.png',
            captionEn: 'Featured coverage and editorial milestone of Primera Línea Prensa: publishing and distributing the physical book "Relatos de la revuelta popular", an anthology gathering 44 grassroots micro-narratives from the Chilean social uprising, self-distributed across Santiago public plazas and cultural centers.',
            captionEs: 'Cuerpo y titular de la noticia en la plataforma oficial de Primera Línea Prensa: publicación y distribución del libro físico “Relatos de la revuelta popular”, una antología autogestionada de 44 microtextos sobre el estallido social en Chile, difundida directamente en las calles y centros culturales.',
            authorOrSource: 'Primera Línea Prensa // primeralineaprensa.cl',
            date: 'Noviembre 2020',
            tags: ['Prensa Independiente', 'Relatos de la Revuelta', 'Editorial Popular', 'Estallido Social']
          }
        ]
      },
      {
        id: 'red-comunitaria-maule',
        titleEn: 'Red Comunitaria Maule Sur',
        titleEs: 'Red Comunitaria Maule Sur',
        badgeEn: 'Community Media & Broadcast Network',
        badgeEs: 'Red de Comunicación Comunitaria y Radial',
        mediaItems: [
          {
            id: 'maule-radio-broadcast',
            type: 'image',
            titleEn: 'Weekly Panellist on Regional Broadcast: "El Maule Sur También Existe"',
            titleEs: 'Panelista Semanal en Programa Regional: "El Maule Sur También Existe"',
            subtitleEn: 'Live Studio Transmission // Radio Cristalina 96.3 FM & Regional Transmitters',
            subtitleEs: 'Transmisión en Vivo en Estudio // Radio Cristalina 96.3 FM y Emisoras Regionales',
            src: '/maule_sur_radio.jpg',
            captionEn: 'Weekly panellist on regional broadcast "El Maule Sur También Existe".\n\n• Creative & Strategic Execution: Directed editorial agendas, real-time crisis coverage, visual storytelling, and counter-disinformation frameworks against industry greenwashing.\n• Grassroots Network Architecture: Founded a decentralized community media network across the Maule region: trained local assembly members as active correspondents in citizen journalism and ethical reporting.',
            captionEs: 'Panelista semanal en el programa radial regional "El Maule Sur También Existe".\n\n• Ejecución Creativa y Estratégica: Dirección de agendas editoriales, cobertura de crisis en tiempo real, narrativa visual y marcos contra la desinformación y el "greenwashing" corporativo e industrial.\n• Arquitectura de Red Comunitaria: Fundó una red descentralizada de medios comunitarios en toda la región del Maule: capacitó a miembros de asambleas locales y organizaciones de base como corresponsales activos en periodismo ciudadano y reportería ética.',
            authorOrSource: 'Radio Cristalina 96.3 FM & Red Comunitaria Maule Sur',
            date: '2022-Presente',
            detailsEn: [
              'Directed editorial agendas, real-time crisis coverage, visual storytelling, and counter-disinformation frameworks against industry greenwashing.',
              'Founded a decentralized community media network across the Maule region: trained local assembly members as active correspondents in citizen journalism and ethical reporting.'
            ],
            detailsEs: [
              'Dirección de agendas editoriales, cobertura de crisis en tiempo real, narrativa visual y marcos contra la desinformación y el lavado de imagen industrial.',
              'Fundó una red descentralizada de medios comunitarios en la Región del Maule: formó a asambleístas locales como corresponsales activos en periodismo ciudadano.'
            ],
            tags: ['El Maule Sur También Existe', 'Radio Comunitaria', 'Periodismo Territorial', 'Corresponsales Populares'],
            subLinks: [
              {
                titleEn: 'Web Oficial de la Red Comunitaria (En Desarrollo)',
                titleEs: 'Web Oficial de la Red Comunitaria (En Desarrollo)',
                url: 'https://danisantanderurrutia-coder.github.io/MauleRed/',
                src: '/maulered_web.png'
              }
            ]
          },
          {
            id: 'maule-red-platform',
            type: 'image',
            titleEn: 'Digital Community Platform: Red Comunitaria Maule Sur (In Development)',
            titleEs: 'Plataforma Digital Territorial: Red Comunitaria Maule Sur (En Desarrollo)',
            subtitleEn: 'Citizen Information Hub // Live Regional Radio & Rural Emergency Dispatcher',
            subtitleEs: 'Centro de Información Ciudadana // Radio Comunitaria en Vivo y Avisador de Emergencias',
            src: '/maulered_web.png',
            captionEn: 'Official digital platform and citizen portal for Red de Noticias y Comunicación Popular del Maule Sur (currently in development). An open community infrastructure providing live regional radio streaming, rural APR potable water and blackout emergency alerts, territorial reporting, and citizen utility journalism.',
            captionEs: 'Plataforma web oficial y portal ciudadano de la Red de Noticias y Comunicación Popular del Maule Sur (actualmente en desarrollo activo). Infraestructura comunitaria abierta que integra transmisión de radio comunitaria en vivo, avisador de emergencias de cortes de agua potable rural (APR) y electricidad, cartografía comunitaria y periodismo de utilidad cotidiana.',
            authorOrSource: 'Red Maule Sur // Plataforma Web (En Desarrollo)',
            date: '2024-En Desarrollo',
            url: 'https://danisantanderurrutia-coder.github.io/MauleRed/',
            tags: ['En Desarrollo', 'MauleRed', 'Radio en Vivo', 'Avisador de Emergencias APR', 'Periodismo Comunitario'],
            subLinks: [
              {
                titleEn: 'Visitar Plataforma Web en Desarrollo',
                titleEs: 'Visitar Plataforma Web en Desarrollo',
                url: 'https://danisantanderurrutia-coder.github.io/MauleRed/',
                src: '/maulered_web.png'
              },
              {
                titleEn: 'Identidad Gráfica y Logotipo Oficial',
                titleEs: 'Identidad Gráfica y Logotipo Oficial',
                url: 'https://danisantanderurrutia-coder.github.io/MauleRed/',
                src: '/maulered_logo.png'
              }
            ]
          }
        ]
      }
    ],
    mediaItems: [
      {
        id: 'plp-logo-oficial',
        type: 'image',
        titleEn: 'Official Profile & Media Brandmark: Primera Línea Prensa',
        titleEs: 'Perfil Oficial & Identidad: Primera Línea Prensa',
        subtitleEn: 'Independent Digital Media // +700k Verified Followers Network',
        subtitleEs: 'Medio Digital Independiente // Red con +700k Seguidores',
        src: '/plp/plp_logo.jpg',
        captionEn: 'Official identity and profile of Primera Línea Prensa. Scaled into one of Chile’s most followed citizen journalism feeds with +700,000 active community members across Instagram and Facebook. Follow their official social platforms below:',
        captionEs: 'Perfil e identidad oficial de Primera Línea Prensa. Medio de comunicación digital autogestionado que superó los 700.000 seguidores en sus canales oficiales de Instagram y Facebook, cubriendo de primera mano la contingencia social, política y de derechos humanos en Chile.',
        authorOrSource: 'Primera Línea Prensa // Redes Oficiales',
        date: '2019-2022',
        metrics: [
          { labelEn: 'Total Community', labelEs: 'Comunidad Total', value: '+700.000' },
          { labelEn: 'Instagram Network', labelEs: 'Instagram Oficial', value: '+550k' },
          { labelEn: 'Facebook Audience', labelEs: 'Página Facebook', value: '+160k' }
        ],
        tags: ['Perfil Oficial', '+700k Seguidores', 'Instagram', 'Facebook', 'Prensa Independiente'],
        subLinks: [
          {
            titleEn: 'Instagram Oficial (@primeralineaprensa)',
            titleEs: 'Instagram Oficial (@primeralineaprensa)',
            url: 'https://www.instagram.com/primeralineaprensa/',
            src: '/plp/plp_logo.jpg'
          },
          {
            titleEn: 'Facebook Oficial (Primera Línea Prensa)',
            titleEs: 'Facebook Oficial (Primera Línea Prensa)',
            url: 'https://www.facebook.com/PrimeraLineaPrensa',
            src: '/plp/plp_header_consigna.png'
          }
        ]
      },
      {
        id: 'plp-afiche-inflacion',
        type: 'image',
        titleEn: 'Social Media Broadsheet: Economic Crisis & Popular Impact',
        titleEs: 'Afiche de Difusión en Redes: Crisis Económica y Bolsillo del Pueblo',
        subtitleEn: 'Digital News Feed Campaign // Street Reality & Inflation Dissection',
        subtitleEs: 'Gráfica de Redes Sociales // Realidad Popular e Inflación',
        src: '/plp/plp_afiche_inflacion.jpg',
        captionEn: 'Viral social media broadsheet created for digital networks dissecting soaring fuel prices, cost-of-living spikes, and inflation impacts on working-class street markets and families. Demonstrates high-contrast investigative graphic design optimized for viral dissemination.',
        captionEs: 'Afiche informativo de alto impacto diseñado para las redes de Primera Línea Prensa: desglose del encarecimiento de combustibles y la inflación que golpea las ferias libres y el bolsillo de los sectores populares. Gráfica de agitación y periodismo de datos al servicio del pueblo.',
        authorOrSource: 'Primera Línea Prensa // Difusión en Redes Sociales',
        date: '2021-2022',
        tags: ['Difusión en Redes', 'Crisis Económica', 'Periodismo Popular', 'Gráfica Digital']
      },
      {
        id: 'plp-header-consigna',
        type: 'image',
        titleEn: 'Editorial Hero Banner: "Informando desde las Trincheras del Pueblo"',
        titleEs: 'Header Hero Editorial: "Informando desde las Trincheras del Pueblo"',
        subtitleEn: 'Official Editorial Statement & Frontline Newsroom Identity',
        subtitleEs: 'Declaración Editorial e Identidad de la Redacción Popular',
        src: '/plp/plp_header_consigna.png',
        captionEn: 'Official editorial hero banner and founding manifesto of Primera Línea Prensa: "Informando desde las trincheras del pueblo". Encapsulates the media outlet\'s core commitment to uncompromised grassroots news reporting from frontline communities and working-class territories.',
        captionEs: 'Header oficial y lema editorial fundacional de Primera Línea Prensa: "Informando desde las trincheras del pueblo". Sintetiza la línea editorial de reportería directa, independiente y comprometida con las comunidades en resistencia y los territorios.',
        authorOrSource: 'Primera Línea Prensa // Cabecera Oficial',
        date: '2019-2022',
        tags: ['Consigna Editorial', 'Trincheras del Pueblo', 'Identidad', 'primeralineaprensa.cl']
      },
      {
        id: 'plp-articulo-revuelta',
        type: 'press',
        titleEn: 'PLP News Article: Independent Press & Street Literature',
        titleEs: 'Noticia PLP: Prensa Independiente y Literatura Callejera',
        subtitleEn: '"Relatos de la revuelta popular" // Book Release & Editorial Milestone',
        subtitleEs: '“Relatos de la revuelta popular” // Lanzamiento Editorial y Éxito de Ventas',
        url: 'https://www.primeralineaprensa.cl/?p=5542',
        src: '/plp/plp_articulo_revuelta.png',
        captionEn: 'Featured coverage and editorial milestone of Primera Línea Prensa: publishing and distributing the physical book "Relatos de la revuelta popular", an anthology gathering 44 grassroots micro-narratives from the Chilean social uprising, self-distributed across Santiago public plazas and cultural centers.',
        captionEs: 'Cuerpo y titular de la noticia en la plataforma oficial de Primera Línea Prensa: publicación y distribución del libro físico “Relatos de la revuelta popular”, una antología autogestionada de 44 microtextos sobre el estallido social en Chile, difundida directamente en las calles y centros culturales.',
        authorOrSource: 'Primera Línea Prensa // primeralineaprensa.cl',
        date: 'Noviembre 2020',
        tags: ['Prensa Independiente', 'Relatos de la Revuelta', 'Editorial Popular', 'Estallido Social']
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
      'Produced digital training academies and fact-checking webinars debunking rural constitutional misinformation.',
      'Placed 60+ op-eds, television interviews, and radio specials centering rural water sovereignty and agroecology.',
      'Organized the historic "Cierre de Campaña Apruebo Rural" assembling rural women, elders, and youth delegates.'
    ],
    keyOutcomesEs: [
      'Gira nacional por 14 regiones del centro y sur de Chile realizando más de 80 asambleas y encuentros comunales.',
      'Creación de escuelas de formación digital y webinars de verificación de datos (fact-checking) para informar a comunidades rurales.',
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
        id: 'apruebo-reel-apertura',
        type: 'instagram',
        instagramId: 'Ch3dEHRDp46',
        src: '/instagram_covers/Ch3dEHRDp46.jpg',
        url: 'https://www.instagram.com/reel/Ch3dEHRDp46/',
        titleEn: 'National Campaign Video: Voice of Frontline Rural Communities',
        titleEs: 'Video Central de Campaña: La Voz de las Comunidades Rurales',
        subtitleEn: 'Official Campaign Broadcast // Peasant Water & Soil Defense',
        subtitleEs: 'Transmisión Oficial de Campaña // Defensa del Agua Campesina y la Tierra',
        captionEn: 'Viral campaign reel rallying rural communities, peasant farmers, and water defenders across Chile ahead of the historic constitutional vote. Highlighting agrarian sovereignty and intergenerational dignity.',
        captionEs: 'Video oficial de convocatoria masiva a comunidades campesinas, pequeñas productoras y comités de agua potable rural de todo Chile. Un mensaje potente sobre soberanía territorial, dignidad campesina y futuro ecológico.',
        authorOrSource: 'Apruebo Rural // Campaña Audiovisual',
        date: 'Agosto 2022',
        tags: ['Campaña Nacional', 'Video Central', 'Comunidades Rurales', 'Soberanía del Agua']
      },
      {
        id: 'apruebo-escuela-webinars',
        type: 'instagram',
        instagramId: 'ChlR78pstEK',
        src: '/instagram_covers/ChlR78pstEK.jpg',
        url: 'https://www.instagram.com/p/ChlR78pstEK/',
        titleEn: 'Online Training School: Fact-Checking & Civic Deliberation',
        titleEs: 'Escuela de Formación Online: Fact-Checking & Educación Cívica',
        subtitleEn: 'Digital Webinars // Debunking Misinformation on Peasant Rights',
        subtitleEs: 'Ciclo de Conversatorios Digitales // Desmintiendo Fake News sobre el Agro',
        captionEn: 'Pioneered popular online training webinars and rigorous fact-checking workshops designed to counter widespread fake news in rural territories. Addressed key agrarian concerns: hereditary land security, water distribution rights, and peasant family protection through clear pedagogical evidence.',
        captionEs: 'Diseño y moderación de escuelas de formación ciudadana online y talleres de verificación de datos (fact-checking) para neutralizar campañas de desinformación en sectores rurales. Se abordaron temas críticos como propiedad de la tierra, comités de APR y derechos campesinos con pedagogía clara y directa.',
        authorOrSource: 'Escuela Popular Apruebo Rural',
        date: '2022',
        tags: ['Escuela Online', 'Fact-Checking', 'Educación Popular', 'Webinars'],
        subLinks: [
          {
            titleEn: 'Rural Water & APR Rights',
            titleEs: 'Agua Rural & Comités de APR',
            url: 'https://www.instagram.com/p/ChDJ_fwO9Bl/',
            src: '/instagram_covers/ChDJ_fwO9Bl.jpg'
          },
          {
            titleEn: 'Peasant Land & Heritage Security',
            titleEs: 'Seguridad de Tierras y Herencia',
            url: 'https://www.instagram.com/p/ChiMgLmv-AE/',
            src: '/instagram_covers/ChiMgLmv-AE.jpg'
          },
          {
            titleEn: 'Popular Civic Assembly Broadcast',
            titleEs: 'Encuentro Ciudadano Masivo',
            url: 'https://www.instagram.com/p/ChlR78pstEK/',
            src: '/instagram_covers/ChlR78pstEK.jpg'
          },
          {
            titleEn: 'Countering Misinformation Callout',
            titleEs: 'Enfrentando la Desinformación',
            url: 'https://www.instagram.com/p/CgzOl5AOBe5/',
            src: '/instagram_covers/CgzOl5AOBe5.jpg'
          }
        ]
      },
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

  // SECTION 4: ARTE Y CULTURA (PROPAGANDA, RAP BEAUCHEF, RAP LIBRE)
  {
    id: 'arte-y-cultura',
    tabKey: '04. ARTE Y CULTURA',
    tabTitleEn: 'Art & Culture',
    tabTitleEs: 'Arte y Cultura',
    badgeEn: 'ARTIVISM, YOUTH CULTURE & COMMUNITY SPACES',
    badgeEs: 'ARTIVISMO, CULTURA JUVENIL & ESPACIOS COMUNITARIOS',
    roleEn: 'Artistic Director, Tactical Artivist & Cultural Producer',
    roleEs: 'Director Artístico, Artivista Táctico y Productor Cultural',
    titleEn: 'Arte y Cultura: Propaganda, Rap Beauchef & Rap Libre',
    titleEs: 'Arte y Cultura: Propaganda, Rap Beauchef & Rap Libre',
    headlineEn: 'Deploying Tactical Visual Artivism, Street Murals and Youth Spoken-Word Counter-Culture',
    headlineEs: 'Desplegando Artivismo Visual Táctico, Muralismo Monumental y la Contracultura Lírica Juvenil',
    narrativeEn: 'Directed and coordinated frontline cultural architectures across Santiago and regional hubs: from monumental street murals and iconic protest silkscreens with Brigada Paulina Aguirre to mass university amphitheaters (Rap Beauchef), international online streaming leagues, and urban public square cyphers (Rap Libre). Uniting artistic agitation, youth free expression, and social-ecological justice.',
    narrativeEs: 'Dirección y articulación de dispositivos culturales de base: desde la afichería política callejera, serigrafías y megamurales monumentales con la Brigada de Propaganda Paulina Aguirre, hasta la contracultura del freestyle juvenil en anfiteatros universitarios (Rap Beauchef), ligas internacionales en streaming y reapropiación de plazas y parques urbanos (Rap Libre). Una síntesis de agitación visual, libre expresión y memoria popular.',
    keyOutcomesEn: [
      'Painted 35+ monumental street and university murals, producing iconic protest graphics and political silk-screens.',
      'Produced 40+ high-intensity live tournaments and pandemic streaming leagues with 50,000+ views.',
      'Constructed a 12,000+ member Discord community for international cyphers and youth free expression.',
      'Integrated socio-environmental defense, territorial memory, and human rights into visual and lyric counter-culture.'
    ],
    keyOutcomesEs: [
      'Pintura de más de 35 murales monumentales en ejes viales y universidades, con afiches icónicos de serigrafía y agitación.',
      'Producción de más de 40 torneos en vivo y ligas de streaming pandémicas con más de 50.000 visualizaciones acumuladas.',
      'Construcción de una comunidad de más de 12.000 miembros en Discord para cyphers internacionales y libre expresión juvenil.',
      'Integración sistemática de la defensa socioambiental, memoria territorial y derechos humanos en la contracultura visual y lírica.'
    ],
    stats: [
      { value: '35+', labelEn: 'Monumental Murals Executed', labelEs: 'Murales Monumentales Pintados' },
      { value: '40+', labelEn: 'Tournaments & Arenas', labelEs: 'Torneos y Arenas Producidos' },
      { value: '12K+', labelEn: 'Discord Community Members', labelEs: 'Miembros en Discord' },
      { value: '100%', labelEn: 'Grassroots Self-Funded', labelEs: 'Autogestión de Base' }
    ],
    subSections: [
      {
        id: 'propaganda',
        titleEn: 'Propaganda',
        titleEs: 'Propaganda',
        badgeEn: 'Tactical Artivism & Street Propaganda',
        badgeEs: 'Artivismo Táctico y Propaganda Callejera',
        mediaItems: [
          {
            id: 'brigada-protesta-fotografia',
            type: 'image',
            titleEn: 'Protest Photography: Popular Street Mobilization & Banners',
            titleEs: 'Fotografía de Protesta: Movilización Popular en las Calles',
            subtitleEn: 'Frontline Street Demonstration // Leftwing Youth & People\'s Resistance',
            subtitleEs: 'Marcha y Resistencia Popular // Juventud y Banderas en la Alameda',
            src: '/brigada/brigada_protesta.png',
            captionEn: 'Direct frontline photography capturing the intense energy, crimson-and-black banners, and massive street mobilization in downtown Santiago during national days of protest for social and structural change.',
            captionEs: 'Fotografía directa de movilización callejera: banderas rojinegras y multitudinaria columna juvenil marchando por el centro de Santiago durante jornadas de protesta y reivindicación popular.',
            authorOrSource: 'Brigada de Propaganda Paulina Aguirre // Registro de Campo',
            date: '2019-2020',
            tags: ['Fotografía de Protesta', 'Movilización Callejera', 'Juventud', 'Alameda']
          },
          {
            id: 'brigada-afiche-evadir',
            type: 'image',
            titleEn: 'Political Poster: "Evadir, No Pagar: Otra Forma de Luchar"',
            titleEs: 'Afiche Político: "Evadir, No Pagar: Otra Forma de Luchar"',
            subtitleEn: 'Iconic Silkscreen & Digital Agitation Poster // Fare Evasion Movement',
            subtitleEs: 'Afiche Ícono de Agitación Callejera // Movimiento de Evasión Masiva',
            src: '/brigada/brigada_afiche_evadir.png',
            captionEn: 'Historical agitation poster created by Brigada Paulina Aguirre during the inception of the October 2019 Chilean uprising: "Evadir, No Pagar: Otra Forma de Luchar", illustrating civil disobedience over metro turnstiles that triggered the nationwide constitutional cycle.',
            captionEs: 'Emblemático afiche de agitación política y serigrafía callejera creado por la Brigada Paulina Aguirre en los albores del estallido social de octubre de 2019: "Evadir, No Pagar: Otra Forma de Luchar", inmortalizando el salto de torniquetes que desató el ciclo de revuelta nacional.',
            authorOrSource: 'Brigada Paulina Aguirre // Propaganda Callejera',
            date: 'Octubre 2019',
            tags: ['Afiche Político', 'Evadir No Pagar', 'Estallido Social', 'Serigrafía Callejera']
          },
          {
            id: 'brigada-graficas-digitales',
            type: 'image',
            titleEn: 'Digital Graphics: Territorial Agitation & Political Propaganda',
            titleEs: 'Gráficas Digitales: Agitación Territorial y Propaganda Política',
            subtitleEn: 'Digital Design // Propaganda Visuals & Social Media Campaign',
            subtitleEs: 'Diseño Digital // Gráficas de Propaganda y Difusión en Redes',
            src: '/brigada/brigada_grafica_digital.jpg',
            url: 'https://www.facebook.com/photo.php?fbid=418738228474147&set=pb.100067890108840.-2207520000&type=3',
            captionEn: 'High-contrast graphic designed for cross-platform distribution across social media channels, combining radical typography, socialist iconography, and direct calls to territorial mobilization.',
            captionEs: 'Gráfica digital de alto contraste concebida para redes sociales y plataformas de contra-información: composición visual que articula tipografía de combate, memoria revolucionaria y convocatoria a la huelga popular.',
            authorOrSource: 'Brigada de Propaganda Paulina Aguirre // Archivo Digital',
            date: '2019-2021',
            tags: ['Gráficas Digitales', 'Propaganda', 'Redes Sociales', 'Agitación Visual']
          },
          {
            id: 'brigada-mural-no-afp',
            type: 'image',
            titleEn: 'Community Muralism: "No + AFP" & Popular Working-Class Unity',
            titleEs: 'Muralismo Comunitario: "No + AFP" y Rostros del Pueblo Trabajador',
            subtitleEn: 'Large-Scale Facade Mural // Social Security & Class Solidarity',
            subtitleEs: 'Mural Monumental en Fachada Barrial // Unidad y Seguridad Social',
            src: '/brigada/brigada_mural_no_afp.png',
            captionEn: 'Monumental facade mural painted in a popular working-class neighborhood portraying the diverse faces of working people (construction workers, students, indigenous peoples, elders) united under the banner "No + AFP: El Paro Va".',
            captionEs: 'Mural monumental de fachada barrial pintado por la brigada que retrata los rostros y miradas del pueblo trabajador (obreros, estudiantes, pueblos originarios, pobladores) bajo la consigna central "No + AFP: El Paro Va", resignificando el espacio público.',
            authorOrSource: 'Brigada de Propaganda Paulina Aguirre // Producción Mural',
            date: '2019-2020',
            tags: ['Muralismo', 'No Más AFP', 'Espacio Público', 'Población Barrial']
          }
        ]
      },
      {
        id: 'rap-beauchef',
        titleEn: 'Rap Beauchef',
        titleEs: 'Rap Beauchef',
        badgeEn: 'University Arena & Digital League',
        badgeEs: 'Arena Universitaria & Liga Digital',
        mediaItems: [
          {
            id: 'rap-beauchef-batallas-vivo',
            type: 'instagram',
            instagramId: 'B9ljgLMngum',
            src: '/instagram_covers/B9ljgLMngum.jpg',
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
                titleEn: 'Stage & Emcees (Gallery I)',
                titleEs: 'Escenario & Emcees (Galería I)',
                url: 'https://www.instagram.com/p/B3ZZ8sGgaJX/',
                src: '/instagram_covers/B3ZZ8sGgaJX.jpg'
              },
              {
                titleEn: 'Crowd & Cyphers (Gallery II)',
                titleEs: 'Público & Cyphers (Galería II)',
                url: 'https://www.instagram.com/p/B3ZZb3BgR1R/?img_index=1',
                src: '/instagram_covers/B3ZZb3BgR1R.jpg'
              },
              {
                titleEn: 'Freestyle Rounds (Gallery III)',
                titleEs: 'Rondas de Freestyle (Galería III)',
                url: 'https://www.instagram.com/p/B3Yig7mg_02/?img_index=1',
                src: '/instagram_covers/B3Yig7mg_02.jpg'
              },
              {
                titleEn: 'Judges & Flow (Gallery IV)',
                titleEs: 'Jueces & Flow (Galería IV)',
                url: 'https://www.instagram.com/p/B3YgyJxgiBS/?img_index=1',
                src: '/instagram_covers/B3YgyJxgiBS.jpg'
              },
              {
                titleEn: 'Amphitheater Arena (Gallery V)',
                titleEs: 'Anfiteatro Lleno (Galería V)',
                url: 'https://www.instagram.com/p/B3VfufbAH6A/?img_index=1',
                src: '/instagram_covers/B3VfufbAH6A.jpg'
              },
              {
                titleEn: 'Mic & Energy (Gallery VI)',
                titleEs: 'Micrófono & Energía (Galería VI)',
                url: 'https://www.instagram.com/p/B3VR8cqABYU/?img_index=1',
                src: '/instagram_covers/B3VR8cqABYU.jpg'
              },
              {
                titleEn: 'Championship Stage (Gallery VII)',
                titleEs: 'Etapa Final (Galería VII)',
                url: 'https://www.instagram.com/p/B3VO-R7Akr3/?img_index=1',
                src: '/instagram_covers/B3VO-R7Akr3.jpg'
              },
              {
                titleEn: 'Champions & Ceremony (Gallery VIII)',
                titleEs: 'Premiación & Cierre (Galería VIII)',
                url: 'https://www.instagram.com/p/B3VMAN1gh9R/?img_index=5',
                src: '/instagram_covers/B3VMAN1gh9R.jpg'
              }
            ]
          },
          {
            id: 'rap-beauchef-shows-duenas',
            type: 'instagram',
            instagramId: 'B3SOa_YgJ5j',
            src: '/instagram_covers/B3SOa_YgJ5j.jpg',
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
                titleEn: 'Official Poster Launch',
                titleEs: 'Afiche Oficial de Lanzamiento',
                url: 'https://www.instagram.com/p/B1k2tdFgYoK/',
                src: '/instagram_covers/B1k2tdFgYoK.jpg'
              },
              {
                titleEn: 'Tournament Photo Gallery',
                titleEs: 'Galería Fotográfica del Torneo',
                url: 'https://www.instagram.com/p/B2O_yRGgRmY/?img_index=4',
                src: '/instagram_covers/B2O_yRGgRmY.jpg'
              }
            ]
          },
          {
            id: 'rap-beauchef-online-discord',
            type: 'instagram',
            instagramId: 'CCPVa5elGhn',
            src: '/instagram_covers/CCPVa5elGhn.jpg',
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
                titleEn: 'Online Concurrence & Voice Rooms',
                titleEs: 'Concurrencia en Salas de Discord',
                url: 'https://www.instagram.com/p/CBCA5DGFBwO/?img_index=1',
                src: '/instagram_covers/CBCA5DGFBwO.jpg'
              },
              {
                titleEn: 'Official Tournament Fixture',
                titleEs: 'Afiche y Fixture del Torneo',
                url: 'https://www.instagram.com/p/CBV5veZFbFw/',
                src: '/instagram_covers/CBV5veZFbFw.jpg'
              },
              {
                titleEn: 'Season Grand Final',
                titleEs: 'Gran Final de la Temporada',
                url: 'https://www.instagram.com/p/CEsyoUSln0c/',
                src: '/instagram_covers/CEsyoUSln0c.jpg'
              },
              {
                titleEn: 'International Jury & Community',
                titleEs: 'Jurado y Red Internacional',
                url: 'https://www.instagram.com/p/CDMWyFale-C/',
                src: '/instagram_covers/CDMWyFale-C.jpg'
              },
              {
                titleEn: 'International Match Poster',
                titleEs: 'Afiche Encuentro Internacional',
                url: 'https://www.instagram.com/p/CDwWpGOF6N5/',
                src: '/instagram_covers/CDwWpGOF6N5.jpg'
              },
              {
                titleEn: 'Announcement & Guidelines',
                titleEs: 'Convocatoria y Bases Online',
                url: 'https://www.instagram.com/p/CCKc5F1F-bq/',
                src: '/instagram_covers/CCKc5F1F-bq.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 'rap-libre',
        titleEn: 'Rap Libre',
        titleEs: 'Rap Libre',
        badgeEn: 'Urban Parks & Public Squares',
        badgeEs: 'Parques Urbanos & Plazas Públicas',
        mediaItems: [
          {
            id: 'rap-libre-urbano',
            type: 'instagram',
            instagramId: 'B42bAbtnntp',
            src: '/instagram_covers/B42bAbtnntp.jpg',
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
                titleEn: 'Official Event Launch Poster',
                titleEs: 'Afiche Oficial de Convocatoria',
                url: 'https://www.instagram.com/p/B42bAbtnntp/',
                src: '/instagram_covers/B42bAbtnntp.jpg'
              },
              {
                titleEn: 'Live Event Photo Gallery & Massive Crowd',
                titleEs: 'Galería Fotográfica & Multitud Urbana',
                url: 'https://www.instagram.com/p/B46IqYzHJkB/?img_index=1',
                src: '/instagram_covers/B46IqYzHJkB.jpg'
              }
            ]
          }
        ]
      }
    ],
    mediaItems: [
      {
        id: 'brigada-protesta-fotografia',
        type: 'image',
        titleEn: 'Protest Photography: Popular Street Mobilization & Banners',
        titleEs: 'Fotografía de Protesta: Movilización Popular en las Calles',
        subtitleEn: 'Frontline Street Demonstration // Leftwing Youth & People\'s Resistance',
        subtitleEs: 'Marcha y Resistencia Popular // Juventud y Banderas en la Alameda',
        src: '/brigada/brigada_protesta.png',
        captionEn: 'Direct frontline photography capturing the intense energy, crimson-and-black banners, and massive street mobilization in downtown Santiago during national days of protest for social and structural change.',
        captionEs: 'Fotografía directa de movilización callejera: banderas rojinegras y multitudinaria columna juvenil marchando por el centro de Santiago durante jornadas de protesta y reivindicación popular.',
        authorOrSource: 'Brigada de Propaganda Paulina Aguirre // Registro de Campo',
        date: '2019-2020',
        tags: ['Fotografía de Protesta', 'Movilización Callejera', 'Juventud', 'Alameda']
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
