import React from 'react';
import { IllustrationId } from '../data/geekContent';

/* ==========================================================================
   1. HAND-DRAWN COMIC DOODLES, STICKERS, STARS & LIGHTNING BOLTS
   ========================================================================== */

export const CrownDoodle: React.FC<{ className?: string }> = ({ className = 'w-12 h-10' }) => (
  <svg viewBox="0 0 64 52" fill="none" className={className} aria-hidden="true">
    <path
      d="M8 40L6 14L22 28L33 8L43 28L58 13L54 40H8Z"
      stroke="#D4FF00"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 46C22 44 42 43 56 45"
      stroke="#D4FF00"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

export const BrushUnderline: React.FC<{ className?: string }> = ({ className = 'w-full h-6' }) => (
  <svg viewBox="0 0 420 28" fill="none" className={className} preserveAspectRatio="none" aria-hidden="true">
    <path
      d="M6 19C98 8 245 4 412 6C355 11 180 18 28 24"
      stroke="#B8FF01"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M45 25C160 17 295 13 398 13"
      stroke="#B8FF01"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const CurvedArrowLeft: React.FC<{ className?: string }> = ({ className = 'w-12 h-24' }) => (
  <svg viewBox="0 0 56 105" fill="none" className={className} aria-hidden="true">
    <path
      d="M38 6C10 22 4 64 34 92"
      stroke="#FFFFFF"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <path
      d="M20 93L36 94L32 78"
      stroke="#FFFFFF"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SmallCurvedArrow: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
    <path
      d="M8 8C10 22 18 29 32 30"
      stroke="#FFFFFF"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <path
      d="M25 23L33 30L25 36"
      stroke="#FFFFFF"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SmileySticker: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden="true">
    <circle
      cx="28"
      cy="28"
      r="20"
      stroke="#D4FF00"
      strokeWidth="2.8"
      strokeDasharray="140 8"
    />
    <circle cx="22" cy="23" r="2.2" fill="#D4FF00" />
    <circle cx="33" cy="21" r="2.2" fill="#D4FF00" />
    <path
      d="M19 31C23 37 33 36 37 28"
      stroke="#D4FF00"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <path
      d="M26 54L52 43"
      stroke="#D4FF00"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  </svg>
);

export const LightningSticker: React.FC<{ className?: string }> = ({ className = 'w-10 h-14' }) => (
  <svg viewBox="0 0 48 64" fill="none" className={className} aria-hidden="true">
    <path
      d="M28 4L8 34H24L16 60L42 26H25L28 4Z"
      fill="#B8FF01"
      stroke="#08080C"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const StarOutlinePurple: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
    <path
      d="M20 4L24.5 14.5L36 16L27.5 24L29.8 35.5L20 29.8L10.2 35.5L12.5 24L4 16L15.5 14.5L20 4Z"
      stroke="#8B5CF6"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PurpleSquiggle: React.FC<{ className?: string }> = ({ className = 'w-14 h-5' }) => (
  <svg viewBox="0 0 68 20" fill="none" className={className} aria-hidden="true">
    <path
      d="M3 14C12 4 18 4 25 12C32 20 39 6 49 9C56 11 60 8 65 5"
      stroke="#7C3AED"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

export const PurpleLoopDoodle: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 110 105" fill="none" className={className} aria-hidden="true">
    <path
      d="M25 94C8 72 8 34 25 32C42 30 48 80 34 84C20 88 34 28 58 32C82 36 78 88 64 84C50 80 68 42 94 28C104 22 102 8 88 4"
      stroke="#7C3AED"
      strokeWidth="4.5"
      strokeLinecap="round"
    />
  </svg>
);

export const RabbitStickerDoodle: React.FC<{ className?: string }> = ({ className = 'w-14 h-16' }) => (
  <svg viewBox="0 0 64 72" fill="none" className={className} aria-hidden="true">
    <path
      d="M20 30C15 14 18 6 23 8C27 10 26 22 27 28C31 27 36 27 40 29C42 18 46 8 51 11C55 14 50 26 46 33C54 39 55 52 46 59C36 66 20 65 13 56C6 47 11 35 20 30Z"
      stroke="#FB7185"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="25" cy="43" r="2.2" fill="#FB7185" />
    <circle cx="39" cy="44" r="2.2" fill="#FB7185" />
    <path d="M28 51C31 54 35 54 38 51" stroke="#FB7185" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const BluePeaceMascot: React.FC<{ className?: string }> = ({ className = 'w-32 h-36' }) => (
  <svg viewBox="0 0 150 165" fill="none" className={className} aria-hidden="true">
    {/* Peace fingers / antennae */}
    <path
      d="M52 68L34 22C31 14 39 9 44 16L64 56"
      fill="#38BDF8"
      stroke="#08080C"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M66 58L58 12C57 4 66 2 70 10L78 56"
      fill="#38BDF8"
      stroke="#08080C"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Cute body peeking from bottom right */}
    <circle cx="95" cy="120" r="46" fill="#38BDF8" stroke="#08080C" strokeWidth="3.5" />
    {/* Eyes */}
    <circle cx="80" cy="103" r="4" fill="#08080C" />
    <circle cx="104" cy="98" r="4" fill="#08080C" />
    {/* Big cartoon grin with tooth */}
    <path
      d="M75 118C82 135 110 132 115 112L75 118Z"
      fill="#08080C"
      stroke="#08080C"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path d="M88 117L90 124L97 123L96 116" fill="#FFFFFF" />
    <path d="M86 129C92 132 101 130 105 124" stroke="#FB7185" strokeWidth="4" strokeLinecap="round" />
    {/* Floating heart doodle */}
    <path
      d="M118 48C115 41 107 42 108 50C109 57 118 63 118 63C118 63 127 56 128 48C129 41 121 41 118 48Z"
      stroke="#38BDF8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ==========================================================================
   2. HERO CHARACTER ILLUSTRATION (Geek Creator in Electric Violet Hoodie)
   ========================================================================== */

interface HeroGeekCharacterProps {
  speechText: string;
  onCycleSpeech: () => void;
}

export const HeroGeekCharacterSVG: React.FC<HeroGeekCharacterProps> = ({
  speechText,
  onCycleSpeech,
}) => {
  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none">
      {/* Interactive Sky-Blue Comic Speech Bubble (Top-Left of Character) */}
      <button
        type="button"
        onClick={onCycleSpeech}
        title="Haz clic para cambiar el mensaje geek"
        className="group absolute -top-4 left-0 sm:left-4 z-20 cursor-pointer text-left transition-transform duration-150 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#B8FF01]"
      >
        <div className="relative bg-[#38BDF8] text-[#08080C] px-5 py-4 rounded-[32px] border-[3px] border-[#08080C] shadow-[4px_4px_0px_#7C3AED] max-w-[200px] -rotate-6">
          <p className="font-comic text-base sm:text-lg leading-tight tracking-wide text-center uppercase">
            {speechText}
          </p>
          <span className="block text-[10px] font-bold text-[#08080C]/75 text-center mt-1 group-hover:underline">
            Clic para otro grito ↻
          </span>
          {/* Speech bubble tail */}
          <svg
            viewBox="0 0 32 32"
            className="w-7 h-7 absolute -bottom-5 right-7 text-[#38BDF8]"
            aria-hidden="true"
          >
            <path d="M4 0 L24 26 L28 0 Z" fill="currentColor" stroke="#08080C" strokeWidth="3" />
          </svg>
        </div>
      </button>

      {/* Main Character Cartoon Vector Illustration */}
      <svg
        viewBox="0 0 560 530"
        fill="none"
        className="w-full h-auto drop-shadow-[0_18px_36px_rgba(124,58,237,0.28)]"
        role="img"
        aria-label="Personaje geek ilustrado saludando con sudadera violeta eléctrica, claqueta de cine y control gamer"
      >
        {/* Right-side warm coral/orange comic halftone splash (like reference image) */}
        <path
          d="M475 75C520 90 555 150 548 220C540 290 500 330 460 315C420 300 415 235 430 170C445 105 440 62 475 75Z"
          fill="#F97316"
          opacity="0.92"
        />
        <circle cx="515" cy="135" r="4" fill="#08080C" opacity="0.35" />
        <circle cx="495" cy="165" r="3" fill="#08080C" opacity="0.35" />
        <circle cx="525" cy="195" r="5" fill="#08080C" opacity="0.35" />

        {/* Yellow comic star top-right */}
        <path
          d="M442 22L451 40L471 42L456 56L460 75L442 65L424 75L428 56L413 42L433 40L442 22Z"
          fill="#FACC15"
          stroke="#08080C"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Blue spiral squiggle right */}
        <path
          d="M455 102C482 95 505 112 492 128C480 142 462 128 478 118C494 108 518 130 502 156"
          stroke="#38BDF8"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* White doodle squiggle top-right */}
        <path
          d="M482 26C488 45 505 42 515 58C522 68 532 68 540 65"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Coral motion arcs near waving hand */}
        <path d="M122 214C112 225 114 242 126 250" stroke="#FB7185" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M108 222C98 232 100 245 110 253" stroke="#FB7185" strokeWidth="2.8" strokeLinecap="round" />

        {/* ELECTRIC VIOLET HOODIE & TORSO */}
        {/* Hood behind neck */}
        <path
          d="M285 225C315 198 385 180 422 204C452 224 445 268 415 282"
          fill="#5B21B6"
          stroke="#08080C"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        {/* Main Hoodie Body & Waving Left/Right Arms */}
        <path
          d="M170 352L232 428C248 446 274 445 292 425L326 385L352 488L532 455L546 315C532 272 486 244 432 238C392 234 335 252 308 282L284 338L206 272L170 352Z"
          fill="#6D28D9"
          stroke="#08080C"
          strokeWidth="5.5"
          strokeLinejoin="round"
        />

        {/* Hoodie shading & folds */}
        <path
          d="M328 312C340 355 352 415 366 468"
          stroke="#08080C"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M438 288C456 325 485 365 524 398"
          stroke="#4C1D95"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* WAVING HAND (Cartoon 5-finger open palm like reference image) */}
        <g>
          <path
            d="M198 302L152 268C144 262 148 250 158 254L188 272L152 214C146 204 158 196 166 206L198 254L178 192C174 180 188 175 194 188L214 248L208 188C207 176 221 175 224 188L232 252L248 218C253 208 266 214 261 226L238 286C232 300 214 312 198 302Z"
            fill="#FDBA74"
            stroke="#08080C"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          {/* Palm crease */}
          <path
            d="M196 272C210 270 222 276 226 288"
            stroke="#C2410C"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Hoodie cuff */}
          <path
            d="M172 325L218 292L234 314L188 348Z"
            fill="#5B21B6"
            stroke="#08080C"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
        </g>

        {/* NECK & WHITE INNER TEE */}
        <path
          d="M324 235L336 285L378 272L364 222Z"
          fill="#FDBA74"
          stroke="#08080C"
          strokeWidth="4.5"
        />
        <path
          d="M332 272C348 285 368 282 382 266L376 298L334 302Z"
          fill="#FFFFFF"
          stroke="#08080C"
          strokeWidth="4"
        />

        {/* CHARACTER HEAD (Tilted Expressive Cartoon Face) */}
        <g transform="rotate(-10 342 185)">
          {/* Left & Right Ears + Piercing */}
          <circle cx="272" cy="196" r="19" fill="#FB923C" stroke="#08080C" strokeWidth="4.5" />
          <path d="M268 192C274 190 276 198 270 202" stroke="#9A3412" strokeWidth="3" strokeLinecap="round" />

          <circle cx="406" cy="188" r="20" fill="#FB923C" stroke="#08080C" strokeWidth="4.5" />
          <circle cx="409" cy="208" r="5" stroke="#FFFFFF" strokeWidth="2.5" />

          {/* Face Shape */}
          <path
            d="M278 145C276 198 282 248 338 252C394 256 406 208 402 145C398 102 280 102 278 145Z"
            fill="#FDBA74"
            stroke="#08080C"
            strokeWidth="5"
          />

          {/* Warm cheek shading */}
          <ellipse cx="302" cy="202" rx="14" ry="8" fill="#F97316" opacity="0.45" />
          <ellipse cx="384" cy="196" rx="14" ry="8" fill="#F97316" opacity="0.45" />

          {/* Thick Expressive Eyebrows */}
          <path d="M292 152C304 142 320 144 328 152" stroke="#08080C" strokeWidth="7" strokeLinecap="round" />
          <path d="M352 144C366 135 384 138 392 148" stroke="#08080C" strokeWidth="7" strokeLinecap="round" />

          {/* Left Eye (Playful Wink) */}
          <path
            d="M296 176C306 165 320 166 328 176"
            stroke="#08080C"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Right Eye (Big Cartoon Eye with Specular Highlight) */}
          <ellipse cx="368" cy="172" rx="15" ry="18" fill="#FFFFFF" stroke="#08080C" strokeWidth="4" />
          <ellipse cx="365" cy="173" rx="9" ry="12" fill="#08080C" />
          <circle cx="369" cy="167" r="4" fill="#FFFFFF" />

          {/* Cute Cartoon Nose */}
          <path
            d="M338 174C335 186 333 192 344 194"
            stroke="#08080C"
            strokeWidth="4.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Big Joyful Open Cartoon Smile */}
          <path
            d="M308 205C325 206 362 204 378 198C382 226 360 242 338 240C316 238 305 222 308 205Z"
            fill="#7F1D1D"
            stroke="#08080C"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          {/* Upper Teeth */}
          <path
            d="M311 206C330 207 358 205 375 200L373 212C354 216 328 217 312 214Z"
            fill="#FFFFFF"
          />
          {/* Tongue */}
          <path
            d="M324 228C334 218 356 218 366 230C356 239 334 240 324 228Z"
            fill="#FB7185"
          />
        </g>

        {/* FLUFFY CLOUDY BLACK CARTOON HAIR WITH WHITE COMIC RIM OUTLINE */}
        <path
          d="M262 162C236 146 238 106 268 98C262 66 298 42 332 58C354 32 404 42 406 78C434 78 446 112 426 134C440 150 430 176 410 175C405 142 385 128 355 134C325 140 302 125 282 152C276 162 272 172 262 162Z"
          fill="#08080C"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* LIME-GREEN HOODIE DRAWSTRINGS (#B8FF01) */}
        <path
          d="M338 295L348 408"
          stroke="#B8FF01"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <path
          d="M378 286L392 386"
          stroke="#B8FF01"
          strokeWidth="5.5"
          strokeLinecap="round"
        />

        {/* CINEMA CLAPPERBOARD + GEEK BADGE (Bottom-Right Foreground like Reference Image) */}
        <g transform="rotate(-16 420 435)">
          {/* Clapperboard top sticks */}
          <rect
            x="365"
            y="385"
            width="110"
            height="20"
            rx="4"
            fill="#18181B"
            stroke="#08080C"
            strokeWidth="4"
          />
          <path d="M382 385L396 405H414L400 385H382Z" fill="#FFFFFF" />
          <path d="M422 385L436 405H454L440 385H422Z" fill="#FFFFFF" />
          {/* Clapperboard body */}
          <rect
            x="365"
            y="406"
            width="112"
            height="78"
            rx="10"
            fill="#14141B"
            stroke="#08080C"
            strokeWidth="4.5"
          />
          {/* Play triangle inside clapperboard */}
          <path d="M412 430L438 445L412 460V430Z" fill="#FFFFFF" />
        </g>

        {/* Small floating cyan star */}
        <path
          d="M276 264L280 272L289 273L282 279L284 288L276 283L268 288L270 279L263 273L272 272L276 264Z"
          fill="#38BDF8"
        />
      </svg>
    </div>
  );
};

/* ==========================================================================
   3. SHOWREEL / FEATURED BANNER ILLUSTRATION (16:9 Neon Sunset Cityscape)
   ========================================================================== */

export const ShowreelSynthwaveArtSVG: React.FC = () => (
  <svg
    viewBox="0 0 800 340"
    fill="none"
    className="w-full h-full object-cover"
    role="img"
    aria-label="Ilustración panorámica de una metrópolis cyberpunk al atardecer con un explorador geek mirando el horizonte"
  >
    <defs>
      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1E1040" />
        <stop offset="55%" stopColor="#4C1D95" />
        <stop offset="100%" stopColor="#BE185D" />
      </linearGradient>
      <linearGradient id="sunGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FB7185" />
        <stop offset="100%" stopColor="#E11D48" />
      </linearGradient>
      <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3B0764" />
        <stop offset="100%" stopColor="#09090F" />
      </linearGradient>
    </defs>

    {/* Sky */}
    <rect width="800" height="340" fill="url(#skyGrad)" />

    {/* Stars */}
    <circle cx="95" cy="45" r="2" fill="#FFFFFF" opacity="0.7" />
    <circle cx="215" cy="30" r="1.5" fill="#FFFFFF" opacity="0.5" />
    <circle cx="480" cy="40" r="2.5" fill="#FDE047" opacity="0.8" />
    <circle cx="710" cy="52" r="2" fill="#FFFFFF" opacity="0.6" />

    {/* Giant Crimson Neon Sun */}
    <circle cx="565" cy="115" r="72" fill="url(#sunGrad)" />

    {/* Distant Skyline Silhouettes */}
    <g fill="#2E1065" opacity="0.85">
      <rect x="30" y="95" width="42" height="130" />
      <rect x="82" y="120" width="35" height="105" />
      <rect x="135" y="75" width="52" height="150" />
      <rect x="210" y="110" width="45" height="115" />
      <rect x="440" y="130" width="38" height="95" />
      <rect x="520" y="98" width="46" height="127" />
      <rect x="615" y="82" width="55" height="143" />
      <rect x="690" y="115" width="42" height="110" />
      <rect x="742" y="90" width="45" height="135" />
    </g>

    {/* Glowing building windows */}
    <g fill="#F43F5E" opacity="0.75">
      <rect x="148" y="92" width="6" height="14" />
      <rect x="162" y="112" width="6" height="18" />
      <rect x="532" y="118" width="8" height="12" />
      <rect x="630" y="102" width="10" height="6" />
      <rect x="630" y="116" width="10" height="6" />
      <rect x="755" y="108" width="8" height="22" />
    </g>

    {/* Neon River / Bay Water */}
    <rect x="0" y="220" width="800" height="120" fill="url(#waterGrad)" />

    {/* Pink/Crimson Sunset Reflections on Water */}
    <path
      d="M475 232H655L690 340H440L475 232Z"
      fill="#FB7185"
      opacity="0.35"
    />
    <rect x="495" y="242" width="140" height="5" rx="2.5" fill="#F43F5E" opacity="0.8" />
    <rect x="480" y="258" width="170" height="6" rx="3" fill="#FB7185" opacity="0.7" />
    <rect x="510" y="276" width="115" height="5" rx="2.5" fill="#F43F5E" opacity="0.6" />
    <rect x="465" y="296" width="185" height="7" rx="3.5" fill="#E11D48" opacity="0.5" />

    {/* Foreground Comic Rocks Left & Right */}
    <path d="M0 245L145 275L190 340H0V245Z" fill="#0F1020" stroke="#7C3AED" strokeWidth="2" />
    <path d="M800 235L645 280L595 340H800V235Z" fill="#0F1020" stroke="#7C3AED" strokeWidth="2" />

    {/* Protagonist Character with Backpack Looking at the Skyline (Center-Left like Reference Image) */}
    <g>
      {/* Torso & Jacket */}
      <path
        d="M235 340L252 208C268 192 315 192 332 210L352 340H235Z"
        fill="#1E293B"
        stroke="#08080C"
        strokeWidth="4"
      />
      {/* Cyan Hood Rim */}
      <path
        d="M254 206C275 188 312 188 332 208C318 220 272 222 254 206Z"
        fill="#0284C7"
        stroke="#08080C"
        strokeWidth="3.5"
      />
      {/* Adventurer Backpack */}
      <rect
        x="218"
        y="224"
        width="92"
        height="112"
        rx="18"
        fill="#4C1D95"
        stroke="#08080C"
        strokeWidth="4"
      />
      <rect
        x="230"
        y="240"
        width="68"
        height="28"
        rx="8"
        fill="#FB7185"
        opacity="0.35"
      />
      {/* Head & Fluffy Hair Silhouette with Sunset Rim Light */}
      <circle cx="292" cy="152" r="34" fill="#1E1B4B" stroke="#08080C" strokeWidth="4" />
      <path
        d="M255 155C242 132 260 105 288 108C308 94 338 112 332 138C344 150 335 172 318 172"
        fill="#09090F"
      />
      {/* Pink rim highlight on face profile */}
      <path
        d="M324 138C332 152 330 168 320 178"
        stroke="#FB7185"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

/* ==========================================================================
   4. FEATURED PROJECT / UNIVERSE CARD ILLUSTRATIONS (8 Custom Comic Scenes)
   ========================================================================== */

export const CardIllustrationSVG: React.FC<{ id: IllustrationId }> = ({ id }) => {
  switch (id) {
    /* 1. CYBER RUNNER (Matches "RUN!" Yellow Halftone Sprinting Character Card) */
    case 'cyber-runner':
      return (
        <svg viewBox="0 0 400 250" fill="none" className="w-full h-full object-cover" aria-hidden="true">
          <rect width="400" height="250" fill="#FACC15" />
          {/* White dynamic comic burst */}
          <path d="M0 35L400 0V195L0 140V35Z" fill="#FEF08A" />
          <path d="M35 20L380 65L330 215L15 170L35 20Z" fill="#FFFFFF" />
          {/* Speed lines */}
          <line x1="15" y1="85" x2="120" y2="65" stroke="#08080C" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="25" y1="125" x2="95" y2="112" stroke="#08080C" strokeWidth="3" strokeLinecap="round" />
          <line x1="290" y1="145" x2="385" y2="128" stroke="#08080C" strokeWidth="4" strokeLinecap="round" />
          {/* Sprinting Manga/Comic Character */}
          <g transform="translate(85, 25)">
            {/* Legs running */}
            <path d="M65 135L15 182L32 198L92 152L148 188L172 168L115 125" fill="#18181B" stroke="#08080C" strokeWidth="4" strokeLinejoin="round" />
            {/* White/Yellow Sneakers */}
            <rect x="2" y="175" width="28" height="16" rx="6" transform="rotate(-30 2 175)" fill="#FACC15" stroke="#08080C" strokeWidth="3.5" />
            <rect x="155" y="165" width="30" height="16" rx="6" transform="rotate(20 155 165)" fill="#FACC15" stroke="#08080C" strokeWidth="3.5" />
            {/* Black Jacket Torso */}
            <path d="M55 82L135 68L118 138L62 135Z" fill="#27272A" stroke="#08080C" strokeWidth="4" strokeLinejoin="round" />
            {/* Extended Arms */}
            <path d="M62 85L8 98L14 114L68 104" fill="#18181B" stroke="#08080C" strokeWidth="3.5" />
            <path d="M128 76L185 102L176 118L118 94" fill="#18181B" stroke="#08080C" strokeWidth="3.5" />
            {/* Head & Expressive Face */}
            <circle cx="118" cy="48" r="24" fill="#FFFFFF" stroke="#08080C" strokeWidth="4" />
            <path d="M92 42C88 18 115 8 135 20C152 18 158 42 142 52C128 36 105 36 92 42Z" fill="#08080C" />
            <circle cx="126" cy="48" r="3" fill="#08080C" />
            <path d="M118 58C124 63 132 62 135 56" stroke="#08080C" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      );

    /* 2. CRT DREAMER (Matches "DAYDREAMS" Warm Orange TV-Head Character Card) */
    case 'crt-dreamer':
      return (
        <svg viewBox="0 0 400 250" fill="none" className="w-full h-full object-cover" aria-hidden="true">
          <rect width="400" height="250" fill="#EA580C" />
          {/* Warm studio background panels */}
          <rect x="28" y="18" width="95" height="140" rx="6" fill="#C2410C" />
          <rect x="275" y="24" width="90" height="125" rx="6" fill="#9A3412" />
          {/* Cute Potted Plants Left & Right */}
          <g stroke="#08080C" strokeWidth="3">
            <ellipse cx="62" cy="145" rx="18" ry="10" fill="#15803D" />
            <ellipse cx="45" cy="118" rx="14" ry="8" fill="#16A34A" />
            <ellipse cx="338" cy="138" rx="18" ry="10" fill="#15803D" />
            <ellipse cx="355" cy="110" rx="15" ry="9" fill="#22C55E" />
          </g>
          {/* Character shoulders */}
          <path d="M122 250C128 195 158 178 200 178C242 178 272 195 278 250H122Z" fill="#09090F" stroke="#08080C" strokeWidth="4" />
          {/* Retro CRT Monitor Head */}
          <g transform="rotate(4 200 112)">
            <rect x="132" y="54" width="136" height="108" rx="22" fill="#3B82F6" stroke="#08080C" strokeWidth="5" />
            <rect x="148" y="68" width="104" height="80" rx="14" fill="#FFEDD5" stroke="#08080C" strokeWidth="4" />
            {/* Cute smiling face on screen */}
            <path d="M172 102C176 96 184 96 188 102" stroke="#08080C" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M212 102C216 96 224 96 228 102" stroke="#08080C" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="170" cy="114" r="6" fill="#FB7185" opacity="0.6" />
            <circle cx="230" cy="114" r="6" fill="#FB7185" opacity="0.6" />
            <path d="M192 114C197 121 205 121 210 114" stroke="#08080C" strokeWidth="3.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    /* 3. MULTIVERSE SIGNAL (Matches "LOST SIGNAL" Indigo/Crimson Sci-Fi Portal Card) */
    case 'multiverse-signal':
      return (
        <svg viewBox="0 0 400 250" fill="none" className="w-full h-full object-cover" aria-hidden="true">
          <rect width="400" height="250" fill="#1E1B4B" />
          {/* Diagonal crimson/violet energy beams */}
          <path d="M180 0L400 130V250L110 0H180Z" fill="#E11D48" opacity="0.85" />
          <path d="M260 0L400 85V165L195 0H260Z" fill="#7C3AED" opacity="0.8" />
          {/* Stars */}
          <path d="M35 42L41 55L55 57L45 67L47 81L35 74L23 81L25 67L15 57L29 55L35 42Z" fill="#F43F5E" />
          {/* Hero Character with Sword/Antenna Backpack */}
          <g transform="translate(95, 42)">
            {/* Flowing cape */}
            <path d="M65 95L5 195L145 208L118 98Z" fill="#312E81" stroke="#08080C" strokeWidth="4" />
            {/* Sword hilt on back */}
            <path d="M42 15L108 115" stroke="#08080C" strokeWidth="9" strokeLinecap="round" />
            <circle cx="95" cy="58" r="26" fill="#FDBA74" stroke="#08080C" strokeWidth="4" />
            {/* Hair */}
            <path d="M68 52C65 25 98 15 118 32C132 42 126 68 112 68C98 52 82 48 68 52Z" fill="#1E1B4B" stroke="#08080C" strokeWidth="3.5" />
            <circle cx="105" cy="58" r="3.5" fill="#08080C" />
          </g>
        </svg>
      );

    /* 4. MECHA FROG (Matches "GROOVY TUNES" Lime Frog with Gaming Headphones Card) */
    case 'mecha-frog':
      return (
        <svg viewBox="0 0 400 250" fill="none" className="w-full h-full object-cover" aria-hidden="true">
          <rect width="400" height="250" fill="#065F46" />
          {/* Glowing aura */}
          <circle cx="200" cy="145" r="110" fill="#10B981" opacity="0.35" />
          {/* Floating Music Notes */}
          <text x="45" y="75" fill="#FACC15" fontSize="34" fontWeight="bold">♪</text>
          <text x="325" y="70" fill="#FFFFFF" fontSize="36" fontWeight="bold">♫</text>
          <text x="335" y="165" fill="#FB7185" fontSize="30" fontWeight="bold">♪</text>
          {/* Headphone Band */}
          <path d="M108 135C108 62 292 62 292 135" stroke="#18181B" strokeWidth="16" strokeLinecap="round" />
          <path d="M118 115C132 68 268 68 282 115" stroke="#B8FF01" strokeWidth="4" strokeLinecap="round" />
          {/* Cute Chubby Lime Frog Body */}
          <path
            d="M112 250C102 182 128 112 200 112C272 112 298 182 288 250H112Z"
            fill="#A3E635"
            stroke="#08080C"
            strokeWidth="4.5"
          />
          {/* Frog Eyes */}
          <circle cx="162" cy="112" r="24" fill="#A3E635" stroke="#08080C" strokeWidth="4" />
          <circle cx="238" cy="112" r="24" fill="#A3E635" stroke="#08080C" strokeWidth="4" />
          <circle cx="162" cy="112" r="10" fill="#08080C" />
          <circle cx="238" cy="112" r="10" fill="#08080C" />
          <circle cx="165" cy="109" r="3.5" fill="#FFFFFF" />
          <circle cx="241" cy="109" r="3.5" fill="#FFFFFF" />
          {/* Cute smile */}
          <path d="M182 145C192 154 208 154 218 145" stroke="#08080C" strokeWidth="4" strokeLinecap="round" />
          {/* Headphone Ear Cups */}
          <rect x="88" y="110" width="32" height="58" rx="14" fill="#18181B" stroke="#08080C" strokeWidth="4" />
          <rect x="280" y="110" width="32" height="58" rx="14" fill="#18181B" stroke="#08080C" strokeWidth="4" />
          <rect x="95" y="122" width="8" height="34" rx="4" fill="#B8FF01" />
          <rect x="297" y="122" width="8" height="34" rx="4" fill="#B8FF01" />
        </svg>
      );

    /* 5. SPIDER NOIR / INK CHRONICLES */
    case 'spider-noir':
      return (
        <svg viewBox="0 0 400 250" fill="none" className="w-full h-full object-cover" aria-hidden="true">
          <rect width="400" height="250" fill="#991B1B" />
          <circle cx="300" cy="70" r="52" fill="#FEF08A" />
          {/* City gothic spires */}
          <path d="M0 250V110L55 65L110 110V250H0Z" fill="#09090F" />
          <path d="M285 250V95L340 45L400 95V250H285Z" fill="#09090F" />
          {/* Comic web/grapple lines */}
          <line x1="200" y1="125" x2="380" y2="10" stroke="#FFFFFF" strokeWidth="3" />
          {/* Noir Masked Hero */}
          <circle cx="195" cy="128" r="36" fill="#09090F" stroke="#FFFFFF" strokeWidth="3.5" />
          <path d="M172 124L190 132L174 138Z" fill="#B8FF01" />
          <path d="M218 124L200 132L216 138Z" fill="#B8FF01" />
          <path d="M135 250C148 182 242 182 255 250H135Z" fill="#09090F" stroke="#FFFFFF" strokeWidth="3" />
        </svg>
      );

    /* 6. SHONEN ECLIPSE */
    case 'shonen-eclipse':
      return (
        <svg viewBox="0 0 400 250" fill="none" className="w-full h-full object-cover" aria-hidden="true">
          <rect width="400" height="250" fill="#3B0764" />
          {/* Eclipse Ring */}
          <circle cx="200" cy="115" r="78" fill="#09090F" stroke="#B8FF01" strokeWidth="8" />
          {/* Energy lightning */}
          <path d="M65 190L145 120L125 95L210 35" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
          <path d="M335 180L255 115L275 90L195 35" stroke="#B8FF01" strokeWidth="4" strokeLinecap="round" />
          {/* Silhouette Fighter */}
          <path d="M145 250L175 145H225L255 250H145Z" fill="#09090F" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="95" y1="185" x2="315" y2="75" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );

    /* 7. NEURAL DECK XR */
    case 'neural-deck':
      return (
        <svg viewBox="0 0 400 250" fill="none" className="w-full h-full object-cover" aria-hidden="true">
          <rect width="400" height="250" fill="#0F172A" />
          {/* Grid lines */}
          <path d="M0 190H400M0 220H400M80 165L20 250M320 165L380 250" stroke="#38BDF8" strokeWidth="2" opacity="0.4" />
          {/* Sleek XR Visor */}
          <rect x="85" y="68" width="230" height="92" rx="46" fill="#7C3AED" stroke="#FFFFFF" strokeWidth="4.5" />
          <rect x="102" y="82" width="196" height="64" rx="32" fill="#09090F" />
          <path d="M125 114H175M225 114H275" stroke="#B8FF01" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );

    /* 8. GALACTICA DUNE */
    case 'galactica-dune':
      return (
        <svg viewBox="0 0 400 250" fill="none" className="w-full h-full object-cover" aria-hidden="true">
          <rect width="400" height="250" fill="#7C2D12" />
          <circle cx="115" cy="72" r="42" fill="#FDE047" />
          <circle cx="285" cy="95" r="22" fill="#FB923C" />
          <path d="M0 175Q120 130 240 175T400 160V250H0V175Z" fill="#EA580C" />
          <path d="M0 205Q160 165 310 210T400 195V250H0V205Z" fill="#431407" />
          {/* Starship silhouette */}
          <path d="M175 85L235 68L205 98L175 85Z" fill="#09090F" />
        </svg>
      );
  }
};

/* ==========================================================================
   5. MANGA MANIFESTO PANEL (Matches Lime-Green "ABOUT ME" Card in Reference)
   ========================================================================== */

export const MangaManifestoArtSVG: React.FC = () => (
  <svg
    viewBox="0 0 480 280"
    fill="none"
    className="w-full h-full object-cover"
    role="img"
    aria-label="Viñeta de cómic en verde lima y tinta negra con personaje geek sonriente y corona"
  >
    {/* Vibrant Lime Green Background */}
    <rect width="480" height="280" fill="#B8FF01" />

    {/* Halftone / Ink Splatter Corners */}
    <path d="M0 205C35 210 52 245 78 280H0V205Z" fill="#08080C" />
    <path d="M480 185C435 198 425 240 395 280H480V185Z" fill="#08080C" />
    <circle cx="42" cy="195" r="9" fill="#08080C" />
    <circle cx="445" cy="172" r="12" fill="#08080C" />

    {/* Tilted Comic Mantra Words on the Left (Just like "FOCUS / DISCIPLINE / CONSISTENCY" in Reference) */}
    <g transform="rotate(-14 95 125)">
      <text x="22" y="95" fill="#08080C" className="font-comic" fontSize="29" fontWeight="bold" letterSpacing="1">
        CULTURA POP
      </text>
      <text x="22" y="128" fill="#08080C" className="font-comic" fontSize="29" fontWeight="bold" letterSpacing="1">
        GAMING REAL
      </text>
      <text x="22" y="161" fill="#08080C" className="font-comic" fontSize="29" fontWeight="bold" letterSpacing="1">
        CERO RELLENO
      </text>
      <path d="M22 172C68 168 125 168 175 172" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" />
    </g>

    {/* Crown Doodle on the Right */}
    <path
      d="M388 92L386 58L406 75L420 50L434 75L454 56L448 92H388Z"
      stroke="#08080C"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Black & White Inked Manga Character Portrait (Center-Right like Reference Image) */}
    <g transform="translate(175, 16)">
      {/* Black Hoodie Shoulders */}
      <path
        d="M25 264C38 205 78 188 130 188C182 188 218 205 232 264H25Z"
        fill="#08080C"
      />
      {/* White hoodie collar accents */}
      <path d="M95 198L112 248M162 198L148 248" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
      {/* Neck */}
      <rect x="108" y="156" width="42" height="44" fill="#FFFFFF" stroke="#08080C" strokeWidth="4" />
      {/* Face */}
      <path
        d="M78 88C78 142 90 175 130 175C170 175 182 142 182 88C182 48 78 48 78 88Z"
        fill="#FFFFFF"
        stroke="#08080C"
        strokeWidth="4.5"
      />
      {/* Ears */}
      <circle cx="74" cy="118" r="14" fill="#FFFFFF" stroke="#08080C" strokeWidth="4" />
      <circle cx="186" cy="118" r="14" fill="#FFFFFF" stroke="#08080C" strokeWidth="4" />
      {/* Expressive Manga Eyes & Eyebrows */}
      <path d="M92 86C102 78 114 78 120 84" stroke="#08080C" strokeWidth="5" strokeLinecap="round" />
      <path d="M140 84C148 78 160 78 168 86" stroke="#08080C" strokeWidth="5" strokeLinecap="round" />
      <circle cx="106" cy="104" r="8" fill="#08080C" />
      <circle cx="108" cy="101" r="2.5" fill="#FFFFFF" />
      <circle cx="154" cy="104" r="8" fill="#08080C" />
      <circle cx="156" cy="101" r="2.5" fill="#FFFFFF" />
      {/* Nose & Confident Grin */}
      <path d="M128 106L124 122L134 124" stroke="#08080C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M104 136C118 146 144 146 156 134C154 152 142 158 130 158C116 158 106 150 104 136Z"
        fill="#FFFFFF"
        stroke="#08080C"
        strokeWidth="3.8"
        strokeLinejoin="round"
      />
      {/* Inked Spiky/Wavy Manga Hair with White Highlights */}
      <path
        d="M66 95C46 72 62 32 95 34C108 10 152 10 166 34C198 30 212 72 192 96C184 72 164 62 132 66C102 70 82 64 66 95Z"
        fill="#08080C"
        stroke="#FFFFFF"
        strokeWidth="2.5"
      />
    </g>
  </svg>
);
