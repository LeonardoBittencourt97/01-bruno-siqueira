import { Star } from '@phosphor-icons/react'
import { useReveal } from '../hooks/useReveal'
import { EASE_OUT } from '../lib/motion'

const TESTIMONIALS = [
  {
    name: 'Gabriel Buck',
    initials: 'GB',
    color: 'bg-accent/20 text-accent',
    text: 'Melhor escolha que você pode fazer. Estou com casos em andamento mas todo o atendimento, atenção e profissionalismo até aqui tem superado as expectativas. Recomendo 101%.',
  },
  {
    name: 'Eduardo Lopes',
    initials: 'EL',
    color: 'bg-blue-500/20 text-blue-400',
    text: 'Ótimo!! Me manteve informado sobre todas as fases do processo. Extremamente profissional. Recomendo!',
  },
  {
    name: 'Davi Alcântara',
    initials: 'DA',
    color: 'bg-emerald-500/20 text-emerald-400',
    text: 'Tive o prazer de trabalhar com o Dr. Bruno em dois processos e só tenho a agradecer pelo excelente trabalho realizado. Em ambos os casos, obtivemos êxito.',
  },
  {
    name: 'Luciana Brambilla',
    initials: 'LB',
    color: 'bg-purple-500/20 text-purple-400',
    text: 'Excelente Profissional. Sempre disposto a atender, com paciência, sanando as dúvidas e trazendo as possibilidades jurídicas do caso.',
  },
  {
    name: 'Dayane Gomes dos Santos',
    initials: 'DG',
    color: 'bg-rose-500/20 text-rose-400',
    text: 'Parabéns ao Dr. Bruno pela excelência no atendimento, me deu todo suporte em um momento difícil da minha vida, sou muito grata pelo cuidado e atenção.',
  },
  {
    name: 'Lucas Buck',
    initials: 'LuB',
    color: 'bg-amber-500/20 text-amber-400',
    text: 'Ao Dr Bruno e sua equipe, obrigado! Resolveram meu caso em apenas dois dias de forma agilizada e assertiva.',
  },
]

export default function Prova() {
  const { ref, visible } = useReveal()

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-stripes-diagonal">
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
            O que nossos clientes dizem
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <article
                key={t.name}
                className="rounded-2xl bg-bg-charcoal/80 p-6 transition-all duration-600"
                style={{
                  transitionTimingFunction: EASE_OUT,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(16px)',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold ${t.color}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={10} weight="fill" className="text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-text-mute leading-relaxed">"{t.text}"</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
