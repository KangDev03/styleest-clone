import About from "@/features/landing-about"
import Header from "@/features/landing-header"
import HeroSection from "@/features/landing-hero"

function App() {
  return (
    <div className="min-h-screen flex-col">
      <div className="bg-[url(/images/hero-image.png)] relative w-full h-[800px] bg-cover bg-center bg-no-repeat z-5">
        <Header />
        <HeroSection />
      </div>
      <About />
    </div>
  )
}

export default App