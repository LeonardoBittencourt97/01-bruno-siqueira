import { WhatsappLogo, Phone, MapPin, Clock } from '@phosphor-icons/react'
import { useReveal } from '../hooks/useReveal'
import { EASE_OUT } from '../lib/motion'

const WHATSAPP_URL =
  'https://wa.me/5541995817901?text=Ol%C3%A1%20Dr.%20Bruno%2C%20gostaria%20de%20agendar%20uma%20consulta.'

export default function CTAFinal() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-24 md:py-32 bg-stripes-angled">
      <div ref={ref} className="mx-auto max-w-3xl px-6">
        <div
          className="rounded-2xl bg-bg-slate p-8 md:p-12 text-center transition-all duration-800"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
            transitionTimingFunction: EASE_OUT,
          }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Pronto para resolver seu caso?
          </h2>
          <p className="text-base text-text-mute mb-8 max-w-[480px] mx-auto">
            Envie uma mensagem pelo WhatsApp e receba uma avaliação do seu
            caso. Sem compromisso, com orientação clara sobre os próximos
            passos.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-2 text-base font-semibold text-black transition-all duration-200 hover:brightness-110 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent mb-8"
            style={{ transitionTimingFunction: EASE_OUT }}
          >
            <WhatsappLogo size={20} weight="fill" />
            Falar no WhatsApp agora
          </a>

          <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/5">
            <div className="flex flex-col items-center gap-2 text-sm text-text-mute">
              <Phone size={16} weight="regular" className="text-accent" />
              <span>+55 (41) 99581-7901</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm text-text-mute">
              <MapPin size={16} weight="regular" className="text-accent" />
              <span>Centro, Curitiba - PR</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm text-text-mute">
              <Clock size={16} weight="regular" className="text-accent" />
              <span>Seg a Sex · Fecha 19:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
