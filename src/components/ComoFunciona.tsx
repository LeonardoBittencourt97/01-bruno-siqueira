import { useReveal } from '../hooks/useReveal'
import { EASE_OUT } from '../lib/motion'

const STEPS = [
  {
    num: '01',
    title: 'Você envia sua dúvida pelo WhatsApp',
    desc: 'Entre em contato pelo WhatsApp ou ligação. Explique sua situação com o máximo de detalhes que puder.',
  },
  {
    num: '02',
    title: 'Analisamos o caso e propomos a melhor estratégia',
    desc: 'O Dr. Bruno analisa os documentos e fatos, e apresenta uma estratégia clara com prazos e expectativas.',
  },
  {
    num: '03',
    title: 'Acompanhamos você até a decisão final',
    desc: 'De cada audiência a cada recurso, você é informado sobre cada etapa até o resultado do caso.',
  },
]

export default function ComoFunciona() {
  const { ref, visible } = useReveal()

  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-stripes-angled">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div
          className="transition-all duration-800"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transitionTimingFunction: EASE_OUT,
          }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 max-w-[680px]">
            Como funciona
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="relative rounded-2xl bg-bg-charcoal/80 p-6 transition-all duration-600"
                style={{
                  transitionTimingFunction: EASE_OUT,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(16px)',
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <span className="text-5xl font-semibold text-accent/20 mb-4 block">
                  {step.num}
                </span>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-base text-text-mute leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
