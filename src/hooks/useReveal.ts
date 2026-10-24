import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element once it scrolls into view.
 * Returns a ref for the observed root and a `visible` flag; children marked
 * with the `reveal` class animate in when the root gets `is-visible`.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      // threshold 0 with a negative bottom margin: trigger as soon as the top
      // of the element is ~80px into the viewport, regardless of how tall it is
      // (a percentage threshold can never be reached by very tall sections).
      { threshold: 0, rootMargin: '0px 0px -80px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}
