import { Helmet } from 'react-helmet-async'

const DEFAULTS = {
  title: 'NAISAD | Cuida tu hogar',
  description:
    'NAISAD ofrece productos y servicios pensados para el cuidado, bienestar y mantenimiento del hogar.',
  keywords: 'naisad, cuida tu hogar, productos para el hogar, servicios para el hogar',
  image: '/logo_naisad.png',
  url: 'https://www.naisad.com/',
}

function SEO({ title, description, keywords, image, url }) {
  const finalTitle = title ? `${title} | NAISAD` : DEFAULTS.title
  const finalDescription = description || DEFAULTS.description
  const finalKeywords = keywords || DEFAULTS.keywords
  const finalImage = image || DEFAULTS.image
  const finalUrl = url || DEFAULTS.url

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={finalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={finalUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
    </Helmet>
  )
}

export default SEO
