function Card({ title, description, icon, image, children }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} loading="lazy" className="card-image" />}
      {icon && !image && <div className="card-icon">{icon}</div>}
      <h3 className="card-title">{title}</h3>
      {description && <p className="card-description">{description}</p>}
      {children}
    </div>
  )
}

export default Card
