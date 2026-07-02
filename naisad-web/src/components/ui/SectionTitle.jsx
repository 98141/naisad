function SectionTitle({ eyebrow, title, description, id }) {
  return (
    <div className="section-title">
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

export default SectionTitle
