import { Phone, Mail, MapPin } from "lucide-react";
import { companyInfo, navLinks } from "../../data/company.jsx";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            src="/logo_naisad.png"
            alt={companyInfo.name}
            width="120"
            height="34"
            loading="lazy"
          />
          <p className="footer-slogan">{companyInfo.slogan}</p>
          <p className="footer-description">{companyInfo.description}</p>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Enlaces rápidos</h3>
          <nav aria-label="Enlaces rápidos">
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Contacto</h3>
          <ul className="footer-contact-list">
            <li>
              <Phone aria-hidden="true" size={18} />
              <span>{companyInfo.phone || "Teléfono próximamente"}</span>
            </li>
            <li>
              <Mail aria-hidden="true" size={18} />
              <span>{companyInfo.email || "seleccion@naisad.com.co"}</span>
            </li>
            <li>
              <MapPin aria-hidden="true" size={18} />
              <span>
                {companyInfo.address ||
                  "direcccion, Centro empresarial Oikos - Tocancipá"}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {year} {companyInfo.name}. Todos los derechos reservados.
        </p>
        <p className="footer-note">
          Diseño y desarrollo.{" "}
          <a
            href="https://armandomora.com.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Armando Mora
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
