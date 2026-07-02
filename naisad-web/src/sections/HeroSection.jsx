import Button from '../components/ui/Button.jsx'
import { companyInfo } from '../data/company.jsx'

function HeroSection() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="section-eyebrow">Soluciones para tu hogar</span>
          <h1 id="hero-title">{companyInfo.name}, cuidamos lo que más importa</h1>
          <p className="hero-description">
            Productos y servicios pensados para el cuidado, bienestar y mantenimiento de tu
            hogar, con la confianza y cercanía que tu familia merece.
          </p>
          <div className="hero-actions">
            <Button href="#servicios" variant="primary">
              Conoce nuestros servicios
            </Button>
            <Button href="#contacto" variant="outline">
              Contáctanos
            </Button>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <img src="/logo_naisad.png" alt="" width="220" height="220" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
