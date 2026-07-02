import Button from '../components/ui/Button.jsx'
import { companyInfo } from '../data/company.jsx'

function CtaSection() {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="container cta-content">
        <h2 id="cta-title">¿Listo para conocer más sobre {companyInfo.name}?</h2>
        <p>
          Estamos preparados para brindarte información sobre nuestros productos y servicios
          para el cuidado del hogar.
        </p>
        <Button href="#contacto" variant="primary">
          Hablar con nosotros
        </Button>
      </div>
    </section>
  )
}

export default CtaSection
