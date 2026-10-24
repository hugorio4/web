/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Play,
  ArrowUpRight,
  ArrowRight,
  Menu,
  Mail,
  MapPin,
  Bell,
  Check,
  Instagram,
  Youtube,
  Gamepad2,
  Share2,
  Bookmark,
} from 'lucide-react';
import {
  ARSENAL_PILLARS,
  CategoryKey,
  FEATURED_SHOWREEL,
  GeekCardItem,
  HERO_SPEECH_QUOTES,
  NAV_LINKS,
  UNIVERSE_ITEMS,
  UPCOMING_RELEASES,
} from './data/geekContent';
import {
  BluePeaceMascot,
  BrushUnderline,
  CardIllustrationSVG,
  CrownDoodle,
  CurvedArrowLeft,
  HeroGeekCharacterSVG,
  LightningSticker,
  MangaManifestoArtSVG,
  PurpleLoopDoodle,
  PurpleSquiggle,
  RabbitStickerDoodle,
  ShowreelSynthwaveArtSVG,
  SmallCurvedArrow,
  SmileySticker,
  StarOutlinePurple,
} from './components/ComicIllustrations';
import { CardDetailModal, MenuDrawerModal, ShowreelModal } from './components/DetailModals';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('Todo');
  const [showAllCards, setShowAllCards] = useState<boolean>(false);
  const [speechIndex, setSpeechIndex] = useState<number>(0);
  const [isShowreelOpen, setIsShowreelOpen] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<GeekCardItem | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [savedCardIds, setSavedCardIds] = useState<string[]>(['kronos-overdrive']);
  const [remindedReleaseIds, setRemindedReleaseIds] = useState<string[]>(['rel-1']);
  const [activeBottomTab, setActiveBottomTab] = useState<'estrenos' | 'manifiesto'>('estrenos');

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'error' | 'success'>('idle');

  const handleCycleSpeech = () => {
    setSpeechIndex((prev) => (prev + 1) % HERO_SPEECH_QUOTES.length);
  };

  const handleToggleSaveCard = (id: string) => {
    setSavedCardIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleReminder = (id: string) => {
    setRemindedReleaseIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCategoryClick = (category: CategoryKey) => {
    setActiveCategory(category);
    const el = document.getElementById('universo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newsletterEmail.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setNewsletterStatus('error');
      return;
    }
    setNewsletterStatus('success');
    setNewsletterEmail('');
  };

  const filteredUniverse =
    activeCategory === 'Todo'
      ? UNIVERSE_ITEMS
      : UNIVERSE_ITEMS.filter((item) => item.category === activeCategory);

  const visibleCards =
    activeCategory === 'Todo' && !showAllCards
      ? filteredUniverse.slice(0, 4)
      : filteredUniverse;

  return (
    <div id="inicio" className="relative min-h-screen bg-[#08080C] text-[#F4F4F6] overflow-x-hidden">
      {/* =====================================================================
          AMBIENT COMIC PAINT BLOBS (Top-Left Electric Violet & Left Sky Blue)
         ===================================================================== */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-[340px] sm:w-[460px] h-[270px] z-0"
        aria-hidden="true"
      >
        <svg viewBox="0 0 460 270" fill="none" className="w-full h-full">
          <path
            d="M0 0H345C335 48 272 72 195 92C118 112 45 118 52 162C59 206 38 248 0 256V0Z"
            fill="#6D28D9"
          />
          <ellipse cx="192" cy="112" rx="14" ry="7" transform="rotate(-18 192 112)" fill="#6D28D9" />
          <circle cx="148" cy="126" r="4" fill="#6D28D9" />
        </svg>
      </div>

      {/* Mid-left Sky Blue Comic Splash behind Hero Bottom-Left */}
      <div
        className="pointer-events-none absolute top-[430px] left-0 w-[230px] h-[190px] z-0 opacity-95"
        aria-hidden="true"
      >
        <svg viewBox="0 0 230 190" fill="none" className="w-full h-full">
          <path
            d="M0 24C42 18 75 56 68 88C62 118 125 112 168 148C190 166 142 190 0 190V24Z"
            fill="#38BDF8"
          />
          <circle cx="105" cy="94" r="7" fill="#38BDF8" />
          <circle cx="185" cy="138" r="5" fill="#38BDF8" />
          <circle cx="18" cy="82" r="3" fill="#08080C" />
          <circle cx="42" cy="114" r="4" fill="#08080C" />
          <circle cx="28" cy="142" r="2.5" fill="#08080C" />
        </svg>
      </div>

      {/* =====================================================================
          1. NAVBAR (Strict 3-Zone Top Bar Contract: Brand — Nav Links — Menu CTA)
         ===================================================================== */}
      <header className="relative z-30 max-w-[1320px] mx-auto flex items-center justify-between gap-8 px-6 sm:px-10 py-6">
        {/* Zone 1: Single Text Element Brand Wordmark */}
        <a
          href="#inicio"
          onClick={() => setActiveCategory('Todo')}
          className="font-comic text-2xl sm:text-3xl tracking-wider text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#B8FF01]"
        >
          IMPERIO GEEK<span className="text-[#B8FF01]">.</span>
        </a>

        {/* Zone 2: Navigation Links (Single-line with lime active/hover underline) */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-200"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              (link.label === 'Inicio' && activeCategory === 'Todo') ||
              (link.label !== 'Inicio' && activeCategory === link.category);

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.label !== 'Inicio') {
                    e.preventDefault();
                    handleCategoryClick(link.category);
                  } else {
                    setActiveCategory('Todo');
                  }
                }}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                  isActive ? 'text-white font-semibold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute left-0 right-0 -bottom-1 h-[3px] bg-[#B8FF01] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action (Electric Violet Comic Menu Button) */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú de categorías y buscador"
            className="w-12 h-12 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white flex items-center justify-center shadow-[0_0_24px_rgba(124,58,237,0.55)] transition-transform duration-150 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* =====================================================================
          2. HERO IMPACTANTE (Asymmetric Cartoon/Comic Split Layout)
         ===================================================================== */}
      <section className="relative z-20 max-w-[1320px] mx-auto px-6 sm:px-10 pt-4 pb-14 lg:pt-8 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Left Column: Expressive Comic Title, Tagline & CTAs */}
          <div className="lg:col-span-7 relative z-10 pt-2">
            {/* Handwritten Kicker + Curved Arrow + "SOMOS" */}
            <div className="flex items-end gap-2 mb-2 sm:pl-4">
              <div className="flex flex-col items-start">
                <span className="font-marker text-lg sm:text-2xl text-white -rotate-6">
                  ¡Hola, player!
                </span>
                <SmallCurvedArrow className="w-7 h-7 ml-6 -mt-1" />
              </div>
              <span className="font-comic text-4xl sm:text-6xl text-white tracking-wider leading-none -rotate-2 ml-1">
                SOMOS
              </span>
            </div>

            {/* Giant Brush/Comic Display Title + Crown + Lime Brush Underline */}
            <div className="relative inline-block max-w-full">
              <CrownDoodle className="w-12 h-10 sm:w-16 sm:h-13 absolute -top-9 right-2 sm:right-6 rotate-6 animate-float-slow" />
              <h1
                className="font-comic text-[4.25rem] sm:text-[6.4rem] xl:text-[7.2rem] leading-[0.9] tracking-wider text-white uppercase select-none -rotate-3 drop-shadow-[0_6px_0_rgba(8,8,12,0.95)]"
                style={{ textWrap: 'balance' }}
              >
                IMPERIO GEEK
              </h1>
              <div className="w-[88%] mx-auto -mt-1 sm:-mt-2 -rotate-2">
                <BrushUnderline className="w-full h-5 sm:h-7" />
              </div>
            </div>

            {/* Clean Unboxed Discipline Subheader with Lime Dots */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm sm:text-base font-semibold text-zinc-100">
              <span>Gaming Next-Gen</span>
              <span className="text-[#B8FF01]" aria-hidden="true">•</span>
              <span>Cine &amp; Series</span>
              <span className="text-[#B8FF01]" aria-hidden="true">•</span>
              <span>Cómics &amp; Manga</span>
              <span className="text-[#B8FF01]" aria-hidden="true">•</span>
              <span>Tecnología</span>
            </div>

            {/* Catchy Phrase */}
            <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
              Tu cuartel general donde la cultura pop, las reseñas sin spoilers, el arte
              secuencial y los lanzamientos más potentes cobran vida con energía propia.
            </p>

            {/* CTA Buttons Row + Hand-Drawn Left Arrow + Smiley & Lightning Stickers */}
            <div className="relative mt-8 flex flex-wrap items-center gap-4 sm:pl-10">
              {/* Hand-drawn curved arrow on the left (matching reference image) */}
              <CurvedArrowLeft className="hidden sm:block w-11 h-22 absolute -left-3 -top-6" />

              {/* Primary CTA: "Explorar universo" */}
              <a
                href="#universo"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#B8FF01] hover:bg-[#c8ff32] text-[#08080C] font-bold text-sm sm:text-base shadow-[0_8px_28px_rgba(184,255,1,0.3)] transition-transform duration-150 hover:scale-[1.03] active:scale-95 whitespace-nowrap shrink-0"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Explorar universo</span>
              </a>

              {/* Secondary CTA: "Ver novedades" */}
              <button
                type="button"
                onClick={() => setIsShowreelOpen(true)}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#0E0F17] hover:bg-[#191B29] text-white font-semibold text-sm sm:text-base border-2 border-[#7C3AED]/75 hover:border-[#B8FF01] transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Ver novedades</span>
                <ArrowUpRight className="w-4 h-4 text-[#B8FF01]" />
              </button>

              {/* Floating Smiley & Lightning Bolt Stickers */}
              <div className="hidden sm:flex items-center gap-4 ml-4">
                <SmileySticker className="w-12 h-12 animate-float-slow" />
                <LightningSticker className="w-9 h-12 mt-6 animate-float-reverse" />
              </div>
            </div>
          </div>

          {/* Right Column: Original Illustrated Geek Character */}
          <div className="lg:col-span-5 relative z-10">
            <HeroGeekCharacterSVG
              speechText={HERO_SPEECH_QUOTES[speechIndex]}
              onCycleSpeech={handleCycleSpeech}
            />
          </div>
        </div>

        {/* Scroll Down Indicator (Centered at bottom of Hero like reference image) */}
        <div className="mt-6 lg:mt-2 flex justify-center">
          <a
            href="#destacado"
            className="group inline-flex items-center gap-2.5 text-xs font-medium text-zinc-300 hover:text-[#B8FF01] transition-colors"
          >
            <span className="w-5 h-8 rounded-full border-2 border-zinc-300 group-hover:border-[#B8FF01] flex items-start justify-center p-1">
              <span className="w-1 h-2 bg-[#B8FF01] rounded-full" />
            </span>
            <span>Scroll Down</span>
          </a>
        </div>
      </section>

      {/* =====================================================================
          MAIN DARK CHARCOAL PORTFOLIO BOARD (Sections 3, 4, Arsenal, and 5)
         ===================================================================== */}
      <main className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-8 pb-20">
        <div className="bg-[#13141C] border border-[#222433] rounded-[36px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
          {/* -----------------------------------------------------------------
              3. BANNER DESTACADO CON LA ÚLTIMA NOVEDAD GEEK (Showreel Style)
             ----------------------------------------------------------------- */}
          <section
            id="destacado"
            className="relative px-6 sm:px-12 py-10 sm:py-12 border-b border-[#1E202E]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Info Column */}
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center gap-3">
                  <StarOutlinePurple className="w-7 h-7 shrink-0" />
                  <h2 className="font-comic text-3xl sm:text-4xl text-white tracking-wider uppercase">
                    NOVEDAD ÉPICA
                  </h2>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed pl-1">
                  {FEATURED_SHOWREEL.shortDescription}
                </p>

                <div className="text-xs text-zinc-400 pl-1">
                  <span>{FEATURED_SHOWREEL.kicker}</span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span className="font-mono-tabular text-zinc-300">{FEATURED_SHOWREEL.duration}</span>
                </div>

                <div className="pt-1 pl-1">
                  <button
                    type="button"
                    onClick={() => setIsShowreelOpen(true)}
                    className="group inline-flex items-center gap-3 text-sm font-bold text-[#B8FF01] hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Ver Especial Ahora</span>
                    <span className="w-6 h-6 rounded-full border border-[#B8FF01] flex items-center justify-center group-hover:bg-[#B8FF01] group-hover:text-[#08080C] transition-colors">
                      <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Right 16:9 Neon Cityscape Visual Banner */}
              <div className="lg:col-span-8 relative">
                <div
                  onClick={() => setIsShowreelOpen(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsShowreelOpen(true);
                    }
                  }}
                  aria-label="Reproducir especial Crónicas del Multiverso"
                  className="group relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border border-[#2A2D42] cursor-pointer shadow-lg focus-visible:outline-2 focus-visible:outline-[#B8FF01]"
                >
                  <ShowreelSynthwaveArtSVG />

                  {/* Measured Contrast Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent group-hover:via-black/10 transition-colors" />

                  {/* Center Glowing Lime Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#B8FF01] text-[#08080C] flex items-center justify-center shadow-[0_0_32px_rgba(184,255,1,0.65)] transition-transform duration-150 group-hover:scale-110">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Bottom Title Overlay */}
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs text-[#B8FF01] font-medium">
                        Documental Exclusivo · 4 Capítulos Interactivos
                      </p>
                      <p className="font-comic text-xl sm:text-2xl text-white tracking-wide">
                        {FEATURED_SHOWREEL.title}
                      </p>
                    </div>
                    <span className="hidden sm:inline-block font-mono-tabular text-xs text-zinc-200 bg-black/60 px-2.5 py-1 rounded-md">
                      4K · 60 FPS
                    </span>
                  </div>
                </div>

                {/* Purple Comic Spark Lines on the Right */}
                <svg
                  viewBox="0 0 40 48"
                  fill="none"
                  className="hidden xl:block w-9 h-11 absolute -right-10 top-1/2 -translate-y-1/2"
                  aria-hidden="true"
                >
                  <path d="M6 14L24 4" stroke="#7C3AED" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M10 26L34 20" stroke="#7C3AED" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M8 38L28 40" stroke="#7C3AED" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </section>

          {/* -----------------------------------------------------------------
              4. GRID DE TARJETAS PARA PELÍCULAS, SERIES, CÓMICS Y TECNOLOGÍA
             ----------------------------------------------------------------- */}
          <section
            id="universo"
            className="relative px-6 sm:px-12 py-10 sm:py-12 border-b border-[#1E202E]"
          >
            {/* Cute Rabbit Comic Sticker on Top-Right Margin */}
            <RabbitStickerDoodle className="hidden md:block w-13 h-15 absolute right-6 -top-8 z-10 animate-float-slow" />

            {/* Section Header + Interactive Filter Controls */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <h2 className="font-comic text-3xl sm:text-4xl text-white tracking-wider uppercase">
                  EXPLORA EL UNIVERSO
                </h2>
                <PurpleSquiggle className="w-14 h-5 shrink-0" />
              </div>

              <div className="flex flex-wrap items-center justify-between xl:justify-end gap-3">
                {/* Interactive Segmented Category Filter Buttons */}
                <div
                  role="tablist"
                  aria-label="Filtrar contenido por categoría"
                  className="flex flex-wrap items-center gap-1 p-1 bg-[#0B0C12] border border-[#232536] rounded-xl"
                >
                  {(['Todo', 'Gaming', 'Cine', 'Series', 'Cómics', 'Tecnología'] as CategoryKey[]).map(
                    (cat) => {
                      const active = activeCategory === cat;
                      return (
                        <button
                          key={cat}
                          type="button"
                          role="tab"
                          aria-selected={active}
                          onClick={() => setActiveCategory(cat)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                            active
                              ? 'bg-[#7C3AED] text-white shadow-sm'
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          {cat}
                        </button>
                      );
                    }
                  )}
                </div>

                {/* View All / Collapse Toggle Link (Matches "View All Projects ->" in reference) */}
                {activeCategory === 'Todo' && (
                  <button
                    type="button"
                    onClick={() => setShowAllCards(!showAllCards)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#B8FF01] hover:underline cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>{showAllCards ? 'Mostrar destacados (4)' : 'Ver todo el archivo (8)'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* 4-Column Responsive Comic Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {visibleCards.map((card) => {
                const isSaved = savedCardIds.includes(card.id);
                return (
                  <article
                    key={card.id}
                    onClick={() => setSelectedCard(card)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedCard(card);
                      }
                    }}
                    className="group bg-[#0B0C12] border border-[#222434] hover:border-[#7C3AED] rounded-2xl overflow-hidden flex flex-col justify-between transition-transform duration-150 hover:-translate-y-1.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B8FF01]"
                  >
                    {/* Card Top Illustration */}
                    <div className="relative h-44 w-full overflow-hidden bg-[#161824]">
                      <div className="w-full h-full transition-transform duration-200 group-hover:scale-105">
                        <CardIllustrationSVG id={card.illustrationId} />
                      </div>

                      {/* Bookmark quick button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleSaveCard(card.id);
                        }}
                        aria-label={isSaved ? 'Quitar de Mi Lista' : 'Guardar en Mi Lista'}
                        className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                          isSaved
                            ? 'bg-[#B8FF01] text-[#08080C]'
                            : 'bg-black/65 text-white hover:bg-[#7C3AED]'
                        }`}
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>
                    </div>

                    {/* Card Dark Footer Info (Exact match to RUN! / DAYDREAMS / LOST SIGNAL / GROOVY TUNES) */}
                    <div className="p-4 flex items-end justify-between gap-3 bg-[#0B0C12]">
                      <div className="min-w-0">
                        <h3 className="font-comic text-lg text-white tracking-wider uppercase truncate group-hover:text-[#B8FF01] transition-colors">
                          {card.title}
                        </h3>
                        {/* Zero-Pill Metadata Discipline: Clean unboxed text with · separator */}
                        <p className="text-xs text-zinc-400 truncate mt-0.5">
                          <span>{card.category}</span>
                          <span className="mx-1.5" aria-hidden="true">·</span>
                          <span>{card.subtitle}</span>
                        </p>
                      </div>

                      <span className="w-7 h-7 rounded-full bg-[#161825] group-hover:bg-[#B8FF01] text-zinc-300 group-hover:text-[#08080C] flex items-center justify-center transition-colors shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Yellow Zig-Zag Doodle on Bottom-Left of Featured Section */}
            <svg
              viewBox="0 0 42 46"
              fill="none"
              className="w-8 h-9 absolute left-2 bottom-3 opacity-90 pointer-events-none"
              aria-hidden="true"
            >
              <path
                d="M6 32L18 8L16 36L32 14L28 42L40 24"
                stroke="#D4FF00"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </section>

          {/* -----------------------------------------------------------------
              ARSENAL GEEK / CATEGORÍAS INTERACTIVAS (Skills Strip Style)
             ----------------------------------------------------------------- */}
          <section className="relative px-6 sm:px-12 py-9 border-b border-[#1E202E]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Title with Purple Underline & Blue Drops */}
              <div className="relative flex flex-col items-center lg:items-start shrink-0">
                <h2 className="font-comic text-3xl sm:text-4xl text-white tracking-wider uppercase">
                  ARSENAL GEEK
                </h2>
                <div className="w-24 h-1.5 bg-[#7C3AED] rounded-full mt-1" />
                {/* Blue comic sweat/energy droplets */}
                <div className="flex items-center gap-2 mt-3 text-[#38BDF8]" aria-hidden="true">
                  <span className="w-2 h-3.5 rounded-full border-2 border-[#38BDF8] -rotate-45" />
                  <span className="w-2 h-4 rounded-full border-2 border-[#38BDF8] -rotate-12" />
                  <span className="w-2 h-3.5 rounded-full border-2 border-[#38BDF8] rotate-12" />
                </div>
              </div>

              {/* 6 Interactive Neon Badges (Matches H, Ae, An, Ps, Blender, Pr icons) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-7 flex-1 max-w-3xl">
                {ARSENAL_PILLARS.map((pillar) => {
                  const isCurrent = activeCategory === pillar.categoryTarget;
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      onClick={() => handleCategoryClick(pillar.categoryTarget)}
                      className="group flex flex-col items-center text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B8FF01]"
                    >
                      <div
                        className="w-13 h-13 rounded-xl flex items-center justify-center font-sans font-extrabold text-lg transition-transform duration-150 group-hover:scale-110"
                        style={{
                          border: `2.5px solid ${isCurrent ? '#B8FF01' : pillar.borderColor}`,
                          color: isCurrent ? '#B8FF01' : pillar.textColor,
                          backgroundColor: pillar.bgGlow,
                        }}
                      >
                        {pillar.shortCode}
                      </div>
                      <span className="mt-2.5 text-xs font-semibold text-zinc-200 group-hover:text-[#B8FF01] transition-colors leading-tight">
                        {pillar.name}
                      </span>
                      <span className="text-[11px] text-zinc-400 leading-tight mt-0.5">
                        {pillar.sublabel}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Large Purple Loop Doodle */}
              <div className="hidden xl:block shrink-0">
                <PurpleLoopDoodle className="w-24 h-22" />
              </div>
            </div>
          </section>

          {/* -----------------------------------------------------------------
              5. SECCIÓN DE TENDENCIAS Y PRÓXIMOS ESTRENOS (About Me / Manga Panel)
             ----------------------------------------------------------------- */}
          <section id="tendencias" className="relative px-6 sm:px-12 py-10 sm:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left: High-Contrast Lime-Green & Black Inked Manga Panel */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border-2 border-[#B8FF01]/40 shadow-[0_12px_36px_rgba(184,255,1,0.12)] h-[240px] sm:h-[265px]">
                  <MangaManifestoArtSVG />
                </div>
              </div>

              {/* Right: Tendencias, Radar de Estrenos & Imperio Geek Manifesto */}
              <div className="lg:col-span-7 relative">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h2 className="font-comic text-3xl sm:text-4xl text-white tracking-wider uppercase">
                    {activeBottomTab === 'estrenos'
                      ? 'TENDENCIAS & PRÓXIMOS ESTRENOS'
                      : 'ADN DE IMPERIO GEEK'}
                  </h2>

                  {/* Interactive Switcher between Upcoming Releases & About Manifesto */}
                  <div className="flex items-center gap-1 p-1 bg-[#0B0C12] border border-[#232536] rounded-xl">
                    <button
                      type="button"
                      onClick={() => setActiveBottomTab('estrenos')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        activeBottomTab === 'estrenos'
                          ? 'bg-[#B8FF01] text-[#08080C]'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Calendario Estrenos
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveBottomTab('manifiesto')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        activeBottomTab === 'manifiesto'
                          ? 'bg-[#B8FF01] text-[#08080C]'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Sobre el Imperio
                    </button>
                  </div>
                </div>

                {activeBottomTab === 'estrenos' ? (
                  <div className="space-y-2.5">
                    {UPCOMING_RELEASES.map((rel) => {
                      const reminded = remindedReleaseIds.includes(rel.id);
                      return (
                        <div
                          key={rel.id}
                          className="p-3.5 rounded-2xl bg-[#0B0C12] border border-[#222434] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 text-xs text-zinc-400">
                              <span className="font-mono-tabular font-bold text-[#B8FF01]">
                                {rel.releaseDate}
                              </span>
                              <span aria-hidden="true">·</span>
                              <span>Faltan {rel.daysLeft} días</span>
                              <span aria-hidden="true">·</span>
                              <span>{rel.category}</span>
                            </div>
                            <h3 className="text-sm font-bold text-white truncate mt-0.5">
                              {rel.title}
                            </h3>
                            <p className="text-xs text-zinc-400 truncate">
                              {rel.platformOrFormat} — {rel.hypeNote}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleToggleReminder(rel.id)}
                            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                              reminded
                                ? 'bg-[#7C3AED] text-white'
                                : 'bg-[#181A28] text-zinc-300 hover:bg-[#23263A] hover:text-white'
                            }`}
                          >
                            {reminded ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-[#B8FF01]" />
                                <span>Alerta activa</span>
                              </>
                            ) : (
                              <>
                                <Bell className="w-3.5 h-3.5" />
                                <span>Recordarme</span>
                              </>
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="space-y-4 max-w-xl">
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      Somos <strong className="text-white">Imperio Geek</strong>, un colectivo de
                      críticos de cine, animadores 2D, coleccionistas de cómics y entusiastas del
                      hardware que transforma las noticias de la cultura pop en experiencias visuales
                      con personalidad propia.
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Nacimos para contar historias que entretienen, conectan a la comunidad gamer y
                      celebran el arte detrás de cada videojuego, serie animada y viñeta.
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveBottomTab('estrenos')}
                      className="inline-flex items-center gap-2.5 text-sm font-bold text-[#B8FF01] hover:underline cursor-pointer"
                    >
                      <span>Volver al radar de próximos estrenos</span>
                      <span className="w-6 h-6 rounded-full border border-[#B8FF01] flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </div>
                )}

                {/* Purple Squiggle Doodle on the Right (Matches "ABOUT ME" right side) */}
                <svg
                  viewBox="0 0 180 54"
                  fill="none"
                  className="hidden xl:block w-36 h-11 mt-4 ml-auto"
                  aria-hidden="true"
                >
                  <path
                    d="M6 42C24 18 42 8 38 28C34 48 68 12 76 26C84 40 118 14 128 24C138 34 158 20 174 22"
                    stroke="#7C3AED"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path d="M58 50L155 40" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </section>
        </div>

        {/* ===================================================================
            6. FOOTER CON REDES SOCIALES, NEWSLETTER Y ENLACES
           =================================================================== */}
        <footer className="relative mt-10 pt-8 pb-12 px-4 sm:px-8 bg-[#0E0F17] border border-[#222433] rounded-[32px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: "VIVAMOS ALGO ¡ÉPICO!" with Hand-Drawn Purple Oval around "¡ÉPICO!" */}
            <div className="lg:col-span-4 lg:border-r lg:border-[#232536] lg:pr-6">
              <p className="font-comic text-3xl sm:text-4xl text-white tracking-wider leading-tight uppercase">
                VIVAMOS EL HYPE{' '}
                <span className="relative inline-block px-3 py-0.5 ml-1 text-[#B8FF01]">
                  ¡ÉPICO!
                  {/* Hand-drawn purple comic circle around ¡ÉPICO! */}
                  <svg
                    viewBox="0 0 150 56"
                    fill="none"
                    className="absolute inset-0 w-full h-full -m-0.5 pointer-events-none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 28C10 10 48 4 86 6C128 8 146 18 144 32C142 46 105 52 64 50C25 48 8 40 16 22"
                      stroke="#7C3AED"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </p>
              <p className="text-xs text-zinc-400 mt-2">
                © 2026 Imperio Geek. Todos los derechos reservados en este y otros multiversos.
              </p>
            </div>

            {/* Center: Contact Details + Newsletter Input */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-zinc-300">
                <a
                  href="mailto:hola@imperiogeek.com"
                  className="inline-flex items-center gap-2 hover:text-[#B8FF01] transition-colors"
                >
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span>hola@imperiogeek.com</span>
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-zinc-400" />
                  <span>Comunidad Hispana &amp; Global</span>
                </span>
              </div>

              {/* Interactive Newsletter Subscription */}
              <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2" noValidate>
                <label htmlFor="footer-email" className="sr-only">
                  Tu correo electrónico para el boletín geek
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (newsletterStatus !== 'idle') setNewsletterStatus('idle');
                  }}
                  placeholder="Tu email para el boletín semanal..."
                  className="flex-1 min-w-0 px-3.5 py-2 rounded-xl bg-[#161825] border border-[#2A2D42] text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#B8FF01]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#B8FF01] hover:bg-[#c8ff32] text-[#08080C] font-bold text-xs transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  Unirme
                </button>
              </form>

              {newsletterStatus === 'error' && (
                <p className="text-xs text-rose-400">
                  Por favor ingresa un correo electrónico válido (ej. alex@geek.com).
                </p>
              )}
              {newsletterStatus === 'success' && (
                <p className="text-xs text-[#B8FF01] font-medium">
                  ¡Bienvenido al escuadrón! Recibirás el próximo resumen geek en tu bandeja.
                </p>
              )}
            </div>

            {/* Right: Social Media Circular Icons */}
            <div className="lg:col-span-4 flex items-center lg:justify-end gap-3 pr-20 sm:pr-28">
              {[
                { label: 'Instagram de Imperio Geek', icon: Instagram, href: '#inicio' },
                { label: 'Comunidad Gaming & Discord', icon: Gamepad2, href: '#universo' },
                { label: 'Canal de YouTube Imperio Geek', icon: Youtube, href: '#destacado' },
                { label: 'Compartir Imperio Geek', icon: Share2, href: '#tendencias' },
              ].map((soc) => {
                const IconComponent = soc.icon;
                return (
                  <a
                    key={soc.label}
                    href={soc.href}
                    aria-label={soc.label}
                    className="w-11 h-11 rounded-full bg-[#171926] border border-[#292C40] hover:border-[#B8FF01] hover:bg-[#7C3AED] text-white flex items-center justify-center transition-colors shrink-0"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Cute Blue Cartoon Peace Mascot Peeking from Bottom-Right Corner (Matches reference image) */}
          <BluePeaceMascot className="w-28 h-32 sm:w-32 sm:h-36 absolute -bottom-3 -right-2 z-20 pointer-events-none" />
        </footer>
      </main>

      {/* =====================================================================
          INTERACTIVE MODALS & DRAWERS
         ===================================================================== */}
      <ShowreelModal isOpen={isShowreelOpen} onClose={() => setIsShowreelOpen(false)} />

      <CardDetailModal
        item={selectedCard}
        onClose={() => setSelectedCard(null)}
        isSaved={selectedCard ? savedCardIds.includes(selectedCard.id) : false}
        onToggleSave={handleToggleSaveCard}
      />

      <MenuDrawerModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => setActiveCategory(cat)}
        onSelectCard={(item) => setSelectedCard(item)}
        savedIds={savedCardIds}
      />
    </div>
  );
}
