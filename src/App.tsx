import About from "@/features/landing-about"
import BannerSection from "@/features/landing-banner"
import CollaborationSection from "@/features/landing-collaboration"
import Header from "@/features/landing-header"
import HeroSection from "@/features/landing-hero"
import ProductSection from "@/features/landing-product"

function App() {
  return (
    <div className="min-h-screen flex-col">
      <div className="bg-[url(/images/hero-image.png)] relative w-full h-[800px] bg-cover bg-center bg-no-repeat z-5 overflow-hidden">
        <Header />
        <HeroSection />
      </div>
      <About />
      <CollaborationSection />
      <ProductSection />
      <BannerSection />
    </div>
  )
}

export default App