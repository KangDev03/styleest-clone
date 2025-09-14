import About from "@/features/landing-about"
import ArticlesSection from "@/features/landing-articles"
import BannerSection from "@/features/landing-banner"
import CategoriesSection from "@/features/landing-categories"
import CollaborationSection from "@/features/landing-collaboration"
import CTASection from "@/features/landing-cta"
import Footer from "@/features/landing-footer"
import Header from "@/features/landing-header"
import HeroSection from "@/features/landing-hero"
import ProductSection from "@/features/landing-product"
import TestimonialSection from "@/features/landing-testimonial"

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
      <CategoriesSection />
      <TestimonialSection />
      <ArticlesSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App