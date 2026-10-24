import { useReveal } from '../hooks/useReveal'

type PillVariant = 'plain' | 'primary' | 'secondary'

type Service = {
  num: string
  title: string
  discipline: string
  description: string
  cardClass: string
  decor: 'cyan' | 'staple' | 'lime'
  pills: { label: string; variant?: PillVariant }[]
}

const services: Service[] = [
  {
    num: '01.',
    title: 'UI/UX & Digital Product Design',
    discipline: 'DISCIPLINE 01',
    description:
      'User flows, design systems, tactile interactive prototypes, wireframing, and ergonomic digital interfaces crafted with deliberate typographic hierarchy.',
    cardClass: 'bg-surface-container rotate-[-0.8deg]',
    decor: 'cyan',
    pills: [
      { label: 'UI/UX Design' },
      { label: 'Design Systems' },
      { label: 'Wireframing' },
      { label: 'User Research' },
      { label: 'Prototyping' },
    ],
  },
  {
    num: '02.',
    title: 'Modern Web & Frontend Engineering',
    discipline: 'DISCIPLINE 02',
    description:
      'High-performance, accessible, and responsive interfaces engineered with modern component architecture and fluid layout systems.',
    cardClass: 'bg-surface-container-low rotate-[0.6deg]',
    decor: 'staple',
    pills: [
      { label: 'React', variant: 'primary' },
      { label: 'JavaScript (ES6+)' },
      { label: 'HTML5 / CSS3' },
      { label: 'Tailwind CSS', variant: 'secondary' },
      { label: 'Responsive Design' },
      { label: 'State Management' },
      { label: 'Performance & SEO' },
    ],
  },
  {
    num: '03.',
    title: 'Backend Engineering & Architecture',
    discipline: 'DISCIPLINE 03',
    description:
      'Reliable, scalable server-side systems and resilient API pipelines built for clean data flow and high-throughput reliability.',
    cardClass: 'bg-surface-container-high rotate-[-0.4deg]',
    decor: 'lime',
    pills: [
      { label: 'Node.js', variant: 'primary' },
      { label: 'Express.js' },
      { label: 'RESTful API Design' },
      { label: 'Server-side Logic' },
      { label: 'Middleware' },
      { label: 'Pagination' },
      { label: 'Database Schema', variant: 'secondary' },
    ],
  },
]

function pillClass(variant: PillVariant = 'plain') {
  if (variant === 'primary') {
    return 'px-2 py-0.5 bg-primary text-on-primary font-label-sm text-label-sm uppercase'
  }
  if (variant === 'secondary') {
    return 'px-2 py-0.5 bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm uppercase'
  }
  return 'px-2 py-0.5 bg-surface text-on-surface font-label-sm text-label-sm uppercase shadow-xs'
}

function ServiceDecor({ decor }: { decor: Service['decor'] }) {
  if (decor === 'cyan') {
    return (
      <div className="absolute -top-3 right-6 w-24 h-5 bg-[#88D3E6]/70 rotate-2 pointer-events-none shadow-xs tape-sway"></div>
    )
  }
  if (decor === 'staple') {
    return (
      <div className="absolute -top-1.5 left-4 w-3.5 h-1 bg-[#474746] rounded-xs shadow-xs"></div>
    )
  }
  return (
    <div className="absolute -bottom-3 right-8 w-24 h-5 bg-[#b4ceab]/80 -rotate-2 pointer-events-none shadow-xs z-10 tape-sway-alt"></div>
  )
}

function Services() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section
      id="manifesto"
      ref={ref}
      className={`pt-space-xl flex flex-col gap-space-lg ${visible ? 'is-visible' : ''}`}
    >
      {/* Section heading */}
      <div className="flex items-center justify-between reveal">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <div className="accent-dash w-8 h-2 bg-on-surface"></div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface font-mono">
              SERVICES & SPECIALIZATIONS // SPEC SHEET
            </span>
          </div>
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight">
            SERVICES: CRAFT & FULL-STACK SYSTEMS
          </h2>
        </div>
        <div className="hidden sm:inline-flex items-center gap-1.5 px-space-sm py-1 bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm uppercase rotate-1 shadow-[2px_2px_0px_rgba(26,26,26,0.12)]">
          <span className="material-symbols-outlined text-sm">handyman</span>
          <span>TECHNICAL ARSENAL // Q4-2026</span>
        </div>
      </div>

      {/* Ruled notebook spread container */}
      <div
        className="bg-[#FAF7F0] p-space-md md:p-space-xl shadow-[5px_8px_0px_rgba(26,26,26,0.18)] relative overflow-hidden reveal"
        style={{ transitionDelay: '120ms' }}
      >
        {/* Notebook spine margin */}
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-0.5 bg-error/30"></div>

        <div className="grid grid-cols-1 gap-space-xl items-start">
          <div className="flex flex-col gap-space-lg w-full">
            <div>
              <span className="font-label-sm text-label-sm uppercase text-secondary tracking-widest">
                CHAPTER III // CAPABILITIES
              </span>
              <h3 className="font-display text-headline-md text-on-surface uppercase tracking-tight mt-1">
                ARCHITECTURAL SERVICES & TECHNICAL ARSENAL
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mt-2">
                Bridging tactile visual design, meticulous UI engineering, and robust backend
                infrastructure with production-grade craft.
              </p>
            </div>

            {/* 3 pinned service cards */}
            <div className="flex flex-col gap-space-md pt-space-xs">
              {services.map((service, index) => (
                <div
                  key={service.num}
                  className="reveal"
                  style={{ transitionDelay: `${260 + index * 100}ms` }}
                >
                  <div
                    className={`relative p-space-md shadow-[2px_3px_0px_rgba(26,26,26,0.12)] card-lift hover:rotate-0 ${service.cardClass}`}
                  >
                    <ServiceDecor decor={service.decor} />

                    <div className="flex items-start gap-space-sm">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        {service.num}
                      </span>
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex items-center justify-between flex-wrap gap-1">
                          <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface tracking-tight">
                            {service.title}
                          </h4>
                          <span className="font-label-sm text-label-sm uppercase px-2 py-0.5 bg-surface-container-highest text-secondary font-mono">
                            {service.discipline}
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {service.pills.map((pill) => (
                            <span key={pill.label} className={pillClass(pill.variant)}>
                              {pill.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
