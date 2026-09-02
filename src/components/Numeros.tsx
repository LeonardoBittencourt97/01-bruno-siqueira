import { useReveal } from '../hooks/useReveal'
import { EASE_OUT } from '../lib/motion'

const NUMBERS = [
  { value: '5,0', label: 'Avaliação no Google' },
  { value: '11+', label: 'Avaliações reais' },
  { value: '5', label: 'Áreas de atuação' },
  { value: 'Curitiba', label: 'Centro - PR' },
]

export default function Numeros() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-800"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transitionTimingFunction: EASE_OUT,
          }}
        >
          {NUMBERS.map((n, i) => (
            <div
              key={n.label}
              className="text-center transition-all duration-600"
              style={{
                transitionTimingFunction: EASE_OUT,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <p className="text-4xl md:text-5xl font-semibold text-accent mb-2">{n.value}</p>
              <p className="text-sm text-text-mute">{n.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
