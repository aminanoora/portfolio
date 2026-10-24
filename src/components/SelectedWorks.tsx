import { useReveal } from '../hooks/useReveal'

function SelectedWorks() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section
      id="selected-works"
      ref={ref}
      className={`flex flex-col gap-space-lg pt-space-xl ${visible ? 'is-visible' : ''}`}
    >
      {/* Section header with archive header stamp */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b-0 pb-space-sm reveal">
        <div className="flex flex-col items-start gap-space-xs">
          <div className="px-space-sm py-0.5 bg-surface-container-highest text-on-surface font-label-sm text-label-sm tracking-widest uppercase">
            SELECTED PROJECTS // LOGS
          </div>
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight">
            SELECTED&nbsp; WORKS
          </h2>
          <div aria-hidden="true" className="rule-draw h-[3px] w-full bg-on-surface mt-1"></div>
        </div>
      </div>

      {/* Asymmetrical 3-card bento collage grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch pt-space-sm">
        {/* Project 01 (span 7) */}
        <div className="lg:col-span-7 reveal flex" style={{ transitionDelay: '100ms' }}>
          <article className="relative group flex h-full w-full flex-col justify-between bg-surface-container-lowest p-space-md md:p-space-lg shadow-[4px_6px_0px_rgba(26,26,26,0.16)] transition-all hover:-translate-y-1 hover:shadow-[6px_10px_0px_rgba(26,26,26,0.24)]">
            <div className="absolute -top-3.5 right-6 w-32 h-6 bg-[#F3AD88]/80 rotate-[3deg] shadow-xs pointer-events-none z-10 tape-sway-alt"></div>

            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  COMMUNITY PORTAL · 2024
                </span>
                <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm uppercase">
                  WEB APPLICATION
                </span>
              </div>

              <div className="w-full aspect-[16/10] bg-surface-container overflow-hidden shadow-inner relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Monochrome gallery wall of framed children's crayon and ink drawings"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCAUWR0hI3g8eywfyDKaQ8B9O7o560SDUlpfQuEDjGhBwOUM6GrYaf49xHUS_OLxVe9N4PBHsqrzG8-x5n5wx1nIesqjp0aG7ibF1ML6VZSnUvNX0N-DXkcVSlHGI1ZmtPS-H57P3ferhlF6_CzOxJSHeL7kkn5pDYjeZy7p5RE3dtMwS2XZbUhipELhGENgGS8FmPnorY1vnmsmXWbNdaW_beqYK-WGtuiztb_G1UdSmmpB0_0Eu0TMe3r-vW7VKT0qKdgs7h1viLxa0"
                />
                <div className="absolute bottom-2 left-2 px-space-xs py-0.5 bg-surface/90 text-on-surface font-label-sm text-label-sm uppercase backdrop-blur-xs">
                  GALLERY A // PARENT-VERIFIED UPLOADS
                </div>
              </div>

              <div className="flex flex-col gap-space-xs">
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">
                  A Children's Art Showcase
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                  The Children's Creative Art Showcase & Parent Community Portal is a moderated,
                  parent-managed web application where children's artwork can be uploaded and
                  showcased safely. It lets parents engage in a supportive community and encourages
                  continued creativity through recognition such as likes, comments, and curated
                  features.
                </p>
              </div>
            </div>

            <div className="mt-space-md pt-space-sm flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-space-sm py-1 bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase rotate-[-1deg]">
                <span>PARENT REVIEW: &quot;SAFE, CURATED & CREATIVE&quot; ★★★★★</span>
              </div>
            </div>
          </article>
        </div>

        {/* Project 02 (span 5) */}
        <div className="lg:col-span-5 reveal flex" style={{ transitionDelay: '200ms' }}>
          <article className="relative group flex h-full w-full flex-col justify-between bg-surface-container p-space-md md:p-space-lg shadow-[4px_6px_0px_rgba(26,26,26,0.16)] transition-all hover:-translate-y-1 hover:shadow-[6px_10px_0px_rgba(26,26,26,0.24)]">
            <div className="absolute -top-2 left-8 w-6 h-1.5 bg-[#474746] rounded-xs shadow-xs z-10"></div>
            <div className="absolute -bottom-3 right-8 w-24 h-6 bg-[#b4ceab]/80 -rotate-2 shadow-xs pointer-events-none z-10 tape-sway"></div>

            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  AGRITECH MARKETPLACE · 2024
                </span>
                <span className="px-2 py-0.5 bg-surface-container-highest text-on-surface font-label-sm text-label-sm uppercase">
                  WEB APPLICATION
                </span>
              </div>

              <div className="w-full aspect-square bg-surface-container-high overflow-hidden shadow-inner relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="High contrast collage of harvested produce crates and open farmland rows"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwWhsXH2zQXfc0N_5UV6pcG8H1SuBQRxP_EdswUxCvsFDUG0C84k8JZM1jirNPa0jtSFixGk3w0u8clbUdeqLftbaXFS-9gOYc32tGsrzy7qP1XH-8U1ZSZnK83aPGQMLsA24C3opfmmTggJFiPSfpG8jgFqLRDmBxX-e6hxE3IG85DIpFzGDS_cgQn-LnCWRJ916WIlLL-pCA9WcWvV9Lyf0GaGNTw3H-p2X0xp4ZOrKDr4KWCbVLs9BeERgxnVI4z6tD5obm088pA9M"
                />
              </div>

              <div className="flex flex-col gap-space-xs">
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">
                  Krishi Market
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Krishi Market connects local farmers directly with consumers to eliminate supply
                  chain intermediaries. Growers list organic produce and dairy at fair,
                  self-determined prices. Buyers enjoy verified freshness and transparent insight
                  into ethical farm sourcing.
                </p>
              </div>
            </div>

            <div className="mt-space-md pt-space-sm flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-mono tracking-widest">
                FARM-TO-BUYER // 0 MIDDLEMEN
              </span>
            </div>
          </article>
        </div>

        {/* Project 03 (span 12, full width banner mosaic) */}
        <div className="lg:col-span-12 reveal" style={{ transitionDelay: '300ms' }}>
          <article className="relative group bg-surface-container-low p-space-md md:p-space-lg shadow-[4px_6px_0px_rgba(26,26,26,0.16)] flex flex-col md:flex-row items-center gap-space-lg h-full">
            <div className="absolute top-4 right-6 pointer-events-none opacity-40 hidden sm:block stamp-in">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-on-surface flex items-center justify-center rotate-12">
                <span className="font-label-sm text-label-sm text-center leading-tight uppercase font-mono font-bold">
                  AMINA
                  <br />
                  NOORA
                  <br />
                  ARCHIVE
                </span>
              </div>
            </div>

            <div className="w-full md:w-5/12 aspect-[4/3] bg-surface-container-highest p-2 shadow-[2px_3px_0px_rgba(26,26,26,0.12)]">
              <img
                className="w-full h-full object-cover"
                alt="Artistic collage spread of vintage postage stamps, ticket stubs and handwritten margin notes"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVRuBI2UtWyAsiily2FBXmQ_5XeMwwez8b9qgqtW2NAP3A63zT_7TAL1SXXbTznBS5UlIOTuIXRChAYaFbpGAcMirBFmrk2vo_myuAASXSv-LiAMboCFWUDbAHar5XBcaCPm58fWdL6OjpEQOUseq-SCq5isZPHKLmTnWHa6pCbrY4NUd_GIunyOa9Os16Pn2qWTvK1qQcbESBQdUgeIHHnEEzOa5Z3u33H3fN-hxfzAaNMhnj3F6witKlJMOBM5o_mfZ-oUquJLG6kII"
              />
            </div>

            <div className="w-full md:w-7/12 flex flex-col gap-space-md">
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="px-2 py-0.5 bg-primary text-on-primary font-label-sm text-label-sm uppercase">
                  P.003 // 2025
                </span>
                <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm uppercase">
                  PROJECT 003
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-mono">
                  № 003 / 2025
                </span>
              </div>
              <h3 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight">
                Ecommerce for Perfumes
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                A bespoke digital storefront tailored for luxury perfume collections. Merges
                high-end visual aesthetics with robust backend systems—delivering responsive
                checkout pipelines, dynamic inventory state handling, and seamless image rendering.
              </p>
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <div className="bg-surface-container-highest px-space-md py-space-xs text-on-surface flex items-center gap-space-xs font-mono font-label-sm text-label-sm">
                  <span>BARCODE // 48201-99214-X</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default SelectedWorks
