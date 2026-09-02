import { useState, useEffect } from 'react'
import { WhatsappLogo, Phone } from '@phosphor-icons/react'
import { EASE_OUT } from '../lib/motion'

const NAV_LINKS = [
  { label: 'Áreas', href: '#areas' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

const WHATSAPP_URL =
  'https://wa.me/5541995817901?text=Ol%C3%A1%20Dr.%20Bruno%2C%20gostaria%20de%20agendar%20uma%20consulta.'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[720px] rounded-full border transition-all duration-300 ${
          scrolled || open
            ? 'bg-bg-navy/90 backdrop-blur-3xl border-white/10'
            : 'bg-bg-navy/60 backdrop-blur-2xl border-white/10'
        }`}
        style={{ transitionTimingFunction: EASE_OUT }}
      >
        <nav className="flex items-center justify-between px-4 py-2">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
            <span className="text-accent">BS</span>
            <span className="hidden sm:inline">Bruno Siqueira</span>
          </a>

          <div className="hidden md:flex items-center gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-mute transition-colors duration-200 hover:text-text"
                style={{ transitionTimingFunction: EASE_OUT }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:+5541995817901"
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-bg-elev2 text-text-mute transition-all duration-200 hover:text-accent"
              style={{ transitionTimingFunction: EASE_OUT }}
              aria-label="Ligar"
            >
              <Phone size={16} weight="regular" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-sm font-semibold text-black transition-all duration-200 hover:brightness-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent"
              style={{ transitionTimingFunction: EASE_OUT }}
            >
              <WhatsappLogo size={16} weight="fill" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-bg-elev2 text-text-mute transition-colors duration-200 hover:text-text"
              style={{ transitionTimingFunction: EASE_OUT }}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
            >
              <span className="relative w-4 h-3">
                <span
                  className="absolute left-0 w-full h-0.5 bg-current transition-all duration-300"
                  style={{
                    top: open ? '50%' : '0%',
                    transform: open ? 'rotate(45deg) translateY(-50%)' : 'none',
                    transitionTimingFunction: EASE_OUT,
                  }}
                />
                <span
                  className="absolute left-0 top-1/2 w-full h-0.5 bg-current transition-all duration-300 -translate-y-1/2"
                  style={{
                    opacity: open ? 0 : 1,
                    transitionTimingFunction: EASE_OUT,
                  }}
                />
                <span
                  className="absolute left-0 w-full h-0.5 bg-current transition-all duration-300"
                  style={{
                    bottom: open ? '50%' : '0%',
                    transform: open ? 'rotate(-45deg) translateY(50%)' : 'none',
                    transitionTimingFunction: EASE_OUT,
                  }}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-bg-navy/90 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
          role="dialog"
          aria-modal="true"
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-semibold text-text opacity-0 animate-[slideUp_0.4s_ease-out_forwards]"
              style={{ animationDelay: `${100 + i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-base font-semibold text-black transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{ transitionTimingFunction: EASE_OUT }}
          >
            <WhatsappLogo size={20} weight="fill" />
            Falar no WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
