import { lazy, Suspense } from 'react'
import SEO from '../components/seo/SEO.jsx'
import Layout from '../components/layout/Layout.jsx'
import SectionLoader from '../components/ui/SectionLoader.jsx'
import HeroSection from '../sections/HeroSection.jsx'
import AboutSection from '../sections/AboutSection.jsx'
import CtaSection from '../sections/CtaSection.jsx'

const ProductsSection = lazy(() => import('../sections/ProductsSection.jsx'))
const ServicesSection = lazy(() => import('../sections/ServicesSection.jsx'))
const ValuesSection = lazy(() => import('../sections/ValuesSection.jsx'))
const GallerySection = lazy(() => import('../sections/GallerySection.jsx'))
const ContactSection = lazy(() => import('../sections/ContactSection.jsx'))

function Home() {
  return (
    <>
      <SEO />
      <Layout>
        <HeroSection />
        <AboutSection />
        <Suspense fallback={<SectionLoader />}>
          <ProductsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ValuesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <GallerySection />
        </Suspense>
        <CtaSection />
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </Layout>
    </>
  )
}

export default Home
