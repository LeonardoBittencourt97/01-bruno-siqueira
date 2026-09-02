import { useState, useEffect } from 'react'
import { WhatsappLogo, X } from '@phosphor-icons/react'
import { EASE_OUT } from '../lib/motion'

const WHATSAPP_NUMBER = '5541995817901'
const DEFAULT_MESSAGE = 'Olá Dr. Bruno, vim pelo site e gostaria de saber mais sobre seus serviços.'

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => setShowTooltip(true), 5000)
    return () => clearTimeout(timer)
  }, [visible])

  if (!visible) return null

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showTooltip && (
        <div
          className="relative bg-bg-charcoal border border-white/10 rounded-2xl px-4 py-3 text-sm text-text max-w-[220px] shadow-lg"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.95)',
            transition: `all 300ms ${EASE_OUT}`,
          }}
        >
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-text-mute hover:text-text transition-colors duration-200"
            aria-label="Fechar"
          >
            <X size={12} weight="regular" />
          </button>
          <p className="pr-4">Precisa de ajuda? Fale conosco pelo WhatsApp.</p>
        </div>
      )}

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-bg"
        style={{ transitionTimingFunction: EASE_OUT }}
        aria-label="Falar no WhatsApp"
      >
        <WhatsappLogo size={28} weight="fill" />
      </a>
    </div>
  )
}
