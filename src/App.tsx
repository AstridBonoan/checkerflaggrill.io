import { About } from './components/About'
import { FeaturedItems } from './components/FeaturedItems'
import { Footer } from './components/Footer'
import { FullMenu } from './components/FullMenu'
import { Hero } from './components/Hero'
import { LocationContact } from './components/LocationContact'
import { MenuPreview } from './components/MenuPreview'
import { Navbar } from './components/Navbar'
import { OrderSection } from './components/OrderSection'
import { PageSection } from './components/PageSection'
import { QuickInfoBar } from './components/QuickInfoBar'
import { StickyOrderCTA } from './components/StickyOrderCTA'
import { Watermark } from './components/Watermark'

function App() {
  return (
    <div className="relative min-h-screen">
      <Watermark />
      <div className="relative z-10">
        <Navbar />
        <main className="pb-20 md:pb-0">
          <Hero />
          <PageSection bg="light">
            <QuickInfoBar />
          </PageSection>
          <PageSection bg="white">
            <OrderSection />
          </PageSection>
          <PageSection bg="white">
            <MenuPreview />
          </PageSection>
          <PageSection bg="light">
            <FeaturedItems />
          </PageSection>
          <PageSection bg="white">
            <FullMenu />
          </PageSection>
          <PageSection bg="white">
            <About />
          </PageSection>
          <PageSection bg="light">
            <LocationContact />
          </PageSection>
        </main>
        <PageSection bg="dark" onDark>
          <Footer />
        </PageSection>
        <StickyOrderCTA />
      </div>
    </div>
  )
}

export default App
