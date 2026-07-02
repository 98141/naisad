function Button({ children, href, onClick, variant = 'primary', className = '' }) {
  const classes = `btn btn-${variant} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
