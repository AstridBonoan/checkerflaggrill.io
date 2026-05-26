import { About } from './components/About'
import { FeaturedItems } from './components/FeaturedItems'
import { Footer } from './components/Footer'
import { FullMenu } from './components/FullMenu'
import { Hero } from './components/Hero'
import { LocationContact } from './components/LocationContact'
import { MenuPreview } from './components/MenuPreview'
import { Navbar } from './components/Navbar'
import { QuickInfoBar } from './components/QuickInfoBar'
import { StickyOrderCTA } from './components/StickyOrderCTA'

function App() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <QuickInfoBar />
        <MenuPreview />
        <FeaturedItems />
        <FullMenu />
        <About />
        <LocationContact />
      </main>
      <Footer />
      <StickyOrderCTA />
    </>
  )
}

export default App
