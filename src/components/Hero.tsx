import { WhatsappLogo, Star } from '@phosphor-icons/react'
import { useReveal } from '../hooks/useReveal'
import { EASE_OUT } from '../lib/motion'

const WHATSAPP_URL =
  'https://wa.me/5541995817901?text=Ol%C3%A1%20Dr.%20Bruno%2C%20gostaria%20de%20agendar%20uma%20consulta.'

export default function Hero() {
  const { ref, visible } = useReveal(0.1)

  return (
    <section className="relative min-h-screen flex items-center bg-stripes-diagonal md:bg-stripes-diagonal">
      {/* Mobile: background image */}
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hall.jpg)' }}
      />
      <div className="absolute inset-0 md:hidden bg-black/70" />

      <div
        ref={ref}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-24 md:pt-40 md:pb-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-800"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0) blur(0)' : 'translateY(40px) blur(4px)',
          transitionDuration: '800ms',
          transitionTimingFunction: EASE_OUT,
        }}
      >
        <div className="max-w-[680px] speakable-hero">
          <h1
            className="text-4xl md:text-6xl font-semibold leading-[1] mb-6"
            style={{
              textWrap: 'balance',
              background: 'linear-gradient(to right, #FFFFFF, #9B9B9B)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Advocacia de verdade.<br />
            Com estratégia, sem<br />
            complicação.
          </h1>

          <p className="text-base md:text-xl text-text-mute max-w-[680px] mb-8">
            Escritório de advocacia em Curitiba com foco em Direito do Trabalho,
            Penal Militar, Família, Cível e Criminal. Atendimento humano do
            primeiro WhatsApp à última audiência.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-3 py-2 text-base font-semibold text-black transition-all duration-200 hover:brightness-110 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent"
              style={{ transitionTimingFunction: EASE_OUT }}
            >
              <WhatsappLogo size={20} weight="fill" />
              Falar no WhatsApp agora
            </a>
            <a
              href="tel:+5541995817901"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-bg-elev2 px-3 py-2 text-base font-semibold text-text transition-all duration-200 hover:bg-bg-elev3 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent"
              style={{ transitionTimingFunction: EASE_OUT }}
            >
              Ligar (41) 99581-7901
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-text-mute">
            <Star size={14} weight="fill" className="text-accent" />
            <span>5,0 com 111+ avaliações no Google</span>
          </div>
        </div>

        <div className="hidden md:flex relative justify-center">
          <div className="relative w-full max-w-[460px] aspect-[3/4] rounded-2xl overflow-hidden bg-bg-navy">
            <img
              src="/hall.jpg"
              alt="Logo do escritório Bruno Siqueira e vista do hall de entrada no Edifício Maurício Caillet, Centro de Curitiba"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
