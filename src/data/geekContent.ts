export type CategoryKey = 'Todo' | 'Gaming' | 'Cine' | 'Series' | 'Cómics' | 'Tecnología';

export type IllustrationId =
  | 'cyber-runner'
  | 'crt-dreamer'
  | 'multiverse-signal'
  | 'mecha-frog'
  | 'spider-noir'
  | 'shonen-eclipse'
  | 'neural-deck'
  | 'galactica-dune';

export interface GeekCardItem {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<CategoryKey, 'Todo'>;
  releaseInfo: string;
  readTime: string;
  illustrationId: IllustrationId;
  summary: string;
  highlights: string[];
  creatorOrStudio: string;
  featuredQuote: string;
  videoPreviewDuration?: string;
}

export interface ArsenalPillar {
  id: string;
  shortCode: string;
  name: string;
  sublabel: string;
  categoryTarget: CategoryKey;
  borderColor: string;
  textColor: string;
  bgGlow: string;
}

export interface UpcomingRelease {
  id: string;
  title: string;
  category: Exclude<CategoryKey, 'Todo'>;
  releaseDate: string;
  daysLeft: number;
  platformOrFormat: string;
  hypeNote: string;
}

export const NAV_LINKS: { label: CategoryKey | 'Inicio'; category: CategoryKey; href: string }[] = [
  { label: 'Inicio', category: 'Todo', href: '#inicio' },
  { label: 'Gaming', category: 'Gaming', href: '#universo' },
  { label: 'Cine', category: 'Cine', href: '#universo' },
  { label: 'Series', category: 'Series', href: '#universo' },
  { label: 'Cómics', category: 'Cómics', href: '#universo' },
  { label: 'Tecnología', category: 'Tecnología', href: '#universo' },
];

export const HERO_SPEECH_QUOTES: string[] = [
  '¡EL HYPE ESTÁ AL MÁXIMO!',
  '¡NUEVO ESPECIAL SIN SPOILERS!',
  '¡MODO JEFE FINAL ACTIVADO!',
  '¡BIENVENIDO AL MULTIVERSO!',
];

export const FEATURED_SHOWREEL = {
  kicker: 'Especial de la Semana · Octubre 2026',
  title: 'CRÓNICAS DEL MULTIVERSO: EL FUTURO DEL GAMING Y EL CINE ÉPICO',
  shortDescription:
    'Un vistazo explosivo a los lanzamientos más esperados del año, motores gráficos de nueva generación y el renacimiento de la animación 2D estilizada.',
  duration: '14:28 min',
  director: 'Redacción Imperio Geek',
  chapters: [
    { time: '00:00', label: 'Introducción: La era del cómic interactivo y el cel-shading' },
    { time: '03:45', label: 'Gaming Next-Gen: Mundos abiertos vivos y física en tiempo real' },
    { time: '08:12', label: 'Cine & Series: Secret Wars, Beyond the Spider-Verse y Dune Messiah' },
    { time: '11:50', label: 'Hardware Geek: GPUs neuronales y consolas portátiles OLED' },
  ],
  fullStory:
    'En este documental interactivo de Imperio Geek recorremos los estudios creativos que están rompiendo las reglas entre el cine de animación, el cómic independiente y los videojuegos AAA. Analizamos cuadro por cuadro cómo la estética artesanal de trazos de tinta, colores neón y narrativa audaz ha conquistado la cultura pop global.',
};

export const UNIVERSE_ITEMS: GeekCardItem[] = [
  {
    id: 'kronos-overdrive',
    title: 'KRONOS OVERDRIVE',
    subtitle: 'RPG Cyberpunk · 120 FPS',
    category: 'Gaming',
    releaseInfo: 'Lanzamiento Nov 2026',
    readTime: '6 min lectura',
    illustrationId: 'cyber-runner',
    summary:
      'Probamos durante 40 horas el nuevo action-RPG de estética cómic donde cada combate altera la línea temporal de Neo-Veridia con animaciones hechas a mano a 24 y 120 cuadros por segundo.',
    highlights: [
      'Sistema de parkour gravitacional con trazos de tinta reactivos',
      'Banda sonora synth-punk dinámica que responde a tus combos',
      'Modo cooperativo cruzado para escuadrones de hasta 4 jugadores',
    ],
    creatorOrStudio: 'Studio Volt & Arkane Pulse',
    featuredQuote: '“El equilibrio perfecto entre un manga shonen de alto voltaje y un immersive sim de nueva generación.”',
    videoPreviewDuration: '04:15',
  },
  {
    id: 'retro-cortex-os',
    title: 'NEURAL DECK PRO',
    subtitle: 'Consola Híbrida & IA Local',
    category: 'Tecnología',
    releaseInfo: 'Análisis Lab Geek',
    readTime: '8 min lectura',
    illustrationId: 'crt-dreamer',
    summary:
      'Desmontamos la nueva estación portátil con pantalla OLED tándem de 144Hz, carcasa translúcida inspirada en los años 90 y chip dedicado al escalado sin latencia.',
    highlights: [
      'Autonomía real de 7.5 horas en títulos indie y 4 horas en AAA',
      'Joysticks magnéticos Hall-Effect libres de drift con tensión ajustable',
      'Modo dock instantáneo con salida 4K a 120Hz por USB4',
    ],
    creatorOrStudio: 'Kairo Labs Hardware',
    featuredQuote: '“Diseño nostálgico con entrañas de supercomputadora de bolsillo.”',
    videoPreviewDuration: '06:40',
  },
  {
    id: 'beyond-nexus',
    title: 'SEÑAL PERDIDA: NEXUS',
    subtitle: 'Película Sci-Fi · Estreno IMAX',
    category: 'Cine',
    releaseInfo: 'En cines 14 Nov',
    readTime: '5 min lectura',
    illustrationId: 'multiverse-signal',
    summary:
      'La odisea espacial que combina animación híbrida 2D/3D con fotografía anamórfica real. Una exploradora solitaria intercepta una transmisión proveniente de un universo paralelo.',
    highlights: [
      'Dirigida por los veteranos del diseño visual de animación experimental',
      'Mezcla de sonido Dolby Atmos diseñada junto a compositores electrónicos',
      'Más de 1,400 fondos pintados a mano sin retoques genéricos',
    ],
    creatorOrStudio: 'Aether Pictures & Nova Film',
    featuredQuote: '“Cada fotograma merece ser enmarcado como una portada de novela gráfica clásica.”',
    videoPreviewDuration: '02:55',
  },
  {
    id: 'beats-of-tama',
    title: 'GROOVY MECHA: BSO',
    subtitle: 'Serie Animada · Temporada 2',
    category: 'Series',
    releaseInfo: 'Maratón Viernes',
    readTime: '4 min lectura',
    illustrationId: 'mecha-frog',
    summary:
      'El fenómeno de animación musical regresa con 12 episodios donde los duelos de mechas se sincronizan al ritmo de funk espacial, hip-hop lo-fi y electrónica japonesa.',
    highlights: [
      'Colaboraciones musicales exclusivas en cada episodio',
      'Secuencias de acción coreografiadas por leyendas del sakuga',
      'Edición coleccionista en vinilo verde lima ya confirmada',
    ],
    creatorOrStudio: 'Trigger Groove Animation',
    featuredQuote: '“Pura dopamina audiovisual: imposible ver el opening sin subir el volumen al máximo.”',
    videoPreviewDuration: '03:20',
  },
  {
    id: 'vanguardia-mutante',
    title: 'CRÓNICAS DE TINTA #01',
    subtitle: 'Cómic Original · Edición Tapa Dura',
    category: 'Cómics',
    releaseInfo: 'Preventa Abierta',
    readTime: '7 min lectura',
    illustrationId: 'spider-noir',
    summary:
      'Analizamos la novela gráfica revelación del año: 240 páginas a todo color con tintas intensas, tramas de semitono clásicas y un misterio detectivesco en una metrópolis flotante.',
    highlights: [
      'Papel de alto gramaje con acabados en barniz ultravioleta selectivo',
      'Incluye 30 páginas de bocetos originales y guion comentado',
      'Portada variante exclusiva ilustrada para la comunidad hispana',
    ],
    creatorOrStudio: 'Editorial Eclipse & M. Vargas',
    featuredQuote: '“Un homenaje vibrante al cómic underground de los 90 con narrativa contemporánea.”',
  },
  {
    id: 'ronin-solar',
    title: 'ECLIPSE SHONEN ZERO',
    subtitle: 'Anime · Arco del Torneo',
    category: 'Series',
    releaseInfo: 'Simulcast Semanal',
    readTime: '5 min lectura',
    illustrationId: 'shonen-eclipse',
    summary:
      'El arco más esperado del manga cobra vida con una dirección de arte deslumbrante que alterna paleta monocromática y explosiones de color violeta y verde ácido.',
    highlights: [
      'Adaptación fiel supervisada directamente por su autor original',
      'Cero episodios de relleno y ritmo cinematográfico sostenido',
      'Doblaje simultáneo en español latino y castellano desde el día uno',
    ],
    creatorOrStudio: 'Studio Kaze',
    featuredQuote: '“El episodio 8 redefine el estándar de la animación televisiva de esta década.”',
  },
  {
    id: 'visor-aether',
    title: 'ÓPTICA AETHER XR',
    subtitle: 'Lentes Micro-OLED · 98 gramos',
    category: 'Tecnología',
    releaseInfo: 'Prototipo Comercial',
    readTime: '6 min lectura',
    illustrationId: 'neural-deck',
    summary:
      'Olvida los cascos pesados: probamos los nuevos lentes ultraligeros que proyectan una pantalla virtual equivalente a 180 pulgadas para jugar y leer cómics en cualquier lugar.',
    highlights: [
      'Ajuste de dioptrías integrado para usar sin gafas adicionales',
      'Seguimiento ocular de baja latencia para pasar páginas de manga',
      'Compatibilidad directa con PC, consolas portátiles y smartphones',
    ],
    creatorOrStudio: 'Optix Future Lab',
    featuredQuote: '“Por fin la realidad extendida se siente tan cómoda como ponerse unas gafas de sol.”',
  },
  {
    id: 'dunas-de-titan',
    title: 'TITÁN CARMESÍ: PARTE II',
    subtitle: 'Superproducción Sci-Fi · 70mm',
    category: 'Cine',
    releaseInfo: 'Diciembre 2026',
    readTime: '9 min lectura',
    illustrationId: 'galactica-dune',
    summary:
      'Visitamos el set de rodaje de la epopeya interplanetaria que cierra la trilogía con decorados prácticos colosales, naves construidas a escala real y épica pura.',
    highlights: [
      'Rodada íntegramente con cámaras IMAX de gran formato',
      'Diseño de vestuario inspirado en la ilustración europea de los años 70',
      'Duración confirmada de 168 minutos de tensión ininterrumpida',
    ],
    creatorOrStudio: 'Solaris Pictures',
    featuredQuote: '“Ciencia ficción adulta, monumental y visualmente hipnótica.”',
  },
];

export const ARSENAL_PILLARS: ArsenalPillar[] = [
  {
    id: 'pillar-gaming',
    shortCode: 'GM',
    name: 'Next-Gen Gaming',
    sublabel: 'PC & Consolas',
    categoryTarget: 'Gaming',
    borderColor: '#38BDF8',
    textColor: '#38BDF8',
    bgGlow: 'rgba(56, 189, 248, 0.12)',
  },
  {
    id: 'pillar-cine',
    shortCode: 'CX',
    name: 'Cine & IMAX',
    sublabel: 'Estrenos & Crítica',
    categoryTarget: 'Cine',
    borderColor: '#A855F7',
    textColor: '#C084FC',
    bgGlow: 'rgba(168, 85, 247, 0.12)',
  },
  {
    id: 'pillar-series',
    shortCode: 'SR',
    name: 'Series & Anime',
    sublabel: 'Streaming & Sakuga',
    categoryTarget: 'Series',
    borderColor: '#F97316',
    textColor: '#FB923C',
    bgGlow: 'rgba(249, 115, 22, 0.12)',
  },
  {
    id: 'pillar-comics',
    shortCode: 'CM',
    name: 'Cómics & Manga',
    sublabel: 'Novela Gráfica',
    categoryTarget: 'Cómics',
    borderColor: '#38BDF8',
    textColor: '#7DD3FC',
    bgGlow: 'rgba(56, 189, 248, 0.12)',
  },
  {
    id: 'pillar-tech',
    shortCode: 'HW',
    name: 'Hardware & IA',
    sublabel: 'GPUs & Gadgets',
    categoryTarget: 'Tecnología',
    borderColor: '#B8FF01',
    textColor: '#B8FF01',
    bgGlow: 'rgba(184, 255, 1, 0.12)',
  },
  {
    id: 'pillar-all',
    shortCode: 'IG',
    name: 'Todo el Archivo',
    sublabel: 'Explorar 360°',
    categoryTarget: 'Todo',
    borderColor: '#A855F7',
    textColor: '#D8B4FE',
    bgGlow: 'rgba(168, 85, 247, 0.12)',
  },
];

export const UPCOMING_RELEASES: UpcomingRelease[] = [
  {
    id: 'rel-1',
    title: 'Kronos Overdrive — Edición Coleccionista',
    category: 'Gaming',
    releaseDate: '06 NOV 2026',
    daysLeft: 13,
    platformOrFormat: 'PS5 · PC · Xbox Series X',
    hypeNote: 'Demo jugable ya disponible con transferencia de progreso.',
  },
  {
    id: 'rel-2',
    title: 'Señal Perdida: Nexus (Preestreno IMAX)',
    category: 'Cine',
    releaseDate: '14 NOV 2026',
    daysLeft: 21,
    platformOrFormat: 'Salas IMAX 70mm & Laser',
    hypeNote: 'Incluye póster numerado ilustrado en funciones de medianoche.',
  },
  {
    id: 'rel-3',
    title: 'Crónicas de Tinta Vol. 1 — Tapa Dura',
    category: 'Cómics',
    releaseDate: '22 NOV 2026',
    daysLeft: 29,
    platformOrFormat: 'Librerías & Tienda Oficial',
    hypeNote: 'Firma de autores en vivo transmitida por nuestro canal.',
  },
  {
    id: 'rel-4',
    title: 'Groovy Mecha: Temporada 2 (Parte Final)',
    category: 'Series',
    releaseDate: '04 DIC 2026',
    daysLeft: 41,
    platformOrFormat: 'Simulcast Global 4K HDR',
    hypeNote: 'Episodio final de 60 minutos con concierto en directo.',
  },
];
