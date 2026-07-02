import SEO from '../components/seo/SEO.jsx'
import Layout from '../components/layout/Layout.jsx'
import HeroSection from '../sections/HeroSection.jsx'
import AboutSection from '../sections/AboutSection.jsx'
import ProductsSection from '../sections/ProductsSection.jsx'
import ServicesSection from '../sections/ServicesSection.jsx'

function Home() {
  return (
    <>
      <SEO />
      <Layout>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ServicesSection />
        {/* ValuesSection */}
        {/* GallerySection */}
        {/* ContactSection */}
      </Layout>
    </>
  )
}

export default Home
