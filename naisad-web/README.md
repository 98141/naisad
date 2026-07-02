# NAISAD Web

Sitio web corporativo de NAISAD — "Cuida tu hogar".

Proyecto **frontend estático**, sin backend, sin APIs, sin carrito ni pasarela de pago. Preparado para desplegarse en Vercel.

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
npm run preview   # previsualizar el build
```

## Estructura

```
src/
├── components/
│   ├── layout/   # Header, Footer, Layout
│   ├── ui/       # Button, SectionTitle, Card, WhatsAppButton
│   └── seo/      # SEO
├── data/         # Datos provisionales (empresa, productos, servicios)
├── pages/        # Home
├── sections/     # Secciones de la home (Hero, About, Products, Services...)
└── styles/       # Estilos globales
```

## Notas

- Todos los textos e imágenes son provisionales y deben reemplazarse con contenido real de NAISAD.
- Proyecto listo para desplegar como sitio estático en Vercel.
