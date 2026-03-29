'use client'

import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface CounterNumberProps {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function CounterNumber({
  to,
  suffix = '',
  prefix = '',
  duration = 1200,
  className = '',
}: CounterNumberProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLSpanElement>()
  const [current, setCurrent] = useState(0)
  const rafRef = useRef<number>(0)
  const startTimeRef = useRef<number | null>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!isVisible) return
    if (reduced) { setCurrent(to); return }

    startTimeRef.current = null

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4)
      setCurrent(Math.round(to * eased))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }

    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isVisible, to, duration, reduced])

  return (
    <span ref={ref} className={className}>
      {prefix}{current.toLocaleString('es-CO')}{suffix}
    </span>
  )
}
