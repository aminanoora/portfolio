import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const navItems = [
  { label: 'about', id: 'about' },
  { label: 'selected projects', id: 'selected-works' },
  { label: 'services', id: 'manifesto' },
  { label: 'Contact', id: 'contact' },
]

const sectionIds = navItems.map((item) => item.id)

function Header() {
  const { ref, visible } = useReveal<HTMLElement>()
  const [activeSection, setActiveSection] = useState(sectionIds[0])
  const [menuOpen, setMenuOpen] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Scroll spy: highlight the nav item for the section currently in view
  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const threshold = window.innerHeight * 0.35
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = id
        }
      }

      // At the very bottom, always treat the last section as active
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      setActiveSection(atBottom ? sectionIds[sectionIds.length - 1] : current)

      // Reading-progress rule along the bottom edge of the header
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`
      }
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header
      ref={ref}
      className={`fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] ${
        visible ? 'is-visible' : ''
      }`}
    >
      <div className="h-20 w-full px-margin flex items-center justify-between gap-gutter reveal reveal-top">
        <div className="flex items-center gap-space-sm">
          <img
            alt="Studio Zine Emblem"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1USkxngk-RMoeMnp1fca8YBZkHg6uh5_LHTUleW0NHhiR4y6GBYoHf5tjhgQ95lR7e77mUMOZG6eJNBUAb2KRmwzgAK_AOFoY7FfTfoLaE3e9ukCiPZkcHu_qBHhMYDHUc4_z69ypPsdBxvEiVRIGBVzvy17Lyf1kJe9gqXoynPBsrqpVtKUkx2hg4xW5v30JQfynVQ2lX6V3NfwGtyxItrrJDH8_ZqNs8G8s2q1XTp0Mv14RuNTcWiyJw"
          />
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg tracking-widest text-on-surface uppercase">
              Amina Noora
            </span>
            <span className="font-label-sm text-label-sm tracking-widest text-secondary uppercase">
              full stack developer
            </span>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-space-md py-space-xs px-space-sm bg-surface-container-low/70 rounded-full">
          {navItems.map((item) => {
            const isActive = item.id === activeSection
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                className={
                  isActive
                    ? 'nav-link is-current uppercase tracking-wider px-space-sm py-space-xs transition-colors bg-surface-container-high text-on-surface font-headline-sm'
                    : 'nav-link font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors'
                }
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-space-md">
          <div className="relative flex items-center justify-center p-space-xs">
            <div className="absolute -top-1 right-2 w-3 h-1 bg-outline-variant/80 rotate-12 rounded-sm shadow-sm z-10"></div>
            <div className="p-0.5 bg-surface-container-highest shadow-[2px_3px_0px_rgba(26,26,26,0.15)] rounded-full"></div>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="xl:hidden inline-flex items-center gap-1.5 px-space-sm py-space-xs bg-surface-container-low text-on-surface border border-on-surface shadow-[2px_2px_0px_rgba(26,26,26,0.15)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">{menuOpen ? 'close' : 'menu'}</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider">
              {menuOpen ? 'CLOSE' : 'MENU'}
            </span>
          </button>
        </div>
      </div>

      {/* Scroll progress rule */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[3px] bg-on-surface/10 pointer-events-none"
      >
        <div
          ref={progressRef}
          className="h-full w-full origin-left bg-on-surface"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Section navigation"
          className="xl:hidden bg-surface border-t-2 border-on-surface/15 px-margin-mobile pb-space-md pt-space-sm flex flex-col gap-2 shadow-[0_8px_16px_rgba(26,26,26,0.1)]"
        >
          {navItems.map((item, index) => {
            const isActive = item.id === activeSection
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center justify-between gap-space-sm px-space-sm py-space-sm border-2 border-on-surface shadow-[2px_2px_0px_rgba(26,26,26,0.14)] transition-colors ${
                  isActive
                    ? 'bg-secondary-container text-on-secondary-fixed'
                    : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high'
                }`}
              >
                <span className="flex items-baseline gap-space-sm">
                  <span className="font-label-sm text-label-sm font-mono uppercase text-secondary">
                    0{index + 1}
                  </span>
                  <span className="font-headline-sm text-headline-sm uppercase tracking-wide">
                    {item.label}
                  </span>
                </span>
                <span className="material-symbols-outlined text-base">south_east</span>
              </a>
            )
          })}
        </nav>
      )}
    </header>
  )
}

export default Header
