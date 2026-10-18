// Detailed high-fidelity geographic vector coastlines and tactical landmass coordinates
// for the 3D Canvas Earth Globe HUD.

export type LatLng = [number, number];

// 1. SOUTH AMERICA COASTLINE LOOP
export const SOUTH_AMERICA_COAST: LatLng[] = [
  [12.5, -71.8],   // Guajira, Colombia
  [10.5, -66.9],   // Caracas, Venezuela
  [9.0, -61.0],    // Orinoco Delta
  [6.8, -58.1],    // Georgetown, Guyana
  [4.9, -52.3],    // Cayenne, Fr. Guiana
  [0.0, -50.0],    // Amazon mouth
  [-2.5, -44.3],   // São Luís, Brazil
  [-5.3, -35.2],   // Natal / Easternmost tip
  [-8.0, -34.8],   // Recife
  [-13.0, -38.5],  // Salvador
  [-20.3, -40.3],  // Vitória
  [-22.9, -43.2],  // Rio de Janeiro
  [-25.5, -48.5],  // Paranaguá
  [-30.0, -50.1],  // Tramandaí
  [-34.9, -54.9],  // Punta del Este, Uruguay
  [-34.6, -58.3],  // Buenos Aires
  [-38.0, -57.5],  // Mar del Plata
  [-41.0, -62.8],  // Golfo San Matías
  [-45.8, -67.4],  // Comodoro Rivadavia
  [-49.3, -67.7],  // Puerto San Julián
  [-52.4, -68.4],  // Strait of Magellan Atlantic
  [-54.8, -68.3],  // Ushuaia / Beagle Channel
  [-55.9, -67.2],  // Cape Horn
  [-53.5, -72.5],  // Chilean Southern Fjords
  [-47.0, -74.5],  // Golfo de Penas
  [-43.5, -73.5],  // Chiloé / Palena
  [-41.5, -73.0],  // Puerto Montt
  [-39.8, -73.2],  // Valdivia
  [-36.8, -73.1],  // Concepción
  [-35.4, -72.5],  // Constitución / Maule Coast
  [-33.0, -71.6],  // Valparaíso / Central Chile
  [-29.9, -71.3],  // La Serena / Coquimbo
  [-27.1, -70.9],  // Caldera / Atacama
  [-23.6, -70.4],  // Antofagasta
  [-20.2, -70.1],  // Iquique
  [-18.5, -70.3],  // Arica
  [-16.4, -73.0],  // Southern Peru
  [-12.1, -77.0],  // Lima / Callao
  [-9.0, -78.6],   // Chimbote
  [-5.0, -81.1],   // Punta Pariñas (Westernmost tip)
  [-2.2, -80.9],   // Guayaquil, Ecuador
  [1.0, -79.5],    // Esmeraldas
  [3.9, -77.0],    // Buenaventura, Colombia
  [7.0, -77.5],    // Darién Pacific
  [8.9, -79.5],    // Panama City
  [9.3, -79.9],    // Colón Caribbean
  [8.5, -77.3],    // Gulf of Urabá
  [11.0, -74.8],   // Barranquilla
  [12.5, -71.8]    // Close loop
];

// 2. NORTH & CENTRAL AMERICA COASTLINE LOOP
export const NORTH_AMERICA_COAST: LatLng[] = [
  [8.5, -77.3],    // Panama / Colombia border
  [9.9, -84.1],    // San José / Costa Rica
  [11.0, -85.8],   // Nicaragua Pacific
  [13.5, -89.8],   // El Salvador
  [14.6, -92.2],   // Guatemala
  [16.0, -95.2],   // Salina Cruz, Mexico
  [18.5, -103.7],  // Manzanillo
  [20.7, -105.3],  // Puerto Vallarta
  [22.9, -109.9],  // Cabo San Lucas
  [27.0, -114.0],  // Baja California
  [32.5, -117.1],  // San Diego / Tijuana
  [34.0, -118.5],  // Los Angeles
  [37.8, -122.5],  // San Francisco Bay
  [43.3, -124.4],  // Oregon Coast
  [47.6, -124.4],  // Washington Olympic Coast
  [49.3, -123.2],  // Vancouver
  [54.3, -130.3],  // Prince Rupert, BC
  [57.0, -135.3],  // Sitka, Alaska
  [59.5, -139.7],  // Yakutat
  [60.5, -145.7],  // Cordova
  [59.6, -151.5],  // Kenai Peninsula
  [55.0, -162.0],  // Alaska Peninsula
  [54.0, -166.5],  // Dutch Harbor
  [59.0, -158.5],  // Bristol Bay
  [64.5, -165.4],  // Nome / Bering Strait
  [69.0, -164.0],  // Point Hope
  [71.3, -156.7],  // Point Barrow / Northernmost Alaska
  [70.0, -143.6],  // Arctic National Wildlife Refuge
  [69.4, -133.0],  // Mackenzie Delta, Canada
  [70.0, -117.0],  // Victoria Island
  [67.0, -87.0],   // Boothia Peninsula
  [62.5, -78.0],   // Hudson Bay West
  [55.0, -82.0],   // James Bay
  [58.0, -70.0],   // Ungava Bay
  [60.0, -64.0],   // Cape Chidley, Labrador
  [53.5, -56.0],   // Southern Labrador
  [47.5, -53.0],   // Newfoundland
  [45.0, -61.5],   // Nova Scotia
  [43.6, -70.2],   // Portland, Maine
  [41.5, -71.3],   // Rhode Island
  [40.6, -74.0],   // New York Harbor
  [36.8, -76.0],   // Chesapeake Bay entrance
  [32.8, -79.9],   // Charleston, SC
  [28.5, -80.5],   // Cape Canaveral, FL
  [25.0, -80.5],   // Florida Keys
  [27.8, -82.6],   // Tampa Bay
  [30.2, -87.0],   // Pensacola
  [29.3, -89.5],   // Mississippi Delta
  [29.7, -93.8],   // Texas / Louisiana border
  [27.8, -97.4],   // Corpus Christi
  [25.9, -97.1],   // Brownsville / Matamoros
  [22.3, -97.8],   // Tampico, Mexico
  [19.2, -96.1],   // Veracruz
  [18.5, -92.5],   // Tabasco
  [21.2, -86.8],   // Cancún / Yucatan
  [18.5, -88.3],   // Chetumal / Belize
  [15.8, -86.0],   // Honduras Caribbean
  [12.0, -83.7],   // Bluefields, Nicaragua
  [9.9, -83.0],    // Puerto Limón, Costa Rica
  [9.3, -79.9],    // Colón, Panama
  [8.5, -77.3]     // Close loop
];

// 3. EUROPE & SCANDINAVIA COASTLINE LOOP
export const EUROPE_COAST: LatLng[] = [
  [36.0, -5.3],    // Gibraltar
  [37.0, -8.9],    // Sagres / Cabo San Vicente, Portugal
  [38.7, -9.4],    // Lisbon / Cabo da Roca
  [42.2, -8.7],    // Vigo, Galicia
  [43.4, -8.4],    // A Coruña
  [43.5, -5.6],    // Gijón, Asturias
  [43.4, -3.8],    // Santander, Cantabria
  [43.3, -1.8],    // San Sebastián / Basque Country
  [44.8, -1.2],    // Arcachon, France
  [47.2, -2.4],    // Loire estuary
  [48.4, -4.5],    // Brest / Brittany
  [49.7, -1.6],    // Cherbourg / Normandy
  [51.0, 1.8],     // Calais / Pas-de-Calais
  [51.4, 3.5],     // Zeebrugge, Belgium / Scheldt
  [52.4, 4.5],     // Amsterdam / Netherlands
  [53.5, 8.2],     // Bremerhaven, Germany
  [54.3, 10.1],    // CAU Kiel / Kieler Förde
  [55.7, 12.6],    // Copenhagen / Øresund, Denmark
  [57.7, 10.6],    // Skagen (Northern tip of Denmark)
  [56.0, 8.1],     // Esbjerg, Denmark West
  [54.5, 18.5],    // Gdańsk / Pomerania, Poland
  [54.4, 16.2],    // Darłowo / Baltic Coast, Poland
  [53.9, 14.3],    // Świnoujście / Oder mouth
  [56.9, 24.1],    // Riga, Latvia
  [59.4, 24.7],    // Tallinn, Estonia
  [60.1, 24.9],    // Helsinki, Finland
  [65.0, 25.4],    // Oulu / Bothnia Bay
  [63.8, 20.2],    // Umeå, Sweden
  [59.3, 18.1],    // Stockholm
  [55.6, 13.0],    // Malmö
  [57.7, 11.9],    // Gothenburg
  [59.0, 10.5],    // Oslofjord, Norway
  [58.1, 8.0],     // Kristiansand, Norway
  [58.9, 5.7],     // Stavanger
  [60.4, 5.3],     // Bergen (Glaciology & Fjords)
  [62.5, 6.1],     // Ålesund
  [63.4, 10.4],    // Trondheim
  [67.3, 14.4],    // Bodø / Lofoten
  [69.6, 18.9],    // Tromsø / Arctic Norway
  [71.1, 25.8],    // North Cape (Nordkapp)
  [69.0, 33.0],    // Murmansk
  [65.0, 40.0],    // White Sea
  // Down to Black Sea & Mediterranean:
  [46.5, 30.7],    // Odessa, Black Sea
  [44.2, 28.6],    // Constanța, Romania
  [41.0, 29.0],    // Istanbul / Bosphorus
  [40.6, 22.9],    // Thessaloniki, Greece
  [38.0, 23.7],    // Athens / Piraeus
  [36.5, 22.5],    // Peloponnese
  [39.6, 19.9],    // Corfu / Ionian
  [40.8, 17.0],    // Taranto, Italy
  [38.1, 15.6],    // Strait of Messina / Sicily
  [40.8, 14.2],    // Naples
  [41.8, 12.2],    // Rome / Ostia
  [43.7, 10.3],    // Pisa / Livorno
  [44.4, 8.9],     // Genoa / Ligurian Coast
  [43.7, 7.3],     // Nice, France
  [43.3, 5.4],     // Marseille
  [41.4, 2.2],     // Barcelona, Spain
  [39.5, -0.3],    // Valencia
  [36.7, -4.4],    // Málaga
  [36.0, -5.3]     // Close loop at Gibraltar
];

// 4. BRITISH ISLES COASTLINE LOOP
export const BRITISH_ISLES_COAST: LatLng[] = [
  [50.1, -5.7],    // Land's End
  [50.4, -3.5],    // Torbay
  [50.8, -1.1],    // Portsmouth
  [51.1, 1.3],     // Dover
  [51.5, 0.1],     // Thames Estuary
  [52.9, 0.5],     // The Wash
  [54.0, -0.2],    // Flamborough Head
  [55.0, -1.4],    // Newcastle
  [56.0, -3.2],    // Edinburgh / Firth of Forth
  [57.1, -2.1],    // Aberdeen
  [58.6, -3.1],    // John o' Groats (Northern Scotland)
  [58.0, -5.3],    // Ullapool / Highlands
  [56.4, -5.5],    // Oban
  [55.9, -4.8],    // Glasgow / Clyde
  [54.6, -3.6],    // Cumbria
  [53.4, -3.0],    // Liverpool
  [51.6, -5.0],    // Pembrokeshire, Wales
  [51.4, -3.2],    // Cardiff
  [51.2, -4.2],    // Bristol Channel
  [50.1, -5.7]     // Close loop
];

// 5. AFRICA COASTLINE LOOP
export const AFRICA_COAST: LatLng[] = [
  [35.8, -5.3],    // Ceuta / Morocco
  [35.8, -0.6],    // Oran, Algeria
  [36.8, 3.1],     // Algiers
  [37.3, 9.9],     // Bizerte / Northern tip of Africa, Tunisia
  [36.8, 10.3],    // Tunis
  [33.9, 10.1],    // Gabès
  [32.9, 13.2],    // Tripoli, Libya
  [32.1, 20.0],    // Benghazi
  [31.2, 29.9],    // Alexandria, Egypt
  [31.3, 32.3],    // Port Said / Suez Canal
  [27.9, 34.3],    // Sharm El-Sheikh (COP27 Climate Summit)
  [22.0, 36.9],    // Halaib, Red Sea
  [15.6, 39.5],    // Massawa, Eritrea
  [11.6, 43.1],    // Djibouti / Bab-el-Mandeb
  [12.0, 50.8],    // Guardafui / Horn of Africa
  [5.3, 48.5],     // Somalia Coast
  [2.0, 45.3],     // Mogadishu
  [-4.0, 39.7],    // Mombasa, Kenya
  [-6.8, 39.3],    // Dar es Salaam, Tanzania
  [-15.0, 40.7],   // Mozambique North
  [-19.8, 34.8],   // Beira, Mozambique
  [-26.0, 32.6],   // Maputo
  [-29.8, 31.0],   // Durban, South Africa
  [-34.0, 25.6],   // Port Elizabeth / Gqeberha
  [-34.8, 20.0],   // Cape Agulhas (Southernmost tip)
  [-33.9, 18.4],   // Cape Town / Cape of Good Hope
  [-26.6, 15.1],   // Lüderitz, Namibia
  [-22.9, 14.5],   // Walvis Bay
  [-12.5, 13.4],   // Benguela, Angola
  [-8.8, 13.2],    // Luanda
  [-4.8, 12.0],    // Pointe-Noire, Congo
  [0.4, 9.4],      // Libreville, Gabon
  [4.0, 9.7],      // Douala, Cameroon
  [4.8, 7.0],      // Niger Delta, Nigeria
  [6.4, 3.4],      // Lagos
  [6.1, 1.2],      // Lomé, Togo
  [5.6, -0.2],     // Accra, Ghana
  [5.3, -4.0],     // Abidjan, Ivory Coast
  [4.4, -7.7],     // Cape Palmas, Liberia
  [6.3, -10.8],    // Monrovia
  [8.5, -13.2],    // Freetown, Sierra Leone
  [11.9, -15.6],   // Bissau
  [14.7, -17.4],   // Dakar / Cap-Vert (Westernmost tip)
  [18.1, -16.0],   // Nouakchott, Mauritania
  [20.9, -17.0],   // Nouadhibou
  [23.7, -15.9],   // Dakhla
  [27.1, -13.2],   // El Aaiún
  [30.4, -9.6],    // Agadir, Morocco
  [33.6, -7.6],    // Casablanca
  [35.8, -5.3]     // Close loop
];

// 6. ASIA COASTLINE LOOP
export const ASIA_COAST: LatLng[] = [
  [31.3, 32.3],    // Suez
  [28.0, 34.5],    // Sinai
  [20.0, 40.0],    // Jeddah, Saudi Arabia
  [12.8, 45.0],    // Aden, Yemen
  [17.0, 54.0],    // Salalah, Oman
  [23.6, 58.6],    // Muscat
  [26.2, 56.4],    // Strait of Hormuz
  [29.0, 48.0],    // Kuwait
  [30.0, 50.0],    // Persian Gulf / Iran
  [25.3, 62.0],    // Gwadar, Pakistan
  [24.8, 67.0],    // Karachi
  [22.8, 70.0],    // Gujarat, India
  [18.9, 72.8],    // Mumbai
  [15.4, 73.8],    // Goa
  [9.9, 76.2],     // Kochi
  [8.1, 77.5],     // Kanyakumari (Southernmost tip of India)
  [13.1, 80.3],    // Chennai
  [17.7, 83.3],    // Visakhapatnam
  [21.6, 87.0],    // Bay of Bengal / Odisha
  [22.5, 88.4],    // Kolkata / Ganges Delta
  [22.3, 91.8],    // Chittagong, Bangladesh
  [16.8, 96.1],    // Yangon, Myanmar
  [12.5, 99.9],    // Gulf of Thailand
  [7.2, 100.6],    // Songkhla
  [1.3, 103.8],    // Singapore / Malacca Strait
  [6.0, 102.2],    // Kota Bharu
  [10.8, 106.7],   // Ho Chi Minh City / Mekong Delta
  [16.0, 108.2],   // Da Nang, Vietnam
  [20.8, 106.7],   // Haiphong / Red River Delta
  [21.5, 109.8],   // Leizhou Peninsula, China
  [22.3, 114.2],   // Hong Kong / Pearl River Delta
  [24.5, 118.1],   // Xiamen
  [26.1, 119.3],   // Fuzhou
  [31.2, 121.5],   // Shanghai / Yangtze Delta
  [36.1, 120.4],   // Qingdao / Shandong Peninsula
  [39.0, 121.6],   // Dalian
  [37.5, 126.9],   // Seoul / Incheon, Korea
  [35.1, 129.0],   // Busan
  [43.1, 131.9],   // Vladivostok, Russia
  [50.0, 140.0],   // Sea of Okhotsk
  [53.0, 158.6],   // Petropavlovsk-Kamchatsky
  [64.5, 178.0],   // Anadyr
  [66.0, -170.0],  // Cape Dezhnev / Bering Strait
  [70.0, 178.0],   // Wrangel Island coast
  [71.5, 140.0],   // New Siberian Islands coast
  [73.5, 120.0],   // Lena Delta
  [76.0, 100.0],   // Taymyr Peninsula
  [73.0, 70.0],    // Yamal Peninsula
  [68.0, 50.0],    // Pechora Sea
  [69.0, 33.0]     // Murmansk
];

// 7. JAPAN COASTLINE LOOP
export const JAPAN_COAST: LatLng[] = [
  [31.0, 130.5],   // Kagoshima, Kyushu
  [33.5, 130.4],   // Fukuoka
  [34.7, 135.5],   // Osaka / Kobe
  [35.4, 139.6],   // Tokyo Bay / Yokohama
  [38.3, 141.0],   // Sendai
  [41.8, 140.7],   // Hakodate, Hokkaido
  [43.0, 141.3],   // Sapporo
  [45.4, 141.6],   // Cape Sōya (Northern tip)
  [44.0, 145.0],   // Shiretoko
  [42.3, 141.0],   // Muroran
  [37.0, 136.8],   // Noto Peninsula
  [35.5, 133.0],   // Matsue
  [31.0, 130.5]    // Close loop
];

// 8. AUSTRALIA COASTLINE LOOP
export const AUSTRALIA_COAST: LatLng[] = [
  [-12.4, 130.8],  // Darwin, Northern Territory
  [-12.0, 136.5],  // Arnhem Land
  [-10.7, 142.5],  // Cape York (Northernmost tip)
  [-16.9, 145.8],  // Cairns, Queensland
  [-19.3, 146.8],  // Townsville
  [-23.4, 150.5],  // Rockhampton
  [-27.5, 153.0],  // Brisbane
  [-28.2, 153.5],  // Gold Coast
  [-33.9, 151.2],  // Sydney, New South Wales
  [-37.8, 149.9],  // Cape Howe
  [-38.3, 145.0],  // Melbourne / Port Phillip
  [-38.3, 141.6],  // Portland, Victoria
  [-35.9, 137.0],  // Kangaroo Island
  [-34.9, 138.5],  // Adelaide
  [-34.7, 135.9],  // Port Lincoln
  [-32.0, 132.0],  // Great Australian Bight
  [-33.9, 121.9],  // Esperance, Western Australia
  [-35.0, 117.9],  // Albany
  [-32.0, 115.8],  // Perth / Fremantle
  [-28.8, 114.6],  // Geraldton
  [-24.9, 113.7],  // Shark Bay
  [-21.8, 114.2],  // North West Cape / Exmouth
  [-20.3, 118.6],  // Port Hedland
  [-17.9, 122.2],  // Broome / Kimberley
  [-14.5, 125.0],  // Kimberley Coast
  [-12.4, 130.8]   // Close loop
];

// 9. ALL COASTLINE GROUPS FOR BATCH VECTOR RENDERING
export const ALL_COASTLINES: { id: string; name: string; coords: LatLng[] }[] = [
  { id: 'sa', name: 'South America', coords: SOUTH_AMERICA_COAST },
  { id: 'na', name: 'North & Central America', coords: NORTH_AMERICA_COAST },
  { id: 'eu', name: 'Europe & Scandinavia', coords: EUROPE_COAST },
  { id: 'uk', name: 'British Isles', coords: BRITISH_ISLES_COAST },
  { id: 'af', name: 'Africa', coords: AFRICA_COAST },
  { id: 'as', name: 'Asia & Eurasia', coords: ASIA_COAST },
  { id: 'jp', name: 'Japan', coords: JAPAN_COAST },
  { id: 'au', name: 'Australia', coords: AUSTRALIA_COAST },
];

// 10. CONTINENT INTERIOR LAND MATRIX (Tactical Halftone Dot-Grid)
// Provides dense, unmistakable mass and texture so the Earth landmasses are instantly visible!
export const CONTINENT_LAND_MATRIX: LatLng[] = [
  // Chile & Southern Cone
  [-18, -69], [-22, -69], [-24, -68], [-28, -70], [-30, -70], [-33, -70.6], [-35, -71.5],
  [-37, -72], [-39, -72], [-41, -72.5], [-43, -72.5], [-46, -72.5], [-48, -72.5], [-51, -72],
  [-53, -70], [-54, -68],
  // Argentina & Uruguay
  [-26, -65], [-31, -64], [-33, -60], [-35, -63], [-38, -62], [-40, -66], [-43, -67],
  [-46, -69], [-49, -70], [-52, -69], [-33, -56],
  // Brazil & Amazonia
  [-3, -60], [-3, -54], [-3, -48], [-6, -63], [-8, -50], [-10, -55], [-12, -45],
  [-15, -52], [-16, -48], [-20, -50], [-22, -48], [-23, -46], [-25, -52], [-28, -52],
  // Colombia, Venezuela, Peru, Bolivia
  [4, -73], [6, -75], [7, -70], [8, -65], [6, -62], [-4, -76], [-8, -76], [-10, -75],
  [-14, -75], [-17, -65], [-19, -65], [-21, -65],
  // Central America (Costa Rica, Panama, Mexico)
  [9, -83], [10, -84], [14, -87], [16, -92], [18, -98], [19, -99], [22, -102], [25, -104],
  [27, -106], [29, -108], [30, -112], [24, -100], [20, -90],
  // USA & Canada
  [32, -90], [33, -84], [34, -118], [35, -105], [36, -78], [38, -121], [39, -95], [40, -80],
  [41, -74], [42, -88], [45, -122], [45, -93], [47, -122], [46, -73], [50, -105], [52, -114],
  [54, -125], [55, -100], [58, -115], [61, -135], [64, -147], [65, -150], [68, -152],
  // Germany, Poland, Denmark, Norway, Switzerland
  [46.8, 8.2],   // Switzerland (Zürich)
  [48.1, 11.5],  // South Germany
  [50.1, 8.6],   // Central Germany (Frankfurt)
  [52.5, 13.4],  // Berlin
  [54.3, 10.1],  // Kiel (CAU)
  [52.4, 16.9],  // Poznań, Poland
  [52.2, 21.0],  // Warsaw
  [50.0, 19.9],  // Kraków
  [55.7, 12.6],  // Denmark (Copenhagen)
  [56.2, 9.5],   // Jutland
  [59.9, 10.7],  // Norway (Oslo)
  [60.4, 5.3],   // Norway (Bergen)
  [63.4, 10.4],  // Norway (Trondheim)
  [69.6, 18.9],  // Norway (Tromsø)
  [59.3, 18.0],  // Sweden (Stockholm)
  [64.0, 17.0],  // Northern Sweden
  [61.0, 25.0],  // Finland
  // Rest of Europe
  [40.4, -3.7],  // Spain (Madrid)
  [41.9, 12.5],  // Italy (Rome)
  [45.4, 9.2],   // Italy (Milan)
  [48.8, 2.3],   // France (Paris)
  [45.7, 4.8],   // France (Lyon)
  [51.5, -0.1],  // UK (London)
  [55.9, -3.2],  // UK (Edinburgh)
  [50.8, 4.3],   // Belgium (Brussels)
  [48.2, 16.4],  // Austria (Vienna)
  [47.5, 19.0],  // Hungary (Budapest)
  [44.4, 26.1],  // Romania (Bucharest)
  [50.4, 30.5],  // Ukraine (Kyiv)
  [55.7, 37.6],  // Moscow
  // Egypt & Africa
  [27.0, 31.0],  // Egypt Nile Valley
  [27.9, 34.3],  // Sinai / Sharm El-Sheikh
  [32.0, 3.0],   // Algeria
  [31.0, -5.0],  // Morocco
  [15.0, 0.0],   // Mali / Niger
  [9.0, 7.5],    // Nigeria
  [0.0, 20.0],   // Congo Basin
  [-1.3, 36.8],  // Kenya (Nairobi)
  [-6.0, 35.0],  // Tanzania
  [-15.0, 28.0], // Zambia
  [-26.0, 28.0], // South Africa (Johannesburg)
  [-33.9, 18.4], // Cape Town
  // Asia & Oceania
  [24.0, 45.0],  // Saudi Arabia
  [32.0, 53.0],  // Iran
  [28.6, 77.2],  // India (Delhi)
  [19.0, 72.8],  // India (Mumbai)
  [13.0, 80.2],  // India (Chennai)
  [39.9, 116.4], // China (Beijing)
  [31.2, 121.5], // China (Shanghai)
  [23.1, 113.2], // China (Guangzhou)
  [35.7, 139.7], // Japan (Tokyo)
  [37.5, 127.0], // Korea (Seoul)
  [13.7, 100.5], // Thailand (Bangkok)
  [-6.2, 106.8], // Indonesia (Jakarta)
  [-33.8, 151.2],// Australia (Sydney)
  [-37.8, 144.9],// Australia (Melbourne)
  [-27.4, 153.0],// Australia (Brisbane)
  [-31.9, 115.8],// Australia (Perth)
  [-23.7, 133.8] // Australia (Alice Springs)
];
