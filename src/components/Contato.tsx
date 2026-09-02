import { useState } from 'react'
import { PaperPlaneRight, MapPin, Clock, Phone } from '@phosphor-icons/react'
import { useReveal } from '../hooks/useReveal'
import { EASE_OUT } from '../lib/motion'

const WHATSAPP_NUMBER = '5541995817901'
const OFFICE_ADDRESS = 'R. Mal. Deodoro, 450, Edifício Maurício Caillet, Centro, Curitiba - PR, 80010-010'
const MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`
const MAPS_ROUTES_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(OFFICE_ADDRESS)}`
const MAPS_EMBED_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.9!2d-49.2733!3d-25.4284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI1JzQyLjIiUyA0OcKwMTYnMjMuOSJX!5e0!3m2!1spt-BR!2sbr!4v1`

export default function Contato() {
  const { ref, visible } = useReveal()
  const [name, setName] = useState('')
  const [message, setMessage] = useState('Olá Dr. Bruno, gostaria de saber mais sobre seus serviços.')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text = name.trim()
      ? `Olá Dr. Bruno, me chamo ${name.trim()}. ${message.trim()}`
      : `Olá Dr. Bruno. ${message.trim()}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contato" className="py-24 md:py-32 bg-stripes-diagonal">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div
          className="transition-all duration-800"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transitionTimingFunction: EASE_OUT,
          }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 max-w-[680px]">
            Entre em contato
          </h2>
          <p className="text-base text-text-mute mb-12 max-w-[480px]">
            Preencha o formulário abaixo. Sua mensagem será enviada direto
            para o WhatsApp do escritório.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Seu nome
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como prefere ser chamado?"
                  className="w-full rounded-2xl bg-bg-charcoal/80 border border-white/10 px-4 py-3 text-base text-text placeholder:text-text-mute/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                  style={{ transitionTimingFunction: EASE_OUT }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Sua mensagem
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full rounded-2xl bg-bg-charcoal/80 border border-white/10 px-4 py-3 text-base text-text placeholder:text-text-mute/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 resize-none"
                  style={{ transitionTimingFunction: EASE_OUT }}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-3 py-2 text-base font-semibold text-black transition-all duration-200 hover:brightness-110 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent"
                style={{ transitionTimingFunction: EASE_OUT }}
              >
                <PaperPlaneRight size={18} weight="regular" />
                Enviar pelo WhatsApp
              </button>
            </form>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden bg-bg-charcoal/80 aspect-[4/3]">
                <iframe
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do escritório"
                />
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent transition-colors duration-200 hover:text-accent-2"
                  style={{ transitionTimingFunction: EASE_OUT }}
                >
                  <MapPin size={14} weight="regular" />
                  Ver no Google Maps
                </a>
                <a
                  href={MAPS_ROUTES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent transition-colors duration-200 hover:text-accent-2"
                  style={{ transitionTimingFunction: EASE_OUT }}
                >
                  <MapPin size={14} weight="regular" />
                  Como chegar (rotas)
                </a>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-text-mute">
                  <MapPin size={14} weight="regular" className="text-accent shrink-0" />
                  <span>R. Mal. Deodoro, 450, Centro, Curitiba - PR</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-mute">
                  <Phone size={14} weight="regular" className="text-accent shrink-0" />
                  <span>+55 (41) 99581-7901</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-mute">
                  <Clock size={14} weight="regular" className="text-accent shrink-0" />
                  <span>Seg a Sex · 09:00 às 19:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
