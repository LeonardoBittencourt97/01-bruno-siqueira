import { useWordReveal } from '../hooks/useWordReveal'
import { EASE_OUT } from '../lib/motion'

const LINE_1 = 'Cada caso é um projeto de vida.'
const LINE_2 = 'A gente cuida do seu com a seriedade que ele merece.'

const allWords = [...LINE_1.split(' '), ...LINE_2.split(' ')]

export default function TaglineReveal() {
  const { containerRef, activeCount, registerWord } = useWordReveal()

  return (
    <section className="py-24 md:py-32">
      <div
        ref={containerRef}
        className="mx-auto max-w-4xl px-6 text-center"
      >
        <p className="text-4xl md:text-6xl font-semibold leading-[1.15]" style={{ textWrap: 'balance' }}>
          {allWords.map((word, i) => (
            <span
              key={i}
              ref={registerWord(i)}
              className="inline-block transition-all duration-[600ms] mr-[0.3em]"
              style={{
                opacity: i < activeCount ? 1 : 0.28,
                color: i < activeCount ? '#FFFFFF' : '#9B9B9B',
                transitionTimingFunction: EASE_OUT,
              }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
