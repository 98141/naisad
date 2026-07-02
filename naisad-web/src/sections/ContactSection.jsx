import { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import Button from '../components/ui/Button.jsx'
import { companyInfo } from '../data/company.jsx'

const initialForm = { name: '', email: '', phone: '', message: '' }

function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section id="contacto" className="section section-alt" aria-labelledby="contacto-title">
      <div className="container contact-layout">
        <div className="contact-info">
          <SectionTitle
            id="contacto-title"
            eyebrow="Contacto"
            title="Hablemos de tu hogar"
            description="Escríbenos y con gusto te ayudaremos a encontrar la solución que necesitas."
          />

          <ul className="contact-info-list">
            <li>
              <Phone aria-hidden="true" size={20} />
              <span>{companyInfo.phone || 'Teléfono próximamente'}</span>
            </li>
            <li>
              <Mail aria-hidden="true" size={20} />
              <span>{companyInfo.email || 'Correo próximamente'}</span>
            </li>
            <li>
              <MapPin aria-hidden="true" size={20} />
              <span>{companyInfo.address || 'Dirección próximamente'}</span>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" variant="primary" className="form-submit">
            Enviar mensaje
          </Button>

          {submitted && (
            <p className="form-message" role="status">
              Gracias por contactarnos. Pronto nos comunicaremos contigo.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactSection
