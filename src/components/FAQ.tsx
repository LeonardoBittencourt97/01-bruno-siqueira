import { useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'
import { useReveal } from '../hooks/useReveal'
import { EASE_OUT } from '../lib/motion'

const FAQ_ITEMS = [
  {
    q: 'Quais áreas do direito vocês atendem?',
    a: 'Trabalhista, Penal Militar, Família, Cível e Criminal.',
  },
  {
    q: 'O sigilo do caso é garantido?',
    a: 'Sim. O sigilo profissional é obrigação do advogado, regida pelo Estatuto da OAB. Nada do que você compartilhar sai do escritório.',
  },
  {
    q: 'Quanto custa a primeira consulta?',
    a: 'Cada caso é avaliado de forma individual. Antes de qualquer compromisso, o valor é combinado com transparência.',
  },
  {
    q: 'Atendem clientes de outros estados?',
    a: 'Sim. Fazemos atendimento online para qualquer estado do Brasil.',
  },
  {
    q: 'O escritório fica onde?',
    a: 'Centro de Curitiba. Edifício Maurício Caillet, R. Mal. Deodoro 450. Fácil acesso por transporte público, com estacionamento no próprio prédio.',
  },
  {
    q: 'Tem estacionamento?',
    a: 'Sim. O edifício tem vaga para clientes.',
  },
  {
    q: 'Como marco uma consulta?',
    a: 'Pelo WhatsApp (41) 99581-7901 ou por ligação. Envie sua dúvida ou peça um horário.',
  },
  {
    q: 'Vocês realmente atuam com processo militar?',
    a: 'Sim. Direito Penal Militar é uma das áreas principais do escritório. Trabalhamos com conselhos de disciplina, auditorias militares e processos na Justiça Militar.',
  },
]

export default function FAQ() {
  const { ref, visible } = useReveal()

  return (
    <section id="faq" className="py-24 md:py-32 bg-stripes-vertical">
      <div ref={ref} className="mx-auto max-w-3xl px-6">
        <div
          className="transition-all duration-800"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transitionTimingFunction: EASE_OUT,
          }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Perguntas frequentes
          </h2>

          <div className="space-y-2">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={item.q}
                {...item}
                visible={visible}
                delay={i * 60}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQItem({
  q,
  a,
  visible,
  delay,
}: {
  q: string
  a: string
  visible: boolean
  delay: number
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-2xl bg-bg-charcoal/80 transition-all duration-600"
      style={{
        transitionTimingFunction: EASE_OUT,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left text-base font-semibold transition-colors duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-2xl"
        style={{ transitionTimingFunction: EASE_OUT }}
        aria-expanded={open}
      >
        {q}
        <CaretDown
          size={16}
          weight="regular"
          className="shrink-0 ml-4 transition-transform duration-200"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transitionTimingFunction: EASE_OUT,
          }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '200px' : '0',
          opacity: open ? 1 : 0,
          transitionTimingFunction: EASE_OUT,
        }}
      >
        <p className="px-6 pb-4 text-sm text-text-mute leading-relaxed">{a}</p>
      </div>
    </div>
  )
}
