import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TaglineReveal from './components/TaglineReveal'
import Areas from './components/Areas'
import Sobre from './components/Sobre'
import ComoFunciona from './components/ComoFunciona'
import Prova from './components/Prova'
import Numeros from './components/Numeros'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Pular para o conteúdo
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <TaglineReveal />
        <Areas />
        <Sobre />
        <ComoFunciona />
        <Prova />
        <Numeros />
        <FAQ />
        <CTAFinal />
      </main>

      <Footer />
    </>
  )
}
