import SectionTitle from '../components/ui/SectionTitle.jsx'
import { gallery } from '../data/gallery.jsx'

function GalleryItem({ item }) {
  if (!item.src) {
    return (
      <div className="placeholder-media" aria-hidden="true">
        <span>{item.title}</span>
      </div>
    )
  }

  if (item.type === 'video') {
    return (
      <video
        className="gallery-media"
        src={item.src}
        preload="none"
        controls
        aria-label={item.alt}
      />
    )
  }

  return (
    <img
      className="gallery-media"
      src={item.src}
      alt={item.alt}
      loading="lazy"
      width="320"
      height="220"
    />
  )
}

function GallerySection() {
  return (
    <section id="galeria" className="section" aria-labelledby="galeria-title">
      <div className="container">
        <SectionTitle
          id="galeria-title"
          eyebrow="Galería"
          title="Nuestra galería"
          description="Espacio preparado para mostrar imágenes y videos reales de nuestros productos, servicios y equipo."
        />

        <div className="grid gallery-grid">
          {gallery.map((item) => (
            <figure key={item.id} className="gallery-card">
              <GalleryItem item={item} />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
