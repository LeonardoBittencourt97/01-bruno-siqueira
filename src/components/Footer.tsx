import { WhatsappLogo, InstagramLogo, FacebookLogo, MapPin, Clock, EnvelopeSimple } from '@phosphor-icons/react'

const WHATSAPP_URL =
  'https://wa.me/5541995817901?text=Ol%C3%A1%20Dr.%20Bruno%2C%20gostaria%20de%20agendar%20uma%20consulta.'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="text-lg font-semibold mb-4">
              <span className="text-accent">BS</span> Bruno Siqueira
            </p>
            <p className="text-sm text-text-mute leading-relaxed">
              Escritório de advocacia em Curitiba. Atuação em Direito do
              Trabalho, Penal Militar, Família, Cível e Criminal.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4">Contato</p>
            <div className="space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-mute transition-colors duration-200 hover:text-accent"
              >
                <WhatsappLogo size={14} weight="fill" />
                WhatsApp
              </a>
              <a
                href="mailto:contato@advocaciabrunosiqueira.com"
                className="flex items-center gap-2 text-sm text-text-mute transition-colors duration-200 hover:text-accent"
              >
                <EnvelopeSimple size={14} weight="regular" />
                contato@advocaciabrunosiqueira.com
              </a>
              <a
                href="tel:+5541995817901"
                className="flex items-center gap-2 text-sm text-text-mute transition-colors duration-200 hover:text-accent"
              >
                +55 (41) 99581-7901
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4">Endereço</p>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-text-mute">
                <MapPin size={14} weight="regular" className="shrink-0 mt-0.5" />
                <span>Edifício Maurício Caillet<br />R. Mal. Deodoro, 450<br />Centro, Curitiba - PR<br />80010-010</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-mute">
                <Clock size={14} weight="regular" />
                <span>Seg a Sex · Fecha 19:00</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4">Redes sociais</p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/advocaciabrunosiqueira/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-bg-charcoal text-text-mute transition-all duration-200 hover:text-accent hover:bg-bg-elev3"
                aria-label="Instagram"
              >
                <InstagramLogo size={18} weight="regular" />
              </a>
              <a
                href="https://www.facebook.com/AdvocaciaBrunoSiqueira"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-bg-charcoal text-text-mute transition-all duration-200 hover:text-accent hover:bg-bg-elev3"
                aria-label="Facebook"
              >
                <FacebookLogo size={18} weight="regular" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-bg-charcoal text-text-mute transition-all duration-200 hover:text-accent hover:bg-bg-elev3"
                aria-label="WhatsApp"
              >
                <WhatsappLogo size={18} weight="fill" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-mute">
            © {new Date().getFullYear()} Escritório de Advocacia Bruno Siqueira. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-text-mute transition-colors duration-200 hover:text-text">
              Política de Privacidade
            </a>
            <a href="#" className="text-xs text-text-mute transition-colors duration-200 hover:text-text">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
