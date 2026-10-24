import React, { useState, useEffect } from 'react';
import {
  X,
  Play,
  Pause,
  Bookmark,
  Check,
  Search,
  ArrowUpRight,
  Film,
  Calendar,
  Volume2,
  VolumeX,
} from 'lucide-react';
import {
  CategoryKey,
  FEATURED_SHOWREEL,
  GeekCardItem,
  NAV_LINKS,
  UNIVERSE_ITEMS,
} from '../data/geekContent';
import { CardIllustrationSVG, ShowreelSynthwaveArtSVG } from './ComicIllustrations';
import { comicAudio } from '../utils/comicAudio';

/* ==========================================================================
   1. SHOWREEL / ÚLTIMA NOVEDAD LIGHTBOX MODAL
   ========================================================================== */

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeChapterIdx, setActiveChapterIdx] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeChapter = FEATURED_SHOWREEL.chapters[activeChapterIdx];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md backdrop-blur-safari overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="showreel-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#13141C] border border-[#27273A] rounded-3xl overflow-hidden shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#232433]">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Film className="w-4 h-4 text-[#B8FF01]" />
            <span>{FEATURED_SHOWREEL.kicker}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-tabular">{FEATURED_SHOWREEL.duration}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar reproductor"
            className="w-10 h-10 rounded-full bg-[#1E202E] hover:bg-[#7C3AED] text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive Visual Stage */}
        <div className="relative aspect-video w-full bg-[#09090F] overflow-hidden">
          <ShowreelSynthwaveArtSVG idPrefix="modal" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090F] via-black/30 to-transparent" />

          {/* Overlay Player Controls */}
          <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono-tabular text-[#B8FF01] mb-1">
                CAPÍTULO ACTIVO ({activeChapter.time})
              </p>
              <h3 id="showreel-modal-title" className="font-comic text-2xl sm:text-3xl text-white tracking-wide">
                {activeChapter.label}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B8FF01] text-[#08080C] font-bold text-sm hover:bg-[#c9ff33] transition-transform active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlaying ? 'Pausar transmisión' : 'Reanudar transmisión'}</span>
            </button>
          </div>
        </div>

        {/* Chapters & Editorial Notes */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7 space-y-3">
            <h4 className="font-comic text-xl text-white tracking-wide">RESUMEN DEL ESPECIAL</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">{FEATURED_SHOWREEL.fullStory}</p>
            <p className="text-xs text-zinc-400 pt-1">
              Dirección editorial: {FEATURED_SHOWREEL.director}
            </p>
          </div>

          <div className="md:col-span-5 space-y-2">
            <h4 className="font-comic text-xl text-white tracking-wide">SELECCIONAR CAPÍTULO</h4>
            <div className="space-y-1.5">
              {FEATURED_SHOWREEL.chapters.map((chap, idx) => {
                const active = idx === activeChapterIdx;
                return (
                  <button
                    key={chap.time}
                    type="button"
                    onClick={() => {
                      comicAudio.playComicPop();
                      setActiveChapterIdx(idx);
                      setIsPlaying(true);
                    }}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-between gap-3 cursor-pointer ${
                      active
                        ? 'bg-[#7C3AED] text-white font-semibold'
                        : 'bg-[#1A1C29] text-zinc-300 hover:bg-[#242738]'
                    }`}
                  >
                    <span className="truncate">{chap.label}</span>
                    <span className="font-mono-tabular shrink-0 text-[11px] opacity-85">{chap.time}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   2. ARTICLE / CARD DETAIL MODAL
   ========================================================================== */

interface CardDetailModalProps {
  item: GeekCardItem | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const CardDetailModal: React.FC<CardDetailModalProps> = ({
  item,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md backdrop-blur-safari"
      role="dialog"
      aria-modal="true"
      aria-labelledby="card-detail-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#13141C] border border-[#27273A] rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Artwork Header */}
        <div className="relative h-56 sm:h-64 w-full shrink-0 overflow-hidden bg-[#09090F]">
          <CardIllustrationSVG id={item.illustrationId} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13141C] via-black/30 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar artículo"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 hover:bg-[#7C3AED] text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 text-xs text-[#B8FF01] font-medium mb-1">
              <span>{item.category}</span>
              <span aria-hidden="true">·</span>
              <span>{item.releaseInfo}</span>
              <span aria-hidden="true">·</span>
              <span>{item.readTime}</span>
            </div>
            <h3 id="card-detail-title" className="font-comic text-3xl sm:text-4xl text-white tracking-wide">
              {item.title}
            </h3>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#232433]">
            <div className="text-xs text-zinc-400">
              <span>Estudio / Autor: </span>
              <strong className="text-white">{item.creatorOrStudio}</strong>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>{item.subtitle}</span>
            </div>

            <button
              type="button"
              onClick={() => onToggleSave(item.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                isSaved
                  ? 'bg-[#B8FF01] text-[#08080C]'
                  : 'bg-[#1E202E] text-white hover:bg-[#7C3AED]'
              }`}
            >
              {isSaved ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
              <span>{isSaved ? 'Guardado en Mi Lista' : 'Guardar en Mi Lista'}</span>
            </button>
          </div>

          <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">{item.summary}</p>

          <div className="bg-[#191B26] rounded-2xl p-4 border border-[#27293A]">
            <p className="text-sm italic text-[#B8FF01]">{item.featuredQuote}</p>
          </div>

          <div>
            <h4 className="font-comic text-xl text-white tracking-wide mb-2.5">
              CLAVES DE LA COBERTURA IMPERIO GEEK
            </h4>
            <ul className="space-y-2">
              {item.highlights.map((point, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <span className="font-mono-tabular text-xs font-bold text-[#B8FF01] mt-0.5">
                    0{index + 1}.
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   3. INTERACTIVE MENU & ARCHIVE SEARCH DRAWER
   ========================================================================== */

interface MenuDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: CategoryKey;
  onSelectCategory: (cat: CategoryKey) => void;
  onSelectCard: (item: GeekCardItem) => void;
  savedIds: string[];
  isAudioMuted: boolean;
  onToggleAudioMute: () => void;
}

export const MenuDrawerModal: React.FC<MenuDrawerModalProps> = ({
  isOpen,
  onClose,
  activeCategory,
  onSelectCategory,
  onSelectCard,
  savedIds,
  isAudioMuted,
  onToggleAudioMute,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredItems = UNIVERSE_ITEMS.filter((item) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  const savedItems = UNIVERSE_ITEMS.filter((i) => savedIds.includes(i.id));

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm backdrop-blur-safari"
      role="dialog"
      aria-modal="true"
      aria-label="Menú principal y buscador de Imperio Geek"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#12131C] border-l border-[#26283B] h-full p-6 overflow-y-auto flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#232536]">
            <span className="font-comic text-2xl text-white tracking-wider">
              IMPERIO GEEK<span className="text-[#B8FF01]">.</span>
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar menú"
              className="w-10 h-10 rounded-full bg-[#1D1F2E] hover:bg-[#7C3AED] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Instant Search Input */}
          <div>
            <label htmlFor="geek-search" className="block text-xs text-zinc-400 mb-2">
              Buscar películas, series, cómics o hardware
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="geek-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ej. Kronos, IMAX, Mecha, OLED..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#191B28] border border-[#2C2F45] text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#B8FF01]"
              />
            </div>
          </div>

          {/* Navigation Categories */}
          <div>
            <p className="text-xs text-zinc-400 mb-2.5">Explorar por sección</p>
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((nav) => {
                const isSelected = activeCategory === nav.category && nav.label !== 'Inicio';
                return (
                  <a
                    key={nav.label}
                    href={nav.href}
                    onClick={() => {
                      onSelectCategory(nav.category);
                      onClose();
                    }}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                      isSelected
                        ? 'bg-[#B8FF01] text-[#08080C]'
                        : 'bg-[#191B28] text-zinc-200 hover:bg-[#7C3AED] hover:text-white'
                    }`}
                  >
                    <span>{nav.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Saved List ("Mi Lista Geek") */}
          {savedItems.length > 0 && (
            <div>
              <p className="text-xs text-[#B8FF01] mb-2">
                Guardados en Mi Lista ({savedItems.length})
              </p>
              <div className="space-y-2">
                {savedItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      onSelectCard(item);
                      onClose();
                    }}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl bg-[#1A1C2B] hover:bg-[#24273B] border border-[#2E3148] flex items-center justify-between gap-2 cursor-pointer"
                  >
                    <div>
                      <p className="font-comic text-sm text-white tracking-wide">{item.title}</p>
                      <p className="text-[11px] text-zinc-400">{item.category} · {item.subtitle}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#B8FF01] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Search Results */}
          <div>
            <p className="text-xs text-zinc-400 mb-2">
              {searchQuery ? `Resultados (${filteredItems.length})` : 'Destacados del archivo'}
            </p>
            <div className="space-y-2">
              {filteredItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onSelectCard(item);
                    onClose();
                  }}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl bg-[#181926] hover:bg-[#212334] flex items-center justify-between gap-3 transition-colors cursor-pointer"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white truncate">{item.title}</p>
                    <p className="text-[11px] text-zinc-400 truncate">
                      {item.category} · {item.releaseInfo}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Info & Audio FX Toggle inside Drawer */}
        <div className="pt-5 border-t border-[#232536] mt-6 space-y-3">
          <button
            type="button"
            onClick={onToggleAudioMute}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#181A28] hover:bg-[#222538] border border-[#2C2F45] flex items-center justify-between text-xs font-semibold text-white transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2">
              {isAudioMuted ? (
                <VolumeX className="w-4 h-4 text-zinc-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#B8FF01]" />
              )}
              <span>Efectos Sonoros Cómic (Web Audio)</span>
            </span>
            <span
              className={`font-mono-tabular text-[11px] font-bold ${
                isAudioMuted ? 'text-zinc-400' : 'text-[#B8FF01]'
              }`}
            >
              {isAudioMuted ? 'SILENCIADO' : 'ACTIVO'}
            </span>
          </button>

          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>Edición Octubre 2026</span>
            </span>
            <a
              href="#tendencias"
              onClick={onClose}
              className="text-[#B8FF01] hover:underline font-medium"
            >
              Ver calendario →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
