import { useReveal } from '../hooks/useReveal'

const tickerItems = [
  'FULL-STACK DEVELOPMENT',
  'MERN STACK',
  'REST API ARCHITECTURE',
  'UI ENGINEERING',
  'SYSTEM DESIGN',
  'MODERN INTERFACES',
]

function TickerGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`flex shrink-0 items-center ${duplicate ? 'ticker-copy' : ''}`}
    >
      {tickerItems.map((item) => (
        <span key={item} className="flex items-center gap-space-sm px-space-sm">
          <span className="font-label-md text-label-md uppercase tracking-[0.18em] whitespace-nowrap">
            {item}
          </span>
          <span className="text-tertiary-fixed-dim text-xs">✳</span>
        </span>
      ))}
    </div>
  )
}

function Ticker() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className={visible ? 'is-visible' : ''}>
      <div className="reveal">
        <div className="ticker relative flex items-stretch overflow-hidden bg-primary text-on-primary shadow-[4px_6px_0px_rgba(26,26,26,0.2)] -rotate-[0.6deg] border-y-2 border-primary">
          <span className="sr-only">
            Full-stack development, MERN stack, REST API architecture, UI engineering, system
            design, modern interfaces.
          </span>

          <span className="hidden sm:flex shrink-0 items-center gap-1.5 bg-secondary-container text-on-secondary-fixed px-space-sm font-label-sm text-label-sm uppercase tracking-widest z-10">
            <span className="dot-blink text-[8px] leading-none">●</span>
            LIVE INDEX
          </span>

          <div className="ticker-track py-2">
            <TickerGroup />
            <TickerGroup duplicate />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticker
