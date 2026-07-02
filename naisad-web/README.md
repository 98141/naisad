# NAISAD Web

Sitio web corporativo de **NAISAD** — "Cuida tu hogar".

Tipo de proyecto: **frontend estático**. Sin backend, sin APIs, sin base de datos, sin ecommerce, sin carrito ni pasarela de pago.

## Stack

- React 19
- Vite
- CSS global modular (`variables.css`, `global.css`, `responsive.css`)
- react-helmet-async (SEO)
- lucide-react (íconos)

## Instalación

```bash
npm install
```

## Comandos

```bash
npm run dev       # entorno de desarrollo
npm run build     # build de producción
npm run preview   # previsualizar el build de producción
```

## Estructura

```
src/
├── components/
│   ├── layout/   # Header, Footer, Layout
│   ├── ui/       # Button, SectionTitle, Card, WhatsAppButton
│   └── seo/      # SEO
├── data/         # Datos provisionales (empresa, productos, servicios, valores, galería)
├── pages/        # Home
├── sections/     # Secciones de la home (Hero, Nosotros, Productos, Servicios, Valores, Galería, Contacto)
└── styles/       # Estilos globales (variables, global, responsive)
```

## Despliegue en Vercel

Proyecto listo para desplegarse como sitio estático:

1. Subir el repositorio a GitHub.
2. Importar el proyecto en Vercel.
3. Framework detectado automáticamente: **Vite**.
4. Build command: `npm run build` — Output directory: `dist`.

No requiere variables de entorno ni configuración adicional (`vercel.json`), ya que es un sitio de una sola página con navegación por anclas.

## Optimización y rendimiento

- Sitio estático, sin backend ni llamadas a APIs.
- Secciones secundarias (Productos, Servicios, Valores, Galería, Contacto) cargan con `React.lazy` + `Suspense`, generando chunks separados y reduciendo el bundle inicial. El Hero carga de forma normal para cuidar el LCP.
- Imágenes con `loading="lazy"`, `width`/`height` y `alt` descriptivo, salvo el logo del Hero/Header que carga de forma eager por ser contenido above-the-fold.
- Componentes pequeños y organizados por responsabilidad (`components/ui`, `components/layout`, `sections`, `data`).
- Preparado para desplegar en Vercel sin configuración adicional.
- Recomendación futura: al incorporar imágenes reales, convertirlas a **WebP/AVIF** para reducir peso y mejorar Core Web Vitals.

## Notas

- Todos los textos e imágenes son provisionales y deben reemplazarse con contenido real de NAISAD antes de la presentación final.
- `robots.txt` y `sitemap.xml` están preparados en `public/` con el dominio provisional `https://www.naisad.com/`.
