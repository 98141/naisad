import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { companyInfo, navLinks } from '../../data/company.jsx'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="header-logo" onClick={closeMenu}>
          <img src="/logo_naisad.png" alt={companyInfo.name} width="140" height="40" />
        </a>

        <button
          type="button"
          className="header-toggle"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="main-nav"
          className={`header-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Navegación principal"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
