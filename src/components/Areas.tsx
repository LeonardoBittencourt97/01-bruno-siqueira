import { Briefcase, Shield, UsersThree, Scales, Gavel } from '@phosphor-icons/react'
import { useReveal } from '../hooks/useReveal'
import { EASE_OUT } from '../lib/motion'

const AREAS = [
  {
    icon: Briefcase,
    title: 'Direito do Trabalho',
    desc: 'Rescisão, verbas rescisórios, assédio moral e discriminatório, acidentes de trabalho e mais.',
  },
  {
    icon: Shield,
    title: 'Direito Penal Militar',
    desc: 'Defesa em conselhos de disciplina, auditorias militares e processos na Justiça Militar.',
  },
  {
    icon: UsersThree,
    title: 'Direito de Família',
    desc: 'Divórcio, pensão alimentícia, guarda, administração de bens e inventário.',
  },
  {
    icon: Scales,
    title: 'Direito Cível',
    desc: 'Contratos, indenizações, responsabilidade civil e questões patrimoniais.',
  },
  {
    icon: Gavel,
    title: 'Direito Criminal',
    desc: 'Defesa em inquéritos, ações penais, habeas corpus e recursos em segunda instância.',
  },
]

export default function Areas() {
  const { ref, visible } = useReveal()

  return (
    <section id="areas" className="py-24 md:py-32">
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
            Áreas de atuação
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AREAS.map((area) => (
              <AreaCard key={area.title} {...area} visible={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AreaCard({
  icon: Icon,
  title,
  desc,
  visible,
}: {
  icon: typeof Briefcase
  title: string
  desc: string
  visible: boolean
}) {
  return (
    <article
      className="group rounded-2xl bg-bg-elev2 p-6 transition-all duration-200 hover:bg-bg-elev3 hover:-translate-y-0.5"
      style={{
        transitionTimingFunction: EASE_OUT,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transitionDuration: '600ms',
      }}
      tabIndex={0}
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-bg-elev3 text-accent transition-all duration-200 group-hover:scale-110 group-hover:text-accent-2">
        <Icon size={24} weight="regular" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-base text-text-mute leading-relaxed">{desc}</p>
    </article>
  )
}
