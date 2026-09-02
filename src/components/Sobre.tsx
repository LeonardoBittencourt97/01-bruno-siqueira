import { useReveal } from '../hooks/useReveal'
import { EASE_OUT } from '../lib/motion'

export default function Sobre() {
  const { ref, visible } = useReveal()

  return (
    <section id="sobre" className="py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-800"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transitionTimingFunction: EASE_OUT,
          }}
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-bg-elev1">
            <img
              src="/equipe.jpg"
              alt="Equipe e setup do escritório de advocacia Bruno Siqueira"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 max-w-[680px]">
              Quem é o Dr. Bruno Siqueira
            </h2>
            <p className="text-base text-text-mute leading-relaxed mb-4">
              Advogado inscrito na OAB/PR com atuação focada em quem realmente
              precisa de orientação jurídica: pessoas que estão passando por
              momentos difíceis e precisam de alguém que entenda o caso e
              explique tudo com clareza.
            </p>
            <p className="text-base text-text-mute leading-relaxed mb-4">
              O escritório nasceu com uma ideia simples: oferecer atendimento
              humano, sem juridiquês, com estratégia pensada para cada etapa
              do processo. Do primeiro WhatsApp à decisão final, o cliente
              acompanha tudo de perto.
            </p>
            <p className="text-base text-text-mute leading-relaxed">
              Com 5,0 estrelas em avaliações reais no Google, o compromisso é
              com a qualidade do trabalho e com a confiança de quem confia
              o caso ao escritório.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
