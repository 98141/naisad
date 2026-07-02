import { companyInfo, navLinks } from '../../data/company.jsx'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img
            src="/logo_naisad.png"
            alt={companyInfo.name}
            width="120"
            height="34"
            loading="lazy"
          />
          <p className="footer-slogan">{companyInfo.slogan}</p>
        </div>

        <nav className="footer-links" aria-label="Enlaces rápidos">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container footer-bottom">
        <p>
          © {year} {companyInfo.name}. Todos los derechos reservados.
        </p>
        <p className="footer-note">Sitio web desarrollado para presentación corporativa.</p>
      </div>
    </footer>
  )
}

export default Footer
