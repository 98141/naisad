import SectionTitle from '../components/ui/SectionTitle.jsx'
import Card from '../components/ui/Card.jsx'
import Button from '../components/ui/Button.jsx'
import { services } from '../data/services.jsx'

function ServicesSection() {
  return (
    <section id="servicios" className="section" aria-labelledby="servicios-title">
      <div className="container">
        <SectionTitle
          id="servicios-title"
          eyebrow="Servicios"
          title="Nuestros servicios"
          description="Acompañamos a cada familia y empresa con servicios pensados para el cuidado de su hogar."
        />

        <div className="grid grid-4">
          {services.map((service) => (
            <Card key={service.id} title={service.title} description={service.description} />
          ))}
        </div>

        <div className="cta-box">
          <p>¿Quieres conocer qué solución se adapta mejor a tu necesidad?</p>
          <Button href="#contacto" variant="primary">
            Solicitar información
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
