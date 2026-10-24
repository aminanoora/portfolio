import type { CSSProperties } from 'react'
import { useReveal } from '../hooks/useReveal'

const headlineWords: { text: string; bold?: boolean }[] = [
  { text: 'CODE', bold: true },
  { text: 'ARCHITECTURE', bold: true },
  { text: 'and' },
  { text: 'DIGITAL', bold: true },
  { text: 'SYSTEMS', bold: true },
]

function Hero() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section
      id="about"
      ref={ref}
      className={`relative w-full pt-space-md ${visible ? 'is-visible' : ''}`}
    >
      {/* Background graphic accents (dotted drafting grid simulation) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 -z-10 flex justify-between">
        <div className="h-full w-px bg-on-surface-variant"></div>
        <div className="h-full w-px bg-on-surface-variant hidden md:block"></div>
        <div className="h-full w-px bg-on-surface-variant"></div>
        <div className="h-full w-px bg-on-surface-variant hidden lg:block"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Left column: typography & badges */}
        <div className="lg:col-span-7 flex flex-col items-start gap-space-lg relative z-20">
          {/* Translucent washi tape strip on header */}
          <div className="relative inline-flex items-center reveal">
            <div className="absolute -top-3 -left-3 w-36 h-7 bg-[#88D3E6]/70 rotate-[-2deg] pointer-events-none shadow-sm backdrop-blur-[1px] tape-sway"></div>
            <div className="relative bg-secondary-container text-on-secondary-fixed px-space-md py-space-xs shadow-[2px_3px_0px_rgba(26,26,26,0.18)] flex items-center gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-fixed">
                LOG: MERN & MODERN INTERFACES
              </span>
            </div>
          </div>

          {/* Massive editorial display title */}
          <div className="relative reveal" style={{ transitionDelay: '90ms' }}>
            <h1
              aria-label="Code architecture and digital systems"
              className="font-display text-display-mobile md:text-display text-on-surface uppercase tracking-tight leading-[1.02]"
            >
              {headlineWords.map((word, index) => (
                <span
                  key={word.text}
                  aria-hidden="true"
                  className="word mr-[0.26em]"
                  style={{ '--i': index } as CSSProperties}
                >
                  {word.bold ? <b>{word.text}</b> : word.text}
                </span>
              ))}
            </h1>
          </div>

          {/* Stamped kraft paper cutout subtitle */}
          <div
            className="relative p-space-md bg-surface-container shadow-[3px_4px_0px_rgba(26,26,26,0.14)] rotate-[-0.6deg] max-w-xl reveal"
            style={{ transitionDelay: '180ms' }}
          >
            {/* Simulated paper staple top-left */}
            <div className="absolute -top-1.5 left-4 w-3.5 h-1 bg-[#474746] rounded-xs shadow-xs"></div>
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              Full-Stack Developer bridging the gap between robust server-side architecture and
              meticulously crafted, high-performance user experiences.
            </p>
          </div>

          {/* Torn receipt snippet & scrawled annotation */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md w-full pt-space-xs reveal"
            style={{ transitionDelay: '260ms' }}
          >
            <div className="bg-surface-container-highest px-space-md py-space-xs shadow-[2px_2px_0px_rgba(26,26,26,0.12)] flex flex-col">
              <span className="font-label-sm text-label-sm tracking-wider uppercase text-on-surface-variant">
                SPECIALIZATIONS
              </span>
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface uppercase">
                REST APIS · SYSTEM ARCHITECTURE · FULL-STACK DEV · UI ENGINEERING
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-space-sm py-space-xs bg-[#FAF7F0] text-on-surface rotate-2 shadow-[1px_2px_0px_rgba(26,26,26,0.15)]">
              <span className="font-label-sm text-label-sm uppercase tracking-wide text-error font-semibold">
                ← REAL ANALOG SCANS / NO PRESETS
              </span>
            </div>
          </div>

          {/* CTAs styled as dyno embossed tape + stamped link */}
          <div
            className="flex flex-wrap items-center gap-space-md pt-space-md reveal"
            style={{ transitionDelay: '340ms' }}
          >
            <a
              className="group relative inline-flex items-center gap-space-sm bg-primary text-on-primary px-space-lg py-space-md shadow-[3px_4px_0px_#685d4c] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#685d4c] transition-transform"
              href="#selected-works"
            >
              <span className="font-headline-sm text-headline-sm uppercase tracking-wider">
                EXPLORE WORKS [↓]
              </span>
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </a>
            <a
              className="relative px-space-md py-space-md bg-surface-container-high text-on-surface hover:bg-secondary-container transition-colors shadow-[2px_2px_0px_rgba(26,26,26,0.15)] flex items-center gap-space-xs"
              href="#manifesto"
            >
              <span className="font-label-lg text-label-lg uppercase tracking-widest">
                VIEW TECH STACK
              </span>
            </a>
          </div>
        </div>

        {/* Right column: layered polaroid collage */}
        <div
          className="lg:col-span-5 relative mt-space-lg lg:mt-0 flex justify-center lg:justify-end reveal"
          style={{ transitionDelay: '200ms' }}
        >
          {/* Decorative tape: lime accent top-right */}
          <div className="absolute -top-4 right-8 w-28 h-6 bg-[#b4ceab]/80 rotate-[12deg] z-30 shadow-xs pointer-events-none tape-sway-alt"></div>

          {/* Polaroid mount card */}
          <div className="relative bg-[#FAF7F0] p-4 pb-6 shadow-[6px_10px_0px_rgba(26,26,26,0.2),0px_16px_32px_rgba(36,34,32,0.1)] rotate-[-2.4deg] max-w-sm sm:max-w-md w-full transition-[rotate] hover:rotate-0 duration-300 z-20 float-slow">
            {/* Cyan tape holding top center */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#88D3E6]/80 -rotate-1 shadow-xs z-30 pointer-events-none tape-sway"></div>

            {/* Rubber stamp mark */}
            <div className="absolute top-6 right-6 z-30 pointer-events-none border-2 border-error/70 text-error/80 px-2 py-0.5 rounded-sm font-label-sm text-label-sm uppercase tracking-widest rotate-[14deg] stamp-in">
              FILE: TOKYO-89
            </div>

            {/* Brutalist image */}
            <div className="w-full aspect-[3/4] bg-surface-container-high overflow-hidden shadow-inner relative">
              <img
                className="w-full h-full object-cover grayscale contrast-125 filter"
                alt="Black and white portrait of Amina Noora in a dark suit, tie and sunglasses"
                src="/images/portrait.png"
                style={{ objectPosition: '50% 25%' }}
              />
            </div>

            {/* Polaroid margin notation */}
            <div className="mt-4 flex flex-col gap-1 px-1">
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface uppercase">
                  DEV LOG — LOCALHOST 3000 // 02:14 AM
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase">[№ 18]</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                Debugging asynchronous states and optimizing backend queries in the darkroom setup
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
