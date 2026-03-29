'use client'

import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { WA_CHAT_SCRIPT } from '@/lib/constants'

interface Message {
  id: number
  text: string
  isBot: boolean
  visible: boolean
}

export default function WhatsAppChat() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 })
  const reduced = useReducedMotion()

  const [messages, setMessages] = useState<Message[]>([])
  const [showTyping, setShowTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hasStarted = useRef(false)

  const realMessages = WA_CHAT_SCRIPT.filter((s) => !s.isTyping)

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
  }

  const runAnimation = () => {
    setMessages([])
    setShowTyping(false)

    const steps = WA_CHAT_SCRIPT
    let msgIndex = 0 // index into realMessages
    let stepIndex = 0
    let cumulativeDelay = 0

    const schedule = (fn: () => void, delay: number) => {
      cumulativeDelay += delay
      timerRef.current = setTimeout(fn, cumulativeDelay)
    }

    steps.forEach((step) => {
      if (step.isTyping) {
        schedule(() => setShowTyping(true), step.delay)
      } else {
        const capturedIndex = msgIndex
        schedule(() => {
          setShowTyping(false)
          setMessages((prev) => [
            ...prev,
            { id: capturedIndex, text: step.text, isBot: step.isBot, visible: true },
          ])
          // scroll to bottom
          requestAnimationFrame(() => {
            if (scrollRef.current) {
              scrollRef.current.scrollTop = scrollRef.current.scrollHeight
            }
          })
        }, step.delay)
        msgIndex++
      }
    })

    // restart
    schedule(() => runAnimation(), 4000)
  }

  useEffect(() => {
    if (!isVisible || hasStarted.current) return
    hasStarted.current = true

    if (reduced) {
      setMessages(
        realMessages.map((s, i) => ({ id: i, text: s.text, isBot: s.isBot, visible: true }))
      )
      return
    }

    runAnimation()
    return clearTimer
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, reduced])

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        maxWidth: '340px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 16px 48px rgba(0,0,0,0.35)',
        fontFamily: 'var(--font-body)',
        background: '#ECE5DD',
      }}
    >
      {/* Header */}
      <div
        style={{
          background: '#128C7E',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#25D366',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '0.875rem',
            color: '#fff',
            flexShrink: 0,
          }}
        >
          V
        </div>
        <div>
          <div style={{ color: '#fff', fontWeight: 500, fontSize: '0.9375rem', lineHeight: 1.2 }}>
            Vendo365
          </div>
          <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.75rem' }}>
            en línea
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        style={{
          height: '280px',
          overflowY: 'auto',
          padding: '12px 10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          scrollbarWidth: 'none',
        }}
      >
        {messages.map((msg) =>
          msg.isBot ? (
            <div key={msg.id} style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div
                style={{
                  background: '#fff',
                  borderRadius: '0 12px 12px 12px',
                  padding: '8px 12px',
                  maxWidth: '80%',
                  fontSize: '0.875rem',
                  color: '#1C2331',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  lineHeight: 1.4,
                }}
              >
                {msg.text}
                <span style={{ display: 'block', fontSize: '0.6875rem', color: '#9CA3AF', textAlign: 'right', marginTop: '2px' }}>
                  10:34
                </span>
              </div>
            </div>
          ) : (
            <div key={msg.id} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div
                style={{
                  background: '#DCF8C6',
                  borderRadius: '12px 0 12px 12px',
                  padding: '8px 12px',
                  maxWidth: '80%',
                  fontSize: '0.875rem',
                  color: '#1C2331',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  lineHeight: 1.4,
                }}
              >
                {msg.text}
                <span style={{ display: 'block', fontSize: '0.6875rem', color: '#9CA3AF', textAlign: 'right', marginTop: '2px' }}>
                  10:34 ✓✓
                </span>
              </div>
            </div>
          )
        )}

        {showTyping && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div
              style={{
                background: '#fff',
                borderRadius: '0 12px 12px 12px',
                padding: '10px 14px',
                display: 'flex',
                gap: '4px',
                alignItems: 'center',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#9CA3AF',
                    display: 'block',
                    animation: 'typing-dot 1.4s ease-in-out infinite',
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input bar */}
      <div
        style={{
          background: '#F0F0F0',
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <div
          style={{
            flex: 1,
            background: '#fff',
            borderRadius: '20px',
            padding: '8px 14px',
            fontSize: '0.8125rem',
            color: '#9CA3AF',
          }}
        >
          Escribe un mensaje...
        </div>
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#25D366',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
            <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
