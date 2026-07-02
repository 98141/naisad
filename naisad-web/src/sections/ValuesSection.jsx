import SectionTitle from '../components/ui/SectionTitle.jsx'
import { values } from '../data/values.jsx'

function ValuesSection() {
  return (
    <section id="valores" className="section section-alt" aria-labelledby="valores-title">
      <div className="container">
        <SectionTitle
          id="valores-title"
          eyebrow="Valores"
          title="Lo que nos define"
          description="Los principios que guían cada producto y servicio que ofrecemos."
        />

        <div className="grid values-grid">
          {values.map((value) => (
            <div key={value.id} className="value-card premium-card">
              <h3 className="card-title">{value.title}</h3>
              <p className="card-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
