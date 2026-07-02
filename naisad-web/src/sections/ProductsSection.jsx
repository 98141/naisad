import SectionTitle from '../components/ui/SectionTitle.jsx'
import Card from '../components/ui/Card.jsx'
import { products } from '../data/products.jsx'

function ProductsSection() {
  return (
    <section id="productos" className="section section-alt" aria-labelledby="productos-title">
      <div className="container">
        <SectionTitle
          id="productos-title"
          eyebrow="Productos"
          title="Nuestros productos"
          description="Una selección provisional de productos pensados para el cuidado integral de tu hogar."
        />

        <div className="grid grid-4">
          {products.map((product) => (
            <Card key={product.id} title={product.title} description={product.description}>
              <a href="#contacto" className="card-link">
                Ver más información
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
