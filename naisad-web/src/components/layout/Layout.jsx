import Header from './Header.jsx'
import Footer from './Footer.jsx'
import WhatsAppButton from '../ui/WhatsAppButton.jsx'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default Layout
