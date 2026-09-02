import { useEffect, useRef, useState } from 'react'
import { getReducedMotion } from '../lib/motion'

export function useWordReveal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCount, setActiveCount] = useState(0)
  const [started, setStarted] = useState(false)
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    if (getReducedMotion()) {
      setActiveCount(wordsRef.current.length)
      return
    }

    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.unobserve(container)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    const words = wordsRef.current.filter(Boolean)
    let idx = 0

    const interval = setInterval(() => {
      idx++
      setActiveCount(idx)
      if (idx >= words.length) clearInterval(interval)
    }, 80)

    return () => clearInterval(interval)
  }, [started])

  const registerWord = (index: number) => (el: HTMLSpanElement | null) => {
    wordsRef.current[index] = el
  }

  return { containerRef, activeCount, registerWord }
}
