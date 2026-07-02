import { ShieldCheck, HeartHandshake, Users } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle.jsx'

const highlights = [
  {
    id: 'compromiso',
    icon: ShieldCheck,
    title: 'Compromiso con el hogar',
  },
  {
    id: 'calidad',
    icon: HeartHandshake,
    title: 'Calidad y confianza',
  },
  {
    id: 'atencion',
    icon: Users,
    title: 'Atención cercana',
  },
]

function AboutSection() {
  return (
    <section id="nosotros" className="section" aria-labelledby="nosotros-title">
      <div className="container about-layout">
        <div>
          <SectionTitle
            id="nosotros-title"
            eyebrow="Nosotros"
            title="Quiénes somos"
            description="En NAISAD trabajamos para ofrecer soluciones pensadas para el cuidado, bienestar y mantenimiento del hogar. Nuestro compromiso es brindar confianza, cercanía y calidad en cada producto y servicio."
          />

          <div className="about-highlights">
            {highlights.map(({ id, icon: Icon, title }) => (
              <div key={id} className="about-highlight">
                <Icon aria-hidden="true" color="var(--color-primary)" />
                <span>{title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual" aria-hidden="true" />
      </div>
    </section>
  )
}

export default AboutSection
