import { companyInfo } from "../data/company.jsx";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-media">
        {/* Imagen cargada sin lazy loading a propósito: es contenido above-the-fold (LCP) */}
        <img
          className="hero-image"
          src="/imagenes/personal.jpeg"
          alt={`Equipo de ${companyInfo.name} unido frente a sus instalaciones`}
          width="960"
          height="698"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-overlay" aria-hidden="true" />

        <article className="hero-card">
          <span
            className="hero-card-shape hero-card-shape-a"
            aria-hidden="true"
          />
          <span
            className="hero-card-shape hero-card-shape-b"
            aria-hidden="true"
          />
          <p className="hero-card-title">Soluciones para tu hogar</p>
        </article>
      </div>

      <div className="hero-content">
        <h1 id="hero-title">{companyInfo.name}, cuidamos lo que más importa</h1>
        <p className="hero-description">
          Productos y servicios pensados para el cuidado, bienestar y
          mantenimiento de tu hogar, con la confianza y cercanía que tu familia
          merece.
        </p>
      </div>
    </section>
  );
}

export default Hero;
