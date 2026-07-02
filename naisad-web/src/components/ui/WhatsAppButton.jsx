import { MessageCircle } from 'lucide-react'
import { companyInfo } from '../../data/company.jsx'

function WhatsAppButton() {
  const href = companyInfo.whatsapp
    ? `https://wa.me/${companyInfo.whatsapp}`
    : '#contacto'

  return (
    <a
      href={href}
      className="whatsapp-button"
      aria-label="Contactar por WhatsApp"
      target={companyInfo.whatsapp ? '_blank' : undefined}
      rel={companyInfo.whatsapp ? 'noopener noreferrer' : undefined}
    >
      <MessageCircle size={28} aria-hidden="true" />
    </a>
  )
}

export default WhatsAppButton
