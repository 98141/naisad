function Card({ title, description, icon, image, children }) {
  return (
    <div className="card premium-card">
      {/* Al reemplazar por imágenes reales, usar formato WebP/AVIF para reducir peso */}
      {image && (
        <img
          src={image}
          alt={title}
          loading="lazy"
          width="400"
          height="250"
          className="card-image"
        />
      )}
      {icon && !image && <div className="card-icon">{icon}</div>}
      <h3 className="card-title">{title}</h3>
      {description && <p className="card-description">{description}</p>}
      {children}
    </div>
  )
}

export default Card
