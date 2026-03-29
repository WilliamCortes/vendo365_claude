'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface SectionRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  variant?: 'up' | 'left'
}

export default function SectionReveal({
  children,
  delay = 0,
  className = '',
  variant = 'up',
}: SectionRevealProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>()

  const revealClass = variant === 'left' ? 'reveal-x' : 'reveal'

  return (
    <div
      ref={ref}
      className={`${revealClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
